# TelemetryHUD.tsx

**171 lines | Real-time performance telemetry display**

## Purpose
Top-left HUD showing FPS, frame time, frame pacing graph, and GPU specs. Desktop only (hidden on mobile).

## Props Interface (lines 5-9)
```typescript
interface TelemetryHUDProps {
  telemetry: TelemetryData;
  targetFps: number;
  phiMultiplier: number;
}
```

## State Management (lines 16-17)
```typescript
const [history, setHistory] = useState<number[]>([]);
const [minimized, setMinimized] = useState<boolean>(false);
```
- `history`: Rolling window of last 40 frame times (ms)
- `minimized`: Toggle for expanded/compact view

## Calculations (lines 28-30)

### Target Budget (line 28)
```typescript
const targetBudgetMs = targetFps > 0 ? 1000 / targetFps : 6.94;
```
Frame time budget in ms. Default 6.94ms = 144Hz.

### 144Hz Detection (line 29)
```typescript
const is144HzTarget = targetFps === 144 || (targetFps === 0 && telemetry.fps >= 140);
```
Detects if running at 144Hz (for UI hints).

### Frame Budget Check (line 30)
```typescript
const isFrameBudgetMet = telemetry.frameTimeMs <= targetBudgetMs * 1.05;
```
True if current frame time ≤ 105% of target (5% tolerance).

## UI Components

### Header (lines 39-60)
```
[●] WebGPU / WebGL2        [Compact]
```

**Components**:
- **Status LED**: Animated ping (emerald if FPS ≥ 120, amber otherwise)
- **Backend name**: telemetry.backend (WebGPU/WebGL2)
- **Toggle button**: Expand/Compact view

### Primary Metrics Grid (lines 62-111)
```
┌─────────────────────────────────────┐
│ RATE              [144Hz]           │
│ 144 FPS                             │
│ 1% Low: 138 FPS                     │
├─────────────────────────────────────┤
│ FRAME TIME      144Hz = 6.94ms     │
│ 6.8 ms                              │
│ Avg: 7.1 ms                         │
└─────────────────────────────────────┘
```

**FPS Block** (lines 64-86):
- **RATE label** + target badge (144Hz / Uncapped)
- **Current FPS**: Large white text
- **1% Low**: Worst 1% frame rate

**Frame Time Block** (lines 88-110):
- **FRAME TIME label** + target info
- **Current frame time**: Emerald if within budget, amber if over
- **Average frame time**: Calculated from avgFps

### Frame Pacing Sparkline (lines 115-139)
```
144 FPS Frame Pacing    Target: 6.94 ms
┌─────────────────────────────────────┐
│ ▁▂▃▂▁▂▃▄▃▂▁▂▃▂▁▂▃▄▃▂▁▂▃▂▁▂▃▄▃▂▁▂ │
└─────────────────────────────────────┘
```

**Structure**:
- Title: "{targetFps} FPS Frame Pacing"
- Target budget: "{targetBudgetMs.toFixed(2)} ms"
- **40 bars**: Each represents one frame time
- **Bar height**: `(val / 20.0) * 100%`, clamped [8%, 100%]
- **Color coding**:
  - Amber: `val ≤ targetBudgetMs * 1.1` (within 110% budget)
  - Red: `val > targetBudgetMs * 1.1` (over budget)
- **Tooltip**: Shows exact ms value on hover

### Sacred Mathematics & Hardware (lines 141-164)
```
┌─────────────────────────────────────┐
│ [Sparkles] Золотое сечение (φ):    │
│                    1.618034         │
│ Golden Angle (ψ):  137.507764°     │
│                    (2.3999 rad)     │
├─────────────────────────────────────┤
│ NVIDIA RTX 4090      2560×1440     │
└─────────────────────────────────────┘
```

**Components**:
1. **φ Multiplier**: phiMultiplier to 6 decimals (amber)
2. **Golden Angle**: 137.507764° (2.3999 rad)
3. **GPU Adapter**: telemetry.adapterName (truncated)
4. **Resolution**: width × height

## History Update (lines 19-26)
```typescript
useEffect(() => {
  if (telemetry.frameTimeMs > 0) {
    setHistory(prev => {
      const next = [...prev, telemetry.frameTimeMs];
      return next.slice(-40);
    });
  }
}, [telemetry.frameTimeMs]);
```
Rolling window: Keeps last 40 frame times for sparkline graph.

## Critical Notes
1. **Desktop only**: `hidden sm:block` - hidden on mobile
2. **Rolling history**: 40 frame times for sparkline
3. **Color coding**: Emerald (good) vs Amber (warning) vs Red (over budget)
4. **1% Low**: Worst 1% frame rate metric
5. **Frame budget**: 5% tolerance for target FPS
6. **Sparkline**: Bar chart with 2px gaps
7. **Minimize toggle**: Hides sparkline and math section
8. **GPU info**: Adapter name + resolution
9. **φ display**: 6 decimal precision
10. **Golden Angle**: Fixed value (not calculated)

## Layout
```
┌─────────────────────────────────────┐
│ [●] WebGPU              [Compact]  │
├─────────────────────────────────────┤
│ ┌──────────┬──────────┐            │
│ │ RATE     │ FRAME    │            │
│ │ 144 FPS  │ 6.8 ms   │            │
│ │ 1%: 138  │ Avg: 7.1 │            │
│ └──────────┴──────────┘            │
│                                     │
│ Frame Pacing  Target: 6.94 ms      │
│ ▁▂▃▂▁▂▃▄▃▂▁▂▃▂▁▂▃▄▃▂▁▂▃▄▃▂▁▂     │
│                                     │
│ φ: 1.618034                         │
│ ψ: 137.507764°                      │
│ RTX 4090      2560×1440             │
└─────────────────────────────────────┘
```

## Dependencies
- `TelemetryData` from types
- `lucide-react` icons (5 icons: Activity, Cpu, Zap, Gauge, Sparkles)
- No engine dependencies (receives data via props)
