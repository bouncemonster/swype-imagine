# fractalMappers.ts - Detailed Analysis

## Overview
**File:** `src/engine/fractalMappers.ts`  
**Size:** 577 lines, 23KB  
**Purpose:** Maps string fractal types to numeric indices for shader uniform buffer

---

## Critical Functions

### 1. getFractalIndex(type?: string): number

**Purpose:** Converts string fractal type names to numeric indices (0-430)

**Index Ranges:**
| Range | Category | Count |
|-------|----------|-------|
| 0-85 | Classic Fractals | 86 types |
| 104-108 | 4D Polytopes | 5 types |
| 109-112 | Higher-Dimensional Manifolds | 4 types |
| 113-125 | Fractal Flames | 13 types |
| 126-130 | Advanced IFS | 5 types |
| 131-140 | Mandelbrot Variations | 10 types |
| 141-190 | Julia Variations | 50 types |
| 191-240 | IFS Variations | 50 types |
| 241-290 | L-System Variations | 50 types |
| 291-340 | Flame Variations | 50 types |
| 341-430 | Hybrid Variations | 90 types |

**Total:** 431 types — all active in types/fractal.ts, WebGL shader, and engine

**Default behavior:** Unknown types return 0 (phyllotaxis)

**Backward-compat alias cases (near the end of `getFractalIndex`, ~lines 137-156):**
- 'burningShip' → 27 (burningShip3D)
- 'chenAttractor' → 73 (rosslerAttractor)
- 'mandala' → 0 (phyllotaxis)
- 'penroseTiling' → 10 (quasicrystal)
- And 15 more aliases for backward compatibility

---

### 2. getCompositeOpIndex(op?: string): number

**Purpose:** Maps composite operation strings to indices (0-7)

**Mappings:**
```
'smoothMorph' → 0
'smoothUnion' → 1 (default)
'smoothIntersection' → 2
'smoothCarve' → 3
'domainWarp' → 4
'quantumResonance' → 5
'fractalLattice' → 6
'goldenSpiralFold' → 7
```

**Default:** Returns 1 (smoothUnion) - most common operation

---

### 3. getCameraModeIndex(mode?: string): number

**Purpose:** Maps camera mode strings to indices (0-3)

**Mappings:**
```
'orbit' → 0 (default)
'flyThrough' → 1
'goldenSpiral' → 2
'kelvinInvert' → 3
```

**Default:** Returns 0 (orbit) - safest for most fractals

---

### 4. getSliceAxisIndex(axis?: string): number

**Purpose:** Maps slice axis strings to indices (0-3)

**Mappings:**
```
'golden' → 0 (default)
'x' → 1
'y' → 2
'z' → 3
```

**Default:** Returns 0 (golden axis) - most visually interesting

---

### 5. getRenderStyleIndex(style?: string): number ️ CRITICAL

**Purpose:** Maps render style strings to indices (0-9)

**CRITICAL:** Index 39 in uniform buffer contains this value and switches between 10 render modes in shader

**Mappings:**
```
'solid' → 0 (default)
'xray' → 1
'topo'/'sonar'/'lidar' → 2 (3 aliases for same mode)
'hologram' → 3
'iridescent' → 4
'quantum' → 5
'gemstone' → 6
'wireframe'/'lattice' → 7
'heatmap'/'thermal' → 8
'neon' → 9
```

**Default:** Returns 0 (solid) - standard PBR rendering

---

## Architecture Notes

### Why numeric indices?
- Shader uniform buffer uses Float32Array (48 floats)
- String types cannot be passed to GPU
- Numeric indices are compact and fast to compare in GLSL

### Default values rationale
- **Fractal:** 0 (phyllotaxis) - simplest fractal, always works
- **Composite:** 1 (smoothUnion) - most visually appealing
- **Camera:** 0 (orbit) - safest, works for all fractals
- **Slice:** 0 (golden) - most interesting visual results
- **Render:** 0 (solid) - standard PBR, no special effects

### Fallback mappings purpose
The alias `case`s near the end of `getFractalIndex` map old type names that were used before standardization. This prevents black screens when loading saved presets with old type names.

---

## Dependencies

**Imported by:**
- `FractalEngineBase.ts` - uses all 5 mapping functions
- `WebGLEngine.ts` - indirectly via FractalEngineBase
- `WebGPUEngine.ts` - indirectly via FractalEngineBase
- `useRenderEngine.ts` - indirectly via engines

**No imports** - this file is self-contained (pure functions)

---

## Known Issues

1. **Historical note (resolved):** this file was written when `types/fractal.ts` had 86 types; the union now has 431 members and the mappings cover them
2. **Silent fallback:** Unknown types return 0 without warning
3. **Duplicate indices:** Some fallback mappings point to same index (e.g., 'chenAttractor' and 'rosslerAttractor' both → 73)

---

## Testing Recommendations

1. Test all 431 types from types/fractal.ts return correct indices
2. Test fallback mappings return expected indices
3. Test unknown strings return 0 (not crash)
4. Test render style aliases ('topo', 'sonar', 'lidar' all → 2)
