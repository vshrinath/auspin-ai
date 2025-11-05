/**
 * Main component generator that orchestrates the complete component generation process
 */

import {
  ParsedComponent,
  GeneratedComponent,
  ComponentGenerator as IComponentGenerator,
} from "../types/index.js";
import { JSDocGenerator } from "./jsdoc-generator.js";
import { CodeTransformer } from "./code-transformer.js";
import { ImportStandardizer } from "./import-standardizer.js";

/**
 * Main component generator that implements the ComponentGenerator interface
 */
export class ComponentGenerator implements IComponentGenerator {
  private jsdocGenerator: JSDocGenerator;
  private codeTransformer: CodeTransformer;
  private importStandardizer: ImportStandardizer;

  constructor() {
    this.jsdocGenerator = new JSDocGenerator();
    this.codeTransformer = new CodeTransformer();
    this.importStandardizer = new ImportStandardizer();
  }

  /**
   * Generate a complete TypeScript component from parsed input
   */
  generateComponent(parsed: ParsedComponent): GeneratedComponent {
    // Step 1: Standardize imports to ensure framework agnostic compatibility
    const processedCode = this.importStandardizer.standardizeImports(parsed.originalCode);

    // Step 2: Transform the code (add client directive, preserve React features, etc.)
    const transformedComponent = this.codeTransformer.transformComponent({
      ...parsed,
      originalCode: processedCode,
    });

    // Step 3: Validate imports are framework agnostic
    const importValidation = this.importStandardizer.validateImports(
      transformedComponent.code
    );
    if (!importValidation.isValid) {
      console.warn("Import validation issues:", importValidation.issues);
    }

    return transformedComponent;
  }

  /**
   * Add JSDoc header to component code
   */
  addJSDocHeader(component: string, metadata: any): string {
    return this.jsdocGenerator.addJSDocToComponent(component, metadata);
  }

  /**
   * Process imports in component code
   */
  processImports(code: string): string {
    return this.importStandardizer.standardizeImports(code);
  }

  /**
   * Add client directive to component if needed
   */
  addClientDirective(code: string): string {
    return this.codeTransformer.addClientDirectiveIfNeeded(code);
  }

  /**
   * Validate that generated component is framework agnostic
   */
  validateFrameworkCompatibility(code: string): { isValid: boolean; issues: string[] } {
    return this.importStandardizer.validateImports(code);
  }

  /**
   * Get list of allowed imports for framework compatibility
   */
  getAllowedImports(): string[] {
    return this.importStandardizer.getAllowedImports();
  }
}
