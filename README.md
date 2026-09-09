# Golden Ratio WebGPU Fractal Engine

**431 уникальный 3D фрактал** с рендерингом в реальном времени на WebGL2/WebGPU. Движок использует ray marching с оценкой расстояния (SDF), адаптивными оптимизациями и продвинутым освещением.

🌐 **Live Demo**: https://master.golden-ratio-fractal-engine.pages.dev

## 🚀 Возможности

- **431 тип фракталов**: Mandelbrot, Julia, IFS, L-System, Flame, Hybrid variations
- **Двойной бэкенд**: WebGL2 (GLSL) + WebGPU (WGSL) с автоматическим переключением
- **Ray Marching**: До 640 шагов, 64 итерации фрактала
- **Адаптивный рендеринг**: LOD, space leaping, early termination
- **Продвинутое освещение**: AO (8 probes), diffuse, specular, rim, SSS
- **26 палитр**: Harmonic cosine palette system с φ-сдвигами
- **Интерактивность**: Вращение, zoom, морфинг в реальном времени
- **Аудио**: φ-tuned ambient audio engine (Web Audio API)

## 📦 Установка и запуск

```bash
# Установка зависимостей
npm install

# Development server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=golden-ratio-fractal-engine
```

## 🏗️ Архитектура

```
src/
├── shaders/
│   ├── webglShaders.ts       # GLSL ES 3.0 шейдеры (4624 lines)
│   ├── webgpuShaders.ts      # WGSL шейдеры (3538 lines)
│   └── modules/              # Модульная архитектура
│       ├── juliaVariations.ts    # Julia Variations 1-50
│       ├── ifsVariations.ts      # IFS Variations 1-50
│       ├── lsystemVariations.ts  # L-System Variations 1-50
│       ├── flameVariations.ts    # Flame Variations 1-50
│       ├── hybridVariations.ts   # Hybrid Variations 1-90
│       ├── sdfOperations.ts      # SDF операции
│       ├── renderModes.ts        # Режимы рендеринга
│       ├── postProcessing.ts     # Постобработка
│       └── advancedRendering.ts  # Продвинутые техники
├── engine/
│   ├── WebGLEngine.ts        # WebGL2 рендерер
│   ├── WebGPUEngine.ts       # WebGPU рендерер
│   ├── FractalEngineBase.ts  # Базовый класс
│   └── fractalMappers.ts     # Маппинги типов (431 entry)
├── components/
│   ├── FractalCanvas.tsx     # GPU canvas + interaction
│   ├── ControlsPanel.tsx     # UI контролы
│   ├── TelemetryHUD.tsx      # FPS/draw-call overlay
│   └── FractalScrollFeed.tsx # Горизонтальный браузер
├── hooks/
│   └── useRenderEngine.ts    # Render engine lifecycle
├── data/
│   └── canonicalFractals.ts  # Каталог 431 фракталов
└── audio/
    └── goldenAudio.ts        # φ-tuned ambient audio
```

## 🎨 Типы фракталов (431 total)

| Категория | Количество | Диапазон | Примеры |
|-----------|------------|----------|---------|
| **Classic Fractals** | 131 | 0-130 | Mandelbulb, Mandelbox, Menger, Sierpinski |
| **Mandelbrot Variations** | 10 | 131-140 | Power 3-12, Multibrot |
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

## 🛠️ Технологии

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Rendering**: GLSL ES 3.0 (WebGL2) / WGSL (WebGPU)
- **Deploy**: Cloudflare Pages via Wrangler
- **Build**: Bun/npm

## 📄 License

MIT License — Free for research and commercial use

---

**Built with ❤️ for the fractal community**

*Last updated: September 2026*
