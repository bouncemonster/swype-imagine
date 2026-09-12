# Project Context - Always In Context

**Version**: 2.3.0  
**Last Updated**: 2026-09-12  
**Status**: Production Deployed — kkrieger-Compressed & Math-Verified

---

## 🎯 Project Mission

Real-time 3D fractal visualization engine showcasing mathematical beauty through WebGPU/WebGL2 rendering. Combines scientific accuracy with artistic expression, featuring 431 fractal types, neuro-aesthetics personalization, and golden ratio principles.

---

## 📊 Current State

### Code Metrics
```
Source Files:     51 TypeScript/TSX
Documentation:    44 markdown files (219KB)
Shader Code:      300KB (GLSL + WGSL)
Shader Modules:   38KB (649 lines, kkrieger-compressed from 189KB/7934 lines)
Total Lines:      ~25,000 (code + docs)
Components:       12 UI components
Fractal Types:    431 active (all rendered)
Render Modes:     7
Color Palettes:   664
```

### Performance Targets
- Desktop (RTX 3060+): 60+ FPS
- Desktop (GTX 1060): 45+ FPS
- Laptop (Integrated): 30+ FPS
- Mobile (Flagship): 30+ FPS
- Mobile (Mid-range): 20+ FPS

---

## 🏗️ Architecture Overview

### Core Flow
```
User Input → State → Engine → GPU → Display
```

### Key Components
1. **App.tsx** - Root component, state management
2. **FractalCanvas** - Canvas with gesture handling
3. **useRenderEngine** - Hook for engine lifecycle
4. **WebGLEngine/WebGPUEngine** - GPU renderers
5. **webglShaders/webgpuShaders** - Shader code
6. **ControlsPanel** - 8-tab control interface
7. **NeuroAestheticsEngine** - Personalization

### Data Flow
```typescript
FractalParams (state)
  ↓
useRenderEngine (hook)
  ↓
Engine.updateParams() (CPU)
  ↓
Uniform Buffer (48 floats)
  ↓
GPU Shaders (ray marching)
  ↓
Frame Buffer
  ↓
Display
```

---

## 🔑 Critical Concepts

### 1. Uniform Buffer
**WebGL (GLSL)**: 48 floats, 192 bytes — individual uniform uploads.  
**WebGPU (WGSL)**: 52 floats, 208 bytes — vec3<f32> alignment padding adds 4 floats.  
CPU packUniforms writes 48 floats; WGSL struct maps 1:1 for first 48; indices 48-51 are padding.

### 2. Ray Marching
Rendering technique for SDF-defined surfaces. Steps along ray until surface hit.

### 3. Distance Estimation
Approximates distance to fractal surface: `DE = 0.5 * log(r) * r / dr`

### 4. Golden Ratio (φ)
φ ≈ 1.618. Used in phyllotaxis, color distribution, aesthetics.

### 5. Neuro-Aesthetics
5D archetype space tracking user preferences for personalized recommendations.

---

## 📁 Key Files Reference

### Engine (Must Know)
- `src/engine/FractalEngineBase.ts` - Uniform packing
- `src/engine/WebGLEngine.ts` - WebGL2 renderer
- `src/engine/WebGPUEngine.ts` - WebGPU renderer
- `src/engine/fractalMappers.ts` - Type mappings

### Shaders (Must Know)
- `src/shaders/webglShaders.ts` - GLSL shader (4386 lines, ALL 431 types)
- `src/shaders/webgpuShaders.ts` - WGSL shader (3545 lines, 104/431 types)
- `src/shaders/modules/` - 5 kkrieger-compressed variation modules (649 lines, 38KB)

### Components (Must Know)
- `src/App.tsx` - Root component (~657 lines)
- `src/components/ControlsPanel.tsx` - Main controls (~876 lines, architectures data extracted)
- `src/components/FractalCanvas.tsx` - Canvas (~260 lines)
- `src/hooks/useRenderEngine.ts` - Engine hook (~620 lines)

### Data (Must Know)
- `src/data/canonicalFractals.ts` - 431 fractals across 10 categories
- `src/data/compatibleHybrids.ts` - Hybrid breeding compatibility matrix (249 lines)
- `src/data/fractalArchitectures.ts` - Architecture tab data (193 lines)
- `src/types/fractal.ts` - Core types (576 lines)
- `src/palettes.ts` - 24 palettes
- `src/palettesProcedural.ts` - 640 palettes

---

## 🎨 Fractal System

### Fractal Types (431 active)
- Mandelbulb, Julia, Burning Ship, Tricorn
- IFS attractors, L-systems, TPMS surfaces
- Chaotic attractors (Lorenz, Rössler, Aizawa, Thomas, Halvorsen)
- Algebraic (Newton basins, Quaternion sets)
- Hybrids (90 hybrid variations, types 341-430)

### Render Modes (7)
1. **Solid** - PBR + shadows + AO
2. **X-Ray** - Volume rendering
3. **Topographic** - Curvature lines
4. **Hologram** - Scan lines + chromatic
5. **Iridescent** - Thin-film interference
6. **Quantum** - Energy field
7. **Gemstone** - Refraction + caustics

### Composite Operations (8)
- Smooth morph (default)
- Smooth union
- Smooth intersection
- Smooth carve
- Domain warp
- Quantum resonance
- Fractal lattice
- Golden spiral fold

---

## 🚀 Development Workflow

### Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production
npm run lint     # Check code style
```

### Adding New Fractal
1. Define type in `src/types/fractal.ts`
2. Create SDF function in `src/shaders/webglShaders.ts`
3. Add to mapper in `src/engine/fractalMappers.ts`
4. Add to catalog in `src/data/categories/`
5. Test and document

### Adding New Render Mode
1. Define in `src/types/fractal.ts`
2. Implement in shader
3. Add to render switch
4. Update UI in ControlsPanel
5. Test and document

---

## 🐛 Common Issues & Solutions

### Black Screen
- Check GPU backend support (WebGPU/WebGL2)
- Verify shader compilation
- Check uniform buffer size (192 bytes GLSL / 208 bytes WGSL)
- Look at DebugOverlay (press 'D')

### Low FPS
- Reduce iterations (32 → 16)
- Lower resolution scale (1.0 → 0.5)
- Disable volumetric fog
- Use simpler render mode
- Enable DRS

### Browser Crashes
- Check for infinite loops in shaders
- Reduce memory usage
- Update GPU drivers
- Switch backend (WebGPU → WebGL)

### Mobile Issues
- Test on actual device
- Reduce complexity
- Check touch handlers
- Verify performance optimizations

---

## 📚 Documentation Structure

### Core Docs (Always Reference)
- `docs/README.md` - Full index (44 files)
- `docs/ARCHITECTURE_DIAGRAMS.md` - Mermaid diagrams
- `docs/TUTORIALS.md` - Step-by-step guides
- `docs/TROUBLESHOOTING.md` - Problem solutions
- `docs/FAQ.md` - 50+ questions
- `docs/DEPLOYMENT.md` - Deployment guides
- `docs/CONTRIBUTING.md` - Contribution guide
- `docs/CHANGELOG.md` - Version history

### Component Docs
Each component has dedicated doc in `docs/`:
- `App.md`, `ControlsPanel.md`, `FractalCanvas.md`, etc.
- Contains: purpose, structure, props, notes, dependencies

### Shader Docs
- `shader-modules.md` - All modules overview
- `juliaVariations.md` - 50 Mandelbulb variants
- `webglShaders.md` - GLSL structure
- `webgpuShaders.md` - WGSL structure

---

## 🔍 Quality Checklist

### Before Commit
- [ ] Code follows style guide (rules.md)
- [ ] TypeScript strict mode passes
- [ ] No console errors
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Documentation updated
- [ ] Performance not degraded
- [ ] No security issues

### Before Release
- [ ] All tests pass
- [ ] Performance benchmarks met
- [ ] Documentation complete
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Deployment tested
- [ ] Mobile tested
- [ ] Accessibility checked

---

## 📈 Performance Optimization

### GPU
- Pack uniforms (48 floats)
- Bound loops (max 32 iterations)
- Avoid branching
- Use `f32` not `f64`
- Minimize texture lookups

### CPU
- Memoize expensive calculations
- Debounce user input
- Lazy load components
- Avoid allocations in render loop
- Use Web Workers for heavy computation

### Mobile
- Lower iterations (32 → 16)
- Lower resolution (1.0 → 0.5)
- Limit FPS (60 → 30)
- Enable DRS
- Disable complex effects

---

## 🎯 Current Priorities

### Immediate (Post-Audit) — ALL CRITICAL DONE
- ✅ Fixed: syntax error in fractalMappers.ts
- ✅ Fixed: WGSL uniform buffer size (192→208 bytes)
- ✅ Fixed: per-frame allocation in WebGLEngine
- ✅ Fixed: division by zero in normal computation
- ✅ Fixed: missing z-arg in evaluateSDF (ny normal was wrong)
- ✅ Fixed: arrays recreated in component body (moved outside)
- ✅ Fixed: per-frame logging (now only on type change)
- ✅ Fixed: frame history cap (72→40)
- ✅ Fixed: Russian comments → English
- ✅ Fixed: GOLDEN_ANGLE ReferenceError crash (moved to module scope)
- ✅ Fixed: NeuroAestheticsEngine selectedArch/compat scoping (crashed 60% of hybrids)
- ✅ Fixed: DebugOverlay never rendering (missing visible prop)
- ✅ Fixed: smoothCarve missing from COMPOSITE_OPS
- ✅ Fixed: interactionTimeout cleanup on unmount
- ✅ Fixed: fractalCatalogTypes enginePreset interface (octaves→octaveLayers, added 5 fields)
- ✅ Fixed: preventDefault passive listener errors (added stopPropagation to wheel/touch native handlers)
- ✅ Fixed: F-key flyThrough toggle trapped inside `!== 'flyThrough'` guard (could enter but never exit flyThrough mode)
- ✅ Fixed: renderStyle type error (string → RenderStyle[] typed array)
- ✅ Fixed: unclamped log(r) in 300 shader functions (julia/ifs/lsystem/hybrid/flame variants + Mandelbrot variants)
- ✅ Fixed: unguarded acos(z.z/r) without r=0 protection in 150 functions
- ✅ Fixed: Burning Ship double-add bug (z = abs(z) + p; z += p) in 9 hybrid variants
- ✅ Fixed: double-power angle bug (sin(theta*power) instead of sin(theta)) in 139 functions
- ✅ Fixed: unclamped log(length(z)) in hybrid mandelbox (both GLSL and WGSL)
- ✅ Fixed: GLSL vs WGSL discrepancies (Nebula Cloud tube radius, Ikeda Map trap value)
- ✅ Fixed: invalid RenderStyle fallback — added aliases for crystal/plasma/pbr/topography
- ✅ Fixed: 27 newer fractal types archetype classification (were all defaulting to 'attractors')
- ✅ Fixed: auto-rotation now pauses during interaction (drag/zoom), resumes after 3s idle
- ✅ Fixed: inertia decay is now frame-rate independent (was 35x faster at 144fps vs 60fps)
- ✅ Fixed: ray-marching bounding box expanded ±2.5 → ±5.0 (fractals were clipped at edges)
- ✅ Fixed: bounding sphere expanded 6.0 → 10.0 (larger fractal structures now visible)
- ✅ Fixed: early termination missCount 16 → 32 (sparse fractal regions no longer prematurely terminated)
- ✅ Fixed: LOD iteration reduction 8 → 4 (preserves detail at distance)
- ✅ Fixed: shader compilation errors — hit_threshold scope, base→base_n typo, sssCol→sssColor typo, u_auto_rotate uniform
- ✅ Fixed: 3 CRITICAL div-by-zero in mapFlameSpherical, mapAmazingBox, mapMandelboxMandelboxHybrid
- ✅ Fixed: 5 HIGH unguarded log(r) in spiral flame variants
- ✅ Fixed: HIGH gammaCorrect NaN with negative color components
- ✅ Fixed: 5 MEDIUM Plasma IFS stale r-squared causing div-by-zero
- ✅ Fixed: MEDIUM MathValidation determinant check improved
- ✅ Fixed: MEDIUM COMPATIBLE_HYBRIDS added 27 missing fractal type entries
- ✅ Fixed: CRITICAL transparent sphere clipping — r_bound 5.0→12.0 in both GLSL/WGSL
- ⚠️ Remaining: TypeScript strict mode not enabled
- ⚠️ Remaining: ~140 data type mismatches in category files (handled by alias mappings at runtime)
- ️ Remaining: fractalFactory.ts non-standard import paths
- ⚠️ Remaining: No git remote configured (push not possible)
- 📊 Shader functions fixed: 600+ across 7 files

### Short-term
- Add more fractal types (target: 200+)
- Improve shader performance
- Enhance mobile UX
- Add more tutorials

### Long-term
- VR support (WebXR)
- Fractal animation editor
- Export to video/GIF
- Collaborative sharing
- Mobile app (PWA)

---

## 🔗 Quick Links

### Documentation
- [Full Index](docs/README.md)
- [Architecture](docs/ARCHITECTURE_DIAGRAMS.md)
- [Tutorials](docs/TUTORIALS.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [FAQ](docs/FAQ.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Changelog](docs/CHANGELOG.md)

### Project Files
- [Agent Context](agent.md)
- [Rules & Conventions](rules.md)
- [Main README](README.md)
- [Architecture](ARCHITECTURE.md)
- [Whitepaper](WHITEPAPER.md)

### External
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [WebGPU](https://www.w3.org/TR/webgpu)
- [Vite](https://vitejs.dev)
- [Tailwind](https://tailwindcss.com)

---

## 💡 Key Insights

### What Makes This Project Special
1. **WebGPU-first** - Modern GPU API for best performance
2. **100+ fractals** - Largest canonical fractal collection
3. **Neuro-aesthetics** - AI-driven personalization
4. **Scientific focus** - Mathematical formulas and dimensions
5. **Real-time morphing** - Smooth transitions
6. **7 render modes** - Diverse visualization styles
7. **Golden ratio** - Aesthetic harmony throughout

### Technical Achievements
- 48-float uniform buffer optimization (52 floats for WGSL with alignment)
- Dual GPU backend (WebGPU + WebGL2)
- 300KB shader code (431 fractal types, WebGL has all 431, WebGPU has 104)
- 664 color palettes (24 + 640 procedural)
- 5D archetype space for personalization
- Real-time ray marching at 60+ FPS
- Post-audit: zero per-frame allocations, all bugs documented
- v1.3.0: React 19 passive listener conflict resolved (stopPropagation on native wheel/touch handlers)
- v1.4.0: F-key flyThrough toggle bug fixed (was trapped in guard block), renderStyle type fixed
- v1.5.0: Deep math audit initiated
- v1.6.0: 600+ shader math bugs fixed — unclamped log/acos, double-power angles, BurningShip double-add, RenderStyle aliases, archetype classification for 27 types
- v1.7.0: Auto-rotation pauses during interaction (3s resume), inertia decay frame-rate independent
- v1.8.0: Ray-marching bounds expanded — bounding box ±5.0, sphere 10.0, missCount 32, LOD reduction 4
- v1.9.0: Shader compilation errors fixed, 13 math bugs fixed (3 CRITICAL, 2 HIGH, 8 MEDIUM)
- v1.9.1: CRITICAL transparent sphere clipping fixed — r_bound 5.0→12.0 in GLSL+WGSL
- v1.10.0: Adaptive quality system — mobile/desktop auto-detection, quality-aware ray marching
- v2.0.0: **MAJOR** — Activated 345 dead fractal types (86→431 total). Types 86-430 now accessible from UI
- v2.1.0: Removed 5 dead shader module files (-964 lines). Added FPS-based dynamic quality adjustment
- v2.1.1: Stability hardened — share link parsing wrapped in try-catch
- v2.3.0: **kkrieger compression** — 5 shader modules compressed 7934→649 lines (12x). Bundle 1046→873 KB. All math formulas preserved. Philosophy: exchange memory for computation.

### Design Philosophy
- **Mathematical beauty** - Scientific accuracy
- **Artistic expression** - Creative visualization
- **Performance** - Smooth real-time rendering
- **Accessibility** - Works on desktop and mobile
- **Extensibility** - Easy to add new fractals

---

## 🎓 Learning Path

### For New Contributors
1. Read this CONTEXT.md
2. Read agent.md for project overview
3. Read rules.md for conventions
4. Explore docs/TUTORIALS.md
5. Run project locally
6. Start with small improvements
7. Ask questions in discussions

### For Advanced Contributors
1. Study shader code (webglShaders.ts, webgpuShaders.ts)
2. Understand uniform buffer layout
3. Learn ray marching algorithm
4. Explore fractal mathematics
5. Optimize performance
6. Add new fractal types
7. Implement new render modes

---

## 📞 Support & Communication

### Getting Help
- Check docs/TROUBLESHOOTING.md
- Check docs/FAQ.md
- Search GitHub issues
- Open GitHub discussion
- Contact maintainers

### Reporting Issues
- Use GitHub issues
- Include reproduction steps
- Add screenshots
- Specify environment (OS, browser, GPU)
- Check existing issues first

---

## 🏆 Success Metrics

### Performance
- FPS targets met on all devices
- No memory leaks
- Fast load times (< 3s)
- Smooth interactions (no lag)

### Quality
- Zero critical bugs
- 100% test coverage (when implemented)
- Complete documentation
- Positive user feedback

### Engagement
- Active contributors
- Growing user base
- Community discussions
- Feature requests

---

## 📝 Notes

### Known Limitations
- Safari iOS: No WebGPU support
- Mobile: Limited by device capabilities
- Shader size: 300KB (large but necessary for 431 fractal types)
- No offline mode yet (planned)

### Future Considerations
- VR support (WebXR)
- Fractal animation editor
- Export capabilities
- Collaborative features
- Machine learning enhancements

---

**This document should always be kept up-to-date and referenced in every conversation.**
