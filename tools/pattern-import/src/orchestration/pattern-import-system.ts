/**
 * Main orchestration system for the Tailwind UI Pattern Import System
 * Coordinates all components and provides the primary interface for importing patterns
 */

import { ProcessingPipeline, type ProgressCallback } from "./processing-pipeline.js";
import { ErrorHandler } from "./error-handler.js";
import { CSVParser } from "../parsers/csv-parser.js";
import { FileSystemManagerImpl } from "../managers/file-system-manager.js";
import { RegistryQueryService } from "../managers/registry-query-service.js";
import type {
  ProcessingOptions,
  ProcessingResult,
  ValidationResult,
  ParsedComponent,
} from "../types/index.js";

export interface PreviewComponent {
  section: string;
  variant: string;
  componentName: string;
  hasConflict: boolean;
  suggestedName?: string;
}

export interface RollbackResult {
  success: boolean;
  errors: string[];
}

export class PatternImportSystem {
  private pipeline: ProcessingPipeline;
  private errorHandler: ErrorHandler;
  private csvParser: CSVParser;
  private fileSystemManager: FileSystemManagerImpl;
  private registryQuery: RegistryQueryService;

  constructor() {
    this.pipeline = new ProcessingPipeline();
    this.errorHandler = new ErrorHandler();
    this.csvParser = new CSVParser();
    this.fileSystemManager = new FileSystemManagerImpl();
    this.registryQuery = new RegistryQueryService();
  }

  /**
   * Set progress callback for operation reporting
   */
  setProgressCallback(callback: ProgressCallback): void {
    this.pipeline.setProgressCallback(callback);
  }

  /**
   * Process a CSV file and import all components
   */
  async processCSV(options: ProcessingOptions): Promise<ProcessingResult> {
    let operationId: string | undefined;

    try {
      // Create error handling snapshot
      operationId = `import_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      await this.errorHandler.createSnapshot(operationId);

      // Validate input first
      const validation = await this.validateInput(options.csvFilePath);
      if (!validation.isValid) {
        return {
          success: false,
          processedComponents: 0,
          errors: validation.errors,
          warnings: validation.warnings || [],
          generatedFiles: [],
        };
      }

      // Execute the processing pipeline
      const result = await this.pipeline.processCSV(options);

      // Clean up successful operation
      if (result.success) {
        // Clean up old snapshots periodically
        await this.errorHandler.cleanup();
      }

      return result;
    } catch (error) {
      const errorContext = this.errorHandler.handleError(
        error instanceof Error ? error : new Error(String(error)),
        {
          operationId: operationId || "unknown",
          step: "processCSV",
          timestamp: new Date(),
        }
      );

      // Attempt rollback if we have an operation ID
      if (operationId) {
        try {
          await this.rollback(operationId);
        } catch (rollbackError) {
          errorContext.recoveryActions.push(
            `Manual cleanup may be required due to rollback failure: ${rollbackError instanceof Error ? rollbackError.message : String(rollbackError)}`
          );
        }
      }

      return {
        success: false,
        processedComponents: 0,
        errors: [this.errorHandler.formatError(errorContext)],
        warnings: [],
        generatedFiles: [],
      };
    }
  }

  /**
   * Validate CSV input without processing
   */
  async validateInput(csvFilePath: string): Promise<ValidationResult> {
    try {
      return await this.csvParser.validateCSV(csvFilePath);
    } catch (error) {
      return {
        isValid: false,
        errors: [error instanceof Error ? error.message : String(error)],
        warnings: [],
      };
    }
  }

  /**
   * Preview what would be imported from a CSV file
   */
  async previewImport(csvFilePath: string): Promise<PreviewComponent[]> {
    try {
      // Parse the CSV to get components
      const parsedComponents = await this.csvParser.parseFile(csvFilePath);
      const previewComponents: PreviewComponent[] = [];

      for (const parsed of parsedComponents) {
        // Check for naming conflicts
        const hasConflict = await this.fileSystemManager.checkNameConflict(
          parsed.componentName,
          parsed.section
        );

        let suggestedName: string | undefined;
        if (hasConflict) {
          suggestedName = await this.fileSystemManager.generateVersionedName(
            parsed.componentName,
            parsed.section
          );
        }

        previewComponents.push({
          section: parsed.section,
          variant: parsed.variant,
          componentName: parsed.componentName,
          hasConflict,
          suggestedName,
        });
      }

      return previewComponents;
    } catch (error) {
      throw new Error(
        `Failed to preview import: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  /**
   * Rollback a previous import operation
   */
  async rollback(operationId: string): Promise<RollbackResult> {
    try {
      return await this.errorHandler.rollback(operationId);
    } catch (error) {
      return {
        success: false,
        errors: [error instanceof Error ? error.message : String(error)],
      };
    }
  }

  /**
   * Query existing components in the registry
   */
  async queryComponents(
    options: {
      section?: string;
      searchTerm?: string;
      variant?: string;
    } = {}
  ) {
    return await this.registryQuery.queryComponents({
      section: options.section,
      searchTerm: options.searchTerm,
      variant: options.variant,
    });
  }

  /**
   * Get information about existing components in a section
   */
  async getSectionInfo(section: string) {
    const components = await this.registryQuery.queryComponents({ section });
    const existingFiles = await this.fileSystemManager.listExistingComponents(section);

    return {
      section,
      componentCount: components.components.length,
      components: components.components,
      existingFiles,
      registryPath: this.fileSystemManager.generateFilePaths(section, "dummy").registry,
    };
  }

  /**
   * Validate the current project structure
   */
  async validateProjectStructure() {
    return await this.fileSystemManager.validateProjectStructure();
  }

  /**
   * Get system status and health information
   */
  async getSystemStatus() {
    try {
      const structureValidation = await this.validateProjectStructure();
      const allSections = await this.registryQuery.getAllSections();

      let totalComponents = 0;
      const sectionInfo = [];

      for (const section of allSections) {
        const info = await this.getSectionInfo(section);
        totalComponents += info.componentCount;
        sectionInfo.push(info);
      }

      return {
        isHealthy: structureValidation.isValid,
        projectStructure: structureValidation,
        totalSections: allSections.length,
        totalComponents,
        sections: sectionInfo,
        timestamp: new Date(),
      };
    } catch (error) {
      return {
        isHealthy: false,
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date(),
      };
    }
  }

  /**
   * Clean up old operation snapshots and temporary files
   */
  async cleanup(maxAge?: number) {
    await this.errorHandler.cleanup(maxAge);
  }
}
