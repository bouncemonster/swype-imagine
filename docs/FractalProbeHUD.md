# FractalProbeHUD.tsx

**115 lines | Topological probe telemetry overlay**

## Purpose
Scientific measurement overlay showing distance to SDF surface, camera position, and topological data. Activated when `params.probeActive` is true.

## Props Interface (lines 5-9)
```typescript
interface FractalProbeHUDProps {
  params: FractalParams;
  onToggleProbe: () => void;
  onToggleMacro: () => void;
}
```

## Visibility Control (line 16)
```typescript
if (!params.probeActive) return null;
```
Only renders when probe is active (toggled from ControlsPanel).

## Calculations (lines 18-26)

### Camera Distance (lines 19-23)
```typescript
const camDist = Math.sqrt(
  (params.camPosX ?? 0) ** 2 + 
  (params.camPosY ?? 0) ** 2 + 
  (params.camPosZ ?? 0) ** 2
);
```
Euclidean distance from origin to camera position.

### Estimated SDF Distance (line 25)
```typescript
const estDistance = Math.max(0.001, camDist / (params.zoom || 3.0)).toFixed(4);
```
Approximate distance to surface: `camDist / zoom`, clamped to min 0.001.

### Slice Position (line 26)
```typescript
const slicePos = params.slicePlane ? ((0.5 - params.slicePlane) * 3.5).toFixed(3) : 'OFF';
```
Converts slicePlane [0,1] to world coordinates [-1.75, 1.75].

## UI Components

### Center Laser Reticle (lines 30-47)
```
        PROBE
         │
    ─────●─────
         │
      STANDARD
```

**Structure**:
- Horizontal line: `w-full h-[1px] bg-emerald-400/40`
- Vertical line: `h-full w-[1px] bg-emerald-400/40`
- Center circle: `w-5 h-5 rounded-full border border-emerald-400/60`
- Center dot: `w-1 h-1 rounded-full bg-emerald-400`
- Top label: "PROBE"
- Bottom label: "MACRO 10⁻⁴" or "STANDARD"

**Color**: Emerald green (scientific/military aesthetic)

### Top Left: Probe Telemetry (lines 49-111)
```
┌─────────────────────────────────┐
│ [Crosshair] Топологический Зонд │
│                         [Закрыть]│
├─────────────────────────────────┤
│ Дистанция до SDF d(p):  0.1234 u│
│ Позиция Камеры:                │
│   X:0.00 Y:0.00 Z:-3.20        │
│ Ось Среза: GOLDEN (0.175)       │
│ Модальность: SOLID              │
│ Октавы / Глубина: 2L · k=0.35   │
├─────────────────────────────────┤
│ [● Ультра-Макро ВКЛ]            │
└─────────────────────────────────┘
```

**Telemetry data** (lines 64-96):
1. **SDF Distance**: `estDistance` in units (emerald)
2. **Camera Position**: X, Y, Z coordinates (slate)
3. **Slice Axis**: axis name + position (amber)
4. **Render Modality**: renderStyle (cyan)
5. **Octaves/Depth**: octaveLayers + smoothK (indigo)

**Macro toggle button** (lines 99-110):
- Active: "● Ультра-Макро ВКЛ" (amber)
- Inactive: "○ Включить Макро" (slate)

### Bottom Center: Coordinates & Compass (lines 113-124)
```
[Activity] SDF 1-Lipschitz Verified | RotX: 0.40 rad RotY: 0.25 rad | φ-Scale: 1.61803
```

**Components**:
- **SDF Verification**: "SDF 1-Lipschitz Verified" (emerald)
- **Rotation**: RotX, RotY in radians (slate)
- **φ-Scale**: phiMultiplier to 5 decimals (amber)

**Style**: Pill-shaped badge, centered at bottom

## Critical Notes
1. **Conditional render**: Only shows when `probeActive` is true
2. **Emerald theme**: Scientific/military aesthetic
3. **Distance approximation**: `camDist / zoom` (not actual SDF ray march)
4. **Macro mode**: 10⁻⁴ ultra-micro ray march step
5. **Pointer events**: Main panel is interactive, reticle is not
6. **Monospace font**: All values in `font-mono`
7. **Responsive**: Different padding on mobile (p-4 vs sm:p-6)
8. **Russian UI**: All labels in Russian

## Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌──────────────┐                    PROBE                  │
│  │ Топологический│                     │                    │
│  │ Зонд         │                ───────●───────            │
│  │              │                     │                    │
│  │ SDF: 0.1234u │                  STANDARD                │
│  │ Cam: 0,0,-3  │                                          │
│  │ Slice: GOLDEN│                                          │
│  │ Mode: SOLID  │                                          │
│  │ Octaves: 2L  │                                          │
│  │ [Macro]      │                                          │
│  └──────────────┘                                          │
│                                                             │
│         [SDF Verified | RotX RotY | φ-Scale]               │
└─────────────────────────────────────────────────────────────┘
```

## Dependencies
- `FractalParams` from types
- `lucide-react` icons (5 icons: Crosshair, Compass, Layers, ShieldCheck, Activity)
- No engine dependencies
