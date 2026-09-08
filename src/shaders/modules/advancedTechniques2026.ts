/**
 * Advanced Fractal Rendering Techniques 2026
 * Based on latest research from Inigo Quilez, Mikael Hvidtfeldt Christensen, and modern GPU techniques
 * 
 * Key improvements:
 * 1. Hubbard-Douady potential for accurate distance estimation
 * 2. Tetrahedron normal estimation (4 samples instead of 6)
 * 3. IQ soft shadows via ray marching
 * 4. Orbit trap coloring with multiple trap shapes
 * 5. Smooth iteration count for band-free coloring
 */

// GLSL versions for WebGL2
export const ADVANCED_TECHNIQUES_GLSL = `
// ============================================================================
// 1. HUBBARD-DOUADY POTENTIAL - Accurate distance estimation
// Formula: DE(z) = 0.5 * |z_n| * log(|z_n|) / |z'_n|
// ============================================================================
float hubbardDouadyDE(float rz, float dr, float bailout) {
  // rz = |z_n|, dr = |z'_n|
  if (rz > bailout) {
    return 0.5 * rz * log(rz) / max(dr, 0.0001);
  }
  return 0.0;
}

// ============================================================================
// 2. TETRAHEDRON NORMAL ESTIMATION - 4 samples instead of 6
// Based on Inigo Quilez optimization
// ============================================================================
vec3 tetrahedronNormal(vec3 p, float eps, func<vec3, float> sdf) {
  // Tetrahedron vertices (optimized offset pattern)
  vec3 e = vec3(eps, -eps, -eps);
  vec3 n = sdf(p + e) * e +
           sdf(p + vec3(-eps, -eps, eps)) * vec3(-eps, -eps, eps) +
           sdf(p + vec3(-eps, eps, -eps)) * vec3(-eps, eps, -eps) +
           sdf(p + vec3(eps, eps, eps)) * vec3(eps, eps, eps);
  return normalize(n);
}

// ============================================================================
// 3. IQ SOFT SHADOWS - Ray marched soft shadows
// Formula: shadow = min(shadow, k * h / distance_traveled)
// ============================================================================
float iqSoftShadow(vec3 ro, vec3 rd, float mint, float maxt, float k, func<vec3, float> sdf) {
  float res = 1.0;
  float t = mint;
  float ph = 1e20;
  
  for (int i = 0; i < 64; i++) {
    float h = sdf(ro + rd * t);
    
    if (h < 0.0001) return 0.0;
    
    // Penumbra calculation
    float y = h * h / (2.0 * ph);
    float d = sqrt(h * h - y * y);
    res = min(res, k * d / max(0.001, t - y));
    ph = h;
    
    t += h;
    if (t > maxt) break;
  }
  return clamp(res, 0.0, 1.0);
}

// ============================================================================
// 4. ORBIT TRAPS - Multiple trap shapes for rich coloring
// ============================================================================
struct OrbitTrap {
  float point;      // Distance to origin
  float line;       // Distance to line (x-axis)
  float plane;      // Distance to plane (xy-plane)
  float sphere;     // Distance to unit sphere
  float cross;      // Distance to cross shape
};

OrbitTrap computeOrbitTrap(vec3 z) {
  OrbitTrap trap;
  trap.point = length(z);
  trap.line = length(z.yz);  // Distance to x-axis
  trap.plane = abs(z.z);      // Distance to xy-plane
  trap.sphere = abs(length(z) - 1.0);
  trap.cross = min(min(abs(z.x), abs(z.y)), abs(z.z));
  return trap;
}

vec3 orbitTrapColoring(OrbitTrap trap, vec3 primaryColor, vec3 secondaryColor, vec3 accentColor) {
  // Map trap distances to colors
  float t1 = 1.0 - exp(-0.5 * trap.point);
  float t2 = 1.0 - exp(-2.0 * trap.line);
  float t3 = 1.0 - exp(-3.0 * trap.plane);
  float t4 = 1.0 - exp(-1.5 * trap.sphere);
  float t5 = 1.0 - exp(-4.0 * trap.cross);
  
  // Blend colors based on trap values
  vec3 col = primaryColor * t1;
  col = mix(col, secondaryColor, t2);
  col = mix(col, accentColor, t3 * 0.5);
  col += vec3(0.1) * t4;
  col += vec3(0.05) * t5;
  
  return col;
}

// ============================================================================
// 5. SMOOTH ITERATION COUNT - Band-free coloring
// Formula: smooth_iter = n + 1 - log(log(|z_n|)) / log(power)
// ============================================================================
float smoothIterationCount(int iterations, float rz, float power) {
  if (rz > 1.0) {
    float logRz = log(rz);
    float logPower = log(power);
    return float(iterations) + 1.0 - log(logRz) / logPower;
  }
  return float(iterations);
}

vec3 smoothColoring(float smoothIter, vec3 color1, vec3 color2, float frequency) {
  float t = 0.5 + 0.5 * sin(smoothIter * frequency);
  return mix(color1, color2, t);
}

// ============================================================================
// 6. AMBIENT OCCLUSION FROM DISTANCE FIELD
// ============================================================================
float distanceFieldAO(vec3 p, vec3 n, float scale, func<vec3, float> sdf) {
  float ao = 0.0;
  float sca = 1.0;
  
  for (int i = 0; i < 5; i++) {
    float h = 0.01 + 0.12 * float(i) / 4.0;
    float d = sdf(p + h * n);
    ao += (h - d) * sca;
    sca *= 0.7;
  }
  
  return clamp(1.0 - 2.0 * ao * scale, 0.0, 1.0);
}
`;

// WGSL versions for WebGPU
export const ADVANCED_TECHNIQUES_WGSL = `
// ============================================================================
// 1. HUBBARD-DOUADY POTENTIAL - Accurate distance estimation
// ============================================================================
fn hubbardDouadyDE(rz: f32, dr: f32, bailout: f32) -> f32 {
  if (rz > bailout) {
    return 0.5 * rz * log(rz) / max(dr, 0.0001);
  }
  return 0.0;
}

// ============================================================================
// 2. TETRAHEDRON NORMAL ESTIMATION - 4 samples instead of 6
// ============================================================================
fn tetrahedronNormal(p: vec3<f32>, eps: f32, sdfFn: fn(vec3<f32>) -> f32) -> vec3<f32> {
  let e = vec3<f32>(eps, -eps, -eps);
  let n = sdfFn(p + e) * e +
          sdfFn(p + vec3<f32>(-eps, -eps, eps)) * vec3<f32>(-eps, -eps, eps) +
          sdfFn(p + vec3<f32>(-eps, eps, -eps)) * vec3<f32>(-eps, eps, -eps) +
          sdfFn(p + vec3<f32>(eps, eps, eps)) * vec3<f32>(eps, eps, eps);
  return normalize(n);
}

// ============================================================================
// 3. IQ SOFT SHADOWS - Ray marched soft shadows
// ============================================================================
fn iqSoftShadow(ro: vec3<f32>, rd: vec3<f32>, mint: f32, maxt: f32, k: f32, sdfFn: fn(vec3<f32>) -> f32) -> f32 {
  var res: f32 = 1.0;
  var t: f32 = mint;
  var ph: f32 = 1e20;
  
  for (var i: i32 = 0; i < 64; i = i + 1) {
    let h = sdfFn(ro + rd * t);
    
    if (h < 0.0001) { return 0.0; }
    
    let y = h * h / (2.0 * ph);
    let d = sqrt(h * h - y * y);
    res = min(res, k * d / max(0.001, t - y));
    ph = h;
    
    t = t + h;
    if (t > maxt) { break; }
  }
  return clamp(res, 0.0, 1.0);
}

// ============================================================================
// 4. ORBIT TRAPS - Multiple trap shapes for rich coloring
// ============================================================================
struct OrbitTrap {
  point: f32,
  line: f32,
  plane: f32,
  sphere: f32,
  cross: f32
}

fn computeOrbitTrap(z: vec3<f32>) -> OrbitTrap {
  var trap: OrbitTrap;
  trap.point = length(z);
  trap.line = length(z.yz);
  trap.plane = abs(z.z);
  trap.sphere = abs(length(z) - 1.0);
  trap.cross = min(min(abs(z.x), abs(z.y)), abs(z.z));
  return trap;
}

fn orbitTrapColoring(trap: OrbitTrap, primaryColor: vec3<f32>, secondaryColor: vec3<f32>, accentColor: vec3<f32>) -> vec3<f32> {
  let t1 = 1.0 - exp(-0.5 * trap.point);
  let t2 = 1.0 - exp(-2.0 * trap.line);
  let t3 = 1.0 - exp(-3.0 * trap.plane);
  let t4 = 1.0 - exp(-1.5 * trap.sphere);
  let t5 = 1.0 - exp(-4.0 * trap.cross);
  
  var col = primaryColor * t1;
  col = mix(col, secondaryColor, t2);
  col = mix(col, accentColor, t3 * 0.5);
  col = col + vec3<f32>(0.1) * t4;
  col = col + vec3<f32>(0.05) * t5;
  
  return col;
}

// ============================================================================
// 5. SMOOTH ITERATION COUNT - Band-free coloring
// ============================================================================
fn smoothIterationCount(iterations: i32, rz: f32, power: f32) -> f32 {
  if (rz > 1.0) {
    let logRz = log(rz);
    let logPower = log(power);
    return f32(iterations) + 1.0 - log(logRz) / logPower;
  }
  return f32(iterations);
}

fn smoothColoring(smoothIter: f32, color1: vec3<f32>, color2: vec3<f32>, frequency: f32) -> vec3<f32> {
  let t = 0.5 + 0.5 * sin(smoothIter * frequency);
  return mix(color1, color2, t);
}

// ============================================================================
// 6. AMBIENT OCCLUSION FROM DISTANCE FIELD
// ============================================================================
fn distanceFieldAO(p: vec3<f32>, n: vec3<f32>, scale: f32, sdfFn: fn(vec3<f32>) -> f32) -> f32 {
  var ao: f32 = 0.0;
  var sca: f32 = 1.0;
  
  for (var i: i32 = 0; i < 5; i = i + 1) {
    let h = 0.01 + 0.12 * f32(i) / 4.0;
    let d = sdfFn(p + h * n);
    ao = ao + (h - d) * sca;
    sca = sca * 0.7;
  }
  
  return clamp(1.0 - 2.0 * ao * scale, 0.0, 1.0);
}
`;
