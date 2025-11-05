#!/usr/bin/env node

/**
 * Script to convert the original Hero CSV format to the expected format
 * Original: Hero,Simple Centered,"code..."
 * Expected: section,variant,code
 */

import fs from 'fs';
import path from 'path';

function convertCSV() {
  const inputFile = 'Hero Tailwind CSS components.csv';
  const outputFile = 'hero-components-all.csv';
  
  console.log('Converting CSV format...');
  
  try {
    const content = fs.readFileSync(inputFile, 'utf-8');
    
    // Split by lines and process
    const lines = content.split('\n');
    const convertedLines = ['section,variant,code']; // Header
    
    let currentSection = '';
    let currentVariant = '';
    let currentCode = '';
    let inCodeBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is a new component line (starts with Hero,)
      if (line.startsWith('Hero,')) {
        // Save previous component if exists
        if (currentSection && currentVariant && currentCode) {
          const formattedCode = currentCode.trim().replace(/"/g, '""');
          convertedLines.push(`${currentSection.toLowerCase()},${currentVariant},"${formattedCode}"`);
        }
        
        // Parse new component
        const match = line.match(/^Hero,([^,]+),"(.*)$/);
        if (match) {
          currentSection = 'hero';
          currentVariant = match[1];
          currentCode = match[2];
          inCodeBlock = true;
        }
      } else if (inCodeBlock) {
        // Continue building the code block
        currentCode += '\n' + line;
        
        // Check if this line ends the code block (ends with }")
        if (line.trim().endsWith('}"') || line.trim().endsWith('}')) {
          // Remove the trailing quote if present
          currentCode = currentCode.replace(/"\s*$/, '');
          inCodeBlock = false;
        }
      }
    }
    
    // Don't forget the last component
    if (currentSection && currentVariant && currentCode) {
      const formattedCode = currentCode.trim().replace(/"/g, '""');
      convertedLines.push(`${currentSection.toLowerCase()},${currentVariant},"${formattedCode}"`);
    }
    
    // Write the converted CSV
    fs.writeFileSync(outputFile, convertedLines.join('\n'));
    
    console.log(`✅ Converted ${convertedLines.length - 1} components`);
    console.log(`📄 Output file: ${outputFile}`);
    
    // Show what was converted
    convertedLines.slice(1).forEach((line, index) => {
      const match = line.match(/^([^,]+),([^,]+),/);
      if (match) {
        console.log(`   ${index + 1}. ${match[1]} - ${match[2]}`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error converting CSV:', error.message);
  }
}

convertCSV();