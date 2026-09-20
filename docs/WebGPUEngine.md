# WebGPUEngine.ts

**238 lines | WebGPU renderer**

## Purpose
WebGPU rendering engine using WGSL shaders. Alternative to WebGLEngine with modern GPU API.

## Key Differences from WebGLEngine
| Feature | WebGLEngine | WebGPUEngine |
|---------|-------------|--------------|
| Shader language | GLSL ES 3.0 | WGSL |
| Shader size | 161KB (4195 lines) | 158KB (4069 lines) |
| Fractal coverage | All 431 indices dispatched | 131/431 (indices 0-130); 131-430 fall back to phyllotaxis |
| Async compilation | KHR_parallel_shader_compile | createRenderPipelineAsync |
| Context loss | FractalCanvas handles | device.lost promise |
| Draw call | drawArrays(TRIANGLES, 0, 3) - fullscreen triangle | draw(3, 1, 0, 0) - fullscreen triangle |

## Key Methods

### `static isSupported()` (lines 24-26)
Checks `navigator.gpu` availability.

### `init()` (lines 28-159)
1. Request adapter with 5s timeout (prevents headless hang)
2. Read adapter info (vendor, architecture)
3. Request device + handle device.lost
4. Configure canvas context (premultiplied alpha)
5. Clear surface immediately (prevents blank screen)
6. Create shader module + check compilation errors
7. Create render pipeline async (prevents main-thread stalls)
8. Create 208-byte uniform buffer (52 floats * 4 bytes; vec3 alignment padding)
9. Create bind group

### `render(timeSec, params)` (lines 161-225)
1. Guard: skip if destroyed, canvas size 0, or > 4096px (no time/zoom validation)
2. Pack uniforms via `FractalEngineBase.packUniforms()`
3. Write to GPU uniform buffer
4. Create command encoder + render pass
5. Draw fullscreen triangle (3 vertices)
6. Submit command buffer

### `destroy()` (lines 227-237)
Destroys: uniformBuffer, device, nulls all references.

## Critical Notes
1. **Fullscreen triangle**: draw(3) instead of quad (4) - more efficient
2. **208 bytes aligned**: 52 floats * 4 = 208 (WGSL vec3 alignment padding grows the 48-float payload)
3. **5s adapter timeout**: Prevents hang on headless/software renderers
4. **device.lost handler**: Sets isDestroyed flag, prevents frame errors
5. **Silent frame skip**: Render errors caught, frame skipped gracefully
6. **Uniform layout**: same 48 packed floats as WebGLEngine (indices 0-47), plus 4 alignment pad floats (48-51) to satisfy WGSL vec3 alignment = 52 floats / 208 bytes
7. **Fractal coverage**: implements 131/431 types (indices 0-130); types 131-430 fall back to mapPhyllotaxis (webgpuShaders.ts:3096)

## Dependencies
- `webgpuShaders.ts` - WGSL shader source (158KB)
- `FractalEngineBase.ts` - uniform packing
- `RenderDiagnostics.ts` - performance tracking
- `UserProblemLogger.ts` - error logging
