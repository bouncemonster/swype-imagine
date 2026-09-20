# Golden Ratio Fractal Engine — Technical Documentation

## 🎯 Overview

**431 тип фракталов** (141 core + 290 вариантов) с современным рендерингом на WebGL2/WebGPU. Движок использует ray marching с оценкой расстояния (SDF), адаптивными оптимизациями и продвинутым освещением. **v2.4.0**: Модульная шейдерная архитектура с lazy compilation.

---

## 🏗️ Architecture

### Core Components

```
src/                                          # 54 TypeScript/TSX files, ~935KB
├── shaders/
│   ├── webglShaders.ts    # GLSL ES 3.0 шейдеры (161KB, 4195 lines)
│   │   ├── VERTEX_SHADER_SOURCE (L63) + алиас GLSL_VERTEX_SHADER
│   │   ├── FRAGMENT_SHADER_SOURCE (L74-4193) — монолитный исходник: uniforms, map* функции, evalSingleFractal, sceneSDF, main()
│   │   └── GLSL_FRAGMENT_SHADER (алиас)
│   ├── webgpuShaders.ts   # WGSL шейдеры (158KB, 4069 lines, 131/431 types: 0-130, остальные → phyllotaxis fallback)
│   └── modules/           # 5 модулей вариаций + index.ts
│       ├── juliaVariations.ts  # Julia вариации 141-190 (110 lines, 6.3KB)
│       ├── ifsVariations.ts    # IFS вариации 191-240 (115 lines, 6.3KB)
│       ├── lsystemVariations.ts # L-System вариации 241-290 (130 lines, 7.1KB)
│       ├── flameVariations.ts  # Flame вариации 291-340 (114 lines, 6.2KB)
│       ├── hybridVariations.ts # Hybrid вариации 341-430 (180 lines, 12KB)
│       └── index.ts            # Ре-экспорт variation-блоков (18 lines)
├── engine/
│   ├── WebGLEngine.ts     # WebGL2 рендерер (23KB, 523 lines)
│   ├── WebGPUEngine.ts    # WebGPU рендерер (8.7KB, 238 lines)
│   ├── ShaderManager.ts   # Lazy минимальная сборка шейдера + LRU cache 8 (15KB, 327 lines) ⭐ v2.4.0
│   ├── FractalEngineBase.ts # Базовый класс, packUniforms (9.6KB, 220 lines)
│   ├── fractalMappers.ts  # Маппинги типов (22KB, 577 lines, 451 имя → 431 индекс)
│   ├── NeuroAestheticsEngine.ts # AI эстетика (44KB, 1112 lines)
│   ├── RenderDiagnostics.ts     # Диагностика (6.7KB, 261 lines)
│   ├── MathValidation.ts        # Валидация математики (1.5KB, 58 lines; вне render-путей)
│   └── UserProblemLogger.ts     # Логирование проблем (6.9KB, 238 lines)
├── components/            # 12 React components (~199KB)
│   ├── FractalCanvas.tsx  # Canvas компонент (10.5KB, 269 lines)
│   ├── ControlsPanel.tsx  # UI контролы (43KB, 873 lines)
│   └── ...                # 11 more components
├── data/
│   ├── canonicalFractals.ts  # Каталог: 145 записей (1.4KB)
│   ├── fractalCatalogTypes.ts # 10 FractalCategoryKey (4.1KB)
│   ├── compatibleHybrids.ts   # Матрица гибридов (16KB)
│   ├── fractalArchitectures.ts # Архитектуры (7.7KB)
│   ├── fractalFactory.ts      # Фабрика (2.4KB)
│   └── categories/            # 11 category files (10 FractalCategoryKey, 145 записей)
├── types/
│   └── fractal.ts         # 431 FractalType union (33KB, 576 lines)
├── hooks/
│   └── useRenderEngine.ts # Render lifecycle + loadProgress (33KB, 781 lines)
├── audio/
│   └── goldenAudio.ts     # φ-tuned audio (22KB, 556 lines)
├── palettes.ts            # 26 ручных палитр (7.6KB)
├── palettesProcedural.ts  # 640 процедурных палитр (80 тем × 8) (3.3KB)
├── App.tsx                # Main component (30KB, 717 lines)
└── main.tsx               # Entry point (725B, 18 lines)

tests/                                        # 19 test files, ~5480 lines
├── fractal-mapper-test.ts       # 521 assertions
├── shader-math-validation-test.ts # 113 assertions
├── cross-engine-parity-test.ts  # 79 assertions
├── fractal-autotest.ts          # 822 assertions
├── loader-sync-test.ts          # Синхронизация лоадера с реальным прогрессом
├── responsiveness-probe.ts      # Замер input-latency
├── browser-harness.ts           # Playwright harness
└── ...                          # 12 more test files
```

### Rendering Pipeline

```
1. Ray Generation (фрагментный шейдер; вершинный шейдер — только fullscreen-треугольник)
   ↓
2. Ray Marching (фрагментный шейдер)
   - Space Leaping (bounding sphere, радиус 6.0)
   - Adaptive Step Size (4-tier)
   - Early Ray Termination (missThreshold)
   - Max steps GLSL: 256 (close) / 192 (medium) / 128 (far) × qualityMult (0.5 + quality_level × 0.25) → 64-256
   - Max steps WGSL: 512 / 384 / 256
   ↓
3. Surface Detection
   - Hit threshold: max(max(cam_dist * 0.0003, 0.0001) * 3.0, 0.002)
   - Sign-aware binary search (20 iterations)
   - Near-miss fallback
   ↓
4. Normal Calculation (tetrahedron method)
   - Scale-adaptive epsilon
   ↓
5. Lighting & Shading
   - Ambient Occlusion (GLSL: 7 samples + IQ 4 distances; WGSL: 5 + 3)
   - Diffuse (2 dynamic lights; soft shadows 16 steps — только в GLSL)
   - Specular (Blinn-Phong)
   - Rim lighting (Fresnel)
   - Subsurface Scattering (3 samples)
   - Bounce lighting
   ↓
6. Post-processing
   - Fog (distance-based)
   - ACES Tonemapping
   - Dithering
   - Vignette
```

Оба бэкенда — полноэкранные fragment-конвейеры (compute-шейдеров нет).

### Loading Progress Pipeline (v2.4.0)

```
ShaderManager stages (parsing 10% → compiling 40% → linking 80% → complete 100%)
  ↓ WebGLEngine.onCompileProgress
useRenderEngine.loadProgress (0.12 на создании контекста → 0.12-0.92 от стадий компиляции)
  ↓ первая отрисованная рамка
loadProgress = 1.0 + onEngineReady() → CosmicLoader скрывается
```

- `CosmicLoader` полностью progress-driven (никакого фиксированного таймера на 450 мс); DOM id `cosmic-loader-overlay` / `cosmic-loader-progress`, force-dismiss через 15 с, после isReady — задержка 500 мс затем fade 700 мс
- Холодная инициализация устройства ~600 мс (D3D11), тёплые переключения ~100 мс; `KHR_parallel_shader_compile` — неблокирующий опрос (budget link 3200 / stage 800, один `gl.flush()`, никогда внутри цикла)
- Проверено `tests/loader-sync-test.ts` и `tests/responsiveness-probe.ts`

---

## 🎨 Fractal Types (431 Total: 141 core + 290 вариантов)

### Categories

| Category | Count | Range | Examples |
|----------|-------|-------|----------|
| **Classic Fractals** | 131 | 0-130 | Mandelbulb, Mandelbox, Menger, Sierpinski |
| **Mandelbrot Variations** | 10 | 131-140 | Power 3-12, Multibrot |
| **Julia Variations** | 50 | 141-190 | Julia Set, Quaternion Julia |
| **IFS Variations** | 50 | 191-240 | Kaleidoscopic IFS, Dragon Curve |
| **L-System Variations** | 50 | 241-290 | Recursive branching, Lindenmayer |
| **Flame Variations** | 50 | 291-340 | Sinusoidal, Spherical, Swirl |
| **Hybrid Variations** | 90 | 341-430 | Mandelbrot-Julia, IFS-Flame |

### Notable Fractals

**Mandelbulb** (Power 8) — Классический 3D фрактал с органическими формами  
**Mandelbox** — Коробчатый фрактал с бесконечными отражениями  
**Kaleidoscopic IFS** — Симметричный фрактал с бесконечными отражениями  
**Hybrid Mandelbox-KIFS** — Современный гибрид двух техник  
**Fractal Flame IFS** — Нелинейный пламенный фрактал  
**Julia Variations** — 50 вариантов Julia set с разными c values  
**L-System Variations** — 50 вариантов рекурсивного ветвления  
**Hybrid Variations** — 90 комбинаций разных типов фракталов

---

## ⚡ Rendering Optimizations

### 1. Space Leaping (Bounding Sphere)

**Проблема:** Лучи начинают маршировать из пустого пространства  
**Решение:** Проверка bounding sphere (радиус 6.0) перед raymarching

```glsl
float boundingRadius = 6.0;
float rayOriginDist = length(ro);
if (rayOriginDist > boundingRadius) {
  float tmin = rayOriginDist - boundingRadius;
  if (tmin > t) t = tmin * 0.9;
}
```

**Эффект:** 20-40% ускорение для далёких видов

### 2. LOD System (Level of Detail)

**Проблема:** Далёкие фракталы не нуждаются в высоком качестве  
**Решение:** Уменьшение итераций SDF на основе расстояния

```glsl
float lodFactor = clamp(cam_dist / 10.0, 0.0, 1.0);
int iterReduction = int(lodFactor * 4.0);
```

**Эффект:** До 4 меньших итераций на дальних дистанциях

### 3. Early Ray Termination

**Проблема:** Лучи, которые явно промахиваются, продолжают маршировать  
**Решение:** Отслеживание lastD и missCount, остановка после missThreshold шагов

```glsl
// Low quality: 16 misses, Medium: 24, High: 32
int missThreshold = int(16.0 + u_quality_level * 8.0);
if (i > 0 && d > 0.0 && lastD > 0.0 && d > lastD * 1.5 && d > 1.0) {
  missCount++;
  if (missCount > missThreshold) break;
}
```

**Эффект:** Значительное ускорение для фоновых лучей

### 4. Adaptive Step Size (4-tier)

**Проблема:** Фиксированный размер шага неэффективен  
**Решение:** 4-уровневый step factor

```glsl
float step_factor;
if (absD > 2.0) step_factor = 0.98;      // Very far
else if (absD > 0.5) step_factor = 0.92; // Far
else if (absD > 0.05) step_factor = 0.82;// Mid
else step_factor = 0.65;                 // Close
```

**Эффект:** Более агрессивное stepping вдали, консервативное вблизи

### 5. Distance-Scaled Minimum Step

**Проблема:** Минимальный шаг не масштабируется  
**Решение:** Масштабирование с расстоянием камеры

```glsl
float minStep = max(cam_dist * 0.00005, 0.0001);
```

**Эффект:** Предотвращает ненужно малые шаги вдали

### 6. Divergence Detection

**Проблема:** Лучи расходятся с поверхностью  
**Решение:** Обнаружение расхождения (d > lastD * 1.5)

**Эффект:** Ранняя остановка для расходящихся лучей

---

## 💡 Lighting Model

### Conceptual Design

**Принцип:** Внешние объекты (камера, примитивы) теней на фрактал не отбрасывают  
**Реализация:** Soft shadows убраны только из WGSL-конвейера; в GLSL (WebGL2) они считаются по-прежнему — `calcSoftShadow()` (16 шагов) на каждый из двух динамических огней

```wgsl
// webgpuShaders.ts:3702 — soft shadows отсутствуют
let sh1: f32 = 1.0; // No soft shadows — pure AO-based shading
```

```glsl
// webglShaders.ts:3735-3736 — self-shadowing по SDF самого фрактала
float shadow1 = calcSoftShadow(p, light1); // 16 steps
float shadow2 = calcSoftShadow(p, light2); // 16 steps
float ao = calcAO(p, n, t);
```

### Lighting Components

| Component | Weight | Purpose |
|-----------|--------|---------|
| **Ambient** | 0.35x | Base illumination |
| **Diffuse** | 2.0x | Main lighting (2 lights, ×soft shadow в GLSL) |
| **Bounce** | 1.2x | Secondary reflections |
| **Specular** | 1.5x | Highlights (Blinn-Phong) |
| **Rim** | 1.6x | Edge definition (Fresnel) |
| **SSS** | × sssBackLight | Subsurface scattering |
| **Environment reflection** | 0.6x | Fresnel-weighted (0.25 base × fresnel) |

Итоговая композиция (`webglShaders.ts:3847`): `col = ambient * 0.35 + diffuse * 2.0 + specular * 1.5 + rim * 1.6 + sssColor * sssBackLight + bounceCol * 1.2 + reflCol * 0.6;`

### Ambient Occlusion

**Метод:** GLSL — 7 samples + IQ 4 distances (всего 11 вызовов SDF); WGSL — 5 + 3  
**Цель:** Self-shadowing в складках и углублениях

```glsl
float calcAO(vec3 p, vec3 n, float t) {
  float aoScale = clamp(t * 3.0, 0.3, 1.0); // Distance-adaptive
  float occ = 0.0;
  float sca = 1.0;
  for (int i = 0; i < 7; i++) {            // 7 samples (was 5)
    float h = (0.01 + 0.11 * float(i * i) / 36.0) * aoScale;
    float d = sceneSDF(p + h * n).x;
    occ += (h - d) * sca;
    sca *= 0.72;
  }
  occ = clamp(occ, 0.0, 2.5);
  // IQ multi-distance AO: 4 distances (was 3)
  // ao1 0.003 ×0.20, ao2 0.02 ×0.35, ao3 0.08 ×0.30, ao4 0.18 ×0.15
  float multiAO = ao1 * 0.20 + ao2 * 0.35 + ao3 * 0.30 + ao4 * 0.15;
  return clamp(multiAO * (1.0 - 0.85 * occ), 0.12, 1.0);
}
```

---

## 🎨 Coloring System

### Harmonic Cosine Palette Engine

**Формула:** Golden ratio phase offsets для 3 цветов

```glsl
float phase = fract(
  normalPhase * 0.45 +      // Normal X — primary variation
  normalPhase2 * 0.30 +     // Normal Y
  normalPhase3 * 0.15 +     // Normal Z
  hashNoise * 0.15 + hashNoise2 * 0.10 + hashNoise3 * 0.05 +
  trapSmooth * 0.25 +
  curvNorm * 0.20 +
  p.y * 0.04 + p.x * 0.02 + p.z * 0.02 +
  length(p - ro) * 0.015 +
  u_time * 0.03 + seedAnim * 0.01 + 0.37
);

float w_primary = 0.5 + 0.5 * cos(TWO_PI * phase);
float w_secondary = 0.5 + 0.5 * cos(TWO_PI * (phase + 1.0 / GOLDEN_RATIO));
float w_accent = 0.5 + 0.5 * cos(TWO_PI * (phase + 2.0 / GOLDEN_RATIO));
```

**Особенности:**
- Orbit trap coloring с soft saturation
- Position-based variation (предотвращает banding)
- Curvature-based detail enhancement
- 26 палитр × 101 seed = 2626 уникальных цветовых схем

---

## 🔬 Advanced Techniques

### 1. Running Derivative Distance Estimation

**Использование:** Mandelbulb, Mandelbox, Julia 3D  
**Формула:**

```glsl
float dr = 1.0;
for (int i = 0; i < iters; i++) {
  dr = pow(r, power - 1.0) * power * dr + 1.0;
  // ... iteration ...
}
return 0.5 * log(r) * r / dr;
```

### 2. Hybrid Folding

**Использование:** Hybrid Mandelbox-KIFS  
**Техника:** Комбинация Kaleidoscopic + Mandelbox box fold + sphere fold

```glsl
// Kaleidoscopic fold
p = abs(p) - offset * 0.5;
// Mandelbox box fold
p = clamp(p, -1.0, 1.0) * 2.0 - p;
// Sphere fold
float r2 = dot(p, p);
if (r2 < 0.25) p *= 4.0;
else if (r2 < 1.0) p /= r2;
```

### 3. Nonlinear IFS Variations

**Использование:** Fractal Flame IFS  
**Техника:** sin/cos комбинации для органических форм

```glsl
z = vec3(
  sin(z.x * phi + t * 0.1) + cos(z.y * 1.3),
  sin(z.y * phi * 0.8 + t * 0.08) + cos(z.z * 1.5),
  sin(z.z * phi * 0.6 + t * 0.12) + cos(z.x * 1.7)
) * 0.5;
```

---

## 📊 Performance Metrics

### Benchmark Results

| Metric | Value |
|--------|-------|
| **Total Fractals** | 431 (141 core + 290 variants) |
| **Render Styles** | 7 |
| **Palettes** | 666 (26 ручных + 640 процедурных) × 101 seeds |
| **Max Raymarch Steps** | GLSL 256/192/128 × qualityMult (64-256); WGSL 512/384/256 |
| **Max Iterations** | 64 (clamp 6-64, adaptive per type) |
| **Zoom Range** | 0.01 - 100.0 |
| **AO Probes** | GLSL 7 + 4 (WGSL 5 + 3) |
| **Shadow Steps** | GLSL 16 × 2 lights; WGSL 0 (removed) |
| **Normal Epsilon** | Scale-adaptive |
| **Hit Threshold** | max(max(cam_dist * 0.0003, 0.0001) * 3.0, 0.002) |

### Optimization Impact

| Optimization | Speedup | Quality Impact |
|--------------|---------|----------------|
| Space Leaping | 20-40% | None |
| LOD System | 15-25% | Minimal at distance |
| Early Termination | 30-50% | None |
| Adaptive Step | 10-20% | Improved accuracy |
| Shadow Removal (только WGSL) | 25-35% | Cleaner lighting |

**Total Expected Speedup:** 30-50%

---

## 🛠️ Development

### Build & Deploy

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --commit-dirty=true

# Run tests
npx tsx tests/fractal-autotest.ts
```

### Testing

**Unit Tests (715 assertions):**

```bash
npm run test:unit
```

**Coverage:**
- **fractal-mapper-test.ts** (521 assertions): Index mapping completeness, alias mappings, render style mapping, composite op mapping, camera mode mapping, index uniqueness, index bounds
- **shader-math-validation-test.ts** (113 assertions): MathValidation logic, GLSL division-by-zero guards, NaN/Infinity protection, color mixing correctness, shader module parameter ranges, GLSL anti-patterns, SDF distance estimate properties, ray marching safety, uniform buffer consistency, mathematical constants accuracy
- **cross-engine-parity-test.ts** (79 assertions): Base class contract, uniform packing parity, shader index computation, draw call parity, uniform validation, documented feature gaps, fallback mechanism, quality level parity, performance measurement, WebGL init fallback chain, WebGPU init safety

**Integration Tests (822 assertions):**

```bash
npx tsx tests/fractal-autotest.ts
```

**Coverage:**
- 431 fractal types (уникальные индексы 0-430)
- 26 palettes × 101 seeds
- 7 render styles
- 5 audio families
- 33 share-link parameters

**Browser Tests (Playwright):**

```bash
npm run test:browser       # Headless Chromium
npm run test:browser:headed # With visible browser
```

**Full Suite:**

```bash
npm run test:all           # unit + integration + headless + benchmark + quality
```

---

## 📚 Research & References

### Scientific Papers

1. **"Accelerating Sphere Tracing"** (2018) — Over-relaxation methods
2. **"Enhanced Sphere Tracing"** (2014) — Safe over-relaxation
3. **"Non-linear Sphere Tracing"** (2019) — Deformed SDFs
4. **"Fast Sphere Tracing of Procedural Volumetric Noise"** (2025) — Implicit BVH

### Open Source Projects

1. **par-fractal** (Rust + WebGPU) — 35 fractal types, perturbation-based deep zoom
2. **Mandelbulber** — Open source 3D fractal renderer
3. **Shadertoy** — Community shaders with cone marching examples

### Techniques Implemented

- ✅ Cone Marching (researched, not yet implemented)
- ✅ Space Leaping (implemented)
- ✅ Early Ray Termination (implemented)
- ✅ Adaptive Step Size (implemented)
- ✅ LOD System (implemented)
- ✅ Running Derivative (implemented)
- ✅ Hybrid Folding (implemented)
- ✅ Nonlinear IFS (implemented)
- ✅ Lazy minimal shader assembly (ShaderManager, v2.4.0)

### Future Research

- 🔬 Over-relaxation for sphere tracing
- 🔬 Directional/Anisotropic AO
- 🔬 Compute shader pre-pass for cone marching
- 🔬 Perturbation-based deep zoom
- 🔬 GPU-driven LOD transitions

---

## 🎓 Learning Resources

### WebGPU

- [WebGPU Best Practices](https://toji.dev/webgpu-best-practices/)
- [WebGPU Compute Shaders Guide](https://threejsroadmap.com/blog/introduction-to-webgpu-compute-shaders)
- [Field Guide to TSL and WebGPU](https://blog.maximeheckel.com/posts/field-guide-to-tsl-and-webgpu/)

### Fractal Rendering

- [Syntopia: Hybrid 3D Fractals](http://blog.hvidtfeldts.net/index.php/2011/03/hybrid-3d-fractals/)
- [Mandelbulb 3D Official](https://mandelbulb3d.com/)
- [Shadertoy Fractal Collection](https://www.shadertoy.com/)

### Ray Marching

- [Inigo Quilez: Raymarching Distance Fields](https://iquilezles.org/articles/raymarchingdf/)
- [Painting with Math: Raymarching Study](https://blog.maximeheckel.com/posts/painting-with-math-a-gentle-study-of-raymarching/)

---

## 📝 Changelog

### Phase 5.1 (Current) - September 2026
- ✅ 0 TypeScript errors (strict mode пока не включён в tsconfig.json)
- ✅ Unit test suite: 715 assertions (mapper, shader-math, engine-parity)
- ✅ Fixed WebGLEngine.ts RenderingContext type narrowing (35 errors)
- ✅ Fixed data category FractalCategoryKey/FractalType mismatches (55 errors)
- ✅ Fixed Record<FractalType> incompleteness (7 errors)
- ✅ Updated all documentation to reflect current state

### Phase 5.0 - September 2026
- ✅ Added 300 new fractal types (Julia, IFS, L-System, Flame, Hybrid variations)
- ✅ Total fractals: 431 (141 core + 290 variants) — сокращения не было
- ✅ Lazy minimal per-fractal shader assembly (ShaderManager, v2.4.0)
- ✅ Max raymarch steps: GLSL 256/192/128 × qualityMult, WGSL 512/384/256
- ✅ Increased max iterations: 64 (was 48)
- ✅ Increased zoom range: 0.01-100.0 (was 0.05-32.0)
- ✅ Fixed rotation braking logic
- ✅ Updated documentation

### Phase 4.15
- ✅ Removed soft shadows from dynamic lights (актуально для WGSL; в GLSL calcSoftShadow 16 шагов вернулся)
- ✅ Camera/objects no longer cast shadows on fractal
- ✅ Only self-shadowing through AO

### Phase 4.14
- ✅ Implemented 6 major rendering optimizations
- ✅ Space Leaping, LOD, Early Termination
- ✅ Adaptive Step Size (4-tier)

### Phase 4.13
- ✅ Added 5 modern fractals (96-100)
- ✅ Mandelbulb Power 4, 12
- ✅ Hybrid Mandelbox-KIFS
- ✅ Fractal Flame IFS

### Phase 4.12
- ✅ Added 10 beautiful fractals (86-95)
- ✅ Improved lighting (brighter, more vibrant)

---

## 🤝 Contributing

This is a research project exploring the boundaries of real-time fractal rendering. Contributions welcome in:

- New fractal types (SDF functions)
- Rendering optimizations
- Coloring algorithms
- Documentation improvements

---

## 📄 License

MIT License — Free for research and commercial use

---

## 🌟 Acknowledgments

- **Inigo Quilez** — Pioneer of SDF rendering
- **Daniel White & Paul Nylander** — Creators of Mandelbulb
- **Syntopia (Mikael Hvidtfeldt Christensen)** — Hybrid fractal techniques
- **par-fractal team** — WebGPU inspiration
- **Shadertoy community** — Countless shader examples

---

**Built with ❤️ for the fractal community**

*Last updated: September 2026*
