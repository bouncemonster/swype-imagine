/**
 * IFS Variations 1-50 for WebGL2 Shaders - COMPRESSED
 * kkrieger-style: 1227 lines → ~90 lines (14x compression)
 */

export const IFS_VARIATIONS_GLSL = `
// IFS Variations 1-50 - PARAMETERIZED (compressed from 1227 lines)
// fold: 0=kaleido, 1=sierpinski, 2=menger, 3=dragon, 4=koch, 5=tree, 6=carpet, 7=cantor

float mapIFSBase(vec3 p, float t, float phi, int iters, float scale, int fold, float angle, vec3 offset) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (fold == 0) { // Kaleidoscopic
      z = abs(z);
      if (z.x < z.y) z.xy = z.yx;
      if (z.x < z.z) z.xz = z.zx;
      if (z.y < z.z) z.yz = z.zy;
    } else if (fold == 1) { // Sierpinski
      if (z.x + z.y < 0.52) z.xy = -z.yx;
      if (z.x + z.z < 0.53) z.xz = -z.zx;
      if (z.y + z.z < 0.54) z.yz = -z.zy;
    } else if (fold == 2) { // Menger
      if (abs(z.x) < abs(z.y)) z.xy = z.yx;
      if (abs(z.x) < abs(z.z)) z.xz = z.zx;
      if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    } else if (fold == 3) { // Dragon
      z = abs(z);
      float c = cos(angle), s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else if (fold == 4) { // Koch
      z = abs(z);
      z.xy = mat2(0.5, -0.866, 0.866, 0.5) * z.xy;
    } else if (fold == 5) { // Tree
      if (z.x > 0.0) { z.x -= 1.0; z.xy = mat2(0.7,-0.7,0.7,0.7)*z.xy; }
      else { z.x += 1.0; z.xy = mat2(0.7,0.7,-0.7,0.7)*z.xy; }
      z = abs(z);
      if (z.x < z.y) z.xy = z.yx;
    } else if (fold == 6) { // Carpet
      z = abs(z);
      z = max(z, vec3(0.33)) - vec3(0.33);
    } else if (fold == 7) { // Cantor
      z = abs(z);
      z.x = max(z.x, 0.33) - 0.33;
    }
    
    z = z * scale - offset;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// 50 variants: (scale, fold, angle, ox, oy, oz)
float mapIFSVariant(vec3 p, float t, float phi, int iters, int idx) {
  if (idx == 1) return mapIFSBase(p,t,phi,iters, 2.0, 0, 0.0, vec3(1.5,1.5,1.5));
  if (idx == 2) return mapIFSBase(p,t,phi,iters, 1.84, 1, 0.0, vec3(1.02,1.03,1.04));
  if (idx == 3) return mapIFSBase(p,t,phi,iters, 2.59, 2, 0.0, vec3(2.06,2.08,2.09));
  if (idx == 4) return mapIFSBase(p,t,phi,iters, 1.36, 3, 0.62, vec3(0.84,0.86,0.0));
  if (idx == 5) return mapIFSBase(p,t,phi,iters, 2.2, 4, 0.0, vec3(1.5,1.5,1.5));
  if (idx == 6) return mapIFSBase(p,t,phi,iters, 1.9, 5, 0.0, vec3(1.0,1.0,1.0));
  if (idx == 7) return mapIFSBase(p,t,phi,iters, 2.4, 6, 0.0, vec3(1.33,1.33,1.33));
  if (idx == 8) return mapIFSBase(p,t,phi,iters, 2.1, 7, 0.0, vec3(1.33,1.5,1.5));
  if (idx == 9) return mapIFSBase(p,t,phi,iters, 2.3, 0, 0.0, vec3(1.6,1.6,1.6));
  if (idx == 10) return mapIFSBase(p,t,phi,iters, 1.75, 1, 0.0, vec3(0.95,0.96,0.97));
  if (idx == 11) return mapIFSBase(p,t,phi,iters, 2.7, 2, 0.0, vec3(2.16,2.18,2.19));
  if (idx == 12) return mapIFSBase(p,t,phi,iters, 1.42, 3, 0.72, vec3(0.88,0.90,0.0));
  if (idx == 13) return mapIFSBase(p,t,phi,iters, 2.35, 4, 0.0, vec3(1.6,1.6,1.6));
  if (idx == 14) return mapIFSBase(p,t,phi,iters, 2.0, 5, 0.0, vec3(1.1,1.1,1.1));
  if (idx == 15) return mapIFSBase(p,t,phi,iters, 2.55, 6, 0.0, vec3(1.43,1.43,1.43));
  if (idx == 16) return mapIFSBase(p,t,phi,iters, 2.25, 7, 0.0, vec3(1.43,1.6,1.6));
  if (idx == 17) return mapIFSBase(p,t,phi,iters, 2.45, 0, 0.0, vec3(1.7,1.7,1.7));
  if (idx == 18) return mapIFSBase(p,t,phi,iters, 1.66, 1, 0.0, vec3(0.88,0.89,0.90));
  if (idx == 19) return mapIFSBase(p,t,phi,iters, 2.81, 2, 0.0, vec3(2.26,2.28,2.29));
  if (idx == 20) return mapIFSBase(p,t,phi,iters, 1.48, 3, 0.82, vec3(0.92,0.94,0.0));
  if (idx == 21) return mapIFSBase(p,t,phi,iters, 2.5, 4, 0.0, vec3(1.7,1.7,1.7));
  if (idx == 22) return mapIFSBase(p,t,phi,iters, 2.1, 5, 0.0, vec3(1.2,1.2,1.2));
  if (idx == 23) return mapIFSBase(p,t,phi,iters, 2.65, 6, 0.0, vec3(1.53,1.53,1.53));
  if (idx == 24) return mapIFSBase(p,t,phi,iters, 2.35, 7, 0.0, vec3(1.53,1.7,1.7));
  if (idx == 25) return mapIFSBase(p,t,phi,iters, 2.55, 0, 0.0, vec3(1.8,1.8,1.8));
  if (idx == 26) return mapIFSBase(p,t,phi,iters, 1.57, 1, 0.0, vec3(0.81,0.82,0.83));
  if (idx == 27) return mapIFSBase(p,t,phi,iters, 2.92, 2, 0.0, vec3(2.36,2.38,2.39));
  if (idx == 28) return mapIFSBase(p,t,phi,iters, 1.54, 3, 0.92, vec3(0.96,0.98,0.0));
  if (idx == 29) return mapIFSBase(p,t,phi,iters, 2.65, 4, 0.0, vec3(1.8,1.8,1.8));
  if (idx == 30) return mapIFSBase(p,t,phi,iters, 2.2, 5, 0.0, vec3(1.3,1.3,1.3));
  if (idx == 31) return mapIFSBase(p,t,phi,iters, 2.75, 6, 0.0, vec3(1.63,1.63,1.63));
  if (idx == 32) return mapIFSBase(p,t,phi,iters, 2.45, 7, 0.0, vec3(1.63,1.8,1.8));
  if (idx == 33) return mapIFSBase(p,t,phi,iters, 2.65, 0, 0.0, vec3(1.9,1.9,1.9));
  if (idx == 34) return mapIFSBase(p,t,phi,iters, 1.48, 1, 0.0, vec3(0.74,0.75,0.76));
  if (idx == 35) return mapIFSBase(p,t,phi,iters, 3.03, 2, 0.0, vec3(2.46,2.48,2.49));
  if (idx == 36) return mapIFSBase(p,t,phi,iters, 1.60, 3, 1.02, vec3(1.00,1.02,0.0));
  if (idx == 37) return mapIFSBase(p,t,phi,iters, 2.8, 4, 0.0, vec3(1.9,1.9,1.9));
  if (idx == 38) return mapIFSBase(p,t,phi,iters, 2.3, 5, 0.0, vec3(1.4,1.4,1.4));
  if (idx == 39) return mapIFSBase(p,t,phi,iters, 2.85, 6, 0.0, vec3(1.73,1.73,1.73));
  if (idx == 40) return mapIFSBase(p,t,phi,iters, 2.55, 7, 0.0, vec3(1.73,1.9,1.9));
  if (idx == 41) return mapIFSBase(p,t,phi,iters, 2.75, 0, 0.0, vec3(2.0,2.0,2.0));
  if (idx == 42) return mapIFSBase(p,t,phi,iters, 1.39, 1, 0.0, vec3(0.67,0.68,0.69));
  if (idx == 43) return mapIFSBase(p,t,phi,iters, 3.14, 2, 0.0, vec3(2.56,2.58,2.59));
  if (idx == 44) return mapIFSBase(p,t,phi,iters, 1.66, 3, 1.12, vec3(1.04,1.06,0.0));
  if (idx == 45) return mapIFSBase(p,t,phi,iters, 2.95, 4, 0.0, vec3(2.0,2.0,2.0));
  if (idx == 46) return mapIFSBase(p,t,phi,iters, 2.4, 5, 0.0, vec3(1.5,1.5,1.5));
  if (idx == 47) return mapIFSBase(p,t,phi,iters, 2.95, 6, 0.0, vec3(1.83,1.83,1.83));
  if (idx == 48) return mapIFSBase(p,t,phi,iters, 2.65, 7, 0.0, vec3(1.83,2.0,2.0));
  if (idx == 49) return mapIFSBase(p,t,phi,iters, 2.85, 0, 0.0, vec3(2.1,2.1,2.1));
  if (idx == 50) return mapIFSBase(p,t,phi,iters, 1.30, 1, 0.0, vec3(0.60,0.61,0.62));
  
  return 0.0;
}
`;
