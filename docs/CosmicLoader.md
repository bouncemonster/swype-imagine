# CosmicLoader.tsx

**174 lines | Loading screen with animated fractal emblem**

## Purpose
Full-screen loading overlay shown during GPU initialization. Displays animated fractal emblem, progress phases, and force-dismisses after 15 seconds if engine fails.

## Props Interface (lines 3-6)
```typescript
interface CosmicLoaderProps {
  isReady: boolean;
  onFinished?: () => void;
}
```

## Loading Phases (lines 8-13)
```typescript
const PHASES = [
  'Пробуждение золотой спирали φ...',
  'Синтез гармоник и фрактальных октав...',
  'Рождение трехмерного континуума...',
  'Погружение в бесконечность...',
];
```
4 phases cycling every 450ms.

## State Management (lines 16-18)
```typescript
const [phaseIndex, setPhaseIndex] = useState(0);
const [fadingOut, setFadingOut] = useState(false);
const [hidden, setHidden] = useState(false);
```
- `phaseIndex`: Current loading phase (0-3)
- `fadingOut`: Fade-out animation active
- `hidden`: Loader completely hidden

## Phase Cycling (lines 20-25)
```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setPhaseIndex(prev => (prev < PHASES.length - 1 ? prev + 1 : prev));
  }, 450);
  return () => clearInterval(interval);
}, []);
```
Cycles through phases every 450ms, stops at last phase.

## Force Dismiss (lines 27-42)
```typescript
useEffect(() => {
  const forceDismissTimer = setTimeout(() => {
    if (!isReady) {
      console.warn('[CosmicLoader] Force-dismissing after 15s — engine failed to initialize');
      setFadingOut(true);
      const hideTimer = setTimeout(() => {
        setHidden(true);
        onFinished?.();
      }, 700);
      return () => clearTimeout(hideTimer);
    }
  }, 15000);
  return () => clearTimeout(forceDismissTimer);
}, [isReady, onFinished]);
```
**Safety mechanism**: Force-dismisses after 15 seconds if engine never becomes ready. Prevents infinite hang on GPU initialization failure.

## Normal Dismiss (lines 44-57)
```typescript
useEffect(() => {
  if (isReady) {
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
When `isReady` becomes true, waits 500ms then fades out over 700ms.

## UI Components

### Background (lines 62-74)
```typescript
bg-[#06050b] // Deep dark purple-black
```

**Radial glow** (lines 69-74):
```typescript
radial-gradient(circle at 50% 50%, 
  rgba(245, 158, 11, 0.12) 0%, 
  rgba(15, 12, 28, 0.8) 55%, 
  #06050b 100%)
```
Subtle amber glow at center, fading to dark.

### Animated Fractal Emblem (lines 76-141)
```
        [Ripple Rings]
        
    [SVG Spiral with 8 Petals]
        
        [Core Glow]
```

**Ripple rings** (lines 79-81):
- 3 concentric rings with different animations:
  - Outer: ping (3s)
  - Middle: pulse (2.4s)
  - Inner: dashed, spin (32s)

**SVG spiral** (lines 84-137):
- 8 phyllotaxis petals at 45° intervals
- Each petal has:
  - Logarithmic spiral arc (quadratic bezier)
  - Petal contour (cubic bezier)
  - Golden node at tip
- Gradient: gold to amber to dark amber
- Soft glow filter (Gaussian blur)
- Spin animation: 28s duration

**Center core** (line 136):
- Golden circle with glow filter

**Core glow** (line 140):
- Blurred amber circle with pulse animation
- Shadow: 24px amber glow

### Typography (lines 143-151)
```
     ФРАКТАЛЬНЫЙ КОНТИНУУМ

Живая Геометрия • 100+ Канонических Форм • φ = 1.618
```

**Title** (lines 145-147):
- Gradient text: amber-100 → amber-200 → amber-400
- Uppercase, wide tracking (0.28em)
- Light font weight

**Subtitle** (lines 148-150):
- Monospace font
- Wide tracking (0.3em)
- Semi-transparent amber

### Progress Bar (lines 153-165)
```
[████████████████████████████████] 25%
Пробуждение золотой спирали φ...
```

**Progress bar** (lines 154-160):
- Width: 256px max, 80vw on mobile
- Height: 4px
- Gradient: amber-600 → amber-400 → yellow-200
- Width: `{Math.min(100, (phaseIndex + 1) * 25)}%`
- Border: amber-500/20

**Phase text** (lines 162-164):
- Monospace font
- Amber color with 80% opacity
- Shows current phase from PHASES array

### Watermark (lines 167-170)
```
WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика
```
Bottom-centered, semi-transparent amber text.

## Critical Notes
1. **Force dismiss**: 15 seconds timeout prevents infinite hang
2. **Phase cycling**: 450ms per phase, 4 phases total
3. **Fade out**: 700ms opacity transition
4. **SVG animation**: 28s spin for spiral, 32s for dashed ring
5. **Ripple rings**: 3 rings with different animations
6. **Gradient text**: Title uses bg-clip-text
7. **Progress**: 25% per phase (0%, 25%, 50%, 75%, 100%)
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
│            [████████████████] 75%                           │
│     Погружение в бесконечность...                           │
│                                                             │
│                                                             │
│     WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика           │
└─────────────────────────────────────────────────────────────┘
```

## Dependencies
- No external dependencies
- Pure React + SVG animations
- No lucide-react icons
