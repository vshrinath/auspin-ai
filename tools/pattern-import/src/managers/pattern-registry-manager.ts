/**
 * Pattern Registry Manager for the Tailwind UI Pattern Import System
 * Handles pattern.config.json files for component metadata and organization
 */

import { promises as fs } from "fs";
import path from "path";
import { ComponentData, PatternRegistry } from "../types/index.js";
import { PATHS } from "../config/constants.js";
import { sanitizePath } from "../utils/index.js";

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

export class PatternRegistryManagerImpl implements PatternRegistryManager {
  private readonly baseOutputPath: string;

  constructor(baseOutputPath: string = process.cwd()) {
    this.baseOutputPath = baseOutputPath;
  }

  /**
   * Get the full path to a section's pattern registry file
   */
  getRegistryPath(section: string): string {
    const sanitizedSection = sanitizePath(section);
    return path.join(
      this.baseOutputPath,
      PATHS.COMPONENTS_BASE,
      sanitizedSection,
      PATHS.REGISTRY_FILENAME
    );
  }

  /**
   * Check if a registry file exists for a section
   */
  async registryExists(section: string): Promise<boolean> {
    try {
      const registryPath = this.getRegistryPath(section);
      await fs.access(registryPath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Create a new registry file for a section
   */
  async createRegistry(section: string): Promise<void> {
    const registryPath = this.getRegistryPath(section);

    // Ensure directory exists
    const registryDir = path.dirname(registryPath);
    await fs.mkdir(registryDir, { recursive: true });

    // Create initial registry structure
    const initialRegistry = {
      section: sanitizePath(section),
      components: [],
      metadata: {
        created: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        version: "1.0.0",
      },
    };

    await fs.writeFile(registryPath, JSON.stringify(initialRegistry, null, 2), "utf8");
  }

  /**
   * Read and parse a registry file
   */
  private async readRegistry(section: string): Promise<any> {
    const registryPath = this.getRegistryPath(section);

    try {
      const content = await fs.readFile(registryPath, "utf8");
      return JSON.parse(content);
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code === "ENOENT") {
        // Registry doesn't exist, create it
        await this.createRegistry(section);
        return this.readRegistry(section);
      }
      throw new Error(
        `Failed to read registry for section "${section}": ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Write registry data to file
   */
  private async writeRegistry(section: string, data: any): Promise<void> {
    const registryPath = this.getRegistryPath(section);

    // Update metadata
    data.metadata = {
      ...data.metadata,
      lastUpdated: new Date().toISOString(),
    };

    await fs.writeFile(registryPath, JSON.stringify(data, null, 2), "utf8");
  }

  /**
   * Validate registry data structure
   */
  validateRegistryData(data: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data || typeof data !== "object") {
      errors.push("Registry data must be an object");
      return { isValid: false, errors };
    }

    if (!data.section || typeof data.section !== "string") {
      errors.push("Registry must have a valid section name");
    }

    if (!Array.isArray(data.components)) {
      errors.push("Registry must have a components array");
    } else {
      // Validate each component
      data.components.forEach((component: any, index: number) => {
        if (!component.componentName || typeof component.componentName !== "string") {
          errors.push(`Component at index ${index} must have a valid componentName`);
        }
        if (!component.variant || typeof component.variant !== "string") {
          errors.push(`Component at index ${index} must have a valid variant`);
        }
        if (!component.source || typeof component.source !== "string") {
          errors.push(`Component at index ${index} must have a valid source`);
        }
        if (!component.path || typeof component.path !== "string") {
          errors.push(`Component at index ${index} must have a valid path`);
        }
        if (!component.framework || typeof component.framework !== "string") {
          errors.push(`Component at index ${index} must have a valid framework`);
        }
      });
    }

    if (!data.metadata || typeof data.metadata !== "object") {
      errors.push("Registry must have metadata object");
    }

    return { isValid: errors.length === 0, errors };
  }

  /**
   * Update registry with new component data
   * Implements PatternRegistry interface method
   */
  async updateRegistry(section: string, componentData: ComponentData): Promise<void> {
    const registry = await this.readRegistry(section);

    // Validate the registry structure
    const validation = this.validateRegistryData(registry);
    if (!validation.isValid) {
      throw new Error(`Invalid registry structure: ${validation.errors.join(", ")}`);
    }

    // Check if component already exists
    const existingIndex = registry.components.findIndex(
      (comp: ComponentData) => comp.componentName === componentData.componentName
    );

    if (existingIndex >= 0) {
      // Update existing component
      registry.components[existingIndex] = { ...componentData };
    } else {
      // Add new component
      registry.components.push({ ...componentData });
    }

    // Sort components by name for consistency
    registry.components.sort((a: ComponentData, b: ComponentData) =>
      a.componentName.localeCompare(b.componentName)
    );

    await this.writeRegistry(section, registry);
  }

  /**
   * Get all existing components in a section
   * Implements PatternRegistry interface method
   */
  async getExistingComponents(section: string): Promise<ComponentData[]> {
    try {
      const registry = await this.readRegistry(section);
      return registry.components || [];
    } catch {
      // If registry doesn't exist or can't be read, return empty array
      return [];
    }
  }

  /**
   * Get a specific component by name
   */
  async getComponentByName(
    section: string,
    componentName: string
  ): Promise<ComponentData | null> {
    const components = await this.getExistingComponents(section);
    return components.find((comp) => comp.componentName === componentName) || null;
  }

  /**
   * Remove a component from the registry
   */
  async removeComponent(section: string, componentName: string): Promise<boolean> {
    const registry = await this.readRegistry(section);

    const initialLength = registry.components.length;
    registry.components = registry.components.filter(
      (comp: ComponentData) => comp.componentName !== componentName
    );

    if (registry.components.length < initialLength) {
      await this.writeRegistry(section, registry);
      return true;
    }

    return false;
  }

  /**
   * Update metadata for an existing component
   */
  async updateComponentMetadata(
    section: string,
    componentName: string,
    updates: Partial<ComponentData>
  ): Promise<boolean> {
    const registry = await this.readRegistry(section);

    const componentIndex = registry.components.findIndex(
      (comp: ComponentData) => comp.componentName === componentName
    );

    if (componentIndex >= 0) {
      registry.components[componentIndex] = {
        ...registry.components[componentIndex],
        ...updates,
      };
      await this.writeRegistry(section, registry);
      return true;
    }

    return false;
  }

  /**
   * Create a backup of a registry file
   */
  async backupRegistry(section: string): Promise<string> {
    const registryPath = this.getRegistryPath(section);
    const backupPath = `${registryPath}.backup.${Date.now()}`;

    try {
      await fs.copyFile(registryPath, backupPath);
      return backupPath;
    } catch (error) {
      throw new Error(
        `Failed to backup registry: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Restore a registry from backup
   */
  async restoreRegistry(section: string, backupPath: string): Promise<void> {
    const registryPath = this.getRegistryPath(section);

    try {
      await fs.copyFile(backupPath, registryPath);
    } catch (error) {
      throw new Error(
        `Failed to restore registry: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Get all available registry sections
   */
  async getAllRegistries(): Promise<string[]> {
    const patternsPath = path.join(this.baseOutputPath, PATHS.COMPONENTS_BASE);

    try {
      const entries = await fs.readdir(patternsPath, { withFileTypes: true });
      const sections: string[] = [];

      for (const entry of entries) {
        if (entry.isDirectory()) {
          const registryPath = path.join(
            patternsPath,
            entry.name,
            PATHS.REGISTRY_FILENAME
          );
          try {
            await fs.access(registryPath);
            sections.push(entry.name);
          } catch {
            // Registry doesn't exist for this section, skip it
          }
        }
      }

      return sections.sort();
    } catch {
      // Patterns directory doesn't exist
      return [];
    }
  }
}
