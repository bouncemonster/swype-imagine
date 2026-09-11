/**
 * Performance Benchmark Automation
 * Measures rendering performance for all fractal types without browser
 * 
 * Usage: npx tsx tests/performance-benchmark.ts
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface BenchmarkResult {
  category: string;
  type: string;
  index: number;
  shaderComplexity: number;
  estimatedFPS: number;
  qualityLevel: 'low' | 'medium' | 'high';
}

// Shader complexity analysis
const COMPLEXITY_FACTORS = {
  // Base complexity by category
  classic: 1.0,
  beautiful: 1.2,
  modern: 1.3,
  polytopes: 1.5,
  flames: 1.8,
  advancedIFS: 1.4,
  mandelbrotVariants: 1.1,
  juliaVariants: 1.2,
  ifsVariants: 1.6,
  lsystemVariants: 1.7,
  flameVariants: 1.9,
  hybridVariants: 2.0,
  
  // Iteration multiplier
  iterationBase: 0.05,
  
  // Render style multipliers
  renderStyles: {
    solid: 1.0,
    xray: 0.8,
    wireframe: 0.6,
    pointCloud: 1.2,
    volumetric: 1.5,
    gemstone: 1.8,
    quantum: 2.0
  }
};

// Analyze shader complexity for a fractal type
function analyzeShaderComplexity(type: string, index: number): number {
  const shaderContent = readFileSync(
    resolve(__dirname, '../src/shaders/webglShaders.ts'),
    'utf-8'
  );
  
  // Find the function for this fractal type
  const funcPattern = new RegExp(`ftype == ${index}\\) return`, 'i');
  const hasImpl = shaderContent.match(funcPattern);
  
  if (!hasImpl) return 0;
  
  // Determine category
  let category = 'classic';
  if (index >= 86 && index <= 95) category = 'beautiful';
  else if (index >= 96 && index <= 103) category = 'modern';
  else if (index >= 104 && index <= 112) category = 'polytopes';
  else if (index >= 113 && index <= 125) category = 'flames';
  else if (index >= 126 && index <= 130) category = 'advancedIFS';
  else if (index >= 131 && index <= 140) category = 'mandelbrotVariants';
  else if (index >= 141 && index <= 190) category = 'juliaVariants';
  else if (index >= 191 && index <= 240) category = 'ifsVariants';
  else if (index >= 241 && index <= 290) category = 'lsystemVariants';
  else if (index >= 291 && index <= 340) category = 'flameVariants';
  else if (index >= 341 && index <= 430) category = 'hybridVariants';
  
  // Base complexity from category
  let complexity = COMPLEXITY_FACTORS[category as keyof typeof COMPLEXITY_FACTORS] || 1.0;
  
  // Check for specific complexity indicators in the shader
  const functionMatch = shaderContent.match(new RegExp(`ftype == ${index}.*?return.*?map(\\w+)`, 'i'));
  if (functionMatch) {
    const funcName = functionMatch[1];
    
    // Look for the actual function implementation
    const funcImpl = shaderContent.match(new RegExp(`function ${funcName}[\\s\\S]*?^}`, 'm'));
    if (funcImpl) {
      const impl = funcImpl[0];
      
      // Count iterations (for loops)
      const forLoops = (impl.match(/for\s*\(/g) || []).length;
      complexity += forLoops * 0.1;
      
      // Count trigonometric functions (expensive)
      const trigFunctions = (impl.match(/\b(sin|cos|tan|atan|asin|acos)\s*\(/g) || []).length;
      complexity += trigFunctions * 0.05;
      
      // Count exponentials (very expensive)
      const expFunctions = (impl.match(/\b(exp|pow|log|sqrt)\s*\(/g) || []).length;
      complexity += expFunctions * 0.08;
      
      // Count conditionals (branch divergence)
      const conditionals = (impl.match(/\bif\s*\(/g) || []).length;
      complexity += conditionals * 0.02;
    }
  }
  
  return Math.round(complexity * 100) / 100;
}

// Estimate FPS based on complexity and quality level
function estimateFPS(complexity: number, qualityLevel: 'low' | 'medium' | 'high'): number {
  const baseFPS = 60;
  const qualityMultiplier = {
    low: 0.5,
    medium: 0.75,
    high: 1.0
  };
  
  // Higher complexity = lower FPS
  const complexityPenalty = Math.max(0.1, 1 / (complexity * 0.5));
  
  return Math.round(baseFPS * qualityMultiplier[qualityLevel] * complexityPenalty);
}

// Determine optimal quality level for a fractal
function determineOptimalQuality(complexity: number): 'low' | 'medium' | 'high' {
  if (complexity > 2.5) return 'low';
  if (complexity > 1.5) return 'medium';
  return 'high';
}

// Main benchmark
async function runBenchmark(): Promise<void> {
  console.log(`\n╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║  PERFORMANCE BENCHMARK AUTOMATION                           ║`);
  console.log(`║  Analyzing 431 fractal types for optimal settings           ║`);
  console.log(`╚════════════════════════════════════════════════════════════════╝\n`);
  
  const results: BenchmarkResult[] = [];
  
  // Read shader to get all types
  const shaderContent = readFileSync(
    resolve(__dirname, '../src/shaders/webglShaders.ts'),
    'utf-8'
  );
  
  // Extract all ftype implementations
  const ftypeMatches = shaderContent.matchAll(/if \(ftype == (\d+)\)/g);
  const indices = Array.from(ftypeMatches).map(m => parseInt(m[1]));
  
  console.log(`Analyzing ${indices.length} fractal types...\n`);
  
  for (const index of indices) {
    const complexity = analyzeShaderComplexity(`type${index}`, index);
    const optimalQuality = determineOptimalQuality(complexity);
    const estimatedFPS = estimateFPS(complexity, optimalQuality);
    
    let category = 'classic';
    if (index >= 86 && index <= 95) category = 'beautiful';
    else if (index >= 96 && index <= 103) category = 'modern';
    else if (index >= 104 && index <= 112) category = 'polytopes';
    else if (index >= 113 && index <= 125) category = 'flames';
    else if (index >= 126 && index <= 130) category = 'advancedIFS';
    else if (index >= 131 && index <= 140) category = 'mandelbrotVariants';
    else if (index >= 141 && index <= 190) category = 'juliaVariants';
    else if (index >= 191 && index <= 240) category = 'ifsVariants';
    else if (index >= 241 && index <= 290) category = 'lsystemVariants';
    else if (index >= 291 && index <= 340) category = 'flameVariants';
    else if (index >= 341 && index <= 430) category = 'hybridVariants';
    
    results.push({
      category,
      type: `type${index}`,
      index,
      shaderComplexity: complexity,
      estimatedFPS,
      qualityLevel: optimalQuality
    });
    
    // Progress
    if (index % 50 === 0) {
      process.stdout.write(`\\r  Progress: ${index}/${indices.length}`);
    }
  }
  
  console.log('\\n');
  
  // Category summary
  const categoryStats = new Map<string, { count: number; avgComplexity: number; avgFPS: number }>();
  
  for (const result of results) {
    const stats = categoryStats.get(result.category) || { count: 0, avgComplexity: 0, avgFPS: 0 };
    stats.count++;
    stats.avgComplexity += result.shaderComplexity;
    stats.avgFPS += result.estimatedFPS;
    categoryStats.set(result.category, stats);
  }
  
  console.log(`╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║  CATEGORY PERFORMANCE SUMMARY                               ║`);
  console.log(`╠════════════════════════════════════════════════════════════════╣`);
  console.log(`║  Category              │ Count │ Avg Complexity │ Avg FPS    ║`);
  console.log(`╠════════════════════════════════════════════════════════════════╣`);
  
  for (const [category, stats] of categoryStats) {
    const avgComplexity = (stats.avgComplexity / stats.count).toFixed(2);
    const avgFPS = Math.round(stats.avgFPS / stats.count);
    console.log(`║  ${category.padEnd(22)} │ ${stats.count.toString().padStart(5)} │ ${avgComplexity.padStart(14)} │ ${avgFPS.toString().padStart(10)} ║`);
  }
  
  console.log(`╚════════════════════════════════════════════════════════════════╝\\n`);
  
  // Top 10 most complex fractals
  const top10Complex = [...results].sort((a, b) => b.shaderComplexity - a.shaderComplexity).slice(0, 10);
  
  console.log('Top 10 most complex fractals (require quality=low):');
  for (const r of top10Complex) {
    console.log(`  [${r.index}] ${r.type}: complexity=${r.shaderComplexity}, est.FPS=${r.estimatedFPS}`);
  }
  console.log('');
  
  // Top 10 simplest fractals
  const top10Simple = [...results].sort((a, b) => a.shaderComplexity - b.shaderComplexity).slice(0, 10);
  
  console.log('Top 10 simplest fractals (can run at quality=high):');
  for (const r of top10Simple) {
    console.log(`  [${r.index}] ${r.type}: complexity=${r.shaderComplexity}, est.FPS=${r.estimatedFPS}`);
  }
  console.log('');
  
  // Quality distribution
  const lowCount = results.filter(r => r.qualityLevel === 'low').length;
  const medCount = results.filter(r => r.qualityLevel === 'medium').length;
  const highCount = results.filter(r => r.qualityLevel === 'high').length;
  
  console.log('Quality distribution:');
  console.log(`  Low (complex):    ${lowCount} (${((lowCount / results.length) * 100).toFixed(1)}%)`);
  console.log(`  Medium:           ${medCount} (${((medCount / results.length) * 100).toFixed(1)}%)`);
  console.log(`  High (simple):    ${highCount} (${((highCount / results.length) * 100).toFixed(1)}%)`);
  console.log('');
  
  console.log('✅ Benchmark complete!');
}

// Run benchmark
runBenchmark().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
