# WebGLEngine.ts

**523 lines | WebGL2 renderer**

## Purpose
Primary rendering engine. Lazily compiles per-fractal GLSL shaders via ShaderManager, uploads uniforms, renders fractals.

## Key Methods
- `init()` - Context creation (3 fallback attempts) + ShaderManager setup. Does NOT compile shaders synchronously: the first compile is deferred via `setTimeout(0)` (line ~147) so the browser can process events before the heavy work. VAO setup and uniform-location caching are also deferred to `lazyCompileShader()` (the program doesn't exist yet at init time).
- `onCompileProgress?: (stage, percent) => void` (line 35) - Public hook fed by the ShaderManager progress callback (lines 138-141, logs `[ShaderManager] <stage>: Fractal N (<pct>%)`) so the UI loading bar tracks real compile/link stages.
- `lazyCompileShader(fractalIdx)` - Requests a minimal per-fractal program from ShaderManager; on success switches program, sets up VAO, caches uniform locations (`cacheUniformLocations`, shared `UNIFORM_NAMES` list), marks the new index protected in the LRU, and calls `beginWarmup()`.
- `canPrefetch` / `prefetchFractal(fractalIdx)` - Background pre-compile of the predicted-next fractal shader into the ShaderManager LRU cache. Safe only when the initial shader is up, no swap is in flight, and no other prefetch is queued (`canPrefetch`). Never touches the active program — the user keeps viewing the current fractal while the GPU process compiles via the same non-blocking KHR poll loop.
- `pollCompletion()` - Non-blocking `KHR_parallel_shader_compile` COMPLETION_STATUS_KHR poll: up to 3200 spins with `setTimeout(5ms)` yields and a single `gl.flush()` kickoff (never per-spin).
- `beginWarmup()` - After each lazy compile, runs ~24 frames at quality 0 so driver ramp-up can't spike frame times, then restores pre-swap quality.
- `render(timeSec, params)` - Frame rendering. On a fractal-type change: if the program is already in the LRU cache (prefetched), `adoptCachedProgram()` swaps it SYNCHRONOUSLY — the very next draw call shows the new fractal, no swap guard, no loading overlay. Otherwise the async lazy-compile path runs with the `isSwappingShader` guard (prevents re-entrant render; 300-frame safety timeout). Returns `true` only when `gl.drawArrays` actually executed.
- `destroy()` - GPU resource cleanup

## Uniform Buffer (48 floats / 192 bytes)
Packed in `FractalEngineBase.packUniforms()`, uploaded per-frame via pre-allocated `Float32Array(48)`.

## Fallback Path (monolithic shader)
If lazy compilation throws (e.g. function extraction or link failure), `lazyCompileShader()` catches the error and DOES compile the full monolithic GLSL (`GLSL_VERTEX_SHADER` + `GLSL_FRAGMENT_SHADER`, lines 292-355) with the same non-blocking `pollCompletion()` waits, then sets up VAO/uniform cache for that program and marks `currentFractalIdx = -1`. This path is heavier (≈4121-line fragment shader) but keeps the app rendering.

## ShaderManager (lazy compilation subsystem)
`ShaderManager.ts` (415 lines) is the real compile pipeline behind WebGLEngine:

- **Lazy minimal assembly**: parses `FRAGMENT_SHADER_SOURCE` once (`parseSections`) into header + per-fractal `map*` function + a generated minimal `sceneSDF` + footer. The split result is cached (`cachedLines`), so the 4000+-line string is never re-split. Assembled shader: ~1017 lines vs ~4121 monolithic (runtime logs show 71-line header + 878-line footer).
- **Minimal-path validity gating** (`buildMinimalFragmentShader`): the engine feeds the FractalType *catalog* ordinal (0-430) in as the Nth-`map*`-function index, but the monolith has only ~151 `map*` functions plus shared `*Base`/`*Variant` dispatch helpers interleaved. Two guards keep the fast path correct: (1) if the extracted function name matches `/(?:Base|Variant)$/` it is a shared helper, not a self-contained per-type function, so the full `FRAGMENT_SHADER_SOURCE` is returned (it picks the right fractal at runtime via `evalSingleFractal(u_fractal_type)`); (2) otherwise `resolveHelperSources` transitively pulls in any body-region helper the fractal function calls (e.g. `project4Dto3D` for the 4D polytopes), so the minimal shader compiles instead of failing with "no matching overloaded function found".
- **Direct dispatch**: the generated `sceneSDF` calls the fractal function directly (not through `evalSingleFractal`), so the GLSL linker doesn't pull in the other ~44 map functions.
- **LRU cache**: `maxCacheSize = 8` compiled programs; least-recently-used program is deleted on overflow (`cacheShader`). Eviction SKIPS `setProtectedIndices()` entries (the program on screen must never be deleted); if all entries are protected the cache temporarily overflows instead. `isCached(i)` / `getCachedProgram(i)` power the engine's instant-swap fast path; `clearCache(exceptFractalIndex?)` and `getCacheStats()` are exposed.
- **In-flight dedupe**: `getShaderForFractal` keys pending compiles in an `inFlight` map — a background prefetch and a user switch to the SAME fractal share one compile instead of racing (which would leak a WebGLProgram).
- **Progress reporting** (`reportProgress`): parsing=10% → compiling=40% → linking=80% → complete=100%, surfaced to `WebGLEngine.onCompileProgress`.
- **Non-blocking waits** (`waitUntilCompiled`): polls COMPLETION_STATUS_KHR with `setTimeout(5ms)`; budget link=3200 spins, stage=800 spins. The budget must exceed worst-case driver link time (ANGLE/D3D11 defers compilation to link time, ~11s for heavy raymarch shaders).
- **Flush discipline**: exactly ONE `gl.flush()` per `compileShader`/`linkProgram` call site to kick the GPU process — NEVER inside the poll loop. Per-spin `flush()` is a synchronous GPU-process IPC round-trip and was the cause of the old 10-25s browser freeze; raising the budget so COMPLETION_STATUS flips inside the loop keeps the final LINK_STATUS read instant (reads ~0ms).

## Critical Notes
1. Context loss handled by `FractalCanvas.tsx`, NOT here
2. 3 fallback attempts for context creation
3. KHR_parallel_shader_compile for async compilation — completion is polled non-blockingly; blocking COMPILE_STATUS/LINK_STATUS reads only happen after the poll flips
4. Ambient color used directly in shader (not separate uniform)
5. `gl.getError()` and per-frame validation removed from the render hot path (sync stalls / V8 inlining)

## Dependencies
- `webglShaders.ts` - GLSL source code
- `ShaderManager.ts` - lazy per-fractal compilation + LRU program cache
- `FractalEngineBase.ts` - uniform packing (uses `fractalMappers.ts` for string→index mapping)
- `RenderDiagnostics.ts` - performance tracking
- `UserProblemLogger.ts` - error logging
