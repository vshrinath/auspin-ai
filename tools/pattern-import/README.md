# Tailwind UI Pattern Import System

A development tool for importing, organizing, and integrating Tailwind UI components into the Salient Platform monorepo structure.

## Overview

This system processes Tailwind UI code snippets from CSV files and automatically generates:

- TypeScript components with proper JSDoc documentation
- Organized directory structure
- Barrel exports and top-level exports
- Storybook stories
- Pattern registry metadata

## Project Structure

```
tools/pattern-import/
├── src/
│   ├── types/           # TypeScript interfaces and type definitions
│   ├── config/          # Configuration constants and settings
│   ├── utils/           # Utility functions and helpers
│   └── index.ts         # Main entry point
├── package.json         # Package configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Core Components

### Types (`src/types/index.ts`)

- **CSVParser**: Interface for parsing and validating CSV input files
- **ComponentGenerator**: Interface for transforming Tailwind UI code
- **FileSystemManager**: Interface for directory and file operations
- **ExportManager**: Interface for managing barrel exports
- **StoryGenerator**: Interface for creating Storybook stories
- **PatternRegistry**: Interface for component metadata management
- **ValidationEngine**: Interface for quality assurance checks

### Configuration (`src/config/constants.ts`)

- File paths and directory structure constants
- CSV parsing configuration
- Component generation settings
- Validation parameters
- Error and success messages
- Regular expression patterns
- Code templates

### Utilities (`src/utils/index.ts`)

- String transformation functions (PascalCase, kebab-case)
- Component name generation
- Import extraction and analysis
- File path generation
- Code validation helpers

## Requirements Addressed

This core structure addresses the following requirements:

- **1.1**: CSV parsing interfaces and validation types
- **2.1**: Directory structure constants and path generation
- **2.2**: Export management interfaces and templates

## Next Steps

The following tasks will implement the actual functionality:

1. CSV parser and validation
2. Component generator system
3. File system management
4. Export management system
5. Storybook story generator
6. Pattern registry system
7. Validation engine
8. Main orchestration system

## Usage

```typescript
import { PatternImportSystem } from "@salient/pattern-import";

// Implementation will be available after core components are built
const importer = new PatternImportSystem();
```
