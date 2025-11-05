/**
 * JSDoc header generation for Tailwind UI components
 */

import { ComponentMetadata } from "../types/index.js";

/**
 * Generates JSDoc header with required tags for component documentation
 */
export class JSDocGenerator {
  /**
   * Generate JSDoc header with metadata-driven documentation
   */
  generateJSDocHeader(metadata: ComponentMetadata): string {
    const { pattern, variant, component, source, usage, framework, dependencies } =
      metadata;

    const jsdocLines = [
      "/**",
      ` * ${component} - ${variant}`,
      " *",
      ` * @pattern ${pattern}`,
      ` * @variant ${variant}`,
      ` * @component ${component}`,
      ` * @source ${source}`,
      ` * @usage ${usage}`,
      ` * @framework ${framework}`,
      ` * @dependencies ${dependencies.join(", ")}`,
    ];

    // Add closing comment
    jsdocLines.push(" */");

    return jsdocLines.join("\n");
  }

  /**
   * Add JSDoc header to existing component code
   */
  addJSDocToComponent(componentCode: string, metadata: ComponentMetadata): string {
    const jsdocHeader = this.generateJSDocHeader(metadata);

    // Find the first import or export statement to place JSDoc before it
    const lines = componentCode.split("\n");
    let insertIndex = 0;

    // Skip any existing comments or empty lines at the top
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]?.trim();
      if (
        line &&
        !line.startsWith("//") &&
        !line.startsWith("/*") &&
        !line.startsWith("*")
      ) {
        insertIndex = i;
        break;
      }
    }

    // Insert JSDoc header
    lines.splice(insertIndex, 0, jsdocHeader, "");

    return lines.join("\n");
  }

  /**
   * Create component metadata from parsed component data
   */
  createMetadata(
    section: string,
    variant: string,
    componentName: string,
    dependencies: string[] = ["react"]
  ): ComponentMetadata {
    return {
      pattern: section,
      variant: variant,
      component: componentName,
      source: "Tailwind UI",
      usage: `A ${variant} ${section} component from Tailwind UI`,
      framework: "agnostic",
      dependencies: dependencies,
    };
  }

  /**
   * Extract dependencies from component code
   */
  extractDependencies(componentCode: string): string[] {
    const dependencies = new Set<string>(["react"]);

    // Look for import statements
    const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
    let match;

    while ((match = importRegex.exec(componentCode)) !== null) {
      const importPath = match[1];

      if (!importPath) continue;

      // Add common UI library dependencies
      if (importPath.includes("@headlessui")) {
        dependencies.add("@headlessui/react");
      } else if (importPath.includes("@heroicons")) {
        dependencies.add("@heroicons/react");
      } else if (importPath.includes("lucide-react")) {
        dependencies.add("lucide-react");
      }
      // Add other common dependencies as needed
    }

    return Array.from(dependencies);
  }
}
