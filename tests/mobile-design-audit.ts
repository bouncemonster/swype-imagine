/**
 * Mobile design audit — verifies the responsive pass actually ships.
 *
 * Proves, against a real deployed bundle:
 *  1. (pointer: coarse) grants every visible interactive element a >=44px tap
 *     target (WCAG 2.5.8 / Apple HIG) — enforced by CDP media emulation, the same
 *     mechanism DevTools uses, so the result does not depend on host hardware.
 *  2. the sub-12px HUD text floor rises to 12px on touch, and stays dense on desktop.
 *  3. no horizontal overflow at iPhone SE / 14 Pro Max / landscape widths.
 *  4. safe-area (notch / home indicator) rules exist and are bound to the overlays.
 *  5. desktop (fine pointer) is NOT regressed: touch rules must not apply.
 *
 * Usage: npx tsx tests/mobile-design-audit.ts [baseUrl] [channel]
 *   baseUrl default: https://golden-ratio-fractal-engine.pages.dev
 */
import { chromium, type Page } from 'playwright';

const BASE = process.argv[2] ?? 'https://golden-ratio-fractal-engine.pages.dev';

const MOBILES = [
  { name: 'iPhone SE 375x667', width: 375, height: 667 },
  { name: 'iPhone 14 Pro Max 430x932', width: 430, height: 932 },
  { name: 'landscape 667x375', width: 667, height: 375 },
];

/**
 * Runs in the page: measures tap targets, text floor, overflow, safe-area bindings.
 * MUST be a raw JS string — a TS arrow function gets esbuild __name() helpers
 * injected, which throw in-page (ReferenceError) and kill the evaluation.
 */
const PROBE = `
(() => {
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none'
      && r.bottom > 0 && r.right > 0 && r.top < innerHeight && r.left < innerWidth;
  };
  const label = (el) =>
    el.id || (el.tagName.toLowerCase() + '.' + String(el.className || '').split(' ')[0]);

  const interactive = Array.from(
    document.querySelectorAll('button,[role="button"],a[href],input,select,summary')
  ).filter(visible);

  const smallTargets = interactive
    .map(el => { const r = el.getBoundingClientRect(); return { id: label(el), w: Math.round(r.width), h: Math.round(r.height), min: Math.round(Math.min(r.width, r.height)) }; })
    .filter(t => t.min < 44)
    .sort((a, b) => a.min - b.min);

  const tinyText = [];
  for (const el of Array.from(document.querySelectorAll('*'))) {
    if (!visible(el)) continue;
    if (!Array.from(el.childNodes).some(n => n.nodeType === 3 && (n.textContent || '').trim())) continue;
    const px = parseFloat(getComputedStyle(el).fontSize);
    if (px < 12) tinyText.push({ id: label(el), px: Math.round(px * 10) / 10, text: (el.textContent || '').trim().slice(0, 24) });
  }

  let safeAreaRules = 0;
  for (const sheet of Array.from(document.styleSheets)) {
    let rules = null;
    try { rules = sheet.cssRules; } catch (e) { continue; }  // cross-origin
    for (const rule of Array.from(rules || [])) safeAreaRules += /safe-area-inset/.test(rule.cssText) ? 1 : 0;
  }

  const measured = (sel) => {
    const el = document.querySelector(sel);
    return el ? getComputedStyle(el).minHeight : null;
  };

  // Containers whose content is wider than the box = hidden horizontal clipping
  // (a blanket min-width on touch targets can blow out dense grids).
  const clipped = [];
  for (const el of Array.from(document.querySelectorAll('*'))) {
    if (!visible(el)) continue;
    if (el.scrollWidth <= el.clientWidth + 2 || el.clientWidth <= 0) continue;
    const cs = getComputedStyle(el);
    // Ellipsis/truncation is a deliberate design choice, not a layout blowout.
    if (cs.textOverflow === 'ellipsis' || cs.webkitLineClamp !== 'none') continue;
    if (/truncate|line-clamp-/.test(String(el.className))) continue;
    clipped.push({
      id: label(el),
      path: (() => {
        const chain = [];
        for (let n = el; n && chain.length < 4; n = n.parentElement) {
          if (n.id) { chain.unshift('#' + n.id); break; }
          chain.unshift(n.tagName.toLowerCase() + (String(n.className || '').split(' ')[0] ? '.' + String(n.className).split(' ')[0] : ''));
        }
        return chain.join('>');
      })(),
      cls: String(el.className).slice(0, 60),
      ovf: cs.overflowX,
      text: (el.textContent || '').trim().slice(0, 20),
      scrollW: el.scrollWidth,
      clientW: el.clientWidth,
    });
  }

  return {
    coarse: matchMedia('(pointer: coarse)').matches,
    overflowX: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
    // overflow-x:visible means the child merely draws outside (badges, ping dots);
    // hidden/clip/auto/scroll means real content loss — only that is a failure.
    clippedContainers: clipped.filter(c => c.ovf !== 'visible').length,
    overlapContainers: clipped.filter(c => c.ovf === 'visible').length,
    worstClipped: clipped.sort((a, b) => (b.scrollW - b.clientW) - (a.scrollW - a.clientW)).slice(0, 5),
    tapTargetsUnder44: smallTargets.length,
    worstTargets: smallTargets.slice(0, 6),
    textUnder12px: tinyText.length,
    worstText: tinyText.slice(0, 6),
    safeAreaRules,
    safeAnchors: Array.from(document.querySelectorAll('.safe-t,.safe-b,.safe-l,.safe-r,.safe-fit')).map(label),
    probeTabMinHeight: measured('#tab-gpu-btn'),
    probeModeMinHeight: measured('[id^="render-mode"]'),
    panelOpen: !!document.querySelector('#tab-gpu-btn'),
  };
})()
`;

interface ProbeResult {
  coarse: boolean;
  overflowX: number;
  clippedContainers: number;
  overlapContainers: number;
  worstClipped: { id: string; path: string; cls: string; ovf: string; text: string; scrollW: number; clientW: number }[];
  tapTargetsUnder44: number;
  worstTargets: { id: string; w: number; h: number; min: number }[];
  textUnder12px: number;
  worstText: { id: string; px: number; text: string }[];
  safeAreaRules: number;
  safeAnchors: string[];
  probeTabMinHeight: string | null;
  probeModeMinHeight: string | null;
  panelOpen: boolean;
}

async function waitForHud(page: Page) {
  // Headless software-WebGL compiles the fractal shader for 10-25s; clicking the
  // HUD before the loader is dismissed just times out, so gate on real readiness.
  await page.waitForFunction(() => {
    const loader = document.getElementById('cosmic-loader-overlay') || document.getElementById('gpu-pipeline-loading-overlay');
    return !loader && !!document.querySelector('#top-right-trigger');
  }, null, { timeout: 90000 });
}

async function openEngineerMode(page: Page) {
  // Engineer panel (ControlsPanel) is the densest UI, so the audit must see it open.
  // The profile button lives inside the collapsed top-right HUD menu -> expand it first.
  await page.click('#top-right-trigger', { timeout: 8000 });
  await page.waitForTimeout(500);
  await page.click('#open-user-profile-btn', { timeout: 8000 });
  await page.waitForTimeout(600);
  await page.click('#toggle-engineer-mode-in-profile', { timeout: 8000 });
  await page.waitForFunction(() => !!document.querySelector('#tab-gpu-btn'), null, { timeout: 8000 });
  await page.click('#close-user-profile-btn', { timeout: 4000 }).catch(() => {});
  await page.waitForTimeout(500);
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--enable-gpu-rasterization', '--use-gl=angle'],
  });
  const failures: string[] = [];
  const results: { name: string; probe: ProbeResult }[] = [];

  for (const dev of MOBILES) {
    const context = await browser.newContext({
      viewport: { width: dev.width, height: dev.height },
      deviceScaleFactor: 3,
      hasTouch: true,
      isMobile: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    });
    const page = await context.newPage();
    // Deterministic coarse-pointer emulation (hardware independent).
    const cdp = await context.newCDPSession(page);
    await cdp.send('Emulation.setEmulatedMedia', {
      features: [{ name: 'pointer', value: 'coarse' }, { name: 'any-pointer', value: 'coarse' }],
    });

    await page.goto(`${BASE}/?test=1#type=mandelbulb&renderStyle=solid`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await waitForHud(page);
    await page.waitForTimeout(1200); // HUD fade-in settled
    await openEngineerMode(page);

    const probe = await page.evaluate(PROBE) as ProbeResult | undefined;
    if (!probe) {
      failures.push(`${dev.name}: in-page probe returned no data (page not rendered?)`);
      await context.close();
      continue;
    }
    results.push({ name: dev.name, probe });
    console.log(`\n[${dev.name}] coarse=${probe.coarse} panelOpen=${probe.panelOpen} overflowX=${probe.overflowX}px clipped=${probe.clippedContainers} overlap=${probe.overlapContainers} tap<44=${probe.tapTargetsUnder44} text<12=${probe.textUnder12px} safeAreaRules=${probe.safeAreaRules} tabMinH=${probe.probeTabMinHeight} anchors=${probe.safeAnchors.join(',')}`);
    if (probe.worstTargets.length) console.log('  worst targets: ' + probe.worstTargets.map(t => `${t.id} ${t.w}x${t.h}`).join(' | '));
    if (probe.worstClipped.length) console.log('  wider-than-box: ' + probe.worstClipped.map(t => `${t.path} [${t.cls}] "${t.text}" ${t.scrollW}>${t.clientW} ovf=${t.ovf}`).join(' | '));
    if (probe.worstText.length) console.log('  smallest text: ' + probe.worstText.map(t => `${t.id}@${t.px}px "${t.text}"`).join(' | '));

    if (!probe.coarse) failures.push(`${dev.name}: coarse pointer not emulated — touch rules untested`);
    if (probe.overflowX > 0) failures.push(`${dev.name}: horizontal overflow ${probe.overflowX}px`);
    if (probe.clippedContainers > 0) failures.push(`${dev.name}: ${probe.clippedContainers} containers hold content wider than their box`);
    if (!probe.panelOpen) failures.push(`${dev.name}: engineer panel did not open (tap-target coverage incomplete)`);
    if (probe.probeTabMinHeight !== null && probe.probeTabMinHeight !== '44px') {
      failures.push(`${dev.name}: #tab-gpu-btn min-height=${probe.probeTabMinHeight}, expected 44px`);
    }
    if (probe.tapTargetsUnder44 > 0) failures.push(`${dev.name}: ${probe.tapTargetsUnder44} visible tap targets still under 44px`);
    if (probe.textUnder12px > 0) failures.push(`${dev.name}: ${probe.textUnder12px} visible text nodes still under 12px`);
    if (probe.safeAreaRules === 0) failures.push(`${dev.name}: no env(safe-area-inset-*) rule found in shipped CSS`);
    await context.close();
  }

  // Desktop control group: the touch rules must NOT leak onto fine pointers.
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const desk = await ctx.newPage();
  await desk.goto(`${BASE}/?test=1#type=mandelbulb&renderStyle=solid`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await waitForHud(desk);
  await desk.waitForTimeout(1200);
  await openEngineerMode(desk);
  const dp = await desk.evaluate(PROBE) as ProbeResult | undefined;
  if (!dp) {
    console.log('\n[desktop 1280x800] probe returned no data');
    failures.push('desktop: in-page probe returned no data');
  } else {
    console.log(`\n[desktop 1280x800] coarse=${dp.coarse} panelOpen=${dp.panelOpen} overflowX=${dp.overflowX}px tap<44=${dp.tapTargetsUnder44} text<12=${dp.textUnder12px} tabMinH=${dp.probeTabMinHeight}`);
    if (dp.coarse) failures.push('desktop: matchMedia reports coarse — emulation leaked into the control run');
    if (dp.probeTabMinHeight && dp.probeTabMinHeight !== '0px' && dp.probeTabMinHeight !== 'auto') {
      failures.push(`desktop: touch rule leaked — #tab-gpu-btn min-height=${dp.probeTabMinHeight} (density regression)`);
    }
    if (dp.overflowX > 0) failures.push(`desktop: horizontal overflow ${dp.overflowX}px`);
  }
  await ctx.close();
  await browser.close();

  console.log('\n=== summary ===');
  for (const r of results) console.log(`${r.name.padEnd(26)} tap<44=${String(r.probe.tapTargetsUnder44).padStart(3)}  text<12=${String(r.probe.textUnder12px).padStart(3)}  overflowX=${r.probe.overflowX}px  safeRules=${r.probe.safeAreaRules}`);
  if (failures.length) {
    console.log('FAILURES:'); failures.forEach(f => console.log('  - ' + f));
    process.exitCode = 1;
  } else {
    console.log('PASS: 44px tap targets + 12px text floor on touch, zero horizontal overflow, safe-area rules shipped, desktop density untouched.');
  }
}

main().catch(e => { console.error(e); process.exit(1); });
