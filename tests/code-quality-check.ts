/**
 * Code Quality Checker
 * Analyzes codebase for common issues, dead code, and optimization opportunities
 * 
 * Usage: npx tsx tests/code-quality-check.ts
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const srcDir = join(projectRoot, 'src');

interface QualityIssue {
  file: string;
  line: number;
  severity: 'error' | 'warning' | 'info';
  category: string;
  message: string;
}

interface QualityReport {
  totalFiles: number;
  totalLines: number;
  issues: QualityIssue[];
  metrics: {
    avgFileLength: number;
    largestFile: { path: string; lines: number };
    smallestFile: { path: string; lines: number };
  };
}

// Get all TypeScript files recursively
function getAllTsFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsFiles(fullPath));
    } else if (extname(fullPath) === '.ts' || extname(fullPath) === '.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Check for TODO/FIXME/HACK markers
function checkTodoMarkers(content: string, filePath: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/\b(TODO|FIXME|HACK|XXX|BUG)\b/i.test(line)) {
      issues.push({
        file: filePath,
        line: i + 1,
        severity: 'warning',
        category: 'todo-marker',
        message: `Found ${line.match(/\b(TODO|FIXME|HACK|XXX|BUG)\b/i)?.[1]} marker`
      });
    }
  }
  
  return issues;
}

// Check for console.log statements (should use proper logging)
function checkConsoleLogs(content: string, filePath: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const lines = content.split('\n');
  
  // Skip test files and diagnostic files
  if (filePath.includes('test') || filePath.includes('Diagnostic')) {
    return issues;
  }
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/console\.(log|warn|error|info|debug)\s*\(/.test(line)) {
      issues.push({
        file: filePath,
        line: i + 1,
        severity: 'info',
        category: 'console-log',
        message: 'Consider using structured logging instead of console.*'
      });
    }
  }
  
  return issues;
}

// Check for any casts (type safety)
function checkAnyCasts(content: string, filePath: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/as\s+any\b/.test(line)) {
      issues.push({
        file: filePath,
        line: i + 1,
        severity: 'warning',
        category: 'type-safety',
        message: 'Avoid "as any" casts — use proper types or unknown'
      });
    }
  }
  
  return issues;
}

// Check for magic numbers
function checkMagicNumbers(content: string, filePath: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const lines = content.split('\n');
  
  // Skip test files and data files
  if (filePath.includes('test') || filePath.includes('data')) {
    return issues;
  }
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match numeric literals (excluding 0, 1, and common constants)
    const matches = line.matchAll(/\b([2-9]\d{2,}|[1-9]\d{3,})\b/g);
    for (const match of matches) {
      const num = parseInt(match[1]);
      // Skip common constants and indices
      if (num !== 100 && num !== 255 && num !== 360 && num !== 1000 && num !== 1024 && num !== 2048) {
        issues.push({
          file: filePath,
          line: i + 1,
          severity: 'info',
          category: 'magic-number',
          message: `Magic number ${num} — consider extracting to a named constant`
        });
      }
    }
  }
  
  return issues;
}

// Check for long functions
function checkLongFunctions(content: string, filePath: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const lines = content.split('\n');
  
  let inFunction = false;
  let functionStart = 0;
  let braceCount = 0;
  let functionName = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect function start
    const funcMatch = line.match(/(?:function|const|let|var)\s+(\w+)\s*(?:=.*?=>|.*?\{)/);
    if (funcMatch && !inFunction) {
      inFunction = true;
      functionStart = i + 1;
      functionName = funcMatch[1];
      braceCount = 0;
    }
    
    // Count braces
    braceCount += (line.match(/\{/g) || []).length;
    braceCount -= (line.match(/\}/g) || []).length;
    
    // Detect function end
    if (inFunction && braceCount === 0) {
      const functionLength = i + 1 - functionStart;
      if (functionLength > 100) {
        issues.push({
          file: filePath,
          line: functionStart,
          severity: 'warning',
          category: 'function-length',
          message: `Function "${functionName}" is ${functionLength} lines long — consider refactoring`
        });
      }
      inFunction = false;
    }
  }
  
  return issues;
}

// Check for unused imports
function checkUnusedImports(content: string, filePath: string): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const lines = content.split('\n');
  
  const imports: { name: string; line: number }[] = [];
  
  // Collect imports
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const importMatch = line.match(/import\s+(?:\{([^}]+)\}|(\w+))\s+from/);
    if (importMatch) {
      const names = importMatch[1] ? importMatch[1].split(',').map(n => n.trim()) : [importMatch[2]];
      for (const name of names) {
        if (name && name !== 'type') {
          imports.push({ name, line: i + 1 });
        }
      }
    }
  }
  
  // Check if each import is used
  for (const imp of imports) {
    const usagePattern = new RegExp(`\\b${imp.name}\\b`, 'g');
    const matches = content.match(usagePattern);
    // If only appears once (in import), it's unused
    if (matches && matches.length === 1) {
      issues.push({
        file: filePath,
        line: imp.line,
        severity: 'warning',
        category: 'unused-import',
        message: `Import "${imp.name}" appears unused`
      });
    }
  }
  
  return issues;
}

// Check for large files
function checkLargeFiles(files: string[]): QualityIssue[] {
  const issues: QualityIssue[] = [];
  
  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const lines = content.split('\n').length;
    
    if (lines > 1000) {
      issues.push({
        file,
        line: 1,
        severity: 'warning',
        category: 'file-size',
        message: `File is ${lines} lines long — consider splitting into modules`
      });
    }
  }
  
  return issues;
}

// Main quality check
async function runQualityCheck(): Promise<void> {
  console.log(`\n╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║  CODE QUALITY CHECKER                                        ║`);
  console.log(`║  Analyzing codebase for issues and optimization opportunities ║`);
  console.log(`╚════════════════════════════════════════════════════════════════╝\n`);
  
  const files = getAllTsFiles(srcDir);
  console.log(`Found ${files.length} TypeScript files\n`);
  
  const allIssues: QualityIssue[] = [];
  let totalLines = 0;
  let largestFile = { path: '', lines: 0 };
  let smallestFile = { path: '', lines: Infinity };
  
  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const lines = content.split('\n').length;
    totalLines += lines;
    
    if (lines > largestFile.lines) {
      largestFile = { path: file, lines };
    }
    if (lines < smallestFile.lines) {
      smallestFile = { path: file, lines };
    }
    
    const relativePath = file.replace(projectRoot, '');
    
    // Run all checks
    allIssues.push(...checkTodoMarkers(content, relativePath));
    allIssues.push(...checkConsoleLogs(content, relativePath));
    allIssues.push(...checkAnyCasts(content, relativePath));
    allIssues.push(...checkMagicNumbers(content, relativePath));
    allIssues.push(...checkLongFunctions(content, relativePath));
    allIssues.push(...checkUnusedImports(content, relativePath));
  }
  
  allIssues.push(...checkLargeFiles(files));
  
  // Summary
  const errors = allIssues.filter(i => i.severity === 'error');
  const warnings = allIssues.filter(i => i.severity === 'warning');
  const infos = allIssues.filter(i => i.severity === 'info');
  
  console.log(`╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║  QUALITY REPORT SUMMARY                                      ║`);
  console.log(`╠════════════════════════════════════════════════════════════════╣`);
  console.log(`║  Total files:      ${files.length.toString().padStart(5)}                                       ║`);
  console.log(`║  Total lines:      ${totalLines.toString().padStart(5)}                                       ║`);
  console.log(`║  Avg file length:  ${Math.round(totalLines / files.length).toString().padStart(5)} lines                                  ║`);
  console.log(`║  Largest file:     ${largestFile.lines.toString().padStart(5)} lines (${largestFile.path.split('/').pop()})           ║`);
  console.log(`║  Smallest file:    ${smallestFile.lines.toString().padStart(5)} lines (${smallestFile.path.split('/').pop()})            ║`);
  console.log(`╠════════════════════════════════════════════════════════════════╣`);
  console.log(`║  ❌ Errors:        ${errors.length.toString().padStart(5)}                                       ║`);
  console.log(`║  ⚠️  Warnings:      ${warnings.length.toString().padStart(5)}                                       ║`);
  console.log(`║  ℹ️  Info:          ${infos.length.toString().padStart(5)}                                       ║`);
  console.log(`╚════════════════════════════════════════════════════════════════╝\n`);
  
  // Category breakdown
  const categories = new Map<string, number>();
  for (const issue of allIssues) {
    categories.set(issue.category, (categories.get(issue.category) || 0) + 1);
  }
  
  console.log('Issues by category:');
  for (const [category, count] of categories) {
    console.log(`  ${category}: ${count}`);
  }
  console.log('');
  
  // Show top 10 warnings
  if (warnings.length > 0) {
    console.log('Top warnings:');
    for (const w of warnings.slice(0, 10)) {
      console.log(`  ⚠️  ${w.file}:${w.line} — ${w.message}`);
    }
    if (warnings.length > 10) {
      console.log(`  ... and ${warnings.length - 10} more`);
    }
    console.log('');
  }
  
  console.log('✅ Quality check complete!');
}

// Run check
runQualityCheck().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
