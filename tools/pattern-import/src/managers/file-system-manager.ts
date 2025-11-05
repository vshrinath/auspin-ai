/**
 * File System Manager for the Tailwind UI Pattern Import System
 * Handles directory creation, file operations, and versioning
 */

import { promises as fs } from "fs";
import path from "path";
import { FileSystemManager, FilePaths } from "../types/index.js";
import {
  generateComponentPath,
  generateSectionBarrelPath,
  generateStoryPath,
  generateRegistryPath,
  createVersionedName,
  sanitizePath,
  extractVersionNumber,
  findNextVersion,
} from "../utils/index.js";

export class FileSystemManagerImpl implements FileSystemManager {
  private readonly baseOutputPath: string;

  constructor(baseOutputPath: string = process.cwd()) {
    this.baseOutputPath = baseOutputPath;
  }

  /**
   * Create nested directory structure for patterns
   * Handles section-based organization and ensures consistent path generation
   */
  async createDirectoryStructure(section: string): Promise<void> {
    const sanitizedSection = sanitizePath(section);

    // Define all directories that need to be created
    const directories = [
      // Main component directory
      path.join(
        this.baseOutputPath,
        "packages",
        "ui",
        "components",
        "patterns",
        sanitizedSection
      ),
      // Stories directory
      path.join(this.baseOutputPath, "apps", "web", "stories"),
      // Ensure base packages/ui exists
      path.join(this.baseOutputPath, "packages", "ui"),
    ];

    // Create all directories recursively
    for (const dir of directories) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        if (error instanceof Error && "code" in error && error.code !== "EEXIST") {
          throw new Error(`Failed to create directory ${dir}: ${error.message}`);
        }
      }
    }
  }

  /**
   * Check if a file exists at the given path
   */
  async checkFileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(path.join(this.baseOutputPath, filePath));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Generate versioned name for components to prevent conflicts
   * Creates V2, V3, etc. variants when files already exist
   */
  async generateVersionedName(baseName: string, section: string): Promise<string> {
    const componentDir = path.join(
      this.baseOutputPath,
      "packages",
      "ui",
      "components",
      "patterns",
      section
    );

    try {
      // Get existing files in the section directory
      const existingFiles = await fs.readdir(componentDir);
      const existingTsxFiles = existingFiles.filter((file) => file.endsWith(".tsx"));

      // Check if base name conflicts
      const baseFileName = `${baseName}.tsx`;
      if (!existingTsxFiles.includes(baseFileName)) {
        return baseName;
      }

      // Generate versioned name
      const versionedName = createVersionedName(baseName, ".tsx", existingTsxFiles);
      return versionedName.replace(".tsx", "");
    } catch (error) {
      // If directory doesn't exist yet, return base name
      if (error instanceof Error && "code" in error && error.code === "ENOENT") {
        return baseName;
      }
      throw new Error(
        `Failed to check existing files: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Check if a component name would conflict with existing files
   */
  async checkNameConflict(componentName: string, section: string): Promise<boolean> {
    const componentPath = generateComponentPath(section, componentName);
    return await this.checkFileExists(componentPath);
  }

  /**
   * Get all versions of a component that exist
   */
  async getComponentVersions(baseName: string, section: string): Promise<string[]> {
    const componentDir = path.join(
      this.baseOutputPath,
      "packages",
      "ui",
      "components",
      "patterns",
      section
    );

    try {
      const existingFiles = await fs.readdir(componentDir);
      const basePattern = new RegExp(`^${baseName}(V\\d+)?\\.tsx$`);

      return existingFiles
        .filter((file) => basePattern.test(file))
        .map((file) => file.replace(".tsx", ""))
        .sort((a, b) => {
          const versionA = extractVersionNumber(a);
          const versionB = extractVersionNumber(b);
          return versionA - versionB;
        });
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code === "ENOENT") {
        return [];
      }
      throw new Error(
        `Failed to get component versions: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Prevent overwriting existing components by checking before write
   */
  async safeWriteComponent(
    filePath: string,
    content: string,
    allowOverwrite: boolean = false
  ): Promise<void> {
    if (!allowOverwrite && (await this.checkFileExists(filePath))) {
      throw new Error(
        `File already exists: ${filePath}. Use versioning or set allowOverwrite to true.`
      );
    }

    await this.writeComponent(filePath, content);
  }

  /**
   * Write component file to the correct location
   * Handles file system permissions and errors with atomic operations
   */
  async writeComponent(filePath: string, content: string): Promise<void> {
    const fullPath = path.join(this.baseOutputPath, filePath);
    const directory = path.dirname(fullPath);

    try {
      // Ensure directory exists
      await fs.mkdir(directory, { recursive: true });

      // Write file atomically by writing to temp file first
      const tempPath = `${fullPath}.tmp`;
      await fs.writeFile(tempPath, content, "utf8");

      // Rename temp file to final name (atomic operation)
      await fs.rename(tempPath, fullPath);
    } catch (error) {
      // Clean up temp file if it exists
      try {
        await fs.unlink(`${fullPath}.tmp`);
      } catch {
        // Ignore cleanup errors
      }

      throw new Error(
        `Failed to write file ${filePath}: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Generate all file paths for a component
   */
  generateFilePaths(section: string, componentName: string): FilePaths {
    return {
      component: generateComponentPath(section, componentName),
      sectionBarrel: generateSectionBarrelPath(section),
      topLevelExport: "packages/ui/index.ts",
      story: generateStoryPath(componentName),
      registry: generateRegistryPath(section),
    };
  }

  /**
   * Check if all required directories exist for the project structure
   */
  async validateProjectStructure(): Promise<{
    isValid: boolean;
    missingPaths: string[];
  }> {
    const requiredPaths = ["packages/ui", "packages/ui/components", "apps/web"];

    const missingPaths: string[] = [];

    for (const requiredPath of requiredPaths) {
      const fullPath = path.join(this.baseOutputPath, requiredPath);
      try {
        const stat = await fs.stat(fullPath);
        if (!stat.isDirectory()) {
          missingPaths.push(requiredPath);
        }
      } catch {
        missingPaths.push(requiredPath);
      }
    }

    return {
      isValid: missingPaths.length === 0,
      missingPaths,
    };
  }

  /**
   * Get the absolute path for a relative path
   */
  getAbsolutePath(relativePath: string): string {
    return path.join(this.baseOutputPath, relativePath);
  }

  /**
   * List all existing components in a section
   */
  async listExistingComponents(section: string): Promise<string[]> {
    const sectionPath = path.join(
      this.baseOutputPath,
      "packages",
      "ui",
      "components",
      "patterns",
      section
    );

    try {
      const files = await fs.readdir(sectionPath);
      return files
        .filter((file) => file.endsWith(".tsx"))
        .map((file) => file.replace(".tsx", ""));
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code === "ENOENT") {
        return [];
      }
      throw new Error(
        `Failed to list components in section ${section}: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Ensure atomic file operations by using temporary files
   */
  async writeFileAtomic(filePath: string, content: string): Promise<void> {
    const fullPath = path.join(this.baseOutputPath, filePath);
    const tempPath = `${fullPath}.tmp.${Date.now()}`;

    try {
      await fs.writeFile(tempPath, content, "utf8");
      await fs.rename(tempPath, fullPath);
    } catch (error) {
      // Clean up temp file
      try {
        await fs.unlink(tempPath);
      } catch {
        // Ignore cleanup errors
      }
      throw error;
    }
  }

  /**
   * Check file system permissions for a directory
   */
  async checkPermissions(
    dirPath: string
  ): Promise<{ canRead: boolean; canWrite: boolean }> {
    const fullPath = path.join(this.baseOutputPath, dirPath);

    try {
      await fs.access(fullPath, fs.constants.F_OK);

      const canRead = await fs
        .access(fullPath, fs.constants.R_OK)
        .then(() => true)
        .catch(() => false);
      const canWrite = await fs
        .access(fullPath, fs.constants.W_OK)
        .then(() => true)
        .catch(() => false);

      return { canRead, canWrite };
    } catch {
      return { canRead: false, canWrite: false };
    }
  }

  /**
   * Batch write multiple files with rollback capability
   */
  async batchWriteFiles(files: Array<{ path: string; content: string }>): Promise<void> {
    const writtenFiles: string[] = [];

    try {
      for (const file of files) {
        await this.writeComponent(file.path, file.content);
        writtenFiles.push(file.path);
      }
    } catch (error) {
      // Rollback: delete any files that were successfully written
      for (const filePath of writtenFiles) {
        try {
          await fs.unlink(path.join(this.baseOutputPath, filePath));
        } catch {
          // Ignore rollback errors
        }
      }
      throw new Error(
        `Batch write failed, rolled back ${writtenFiles.length} files: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Create backup of existing file before overwriting
   */
  async createBackup(filePath: string): Promise<string | null> {
    const fullPath = path.join(this.baseOutputPath, filePath);

    if (!(await this.checkFileExists(filePath))) {
      return null;
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = `${fullPath}.backup.${timestamp}`;

    try {
      await fs.copyFile(fullPath, backupPath);
      return backupPath;
    } catch (error) {
      throw new Error(
        `Failed to create backup: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Validate file content before writing
   */
  async validateFileContent(
    content: string,
    filePath: string
  ): Promise<{ isValid: boolean; errors: string[] }> {
    const errors: string[] = [];

    // Check if content is not empty
    if (!content || content.trim().length === 0) {
      errors.push("File content cannot be empty");
    }

    // For TypeScript files, do basic syntax validation
    if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
      // Check for basic TypeScript/React patterns
      if (!content.includes("export") && !content.includes("import")) {
        errors.push(
          "TypeScript file should contain at least one import or export statement"
        );
      }

      // Check for balanced braces
      const openBraces = (content.match(/{/g) || []).length;
      const closeBraces = (content.match(/}/g) || []).length;
      if (openBraces !== closeBraces) {
        errors.push("Unbalanced braces detected in TypeScript content");
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Write file with comprehensive error handling and validation
   */
  async writeComponentSafe(
    filePath: string,
    content: string,
    options: {
      createBackup?: boolean;
      validateContent?: boolean;
      atomic?: boolean;
    } = {}
  ): Promise<void> {
    const { createBackup = false, validateContent = true, atomic = true } = options;

    // Validate content if requested
    if (validateContent) {
      const validation = await this.validateFileContent(content, filePath);
      if (!validation.isValid) {
        throw new Error(`Content validation failed: ${validation.errors.join(", ")}`);
      }
    }

    // Create backup if requested and file exists
    let backupPath: string | null = null;
    if (createBackup) {
      backupPath = await this.createBackup(filePath);
    }

    try {
      if (atomic) {
        await this.writeFileAtomic(filePath, content);
      } else {
        await this.writeComponent(filePath, content);
      }
    } catch (error) {
      // If we created a backup and write failed, restore from backup
      if (backupPath) {
        try {
          const fullPath = path.join(this.baseOutputPath, filePath);
          await fs.copyFile(backupPath, fullPath);
        } catch {
          // Ignore restore errors
        }
      }
      throw error;
    }

    // Clean up backup file if write was successful
    if (backupPath) {
      try {
        await fs.unlink(backupPath);
      } catch {
        // Ignore cleanup errors
      }
    }
  }

  /**
   * Delete a file if it exists
   */
  async deleteFile(filePath: string): Promise<void> {
    const fullPath = path.join(this.baseOutputPath, filePath);

    try {
      await fs.unlink(fullPath);
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code !== "ENOENT") {
        throw new Error(`Failed to delete file ${filePath}: ${error.message}`);
      }
      // File doesn't exist, which is fine
    }
  }
}
