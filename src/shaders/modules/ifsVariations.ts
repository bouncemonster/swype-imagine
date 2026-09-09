/**
 * IFS Variations 1-50 for WebGL2 Shaders
 * DIVERSE FOLDING TECHNIQUES
 */

export const IFS_VARIATIONS_GLSL = `
// ===================================================================
// IFS Variations 1-50 - DIVERSE APPROACHES
// ===================================================================

// Variant 1: Classic Kaleidoscopic IFS
float mapIFSVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.5, 1.5, 1.5);
  }
  
  return length(z) * pow(scale, -float(iters));
}


// Variant 2: Sierpinski IFS
float mapIFSVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.54) z.xy = -z.yx;
    if (z.x + z.z < 0.56) z.xz = -z.zx;
    if (z.y + z.z < 0.58) z.yz = -z.zy;
    
    z = z * 1.86 - vec3(1.04, 1.06, 1.08);
  }
  
  return length(z) * 0.25;
}

// Variant 3: Menger IFS
float mapIFSVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 2.65 - vec3(2.09, 2.12, 2.15);
  }
  
  return length(z) * 0.377;
}

// Variant 4: Dragon IFS
float mapIFSVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.38 - vec3(0.86, 0.88, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 5: Vicsek IFS
float mapIFSVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.90, 0.95, 1.00);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 3.00;
  }
  
  return length(z) * 0.333;
}

// Variant 6: Apollonian IFS
float mapIFSVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.36) {
      z = z / r2 - vec3(1.68, 0.0, 0.0);
    } else {
      z = z * 1.95 - vec3(1.12, 1.18, 1.24);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 7: Tetrix IFS
float mapIFSVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 0.35) {
      z = -z;
    }
    
    z = z * 2.04 - vec3(1.10, 1.14, 1.18);
  }
  
  return length(z) * 0.25;
}

// Variant 8: Cubic IFS
float mapIFSVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 1.84 - vec3(1.46, 1.50, 1.54);
    
    if (z.x > 0.92) z.x = 1.84 - z.x;
    if (z.y > 0.96) z.y = 1.92 - z.y;
    if (z.z > 1.00) z.z = 2.00 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 9: Spiral IFS
float mapIFSVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.66;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 1.93 - vec3(1.04, 1.08, 1.13);
    angle += 0.095;
  }
  
  return length(z) * 0.5;
}

// Variant 10: Plasma IFS
float mapIFSVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.55, 0.60, 0.65);
    
    float r = length(z);
    if (r < 0.90) {
      z = z / (r * r);
    }
    
    z = z * 2.10;
  }
  
  return length(z) * 0.5;
}

// Variant 11: Kaleidoscopic IFS
float mapIFSVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.13;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.36, 1.42, 1.48);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 12: Sierpinski IFS
float mapIFSVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.74) z.xy = -z.yx;
    if (z.x + z.z < 0.86) z.xz = -z.zx;
    if (z.y + z.z < 0.98) z.yz = -z.zy;
    
    z = z * 2.16 - vec3(1.24, 1.36, 1.48);
  }
  
  return length(z) * 0.25;
}

// Variant 13: Menger IFS
float mapIFSVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 3.15 - vec3(2.39, 2.52, 2.65);
  }
  
  return length(z) * 0.317;
}

// Variant 14: Dragon IFS
float mapIFSVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.58 - vec3(1.01, 1.08, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 15: Vicsek IFS
float mapIFSVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.10, 1.25, 1.40);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 3.40;
  }
  
  return length(z) * 0.294;
}

// Variant 16: Apollonian IFS
float mapIFSVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.46) {
      z = z / r2 - vec3(1.98, 0.0, 0.0);
    } else {
      z = z * 2.20 - vec3(1.32, 1.48, 1.64);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 17: Tetrix IFS
float mapIFSVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 0.85) {
      z = -z;
    }
    
    z = z * 2.24 - vec3(1.25, 1.34, 1.43);
  }
  
  return length(z) * 0.25;
}

// Variant 18: Cubic IFS
float mapIFSVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 2.14 - vec3(1.66, 1.75, 1.84);
    
    if (z.x > 1.07) z.x = 2.14 - z.x;
    if (z.y > 1.16) z.y = 2.32 - z.y;
    if (z.z > 1.25) z.z = 2.50 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 19: Spiral IFS
float mapIFSVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.06;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.17 - vec3(1.19, 1.28, 1.38);
    angle += 0.145;
  }
  
  return length(z) * 0.5;
}

// Variant 20: Plasma IFS
float mapIFSVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.70, 0.80, 0.90);
    
    float r = length(z);
    if (r < 1.00) {
      z = z / (r * r);
    }
    
    z = z * 2.30;
  }
  
  return length(z) * 0.5;
}

// Variant 21: Kaleidoscopic IFS
float mapIFSVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.43;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.51, 1.62, 1.73);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 22: Sierpinski IFS
float mapIFSVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.94) z.xy = -z.yx;
    if (z.x + z.z < 1.16) z.xz = -z.zx;
    if (z.y + z.z < 1.38) z.yz = -z.zy;
    
    z = z * 2.46 - vec3(1.44, 1.66, 1.88);
  }
  
  return length(z) * 0.25;
}

// Variant 23: Menger IFS
float mapIFSVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 3.65 - vec3(2.69, 2.92, 3.15);
  }
  
  return length(z) * 0.274;
}

// Variant 24: Dragon IFS
float mapIFSVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.78 - vec3(1.16, 1.28, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 25: Vicsek IFS
float mapIFSVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.30, 1.55, 1.80);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 3.80;
  }
  
  return length(z) * 0.263;
}

// Variant 26: Apollonian IFS
float mapIFSVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.56) {
      z = z / r2 - vec3(2.28, 0.0, 0.0);
    } else {
      z = z * 2.45 - vec3(1.52, 1.78, 2.04);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 27: Tetrix IFS
float mapIFSVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 1.35) {
      z = -z;
    }
    
    z = z * 2.44 - vec3(1.41, 1.54, 1.68);
  }
  
  return length(z) * 0.25;
}

// Variant 28: Cubic IFS
float mapIFSVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 2.44 - vec3(1.86, 2.00, 2.14);
    
    if (z.x > 1.22) z.x = 2.44 - z.x;
    if (z.y > 1.36) z.y = 2.72 - z.y;
    if (z.z > 1.50) z.z = 3.00 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 29: Spiral IFS
float mapIFSVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.46;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.42 - vec3(1.33, 1.48, 1.63);
    angle += 0.195;
  }
  
  return length(z) * 0.5;
}

// Variant 30: Plasma IFS
float mapIFSVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(0.85, 1.00, 1.15);
    
    float r = length(z);
    if (r < 1.10) {
      z = z / (r * r);
    }
    
    z = z * 2.50;
  }
  
  return length(z) * 0.5;
}

// Variant 31: Kaleidoscopic IFS
float mapIFSVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.73;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.67, 1.82, 1.98);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 32: Sierpinski IFS
float mapIFSVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 1.14) z.xy = -z.yx;
    if (z.x + z.z < 1.46) z.xz = -z.zx;
    if (z.y + z.z < 1.78) z.yz = -z.zy;
    
    z = z * 2.76 - vec3(1.64, 1.96, 2.28);
  }
  
  return length(z) * 0.25;
}

// Variant 33: Menger IFS
float mapIFSVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 4.15 - vec3(2.99, 3.32, 3.65);
  }
  
  return length(z) * 0.241;
}

// Variant 34: Dragon IFS
float mapIFSVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 1.98 - vec3(1.31, 1.48, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 35: Vicsek IFS
float mapIFSVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.50, 1.85, 2.20);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 4.20;
  }
  
  return length(z) * 0.238;
}

// Variant 36: Apollonian IFS
float mapIFSVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.66) {
      z = z / r2 - vec3(2.58, 0.0, 0.0);
    } else {
      z = z * 2.70 - vec3(1.72, 2.08, 2.44);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 37: Tetrix IFS
float mapIFSVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 1.85) {
      z = -z;
    }
    
    z = z * 2.64 - vec3(1.55, 1.74, 1.93);
  }
  
  return length(z) * 0.25;
}

// Variant 38: Cubic IFS
float mapIFSVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 2.74 - vec3(2.06, 2.25, 2.44);
    
    if (z.x > 1.37) z.x = 2.74 - z.x;
    if (z.y > 1.56) z.y = 3.12 - z.y;
    if (z.z > 1.75) z.z = 3.50 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 39: Spiral IFS
float mapIFSVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.86;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.67 - vec3(1.48, 1.68, 1.88);
    angle += 0.245;
  }
  
  return length(z) * 0.5;
}

// Variant 40: Plasma IFS
float mapIFSVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.00, 1.20, 1.40);
    
    float r = length(z);
    if (r < 1.20) {
      z = z / (r * r);
    }
    
    z = z * 2.70;
  }
  
  return length(z) * 0.5;
}

// Variant 41: Kaleidoscopic IFS
float mapIFSVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 3.03;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    if (z.y < z.z) z.yz = z.zy;
    
    z = z * scale - vec3(1.81, 2.02, 2.23);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 42: Sierpinski IFS
float mapIFSVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 1.34) z.xy = -z.yx;
    if (z.x + z.z < 1.76) z.xz = -z.zx;
    if (z.y + z.z < 2.18) z.yz = -z.zy;
    
    z = z * 3.06 - vec3(1.84, 2.26, 2.68);
  }
  
  return length(z) * 0.25;
}

// Variant 43: Menger IFS
float mapIFSVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < abs(z.y)) z.xy = z.yx;
    if (abs(z.x) < abs(z.z)) z.xz = z.zx;
    if (abs(z.y) < abs(z.z)) z.yz = z.zy;
    
    z = z * 4.65 - vec3(3.29, 3.72, 4.15);
  }
  
  return length(z) * 0.215;
}

// Variant 44: Dragon IFS
float mapIFSVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    z = z * 2.18 - vec3(1.46, 1.68, 0.0);
  }
  
  return length(z) * 0.5;
}

// Variant 45: Vicsek IFS
float mapIFSVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.70, 2.15, 2.60);
    
    if (z.x < z.y) z.xy = z.yx;
    if (z.x < z.z) z.xz = z.zx;
    
    z = z * 4.60;
  }
  
  return length(z) * 0.217;
}

// Variant 46: Apollonian IFS
float mapIFSVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    float r2 = dot(z, z);
    if (r2 < 0.76) {
      z = z / r2 - vec3(2.88, 0.0, 0.0);
    } else {
      z = z * 2.95 - vec3(1.92, 2.38, 2.84);
    }
  }
  
  return length(z) * 0.5;
}

// Variant 47: Tetrix IFS
float mapIFSVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y + z.z < 2.35) {
      z = -z;
    }
    
    z = z * 2.84 - vec3(1.71, 1.94, 2.17);
  }
  
  return length(z) * 0.25;
}

// Variant 48: Cubic IFS
float mapIFSVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    z = z * 3.04 - vec3(2.26, 2.50, 2.74);
    
    if (z.x > 1.52) z.x = 3.04 - z.x;
    if (z.y > 1.76) z.y = 3.52 - z.y;
    if (z.z > 2.00) z.z = 4.00 - z.z;
  }
  
  return length(z) * 0.5;
}

// Variant 49: Spiral IFS
float mapIFSVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.26;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z.yz = mat2(c, -s, s, c) * z.yz;
    
    z = z * 2.92 - vec3(1.64, 1.88, 2.13);
    angle += 0.295;
  }
  
  return length(z) * 0.5;
}

// Variant 50: Plasma IFS
float mapIFSVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z) - vec3(1.15, 1.40, 1.65);
    
    float r = length(z);
    if (r < 1.30) {
      z = z / (r * r);
    }
    
    z = z * 2.90;
  }
  
  return length(z) * 0.5;
}
`;
