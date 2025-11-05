/**
 * Utility functions for the Tailwind UI Pattern Import System
 */

import { REGEX_PATTERNS } from "../config/constants.js";

/**
 * Convert a string to PascalCase format
 */
export function toPascalCase(str: string): string {
  return str
    .split(/[\s-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

/**
 * Convert a string to kebab-case format
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[\s_]+/g, "-");
}

/**
 * Generate component name from section and variant
 */
export function generateComponentName(section: string, variant: string): string {
  const sectionPascal = toPascalCase(section);
  const variantPascal = toPascalCase(variant);
  return `${sectionPascal}${variantPascal}`;
}

/**
 * Validate component name format
 */
export function isValidComponentName(name: string): boolean {
  return REGEX_PATTERNS.PASCAL_CASE.test(name);
}

/**
 * Extract imports from code string
 */
export function extractImports(code: string): string[] {
  const imports: string[] = [];
  const matches = code.matchAll(REGEX_PATTERNS.IMPORT_STATEMENT);

  for (const match of matches) {
    if (match[1]) {
      imports.push(match[1]);
    }
  }

  return imports;
}

/**
 * Check if code contains React state or browser-specific logic
 */
export function hasStateOrBrowserLogic(code: string): boolean {
  const hasHooks = REGEX_PATTERNS.REACT_HOOKS.test(code);
  const hasEventHandlers = REGEX_PATTERNS.EVENT_HANDLERS.test(code);

  return hasHooks || hasEventHandlers;
}

/**
 * Check if code already has 'use client' directive
 */
export function hasUseClientDirective(code: string): boolean {
  return REGEX_PATTERNS.USE_CLIENT_DIRECTIVE.test(code);
}

/**
 * Sanitize file path for cross-platform compatibility
 */
export function sanitizePath(path: string): string {
  return path.replace(/[<>:"|?*]/g, "_").replace(/\\/g, "/");
}

/**
 * Generate file path for component
 */
export function generateComponentPath(section: string, componentName: string): string {
  return `packages/ui/components/patterns/${section}/${componentName}.tsx`;
}

/**
 * Generate file path for section barrel export
 */
export function generateSectionBarrelPath(section: string): string {
  return `packages/ui/components/patterns/${section}/index.ts`;
}

/**
 * Generate file path for Storybook story
 */
export function generateStoryPath(componentName: string): string {
  return `apps/web/stories/${componentName}.stories.tsx`;
}

/**
 * Generate file path for pattern registry
 */
export function generateRegistryPath(section: string): string {
  return `packages/ui/components/patterns/${section}/pattern.config.json`;
}

/**
 * Create versioned filename if file exists
 */
export function createVersionedName(
  baseName: string,
  extension: string,
  existingFiles: string[]
): string {
  let version = 2;
  let versionedName = `${baseName}V${version}${extension}`;

  while (existingFiles.includes(versionedName) && version <= 99) {
    version++;
    versionedName = `${baseName}V${version}${extension}`;
  }

  return version <= 99 ? versionedName : baseName + extension;
}

/**
 * Extract version number from a versioned filename
 */
export function extractVersionNumber(fileName: string): number {
  const match = fileName.match(/V(\d+)(?:\.\w+)?$/);
  return match && match[1] ? parseInt(match[1], 10) : 1;
}

/**
 * Get the base name without version suffix
 */
export function getBaseNameWithoutVersion(fileName: string): string {
  return fileName.replace(/V\d+(\.\w+)?$/, (match, extension) => extension || "");
}

/**
 * Find the next available version number for a component
 */
export function findNextVersion(baseName: string, existingFiles: string[]): number {
  const basePattern = new RegExp(`^${baseName}(V(\\d+))?\\.tsx$`);
  let maxVersion = 1;

  for (const file of existingFiles) {
    const match = file.match(basePattern);
    if (match) {
      const version = match[2] ? parseInt(match[2], 10) : 1;
      maxVersion = Math.max(maxVersion, version);
    }
  }

  return maxVersion + 1;
}

/**
 * Basic CSV row validation (use CSVValidator for comprehensive validation)
 */
export function validateCSVRowBasic(row: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!row.section || typeof row.section !== "string" || row.section.trim() === "") {
    errors.push("Section is required and must be a non-empty string");
  }

  if (!row.variant || typeof row.variant !== "string" || row.variant.trim() === "") {
    errors.push("Variant is required and must be a non-empty string");
  }

  if (!row.code || typeof row.code !== "string" || row.code.trim() === "") {
    errors.push("Code is required and must be a non-empty string");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Clean and normalize code string
 */
export function normalizeCode(code: string): string {
  return code
    .trim()
    .replace(/\r\n/g, "\n") // Normalize line endings
    .replace(/\t/g, "  "); // Convert tabs to spaces
}

/**
 * Generate JSDoc description from section and variant
 */
export function generateDescription(section: string, variant: string): string {
  return `${toPascalCase(section)} component with ${variant.toLowerCase()} variant from Tailwind UI`;
}

/**
 * Generate usage description for component
 */
export function generateUsage(componentName: string): string {
  return `import { ${componentName} } from '@salient/ui';\n\n<${componentName} />`;
}
