/**
 * CSV Parser for Tailwind UI Pattern Import System
 * Handles parsing and validation of CSV files containing component definitions
 */

import fs from "fs";
import path from "path";
import csvParser from "csv-parser";
import {
  CSVRow,
  ParsedComponent,
  ValidationResult,
  CSVParser as CSVParserInterface,
} from "../types/index.js";
import { CSV_CONFIG, ERROR_MESSAGES } from "../config/constants.js";
import { generateComponentName, normalizeCode } from "../utils/index.js";
import { CSVValidator } from "../validators/csv-validator.js";

/**
 * CSV Parser implementation for processing Tailwind UI component definitions
 */
export class CSVParser implements CSVParserInterface {
  /**
   * Parse CSV file and return array of parsed components
   */
  async parseFile(filePath: string): Promise<ParsedComponent[]> {
    // Validate file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`${ERROR_MESSAGES.CSV_FILE_NOT_FOUND}: ${filePath}`);
    }

    // Validate file extension
    if (!filePath.toLowerCase().endsWith(".csv")) {
      throw new Error("File must have .csv extension");
    }

    const components: ParsedComponent[] = [];
    const errors: string[] = [];

    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(filePath).pipe(
        csvParser({
          separator: CSV_CONFIG.DELIMITER,
        })
      );

      let rowIndex = 0;

      stream.on("data", (row: any) => {
        rowIndex++;

        try {
          // Validate row structure
          const validation = CSVValidator.validateRowData(row, rowIndex);
          if (!validation.isValid) {
            errors.push(...validation.errors);
            return;
          }

          // Create parsed component
          const csvRow: CSVRow = {
            section: row.section.trim(),
            variant: row.variant.trim(),
            code: normalizeCode(row.code),
          };

          const componentName = generateComponentName(csvRow.section, csvRow.variant);

          const parsedComponent: ParsedComponent = {
            section: csvRow.section,
            variant: csvRow.variant,
            componentName,
            originalCode: csvRow.code,
          };

          components.push(parsedComponent);
        } catch (error) {
          errors.push(
            `Row ${rowIndex}: ${error instanceof Error ? error.message : "Unknown parsing error"}`
          );
        }
      });

      stream.on("end", () => {
        if (errors.length > 0) {
          reject(new Error(`CSV parsing failed:\n${errors.join("\n")}`));
        } else if (components.length === 0) {
          reject(new Error("No valid components found in CSV file"));
        } else {
          resolve(components);
        }
      });

      stream.on("error", (error) => {
        reject(new Error(`CSV parsing error: ${error.message}`));
      });
    });
  }

  /**
   * Validate CSV file structure and format
   */
  async validateCSV(filePath: string): Promise<ValidationResult> {
    return CSVValidator.validateFile(filePath);
  }

  /**
   * Validate individual CSV row
   */
  validateRow(row: CSVRow): ValidationResult {
    return CSVValidator.validateRowData(row);
  }

  /**
   * Read first N rows from CSV file for validation
   */
  private async readFirstRows(filePath: string, count: number): Promise<any[]> {
    const rows: any[] = [];

    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(filePath).pipe(
        csvParser({
          separator: CSV_CONFIG.DELIMITER,
        })
      );

      stream.on("data", (row: any) => {
        rows.push(row);
        if (rows.length >= count) {
          stream.destroy();
        }
      });

      stream.on("end", () => {
        resolve(rows);
      });

      stream.on("close", () => {
        resolve(rows);
      });

      stream.on("error", (error) => {
        reject(error);
      });
    });
  }

  /**
   * Generate CSV format example for user guidance
   */
  static generateFormatExample(): string {
    return `CSV Format Example:

section,variant,code
hero,simple centered,"export default function HeroSimpleCentered() {
  return (
    <div className=""bg-white"">
      <div className=""mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"">
        <h2 className=""text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"">
          Simple centered hero
        </h2>
      </div>
    </div>
  )
}"

Required Columns: section, variant, code
For detailed validation rules and examples, use generateValidationReport()`;
  }

  /**
   * Generate detailed validation report
   */
  static generateValidationReport(
    validation: ValidationResult,
    filePath?: string
  ): string {
    return CSVValidator.generateValidationReport(validation, filePath);
  }
}

/**
 * Create a new CSV parser instance
 */
export function createCSVParser(): CSVParser {
  return new CSVParser();
}
