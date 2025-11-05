/**
 * Storybook integration validation for generated stories
 */

import * as fs from "fs-extra";
import { existsSync } from "fs";
import * as path from "path";
import * as ts from "typescript";
import { ValidationResult } from "../types/index.js";

export interface StorybookValidationOptions {
  checkStoryStructure?: boolean;
  validateImports?: boolean;
  checkMetaConfiguration?: boolean;
  validateStoryExports?: boolean;
}

export class StorybookValidator {
  private projectRoot: string;
  private storybookConfigPath: string;

  constructor(projectRoot: string = process.cwd()) {
    this.projectRoot = projectRoot;
    this.storybookConfigPath = this.findStorybookConfig();
  }

  /**
   * Validate Storybook story file
   */
  async validateStory(
    storyPath: string,
    options: StorybookValidationOptions = {}
  ): Promise<ValidationResult> {
    const {
      checkStoryStructure = true,
      validateImports = true,
      checkMetaConfiguration = true,
      validateStoryExports = true,
    } = options;

    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      // Check if story file exists
      if (!(await fs.pathExists(storyPath))) {
        errors.push(`Story file not found: ${storyPath}`);
        return { isValid: false, errors };
      }

      const storyContent = await fs.readFile(storyPath, "utf-8");
      const sourceFile = ts.createSourceFile(
        storyPath,
        storyContent,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS
      );

      // 1. Validate story structure
      if (checkStoryStructure) {
        const structureResult = this.validateStoryStructure(sourceFile, storyContent);
        if (!structureResult.isValid) {
          errors.push(...structureResult.errors);
        }
        if (structureResult.warnings) {
          warnings.push(...structureResult.warnings);
        }
      }

      // 2. Validate imports
      if (validateImports) {
        const importResult = await this.validateStoryImports(
          sourceFile,
          path.dirname(storyPath)
        );
        if (!importResult.isValid) {
          errors.push(...importResult.errors);
        }
        if (importResult.warnings) {
          warnings.push(...importResult.warnings);
        }
      }

      // 3. Validate Meta configuration
      if (checkMetaConfiguration) {
        const metaResult = this.validateMetaConfiguration(sourceFile);
        if (!metaResult.isValid) {
          errors.push(...metaResult.errors);
        }
        if (metaResult.warnings) {
          warnings.push(...metaResult.warnings);
        }
      }

      // 4. Validate story exports
      if (validateStoryExports) {
        const exportResult = this.validateStoryExports(sourceFile);
        if (!exportResult.isValid) {
          errors.push(...exportResult.errors);
        }
        if (exportResult.warnings) {
          warnings.push(...exportResult.warnings);
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
          `Story validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate story by component name
   */
  async validateStoryByComponent(componentName: string): Promise<ValidationResult> {
    const storyPath = this.getStoryPath(componentName);
    return this.validateStory(storyPath);
  }

  /**
   * Validate all stories in the stories directory
   */
  async validateAllStories(): Promise<ValidationResult> {
    try {
      const storiesDir = this.getStoriesDirectory();

      if (!(await fs.pathExists(storiesDir))) {
        return {
          isValid: false,
          errors: [`Stories directory not found: ${storiesDir}`],
        };
      }

      const files = await fs.readdir(storiesDir);
      const storyFiles = files.filter(
        (file) => file.endsWith(".stories.tsx") || file.endsWith(".stories.ts")
      );

      if (storyFiles.length === 0) {
        return {
          isValid: true,
          errors: [],
          warnings: ["No story files found in stories directory"],
        };
      }

      const results = await Promise.all(
        storyFiles.map((file) => this.validateStory(path.join(storiesDir, file)))
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
          `Failed to validate all stories: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Check if Storybook configuration is valid
   */
  async validateStorybookConfig(): Promise<ValidationResult> {
    try {
      const errors: string[] = [];
      const warnings: string[] = [];

      if (!(await fs.pathExists(this.storybookConfigPath))) {
        errors.push(`Storybook configuration not found: ${this.storybookConfigPath}`);
        return { isValid: false, errors };
      }

      // Check if stories directory is configured
      const storiesDir = this.getStoriesDirectory();
      if (!(await fs.pathExists(storiesDir))) {
        warnings.push(`Stories directory not found: ${storiesDir}`);
      }

      // Basic configuration validation
      try {
        const configContent = await fs.readFile(this.storybookConfigPath, "utf-8");

        // Check for required configuration elements
        if (!configContent.includes("stories")) {
          errors.push("Storybook configuration missing stories configuration");
        }

        if (!configContent.includes("addons")) {
          warnings.push("Storybook configuration missing addons configuration");
        }
      } catch (error) {
        errors.push(
          `Failed to read Storybook configuration: ${error instanceof Error ? error.message : String(error)}`
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
          `Storybook configuration validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate story structure and required elements
   */
  private validateStoryStructure(
    sourceFile: ts.SourceFile,
    content: string
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check for required imports
    const requiredImports = ["@storybook/react", "Meta", "StoryObj"];
    const imports = this.extractImports(sourceFile);

    const hasStorybookImport = imports.some((imp) => imp.includes("@storybook/react"));
    if (!hasStorybookImport) {
      errors.push("Story file must import from @storybook/react");
    }

    // Check for Meta and StoryObj types
    const hasMetaType = content.includes("Meta<") || content.includes("Meta =");
    const hasStoryObjType =
      content.includes("StoryObj<") || content.includes("StoryObj =");

    if (!hasMetaType) {
      errors.push("Story file must define Meta type");
    }

    if (!hasStoryObjType) {
      warnings.push("Story file should use StoryObj type for better type safety");
    }

    // Check for default export (Meta)
    const exports = this.extractExports(sourceFile);
    if (!exports.hasDefaultExport) {
      errors.push("Story file must have a default export (Meta configuration)");
    }

    // Check for at least one story export
    if (exports.namedExports.length === 0) {
      errors.push("Story file must export at least one story");
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings: warnings.length > 0 ? warnings : undefined,
    };
  }

  /**
   * Validate story imports
   */
  private async validateStoryImports(
    sourceFile: ts.SourceFile,
    storyDir: string
  ): Promise<ValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];

    const imports = this.extractImports(sourceFile);

    for (const importPath of imports) {
      // Skip node_modules imports
      if (!importPath.startsWith(".") && !importPath.startsWith("/")) {
        continue;
      }

      // Resolve relative imports
      const resolvedPath = path.resolve(storyDir, importPath);
      const possibleExtensions = [".tsx", ".ts", ".js", ".jsx"];

      let found = false;
      for (const ext of possibleExtensions) {
        if (await fs.pathExists(resolvedPath + ext)) {
          found = true;
          break;
        }
      }

      // Check for index files
      if (!found) {
        for (const ext of possibleExtensions) {
          if (await fs.pathExists(path.join(resolvedPath, `index${ext}`))) {
            found = true;
            break;
          }
        }
      }

      if (!found) {
        errors.push(`Cannot resolve import: ${importPath}`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings: warnings.length > 0 ? warnings : undefined,
    };
  }

  /**
   * Validate Meta configuration
   */
  private validateMetaConfiguration(sourceFile: ts.SourceFile): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    let hasTitle = false;
    let hasComponent = false;
    let hasParameters = false;

    const visit = (node: ts.Node) => {
      // Look for Meta object configuration
      if (ts.isObjectLiteralExpression(node)) {
        node.properties.forEach((prop) => {
          if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name)) {
            const propName = prop.name.text;

            switch (propName) {
              case "title":
                hasTitle = true;
                break;
              case "component":
                hasComponent = true;
                break;
              case "parameters":
                hasParameters = true;
                break;
            }
          }
        });
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    if (!hasTitle) {
      errors.push("Meta configuration must include a title");
    }

    if (!hasComponent) {
      errors.push("Meta configuration must include a component reference");
    }

    if (!hasParameters) {
      warnings.push(
        "Meta configuration should include parameters for better documentation"
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings: warnings.length > 0 ? warnings : undefined,
    };
  }

  /**
   * Validate story exports
   */
  private validateStoryExports(sourceFile: ts.SourceFile): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    const exports = this.extractExports(sourceFile);

    // Check for Default story
    const hasDefaultStory = exports.namedExports.some(
      (name) => name.toLowerCase() === "default" || name === "Default"
    );

    if (!hasDefaultStory) {
      warnings.push("Story file should include a Default story");
    }

    // Validate story naming conventions
    exports.namedExports.forEach((exportName) => {
      if (exportName !== "default" && exportName !== "Default") {
        // Check if story name follows PascalCase
        if (!/^[A-Z][a-zA-Z0-9]*$/.test(exportName)) {
          warnings.push(`Story export '${exportName}' should use PascalCase naming`);
        }
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings: warnings.length > 0 ? warnings : undefined,
    };
  }

  private findStorybookConfig(): string {
    const possiblePaths = [
      path.join(this.projectRoot, ".storybook", "main.ts"),
      path.join(this.projectRoot, ".storybook", "main.js"),
      path.join(this.projectRoot, "apps", "web", ".storybook", "main.ts"),
      path.join(this.projectRoot, "apps", "web", ".storybook", "main.js"),
    ];

    for (const configPath of possiblePaths) {
      if (existsSync(configPath)) {
        return configPath;
      }
    }

    // Default fallback
    return path.join(this.projectRoot, ".storybook", "main.ts");
  }

  private getStoriesDirectory(): string {
    // Check common stories directory locations
    const possibleDirs = [
      path.join(this.projectRoot, "apps", "web", "stories"),
      path.join(this.projectRoot, "stories"),
      path.join(this.projectRoot, "src", "stories"),
    ];

    for (const dir of possibleDirs) {
      if (existsSync(dir)) {
        return dir;
      }
    }

    // Default fallback
    return path.join(this.projectRoot, "apps", "web", "stories");
  }

  private getStoryPath(componentName: string): string {
    const storiesDir = this.getStoriesDirectory();
    return path.join(storiesDir, `${componentName}.stories.tsx`);
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

  private extractExports(sourceFile: ts.SourceFile): {
    hasDefaultExport: boolean;
    namedExports: string[];
  } {
    let hasDefaultExport = false;
    const namedExports: string[] = [];

    const visit = (node: ts.Node) => {
      // Check for default export
      if (ts.isExportAssignment(node) && !node.isExportEquals) {
        hasDefaultExport = true;
      }

      // Check for export default declaration
      if (
        (ts.isFunctionDeclaration(node) ||
          ts.isClassDeclaration(node) ||
          ts.isVariableStatement(node)) &&
        node.modifiers?.some(
          (mod) =>
            mod.kind === ts.SyntaxKind.ExportKeyword &&
            node.modifiers?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword)
        )
      ) {
        hasDefaultExport = true;
      }

      // Check for named exports
      if (ts.isExportDeclaration(node)) {
        if (node.exportClause && ts.isNamedExports(node.exportClause)) {
          node.exportClause.elements.forEach((element) => {
            namedExports.push(element.name.text);
          });
        }
      }

      // Check for exported variable declarations
      if (
        ts.isVariableStatement(node) &&
        node.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword)
      ) {
        node.declarationList.declarations.forEach((decl) => {
          if (ts.isIdentifier(decl.name)) {
            namedExports.push(decl.name.text);
          }
        });
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    return {
      hasDefaultExport,
      namedExports,
    };
  }
}
