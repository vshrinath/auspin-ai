/**
 * Import standardization system for maintaining framework agnostic compatibility
 */

/**
 * Standardizes imports to React and Headless UI libraries while avoiding framework-specific dependencies
 */
export class ImportStandardizer {
  /**
   * Framework-specific imports that should be avoided or replaced
   */
  private readonly frameworkSpecificImports = new Map<string, string>([
    // Next.js specific imports
    ["next/link", "react"], // Replace with standard anchor tags
    ["next/image", "react"], // Replace with standard img tags
    ["next/router", "react"], // Remove router dependencies
    ["next/head", "react"], // Remove head dependencies

    // Gatsby specific imports
    ["gatsby", "react"],
    ["gatsby-link", "react"],

    // Other framework specific
    ["@reach/router", "react"],
    ["react-router-dom", "react"], // Make optional, use standard navigation
  ]);

  /**
   * Allowed standard imports that maintain framework compatibility
   */
  private readonly allowedImports = new Set<string>([
    "react",
    "@headlessui/react",
    "@heroicons/react",
    "lucide-react",
    "clsx",
    "class-variance-authority",
    "tailwind-merge",
  ]);

  /**
   * Process and standardize imports in component code
   */
  standardizeImports(code: string): string {
    let processedCode = code;

    // 1. Replace framework-specific imports
    processedCode = this.replaceFrameworkSpecificImports(processedCode);

    // 2. Standardize import statements
    processedCode = this.standardizeImportStatements(processedCode);

    // 3. Remove unused imports
    processedCode = this.removeUnusedImports(processedCode);

    // 4. Sort and organize imports
    processedCode = this.organizeImports(processedCode);

    return processedCode;
  }

  /**
   * Replace framework-specific imports with standard alternatives
   */
  private replaceFrameworkSpecificImports(code: string): string {
    let processedCode = code;

    // Replace Next.js Link with standard anchor tags
    if (processedCode.includes("next/link")) {
      // Remove Link import
      processedCode = processedCode.replace(
        /import\s+.*?Link.*?from\s+['"]next\/link['"];\s*/g,
        ""
      );

      // Replace Link components with anchor tags
      processedCode = processedCode.replace(
        /<Link\s+href=['"]([^'"]+)['"][^>]*>/g,
        '<a href="$1">'
      );
      processedCode = processedCode.replace(/<\/Link>/g, "</a>");
    }

    // Replace Next.js Image with standard img tags
    if (processedCode.includes("next/image")) {
      // Remove Image import
      processedCode = processedCode.replace(
        /import\s+.*?Image.*?from\s+['"]next\/image['"];\s*/g,
        ""
      );

      // Replace Image components with img tags (basic replacement)
      processedCode = processedCode.replace(
        /<Image\s+src=['"]([^'"]+)['"][^>]*\/>/g,
        '<img src="$1" alt="" />'
      );
    }

    // Remove other framework-specific imports
    for (const [frameworkImport] of this.frameworkSpecificImports) {
      const importRegex = new RegExp(
        `import\\s+.*?from\\s+['"]${frameworkImport.replace("/", "\\/")}['"];?\\s*`,
        "g"
      );
      processedCode = processedCode.replace(importRegex, "");
    }

    return processedCode;
  }

  /**
   * Standardize import statement format
   */
  private standardizeImportStatements(code: string): string {
    const lines = code.split("\n");
    const processedLines: string[] = [];

    for (const line of lines) {
      let processedLine = line;

      // Standardize React import format
      if (line.includes("from 'react'") || line.includes('from "react"')) {
        // Ensure React import is properly formatted
        if (
          !line.includes("import React") &&
          (line.includes("useState") || line.includes("useEffect"))
        ) {
          processedLine = line.replace(
            /import\s+{([^}]+)}\s+from\s+['"]react['"]/,
            "import React, { $1 } from 'react'"
          );
        }
      }

      // Ensure single quotes for consistency
      processedLine = processedLine.replace(/from\s+"([^"]+)"/g, "from '$1'");

      processedLines.push(processedLine);
    }

    return processedLines.join("\n");
  }

  /**
   * Remove unused imports (basic implementation)
   */
  private removeUnusedImports(code: string): string {
    const lines = code.split("\n");
    const importLines: string[] = [];
    const codeLines: string[] = [];

    // Separate imports from code
    let inImportSection = true;
    for (const line of lines) {
      if (line.trim().startsWith("import ")) {
        importLines.push(line);
      } else if (line.trim() === "") {
        if (inImportSection) {
          importLines.push(line);
        } else {
          codeLines.push(line);
        }
      } else {
        inImportSection = false;
        codeLines.push(line);
      }
    }

    const codeContent = codeLines.join("\n");
    const usedImports: string[] = [];

    // Check which imports are actually used
    for (const importLine of importLines) {
      if (importLine.trim() === "") {
        usedImports.push(importLine);
        continue;
      }

      // Extract imported names
      const importMatch = importLine.match(
        /import\s+(?:(\w+),?\s*)?(?:{([^}]+)})?\s+from/
      );
      if (importMatch) {
        const defaultImport = importMatch[1];
        const namedImports = importMatch[2];

        let isUsed = false;

        // Check if default import is used
        if (defaultImport && codeContent.includes(defaultImport)) {
          isUsed = true;
        }

        // Check if named imports are used
        if (namedImports) {
          const imports = namedImports.split(",").map((imp) => imp.trim());
          for (const imp of imports) {
            if (codeContent.includes(imp)) {
              isUsed = true;
              break;
            }
          }
        }

        if (isUsed) {
          usedImports.push(importLine);
        }
      } else {
        // Keep import if we can't parse it
        usedImports.push(importLine);
      }
    }

    return [...usedImports, ...codeLines].join("\n");
  }

  /**
   * Organize and sort imports
   */
  private organizeImports(code: string): string {
    const lines = code.split("\n");
    const imports: string[] = [];
    const nonImports: string[] = [];

    let foundFirstNonImport = false;

    for (const line of lines) {
      if (line.trim().startsWith("import ")) {
        if (!foundFirstNonImport) {
          imports.push(line);
        } else {
          // Import found after non-import code, keep in place
          nonImports.push(line);
        }
      } else {
        if (line.trim() !== "" || foundFirstNonImport) {
          foundFirstNonImport = true;
        }
        nonImports.push(line);
      }
    }

    // Sort imports
    const sortedImports = imports.sort((a, b) => {
      // React imports first
      if (a.includes("from 'react'")) return -1;
      if (b.includes("from 'react'")) return 1;

      // External libraries next
      const aIsExternal = !a.includes("from './") && !a.includes("from '../");
      const bIsExternal = !b.includes("from './") && !b.includes("from '../");

      if (aIsExternal && !bIsExternal) return -1;
      if (!aIsExternal && bIsExternal) return 1;

      // Alphabetical order
      return a.localeCompare(b);
    });

    // Combine sorted imports with rest of code
    const result = [...sortedImports];
    if (sortedImports.length > 0 && nonImports.some((line) => line.trim() !== "")) {
      result.push(""); // Add blank line after imports
    }
    result.push(...nonImports);

    return result.join("\n");
  }

  /**
   * Validate that imports are framework agnostic
   */
  validateImports(code: string): { isValid: boolean; issues: string[] } {
    const issues: string[] = [];
    const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
    let match;

    while ((match = importRegex.exec(code)) !== null) {
      const importPath = match[1];

      if (!importPath) continue;

      // Check for framework-specific imports
      if (this.frameworkSpecificImports.has(importPath)) {
        issues.push(`Framework-specific import detected: ${importPath}`);
      }

      // Check for relative imports that might be framework-specific
      if (importPath.startsWith("./") || importPath.startsWith("../")) {
        // These are generally okay, but we could add specific checks
        continue;
      }

      // Warn about unknown external dependencies
      if (!this.allowedImports.has(importPath) && !importPath.startsWith("@/")) {
        issues.push(
          `Unknown external dependency: ${importPath}. Verify framework compatibility.`
        );
      }
    }

    return {
      isValid: issues.length === 0,
      issues,
    };
  }

  /**
   * Get list of allowed imports for reference
   */
  getAllowedImports(): string[] {
    return Array.from(this.allowedImports);
  }

  /**
   * Add custom allowed import
   */
  addAllowedImport(importPath: string): void {
    this.allowedImports.add(importPath);
  }
}
