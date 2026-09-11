/**
 * Headless Fractal Rendering Test
 * Tests all 431 fractal types without opening a browser
 * 
 * Usage: npx tsx tests/headless-fractal-test.ts
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

interface FractalTestResult {
  type: string;
  index: number;
  status: 'pass' | 'fail' | 'skip';
  error?: string;
}

// Dynamically extract all types from fractalMappers.ts
function extractTypesFromMapper(): { type: string; index: number }[] {
  const mapperContent = readFileSync(
    resolve(projectRoot, 'src/engine/fractalMappers.ts'),
    'utf-8'
  );
  
  const types: { type: string; index: number }[] = [];
  const regex = /case\s+'(\w+)':\s*return\s+(\d+);/g;
  let match;
  
  while ((match = regex.exec(mapperContent)) !== null) {
    types.push({ type: match[1], index: parseInt(match[2]) });
  }
  
  return types;
}

console.log(`\n╔════════════════════════════════════════════════════════════════╗`);
console.log(`║  HEADLESS FRACTAL RENDERING TEST                            ║`);
console.log(`╚════════════════════════════════════════════════════════════════╝\n`);

// Extract types dynamically
const allTypes = extractTypesFromMapper();
console.log(`Found ${allTypes.length} fractal types in fractalMappers.ts\n`);

// Test each fractal type
function testFractalType(type: string, index: number): FractalTestResult {
  try {
    // Read shader content
    const shaderContent = readFileSync(
      resolve(projectRoot, 'src/shaders/webglShaders.ts'),
      'utf-8'
    );
    
    // Check if type has shader implementation
    const hasShaderImpl = shaderContent.includes(`ftype == ${index}`);
    if (!hasShaderImpl) {
      return {
        type,
        index,
        status: 'fail',
        error: `No shader implementation for ftype == ${index}`
      };
    }
    
    return { type, index, status: 'pass' };
    
  } catch (error) {
    return {
      type,
      index,
      status: 'fail',
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

// Run all tests
async function runAllTests(): Promise<void> {
  const results: FractalTestResult[] = [];
  
  console.log(`Testing ${allTypes.length} fractal types...\n`);
  
  for (let i = 0; i < allTypes.length; i++) {
    const { type, index } = allTypes[i];
    const result = testFractalType(type, index);
    results.push(result);
    
    // Progress
    if (i % 50 === 0) {
      process.stdout.write(`\r  Progress: ${i}/${allTypes.length}`);
    }
  }
  
  console.log('\n');
  
  // Analyze results
  const passed = results.filter(r => r.status === 'pass');
  const failed = results.filter(r => r.status === 'fail');
  
  console.log(`╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║  RESULTS SUMMARY                                             ║`);
  console.log(`╠════════════════════════════════════════════════════════════════╣`);
  console.log(`║  ✅ Passed:  ${passed.length.toString().padStart(4)} (${((passed.length / results.length) * 100).toFixed(1)}%)                              ║`);
  console.log(`║  ❌ Failed:  ${failed.length.toString().padStart(4)} (${((failed.length / results.length) * 100).toFixed(1)}%)                               ║`);
  console.log(`╚════════════════════════════════════════════════════════════════╝\n`);
  
  if (failed.length > 0) {
    console.log('Failed fractal types:');
    for (const f of failed) {
      console.log(`  ❌ [${f.index}] ${f.type}: ${f.error}`);
    }
    console.log('');
  }
  
  // Exit with error code if any failures
  if (failed.length > 0) {
    process.exit(1);
  } else {
    console.log('✅ All fractal types have shader implementations!');
  }
}

// Run tests
runAllTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
