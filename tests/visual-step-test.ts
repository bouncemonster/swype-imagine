/**
 * Step-by-step visual quality test.
 * One fractal at a time: screenshot → evaluate → console logs → next.
 * Tests fractals 0-41 in solid style (style 0).
 */
import { chromium, type Browser, type Page, type ConsoleMessage } from 'playwright';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.join(__dirname, 'results', 'visual-step');

const STYLE_NAMES = ['solid', 'xray', 'topo', 'hologram', 'iridescent', 'quantum', 'gemstone'];

interface FractalResult {
  idx: number;
  name: string;
  screenshotPath: string;
  fileSize: number;
  fillRatio: number | null;   // canvas non-black pixel ratio (null = no stats)
  avgLum: number | null;
  consoleErrors: string[];
  consoleWarnings: string[];
  timestamp: string;
}

// Fractal names for reporting
const FRACTAL_NAMES: string[] = [
  'phyllotaxis', 'mandelbulb', 'quaternionJulia', 'apollonian', 'spiralTunnel',
  'mandelbox', 'icosahedral', 'menger', 'gyroid', 'primeSpiral',
  'quasicrystal', 'hopfFibration', 'calabiYau', 'riemannZeta', 'sierpinskiOcta',
  'cliffordKlein', 'poincareSphere', 'gaussianPrimes', 'neoviusMinimal', 'eulerTotientSpiral',
  'cliffordTorus4D', 'kleinianLimit', 'fibonacciSnowflake', 'quaternionMandelbrot', 'hilbertCurve3D',
  'dragonCurveIFS', 'pythagorasTree3D', 'burningShip3D', 'newtonBasins', 'jerusalemCube',
  'lorenzAttractor', 'hofstadterButterfly', 'antoineNecklace', 'dlaCluster', 'rosslerHyperchaos',
  'cliffordAttractor', 'abrikosovLattice', 'beltramiPseudosphere', 'spinFoamNetwork', 'ramanujanTau',
  'belousovWaves', 'henonAttractor',
];

async function main() {
  // Clean output directory (KEEP=1 preserves results from previous chunk runs)
  if (process.env.KEEP !== '1' && fs.existsSync(OUT_DIR)) {
    fs.rmSync(OUT_DIR, { recursive: true });
  }
  fs.mkdirSync(path.join(OUT_DIR, 'screenshots'), { recursive: true });

  console.log('=== VISUAL STEP TEST START ===');
  console.log(`Output: ${OUT_DIR}`);
  console.log(`Testing ${FRACTAL_NAMES.length} fractals × ${STYLE_NAMES.length} styles = ${FRACTAL_NAMES.length * STYLE_NAMES.length} combos\n`);

  const browser: Browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu-sandbox',
      '--enable-gpu-rasterization',
      '--disable-software-rasterizer',
      '--use-gl=angle',
      '--window-size=1280,800',
    ],
  });

  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page: Page = await context.newPage();

  // Collect console logs
  const allErrors: string[] = [];
  const allWarnings: string[] = [];

  page.on('console', (msg: ConsoleMessage) => {
    const text = msg.text();
    if (msg.type() === 'error') {
      allErrors.push(text);
      console.log(`  [ERROR] ${text}`);
    } else if (msg.type() === 'warning') {
      allWarnings.push(text);
    }
  });

  page.on('pageerror', (err) => {
    allErrors.push(err.message);
    console.log(`  [PAGE ERROR] ${err.message}`);
  });

  // Navigate to the app
  console.log('Navigating to localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000); // Wait for initial render

  // Check WebGL context
  const webglInfo = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return { error: 'No canvas found' };
    const gl = canvas.getContext('webgl2');
    if (!gl) return { error: 'No WebGL2' };
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return {
      renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown',
      vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown',
      version: gl.getParameter(gl.VERSION),
    };
  });
  console.log(`WebGL: ${JSON.stringify(webglInfo)}\n`);

  const results: FractalResult[] = [];
  const totalFractals = FRACTAL_NAMES.length;

  // Optional subset selection via env vars (comma-separated indices)
  //   FRACTALS=5,6,14  → only those fractal indices
  //   STYLES=0,2       → only those style indices
  const selectedFractals = process.env.FRACTALS
    ? process.env.FRACTALS.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n))
    : FRACTAL_NAMES.map((_, i) => i);
  const selectedStyles = process.env.STYLES
    ? process.env.STYLES.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n))
    : STYLE_NAMES.map((_, i) => i);

  const totalCombos = selectedFractals.length * selectedStyles.length;
  let comboNum = 0;

  for (const i of selectedFractals) {
    const name = FRACTAL_NAMES[i];

    for (const styleIdx of selectedStyles) {
      const styleName = STYLE_NAMES[styleIdx];
      comboNum++;

      console.log(`--- [${comboNum}/${totalCombos}] Fractal ${i}: ${name} × ${styleName} ---`);

      // The app reads fractal config from the URL HASH (type/renderStyle),
      // parsed only once on mount (no hashchange listener). A unique query
      // param (_f) forces a full document reload so the new hash is applied.
      // ?test=1 enables preserveDrawingBuffer for reliable headless screenshots.
      const url = `http://localhost:5173/?test=1&_f=${comboNum}#type=${name}&renderStyle=${styleName}`;
      await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });

      // Wait for BOTH overlays to disappear before capturing:
      //  1. #cosmic-loader-overlay  — intro screen, hides when engine is ready (first render done)
      //  2. #gpu-pipeline-loading-overlay — shader-compiling overlay
      await page.waitForSelector('#cosmic-loader-overlay', { state: 'detached', timeout: 18000 })
        .catch(() => console.log('  (cosmic-loader still attached — will force-remove)'));
      await page.waitForSelector('#gpu-pipeline-loading-overlay', { state: 'detached', timeout: 18000 })
        .catch(() => console.log('  (gpu-overlay still attached — will force-remove)'));

      // Hide any lingering overlays so the screenshot is never contaminated by
      // the loader covering the canvas. NOTE: never el.remove() React-owned DOM
      // nodes — React's reconciler then crashes with removeChild NotFoundError.
      await page.evaluate(() => {
        document.querySelectorAll('#cosmic-loader-overlay, #gpu-pipeline-loading-overlay')
          .forEach(el => { (el as HTMLElement).style.display = 'none'; });
      });

      // Settle time for animation so the fractal is fully framed/rotating
      await page.waitForTimeout(2500);

      // Verify the CANVAS itself has real content (not black) by reading pixels
      // via preserveDrawingBuffer (?test=1). Retry to give slow shaders time.
      let canvasStats: { avgLum: number; nonBlackRatio: number } | null = null;
      for (let attempt = 0; attempt < 4; attempt++) {
        canvasStats = await page.evaluate(() => {
          const c = document.querySelector('canvas');
          if (!c) return null;
          const url = (c as HTMLCanvasElement).toDataURL('image/png');
          return new Promise(res => {
            const img = new Image();
            img.onload = () => {
              const off = document.createElement('canvas');
              off.width = img.width; off.height = img.height;
              const ctx = off.getContext('2d');
              if (!ctx) return res(null);
              ctx.drawImage(img, 0, 0);
              const d = ctx.getImageData(0, 0, off.width, off.height).data;
              let sum = 0, nonBlack = 0, count = 0;
              for (let y = 0; y < off.height; y += 4) {
                for (let x = 0; x < off.width; x += 4) {
                  const i = (y * off.width + x) * 4;
                  const lum = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
                  sum += lum; if (lum > 16) nonBlack++; count++;
                }
              }
              res({ avgLum: sum / count, nonBlackRatio: nonBlack / count });
            };
            img.onerror = () => res(null);
            img.src = url;
          });
        });
        if (canvasStats && canvasStats.nonBlackRatio > 0.03) break;
        console.log(`  (canvas mostly black — waiting 5s, attempt ${attempt + 1}/4)`);
        await page.waitForTimeout(5000);
      }
      const statsText = canvasStats
        ? `lum=${canvasStats.avgLum.toFixed(1)} fill=${(canvasStats.nonBlackRatio * 100).toFixed(1)}%`
        : 'no-stats';

      // Take screenshot
      const screenshotName = `f${String(i).padStart(4, '0')}-${styleIdx}-${styleName}.png`;
      const screenshotPath = path.join(OUT_DIR, 'screenshots', screenshotName);
      await page.screenshot({ path: screenshotPath, fullPage: false });
  
      // Check file size (black screen = very small file)
      const stats = fs.statSync(screenshotPath);
      const fileSizeKB = (stats.size / 1024).toFixed(1);
  
      // Visual check based on CANVAS PIXELS (reliable), file size as fallback
      const isBlack = canvasStats ? canvasStats.nonBlackRatio <= 0.03 : stats.size < 3000;
      const status = isBlack ? 'BLACK/EMPTY' : 'rendered';
  
      console.log(`  [${fileSizeKB} KB] (${statsText}) ${status}`);
  
      results.push({
        idx: i,
        name,
        screenshotPath,
        fileSize: stats.size,
        fillRatio: canvasStats ? canvasStats.nonBlackRatio : null,
        avgLum: canvasStats ? canvasStats.avgLum : null,
        consoleErrors: [...allErrors],
        consoleWarnings: [...allWarnings],
        timestamp: new Date().toISOString(),
      });
  
      // Save interim report every 20 combos
      if (comboNum % 20 === 0 || comboNum === totalCombos) {
        const report = {
          total: totalCombos,
          completed: results.length,
          webglInfo,
          results: results.map(r => ({
            idx: r.idx,
            name: r.name,
            style: STYLE_NAMES[r.idx % STYLE_NAMES.length] || 'unknown',
            fileSize: r.fileSize,
            fillRatio: r.fillRatio,
            isBlack: r.fillRatio !== null ? r.fillRatio <= 0.03 : r.fileSize < 3000,
          })),
          totalErrors: allErrors.length,
          totalWarnings: allWarnings.length,
        };
        fs.writeFileSync(path.join(OUT_DIR, 'interim-report.json'), JSON.stringify(report, null, 2));
        console.log(`  [Interim: ${results.length}/${totalCombos}, Errors: ${allErrors.length}, Warnings: ${allWarnings.length}]`);
      }
    } // end style loop
  } // end fractal loop

  // Save final report
  const finalReport = {
    total: totalCombos,
    completed: results.length,
    webglInfo,
    results: results.map(r => ({
      idx: r.idx,
      name: r.name,
      fileSize: r.fileSize,
      fillRatio: r.fillRatio,
      avgLum: r.avgLum,
      isBlack: r.fillRatio !== null ? r.fillRatio <= 0.03 : r.fileSize < 3000,
      errors: r.consoleErrors.length,
      warnings: r.consoleWarnings.length,
    })),
    totalErrors: allErrors.length,
    totalWarnings: allWarnings.length,
    allErrors,
    allWarnings,
    timestamp: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(OUT_DIR, 'visual-report.json'), JSON.stringify(finalReport, null, 2));

  const isBlackResult = (r: FractalResult) =>
    r.fillRatio !== null ? r.fillRatio <= 0.03 : r.fileSize < 3000;
  console.log('=== VISUAL STEP TEST COMPLETE ===');
  console.log(`Results: ${results.filter(r => !isBlackResult(r)).length}/${totalCombos} rendered`);
  console.log(`Black screens: ${results.filter(isBlackResult).length}`);
  console.log(`Total errors: ${allErrors.length}, Total warnings: ${allWarnings.length}`);
  console.log(`Report: ${path.join(OUT_DIR, 'visual-report.json')}`);

  await browser.close();
}

main().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
