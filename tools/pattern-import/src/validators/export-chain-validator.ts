/**
 * Export chain validation for component accessibility
 */

import * as fs from "fs-extra";
import * as path from "path";
import * as ts from "typescript";
import { ValidationResult } from "../types/index.js";

export interface ExportChainValidationOptions {
  checkBarrelExports?: boolean;
  checkTopLevelExports?: boolean;
  validateImportPaths?: boolean;
}

export class ExportChainValidator {
  private projectRoot: string;

  constructor(projectRoot: string = process.cwd()) {
    this.projectRoot = projectRoot;
  }

  /**
   * Validate complete export chain for a component
   */
  async validateExportChain(
    section: string,
    componentName: string,
    options: ExportChainValidationOptions = {}
  ): Promise<ValidationResult> {
    const {
      checkBarrelExports = true,
      checkTopLevelExports = true,
      validateImportPaths = true,
    } = options;

    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      // 1. Check if component file exists
      const componentPath = this.getComponentPath(section, componentName);
      if (!(await fs.pathExists(componentPath))) {
        errors.push(`Component file not found: ${componentPath}`);
        return { isValid: false, errors };
      }

      // 2. Validate component exports default export
      const componentExportResult = await this.validateComponentExport(componentPath);
      if (!componentExportResult.isValid) {
        errors.push(...componentExportResult.errors);
      }
      if (componentExportResult.warnings) {
        warnings.push(...componentExportResult.warnings);
      }

      // 3. Check barrel exports (section-level index.ts)
      if (checkBarrelExports) {
        const barrelResult = await this.validateBarrelExport(section, componentName);
        if (!barrelResult.isValid) {
          errors.push(...barrelResult.errors);
        }
        if (barrelResult.warnings) {
          warnings.push(...barrelResult.warnings);
        }
      }

      // 4. Check top-level exports (packages/ui/index.ts)
      if (checkTopLevelExports) {
        const topLevelResult = await this.validateTopLevelExport(section);
        if (!topLevelResult.isValid) {
          errors.push(...topLevelResult.errors);
        }
        if (topLevelResult.warnings) {
          warnings.push(...topLevelResult.warnings);
        }
      }

      // 5. Validate import paths work end-to-end
      if (validateImportPaths) {
        const importResult = await this.validateImportPath(section, componentName);
        if (!importResult.isValid) {
          errors.push(...importResult.errors);
        }
        if (importResult.warnings) {
          warnings.push(...importResult.warnings);
        }
      }

      return {
        isValid: errors.length === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Export chain validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate that a component properly exports a default export
   */
  async validateComponentExport(componentPath: string): Promise<ValidationResult> {
    try {
      const sourceCode = await fs.readFile(componentPath, "utf-8");
      const sourceFile = ts.createSourceFile(
        componentPath,
        sourceCode,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX
      );

      const exports = this.extractExports(sourceFile);
      const errors: string[] = [];
      const warnings: string[] = [];

      // Check for default export
      if (!exports.hasDefaultExport) {
        errors.push(
          `Component ${path.basename(componentPath)} must have a default export`
        );
      }

      // Check for named exports (optional warning)
      if (exports.namedExports.length === 0 && exports.hasDefaultExport) {
        warnings.push(
          `Component ${path.basename(componentPath)} only has default export, consider adding named exports for better tree-shaking`
        );
      }

      // Validate export syntax
      if (exports.hasDefaultExport && !exports.isValidDefaultExport) {
        errors.push(
          `Component ${path.basename(componentPath)} has invalid default export syntax`
        );
      }

      return {
        isValid: errors.length === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Failed to validate component export: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate barrel export (section-level index.ts)
   */
  async validateBarrelExport(
    section: string,
    componentName: string
  ): Promise<ValidationResult> {
    try {
      const barrelPath = this.getBarrelPath(section);
      const errors: string[] = [];
      const warnings: string[] = [];

      if (!(await fs.pathExists(barrelPath))) {
        errors.push(`Barrel export file not found: ${barrelPath}`);
        return { isValid: false, errors };
      }

      const barrelContent = await fs.readFile(barrelPath, "utf-8");

      // Check if component is exported in barrel
      const componentExportPattern = new RegExp(`export.*${componentName}.*from`, "i");
      const hasComponentExport = componentExportPattern.test(barrelContent);

      if (!hasComponentExport) {
        errors.push(
          `Component ${componentName} is not exported in barrel file: ${barrelPath}`
        );
      }

      // Validate export syntax
      const exportValidation = this.validateBarrelSyntax(barrelContent, componentName);
      if (!exportValidation.isValid) {
        errors.push(...exportValidation.errors);
      }
      if (exportValidation.warnings) {
        warnings.push(...exportValidation.warnings);
      }

      return {
        isValid: errors.length === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Failed to validate barrel export: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate top-level export (packages/ui/index.ts)
   */
  async validateTopLevelExport(section: string): Promise<ValidationResult> {
    try {
      const topLevelPath = this.getTopLevelExportPath();
      const errors: string[] = [];
      const warnings: string[] = [];

      if (!(await fs.pathExists(topLevelPath))) {
        errors.push(`Top-level export file not found: ${topLevelPath}`);
        return { isValid: false, errors };
      }

      const topLevelContent = await fs.readFile(topLevelPath, "utf-8");

      // Check if section is exported
      const sectionExportPattern = new RegExp(`export.*from.*patterns/${section}`, "i");
      const hasSectionExport = sectionExportPattern.test(topLevelContent);

      if (!hasSectionExport) {
        errors.push(
          `Section ${section} is not exported in top-level file: ${topLevelPath}`
        );
      }

      return {
        isValid: errors.length === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Failed to validate top-level export: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate that import path works end-to-end
   */
  async validateImportPath(
    section: string,
    componentName: string
  ): Promise<ValidationResult> {
    try {
      const errors: string[] = [];
      const warnings: string[] = [];

      // Test different import patterns
      const importTests = [
        // Direct component import
        {
          name: "Direct component import",
          importPath: `./packages/ui/components/patterns/${section}/${componentName}`,
          testCode: `import ${componentName} from './packages/ui/components/patterns/${section}/${componentName}';`,
        },
        // Barrel import
        {
          name: "Barrel import",
          importPath: `./packages/ui/components/patterns/${section}`,
          testCode: `import { ${componentName} } from './packages/ui/components/patterns/${section}';`,
        },
        // Top-level import
        {
          name: "Top-level import",
          importPath: `./packages/ui`,
          testCode: `import { ${componentName} } from './packages/ui';`,
        },
      ];

      for (const test of importTests) {
        try {
          const sourceFile = ts.createSourceFile(
            "test.tsx",
            test.testCode,
            ts.ScriptTarget.Latest,
            true,
            ts.ScriptKind.TSX
          );

          // Basic syntax validation
          const diagnostics = ts.getPreEmitDiagnostics(
            ts.createProgram(
              ["test.tsx"],
              {},
              {
                getSourceFile: () => sourceFile,
                writeFile: () => {},
                getCurrentDirectory: () => this.projectRoot,
                getDirectories: () => [],
                fileExists: () => true,
                readFile: () => test.testCode,
                getCanonicalFileName: (name) => name,
                useCaseSensitiveFileNames: () => true,
                getNewLine: () => "\n",
                getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
              }
            )
          );

          if (diagnostics.length > 0) {
            const syntaxErrors = diagnostics.filter(
              (d) => d.category === ts.DiagnosticCategory.Error
            );
            if (syntaxErrors.length > 0 && syntaxErrors[0]) {
              const messageText = syntaxErrors[0].messageText;
              const message =
                typeof messageText === "string"
                  ? messageText
                  : ts.flattenDiagnosticMessageText(messageText, "\n");
              warnings.push(`${test.name} may have issues: ${message}`);
            }
          }
        } catch (error) {
          warnings.push(
            `${test.name} validation failed: ${error instanceof Error ? error.message : String(error)}`
          );
        }
      }

      return {
        isValid: errors.length === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Failed to validate import paths: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate all components in a section
   */
  async validateSectionExports(section: string): Promise<ValidationResult> {
    try {
      const sectionPath = path.join(
        this.projectRoot,
        "packages",
        "ui",
        "components",
        "patterns",
        section
      );

      if (!(await fs.pathExists(sectionPath))) {
        return {
          isValid: false,
          errors: [`Section directory not found: ${sectionPath}`],
        };
      }

      const files = await fs.readdir(sectionPath);
      const componentFiles = files.filter(
        (file) => file.endsWith(".tsx") && file !== "index.ts"
      );

      const results = await Promise.all(
        componentFiles.map(async (file) => {
          const componentName = path.basename(file, ".tsx");
          return this.validateExportChain(section, componentName);
        })
      );

      const allErrors = results.flatMap((result) => result.errors);
      const allWarnings = results.flatMap((result) => result.warnings || []);

      return {
        isValid: results.every((result) => result.isValid),
        errors: allErrors,
        warnings: allWarnings.length > 0 ? allWarnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Failed to validate section exports: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  private getComponentPath(section: string, componentName: string): string {
    return path.join(
      this.projectRoot,
      "packages",
      "ui",
      "components",
      "patterns",
      section,
      `${componentName}.tsx`
    );
  }

  private getBarrelPath(section: string): string {
    return path.join(
      this.projectRoot,
      "packages",
      "ui",
      "components",
      "patterns",
      section,
      "index.ts"
    );
  }

  private getTopLevelExportPath(): string {
    return path.join(this.projectRoot, "packages", "ui", "index.ts");
  }

  private extractExports(sourceFile: ts.SourceFile): {
    hasDefaultExport: boolean;
    isValidDefaultExport: boolean;
    namedExports: string[];
  } {
    let hasDefaultExport = false;
    let isValidDefaultExport = false;
    const namedExports: string[] = [];

    const visit = (node: ts.Node) => {
      // Check for default export
      if (ts.isExportAssignment(node) && !node.isExportEquals) {
        hasDefaultExport = true;
        isValidDefaultExport = true;
      }

      // Check for export default declaration
      if (
        ts.isFunctionDeclaration(node) ||
        ts.isClassDeclaration(node) ||
        ts.isVariableStatement(node)
      ) {
        if (node.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword)) {
          if (node.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.DefaultKeyword)) {
            hasDefaultExport = true;
            isValidDefaultExport = true;
          }
        }
      }

      // Check for named exports
      if (ts.isExportDeclaration(node)) {
        if (node.exportClause && ts.isNamedExports(node.exportClause)) {
          node.exportClause.elements.forEach((element) => {
            namedExports.push(element.name.text);
          });
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    return {
      hasDefaultExport,
      isValidDefaultExport,
      namedExports,
    };
  }

  private validateBarrelSyntax(content: string, componentName: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check for proper export syntax patterns
    const validExportPatterns = [
      new RegExp(
        `export\\s+{\\s*${componentName}\\s*}\\s+from\\s+['"]\\./${componentName}['"]`,
        "i"
      ),
      new RegExp(
        `export\\s+{\\s*default\\s+as\\s+${componentName}\\s*}\\s+from\\s+['"]\\./${componentName}['"]`,
        "i"
      ),
      new RegExp(`export\\s*\\*\\s+from\\s+['"]\\./${componentName}['"]`, "i"),
    ];

    const hasValidPattern = validExportPatterns.some((pattern) => pattern.test(content));

    if (!hasValidPattern) {
      errors.push(`Invalid export syntax for ${componentName} in barrel file`);
    }

    // Check for duplicate exports
    const exportMatches = content.match(new RegExp(`export.*${componentName}`, "gi"));
    if (exportMatches && exportMatches.length > 1) {
      warnings.push(`Multiple export statements found for ${componentName}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings: warnings.length > 0 ? warnings : undefined,
    };
  }
}
