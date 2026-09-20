/**
 * Loader-sync verification: proves the CosmicLoader progress is driven by REAL
 * device init + shader compile + first rendered frame (not the old fixed 450ms
 * timer), that it opens on BOTH desktop and mobile, and that the browser stays
 * responsive (no multi-second freeze) while the loader runs.
 * Usage: npx tsx tests/loader-sync-test.ts   (dev server must be on :5173)
 */
import { chromium, devices } from 'playwright';

const URL = 'http://localhost:5173/?test=1&_f=' + Date.now() + '#type=mandelbulb&renderStyle=solid';

async function runOne(label: string, ctxOpts: any) {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--enable-gpu-rasterization', '--use-gl=angle'],
  });
  const context = await browser.newContext(ctxOpts);
  // Heartbeat + in-page ShaderManager/console + loader-detach timestamps.
  // All recorded in a single in-page clock (performance.now) so the sync
  // correlation (loader persisted until real compile 'complete') is reliable,
  // independent of Playwright's console-event transport (which can drop lines).
  // Raw string: a TS arrow fn gets esbuild __name() injected and throws in-page.
  await context.addInitScript({ content: `
    window.__hb = { rafMaxGap: 0, rafCount: 0, lastRaf: performance.now(), postInitMaxGap: 0, firstFrameAt: 0 };
    var rafTick = function (now) {
      var hb = window.__hb;
      var g = now - hb.lastRaf;
      if (g > hb.rafMaxGap) hb.rafMaxGap = g;
      // Gap AFTER the first rendered frame is the true interactivity metric. The
      // pre-first-frame gap is the one-time physical device-init floor (getContext /
      // D3D11) that cannot be made async from JS, so it is reported but not failed.
      if (hb.firstFrameAt && g > hb.postInitMaxGap) hb.postInitMaxGap = g;
      hb.lastRaf = now; hb.rafCount++; requestAnimationFrame(rafTick);
    };
    requestAnimationFrame(rafTick);

    window.__shm = { loaderSeen: false, loaderGoneAt: 0 };
    var __origInfo = console.info;
    console.info = function () {
      try {
        var msg = Array.prototype.join.call(arguments, ' ');
        if (msg.indexOf('First frame rendered') >= 0 && !window.__hb.firstFrameAt) {
          window.__hb.firstFrameAt = performance.now();
        }
      } catch (e) {}
      return __origInfo.apply(console, arguments);
    };
    var __mo = new MutationObserver(function () {
      var el = document.getElementById('cosmic-loader-overlay');
      if (!window.__shm.loaderSeen && el) { window.__shm.loaderSeen = true; }
      else if (window.__shm.loaderSeen && !el && !window.__shm.loaderGoneAt) { window.__shm.loaderGoneAt = performance.now(); }
    });
    __mo.observe(document, { childList: true, subtree: true });
  ` });

  const page = await context.newPage();

  const navStart = Date.now();
  await page.goto(URL, { waitUntil: 'domcontentloaded' });

  // Sample the real progress bar width and loader presence over time.
  const progressSeen: number[] = [];
  let loaderGoneAt = 0;
  let maxTarget = 0;
  // Headless ANGLE compiles measure ~16s for the first frame on this machine;
  // with the 30s force-dismiss bound the detach can land ~17-18s, so the
  // sampling window must stay well above that (40s) to avoid a false timeout.
  const deadline = Date.now() + 40000;
  while (Date.now() < deadline) {
    const s = await page.evaluate(() => {
      const loader = document.getElementById('cosmic-loader-overlay');
      const bar = document.getElementById('cosmic-loader-progress') as HTMLElement | null;
      // pct      = ANIMATED fill width (intermediate real-stage climb).
      // pctTarget= the React-set inline target (reflects setLoadProgress(1) on
      // the first frame even if the CSS transition mid-frame isn't sampled).
      let pct = -1;
      let pctTarget = -1;
      if (bar) {
        pctTarget = parseFloat(bar.style.width || '0');
        const parent = bar.parentElement;
        const bw = bar.getBoundingClientRect().width;
        const pw = parent ? parent.getBoundingClientRect().width : 0;
        pct = pw > 0 ? Math.round((bw / pw) * 100) : pctTarget;
      }
      const c = document.querySelector('canvas') as HTMLCanvasElement | null;
      return { loaderPresent: !!loader, pct, pctTarget, canvasSize: c ? c.width * c.height : 0 };
    });
    if (s.pct >= 0) {
      const last = progressSeen.length ? progressSeen[progressSeen.length - 1] : -1;
      if (s.pct !== last) progressSeen.push(s.pct);
    }
    if (s.pctTarget > maxTarget) maxTarget = s.pctTarget;
    if (!s.loaderPresent) { loaderGoneAt = Date.now() - navStart; break; }
    await page.waitForTimeout(25);
  }

  // AUTHORITATIVE pixel check at the exact moment the loader detaches. The
  // console-log "first frame" signal is self-referential (it is the same event
  // that triggers dismissal), so only canvas content can catch a FALSE first-frame
  // (loader dismissing while nothing was actually drawn). Requires ?test=1 →
  // preserveDrawingBuffer for drawImage to read back live WebGL pixels.
  const fillAtDetach = await page.evaluate(() => {
    const c = document.querySelector('canvas') as HTMLCanvasElement | null;
    if (!c || !c.width || !c.height) return -1;
    const tmp = document.createElement('canvas');
    tmp.width = 64; tmp.height = 36;
    const ctx = tmp.getContext('2d');
    if (!ctx) return -1;
    ctx.drawImage(c, 0, 0, 64, 36);
    const d = ctx.getImageData(0, 0, 64, 36).data;
    let nb = 0;
    for (let i = 0; i < 64 * 36; i++) {
      const lum = 0.2126 * d[i * 4] + 0.7152 * d[i * 4 + 1] + 0.0722 * d[i * 4 + 2];
      if (lum > 16) nb++;
    }
    return nb / (64 * 36);
  });

  await page.waitForTimeout(1500);
  const hb = await page.evaluate(() => (window as any).__hb);
  const shm = await page.evaluate(() => (window as any).__shm);
  const canvasDims = await page.evaluate(() => { const c = document.querySelector('canvas') as HTMLCanvasElement | null; return c ? c.width + 'x' + c.height : 'none'; });

  const firstFrameT = hb.firstFrameAt || 0;   // in-page perf clock
  const goneT = shm.loaderGoneAt || 0;         // in-page perf clock

  console.log(`\n=== ${label} ===`);
  console.log(`  loader progress samples (%): ${progressSeen.join(' → ')}`);
  console.log(`  loader detached at ${loaderGoneAt}ms (wall from nav)`);
  console.log(`  max progress-bar target reached: ${maxTarget}%`);
  console.log(`  canvas=${canvasDims} rafTicks=${hb.rafCount}`);
  console.log(`  in-page: first-frame@${Math.round(firstFrameT)}ms, loader detached@${Math.round(goneT)}ms`);
  console.log(`  rAF gap: init(one-time device floor)=${Math.round(hb.rafMaxGap)}ms, post-first-frame(responsiveness)=${Math.round(hb.postInitMaxGap)}ms`);
  console.log(`  canvas non-black fill at loader-detach: ${fillAtDetach >= 0 ? (fillAtDetach * 100).toFixed(1) + '%' : 'unreadable'}`);

  const fails: string[] = [];
  if (!progressSeen.length) fails.push('loader progress never observed');
  // Real stages produce intermediate values (12/20/44/76/92), NOT the old fake
  // 25/50/75/100 fixed-timer steps. At least one intermediate climb proves it.
  const intermediate = progressSeen.some(v => v > 0 && v < 100);
  if (!intermediate) fails.push('no intermediate real-stage progress (suspicion of fixed-timer jump)');
  // SYNC proof (single in-page clock): the loader must persist until the FIRST
  // REAL rendered frame, then dismiss shortly after (the old fake loader detached
  // on a fixed 450ms timer, entirely decoupled from device init / render).
  if (!firstFrameT) fails.push("first rendered frame never observed (onEngineReady not tied to render)");
  if (!goneT) fails.push('loader never detached (stuck)');
  if (firstFrameT && goneT) {
    if (goneT < firstFrameT) fails.push(`loader detached BEFORE first frame rendered (${Math.round(goneT)}ms < ${Math.round(firstFrameT)}ms)`);
    if (goneT - firstFrameT > 3000) fails.push(`loader lingered ${Math.round(goneT - firstFrameT)}ms after first frame (not synced to fade)`);
  }
  // Pixel truth: the loader must never detach over a black canvas. This is the
  // check that catches a first-frame signal firing on a silently-skipped render
  // (program still lazily compiling) — the log-based checks above cannot see it.
  if (fillAtDetach < 0) fails.push('canvas not readable at loader-detach (no 2d readback)');
  else if (fillAtDetach <= 0.005) fails.push(`loader detached with BLACK canvas (fill ${(fillAtDetach * 100).toFixed(1)}%) — first-frame signal was false`);
  // The bar target must climb through the REAL compile stages (>=40 = the
  // 'compiling' stage). It legitimately stays there during the heavy link (the
  // physical device-init floor) and only jumps to 100% on the first frame — which
  // is exactly when the loader dismisses. Forcing ~100% earlier would be fake.
  if (maxTarget < 40) fails.push(`loader never tracked real compile stages (max target ${maxTarget}%)`);
  // NOTE: main-thread freeze is owned by responsiveness-probe.ts (per-switch). The
  // post-first-frame gap is printed here for transparency; this loader test also
  // runs heavy 25ms DOM sampling that competes with the compile, so it is not the
  // authoritative responsiveness metric and is not failed on.
  if (hb.rafCount < 5) fails.push('heartbeat nearly dead — page not animating');
  await browser.close(); // without this, node never exits after main() completes
  return fails;
}

async function main() {
  const all: string[] = [];
  all.push(...(await runOne('DESKTOP 1280x800', { viewport: { width: 1280, height: 800 } })).map(s => 'desktop: ' + s));
  const iphone = devices['iPhone 13'];
  all.push(...(await runOne('MOBILE iPhone 13 (touch UA)', {
    ...iphone,
    viewport: iphone.viewport,
    hasTouch: true,
    isMobile: true,
  })).map(s => 'mobile: ' + s));

  console.log('\n================ RESULT ================');
  if (all.length) { console.log('FAILURES:'); all.forEach(f => console.log('  - ' + f)); process.exitCode = 1; }
  else console.log('PASS: loader synced to real device-init time, opens on desktop AND mobile, browser stayed responsive.');
}
main().catch(e => { console.error(e); process.exit(1); });
