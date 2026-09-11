# NeuroAestheticsEngine.ts

**1299 lines | 56KB | Neuro-aesthetic recommendation engine**

## Purpose
Generates evolved fractal specimens based on user taste profile, tracks engagement, manages history.

## Key Concepts

### TasteProfile (lines 650-659)
```typescript
{
  typeAffinities: Record<FractalType, number>,  // 0.2 - 4.5
  preferredHue: number,                         // 0 - 360
  hueAffinityRange: number,                     // ~60
  preferredIterations: number,                  // 12 - 32
  preferredMorphSpeed: number,                  // 0.15 - 1.2
  preferredGlow: number,                        // 0.4 - 2.2
  totalSpecimensExplored: number,
  highestResonanceScore: number,
}
```
Stored in `localStorage` as `golden_ratio_taste_profile_v2`.

### AestheticArchetypes (lines 663-732)
5 archetypes classify fractal types:
- **geometry** - phyllotaxis, apollonian, spirals
- **complex** - mandelbulb, julia, menger
- **minimal** - gyroid, neovius, calabi-yau
- **primes** - primeSpiral, riemannZeta, gaussianPrimes
- **attractors** - lorenz, hopf, dla (default)

### COMPATIBLE_HYBRIDS (lines 38-248)
Curated compatibility matrix: each fractal type has 3-5 compatible partners and preferred composite ops.

## Key Methods

### `breedNextSpecimen(forceType?)` (lines 910-1129)
1. **Type selection**: EXPLORATION_MODE shows all 86 types sequentially first
2. **Palette evolution**: Golden angle stepping (137.5°) with 50% mutation chance
3. **Hybrid breeding**: 80% chance, 60% random partner, 40% compatibility matrix
4. **Tertiary layer**: 50% chance to add 3rd fractal
5. **Genetic parameters**: boxFold, sphereFold, smoothK, warpStrength, octaveLayers

### `registerEngagement(dwell, zoom, orbit, specimen)` (lines 1133-1190)
Calculates affinity score (0-100):
- Base: 25%
- Dwell time: +35% over 90 seconds
- Zoom interactions: +18% (logarithmic)
- Orbit interactions: +18% (logarithmic)

Updates taste profile when `dwellTime > 10s && affinityScore > 50`:
- Type affinity: +0.005 per engagement
- Hue learning: RGB → hue conversion, 3% blend
- Preferred morphSpeed, glow, iterations: 1% blend

### `boostAffinity(specimen)` (lines 1193-1201)
Manual favorite: sets affinity to 95%, type affinity +0.35.

### `getHybridRecommendations(count)` (lines 860-907)
Returns top-N hybrid combinations based on:
- User affinity for both types
- Archetype synergy multiplier
- Novelty bonus (unseen combinations)

### `suggestRenderStyle(specimenType)` (lines 1271-1297)
Archetype-based render style recommendation:
- geometry → solid, gemstone, topo
- complex → hologram, quantum, iridescent
- minimal → topo, solid, gemstone
- primes → quantum, hologram, iridescent
- attractors → xray, quantum, hologram

## Constants

### `ALL_FRACTAL_TYPES` (lines 290-408)
86 fractal types + 4D polytopes (5) + manifolds (4) + flames (13) + IFS (5) = **113 total**

### `FRACTAL_NAMES` (lines 410-528)
Russian display names for all fractal types.

### `DEFAULT_ZOOMS` (lines 530-648)
Optimal zoom level per fractal type (1.5 - 3.5 range).

## Critical Notes
1. **EXPLORATION_MODE = true**: Shows all 113 types sequentially before random selection
2. **RANDOM_HYBRID_MODE = true**: 60% chance for completely random hybrid partners
3. **RECENT_WINDOW = 20**: Tracks last 20 types to avoid repetition
4. **History limit**: 100 specimens max, FIFO
5. **Save debounce**: 2500ms before writing to localStorage

## Dependencies
- `FractalSpecimen, FractalType, ColorPalette` - types
- `COLOR_PALETTES` - hand-crafted palettes
- `generateGoldenPalette()` - procedural palette generation
