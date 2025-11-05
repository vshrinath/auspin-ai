/**
 * CSV Validation Logic for Tailwind UI Pattern Import System
 * Provides comprehensive validation for CSV structure and content
 */

import fs from "fs";
import { CSVRow, ValidationResult } from "../types/index.js";
import { CSV_CONFIG, ERROR_MESSAGES, REGEX_PATTERNS } from "../config/constants.js";
import { generateComponentName, isValidComponentName } from "../utils/index.js";

/**
 * Comprehensive CSV validation with detailed error reporting
 */
export class CSVValidator {
  /**
   * Validate complete CSV file structure and content
   */
  static async validateFile(filePath: string): Promise<ValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];

    // File existence and accessibility checks
    const fileValidation = this.validateFileAccess(filePath);
    if (!fileValidation.isValid) {
      return fileValidation;
    }

    // File format and structure checks
    const structureValidation = await this.validateFileStructure(filePath);
    errors.push(...structureValidation.errors);
    warnings.push(...(structureValidation.warnings || []));

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validate file access and basic properties
   */
  static validateFileAccess(filePath: string): ValidationResult {
    const errors: string[] = [];

    // Check file exists
    if (!fs.existsSync(filePath)) {
      errors.push(`${ERROR_MESSAGES.CSV_FILE_NOT_FOUND}: ${filePath}`);
      return { isValid: false, errors };
    }

    // Check file extension
    if (!filePath.toLowerCase().endsWith(".csv")) {
      errors.push("File must have .csv extension");
      return { isValid: false, errors };
    }

    // Check file is readable
    try {
      fs.accessSync(filePath, fs.constants.R_OK);
    } catch {
      errors.push(`${ERROR_MESSAGES.PERMISSION_DENIED}: Cannot read file ${filePath}`);
      return { isValid: false, errors };
    }

    // Check file is not empty
    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
      errors.push("CSV file is empty");
      return { isValid: false, errors };
    }

    // Check file size is reasonable (not too large)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (stats.size > maxSize) {
      errors.push(
        `CSV file is too large (${Math.round(stats.size / 1024 / 1024)}MB). Maximum size is 10MB`
      );
      return { isValid: false, errors };
    }

    return { isValid: true, errors: [] };
  }

  /**
   * Validate CSV file structure and headers
   */
  static async validateFileStructure(filePath: string): Promise<ValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      // Read first line to check headers
      const firstLine = await this.readFirstLine(filePath);
      if (!firstLine) {
        errors.push("CSV file appears to be empty or unreadable");
        return { isValid: false, errors };
      }

      // Parse headers
      const headers = this.parseCSVLine(firstLine);

      // Validate required columns exist
      const missingColumns = CSV_CONFIG.REQUIRED_COLUMNS.filter(
        (col) => !headers.includes(col)
      );

      if (missingColumns.length > 0) {
        errors.push(
          `${ERROR_MESSAGES.CSV_MISSING_COLUMNS}: ${missingColumns.join(", ")}`
        );
        errors.push(`Expected columns: ${CSV_CONFIG.REQUIRED_COLUMNS.join(", ")}`);
        errors.push(`Found columns: ${headers.join(", ")}`);
      }

      // Check for extra columns (warning only)
      const extraColumns = headers.filter(
        (col) => !CSV_CONFIG.REQUIRED_COLUMNS.includes(col as any)
      );

      if (extraColumns.length > 0) {
        warnings.push(
          `Extra columns found (will be ignored): ${extraColumns.join(", ")}`
        );
      }

      // Check for duplicate columns
      const duplicates = headers.filter((col, index) => headers.indexOf(col) !== index);
      if (duplicates.length > 0) {
        errors.push(`Duplicate columns found: ${duplicates.join(", ")}`);
      }
    } catch (error) {
      errors.push(
        `Error reading CSV structure: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validate individual CSV row data
   */
  static validateRowData(row: CSVRow, rowIndex?: number): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    const prefix = rowIndex ? `Row ${rowIndex}: ` : "";

    // Validate section
    const sectionValidation = this.validateSection(row.section);
    if (!sectionValidation.isValid) {
      errors.push(...sectionValidation.errors.map((err) => `${prefix}Section - ${err}`));
    }
    warnings.push(
      ...(sectionValidation.warnings || []).map((warn) => `${prefix}Section - ${warn}`)
    );

    // Validate variant
    const variantValidation = this.validateVariant(row.variant);
    if (!variantValidation.isValid) {
      errors.push(...variantValidation.errors.map((err) => `${prefix}Variant - ${err}`));
    }
    warnings.push(
      ...(variantValidation.warnings || []).map((warn) => `${prefix}Variant - ${warn}`)
    );

    // Validate code
    const codeValidation = this.validateCode(row.code);
    if (!codeValidation.isValid) {
      errors.push(...codeValidation.errors.map((err) => `${prefix}Code - ${err}`));
    }
    warnings.push(
      ...(codeValidation.warnings || []).map((warn) => `${prefix}Code - ${warn}`)
    );

    // Validate generated component name
    const componentName = generateComponentName(row.section, row.variant);
    if (!isValidComponentName(componentName)) {
      errors.push(`${prefix}Generated component name "${componentName}" is invalid`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validate section field
   */
  static validateSection(section: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!section || typeof section !== "string") {
      errors.push("Section is required and must be a string");
      return { isValid: false, errors };
    }

    const trimmed = section.trim();
    if (trimmed === "") {
      errors.push("Section cannot be empty");
      return { isValid: false, errors };
    }

    if (trimmed.length < 2) {
      warnings.push("Section is very short (less than 2 characters)");
    }

    if (trimmed.length > 50) {
      warnings.push("Section is very long (more than 50 characters)");
    }

    // Check for valid characters (letters, numbers, spaces, hyphens, underscores)
    if (!/^[a-zA-Z0-9\s\-_]+$/.test(trimmed)) {
      errors.push(
        "Section contains invalid characters. Only letters, numbers, spaces, hyphens, and underscores are allowed"
      );
    }

    // Check for common section names
    const commonSections = [
      "hero",
      "navigation",
      "footer",
      "header",
      "sidebar",
      "content",
      "form",
      "card",
      "button",
      "modal",
    ];
    if (!commonSections.some((common) => trimmed.toLowerCase().includes(common))) {
      warnings.push("Section name does not match common UI pattern categories");
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validate variant field
   */
  static validateVariant(variant: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!variant || typeof variant !== "string") {
      errors.push("Variant is required and must be a string");
      return { isValid: false, errors };
    }

    const trimmed = variant.trim();
    if (trimmed === "") {
      errors.push("Variant cannot be empty");
      return { isValid: false, errors };
    }

    if (trimmed.length < 2) {
      warnings.push("Variant is very short (less than 2 characters)");
    }

    if (trimmed.length > 100) {
      warnings.push("Variant is very long (more than 100 characters)");
    }

    // Check for valid characters
    if (!/^[a-zA-Z0-9\s\-_]+$/.test(trimmed)) {
      errors.push(
        "Variant contains invalid characters. Only letters, numbers, spaces, hyphens, and underscores are allowed"
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validate code field
   */
  static validateCode(code: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!code || typeof code !== "string") {
      errors.push("Code is required and must be a string");
      return { isValid: false, errors };
    }

    const trimmed = code.trim();
    if (trimmed === "") {
      errors.push("Code cannot be empty");
      return { isValid: false, errors };
    }

    if (trimmed.length < 50) {
      warnings.push(
        "Code is very short (less than 50 characters) - may not be a complete component"
      );
    }

    // Check for basic React component structure
    if (!trimmed.includes("export") || !trimmed.includes("function")) {
      warnings.push("Code does not appear to contain a React component export");
    }

    // Check for JSX
    if (!trimmed.includes("return") || !trimmed.includes("<")) {
      warnings.push("Code does not appear to contain JSX");
    }

    // Check for Tailwind classes
    if (!trimmed.includes("className")) {
      warnings.push("Code does not appear to contain Tailwind CSS classes");
    }

    // Check for basic syntax issues
    const openBraces = (trimmed.match(/{/g) || []).length;
    const closeBraces = (trimmed.match(/}/g) || []).length;
    if (openBraces !== closeBraces) {
      errors.push("Code has mismatched braces - syntax error likely");
    }

    const openParens = (trimmed.match(/\(/g) || []).length;
    const closeParens = (trimmed.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
      errors.push("Code has mismatched parentheses - syntax error likely");
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Generate detailed validation report
   */
  static generateValidationReport(
    validation: ValidationResult,
    filePath?: string
  ): string {
    const lines: string[] = [];

    if (filePath) {
      lines.push(`CSV Validation Report for: ${filePath}`);
      lines.push("=".repeat(50));
    }

    if (validation.isValid) {
      lines.push("✅ Validation PASSED - CSV file is valid");
    } else {
      lines.push("❌ Validation FAILED - CSV file has errors");
    }

    if (validation.errors.length > 0) {
      lines.push("");
      lines.push("ERRORS:");
      validation.errors.forEach((error, index) => {
        lines.push(`  ${index + 1}. ${error}`);
      });
    }

    if (validation.warnings && validation.warnings.length > 0) {
      lines.push("");
      lines.push("WARNINGS:");
      validation.warnings.forEach((warning, index) => {
        lines.push(`  ${index + 1}. ${warning}`);
      });
    }

    if (!validation.isValid) {
      lines.push("");
      lines.push("HELP:");
      lines.push("  - Ensure your CSV has the required columns: section, variant, code");
      lines.push("  - Check that all rows have complete data");
      lines.push("  - Verify that code contains valid React components");
      lines.push("  - Use the format example as a reference");
    }

    return lines.join("\n");
  }

  /**
   * Read first line of file
   */
  private static async readFirstLine(filePath: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(filePath, { encoding: "utf8" });
      let firstLine = "";
      let found = false;

      stream.on("data", (chunk: string | Buffer) => {
        if (!found) {
          const chunkStr = chunk.toString();
          const lines = chunkStr.split("\n");
          firstLine = lines[0] || "";
          found = true;
          stream.destroy();
        }
      });

      stream.on("end", () => {
        resolve(firstLine || null);
      });

      stream.on("close", () => {
        resolve(firstLine || null);
      });

      stream.on("error", (error) => {
        reject(error);
      });
    });
  }

  /**
   * Parse CSV line into array of values
   */
  private static parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          // Escaped quote
          current += '"';
          i++; // Skip next quote
        } else {
          // Toggle quote state
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        // Field separator
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }

    // Add final field
    result.push(current.trim());

    return result;
  }
}

/**
 * Quick validation function for single CSV row
 */
export function validateCSVRow(row: any): ValidationResult {
  return CSVValidator.validateRowData(row);
}

/**
 * Generate CSV format example with validation guidance
 */
export function generateCSVFormatGuide(): string {
  return `
CSV Format Guide for Tailwind UI Pattern Import
==============================================

REQUIRED FORMAT:
Your CSV file must have exactly these three columns in any order:
- section: The UI pattern category
- variant: The specific style variant  
- code: The complete React component code

EXAMPLE CSV CONTENT:
\`\`\`csv
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
navigation,with dropdown,"export default function NavigationWithDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className=""bg-gray-800"">
      <div className=""mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"">
        <div className=""flex h-16 items-center justify-between"">
          <button onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>
      </div>
    </nav>
  )
}"
\`\`\`

VALIDATION RULES:

Section Field:
✅ Required, non-empty string
✅ 2-50 characters recommended
✅ Letters, numbers, spaces, hyphens, underscores only
✅ Common examples: hero, navigation, footer, header, form, card

Variant Field:  
✅ Required, non-empty string
✅ 2-100 characters recommended
✅ Letters, numbers, spaces, hyphens, underscores only
✅ Descriptive examples: "simple centered", "with dropdown", "dark theme"

Code Field:
✅ Required, non-empty string
✅ Must be complete React component code
✅ Should include export statement
✅ Should contain JSX with return statement
✅ Should use Tailwind CSS classes (className attributes)
✅ Proper brace/parentheses matching

CSV FORMATTING TIPS:
- Use double quotes around code values: "export default function..."
- Escape internal quotes by doubling them: ""className=""
- No spaces around commas in header row
- Each component should be on its own row
- File must have .csv extension
- Maximum file size: 10MB

COMPONENT NAMING:
Components will be named using PascalCase combination of section + variant:
- section: "hero", variant: "simple centered" → HeroSimpleCentered
- section: "navigation", variant: "with dropdown" → NavigationWithDropdown

COMMON ERRORS TO AVOID:
❌ Missing required columns
❌ Empty section, variant, or code fields  
❌ Invalid characters in section/variant names
❌ Incomplete or malformed React component code
❌ Mismatched quotes, braces, or parentheses in code
❌ File without .csv extension
`;
}
