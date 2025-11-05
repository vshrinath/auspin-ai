/**
 * TypeScript compilation validation for generated components
 */

import * as ts from "typescript";
import * as fs from "fs-extra";
import { existsSync } from "fs";
import * as path from "path";
import { ValidationResult } from "../types/index.js";

export interface TypeScriptValidationOptions {
  configPath?: string;
  checkImports?: boolean;
  strict?: boolean;
}

export class TypeScriptValidator {
  private compilerOptions: ts.CompilerOptions;
  private configPath: string;

  constructor(options: TypeScriptValidationOptions = {}) {
    this.configPath = options.configPath || this.findTsConfig();
    this.compilerOptions = this.loadCompilerOptions();

    // Override with stricter options for validation
    if (options.strict) {
      this.compilerOptions = {
        ...this.compilerOptions,
        strict: true,
        noImplicitAny: true,
        noImplicitReturns: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
      };
    }
  }

  /**
   * Validate TypeScript compilation for a single file
   */
  async validateFile(filePath: string): Promise<ValidationResult> {
    try {
      if (!(await fs.pathExists(filePath))) {
        return {
          isValid: false,
          errors: [`File not found: ${filePath}`],
        };
      }

      const sourceCode = await fs.readFile(filePath, "utf-8");
      return this.validateCode(sourceCode, filePath);
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Failed to read file ${filePath}: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate TypeScript compilation for multiple files
   */
  async validateFiles(filePaths: string[]): Promise<ValidationResult> {
    const results = await Promise.all(
      filePaths.map((filePath) => this.validateFile(filePath))
    );

    const allErrors = results.flatMap((result) => result.errors);
    const allWarnings = results.flatMap((result) => result.warnings || []);

    return {
      isValid: results.every((result) => result.isValid),
      errors: allErrors,
      warnings: allWarnings.length > 0 ? allWarnings : undefined,
    };
  }

  /**
   * Validate TypeScript code string
   */
  validateCode(sourceCode: string, fileName: string = "temp.tsx"): ValidationResult {
    try {
      // Create a source file
      const sourceFile = ts.createSourceFile(
        fileName,
        sourceCode,
        ts.ScriptTarget.Latest,
        true,
        fileName.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
      );

      // Create a program with the source file
      const program = ts.createProgram([fileName], this.compilerOptions, {
        getSourceFile: (name) => (name === fileName ? sourceFile : undefined),
        writeFile: () => {},
        getCurrentDirectory: () => process.cwd(),
        getDirectories: () => [],
        fileExists: (name) => name === fileName,
        readFile: (name) => (name === fileName ? sourceCode : undefined),
        getCanonicalFileName: (name) => name,
        useCaseSensitiveFileNames: () => true,
        getNewLine: () => "\n",
        getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
      });

      // Get diagnostics
      const diagnostics = [
        ...program.getSyntacticDiagnostics(sourceFile),
        ...program.getSemanticDiagnostics(sourceFile),
      ];

      const errors: string[] = [];
      const warnings: string[] = [];

      diagnostics.forEach((diagnostic) => {
        const message = this.formatDiagnostic(diagnostic, sourceCode);

        if (diagnostic.category === ts.DiagnosticCategory.Error) {
          errors.push(message);
        } else if (diagnostic.category === ts.DiagnosticCategory.Warning) {
          warnings.push(message);
        }
      });

      return {
        isValid: errors.length === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `TypeScript validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate import resolution for a component
   */
  async validateImports(filePath: string): Promise<ValidationResult> {
    try {
      const sourceCode = await fs.readFile(filePath, "utf-8");
      const sourceFile = ts.createSourceFile(
        filePath,
        sourceCode,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX
      );

      const imports = this.extractImports(sourceFile);
      const errors: string[] = [];
      const warnings: string[] = [];

      for (const importPath of imports) {
        const resolveResult = await this.resolveImport(
          importPath,
          path.dirname(filePath)
        );

        if (!resolveResult.resolved) {
          errors.push(`Cannot resolve import: ${importPath}`);
        } else if (resolveResult.warning) {
          warnings.push(resolveResult.warning);
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
          `Import validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Check if a component can be imported without errors
   */
  async validateComponentImport(
    componentPath: string,
    importingFrom: string
  ): Promise<ValidationResult> {
    try {
      const relativePath = path.relative(path.dirname(importingFrom), componentPath);
      const importPath = relativePath.startsWith(".")
        ? relativePath
        : `./${relativePath}`;

      // Create a test import statement
      const testCode = `import Component from '${importPath.replace(/\.tsx?$/, "")}';`;

      const testFile = path.join(path.dirname(importingFrom), "test-import.tsx");
      const result = this.validateCode(testCode, testFile);

      return {
        isValid: result.isValid,
        errors: result.errors.map((error) => `Import validation: ${error}`),
        warnings: result.warnings,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Component import validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  private findTsConfig(): string {
    let currentDir = process.cwd();

    while (currentDir !== path.dirname(currentDir)) {
      const configPath = path.join(currentDir, "tsconfig.json");
      if (existsSync(configPath)) {
        return configPath;
      }
      currentDir = path.dirname(currentDir);
    }

    // Default fallback
    return path.join(process.cwd(), "tsconfig.json");
  }

  private loadCompilerOptions(): ts.CompilerOptions {
    try {
      if (existsSync(this.configPath)) {
        const configFile = ts.readConfigFile(this.configPath, ts.sys.readFile);
        const parsedConfig = ts.parseJsonConfigFileContent(
          configFile.config,
          ts.sys,
          path.dirname(this.configPath)
        );
        return parsedConfig.options;
      }
    } catch (error) {
      console.warn(`Failed to load TypeScript config from ${this.configPath}:`, error);
    }

    // Default compiler options
    return {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      jsx: ts.JsxEmit.React,
      strict: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
    };
  }

  private formatDiagnostic(diagnostic: ts.Diagnostic, sourceCode: string): string {
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");

    if (diagnostic.file && diagnostic.start !== undefined) {
      const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
        diagnostic.start
      );
      const lineText = sourceCode.split("\n")[line] || "";

      return `Line ${line + 1}:${character + 1} - ${message}\n  ${lineText.trim()}`;
    }

    return message;
  }

  private extractImports(sourceFile: ts.SourceFile): string[] {
    const imports: string[] = [];

    const visit = (node: ts.Node) => {
      if (
        ts.isImportDeclaration(node) &&
        node.moduleSpecifier &&
        ts.isStringLiteral(node.moduleSpecifier)
      ) {
        imports.push(node.moduleSpecifier.text);
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return imports;
  }

  private async resolveImport(
    importPath: string,
    fromDir: string
  ): Promise<{ resolved: boolean; warning?: string }> {
    try {
      // Handle relative imports
      if (importPath.startsWith(".")) {
        const resolvedPath = path.resolve(fromDir, importPath);
        const extensions = [".ts", ".tsx", ".js", ".jsx"];

        for (const ext of extensions) {
          if (await fs.pathExists(resolvedPath + ext)) {
            return { resolved: true };
          }
        }

        // Check for index files
        for (const ext of extensions) {
          if (await fs.pathExists(path.join(resolvedPath, `index${ext}`))) {
            return { resolved: true };
          }
        }

        return { resolved: false };
      }

      // Handle node_modules imports
      try {
        require.resolve(importPath, { paths: [fromDir] });
        return { resolved: true };
      } catch {
        return {
          resolved: false,
        };
      }
    } catch (error) {
      return {
        resolved: false,
        warning: `Error resolving import ${importPath}: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }
}
