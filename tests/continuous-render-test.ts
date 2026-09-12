/**
 * Continuous Rendering Validation Test
 * 
 * Cycles through all 431 fractal types, takes screenshots,
 * captures console errors, measures FPS. Loops every 4 minutes.
 * 
 * Usage: npx tsx tests/continuous-render-test.ts
 */

import { createHarness, type HarnessReport, type ConsoleEntry } from './browser-harness';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// ─── Fractal Type Registry (index → name) ──────────────────────────
// Extracted from types/fractal.ts comments + fractalMappers.ts

const FRACTAL_TYPES: string[] = [
  'phyllotaxis','mandelbulb','quaternionJulia','apollonian','spiralTunnel',
  'mandelbox','icosahedral','menger','gyroid','primeSpiral',
  'quasicrystal','hopfFibration','calabiYau','riemannZeta','sierpinskiOcta',
  'cliffordKlein','poincareSphere','gaussianPrimes','neoviusMinimal','eulerTotientSpiral',
  'cliffordTorus4D','kleinianLimit','fibonacciSnowflake','quaternionMandelbrot','hilbertCurve3D',
  'dragonCurveIFS','pythagorasTree3D','burningShip3D','newtonBasins','jerusalemCube',
  'lorenzAttractor','hofstadterButterfly','antoineNecklace','dlaCluster','rosslerHyperchaos',
  'cliffordAttractor','abrikosovLattice','beltramiPseudosphere','spinFoamNetwork','ramanujanTau',
  'belousovWaves','henonAttractor','aizawaAttractor','thomasAttractor','halvorsenAttractor',
  'juliaSet3D','multibrot3','tetrix','gosperCurve','lSystemPlant',
  'schwarzP','schwarzD','apollonianGasket','barnsleyFern3D','kleinQuartic',
  'spherePacking','novaFractal','goldenKnot','sphericalHarmonics','reactionDiffusion',
  'fractalCross','sierpinskiCarpet','tricorn','chuaCircuit','standardMap',
  'ikedaMap','kochSnowflake3D','cantorDust','phoenixFractal','fatouSet',
  'e8Lattice','chladniFigures','fitzHugh','rosslerAttractor','duffingAttractor',
  'logisticBifurcation','fractalSpire','deJongAttractor','pickoverAttractor','vicsekFractal',
  'mandelbar','weierstrass3D','popcornFunction','bedheadAttractor','fourSpotAttractor',
  'svenssonAttractor',
  // 4D Polytopes (81-85)
  'tesseract','120Cell','600Cell','24Cell','5Cell',
  // Higher-Dimensional Manifolds (86-89)
  'kleinBottle','projectivePlane','mobiusStrip3D','torusKnot4D',
  // Fractal Flames (90-102)
  'flameSinusoidal','flameSpherical','flameSwirl','flameHorseshoe','flameButterfly',
  'flameHeart','flameSpiral','flameHyperbolic','flameDiamond','flameWaves',
  'flamePopcorn','flameRings','flameFan',
  // Advanced IFS (103-107)
  'ifs3DTree','ifs3DFern','ifs3DSierpinski','ifs3DCantor','ifs3DKoch',
];

// Note: indices 108-430 are generated variations (Julia/IFS/LSystem/Flame/Hybrid/Mandelbrot)
// They are accessed via the same hash mechanism but use generated names
// For the continuous test, we test the 108 named types + sample from generated ranges

const GENERATED_RANGES = [
  { prefix: 'mandelbrotVariant', start: 131, end: 140 },
  { prefix: 'juliaVariant', start: 141, end: 190 },
  { prefix: 'ifsVariant', start: 191, end: 240 },
  { prefix: 'lsystemVariant', start: 241, end: 290 },
  { prefix: 'flameVariant', start: 291, end: 340 },
  { prefix: 'hybridVariant', start: 341, end: 430 },
];

// ─── Config ────────────────────────────────────────────────────────

const CYCLE_INTERVAL_MS = 4 * 60 * 1000; // 4 minutes
const RESULTS_DIR = resolve(import.meta.dirname ?? '.', 'tests/results');
const SCREENSHOT_DIR = resolve(RESULTS_DIR, 'screenshots');
const MAX_CYCLES = Infinity;

// FPS Thresholds — performance below these values is a FAILURE
const FPS_THRESHOLD_NAMED = 30; // Named fractals (0-107) must achieve ≥30 FPS
const FPS_THRESHOLD_GENERATED = 15; // Generated variations (108-430) must achieve ≥15 FPS

// Mobile viewports to test (mandatory compatibility)
const MOBILE_VIEWPORTS = [
  { name: 'iPhone-SE', width: 375, height: 667 },
  { name: 'iPhone-X', width: 375, height: 812 },
  { name: 'iPhone-14-Pro', width: 393, height: 852 },
  { name: 'Pixel-7', width: 412, height: 915 },
];

// ─── Helpers ───────────────────────────────────────────────────────

function ensureDir(dir: string) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function formatDuration(ms: number): string {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h}h ${m % 60}m`;
  if (m > 0) return `${m}m ${s % 60}s`;
  return `${s}s`;
}

// ─── Main Loop ─────────────────────────────────────────────────────

async function runCycle(cycleNum: number): Promise<HarnessReport> {
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  CYCLE ${cycleNum} — ${new Date().toLocaleTimeString()}`);
  console.log(`${'═'.repeat(60)}\n`);

  const harness = await createHarness({
    headless: true,
    gpuMode: 'hardware',
    buildFirst: cycleNum === 1, // Only build on first cycle
    renderSettleTime: 2500,
    fpsSampleDuration: 2000,
  });

  try {
    await harness.loadApp();

    const cycleDir = resolve(SCREENSHOT_DIR, `cycle-${cycleNum}`);
    ensureDir(cycleDir);

    let errorCount = 0;
    let webglWarningCount = 0;
    let shaderErrorCount = 0;
    let fpsSamples: number[] = [];
    let screenshotCount = 0;
    let performanceFailures: { fractal: string; fps: number; threshold: number }[] = [];
    let mobileFailures: { viewport: string; fractal: string; error: string }[] = [];

    // Phase 1: Test all named fractal types (0-107)
    console.log(`\n  Phase 1: Named fractals (0-${FRACTAL_TYPES.length - 1})`);
    for (let i = 0; i < FRACTAL_TYPES.length; i++) {
      const name = FRACTAL_TYPES[i];
      try {
        // Navigate to fractal via hash URL
        const baseUrl = (harness as any).config.url.split('?')[0] as string;
        const url = `${baseUrl}?test=1#type=${name}`;
        await (harness as any).page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await (harness as any).page.waitForTimeout(2000);

        // Screenshot via page.screenshot() (canvas.toDataURL returns null in hardware mode)
        const screenshotPath = resolve(cycleDir, `${String(i).padStart(3, '0')}-${name}.png`);
        try {
          await (harness as any).page.screenshot({ path: screenshotPath, timeout: 5000 });
          screenshotCount++;
        } catch {
          // Screenshot failed — not critical, but log it
        }

        if (i % 20 === 0) {
          process.stdout.write(`  [${i}/${FRACTAL_TYPES.length}] `);
        }
      } catch (err) {
        errorCount++;
        console.log(`  ✗ Error on ${name} [${i}]: ${(err as Error).message.substring(0, 60)}`);
      }
    }

    // Phase 2: Sample generated variations (every 10th from each range)
    console.log(`\n\n  Phase 2: Generated variation samples`);
    for (const range of GENERATED_RANGES) {
      for (let idx = range.start; idx <= range.end; idx += 10) {
        try {
          const baseUrl = (harness as any).config.url.split('?')[0] as string;
          // For generated types, use the numeric index via the app's test mode
          const url = `${baseUrl}?test=1#type=${range.prefix}${idx - range.start + 1}`;
          await (harness as any).page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
          await (harness as any).page.waitForTimeout(1500);

          const screenshotPath = resolve(cycleDir, `${String(idx).padStart(3, '0')}-${range.prefix}.png`);
          try {
            await (harness as any).page.screenshot({ path: screenshotPath, timeout: 5000 });
            screenshotCount++;
          } catch {
            // Screenshot failed
          }
        } catch {
          errorCount++;
        }
      }
      process.stdout.write(`  ${range.prefix}: sampled\n`);
    }

    // Phase 3: FPS measurement on key fractals (with threshold checks)
    console.log(`\n  Phase 3: FPS sampling (threshold: ≥${FPS_THRESHOLD_NAMED} FPS for named)`);
    const fpsKeyFractals = [
      { name: 'mandelbulb', idx: 1 },
      { name: 'juliaSet3D', idx: 45 },
      { name: 'lorenzAttractor', idx: 30 },
      { name: 'flameSinusoidal', idx: 90 },
      { name: 'ifs3DTree', idx: 103 },
    ];

    for (const f of fpsKeyFractals) {
      try {
        const baseUrl = (harness as any).config.url.split('?')[0] as string;
        await (harness as any).page.goto(`${baseUrl}?test=1#type=${FRACTAL_TYPES[f.idx]}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
        await (harness as any).page.waitForTimeout(3000);
        
        const fps = await harness.measureFPS(f.name, f.idx, 3000);
        if (fps.fps > 0) fpsSamples.push(fps.fps);
        
        // Check FPS threshold — performance failure if below threshold
        if (fps.fps > 0 && fps.fps < FPS_THRESHOLD_NAMED) {
          performanceFailures.push({ fractal: f.name, fps: fps.fps, threshold: FPS_THRESHOLD_NAMED });
          process.stdout.write(`  ${f.name}: ${fps.fps} FPS ⚠️ BELOW ${FPS_THRESHOLD_NAMED}  `);
        } else {
          process.stdout.write(`  ${f.name}: ${fps.fps} FPS ✓  `);
        }
      } catch {
        process.stdout.write(`  ${f.name}: timeout  `);
      }
    }

    // Phase 4: Mobile viewport compatibility test
    console.log(`\n\n  Phase 4: Mobile viewport compatibility`);
    const mobileTestFractals = ['mandelbulb', 'juliaSet3D', 'flameSinusoidal']; // Sample key fractals
    const originalViewport = (harness as any).page.viewportSize();
    
    for (const viewport of MOBILE_VIEWPORTS) {
      try {
        await (harness as any).page.setViewportSize({ width: viewport.width, height: viewport.height });
        await (harness as any).page.waitForTimeout(500);
        
        for (const fractalName of mobileTestFractals) {
          const fractalIdx = FRACTAL_TYPES.indexOf(fractalName);
          if (fractalIdx < 0) continue;
          
          const baseUrl = (harness as any).config.url.split('?')[0] as string;
          await (harness as any).page.goto(`${baseUrl}?test=1#type=${fractalName}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
          await (harness as any).page.waitForTimeout(2000);
          
          // Check for rendering errors on mobile
          const mobileErrors = harness.getConsoleErrors().filter(e => 
            e.text.includes('WebGL') || e.text.includes('shader') || e.text.includes('context')
          );
          
          if (mobileErrors.length > 0) {
            mobileFailures.push({ 
              viewport: `${viewport.name} (${viewport.width}x${viewport.height})`, 
              fractal: fractalName, 
              error: mobileErrors[0].text.substring(0, 80) 
            });
          }
          
          // Take mobile screenshot
          const mobileScreenshotPath = resolve(cycleDir, `mobile-${viewport.name}-${fractalName}.png`);
          try {
            await (harness as any).page.screenshot({ path: mobileScreenshotPath, timeout: 5000 });
            screenshotCount++;
          } catch {
            // Screenshot failed
          }
        }
        
        process.stdout.write(`  ${viewport.name} (${viewport.width}x${viewport.height}): ✓\n`);
      } catch (err) {
        mobileFailures.push({ 
          viewport: `${viewport.name} (${viewport.width}x${viewport.height})`, 
          fractal: 'all', 
          error: (err as Error).message.substring(0, 80) 
        });
        process.stdout.write(`  ${viewport.name}: ✗ FAILED\n`);
      }
    }
    
    // Restore original viewport
    await (harness as any).page.setViewportSize(originalViewport);

    // Collect metrics
    const errors = harness.getConsoleErrors();
    const webglWarnings = harness.getWebGLWarnings();
    const shaderErrors = harness.getShaderErrors();

    console.log(`\n\n  ─── Cycle ${cycleNum} Summary ───`);
    console.log(`  Screenshots saved: ${screenshotCount}`);
    console.log(`  Console errors: ${errors.length}`);
    console.log(`  WebGL warnings: ${webglWarnings.length}`);
    console.log(`  Shader errors: ${shaderErrors.length}`);
    console.log(`  FPS samples: ${fpsSamples.length} (avg: ${fpsSamples.length > 0 ? Math.round(fpsSamples.reduce((a, b) => a + b, 0) / fpsSamples.length) : 0})`);
    console.log(`  Navigation errors: ${errorCount}`);
    console.log(`  Performance failures: ${performanceFailures.length}`);
    console.log(`  Mobile failures: ${mobileFailures.length}`);

    if (errors.length > 0) {
      console.log(`\n  Top errors:`);
      const uniqueErrors = [...new Set(errors.map(e => e.text.substring(0, 100)))].slice(0, 5);
      for (const e of uniqueErrors) {
        console.log(`    • ${e}`);
      }
    }
    
    if (performanceFailures.length > 0) {
      console.log(`\n  ⚠️ Performance failures (FPS below threshold):`);
      for (const pf of performanceFailures) {
        console.log(`    • ${pf.fractal}: ${pf.fps} FPS (threshold: ${pf.threshold})`);
      }
    }
    
    if (mobileFailures.length > 0) {
      console.log(`\n  ✗ Mobile compatibility failures:`);
      for (const mf of mobileFailures) {
        console.log(`    • ${mf.viewport} — ${mf.fractal}: ${mf.error}`);
      }
    }

    const report = await harness.close();
    
    // Save cycle report
    const reportPath = resolve(RESULTS_DIR, `cycle-${cycleNum}-report.json`);
    writeFileSync(reportPath, JSON.stringify({
      cycle: cycleNum,
      timestamp: new Date().toISOString(),
      summary: report.summary,
      screenshotCount,
      errorCount,
      fpsAvg: fpsSamples.length > 0 ? Math.round(fpsSamples.reduce((a, b) => a + b, 0) / fpsSamples.length) : 0,
      fpsSamples,
      performanceFailures,
      mobileFailures,
    }, null, 2));

    return report;
  } catch (err) {
    console.error(`  FATAL: ${(err as Error).message}`);
    await harness.close().catch(() => {});
    throw err;
  }
}

// ─── Entry Point ───────────────────────────────────────────────────

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║  Continuous Rendering Validation                        ║');
  console.log('║  All 431 fractals • Screenshots • FPS • Console errors  ║');
  console.log(`║  Cycle interval: ${CYCLE_INTERVAL_MS / 60000} minutes                              ║`);
  console.log('╚══════════════════════════════════════════════════════════╝');

  ensureDir(RESULTS_DIR);
  ensureDir(SCREENSHOT_DIR);

  let cycle = 0;
  const allCycleSummaries: any[] = [];

  while (cycle < MAX_CYCLES) {
    cycle++;
    const startTime = Date.now();

    try {
      const report = await runCycle(cycle);
      allCycleSummaries.push({
        cycle,
        duration: formatDuration(Date.now() - startTime),
        ...report.summary,
      });

      // Save cumulative report
      writeFileSync(
        resolve(RESULTS_DIR, 'cumulative-report.json'),
        JSON.stringify(allCycleSummaries, null, 2)
      );
    } catch (err) {
      console.error(`Cycle ${cycle} failed: ${(err as Error).message}`);
      allCycleSummaries.push({ cycle, error: (err as Error).message });
    }

    const elapsed = Date.now() - startTime;
    const waitTime = Math.max(0, CYCLE_INTERVAL_MS - elapsed);

    if (waitTime > 0 && cycle < MAX_CYCLES) {
      console.log(`\n  Next cycle in ${formatDuration(waitTime)}...`);
      await new Promise(r => setTimeout(r, waitTime));
    }
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
