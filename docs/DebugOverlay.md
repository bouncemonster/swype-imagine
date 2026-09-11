# DebugOverlay.tsx

**158 lines | Render diagnostics and performance monitoring overlay**

## Purpose
Developer debug panel showing real-time render diagnostics, math validation, GPU health, and performance metrics. Updates 10 times per second.

## Props Interface (lines 4-7)
```typescript
interface DebugOverlayProps {
  visible: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
```

## State Management (lines 13-14)
```typescript
const [stats, setStats] = useState<RenderStats>(renderDiagnostics.getStats());
const [expanded, setExpanded] = useState(false);
```
- `stats`: Current render statistics from RenderDiagnostics
- `expanded`: Toggle for detailed view

## Update Loop (lines 16-24)
```typescript
useEffect(() => {
  if (!visible) return;
  
  const interval = setInterval(() => {
    setStats(renderDiagnostics.getStats());
  }, 100); // Update 10 times per second
  
  return () => clearInterval(interval);
}, [visible]);
```
Polls `renderDiagnostics.getStats()` every 100ms when visible.

## Position Classes (lines 28-33)
```typescript
const positionClasses = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
};
```
Configurable corner positioning.

## Color Coding (lines 35-36)
```typescript
const fpsColor = stats.fps > 50 ? 'text-green-400' : stats.fps > 30 ? 'text-yellow-400' : 'text-red-400';
const healthColor = renderDiagnostics.isHealthy() ? 'text-green-400' : 'text-red-400';
```
- **FPS**: Green (>50) → Yellow (>30) → Red (≤30)
- **Health**: Green (healthy) → Red (issues)

## UI Components

### Header (lines 40-48)
```
🔍 Render Diagnostics              [▶/▼]
```
- Title with magnifying glass emoji
- Expand/collapse toggle button

### Performance Metrics (lines 50-68)
```
FPS:              144.0
Frame Time:       6.94ms
Ray Steps:        128
Hit Rate:         95.2%
```

**Metrics**:
- **FPS**: Color-coded (green/yellow/red)
- **Frame Time**: Milliseconds with 2 decimals
- **Ray Steps**: Number of ray march steps
- **Hit Rate**: Percentage of rays hitting geometry

### Math Validation (lines 72-99) - Expanded Only
```
Math Validation
SDF NaN:        0
SDF ∞:          0
SDF Range:      [0.001, 2.345]
Avg Distance:   0.1234
```

**Validation metrics**:
- **SDF NaN**: Count of NaN distances (red if > 0)
- **SDF ∞**: Count of Infinity distances (red if > 0)
- **SDF Range**: Min/max distance values
- **Avg Distance**: Average SDF distance

### GPU Health (lines 101-116) - Expanded Only
```
GPU Health
Context:        OK
Shader Compile: 245ms
```

**Health metrics**:
- **Context**: "OK" (green) or "LOST" (red)
- **Shader Compile**: Compilation time in milliseconds

### Health Status (lines 118-126) - Expanded Only
```
System Health:  ✓ HEALTHY / ✗ ISSUES
```
Overall health check from `renderDiagnostics.isHealthy()`.

### Action Buttons (lines 128-146) - Expanded Only
```
[Reset Stats]  [Export]
```

**Buttons**:
1. **Reset Stats**: Calls `renderDiagnostics.reset()`
2. **Export**: Calls `renderDiagnostics.exportReport()` and logs to console

### Quick Status Bar (lines 150-154)
```
Errors: 0          Warnings: 2
```
Always visible count of error and warning logs.

## Critical Notes
1. **Update rate**: 10 Hz (100ms interval)
2. **Conditional render**: Only shows when `visible` is true
3. **Expandable**: Compact view shows only performance metrics
4. **Position**: Configurable corner placement
5. **Color coding**: FPS and health status color-coded
6. **Math validation**: Tracks NaN/Infinity in SDF calculations
7. **GPU health**: Monitors context loss and shader compile time
8. **Export**: Sends report to console (not file)
9. **Developer tool**: Not shown to end users by default
10. **Monospace font**: All values in `font-mono`

## Layout
```
┌─────────────────────────────────────┐
│ 🔍 Render Diagnostics        [▶]   │
├─────────────────────────────────────┤
│ FPS:              144.0             │
│ Frame Time:       6.94ms            │
│ Ray Steps:        128               │
│ Hit Rate:         95.2%             │
├─────────────────────────────────────┤
│ Errors: 0          Warnings: 2      │
└─────────────────────────────────────┘

When expanded:
┌─────────────────────────────────────┐
│ 🔍 Render Diagnostics        [▼]   │
├─────────────────────────────────────┤
│ FPS:              144.0             │
│ Frame Time:       6.94ms            │
│ Ray Steps:        128               │
│ Hit Rate:         95.2%             │
├─────────────────────────────────────┤
│ Math Validation                     │
│ SDF NaN:        0                   │
│ SDF ∞:          0                   │
│ SDF Range:      [0.001, 2.345]      │
│ Avg Distance:   0.1234              │
├─────────────────────────────────────┤
│ GPU Health                          │
│ Context:        OK                  │
│ Shader Compile: 245ms               │
├─────────────────────────────────────┤
│ System Health:  ✓ HEALTHY           │
├─────────────────────────────────────┤
│ [Reset Stats]  [Export]             │
├─────────────────────────────────────┤
│ Errors: 0          Warnings: 2      │
└─────────────────────────────────────┘
```

## Dependencies
- `renderDiagnostics`, `RenderStats` from RenderDiagnostics
- No lucide-react icons (uses emoji and text)
