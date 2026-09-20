# Fractal Catalog System

## Structure

### fractalCatalogTypes.ts (114 lines)
Defines types and categories for canonical fractals.

#### FractalCategoryKey (10 categories)
| Key | Title | Description |
|-----|-------|-------------|
| geometric_curves | Геометрические кривые | L-системы, пространственно-заполняющие кривые |
| constructive | Конструктивные | Рекурсивное разбиение, ковры, губки |
| algebraic_complex | Алгебраические | Комплексная динамика, метод Ньютона |
| multidimensional | Многомерные | Кватернионы, 3D Мандельбульб |
| ifs_attractors | IFS и аттракторы | Системы итерируемых функций, хаос |
| stochastic | Стохастические | DLA-кластеры, перколяция, шумы |
| topological_physical | Физические | Бабочка Хофштадтера, множества Кантора |
| expanded_real | Расширенный каталог | Странные аттракторы, TPMS |
| visually_distinct | Визуально уникальные | Стили рендеринга на классических фракталах |
| mandalas_3d | 3D Мандалы | Сферические симметрии, узлы, мозаики Пенроуза |

> **Note:** `temporal_manifolds` is **not** a `FractalCategoryKey` (there are exactly 10 keys). The `temporalManifolds.ts` entries reuse existing keys, so they are only grouped as "temporal manifolds" under the `all` filter.

#### CanonicalFractal Interface
```typescript
{
  id: string;                    // 'koch-curve'
  name: string;                  // 'Кривая Коха' (Russian)
  englishName: string;           // 'Koch Curve'
  category: FractalCategoryKey;
  formula: string;               // 'L_{n+1} = (4/3) L_n'
  dimension: string;             // 'D = ln(4)/ln(3) ≈ 1.26186'
  generatorRule?: string;        // L-system rule
  description: string;           // Russian description
  phiPiRelation: string;         // Golden ratio / pi relationship
  enginePreset: {
    type: FractalType;
    hybridType?: FractalType;
    compositeOp: CompositeOp;
    hybridBlend?: number;
    warpStrength?: number;
    boxFold?: number;
    sphereFold?: number;
    octaveLayers?: number;
    zoom?: number;
    phiMultiplier?: number;
    rotX?: number;
    rotY?: number;
    iterations?: number;
    paletteSeed?: number;
    smoothK?: number;
    glowIntensity?: number;
    morphSpeed?: number;
    interiorCut?: number;
    renderStyle?: RenderStyle;
  };
}
```

### fractalFactory.ts (85 lines)
Unified builder for canonical fractals.

#### FractalBuilder Interface
Extends CanonicalFractal with optional rendering parameters:
- `zoom`, `rotX`, `rotY` - camera defaults
- `iterations` - fractal complexity
- `hybridBlend`, `warpStrength` - hybrid parameters
- `boxFold`, `sphereFold` - folding parameters
- `paletteSeed`, `renderStyle` - visual parameters

#### `createFractal(b: FractalBuilder): CanonicalFractal`
Factory function that creates CanonicalFractal with defaults:
- zoom: 2.5
- rotX: 0.4
- rotY: 0.25
- iterations: 32

### canonicalFractals.ts (31 lines)
Composes catalog from 11 modular category files:
```typescript
export const CANONICAL_FRACTALS_CATALOG: CanonicalFractal[] = [
  ...GEOMETRIC_CURVES,           // geometricCurves.ts
  ...CONSTRUCTIVE_FRACTALS,      // constructiveFractals.ts
  ...ALGEBRAIC_FRACTALS,         // algebraicFractals.ts
  ...MULTIDIMENSIONAL_FRACTALS,  // multidimensionalFractals.ts
  ...IFS_FRACTALS,               // ifsFractals.ts
  ...STOCHASTIC_FRACTALS,        // stochasticFractals.ts
  ...PHYSICAL_FRACTALS,          // physicalFractals.ts
  ...EXPANDED_REAL_FRACTALS,     // expandedRealFractals.ts
  ...VISUALLY_DISTINCT_FRACTALS, // visuallyDistinctFractals.ts
  ...MANDALAS_3D,                // mandalas3D.ts
  ...TEMPORAL_MANIFOLDS,         // temporalManifolds.ts
];
```

## Category Files (11 total)

| File | Category | Count | Examples |
|------|----------|-------|----------|
| geometricCurves.ts | geometric_curves | 20 | Koch, Lévy, Dragon, Hilbert |
| constructiveFractals.ts | constructive | 12 | Sierpinski, Menger, Cantor |
| algebraicFractals.ts | algebraic_complex | 14 | Julia, Mandelbrot, Newton |
| multidimensionalFractals.ts | multidimensional | 6 | Mandelbulb, Quaternion |
| ifsFractals.ts | ifs_attractors | 10 | Lorenz, Hénon, Clifford |
| stochasticFractals.ts | stochastic | 7 | DLA, Perlin, Brownian |
| physicalFractals.ts | topological_physical | 10 | Hofstadter, Hopf, Klein |
| expandedRealFractals.ts | expanded_real | 17 | Rössler, Duffing, TPMS |
| visuallyDistinctFractals.ts | visually_distinct | 10 | Unique visual patterns |
| mandalas3D.ts | mandalas_3d | 20 | 3D mandala patterns |
| temporalManifolds.ts | *(no dedicated key; spans existing keys)* | 19 | Tesseract, Klein bottle, 4D polytopes |

**Total: 145 canonical fractals**

> Per-file `createFractal()` counts verified against source. Note that `temporalManifolds.ts` items reuse existing `FractalCategoryKey` values, so key-based totals differ from file-based totals.

## Usage

### In FractalAtlasModal.tsx
```typescript
import { CANONICAL_FRACTALS_CATALOG } from '../data/canonicalFractals';

// Display catalog grouped by category
const grouped = CANONICAL_FRACTALS_CATALOG.reduce((acc, f) => {
  if (!acc[f.category]) acc[f.category] = [];
  acc[f.category].push(f);
  return acc;
}, {});
```

### Applying Preset
```typescript
const preset = fractal.enginePreset;
setParams(prev => ({
  ...prev,
  type: preset.type,
  hybridType: preset.hybridType,
  compositeOp: preset.compositeOp,
  zoom: preset.zoom ?? 2.5,
  // ... other preset values
}));
```

## Critical Notes
1. **431 FractalTypes** in types/fractal.ts, organized across **11 category files** in the catalog (all category data validated, 0 type mismatches remaining)
2. Multiple canonical fractals can map to same FractalType with different presets
3. `enginePreset` contains optimized parameters for each fractal
4. `phiPiRelation` explains golden ratio / pi mathematical connections
5. All descriptions and names are in Russian
6. Factory pattern eliminates duplication across category files

## Dependencies
- `types/fractal.ts` - FractalType, CompositeOp, RenderStyle
- `fractalFactory.ts` - createFractal factory function
- `fractalCatalogTypes.ts` - CanonicalFractal interface
