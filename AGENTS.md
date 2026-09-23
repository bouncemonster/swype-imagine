GitHub spelling: `swype-imagine` (local folder `swype-imagine`).

# Agent Rules — swype-imagine

**Git root:** `J:\project\swype-imagine\app` → `git@github.com:bouncemonster/swype-imagine.git`  
**Deep context:** see `AGENT.md` (architecture). This file = rules.

## Git
- Branch: `main` / `origin/main`
- Do not commit `.env`, secrets, giant binaries, or `_archive` zips
- Do not recreate a second copy of the engine beside `app/`
## Project-Specific

- Design system contract: `DESIGN.md` (YAML frontmatter + prose). Source of truth for tokens.
- `src/index.css` declares `@theme` block (Tailwind v4 semantic utilities) + `:root` brand aliases.
- Community files: `.github/ISSUE_TEMPLATE/`, `.github/pull_request_template.md`, `.github/SECURITY.md`, `.github/CODE_OF_CONDUCT.md`, `.github/dependabot.yml`
- CI: `.github/workflows/ci.yml` (typecheck → build → unit → integration → mobile audit)



### Engine

- WebGL2 primary (all 431 fractal types) + WebGPU optional (131/431, rest fall back to phyllotaxis) dual renderer

- Fragment-shader (ray-marching) pipelines on both backends; no compute shaders

- Shader modules in `src/shaders/`



### Build & Test

```powershell

npm install          # Dependencies

npm run dev          # Dev server (localhost:3000)

npm run build        # Production build

npx tsc --noEmit     # Type check

npm run test:unit    # Unit (mapper + shader-math + parity: 718 assertions)

npm run test         # Integration autotest (1875 assertions)

npm run test:mobile  # Coarse-pointer design audit (44px targets + 12px floor)

npm run test:all     # Full suite

```

### Deployment

```powershell

npx wrangler pages deploy dist --commit-dirty=true   # Cloudflare Pages

```

Production: https://fractal.simundis.com / https://golden-ratio-fractal-engine.pages.dev



### GPU Diagnostics

```powershell

nvidia-smi           # GPU status

```


