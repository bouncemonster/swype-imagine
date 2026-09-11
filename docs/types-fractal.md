# types/fractal.ts

**215 lines | Core TypeScript interfaces**

## Type Definitions

### FractalType (lines 1-87)
**86 fractal types** (phyllotaxis through svenssonAttractor)

Each type has:
- Numeric index (0-85)
- Description comment with mathematical context

### RenderStyle (lines 89-98)
**7 render modes** + 2 aliases:
| Value | Index | Description |
|-------|-------|-------------|
| solid | 0 | PBR with AO, soft shadows, SSS |
| xray | 1 | Volumetric tomography |
| topo/sonar/lidar | 2 | Topographic contours (3 aliases) |
| hologram | 3 | Chromatic aberration + scanlines |
| iridescent | 4 | Thin-film interference |
| quantum | 5 | Wave interference + magnetic fields |
| gemstone | 6 | Beer-Lambert + caustics |

### CompositeOp (lines 100-108)
**8 composite operations**:
| Value | Index | Description |
|-------|-------|-------------|
| smoothMorph | 0 | Topological continuous morphing |
| smoothUnion | 1 | smin (polynomial smooth-min) |
| smoothIntersection | 2 | smax |
| smoothCarve | 3 | ssub (tunneling) |
| domainWarp | 4 | Recursive space folding |
| quantumResonance | 5 | Multi-scale interference |
| fractalLattice | 6 | TPMS/Gyroid cellular lattice |
| goldenSpiralFold | 7 | Logarithmic spiral entanglement |

### CameraMode (lines 110-114)
**4 camera modes**:
| Value | Description |
|-------|-------------|
| orbit | Outside-in spherical orbit |
| flyThrough | Inside-out free 3D flight |
| goldenSpiral | Autonomous logarithmic dive |
| kelvinInvert | Inside-out spherical inversion |

## Interfaces

### ColorPalette (lines 116-123)
```typescript
{
  id: string;
  name: string;
  primary: [number, number, number];    // RGB [0, 1]
  secondary: [number, number, number];
  accent: [number, number, number];
  ambient: [number, number, number];
}
```

### FractalParams (lines 125-171)
**48+ rendering parameters** packed into uniform buffer:
- **Type**: type, hybridType, tertiaryType, compositeOp
- **Blend**: hybridBlend, tertiaryBlend, smoothK, warpStrength
- **Geometry**: octaveLayers, boxFold, sphereFold, interiorCut
- **Palette**: paletteId, customPalette, paletteSeed, paletteRotation
- **Animation**: iterations, phiMultiplier, morphSpeed, glowIntensity
- **Camera**: zoom, rotX, rotY, autoRotate, autoRotateSpeed, cameraMode, camPosX/Y/Z
- **Effects**: slicePlane, sliceAxis, renderStyle, headlampPower, volumetricFog
- **Performance**: targetFps, drsEnabled, detailLevel
- **Audio**: enableAudio, audioVolume, audioTuning ('phi432' | 'fibonacci' | 'zenChimes')
- **UI**: macroMode, probeActive, feedScrollMode

### TelemetryData (lines 173-184)
```typescript
{
  fps: number;
  avgFps: number;
  frameTimeMs: number;
  onePercentLow: number;
  backend: 'WebGPU (WGSL)' | 'WebGL2 (GLSL)' | 'Initializing...';
  adapterName: string;
  resolution: [number, number];
  drsScale: number;            // 0.75 - 1.0x
  targetFps: number;
  interiorDistance: number;    // Distance to nearest surface
}
```

### FractalSpecimen (lines 187-214)
**Genetic genome** for Neuro-Aesthetic Feed:
- **Identity**: id, seed, generation, name
- **Type**: type, hybridType, tertiaryType, compositeOp
- **Blend**: hybridBlend, tertiaryBlend, smoothK, warpStrength
- **Geometry**: octaveLayers, boxFold, sphereFold, interiorCut
- **Visual**: palette, iterations, phiMultiplier, morphSpeed, glowIntensity, zoom
- **Engagement**: affinityScore (0-100), dwellTimeSeconds, zoomInteractions, orbitInteractions

## Critical Notes
1. **FractalType** has 86 types, but fractalMappers.ts maps 431 total (including variations)
2. **RenderStyle** has aliases: sonar/lidar → topo (same index 2)
3. **FractalParams** is the main interface shared across all components
4. **FractalSpecimen** is the genetic genome for breeding/evolution
5. **TelemetryData** is dispatched every 250ms from useRenderEngine

## Dependencies
- Used by all components and engines
- No internal dependencies
