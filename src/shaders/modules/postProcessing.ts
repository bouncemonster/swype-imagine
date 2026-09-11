/**
 * Post-Processing Effects - From glChAoS.P and custom implementations
 * Modular approach for better maintainability
 */

export const POST_PROCESSING_GLSL = `
// ===================================================================
// Post-Processing Library (GLSL)
// Based on glChAoS.P techniques + custom enhancements
// ===================================================================

// Poisson disk samples for ambient occlusion (from glChAoS.P)
vec2 poissonDisk[16] = vec2[]( 
  vec2( -0.94201624, -0.39906216 ), 
  vec2( 0.94558609, -0.76890725 ), 
  vec2( -0.094184101, -0.92938870 ), 
  vec2( 0.34495938, 0.29387760 ), 
  vec2( -0.91588581, 0.45771432 ), 
  vec2( -0.81544232, -0.87912464 ), 
  vec2( -0.38277543, 0.27676845 ), 
  vec2( 0.97484398, 0.75648379 ), 
  vec2( 0.44323325, -0.97511554 ), 
  vec2( 0.53742981, -0.47373420 ), 
  vec2( -0.26496911, -0.41893023 ), 
  vec2( 0.79197514, 0.19090188 ), 
  vec2( -0.24188840, 0.99706507 ), 
  vec2( -0.81409955, 0.91437590 ), 
  vec2( 0.19984126, 0.78641367 ), 
  vec2( 0.14383161, -0.14100790 ) 
);

// Bicubic interpolation (from glChAoS.P - TheRealMJP)
float bicubic(sampler2D tex, vec2 uv, float idx) {
  vec2 pt = uv * textureSize(tex, 0);
  vec3 dp = vec3(1.0, 0.0, -1.0);
  vec2 p1 = floor(pt);
  vec2 p2 = p1 + dp.xx;
  vec4 p = vec4(p1, p2);

  vec4 v0 = vec4(
    texelFetch(tex, ivec2(p.xy), 0)[idx],
    texelFetch(tex, ivec2(p.xw), 0)[idx],
    texelFetch(tex, ivec2(p.zy), 0)[idx],
    texelFetch(tex, ivec2(p.zw), 0)[idx]
  );
  vec4 vX = vec4(
    texelFetch(tex, ivec2(p.xy + dp.xy), 0)[idx] - texelFetch(tex, ivec2(p.xy + dp.zy), 0)[idx],
    texelFetch(tex, ivec2(p.xw + dp.xy), 0)[idx] - texelFetch(tex, ivec2(p.xw + dp.zy), 0)[idx],
    texelFetch(tex, ivec2(p.zy + dp.xy), 0)[idx] - texelFetch(tex, ivec2(p.zy + dp.zy), 0)[idx],
    texelFetch(tex, ivec2(p.zw + dp.xy), 0)[idx] - texelFetch(tex, ivec2(p.zw + dp.zy), 0)[idx]
  ) * 0.5;
  vec4 vY = vec4(
    texelFetch(tex, ivec2(p.xy + dp.yx), 0)[idx] - texelFetch(tex, ivec2(p.xy + dp.yz), 0)[idx],
    texelFetch(tex, ivec2(p.xw + dp.yx), 0)[idx] - texelFetch(tex, ivec2(p.xw + dp.yz), 0)[idx],
    texelFetch(tex, ivec2(p.zy + dp.yx), 0)[idx] - texelFetch(tex, ivec2(p.zy + dp.yz), 0)[idx],
    texelFetch(tex, ivec2(p.zw + dp.yx), 0)[idx] - texelFetch(tex, ivec2(p.zw + dp.yz), 0)[idx]
  ) * 0.5;
  vec4 vXY = vec4(
    texelFetch(tex, ivec2(p.xy + dp.xx), 0)[idx] - texelFetch(tex, ivec2(p.xy + dp.xz), 0)[idx] - texelFetch(tex, ivec2(p.xy + dp.zx), 0)[idx] + texelFetch(tex, ivec2(p.xy + dp.zz), 0)[idx],
    texelFetch(tex, ivec2(p.xw + dp.xx), 0)[idx] - texelFetch(tex, ivec2(p.xw + dp.xz), 0)[idx] - texelFetch(tex, ivec2(p.xw + dp.zx), 0)[idx] + texelFetch(tex, ivec2(p.xw + dp.zz), 0)[idx],
    texelFetch(tex, ivec2(p.zy + dp.xx), 0)[idx] - texelFetch(tex, ivec2(p.zy + dp.xz), 0)[idx] - texelFetch(tex, ivec2(p.zy + dp.zx), 0)[idx] + texelFetch(tex, ivec2(p.zy + dp.zz), 0)[idx],
    texelFetch(tex, ivec2(p.zw + dp.xx), 0)[idx] - texelFetch(tex, ivec2(p.zw + dp.xz), 0)[idx] - texelFetch(tex, ivec2(p.zw + dp.zx), 0)[idx] + texelFetch(tex, ivec2(p.zw + dp.zz), 0)[idx]
  ) * 0.25;
  
  mat4 Q = mat4(vec4(v0.xz, vX.xz), vec4(v0.yw, vX.yw), vec4(vY.xz, vXY.xz), vec4(vY.yw, vXY.yw));
  mat4 S = mat4(1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, -3.0, 3.0, -2.0, -1.0, 2.0, -2.0, 1.0, 1.0);
  mat4 T = mat4(1.0, 0.0, -3.0, 2.0, 0.0, 0.0, 3.0, -2.0, 0.0, 1.0, -2.0, 1.0, 0.0, 0.0, -1.0, 1.0);
  mat4 A = T * Q * S;
  float t = fract(p.x);
  float u = fract(p.y);
  vec4 tv = vec4(1.0, t, t * t, t * t * t);
  vec4 uv = vec4(1.0, u, u * u, u * u * u);
  return dot(tv * A, uv);
}

// Enhanced bloom with color tinting
vec3 applyBloom(vec3 col, vec3 accentColor, float threshold, float strength) {
  float brightness = dot(col, vec3(0.299, 0.587, 0.114));
  float bloomStrength = max(brightness - threshold, 0.0) * strength;
  vec3 bloomCol = col * bloomStrength + accentColor * bloomStrength * 0.15;
  return col + bloomCol;
}

// Vignette effect
vec3 applyVignette(vec3 col, vec2 uv, float strength) {
  float vignette = 1.0 - strength * length(uv - 0.5);
  return col * vignette;
}

// Chromatic aberration
vec3 applyChromaticAberration(sampler2D tex, vec2 uv, float strength) {
  vec2 center = uv - 0.5;
  float dist = length(center);
  vec2 offset = center * dist * strength;
  float r = texture(tex, uv + offset).r;
  float g = texture(tex, uv).g;
  float b = texture(tex, uv - offset).b;
  return vec3(r, g, b);
}

// Film grain
float filmGrain(vec2 uv, float time, float strength) {
  float grain = fract(sin(dot(uv * time, vec2(12.9898, 78.233))) * 43758.5453);
  return (grain - 0.5) * strength;
}

// Tone mapping (ACES)
vec3 acesToneMap(vec3 col) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((col * (a * col + b)) / (col * (c * col + d) + e), 0.0, 1.0);
}

// Gamma correction
vec3 gammaCorrect(vec3 col, float gamma) {
  return pow(max(col, 0.0), vec3(1.0 / gamma)); // Guard against negative values causing NaN
}
`;

export const POST_PROCESSING_WGSL = `
// ===================================================================
// Post-Processing Library (WGSL)
// Based on glChAoS.P techniques + custom enhancements
// ===================================================================

// Note: WGSL versions use 'let' instead of 'float', textureSample instead of texture
// Full implementations in webgpuShaders.ts

fn acesToneMap(col: vec3<f32>) -> vec3<f32> {
  let a = 2.51;
  let b = 0.03;
  let c = 2.43;
  let d = 0.59;
  let e = 0.14;
  return clamp((col * (a * col + b)) / (col * (c * col + d) + e), vec3<f32>(0.0), vec3<f32>(1.0));
}

fn applyBloom(col: vec3<f32>, accentColor: vec3<f32>, threshold: f32, strength: f32) -> vec3<f32> {
  let brightness = dot(col, vec3<f32>(0.299, 0.587, 0.114));
  let bloomStrength = max(brightness - threshold, 0.0) * strength;
  let bloomCol = col * bloomStrength + accentColor * bloomStrength * 0.15;
  return col + bloomCol;
}

fn applyVignette(col: vec3<f32>, uv: vec2<f32>, strength: f32) -> vec3<f32> {
  let vignette = 1.0 - strength * length(uv - vec2<f32>(0.5));
  return col * vignette;
}
`;
