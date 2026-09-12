# Golden Ratio WebGPU Fractal Engine

**431 уникальный 3D фрактал** с рендерингом в реальном времени на WebGL2/WebGPU. Движок использует ray marching с оценкой расстояния (SDF), адаптивными оптимизациями и продвинутым освещением.

🌐 **Live Demo**: https://golden-ratio-fractal-engine.pages.dev/

## 🚀 Возможности

- **431 тип фракталов**: Mandelbrot, Julia, IFS, L-System, Flame, Hybrid variations, Chaotic attractors, Algebraic fractals
- **Двойной бэкенд**: WebGL2 (GLSL) + WebGPU (WGSL) с автоматическим переключением
- **Ray Marching**: До 640 шагов, 64 итерации фрактала
- **Адаптивный рендеринг**: LOD, space leaping, early termination
- **Продвинутое освещение**: Soft shadows, SSS, environment reflections, bounce light, god rays, motion blur
- **7 режимов рендеринга**: Solid PBR, X-Ray, Topography, Hologram, Iridescent, Quantum, Crystal
- **26+ палитр**: Harmonic cosine palette system с φ-сдвигами
- **Интерактивность**: Вращение, zoom, морфинг в реальном времени
- **Keyboard shortcuts**: 1-7 (режимы), F (камера), R (сброс), I (инерция), S (стоп)
- **Аудио**: φ-tuned ambient audio engine (Web Audio API)
- **Type Safety**: 0 ошибок TypeScript, строгая типизация всех 431 типов
- **Тестирование**: 713 unit tests + 822 integration tests + browser tests

## 📦 Установка и запуск

```bash
# Установка зависимостей
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Deploy to Cloudflare Pages
npm run deploy:cf

# Запуск тестов
npm run test:unit      # Unit tests (713 assertions)
npm run test           # Integration tests (822 assertions)
npm run test:browser   # Playwright browser tests
npm run test:all       # Full test suite
npm run lint           # TypeScript type check
```

## 🏗️ Архитектура

```
src/
├── shaders/
│   ├── webglShaders.ts       # GLSL ES 3.0 шейдеры (163KB, 4386 lines)
│   ├── webgpuShaders.ts      # WGSL шейдеры (137KB, 3545 lines)
│   └── modules/              # kkrieger-сжатые модули (649 lines total)
│       ├── juliaVariations.ts    # Julia Variations 1-50 (110 lines, 12x compression)
│       ├── ifsVariations.ts      # IFS Variations 1-50 (115 lines, 11x compression)
│       ├── lsystemVariations.ts  # L-System Variations 1-50 (130 lines, 11x compression)
│       ├── flameVariations.ts    # Flame Variations 1-50 (114 lines, 11x compression)
│       └── hybridVariations.ts   # Hybrid Variations 1-90 (180 lines, 15x compression)
├── engine/
│   ├── WebGLEngine.ts        # WebGL2 рендерер (20KB, 470 lines)
│   ├── WebGPUEngine.ts       # WebGPU рендерер (8.8KB, 236 lines)
│   ├── FractalEngineBase.ts  # Базовый класс (5.2KB, 153 lines)
│   ├── fractalMappers.ts     # Маппинги типов (23KB, 578 lines, 473 mapped types)
│   ├── NeuroAestheticsEngine.ts # AI эстетика (44KB, 1121 lines)
│   ├── UserPreferenceEngine.ts  # Пользовательские предпочтения (8.3KB, 251 lines)
│   ├── RenderDiagnostics.ts     # Диагностика (6.8KB, 262 lines)
│   ├── MathValidation.ts        # Валидация математики (6.9KB, 270 lines)
│   └── UserProblemLogger.ts     # Логирование проблем (7.1KB, 239 lines)
├── components/
│   ├── FractalCanvas.tsx     # GPU canvas + interaction (10KB, 263 lines)
│   ├── ControlsPanel.tsx     # UI контролы (44KB, 876 lines)
│   ├── TelemetryHUD.tsx      # FPS/draw-call overlay (7.6KB, 171 lines)
│   ├── FractalInfoHUD.tsx    # Информация о фрактале (17KB, 389 lines)
│   ├── FractalScrollFeed.tsx # Горизонтальный браузер (12KB, 281 lines)
│   ├── FractalAtlasModal.tsx # Модальное окно атласа (33KB, 574 lines)
│   ├── FractalProbeHUD.tsx   # Probe overlay (5.5KB, 128 lines)
│   ├── ExplanationModal.tsx  # Модальное окно объяснений (16KB, 207 lines)
│   ├── UserProfileModal.tsx  # Профиль пользователя (18KB, 363 lines)
│   ├── ProjectManifestModal.tsx # Манифест проекта (8.5KB, 176 lines)
│   ├── CosmicLoader.tsx      # Анимация загрузки (6.8KB, 174 lines)
│   └── DebugOverlay.tsx      # Debug overlay (6.6KB, 158 lines)
├── hooks/
│   └── useRenderEngine.ts    # Render engine lifecycle (28KB, 683 lines)
├── data/
│   ├── canonicalFractals.ts  # Каталог фракталов (1.4KB, 31 lines)
│   ├── fractalCatalogTypes.ts # Типы каталога (4.1KB, 115 lines)
│   ├── fractalFactory.ts     # Фабрика фракталов (2.4KB, 86 lines)
│   ├── compatibleHybrids.ts  # Матрица совместимости гибридов (16KB, 250 lines)
│   ├── fractalArchitectures.ts # Данные архитектуры (7.7KB, 194 lines)
│   └── categories/           # 10 категорий фракталов
│       ├── geometricCurves.ts       # Геометрические кривые (16KB, 298 lines)
│       ├── constructiveFractals.ts  # Конструктивные фракталы (8.6KB, 182 lines)
│       ├── algebraicFractals.ts     # Алгебраические фракталы (12KB, 210 lines)
│       ├── multidimensionalFractals.ts # Многомерные (3.9KB, 96 lines)
│       ├── ifsFractals.ts           # IFS фракталы (6.8KB, 152 lines)
│       ├── stochasticFractals.ts    # Стохастические (4.2KB, 113 lines)
│       ├── physicalFractals.ts      # Физические (6.5KB, 152 lines)
│       ├── expandedRealFractals.ts  # Расширенные реальные (8.1KB, 250 lines)
│       ├── visuallyDistinctFractals.ts # Визуально различные (6.7KB, 162 lines)
│       └── mandalas3D.ts            # 3D Мандалы (13KB, 313 lines)
├── audio/
│   └── goldenAudio.ts        # φ-tuned ambient audio (22KB)
├── types/
│   └── fractal.ts            # TypeScript интерфейсы (33KB, 576 lines)
├── palettes.ts               # Цветовые палитры (7.8KB, 213 lines)
├── palettesProcedural.ts     # Процедурные палитры (4.0KB, 114 lines)
├── App.tsx                   # Главный компонент (28KB, 657 lines)
└── main.tsx                  # Точка входа (407B, 12 lines)
```

**Total**: 64 TypeScript/TSX files (51 src + 13 tests), ~1052KB source code

## 🎨 Типы фракталов (431 total)

| Категория | Количество | Диапазон | Примеры |
|-----------|------------|----------|--------|
| **Classic Fractals** | 13 | 0-12 | Mandelbulb, Mandelbox, Menger, Sierpinski |
| **Classic Variations** | 50 | 13-140 | Mandelbrot powers, Julia variations |
| **Julia Variations** | 50 | 141-190 | Julia Set, Quaternion Julia |
| **IFS Variations** | 50 | 191-240 | Kaleidoscopic IFS, Dragon Curve |
| **L-System Variations** | 50 | 241-290 | Recursive branching, Lindenmayer |
| **Flame Variations** | 50 | 291-340 | Sinusoidal, Spherical, Swirl |
| **Hybrid Variations** | 90 | 341-430 | Mandelbrot-Julia, IFS-Flame |
| **Total** | **431** | | All rendered with mathematical precision |

## ⚡ Производительность

| Параметр | Значение |
|----------|----------|
| **Max Raymarch Steps** | 640 (close), 480 (medium), 320 (far) |
| **Max Iterations** | 64 (адаптивно по типу) |
| **Zoom Range** | 0.01 - 100.0 |
| **AO Probes** | 8 + 3 |
| **Hit Threshold** | cam_dist * 0.0003 + 0.0001 |
| **SDF Calls/Pixel** | ~170-270 (with all effects) |

## 🛠️ Технологии

- **Frontend**: React 19 + TypeScript 5.8 + Vite 6.2
- **Styling**: Tailwind CSS v4
- **Rendering**: GLSL ES 3.0 (WebGL2) / WGSL (WebGPU)
- **Deploy**: Cloudflare Pages via Wrangler
- **Build**: Bun/npm
- **Testing**: Playwright + custom test harness, 713 unit + 822 integration assertions
- **Type Safety**: 0 TypeScript errors, strict mode

## 🧪 Тестирование

| Suite | Assertions | Description |
|-------|------------|-------------|
| **fractal-mapper-test** | 521 | Index mapping completeness, aliases, render styles, composite ops, camera modes |
| **shader-math-validation-test** | 113 | Division-by-zero guards, NaN protection, color mixing, SDF properties, uniform consistency |
| **cross-engine-parity-test** | 79 | WebGL/WebGPU uniform packing, draw calls, fallback, quality levels |
| **fractal-autotest** | 822 | SDF functions, palettes, render styles, audio, share links |
| **Browser tests** | Visual | Playwright + Chromium visual regression |

##  License

MIT License — Free for research and commercial use

---

**Built with ❤️ for the fractal community**

*Last updated: September 2026*
