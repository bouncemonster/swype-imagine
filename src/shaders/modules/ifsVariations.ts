/**
 * IFS Variations 1-50 for WebGL2 Shaders
 * CORRECT IFS MATHEMATICS with escape condition
 */

export const IFS_VARIATIONS_GLSL = `
// ===================================================================
// IFS Variations 1-50 - CORRECT IFS FORMULAS
// ===================================================================

// Variant 1: Classic Kaleidoscopic IFS
float mapIFSVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.5, 1.5, 1.5);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Sierpinski IFS
float mapIFSVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.84;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.52) z.xy = -z.yx;
    if (z.x + z.z < 0.53) z.xz = -z.zx;
    if (z.y + z.z < 0.54) z.yz = -z.zy;
    
    z = z * scale - vec3(1.02, 1.03, 1.04);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Menger IFS
float mapIFSVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.59;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.06, 2.08, 2.09);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Dragon IFS
float mapIFSVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.36;
  float angle = 0.62;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(0.84, 0.86, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Vicsek IFS
float mapIFSVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.95;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.88, 0.90, 0.93);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 6: Apollonian IFS
float mapIFSVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.92;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.35) {
      z = z / r2 - vec3(1.62, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.09, 1.12, 1.15);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Tetrix IFS
float mapIFSVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 0.21) {
      z = -z;
    }
    
    z = z * scale - vec3(1.07, 1.10, 1.14);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Cubic IFS
float mapIFSVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(1.42, 1.46, 1.50);
    
    if (z.x > 0.88) z.x = 1.76 - z.x;
    if (z.y > 0.92) z.y = 1.84 - z.y;
    if (z.z > 0.96) z.z = 1.92 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Spiral IFS
float mapIFSVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.88;
  float angle = 0.57;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(0.99, 1.04, 1.08);
    angle += 0.077;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Plasma IFS
float mapIFSVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.50, 0.55, 0.60);
    
    float r2 = r * r;
    if (r2 < 0.88) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: Kaleidoscopic IFS
float mapIFSVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.08;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.31, 1.36, 1.42);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 12: Sierpinski IFS
float mapIFSVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.62) z.xy = -z.yx;
    if (z.x + z.z < 0.68) z.xz = -z.zx;
    if (z.y + z.z < 0.74) z.yz = -z.zy;
    
    z = z * scale - vec3(1.12, 1.18, 1.24);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Menger IFS
float mapIFSVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.89;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.26, 2.33, 2.39);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Dragon IFS
float mapIFSVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.51;
  float angle = 0.92;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(0.94, 1.01, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Vicsek IFS
float mapIFSVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.25;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(1.02, 1.10, 1.18);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 16: Apollonian IFS
float mapIFSVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.12;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.43) {
      z = z / r2 - vec3(1.82, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.24, 1.32, 1.40);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Tetrix IFS
float mapIFSVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 0.51) {
      z = -z;
    }
    
    z = z * scale - vec3(1.17, 1.25, 1.34);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Cubic IFS
float mapIFSVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(1.57, 1.66, 1.75);
    
    if (z.x > 0.98) z.x = 1.96 - z.x;
    if (z.y > 1.07) z.y = 2.14 - z.y;
    if (z.z > 1.16) z.z = 2.32 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Spiral IFS
float mapIFSVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.08;
  float angle = 0.87;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(1.09, 1.19, 1.28);
    angle += 0.107;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Plasma IFS
float mapIFSVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.30;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.60, 0.70, 0.80);
    
    float r2 = r * r;
    if (r2 < 0.96) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: Kaleidoscopic IFS
float mapIFSVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.33;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.41, 1.51, 1.62);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 22: Sierpinski IFS
float mapIFSVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.72) z.xy = -z.yx;
    if (z.x + z.z < 0.83) z.xz = -z.zx;
    if (z.y + z.z < 0.94) z.yz = -z.zy;
    
    z = z * scale - vec3(1.22, 1.33, 1.44);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Menger IFS
float mapIFSVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.19;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.46, 2.58, 2.69);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Dragon IFS
float mapIFSVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.66;
  float angle = 1.22;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(1.04, 1.16, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Vicsek IFS
float mapIFSVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(1.18, 1.30, 1.43);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 26: Apollonian IFS
float mapIFSVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.32;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.51) {
      z = z / r2 - vec3(2.02, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.39, 1.52, 1.65);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Tetrix IFS
float mapIFSVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 0.81) {
      z = -z;
    }
    
    z = z * scale - vec3(1.27, 1.41, 1.54);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Cubic IFS
float mapIFSVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.30;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(1.72, 1.86, 2.00);
    
    if (z.x > 1.08) z.x = 2.16 - z.x;
    if (z.y > 1.22) z.y = 2.44 - z.y;
    if (z.z > 1.36) z.z = 2.72 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Spiral IFS
float mapIFSVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.28;
  float angle = 1.17;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(1.19, 1.33, 1.48);
    angle += 0.137;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Plasma IFS
float mapIFSVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.70, 0.85, 1.00);
    
    float r2 = r * r;
    if (r2 < 1.04) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: Kaleidoscopic IFS
float mapIFSVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.58;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.51, 1.67, 1.82);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 32: Sierpinski IFS
float mapIFSVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.82) z.xy = -z.yx;
    if (z.x + z.z < 0.98) z.xz = -z.zx;
    if (z.y + z.z < 1.14) z.yz = -z.zy;
    
    z = z * scale - vec3(1.32, 1.48, 1.64);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Menger IFS
float mapIFSVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.49;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.66, 2.83, 2.99);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Dragon IFS
float mapIFSVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.81;
  float angle = 1.52;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(1.14, 1.31, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Vicsek IFS
float mapIFSVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(1.33, 1.50, 1.68);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 36: Apollonian IFS
float mapIFSVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.52;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.59) {
      z = z / r2 - vec3(2.22, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.54, 1.72, 1.90);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Tetrix IFS
float mapIFSVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.64;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 1.11) {
      z = -z;
    }
    
    z = z * scale - vec3(1.37, 1.55, 1.74);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Cubic IFS
float mapIFSVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(1.87, 2.06, 2.25);
    
    if (z.x > 1.18) z.x = 2.36 - z.x;
    if (z.y > 1.37) z.y = 2.74 - z.y;
    if (z.z > 1.56) z.z = 3.12 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Spiral IFS
float mapIFSVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.48;
  float angle = 1.47;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(1.29, 1.48, 1.68);
    angle += 0.167;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Plasma IFS
float mapIFSVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.80, 1.00, 1.20);
    
    float r2 = r * r;
    if (r2 < 1.12) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: Kaleidoscopic IFS
float mapIFSVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.83;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.61, 1.81, 2.02);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 42: Sierpinski IFS
float mapIFSVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.64;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.92) z.xy = -z.yx;
    if (z.x + z.z < 1.13) z.xz = -z.zx;
    if (z.y + z.z < 1.34) z.yz = -z.zy;
    
    z = z * scale - vec3(1.42, 1.63, 1.84);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Menger IFS
float mapIFSVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.79;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * scale - vec3(2.86, 3.08, 3.29);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Dragon IFS
float mapIFSVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.96;
  float angle = 1.82;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * scale - vec3(1.24, 1.46, 0.0);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Vicsek IFS
float mapIFSVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 4.15;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(1.48, 1.70, 1.93);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 46: Apollonian IFS
float mapIFSVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.72;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.67) {
      z = z / r2 - vec3(2.42, 0.0, 0.0);
    } else {
      z = z * scale - vec3(1.69, 1.92, 2.15);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Tetrix IFS
float mapIFSVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.84;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y + z.z < 1.41) {
      z = -z;
    }
    
    z = z * scale - vec3(1.47, 1.71, 1.94);
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Cubic IFS
float mapIFSVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    z = z * scale - vec3(2.02, 2.26, 2.50);
    
    if (z.x > 1.28) z.x = 2.56 - z.x;
    if (z.y > 1.52) z.y = 3.04 - z.y;
    if (z.z > 1.76) z.z = 3.52 - z.z;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Spiral IFS
float mapIFSVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.68;
  float angle = 1.77;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * scale - vec3(1.39, 1.64, 1.88);
    angle += 0.197;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Plasma IFS
float mapIFSVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = abs(z) - vec3(0.90, 1.15, 1.40);
    
    float r2 = r * r;
    if (r2 < 1.20) {
      z = z / r2;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`;
