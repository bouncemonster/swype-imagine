# index.css

**171 lines | Global application styles + design-token layer**

## Purpose
Declares the Tailwind v4 theme tokens (semantic colors, micro text tiers), the full-screen dark
canvas base, mobile/responsive hardening (44 px tap targets, 12 px text floor, safe-area, dvh),
and a global reduced-motion opt-out. This is the single CSS entry point imported by `main.tsx`.

## Architecture (top to bottom)

```
@import "tailwindcss";        ← Tailwind v4 entry (includes preflight + utility engine)
@theme { ... }                ← DESIGN.md Gap 1: named semantic utilities
:root { --brand-amber* }     ← Inline-style/SVG aliases for boxShadow/stopColor
html, body, #root            ← Full-screen dark canvas base
canvas                       ← Display block, 100% fill
.safe-t/b/l/r, .safe-fit     ← env(safe-area-inset-*) utilities
input[type=range]            ← touch-action: pan-y (gesture isolation)
@media (pointer: coarse)     ← 44px targets + 12px text floor
@media (prefers-reduced-motion: reduce) ← Animation/transition kill switch
```

## @theme Token Layer (Gap 1 — added 2026-09-23)

Additive Tailwind v4 `@theme` block that creates named utility classes:

| Token | Utility | Value | Replaces |
|-------|---------|-------|----------|
| `--text-micro` | `text-micro` | 10px / 15px lh | `text-[10px]` (81 sites) |
| `--text-nano` | `text-nano` | 11px / 16px lh | `text-[11px]` (63 sites) |
| `--text-micro-sm` | `text-micro-sm` | 9px / 14px lh | `text-[9px]` (22 sites) |
| `--text-micro-xs` | `text-micro-xs` | 8px / 12px lh | `text-[8px]` (7 sites) |
| `--color-canvas` | `bg-canvas`, `text-canvas` | #030305 | Root background |
| `--color-surface-deep` | `bg-surface-deep` | #0a0a0a | Overlay backdrop |
| `--color-surface-loader` | `bg-surface-loader` | #06050b | CosmicLoader |
| `--color-surface-modal` | `bg-surface-modal` | #090812 | ProjectManifestModal |
| `--color-brand` | `text-brand`, `bg-brand` | → amber-500 | Primary accent |
| `--color-brand-bright` | `text-brand-bright` | → amber-400 | High-emphasis |
| `--color-brand-soft` | `text-brand-soft` | → amber-200 | Gradient highlights |
| `--color-brand-warm` | `text-brand-warm` | → amber-300 | Golden nodes |
| `--color-brand-deep` | `text-brand-deep` | → amber-600 | Gradient ends |

**Migration policy**: New code uses named utilities; existing arbitrary values remain (zero visual
delta). Opportunistic conversion when a file is otherwise touched.

## :root Brand Aliases (Gap 2 — added 2026-09-23)

```css
:root {
  --brand-amber: var(--color-amber-500);
  --brand-amber-bright: var(--color-amber-400);
  --brand-amber-soft: var(--color-amber-200);
  --brand-amber-warm: var(--color-amber-300);
  --brand-amber-deep: var(--color-amber-600);
}
```

Used in inline `style={{ boxShadow: '… color-mix(in srgb, var(--brand-amber) X%, transparent)' }}`
and SVG `style={{ stopColor: 'var(--brand-amber-soft)' }}` across CosmicLoader, ControlsPanel,
ProjectManifestModal, UserProfileModal. These are equivalent to the `@theme --color-brand*`
utilities above but accessed as raw CSS variables for inline-style contexts.

## Mobile / Responsive Hardening

| Rule | Purpose |
|------|---------|
| `#root { height: 100dvh }` | Dynamic viewport (mobile chrome doesn't hide content) |
| `body { overscroll-behavior: none }` | Prevent pull-to-refresh over canvas |
| `.safe-t/b/l/r` margin utilities | iPhone notch / home indicator clearance |
| `.safe-fit` max-height calc | Scrollable panels respect safe-area |
| `input[type=range] { touch-action: pan-y }` | Horizontal sliders don't capture vertical scroll |
| `@media (pointer: coarse)` 44px floor | WCAG 2.5.8 / Apple HIG touch targets |
| 12px text floor (coarse) | Legibility on touch; desktop keeps dense HUD |
| `input,select,textarea { font-size: 1rem }` | iOS won't auto-zoom below 16px |

## Reduced Motion (Gap 5 — added 2026-09-23)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

Global CSS opt-out covering all `animate-pulse`/`ping`/`spin` sites. Fractal morph/rotation (content)
remains governed by `App.tsx` `PREFERS_REDUCED_MOTION` module-level check.

## Critical Notes
1. **No `@layer`** needed for hardening rules: unlayered CSS beats Tailwind's `@layer utilities`
2. **Tailwind tree-shakes unused `@theme` variables** — they only emit to output CSS when a
   matching utility is actually used. The `@theme` declaration makes them available, not forced.
3. **`var()` inside `@theme`** is valid in Tailwind v4 — brand colors forward to the built-in
   `--color-amber-*` oklch palette.

## Dependencies
- **Tailwind CSS v4.3** (`@import "tailwindcss"` syntax, no separate config file needed)
- **DESIGN.md** — upstream source of token values and design decisions
