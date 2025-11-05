/**
 * Core TypeScript interfaces for the Tailwind UI Pattern Import System
 */

// CSV Input and Parsing Types
export interface CSVRow {
  section: string;
  variant: string;
  code: string;
}

export interface ParsedComponent {
  section: string;
  variant: string;
  componentName: string;
  originalCode: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
}

export interface CSVParser {
  parseFile(filePath: string): Promise<ParsedComponent[]>;
  validateCSV(filePath: string): Promise<ValidationResult>;
  validateRow(row: CSVRow): ValidationResult;
}

// Component Generation Types
export interface ComponentMetadata {
  pattern: string; // section name
  variant: string; // variant description
  component: string; // component name
  source: string; // "Tailwind UI"
  usage: string; // usage description
  framework: string; // "agnostic"
  dependencies: string[]; // required packages
}

export interface GeneratedComponent {
  code: string;
  imports: string[];
  hasState: boolean;
  metadata: ComponentMetadata;
}

export interface ComponentGenerator {
  generateComponent(parsed: ParsedComponent): GeneratedComponent;
  addJSDocHeader(component: string, metadata: ComponentMetadata): string;
  processImports(code: string): string;
  addClientDirective(code: string): string;
}

// File System Management Types
export interface FilePaths {
  component: string; // packages/ui/components/patterns/{section}/{ComponentName}.tsx
  sectionBarrel: string; // packages/ui/components/patterns/{section}/index.ts
  topLevelExport: string; // packages/ui/index.ts
  story: string; // apps/web/stories/{ComponentName}.stories.tsx
  registry: string; // packages/ui/components/patterns/{section}/pattern.config.json
}

export interface FileSystemManager {
  createDirectoryStructure(section: string): Promise<void>;
  writeComponent(path: string, content: string): Promise<void>;
  checkFileExists(path: string): Promise<boolean>;
  generateVersionedName(baseName: string, section: string): Promise<string>;
  generateFilePaths(section: string, componentName: string): FilePaths;
  validateProjectStructure(): Promise<{ isValid: boolean; missingPaths: string[] }>;
  listExistingComponents(section: string): Promise<string[]>;
  checkNameConflict(componentName: string, section: string): Promise<boolean>;
  getComponentVersions(baseName: string, section: string): Promise<string[]>;
  safeWriteComponent(
    filePath: string,
    content: string,
    allowOverwrite?: boolean
  ): Promise<void>;
  batchWriteFiles(files: Array<{ path: string; content: string }>): Promise<void>;
  writeComponentSafe(
    filePath: string,
    content: string,
    options?: {
      createBackup?: boolean;
      validateContent?: boolean;
      atomic?: boolean;
    }
  ): Promise<void>;
}

// Export Management Types
export interface ExportManager {
  updateSectionBarrel(section: string, componentName: string): Promise<void>;
  updateTopLevelExport(section: string): Promise<void>;
  generateExportStatement(componentName: string): string;
  generateSectionExportStatement(section: string): string;
  getSectionComponents(section: string): Promise<string[]>;
  getAllSections(): Promise<string[]>;
  validateExports(
    section: string,
    componentName: string
  ): Promise<{ isValid: boolean; errors: string[] }>;
}

// Story Generation Types
export interface StoryGenerator {
  generateStory(componentName: string, section: string): string;
  createStoryTemplate(
    metadata: ComponentMetadata,
    importPath: string,
    storyTitle: string
  ): string;
  writeStoryFile(componentName: string, section: string): Promise<string>;
  storyExists(componentName: string): Promise<boolean>;
  generateVersionedStoryName(componentName: string): Promise<string>;
  writeStoryFileSafe(
    componentName: string,
    section: string,
    allowOverwrite?: boolean
  ): Promise<{ storyPath: string; finalComponentName: string }>;
  validateStoryContent(content: string): { isValid: boolean; errors: string[] };
}

// Pattern Registry Types
export interface ComponentData {
  componentName: string;
  variant: string;
  source: string;
  path: string;
  framework: string;
}

export interface PatternRegistry {
  updateRegistry(section: string, componentData: ComponentData): Promise<void>;
  getExistingComponents(section: string): Promise<ComponentData[]>;
}

export interface PatternRegistryManager extends PatternRegistry {
  createRegistry(section: string): Promise<void>;
  registryExists(section: string): Promise<boolean>;
  getRegistryPath(section: string): string;
  validateRegistryData(data: any): { isValid: boolean; errors: string[] };
  backupRegistry(section: string): Promise<string>;
  restoreRegistry(section: string, backupPath: string): Promise<void>;
  getAllRegistries(): Promise<string[]>;
  getComponentByName(
    section: string,
    componentName: string
  ): Promise<ComponentData | null>;
  removeComponent(section: string, componentName: string): Promise<boolean>;
  updateComponentMetadata(
    section: string,
    componentName: string,
    updates: Partial<ComponentData>
  ): Promise<boolean>;
}

// Registry Query Types
export interface RegistryQueryOptions {
  section?: string;
  variant?: string;
  source?: string;
  framework?: string;
  componentName?: string;
  searchTerm?: string;
}

export interface RegistryQueryResult {
  components: ComponentData[];
  totalCount: number;
  sections: string[];
  matchedSections: string[];
}

export interface ComponentValidationResult {
  exists: boolean;
  component?: ComponentData;
  conflicts: ComponentData[];
  suggestions: string[];
}

// Validation Engine Types
export interface ValidationEngine {
  validateTypeScriptCompilation(filePath: string): Promise<ValidationResult>;
  validateExportChain(section: string, componentName: string): Promise<ValidationResult>;
  validateStorybookIntegration(storyPath: string): Promise<ValidationResult>;
  validateLinting(filePath: string): Promise<ValidationResult>;
}

// Main Orchestration Types
export interface ProcessingOptions {
  csvFilePath: string;
  outputPath?: string;
  validateOnly?: boolean;
  skipStories?: boolean;
  skipValidation?: boolean;
}

export interface ProcessingResult {
  success: boolean;
  processedComponents: number;
  errors: string[];
  warnings: string[];
  generatedFiles: string[];
}

export interface PatternImportSystem {
  processCSV(options: ProcessingOptions): Promise<ProcessingResult>;
  validateInput(csvFilePath: string): ValidationResult;
  rollback(operationId: string): Promise<void>;
}
