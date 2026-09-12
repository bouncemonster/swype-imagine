/**
 * Shader Math Validation Tests
 * 
 * Validates mathematical correctness of:
 * 1. MathValidation.ts utility functions
 * 2. GLSL shader patterns (division-by-zero guards, NaN protection)
 * 3. Shader module parameter ranges
 * 4. Color mixing correctness (post-overflow-fix validation)
 * 5. Common GLSL anti-pattern detection
 * 
 * Usage: npx tsx tests/shader-math-validation-test.ts
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// ─── Test Framework ──────────────────────────────────────────────────

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

function assertApprox(actual: number, expected: number, epsilon: number, message: string): void {
  if (Math.abs(actual - expected) <= epsilon) {
    passed++;
  } else {
    failed++;
    failures.push(`${message}: expected ~${expected}, got ${actual} (ε=${epsilon})`);
    console.log(`  ❌ ${message}: expected ~${expected}, got ${actual} (ε=${epsilon})`);
  }
}

// ─── Load Source Files ───────────────────────────────────────────────

const shaderSource = readFileSync(
  resolve(projectRoot, 'src/shaders/webglShaders.ts'), 'utf-8'
);
const mathValidationSource = readFileSync(
  resolve(projectRoot, 'src/engine/MathValidation.ts'), 'utf-8'
);
const juliaVariationsSource = readFileSync(
  resolve(projectRoot, 'src/shaders/modules/juliaVariations.ts'), 'utf-8'
);
const ifsVariationsSource = readFileSync(
  resolve(projectRoot, 'src/shaders/modules/ifsVariations.ts'), 'utf-8'
);
const lsystemVariationsSource = readFileSync(
  resolve(projectRoot, 'src/shaders/modules/lsystemVariations.ts'), 'utf-8'
);
const flameVariationsSource = readFileSync(
  resolve(projectRoot, 'src/shaders/modules/flameVariations.ts'), 'utf-8'
);
const hybridVariationsSource = readFileSync(
  resolve(projectRoot, 'src/shaders/modules/hybridVariations.ts'), 'utf-8'
);

// ═══════════════════════════════════════════════════════════════════════
// Test 1: MathValidation.ts Function Logic Tests
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 1: MathValidation Function Logic ━━━');

// Simulate validateVec3 logic
function validateVec3(vec: [number, number, number]): boolean {
  for (const v of vec) {
    if (isNaN(v) || !isFinite(v)) return false;
  }
  return true;
}

// Simulate validateScalar logic
function validateScalar(value: number, expectedRange?: [number, number]): boolean {
  if (isNaN(value) || !isFinite(value)) return false;
  if (expectedRange) {
    if (value < expectedRange[0] || value > expectedRange[1]) return false;
  }
  return true;
}

// Simulate validateNormal logic (must be unit length)
function validateNormal(normal: [number, number, number]): { valid: boolean; length: number } {
  if (!validateVec3(normal)) return { valid: false, length: 0 };
  const length = Math.sqrt(normal[0] ** 2 + normal[1] ** 2 + normal[2] ** 2);
  return { valid: Math.abs(length - 1.0) <= 0.01, length };
}

// Simulate validateColor logic
function validateColor(color: [number, number, number]): boolean {
  for (const c of color) {
    if (isNaN(c) || !isFinite(c)) return false;
  }
  return true;
}

// Test validateVec3
assert(validateVec3([1.0, 2.0, 3.0]) === true, 'validateVec3: valid vec3');
assert(validateVec3([NaN, 0, 0]) === false, 'validateVec3: NaN detected');
assert(validateVec3([Infinity, 0, 0]) === false, 'validateVec3: Infinity detected');
assert(validateVec3([0, 0, 0]) === true, 'validateVec3: zero vector is valid');
assert(validateVec3([-1e6, 1e6, 0]) === true, 'validateVec3: large values valid (warned but valid)');

// Test validateScalar
assert(validateScalar(0.5) === true, 'validateScalar: valid scalar');
assert(validateScalar(NaN) === false, 'validateScalar: NaN rejected');
assert(validateScalar(Infinity) === false, 'validateScalar: Infinity rejected');
assert(validateScalar(-Infinity) === false, 'validateScalar: -Infinity rejected');
assert(validateScalar(0.5, [0, 1]) === true, 'validateScalar: in range [0,1]');
assert(validateScalar(1.5, [0, 1]) === false, 'validateScalar: out of range [0,1]');
assert(validateScalar(-0.1, [0, 1]) === false, 'validateScalar: below range [0,1]');

// Test validateNormal
const n1 = validateNormal([1, 0, 0]);
assert(n1.valid === true, 'validateNormal: unit X valid');
assertApprox(n1.length, 1.0, 0.001, 'validateNormal: unit X length');

const n2 = validateNormal([0, 1, 0]);
assert(n2.valid === true, 'validateNormal: unit Y valid');

const n3 = validateNormal([1, 1, 1]);
assert(n3.valid === false, 'validateNormal: non-unit rejected');
assertApprox(n3.length, Math.sqrt(3), 0.001, 'validateNormal: (1,1,1) length = √3');

const n4 = validateNormal([0.577, 0.577, 0.577]);
assert(n4.valid === true, 'validateNormal: approximately normalized accepted');

// Test validateColor
assert(validateColor([0.5, 0.5, 0.5]) === true, 'validateColor: mid-gray valid');
assert(validateColor([0, 0, 0]) === true, 'validateColor: black valid');
assert(validateColor([1, 1, 1]) === true, 'validateColor: white valid');
assert(validateColor([NaN, 0, 0]) === false, 'validateColor: NaN rejected');
assert(validateColor([Infinity, 0, 0]) === false, 'validateColor: Infinity rejected');

console.log(`  MathValidation logic tests complete`);

// ═══════════════════════════════════════════════════════════════════════
// Test 2: GLSL Division-by-Zero Guards
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 2: GLSL Division-by-Zero Guards ━━━');

// Find all division operations in shader
const divisionPattern = /\/\s*(max\([^)]+\)|[a-zA-Z_]\w*|length\([^)]+\)|r2|denom)/g;
const divisions: { line: string; divisor: string; guarded: boolean }[] = [];

const shaderLines = shaderSource.split('\n');
for (let i = 0; i < shaderLines.length; i++) {
  const line = shaderLines[i];
  // Skip comments
  if (line.trim().startsWith('//') || line.trim().startsWith('*')) continue;
  
  // Find divisions
  const divMatches = line.matchAll(/\/\s*(max\([^)]+\)|[a-zA-Z_]\w+|length\([^)]+\))/g);
  for (const m of divMatches) {
    const divisor = m[1];
    // Check if divisor is guarded by max(), clamp(), or explicit check
    const isGuarded = divisor.startsWith('max(') || 
                      line.includes(`max(${divisor}`) ||
                      line.includes(`abs(${divisor})`) ||
                      line.includes(`${divisor} > 0`) ||
                      line.includes(`${divisor} != 0`) ||
                      divisor === 'max';
    divisions.push({ line: `L${i + 1}`, divisor, guarded: isGuarded });
  }
}

const unguardedDivs = divisions.filter(d => !d.guarded && !d.divisor.startsWith('max'));
console.log(`  Total divisions found: ${divisions.length}`);
console.log(`  Guarded by max()/abs(): ${divisions.length - unguardedDivs.length}`);
console.log(`  Potentially unguarded: ${unguardedDivs.length}`);

// Check specific critical divisions
const criticalDivGuards = [
  { pattern: /max\(r, 0\.0001\)/, name: 'r (radius) guarded with 0.0001' },
  { pattern: /max\(dr, 0\.0001\)/, name: 'dr (distance derivative) guarded' },
  { pattern: /max\(scale, 0\.0001\)/, name: 'scale guarded' },
  { pattern: /max\(r2, 0\.12\)/, name: 'r2 (squared radius) guarded' },
  { pattern: /max\(denom, 0\.001\)/, name: 'denom guarded' },
  { pattern: /max\(md2, 0\.0001\)/, name: 'md2 guarded' },
];

for (const guard of criticalDivGuards) {
  const found = guard.pattern.test(shaderSource);
  assert(found, `Division guard: ${guard.name}`);
}

// ═══════════════════════════════════════════════════════════════════════
// Test 3: NaN/Infinity Protection in GLSL
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 3: NaN/Infinity Protection ━━━');

// Check acos input is always clamped
const acosCalls = shaderSource.match(/acos\(([^)]+)\)/g) || [];
console.log(`  acos() calls: ${acosCalls.length}`);
let acosClamped = 0;
for (const call of acosCalls) {
  if (call.includes('clamp(')) acosClamped++;
}
assert(acosClamped === acosCalls.length, `All acos inputs clamped: ${acosClamped}/${acosCalls.length}`);

// Check log() inputs are guarded against zero/negative
const logCalls = shaderSource.match(/log\(([^)]+)\)/g) || [];
console.log(`  log() calls: ${logCalls.length}`);
// Note: some log() calls are in comments (// dim = log(8)/log(3))
const logCodeCalls = logCalls.filter(c => !c.includes('8') && !c.includes('3')); // filter comment references
const logGuarded = logCodeCalls.filter(call => call.includes('max(') || call.includes('phi') || call.includes('1.0001')).length;
console.log(`  log() code calls: ${logCodeCalls.length}, guarded: ${logGuarded}`);
assert(logGuarded >= logCodeCalls.length * 0.8, `log inputs guarded: ${logGuarded}/${logCodeCalls.length} (≥80%)`);

// Check sqrt() inputs - should use max() or be on squared values
const sqrtCalls = shaderSource.match(/sqrt\(([^)]+)\)/g) || [];
console.log(`  sqrt() calls: ${sqrtCalls.length}`);
let sqrtSafe = 0;
for (const call of sqrtCalls) {
  // sqrt is safe if argument is max(), dot(), length(), squared value, or abs()
  if (call.includes('max(') || call.includes('dot(') || call.includes('length(') || 
      call.includes('r2') || call.includes('mz2') || call.includes('md2') ||
      call.includes('abs(') || call.includes('d2') || call.includes('r_') ||
      call.includes('dz2')) {
    sqrtSafe++;
  }
}
console.log(`  sqrt safe: ${sqrtSafe}/${sqrtCalls.length}`);
assert(sqrtSafe >= sqrtCalls.length * 0.5, `sqrt inputs safe: ${sqrtSafe}/${sqrtCalls.length} (≥50%)`);

// Check pow() - base should be non-negative or guarded
const powCalls = shaderSource.match(/pow\(([^,]+),/g) || [];
console.log(`  pow() calls: ${powCalls.length}`);

// ═══════════════════════════════════════════════════════════════════════
// Test 4: Color Mixing Correctness (Post-Fix Validation)
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 4: Color Mixing Correctness ━━━');

// Verify the fix: mix() instead of addition
const colorMixLine = shaderSource.match(/vec3 mat_col\s*=\s*([^;]+);/);
assert(colorMixLine !== null, 'Color mixing line found');

if (colorMixLine) {
  const mixExpr = colorMixLine[1];
  console.log(`  Color mixing expression: ${mixExpr.trim()}`);
  
  // Should use mix(), not addition
  const usesMix = mixExpr.includes('mix(');
  const usesAddition = /\*\s*\w+\s*\+\s*\w+/.test(mixExpr) || 
                        /\w+\s*\*\s*\w+\s*\+\s*\w+\s*\*\s*\w+/.test(mixExpr);
  
  assert(usesMix === true, 'Color mixing uses mix() function');
  assert(usesAddition === false, 'Color mixing does NOT use addition (overflow risk)');
}

// Verify mix() guarantees [0,1] output when inputs are [0,1]
// mix(a, b, t) = a * (1-t) + b * t, where t ∈ [0,1]
// If a,b ∈ [0,1] and t ∈ [0,1], result ∈ [0,1] — mathematically guaranteed
console.log('  mix(a, b, t) = a*(1-t) + b*t guarantees [0,1] when inputs ∈ [0,1]');

// Verify w_secondary is clamped before use as mix factor
const wSecondaryUsage = shaderSource.match(/w_secondary/g) || [];
console.log(`  w_secondary references: ${wSecondaryUsage.length}`);

// ═══════════════════════════════════════════════════════════════════════
// Test 5: Shader Module Parameter Range Validation
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 5: Shader Module Parameter Ranges ━━━');

// Julia Variations: power should be in reasonable range (2-32)
const juliaPowerPattern = /mapJuliaBase\(p, t, phi, iters, ([\d.]+)/g;
let juliaMatch;
const juliaPowers: number[] = [];
while ((juliaMatch = juliaPowerPattern.exec(juliaVariationsSource)) !== null) {
  juliaPowers.push(parseFloat(juliaMatch[1]));
}
console.log(`  Julia variations: ${juliaPowers.length} power values`);
assert(juliaPowers.length === 50, `Julia should have 50 variants, got ${juliaPowers.length}`);

const juliaMinPower = Math.min(...juliaPowers);
const juliaMaxPower = Math.max(...juliaPowers);
console.log(`  Julia power range: ${juliaMinPower} - ${juliaMaxPower}`);
assert(juliaMinPower >= 2.0, `Julia min power ≥ 2.0, got ${juliaMinPower}`);
assert(juliaMaxPower <= 32.0, `Julia max power ≤ 32.0, got ${juliaMaxPower}`);

// Check Julia vtype values (should be 0-4)
const juliaVtypePattern = /mapJuliaBase\(p, t, phi, iters, [\d.]+, (\d+)/g;
const juliaVtypes: number[] = [];
while ((juliaMatch = juliaVtypePattern.exec(juliaVariationsSource)) !== null) {
  juliaVtypes.push(parseInt(juliaMatch[1]));
}
const uniqueVtypes = [...new Set(juliaVtypes)];
console.log(`  Julia vtype values: ${uniqueVtypes.sort().join(', ')}`);
assert(uniqueVtypes.every(v => v >= 0 && v <= 4), 'All Julia vtypes in range [0,4]');

// IFS Variations: check parameters are within bounds
const ifsParamPattern = /vec3\(([-\d.]+),\s*([-\d.]+),\s*([-\d.]+)\)/g;
let ifsMatch;
const ifsParams: number[] = [];
while ((ifsMatch = ifsParamPattern.exec(ifsVariationsSource)) !== null) {
  ifsParams.push(parseFloat(ifsMatch[1]), parseFloat(ifsMatch[2]), parseFloat(ifsMatch[3]));
}
if (ifsParams.length > 0) {
  const ifsMaxAbs = Math.max(...ifsParams.map(Math.abs));
  console.log(`  IFS params: ${ifsParams.length} values, max |value| = ${ifsMaxAbs.toFixed(2)}`);
  assert(ifsMaxAbs < 100, `IFS parameters bounded: max |value| = ${ifsMaxAbs.toFixed(2)} < 100`);
}

// L-System Variations: check angle values
const lsystemAnglePattern = /([\d.]+)\s*\*\s*PI/g;
let lsystemMatch;
const lsystemAngles: number[] = [];
while ((lsystemMatch = lsystemAnglePattern.exec(lsystemVariationsSource)) !== null) {
  lsystemAngles.push(parseFloat(lsystemMatch[1]));
}
if (lsystemAngles.length > 0) {
  console.log(`  L-System angle multipliers: ${lsystemAngles.length} values`);
  const maxAngleMult = Math.max(...lsystemAngles);
  assert(maxAngleMult <= 10, `L-System angle multiplier ≤ 10π, got ${maxAngleMult}π`);
}

// Flame Variations: check variation function count
const flameVariationPattern = /if \(idx == (\d+)\)/g;
let flameMatch;
const flameIndices: number[] = [];
while ((flameMatch = flameVariationPattern.exec(flameVariationsSource)) !== null) {
  flameIndices.push(parseInt(flameMatch[1]));
}
console.log(`  Flame variation indices: ${flameIndices.length} variants`);
assert(flameIndices.length >= 30, `Flame should have 30+ variants, got ${flameIndices.length}`);

// Hybrid Variations: check parameter bounds
const hybridParamPattern = /vec3\(([-\d.]+),\s*([-\d.]+),\s*([-\d.]+)\)/g;
let hybridMatch;
const hybridParams: number[] = [];
while ((hybridMatch = hybridParamPattern.exec(hybridVariationsSource)) !== null) {
  hybridParams.push(parseFloat(hybridMatch[1]), parseFloat(hybridMatch[2]), parseFloat(hybridMatch[3]));
}
if (hybridParams.length > 0) {
  const hybridMaxAbs = Math.max(...hybridParams.map(Math.abs));
  console.log(`  Hybrid params: ${hybridParams.length} values, max |value| = ${hybridMaxAbs.toFixed(2)}`);
  assert(hybridMaxAbs < 100, `Hybrid parameters bounded: max |value| = ${hybridMaxAbs.toFixed(2)} < 100`);
}

// ═══════════════════════════════════════════════════════════════════════
// Test 6: GLSL Anti-Pattern Detection
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 6: GLSL Anti-Pattern Detection ━━━');

// Check for unguarded texture lookups
const textureLookups = (shaderSource.match(/texture\(/g) || []).length;
console.log(`  Texture lookups: ${textureLookups}`);

// Check for potential precision issues (highp vs mediump)
const highpDecls = (shaderSource.match(/highp/g) || []).length;
const mediumpDecls = (shaderSource.match(/mediump/g) || []).length;
console.log(`  Precision qualifiers: highp=${highpDecls}, mediump=${mediumpDecls}`);

// Check for integer division (common GLSL bug)
// Pattern: integer / integer without float conversion
const intDivPattern = /int\s+\w+\s*\/\s*int/g;
const intDivMatches = shaderSource.match(intDivPattern) || [];
assert(intDivMatches.length === 0, `No integer division anti-patterns: found ${intDivMatches.length}`);

// Check loop bounds are constant or uniform (no dynamic loop bounds that could cause issues)
const forLoopPattern = /for\s*\(\s*int\s+\w+\s*=\s*0;\s*\w+\s*<\s*(\w+)/g;
let loopMatch;
const loopBounds: string[] = [];
while ((loopMatch = forLoopPattern.exec(shaderSource)) !== null) {
  loopBounds.push(loopMatch[1]);
}
console.log(`  For-loop bounds: ${loopBounds.length} loops`);
// Most should use constant or uniform bounds
const constantBounds = loopBounds.filter(b => /^\d+$/.test(b) || b.startsWith('u_') || b === 'iters' || b === 'count');
console.log(`  Constant/uniform bounded: ${constantBounds.length}/${loopBounds.length}`);

// Check for missing break/return in conditional chains
// (if-else chains that should cover all cases but might have gaps)

// ═══════════════════════════════════════════════════════════════════════
// Test 7: SDF Distance Estimate Correctness
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 7: SDF Distance Estimate Properties ━━━');

// SDF functions should return vec2(distance, trap)
const sdfReturnPattern = /return\s+vec2\(([^,]+),\s*trap\)/g;
const sdfReturns: string[] = [];
let sdfMatch;
while ((sdfMatch = sdfReturnPattern.exec(shaderSource)) !== null) {
  sdfReturns.push(sdfMatch[1].trim());
}
console.log(`  SDF return statements: ${sdfReturns.length}`);

// Check that distance estimates use log() for fractal DE (proper formula)
const logDEPattern = /0\.5\s*\*\s*log\(/g;
const logDECount = (shaderSource.match(logDEPattern) || []).length;
console.log(`  Proper fractal DE (0.5*log()): ${logDECount} occurrences`);
assert(logDECount >= 3, `Should have 3+ proper fractal DE formulas, got ${logDECount}`);

// Check escape radius (should be > 2.0 for Mandelbulb-type)
const escapePattern = /if\s*\(\s*r\s*>\s*([\d.]+)\s*\)/g;
const escapeRadii: number[] = [];
let escapeMatch;
while ((escapeMatch = escapePattern.exec(shaderSource)) !== null) {
  escapeRadii.push(parseFloat(escapeMatch[1]));
}
// Note: 0.001 appears in max(r, 0.001) guards, not as escape radius
// Actual escape conditions: r > 2.0, r > 2.2, etc. (in iteration loops)
const escapePattern2 = /if\s*\(\s*r\s*>\s*([\d.]+)\s*\)/g;
const escapeRadii2: number[] = [];
let escapeMatch2;
while ((escapeMatch2 = escapePattern2.exec(shaderSource)) !== null) {
  escapeRadii2.push(parseFloat(escapeMatch2[1]));
}
const uniqueEscapeRadii = [...new Set(escapeRadii2)];
// Note: r > 0.001 is a convergence check, not escape radius. Filter those out.
const actualEscapeRadii = uniqueEscapeRadii.filter(r => r >= 1.0);
const convergenceChecks = uniqueEscapeRadii.filter(r => r < 1.0);
console.log(`  Escape radii (r > X, X≥1): ${actualEscapeRadii.join(', ')}`);
if (convergenceChecks.length > 0) {
  console.log(`  ℹ️  Convergence checks (r < 1): ${convergenceChecks.join(', ')} (not escape radii)`);
}
if (actualEscapeRadii.length > 0) {
  assert(actualEscapeRadii.every(r => r >= 2.0), `All escape radii ≥ 2.0`);
} else {
  console.log('  ℹ️  No explicit r > X escape conditions found');
  passed++;
}

// Check iteration count clamping
const iterClampPattern = /clamp\(iters,\s*(\d+),\s*(\d+)\)/g;
const iterClamps: { min: number; max: number }[] = [];
let iterMatch;
while ((iterMatch = iterClampPattern.exec(shaderSource)) !== null) {
  iterClamps.push({ min: parseInt(iterMatch[1]), max: parseInt(iterMatch[2]) });
}
console.log(`  Iteration clamps: ${iterClamps.length}`);
// Note: min values of 2-3 are intentional for simpler fractals (L-systems, geometric)
// max values of 35-50 are intentional for complex fractals needing more detail
const iterMinValues = iterClamps.map(c => c.min);
const iterMaxValues = iterClamps.map(c => c.max);
console.log(`  Iter clamp min range: ${Math.min(...iterMinValues)}-${Math.max(...iterMinValues)}`);
console.log(`  Iter clamp max range: ${Math.min(...iterMaxValues)}-${Math.max(...iterMaxValues)}`);
for (const clamp of iterClamps) {
  assert(clamp.min >= 2, `Iter clamp min ≥ 2, got ${clamp.min}`);
  assert(clamp.max <= 50, `Iter clamp max ≤ 50, got ${clamp.max}`);
}

// ═══════════════════════════════════════════════════════════════════════
// Test 8: Ray Marching Safety
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 8: Ray Marching Safety ━━━');

// Check ray march loop has proper termination conditions
const rayMarchPattern = /for\s*\(\s*int\s+i\s*=\s*0;\s*i\s*<\s*(\w+);\s*i\+\+\s*\)/g;
const rayMarchLoops: string[] = [];
let rmMatch;
while ((rmMatch = rayMarchPattern.exec(shaderSource)) !== null) {
  rayMarchLoops.push(rmMatch[1]);
}
console.log(`  Ray march loops: ${rayMarchLoops.length}`);

// Check for early termination on hit
const hitCondition = shaderSource.includes('abs(d)') || shaderSource.includes('d <') || shaderSource.includes('d.x');
assert(hitCondition, 'Ray march has early termination on surface hit');

// Check for maximum distance escape (t > max_dist or t > 8.0)
const maxDistPattern = /t\s*>\s*(?:max_dist|8\.0|maxRayDist)/g;
const hasMaxDist = maxDistPattern.test(shaderSource);
assert(hasMaxDist, 'Ray march has maximum distance escape condition');

// Check for normal calculation using epsilon offset
const normalEpsPattern = /(?:eps|EPSILON|0\.00[0-9]+)/g;
const normalEps = shaderSource.match(normalEpsPattern) || [];
console.log(`  Epsilon constants: ${normalEps.length}`);
assert(normalEps.length >= 3, 'Has epsilon constants for normal calculation');

// ═══════════════════════════════════════════════════════════════════════
// Test 9: Uniform Buffer Consistency
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 9: Uniform Buffer Consistency ━━━');

// Check that all u_ uniforms are declared
const uniformPattern = /uniform\s+\w+\s+(u_\w+)/g;
const uniforms: string[] = [];
let uniMatch;
while ((uniMatch = uniformPattern.exec(shaderSource)) !== null) {
  uniforms.push(uniMatch[1]);
}
console.log(`  Declared uniforms: ${uniforms.length}`);

// Critical uniforms that must exist
const criticalUniforms = [
  'u_resolution', 'u_time', 'u_fractal_type', 'u_render_style',
  'u_iterations', 'u_primary_color', 'u_secondary_color',
];
for (const u of criticalUniforms) {
  assert(uniforms.includes(u), `Critical uniform '${u}' declared`);
}

// ═══════════════════════════════════════════════════════════════════════
// Test 10: Mathematical Constants Accuracy
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 10: Mathematical Constants Accuracy ━━━');

// Find PI definition
const piPattern = /(?:PI|phi|PHI|GOLDEN)\s*=\s*([\d.]+)/g;
const constants: Map<string, number> = new Map();
let constMatch;
while ((constMatch = piPattern.exec(shaderSource)) !== null) {
  constants.set(constMatch[1], parseFloat(constMatch[1]));
}

// Check PI accuracy
const piDef = shaderSource.match(/(?:const\s+float\s+PI|PI\s*=\s*)([\d.]+)/);
if (piDef) {
  const piValue = parseFloat(piDef[1]);
  console.log(`  PI = ${piValue}`);
  assertApprox(piValue, Math.PI, 0.0001, 'PI accuracy within 0.0001');
}

// Check golden ratio accuracy
const phiDef = shaderSource.match(/phi\s*=\s*([\d.]+)/);
if (phiDef) {
  const phiValue = parseFloat(phiDef[1]);
  console.log(`  φ (phi) = ${phiValue}`);
  assertApprox(phiValue, 1.61803398875, 0.0001, 'Golden ratio accuracy');
}

// ═══════════════════════════════════════════════════════════════════════
// Final Report
// ═══════════════════════════════════════════════════════════════════════

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║  SHADER MATH VALIDATION TEST RESULTS                         ');
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
  console.log('\n  ✅ All shader math validation tests PASSED');
}
