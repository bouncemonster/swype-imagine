# Agent Rules — golden-ratio-webgpu-fractal-engine


<!-- AGENT-SHIELD:GLOBAL-REF:START -->
> **Global agent rules**: [C:\agent-shield\AGENTS.md](file://C:\agent-shield/AGENTS.md) — shell safety, encoding, process management.
> **Console best practices**: [C:\agent-shield\docs\CONSOLE-GUIDE.md](file://C:\agent-shield/docs/CONSOLE-GUIDE.md)
> **Cross-machine**: [C:\agent-shield\agent-docs\CROSS_MACHINE.md](file://C:\agent-shield/agent-docs/CROSS_MACHINE.md)
<!-- AGENT-SHIELD:GLOBAL-REF:END -->


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
