# Pattern Import CLI

Command-line interface for the Tailwind UI Pattern Import System.

## Installation

```bash
cd tools/pattern-import
npm install
npm run build
```

## Usage

### Import Patterns from CSV

```bash
# Basic import
node dist/cli/cli.js import patterns.csv

# Import with options
node dist/cli/cli.js import patterns.csv --verbose --skip-stories

# Dry run to preview what would be imported
node dist/cli/cli.js import patterns.csv --dry-run

# Import to specific output directory
node dist/cli/cli.js import patterns.csv --output ./my-components
```

### Validate CSV File

```bash
# Validate CSV format without importing
node dist/cli/cli.js validate patterns.csv

# Validate with verbose output
node dist/cli/cli.js validate patterns.csv --verbose
```

### List Components

```bash
# List components that would be imported
node dist/cli/cli.js list patterns.csv

# Show potential naming conflicts
node dist/cli/cli.js list patterns.csv --conflicts --verbose
```

### Rollback Operations

```bash
# Rollback a previous import operation
node dist/cli/cli.js rollback import_1699123456_abc123def
```

### Configuration

```bash
# Initialize configuration file
node dist/cli/cli.js config --init

# Show current configuration
node dist/cli/cli.js config --show

# Set configuration values
node dist/cli/cli.js config --set skipStories=true
node dist/cli/cli.js config --set validationOptions.typescript=false
```

## CSV Format

The CSV file should have the following columns:

- `section`: The UI pattern section (e.g., "hero", "header", "footer")
- `variant`: The specific variant name (e.g., "simple centered", "with dropdown")
- `code`: The Tailwind UI React/JSX code

Example:

```csv
section,variant,code
hero,simple centered,"export default function Hero() { return <div>...</div>; }"
header,with dropdown,"export default function Header() { return <nav>...</nav>; }"
```

## Configuration File

Create a `.pattern-import.json` file in your project root:

```json
{
  "defaultOutputPath": "./packages/ui",
  "skipStories": false,
  "skipValidation": false,
  "validationOptions": {
    "typescript": true,
    "linting": true,
    "storybook": true,
    "exportChain": true
  }
}
```

## Options

### Import Command Options

- `--output <path>`: Output directory (defaults to current project structure)
- `--validate-only`: Only validate the CSV file without importing
- `--skip-stories`: Skip Storybook story generation
- `--skip-validation`: Skip post-import validation checks
- `--verbose`: Enable verbose output
- `--dry-run`: Show what would be imported without making changes
- `--config <path>`: Path to configuration file

### Global Options

- `--help`: Show help information
- `--version`: Show version number

## Error Handling

The CLI provides detailed error messages and recovery suggestions. If an import fails, you can:

1. Review the error message for specific guidance
2. Use the rollback command to undo partial changes
3. Fix the issue and retry the import

## Examples

### Basic Workflow

1. Validate your CSV file:

   ```bash
   node dist/cli/cli.js validate my-patterns.csv
   ```

2. Preview the import:

   ```bash
   node dist/cli/cli.js list my-patterns.csv --conflicts
   ```

3. Perform the import:
   ```bash
   node dist/cli/cli.js import my-patterns.csv --verbose
   ```

### Advanced Usage

```bash
# Import with custom configuration
node dist/cli/cli.js import patterns.csv \
  --config ./custom-config.json \
  --skip-stories \
  --verbose

# Validate and import in one go
node dist/cli/cli.js validate patterns.csv && \
node dist/cli/cli.js import patterns.csv
```
