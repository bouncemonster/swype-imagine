# Design Debt Snapshot

Date: 2026-09-23 (post-v6.0.0). Scope: `app/src/**.tsx`, `app/src/index.css`, `app/src/palettes*.ts`.
Method: ripgrep for hardcoded hex/rgb colors and Tailwind arbitrary values, then bucket by risk.

This document records **what exists** and **why it is not fixed now**. Not an issue list; a
drift-awareness baseline. Every number below is reproducible by the commands at the bottom.

## Verdict up front

The design system is Tailwind v4 with the amber accent as the brand color, applied consistently
across 12 components. The debt is **concentrated in one place** — SVG gradients and CSS `box-shadow`
glows cannot reach Tailwind utility classes, so raw hex leaks in there. Elsewhere: only tiny
responsive typography (`text-[9px..11px]`) is below Tailwind's `text-xs=12px` step. Nothing here
blocks a release; nothing here has caused a visible bug. **Deferred by decision, not oversight.**

## Bucket 1 — Hardcoded brand hex (21 sites, 4 files)

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

## Bucket 2 — Tiny responsive typography (25 sites, 5 files)

`text-[9px]`, `text-[10px]`, `text-[11px]` are below Tailwind's `text-xs = 12px` step. Concentrated
in HUD overlays (`FractalInfoHUD.tsx`, `FractalScrollFeed.tsx`, `CosmicLoader.tsx`) and the atlas
badges. Reason: 12px was too big for the mobile 3D-HUD density; the app is designed to fit
information over a full-screen canvas.

**Why it stays:** extending Tailwind's scale to add `text-3xs = 9px / text-2xs = 10px / text-xs2 = 11px`
would be more consistent, but it's a 30-line `@theme` block in `index.css` and a project-wide
grep-replace. Low risk, low reward.

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
