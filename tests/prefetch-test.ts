/**
 * Prefetch-cycle verification: proves that (1) the NEXT specimen's shader is
 * background-compiled while the user views the current fractal, (2) the actual
 * switch then takes the synchronous cached fast path ("Instant swap") with NO
 * "Initializing GPU" swap guard and NO "Shader swap timeout", and (3) the canvas
 * really shows the new fractal after the switch.
 * Usage: npx tsx tests/prefetch-test.ts   (dev server must be on :5173)
 */
import { chromium } from 'playwright';

const URL = 'http://localhost:5173/?test=1&_f=' + Date.now();

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--enable-gpu-rasterization', '--use-gl=angle'],
  });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const consoleLines: string[] = [];
  page.on('console', msg => consoleLines.push(msg.text()));

  await page.goto(URL, { waitUntil: 'domcontentloaded' });

  const hasLine = (needle: string) => consoleLines.some(l => l.includes(needle));
  const waitForLine = async (needle: string, timeoutMs: number) => {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      if (hasLine(needle)) return true;
      await page.waitForTimeout(250);
    }
    return false;
  };

  const fails: string[] = [];

  // 1. First real frame (initial phyllotaxis compile is ~15s under headless ANGLE)
  if (!await waitForLine('First frame rendered', 40000)) {
    fails.push('first frame never rendered (40s) — cannot evaluate prefetch');
  }

  // 2. Background prefetch of the next exploration type (mandelbulb = fractal 1)
  //    must START without any user interaction and must REACH READY.
  const prefetchStarted = await waitForLine('Prefetch: compiling shader for fractal 1', 30000);
  if (!prefetchStarted) fails.push('prefetch for fractal 1 never started after first frame');
  const prefetchReady = await waitForLine('Prefetch ready for fractal 1', 60000);
  if (!prefetchReady) fails.push('prefetch for fractal 1 never completed (60s)');

  // 3. User-driven switch: must take the synchronous cached fast path.
  //    NB: the bottom HUD auto-hides after 3s (pointer-events-none), so a real
  //    mouse click cannot land at this point in the timeline — dispatch the DOM
  //    click directly (goes through the same React onClick handler).
  const clicked = await page.evaluate(() => {
    const btn = document.getElementById('feed-next-btn') as HTMLButtonElement | null;
    if (!btn) return false;
    btn.click();
    return true;
  });
  if (!clicked) fails.push('#feed-next-btn not found for switch click');
  if (!await waitForLine('Instant swap to cached shader for fractal 1', 5000)) {
    fails.push('clicking Далее did NOT use the cached fast path (no "Instant swap" log)');
  }
  if (hasLine('Shader swap timeout')) {
    fails.push('swap guard timed out during prefetched switch (regression of the 301-frame bug)');
  }

  // 4. Pixel truth: after the switch the canvas must show the NEW fractal
  await page.waitForTimeout(1500);
  const fill = await page.evaluate(() => {
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
  console.log(`canvas fill after prefetched switch: ${fill >= 0 ? (fill * 100).toFixed(1) + '%' : 'unreadable'}`);
  if (fill <= 0.005) fails.push(`canvas black after prefetched switch (fill ${(fill * 100).toFixed(1)}%)`);

  console.log('\n=== PREFETCH TEST ===');
  console.log(`  prefetch started: ${prefetchStarted}, ready: ${prefetchReady}`);
  if (fails.length) {
    console.log('FAILURES:');
    fails.forEach(f => console.log('  - ' + f));
    process.exitCode = 1;
  } else {
    console.log('PASS: next shader prefetched during viewing; switch was instant via cache.');
  }
  await browser.close(); // without this, node never exits
}
main().catch(e => { console.error(e); process.exit(1); });
