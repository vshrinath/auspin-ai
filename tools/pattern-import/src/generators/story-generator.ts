/**
 * Story Generator for Tailwind UI Pattern Import System
 *
 * Generates Storybook story files for imported components with proper TypeScript types,
 * Meta configuration, and default story implementations.
 */

import { promises as fs } from "fs";
import path from "path";
import { ComponentMetadata, StoryGenerator, FileSystemManager } from "../types/index.js";
import { generateStoryPath } from "../utils/index.js";

export class TailwindUIStoryGenerator implements StoryGenerator {
  private readonly fileSystemManager: FileSystemManager;
  private readonly baseOutputPath: string;

  constructor(
    fileSystemManager: FileSystemManager,
    baseOutputPath: string = process.cwd()
  ) {
    this.fileSystemManager = fileSystemManager;
    this.baseOutputPath = baseOutputPath;
  }
  /**
   * Generate a complete Storybook story file for a component
   */
  generateStory(componentName: string, section: string): string {
    const importPath = `@salient/ui/components/patterns/${section}`;
    const storyTitle = `${this.capitalizeFirst(section)}/${componentName}`;

    return this.createStoryTemplate(
      {
        pattern: section,
        variant: this.extractVariantFromName(componentName, section),
        component: componentName,
        source: "Tailwind UI",
        usage: `${componentName} component from Tailwind UI`,
        framework: "agnostic",
        dependencies: [],
      },
      importPath,
      storyTitle
    );
  }

  /**
   * Create a story template with proper Meta and StoryObj configuration
   */
  createStoryTemplate(
    metadata: ComponentMetadata,
    importPath: string,
    storyTitle: string
  ): string {
    const { component } = metadata;

    return `import type { Meta, StoryObj } from "@storybook/react";
import { ${component} } from "${importPath}";

const meta: Meta<typeof ${component}> = {
  title: "${storyTitle}",
  component: ${component},
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ${component}>;

export const Default: Story = {
  render: () => <${component} />,
};
`;
  }

  /**
   * Extract variant name from component name by removing section prefix
   */
  private extractVariantFromName(componentName: string, section: string): string {
    const sectionPascal = this.toPascalCase(section);
    if (componentName.startsWith(sectionPascal)) {
      return componentName.slice(sectionPascal.length);
    }
    return componentName;
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
   * Capitalize first letter of a string
   */
  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Write story file to the correct apps/web/stories location
   * Ensures Storybook compatibility and proper import paths
   */
  async writeStoryFile(componentName: string, section: string): Promise<string> {
    // Generate story content
    const storyContent = this.generateStory(componentName, section);

    // Generate story file path
    const storyPath = generateStoryPath(componentName);

    // Ensure stories directory exists
    const storiesDir = path.join(this.baseOutputPath, "apps", "web", "stories");
    try {
      await fs.mkdir(storiesDir, { recursive: true });
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code !== "EEXIST") {
        throw new Error(`Failed to create stories directory: ${error.message}`);
      }
    }

    // Write story file
    await this.fileSystemManager.writeComponent(storyPath, storyContent);

    return storyPath;
  }

  /**
   * Check if a story file already exists for the component
   */
  async storyExists(componentName: string): Promise<boolean> {
    const storyPath = generateStoryPath(componentName);
    return await this.fileSystemManager.checkFileExists(storyPath);
  }

  /**
   * Generate versioned story name if conflict exists
   */
  async generateVersionedStoryName(componentName: string): Promise<string> {
    let versionedName = componentName;
    let version = 2;

    while (await this.storyExists(versionedName)) {
      versionedName = `${componentName}V${version}`;
      version++;
    }

    return versionedName;
  }

  /**
   * Write story file with conflict resolution
   * Automatically handles versioning if story already exists
   */
  async writeStoryFileSafe(
    componentName: string,
    section: string,
    allowOverwrite: boolean = false
  ): Promise<{ storyPath: string; finalComponentName: string }> {
    let finalComponentName = componentName;

    // Check for conflicts and generate versioned name if needed
    if (!allowOverwrite && (await this.storyExists(componentName))) {
      finalComponentName = await this.generateVersionedStoryName(componentName);
    }

    // Write the story file
    const storyPath = await this.writeStoryFile(finalComponentName, section);

    return {
      storyPath,
      finalComponentName,
    };
  }

  /**
   * Validate story file content for Storybook compatibility
   */
  validateStoryContent(content: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check for required imports
    if (!content.includes("import type { Meta, StoryObj }")) {
      errors.push("Missing required Storybook type imports");
    }

    // Check for Meta configuration
    if (!content.includes("const meta: Meta<")) {
      errors.push("Missing Meta configuration");
    }

    // Check for default export
    if (!content.includes("export default meta")) {
      errors.push("Missing default meta export");
    }

    // Check for Story type definition
    if (!content.includes("type Story = StoryObj<")) {
      errors.push("Missing Story type definition");
    }

    // Check for Default story
    if (!content.includes("export const Default: Story")) {
      errors.push("Missing Default story export");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
