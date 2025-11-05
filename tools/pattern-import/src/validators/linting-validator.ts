/**
 * Linting validation for generated files
 */

import * as fs from "fs-extra";
import { existsSync } from "fs";
import * as path from "path";
import { spawn } from "child_process";
import { ValidationResult } from "../types/index.js";

export interface LintingValidationOptions {
  eslintConfigPath?: string;
  prettierConfigPath?: string;
  autofix?: boolean;
  checkFormatting?: boolean;
  customRules?: Record<string, any>;
}

export interface LintResult {
  filePath: string;
  messages: LintMessage[];
  errorCount: number;
  warningCount: number;
  fixableErrorCount: number;
  fixableWarningCount: number;
}

export interface LintMessage {
  ruleId: string | null;
  severity: 1 | 2; // 1 = warning, 2 = error
  message: string;
  line: number;
  column: number;
  nodeType?: string;
  source?: string;
  fix?: {
    range: [number, number];
    text: string;
  };
}

export class LintingValidator {
  private projectRoot: string;
  private eslintConfigPath: string;
  private prettierConfigPath: string;

  constructor(
    projectRoot: string = process.cwd(),
    options: LintingValidationOptions = {}
  ) {
    this.projectRoot = projectRoot;
    this.eslintConfigPath = options.eslintConfigPath || this.findEslintConfig();
    this.prettierConfigPath = options.prettierConfigPath || this.findPrettierConfig();
  }

  /**
   * Validate linting for a single file
   */
  async validateFile(
    filePath: string,
    options: LintingValidationOptions = {}
  ): Promise<ValidationResult> {
    try {
      if (!(await fs.pathExists(filePath))) {
        return {
          isValid: false,
          errors: [`File not found: ${filePath}`],
        };
      }

      const errors: string[] = [];
      const warnings: string[] = [];

      // Run ESLint validation
      const eslintResult = await this.runEslint(filePath, options);
      if (!eslintResult.isValid) {
        errors.push(...eslintResult.errors);
      }
      if (eslintResult.warnings) {
        warnings.push(...eslintResult.warnings);
      }

      // Run Prettier validation if enabled
      if (options.checkFormatting) {
        const prettierResult = await this.runPrettier(filePath);
        if (!prettierResult.isValid) {
          errors.push(...prettierResult.errors);
        }
        if (prettierResult.warnings) {
          warnings.push(...prettierResult.warnings);
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
          `Linting validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate linting for multiple files
   */
  async validateFiles(
    filePaths: string[],
    options: LintingValidationOptions = {}
  ): Promise<ValidationResult> {
    try {
      const results = await Promise.all(
        filePaths.map((filePath) => this.validateFile(filePath, options))
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
          `Multiple file linting validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Fix linting issues automatically
   */
  async fixFile(
    filePath: string,
    options: LintingValidationOptions = {}
  ): Promise<ValidationResult> {
    try {
      const errors: string[] = [];
      const warnings: string[] = [];

      // Run ESLint with --fix
      const eslintResult = await this.runEslint(filePath, { ...options, autofix: true });
      if (!eslintResult.isValid) {
        errors.push(...eslintResult.errors);
      }
      if (eslintResult.warnings) {
        warnings.push(...eslintResult.warnings);
      }

      // Run Prettier formatting
      if (options.checkFormatting) {
        const prettierResult = await this.formatWithPrettier(filePath);
        if (!prettierResult.isValid) {
          errors.push(...prettierResult.errors);
        }
        if (prettierResult.warnings) {
          warnings.push(...prettierResult.warnings);
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
          `Auto-fix failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate code style and formatting
   */
  async validateCodeStyle(filePath: string): Promise<ValidationResult> {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const errors: string[] = [];
      const warnings: string[] = [];

      // Basic code style checks
      const styleIssues = this.checkBasicCodeStyle(content, filePath);
      errors.push(...styleIssues.errors);
      warnings.push(...styleIssues.warnings);

      // Check for common React/TypeScript patterns
      const patternIssues = this.checkReactPatterns(content, filePath);
      warnings.push(...patternIssues.warnings);

      return {
        isValid: errors.length === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Code style validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Run ESLint on a file
   */
  private async runEslint(
    filePath: string,
    options: LintingValidationOptions = {}
  ): Promise<ValidationResult> {
    return new Promise((resolve) => {
      const eslintArgs = [
        "--format",
        "json",
        "--no-eslintrc", // Don't use default config
      ];

      // Add config if available
      if (existsSync(this.eslintConfigPath)) {
        eslintArgs.push("--config", this.eslintConfigPath);
      }

      // Add autofix if requested
      if (options.autofix) {
        eslintArgs.push("--fix");
      }

      eslintArgs.push(filePath);

      const eslint = spawn("npx", ["eslint", ...eslintArgs], {
        cwd: this.projectRoot,
        stdio: ["pipe", "pipe", "pipe"],
      });

      let stdout = "";
      let stderr = "";

      eslint.stdout.on("data", (data) => {
        stdout += data.toString();
      });

      eslint.stderr.on("data", (data) => {
        stderr += data.toString();
      });

      eslint.on("close", (code) => {
        try {
          if (stderr && !stdout) {
            resolve({
              isValid: false,
              errors: [`ESLint error: ${stderr}`],
            });
            return;
          }

          // Parse ESLint JSON output
          const results = stdout ? JSON.parse(stdout) : [];
          const errors: string[] = [];
          const warnings: string[] = [];

          if (Array.isArray(results) && results.length > 0) {
            const result = results[0];

            result.messages?.forEach((message: LintMessage) => {
              const formattedMessage = `Line ${message.line}:${message.column} - ${message.message} (${message.ruleId || "unknown"})`;

              if (message.severity === 2) {
                errors.push(formattedMessage);
              } else {
                warnings.push(formattedMessage);
              }
            });
          }

          resolve({
            isValid: errors.length === 0,
            errors,
            warnings: warnings.length > 0 ? warnings : undefined,
          });
        } catch (parseError) {
          // If ESLint is not available or config is missing, provide basic validation
          resolve(this.fallbackLinting(filePath));
        }
      });

      eslint.on("error", () => {
        // Fallback to basic linting if ESLint is not available
        resolve(this.fallbackLinting(filePath));
      });
    });
  }

  /**
   * Run Prettier on a file
   */
  private async runPrettier(filePath: string): Promise<ValidationResult> {
    return new Promise((resolve) => {
      const prettierArgs = ["--check"];

      // Add config if available
      if (existsSync(this.prettierConfigPath)) {
        prettierArgs.push("--config", this.prettierConfigPath);
      }

      prettierArgs.push(filePath);

      const prettier = spawn("npx", ["prettier", ...prettierArgs], {
        cwd: this.projectRoot,
        stdio: ["pipe", "pipe", "pipe"],
      });

      let stderr = "";

      prettier.stderr.on("data", (data) => {
        stderr += data.toString();
      });

      prettier.on("close", (code) => {
        if (code === 0) {
          resolve({ isValid: true, errors: [] });
        } else {
          resolve({
            isValid: false,
            errors: [
              `Prettier formatting issues: ${stderr || "File is not formatted correctly"}`,
            ],
          });
        }
      });

      prettier.on("error", () => {
        resolve({
          isValid: true,
          errors: [],
          warnings: ["Prettier not available, skipping format check"],
        });
      });
    });
  }

  /**
   * Format file with Prettier
   */
  private async formatWithPrettier(filePath: string): Promise<ValidationResult> {
    return new Promise((resolve) => {
      const prettierArgs = ["--write"];

      // Add config if available
      if (existsSync(this.prettierConfigPath)) {
        prettierArgs.push("--config", this.prettierConfigPath);
      }

      prettierArgs.push(filePath);

      const prettier = spawn("npx", ["prettier", ...prettierArgs], {
        cwd: this.projectRoot,
        stdio: ["pipe", "pipe", "pipe"],
      });

      let stderr = "";

      prettier.stderr.on("data", (data) => {
        stderr += data.toString();
      });

      prettier.on("close", (code) => {
        if (code === 0) {
          resolve({ isValid: true, errors: [] });
        } else {
          resolve({
            isValid: false,
            errors: [`Prettier formatting failed: ${stderr}`],
          });
        }
      });

      prettier.on("error", () => {
        resolve({
          isValid: true,
          errors: [],
          warnings: ["Prettier not available, skipping formatting"],
        });
      });
    });
  }

  /**
   * Fallback linting when ESLint is not available
   */
  private async fallbackLinting(filePath: string): Promise<ValidationResult> {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const errors: string[] = [];
      const warnings: string[] = [];

      // Basic syntax checks
      const basicChecks = this.checkBasicCodeStyle(content, filePath);
      errors.push(...basicChecks.errors);
      warnings.push(...basicChecks.warnings);

      // TypeScript/React specific checks
      const reactChecks = this.checkReactPatterns(content, filePath);
      warnings.push(...reactChecks.warnings);

      return {
        isValid: errors.length === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Fallback linting failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Basic code style checks
   */
  private checkBasicCodeStyle(
    content: string,
    filePath: string
  ): { errors: string[]; warnings: string[] } {
    const errors: string[] = [];
    const warnings: string[] = [];
    const lines = content.split("\n");

    lines.forEach((line, index) => {
      const lineNumber = index + 1;

      // Check for trailing whitespace
      if (line.endsWith(" ") || line.endsWith("\t")) {
        warnings.push(`Line ${lineNumber}: Trailing whitespace`);
      }

      // Check for mixed tabs and spaces
      if (line.includes("\t") && line.includes("  ")) {
        warnings.push(`Line ${lineNumber}: Mixed tabs and spaces`);
      }

      // Check for very long lines (over 120 characters)
      if (line.length > 120) {
        warnings.push(`Line ${lineNumber}: Line too long (${line.length} characters)`);
      }

      // Check for console.log statements
      if (line.includes("console.log") && !line.includes("//")) {
        warnings.push(`Line ${lineNumber}: console.log statement found`);
      }
    });

    // Check for missing semicolons (basic check)
    const statements = content.match(/\w+\s*=\s*[^;]+$/gm);
    if (statements) {
      warnings.push("Possible missing semicolons detected");
    }

    return { errors, warnings };
  }

  /**
   * React/TypeScript pattern checks
   */
  private checkReactPatterns(content: string, filePath: string): { warnings: string[] } {
    const warnings: string[] = [];

    // Check for proper React imports
    if (content.includes("React.") && !content.includes("import React")) {
      warnings.push("Using React namespace without importing React");
    }

    // Check for unused imports (basic check)
    const importMatches = content.match(/import\s+{([^}]+)}\s+from/g);
    if (importMatches) {
      importMatches.forEach((importStatement) => {
        const imports = importStatement.match(/{([^}]+)}/)?.[1];
        if (imports) {
          const importNames = imports.split(",").map((name) => name.trim());
          importNames.forEach((importName) => {
            if (!content.includes(importName.replace(/\s+as\s+\w+/, ""))) {
              warnings.push(`Possibly unused import: ${importName}`);
            }
          });
        }
      });
    }

    // Check for proper TypeScript types
    if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
      if (content.includes(": any")) {
        warnings.push('Usage of "any" type detected, consider using more specific types');
      }
    }

    // Check for proper component naming
    const componentMatch = content.match(/export\s+default\s+function\s+(\w+)/);
    if (componentMatch && componentMatch[1]) {
      const componentName = componentMatch[1];
      if (!/^[A-Z]/.test(componentName)) {
        warnings.push(
          `Component name "${componentName}" should start with uppercase letter`
        );
      }
    }

    return { warnings };
  }

  private findEslintConfig(): string {
    const possibleConfigs = [
      ".eslintrc.js",
      ".eslintrc.json",
      ".eslintrc.yaml",
      ".eslintrc.yml",
      "eslint.config.js",
      "eslint.config.mjs",
    ];

    for (const config of possibleConfigs) {
      const configPath = path.join(this.projectRoot, config);
      if (existsSync(configPath)) {
        return configPath;
      }
    }

    return path.join(this.projectRoot, ".eslintrc.js");
  }

  private findPrettierConfig(): string {
    const possibleConfigs = [
      ".prettierrc",
      ".prettierrc.json",
      ".prettierrc.js",
      ".prettierrc.yaml",
      ".prettierrc.yml",
      "prettier.config.js",
    ];

    for (const config of possibleConfigs) {
      const configPath = path.join(this.projectRoot, config);
      if (existsSync(configPath)) {
        return configPath;
      }
    }

    return path.join(this.projectRoot, ".prettierrc");
  }
}
