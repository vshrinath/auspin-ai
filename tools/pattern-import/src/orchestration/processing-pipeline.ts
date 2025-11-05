/**
 * Main processing pipeline for the Tailwind UI Pattern Import System
 * Orchestrates all components in correct sequence with error handling and rollback capabilities
 */

import { CSVParser } from "../parsers/csv-parser.js";
import { ComponentGenerator } from "../generators/component-generator.js";
import { TailwindUIStoryGenerator } from "../generators/story-generator.js";
import { FileSystemManagerImpl } from "../managers/file-system-manager.js";
import { ExportManagerImpl } from "../managers/export-manager.js";
import { PatternRegistryManagerImpl } from "../managers/pattern-registry-manager.js";
import { ValidationEngine } from "../validators/validation-engine.js";
import type {
  ProcessingOptions,
  ProcessingResult,
  ParsedComponent,
  GeneratedComponent,
  ValidationResult,
  FilePaths,
} from "../types/index.js";

export interface ProcessingStep {
  name: string;
  execute: () => Promise<void>;
  rollback?: () => Promise<void>;
}

export interface ProcessingContext {
  csvFilePath: string;
  parsedComponents: ParsedComponent[];
  generatedComponents: Map<string, GeneratedComponent>;
  filePaths: Map<string, FilePaths>;
  generatedFiles: string[];
  errors: string[];
  warnings: string[];
  operationId: string;
}

export interface ProgressCallback {
  (step: string, current: number, total: number, message?: string): void;
}

export class ProcessingPipeline {
  private csvParser: CSVParser;
  private componentGenerator: ComponentGenerator;
  private storyGenerator: TailwindUIStoryGenerator;
  private fileSystemManager: FileSystemManagerImpl;
  private exportManager: ExportManagerImpl;
  private registryManager: PatternRegistryManagerImpl;
  private validationEngine: ValidationEngine;
  private executedSteps: ProcessingStep[] = [];
  private progressCallback?: ProgressCallback;

  constructor() {
    this.csvParser = new CSVParser();
    this.componentGenerator = new ComponentGenerator();
    this.fileSystemManager = new FileSystemManagerImpl();
    this.storyGenerator = new TailwindUIStoryGenerator(this.fileSystemManager);
    this.exportManager = new ExportManagerImpl();
    this.registryManager = new PatternRegistryManagerImpl();
    this.validationEngine = new ValidationEngine();
  }

  setProgressCallback(callback: ProgressCallback): void {
    this.progressCallback = callback;
  }

  private reportProgress(
    step: string,
    current: number,
    total: number,
    message?: string
  ): void {
    if (this.progressCallback) {
      this.progressCallback(step, current, total, message);
    }
  }

  async processCSV(options: ProcessingOptions): Promise<ProcessingResult> {
    const context: ProcessingContext = {
      csvFilePath: options.csvFilePath,
      parsedComponents: [],
      generatedComponents: new Map(),
      filePaths: new Map(),
      generatedFiles: [],
      errors: [],
      warnings: [],
      operationId: `import_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };

    try {
      this.reportProgress("Initializing", 0, 100, "Starting import process...");

      // Step 1: Parse and validate CSV
      await this.executeStep(context, {
        name: "Parse CSV",
        execute: async () => {
          this.reportProgress("Parsing CSV", 10, 100, `Reading ${options.csvFilePath}`);

          // Validate CSV format first
          const validation = await this.csvParser.validateCSV(options.csvFilePath);
          if (!validation.isValid) {
            throw new Error(`CSV validation failed: ${validation.errors.join(", ")}`);
          }

          // Parse components
          context.parsedComponents = await this.csvParser.parseFile(options.csvFilePath);
          this.reportProgress(
            "Parsing CSV",
            20,
            100,
            `Found ${context.parsedComponents.length} components`
          );
        },
      });

      // Step 2: Validate project structure
      await this.executeStep(context, {
        name: "Validate Project Structure",
        execute: async () => {
          this.reportProgress(
            "Validating Structure",
            25,
            100,
            "Checking project structure..."
          );

          const structureValidation =
            await this.fileSystemManager.validateProjectStructure();
          if (!structureValidation.isValid) {
            throw new Error(
              `Project structure validation failed. Missing paths: ${structureValidation.missingPaths.join(", ")}`
            );
          }
        },
      });

      // Step 3: Generate components
      await this.executeStep(context, {
        name: "Generate Components",
        execute: async () => {
          this.reportProgress(
            "Generating Components",
            30,
            100,
            "Processing component code..."
          );

          for (let i = 0; i < context.parsedComponents.length; i++) {
            const parsed = context.parsedComponents[i];
            if (parsed) {
              const generated = this.componentGenerator.generateComponent(parsed);
              context.generatedComponents.set(parsed.componentName, generated);

              this.reportProgress(
                "Generating Components",
                30 + (i / context.parsedComponents.length) * 15,
                100,
                `Generated ${parsed.componentName}`
              );
            }
          }
        },
      });

      // Step 4: Create directory structure and handle versioning
      await this.executeStep(context, {
        name: "Prepare File System",
        execute: async () => {
          this.reportProgress(
            "Preparing File System",
            45,
            100,
            "Creating directories..."
          );

          const sections = new Set(context.parsedComponents.map((c) => c.section));

          for (const section of sections) {
            await this.fileSystemManager.createDirectoryStructure(section);
          }

          // Generate file paths and handle versioning
          for (const parsed of context.parsedComponents) {
            let finalComponentName = parsed.componentName;

            // Check for name conflicts and generate versioned name if needed
            const hasConflict = await this.fileSystemManager.checkNameConflict(
              parsed.componentName,
              parsed.section
            );
            if (hasConflict) {
              finalComponentName = await this.fileSystemManager.generateVersionedName(
                parsed.componentName,
                parsed.section
              );

              // Update the generated component with the new name
              const generated = context.generatedComponents.get(parsed.componentName);
              if (generated) {
                generated.metadata.component = finalComponentName;
                context.generatedComponents.delete(parsed.componentName);
                context.generatedComponents.set(finalComponentName, generated);
              }
            }

            const filePaths = this.fileSystemManager.generateFilePaths(
              parsed.section,
              finalComponentName
            );
            context.filePaths.set(finalComponentName, filePaths);
          }
        },
      });

      // Step 5: Write component files
      await this.executeStep(context, {
        name: "Write Component Files",
        execute: async () => {
          this.reportProgress(
            "Writing Components",
            50,
            100,
            "Writing component files..."
          );

          const filesToWrite: Array<{ path: string; content: string }> = [];

          for (const [componentName, generated] of context.generatedComponents) {
            const filePaths = context.filePaths.get(componentName);
            if (!filePaths) continue;

            filesToWrite.push({
              path: filePaths.component,
              content: generated.code,
            });

            context.generatedFiles.push(filePaths.component);
          }

          await this.fileSystemManager.batchWriteFiles(filesToWrite);
          this.reportProgress(
            "Writing Components",
            60,
            100,
            `Wrote ${filesToWrite.length} component files`
          );
        },
        rollback: async () => {
          // Delete created component files
          for (const filePath of context.generatedFiles) {
            try {
              await this.fileSystemManager.deleteFile?.(filePath);
            } catch (error) {
              // Log but don't fail rollback
              console.warn(`Failed to delete file during rollback: ${filePath}`);
            }
          }
        },
      });

      // Step 6: Update exports
      await this.executeStep(context, {
        name: "Update Exports",
        execute: async () => {
          this.reportProgress("Updating Exports", 65, 100, "Updating barrel exports...");

          const sections = new Set(context.parsedComponents.map((c) => c.section));

          for (const section of sections) {
            // Update section barrel exports
            const sectionComponents = Array.from(
              context.generatedComponents.keys()
            ).filter((name) => {
              const parsed = context.parsedComponents.find(
                (p) => p.componentName === name || context.filePaths.get(name)
              );
              return parsed?.section === section;
            });

            for (const componentName of sectionComponents) {
              await this.exportManager.updateSectionBarrel(section, componentName);
            }

            // Update top-level exports
            await this.exportManager.updateTopLevelExport(section);
          }

          this.reportProgress("Updating Exports", 75, 100, "Updated export files");
        },
      });

      // Step 7: Generate Storybook stories (if not skipped)
      if (!options.skipStories) {
        await this.executeStep(context, {
          name: "Generate Stories",
          execute: async () => {
            this.reportProgress(
              "Generating Stories",
              80,
              100,
              "Creating Storybook stories..."
            );

            let storyCount = 0;
            for (const [componentName, generated] of context.generatedComponents) {
              const parsed = context.parsedComponents.find(
                (p) =>
                  p.componentName === componentName ||
                  context.filePaths.get(componentName)
              );

              if (parsed) {
                const result = await this.storyGenerator.writeStoryFileSafe(
                  componentName,
                  parsed.section,
                  false
                );
                context.generatedFiles.push(result.storyPath);
                storyCount++;
              }
            }

            this.reportProgress(
              "Generating Stories",
              85,
              100,
              `Generated ${storyCount} story files`
            );
          },
        });
      }

      // Step 8: Update pattern registry
      await this.executeStep(context, {
        name: "Update Registry",
        execute: async () => {
          this.reportProgress(
            "Updating Registry",
            90,
            100,
            "Updating pattern registry..."
          );

          for (const [componentName, generated] of context.generatedComponents) {
            const parsed = context.parsedComponents.find(
              (p) =>
                p.componentName === componentName || context.filePaths.get(componentName)
            );
            const filePaths = context.filePaths.get(componentName);

            if (parsed && filePaths) {
              await this.registryManager.updateRegistry(parsed.section, {
                componentName,
                variant: parsed.variant,
                source: "Tailwind UI",
                path: filePaths.component,
                framework: "agnostic",
              });
            }
          }
        },
      });

      // Step 9: Validation (if not skipped)
      if (!options.skipValidation) {
        await this.executeStep(context, {
          name: "Validate Generated Code",
          execute: async () => {
            this.reportProgress("Validating", 95, 100, "Running validation checks...");

            const validationResults: ValidationResult[] = [];

            for (const [componentName, generated] of context.generatedComponents) {
              const parsed = context.parsedComponents.find(
                (p) =>
                  p.componentName === componentName ||
                  context.filePaths.get(componentName)
              );
              const filePaths = context.filePaths.get(componentName);

              if (parsed && filePaths) {
                // TypeScript validation
                const tsResult =
                  await this.validationEngine.validateTypeScriptCompilation(
                    filePaths.component
                  );
                validationResults.push(tsResult);

                // Export chain validation
                const exportResult = await this.validationEngine.validateExportChain(
                  parsed.section,
                  componentName
                );
                validationResults.push(exportResult);

                // Story validation (if stories were generated)
                if (!options.skipStories) {
                  const storyResult =
                    await this.validationEngine.validateStorybookIntegration(
                      filePaths.story
                    );
                  validationResults.push(storyResult);
                }
              }
            }

            // Collect validation errors and warnings
            for (const result of validationResults) {
              if (!result.isValid) {
                context.errors.push(...result.errors);
              }
              if (result.warnings) {
                context.warnings.push(...result.warnings);
              }
            }
          },
        });
      }

      this.reportProgress("Complete", 100, 100, "Import process completed successfully");

      return {
        success: context.errors.length === 0,
        processedComponents: context.parsedComponents.length,
        errors: context.errors,
        warnings: context.warnings,
        generatedFiles: context.generatedFiles,
      };
    } catch (error) {
      context.errors.push(error instanceof Error ? error.message : String(error));

      // Attempt rollback
      try {
        await this.rollback(context);
      } catch (rollbackError) {
        context.errors.push(
          `Rollback failed: ${rollbackError instanceof Error ? rollbackError.message : String(rollbackError)}`
        );
      }

      return {
        success: false,
        processedComponents: 0,
        errors: context.errors,
        warnings: context.warnings,
        generatedFiles: [],
      };
    }
  }

  private async executeStep(
    context: ProcessingContext,
    step: ProcessingStep
  ): Promise<void> {
    try {
      await step.execute();
      this.executedSteps.push(step);
    } catch (error) {
      throw new Error(
        `Step '${step.name}' failed: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  private async rollback(context: ProcessingContext): Promise<void> {
    // Execute rollback steps in reverse order
    for (let i = this.executedSteps.length - 1; i >= 0; i--) {
      const step = this.executedSteps[i];
      if (step && step.rollback) {
        try {
          await step.rollback();
        } catch (error) {
          console.warn(
            `Rollback failed for step '${step.name}': ${error instanceof Error ? error.message : String(error)}`
          );
        }
      }
    }

    this.executedSteps = [];
  }
}
