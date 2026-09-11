# WebGPUEngine.ts

**236 lines | WebGPU renderer**

## Purpose
WebGPU rendering engine using WGSL shaders. Alternative to WebGLEngine with modern GPU API.

## Key Differences from WebGLEngine
| Feature | WebGLEngine | WebGPUEngine |
|---------|-------------|--------------|
| Shader language | GLSL ES 3.0 | WGSL |
| Shader size | 187KB (4654 lines) | 140KB (3538 lines) |
| Async compilation | KHR_parallel_shader_compile | createRenderPipelineAsync |
| Context loss | FractalCanvas handles | device.lost promise |
| Draw call | drawArrays(TRIANGLE_STRIP, 0, 4) | draw(3, 1, 0, 0) - fullscreen triangle |

## Key Methods

### `static isSupported()` (line 25-27)
Checks `navigator.gpu` availability.

### `init()` (lines 29-160)
1. Request adapter with 5s timeout (prevents headless hang)
2. Read adapter info (vendor, architecture)
3. Request device + handle device.lost
4. Configure canvas context (premultiplied alpha)
5. Clear surface immediately (prevents blank screen)
6. Create shader module + check compilation errors
7. Create render pipeline async (prevents main-thread stalls)
8. Create 192-byte uniform buffer (48 floats * 4 bytes)
9. Create bind group

### `render(timeSec, params)` (lines 162-222)
1. Pack uniforms via `FractalEngineBase.packUniforms()`
2. Validate time [0, 1000] and zoom [0.01, 100]
3. Write to GPU uniform buffer
4. Create command encoder + render pass
5. Draw fullscreen triangle (3 vertices)
6. Submit command buffer

### `destroy()` (lines 224-234)
Destroys: uniformBuffer, device, nulls all references.

## Critical Notes
1. **Fullscreen triangle**: draw(3) instead of quad (4) - more efficient
2. **192 bytes aligned**: 48 floats * 4 = 192 (already 16-byte aligned)
3. **5s adapter timeout**: Prevents hang on headless/software renderers
4. **device.lost handler**: Sets isDestroyed flag, prevents frame errors
5. **Silent frame skip**: Render errors caught, frame skipped gracefully
6. **Same uniform layout**: 48 floats packed identically to WebGLEngine

## Dependencies
- `webgpuShaders.ts` - WGSL shader source (140KB)
- `FractalEngineBase.ts` - uniform packing
- `RenderDiagnostics.ts` - performance tracking
- `MathValidation.ts` - uniform validation
- `UserProblemLogger.ts` - error logging
