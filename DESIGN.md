---
version: alpha
name: Golden-Ratio-Fractal-Engine
description: Dark instrument-panel UI for a full-screen WebGPU/WebGL2 fractal raymarcher. Amber accent on near-black, translucent blurred HUD overlays floating over a live canvas; dense numeric micro-typography on desktop, 44px targets and a 12px text floor on touch.
colors:
  canvas: "#030305"
  surface: "#171717"
  surface-deep: "#0a0a0a"
  surface-overlay: "rgba(10, 10, 10, 0.85)"
  surface-idle: "rgba(23, 23, 23, 0.6)"
  hairline: "#262626"
  hairline-strong: "#404040"
  hairline-brand: "#fe9a00"
  ink: "#f5f5f5"
  ink-secondary: "#e5e5e5"
  muted-ink: "#a1a1a1"
  faint-ink: "#737373"
  primary: "#fe9a00"
  primary-bright: "#ffb900"
  primary-soft: "#ffd230"
  primary-deep: "#e17100"
  on-primary: "#0a0a0a"
  success: "#00d492"
  favorite: "#ff637e"
typography:
  display-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: 30px
    fontWeight: 300
    lineHeight: 36px
    letterSpacing: 0px
  heading-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  caption-strong:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.025em
  micro:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 15px
    letterSpacing: 0px
  micro-strong:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 15px
    letterSpacing: 0.025em
  numeric-caption:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 15px
    letterSpacing: 0px
  button-md:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  section: 32px
components:
  hud-trigger-pill:
    backgroundColor: "rgba(10, 10, 10, 0.5)"
    textColor: "{colors.faint-ink}"
    rounded: "{rounded.full}"
    size: 34px
  hud-trigger-pill-active:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.primary-soft}"
    rounded: "{rounded.full}"
    size: 34px
  hud-icon-button:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.muted-ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "6px 10px"
    height: 32px
  hud-icon-button-active:
    backgroundColor: "rgba(254, 154, 0, 0.2)"
    textColor: "{colors.primary-soft}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "6px 10px"
    height: 32px
  cta-gradient:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "6px 16px"
    height: 32px
  floating-panel:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xl}"
    padding: "12px"
  feed-ribbon:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.xl}"
    padding: "8px 12px"
  chip-score:
    backgroundColor: "rgba(254, 154, 0, 0.2)"
    textColor: "{colors.primary-soft}"
    typography: "{typography.numeric-caption}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  tab-button:
    backgroundColor: "{colors.surface-idle}"
    textColor: "{colors.muted-ink}"
    typography: "{typography.micro}"
    rounded: "{rounded.md}"
    padding: "6px 8px"
    height: 26px
  tab-button-selected:
    backgroundColor: "rgba(254, 154, 0, 0.2)"
    textColor: "{colors.primary-soft}"
    typography: "{typography.micro-strong}"
    rounded: "{rounded.md}"
    padding: "6px 8px"
    height: 26px
  modal-shell:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "24px"
  metric-row:
    backgroundColor: "rgba(10, 10, 10, 0.6)"
    textColor: "{colors.muted-ink}"
    typography: "{typography.numeric-caption}"
    rounded: "{rounded.md}"
    padding: "6px 8px"
  slider-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.micro}"
    rounded: "{rounded.md}"
    padding: "8px"
  switch-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    size: 16px
---

# Golden Ratio Fractal Engine — Design System

Captured 2026-09-23 by `design-system-capture` from code + the shipped bundle, not from a
design file. This is the first version of a contract that did not exist before; read
`Known Gaps` before treating anything below as a decision rather than an observation.

## Overview

The product is a full-screen canvas with **no page scroll**: the fractal owns the viewport and
every UI element is a floating overlay above it. The visual language is an instrument panel —
near-black translucent glass, hairline borders, one amber accent, monospace numerics.

Three facts define the whole system:

1. There is **no theme layer**. `src/index.css` is 99 lines with `@import "tailwindcss"` and zero
   `@theme` blocks / zero CSS custom properties. The effective token set is whatever
   Tailwind v4.1.14 ships (`node_modules/tailwindcss/theme.css`) plus two literals.
2. There is **no webfont**. 211 of 227 visible elements resolve to the platform system stack;
   16 resolve to `ui-monospace`. Nothing in `index.html` loads a font.
3. Density wins over rhythm. The HUD has to survive on top of a 3D render, which produced a
   micro-typography ladder (8–11 px) that is *below* Tailwind's smallest documented step.

## Colors

Amber is the brand. Values below are the **rendered sRGB** results of the installed Tailwind v4
oklch tokens, measured by painting each token and reading the pixel back from the live build
(`amber-500` = `oklch(76.9% 0.188 70.08)` → `#fe9a00`).

| Role | Token candidate | Value | Evidence (usage count in `src/**/*.tsx`) |
|---|---|---|---|
| Page background | `{colors.canvas}` | `#030305` | `html,body,#root` in `index.css`; off-scale literal |
| Overlay fill | `{colors.surface-deep}` | `#0a0a0a` /85 % | `bg-neutral-950` 30 sites, all overlays |
| Panel fill | `{colors.surface}` | `#171717` /60 % | `bg-neutral-900` 74 sites |
| Border | `{colors.hairline}` | `#262626` /50–90 % | `border-neutral-800` **104 sites** — the most-used design value in the app |
| Primary text | `{colors.ink}` | `#f5f5f5` | `index.css` |
| Secondary text | `{colors.ink-secondary}` | `#e5e5e5` | `text-neutral-200` 56 sites |
| Muted text | `{colors.muted-ink}` | `#a1a1a1` | `text-neutral-400` 95 sites |
| Idle/disabled text | `{colors.faint-ink}` | `#737373` | `text-neutral-500` 23 sites |
| Brand / active | `{colors.primary}` | `#fe9a00` | `border-amber-500` 46, `bg-amber-500` 32 |
| Active text | `{colors.primary-soft}` | `#ffd230` | `text-amber-300` 68 sites |
| Icon accent | `{colors.primary-bright}` | `#ffb900` | `text-amber-400` 45 sites |
| CTA gradient end | `{colors.primary-deep}` | `#e17100` | `to-amber-600` on `#feed-next-btn` |
| Text on CTA | `{colors.on-primary}` | `#0a0a0a` | live probe: `#feed-next-btn` color `oklch(0.145 0 none)` |
| Success | `{colors.success}` | `#00d492` | `emerald-*` 28 sites (share-copied, healthy state) |
| Favorite | `{colors.favorite}` | `#ff637e` | `rose-*` 12 sites (heart toggle) |

State semantics, repeated across 12 components (this is the closest thing to a primitive):

- **idle** = `{colors.surface-deep}` fill + `{colors.hairline}` border + `{colors.muted-ink}` text
- **active/selected** = `rgba({colors.primary}, 0.2)` fill + `rgba({colors.primary}, 0.5)` border + `{colors.primary-soft}` text
- **primary action** = `{colors.primary}` → `{colors.primary-deep}` gradient with `{colors.on-primary}` text
- **transient confirm** = `emerald`, **affinity** = `rose`

## Typography

System-font only — do not introduce a webfont for a handful of labels; it costs a network
round-trip on a page whose first paint is already shader-bound.

| Level | Size / line-height | Weight | Where |
|---|---|---|---|
| `{typography.display-lg}` | 30 / 36 | 300 | Loader headline |
| `{typography.heading-md}` | 16 / 24 | 600 | Modal titles |
| `{typography.body-sm}` | 14 / 20 | 400 | Modal body, panel labels |
| `{typography.caption}` | 12 / 16 | 400 | The desktop floor; `text-xs` 83 sites |
| `{typography.micro}` | 10 / 15 | 400 | **The single most common small size**: `text-[10px]` 81 + `text-[11px]` 63 + `text-[9px]` 22 + `text-[8px]` 7 = 173 sites |
| `{typography.numeric-caption}` | 10 / 15 mono | 400 | `{colors.*}` readouts, φ value, FPS, resonance % — 89 `font-mono` sites |

Weights in the live DOM: 400 (191) / 600 (26) / 500 (7) / 700 (2) / 300 (1). `font-light` (300)
is reserved for the loader. Letter-spacing is `0px` except `tracking-wide` (14) /
`tracking-wider` (11) on uppercase labels and `tracking-tight` (4) on display sizes.

## Layout

- The viewport **is** the layout. `#root { height: 100dvh }`, `overflow: hidden`, no document flow.
- Spacing follows the Tailwind 4 px grid; the observed rhythm is
  `{spacing.xs}` 6 (33 sites) → `{spacing.sm}` 8 (52) → `{spacing.md}` 12 (29) → `{spacing.lg}` 16 (28) → `{spacing.xxl}` 24 (10).
- Overlay anchors: `top-3 right-3` → `sm:top-4 sm:right-4` for the HUD menu, `bottom-3` →
  `sm:bottom-5` for the feed ribbon, `left-3`/`left-4` for the side panels.
- Safe-area insets are **additive margins**, never replacements, so the anchor spacing above
  survives: `.safe-t / .safe-b / .safe-l / .safe-r`, plus `.safe-fit` which subtracts both
  insets from a scrollable panel's `max-height`.
- Density control: `ControlsPanel` is `sm:w-[410px]` with `max-height: calc(100dvh - …)` and
  `overscroll-behavior: contain`.

## Elevation & Depth

**There is no shadow ramp. Blur + translucency are the only depth tools.**

- `backdrop-blur-md` = `blur(12px)` (13 sites) on every floating surface; live probe confirms the
  feed panel and HUD trigger both compute `blur(12px)`.
- Fill alpha encodes hierarchy over the canvas: `/0.5` (idle trigger) → `/0.75` → `/0.85` (panel) →
  `/0.9`.
- Stacking ladder observed in the built DOM: `z-10` → `z-20` (feed, telemetry) → `z-30` (HUD menu)
  → `z-50` (modals, loader). `z-40` appears once and should not grow.
- `shadow-*` utilities exist (24 `shadow`, 8 `shadow-2xl`) but compute to transparent ambient
  shadows on dark fills. They are decoration, not depth: **do not reach for a shadow to make
  something float — raise its fill opacity and add `backdrop-blur-md`.**

## Shapes

| Token | Value | Usage | Reads as |
|---|---|---|---|
| `{rounded.none}` | 0px | canvas | the render surface, never rounded |
| `{rounded.sm}` | 4px (`rounded`) | 16 | chips, tiny badges |
| `{rounded.md}` | 8px (`rounded-lg`) | 59 | inputs, tabs, inner rows |
| `{rounded.lg}` | 12px (`rounded-xl`) | **76** | the default control radius (buttons, ribbon cells) |
| `{rounded.xl}` | 16px (`rounded-2xl`) | 15 | panels, modals, the feed container |
| `{rounded.full}` | 9999px | 35 | HUD trigger, status dots, avatars |

(`rounded-3xl` appears once — an outlier, not a tier.) Live computed radii: 8 / 12 / 16 / 6 / 4 px
plus `full`, exactly matching this table.

Rule of thumb that keeps hierarchy intact: **inner element `{rounded.lg}`, its container
`{rounded.xl}`, and the corner radius of a container must be ≥ the padding that surrounds its
children.**

## Components

State variants are named `<component>-<state>` in the frontmatter. Implementation entry points:

- `hud-trigger-pill` / `hud-trigger-pill-active` — `#top-right-trigger` in
  `src/components/FractalInfoHUD.tsx`. The only always-visible chrome in the top-right corner;
  expands to a dropdown column on touch, inline row from `sm` up. Its open/close logic must stay
  hover/click reconciled (`hoverOpenedRef`) — see `Do's and Don'ts`.
- `hud-icon-button` / `hud-icon-button-active` — same file, plus `ControlsPanel.tsx` icon rows.
  Icon-only variant drops the label (`<span className="hidden sm:inline">`).
- `cta-gradient` — `#feed-next-btn`, the app's primary action ("next fractal", also Space).
- `floating-panel` — `ControlsPanel.tsx` root; scrollable, `overscroll-contain`, `.safe-fit`.
- `feed-ribbon` — `#neuro-feed-bar`; `flex-wrap` on phones so the 44 px target row never squeezes
  the specimen info column (`basis-full sm:basis-auto`).
- `chip-score` — resonance badge inside `#open-user-profile-btn`; mono, tiny, amber-tinted.
- `tab-button` / `tab-button-selected` — the 8 `ControlsPanel` tabs (`#tab-gpu-btn` is the audit's
  probe element) and the render-mode selector.
- `modal-shell` — `UserProfileModal`, `FractalAtlasModal`, `ExplanationModal`, `ProjectManifestModal`.
- `metric-row` — `TelemetryHUD.tsx`; header row is `flex-wrap` so landscape phones don't clip
  `FRAME TIME`.
- `slider-row` — the 14 `input[type=range]` controls; `touch-action: pan-y` is mandatory so a
  vertical pan still scrolls the panel.
- `switch-input` — checkboxes/radios; forced to 20 px on coarse pointers.

`FractalScrollFeed.tsx` and `DebugOverlay.tsx` are additional surfaces that reuse the tokens
above rather than defining new ones.

## Do's and Don'ts

**Do**

- Keep overlays translucent + blurred; the canvas is the content, chrome must recede (auto-hide
  after 3 s is a designed behavior, not a bug).
- Use one accent hue (amber) for "selected/valuable". Everything else is neutral.
- Put numerics in `font-mono` and labels in the system stack — that pairing is the app's voice.
- On touch surfaces, keep ≥ 44 × 44 px targets and ≥ 12 px text; `index.css` enforces both under
  `@media (pointer: coarse)` and the audit gate verifies it.
- Add the matching `.safe-*` class whenever you anchor a new overlay to a screen edge.
- Prefer raising a token in `@theme` over a new arbitrary value (`text-[10px]`, `#090812`).

**Don't**

- Don't add a `shadow-*` for elevation, a drop-shadow will not read on `#030305`.
- Don't introduce a webfont, or a `theme-color` value that differs from `{colors.canvas}`.
- Don't hardcode amber hexes in `stopColor` / `box-shadow`; the v3 literals drift from the v4
  utilities that sit next to them (see Gap 2).
- Don't mix `slate-*` and `neutral-*` in a new component; pick the greyscale of the surrounding
  surface (see Gap 3).
- Don't rebuild `#top-right-trigger`'s expansion as hover-only or click-only. Touch browsers fire
  `mouseenter` **before** `click`; an unguarded hover-open + click-toggle cancels itself and the
  menu becomes unopenable on iPhones (regression fixed 2026-09-23, guarded by
  `tests/mobile-design-audit.ts`).
- Don't apply `touch-action: none` to anything but the canvas; it steals scroll from panels.
- Don't put a new sub-12 px size into an arbitrary class — add a tier instead.

## Responsive Behavior

Desktop-first markup, touch-hardened by three unlayered CSS blocks in `src/index.css` (unlayered
so they outrank Tailwind's `@layer utilities` without `!important`):

1. `@media (pointer: coarse)` — 44 px minimum targets, 16 px form-control font (iOS auto-zoom
   guard), 20 px checkboxes, and a 12 px legibility floor that overrides
   `text-[8px] … text-[11px]`.
2. `env(safe-area-inset-*)` margins — required because `index.html` ships
   `viewport-fit=cover` + `apple-mobile-web-app-status-bar-style=black-translucent`.
3. `100dvh` sizing and `overscroll-behavior: none` — mobile browser chrome and rubber-banding
   must not steal canvas gestures.

Verified contract (`npm run test:mobile`, pointer emulation forced via CDP so it is
hardware-independent): at 375×667, 430×932 and 667×375 → tap targets < 44 px = **0**, text
nodes < 12 px = **0**, horizontal overflow = **0** px, clipped containers = **0**, shipped
`safe-area-inset` rules = **5**, `#tab-gpu-btn` `min-height` = **44 px**. On desktop
(1280×800, fine pointer) the same probe reports `min-height: auto` — the touch rules must never
leak there, and the audit fails if they do.

Breakpoints used: `sm` 640 px (HUD layout switch, landscape phones/small desktops) and nothing
above `md` in the overlay layer. The dense HUD is a desktop feature; on touch it collapses to
icon-only controls and a wrapping ribbon.

## Known Gaps

Gaps 1, 2, 4, 5, and 6 are closed (see below). Gap 3 remains **`needs-design-decision`**.
They are recorded here so an automated edit cannot silently re-create them.

1. ~~**No declared theme (conflict, high impact).** `src/index.css` has no `@theme` block and no CSS
   variables, so nothing resists a new one-off value; meanwhile 173 arbitrary px type sites and
   21 hardcoded hexes are de-facto tokens with no names. Proposed: add an additive `@theme` block
   with the values in this file (zero visual change), then migrate call sites opportunistically.~~
   **Closed 2026-09-23**: `src/index.css` now has a `@theme` block that declares:
   – micro text tiers (`--text-micro: 10px`, `--text-nano: 11px`, `--text-micro-sm: 9px`,
   `--text-micro-xs: 8px`) creating named `text-micro`/`text-nano`/etc. utilities;
   – semantic surfaces (`--color-canvas`, `--color-surface-deep`, `--color-surface-loader`,
   `--color-surface-modal`) replacing `bg-[#hex]` arbitrary values;
   – brand aliases (`--color-brand`, `--color-brand-bright`, `--color-brand-soft`,
   `--color-brand-warm`, `--color-brand-deep`) mapping to Tailwind's `--color-amber-*` scale.
   Additive: all 173 existing arbitrary sites still compile unchanged; the coarse-pointer
   floor rule covers both old `text-[Npx]` and new `.text-micro`/`.text-nano` class names.
   Migration is now opportunistic (new code uses named tokens, old code follows when touched).
2. **Hardcoded brand hexes are v3 hexes next to v4 utilities (measured drift).** ~~Painting both and
   reading pixels: `amber-500` renders `#fe9a00` but the code literals say `#f59e0b` (max channel
   Δ **11**); `amber-400` renders `#ffb900` against literal `#fbbf24` (Δ **36**, visible: the
   literal is paler/yellower). Neutral literals match exactly (Δ 0), so this is an amber-only
   problem in `CosmicLoader` (8 sites), `ControlsPanel` (5), `ProjectManifestModal` (3),
   `UserProfileModal` (1). Tailwind v4 exposes these as CSS variables, so SVG `stopColor` and
   `box-shadow` **can** reference them — `docs/DESIGN_DEBT.md`'s "zero user-visible benefit"
   claim is falsified by the Δ36 measurement and should be updated with the fix.~~
   **Closed 2026-09-23**: `src/index.css` declares five brand aliases (`--brand-amber`,
   `--brand-amber-bright`, `--brand-amber-soft`, `--brand-amber-warm`, `--brand-amber-deep`)
   that forward to the matching Tailwind v4 `--color-amber-*` tokens. 14 sites in
   `CosmicLoader`, `ControlsPanel`, `ProjectManifestModal`, `UserProfileModal` migrated:
   SVG `<stop stopColor>` / `<path stroke>` / `<circle fill>` now reference `currentColor`
   (inheriting the parent's `text-amber-*` utility) or `var(--brand-amber*)` via the `style`
   prop; every `shadow-[…rgba(245,158,11,…)]` arbitrary class was replaced by an inline
   `boxShadow: '0 0 … color-mix(in srgb, var(--brand-amber) …, transparent)'` style. The
   v3→v4 hex drift is eliminated at the source (one token change updates all uses) and
   the semantic naming matches the rest of the design system.
3. **Two greyscale families split by component boundary.** `slate-*` appears only in
   `FractalAtlasModal` (65), `FractalProbeHUD` (13), `ProjectManifestModal` (7); the other nine
   components use `neutral-*` (e.g. 109 in `ControlsPanel`). Decision: adopt `neutral` and migrate
   85 sites, or declare slate the intentional "atlas/data" sub-palette.
4. ~~**`theme-color` disagrees with the painted background.** `index.html` declares `#0a0a0a` while
   the root paints `#030305`, and there are three bespoke near-blacks (`#030305`, `#090812`,
   `#06050b`). Mobile browser chrome will band against the app. One-line fix.~~
   **Closed 2026-09-23**: `theme-color` in `index.html` was corrected to `#030305` (matching the
   root `html, body, #root` background). The remaining two near-blacks (`#06050b` in CosmicLoader,
   `#090812` in ProjectManifestModal) are overlay/surface backgrounds at a different z-layer and
   intentionally differ from the document root; they are now declared as `@theme` tokens
   (`--color-surface-loader`, `--color-surface-modal`) for semantic naming.
5. **Reduced motion is only half-covered.** ~~`prefers-reduced-motion` appears once, in `App.tsx:70`
   (boot-time render loop). There are **no** `motion-reduce:` CSS variants, so `animate-pulse` (6
   sites) and `animate-ping` (6) keep looping for reduced-motion users. WCAG 2.3.3 is met for
   animation triggered by interaction, not for ambient loops.~~
   **Closed 2026-09-23**: `src/index.css` gained a global `@media (prefers-reduced-motion: reduce)`
   block that sets `animation-duration/transition-duration: 0.001ms !important`,
   `animation-iteration-count: 1`, and `scroll-behavior: auto` for `*, *::before, *::after`.
   Covers the 12 `animate-pulse`/`animate-ping` sites and the 2 `animate-[spin_…]` usages without
   editing each call site; fractal morph/rotation (which IS content) remains governed by the
   pre-existing `App.tsx:70` `PREFERS_REDUCED_MOTION` module-level check.
6. ~~**Micro-type tier is undecided.** The 12 px coarse floor means desktop and touch now render
   different type scales by design. Either document `micro` as a desktop-only tier (current state,
   captured above) or promote 12 px everywhere and lose HUD density.~~
   **Closed 2026-09-23**: Decision — **micro tiers are desktop-only**. The `@theme` block declares
   `--text-micro` (10px), `--text-nano` (11px), `--text-micro-sm` (9px), `--text-micro-xs` (8px)
   as the information-density tier for fine-pointer HUD overlays. The `@media (pointer: coarse)`
   floor rule bumps all four to 12px/16px on touch devices (alongside the legacy `text-[8-11px]`
   arbitrary values). This is intentional: HUD panels need ~40 % more data per square cm on a
   1280px+ desktop viewport; on a 375px phone the density is unreadable and the floor protects
   accessibility. No code change needed — the two rules coexist cleanly.

## Evidence and reproduction

Every number in this file came from one of these, on 2026-09-23, commit range `de2b535..c46337f`:

```powershell
# class-frequency tallies (color utilities, type ladder, radii, motion, spacing)
# full transcripts kept in tests/results/dsc-stats*.txt (gitignored)
Set-Location app
$f = Get-ChildItem src -Recurse -Include *.tsx -File
(Select-String -Path $f -Pattern '(text|bg|border)-(amber|neutral|slate)-\d{2,3}' -AllMatches).Matches.Value |
  Group-Object | Sort-Object Count -Descending | Select-Object -First 30

# installed token source of truth
Select-String -Path node_modules\tailwindcss\theme.css -Pattern '--color-(amber|neutral)-'

# rendered values: paint the token in the live build and read the pixel back
npm run build; npx vite preview --port 4173 --strictPort   # then probe http://127.0.0.1:4173

# the responsive contract gate (never depends on the VPN: point it at localhost)
npm run test:mobile -- http://127.0.0.1:4173
```

Related docs: `docs/DESIGN_DEBT.md` (debt buckets — see Gap 2 for the correction),
`VISUAL_CONTROL_REPORT.md` (same directory — repo root; a11y/contrast measurements), `docs/palettes.md`
(render-data palettes, a separate token layer from this UI contract).
