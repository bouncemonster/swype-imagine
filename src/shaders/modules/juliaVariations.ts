/**
 * Julia Variations 1-50 for WebGL2 Shaders - COMPRESSED VERSION
 * Parameterized: 1353 lines → ~120 lines (11x compression)
 */

export const JULIA_VARIATIONS_GLSL = `
// ===================================================================
// Julia Variations 1-50 - PARAMETERIZED (compressed from 1353 lines)
// ===================================================================

// Base Julia/Mandelbulb with modifiers
// vtype: 0=mandelbrot, 1=julia, 2=burningShip, 3=tricorn, 4=rotated
float mapJuliaBase(vec3 p, float t, float phi, int iters, float power, int vtype, float rot, vec3 c) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break; // Increased from 2.0 to handle power up to 17.4
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + (vtype == 4 ? rot : 0.0);
    float zr = pow(r, power);
    
    if (vtype == 3) { // Tricorn: conjugate
      z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                    sin(theta * power) * sin(-phiAngle * power), 
                    cos(theta * power));
      z += p;
      // Conjugation preserves |z|, so the radial derivative recurrence is identical to
      // the standard branch. Without this dr stayed 1.0 → d = 0.5*log(r)*r grossly
      // over-estimated → the sphere-tracer stepped past the thin conjugate filigree.
      dr = pow(r, power - 1.0) * power * dr + 1.0;
    } else if (vtype == 2) { // Burning Ship: abs
      z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                    sin(theta * power) * sin(phiAngle * power), 
                    cos(theta * power));
      z = abs(z) + p;
      // abs() is applied per-component AFTER the power step and preserves |z|, so the
      // same radial-derivative tracking applies; omitted, these variants rendered as
      // rounded blobs because their DE magnitude ignored derivative growth.
      dr = pow(r, power - 1.0) * power * dr + 1.0;
    } else { // Standard Mandelbulb/Julia/Rotated
      z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                    sin(theta * power) * sin(phiAngle * power), 
                    cos(theta * power));
      if (vtype == 1) { // Julia: add constant c
        z += c;
        dr = pow(r, power - 1.0) * power * dr;
      } else { // Mandelbrot/Rotated: add p
        z += p;
        dr = pow(r, power - 1.0) * power * dr + 1.0;
      }
    }
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant lookup (50 variants)
// Format: (power, vtype, rot, cx, cy, cz)
float mapJuliaVariant(vec3 p, float t, float phi, int iters, int idx) {
  if (idx == 1) return mapJuliaBase(p, t, phi, iters, 8.0, 0, 0.0, vec3(0.0));
  if (idx == 2) return mapJuliaBase(p, t, phi, iters, 4.2, 0, 0.0, vec3(0.0));
  if (idx == 3) return mapJuliaBase(p, t, phi, iters, 12.6, 0, 0.0, vec3(0.0));
  if (idx == 4) return mapJuliaBase(p, t, phi, iters, 8.0, 1, 0.0, vec3(0.340, 0.320, 0.0));
  if (idx == 5) return mapJuliaBase(p, t, phi, iters, 8.75, 2, 0.0, vec3(0.0));
  if (idx == 6) return mapJuliaBase(p, t, phi, iters, 8.6, 3, 0.0, vec3(0.0));
  if (idx == 7) return mapJuliaBase(p, t, phi, iters, 9.4, 4, 0.24, vec3(0.0));
  if (idx == 8) return mapJuliaBase(p, t, phi, iters, 6.8, 0, 0.0, vec3(0.0));
  if (idx == 9) return mapJuliaBase(p, t, phi, iters, 14.2, 0, 0.0, vec3(0.0));
  if (idx == 10) return mapJuliaBase(p, t, phi, iters, 10.0, 1, 0.0, vec3(-0.7, 0.27015, 0.0));
  if (idx == 11) return mapJuliaBase(p, t, phi, iters, 10.25, 2, 0.0, vec3(0.0));
  if (idx == 12) return mapJuliaBase(p, t, phi, iters, 10.1, 3, 0.0, vec3(0.0));
  if (idx == 13) return mapJuliaBase(p, t, phi, iters, 10.9, 4, 0.29, vec3(0.0));
  if (idx == 14) return mapJuliaBase(p, t, phi, iters, 8.3, 0, 0.0, vec3(0.0));
  if (idx == 15) return mapJuliaBase(p, t, phi, iters, 15.8, 0, 0.0, vec3(0.0));
  if (idx == 16) return mapJuliaBase(p, t, phi, iters, 11.5, 1, 0.0, vec3(0.340, 0.320, 0.0));
  if (idx == 17) return mapJuliaBase(p, t, phi, iters, 11.75, 2, 0.0, vec3(0.0));
  if (idx == 18) return mapJuliaBase(p, t, phi, iters, 11.6, 3, 0.0, vec3(0.0));
  if (idx == 19) return mapJuliaBase(p, t, phi, iters, 12.4, 4, 0.34, vec3(0.0));
  if (idx == 20) return mapJuliaBase(p, t, phi, iters, 9.8, 0, 0.0, vec3(0.0));
  if (idx == 21) return mapJuliaBase(p, t, phi, iters, 17.4, 0, 0.0, vec3(0.0));
  if (idx == 22) return mapJuliaBase(p, t, phi, iters, 13.0, 1, 0.0, vec3(-0.7, 0.27015, 0.0));
  if (idx == 23) return mapJuliaBase(p, t, phi, iters, 13.25, 2, 0.0, vec3(0.0));
  if (idx == 24) return mapJuliaBase(p, t, phi, iters, 13.1, 3, 0.0, vec3(0.0));
  if (idx == 25) return mapJuliaBase(p, t, phi, iters, 13.9, 4, 0.39, vec3(0.0));
  if (idx == 26) return mapJuliaBase(p, t, phi, iters, 11.3, 0, 0.0, vec3(0.0));
  if (idx == 27) return mapJuliaBase(p, t, phi, iters, 19.0, 0, 0.0, vec3(0.0));
  if (idx == 28) return mapJuliaBase(p, t, phi, iters, 14.5, 1, 0.0, vec3(0.340, 0.320, 0.0));
  if (idx == 29) return mapJuliaBase(p, t, phi, iters, 14.75, 2, 0.0, vec3(0.0));
  if (idx == 30) return mapJuliaBase(p, t, phi, iters, 14.6, 3, 0.0, vec3(0.0));
  if (idx == 31) return mapJuliaBase(p, t, phi, iters, 15.4, 4, 0.44, vec3(0.0));
  if (idx == 32) return mapJuliaBase(p, t, phi, iters, 12.8, 0, 0.0, vec3(0.0));
  if (idx == 33) return mapJuliaBase(p, t, phi, iters, 20.6, 0, 0.0, vec3(0.0));
  if (idx == 34) return mapJuliaBase(p, t, phi, iters, 16.0, 1, 0.0, vec3(-0.7, 0.27015, 0.0));
  if (idx == 35) return mapJuliaBase(p, t, phi, iters, 16.25, 2, 0.0, vec3(0.0));
  if (idx == 36) return mapJuliaBase(p, t, phi, iters, 16.1, 3, 0.0, vec3(0.0));
  if (idx == 37) return mapJuliaBase(p, t, phi, iters, 16.9, 4, 0.49, vec3(0.0));
  if (idx == 38) return mapJuliaBase(p, t, phi, iters, 14.3, 0, 0.0, vec3(0.0));
  if (idx == 39) return mapJuliaBase(p, t, phi, iters, 22.2, 0, 0.0, vec3(0.0));
  if (idx == 40) return mapJuliaBase(p, t, phi, iters, 17.5, 1, 0.0, vec3(0.340, 0.320, 0.0));
  if (idx == 41) return mapJuliaBase(p, t, phi, iters, 17.75, 2, 0.0, vec3(0.0));
  if (idx == 42) return mapJuliaBase(p, t, phi, iters, 17.6, 3, 0.0, vec3(0.0));
  if (idx == 43) return mapJuliaBase(p, t, phi, iters, 18.4, 4, 0.54, vec3(0.0));
  if (idx == 44) return mapJuliaBase(p, t, phi, iters, 15.8, 0, 0.0, vec3(0.0));
  if (idx == 45) return mapJuliaBase(p, t, phi, iters, 23.8, 0, 0.0, vec3(0.0));
  if (idx == 46) return mapJuliaBase(p, t, phi, iters, 19.0, 1, 0.0, vec3(-0.7, 0.27015, 0.0));
  if (idx == 47) return mapJuliaBase(p, t, phi, iters, 19.25, 2, 0.0, vec3(0.0));
  if (idx == 48) return mapJuliaBase(p, t, phi, iters, 19.1, 3, 0.0, vec3(0.0));
  if (idx == 49) return mapJuliaBase(p, t, phi, iters, 10.9, 0, 0.0, vec3(0.0));
  if (idx == 50) return mapJuliaBase(p, t, phi, iters, 31.0, 0, 0.0, vec3(0.0));
  
  return 0.0;
}
`;
