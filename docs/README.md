# Project Documentation Index

## Core Files

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| [FractalEngineBase.ts](../src/engine/FractalEngineBase.ts) | 147 | 4.7KB | Base class, uniform packing (48 floats) |
| [fractalMappers.ts](../src/engine/fractalMappers.ts) | 505 | 19KB | String→index mappings (431 types) |
| [types/fractal.ts](../src/types/fractal.ts) | 215 | 13KB | TypeScript interfaces |
| [WebGLEngine.ts](../src/engine/WebGLEngine.ts) | 445 | 18KB | WebGL2 renderer |
| [WebGPUEngine.ts](../src/engine/WebGPUEngine.ts) | 236 | 8.8KB | WebGPU renderer |
| [useRenderEngine.ts](../src/hooks/useRenderEngine.ts) | 636 | 25KB | React hook, lifecycle, render loop |
| [webglShaders.ts](../src/shaders/webglShaders.ts) | 4654 | 187KB | GLSL shaders, 86 SDFs, 7 modes |
| [webgpuShaders.ts](../src/shaders/webgpuShaders.ts) | 3538 | 140KB | WGSL shaders |

## Detailed Analysis

- [App.md](App.md) - Main component, auto-explore, neuro-feed
- [FractalCanvas.md](FractalCanvas.md) - Canvas controls and interaction
- [NeuroAestheticsEngine.md](NeuroAestheticsEngine.md) - Taste profile, breeding, archetypes
- [UserPreferenceEngine.md](UserPreferenceEngine.md) - Interaction learning, adapted defaults
- [types-fractal.md](types-fractal.md) - Core TypeScript interfaces
- [palettes.md](palettes.md) - 24 hand-crafted + 640 procedural palettes
- [fractal-catalog.md](fractal-catalog.md) - 110+ canonical fractals, 8 categories
- [goldenAudio.md](goldenAudio.md) - 432 Hz sacred geometry audio engine
- [FractalEngineBase.md](FractalEngineBase.md) - Base class, 48-float uniform layout
- [WebGPUEngine.md](WebGPUEngine.md) - WebGPU renderer details
- [RenderDiagnostics.md](RenderDiagnostics.md) - Performance and math validation
- [MathValidation.md](MathValidation.md) - Scalar, vec3, matrix validation
- [UserProblemLogger.md](UserProblemLogger.md) - IndexedDB error tracking
- [fractalMappers-analysis.md](fractalMappers-analysis.md) - Complete type mappings
- [WebGLEngine.md](WebGLEngine.md) - WebGL2 renderer details
- [useRenderEngine.md](useRenderEngine.md) - Hook lifecycle and shortcuts
- [webglShaders.md](webglShaders.md) - Shader structure and uniforms

## Architecture

- [ARCHITECTURE.md](../ARCHITECTURE.md) - Project structure, dependencies
- [RENDERING_SYSTEM.md](../RENDERING_SYSTEM.md) - Render modes, lighting, post-processing
- [WHITEPAPER.md](../WHITEPAPER.md) - Project overview, competitor analysis

## Key Numbers

- **86** fractal types (actively used)
- **431** fractal types (total mapped)
- **7** render modes
- **8** composite operations
- **4** camera modes
- **48** uniform buffer floats
- **32** GLSL uniforms
- **54** TypeScript files
- **~650KB** source code
