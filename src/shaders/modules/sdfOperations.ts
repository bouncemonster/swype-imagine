/**
 * Common SDF Operations - Shared between WebGL and WebGPU shaders
 * Modular approach for better maintainability
 */

export const SDF_OPERATIONS_GLSL = `
// ===================================================================
// SDF Operations Library
// Based on IQ's SDF techniques + glChAoS.P optimizations
// ===================================================================

float opSmoothUnion(float d1, float d2, float k) {
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

// Domain repetition with smooth bounds
float opRepeat(vec3 p, vec3 c) {
  vec3 q = mod(p + 0.5 * c, c) - 0.5 * c;
  return length(q) - 0.1;
}

// Domain rotation
vec3 opRotate(vec3 p, float angle, vec3 axis) {
  float s = sin(angle);
  float c = cos(angle);
  vec3 k = normalize(axis);
  return p * c + cross(k, p) * s + k * dot(k, p) * (1.0 - c);
}

// Domain scaling
float opScale(vec3 p, float scale, float d) {
  return d / scale;
}

// Bend operation for organic shapes
vec3 opBend(vec3 p, float k) {
  float c = cos(p.x * k);
  float s = sin(p.x * k);
  return vec3(c * p.z + s * p.y, p.y, -s * p.z + c * p.y);
}

// Twist operation
vec3 opTwist(vec3 p, float k) {
  float c = cos(p.y * k);
  float s = sin(p.y * k);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}

// Space folding operations (from Marble Marcher)
void planeFold(inout vec3 p, vec3 n, float d) {
  p -= 2.0 * min(0.0, dot(p, n) - d) * n;
}

void mengerFold(inout vec3 p) {
  float a = min(p.x - p.y, 0.0);
  p.x -= a;
  p.y += a;
  a = min(p.x - p.z, 0.0);
  p.x -= a;
  p.z += a;
  a = min(p.y - p.z, 0.0);
  p.y -= a;
  p.z += a;
}

// Rotation helpers
void rotX(inout vec3 p, float a) {
  float s = sin(a), c = cos(a);
  p.yz = vec2(c * p.y + s * p.z, c * p.z - s * p.y);
}

void rotY(inout vec3 p, float a) {
  float s = sin(a), c = cos(a);
  p.xz = vec2(c * p.x - s * p.z, c * p.z + s * p.x);
}

void rotZ(inout vec3 p, float a) {
  float s = sin(a), c = cos(a);
  p.xy = vec2(c * p.x + s * p.y, c * p.y - s * p.x);
}
`;

export const SDF_OPERATIONS_WGSL = `
// ===================================================================
// SDF Operations Library (WGSL)
// Based on IQ's SDF techniques + glChAoS.P optimizations
// ===================================================================

fn opSmoothUnion(d1: f32, d2: f32, k: f32) -> f32 {
  let h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

fn opSmoothSubtraction(d1: f32, d2: f32, k: f32) -> f32 {
  let h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

fn opSmoothIntersection(d1: f32, d2: f32, k: f32) -> f32 {
  let h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

// Domain rotation
fn opRotate(p: vec3<f32>, angle: f32, axis: vec3<f32>) -> vec3<f32> {
  let s = sin(angle);
  let c = cos(angle);
  let k = normalize(axis);
  return p * c + cross(k, p) * s + k * dot(k, p) * (1.0 - c);
}

// Space folding operations (from Marble Marcher)
fn planeFold(p: ptr<function, vec3<f32>>, n: vec3<f32>, d: f32) {
  let pVal = *p;
  *p = pVal - 2.0 * min(0.0, dot(pVal, n) - d) * n;
}

fn mengerFold(p: ptr<function, vec3<f32>>) {
  var pVal = *p;
  var a = min(pVal.x - pVal.y, 0.0);
  pVal.x -= a;
  pVal.y += a;
  a = min(pVal.x - pVal.z, 0.0);
  pVal.x -= a;
  pVal.z += a;
  a = min(pVal.y - pVal.z, 0.0);
  pVal.y -= a;
  pVal.z += a;
  *p = pVal;
}

// Rotation helpers
fn rotX(p: ptr<function, vec3<f32>>, a: f32) {
  let s = sin(a);
  let c = cos(a);
  var pVal = *p;
  pVal.yz = vec2<f32>(c * pVal.y + s * pVal.z, c * pVal.z - s * pVal.y);
  *p = pVal;
}

fn rotY(p: ptr<function, vec3<f32>>, a: f32) {
  let s = sin(a);
  let c = cos(a);
  var pVal = *p;
  pVal.xz = vec2<f32>(c * pVal.x - s * pVal.z, c * pVal.z + s * pVal.x);
  *p = pVal;
}

fn rotZ(p: ptr<function, vec3<f32>>, a: f32) {
  let s = sin(a);
  let c = cos(a);
  var pVal = *p;
  pVal.xy = vec2<f32>(c * pVal.x + s * pVal.y, c * pVal.y - s * pVal.x);
  *p = pVal;
}
`;
