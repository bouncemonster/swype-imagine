/**
 * L-System Variations 1-50 for WebGL2 Shaders
 * CORRECT L-SYSTEM MATHEMATICS with escape condition
 */

export const LSYSTEM_VARIATIONS_GLSL = `
// ===================================================================
// L-System Variations 1-50 - CORRECT L-SYSTEM FORMULAS
// ===================================================================

// Variant 1: Classic Binary Tree
float mapLSystemVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Fractal Plant
float mapLSystemVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.74;
  float angle = 0.35;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.42;
    } else {
      z.z = z.z - 0.42;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.056;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Koch Curve
float mapLSystemVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.62;
  float threshold = 0.22;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.33;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Dragon Curve
float mapLSystemVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.36;
  float angle = 0.62;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.06) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.33;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Sierpinski
float mapLSystemVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.00;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < -0.15) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < -0.13) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 0.84;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 6: Hilbert Curve
float mapLSystemVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.95;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.45;
    z.y = z.y - sign(z.y) * 0.46;
    z.z = z.z - sign(z.z) * 0.49;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Barnsley Fern
float mapLSystemVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.46;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 17.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.121;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.54;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.30;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Spiral Phyllotaxis
float mapLSystemVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.20;
  float goldenAngle = 2.32;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.26;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.104;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Cube Subdivision
float mapLSystemVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.86;
  float removeSize = 0.127;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Apical Dominance
float mapLSystemVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.68;
  float dominance = 0.70;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.28 && abs(z.z) < 0.30) {
      z.y = z.y + 1.00 * dominance;
    } else {
      z.y = z.y + 0.28 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.45;
    z.z = z.z * 1.50;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: Binary Tree
float mapLSystemVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.02;
  float angle = 0.74;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 12: Fractal Plant
float mapLSystemVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.94;
  float angle = 0.60;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.50;
    } else {
      z.z = z.z - 0.52;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.086;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Koch Curve
float mapLSystemVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.02;
  float threshold = 0.30;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.43;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Dragon Curve
float mapLSystemVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.51;
  float angle = 0.92;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.21) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.41;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Sierpinski
float mapLSystemVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.20;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < -0.05) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.02) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 0.92;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 16: Hilbert Curve
float mapLSystemVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.20;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.53;
    z.y = z.y - sign(z.y) * 0.56;
    z.z = z.z - sign(z.z) * 0.64;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Barnsley Fern
float mapLSystemVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.54;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 27.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.151;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.74;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.46;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Spiral Phyllotaxis
float mapLSystemVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.32;
  float goldenAngle = 2.72;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.34;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.134;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Cube Subdivision
float mapLSystemVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.26;
  float removeSize = 0.157;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Apical Dominance
float mapLSystemVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.76;
  float dominance = 0.80;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.36 && abs(z.z) < 0.40) {
      z.y = z.y + 1.20 * dominance;
    } else {
      z.y = z.y + 0.36 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.60;
    z.z = z.z * 1.70;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: Binary Tree
float mapLSystemVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.22;
  float angle = 1.14;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 22: Fractal Plant
float mapLSystemVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.14;
  float angle = 0.85;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.58;
    } else {
      z.z = z.z - 0.62;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.116;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Koch Curve
float mapLSystemVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.42;
  float threshold = 0.38;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.53;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Dragon Curve
float mapLSystemVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.66;
  float angle = 1.22;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.36) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.49;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Sierpinski
float mapLSystemVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.40;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.05) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.17) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 1.00;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 26: Hilbert Curve
float mapLSystemVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.45;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.61;
    z.y = z.y - sign(z.y) * 0.66;
    z.z = z.z - sign(z.z) * 0.79;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Barnsley Fern
float mapLSystemVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.62;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 37.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.181;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.94;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.60;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Spiral Phyllotaxis
float mapLSystemVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.44;
  float goldenAngle = 3.12;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.42;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.164;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Cube Subdivision
float mapLSystemVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.66;
  float removeSize = 0.187;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Apical Dominance
float mapLSystemVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.84;
  float dominance = 0.90;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.44 && abs(z.z) < 0.50) {
      z.y = z.y + 1.40 * dominance;
    } else {
      z.y = z.y + 0.44 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.75;
    z.z = z.z * 1.90;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: Binary Tree
float mapLSystemVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.42;
  float angle = 1.54;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 32: Fractal Plant
float mapLSystemVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.34;
  float angle = 1.10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.66;
    } else {
      z.z = z.z - 0.72;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.146;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Koch Curve
float mapLSystemVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.82;
  float threshold = 0.46;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.63;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Dragon Curve
float mapLSystemVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.81;
  float angle = 1.52;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.51) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.57;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Sierpinski
float mapLSystemVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.60;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.15) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.33) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 1.08;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 36: Hilbert Curve
float mapLSystemVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.70;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.69;
    z.y = z.y - sign(z.y) * 0.76;
    z.z = z.z - sign(z.z) * 0.94;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Barnsley Fern
float mapLSystemVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.70;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 47.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.211;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.14;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.75;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Spiral Phyllotaxis
float mapLSystemVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.56;
  float goldenAngle = 3.52;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.50;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.194;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Cube Subdivision
float mapLSystemVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 4.06;
  float removeSize = 0.217;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Apical Dominance
float mapLSystemVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.92;
  float dominance = 1.00;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.52 && abs(z.z) < 0.60) {
      z.y = z.y + 1.60 * dominance;
    } else {
      z.y = z.y + 0.52 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.90;
    z.z = z.z * 2.10;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: Binary Tree
float mapLSystemVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.62;
  float angle = 1.94;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 42: Fractal Plant
float mapLSystemVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.54;
  float angle = 1.35;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.74;
    } else {
      z.z = z.z - 0.82;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
    angle += 0.176;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Koch Curve
float mapLSystemVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 4.22;
  float threshold = 0.54;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.73;
    }
    
    z = z * scale;
    z = fract(z) - 0.5;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Dragon Curve
float mapLSystemVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.96;
  float angle = 1.82;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x > 0.66) {
      z.x = -z.x;
      float c = cos(angle);
      float s = sin(angle);
      z.xy = mat2(c, -s, s, c) * z.xy;
    }
    
    z = z * scale;
    z.x = z.x - 0.65;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Sierpinski
float mapLSystemVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.80;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (z.x + z.y < 0.25) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.47) {
      z.xz = -z.zx;
    }
    
    z = z * scale;
    z = abs(z) - 1.16;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 46: Hilbert Curve
float mapLSystemVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.95;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.77;
    z.y = z.y - sign(z.y) * 0.86;
    z.z = z.z - sign(z.z) * 1.09;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Barnsley Fern
float mapLSystemVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 0.78;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float fractVal = fract(sin(float(i) * 57.0) * 43758.5453);
    
    if (fractVal < 0.01) {
      z.y = z.y * 0.241;
    } else if (fractVal < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.34;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.90;
    }
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Spiral Phyllotaxis
float mapLSystemVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.68;
  float goldenAngle = 3.92;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float angle = float(i) * goldenAngle;
    float radius = sqrt(float(i)) * 0.58;
    
    z.x = z.x - cos(angle) * radius;
    z.y = z.y - sin(angle) * radius;
    z.z = z.z - float(i) * 0.224;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Cube Subdivision
float mapLSystemVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 4.46;
  float removeSize = 0.247;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    z = z * scale;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Apical Dominance
float mapLSystemVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.00;
  float dominance = 1.10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    if (abs(z.x) < 0.60 && abs(z.z) < 0.70) {
      z.y = z.y + 1.80 * dominance;
    } else {
      z.y = z.y + 0.60 * (1.0 - dominance);
    }
    
    z.x = z.x * 2.05;
    z.z = z.z * 2.30;
    
    z = z * scale;
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`;
