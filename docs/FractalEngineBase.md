# FractalEngineBase.ts

**126 lines | Abstract base class for GPU engines**

## Purpose
Shared base for WebGLEngine and WebGPUEngine. Handles uniform packing, palette resolution, index computation.

## Key Interfaces

### ResolvedIndices (lines 11-19)
```typescript
{
  fractalIdx: number;      // 0-430 (from getFractalIndex)
  hybridIdx: number;       // 0-430
  tertiaryIdx: number;     // 0-430
  compositeOpIdx: number;  // 0-7
  cameraModeIdx: number;   // 0-3
  sliceAxisIdx: number;    // 0-3
  renderStyleIdx: number;  // 0-6
}
```

## Key Methods

### `resolvePalette(params)` (lines 34-38)
Returns custom palette if set, otherwise finds by paletteId, falls back to COLOR_PALETTES[0].

### `computeIndices(params)` (lines 41-51)
Converts string types to numeric indices via fractalMappers:
- `getFractalIndex(type)` → 0-430
- `getCompositeOpIndex(op)` → 0-7
- `getCameraModeIndex(mode)` → 0-3
- `getSliceAxisIndex(axis)` → 0-3
- `getRenderStyleIndex(style)` → 0-6

### `packUniforms(out, timeSec, params, palette, indices)` (lines 58-141)
Packs 48 floats into uniform buffer:

| Index | Content | Default |
|-------|---------|---------|
| 0-1 | resolution (w, h) | canvas size |
| 2 | time | timeSec |
| 3 | phi | phiMultiplier |
| 4-5 | camera rotation (rotX, rotY) | params |
| 6 | zoom | params.zoom |
| 7 | fractal type index | indices.fractalIdx |
| 8 | iterations | params.iterations |
| 9 | glow intensity | params.glowIntensity |
| 10 | morph speed | params.morphSpeed |
| 11 | hybrid type index | indices.hybridIdx |
| 12 | hybrid blend | 0.0 |
| 13 | box fold | 1.2 |
| 14 | sphere fold | 0.65 |
| 15 | interior cut | 0.35 |
| 16-18 | primary color RGB | palette.primary |
| 19 | tertiary type index | indices.tertiaryIdx |
| 20-22 | secondary color RGB | palette.secondary |
| 23 | tertiary blend | 0.0 |
| 24-26 | accent color RGB | palette.accent |
| 27 | composite op index | indices.compositeOpIdx |
| 28 | smooth K | 0.35 |
| 29 | warp strength | 0.3 |
| 30 | octave layers | 2 |
| 31 | camera mode index | indices.cameraModeIdx |
| 32-34 | camera position (X, Y, Z) | 0.0 |
| 35 | slice plane | 0.0 |
| 36 | headlamp power | 0.3 |
| 37 | volumetric fog | 0.15 |
| 38 | slice axis index | indices.sliceAxisIdx |
| 39 | render style index | indices.renderStyleIdx |
| 40-42 | ambient color RGB | palette.ambient |
| 43 | palette seed | 0.0 |
| 44 | palette rotation | 0.0 or 1.0 |
| 45-47 | padding | 0.0 |

## Abstract Methods
Subclasses must implement:
- `init(): Promise<boolean> | boolean`
- `render(timeSec: number, params: FractalParams): void`
- `destroy(): void`

## Critical Notes
1. **48 floats = 192 bytes** - aligned to 16 bytes for WGSL
2. **Same layout** for both GLSL and WGSL shaders
3. **Default values** prevent NaN/undefined in shaders
4. **Palette fallback**: custom → by ID → first palette
5. **Index resolution**: String types → numeric indices via fractalMappers

## Dependencies
- `types/fractal.ts` - FractalParams, ColorPalette
- `palettes.ts` - COLOR_PALETTES
- `fractalMappers.ts` - getFractalIndex, getCompositeOpIndex, etc.
