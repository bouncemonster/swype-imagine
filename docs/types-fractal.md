# types/fractal.ts

**576 lines | Core TypeScript interfaces**

## Type Definitions

### FractalType (lines 1-444)
**431 fractal types** (phyllotaxis through hybridVariant90)

Each type has:
- Numeric index (0-430)
- Description comment with mathematical context

### RenderStyle (lines 446-458)
**12 members / 10 unique indices** (topo/sonar/lidar share index 2):
| Value | Index | Description |
|-------|-------|-------------|
| solid | 0 | PBR with AO, soft shadows, SSS |
| xray | 1 | Volumetric tomography |
| topo/sonar/lidar | 2 | Topographic contours (3 aliases) |
| hologram | 3 | Chromatic aberration + scanlines |
| iridescent | 4 | Thin-film interference |
| quantum | 5 | Wave interference + magnetic fields |
| gemstone | 6 | Beer-Lambert + caustics |
| wireframe | 7 | Coordinate-lattice skeleton (DE fold space, fwidth-AA) |
| heatmap | 8 | Blackbody escape-time density (iteration-count colormap) |
| neon | 9 | Emissive Fresnel rim contour on near-black |

### CompositeOp (lines 460-468)
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

### CameraMode (lines 467-471)
**4 camera modes**:
| Value | Description |
|-------|-------------|
| orbit | Outside-in spherical orbit |
| flyThrough | Inside-out free 3D flight |
| goldenSpiral | Autonomous logarithmic dive |
| kelvinInvert | Inside-out spherical inversion |

## Interfaces

### ColorPalette (lines 477-484)
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

### FractalParams (lines 486-532)
**43 fields** (interface; the "48" often quoted elsewhere is the uniform-buffer float count, a different thing):
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

### TelemetryData (lines 534-545)
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

### FractalSpecimen (lines 548-575)
**Genetic genome** for Neuro-Aesthetic Feed:
- **Identity**: id, seed, generation, name
- **Type**: type, hybridType, tertiaryType, compositeOp
- **Blend**: hybridBlend, tertiaryBlend, smoothK, warpStrength
- **Geometry**: octaveLayers, boxFold, sphereFold, interiorCut
- **Visual**: palette, iterations, phiMultiplier, morphSpeed, glowIntensity, zoom
- **Engagement**: affinityScore (0-100), dwellTimeSeconds, zoomInteractions, orbitInteractions

## Critical Notes
1. **FractalType** has 431 members (indices 0-430); fractalMappers.ts maps all of them (plus aliases)
2. **RenderStyle** has aliases: sonar/lidar → topo (same index 2); fractalMappers additionally maps pbr → 0, topography → 2, plasma → 5, crystal → 6
3. **FractalParams** is the main interface shared across all components
4. **FractalSpecimen** is the genetic genome for breeding/evolution
5. **TelemetryData** is dispatched every 250ms from useRenderEngine

## Dependencies
- Used by all components and engines
- No internal dependencies
