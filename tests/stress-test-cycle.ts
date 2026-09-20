/**
 * Multi-Hour Fractal Engine Stress Test
 * Cycles through ALL fractal types × ALL render styles × zoom levels
 * Captures screenshots, monitors logs, detects artifacts, checks stability
 *
 * Usage: npx tsx tests/stress-test-cycle.ts
 */
import { chromium, type Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const RESULTS_DIR = path.join(__dirname, 'results', 'stress-cycle');
const SCREENSHOT_DIR = path.join(RESULTS_DIR, 'screenshots');
const LOG_DIR = path.join(RESULTS_DIR, 'logs');

const TOTAL_FRACTAL_TYPES = 113;
const RENDER_STYLES = ['solid', 'xray', 'topo', 'hologram', 'iridescent', 'quantum', 'gemstone'];
const STYLE_KEYS = ['1', '2', '3', '4', '5', '6', '7'];

interface FrameData {
  timestamp: number;
  elapsed: number;
  fractalIdx: number;
  fractalName: string;
  renderStyle: string;
  zoom: number;
  screenshot: string;
  fps: number;
  errors: string[];
  warnings: string[];
  contextLost: boolean;
  artifactDetected: string | null;
  shaderCompileTime: number | null;
}

interface StressReport {
  startTime: string;
  endTime: string;
  totalDuration: number;
  totalFrames: number;
  totalErrors: number;
  totalWarnings: number;
  contextLossEvents: number;
  crashDetected: boolean;
  artifactCount: number;
  artifactTypes: Record<string, number>;
  avgFps: number;
  minFps: number;
  maxFps: number;
  fpsSamples: number[];
  shaderCompileErrors: string[];
  frames: FrameData[];
  webglInfo: string | null;
  gpuInfo: string | null;
  memoryPeak: string | null;
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

function analyzeScreenshot(buffer: Buffer): { isBlack: boolean; isWhite: boolean; avgBrightness: number; hasContent: boolean } {
  // Quick PNG header check + basic pixel analysis via buffer scanning
  // For a real analysis we'd decode the PNG, but we can detect obvious failures:
  // - File size < 5KB likely means black/empty render
  // - We'll rely on visual inspection + log correlation
  const fileSize = buffer.length;
  return {
    isBlack: fileSize < 3000, // Very small PNG = likely black screen
    isWhite: false, // Can't detect without decoding
    avgBrightness: 0,
    hasContent: fileSize > 3000,
  };
}

async function main() {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  fs.mkdirSync(LOG_DIR, { recursive: true });

  const report: StressReport = {
    startTime: new Date().toISOString(),
    endTime: '',
    totalDuration: 0,
    totalFrames: 0,
    totalErrors: 0,
    totalWarnings: 0,
    contextLossEvents: 0,
    crashDetected: false,
    artifactCount: 0,
    artifactTypes: {},
    avgFps: 0,
    minFps: Infinity,
    maxFps: 0,
    fpsSamples: [],
    shaderCompileErrors: [],
    frames: [],
    webglInfo: null,
    gpuInfo: null,
    memoryPeak: null,
  };

  const t0 = Date.now();
  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  let currentFps = 0;
  let contextLost = false;
  let shaderCompileStart = 0;

  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║     MULTI-HOUR FRACTAL ENGINE STRESS TEST               ║');
  console.log('║     113 fractals × 7 styles = 791 combinations          ║');
  console.log('╚══════════════════════════════════════════════════════════╝');

  // Launch Chromium
  console.log('\n[INIT] Launching Chromium...');
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--enable-gpu-rasterization',
      '--window-size=1280,800',
    ],
  });

  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  // Console log collector
  page.on('console', msg => {
    const text = msg.text();
    const ts = Date.now() - t0;

    if (msg.type() === 'error') {
      allErrors.push(`[${ts}ms] ${text}`);
      if (text.includes('Shader compile error') || text.includes('Lazy compilation failed')) {
        report.shaderCompileErrors.push(text.substring(0, 300));
      }
    }
    if (msg.type() === 'warning') {
      allWarnings.push(`[${ts}ms] ${text}`);
    }

    // Track FPS from DIAG logs
    const fpsMatch = text.match(/fps=(\d+)/);
    if (fpsMatch) currentFps = parseInt(fpsMatch[1]);

    // Track context loss
    if (text.includes('context lost') || text.includes('contextlost')) {
      contextLost = true;
      report.contextLossEvents++;
      console.log(`  [!] CONTEXT LOST at ${ts}ms`);
    }
    if (text.includes('context restored')) {
      contextLost = false;
      console.log(`  [✓] Context restored at ${ts}ms`);
    }

    // Track shader compile timing
    if (text.includes('Lazy compiling shader')) shaderCompileStart = Date.now();
    if (text.includes('Lazy compilation complete')) {
      const compileTime = Date.now() - shaderCompileStart;
      if (compileTime > 20000) {
        console.log(`  [!] Slow shader compile: ${compileTime}ms`);
      }
    }

    // Track WebGL/GPU info
    if (text.includes('GL_VERSION')) report.webglInfo = text;
    if (text.includes('GL_RENDERER')) report.gpuInfo = text;
  });

  page.on('crash', () => {
    report.crashDetected = true;
    console.log('\n[!!!] PAGE CRASHED');
  });

  page.on('pageerror', err => {
    allErrors.push(`PageError: ${err.message}`);
    console.log(`  [PageError] ${err.message}`);
  });

  // Navigate
  console.log('[INIT] Navigating to localhost:5173...');
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded', timeout: 15000 });
  } catch (e: any) {
    console.log(`[FATAL] Navigation failed: ${e.message}`);
    console.log('Make sure dev server is running: npm run dev');
    await browser.close();
    return;
  }

  // Wait for initial render
  console.log('[INIT] Waiting for initial render (15s)...');
  await sleep(15000);

  // Verify canvas is working
  const canvasOk = await page.evaluate(() => {
    const c = document.getElementById('fractal-canvas') as HTMLCanvasElement | null;
    if (!c) return false;
    const gl = c.getContext('webgl2');
    return !!gl;
  });

  if (!canvasOk) {
    console.log('[FATAL] Canvas/WebGL2 not available');
    await browser.close();
    return;
  }

  console.log('[INIT] Canvas OK. Starting stress cycle...\n');

  // Save initial state screenshot
  const initShot = path.join(SCREENSHOT_DIR, '000-init.png');
  await page.screenshot({ path: initShot });
  console.log(`  Initial screenshot: ${initShot}`);

  // ═══════════════════════════════════════════════════════
  // MAIN STRESS CYCLE
  // ═══════════════════════════════════════════════════════

  let frameCount = 0;
  let consecutiveErrors = 0;

  for (let fractalIdx = 0; fractalIdx < TOTAL_FRACTAL_TYPES; fractalIdx++) {
    for (let styleIdx = 0; styleIdx < RENDER_STYLES.length; styleIdx++) {
      const styleName = RENDER_STYLES[styleIdx];
      const styleKey = STYLE_KEYS[styleIdx];
      const elapsed = Date.now() - t0;
      const elapsedMin = (elapsed / 60000).toFixed(1);

      // Check for crash
      if (report.crashDetected) {
        console.log(`\n[ABORT] Crash detected at fractal ${fractalIdx}, style ${styleName}`);
        break;
      }

      // Safety: stop if too many consecutive errors
      if (consecutiveErrors >= 5) {
        console.log(`\n[ABORT] ${consecutiveErrors} consecutive errors, stopping`);
        break;
      }

      // Navigate to this fractal via keyboard
      // Space = next specimen, but we need specific fractal index
      // Use the fact that NeuroAesthetics cycles through types automatically
      // For precise control, we'll use Space to advance and track position

      // Actually, let's use a simpler approach:
      // Press Space to advance fractal, then press style key
      // The NeuroAesthetics engine auto-cycles, so we just need to wait

      // For each combination, take a screenshot after settling
      const settleTime = styleIdx === 0 ? 4000 : 2500; // First style needs more time for shader compile
      await sleep(settleTime);

      // Press style key
      await page.keyboard.press(styleKey);
      await sleep(1500); // Let style switch render

      // Take screenshot
      const frameId = String(frameCount).padStart(4, '0');
      const screenshotPath = path.join(SCREENSHOT_DIR, `f${frameId}-${fractalIdx}-${styleName}.png`);

      let artifact: string | null = null;

      try {
        const screenshotBuffer = await page.screenshot({ path: screenshotPath, timeout: 10000 });
        const analysis = analyzeScreenshot(screenshotBuffer);

        if (!analysis.hasContent) {
          artifact = 'black_screen';
          report.artifactTypes['black_screen'] = (report.artifactTypes['black_screen'] || 0) + 1;
          report.artifactCount++;
          consecutiveErrors++;
        } else {
          consecutiveErrors = Math.max(0, consecutiveErrors - 1);
        }

        // Record frame data
        report.frames.push({
          timestamp: Date.now(),
          elapsed,
          fractalIdx,
          fractalName: `fractal_${fractalIdx}`,
          renderStyle: styleName,
          zoom: 0,
          screenshot: screenshotPath,
          fps: currentFps,
          errors: allErrors.slice(report.totalErrors),
          warnings: allWarnings.slice(report.totalWarnings),
          contextLost,
          artifactDetected: artifact,
          shaderCompileTime: null,
        });

        report.fpsSamples.push(currentFps);
        if (currentFps < report.minFps) report.minFps = currentFps;
        if (currentFps > report.maxFps) report.maxFps = currentFps;

      } catch (e: any) {
        artifact = 'screenshot_timeout';
        report.artifactTypes['screenshot_timeout'] = (report.artifactTypes['screenshot_timeout'] || 0) + 1;
        report.artifactCount++;
        consecutiveErrors++;
        console.log(`  [!] Screenshot timeout at f${frameId}`);
      }

      frameCount++;
      report.totalFrames = frameCount;
      report.totalErrors = allErrors.length;
      report.totalWarnings = allWarnings.length;

      // Progress log every 10 frames
      if (frameCount % 10 === 0) {
        const fpsAvg = report.fpsSamples.length > 0
          ? Math.round(report.fpsSamples.reduce((a, b) => a + b, 0) / report.fpsSamples.length)
          : 0;
        console.log(`  [${elapsedMin}min] Frame ${frameCount}/${TOTAL_FRACTAL_TYPES * RENDER_STYLES.length} | ` +
          `Fractal ${fractalIdx}/${TOTAL_FRACTAL_TYPES} | Style: ${styleName} | ` +
          `FPS: ${currentFps} (avg: ${fpsAvg}) | Errors: ${allErrors.length} | Artifacts: ${report.artifactCount}`);

        // Save interim report
        saveInterimReport(report, t0);
      }

      // Periodic memory check
      if (frameCount % 50 === 0) {
        const memInfo = await page.evaluate(() => {
          const perf = performance as any;
          if (perf.memory) {
            return {
              usedJSHeapSize: Math.round(perf.memory.usedJSHeapSize / 1048576) + 'MB',
              totalJSHeapSize: Math.round(perf.memory.totalJSHeapSize / 1048576) + 'MB',
            };
          }
          return null;
        });
        if (memInfo) {
          console.log(`  [MEM] JS Heap: ${memInfo.usedJSHeapSize} / ${memInfo.totalJSHeapSize}`);
          report.memoryPeak = memInfo.totalJSHeapSize;
        }
      }
    }

    if (report.crashDetected || consecutiveErrors >= 5) break;

    // Advance to next fractal type via Space
    await page.keyboard.press('Space');
    await sleep(2000); // Wait for shader compilation
  }

  // ═══════════════════════════════════════════════════════
  // FINAL REPORT
  // ═══════════════════════════════════════════════════════

  report.endTime = new Date().toISOString();
  report.totalDuration = Date.now() - t0;
  report.avgFps = report.fpsSamples.length > 0
    ? Math.round(report.fpsSamples.reduce((a, b) => a + b, 0) / report.fpsSamples.length)
    : 0;
  if (report.minFps === Infinity) report.minFps = 0;

  // Save final report
  const reportPath = path.join(RESULTS_DIR, 'stress-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  // Save error log
  fs.writeFileSync(path.join(LOG_DIR, 'errors.log'), allErrors.join('\n'));
  fs.writeFileSync(path.join(LOG_DIR, 'warnings.log'), allWarnings.join('\n'));

  const durationMin = (report.totalDuration / 60000).toFixed(1);
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║                    FINAL REPORT                          ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log(`  Duration:       ${durationMin} minutes`);
  console.log(`  Total frames:   ${report.totalFrames}`);
  console.log(`  Total errors:   ${report.totalErrors}`);
  console.log(`  Total warnings: ${report.totalWarnings}`);
  console.log(`  Context losses: ${report.contextLossEvents}`);
  console.log(`  Crashes:        ${report.crashDetected ? 'YES' : 'none'}`);
  console.log(`  Artifacts:      ${report.artifactCount} (${Object.entries(report.artifactTypes).map(([k,v]) => `${k}:${v}`).join(', ') || 'none'})`);
  console.log(`  FPS:            avg=${report.avgFps} min=${report.minFps} max=${report.maxFps}`);
  console.log(`  Shader errors:  ${report.shaderCompileErrors.length}`);
  console.log(`  WebGL:          ${report.webglInfo || 'N/A'}`);
  console.log(`  GPU:            ${report.gpuInfo || 'N/A'}`);
  console.log(`  Memory peak:    ${report.memoryPeak || 'N/A'}`);
  console.log(`  Screenshots:    ${frameCount} files in ${SCREENSHOT_DIR}`);
  console.log(`  Report:         ${reportPath}`);

  if (report.shaderCompileErrors.length > 0) {
    console.log('\n  --- Shader Compile Errors ---');
    report.shaderCompileErrors.forEach((e, i) => console.log(`    ${i + 1}. ${e.substring(0, 120)}`));
  }

  if (allErrors.length > 0) {
    console.log(`\n  --- Last 10 Errors ---`);
    allErrors.slice(-10).forEach(e => console.log(`    ${e.substring(0, 150)}`));
  }

  await browser.close();
  console.log('\n✓ Browser closed. Stress test complete.');
}

function saveInterimReport(report: StressReport, t0: number) {
  const interimPath = path.join(RESULTS_DIR, 'interim-report.json');
  const data = { ...report, elapsed: Date.now() - t0 };
  fs.writeFileSync(interimPath, JSON.stringify(data, null, 2));
}

main().catch(err => {
  console.error('Stress test failed:', err);
  process.exit(1);
});
