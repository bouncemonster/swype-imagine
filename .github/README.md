<div align="center">

# Golden Ratio Fractal Engine

**Explore mathematical worlds through light, colour and motion.**

Real-time fractals · WebGL2 rendering · Optional WebGPU · Interactive palettes and ambient audio

[Explore the demo](https://fractal.simundis.com/) · [Quick start](#run-locally) · [Architecture](../ARCHITECTURE.md) · [Technical handbook](../README.md)

</div>

![Mandelbulb illustration already included in the project's screenshot assets](assets/hero-mandelbulb.png)

A browser-based fractal explorer built with **React, TypeScript and Vite**. The engine combines signed-distance evaluation and ray marching with interactive camera controls, adaptive rendering, multiple visual styles and a personalization layer.

## The experience

| Explore | Adjust | Understand |
| --- | --- | --- |
| Browse the fractal catalog and its variations. | Change palettes, rendering styles, camera and motion. | Use the atlas, information overlays and rendering diagnostics. |
| Move through mathematical forms in real time. | Pair the visuals with optional ambient audio. | Inspect the documented shader, mapping and engine architecture. |

The documented catalog contains **431 fractal types** and **10 rendering styles**. Catalog definitions and the rendering contracts remain the reference for exact coverage; the counts are not a benchmark or a guarantee of identical output on every device.

## Two renderers, different coverage

| Backend | Role | Documented coverage |
| --- | --- | --- |
| **WebGL2** | Primary rendering path. | All 431 documented fractal types. |
| **WebGPU** | Optional rendering path. | 131 of the 431 types; other types use the documented phyllotaxis fallback. |

Both paths are fragment-shader ray-marching pipelines, not compute-shader implementations. Selecting WebGPU does **not** mean full feature parity. GPU capability, browser support and scene complexity affect the available experience and performance.

Read [RENDERING_SYSTEM.md](../RENDERING_SYSTEM.md) before changing backend selection or interpreting a cross-engine comparison.

## Run locally

With Node.js and npm available, run from the repository root:

```sh
git clone https://github.com/bouncemonster/swype-imagine.git
cd swype-imagine
npm ci
npm run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:3000/`. The explicit host keeps this local session bound to loopback; the package's unmodified `dev` script otherwise binds to all interfaces.

For a production build:

```sh
npm run build
npm run preview -- --host 127.0.0.1
```

Use the preview URL printed by Vite. A local preview is not a Cloudflare deployment.

## Verify a change

| Command | What it invokes |
| --- | --- |
| `npm run lint` | TypeScript checking (`tsc --noEmit`), despite the script name. |
| `npm run test:unit` | Mapper, shader-math and cross-engine parity tests. |
| `npm run test` | Integration autotest. |
| `npm run test:headless` | Headless fractal tests. |
| `npm run test:browser` | Browser tests. |
| `npm run test:mobile` | Mobile/coarse-pointer design audit. |
| `npm run test:benchmark` | Performance benchmark. |
| `npm run test:all` | Unit, integration, headless, benchmark and quality scripts. |

**`test:all` does not include `test:browser` or `test:mobile` in the current package manifest.** Run those separately when a change affects browser behavior or touch interaction. Browser-dependent checks require their browser environment; a static build is not visual proof.

Test totals, bundle sizes and audit screenshots in the technical handbook are recorded snapshots. This landing page deliberately does not turn those historical numbers into permanent green status badges.

## Find the right document

| Work area | Reference |
| --- | --- |
| System boundaries and engine structure | [Architecture](../ARCHITECTURE.md). |
| Shader and renderer behavior | [Rendering system](../RENDERING_SYSTEM.md), [technical documentation](../TECHNICAL_DOCS.md). |
| Visual language and interface decisions | [Design contract](../DESIGN.md), [design QA](../design.qa.yaml). |
| Product and mathematical context | [Product catalog](../PRODUCT_CATALOG.md), [whitepaper](../WHITEPAPER.md). |
| Detailed catalog, controls and historical measurements | [Technical handbook](../README.md), [documentation directory](../docs/). |
| Contributor workflow | [Agent rules](../AGENTS.md), [pull-request checklist](pull_request_template.md). |
| Security and community | [Security policy](SECURITY.md), [code of conduct](CODE_OF_CONDUCT.md). |

## More from the existing gallery

[Apollonian gasket](assets/gallery-apollonian.png) · [Quasicrystal](assets/gallery-quasicrystal.png) · [Hofstadter butterfly](assets/gallery-hofstadter.png) · [Holographic gyroid](assets/gallery-gyroid-holo.png)

These are existing repository assets, not new screenshots captured by this documentation update.

## Deployment and licensing

The project documents Cloudflare Pages deployment through `npm run deploy:cf`. Publishing requires the appropriate Cloudflare account and is separate from reading, building or improving this repository's documentation.

Released under the [MIT License](../LICENSE). Existing notices remain unchanged.

---

**По-русски:** интерактивный фрактальный движок с палитрами, режимами освещения, управлением камерой и атмосферным звуком. Основной рендерер — WebGL2; поддержка WebGPU частичная. Подробные русскоязычные описания, каталог и история измерений сохранены в [техническом README](../README.md).
