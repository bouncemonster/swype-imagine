# Project Context - Always In Context

**Version**: 1.7.0  
**Last Updated**: 2026-09-11  
**Status**: Production Live — Interaction + Render Mechanics Fixed

---

## 🎯 Project Mission

Real-time 3D fractal visualization engine showcasing mathematical beauty through WebGPU/WebGL2 rendering. Combines scientific accuracy with artistic expression, featuring 100+ fractal types, neuro-aesthetics personalization, and golden ratio principles.

---

## 📊 Current State

### Code Metrics
```
Source Files:     54 TypeScript/TSX
Documentation:    44 markdown files (219KB)
Shader Code:      327KB (GLSL + WGSL)
Total Lines:      ~25,000 (code + docs)
Components:       13 UI components
Fractal Types:    86 active, 431 total
Render Modes:     7
Color Palettes:   664
```

### Performance Targets
- Desktop (RTX 3060+): 120+ FPS
- Desktop (GTX 1060): 90+ FPS
- Laptop (Integrated): 60+ FPS
- Mobile (Flagship): 60+ FPS
- Mobile (Mid-range): 30+ FPS

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
- `src/shaders/webglShaders.ts` - GLSL shader (4357 lines)
- `src/shaders/webgpuShaders.ts` - WGSL shader (3288 lines)
- `src/shaders/modules/` - Modular shader components

### Components (Must Know)
- `src/App.tsx` - Root component (593 lines)
- `src/components/ControlsPanel.tsx` - Main controls (1012 lines)
- `src/components/FractalCanvas.tsx` - Canvas (260 lines)
- `src/hooks/useRenderEngine.ts` - Engine hook (570 lines)

### Data (Must Know)
- `src/data/canonicalFractals.ts` - 110+ fractals
- `src/types/fractal.ts` - Core types (206 lines)
- `src/palettes.ts` - 24 palettes
- `src/palettesProcedural.ts` - 640 palettes

---

## 🎨 Fractal System

### Fractal Types (86 active)
- Mandelbulb (power 8)
- Julia sets
- Burning Ship
- Tricorn
- IFS attractors
- L-systems
- TPMS surfaces
- Hybrids

### Render Modes (7)
1. **Solid** - PBR + shadows + AO
2. **X-Ray** - Volume rendering
3. **Topographic** - Curvature lines
4. **Hologram** - Scan lines + chromatic
5. **Iridescent** - Thin-film interference
6. **Quantum** - Energy field
7. **Gemstone** - Refraction + caustics

### Composite Operations (8)
- Smooth union
- Smooth intersection
- Smooth carve
- Domain warp
- Quantum resonance
- Fractal lattice
- Golden spiral fold
- None

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
- ️ Remaining: TypeScript strict mode not enabled
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
- 327KB shader code (86 fractal types)
- 664 color palettes (24 + 640 procedural)
- 5D archetype space for personalization
- Real-time ray marching at 60+ FPS
- Post-audit: zero per-frame allocations, all bugs documented
- v1.3.0: React 19 passive listener conflict resolved (stopPropagation on native wheel/touch handlers)
- v1.4.0: F-key flyThrough toggle bug fixed (was trapped in guard block), renderStyle type fixed
- v1.5.0: Deep math audit initiated
- v1.6.0: 600+ shader math bugs fixed — unclamped log/acos, double-power angles, BurningShip double-add, RenderStyle aliases, archetype classification for 27 types
- v1.7.0: Auto-rotation pauses during interaction (3s resume), inertia decay frame-rate independent

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
- Shader size: 327KB (large but necessary)
- No offline mode yet (planned)

### Future Considerations
- VR support (WebXR)
- Fractal animation editor
- Export capabilities
- Collaborative features
- Machine learning enhancements

---

**This document should always be kept up-to-date and referenced in every conversation.**
