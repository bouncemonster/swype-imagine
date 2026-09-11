# Golden Ratio WebGPU Fractal Engine

**86 уникальных 3D фракталов** с рендерингом в реальном времени на WebGL2/WebGPU. Движок использует ray marching с оценкой расстояния (SDF), адаптивными оптимизациями и продвинутым освещением.

🌐 **Live Demo**: https://golden-ratio-fractal-engine.pages.dev/

## 🚀 Возможности

- **86 типов фракталов**: Mandelbrot, Julia, IFS, L-System, Flame, Hybrid variations
- **Двойной бэкенд**: WebGL2 (GLSL) + WebGPU (WGSL) с автоматическим переключением
- **Ray Marching**: До 640 шагов, 64 итерации фрактала
- **Адаптивный рендеринг**: LOD, space leaping, early termination
- **Продвинутое освещение**: Soft shadows, SSS, environment reflections, bounce light, god rays, motion blur
- **7 режимов рендеринга**: Solid PBR, X-Ray, Topography, Hologram, Iridescent, Quantum, Crystal
- **26+ палитр**: Harmonic cosine palette system с φ-сдвигами
- **Интерактивность**: Вращение, zoom, морфинг в реальном времени
- **Keyboard shortcuts**: 1-7 (режимы), F (камера), R (сброс), I (инерция), S (стоп)
- **Аудио**: φ-tuned ambient audio engine (Web Audio API)

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
```

## 🏗️ Архитектура

```
src/
├── shaders/
│   ├── webglShaders.ts       # GLSL ES 3.0 шейдеры (187KB, 4655 lines)
│   ├── webgpuShaders.ts      # WGSL шейдеры (140KB, 3538 lines)
│   └── modules/              # Модульная архитектура
│       ├── juliaVariations.ts    # Julia Variations 1-50
│       ├── ifsVariations.ts      # IFS Variations 1-50
│       ├── lsystemVariations.ts  # L-System Variations 1-50
│       ├── flameVariations.ts    # Flame Variations 1-50
│       ├── hybridVariations.ts   # Hybrid Variations 1-90
│       ├── sdfOperations.ts      # SDF операции
│       ├── renderModes.ts        # Режимы рендеринга (UNUSED)
│       ├── postProcessing.ts     # Постобработка (UNUSED)
│       ── advancedRendering.ts  # Продвинутые техники (UNUSED)
├── engine/
│   ├── WebGLEngine.ts        # WebGL2 рендерер (18KB)
│   ├── WebGPUEngine.ts       # WebGPU рендерер (8.8KB)
│   ├── FractalEngineBase.ts  # Базовый класс (4.7KB)
│   ├── fractalMappers.ts     # Маппинги типов (19KB)
│   ├── NeuroAestheticsEngine.ts # AI эстетика (56KB)
│   ├── UserPreferenceEngine.ts  # Пользовательские предпочтения (8.3KB)
│   ├── RenderDiagnostics.ts     # Диагностика (6.8KB)
│   ├── MathValidation.ts        # Валидация математики (6.5KB)
│   └── UserProblemLogger.ts     # Логирование проблем (7.1KB)
── components/
│   ├── FractalCanvas.tsx     # GPU canvas + interaction (9.9KB)
│   ├── ControlsPanel.tsx     # UI контролы (52KB)
│   ├── TelemetryHUD.tsx      # FPS/draw-call overlay (7.6KB)
│   ├── FractalInfoHUD.tsx    # Информация о фрактале (17KB)
│   ├── FractalScrollFeed.tsx # Горизонтальный браузер (12KB)
│   ├── FractalAtlasModal.tsx # Модальное окно атласа (33KB)
│   ├── FractalProbeHUD.tsx   # Probe overlay (5.5KB)
│   ├── ExplanationModal.tsx  # Модальное окно объяснений (16KB)
│   ├── UserProfileModal.tsx  # Профиль пользователя (18KB)
│   ├── ProjectManifestModal.tsx # Манифест проекта (8.5KB)
│   ├── CosmicLoader.tsx      # Анимация загрузки (6.8KB)
│   └── DebugOverlay.tsx      # Debug overlay (6.6KB)
├── hooks/
│   └── useRenderEngine.ts    # Render engine lifecycle (25KB)
├── data/
│   ├── canonicalFractals.ts  # Каталог фракталов (1.4KB)
│   ├── fractalCatalogTypes.ts # Типы каталога (3.4KB)
│   ├── fractalFactory.ts     # Фабрика фракталов (2.2KB)
│   └── categories/           # 10 категорий фракталов
│       ├── geometricCurves.ts       # Геометрические кривые (16KB)
│       ├── constructiveFractals.ts  # Конструктивные фракталы (8.7KB)
│       ├── algebraicFractals.ts     # Алгебраические фракталы (12KB)
│       ├── multidimensionalFractals.ts # Многомерные (3.9KB)
│       ├── ifsFractals.ts           # IFS фракталы (6.8KB)
│       ├── stochasticFractals.ts    # Стохастические (4.2KB)
│       ├── physicalFractals.ts      # Физические (6.5KB)
│       ├── expandedRealFractals.ts  # Расширенные реальные (8.2KB)
│       ├── visuallyDistinctFractals.ts # Визуально различные (6.7KB)
│       ── mandalas3D.ts            # 3D Мандалы (13KB)
├── audio/
│   └── goldenAudio.ts        # φ-tuned ambient audio (22KB)
├── types/
│   └── fractal.ts            # TypeScript интерфейсы (13KB)
├── palettes.ts               # Цветовые палитры (7.8KB)
├── palettesProcedural.ts     # Процедурные палитры (4.0KB)
├── App.tsx                   # Главный компонент (27KB)
└── main.tsx                  # Точка входа (407B)
```

**Total**: 54 TypeScript/TSX files, ~650KB source code

## 🎨 Типы фракталов (86 total)

| Категория | Количество | Диапазон | Примеры |
|-----------|------------|----------|---------|
| **Classic Fractals** | 13 | 0-12 | Mandelbulb, Mandelbox, Menger, Sierpinski |
| **Julia Variations** | 50 | 141-190 | Julia Set, Quaternion Julia |
| **IFS Variations** | 50 | 191-240 | Kaleidoscopic IFS, Dragon Curve |
| **L-System Variations** | 50 | 241-290 | Recursive branching, Lindenmayer |
| **Flame Variations** | 50 | 291-340 | Sinusoidal, Spherical, Swirl |
| **Hybrid Variations** | 90 | 341-430 | Mandelbrot-Julia, IFS-Flame |

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

- **Frontend**: React 19 + TypeScript 5.8 + Vite 6.4
- **Styling**: Tailwind CSS v4
- **Rendering**: GLSL ES 3.0 (WebGL2) / WGSL (WebGPU)
- **Deploy**: Cloudflare Pages via Wrangler
- **Build**: Bun/npm

##  License

MIT License — Free for research and commercial use

---

**Built with ❤️ for the fractal community**

*Last updated: September 2026*
