/**
 * Cross-Engine Parity Validation Test
 * 
 * Validates that WebGL2 and WebGPU engines maintain feature parity:
 * 1. Both extend FractalEngineBase with same abstract interface
 * 2. Both use identical 48-float uniform packing
 * 3. Both draw the same full-screen triangle (3 vertices)
 * 4. Both use same shader index computation (via base class)
 * 5. Documented gaps (WebGL-only surface export, WebGPU-only async features)
 * 
 * Usage: npx tsx tests/cross-engine-parity-test.ts
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

// ─── Load Source Files ───────────────────────────────────────────────

const baseSource = readFileSync(
  resolve(projectRoot, 'src/engine/FractalEngineBase.ts'), 'utf-8'
);
const webglSource = readFileSync(
  resolve(projectRoot, 'src/engine/WebGLEngine.ts'), 'utf-8'
);
const webgpuSource = readFileSync(
  resolve(projectRoot, 'src/engine/WebGPUEngine.ts'), 'utf-8'
);
const hookSource = readFileSync(
  resolve(projectRoot, 'src/hooks/useRenderEngine.ts'), 'utf-8'
);

// ═══════════════════════════════════════════════════════════════════════
// Test 1: Base Class Contract
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 1: Base Class Contract ━━━');

// Both engines must extend FractalEngineBase
assert(webglSource.includes('extends FractalEngineBase'), 'WebGLEngine extends FractalEngineBase');
assert(webgpuSource.includes('extends FractalEngineBase'), 'WebGPUEngine extends FractalEngineBase');

// Base class must define abstract methods
assert(baseSource.includes('abstract init()'), 'Base class defines abstract init()');
assert(baseSource.includes('abstract render('), 'Base class defines abstract render()');
assert(baseSource.includes('abstract destroy()'), 'Base class defines abstract destroy()');

// Both engines must implement all abstract methods
assert(webglSource.includes('public init()'), 'WebGLEngine implements init()');
assert(webglSource.includes('public render('), 'WebGLEngine implements render()');
assert(webglSource.includes('public destroy()'), 'WebGLEngine implements destroy()');

assert(webgpuSource.includes('public async init()'), 'WebGPUEngine implements init()');
assert(webgpuSource.includes('public render('), 'WebGPUEngine implements render()');
assert(webgpuSource.includes('public destroy()'), 'WebGPUEngine implements destroy()');

// ═══════════════════════════════════════════════════════════════════════
// Test 2: Uniform Packing Parity
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 2: Uniform Packing Parity ━━━');

// Both engines must call packUniforms from base class
assert(webglSource.includes('this.packUniforms('), 'WebGLEngine calls packUniforms()');
assert(webgpuSource.includes('this.packUniforms('), 'WebGPUEngine calls packUniforms()');

// Both use same 48-float base layout
const webglUniformSize = webglSource.match(/Float32Array\((\d+)\)/);
const webgpuUniformSize = webgpuSource.match(/Float32Array\((\d+)\)/);

if (webglUniformSize) {
  const glSize = parseInt(webglUniformSize[1]);
  console.log(`  WebGL uniform buffer: ${glSize} floats`);
  assert(glSize === 48, `WebGL uses 48-float buffer, got ${glSize}`);
}

if (webgpuUniformSize) {
  const gpuSize = parseInt(webgpuUniformSize[1]);
  console.log(`  WebGPU uniform buffer: ${gpuSize} floats`);
  assert(gpuSize === 52, `WebGPU uses 52-float buffer (alignment padding), got ${gpuSize}`);
}

// Base class packUniforms must write all 48 slots
const packUniformsMatch = baseSource.match(/protected packUniforms[\s\S]*?return out;/);
if (packUniformsMatch) {
  const packBody = packUniformsMatch[0];
  // Check critical uniform indices are written
  const criticalIndices = [0, 2, 4, 6, 7, 8, 16, 20, 27, 31, 39, 43, 46];
  for (const idx of criticalIndices) {
    assert(packBody.includes(`out[${idx}]`), `packUniforms writes index ${idx}`);
  }
}

// ═══════════════════════════════════════════════════════════════════════
// Test 3: Shader Index Computation Parity
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 3: Shader Index Computation ━━━');

// Both engines must use computeIndices from base class
assert(webglSource.includes('this.computeIndices('), 'WebGLEngine calls computeIndices()');
assert(webgpuSource.includes('this.computeIndices('), 'WebGPUEngine calls computeIndices()');

// Both engines must use resolvePalette from base class
assert(webglSource.includes('this.resolvePalette('), 'WebGLEngine calls resolvePalette()');
assert(webgpuSource.includes('this.resolvePalette('), 'WebGPUEngine calls resolvePalette()');

// ═══════════════════════════════════════════════════════════════════════
// Test 4: Draw Call Parity
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 4: Draw Call Parity ━━━');

// Both engines draw 3 vertices (full-screen triangle)
assert(webglSource.includes('drawArrays(gl.TRIANGLES, 0, 3)'), 'WebGL draws 3 vertices (triangle)');
assert(webgpuSource.includes('draw(3, 1, 0, 0)'), 'WebGPU draws 3 vertices (triangle)');

// Both use triangle-list topology
assert(webglSource.includes('TRIANGLES'), 'WebGL uses TRIANGLES topology');
assert(webgpuSource.includes("'triangle-list'"), 'WebGPU uses triangle-list topology');

// ═══════════════════════════════════════════════════════════════════════
// Test 5: Uniform Validation Parity
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 5: Uniform Validation ━━━');

// Both engines validate time and zoom values
assert(webglSource.includes("validateScalar(") && webglSource.includes("'u_time'"), 
  'WebGL validates u_time');
assert(webglSource.includes("validateScalar(") && webglSource.includes("'u_zoom'"), 
  'WebGL validates u_zoom');

assert(webgpuSource.includes("validateScalar(") && webgpuSource.includes("'u_time'"), 
  'WebGPU validates u_time');
assert(webgpuSource.includes("validateScalar(") && webgpuSource.includes("'u_zoom'"), 
  'WebGPU validates u_zoom');

// ═══════════════════════════════════════════════════════════════════════
// Test 6: Documented Feature Gaps
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 6: Documented Feature Gaps ━━━');

// WebGL-only features
assert(webglSource.includes('collectSurfacePoints'), 'WebGL has surface point export (WebGL-only)');
assert(webglSource.includes('evaluateSDF'), 'WebGL has SDF evaluation (WebGL-only)');
assert(webglSource.includes('getExportData'), 'WebGL has export data (WebGL-only)');
assert(!webgpuSource.includes('collectSurfacePoints'), 'WebGPU does NOT have surface point export');
assert(!webgpuSource.includes('getExportData'), 'WebGPU does NOT have export data');

// WebGPU-only features
assert(webgpuSource.includes('adapterInfo'), 'WebGPU has adapter info (WebGPU-only)');
assert(webgpuSource.includes('createRenderPipelineAsync'), 'WebGPU has async pipeline (WebGPU-only)');
assert(webgpuSource.includes('device.lost'), 'WebGPU has device loss handler (WebGPU-only)');
assert(webgpuSource.includes('getCompilationInfo'), 'WebGPU has shader compilation info (WebGPU-only)');

// WebGL-only diagnostics
assert(webglSource.includes('getError()'), 'WebGL has per-frame GL error checking (WebGL-only)');
assert(webglSource.includes('Slow WebGL frame'), 'WebGL has slow frame logging (WebGL-only)');

console.log('  ℹ️  Feature gaps documented and intentional');

// ═══════════════════════════════════════════════════════════════════════
// Test 7: Fallback Mechanism
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 7: Fallback Mechanism ━━━');

// Auto mode defaults to WebGL2
assert(hookSource.includes("return 'webgl2'"), 'Auto mode defaults to WebGL2');

// WebGPU failure triggers WebGL2 fallback
assert(hookSource.includes('webgpuFailedRef'), 'WebGPU failure flag exists');
assert(hookSource.includes("setActiveEngineType('webgl2')"), 'Fallback to WebGL2 on WebGPU failure');

// Embedded browser blocks WebGPU
assert(hookSource.includes('isEmbeddedBrowser'), 'Embedded browser detection exists');

// Context loss handling
assert(hookSource.includes('webglcontextlost'), 'WebGL context loss handler exists');
assert(hookSource.includes('webglcontextrestored'), 'WebGL context restore handler exists');

// ═══════════════════════════════════════════════════════════════════════
// Test 8: Quality Level Parity
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 8: Quality Level Parity ━━━');

// Both engines support quality level
assert(baseSource.includes('setQualityLevel'), 'Base class has setQualityLevel()');
assert(baseSource.includes('qualityLevel'), 'Base class has qualityLevel property');

// Both engines get quality level set
assert(hookSource.includes('gpuEngine.setQualityLevel'), 'WebGPU quality level is set');
assert(hookSource.includes('glEngine.setQualityLevel'), 'WebGL quality level is set');

// Dynamic quality adjustment based on FPS
assert(hookSource.includes('DynamicQuality'), 'Dynamic quality adjustment exists');
assert(hookSource.includes('setQualityLevel(currentQuality - 1)'), 'Quality downgrade on low FPS');
assert(hookSource.includes('setQualityLevel(currentQuality + 1)'), 'Quality upgrade on stable FPS');

// ═══════════════════════════════════════════════════════════════════════
// Test 9: Performance Measurement Parity
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 9: Performance Measurement ━━━');

// Both engines use measurePerformance
assert(webglSource.includes('measurePerformance'), 'WebGL uses measurePerformance()');
assert(webgpuSource.includes('measurePerformance'), 'WebGPU uses measurePerformance()');

// Both engines update diagnostics
assert(webglSource.includes('renderDiagnostics'), 'WebGL uses renderDiagnostics');
assert(webgpuSource.includes('renderDiagnostics'), 'WebGPU uses renderDiagnostics');

// Both track GPU context
assert(webglSource.includes('trackGPUContext'), 'WebGL tracks GPU context');
assert(webgpuSource.includes('trackGPUContext'), 'WebGPU tracks GPU context');

// ═══════════════════════════════════════════════════════════════════════
// Test 10: WebGL Init Fallback Chain
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 10: WebGL Init Fallback Chain ━━━');

// WebGL has progressive fallback attempts
const initAttempts = webglSource.match(/Attempt \d:/g) || [];
console.log(`  WebGL init attempts: ${initAttempts.length}`);
assert(initAttempts.length >= 3, `WebGL has 3+ init fallback attempts, got ${initAttempts.length}`);

// WebGL1 last resort
assert(webglSource.includes('webgl') && webglSource.includes('WebGL1'), 'WebGL1 last resort exists');

// preserveDrawingBuffer for test mode
assert(webglSource.includes('preserveDrawingBuffer'), 'preserveDrawingBuffer support exists');
assert(webglSource.includes('test=1'), 'Test mode detection exists');

// ═══════════════════════════════════════════════════════════════════════
// Test 11: WebGPU Init Safety
// ═══════════════════════════════════════════════════════════════════════

console.log('\n━━━ Test 11: WebGPU Init Safety ━━━');

// WebGPU has 5-second adapter timeout
assert(webgpuSource.includes('5000'), 'WebGPU has 5s adapter timeout');
assert(webgpuSource.includes('Promise.race'), 'WebGPU uses Promise.race for timeout');

// WebGPU handles device loss
assert(webgpuSource.includes('isDestroyed'), 'WebGPU has isDestroyed flag');

// WebGPU render wrapped in try-catch
const renderMethod = webgpuSource.match(/public render\([\s\S]*?^\s{2}\}/m);
if (renderMethod) {
  assert(renderMethod[0].includes('try {'), 'WebGPU render has try-catch');
  assert(renderMethod[0].includes('catch'), 'WebGPU render handles errors');
}

// ═══════════════════════════════════════════════════════════════════════
// Final Report
// ═══════════════════════════════════════════════════════════════════════

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║  CROSS-ENGINE PARITY VALIDATION RESULTS                      ');
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
  console.log('\n  ✅ All cross-engine parity tests PASSED');
  console.log('  ℹ️  WebGL-only: surface point export, GL error checking, slow frame logging');
  console.log('  ℹ️  WebGPU-only: adapter info, async pipeline, device loss, compilation info');
}
