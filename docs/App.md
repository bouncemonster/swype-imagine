# App.tsx

**717 lines | Main application component**

## Purpose
Orchestrates all UI components, manages fractal parameters, neuro-aesthetic engine, auto-explore mode.

## State Management
- `params: FractalParams` - 48+ rendering parameters
- `currentSpecimen: FractalSpecimen` - active fractal genome
- `resonanceScore: number` - neuro-aesthetic affinity (0-100)
- `forcedBackend: 'webgpu' | 'webgl2' | 'auto'` - GPU backend selection
- `scrollMode: 'feed' | 'zoom'` - Neuro-Feed interaction mode
- `likedSpecimens: FractalSpecimen[]` - user favorites
- `loadProgress: number` - real GPU load progress 0-1 (line 162), fed by FractalCanvas and consumed by CosmicLoader

## Key Features

### Auto-Explore Mode (`autoExplore` useEffect, ~line 198-240)
- Cycles through the 113 `ALL_FRACTAL_TYPES` entries (App.tsx:24-52; 431 is the FractalType union size, not this list)
- Interval: `IS_MOBILE ? 30000 : 18000` (18s desktop / 30s mobile, line 201)
- Golden ratio stepping (`PHI_INV * length`) for maximum coverage
- Varies: type, hybrid, tertiary, composite, render style, camera, zoom, iterations
- **Render-style legibility bias**: `solid` (the true PBR form) is shown on ~50% of ticks (even `idx`), the other ~50% cycle the 6 stylized modes — because the heavily-processed modes (xray/quantum/gem/…) recolor the surface and hide the fractal's actual math, and the exploration feed is the default showcase
- Disables on user interaction (`setAutoExplore(false)`)

### Loader Progress Wiring
- `FractalCanvas onLoadProgress={setLoadProgress}` (line 584) ← `useRenderEngine.loadProgress`
- `CosmicLoader progress={loadProgress}` (line 708)
- Progress semantics: 0.12 at context acquire, 0.12–0.92 during shader parse/compile/link, 1.0 on first rendered frame

### URL Sharing (hash-sync `useEffect`, ~line 302)
- Parses `#type=...&hybrid=...&palette=...` from URL hash, plus render params: `renderStyle`, `zoom`, `morphSpeed`, `cameraMode`, `paletteSeed/paletteRotation`, `headlamp`, `fog`, `slicePlane/sliceAxis`, `audio/audioVol/audioTuning`, `drs`
- **`engine=webgpu|webgl2`** — deep-links the rendering backend (initialises `forcedBackend`); defaults to `auto` (WebGL2 primary). Useful for demos and cross-engine verification (e.g. `#type=mandelbulb&engine=webgpu&renderStyle=gemstone`)
- Loads shared fractal configuration; clears hash after loading

### Neuro-Feed Navigation (`handleNextSpecimen` / `handlePrevSpecimen`)
- `handleNextSpecimen()` - step forward in history
- `handlePrevSpecimen()` - step backward in history
- 180ms debounce to prevent rapid navigation

### Interaction Tracking (`handleInteraction`)
- `handleInteraction(zoomDelta, orbitDelta)` - reports to NeuroAestheticsEngine
- Tracks: zooming, orbiting, idle states
- 1200ms timeout to return to idle

## Component Tree
```
App
├── FractalCanvas (GPU rendering)
├── FractalScrollFeed (specimen history)
├── FractalInfoHUD (specimen info, controls)
├── FractalProbeHUD (probe reticle, macro mode)
├── UserProfileModal (taste profile, engineer mode)
├── TelemetryHUD (FPS, GPU stats) [engineer mode only]
├── ControlsPanel (parameter sliders) [engineer mode only]
├── ExplanationModal (research info)
├── FractalAtlasModal (145 canonical fractals)
├── ProjectManifestModal (project overview)
├── CosmicLoader (initialization)
└── DebugOverlay (F3 toggle)
```

## Audio Integration
- `goldenAudio.start/stop()` - toggle on `params.enableAudio`
- `goldenAudio.setTuning/setVolume()` - real-time updates
- `goldenAudio.playSpecimenTransitionChord()` - on specimen change

## Dependencies
- `NeuroAestheticsEngine` - specimen breeding, taste profiling
- `goldenAudio` - golden ratio audio synthesis
- `COLOR_PALETTES` + `PROCEDURAL_PALETTES` - 26 hand-crafted + 640 procedural = 666 color palettes
