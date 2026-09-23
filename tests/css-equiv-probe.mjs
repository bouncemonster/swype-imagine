/**
 * One-off zero-delta proof for the @theme micro-text migration (Plan A).
 * Records the multiset of computed (fontSize, lineHeight) pairs for every
 * element that directly holds text, across UI states. Class-name-independent,
 * so pre- and post-migration bundles compare directly. Mirrors the audit's
 * proven headless recipe (--use-gl=angle, fixed #type hash, 90s compile gate).
 *
 * Usage: node tests/css-equiv-probe.mjs <baseUrl> <outFile>
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';

const BASE = process.argv[2];
const OUT = process.argv[3];
if (!BASE || !OUT) {
  console.error('usage: node css-equiv-probe.mjs <baseUrl> <outFile>');
  process.exit(2);
}

const COLLECT = `
(() => {
  const pairs = [];
  for (const el of document.querySelectorAll('*')) {
    const hasText = Array.from(el.childNodes).some(n => n.nodeType === 3 && (n.textContent || '').trim());
    if (!hasText) continue;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    pairs.push(cs.fontSize + '|' + cs.lineHeight);
  }
  const counts = {};
  for (const p of pairs) counts[p] = (counts[p] || 0) + 1;
  return { total: pairs.length, counts };
})()`;

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--enable-gpu-rasterization', '--use-gl=angle'],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

const agg = { total: 0, counts: {} };
const perState = {};
async function snap(name) {
  const r = await page.evaluate(COLLECT);
  perState[name] = r.total;
  agg.total += r.total;
  for (const [k, v] of Object.entries(r.counts)) agg.counts[k] = (agg.counts[k] || 0) + v;
}

await page.goto(`${BASE}/?test=1#type=mandelbulb&renderStyle=solid`, { waitUntil: 'domcontentloaded', timeout: 45000 });

// Loader is on screen right after boot.
await page.waitForSelector('#cosmic-loader-overlay', { timeout: 5000 }).catch(() => {});
await snap('loader');

// Headless software-WebGL shader compile takes 10-25s (same gate as the audit).
await page.waitForFunction(() => {
  const loader = document.getElementById('cosmic-loader-overlay') || document.getElementById('gpu-pipeline-loading-overlay');
  return !loader && !!document.querySelector('#top-right-trigger');
}, null, { timeout: 90000 });
await page.waitForTimeout(1200);
await snap('main');

// Engineer panel (ControlsPanel, the densest file) via the audit's flow.
await page.click('#top-right-trigger', { timeout: 8000 });
await page.waitForTimeout(500);
await page.click('#open-user-profile-btn', { timeout: 8000 });
await page.waitForTimeout(600);
await snap('profile');
await page.click('#toggle-engineer-mode-in-profile', { timeout: 8000 });
await page.waitForFunction(() => !!document.querySelector('#tab-gpu-btn'), null, { timeout: 8000 });
await page.click('#close-user-profile-btn', { timeout: 4000 }).catch(() => {});
await page.waitForTimeout(700);
await snap('controls');

// Atlas modal (from the ControlsPanel header), close via Escape handler.
await page.click('#open-atlas-modal-btn', { timeout: 8000 });
await page.waitForTimeout(900);
await snap('atlas');
await page.click('#btn-atlas-modal-close', { timeout: 4000 });
await page.waitForTimeout(500);

// Explanation modal (math info), close via its X button.
await page.click('#show-math-info-btn', { timeout: 8000 });
await page.waitForTimeout(900);
await snap('explanation');
await page.click('#close-explanation-modal-btn', { timeout: 4000 }).catch(() => {});
await page.waitForTimeout(500);

// Project manifest modal, opened from the profile modal. Close the engineer
// panel first — it occupies the top-right corner where the HUD menu expands.
await page.click('#close-engineer-panel-btn', { timeout: 4000 }).catch(() => {});
await page.waitForTimeout(500);
await page.click('#top-right-trigger', { timeout: 4000 }).catch(() => {});
await page.waitForTimeout(400);
await page.click('#open-user-profile-btn', { timeout: 8000 });
await page.waitForTimeout(600);
await page.click('#open-manifest-from-profile-btn', { timeout: 8000 });
await page.waitForTimeout(900);
await snap('manifest');

await browser.close();
writeFileSync(OUT, JSON.stringify({ agg, perState }, null, 1));
console.log(`probe done: total=${agg.total} distinctPairs=${Object.keys(agg.counts).length} states=${JSON.stringify(perState)} -> ${OUT}`);
