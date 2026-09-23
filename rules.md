# Project Rules & Conventions

## Code Style

### TypeScript
- **Strict mode**: ✅ enabled in `tsconfig.json` (`"strict": true`) — 0 errors. Remaining `as any` are intentional (debug `window` hooks, `getContext` options, diagnostic payload)
- **Interfaces**: Use for component props and data structures
- **Types**: Use `type` for unions, aliases
- **Naming**:
  - `camelCase` for variables, functions, properties
  - `PascalCase` for components, classes, interfaces, types
  - `UPPER_SNAKE_CASE` for constants
- **Imports**: Group by type (React, internal, external, styles)
- **Exports**: Named exports preferred over default

### React
- **Components**: Functional components with hooks
- **Props**: TypeScript interface required
- **State**: useState for local state
- **Effects**: useEffect with proper dependencies
- **Memoization**: useMemo, useCallback for expensive operations
- **Context**: Avoid global state, use props
- **Keys**: Use unique IDs, not array indices

### Shaders (GLSL/WGSL)
- **GLSL**: WebGL2 only, GLSL ES 3.0
- **WGSL**: WebGPU only, explicit types (`vec3<f32>`)
- **Naming**:
  - `camelCase` for functions, variables
  - `mapXxx()` for SDF functions
  - `renderXxx()` for render mode functions
- **Constants**: `UPPER_SNAKE_CASE` (PI, TWO_PI, GOLDEN_RATIO)
- **Uniforms**: Match struct layout exactly (48 floats CPU → 52 floats WGSL with alignment)
- **Comments**: Explain complex math

### CSS/Tailwind
- **Tailwind**: Use utility classes
- **Mobile-first**: Start with mobile styles
- **Dark theme**: All components must work on dark background
- **Responsive**: Use `sm:`, `md:`, `lg:` breakpoints
- **Spacing**: Consistent with Tailwind scale

## File Organization

### Directory Structure
```
src/
├── components/     # React components (12 files)
├── engine/         # Rendering engines (9 files)
├── shaders/        # Shader code
│   ├── modules/    # 5 variation modules + index.ts (julia/ifs/lsystem/flame/hybrid)
│   ├── webglShaders.ts
│   └── webgpuShaders.ts
├── data/           # Data layer
│   ├── categories/ # Fractal categories (11 category files + index.ts, 145 entries)
│   ├── canonicalFractals.ts
│   ├── compatibleHybrids.ts
│   ├── fractalArchitectures.ts
│   ├── fractalCatalogTypes.ts
│   └── fractalFactory.ts
├── hooks/          # React hooks (useRenderEngine.ts)
├── types/          # TypeScript types (fractal.ts)
├── utils/          # Utility functions (colorMath.ts)
├── audio/          # Audio engine (goldenAudio.ts)
├── App.tsx         # Root component
├── main.tsx        # Entry point
├── index.css       # Global styles
├── palettes.ts     # Color palette definitions
└── palettesProcedural.ts  # Procedural palette generation

scripts/            # Build & diagnostic scripts
docs/               # Documentation (44 files)
tests/              # 19 TypeScript test files + PNG baselines
```

### File Naming
- **Components**: `PascalCase.tsx` (e.g., `ControlsPanel.tsx`)
- **Utilities**: `camelCase.ts` (e.g., `fractalMappers.ts`)
- **Types**: `kebab-case.ts` (e.g., `types-fractal.ts`)
- **Docs**: `ComponentName.md` or `feature-name.md`

### File Size Guidelines
- **Components**: < 500 lines (split if larger)
- **Utilities**: < 300 lines
- **Shaders**: No limit (but modularize)
- **Docs**: < 500 lines (split if larger)

## Documentation Standards

### File Structure
Every documentation file must have:
```markdown
# Title

**N lines | Brief description**

## Purpose
What this file does.

## [Main Sections]
Detailed content.

## Critical Notes
1. Important point
2. Another point

## Dependencies
- What this file depends on

## Related Files
- Links to related files
```

### Writing Style
- **Clear and concise**: No fluff
- **Examples**: Include code snippets
- **Russian UI**: All user-facing text in Russian
- **English code**: Comments and variable names in English
- **Active voice**: "The function does X" not "X is done by the function"

### Linking
- **Internal**: `[Link Text](filename.md)`
- **Sections**: `[Link](file.md#section-name)`
- **External**: `[Link](https://example.com)`

## Git Conventions

### Commit Messages
Format: `type: description`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance

Examples:
```
feat: add new fractal type (Mandelbox)
fix: resolve shader compilation error on mobile
docs: update ARCHITECTURE_DIAGRAMS.md
perf: optimize ray marching loop
```

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation
- `refactor/description` - Code restructuring

### Pull Requests
- **Title**: Same as commit message format
- **Description**: What, why, how
- **Testing**: How you tested
- **Screenshots**: If UI changes
- **Checklist**: Code style, docs, tests

## Performance Guidelines

### GPU
- **Minimize uniforms**: Pack into 48-float buffer
- **Avoid branching**: Use math instead of if/else
- **Loop bounds**: Always bounded (fractal iterations clamped 6-64; ray steps 64-256 GLSL / up to 512 WGSL)
- **Precision**: Use `f32` not `f64`
- **Textures**: Minimize texture lookups

### CPU
- **Memoize**: Use useMemo for expensive calculations
- **Debounce**: User input (sliders, drags)
- **Lazy load**: Components and data
- **Web Workers**: Heavy computation off main thread

### Memory
- **Dispose**: GPU resources on unmount
- **Reuse**: Objects and arrays
- **Limit**: History size (40 frames max)
- **GC**: Avoid allocations in render loop

## Testing Guidelines

### Manual Testing
- **Desktop**: Chrome, Firefox, Edge
- **Mobile**: iOS Safari, Android Chrome
- **GPUs**: Integrated, dedicated, mobile
- **Scenarios**: All fractal types, render modes, camera modes

### Automated Testing (implemented — 19 TypeScript files in `tests/`)
- **Unit** (`npm run test:unit`): `fractal-mapper-test.ts` (524 assertions), `shader-math-validation-test.ts` (113), `cross-engine-parity-test.ts` (81)
- **Integration** (`npm run test`): `fractal-autotest.ts` (822 assertions — all 431 types, palettes, render styles, audio, share links)
- **Browser** (`npm run test:browser` / `test:browser:headed`): `browser-harness.ts`, `browser-fractal-test.ts`, `advanced-fractal-test.ts`, `external-browser-test.ts`
- **Headless smoke** (`npm run test:headless`): `headless-fractal-test.ts`, `browser-smoke-test.ts`
- **Performance/stability** (`npm run test:benchmark`): `performance-benchmark.ts`, `continuous-render-test.ts`, `stress-test-cycle.ts`, `responsiveness-probe.ts`, `loader-sync-test.ts`
- **Visual regression**: `render-style-test.ts`, `visual-step-test.ts`, `palette-diagnostic.ts` (baselines stored under `tests/`)
- **Code quality** (`npm run test:quality`): `code-quality-check.ts`
- **Full suite**: `npm run test:all` (unit + integration + headless + benchmark + quality)

## Error Handling

### GPU Errors
```typescript
try {
  await engine.initialize();
} catch (error) {
  if (error.message.includes('WebGPU not supported')) {
    fallbackToWebGL();
  } else {
    logError(error);
    showErrorUI();
  }
}
```

### Validation
- **Math**: Check for NaN, Infinity
- **Uniforms**: Validate buffer size (192 bytes GLSL / 208 bytes WGSL)
- **Types**: Validate enum values
- **Bounds**: Check array indices

### Logging
- **Console**: Development only
- **IndexedDB**: Production error tracking
- **Telemetry**: Performance metrics

## Security Guidelines

### Input Validation
- **URL params**: Validate and sanitize
- **User input**: Escape HTML
- **File uploads**: Not supported (no uploads)

### Dependencies
- **Audit**: Regular `npm audit`
- **Update**: Keep dependencies current
- **Minimal**: Only necessary dependencies

### Data
- **No secrets**: No API keys in code
- **Local storage**: No sensitive data
- **CORS**: Configure properly

## Accessibility Guidelines

### Keyboard Navigation
- **Tab order**: Logical sequence
- **Focus indicators**: Visible
- **Shortcuts**: Documented

### Screen Readers
- **Alt text**: For images
- **ARIA labels**: For interactive elements
- **Semantic HTML**: Use proper tags

### Color Contrast
- **Text**: 4.5:1 minimum
- **UI elements**: 3:1 minimum
- **Dark theme**: Test on dark background

## Mobile Guidelines

### Touch Gestures
- **Single finger**: Rotate
- **Pinch**: Zoom
- **Two finger**: Pan
- **Double tap**: Reset

### Performance
- **Lower iterations**: 16 desktop → 12 mobile (App.tsx)
- **Lower resolution**: DPR capped at 1.0, max canvas dimension 1280 on mobile
- **Limit FPS**: 60 → 30
- **Enable DRS**: Dynamic resolution scaling
- **Quality level**: 0 on mobile (1 on desktop/embedded)

### Safari iOS
- **No WebGPU**: Use WebGL2
- **Memory limit**: Reduce complexity
- **Touch issues**: Test thoroughly

## Common Pitfalls

### Shaders
- ❌ Type mismatch: `vec3 color = 1.0;`
- ✅ Correct: `vec3 color = vec3(1.0);`
- ❌ Infinite loop: No exit condition
- ✅ Bounded: `if (i >= iters) break;`
- ❌ Division by zero: `1.0 / r`
- ✅ Guard: `if (r < 0.0001) r = 0.0001;`

### React
- ❌ Missing dependencies in useEffect
- ✅ Include all used variables
- ❌ Mutating state directly
- ✅ Use setState with new object
- ❌ Array index as key
- ✅ Use unique ID

### Performance
- ❌ Allocating in render loop
- ✅ Reuse objects
- ❌ Large uniforms
- ✅ Pack into buffer
- ❌ Unbounded loops
- ✅ Always bounded

## Review Checklist

Before merging:
- [ ] Code follows style guide
- [ ] TypeScript strict mode passes
- [ ] No console errors
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Documentation updated
- [ ] Commit messages follow format
- [ ] No performance regressions
- [ ] No security issues
- [ ] Accessibility considered

## Resources

### Documentation
- [docs/README.md](docs/README.md) - Full index
- [docs/TUTORIALS.md](docs/TUTORIALS.md) - How-to guides
- [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) - Problem solving
- [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) - Contribution guide

### External
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [WebGPU Spec](https://www.w3.org/TR/webgpu)
- [WebGL2 Docs](https://www.khronos.org/webgl)
- [Tailwind CSS](https://tailwindcss.com/docs)
