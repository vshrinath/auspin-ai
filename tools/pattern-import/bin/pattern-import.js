#!/usr/bin/env node

/**
 * CLI entry point for the Tailwind UI Pattern Import System
 */

import { PatternImportCLI } from "../dist/cli/cli.js";

const cli = new PatternImportCLI();
cli.run().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
