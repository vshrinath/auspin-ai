/**
 * Registry Query Service for the Tailwind UI Pattern Import System
 * Provides advanced querying capabilities for component discovery and validation
 */

import { ComponentData, PatternRegistryManager } from "../types/index.js";
import { PatternRegistryManagerImpl } from "./pattern-registry-manager.js";

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

export class RegistryQueryService {
  private registryManager: PatternRegistryManager;

  constructor(baseOutputPath?: string) {
    this.registryManager = new PatternRegistryManagerImpl(baseOutputPath);
  }

  /**
   * Query components across all sections with filtering options
   */
  async queryComponents(
    options: RegistryQueryOptions = {}
  ): Promise<RegistryQueryResult> {
    const allSections = await this.registryManager.getAllRegistries();
    const matchedSections: string[] = [];
    let allComponents: ComponentData[] = [];

    // Filter sections if specified
    const sectionsToSearch = options.section
      ? allSections.filter((section) => section === options.section)
      : allSections;

    // Collect components from all relevant sections
    for (const section of sectionsToSearch) {
      const sectionComponents = await this.registryManager.getExistingComponents(section);

      if (sectionComponents.length > 0) {
        matchedSections.push(section);
        allComponents = allComponents.concat(sectionComponents);
      }
    }

    // Apply filters
    let filteredComponents = allComponents;

    if (options.variant) {
      const variant = options.variant.toLowerCase();
      filteredComponents = filteredComponents.filter((comp) =>
        comp.variant.toLowerCase().includes(variant)
      );
    }

    if (options.source) {
      const source = options.source.toLowerCase();
      filteredComponents = filteredComponents.filter((comp) =>
        comp.source.toLowerCase().includes(source)
      );
    }

    if (options.framework) {
      const framework = options.framework.toLowerCase();
      filteredComponents = filteredComponents.filter(
        (comp) => comp.framework.toLowerCase() === framework
      );
    }

    if (options.componentName) {
      const componentName = options.componentName.toLowerCase();
      filteredComponents = filteredComponents.filter((comp) =>
        comp.componentName.toLowerCase().includes(componentName)
      );
    }

    if (options.searchTerm) {
      const searchTerm = options.searchTerm.toLowerCase();
      filteredComponents = filteredComponents.filter(
        (comp) =>
          comp.componentName.toLowerCase().includes(searchTerm) ||
          comp.variant.toLowerCase().includes(searchTerm) ||
          comp.source.toLowerCase().includes(searchTerm)
      );
    }

    return {
      components: filteredComponents,
      totalCount: filteredComponents.length,
      sections: allSections,
      matchedSections,
    };
  }

  /**
   * Find components by section
   */
  async getComponentsBySection(section: string): Promise<ComponentData[]> {
    return this.registryManager.getExistingComponents(section);
  }

  /**
   * Find a specific component by name and section
   */
  async findComponent(
    section: string,
    componentName: string
  ): Promise<ComponentData | null> {
    return this.registryManager.getComponentByName(section, componentName);
  }

  /**
   * Search for components by variant across all sections
   */
  async findComponentsByVariant(variant: string): Promise<ComponentData[]> {
    const result = await this.queryComponents({ variant });
    return result.components;
  }

  /**
   * Get all unique variants across all sections
   */
  async getAllVariants(): Promise<string[]> {
    const result = await this.queryComponents();
    const variants = new Set<string>();

    result.components.forEach((comp) => variants.add(comp.variant));

    return Array.from(variants).sort();
  }

  /**
   * Get all unique sources across all sections
   */
  async getAllSources(): Promise<string[]> {
    const result = await this.queryComponents();
    const sources = new Set<string>();

    result.components.forEach((comp) => sources.add(comp.source));

    return Array.from(sources).sort();
  }

  /**
   * Get all unique frameworks across all sections
   */
  async getAllFrameworks(): Promise<string[]> {
    const result = await this.queryComponents();
    const frameworks = new Set<string>();

    result.components.forEach((comp) => frameworks.add(comp.framework));

    return Array.from(frameworks).sort();
  }

  /**
   * Validate if a component name would conflict with existing components
   */
  async validateComponentName(
    section: string,
    componentName: string
  ): Promise<ComponentValidationResult> {
    const existingComponent = await this.registryManager.getComponentByName(
      section,
      componentName
    );

    if (existingComponent) {
      return {
        exists: true,
        component: existingComponent,
        conflicts: [existingComponent],
        suggestions: await this.generateNameSuggestions(section, componentName),
      };
    }

    // Check for similar names that might cause confusion
    const allComponents = await this.registryManager.getExistingComponents(section);
    const similarComponents = allComponents.filter(
      (comp) => this.calculateSimilarity(comp.componentName, componentName) > 0.7
    );

    return {
      exists: false,
      conflicts: similarComponents,
      suggestions:
        similarComponents.length > 0
          ? await this.generateNameSuggestions(section, componentName)
          : [],
    };
  }

  /**
   * Generate alternative component name suggestions
   */
  private async generateNameSuggestions(
    section: string,
    baseName: string
  ): Promise<string[]> {
    const suggestions: string[] = [];
    const existingComponents = await this.registryManager.getExistingComponents(section);
    const existingNames = new Set(existingComponents.map((comp) => comp.componentName));

    // Generate versioned names
    for (let i = 2; i <= 5; i++) {
      const versionedName = `${baseName}V${i}`;
      if (!existingNames.has(versionedName)) {
        suggestions.push(versionedName);
      }
    }

    // Generate alternative suffixes
    const suffixes = ["Alt", "New", "Updated", "Modern", "Enhanced"];
    for (const suffix of suffixes) {
      const altName = `${baseName}${suffix}`;
      if (!existingNames.has(altName)) {
        suggestions.push(altName);
      }
    }

    return suggestions.slice(0, 3); // Return top 3 suggestions
  }

  /**
   * Calculate similarity between two strings (simple Levenshtein-based)
   */
  private calculateSimilarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) return 1.0;

    const distance = this.levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  }

  /**
   * Calculate Levenshtein distance between two strings
   */
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = Array(str2.length + 1)
      .fill(null)
      .map(() => Array(str1.length + 1).fill(0));

    for (let i = 0; i <= str1.length; i++) matrix[0]![i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j]![0] = j;

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j]![i] = Math.min(
          matrix[j]![i - 1]! + 1, // deletion
          matrix[j - 1]![i]! + 1, // insertion
          matrix[j - 1]![i - 1]! + indicator // substitution
        );
      }
    }

    return matrix[str2.length]![str1.length]!;
  }

  /**
   * Get registry statistics
   */
  async getRegistryStats(): Promise<{
    totalSections: number;
    totalComponents: number;
    componentsBySection: Record<string, number>;
    componentsByFramework: Record<string, number>;
    componentsBySource: Record<string, number>;
  }> {
    const result = await this.queryComponents();
    const stats = {
      totalSections: result.sections.length,
      totalComponents: result.totalCount,
      componentsBySection: {} as Record<string, number>,
      componentsByFramework: {} as Record<string, number>,
      componentsBySource: {} as Record<string, number>,
    };

    // Count components by section
    for (const section of result.sections) {
      const sectionComponents = await this.registryManager.getExistingComponents(section);
      stats.componentsBySection[section] = sectionComponents.length;
    }

    // Count components by framework
    result.components.forEach((comp) => {
      stats.componentsByFramework[comp.framework] =
        (stats.componentsByFramework[comp.framework] || 0) + 1;
    });

    // Count components by source
    result.components.forEach((comp) => {
      stats.componentsBySource[comp.source] =
        (stats.componentsBySource[comp.source] || 0) + 1;
    });

    return stats;
  }

  /**
   * Check if a registry exists for a section
   */
  async hasRegistry(section: string): Promise<boolean> {
    return this.registryManager.registryExists(section);
  }

  /**
   * Get all available sections (with registries)
   */
  async getAvailableSections(): Promise<string[]> {
    return this.registryManager.getAllRegistries();
  }

  /**
   * Perform a full-text search across all component data
   */
  async fullTextSearch(searchTerm: string): Promise<ComponentData[]> {
    const result = await this.queryComponents({ searchTerm });
    return result.components;
  }

  /**
   * Find components that might be duplicates based on variant similarity
   */
  async findPotentialDuplicates(threshold: number = 0.8): Promise<
    Array<{
      components: ComponentData[];
      similarity: number;
    }>
  > {
    const allComponents = (await this.queryComponents()).components;
    const duplicates: Array<{ components: ComponentData[]; similarity: number }> = [];

    for (let i = 0; i < allComponents.length; i++) {
      for (let j = i + 1; j < allComponents.length; j++) {
        const comp1 = allComponents[i];
        const comp2 = allComponents[j];

        if (comp1 && comp2) {
          const similarity = this.calculateSimilarity(comp1.variant, comp2.variant);

          if (similarity >= threshold) {
            duplicates.push({
              components: [comp1, comp2],
              similarity,
            });
          }
        }
      }
    }

    return duplicates.sort((a, b) => b.similarity - a.similarity);
  }

  /**
   * Get all sections (alias for getAvailableSections for compatibility)
   */
  async getAllSections(): Promise<string[]> {
    return this.getAvailableSections();
  }
}
