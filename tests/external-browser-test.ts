/**
 * External Browser Fractal Engine Test
 * Launches isolated Chromium via Playwright to test the fractal engine
 * without risking the main dev interface.
 *
 * Usage: npx tsx tests/external-browser-test.ts
 */
import { chromium, type Page, type BrowserContext } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RESULTS_DIR = path.join(__dirname, 'results', 'external-test');
const SCREENSHOT_DIR = path.join(RESULTS_DIR, 'screenshots');

interface TestReport {
  startTime: string;
  endTime: string;
  duration: number;
  consoleLogs: { level: string; text: string; timestamp: number }[];
  errors: string[];
  warnings: string[];
  webglInfo: string | null;
  webgpuInfo: string | null;
  screenshots: string[];
  contextLost: boolean;
  contextRestored: boolean;
  fractalSwitches: number;
  fpsSamples: number[];
  crashDetected: boolean;
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  // Ensure output directories exist
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const report: TestReport = {
    startTime: new Date().toISOString(),
    endTime: '',
    duration: 0,
    consoleLogs: [],
    errors: [],
    warnings: [],
    webglInfo: null,
    webgpuInfo: null,
    screenshots: [],
    contextLost: false,
    contextRestored: false,
    fractalSwitches: 0,
    fpsSamples: [],
    crashDetected: false,
  };

  const t0 = Date.now();
  console.log('=== External Browser Fractal Engine Test ===');
  console.log(`Results dir: ${RESULTS_DIR}`);

  // Launch isolated Chromium
  console.log('\n[1/6] Launching Chromium...');
  const browser = await chromium.launch({
    headless: false, // Visible window for manual inspection
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu-sandbox',
      '--enable-gpu-rasterization',
      '--enable-zero-copy',
      '--window-size=1280,800',
    ],
  });

  const context: BrowserContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });

  const page: Page = await context.newPage();

  // Collect console logs
  page.on('console', msg => {
    const entry = { level: msg.type(), text: msg.text(), timestamp: Date.now() - t0 };
    report.consoleLogs.push(entry);

    if (msg.type() === 'error') {
      report.errors.push(msg.text());
      console.log(`  [ERROR] ${msg.text().substring(0, 200)}`);
    } else if (msg.type() === 'warning') {
      report.warnings.push(msg.text());
    }

    // Track WebGL/WebGPU info
    if (msg.text().includes('WebGL2') && msg.text().includes('GL_VERSION')) {
      report.webglInfo = msg.text();
    }
    if (msg.text().includes('WebGPU') && msg.text().includes('adapter')) {
      report.webgpuInfo = msg.text();
    }

    // Track context loss
    if (msg.text().includes('context lost') || msg.text().includes('contextlost')) {
      report.contextLost = true;
      console.log('  [!] WebGL context LOST');
    }
    if (msg.text().includes('context restored') || msg.text().includes('contextrestored')) {
      report.contextRestored = true;
      console.log('  [✓] WebGL context restored');
    }

    // Track FPS
    const fpsMatch = msg.text().match(/fps=(\d+)/);
    if (fpsMatch) {
      report.fpsSamples.push(parseInt(fpsMatch[1]));
    }

    // Track fractal switches
    if (msg.text().includes('Rendering fractal type:')) {
      report.fractalSwitches++;
    }
  });

  // Detect page crash
  page.on('crash', () => {
    report.crashDetected = true;
    console.log('  [!!!] PAGE CRASHED');
  });

  page.on('pageerror', err => {
    report.errors.push(`PageError: ${err.message}`);
    console.log(`  [PageError] ${err.message}`);
  });

  // Navigate to the app
  console.log('\n[2/6] Navigating to localhost:5173...');
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded', timeout: 15000 });
    console.log('  ✓ Page loaded');
  } catch (e: any) {
    console.log(`  ✗ Navigation failed: ${e.message}`);
    console.log('  Make sure the dev server is running: npm run dev');
    await browser.close();
    return;
  }

  // Wait for initial render
  console.log('\n[3/6] Waiting for initial render (10s)...');
  await sleep(10000);

  // Screenshot 1: Initial render
  const screenshot1 = path.join(SCREENSHOT_DIR, '01-initial-render.png');
  await page.screenshot({ path: screenshot1, fullPage: false });
  report.screenshots.push(screenshot1);
  console.log(`  ✓ Screenshot: ${screenshot1}`);

  // Check canvas state
  const canvasExists = await page.evaluate(() => {
    const canvas = document.getElementById('fractal-canvas') as HTMLCanvasElement | null;
    if (!canvas) return { exists: false };
    const gl = canvas.getContext('webgl2');
    return {
      exists: true,
      width: canvas.width,
      height: canvas.height,
      hasWebGL2: !!gl,
    };
  });
  console.log(`  Canvas: ${canvasExists.exists ? `${canvasExists.width}x${canvasExists.height}` : 'NOT FOUND'}`);
  console.log(`  WebGL2: ${canvasExists.hasWebGL2 ? 'available' : 'unavailable'}`);

  // Simulate fractal switching via keyboard (Space = next specimen)
  console.log('\n[4/6] Testing fractal switches (5 switches via Space key)...');
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Space');
    await sleep(3000); // Wait for shader compilation + render

    const screenshot = path.join(SCREENSHOT_DIR, `02-switch-${i + 1}.png`);
    await page.screenshot({ path: screenshot, fullPage: false });
    report.screenshots.push(screenshot);
    console.log(`  Switch ${i + 1}/5 → screenshot saved`);

    // Check if page is still alive
    if (report.crashDetected) {
      console.log('  [!!!] Page crashed during switch!');
      break;
    }
  }

  // Test render style switching (keys 1-7)
  console.log('\n[5/6] Testing render style switches (keys 1-7)...');
  for (let i = 1; i <= 7; i++) {
    await page.keyboard.press(String(i));
    await sleep(2000);

    const screenshot = path.join(SCREENSHOT_DIR, `03-style-${i}.png`);
    await page.screenshot({ path: screenshot, fullPage: false });
    report.screenshots.push(screenshot);
    console.log(`  Style ${i}/7 → screenshot saved`);

    if (report.crashDetected) {
      console.log('  [!!!] Page crashed during style switch!');
      break;
    }
  }

  // Stress test: rapid switching
  console.log('\n[6/6] Stress test: 10 rapid fractal switches...');
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Space');
    await sleep(500); // Minimal delay
  }
  await sleep(5000); // Wait for all compilations

  const stressScreenshot = path.join(SCREENSHOT_DIR, '04-after-stress.png');
  await page.screenshot({ path: stressScreenshot, fullPage: false });
  report.screenshots.push(stressScreenshot);
  console.log(`  ✓ Stress test complete, final screenshot saved`);

  // Final stats
  const fpsAvg = report.fpsSamples.length > 0
    ? Math.round(report.fpsSamples.reduce((a, b) => a + b, 0) / report.fpsSamples.length)
    : 0;
  const fpsMin = report.fpsSamples.length > 0 ? Math.min(...report.fpsSamples) : 0;
  const fpsMax = report.fpsSamples.length > 0 ? Math.max(...report.fpsSamples) : 0;

  report.endTime = new Date().toISOString();
  report.duration = Date.now() - t0;

  // Save report
  const reportPath = path.join(RESULTS_DIR, 'report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n=== Report saved: ${reportPath} ===`);

  console.log(`\n--- Summary ---`);
  console.log(`Duration: ${(report.duration / 1000).toFixed(1)}s`);
  console.log(`Console logs: ${report.consoleLogs.length}`);
  console.log(`Errors: ${report.errors.length}`);
  console.log(`Warnings: ${report.warnings.length}`);
  console.log(`Fractal switches: ${report.fractalSwitches}`);
  console.log(`FPS: avg=${fpsAvg} min=${fpsMin} max=${fpsMax} (samples: ${report.fpsSamples.length})`);
  console.log(`Context lost: ${report.contextLost}`);
  console.log(`Context restored: ${report.contextRestored}`);
  console.log(`Crash detected: ${report.crashDetected}`);
  console.log(`Screenshots: ${report.screenshots.length}`);

  if (report.webglInfo) {
    console.log(`\nWebGL: ${report.webglInfo}`);
  }

  if (report.errors.length > 0) {
    console.log(`\n--- Errors ---`);
    report.errors.forEach(e => console.log(`  ${e.substring(0, 150)}`));
  }

  await browser.close();
  console.log('\n✓ Browser closed. Test complete.');
}

main().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
