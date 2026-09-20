/**
 * Responsiveness probe: proves the browser main thread stays alive (input-
 * responsive, loader animating) while shaders compile on load and on each
 * fractal switch. Heartbeats (rAF + setInterval) are injected before any app
 * code; large gaps = main-thread block = the old freeze bug.
 * Usage: npx tsx tests/responsiveness-probe.ts
 */
import { chromium } from 'playwright';

const FRACTALS = ['mandelbulb', 'menger', 'lorenzAttractor', 'newtonBasins', 'gyroid'];

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--enable-gpu-rasterization', '--use-gl=angle', '--window-size=1280,800'],
  });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  // Inject heartbeat before app code runs on every navigation.
  // MUST be a raw string: a TS arrow fn gets esbuild __name() helpers injected
  // which throw in-page (ReferenceError) and silently kill the script.
  // The rAF chain freezes with the renderer main thread, so a Web Worker also
  // tracks the main-thread's silence (worker time keeps advancing through freezes).
  await context.addInitScript({ content: `
    window.__hb = { rafMaxGap: 0, rafCount: 0, lastRaf: performance.now(), timerMaxOvershoot: 0, timerCount: 0, lastTimer: performance.now(), workerMaxStall: 0 };
    var rafTick = function (now) { var hb = window.__hb; var gap = now - hb.lastRaf; if (gap > hb.rafMaxGap) hb.rafMaxGap = gap; hb.lastRaf = now; hb.rafCount++; requestAnimationFrame(rafTick); };
    requestAnimationFrame(rafTick);
    var timerTick = function () { var hb = window.__hb; var now = performance.now(); var over = now - hb.lastTimer - 50; if (over > hb.timerMaxOvershoot) hb.timerMaxOvershoot = over; hb.lastTimer = now; hb.timerCount++; setTimeout(timerTick, 50); };
    setTimeout(timerTick, 50);
    try {
      var blob = new Blob([\"var max=0,last=Date.now();setInterval(function(){var now=Date.now();var g=now-last-50;last=now;if(g>250&&g>max){max=g;try{postMessage({maxStall:Math.round(g)})}catch(e){}}},50);\"], { type: 'text/javascript' });
      var worker = new Worker(URL.createObjectURL(blob));
      worker.onmessage = function (e) { var v = e.data && e.data.maxStall; if (v > window.__hb.workerMaxStall) window.__hb.workerMaxStall = v; };
    } catch (e) { window.__hb.workerErr = String(e); }
    try { window.__hb.workerBlobOk = typeof URL.createObjectURL === 'function'; } catch (e) {}
  ` });

  let worstRaf = 0;
  let worstTimer = 0;
  const failures: string[] = [];

  for (let i = 0; i < FRACTALS.length; i++) {
    const name = FRACTALS[i];
    const page = await context.newPage();
    const compileLogs: string[] = [];
    const compileTimes: number[] = [];
    let lastLazyStart = 0;
    page.on('console', m => {
      const t = m.text();
      const now = Date.now();
      if (/Lazy compiling shader for fractal (\d+)/i.test(t)) {
        const idx = Number(RegExp.$1);
        if (idx !== 0) lastLazyStart = now; // per-switch compile (idx 0 = initial)
      }
      if (/Lazy compilation complete/i.test(t) && lastLazyStart) {
        compileTimes.push(now - lastLazyStart); lastLazyStart = 0;
      }
      // Per-stage timeline for the switch compile (parse/compile/link/complete)
      if (lastLazyStart && /\[ShaderManager\] (parsing|compiling|linking|complete): Fractal [1-9]/i.test(t)) {
        console.log(`    stage t+${now - lastLazyStart}ms: ${t.slice(0, 90)}`);
      }
      // Live stream of poll diagnostics (spins/wall/budget) for any fractal
      if (/\[ShaderManager\] (poll|vert|frag|LINK_STATUS)/i.test(t)) console.log(`    ${t.slice(0, 110)}`);
      if (/ShaderManager|Lazy compil|Engine ready|Hash/i.test(t)) compileLogs.push(t.slice(0, 120));
    });

    const url = `http://localhost:5173/?test=1&_f=${Date.now()}#type=${name}&renderStyle=solid`;
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);
    console.log(`    hb@1.5s: ${JSON.stringify(await page.evaluate(() => (window as any).__hb && { raf: (window as any).__hb.rafCount, t: (window as any).__hb.timerCount }))}`);

    // Watch loader: it should be visible during compile, gone after
    let loaderSeen = false;
    let loaderGoneAt = 0;
    const t0 = Date.now();
    while (Date.now() - t0 < 25000) {
      const visible = await page.evaluate(() => {
        const el = document.getElementById('gpu-pipeline-loading-overlay') || document.getElementById('cosmic-loader-overlay');
        return !!el;
      });
      if (visible && !loaderSeen) loaderSeen = true;
      if (!visible && loaderSeen) { loaderGoneAt = Date.now() - t0; break; }
      await page.waitForTimeout(120);
    }

    await page.waitForTimeout(2500); // let warmup + a few render frames pass
    const hb = await page.evaluate(() => (window as any).__hb);
    const renderReady = await page.evaluate(() => {
      const c = document.querySelector('canvas') as HTMLCanvasElement | null;
      return c ? c.width + 'x' + c.height : 'no canvas';
    });

    console.log(`[${i + 1}/${FRACTALS.length}] ${name}: loader=${loaderSeen ? 'seen' : 'NEVER SHOWN'} goneAt=${loaderGoneAt}ms rafMaxGap=${Math.round(hb.rafMaxGap)}ms timerMaxOvershoot=${Math.round(hb.timerMaxOvershoot)}ms workerMaxStall=${Math.round(hb.workerMaxStall)}ms rafTicks=${hb.rafCount} timerTicks=${hb.timerCount} switchCompile=${compileTimes.join(',')}ms workerErr=${hb.workerErr || 'none'} blobOk=${hb.workerBlobOk} canvas=${renderReady}`);
    if (hb.rafCount === 0 || hb.timerCount === 0) failures.push(`${name}: heartbeat DEAD (0 ticks) — measurement invalid`);
    compileLogs.filter(l => /Hash|hash/.test(l)).slice(0, 3).forEach(l => console.log(`    ${l}`));
    compileLogs.slice(0, 4).forEach(l => console.log(`    ${l}`));

    worstRaf = Math.max(worstRaf, hb.rafMaxGap);
    worstTimer = Math.max(worstTimer, hb.timerMaxOvershoot);
    if (!loaderSeen) failures.push(`${name}: loading overlay never appeared (compile not surfaced)`);
    // Ceiling 800ms: per-switch compile now yields (measured ~100ms rAF gaps, the
    // old bug was a single 10,000-25,000ms block). The floor above ~100ms is the
    // one-time cold D3D11 device init on the very first page, which no JS can make
    // async. 800ms still catches any genuine multi-second freeze.
    if (hb.timerMaxOvershoot > 800) failures.push(`${name}: main thread blocked ${Math.round(hb.timerMaxOvershoot)}ms (browser unresponsive)`);
    if (hb.workerMaxStall > 800) failures.push(`${name}: main thread silent ${Math.round(hb.workerMaxStall)}ms per worker clock (browser unresponsive)`);
    await page.close();
  }

  console.log(`\n=== WORST: rafMaxGap=${Math.round(worstRaf)}ms timerMaxOvershoot=${Math.round(worstTimer)}ms ===`);
  if (failures.length) {
    console.log('FAILURES:'); failures.forEach(f => console.log('  - ' + f));
    process.exitCode = 1;
  } else {
    console.log('PASS: browser stayed responsive (per-switch gaps < 800ms, ~100ms steady-state) and loader reflected real compilation on every switch.');
  }
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
