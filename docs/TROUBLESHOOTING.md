# Troubleshooting Guide

## Common Issues

### 1. Black Screen / No Fractal Visible

**Symptoms:**
- Canvas is completely black
- No error messages in console
- UI elements visible but no fractal

**Possible Causes & Solutions:**

#### A. GPU Backend Not Supported
```bash
# Check browser console for:
WebGPU not supported
WebGL2 not supported
```

**Solution:**
- Use Chrome/Edge for WebGPU
- Firefox/Safari fallback to WebGL2
- Update browser to latest version
- Update GPU drivers

#### B. Shader Compilation Failed
```bash
# Console shows:
Shader compilation error: ...
```

**Solution:**
1. Open DevTools → Console
2. Look for shader error details
3. Check `src/shaders/webglShaders.ts` for syntax errors
4. Verify GPU supports GLSL ES 3.0 / WGSL

#### C. Uniform Buffer Overflow
```bash
# DebugOverlay shows:
Uniform buffer size mismatch
```

**Solution:**
- Ensure uniform buffer is exactly 48 floats (192 bytes)
- Check `FractalEngineBase.ts` uniform packing
- Verify `webglShaders.ts` Uniforms struct matches

---

### 2. Low Performance / FPS Drops

**Symptoms:**
- FPS < 30
- Laggy interaction
- High frame time (> 16ms)

**Diagnostic Steps:**

1. **Open TelemetryHUD** (press 'T')
   - Check current FPS
   - Check frame time
   - Look for spikes

2. **Open DebugOverlay** (press 'D')
   - Check GPU health
   - Check math validation
   - Look for NaN/Infinity

3. **Check System**
   ```bash
   # Windows
   Task Manager → Performance → GPU
   
   # macOS
   Activity Monitor → GPU History
   ```

**Solutions:**

| Issue | Solution |
|-------|----------|
| High iterations | Reduce: ControlsPanel → Morphology → Iterations (32 → 16) |
| High resolution | Lower: ControlsPanel → GPU → Resolution Scale (1.0 → 0.5) |
| Complex render mode | Switch: ControlsPanel → Camera → Render Style (solid → xray) |
| Volumetric fog | Disable: ControlsPanel → Camera → Volumetric Fog |
| Too many octaves | Reduce: ControlsPanel → Morphology → Octaves (8 → 4) |
| Mobile device | Enable DRS: ControlsPanel → GPU → Dynamic Resolution |

**Advanced Optimization:**
```typescript
// In useRenderEngine.ts
// Reduce max iterations on mobile
const maxIters = isMobile ? 16 : 32;

// Lower resolution on low FPS
if (fps < 30) {
  resolutionScale = Math.max(0.5, resolutionScale - 0.1);
}
```

---

### 3. Browser Crashes

**Symptoms:**
- Browser tab crashes
- "Aw, Snap!" (Chrome)
- "Problem with this page" (Firefox)

**Common Causes:**

#### A. Out of Memory
```bash
# Console shows:
Out of memory
Allocation failed
```

**Solution:**
- Reduce palette count
- Lower resolution
- Close other browser tabs
- Restart browser
- Increase browser memory limit (Chrome flags)

#### B. GPU Timeout
```bash
# Console shows:
GPU process timeout
Device lost
```

**Solution:**
- Reduce shader complexity
- Lower iteration count
- Update GPU drivers
- Disable hardware acceleration (temporary)
- Switch GPU backend (WebGPU → WebGL)

#### C. Infinite Loop in Shader
```glsl
// Bad: infinite loop
for (int i = 0; i < 100; i++) {
  if (condition) break;  // Never breaks
}

// Good: bounded loop
for (int i = 0; i < 32; i++) {
  if (i >= iters) break;
  if (r > 2.0) break;
}
```

**Solution:**
- Check shader loops for exit conditions
- Ensure `escape radius` check exists
- Verify `iterations` uniform is reasonable (< 100)

---

### 4. Visual Artifacts

**Symptoms:**
- Flickering
- Z-fighting
- Strange colors
- Geometry errors

**Types & Fixes:**

#### A. Flickering
**Cause:** Depth buffer precision
**Solution:**
- Adjust near/far planes in camera
- Use logarithmic depth buffer
- Reduce zoom range

#### B. Z-Fighting
**Cause:** Two surfaces at same depth
**Solution:**
```glsl
// Add small offset
float d = sdf(p) + 0.001;
```

#### C. NaN / Infinity
**Cause:** Division by zero, invalid math
**Solution:**
1. Open DebugOverlay
2. Check "Math Validation"
3. Look for NaN sources
4. Add guards:
```glsl
if (r < 0.0001) r = 0.0001;  // Prevent div by zero
float val = clamp(val, -1e10, 1e10);  // Prevent infinity
```

---

### 5. Mobile-Specific Issues

#### A. Touch Not Working
**Symptoms:**
- Can't rotate/zoom
- Gestures not recognized

**Solution:**
- Check `FractalCanvas.tsx` touch handlers
- Verify `touch-action: none` in CSS
- Test on different mobile browser
- Check for JS errors in console

#### B. Overheating
**Symptoms:**
- Device gets hot
- Battery drains fast
- Performance throttles

**Solution:**
```typescript
// Reduce workload on mobile
const mobileOptimizations = {
  maxIterations: 16,
  resolutionScale: 0.75,
  maxFPS: 30,
  enableDRS: true,
};
```

#### C. Safari iOS Issues
**Symptoms:**
- WebGPU not available
- WebGL2 limited

**Solution:**
- Use WebGL2 backend
- Reduce shader complexity
- Test on Safari Technology Preview
- Check WebKit bug tracker

---

### 6. Build / Deployment Issues

#### A. Build Fails
```bash
npm run build
# Error: ...
```

**Common Errors:**

**TypeScript errors:**
```bash
error TS2345: Argument of type 'string' is not assignable...
```
**Solution:**
- Check types in `src/types/fractal.ts`
- Ensure all FractalType values handled
- Run `tsc --noEmit` for detailed errors

**Shader syntax errors:**
```bash
ERROR: 0:123: 'xxx' : undeclared identifier
```
**Solution:**
- Check GLSL/WGSL syntax
- Verify all functions defined
- Test shaders in isolation

#### B. Deployment 404
**Symptoms:**
- Page not found after deploy
- Assets not loading

**Solution:**
```bash
# Check build output
ls dist/

# Verify index.html exists
cat dist/index.html

# Check base path in vite.config.ts
export default defineConfig({
  base: '/',  // or '/subfolder/' if needed
});
```

#### C. CORS Issues
**Symptoms:**
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```

**Solution:**
- Configure Cloudflare Pages CORS headers
- Add to `wrangler.toml`:
```toml
[headers]
[headers.values]
Access-Control-Allow-Origin = "*"
```

---

### 7. Audio Issues

#### A. No Sound
**Symptoms:**
- Audio toggle on but no sound

**Solution:**
1. Check browser audio permissions
2. Verify `goldenAudio.ts` initialization
3. Check AudioContext state:
```typescript
if (audioContext.state === 'suspended') {
  await audioContext.resume();
}
```

#### B. Audio Lag
**Symptoms:**
- Sound delayed
- Not synced with visuals

**Solution:**
- Reduce audio buffer size
- Use requestAnimationFrame for sync
- Check for performance issues

---

### 8. State Management Issues

#### A. Parameters Not Updating
**Symptoms:**
- UI changes but fractal doesn't update
- Values reset unexpectedly

**Solution:**
1. Check React state flow:
```typescript
// Ensure proper state update
setParams(prev => ({
  ...prev,
  zoom: newZoom,
}));
```

2. Verify useEffect dependencies:
```typescript
useEffect(() => {
  engine.updateParams(params);
}, [params]);  // Include all dependencies
```

#### B. State Lost on Refresh
**Symptoms:**
- Settings reset after page reload

**Solution:**
- Implement localStorage persistence:
```typescript
localStorage.setItem('fractalParams', JSON.stringify(params));
```

---

## Diagnostic Tools

### 1. DebugOverlay (press 'D')
- FPS counter
- Frame time
- GPU health
- Math validation
- Shader compile time

### 2. TelemetryHUD (press 'T')
- Real-time FPS
- Frame time graph
- Performance history

### 3. FractalProbeHUD
- Topological data
- SDF distance
- Camera position

### 4. Browser DevTools
- Console: Errors, warnings
- Performance: Frame recording
- Memory: Heap snapshots
- Network: Asset loading

---

## Getting Help

### 1. Check Documentation
- [README.md](../README.md) - Project overview
- [ARCHITECTURE_DIAGRAMS.md](ARCHITECTURE_DIAGRAMS.md) - System design
- [TUTORIALS.md](TUTORIALS.md) - How-to guides

### 2. Search Issues
- GitHub Issues: [project issues]
- Check if problem already reported

### 3. Create Issue
Include:
- Browser version
- GPU model
- OS version
- Steps to reproduce
- Console errors
- Screenshots

### 4. Community
- Discord/Telegram (if available)
- Stack Overflow (tag: webgpu, webgl)

---

## Performance Benchmarks

### Expected FPS by Device

| Device | WebGPU | WebGL2 |
|--------|--------|--------|
| Desktop (RTX 3060+) | 120+ | 90+ |
| Desktop (GTX 1060) | 90+ | 60+ |
| Laptop (Integrated) | 60+ | 45+ |
| Mobile (Flagship) | 60+ | 45+ |
| Mobile (Mid-range) | 45+ | 30+ |

### Optimization Checklist

- [ ] Enable DRS (Dynamic Resolution Scaling)
- [ ] Reduce iterations on mobile (32 → 16)
- [ ] Lower resolution scale (1.0 → 0.75)
- [ ] Use simpler render modes
- [ ] Disable volumetric fog
- [ ] Reduce octave layers (8 → 4)
- [ ] Limit max FPS on mobile (60 → 30)

---

## Known Issues

### WebGPU
- Safari: Limited support (Technology Preview)
- Firefox: Behind flag
- Chrome: Full support since v113

### WebGL2
- iOS Safari: Limited to WebGL1
- Older browsers: No support

### Mobile
- iOS: No WebGPU (Safari limitation)
- Android: WebGPU support varies by device
- Touch: Multi-touch may conflict with OS gestures

---

## Troubleshooting Checklist

When reporting issues, include:

- [ ] Browser name and version
- [ ] GPU model (check in DevTools → System)
- [ ] OS and version
- [ ] WebGPU or WebGL2 backend
- [ ] Console errors (copy full text)
- [ ] Screenshot or video
- [ ] Steps to reproduce
- [ ] Expected vs actual behavior
- [ ] FPS from TelemetryHUD
- [ ] Settings from ControlsPanel
