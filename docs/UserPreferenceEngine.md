# UserPreferenceEngine.ts

**251 lines | Learns user interaction patterns**

## Purpose
Analyzes user behavior and adapts rendering parameters to match user's style.

## Key Interfaces

### InteractionSample (lines 16-21)
```typescript
{
  timestamp: number;
  type: 'zoom' | 'rotate' | 'fractal_change' | 'style_change' | 'palette_change' | 'camera_change';
  value: number;
  duration: number; // How long user interacted with this setting
}
```

### UserPreferences (lines 23-45)
```typescript
{
  // Zoom behavior
  preferredZoomRange: { min: number; max: number; avg: number };
  zoomSensitivity: number;
  
  // Rotation behavior
  rotationSpeed: number;
  rotationStyle: 'careful' | 'moderate' | 'fast';
  
  // Content preferences (weighted by time spent)
  fractalWeights: Record<string, number>;
  renderStyleWeights: Record<string, number>;
  paletteWeights: Record<string, number>;
  cameraModeWeights: Record<string, number>;
  
  // Interaction patterns
  prefersTouch: boolean;
  prefersScroll: boolean;
  
  // Session data
  totalInteractionTime: number;
  sampleCount: number;
}
```

## Key Methods

### `recordInteraction(type, value)` (lines 99-117)
Records user interaction, analyzes sample, saves every 20 samples.

### `analyzeSample(sample)` (lines 119-140)
Routes to specific analyzer based on type.

### `analyzeZoom(sample)` (lines 142-150)
Updates preferred zoom range using EMA (exponential moving average):
- avg: 90% old + 10% new
- min/max: track extremes
- sensitivity: 95% old + 5% new

### `analyzeRotation(sample)` (lines 152-160)
Classifies rotation style:
- careful: < 0.003
- moderate: < 0.01
- fast: >= 0.01

### `analyzeFractalChange/StyleChange/PaletteChange/CameraChange` (lines 162-185)
Increments weight for the selected item.

### `getAdaptedDefaults()` (lines 201-229)
Returns adapted parameters after 10+ samples:
- zoom: preferred average
- rotationSensitivity: learned speed
- preferredFractal: most visited
- preferredStyle: most used
- preferredPalette: most selected
- preferredCamera: most used

### `getPreferred(weights)` (lines 188-198)
Returns key with highest weight from a weights map.

## Critical Notes
1. **Rolling window**: 500 samples max (FIFO)
2. **EMA learning**: 0.9/0.1 for zoom, 0.95/0.05 for sensitivity
3. **Periodic save**: Every 20 samples to localStorage
4. **Storage key**: `golden_ratio_user_prefs`
5. **String keys**: FractalType, RenderStyle, etc. stored as strings (not indices)
6. **Singleton**: `userPrefEngine` exported instance

## Usage
Called from FractalCanvas.tsx:
```typescript
userPrefEngine.recordInteraction('zoom', Math.log(zoomFactor) * 10);
userPrefEngine.recordInteraction('rotate', Math.hypot(dx, dy) / dt);
```

## Dependencies
- No internal dependencies
- Uses localStorage for persistence
