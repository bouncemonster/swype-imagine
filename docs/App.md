# App.tsx

**639 lines | Main application component**

## Purpose
Orchestrates all UI components, manages fractal parameters, neuro-aesthetic engine, auto-explore mode.

## State Management
- `params: FractalParams` - 48+ rendering parameters
- `currentSpecimen: FractalSpecimen` - active fractal genome
- `resonanceScore: number` - neuro-aesthetic affinity (0-100)
- `forcedBackend: 'webgpu' | 'webgl2' | 'auto'` - GPU backend selection
- `scrollMode: 'feed' | 'zoom'` - Neuro-Feed interaction mode
- `likedSpecimens: FractalSpecimen[]` - user favorites

## Key Features

### Auto-Explore Mode (lines 104-172)
- Cycles through 86 fractal types every 18 seconds
- Golden ratio stepping (`PHI_INV * length`) for maximum coverage
- Varies: type, hybrid, tertiary, composite, render style, camera, zoom, iterations
- Disables on user interaction (`setAutoExplore(false)`)

### URL Sharing (lines 231-297)
- Parses `#type=...&hybrid=...&palette=...` from URL hash
- Loads shared fractal configuration
- Clears hash after loading

### Neuro-Feed Navigation (lines 369-387)
- `handleNextSpecimen()` - step forward in history
- `handlePrevSpecimen()` - step backward in history
- 180ms debounce to prevent rapid navigation

### Interaction Tracking (lines 347-367)
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
├── FractalAtlasModal (33 canonical fractals)
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
- `COLOR_PALETTES` + `PROCEDURAL_PALETTES` - 86+ color palettes
