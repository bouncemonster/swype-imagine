# Design Debt Snapshot

Date: 2026-09-23 (post-v6.0.0). Scope: `app/src/**.tsx`, `app/src/index.css`, `app/src/palettes*.ts`.
Method: ripgrep for hardcoded hex/rgb colors and Tailwind arbitrary values, then bucket by risk.

This document records **what exists** and **why it is not fixed now**. Not an issue list; a
drift-awareness baseline. Every number below is reproducible by the commands at the bottom.

## Verdict up front

The design system is Tailwind v4 with the amber accent as the brand color, applied consistently
across 12 components. The debt was **concentrated in two places** — SVG gradients / CSS `box-shadow`
glows (Bucket 1, resolved 2026-09-23) and sub-12px typography arbitrary values (Bucket 2, resolved
2026-09-24). Both buckets are now closed: `src/**` has zero hardcoded brand hexes and zero
`text-[8-11px]` / `bg-[#hex]` sites. A design-qa pipeline sweep the same day tokenized the last
five *static* inline `boxShadow` glows into `@theme --shadow-glow-*` utilities, moved two
`index.css` base literals to `var()` token refs, and replaced two redundant inline `touchAction`
styles with `touch-none`/`overscroll-none` utilities (see Bucket 1 follow-up). What remains
(Buckets 3–4 + dynamic inline styles) are legitimate Tailwind idioms or runtime-value styles.
**This file is a historical baseline, kept so the resolved patterns cannot silently return.**

## Bucket 1 — Hardcoded brand hex (21 sites, 4 files) — **RESOLVED 2026-09-23**

<details>
<summary>Original text (kept for context)</summary>

Amber hex values (`#f59e0b` = amber-500, `#fef08a` = amber-200, `#fbbf24` = amber-400,
`#b45309` = amber-700, `#fde68a` = amber-300, `#fef3c7` = amber-100) appear literally in:

| File | Sites | Where |
|------|-------|-------|
| `components/CosmicLoader.tsx` | 8 | SVG `<stop stopColor>`, `stroke`, `fill`, one `box-shadow: 0 0 24px #f59e0b`, one `radial-gradient` chain |
| `components/ProjectManifestModal.tsx` | 3 | SVG star ring (`stroke="#fbbf24"`, `fill="#fef08a"`) + background `bg-[#090812]` + glow rgba |
| `components/ControlsPanel.tsx` | 5 | `box-shadow: 0 0 {N}px rgba(245,158,11,0.18)` active-state glow on 3 toggles + `rgb(${pal.primary...})` swatch preview |
| `components/UserProfileModal.tsx` | 1 | Active-state `shadow-[0_0_15px_rgba(245,158,11,0.25)]` on the submit button |

**Why it stays:** these are SVG attributes and `box-shadow` colors — Tailwind utilities don't
cover them without a `shadow-[…]` arbitrary value or a plugin. Converting to CSS variables
(`var(--brand-500)`) would be clean but touches 4 files and re-regression-checks each glow.

**Correction (2026-09-23, design-system-capture):** the original "zero user-visible benefit"
claim is falsified by measurement. Tailwind v4 resolves `amber-500` to `oklch(76.9% 0.188 70.08)`
→ rendered `#fe9a00`, while the literals still use the v3 hex `#f59e0b` (Δ 11 on green, Δ 11 on
blue) and `#fbbf24` vs v4 `amber-400` = `#ffb900` (Δ 36 on blue). The glow sits next to utility-
colored buttons, so the hue mismatch is visible side-by-side. Neutrals have Δ 0 (identical).
Tailwind v4 exposes tokens as CSS variables, so SVG `stopColor` and `box-shadow` **can** use
`var(--color-amber-500)` directly — no plugin required. See `DESIGN.md` Gap 2.

**Fix cost (updated):** 30 min — replace 21 hex literals with `var(--color-amber-*)` in
`CosmicLoader.tsx`, `ControlsPanel.tsx`, `ProjectManifestModal.tsx`, `UserProfileModal.tsx`;
rebuild, visual-diff.

</details>

**Resolution (later same day, 2026-09-23)** — all 14 amber hex literals and rgba-in-shadow
strings (excluding `bg-[#090812]` which is a distinct surface, not amber) migrated:
- `src/index.css` gained `--brand-amber` / `--brand-amber-bright` / `--brand-amber-soft` /
  `--brand-amber-warm` / `--brand-amber-deep` aliases forwarding to `--color-amber-{500,400,200,300,600}`.
- SVG gradients use `style={{ stopColor: 'var(--brand-amber*)' }}`; SVG `<path stroke>` and
  `<circle fill>` inherit `currentColor` from the parent `text-amber-*` utility.
- Every `shadow-[…rgba(245,158,11,…)]` arbitrary utility was replaced by an inline
  `boxShadow: '0 0 … color-mix(in srgb, var(--brand-amber) …%, transparent)'` style, because
  Tailwind's arbitrary-value parser doesn't handle `color-mix()`'s inner spaces cleanly.
- Verified via `grep`: 0 remaining hard-coded amber hexes in `src/components/*.tsx`.
- Tests: `tsc` clean, mobile-design-audit PASS, `npm run test` 1875 passed.

**Follow-up (2026-09-24, design-qa sweep)** — the inline-`boxShadow` layer was itself a debt
finding. The five *static* ones are now `@theme` utilities: `--shadow-glow-{dot,node,action,cta,modal}`
in `src/index.css`, replacing `style={{ boxShadow: … }}` at `ControlsPanel.tsx:264`,
`CosmicLoader.tsx:152`, `ProjectManifestModal.tsx:42/167`, `UserProfileModal.tsx:293`.
Zero visual delta proven: computed `box-shadow` matches (v4 adds inert zero-shadow slots),
computed-style probe multiset still IDENTICAL vs pre-migration baseline, and the pipeline's
`hard-coded-color` count fell 3 → 1 (remainder: `var()`-based SVG `stopColor` styles, which are
structural). The surviving ~15 inline styles all carry runtime values (progress %, palette rgb,
bar heights, particle transforms) or are SVG attributes — accepted, not suppressible by tokens.

## Bucket 2 — Tiny responsive typography (corrected: 173 sites, 10 files) — **RESOLVED 2026-09-24**

<details>
<summary>Original text (kept for context)</summary>

`text-[9px]`, `text-[10px]`, `text-[11px]` are below Tailwind's `text-xs = 12px` step. Concentrated
in HUD overlays (`FractalInfoHUD.tsx`, `FractalScrollFeed.tsx`, `CosmicLoader.tsx`) and the atlas
badges. Reason: 12px was too big for the mobile 3D-HUD density; the app is designed to fit
information over a full-screen canvas.

**Why it stays:** extending Tailwind's scale to add `text-3xs = 9px / text-2xs = 10px / text-xs2 = 11px`
would be more consistent, but it's a 30-line `@theme` block in `index.css` and a project-wide
grep-replace. Low risk, low reward.

</details>

**Resolution (2026-09-24)** — the "25 sites" tally was an undercount; the design-system-capture
tally found **173** arbitrary `text-[8-11px]` sites across 10 components. All migrated to the
`@theme` tiers declared in Gap 1 of `DESIGN.md`: `text-micro` (10px), `text-nano` (11px),
`text-micro-sm` (9px), `text-micro-xs` (8px). The two remaining arbitrary surfaces
(`bg-[#06050b]`, `bg-[#090812]`) migrated to `bg-surface-loader` / `bg-surface-modal` in the
same pass — `src/**` now contains **0** `text-[8-11px]` and **0** `bg-[#hex]` sites.
Zero visual delta proven: the computed (fontSize, lineHeight) multiset over 1,225 text nodes
across 7 UI states (loader / HUD / profile / controls / atlas / explanation / manifest) is
byte-identical between the pre- and post-migration bundles (`tests/results/equiv-*.json`,
reproducible with `node tests/css-equiv-probe.mjs <url> <out.json>`). The theme tiers deliberately
carry **no** `--text-*--line-height` partners — `text-[10px]` emits font-size only, and an
lh-carrying token would have shifted every migrated line. `test:mobile` PASS confirms the
coarse-pointer 12px floor also covers the new class names.

## Bucket 3 — Layout widths with `calc()` (3 sites)

`w-[calc(100vw-1.5rem)]`, `w-[calc(100vw-1rem)]`, `max-h-[calc(100vh-1.5rem)]`. These are
responsive-container idioms; Tailwind doesn't have a native viewport-minus-padding utility.
No debt.

## Bucket 4 — Component-scoped magic numbers

`min-w-[280px]` (DebugOverlay), `sm:w-[410px]` (ControlsPanel), `w-[32px]` favicon inside a
data-URI SVG. These are single-occurrence layout values, not tokens; converting them to
theme entries would just move them into another file with the same readability.

## Reproduce the numbers

```powershell
cd app
# Bucket 1: hardcoded brand hexes (uses `\b` for word boundary; results ~21)
Select-String -Path src/**/*.tsx -Pattern '#[0-9a-fA-F]{3,6}\b|rgba\(|rgb\(' -CaseSensitive
# Bucket 2: Tailwind arbitrary values (results ~25 in the tsx layer)
Select-String -Path src/**/*.tsx -Pattern '\[[a-z]+-[0-9]+px\]|\[[0-9]+px|\[#'
```

## What this file is NOT

- A to-do list. If a future release wants to re-brand or lift the theme, this is the inventory
  to work from; otherwise it stays informational.
- A signal that a11y is broken — a11y was measured separately in `VISUAL_CONTROL_REPORT.md`
  (repo root) and axe reports 0 violations post-v6.0.0.
- Covering `palettes.ts` / `palettesProcedural.ts`. Those ARE the design tokens; they intentionally
  enumerate hex values as data.

## See also

- `DESIGN.md` (repo root) — the full design-system contract captured from this audit plus live
  DOM measurements; lists all 6 known gaps with recommendations.
