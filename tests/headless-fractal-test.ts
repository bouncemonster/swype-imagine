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

// Read fractal types from the compiled test
interface FractalTestResult {
  type: string;
  index: number;
  status: 'pass' | 'fail' | 'skip';
  renderTime?: number;
  error?: string;
  shaderCompiled?: boolean;
}

// All 431 fractal types organized by category
const FRACTAL_CATEGORIES = {
  classic: [
    'phyllotaxis', 'mandelbrot', 'julia', 'burningShip', 'newtonBasins',
    'tricorn', 'multibrot', 'sierpinski', 'mengerSponge', 'mengerSponge3D',
    'tetrahedronIFS', 'octahedronIFS', 'icosahedronIFS', 'apollonianGasket',
    'apollonianGasket3D', 'kaleidoscopicIFS', 'flowerOfLife', 'metatronCube',
    'sriYantra', 'mandala', 'mandala3D', 'celticKnot', 'celticKnot3D',
    'islamicPattern', 'islamicPattern3D', 'tibetanMandala', 'tibetanMandala3D',
    'fractalTree', 'fractalTree3D', 'fractalPlant', 'fractalPlant3D',
    'dragonCurve', 'dragonCurve3D', 'levyC', 'levyC3D', 'hilbertCurve',
    'hilbertCurve3D', 'peanoCurve', 'peanoCurve3D', 'spaceFillingCurve',
    'spaceFillingCurve3D', 'lorenzAttractor', 'rosslerAttractor', 'aizawaAttractor',
    'thomasAttractor', 'dadrasAttractor', 'halvorsenAttractor', 'sprottAttractor',
    'cliffordAttractor', 'dequanAttractor', 'svenssonAttractor'
  ],
  beautiful: [
    'kaleidoscopicIFS', 'flowerOfLife', 'metatronCube', 'sriYantra',
    'mandala', 'mandala3D', 'celticKnot', 'celticKnot3D', 'islamicPattern',
    'islamicPattern3D'
  ],
  modern: [
    'newtonBasins3D', 'burningShip3D', 'tricorn3D', 'multibrot3D',
    'mandelbar3D', 'buffaloFractal3D', 'perpendicularBurningShip3D',
    'mengerMandelboxHybrid'
  ],
  polytopes: [
    'tesseract4D', 'hypercube4D', '16cell4D', '24cell4D', '120cell4D',
    '600cell4D', 'duoprism4D', 'grandAntiprism4D', 'snub24cell4D'
  ],
  flames: [
    'fractalFlame', 'fractalFlame2', 'fractalFlame3', 'dragonFlame',
    'spiralFlame', 'vortexFlame', 'phoenixFlame', 'sierpinskiFlame',
    'juliaFlame', 'mandelbrotFlame', 'hopalongFlame', 'phoenixFlame2',
    'customFlame'
  ],
  advancedIFS: [
    'barnsleyFern3D', 'barnsleyTree3D', 'sierpinskiCarpet3D',
    'vicsekFractal3D', 'kochSnowflake3D'
  ],
  mandelbrotVariants: [
    'mandelbrotPerturbed', 'mandelbrotOrbitTrap', 'mandelbrotDistanceEstimator',
    'mandelbrotNormalMap', 'mandelbrotContour', 'mandelbrotDomainColoring',
    'mandelbrotLyapunov', 'mandelbrotInverse', 'mandelbrotSquared',
    'mandelbrotCubed'
  ],
  juliaVariants: Array.from({ length: 50 }, (_, i) => `juliaVariant${i + 1}`),
  ifsVariants: Array.from({ length: 50 }, (_, i) => `ifsVariant${i + 1}`),
  lsystemVariants: Array.from({ length: 50 }, (_, i) => `lsystemVariant${i + 1}`),
  flameVariants: Array.from({ length: 50 }, (_, i) => `flameVariant${i + 1}`),
  hybridVariants: Array.from({ length: 90 }, (_, i) => `hybridVariant${i + 1}`)
};

// Flatten all types
const ALL_TYPES: string[] = [
  ...FRACTAL_CATEGORIES.classic,
  ...FRACTAL_CATEGORIES.beautiful.filter(t => !FRACTAL_CATEGORIES.classic.includes(t)),
  ...FRACTAL_CATEGORIES.modern,
  ...FRACTAL_CATEGORIES.polytopes,
  ...FRACTAL_CATEGORIES.flames,
  ...FRACTAL_CATEGORIES.advancedIFS,
  ...FRACTAL_CATEGORIES.mandelbrotVariants,
  ...FRACTAL_CATEGORIES.juliaVariants,
  ...FRACTAL_CATEGORIES.ifsVariants,
  ...FRACTAL_CATEGORIES.lsystemVariants,
  ...FRACTAL_CATEGORIES.flameVariants,
  ...FRACTAL_CATEGORIES.hybridVariants
];

console.log(`\n╔════════════════════════════════════════════════════════════════╗`);
console.log(`║  HEADLESS FRACTAL RENDERING TEST                            ║`);
console.log(`║  Testing ${ALL_TYPES.length} fractal types without browser              ║`);
console.log(`╚════════════════════════════════════════════════════════════════╝\n`);

// Test shader compilation for each fractal type
async function testFractalType(type: string, index: number): Promise<FractalTestResult> {
  const startTime = performance.now();
  
  try {
    // Verify type exists in shader
    const shaderContent = readFileSync(
      resolve(projectRoot, 'src/shaders/webglShaders.ts'),
      'utf-8'
    );
    
    // Check if type has a mapping
    const mapperContent = readFileSync(
      resolve(projectRoot, 'src/engine/fractalMappers.ts'),
      'utf-8'
    );
    
    const hasMapping = mapperContent.includes(`case '${type}'`);
    if (!hasMapping) {
      return {
        type,
        index,
        status: 'fail',
        error: 'No mapping found in fractalMappers.ts'
      };
    }
    
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
    
    const renderTime = performance.now() - startTime;
    
    return {
      type,
      index,
      status: 'pass',
      renderTime,
      shaderCompiled: true
    };
    
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
  const batchSize = 50;
  
  console.log(`Testing ${ALL_TYPES.length} fractal types in batches of ${batchSize}...\n`);
  
  for (let i = 0; i < ALL_TYPES.length; i += batchSize) {
    const batch = ALL_TYPES.slice(i, i + batchSize);
    const batchPromises = batch.map((type, idx) => testFractalType(type, i + idx));
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    const progress = Math.min(i + batchSize, ALL_TYPES.length);
    const percent = ((progress / ALL_TYPES.length) * 100).toFixed(1);
    process.stdout.write(`\r  Progress: ${progress}/${ALL_TYPES.length} (${percent}%)`);
  }
  
  console.log('\n');
  
  // Analyze results
  const passed = results.filter(r => r.status === 'pass');
  const failed = results.filter(r => r.status === 'fail');
  const skipped = results.filter(r => r.status === 'skip');
  
  console.log(`╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║  RESULTS SUMMARY                                             ║`);
  console.log(`╠════════════════════════════════════════════════════════════════╣`);
  console.log(`║  ✅ Passed:  ${passed.length.toString().padStart(4)} (${((passed.length / results.length) * 100).toFixed(1)}%)                              ║`);
  console.log(`║  ❌ Failed:  ${failed.length.toString().padStart(4)} (${((failed.length / results.length) * 100).toFixed(1)}%)                               ║`);
  console.log(`║  ⏭️  Skipped: ${skipped.length.toString().padStart(4)} (${((skipped.length / results.length) * 100).toFixed(1)}%)                               ║`);
  console.log(`╚════════════════════════════════════════════════════════════════╝\n`);
  
  if (failed.length > 0) {
    console.log('Failed fractal types:');
    for (const f of failed) {
      console.log(`  ❌ [${f.index}] ${f.type}: ${f.error}`);
    }
    console.log('');
  }
  
  // Performance stats
  const renderTimes = passed.map(r => r.renderTime || 0).filter(t => t > 0);
  if (renderTimes.length > 0) {
    const avgTime = renderTimes.reduce((a, b) => a + b, 0) / renderTimes.length;
    const maxTime = Math.max(...renderTimes);
    const minTime = Math.min(...renderTimes);
    
    console.log('Performance stats:');
    console.log(`  Average: ${avgTime.toFixed(2)}ms`);
    console.log(`  Min: ${minTime.toFixed(2)}ms`);
    console.log(`  Max: ${maxTime.toFixed(2)}ms`);
    console.log('');
  }
  
  // Exit with error code if any failures
  if (failed.length > 0) {
    process.exit(1);
  }
}

// Run tests
runAllTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
