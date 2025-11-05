/**
 * Main validation engine that orchestrates all validation types
 */

import {
  ValidationResult,
  ValidationEngine as IValidationEngine,
} from "../types/index.js";
import { TypeScriptValidator } from "./typescript-validator.js";
import { ExportChainValidator } from "./export-chain-validator.js";
import { StorybookValidator } from "./storybook-validator.js";
import { LintingValidator } from "./linting-validator.js";

export interface ValidationEngineOptions {
  projectRoot?: string;
  enableTypeScriptValidation?: boolean;
  enableExportChainValidation?: boolean;
  enableStorybookValidation?: boolean;
  enableLintingValidation?: boolean;
  autofix?: boolean;
  strict?: boolean;
}

export interface ComprehensiveValidationResult extends ValidationResult {
  typeScriptResult?: ValidationResult;
  exportChainResult?: ValidationResult;
  storybookResult?: ValidationResult;
  lintingResult?: ValidationResult;
  summary: {
    totalChecks: number;
    passedChecks: number;
    failedChecks: number;
    warningCount: number;
  };
}

export class ValidationEngine implements IValidationEngine {
  private typeScriptValidator: TypeScriptValidator;
  private exportChainValidator: ExportChainValidator;
  private storybookValidator: StorybookValidator;
  private lintingValidator: LintingValidator;
  private options: ValidationEngineOptions;

  constructor(options: ValidationEngineOptions = {}) {
    this.options = {
      projectRoot: process.cwd(),
      enableTypeScriptValidation: true,
      enableExportChainValidation: true,
      enableStorybookValidation: true,
      enableLintingValidation: true,
      autofix: false,
      strict: false,
      ...options,
    };

    this.typeScriptValidator = new TypeScriptValidator({
      strict: this.options.strict,
    });

    this.exportChainValidator = new ExportChainValidator(this.options.projectRoot);
    this.storybookValidator = new StorybookValidator(this.options.projectRoot);
    this.lintingValidator = new LintingValidator(this.options.projectRoot);
  }

  /**
   * Validate TypeScript compilation for a file
   */
  async validateTypeScriptCompilation(filePath: string): Promise<ValidationResult> {
    if (!this.options.enableTypeScriptValidation) {
      return { isValid: true, errors: [] };
    }

    try {
      return await this.typeScriptValidator.validateFile(filePath);
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
   * Validate export chain for a component
   */
  async validateExportChain(
    section: string,
    componentName: string
  ): Promise<ValidationResult> {
    if (!this.options.enableExportChainValidation) {
      return { isValid: true, errors: [] };
    }

    try {
      return await this.exportChainValidator.validateExportChain(section, componentName);
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
   * Validate Storybook integration for a story
   */
  async validateStorybookIntegration(storyPath: string): Promise<ValidationResult> {
    if (!this.options.enableStorybookValidation) {
      return { isValid: true, errors: [] };
    }

    try {
      return await this.storybookValidator.validateStory(storyPath);
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Storybook validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
      };
    }
  }

  /**
   * Validate linting for a file
   */
  async validateLinting(filePath: string): Promise<ValidationResult> {
    if (!this.options.enableLintingValidation) {
      return { isValid: true, errors: [] };
    }

    try {
      return await this.lintingValidator.validateFile(filePath, {
        autofix: this.options.autofix,
      });
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
   * Comprehensive validation for a component (async version)
   */
  async validateComponent(
    section: string,
    componentName: string
  ): Promise<ComprehensiveValidationResult> {
    const results: Partial<ComprehensiveValidationResult> = {
      errors: [],
      warnings: [],
    };

    let totalChecks = 0;
    let passedChecks = 0;
    let failedChecks = 0;
    let warningCount = 0;

    try {
      // 1. TypeScript validation
      if (this.options.enableTypeScriptValidation) {
        totalChecks++;
        const componentPath = this.getComponentPath(section, componentName);
        results.typeScriptResult =
          await this.typeScriptValidator.validateFile(componentPath);

        if (results.typeScriptResult.isValid) {
          passedChecks++;
        } else {
          failedChecks++;
          results.errors!.push(...results.typeScriptResult.errors);
        }

        if (results.typeScriptResult.warnings) {
          warningCount += results.typeScriptResult.warnings.length;
          results.warnings!.push(...results.typeScriptResult.warnings);
        }
      }

      // 2. Export chain validation
      if (this.options.enableExportChainValidation) {
        totalChecks++;
        results.exportChainResult = await this.exportChainValidator.validateExportChain(
          section,
          componentName
        );

        if (results.exportChainResult.isValid) {
          passedChecks++;
        } else {
          failedChecks++;
          results.errors!.push(...results.exportChainResult.errors);
        }

        if (results.exportChainResult.warnings) {
          warningCount += results.exportChainResult.warnings.length;
          results.warnings!.push(...results.exportChainResult.warnings);
        }
      }

      // 3. Storybook validation
      if (this.options.enableStorybookValidation) {
        totalChecks++;
        const storyPath = this.getStoryPath(componentName);
        results.storybookResult = await this.storybookValidator.validateStory(storyPath);

        if (results.storybookResult.isValid) {
          passedChecks++;
        } else {
          failedChecks++;
          results.errors!.push(...results.storybookResult.errors);
        }

        if (results.storybookResult.warnings) {
          warningCount += results.storybookResult.warnings.length;
          results.warnings!.push(...results.storybookResult.warnings);
        }
      }

      // 4. Linting validation
      if (this.options.enableLintingValidation) {
        totalChecks++;
        const componentPath = this.getComponentPath(section, componentName);
        results.lintingResult = await this.lintingValidator.validateFile(componentPath, {
          autofix: this.options.autofix,
          checkFormatting: true,
        });

        if (results.lintingResult.isValid) {
          passedChecks++;
        } else {
          failedChecks++;
          results.errors!.push(...results.lintingResult.errors);
        }

        if (results.lintingResult.warnings) {
          warningCount += results.lintingResult.warnings.length;
          results.warnings!.push(...results.lintingResult.warnings);
        }
      }

      return {
        isValid: failedChecks === 0,
        errors: results.errors!,
        warnings: results.warnings!.length > 0 ? results.warnings : undefined,
        typeScriptResult: results.typeScriptResult,
        exportChainResult: results.exportChainResult,
        storybookResult: results.storybookResult,
        lintingResult: results.lintingResult,
        summary: {
          totalChecks,
          passedChecks,
          failedChecks,
          warningCount,
        },
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Comprehensive validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
        summary: {
          totalChecks,
          passedChecks,
          failedChecks: totalChecks,
          warningCount,
        },
      };
    }
  }

  /**
   * Validate multiple components
   */
  async validateComponents(
    components: Array<{ section: string; componentName: string }>
  ): Promise<ComprehensiveValidationResult> {
    const results = await Promise.all(
      components.map(({ section, componentName }) =>
        this.validateComponent(section, componentName)
      )
    );

    const allErrors = results.flatMap((result) => result.errors);
    const allWarnings = results.flatMap((result) => result.warnings || []);

    const summary = results.reduce(
      (acc, result) => ({
        totalChecks: acc.totalChecks + result.summary.totalChecks,
        passedChecks: acc.passedChecks + result.summary.passedChecks,
        failedChecks: acc.failedChecks + result.summary.failedChecks,
        warningCount: acc.warningCount + result.summary.warningCount,
      }),
      { totalChecks: 0, passedChecks: 0, failedChecks: 0, warningCount: 0 }
    );

    return {
      isValid: results.every((result) => result.isValid),
      errors: allErrors,
      warnings: allWarnings.length > 0 ? allWarnings : undefined,
      summary,
    };
  }

  /**
   * Validate entire project structure
   */
  async validateProject(): Promise<ComprehensiveValidationResult> {
    try {
      const errors: string[] = [];
      const warnings: string[] = [];
      let totalChecks = 0;
      let passedChecks = 0;
      let failedChecks = 0;
      let warningCount = 0;

      // Validate Storybook configuration
      if (this.options.enableStorybookValidation) {
        totalChecks++;
        const storybookConfigResult =
          await this.storybookValidator.validateStorybookConfig();

        if (storybookConfigResult.isValid) {
          passedChecks++;
        } else {
          failedChecks++;
          errors.push(...storybookConfigResult.errors);
        }

        if (storybookConfigResult.warnings) {
          warningCount += storybookConfigResult.warnings.length;
          warnings.push(...storybookConfigResult.warnings);
        }
      }

      // Validate all stories
      if (this.options.enableStorybookValidation) {
        totalChecks++;
        const allStoriesResult = await this.storybookValidator.validateAllStories();

        if (allStoriesResult.isValid) {
          passedChecks++;
        } else {
          failedChecks++;
          errors.push(...allStoriesResult.errors);
        }

        if (allStoriesResult.warnings) {
          warningCount += allStoriesResult.warnings.length;
          warnings.push(...allStoriesResult.warnings);
        }
      }

      return {
        isValid: failedChecks === 0,
        errors,
        warnings: warnings.length > 0 ? warnings : undefined,
        summary: {
          totalChecks,
          passedChecks,
          failedChecks,
          warningCount,
        },
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [
          `Project validation failed: ${error instanceof Error ? error.message : String(error)}`,
        ],
        summary: {
          totalChecks: 1,
          passedChecks: 0,
          failedChecks: 1,
          warningCount: 0,
        },
      };
    }
  }

  /**
   * Auto-fix issues where possible
   */
  async autoFixComponent(
    section: string,
    componentName: string
  ): Promise<ValidationResult> {
    try {
      const errors: string[] = [];
      const warnings: string[] = [];

      // Auto-fix linting issues
      if (this.options.enableLintingValidation) {
        const componentPath = this.getComponentPath(section, componentName);
        const fixResult = await this.lintingValidator.fixFile(componentPath, {
          autofix: true,
          checkFormatting: true,
        });

        if (!fixResult.isValid) {
          errors.push(...fixResult.errors);
        }

        if (fixResult.warnings) {
          warnings.push(...fixResult.warnings);
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

  private getComponentPath(section: string, componentName: string): string {
    return `${this.options.projectRoot}/packages/ui/components/patterns/${section}/${componentName}.tsx`;
  }

  private getStoryPath(componentName: string): string {
    return `${this.options.projectRoot}/apps/web/stories/${componentName}.stories.tsx`;
  }
}
