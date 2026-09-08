/**
 * Advanced Rendering Techniques 2026
 * Based on Fractr (WebGPU real-time fractal explorer) and latest research
 */

export const ADVANCED_RENDERING_GLSL = `
// ===================================================================
// Advanced Rendering Techniques 2026 (GLSL)
// From Fractr project + state-of-the-art research
// ===================================================================

// 1. PATH TRACING WITH GLOBAL ILLUMINATION
// One-bounce GI for realistic indirect lighting
vec3 pathTraceGI(vec3 col, vec3 p, vec3 n, vec3 rd, float t,
                 float curvNorm, float trapDetail, float ao) {
  // Direct lighting (existing)
  vec3 lightDir = normalize(vec3(0.5, 0.8, -0.3));
  vec3 lightColor = vec3(1.2, 1.05, 0.9);
  float diff = max(dot(n, lightDir), 0.0);
  vec3 directLight = col * lightColor * diff;
  
  // One-bounce indirect lighting
  // Sample random direction in hemisphere around normal
  vec2 seed = gl_FragCoord.xy + vec2(u_time * 100.0);
  float r1 = fract(sin(dot(seed, vec2(127.1, 311.7))) * 43758.5453);
  float r2 = fract(sin(dot(seed + vec2(73.1, 19.3), vec2(127.1, 311.7))) * 43758.5453);
  
  float theta = 2.0 * 3.14159265 * r1;
  float r = sqrt(r2);
  float x = r * cos(theta);
  float y = r * sin(theta);
  float z = sqrt(1.0 - r2);
  
  // Build tangent space
  vec3 tangent = abs(n.x) < 0.9 ? normalize(cross(vec3(1.0, 0.0, 0.0), n)) : normalize(cross(vec3(0.0, 1.0, 0.0), n));
  vec3 bitangent = cross(n, tangent);
  vec3 bounceDir = normalize(tangent * x + bitangent * y + n * z);
  
  // March bounce ray
  float bounceT = 0.002;
  vec3 bounceColor = vec3(0.05); // Sky ambient
  for (int i = 0; i < 32; i++) {
    vec3 bounceP = p + n * 0.002 + bounceDir * bounceT;
    float bounceD = sceneSDF(bounceP).x;
    if (bounceD < 0.0001) {
      // Hit something - sample color
      bounceColor = u_primary_color * 0.5 + u_accent_color * 0.3;
      break;
    }
    if (bounceT > 10.0) break;
    bounceT += max(bounceD, 0.01);
  }
  
  // Combine direct + indirect
  vec3 indirectLight = bounceColor * max(dot(n, bounceDir), 0.0) * 0.5;
  return directLight + indirectLight;
}

// 2. SUBSURFACE SCATTERING (SSS)
// Light bleeding through thin parts of the fractal
float calcSSS(vec3 p, vec3 n, vec3 lightDir) {
  vec3 enterPoint = p - n * 0.01;
  float thickness = 0.0;
  for (int i = 1; i <= 6; i++) {
    float dist = float(i) * 0.05;
    vec3 samplePos = enterPoint + lightDir * dist;
    float d = sceneSDF(samplePos).x;
    thickness += max(0.0, -d); // negative = inside surface
  }
  return exp(-thickness * 8.0);
}

vec3 renderSSS(vec3 col, vec3 p, vec3 n, float curvNorm, float ao) {
  vec3 lightDir = normalize(vec3(0.5, 1.0, -0.3));
  float sss = calcSSS(p, n, lightDir);
  
  // Warm translucent color for scattered light
  vec3 sssColor = vec3(1.0, 0.4, 0.2) * sss * 0.6;
  
  // Combine: base rendering + translucent backlight
  float backLight = max(dot(-n, lightDir), 0.0) * sss;
  return col + sssColor * backLight;
}

// 3. VOLUME RENDERING
// Treat fractal as density field for ethereal look
vec3 renderVolume(vec3 ro, vec3 rd, float curvNorm, float trapDetail) {
  float t = 0.0;
  vec3 accumColor = vec3(0.0);
  float accumAlpha = 0.0;
  float maxDist = 20.0;
  int maxSteps = 128;
  float stepSize = maxDist / float(maxSteps);
  
  for (int i = 0; i < maxSteps; i++) {
    if (accumAlpha > 0.95) break;
    if (t > maxDist) break;
    
    vec3 p = ro + rd * t;
    float d = sceneSDF(p).x;
    
    // Density: high when close to surface, zero when far
    float density = clamp(1.0 - d * 5.0, 0.0, 1.0);
    
    if (density > 0.01) {
      // Color based on position and curvature
      vec3 c1 = u_primary_color * 0.5;
      vec3 c2 = u_secondary_color * 0.7;
      vec3 c3 = u_accent_color * 0.9;
      vec3 sampleColor = mix(c1, c2, curvNorm) + c3 * trapDetail * 0.3;
      
      // Simple lighting from density gradient
      vec3 lightDir = normalize(vec3(0.5, 1.0, -0.3));
      float gradX = sceneSDF(p + vec3(0.01, 0.0, 0.0)).x - d;
      float gradY = sceneSDF(p + vec3(0.0, 0.01, 0.0)).x - d;
      float gradZ = sceneSDF(p + vec3(0.0, 0.0, 0.01)).x - d;
      vec3 grad = normalize(vec3(gradX, gradY, gradZ));
      float light = max(dot(grad, lightDir), 0.0) * 0.6 + 0.4;
      
      float alpha = density * stepSize * 8.0;
      vec3 contrib = sampleColor * light * alpha;
      accumColor += contrib * (1.0 - accumAlpha);
      accumAlpha += alpha * (1.0 - accumAlpha);
    }
    
    // Adaptive step size: smaller near surface
    t += max(stepSize, d * 0.5);
  }
  
  // Background blend
  vec3 bg = vec3(0.005, 0.004, 0.008) * (1.0 + 0.3 * sin(gl_FragCoord.y * 0.01));
  return accumColor + bg * (1.0 - accumAlpha);
}

// 4. SOFT SHADOWS (2026 technique)
// Penumbra shadows with realistic falloff
float calcSoftShadow(vec3 p, vec3 lightDir) {
  float shadow = 1.0;
  float t = 0.01;
  for (int i = 0; i < 48; i++) {
    float d = sceneSDF(p + lightDir * t).x;
    if (d < 0.0001) return 0.0;
    shadow = min(shadow, 12.0 * d / t);
    t += clamp(d, 0.01, 0.2);
    if (t > 10.0) break;
  }
  return clamp(shadow, 0.0, 1.0);
}

// 5. ADAPTIVE STEP SIZE (2026 optimization)
// Dynamic ray marching step based on distance and pixel size
float adaptiveStep(float d, float t, float pixelSize) {
  return max(d, t * pixelSize * 0.1);
}

// 6. IMPROVED NORMAL ESTIMATION (2026)
// Tetrahedral normal estimation for smoother surfaces
vec3 estimateNormal(vec3 p, float eps) {
  vec2 e = vec2(1.0, -1.0) * 0.5773 * eps;
  return normalize(
    e.xyy * sceneSDF(p + e.xyy).x +
    e.yyx * sceneSDF(p + e.yyx).x +
    e.yxy * sceneSDF(p + e.yxy).x +
    e.xxx * sceneSDF(p + e.xxx).x
  );
}

// 7. DEPTH OF FIELD (2026)
// Camera focus blur for cinematic look
vec3 applyDOF(vec3 col, vec2 uv, vec2 focusPoint, float aperture, float focalDist) {
  vec2 blur = (uv - focusPoint) * aperture;
  vec3 blurCol = vec3(0.0);
  float totalWeight = 0.0;
  
  // 9-tap poisson disk blur
  for (int i = 0; i < 9; i++) {
    vec2 offset = blur * float(i) * 0.1;
    vec3 sampleCol = texture(u_screenTexture, uv + offset).rgb;
    float weight = 1.0 - float(i) * 0.1;
    blurCol += sampleCol * weight;
    totalWeight += weight;
  }
  
  return blurCol / totalWeight;
}
`;

export const ADVANCED_RENDERING_WGSL = `
// ===================================================================
// Advanced Rendering Techniques 2026 (WGSL)
// From Fractr project + state-of-the-art research
// ===================================================================

// 1. PATH TRACING WITH GLOBAL ILLUMINATION
fn pathTraceGI(col: vec3<f32>, p: vec3<f32>, n: vec3<f32>, rd: vec3<f32>, t: f32,
               curvNorm: f32, trapDetail: f32, ao: f32) -> vec3<f32> {
  // Direct lighting
  let lightDir = normalize(vec3<f32>(0.5, 0.8, -0.3));
  let lightColor = vec3<f32>(1.2, 1.05, 0.9);
  let diff = max(dot(n, lightDir), 0.0);
  let directLight = col * lightColor * diff;
  
  // One-bounce indirect lighting
  let seed = in.position.xy + vec2<f32>(u.time * 100.0);
  let r1 = fract(sin(dot(seed, vec2<f32>(127.1, 311.7))) * 43758.5453);
  let r2 = fract(sin(dot(seed + vec2<f32>(73.1, 19.3), vec2<f32>(127.1, 311.7))) * 43758.5453);
  
  let theta = 2.0 * 3.14159265 * r1;
  let r = sqrt(r2);
  let x = r * cos(theta);
  let y = r * sin(theta);
  let z = sqrt(1.0 - r2);
  
  // Build tangent space
  var tangent: vec3<f32>;
  if (abs(n.x) < 0.9) {
    tangent = normalize(cross(vec3<f32>(1.0, 0.0, 0.0), n));
  } else {
    tangent = normalize(cross(vec3<f32>(0.0, 1.0, 0.0), n));
  }
  let bitangent = cross(n, tangent);
  let bounceDir = normalize(tangent * x + bitangent * y + n * z);
  
  // March bounce ray
  var bounceT = 0.002;
  var bounceColor = vec3<f32>(0.05); // Sky ambient
  for (var i = 0u; i < 32u; i++) {
    let bounceP = p + n * 0.002 + bounceDir * bounceT;
    let bounceD = sceneSDF(bounceP).distance;
    if (bounceD < 0.0001) {
      bounceColor = u.primary_color * 0.5 + u.accent_color * 0.3;
      break;
    }
    if (bounceT > 10.0) { break; }
    bounceT += max(bounceD, 0.01);
  }
  
  // Combine direct + indirect
  let indirectLight = bounceColor * max(dot(n, bounceDir), 0.0) * 0.5;
  return directLight + indirectLight;
}

// 2. SUBSURFACE SCATTERING (SSS)
fn calcSSS(p: vec3<f32>, n: vec3<f32>, lightDir: vec3<f32>) -> f32 {
  let enterPoint = p - n * 0.01;
  var thickness = 0.0;
  for (var i = 1u; i <= 6u; i++) {
    let dist = f32(i) * 0.05;
    let samplePos = enterPoint + lightDir * dist;
    let d = sceneSDF(samplePos).distance;
    thickness += max(0.0, -d); // negative = inside surface
  }
  return exp(-thickness * 8.0);
}

fn renderSSS(col: vec3<f32>, p: vec3<f32>, n: vec3<f32>, curvNorm: f32, ao: f32) -> vec3<f32> {
  let lightDir = normalize(vec3<f32>(0.5, 1.0, -0.3));
  let sss = calcSSS(p, n, lightDir);
  
  // Warm translucent color
  let sssColor = vec3<f32>(1.0, 0.4, 0.2) * sss * 0.6;
  
  // Combine: base + translucent backlight
  let backLight = max(dot(-n, lightDir), 0.0) * sss;
  return col + sssColor * backLight;
}

// 3. VOLUME RENDERING
fn renderVolume(ro: vec3<f32>, rd: vec3<f32>, curvNorm: f32, trapDetail: f32) -> vec3<f32> {
  var t = 0.0;
  var accumColor = vec3<f32>(0.0);
  var accumAlpha = 0.0;
  let maxDist = 20.0;
  let maxSteps = 128u;
  let stepSize = maxDist / f32(maxSteps);
  
  for (var i = 0u; i < maxSteps; i++) {
    if (accumAlpha > 0.95) { break; }
    if (t > maxDist) { break; }
    
    let p = ro + rd * t;
    let d = sceneSDF(p).distance;
    
    // Density field
    let density = clamp(1.0 - d * 5.0, 0.0, 1.0);
    
    if (density > 0.01) {
      let c1 = u.primary_color * 0.5;
      let c2 = u.secondary_color * 0.7;
      let c3 = u.accent_color * 0.9;
      let sampleColor = mix(c1, c2, curvNorm) + c3 * trapDetail * 0.3;
      
      // Lighting from gradient
      let lightDir = normalize(vec3<f32>(0.5, 1.0, -0.3));
      let gradX = sceneSDF(p + vec3<f32>(0.01, 0.0, 0.0)).distance - d;
      let gradY = sceneSDF(p + vec3<f32>(0.0, 0.01, 0.0)).distance - d;
      let gradZ = sceneSDF(p + vec3<f32>(0.0, 0.0, 0.01)).distance - d;
      let grad = normalize(vec3<f32>(gradX, gradY, gradZ));
      let light = max(dot(grad, lightDir), 0.0) * 0.6 + 0.4;
      
      let alpha = density * stepSize * 8.0;
      let contrib = sampleColor * light * alpha;
      accumColor = accumColor + contrib * (1.0 - accumAlpha);
      accumAlpha = accumAlpha + alpha * (1.0 - accumAlpha);
    }
    
    // Adaptive step size
    t += max(stepSize, d * 0.5);
  }
  
  // Background blend
  let bg = vec3<f32>(0.005, 0.004, 0.008);
  return accumColor + bg * (1.0 - accumAlpha);
}

// 4. SOFT SHADOWS
fn calcSoftShadow(p: vec3<f32>, lightDir: vec3<f32>) -> f32 {
  var shadow = 1.0;
  var t = 0.01;
  for (var i = 0u; i < 48u; i++) {
    let d = sceneSDF(p + lightDir * t).distance;
    if (d < 0.0001) { return 0.0; }
    shadow = min(shadow, 12.0 * d / t);
    t += clamp(d, 0.01, 0.2);
    if (t > 10.0) { break; }
  }
  return clamp(shadow, 0.0, 1.0);
}

// 5. ADAPTIVE STEP SIZE
fn adaptiveStep(d: f32, t: f32, pixelSize: f32) -> f32 {
  return max(d, t * pixelSize * 0.1);
}

// 6. IMPROVED NORMAL ESTIMATION (Tetrahedral)
fn estimateNormal(p: vec3<f32>, eps: f32) -> vec3<f32> {
  let e = vec2<f32>(1.0, -1.0) * 0.5773 * eps;
  return normalize(
    e.xyy * sceneSDF(p + e.xyy).distance +
    e.yyx * sceneSDF(p + e.yyx).distance +
    e.yxy * sceneSDF(p + e.yxy).distance +
    e.xxx * sceneSDF(p + e.xxx).distance
  );
}
`;
