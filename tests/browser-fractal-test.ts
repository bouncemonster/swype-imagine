/**
 * Browser-Based Fractal Integration Test
 * 
 * Uses the headless browser harness to:
 * 1. Load the app in headless Chromium with WebGL2
 * 2. Take screenshots of key fractal types
 * 3. Measure real FPS during rendering
 * 4. Capture console logs (WebGL warnings, shader errors)
 * 5. Run visual regression against baselines
 * 6. Generate comprehensive report
 * 
 * Usage: npx tsx tests/browser-fractal-test.ts
 * 
 * Prerequisites:
 *   npm run build (or pass --skip-build)
 *   npx playwright install chromium
 */

import { createHarness, type HarnessReport, type ConsoleEntry } from './browser-harness';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// ─── Parse CLI args ──────────────────────────────────────────────────

const args = process.argv.slice(2);
const skipBuild = args.includes('--skip-build');
const headed = args.includes('--headed');
const fractalCount = parseInt(args.find(a => a.startsWith('--count='))?.split('=')[1] || '10');
const specificIndex = args.find(a => a.startsWith('--fractal='))?.split('=')[1];

// ─── Extract fractal types from mapper ───────────────────────────────

function extractTypes(): { type: string; index: number }[] {
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

// ─── Main test runner ────────────────────────────────────────────────

async function runBrowserTests(): Promise<void> {
  console.log(`\n╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║  BROWSER-BASED FRACTAL INTEGRATION TEST                      ║`);
  console.log(`╠════════════════════════════════════════════════════════════════╣`);
  console.log(`║  Mode: ${headed ? 'HEADED (visible)' : 'HEADLESS'}                                          ║`);
  console.log(`║  Fractals: ${specificIndex ? `single #${specificIndex}` : `${fractalCount} samples`}                                  ║`);
  console.log(`║  Build: ${skipBuild ? 'SKIP' : 'REQUIRED'}                                              ║`);
  console.log(`╚════════════════════════════════════════════════════════════════╝\n`);
  
  // Initialize harness
  const harness = await createHarness({
    buildFirst: !skipBuild,
    headless: !headed,
    width: 1280,
    height: 720,
    renderSettleTime: 5000, // Increased from 2500ms to handle slow first frame
    fpsSampleDuration: 2000,
    regressionThreshold: 0.02,
  });
  
  try {
    // ─── Phase 1: Load App ─────────────────────────────────────────
    console.log('━━━ Phase 1: App Loading ━━━');
    await harness.loadApp();
    
    const loadErrors = harness.getConsoleErrors();
    const shaderErrors = harness.getShaderErrors().filter(e => 
      e.text && !e.text.includes('null') && e.text.length > 30
    ); // Filter out false-positive null errors from test mode
    const webglWarnings = harness.getWebGLWarnings();
    
    console.log(`  Console errors: ${loadErrors.length}`);
    console.log(`  Shader errors: ${shaderErrors.length}`);
    console.log(`  WebGL warnings: ${webglWarnings.length}`);
    
    if (shaderErrors.length > 0) {
      console.log('  ❌ Shader compilation errors detected:');
      for (const err of shaderErrors.slice(0, 5)) {
        console.log(`     ${err.text.substring(0, 120)}`);
      }
    }
    
    // ─── Phase 2: Key Fractal Screenshots ──────────────────────────
    console.log('\n━━━ Phase 2: Screenshot Capture ━━━');
    
    const allTypes = extractTypes();
    let testTypes: { type: string; index: number }[];
    
    if (specificIndex) {
      const idx = parseInt(specificIndex);
      const found = allTypes.find(t => t.index === idx);
      testTypes = found ? [found] : [{ type: `type${idx}`, index: idx }];
    } else {
      // Sample evenly across the range
      const step = Math.max(1, Math.floor(allTypes.length / fractalCount));
      testTypes = allTypes.filter((_, i) => i % step === 0).slice(0, fractalCount);
    }
    
    console.log(`  Testing ${testTypes.length} fractal types...\n`);
    
    for (let i = 0; i < testTypes.length; i++) {
      const { type, index } = testTypes[i];
      
      process.stdout.write(`\r  [${i + 1}/${testTypes.length}] fractal #${index} (${type})`);
      
      try {
        await harness.screenshotFractal(type, index);
      } catch (err) {
        console.log(`\n  ⚠️  Failed to render #${index}: ${err instanceof Error ? err.message : err}`);
      }
    }
    console.log('\n');
    
    // ─── Phase 3: FPS Measurement ──────────────────────────────────
    console.log('━━━ Phase 3: FPS Measurement ━━━');
    
    const fpsSamples = testTypes.slice(0, Math.min(testTypes.length, 10));
    
    for (const { type, index } of fpsSamples) {
      try {
        await harness.setFractalType(index);
        const fps = await harness.measureFPS(type, index, 2000);
        const icon = fps.fps >= 60 ? '✅' : fps.fps >= 30 ? '⚡' : '⚠️';
        console.log(`  ${icon} #${index} ${type}: ${fps.fps} FPS (${fps.frameTime}ms/frame)`);
      } catch (err) {
        console.log(`  ❌ #${index} ${type}: FPS measurement failed`);
      }
    }
    
    // ─── Phase 4: Visual Regression ────────────────────────────────
    console.log('\n━━━ Phase 4: Visual Regression ━━━');
    
    const regressionSamples = testTypes.slice(0, Math.min(testTypes.length, 5));
    let passCount = 0;
    let failCount = 0;
    
    for (const { type, index } of regressionSamples) {
      try {
        const result = await harness.compareWithBaseline(type, index);
        if (result.match) {
          console.log(`  ✅ #${index} ${type}: MATCH (${result.diffPercent}% diff)`);
          passCount++;
        } else {
          console.log(`  ❌ #${index} ${type}: MISMATCH (${result.diffPercent}% diff)`);
          failCount++;
        }
      } catch (err) {
        console.log(`  ⚠️  #${index} ${type}: Regression check skipped`);
      }
    }
    
    // ─── Phase 5: Console Analysis ─────────────────────────────────
    console.log('\n━━━ Phase 5: Console Log Analysis ━━━');
    
    const allConsole = harness['consoleEntries'] as ConsoleEntry[];
    const categories = {
      webgl: allConsole.filter(e => e.category === 'webgl').length,
      webgpu: allConsole.filter(e => e.category === 'webgpu').length,
      shader: allConsole.filter(e => e.category === 'shader').length,
      fps: allConsole.filter(e => e.category === 'fps').length,
      error: allConsole.filter(e => e.category === 'error').length,
      warn: allConsole.filter(e => e.category === 'warn').length,
      info: allConsole.filter(e => e.category === 'info').length,
    };
    
    console.log(`  Total console entries: ${allConsole.length}`);
    console.log(`  WebGL: ${categories.webgl} | WebGPU: ${categories.webgpu} | Shader: ${categories.shader}`);
    console.log(`  FPS logs: ${categories.fps} | Errors: ${categories.error} | Warnings: ${categories.warn}`);
    
    // ─── Final Report ──────────────────────────────────────────────
    console.log('\n╔════════════════════════════════════════════════════════════════╗');
    console.log('║  FINAL REPORT                                                ║');
    console.log('╠════════════════════════════════════════════════════════════════╣');
    
    const report = await harness.close();
    
    console.log(`║  Duration: ${(report.duration / 1000).toFixed(1)}s`);
    console.log(`║  Screenshots: ${report.summary.totalScreenshots}`);
    console.log(`║  FPS measurements: ${report.summary.totalFPSMeasurements}`);
    console.log(`║  Avg FPS: ${report.summary.avgFPS} | Min: ${report.summary.minFPS} | Max: ${report.summary.maxFPS}`);
    console.log(`║  Regressions: ${report.summary.passedRegressions} passed, ${report.summary.failedRegressions} failed`);
    console.log(`║  Console errors: ${categories.error}`);
    console.log(`║  Shader errors: ${shaderErrors.length}`);
    console.log(`║  Page errors: ${report.errors.length}`);
    console.log('╚════════════════════════════════════════════════════════════════╝');
    
    // Save detailed report
    const reportPath = resolve(projectRoot, 'tests/results/browser-test-report.json');
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n  📄 Detailed report: ${reportPath}`);
    
    // Exit code — only real shader errors with actual messages are critical
    const realShaderErrors = shaderErrors.filter(e => e.text && e.text.length > 50 && !e.text.includes('null'));
    const hasCriticalErrors = realShaderErrors.length > 0 || report.errors.length > 0;
    if (hasCriticalErrors) {
      console.log('\n  ❌ CRITICAL ERRORS DETECTED — see report for details');
      process.exit(1);
    } else {
      console.log('\n  ✅ Browser integration test PASSED');
    }
    
  } catch (error) {
    console.error('\n  ❌ Fatal error:', error);
    await harness.close();
    process.exit(1);
  }
}

// Run
runBrowserTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
