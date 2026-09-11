/**
 * Hybrid Variations 1-90 for WebGL2 Shaders - COMPRESSED VERSION
 * Parameterized implementation: 2670 lines → ~250 lines (10x compression)
 * Same mathematical output, compact representation
 */

export const HYBRID_VARIATIONS_GLSL = `
// ===================================================================
// Hybrid Variations 1-90 - PARAMETERIZED (compressed from 2670 lines)
// ===================================================================

// Base Mandelbulb with modifiers
float mapHybridBase(vec3 p, float t, float phi, int iters, float power, int vtype, float scale, float blend, float rot, vec3 c) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Apply modifiers based on variant type
    if (vtype == 1) { // IFS folding
      z = abs(z);
      if (z.x < z.y) z.xy = z.yx;
    } else if (vtype == 2) { // Flame blend (applied after Mandelbulb)
      // placeholder, handled below
    } else if (vtype == 3) { // L-System branching
      if (z.x > 0.0) {
        z.x = z.x - 1.0;
        z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
      } else {
        z.x = z.x + 1.0;
        z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
      }
      z = abs(z);
      if (z.x < z.y) z.xy = z.yx;
    } else if (vtype == 4) { // Burning Ship
      // handled after Mandelbulb
    } else if (vtype == 6) { // Folded
      z = abs(z);
    }
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power + (vtype == 5 ? rot : 0.0);
    float zr = pow(r, power);
    
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Apply post-Mandelbulb modifiers
    if (vtype == 2) { // Flame blend
      vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
      z = mix(mb, flame, blend);
      z += c;
      dr = pow(r, power - 1.0) * power * dr;
    } else if (vtype == 3) { // L-System
      z *= scale;
      dr = dr * scale + 1.0;
    } else if (vtype == 4) { // Burning Ship
      z = abs(mb) + p;
      dr = pow(r, power - 1.0) * power * dr + 1.0;
    } else if (vtype == 1) { // IFS-Mandelbulb
      z = mb * scale * 0.5 + p;
      dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
    } else if (vtype == 7) { // Julia blend
      z = mix(mb, c, 0.3) + p;
      dr = pow(r, power - 1.0) * power * dr + 1.0;
    } else { // Pure Mandelbulb (vtype == 0)
      z = mb + p;
      dr = pow(r, power - 1.0) * power * dr + 1.0;
    }
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant lookup: (power, vtype, scale, blend, rot, cx, cy, cz)
// vtype: 0=pure, 1=IFS, 2=flame, 3=lsystem, 4=burningShip, 5=rotated, 6=folded, 7=julia
float mapHybridVariant(vec3 p, float t, float phi, int iters, int idx) {
  // Parameters for each variant (90 variants)
  // Format: power, vtype, scale, blend, rot, cx, cy, cz
  
  if (idx == 1) return mapHybridBase(p, t, phi, iters, 8.0, 7, 1.0, 0.0, 0.0, vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355));
  if (idx == 2) return mapHybridBase(p, t, phi, iters, 8.2, 1, 2.04, 0.0, 0.0, vec3(0.0));
  if (idx == 3) return mapHybridBase(p, t, phi, iters, 8.45, 2, 1.0, 0.215, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 4) return mapHybridBase(p, t, phi, iters, 8.0, 3, 1.9, 0.0, 0.0, vec3(0.0));
  if (idx == 5) return mapHybridBase(p, t, phi, iters, 5.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 6) return mapHybridBase(p, t, phi, iters, 13.8, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 7) return mapHybridBase(p, t, phi, iters, 9.05, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 8) return mapHybridBase(p, t, phi, iters, 9.6, 5, 1.0, 0.0, 0.26, vec3(0.0));
  if (idx == 9) return mapHybridBase(p, t, phi, iters, 9.35, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 10) return mapHybridBase(p, t, phi, iters, 8.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 11) return mapHybridBase(p, t, phi, iters, 20.4, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 12) return mapHybridBase(p, t, phi, iters, 9.2, 1, 2.24, 0.0, 0.0, vec3(0.0));
  if (idx == 13) return mapHybridBase(p, t, phi, iters, 9.95, 2, 1.0, 0.265, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 14) return mapHybridBase(p, t, phi, iters, 8.0, 3, 2.15, 0.0, 0.0, vec3(0.0));
  if (idx == 15) return mapHybridBase(p, t, phi, iters, 7.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 16) return mapHybridBase(p, t, phi, iters, 16.8, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 17) return mapHybridBase(p, t, phi, iters, 10.55, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 18) return mapHybridBase(p, t, phi, iters, 11.1, 5, 1.0, 0.0, 0.31, vec3(0.0));
  if (idx == 19) return mapHybridBase(p, t, phi, iters, 10.85, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 20) return mapHybridBase(p, t, phi, iters, 10.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 21) return mapHybridBase(p, t, phi, iters, 24.6, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 22) return mapHybridBase(p, t, phi, iters, 10.7, 1, 2.44, 0.0, 0.0, vec3(0.0));
  if (idx == 23) return mapHybridBase(p, t, phi, iters, 11.45, 2, 1.0, 0.315, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 24) return mapHybridBase(p, t, phi, iters, 8.0, 3, 2.35, 0.0, 0.0, vec3(0.0));
  if (idx == 25) return mapHybridBase(p, t, phi, iters, 8.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 26) return mapHybridBase(p, t, phi, iters, 20.4, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 27) return mapHybridBase(p, t, phi, iters, 12.05, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 28) return mapHybridBase(p, t, phi, iters, 12.6, 5, 1.0, 0.0, 0.36, vec3(0.0));
  if (idx == 29) return mapHybridBase(p, t, phi, iters, 12.35, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 30) return mapHybridBase(p, t, phi, iters, 11.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 31) return mapHybridBase(p, t, phi, iters, 8.0, 7, 1.0, 0.0, 0.0, vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355));
  if (idx == 32) return mapHybridBase(p, t, phi, iters, 12.2, 1, 2.64, 0.0, 0.0, vec3(0.0));
  if (idx == 33) return mapHybridBase(p, t, phi, iters, 12.95, 2, 1.0, 0.365, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 34) return mapHybridBase(p, t, phi, iters, 8.0, 3, 2.55, 0.0, 0.0, vec3(0.0));
  if (idx == 35) return mapHybridBase(p, t, phi, iters, 10.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 36) return mapHybridBase(p, t, phi, iters, 24.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 37) return mapHybridBase(p, t, phi, iters, 13.55, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 38) return mapHybridBase(p, t, phi, iters, 14.1, 5, 1.0, 0.0, 0.41, vec3(0.0));
  if (idx == 39) return mapHybridBase(p, t, phi, iters, 13.85, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 40) return mapHybridBase(p, t, phi, iters, 13.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 41) return mapHybridBase(p, t, phi, iters, 8.0, 7, 1.0, 0.0, 0.0, vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355));
  if (idx == 42) return mapHybridBase(p, t, phi, iters, 13.7, 1, 2.84, 0.0, 0.0, vec3(0.0));
  if (idx == 43) return mapHybridBase(p, t, phi, iters, 14.45, 2, 1.0, 0.415, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 44) return mapHybridBase(p, t, phi, iters, 8.0, 3, 2.75, 0.0, 0.0, vec3(0.0));
  if (idx == 45) return mapHybridBase(p, t, phi, iters, 11.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 46) return mapHybridBase(p, t, phi, iters, 27.6, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 47) return mapHybridBase(p, t, phi, iters, 15.05, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 48) return mapHybridBase(p, t, phi, iters, 15.6, 5, 1.0, 0.0, 0.46, vec3(0.0));
  if (idx == 49) return mapHybridBase(p, t, phi, iters, 15.35, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 50) return mapHybridBase(p, t, phi, iters, 14.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 51) return mapHybridBase(p, t, phi, iters, 8.0, 7, 1.0, 0.0, 0.0, vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355));
  if (idx == 52) return mapHybridBase(p, t, phi, iters, 15.2, 1, 3.04, 0.0, 0.0, vec3(0.0));
  if (idx == 53) return mapHybridBase(p, t, phi, iters, 15.95, 2, 1.0, 0.465, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 54) return mapHybridBase(p, t, phi, iters, 8.0, 3, 2.95, 0.0, 0.0, vec3(0.0));
  if (idx == 55) return mapHybridBase(p, t, phi, iters, 13.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 56) return mapHybridBase(p, t, phi, iters, 31.2, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 57) return mapHybridBase(p, t, phi, iters, 16.55, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 58) return mapHybridBase(p, t, phi, iters, 17.1, 5, 1.0, 0.0, 0.51, vec3(0.0));
  if (idx == 59) return mapHybridBase(p, t, phi, iters, 16.85, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 60) return mapHybridBase(p, t, phi, iters, 16.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 61) return mapHybridBase(p, t, phi, iters, 8.0, 7, 1.0, 0.0, 0.0, vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355));
  if (idx == 62) return mapHybridBase(p, t, phi, iters, 16.7, 1, 3.24, 0.0, 0.0, vec3(0.0));
  if (idx == 63) return mapHybridBase(p, t, phi, iters, 17.45, 2, 1.0, 0.515, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 64) return mapHybridBase(p, t, phi, iters, 8.0, 3, 3.15, 0.0, 0.0, vec3(0.0));
  if (idx == 65) return mapHybridBase(p, t, phi, iters, 14.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 66) return mapHybridBase(p, t, phi, iters, 34.8, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 67) return mapHybridBase(p, t, phi, iters, 18.05, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 68) return mapHybridBase(p, t, phi, iters, 18.6, 5, 1.0, 0.0, 0.56, vec3(0.0));
  if (idx == 69) return mapHybridBase(p, t, phi, iters, 18.35, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 70) return mapHybridBase(p, t, phi, iters, 17.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 71) return mapHybridBase(p, t, phi, iters, 8.0, 7, 1.0, 0.0, 0.0, vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355));
  if (idx == 72) return mapHybridBase(p, t, phi, iters, 18.2, 1, 3.44, 0.0, 0.0, vec3(0.0));
  if (idx == 73) return mapHybridBase(p, t, phi, iters, 18.95, 2, 1.0, 0.565, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 74) return mapHybridBase(p, t, phi, iters, 8.0, 3, 3.35, 0.0, 0.0, vec3(0.0));
  if (idx == 75) return mapHybridBase(p, t, phi, iters, 16.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 76) return mapHybridBase(p, t, phi, iters, 38.4, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 77) return mapHybridBase(p, t, phi, iters, 19.55, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 78) return mapHybridBase(p, t, phi, iters, 20.1, 5, 1.0, 0.0, 0.61, vec3(0.0));
  if (idx == 79) return mapHybridBase(p, t, phi, iters, 19.85, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 80) return mapHybridBase(p, t, phi, iters, 19.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 81) return mapHybridBase(p, t, phi, iters, 8.0, 7, 1.0, 0.0, 0.0, vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355));
  if (idx == 82) return mapHybridBase(p, t, phi, iters, 19.7, 1, 3.64, 0.0, 0.0, vec3(0.0));
  if (idx == 83) return mapHybridBase(p, t, phi, iters, 20.45, 2, 1.0, 0.615, 0.0, vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0));
  if (idx == 84) return mapHybridBase(p, t, phi, iters, 8.0, 3, 3.55, 0.0, 0.0, vec3(0.0));
  if (idx == 85) return mapHybridBase(p, t, phi, iters, 17.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 86) return mapHybridBase(p, t, phi, iters, 42.0, 0, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 87) return mapHybridBase(p, t, phi, iters, 21.05, 4, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 88) return mapHybridBase(p, t, phi, iters, 21.6, 5, 1.0, 0.0, 0.66, vec3(0.0));
  if (idx == 89) return mapHybridBase(p, t, phi, iters, 21.35, 6, 1.0, 0.0, 0.0, vec3(0.0));
  if (idx == 90) return mapHybridBase(p, t, phi, iters, 28.5, 0, 1.0, 0.0, 0.0, vec3(0.0));
  
  return 0.0;
}
`;
