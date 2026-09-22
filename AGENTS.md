GitHub spelling: `swype-imagine` (local folder `swipe-imagine`).

# Agent Rules — swype-imagine

**Git root:** `J:\project\swipe-imagine\app` → `git@github.com:bouncemonster/swype-imagine.git`  
**Deep context:** see `AGENT.md` (architecture). This file = rules.

## Git
- Branch: `main` / `origin/main`
- Do not commit `.env`, secrets, giant binaries, or `_archive` zips
- Do not recreate a second copy of the engine beside `app/`
## Project-Specific

### Engine
- WebGL2 primary (all 431 fractal types) + WebGPU optional (131/431, rest fall back to phyllotaxis) dual renderer
- Fragment-shader (ray-marching) pipelines on both backends; no compute shaders
- Shader modules in `src/shaders/`

### Build & Test
```powershell
npm install          # Dependencies
npm run dev          # Dev server
npm run build        # Production build
npx tsc --noEmit     # Type check
npm test             # Run tests
```

### GPU Diagnostics
```powershell
nvidia-smi           # GPU status
```

