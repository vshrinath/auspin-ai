/**
 * Main entry point for the Tailwind UI Pattern Import System
 */

// Export all types
export * from "./types/index.js";

// Export configuration
export * from "./config/constants.js";

// Export utilities
export * from "./utils/index.js";

// Export parsers
export { CSVParser } from "./parsers/csv-parser.js";

// Export generators
export { JSDocGenerator } from "./generators/jsdoc-generator.js";
export { CodeTransformer } from "./generators/code-transformer.js";
export { ImportStandardizer } from "./generators/import-standardizer.js";
export { ComponentGenerator } from "./generators/component-generator.js";

// Export validators
export {
  TypeScriptValidator,
  ExportChainValidator,
  StorybookValidator,
  LintingValidator,
  ValidationEngine as ValidationEngineImpl,
  CSVValidator,
} from "./validators/index.js";

// Export managers
export {
  FileSystemManagerImpl,
  ExportManagerImpl,
  PatternRegistryManagerImpl,
  RegistryQueryService,
} from "./managers/index.js";

// Export orchestration system
export {
  PatternImportSystem,
  ProcessingPipeline,
  ErrorHandler,
} from "./orchestration/index.js";
