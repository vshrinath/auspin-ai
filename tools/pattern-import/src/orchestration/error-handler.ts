/**
 * Error handling and recovery system for the Pattern Import System
 * Handles partial failures with appropriate cleanup and detailed error reporting
 */

import { promises as fs } from "fs";
import { join, dirname } from "path";

export interface ErrorContext {
  operationId: string;
  step: string;
  timestamp: Date;
  componentName?: string;
  section?: string;
  filePath?: string;
  originalError: Error;
  recoveryActions: string[];
}

export interface RecoveryAction {
  name: string;
  description: string;
  execute: () => Promise<void>;
  canRollback: boolean;
}

export interface OperationSnapshot {
  operationId: string;
  timestamp: Date;
  createdFiles: string[];
  modifiedFiles: Map<string, string>; // filepath -> backup content
  createdDirectories: string[];
  registryBackups: Map<string, string>; // section -> backup path
}

export class ErrorHandler {
  private snapshots = new Map<string, OperationSnapshot>();
  private backupDir: string;

  constructor(backupDir: string = ".pattern-import-backups") {
    this.backupDir = backupDir;
  }

  /**
   * Create a snapshot before starting an operation
   */
  async createSnapshot(operationId: string): Promise<OperationSnapshot> {
    const snapshot: OperationSnapshot = {
      operationId,
      timestamp: new Date(),
      createdFiles: [],
      modifiedFiles: new Map(),
      createdDirectories: [],
      registryBackups: new Map(),
    };

    this.snapshots.set(operationId, snapshot);

    // Ensure backup directory exists
    await this.ensureBackupDirectory();

    return snapshot;
  }

  /**
   * Track a file that will be created during the operation
   */
  trackFileCreation(operationId: string, filePath: string): void {
    const snapshot = this.snapshots.get(operationId);
    if (snapshot) {
      snapshot.createdFiles.push(filePath);
    }
  }

  /**
   * Track a file that will be modified during the operation
   */
  async trackFileModification(operationId: string, filePath: string): Promise<void> {
    const snapshot = this.snapshots.get(operationId);
    if (!snapshot) return;

    try {
      // Check if file exists and create backup
      const exists = await this.fileExists(filePath);
      if (exists) {
        const content = await fs.readFile(filePath, "utf-8");
        const backupPath = await this.createBackupFile(operationId, filePath, content);
        snapshot.modifiedFiles.set(filePath, backupPath);
      }
    } catch (error) {
      // File doesn't exist or can't be read - treat as creation
      snapshot.createdFiles.push(filePath);
    }
  }

  /**
   * Track a directory that will be created during the operation
   */
  trackDirectoryCreation(operationId: string, dirPath: string): void {
    const snapshot = this.snapshots.get(operationId);
    if (snapshot) {
      snapshot.createdDirectories.push(dirPath);
    }
  }

  /**
   * Track a registry backup
   */
  async trackRegistryBackup(
    operationId: string,
    section: string,
    registryPath: string
  ): Promise<void> {
    const snapshot = this.snapshots.get(operationId);
    if (!snapshot) return;

    try {
      const exists = await this.fileExists(registryPath);
      if (exists) {
        const content = await fs.readFile(registryPath, "utf-8");
        const backupPath = await this.createBackupFile(
          operationId,
          registryPath,
          content
        );
        snapshot.registryBackups.set(section, backupPath);
      }
    } catch (error) {
      // Registry doesn't exist - no backup needed
    }
  }

  /**
   * Handle an error with context and provide recovery guidance
   */
  handleError(error: Error, context: Partial<ErrorContext>): ErrorContext {
    const errorContext: ErrorContext = {
      operationId: context.operationId || "unknown",
      step: context.step || "unknown",
      timestamp: new Date(),
      componentName: context.componentName,
      section: context.section,
      filePath: context.filePath,
      originalError: error,
      recoveryActions: [],
    };

    // Generate recovery actions based on error type and context
    errorContext.recoveryActions = this.generateRecoveryActions(error, errorContext);

    return errorContext;
  }

  /**
   * Rollback an operation using its snapshot
   */
  async rollback(operationId: string): Promise<{ success: boolean; errors: string[] }> {
    const snapshot = this.snapshots.get(operationId);
    if (!snapshot) {
      return { success: false, errors: ["No snapshot found for operation"] };
    }

    const errors: string[] = [];

    try {
      // Remove created files
      for (const filePath of snapshot.createdFiles) {
        try {
          await this.deleteFileIfExists(filePath);
        } catch (error) {
          errors.push(
            `Failed to delete created file ${filePath}: ${error instanceof Error ? error.message : String(error)}`
          );
        }
      }

      // Restore modified files
      for (const [filePath, backupPath] of snapshot.modifiedFiles) {
        try {
          await this.restoreFromBackup(filePath, backupPath);
        } catch (error) {
          errors.push(
            `Failed to restore file ${filePath}: ${error instanceof Error ? error.message : String(error)}`
          );
        }
      }

      // Restore registry backups
      for (const [section, backupPath] of snapshot.registryBackups) {
        try {
          // Determine original registry path from backup path
          const originalPath = this.getOriginalPathFromBackup(backupPath);
          await this.restoreFromBackup(originalPath, backupPath);
        } catch (error) {
          errors.push(
            `Failed to restore registry for section ${section}: ${error instanceof Error ? error.message : String(error)}`
          );
        }
      }

      // Remove created directories (in reverse order)
      for (let i = snapshot.createdDirectories.length - 1; i >= 0; i--) {
        const dirPath = snapshot.createdDirectories[i];
        if (dirPath) {
          try {
            await this.removeDirectoryIfEmpty(dirPath);
          } catch (error) {
            errors.push(
              `Failed to remove directory ${dirPath}: ${error instanceof Error ? error.message : String(error)}`
            );
          }
        }
      }

      // Clean up snapshot
      this.snapshots.delete(operationId);

      return { success: errors.length === 0, errors };
    } catch (error) {
      errors.push(
        `Rollback failed: ${error instanceof Error ? error.message : String(error)}`
      );
      return { success: false, errors };
    }
  }

  /**
   * Generate detailed error messages with guidance
   */
  formatError(errorContext: ErrorContext): string {
    let message = `Error in step '${errorContext.step}'`;

    if (errorContext.componentName) {
      message += ` for component '${errorContext.componentName}'`;
    }

    if (errorContext.section) {
      message += ` in section '${errorContext.section}'`;
    }

    message += `:\n${errorContext.originalError.message}`;

    if (errorContext.filePath) {
      message += `\nFile: ${errorContext.filePath}`;
    }

    if (errorContext.recoveryActions.length > 0) {
      message += "\n\nSuggested recovery actions:";
      errorContext.recoveryActions.forEach((action, index) => {
        message += `\n${index + 1}. ${action}`;
      });
    }

    return message;
  }

  /**
   * Clean up old snapshots and backups
   */
  async cleanup(maxAge: number = 24 * 60 * 60 * 1000): Promise<void> {
    const now = Date.now();

    // Clean up in-memory snapshots
    for (const [operationId, snapshot] of this.snapshots) {
      if (now - snapshot.timestamp.getTime() > maxAge) {
        this.snapshots.delete(operationId);
      }
    }

    // Clean up backup files
    try {
      const backupExists = await this.fileExists(this.backupDir);
      if (backupExists) {
        const entries = await fs.readdir(this.backupDir, { withFileTypes: true });

        for (const entry of entries) {
          if (entry.isDirectory()) {
            const dirPath = join(this.backupDir, entry.name);
            const stats = await fs.stat(dirPath);

            if (now - stats.mtime.getTime() > maxAge) {
              await fs.rmdir(dirPath, { recursive: true });
            }
          }
        }
      }
    } catch (error) {
      // Ignore cleanup errors
    }
  }

  private generateRecoveryActions(error: Error, context: ErrorContext): string[] {
    const actions: string[] = [];
    const errorMessage = error.message.toLowerCase();

    // File system related errors
    if (errorMessage.includes("enoent") || errorMessage.includes("no such file")) {
      actions.push("Verify that all required directories exist");
      actions.push("Check file paths for typos or incorrect casing");
      if (context.filePath) {
        actions.push(`Ensure the directory for ${dirname(context.filePath)} exists`);
      }
    }

    if (errorMessage.includes("eacces") || errorMessage.includes("permission denied")) {
      actions.push("Check file and directory permissions");
      actions.push("Ensure the process has write access to the target directories");
      actions.push("Try running with appropriate permissions");
    }

    if (errorMessage.includes("eexist") || errorMessage.includes("already exists")) {
      actions.push("Use versioning to avoid file conflicts");
      actions.push("Check if files should be overwritten or renamed");
    }

    // CSV parsing errors
    if (errorMessage.includes("csv") || context.step.toLowerCase().includes("csv")) {
      actions.push("Verify CSV file format and structure");
      actions.push("Ensure all required columns (section, variant, code) are present");
      actions.push("Check for malformed CSV data or encoding issues");
      actions.push("Validate that code cells contain valid React/JSX code");
    }

    // TypeScript compilation errors
    if (errorMessage.includes("typescript") || errorMessage.includes("compilation")) {
      actions.push("Check generated component syntax");
      actions.push("Verify import statements are correct");
      actions.push("Ensure all dependencies are available");
      actions.push("Review JSX syntax and React patterns");
    }

    // Export/import chain errors
    if (errorMessage.includes("export") || errorMessage.includes("import")) {
      actions.push("Verify barrel export files are properly formatted");
      actions.push("Check that component names match export statements");
      actions.push("Ensure directory structure matches import paths");
    }

    // Storybook errors
    if (errorMessage.includes("storybook") || errorMessage.includes("story")) {
      actions.push("Verify Storybook configuration is correct");
      actions.push("Check story file syntax and imports");
      actions.push("Ensure component can be imported in Storybook context");
    }

    // Generic fallback actions
    if (actions.length === 0) {
      actions.push("Review the error message for specific details");
      actions.push("Check system logs for additional context");
      actions.push("Verify all prerequisites are met");
      actions.push("Try running the operation again with verbose logging");
    }

    // Always add rollback option
    actions.push(`Use rollback to undo changes from operation ${context.operationId}`);

    return actions;
  }

  private async ensureBackupDirectory(): Promise<void> {
    try {
      await fs.mkdir(this.backupDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }
  }

  private async createBackupFile(
    operationId: string,
    originalPath: string,
    content: string
  ): Promise<string> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupFileName = `${operationId}_${timestamp}_${originalPath.replace(/[/\\]/g, "_")}`;
    const backupPath = join(this.backupDir, operationId, backupFileName);

    await fs.mkdir(dirname(backupPath), { recursive: true });
    await fs.writeFile(backupPath, content, "utf-8");

    return backupPath;
  }

  private async restoreFromBackup(
    originalPath: string,
    backupPath: string
  ): Promise<void> {
    const content = await fs.readFile(backupPath, "utf-8");
    await fs.mkdir(dirname(originalPath), { recursive: true });
    await fs.writeFile(originalPath, content, "utf-8");
  }

  private getOriginalPathFromBackup(backupPath: string): string {
    // Extract original path from backup filename
    const fileName = backupPath.split("/").pop() || "";
    const parts = fileName.split("_");

    // Remove operationId and timestamp parts, rejoin the rest
    if (parts.length >= 3) {
      const pathPart = parts.slice(2).join("_");
      return pathPart.replace(/_/g, "/");
    }

    throw new Error(`Cannot determine original path from backup: ${backupPath}`);
  }

  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private async deleteFileIfExists(filePath: string): Promise<void> {
    try {
      await fs.unlink(filePath);
    } catch (error) {
      // File might not exist, which is fine
      if ((error as any).code !== "ENOENT") {
        throw error;
      }
    }
  }

  private async removeDirectoryIfEmpty(dirPath: string): Promise<void> {
    try {
      const entries = await fs.readdir(dirPath);
      if (entries.length === 0) {
        await fs.rmdir(dirPath);
      }
    } catch (error) {
      // Directory might not exist or not be empty, which is fine
    }
  }
}
