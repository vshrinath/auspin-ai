/**
 * Export Manager Implementation
 * Handles barrel exports and top-level export management for the pattern import system
 */

import { promises as fs } from "fs";
import { join, dirname } from "path";
import { ExportManager } from "../types/index.js";

export class ExportManagerImpl implements ExportManager {
  private readonly uiPackagePath: string;
  private readonly patternsPath: string;

  constructor(projectRoot: string = process.cwd()) {
    this.uiPackagePath = join(projectRoot, "packages", "ui");
    this.patternsPath = join(this.uiPackagePath, "components", "patterns");
  }

  /**
   * Update section-level barrel export (index.ts) with new component
   */
  async updateSectionBarrel(section: string, componentName: string): Promise<void> {
    const sectionPath = join(this.patternsPath, section);
    const barrelPath = join(sectionPath, "index.ts");

    // Ensure section directory exists
    await fs.mkdir(sectionPath, { recursive: true });

    // Read existing barrel file or create empty content
    let existingContent = "";
    try {
      existingContent = await fs.readFile(barrelPath, "utf-8");
    } catch (error) {
      // File doesn't exist, start with empty content
      existingContent = "";
    }

    // Parse existing exports to avoid duplicates
    const existingExports = this.parseExistingExports(existingContent);

    // Add new export if it doesn't already exist
    if (!existingExports.includes(componentName)) {
      const newExportStatement = this.generateExportStatement(componentName);
      const updatedContent = this.addExportToContent(existingContent, newExportStatement);

      await fs.writeFile(barrelPath, updatedContent, "utf-8");
    }
  }

  /**
   * Update top-level packages/ui/index.ts with section export
   */
  async updateTopLevelExport(section: string): Promise<void> {
    const topLevelPath = join(this.uiPackagePath, "index.ts");

    // Read existing top-level export file
    let existingContent = "";
    try {
      existingContent = await fs.readFile(topLevelPath, "utf-8");
    } catch (error) {
      // File doesn't exist, start with empty content
      existingContent = "";
    }

    // Parse existing section exports
    const existingSectionExports = this.parseExistingSectionExports(existingContent);

    // Add section export if it doesn't already exist
    if (!existingSectionExports.includes(section)) {
      const sectionExportStatement = this.generateSectionExportStatement(section);
      const updatedContent = this.addExportToContent(
        existingContent,
        sectionExportStatement
      );

      await fs.writeFile(topLevelPath, updatedContent, "utf-8");
    }
  }

  /**
   * Generate export statement for a component
   */
  generateExportStatement(componentName: string): string {
    return `export { default as ${componentName} } from "./${componentName}";`;
  }

  /**
   * Generate section export statement for top-level index
   */
  generateSectionExportStatement(section: string): string {
    // Convert section to PascalCase for export name
    const sectionName = this.toPascalCase(section);
    return `export * as ${sectionName} from "./components/patterns/${section}";`;
  }

  /**
   * Parse existing export statements from file content
   */
  private parseExistingExports(content: string): string[] {
    const exportRegex = /export\s+{\s*default\s+as\s+(\w+)\s*}\s+from/g;
    const exports: string[] = [];
    let match;

    while ((match = exportRegex.exec(content)) !== null) {
      if (match[1]) {
        exports.push(match[1]);
      }
    }

    return exports;
  }

  /**
   * Parse existing section exports from top-level index
   */
  private parseExistingSectionExports(content: string): string[] {
    const sectionExportRegex =
      /export\s+\*\s+as\s+(\w+)\s+from\s+["']\.\/components\/patterns\/(\w+)["']/g;
    const sections: string[] = [];
    let match;

    while ((match = sectionExportRegex.exec(content)) !== null) {
      if (match[2]) {
        sections.push(match[2]); // Use the actual section name from path, not the PascalCase alias
      }
    }

    return sections;
  }

  /**
   * Add export statement to existing content while maintaining formatting
   */
  private addExportToContent(existingContent: string, newExport: string): string {
    // If content is empty, just add the export with trailing newline
    if (!existingContent.trim()) {
      return newExport + "\n";
    }

    // If content doesn't end with newline, add one before the new export
    const needsNewline = !existingContent.endsWith("\n");
    const separator = needsNewline ? "\n" : "";

    return existingContent + separator + newExport + "\n";
  }

  /**
   * Convert string to PascalCase
   */
  private toPascalCase(str: string): string {
    return str
      .split(/[-_\s]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  }

  /**
   * Get all components in a section by reading the barrel file
   */
  async getSectionComponents(section: string): Promise<string[]> {
    const barrelPath = join(this.patternsPath, section, "index.ts");

    try {
      const content = await fs.readFile(barrelPath, "utf-8");
      return this.parseExistingExports(content);
    } catch (error) {
      // Barrel file doesn't exist or can't be read
      return [];
    }
  }

  /**
   * Get all sections by reading the top-level index
   */
  async getAllSections(): Promise<string[]> {
    const topLevelPath = join(this.uiPackagePath, "index.ts");

    try {
      const content = await fs.readFile(topLevelPath, "utf-8");
      return this.parseExistingSectionExports(content);
    } catch (error) {
      // Top-level index doesn't exist or can't be read
      return [];
    }
  }

  /**
   * Validate that all exports are properly configured
   */
  async validateExports(
    section: string,
    componentName: string
  ): Promise<{ isValid: boolean; errors: string[] }> {
    const errors: string[] = [];

    // Check if component exists in section barrel
    const sectionComponents = await this.getSectionComponents(section);
    if (!sectionComponents.includes(componentName)) {
      errors.push(
        `Component ${componentName} not found in section ${section} barrel export`
      );
    }

    // Check if section exists in top-level export
    const allSections = await this.getAllSections();
    if (!allSections.includes(section)) {
      errors.push(`Section ${section} not found in top-level export`);
    }

    // Check if actual component file exists
    const componentPath = join(this.patternsPath, section, `${componentName}.tsx`);
    try {
      await fs.access(componentPath);
    } catch (error) {
      errors.push(`Component file ${componentPath} does not exist`);
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
