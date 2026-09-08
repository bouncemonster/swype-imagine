# Shader Refactoring Plan

## Current State
- `webglShaders.ts`: 3536 lines (GLSL)
- `webgpuShaders.ts`: 3534 lines (WGSL)
- **Total**: ~7000 lines of shader code
- **Problem**: Massive duplication between GLSL and WGSL versions

## Refactoring Strategy

### Phase 1: Extract Common Math Functions (Safe)
Create `src/shaders/modules/mathUtils.ts`:
- `rot2D()`, `rotateVec()`, `hash()`, `noise()`
- `smoothMin()`, `smoothUnion()`, `smoothIntersection()`
- Constants: PI, TWO_PI, GOLDEN_RATIO, GOLDEN_ANGLE

### Phase 2: Extract Fractal Mapping Functions (Medium Risk)
Create `src/shaders/modules/fractalMaps.ts`:
- `mapPhyllotaxis()`, `mapMandelbulb()`, `mapJulia()`
- `mapMandelbox()`, `mapSierpinski()`, etc.
- Each function in both GLSL and WGSL variants

### Phase 3: Extract Render Modes (High Risk)
Already partially done in `src/shaders/modules/`:
- `renderModes.ts` (GLSL)
- `universalRender.ts` (GLSL + WGSL)
- Need to consolidate and ensure consistency

### Phase 4: Generate Shaders Programmatically (Advanced)
Create shader generator that outputs both GLSL and WGSL from single source:
- Pros: Single source of truth
- Cons: Complex, may break existing functionality

## Recommended Approach
**Phase 1 only** - Extract math utilities, keep fractal maps and render logic in main shader files. This is the safest approach that reduces duplication without risking functionality.

## Estimated Impact
- Phase 1: Reduce ~200 lines of duplication
- Phase 2: Reduce ~500 lines of duplication
- Phase 3: Already done (universal render)
- Phase 4: Too risky for current state

## Decision Needed
Which phase to implement? Recommend Phase 1 for safety.
