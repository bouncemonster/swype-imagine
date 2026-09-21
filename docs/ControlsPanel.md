# ControlsPanel.tsx

**874 lines | 43.3KB | Main control panel with 8 tabs**

## Purpose
Full-featured engineering control panel for all rendering parameters. Organized into 8 tabs covering architectures, composition, camera, palettes, morphology, GPU, audio, and neuro-aesthetics.

## Props Interface (lines 17-31)
```typescript
interface ControlsPanelProps {
  params: FractalParams;
  onParamsChange: (updater: (prev: FractalParams) => FractalParams) => void;
  onSelectFractalType?: (type: FractalType) => void;
  onCaptureScreenshot: () => void;
  onToggleFullscreen: () => void;
  onToggleInfoModal: () => void;
  onOpenAtlasModal?: () => void;
  activeBackend: string;
  forcedBackend: 'webgpu' | 'webgl2' | 'auto';
  onSelectBackend: (backend: 'webgpu' | 'webgl2' | 'auto') => void;
  onClose: () => void;
  tasteProfile?: TasteProfile;
  onSaveToFeed?: () => void;
}
```

## 8 Tabs Structure

### Tab 1: Architectures (Топологии) - lines 209-271
**24 mathematical architectures** grouped into 5 categories:
- **golden** (5): phyllotaxis, mandelbulb, icosahedral, fibonacciSnowflake, poincareSphere
- **primes** (4): primeSpiral, gaussianPrimes, riemannZeta, eulerTotientSpiral
- **tpms** (3): gyroid, neoviusMinimal, spiralTunnel
- **manifolds** (8): quaternionJulia, quaternionMandelbrot, hopfFibration, calabiYau, cliffordTorus4D, cliffordKlein, kleinianLimit, quasicrystal
- **classic** (4): mandelbox, menger, sierpinskiOcta, apollonian

Each architecture has:
- `id`: FractalType
- `label`: Russian display name
- `desc`: Description
- `formula`: Mathematical formula
- `group`: Category

Sub-filter bar: All (24), φ Golden, Primes, TPMS, 4D Topology, Classic

### Tab 2: Composition (Гибриды) - lines 273-379
- **Composite Op**: 8 operations (ALL_COMPOSITE_OPS) with symbols
- **Secondary Hybrid**: Type selector + blend slider (0-1)
- **Tertiary Geometry**: Type selector + blend slider (0-1)
- **Smooth Radius k**: smoothK slider (0.01-1.2)
- **Domain Warp**: warpStrength slider (0-1)

### Tab 3: Camera & Inside (Камера/Внутри) - lines 381-570
- **Camera Mode**: 4 modes (orbit, flyThrough, goldenSpiral, kelvinInvert)
- **Auto-rotation toggle** (`toggle-auto-rotate-btn`): start/stop button bound to `params.autoRotate` via `onParamsChange` — shows Pause/"Вращается" when on, RotateCw/"Остановлено" when off; mirrors the `S` key and the accumulator-driven resume-ease in `useRenderEngine` (two-way, persistent)
- **Render Style**: 10 modes (solid, xray, topo, hologram, iridescent, quantum, gemstone, wireframe, heatmap, neon)
- **Slice Plane**: Multi-axis tomography (golden, x, y, z) + position slider
- **Probe HUD**: Toggle for topological probe
- **Macro Mode**: Ultra-macro 10⁻⁴ ray march step
- **Headlamp Power**: 0-2x intensity
- **Volumetric Fog**: 0-2x density
- **Interior Cut**: 0-100% chamber carving

### Tab 4: Palettes (Палитры) - lines 572-610
- **26 hand-crafted palettes** from COLOR_PALETTES
- Shows primary/secondary/accent color circles
- Click to select and set customPalette

### Tab 5: Morphology φ (Морфология) - lines 612-695
- **φ Multiplier**: 1.4-1.8 (step 0.001)
- **Iterations**: 8-36 (fractal depth)
- **Morph Speed**: 0.05-2.0x
- **Box Fold**: 0.5-2.5 (cubic fold)
- **Sphere Fold**: 0.2-1.5 (spherical fold)

### Tab 6: GPU 60-250 FPS - lines 697-767
- **Target FPS**: 250, 165, 144, 120, 60, Uncapped
- **DRS (Dynamic Resolution Scaling)**: Toggle on/off
- **Backend Selection**: Auto, WebGPU (WGSL), WebGL2 (GLSL)
- Shows active backend and anti-banding status

### Tab 7: Audio φ (Звук) - lines 769-839
- **Master Toggle**: Enable/disable audio
- **Volume**: 0-100%
- **Tuning Mode**: 3 modes
  - phi432: 432 Hz golden ratio
  - fibonacci: Pythagorean tuning
  - zenChimes: Resonant overtones & bells
- Sync info: Filter opens when diving inside, stereo pans with rotation

### Tab 8: Neuro-Taste (Нейро-Вкус) - lines 841-870
- **Total Specimens Explored**: Count from tasteProfile
- **Highest Resonance Score**: Max affinity %
- **Preferred Iterations**: Learned depth
- **Preferred Hue**: Favorite color (0-360°)
- Info: Neuro-engine learns from dwell time, zoom depth, manual adjustments

## Top Header (lines 57-131)
- Pulse indicator + "Режим Инженера" title
- Badge: "24 Топологии"
- Backend info: "WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"
- Buttons: Atlas, Save to Feed, Screenshot, Fullscreen, Math Info, Close

## Navigation Tabs (lines 133-207)
8 tabs in 4-column grid:
1. Топологии (Architectures)
2. Гибриды (Composition)
3. Камера/Внутри (Camera)
4. Палитры (Palettes)
5. Морфология φ (Morphology)
6. 60-250 FPS (GPU)
7. Звук φ (Audio)
8. Нейро-Вкус (Neuro)

## Critical Notes
1. **Russian UI**: All labels and descriptions in Russian
2. **Responsive**: Mobile-first design, scrollable on small screens
3. **State management**: `activeTab` and `selectedGroup` as local state
4. **Callback pattern**: `onParamsChange` receives updater function
5. **Optional callbacks**: `onSelectFractalType`, `onOpenAtlasModal`, `onSaveToFeed`
6. **Color preview**: Palettes show RGB circles
7. **Formula display**: Each architecture shows mathematical formula
8. **Group filtering**: Architectures filtered by 5 categories

## Dependencies
- `FractalParams`, `FractalType`, `CompositeOp`, `CameraMode` from types
- `TasteProfile`, `ALL_FRACTAL_TYPES`, `FRACTAL_NAMES`, `COMPOSITE_OP_NAMES`, `COMPOSITE_OP_SYMBOLS`, `ALL_COMPOSITE_OPS` from NeuroAestheticsEngine
- `COLOR_PALETTES` from palettes
- `lucide-react` icons (20+ icons)
