# CosmicLoader.tsx

**181 lines | Loading screen with real progress-driven phases**

## Purpose
Full-screen loading overlay shown during GPU initialization. Displays animated fractal emblem and a progress bar driven by REAL engine load progress (device init + shader compile + first rendered frame). Force-dismisses after 15 seconds if engine fails.

## Props Interface (lines 3-8)
```typescript
interface CosmicLoaderProps {
  isReady: boolean;
  /** Real loading progress 0-1 from device init + shader compile + first frame. */
  progress?: number;
  onFinished?: () => void;
}
```

## Loading Phases (lines 13-19)
```typescript
const PHASES = [
  'Пробуждение золотой спирали φ...',
  'Пробуждение GPU-контекста...',
  'Компиляция шейдеров фракталов...',
  'Компоновка на видеокарту...',
  'Погружение в бесконечность...',
];
```
5 phases. Text is DERIVED from the real `progress` value — there is NO fixed timer cycling (the old 450ms `setInterval` fake timer was removed).

## Phase Derivation (lines 21-27)
```typescript
function stageIndex(progress: number, isReady: boolean): number {
  if (isReady || progress >= 1) return 4;
  if (progress >= 0.7) return 3;
  if (progress >= 0.4) return 2;
  if (progress >= 0.12) return 1;
  return 0;
}
```
Phase index thresholds: `>=1` → 4, `>=0.7` → 3, `>=0.4` → 2, `>=0.12` → 1, else 0.

## State Management (lines 30-31)
```typescript
const [fadingOut, setFadingOut] = useState(false);
const [hidden, setHidden] = useState(false);
```
- `fadingOut`: Fade-out animation active
- `hidden`: Loader completely hidden

No `phaseIndex` state — the displayed phase is computed inline from props (`PHASES[stageIndex(progress, isReady)]`, line 170).

## Progress Pipeline (WHY this design)
The loader mirrors actual GPU initialization instead of animating against a fake clock:

```
ShaderManager (src/engine/ShaderManager.ts)
  reportProgress stages: parsing=10 → compiling=40 → linking=80 → complete=100
        ↓
WebGLEngine.onCompileProgress(stage, percent)  (src/engine/WebGLEngine.ts:35)
        ↓
useRenderEngine.loadProgress  (src/hooks/useRenderEngine.ts:79)
  0.12 baseline at context acquire (lines 243, 279)
  0.12 + (pct / 100) * 0.8 while compiling (lines 280-281) → spans 0.12–0.92
  1.0 + onEngineReady ONLY on first RENDERED frame (lines 524-526);
  failure paths also set 1 + fire onEngineReady (lines 294-295, 302-303)
        ↓
FractalCanvas  → onLoadProgress(progress) via useEffect (src/components/FractalCanvas.tsx:76-78)
        ↓
App            → setLoadProgress state (src/App.tsx:162), passed back as progress={loadProgress} (src/App.tsx:708)
        ↓
CosmicLoader   → progress bar width + stageIndex-derived phase text
```

**Why**: One-time cold D3D11 device initialization costs ≈600ms (warm backend switches ~100ms). A fixed-timer loader either finished before the GPU did (fake 100% + blank canvas) or lingered after. Now the bar reaches 100% exactly when the first frame is on screen, and the ~600ms device-init floor is honestly covered by the real 0→0.12 segment. The fake 450ms timer was removed.

**Jank resilience**: The decorative animations (ripple rings, spiral spin, core pulse) are compositor-driven CSS animations (`animate-ping` / `animate-pulse` / `animate-[spin_...]`), so they keep running smoothly even while the main thread stalls during shader parsing/compilation.

## Force Dismiss (lines 35-48)
```typescript
useEffect(() => {
  const forceDismissTimer = setTimeout(() => {
    if (!isReady) {
      console.warn('[CosmicLoader] Force-dismissing after 30s — engine failed to initialize');
      setFadingOut(true);
      const hideTimer = setTimeout(() => {
        setHidden(true);
        onFinished?.();
      }, 700);
      return () => clearTimeout(hideTimer);
    }
  }, 30000);
  return () => clearTimeout(forceDismissTimer);
}, [isReady, onFinished]);
```
**Safety mechanism**: Force-dismisses after 30 seconds if engine never becomes ready. Prevents infinite hang on GPU initialization failure. Raised from the old 15 s bound because slow/headless ANGLE compiles measurably exceed it (first frame ≈16 s), and the 15 s timer raced the genuine first frame, detaching over a black canvas — caught by the pixel readback check in `tests/loader-sync-test.ts`.

## Normal Dismiss (lines 50-63)
```typescript
useEffect(() => {
  if (isReady) {
    // Delay slightly for smooth visual completion
    const timer = setTimeout(() => {
      setFadingOut(true);
      const hideTimer = setTimeout(() => {
        setHidden(true);
        onFinished?.();
      }, 700);
      return () => clearTimeout(hideTimer);
    }, 500);
    return () => clearTimeout(timer);
  }
}, [isReady, onFinished]);
```
When `isReady` becomes true, waits 500ms then fades out over 700ms (CSS opacity transition).

## UI Components

### Overlay & Background (lines 67-80)
```typescript
id="cosmic-loader-overlay"   // DOM id of the full-screen overlay
bg-[#06050b] // Deep dark purple-black
```

**Radial glow** (lines 75-80):
```typescript
radial-gradient(circle at 50% 50%, 
  rgba(245, 158, 11, 0.12) 0%, 
  rgba(15, 12, 28, 0.8) 55%, 
  #06050b 100%)
```
Subtle amber glow at center, fading to dark.

### Animated Fractal Emblem (lines 82-147)
```
        [Ripple Rings]
        
    [SVG Spiral with 8 Petals]
        
        [Core Glow]
```

**Ripple rings** (lines 85-87):
- 3 concentric rings with different animations:
  - Outer: ping (3s)
  - Middle: pulse (2.4s)
  - Inner: dashed, spin (32s)

**SVG spiral** (lines 90-143):
- 8 phyllotaxis petals at 45° intervals
- Each petal has:
  - Logarithmic spiral arc (quadratic bezier)
  - Petal contour (cubic bezier)
  - Golden node at tip
- Gradient: gold to amber to dark amber
- Soft glow filter (Gaussian blur)
- Spin animation: 28s duration

**Center core** (line 142):
- Golden circle with glow filter

**Core glow** (line 146):
- Blurred amber circle with pulse animation
- Shadow: 24px amber glow

### Typography (lines 149-157)
```
     ФРАКТАЛЬНЫЙ КОНТИНУУМ

Живая Геометрия • 100+ Канонических Форм • φ = 1.618
```

**Title** (lines 151-153):
- Gradient text: amber-100 → amber-200 → amber-400
- Uppercase, wide tracking (0.28em)
- Light font weight

**Subtitle** (lines 154-156):
- Monospace font
- Wide tracking (0.3em)
- Semi-transparent amber

### Progress Indicator (lines 159-172)
```
[████████████████        ]
Компиляция шейдеров фракталов...
```

**Progress bar** (lines 161-166):
- DOM id: `cosmic-loader-progress` (inside track `#cosmic-loader-overlay`)
- Width: 256px max, 80vw on mobile
- Height: 4px
- Gradient: amber-600 → amber-400 → yellow-200
- Width: `{Math.round(Math.min(1, Math.max(0, progress)) * 100)}%` — REAL progress, clamped 0–100
- Transition: `transition-[width] duration-500 ease-out`
- Border: amber-500/20

**Phase text** (lines 169-171):
- Monospace font
- Amber color with 80% opacity
- `PHASES[stageIndex(progress, isReady)]` — derived from real progress, not a timer

### Watermark (lines 174-177)
```
WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика
```
Bottom-centered, semi-transparent amber text.

## Critical Notes
1. **Force dismiss**: 15 seconds timeout prevents infinite hang
2. **Real progress-driven**: phases and bar follow `loadProgress` from the engine pipeline; no fake timers
3. **Fade out**: 500ms delay after `isReady`, then 700ms opacity transition
4. **SVG animation**: 28s spin for spiral, 32s for dashed ring (compositor-driven, stall-proof)
5. **Ripple rings**: 3 rings with different animations
6. **Gradient text**: Title uses bg-clip-text
7. **Progress mapping**: 0→0.12 device/context init, 0.12→0.92 shader parse/compile/link, 1.0 at first rendered frame
8. **Russian UI**: All text in Russian
9. **Responsive**: Max width 80vw on mobile
10. **Safety**: Logs warning on force-dismiss

## Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     [Radial Glow]                           │
│                                                             │
│                  [Ripple Ring 1]                            │
│                 [Ripple Ring 2]                             │
│                [Ripple Ring 3]                              │
│                                                             │
│              [SVG Spiral with 8 Petals]                     │
│                                                             │
│                  [Core Glow]                                │
│                                                             │
│              ФРАКТАЛЬНЫЙ КОНТИНУУМ                          │
│                                                             │
│     Живая Геометрия • 100+ Форм • φ = 1.618               │
│                                                             │
│            [████████████████] 72%                           │
│     Компоновка на видеокарту...                             │
│                                                             │
│                                                             │
│     WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика           │
└─────────────────────────────────────────────────────────────┘
```

## Dependencies
- No external dependencies
- Pure React + SVG animations
- No lucide-react icons
- Receives `progress` from `App.tsx` (fed by `FractalCanvas.onLoadProgress` ← `useRenderEngine.loadProgress`)
