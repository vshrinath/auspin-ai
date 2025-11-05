#!/usr/bin/env node

/**
 * Command-line interface for the Tailwind UI Pattern Import System
 * Supports batch processing of CSV files with progress reporting and configuration options
 */

import { Command } from "commander";
import { promises as fs } from "fs";
import { resolve, basename } from "path";
import chalk from "chalk";
import { PatternImportSystem } from "../orchestration/pattern-import-system.js";
import type { ProcessingOptions, ProcessingResult } from "../types/index.js";

interface CLIOptions {
  input: string;
  output?: string;
  validateOnly?: boolean;
  skipStories?: boolean;
  skipValidation?: boolean;
  verbose?: boolean;
  dryRun?: boolean;
  config?: string;
}

interface CLIConfig {
  defaultOutputPath?: string;
  skipStories?: boolean;
  skipValidation?: boolean;
  validationOptions?: {
    typescript?: boolean;
    linting?: boolean;
    storybook?: boolean;
    exportChain?: boolean;
  };
}

// Simple spinner implementation
class SimpleSpinner {
  private message: string;
  private isSpinning: boolean = false;
  private interval?: NodeJS.Timeout;

  constructor(message: string) {
    this.message = message;
  }

  start(): this {
    this.isSpinning = true;
    process.stdout.write(`${this.message}...`);
    return this;
  }

  stop(): void {
    this.isSpinning = false;
    if (this.interval) {
      clearInterval(this.interval);
    }
    process.stdout.write("\n");
  }

  succeed(message?: string): void {
    this.stop();
    console.log(chalk.green(`✓ ${message || this.message}`));
  }

  fail(message?: string): void {
    this.stop();
    console.log(chalk.red(`✗ ${message || this.message}`));
  }
}

class PatternImportCLI {
  private program: Command;
  private importSystem: PatternImportSystem;
  private spinner: SimpleSpinner | null = null;

  constructor() {
    this.program = new Command();
    this.importSystem = new PatternImportSystem();
    this.setupCommands();
  }

  private setupCommands(): void {
    this.program
      .name("pattern-import")
      .description(
        "Import Tailwind UI patterns from CSV files into your component library"
      )
      .version("1.0.0");

    // Main import command
    this.program
      .command("import")
      .description("Import patterns from a CSV file")
      .argument("<csv-file>", "Path to the CSV file containing pattern data")
      .option(
        "-o, --output <path>",
        "Output directory (defaults to current project structure)"
      )
      .option("--validate-only", "Only validate the CSV file without importing")
      .option("--skip-stories", "Skip Storybook story generation")
      .option("--skip-validation", "Skip post-import validation checks")
      .option("-v, --verbose", "Enable verbose output")
      .option("--dry-run", "Show what would be imported without making changes")
      .option("-c, --config <path>", "Path to configuration file")
      .action(async (csvFile: string, options: CLIOptions) => {
        await this.handleImport(csvFile, options);
      });

    // Validate command
    this.program
      .command("validate")
      .description("Validate a CSV file format without importing")
      .argument("<csv-file>", "Path to the CSV file to validate")
      .option("-v, --verbose", "Enable verbose output")
      .action(async (csvFile: string, options: Pick<CLIOptions, "verbose">) => {
        await this.handleValidate(csvFile, options);
      });

    // List command
    this.program
      .command("list")
      .description("List components that would be imported from a CSV file")
      .argument("<csv-file>", "Path to the CSV file")
      .option("--conflicts", "Show potential naming conflicts")
      .option("-v, --verbose", "Enable verbose output")
      .action(
        async (csvFile: string, options: { conflicts?: boolean; verbose?: boolean }) => {
          await this.handleList(csvFile, options);
        }
      );

    // Rollback command
    this.program
      .command("rollback")
      .description("Rollback a previous import operation")
      .argument("<operation-id>", "Operation ID to rollback")
      .option("-v, --verbose", "Enable verbose output")
      .action(async (operationId: string, options: Pick<CLIOptions, "verbose">) => {
        await this.handleRollback(operationId, options);
      });

    // Config command
    this.program
      .command("config")
      .description("Manage CLI configuration")
      .option("--init", "Initialize a new configuration file")
      .option("--show", "Show current configuration")
      .option("--set <key=value>", "Set a configuration value")
      .action(async (options: { init?: boolean; show?: boolean; set?: string }) => {
        await this.handleConfig(options);
      });
  }

  async run(): Promise<void> {
    try {
      await this.program.parseAsync();
    } catch (error) {
      this.handleError(error);
      process.exit(1);
    }
  }

  private async handleImport(csvFile: string, options: CLIOptions): Promise<void> {
    try {
      // Load configuration
      const config = await this.loadConfig(options.config);

      // Resolve file path
      const csvPath = resolve(csvFile);

      // Check if file exists
      await this.validateFileExists(csvPath);

      if (options.verbose) {
        console.log(chalk.blue("Configuration:"));
        console.log(`  CSV File: ${csvPath}`);
        console.log(`  Output: ${options.output || "current project structure"}`);
        console.log(
          `  Skip Stories: ${options.skipStories || config.skipStories || false}`
        );
        console.log(
          `  Skip Validation: ${options.skipValidation || config.skipValidation || false}`
        );
        console.log(`  Dry Run: ${options.dryRun || false}`);
        console.log("");
      }

      // Prepare processing options
      const processingOptions: ProcessingOptions = {
        csvFilePath: csvPath,
        outputPath: options.output || config.defaultOutputPath,
        validateOnly: options.validateOnly || false,
        skipStories: options.skipStories || config.skipStories || false,
        skipValidation: options.skipValidation || config.skipValidation || false,
      };

      if (options.dryRun) {
        await this.performDryRun(processingOptions, options.verbose || false);
        return;
      }

      // Set up progress reporting
      this.setupProgressReporting(options.verbose || false);

      // Execute import
      const result = await this.importSystem.processCSV(processingOptions);

      // Report results
      this.reportResults(result, options.verbose || false);
    } catch (error) {
      this.handleError(error);
      process.exit(1);
    }
  }

  private async handleValidate(
    csvFile: string,
    options: Pick<CLIOptions, "verbose">
  ): Promise<void> {
    try {
      const csvPath = resolve(csvFile);
      await this.validateFileExists(csvPath);

      this.spinner = new SimpleSpinner("Validating CSV file").start();

      const validation = await this.importSystem.validateInput(csvPath);

      this.spinner.stop();

      if (validation.isValid) {
        console.log(chalk.green("✓ CSV file is valid"));

        if (options.verbose && validation.warnings && validation.warnings.length > 0) {
          console.log(chalk.yellow("\nWarnings:"));
          validation.warnings.forEach((warning) => {
            console.log(chalk.yellow(`  • ${warning}`));
          });
        }
      } else {
        console.log(chalk.red("✗ CSV file validation failed"));
        console.log(chalk.red("\nErrors:"));
        validation.errors.forEach((error) => {
          console.log(chalk.red(`  • ${error}`));
        });
        process.exit(1);
      }
    } catch (error) {
      if (this.spinner) this.spinner.stop();
      this.handleError(error);
      process.exit(1);
    }
  }

  private async handleList(
    csvFile: string,
    options: { conflicts?: boolean; verbose?: boolean }
  ): Promise<void> {
    try {
      const csvPath = resolve(csvFile);
      await this.validateFileExists(csvPath);

      this.spinner = new SimpleSpinner("Analyzing CSV file").start();

      const components = await this.importSystem.previewImport(csvPath);

      this.spinner.stop();

      console.log(chalk.blue(`\nFound ${components.length} components to import:\n`));

      const sections = new Map<string, typeof components>();
      components.forEach((component) => {
        if (!sections.has(component.section)) {
          sections.set(component.section, []);
        }
        sections.get(component.section)!.push(component);
      });

      for (const [section, sectionComponents] of sections) {
        console.log(chalk.cyan(`${section}:`));

        for (const component of sectionComponents) {
          let line = `  • ${component.componentName}`;

          if (options.verbose) {
            line += chalk.gray(` (${component.variant})`);
          }

          if (options.conflicts && component.hasConflict) {
            line += chalk.yellow(" [CONFLICT - will be versioned]");
          }

          console.log(line);
        }
        console.log("");
      }

      if (options.conflicts) {
        const conflicts = components.filter((c) => c.hasConflict);
        if (conflicts.length > 0) {
          console.log(
            chalk.yellow(
              `\n${conflicts.length} naming conflicts detected. These components will be automatically versioned.`
            )
          );
        }
      }
    } catch (error) {
      if (this.spinner) this.spinner.stop();
      this.handleError(error);
      process.exit(1);
    }
  }

  private async handleRollback(
    operationId: string,
    options: Pick<CLIOptions, "verbose">
  ): Promise<void> {
    try {
      this.spinner = new SimpleSpinner(`Rolling back operation ${operationId}`).start();

      const result = await this.importSystem.rollback(operationId);

      this.spinner.stop();

      if (result.success) {
        console.log(chalk.green(`✓ Successfully rolled back operation ${operationId}`));
      } else {
        console.log(chalk.red(`✗ Rollback failed for operation ${operationId}`));
        console.log(chalk.red("\nErrors:"));
        result.errors.forEach((error) => {
          console.log(chalk.red(`  • ${error}`));
        });
        process.exit(1);
      }
    } catch (error) {
      if (this.spinner) this.spinner.stop();
      this.handleError(error);
      process.exit(1);
    }
  }

  private async handleConfig(options: {
    init?: boolean;
    show?: boolean;
    set?: string;
  }): Promise<void> {
    try {
      if (options.init) {
        await this.initConfig();
      } else if (options.show) {
        await this.showConfig();
      } else if (options.set) {
        await this.setConfig(options.set);
      } else {
        console.log("Use --init, --show, or --set <key=value>");
      }
    } catch (error) {
      this.handleError(error);
      process.exit(1);
    }
  }

  private async loadConfig(configPath?: string): Promise<CLIConfig> {
    const defaultConfig: CLIConfig = {
      skipStories: false,
      skipValidation: false,
      validationOptions: {
        typescript: true,
        linting: true,
        storybook: true,
        exportChain: true,
      },
    };

    if (!configPath) {
      // Try to find config in common locations
      const commonPaths = [
        ".pattern-import.json",
        "pattern-import.config.json",
        ".config/pattern-import.json",
      ];

      for (const path of commonPaths) {
        try {
          const content = await fs.readFile(path, "utf-8");
          return { ...defaultConfig, ...JSON.parse(content) };
        } catch {
          // Continue to next path
        }
      }

      return defaultConfig;
    }

    try {
      const content = await fs.readFile(configPath, "utf-8");
      return { ...defaultConfig, ...JSON.parse(content) };
    } catch (error) {
      throw new Error(`Failed to load config file: ${configPath}`);
    }
  }

  private async validateFileExists(filePath: string): Promise<void> {
    try {
      await fs.access(filePath);
    } catch {
      throw new Error(`File not found: ${filePath}`);
    }
  }

  private setupProgressReporting(verbose: boolean): void {
    this.importSystem.setProgressCallback(
      (step: string, current: number, total: number, message?: string) => {
        if (this.spinner) {
          this.spinner.stop();
        }

        const percentage = Math.round((current / total) * 100);
        const progressBar = this.createProgressBar(current, total, 20);

        if (verbose && message) {
          this.spinner = new SimpleSpinner(
            `${step} [${progressBar}] ${percentage}% - ${message}`
          ).start();
        } else {
          this.spinner = new SimpleSpinner(
            `${step} [${progressBar}] ${percentage}%`
          ).start();
        }

        if (current >= total) {
          this.spinner.succeed(`${step} completed`);
          this.spinner = null;
        }
      }
    );
  }

  private createProgressBar(current: number, total: number, width: number): string {
    const filled = Math.round((current / total) * width);
    const empty = width - filled;
    return "█".repeat(filled) + "░".repeat(empty);
  }

  private async performDryRun(
    options: ProcessingOptions,
    verbose: boolean
  ): Promise<void> {
    console.log(chalk.blue("🔍 Dry run - no changes will be made\n"));

    const components = await this.importSystem.previewImport(options.csvFilePath);

    console.log(chalk.green(`Would import ${components.length} components:`));

    components.forEach((component) => {
      console.log(`  • ${component.section}/${component.componentName}`);
      if (verbose) {
        console.log(chalk.gray(`    Variant: ${component.variant}`));
        console.log(
          chalk.gray(
            `    Files: Component, Story${component.hasConflict ? " (versioned)" : ""}`
          )
        );
      }
    });

    console.log(chalk.blue("\nUse --no-dry-run to execute the import"));
  }

  private reportResults(result: ProcessingResult, verbose: boolean): void {
    if (result.success) {
      console.log(
        chalk.green(`\n✓ Successfully imported ${result.processedComponents} components`)
      );

      if (verbose && result.generatedFiles.length > 0) {
        console.log(chalk.blue("\nGenerated files:"));
        result.generatedFiles.forEach((file) => {
          console.log(chalk.gray(`  • ${file}`));
        });
      }

      if (result.warnings.length > 0) {
        console.log(chalk.yellow("\nWarnings:"));
        result.warnings.forEach((warning) => {
          console.log(chalk.yellow(`  • ${warning}`));
        });
      }
    } else {
      console.log(chalk.red("\n✗ Import failed"));
      console.log(chalk.red("\nErrors:"));
      result.errors.forEach((error) => {
        console.log(chalk.red(`  • ${error}`));
      });
      process.exit(1);
    }
  }

  private async initConfig(): Promise<void> {
    const defaultConfig: CLIConfig = {
      defaultOutputPath: "./packages/ui",
      skipStories: false,
      skipValidation: false,
      validationOptions: {
        typescript: true,
        linting: true,
        storybook: true,
        exportChain: true,
      },
    };

    const configPath = ".pattern-import.json";
    await fs.writeFile(configPath, JSON.stringify(defaultConfig, null, 2));
    console.log(chalk.green(`✓ Created configuration file: ${configPath}`));
  }

  private async showConfig(): Promise<void> {
    const config = await this.loadConfig();
    console.log(chalk.blue("Current configuration:"));
    console.log(JSON.stringify(config, null, 2));
  }

  private async setConfig(keyValue: string): Promise<void> {
    const [key, value] = keyValue.split("=");
    if (!key || value === undefined) {
      throw new Error("Invalid format. Use: key=value");
    }

    const config = await this.loadConfig();

    // Parse value
    let parsedValue: any = value;
    if (value === "true") parsedValue = true;
    else if (value === "false") parsedValue = false;
    else if (!isNaN(Number(value))) parsedValue = Number(value);

    // Set nested keys
    const keys = key.split(".");
    let current: any = config;

    for (let i = 0; i < keys.length - 1; i++) {
      const currentKey = keys[i];
      if (currentKey && !current[currentKey]) current[currentKey] = {};
      if (currentKey) current = current[currentKey];
    }

    const finalKey = keys[keys.length - 1];
    if (finalKey) current[finalKey] = parsedValue;

    const configPath = ".pattern-import.json";
    await fs.writeFile(configPath, JSON.stringify(config, null, 2));
    console.log(chalk.green(`✓ Updated ${key} = ${parsedValue}`));
  }

  private handleError(error: unknown): void {
    if (this.spinner) {
      this.spinner.stop();
    }

    console.error(chalk.red("\n✗ Error:"));

    if (error instanceof Error) {
      console.error(chalk.red(error.message));

      if (error.stack && process.env.DEBUG) {
        console.error(chalk.gray("\nStack trace:"));
        console.error(chalk.gray(error.stack));
      }
    } else {
      console.error(chalk.red(String(error)));
    }
  }
}

// Run CLI if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const cli = new PatternImportCLI();
  cli.run();
}

export { PatternImportCLI };
