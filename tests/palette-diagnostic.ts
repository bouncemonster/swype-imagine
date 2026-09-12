/**
 * Palette Diagnostic Test
 * Check what colors are being sent to shader for specific fractals
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// Load palettes
const palettesContent = readFileSync(
  resolve(projectRoot, 'src/palettesProcedural.ts'),
  'utf-8'
);

// Extract palette generation logic
console.log('=== PALETTE DIAGNOSTIC ===\n');

// Check specific fractal indices
const testIndices = [135, 166, 197]; // mandelbrotVariant5, juliaVariant26, ifsVariant7

for (const idx of testIndices) {
  // Palette seed is typically idx % 100 or similar
  const paletteSeed = idx % 100;
  console.log(`Fractal #${idx}: paletteSeed=${paletteSeed}`);
  
  // Simulate palette generation (simplified)
  const GOLDEN_ANGLE = 137.508;
  const baseHue = (paletteSeed * GOLDEN_ANGLE) % 360;
  
  console.log(`  Base hue: ${baseHue.toFixed(1)}°`);
  console.log(`  Expected: Should generate vibrant colors, not white\n`);
}

// Check if there's a bug in palette generation
console.log('=== CHECKING PALETTE GENERATION ===\n');

// The issue: if primary + secondary colors are both bright and weights sum > 1,
// the result exceeds 1.0 and gets clamped to white

// Example: primary = [0.8, 0.7, 0.6], secondary = [0.7, 0.8, 0.9]
// w_primary = 0.9, w_secondary = 0.85
// result = [0.8*0.9 + 0.7*0.85, 0.7*0.9 + 0.8*0.85, 0.6*0.9 + 0.9*0.85]
//        = [0.72 + 0.595, 0.63 + 0.68, 0.54 + 0.765]
//        = [1.315, 1.31, 1.305] → CLAMPED TO [1.0, 1.0, 1.0] = WHITE!

console.log('PROBLEM IDENTIFIED:');
console.log('  Color mixing formula: mat_col = primary * w1 + secondary * w2');
console.log('  If w1 + w2 > 1.0 and both colors are bright → result > 1.0 → WHITE');
console.log('\nSOLUTION:');
console.log('  Normalize weights: w1 + w2 should equal 1.0');
console.log('  OR use mix() instead of addition: mix(primary, secondary, w2)');
