# Frequently Asked Questions

## General

### Q: What is this project?
**A:** Golden Ratio WebGPU Fractal Engine is a high-performance real-time 3D fractal visualization application using WebGPU (with WebGL2 fallback). It exposes 431 fractal types (145 canonical catalog entries) using ray marching and signed distance functions (SDFs).

### Q: What makes this different from other fractal viewers?
**A:** 
- **WebGPU-first**: Uses modern GPU API for better performance
- **431 types / 145 canonical**: Largest collection of canonical fractals
- **Neuro-aesthetics**: AI-driven recommendations based on user preferences
- **Scientific focus**: Mathematical formulas, dimensions, descriptions
- **Real-time morphing**: Smooth transitions between fractal types
- **10 render modes**: Solid, X-ray, Topographic, Hologram, Iridescent, Quantum, Gemstone, Wireframe, Heatmap, Neon

### Q: Do I need a powerful GPU?
**A:** 
- **Minimum**: Integrated graphics (Intel HD 4000, AMD Radeon R5)
- **Recommended**: Dedicated GPU (GTX 1060, RTX 3060, or better)
- **Mobile**: Modern smartphones (iPhone 12+, Samsung S21+)

WebGPU provides 30-50% better performance than WebGL2 on supported hardware.

### Q: Which browsers are supported?
**A:**
| Browser | WebGPU | WebGL2 |
|---------|--------|--------|
| Chrome 113+ | ✅ Full | ✅ Full |
| Edge 113+ | ✅ Full | ✅ Full |
| Firefox 120+ | ⚠️ Flag | ✅ Full |
| Safari 17+ | ⚠️ Preview | ✅ Full |
| Mobile Chrome | ✅ Full | ✅ Full |
| Mobile Safari | ❌ No | ✅ Full |

**Recommendation**: Use Chrome or Edge for best experience.

---

## Technical

### Q: What is ray marching?
**A:** Ray marching is a rendering technique for 3D surfaces defined by mathematical functions (SDFs). Unlike traditional rasterization, it steps along each ray until it hits a surface, allowing rendering of complex fractals that can't be meshed.

### Q: What is a Signed Distance Function (SDF)?
**A:** An SDF returns the distance from a point to the nearest surface. For fractals, we approximate this distance iteratively. The formula `0.5 * log(r) * r / dr` is standard for Mandelbulb-type fractals.

### Q: Why 48 uniforms?
**A:** The uniform buffer is optimized for GPU alignment:
- 48 floats = 192 bytes
- Fits in single GPU cache line
- All parameters accessible in one upload
- Matches WebGL/WebGPU alignment requirements

### Q: What is the golden ratio's role?
**A:** φ (phi ≈ 1.618) appears throughout:
- **Phyllotaxis patterns**: Spiral arrangements
- **Golden angle**: 137.508° for color distribution
- **Aesthetics**: Naturally pleasing proportions
- **Mathematical harmony**: Connected to Fibonacci, pentagons

### Q: How does neuro-aesthetics work?
**A:** The system tracks user interactions (zoom, rotation, time spent) and maps them to a 5D archetype space. It then recommends fractals that match the user's taste profile, creating a personalized experience.

---

## Usage

### Q: How do I navigate?
**A:**
- **Rotate**: Click + drag
- **Zoom**: Scroll wheel / pinch
- **Pan**: Right-click + drag
- **Reset**: Double-click
- **Keyboard**: Arrow keys, +/- for zoom

### Q: How do I change fractal types?
**A:** Open ControlsPanel (☰ icon) → Architectures tab → Select from 24 mathematical architectures.

### Q: Can I save my settings?
**A:** Yes! Use the share button in FractalInfoHUD to generate a URL with all parameters encoded.

### Q: How do I enable WebGPU?
**A:** 
- **Chrome/Edge**: Enabled by default (v113+)
- **Firefox**: `about:config` → `dom.webgpu.enabled` → true
- **Safari**: Technology Preview with WebGPU flag

### Q: Why is FPS low?
**A:** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md#2-low-performance--fps-drops) for detailed solutions. Quick fixes:
- Reduce iterations
- Lower resolution scale
- Disable volumetric fog
- Use simpler render mode

### Q: Can I use this offline?
**A:** Yes! After first load, the app is cached. You can also build and serve locally:
```bash
npm run build
npm run preview
```

---

## Fractals

### Q: How many fractal types are there?
**A:** 
- **431 types** active in type system and WebGL shader
- **131/431** implemented in WebGPU shader (rest fall back to phyllotaxis)
- **11 category files** in data/categories/
- **50 Julia variations** in shader modules
- **90 hybrid variations** in shader modules

### Q: What are the 10 render modes?
**A:**
1. **Solid**: PBR lighting + shadows + ambient occlusion
2. **X-Ray**: Volume rendering, density tomography
3. **Topographic**: Curvature-based topography lines
4. **Hologram**: Scan lines + chromatic aberration
5. **Iridescent**: Multi-order thin-film interference
6. **Quantum**: Energy field visualization
7. **Gemstone**: Refraction + caustics + dispersion
8. **Wireframe (Каркас)**: The coordinate lattice the DE folds over (fwidth-AA grid + depth fade)
9. **Heatmap (Термограмма)**: Blackbody colormap of escape-time / iteration density
10. **Neon (Неон)**: Emissive Fresnel rim contour on near-black

### Q: What is morphing?
**A:** Smooth transition between fractal types by interpolating parameters. Enable in ControlsPanel → Morphology → Morph Speed.

### Q: What are composite operations?
**A:** Ways to combine two fractal types:
- **Smooth Union**: Blend surfaces
- **Smooth Intersection**: Overlap regions
- **Smooth Carve**: Subtract one from another
- **Domain Warp**: Distort space

### Q: What is the fractal atlas?
**A:** FractalAtlasModal shows all 145 canonical fractals with:
- Scientific names
- Mathematical formulas
- Hausdorff dimensions
- Descriptions (Russian)
- One-click presets

---

## Performance

### Q: WebGPU vs WebGL2 performance?
**A:** WebGPU is typically 30-50% faster due to:
- Lower CPU overhead
- Better GPU utilization
- Modern shader compiler
- Efficient resource management

### Q: How to optimize for mobile?
**A:**
- Enable Dynamic Resolution Scaling (DRS)
- Reduce max iterations (32 → 16)
- Lower resolution scale (1.0 → 0.5)
- Use simpler render modes
- Limit FPS to 30

### Q: What is DRS?
**A:** Dynamic Resolution Scaling automatically adjusts render resolution to maintain target FPS. If FPS drops, resolution decreases; if FPS is high, resolution increases.

### Q: Can I record video?
**A:** Not built-in, but use:
- **OBS Studio**: Screen capture
- **Chrome DevTools**: Performance tab → Record
- **Native tools**: QuickTime (macOS), Xbox Game Bar (Windows)

---

## Development

### Q: How do I contribute?
**A:** See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Quick start:
```bash
git clone [repo]
npm install
npm run dev
```

### Q: What's the tech stack?
**A:**
- **Framework**: React 19 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS v4
- **Graphics**: WebGPU + WebGL2
- **Deployment**: Cloudflare Pages
- **Package manager**: npm / bun

### Q: How are shaders organized?
**A:** See [shader-modules.md](shader-modules.md):
- `webglShaders.ts`: Main GLSL shader (161KB)
- `webgpuShaders.ts`: Main WGSL shader (158KB)
- `modules/`: Reusable shader components
  - `juliaVariations.ts`: 50 Julia variants (ftype 141-190)
  - `hybridVariations.ts`: 90 hybrid combinations (ftype 341-430)
  - `flameVariations.ts`: IFS flame fractals
  - etc.

### Q: How to add a new fractal?
**A:** See [TUTORIALS.md](TUTORIALS.md#how-to-add-a-new-fractal-type) for step-by-step guide.

### Q: Why is the shader so large?
**A:** 161KB GLSL + 158KB WGSL = 319KB total because:
- 50 Julia variations
- 90 hybrid variations
- 431 fractal types
- 10 render modes
- Post-processing effects
- All inlined for performance

### Q: Can I use this in my project?
**A:** Yes! MIT license. Attribution appreciated but not required.

---

## Math

### Q: What is the Mandelbulb formula?
**A:** 
```
For each iteration:
1. Convert to polar: (r, θ, φ)
2. Raise to power n: r^n
3. Multiply angles: nθ, nφ
4. Convert back to cartesian
5. Add original point: z = z^n + c
```
Power 8 is classic Mandelbulb.

### Q: What is orbit trap coloring?
**A:** During iteration, track minimum distance to geometric primitives (axes, planes, origin). Use this distance for coloring, creating intricate patterns.

### Q: What is distance estimation?
**A:** Approximates distance from point to fractal surface. For Mandelbulb:
```
DE = 0.5 * log(r) * r / dr
```
Where `dr` is the derivative of radius across iterations.

### Q: What are TPMS surfaces?
**A:** Triply Periodic Minimal Surfaces - surfaces that minimize area while being periodic in 3 directions. Examples:
- Gyroid
- Schwarz P
- Schwarz D
- Neovius

Used in architecture, biology, materials science.

### Q: What is the Hausdorff dimension?
**A:** Measures fractal complexity. Unlike topological dimension (integer), Hausdorff dimension can be fractional:
- Koch curve: D ≈ 1.26
- Sierpinski triangle: D ≈ 1.58
- Mandelbulb boundary: D ≈ 3.0

---

## Troubleshooting

### Q: Black screen?
**A:** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md#1-black-screen--no-fractal-visible)

### Q: Low FPS?
**A:** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md#2-low-performance--fps-drops)

### Q: Browser crashes?
**A:** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md#3-browser-crashes)

### Q: Mobile issues?
**A:** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md#5-mobile-specific-issues)

---

## Future Plans

### Q: What's coming next?
**A:**
- [x] More fractal types — 431 now implemented (145 canonical)
- [ ] VR support (WebXR)
- [ ] Fractal animation editor
- [ ] Export to video/GIF
- [ ] Collaborative sharing
- [ ] Mobile app (PWA)
- [ ] Audio-reactive mode
- [ ] Machine learning enhancements

### Q: Can I request a feature?
**A:** Yes! Open GitHub issue with "Feature Request" label.

### Q: Will there be a desktop app?
**A:** Possible via Electron or Tauri. Not planned yet.

---

## Contact

### Q: How to report bugs?
**A:** GitHub Issues with:
- Browser version
- GPU model
- Steps to reproduce
- Console errors
- Screenshots

### Q: Where to ask questions?
**A:** 
- GitHub Discussions
- Stack Overflow (tag: golden-ratio-fractal)
- Discord/Telegram (if available)

### Q: Who made this?
**A:** See [ProjectManifestModal](../src/components/ProjectManifestModal.tsx) for project vision and credits.

---

## License

### Q: What license?
**A:** MIT License - free for personal and commercial use.

### Q: Can I use the fractal images?
**A:** Yes! No attribution required, but appreciated.

### Q: Can I modify and redistribute?
**A:** Yes, keep the MIT license notice.

---

## Misc

### Q: Why "Golden Ratio"?
**A:** φ (phi) appears throughout the project:
- Phyllotaxis spirals
- Golden angle color distribution
- Aesthetic proportions
- Mathematical harmony

### Q: Why Russian UI?
**A:** Primary developer is Russian-speaking. Internationalization planned but not prioritized.

### Q: Can I change language?
**A:** Not yet. All UI is in Russian. Code comments are in English.

### Q: Is there a mobile app?
**A:** Not yet, but the web app is mobile-optimized. PWA support planned.

### Q: Does it work offline?
**A:** Yes, after first load. Can also build and serve locally.

---

## Still Have Questions?

1. Check [TUTORIALS.md](TUTORIALS.md) for how-to guides
2. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common problems
3. Check [ARCHITECTURE_DIAGRAMS.md](ARCHITECTURE_DIAGRAMS.md) for system design
4. Open GitHub issue for specific questions
