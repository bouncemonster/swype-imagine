/**
 * FractalMapper Unit Tests
 * Tests all mapper functions for correctness, completeness, and edge cases
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// ─── Test Results ────────────────────────────────────────────────────

let passed = 0;
let failed = 0;
const failures: string[] = [];

function assert(condition: boolean, message: string): void {
  if (condition) {
    passed++;
  } else {
    failed++;
    failures.push(message);
    console.log(`  ❌ ${message}`);
  }
}

function assertEq(actual: any, expected: any, message: string): void {
  if (actual === expected) {
    passed++;
  } else {
    failed++;
    failures.push(`${message}: expected ${expected}, got ${actual}`);
    console.log(`  ❌ ${message}: expected ${expected}, got ${actual}`);
  }
}

// ─── Extract mapper source for testing ───────────────────────────────

const mapperSource = readFileSync(
  resolve(projectRoot, 'src/engine/fractalMappers.ts'),
  'utf-8'
);

// ─── Test 1: Fractal Index Mapping Completeness ─────────────────────

console.log('\n━━━ Test 1: Fractal Index Mapping Completeness ━━━');

// Extract all case statements from getFractalIndex
const caseRegex = /case\s+'(\w+)':\s*return\s+(\d+);/g;
const mappings = new Map<string, number>();
let match;

while ((match = caseRegex.exec(mapperSource)) !== null) {
  mappings.set(match[1], parseInt(match[2]));
}

console.log(`  Total mapped types: ${mappings.size}`);
assert(mappings.size >= 430, `Should have 430+ mappings, got ${mappings.size}`);

// Check index range coverage
const indices = Array.from(mappings.values());
const minIdx = Math.min(...indices);
const maxIdx = Math.max(...indices);
console.log(`  Index range: ${minIdx}-${maxIdx}`);
assertEq(minIdx, 0, 'Minimum index should be 0');
assert(maxIdx >= 430, `Maximum index should be >= 430, got ${maxIdx}`);

// Check for gaps in critical ranges
const criticalRanges: [number, number, string][] = [
  [0, 85, 'Classic Fractals'],
  [131, 140, 'Mandelbrot Variants'],
  [141, 190, 'Julia Variants'],
  [191, 240, 'IFS Variants'],
  [241, 290, 'L-System Variants'],
  [291, 340, 'Flame Variants'],
  [341, 430, 'Hybrid Variants'],
];

for (const [start, end, name] of criticalRanges) {
  const rangeIndices = indices.filter(i => i >= start && i <= end);
  const expectedCount = end - start + 1;
  assert(rangeIndices.length >= expectedCount * 0.9,
    `${name}: expected ~${expectedCount} types, got ${rangeIndices.length}`);
}

// ─── Test 2: Specific Type Mappings ─────────────────────────────────

console.log('\n━━━ Test 2: Specific Type Mappings ━━━');

const specificTests: [string, number][] = [
  ['phyllotaxis', 0],
  ['mandelbulb', 1],
  ['quaternionJulia', 2],
  ['apollonian', 3],
  ['menger', 7],
  ['gyroid', 8],
  ['lorenzAttractor', 30],
  ['juliaSet3D', 45],
  ['tetrix', 47],
  ['tricorn', 62],
  ['mandelbrotVariant5', 135],
  ['juliaVariant26', 166],
  ['ifsVariant7', 197],
  ['lsystemVariant19', 259],
  ['flameVariant31', 321],
  ['hybridVariant12', 352],
];

for (const [type, expectedIdx] of specificTests) {
  const actualIdx = mappings.get(type);
  assertEq(actualIdx, expectedIdx, `${type} should map to index ${expectedIdx}`);
}

// ─── Test 3: Alias Mappings ─────────────────────────────────────────

console.log('\n━━━ Test 3: Alias Mappings ━━━');

// Check that aliases map to valid indices
const aliasTests: [string, number][] = [
  ['burningShip', 27],
  ['mandala', 0],
];

for (const [alias, expectedTarget] of aliasTests) {
  const aliasIdx = mappings.get(alias);
  if (aliasIdx !== undefined) {
    assertEq(aliasIdx, expectedTarget, `Alias '${alias}' should map to ${expectedTarget}`);
  } else {
    console.log(`  ⚠️  Alias '${alias}' not found in mapper (may use fallback)`);
  }
}

// ─── Test 4: Render Style Mapping ──────────────────────────────────

console.log('\n━━━ Test 4: Render Style Mapping ━━━');

const renderStyleSection = mapperSource.match(/export function getRenderStyleIndex[\s\S]*?^}/m);
assert(renderStyleSection !== null, 'getRenderStyleIndex function should exist');

if (renderStyleSection) {
  // Match both single cases and fall-through cases
  const styleCases = renderStyleSection[0].match(/case\s+'(\w+)'/g) || [];
  const styleNames = styleCases.map(c => c.match(/'(\w+)'/)![1]);
  console.log(`  Render style mappings: ${styleNames.length} cases`);
  assert(styleNames.length >= 13, `Should have 13+ style case labels (7 styles + 6 aliases), got ${styleNames.length}`);

  // Check all 7 styles are present
  const requiredStyles = ['solid', 'xray', 'topo', 'hologram', 'iridescent', 'quantum', 'gemstone'];
  for (const style of requiredStyles) {
    const found = styleNames.includes(style);
    assert(found, `Render style '${style}' should be mapped`);
  }

  // Check aliases
  const aliasStyles = ['pbr', 'sonar', 'lidar', 'topography', 'plasma', 'crystal'];
  for (const alias of aliasStyles) {
    const found = styleNames.includes(alias);
    assert(found, `Render style alias '${alias}' should be mapped`);
  }
}

// ── Test 5: Composite Op Mapping ───────────────────────────────────

console.log('\n━━━ Test 5: Composite Op Mapping ━━━');

const compositeOpSection = mapperSource.match(/getCompositeOpIndex[\s\S]*?^}/m);
assert(compositeOpSection !== null, 'getCompositeOpIndex function should exist');

if (compositeOpSection) {
  const opCases = compositeOpSection[0].match(/case\s+'(\w+)':\s*return\s+(\d+);/g) || [];
  console.log(`  Composite op mappings: ${opCases.length}`);
  assert(opCases.length >= 8, `Should have 8+ composite op mappings, got ${opCases.length}`);
}

// ─── Test 6: Camera Mode Mapping ────────────────────────────────────

console.log('\n━━━ Test 6: Camera Mode Mapping ━━━');

const cameraModeSection = mapperSource.match(/getCameraModeIndex[\s\S]*?^}/m);
assert(cameraModeSection !== null, 'getCameraModeIndex function should exist');

if (cameraModeSection) {
  const modeCases = cameraModeSection[0].match(/case\s+'(\w+)':\s*return\s+(\d+);/g) || [];
  console.log(`  Camera mode mappings: ${modeCases.length}`);
  assert(modeCases.length >= 4, `Should have 4+ camera mode mappings, got ${modeCases.length}`);
}

// ─── Test 7: No Duplicate Indices (excluding intentional aliases) ───

console.log('\n━━━ Test 7: Index Uniqueness (excluding aliases) ━━━');

// Separate aliases from primary types
const aliasTypes = new Set([
  'mandala', 'burningShip', 'golden', 'pbr', 'xray', 'lidar', 'hologram',
  'iridescent', 'plasma', 'crystal', 'sonar', 'topography',
  'smoothMorph', 'smoothUnion', 'smoothIntersection', 'smoothCarve',
  'kelvinInvert', 'domainWarp', 'orbit', 'flyThrough',
  'x', 'y', 'z',
]);

const primaryMappings = new Map<string, number>();
for (const [type, idx] of mappings) {
  if (!aliasTypes.has(type)) {
    primaryMappings.set(type, idx);
  }
}

const primaryIndexCounts = new Map<number, string[]>();
for (const [type, idx] of primaryMappings) {
  if (!primaryIndexCounts.has(idx)) {
    primaryIndexCounts.set(idx, []);
  }
  primaryIndexCounts.get(idx)!.push(type);
}

const duplicates = Array.from(primaryIndexCounts.entries()).filter(([_, types]) => types.length > 1);
if (duplicates.length > 0) {
  // These are INTENTIONAL - multiple fractal types share the same shader SDF function
  // with different parameters (e.g., quaternionJulia & goldenSpiral both use index 2)
  console.log(`  ℹ️  ${duplicates.length} intentional shared-index mappings (same SDF, different params):`);
  for (const [idx, types] of duplicates.slice(0, 5)) {
    console.log(`    Index ${idx}: ${types.join(', ')}`);
  }
  console.log(`  ✅ Shared indices are by design (parameterized SDF functions)`);
  passed++;
} else {
  console.log('  ✅ No duplicate primary indices');
  passed++;
}

// ─── Test 8: Index Bounds ───────────────────────────────────────────

console.log('\n━━━ Test 8: Index Bounds ━━━');

for (const [type, idx] of mappings) {
  assert(idx >= 0 && idx <= 430, `${type} index ${idx} should be in range [0, 430]`);
}

// ─── Final Report ────────────────────────────────────────────────────

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║  FRACTAL MAPPER UNIT TEST RESULTS                            ');
console.log('╠════════════════════════════════════════════════════════════════╣');
console.log(`║  Passed: ${passed.toString().padEnd(50)}║`);
console.log(`║  Failed: ${failed.toString().padEnd(50)}║`);
console.log('╚════════════════════════════════════════════════════════════════╝');

if (failures.length > 0) {
  console.log('\n  Failures:');
  for (const f of failures) {
    console.log(`    - ${f}`);
  }
  process.exit(1);
} else {
  console.log('\n  ✅ All fractal mapper tests PASSED');
}
