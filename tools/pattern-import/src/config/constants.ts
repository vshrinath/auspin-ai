/**
 * Configuration constants for the Tailwind UI Pattern Import System
 */

// File Paths and Directory Structure
export const PATHS = {
  // Base paths
  PACKAGES_UI: "packages/ui",
  APPS_WEB: "apps/web",

  // Component paths
  COMPONENTS_BASE: "packages/ui/components/patterns",
  STORIES_BASE: "apps/web/stories",

  // Export files
  TOP_LEVEL_EXPORT: "packages/ui/index.ts",
  SECTION_BARREL_FILENAME: "index.ts",
  REGISTRY_FILENAME: "pattern.config.json",

  // File extensions
  COMPONENT_EXTENSION: ".tsx",
  STORY_EXTENSION: ".stories.tsx",
} as const;

// CSV Configuration
export const CSV_CONFIG = {
  REQUIRED_COLUMNS: ["section", "variant", "code"],
  DELIMITER: ",",
  ENCODING: "utf8",
} as const;

// Component Generation Configuration
export const COMPONENT_CONFIG = {
  // JSDoc template tags
  JSDOC_TAGS: {
    PATTERN: "@pattern",
    VARIANT: "@variant",
    COMPONENT: "@component",
    SOURCE: "@source",
    USAGE: "@usage",
    FRAMEWORK: "@framework",
    DEPENDENCIES: "@dependencies",
  },

  // Default metadata values
  DEFAULT_SOURCE: "Tailwind UI",
  DEFAULT_FRAMEWORK: "agnostic",

  // Import standardization
  ALLOWED_IMPORTS: ["react", "@headlessui/react", "@heroicons/react"],

  // Client directive detection patterns
  STATE_PATTERNS: [
    "useState",
    "useEffect",
    "useCallback",
    "useMemo",
    "useRef",
    "onClick",
    "onChange",
    "onSubmit",
    "addEventListener",
  ],
} as const;

// File System Configuration
export const FILE_SYSTEM_CONFIG = {
  // Versioning
  VERSION_PREFIX: "V",
  MAX_VERSIONS: 99,

  // Directory permissions
  DIR_MODE: 0o755,
  FILE_MODE: 0o644,

  // Backup and rollback
  BACKUP_SUFFIX: ".backup",
  TEMP_SUFFIX: ".tmp",
} as const;

// Validation Configuration
export const VALIDATION_CONFIG = {
  // TypeScript compilation
  TS_CONFIG_PATH: "tsconfig.json",

  // Linting
  ESLINT_CONFIG_PATH: "apps/web/eslint.config.mjs",

  // Storybook
  STORYBOOK_CONFIG_PATH: "apps/web/.storybook",

  // Timeout settings (in milliseconds)
  COMPILATION_TIMEOUT: 30000,
  LINTING_TIMEOUT: 15000,
  STORYBOOK_TIMEOUT: 20000,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  // CSV Errors
  CSV_FILE_NOT_FOUND: "CSV file not found at specified path",
  CSV_INVALID_FORMAT: "Invalid CSV format. Expected columns: section, variant, code",
  CSV_MISSING_COLUMNS: "Missing required columns in CSV file",
  CSV_EMPTY_ROW: "Empty or incomplete row found in CSV",

  // File System Errors
  DIRECTORY_CREATE_FAILED: "Failed to create directory structure",
  FILE_WRITE_FAILED: "Failed to write file",
  FILE_EXISTS_CONFLICT: "File already exists and versioning failed",
  PERMISSION_DENIED: "Permission denied for file operation",

  // Component Generation Errors
  INVALID_COMPONENT_NAME: "Invalid component name generated",
  CODE_TRANSFORMATION_FAILED: "Failed to transform Tailwind UI code",
  IMPORT_RESOLUTION_FAILED: "Failed to resolve component imports",

  // Validation Errors
  TYPESCRIPT_COMPILATION_FAILED: "TypeScript compilation failed",
  LINTING_FAILED: "Linting validation failed",
  STORYBOOK_INTEGRATION_FAILED: "Storybook integration validation failed",
  EXPORT_CHAIN_BROKEN: "Export chain validation failed",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  COMPONENT_GENERATED: "Component successfully generated",
  EXPORTS_UPDATED: "Export files updated successfully",
  STORY_CREATED: "Storybook story created successfully",
  VALIDATION_PASSED: "All validations passed",
  BATCH_COMPLETED: "Batch processing completed successfully",
} as const;

// Regular Expressions
export const REGEX_PATTERNS = {
  // Component naming
  PASCAL_CASE: /^[A-Z][a-zA-Z0-9]*$/,
  KEBAB_CASE: /^[a-z][a-z0-9-]*$/,

  // Code analysis
  IMPORT_STATEMENT: /^import\s+.*\s+from\s+['"]([^'"]+)['"];?$/gm,
  USE_CLIENT_DIRECTIVE: /^['"]use client['"];?\s*$/m,
  REACT_HOOKS: /use[A-Z][a-zA-Z]*/g,
  EVENT_HANDLERS: /on[A-Z][a-zA-Z]*/g,

  // File validation
  TYPESCRIPT_FILE: /\.tsx?$/,
  STORY_FILE: /\.stories\.tsx?$/,
  INDEX_FILE: /^index\.ts$/,
} as const;

// Template Strings
export const TEMPLATES = {
  // JSDoc header template
  JSDOC_HEADER: `/**
 * {description}
 * 
 * @pattern {pattern}
 * @variant {variant}
 * @component {component}
 * @source {source}
 * @usage {usage}
 * @framework {framework}
 * @dependencies {dependencies}
 */`,

  // Export statement templates
  BARREL_EXPORT: `export { default as {componentName} } from './{componentName}';`,
  SECTION_EXPORT: `export * from './components/patterns/{section}';`,

  // Story template
  STORY_TEMPLATE: `import type { Meta, StoryObj } from '@storybook/react';
import { {componentName} } from '@salient/ui';

const meta: Meta<typeof {componentName}> = {
  title: 'Patterns/{section}/{componentName}',
  component: {componentName},
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};`,
} as const;
