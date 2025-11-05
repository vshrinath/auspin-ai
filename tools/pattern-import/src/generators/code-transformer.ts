/**
 * Code transformation engine for processing Tailwind UI components
 */

import {
  ParsedComponent,
  GeneratedComponent,
  ComponentMetadata,
} from "../types/index.js";
import { JSDocGenerator } from "./jsdoc-generator.js";

/**
 * Transforms Tailwind UI code while preserving functionality and ensuring framework agnostic compatibility
 */
export class CodeTransformer {
  private jsdocGenerator: JSDocGenerator;

  constructor() {
    this.jsdocGenerator = new JSDocGenerator();
  }

  /**
   * Transform parsed component into a complete TypeScript component
   */
  transformComponent(parsed: ParsedComponent): GeneratedComponent {
    const { originalCode } = parsed;

    // Process the code through transformation pipeline
    const processedCode = this.processCodePipeline(originalCode);

    // Extract imports and detect state usage
    const imports = this.extractImports(processedCode);
    const hasState = this.detectStateUsage(processedCode);

    // Create metadata
    const dependencies = this.jsdocGenerator.extractDependencies(processedCode);
    const metadata = this.jsdocGenerator.createMetadata(
      parsed.section,
      parsed.variant,
      parsed.componentName,
      dependencies
    );

    // Add JSDoc header
    const finalCode = this.jsdocGenerator.addJSDocToComponent(processedCode, metadata);

    return {
      code: finalCode,
      imports,
      hasState,
      metadata,
    };
  }

  /**
   * Process code through the complete transformation pipeline
   */
  private processCodePipeline(code: string): string {
    let processedCode = code;

    // 1. Add 'use client' directive if needed
    processedCode = this.addClientDirectiveIfNeeded(processedCode);

    // 2. Preserve React hooks and event handlers
    processedCode = this.preserveReactFeatures(processedCode);

    // 3. Ensure proper component structure
    processedCode = this.ensureComponentStructure(processedCode);

    return processedCode;
  }

  /**
   * Add 'use client' directive when state or browser-specific logic is present
   */
  addClientDirectiveIfNeeded(code: string): string {
    const hasState = this.detectStateUsage(code);
    const hasBrowserAPI = this.detectBrowserAPI(code);

    if (hasState || hasBrowserAPI) {
      // Check if 'use client' is already present
      if (!code.includes("'use client'") && !code.includes('"use client"')) {
        return `'use client';\n\n${code}`;
      }
    }

    return code;
  }

  /**
   * Detect if component uses React state or hooks
   */
  detectStateUsage(code: string): boolean {
    const statePatterns = [
      /useState\s*\(/,
      /useEffect\s*\(/,
      /useReducer\s*\(/,
      /useCallback\s*\(/,
      /useMemo\s*\(/,
      /useRef\s*\(/,
      /useContext\s*\(/,
      /useLayoutEffect\s*\(/,
      /useImperativeHandle\s*\(/,
      /useDebugValue\s*\(/,
      /use[A-Z]\w*\s*\(/, // Custom hooks
    ];

    return statePatterns.some((pattern) => pattern.test(code));
  }

  /**
   * Detect if component uses browser-specific APIs
   */
  private detectBrowserAPI(code: string): boolean {
    const browserPatterns = [
      /window\./,
      /document\./,
      /localStorage/,
      /sessionStorage/,
      /navigator\./,
      /location\./,
      /addEventListener/,
      /removeEventListener/,
      /setTimeout/,
      /setInterval/,
      /fetch\s*\(/,
    ];

    return browserPatterns.some((pattern) => pattern.test(code));
  }

  /**
   * Preserve React hooks and event handlers during transformation
   */
  private preserveReactFeatures(code: string): string {
    // This method ensures that React features are preserved
    // Currently, we're not modifying React features, just ensuring they remain intact

    // Preserve event handlers (onClick, onChange, etc.)
    // These should remain as-is in the original Tailwind UI code

    // Preserve React hooks
    // These should also remain as-is

    return code;
  }

  /**
   * Ensure proper TypeScript component structure
   */
  private ensureComponentStructure(code: string): string {
    // Check if code has proper export structure
    if (!code.includes("export default") && !code.includes("export {")) {
      // Try to find the main component function
      const componentMatch = code.match(/(?:function|const)\s+(\w+)/);
      if (componentMatch && componentMatch[1]) {
        const componentName = componentMatch[1];
        // Add export default if not present
        if (!code.includes(`export default ${componentName}`)) {
          code += `\n\nexport default ${componentName};`;
        }
      }
    }

    return code;
  }

  /**
   * Extract import statements from code
   */
  extractImports(code: string): string[] {
    const imports: string[] = [];
    const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
    let match;

    while ((match = importRegex.exec(code)) !== null) {
      if (match[1]) {
        imports.push(match[1]);
      }
    }

    return imports;
  }

  /**
   * Process and clean up component code
   */
  processCode(code: string): string {
    let processedCode = code;

    // Remove any existing 'use client' directives to avoid duplicates
    processedCode = processedCode.replace(/['"]use client['"];\s*/g, "");

    // Clean up extra whitespace
    processedCode = processedCode.replace(/\n\s*\n\s*\n/g, "\n\n");

    // Ensure proper spacing around imports
    processedCode = processedCode.replace(/(import.*?;)\n([^import\n])/g, "$1\n\n$2");

    return processedCode.trim();
  }
}
