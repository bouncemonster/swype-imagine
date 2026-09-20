/**
 * L-System Variations 1-50 for WebGL2 Shaders - COMPRESSED
 * kkrieger-style: 1414 lines → ~110 lines (13x compression)
 * Preserves ALL mathematical formulas and visual quality
 */

export const LSYSTEM_VARIATIONS_GLSL = `
// L-System Variations 1-50 - PARAMETERIZED (compressed from 1414 lines)
// op: 0=binaryTree, 1=plant, 2=koch, 3=dragon, 4=sierpinski, 5=hilbert
//     6=barnsley, 7=fern, 8=snowflake, 9=hexagon, 10=spiral

float mapLSystemBase(vec3 p, float t, float phi, int iters, float scale, int op, float angle, float threshold, vec3 offset) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float ang = angle;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 8.0) break; // Increased from 2.0 to handle scale up to 3.02, iterations from 16 to 32
    
    if (op == 0) { // Binary Tree
      if (z.x > 0.0) { z.x -= 1.0; z.xy = mat2(0.7,-0.7,0.7,0.7)*z.xy; }
      else { z.x += 1.0; z.xy = mat2(0.7,0.7,-0.7,0.7)*z.xy; }
    } else if (op == 1) { // Plant
      float c = cos(ang), s = sin(ang);
      z.xy = mat2(c,-s,s,c)*z.xy;
      if (i % 2 == 0) z.y -= threshold; else z.z -= threshold;
      ang += 0.056;
    } else if (op == 2) { // Koch Curve
      if (abs(z.x) < threshold && abs(z.y) < threshold) z.z += 0.33;
      z = fract(z) - 0.5;
    } else if (op == 3) { // Dragon Curve
      if (z.x > 0.06) { z.x = -z.x; float c = cos(ang), s = sin(ang); z.xy = mat2(c,-s,s,c)*z.xy; }
      z.x -= 0.33;
    } else if (op == 4) { // Sierpinski
      if (z.x + z.y < -0.15) z.xy = -z.yx;
      if (z.x + z.z < -0.13) z.xz = -z.zx;
      z = abs(z) - threshold;
    } else if (op == 5) { // Hilbert
      // Root-cause fix: prior body had dead-code "vec3 a" (never used) plus an
      // abs(z-0.5)*2.0 doubling with offset=0, so no orbit stayed bounded -> empty
      // SDF. Use a bounded octant fold with an internal translation instead.
      z = abs(z);
      if (z.x < z.y) z.xy = z.yx;
      if (z.x < z.z) z.xz = z.zx;
      if (z.y < z.z) z.yz = z.zy;
      z -= 0.5;
    } else if (op == 6) { // Barnsley
      if (z.x < 0.0) { z.x = -z.x; z.xy = mat2(0.74,-0.23,0.23,0.74)*z.xy; }
      else { z.x = -z.x; z.xy = mat2(0.74,0.23,-0.23,0.74)*z.xy; }
    } else if (op == 7) { // Fern
      if (z.x > 0.0) { z.x -= 0.5; z.xy = mat2(0.83,0.15,-0.15,0.83)*z.xy; }
      else { z.x += 0.5; z.xy = mat2(0.83,-0.15,0.15,0.83)*z.xy; }
      z.y -= 0.2;
    } else if (op == 8) { // Snowflake
      z = abs(z);
      z.xy = mat2(0.5,-0.866,0.866,0.5)*z.xy;
      z = z - threshold;
    } else if (op == 9) { // Hexagon
      z = abs(z);
      z.xy = mat2(0.5,-0.866,0.866,0.5)*z.xy;
      if (z.x < z.y) z.xy = z.yx;
      z = z - threshold;
    } else if (op == 10) { // Spiral
      float c = cos(ang), s = sin(ang);
      z.xy = mat2(c,-s,s,c)*z.xy;
      z = z - threshold;
      ang += 0.1;
    }
    
    z = z * scale + offset;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// 50 variants: (scale, op, angle, threshold, ox, oy, oz)
float mapLSystemVariant(vec3 p, float t, float phi, int iters, int idx) {
  if (idx == 1) return mapLSystemBase(p,t,phi,iters, 2.0, 0, 0.0, 0.0, vec3(0.0));
  if (idx == 2) return mapLSystemBase(p,t,phi,iters, 1.74, 1, 0.35, 0.42, vec3(0.0));
  if (idx == 3) return mapLSystemBase(p,t,phi,iters, 2.62, 2, 0.0, 0.22, vec3(0.0));
  if (idx == 4) return mapLSystemBase(p,t,phi,iters, 1.36, 3, 0.62, 0.0, vec3(0.0));
  if (idx == 5) return mapLSystemBase(p,t,phi,iters, 2.0, 4, 0.0, 0.84, vec3(0.0));
  if (idx == 6) return mapLSystemBase(p,t,phi,iters, 2.0, 5, 0.0, 0.0, vec3(0.0));
  if (idx == 7) return mapLSystemBase(p,t,phi,iters, 1.8, 6, 0.0, 0.0, vec3(0.0));
  if (idx == 8) return mapLSystemBase(p,t,phi,iters, 1.6, 7, 0.0, 0.0, vec3(0.0));
  if (idx == 9) return mapLSystemBase(p,t,phi,iters, 2.4, 8, 0.0, 0.33, vec3(0.0));
  if (idx == 10) return mapLSystemBase(p,t,phi,iters, 2.3, 9, 0.0, 0.4, vec3(0.0));
  if (idx == 11) return mapLSystemBase(p,t,phi,iters, 2.1, 0, 0.0, 0.0, vec3(0.0));
  if (idx == 12) return mapLSystemBase(p,t,phi,iters, 1.84, 1, 0.45, 0.52, vec3(0.0));
  if (idx == 13) return mapLSystemBase(p,t,phi,iters, 2.72, 2, 0.0, 0.32, vec3(0.0));
  if (idx == 14) return mapLSystemBase(p,t,phi,iters, 1.42, 3, 0.72, 0.0, vec3(0.0));
  if (idx == 15) return mapLSystemBase(p,t,phi,iters, 2.1, 4, 0.0, 0.94, vec3(0.0));
  if (idx == 16) return mapLSystemBase(p,t,phi,iters, 2.1, 5, 0.0, 0.0, vec3(0.0));
  if (idx == 17) return mapLSystemBase(p,t,phi,iters, 1.9, 6, 0.0, 0.0, vec3(0.0));
  if (idx == 18) return mapLSystemBase(p,t,phi,iters, 1.7, 7, 0.0, 0.0, vec3(0.0));
  if (idx == 19) return mapLSystemBase(p,t,phi,iters, 2.5, 8, 0.0, 0.43, vec3(0.0));
  if (idx == 20) return mapLSystemBase(p,t,phi,iters, 2.4, 9, 0.0, 0.5, vec3(0.0));
  if (idx == 21) return mapLSystemBase(p,t,phi,iters, 2.2, 0, 0.0, 0.0, vec3(0.0));
  if (idx == 22) return mapLSystemBase(p,t,phi,iters, 1.94, 1, 0.55, 0.62, vec3(0.0));
  if (idx == 23) return mapLSystemBase(p,t,phi,iters, 2.82, 2, 0.0, 0.42, vec3(0.0));
  if (idx == 24) return mapLSystemBase(p,t,phi,iters, 1.48, 3, 0.82, 0.0, vec3(0.0));
  if (idx == 25) return mapLSystemBase(p,t,phi,iters, 2.2, 4, 0.0, 1.04, vec3(0.0));
  if (idx == 26) return mapLSystemBase(p,t,phi,iters, 2.2, 5, 0.0, 0.0, vec3(0.0));
  if (idx == 27) return mapLSystemBase(p,t,phi,iters, 2.0, 6, 0.0, 0.0, vec3(0.0));
  if (idx == 28) return mapLSystemBase(p,t,phi,iters, 1.8, 7, 0.0, 0.0, vec3(0.0));
  if (idx == 29) return mapLSystemBase(p,t,phi,iters, 2.6, 8, 0.0, 0.53, vec3(0.0));
  if (idx == 30) return mapLSystemBase(p,t,phi,iters, 2.5, 9, 0.0, 0.6, vec3(0.0));
  if (idx == 31) return mapLSystemBase(p,t,phi,iters, 2.3, 0, 0.0, 0.0, vec3(0.0));
  if (idx == 32) return mapLSystemBase(p,t,phi,iters, 2.04, 1, 0.65, 0.72, vec3(0.0));
  if (idx == 33) return mapLSystemBase(p,t,phi,iters, 2.92, 2, 0.0, 0.52, vec3(0.0));
  if (idx == 34) return mapLSystemBase(p,t,phi,iters, 1.54, 3, 0.92, 0.0, vec3(0.0));
  if (idx == 35) return mapLSystemBase(p,t,phi,iters, 2.3, 4, 0.0, 1.14, vec3(0.0));
  if (idx == 36) return mapLSystemBase(p,t,phi,iters, 2.3, 5, 0.0, 0.0, vec3(0.0));
  if (idx == 37) return mapLSystemBase(p,t,phi,iters, 2.1, 6, 0.0, 0.0, vec3(0.0));
  if (idx == 38) return mapLSystemBase(p,t,phi,iters, 1.9, 7, 0.0, 0.0, vec3(0.0));
  if (idx == 39) return mapLSystemBase(p,t,phi,iters, 2.7, 8, 0.0, 0.63, vec3(0.0));
  if (idx == 40) return mapLSystemBase(p,t,phi,iters, 2.6, 9, 0.0, 0.7, vec3(0.0));
  if (idx == 41) return mapLSystemBase(p,t,phi,iters, 2.4, 0, 0.0, 0.0, vec3(0.0));
  if (idx == 42) return mapLSystemBase(p,t,phi,iters, 2.14, 1, 0.75, 0.82, vec3(0.0));
  if (idx == 43) return mapLSystemBase(p,t,phi,iters, 3.02, 2, 0.0, 0.62, vec3(0.0));
  if (idx == 44) return mapLSystemBase(p,t,phi,iters, 1.60, 3, 1.02, 0.0, vec3(0.0));
  if (idx == 45) return mapLSystemBase(p,t,phi,iters, 2.4, 4, 0.0, 1.24, vec3(0.0));
  if (idx == 46) return mapLSystemBase(p,t,phi,iters, 2.4, 5, 0.0, 0.0, vec3(0.0));
  if (idx == 47) return mapLSystemBase(p,t,phi,iters, 2.2, 6, 0.0, 0.0, vec3(0.0));
  if (idx == 48) return mapLSystemBase(p,t,phi,iters, 2.0, 7, 0.0, 0.0, vec3(0.0));
  if (idx == 49) return mapLSystemBase(p,t,phi,iters, 2.8, 8, 0.0, 0.73, vec3(0.0));
  if (idx == 50) return mapLSystemBase(p,t,phi,iters, 2.7, 9, 0.0, 0.8, vec3(0.0));
  
  return 0.0;
}
`;
