/**
 * L-System Variations 1-50 for WebGL2 Shaders
 * DIVERSE BRANCHING ALGORITHMS
 */

export const LSYSTEM_VARIATIONS_GLSL = `
// ===================================================================
// L-System Variations 1-50 - DIVERSE APPROACHES
// ===================================================================

// Variant 1: Classic Binary Tree
float mapLSystemVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    z = z * scale;
  }
  
  return length(z) * pow(scale, -float(iters));
}


// Variant 2: Fractal Plant
float mapLSystemVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.36;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.42;
    } else {
      z.z = z.z - 0.43;
    }
    
    z = z * 1.74;
    angle += 0.060;
  }
  
  return length(z) * 0.5;
}

// Variant 3: Koch Curve
float mapLSystemVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.23;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.34;
    }
    
    z = z * 2.65;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.377;
}

// Variant 4: Dragon Curve
float mapLSystemVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.66;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.08) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.38;
    z.x = z.x - 0.34;
  }
  
  return length(z) * 0.5;
}

// Variant 5: Sierpinski
float mapLSystemVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < -0.13) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < -0.10) {
      z.xz = -z.zx;
    }
    
    z = z * 2.02;
    z = abs(z) - 0.85;
  }
  
  return length(z) * 0.25;
}

// Variant 6: Hilbert Curve
float mapLSystemVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.46;
    z.y = z.y - sign(z.y) * 0.49;
    z.z = z.z - sign(z.z) * 0.52;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 1.98;
  }
  
  return length(z) * 0.5;
}

// Variant 7: Barnsley Fern
float mapLSystemVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 17.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.135;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.57;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.34;
    }
    
    z = z * 0.47;
  }
  
  return length(z) * 0.5;
}

// Variant 8: Spiral Phyllotaxis
float mapLSystemVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 2.40;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.28;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.120;
    
    z = z * 1.22;
  }
  
  return length(z) * 0.5;
}

// Variant 9: Cube Subdivision
float mapLSystemVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.145;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 2.95;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.339;
}

// Variant 10: Apical Dominance
float mapLSystemVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 0.75;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.30 && abs(z.z) < 0.35) {
      z.y = z.y + 1.05 * dominance;
    } else {
      z.y = z.y + 0.30 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.50;
    z.z = z.z * 1.55;
    
    z = z * 0.70;
  }
  
  return length(z) * 0.5;
}

// Variant 11: Binary Tree
float mapLSystemVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.85;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * 2.08;
  }
  
  return length(z) * pow(2.08, -float(iters));
}

// Variant 12: Fractal Plant
float mapLSystemVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.66;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.52;
    } else {
      z.z = z.z - 0.58;
    }
    
    z = z * 1.94;
    angle += 0.110;
  }
  
  return length(z) * 0.5;
}

// Variant 13: Koch Curve
float mapLSystemVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.33;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.49;
    }
    
    z = z * 3.15;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.317;
}

// Variant 14: Dragon Curve
float mapLSystemVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.06;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.28) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.58;
    z.x = z.x - 0.44;
  }
  
  return length(z) * 0.5;
}

// Variant 15: Sierpinski
float mapLSystemVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.02) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.10) {
      z.xz = -z.zx;
    }
    
    z = z * 2.27;
    z = abs(z) - 0.95;
  }
  
  return length(z) * 0.25;
}

// Variant 16: Hilbert Curve
float mapLSystemVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.56;
    z.y = z.y - sign(z.y) * 0.64;
    z.z = z.z - sign(z.z) * 0.72;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 2.28;
  }
  
  return length(z) * 0.5;
}

// Variant 17: Barnsley Fern
float mapLSystemVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 27.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.185;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 1.82;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.54;
    }
    
    z = z * 0.57;
  }
  
  return length(z) * 0.5;
}

// Variant 18: Spiral Phyllotaxis
float mapLSystemVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 2.90;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.38;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.170;
    
    z = z * 1.37;
  }
  
  return length(z) * 0.5;
}

// Variant 19: Cube Subdivision
float mapLSystemVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.195;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 3.45;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.290;
}

// Variant 20: Apical Dominance
float mapLSystemVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 0.90;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.40 && abs(z.z) < 0.50) {
      z.y = z.y + 1.30 * dominance;
    } else {
      z.y = z.y + 0.40 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.70;
    z.z = z.z * 1.80;
    
    z = z * 0.80;
  }
  
  return length(z) * 0.5;
}

// Variant 21: Binary Tree
float mapLSystemVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.35;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * 2.33;
  }
  
  return length(z) * pow(2.33, -float(iters));
}

// Variant 22: Fractal Plant
float mapLSystemVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 0.96;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.62;
    } else {
      z.z = z.z - 0.73;
    }
    
    z = z * 2.14;
    angle += 0.160;
  }
  
  return length(z) * 0.5;
}

// Variant 23: Koch Curve
float mapLSystemVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.43;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.65;
    }
    
    z = z * 3.65;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.274;
}

// Variant 24: Dragon Curve
float mapLSystemVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.46;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.48) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.78;
    z.x = z.x - 0.54;
  }
  
  return length(z) * 0.5;
}

// Variant 25: Sierpinski
float mapLSystemVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.17) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.30) {
      z.xz = -z.zx;
    }
    
    z = z * 2.52;
    z = abs(z) - 1.05;
  }
  
  return length(z) * 0.25;
}

// Variant 26: Hilbert Curve
float mapLSystemVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.66;
    z.y = z.y - sign(z.y) * 0.79;
    z.z = z.z - sign(z.z) * 0.92;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 2.58;
  }
  
  return length(z) * 0.5;
}

// Variant 27: Barnsley Fern
float mapLSystemVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 37.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.235;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.08;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.74;
    }
    
    z = z * 0.67;
  }
  
  return length(z) * 0.5;
}

// Variant 28: Spiral Phyllotaxis
float mapLSystemVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 3.40;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.48;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.220;
    
    z = z * 1.52;
  }
  
  return length(z) * 0.5;
}

// Variant 29: Cube Subdivision
float mapLSystemVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.245;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 3.95;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.253;
}

// Variant 30: Apical Dominance
float mapLSystemVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 1.05;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.50 && abs(z.z) < 0.65) {
      z.y = z.y + 1.55 * dominance;
    } else {
      z.y = z.y + 0.50 * (1.0 - dominance);
    }
    
    z.x = z.x * 1.90;
    z.z = z.z * 2.05;
    
    z = z * 0.90;
  }
  
  return length(z) * 0.5;
}

// Variant 31: Binary Tree
float mapLSystemVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.85;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * 2.58;
  }
  
  return length(z) * pow(2.58, -float(iters));
}

// Variant 32: Fractal Plant
float mapLSystemVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.26;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.72;
    } else {
      z.z = z.z - 0.88;
    }
    
    z = z * 2.34;
    angle += 0.210;
  }
  
  return length(z) * 0.5;
}

// Variant 33: Koch Curve
float mapLSystemVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.53;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.79;
    }
    
    z = z * 4.15;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.241;
}

// Variant 34: Dragon Curve
float mapLSystemVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.86;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.68) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 1.98;
    z.x = z.x - 0.64;
  }
  
  return length(z) * 0.5;
}

// Variant 35: Sierpinski
float mapLSystemVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.33) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.50) {
      z.xz = -z.zx;
    }
    
    z = z * 2.77;
    z = abs(z) - 1.15;
  }
  
  return length(z) * 0.25;
}

// Variant 36: Hilbert Curve
float mapLSystemVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.76;
    z.y = z.y - sign(z.y) * 0.94;
    z.z = z.z - sign(z.z) * 1.12;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 2.88;
  }
  
  return length(z) * 0.5;
}

// Variant 37: Barnsley Fern
float mapLSystemVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 47.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.285;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.33;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 1.94;
    }
    
    z = z * 0.77;
  }
  
  return length(z) * 0.5;
}

// Variant 38: Spiral Phyllotaxis
float mapLSystemVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 3.90;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.58;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.270;
    
    z = z * 1.67;
  }
  
  return length(z) * 0.5;
}

// Variant 39: Cube Subdivision
float mapLSystemVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.295;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 4.45;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.225;
}

// Variant 40: Apical Dominance
float mapLSystemVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 1.20;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.60 && abs(z.z) < 0.80) {
      z.y = z.y + 1.80 * dominance;
    } else {
      z.y = z.y + 0.60 * (1.0 - dominance);
    }
    
    z.x = z.x * 2.10;
    z.z = z.z * 2.30;
    
    z = z * 1.00;
  }
  
  return length(z) * 0.5;
}

// Variant 41: Binary Tree
float mapLSystemVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.35;
  float c = cos(angle);
  float s = sin(angle);
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(c, -s, s, c) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(c, s, -s, c) * z.xy;
    }
    
    z = z * 2.83;
  }
  
  return length(z) * pow(2.83, -float(iters));
}

// Variant 42: Fractal Plant
float mapLSystemVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 1.56;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    
    if (i % 2 == 0) {
      z.y = z.y - 0.82;
    } else {
      z.z = z.z - 1.03;
    }
    
    z = z * 2.54;
    angle += 0.260;
  }
  
  return length(z) * 0.5;
}

// Variant 43: Koch Curve
float mapLSystemVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float threshold = 0.63;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < threshold && abs(z.y) < threshold) {
      z.z += 0.95;
    }
    
    z = z * 4.65;
    z = fract(z) - 0.5;
  }
  
  return length(z) * 0.215;
}

// Variant 44: Dragon Curve
float mapLSystemVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float angle = 2.26;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x > 0.88) {
      z.x = -z.x;
      z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    }
    
    z = z * 2.18;
    z.x = z.x - 0.74;
  }
  
  return length(z) * 0.5;
}

// Variant 45: Sierpinski
float mapLSystemVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (z.x + z.y < 0.47) {
      z.xy = -z.yx;
    }
    if (z.x + z.z < 0.70) {
      z.xz = -z.zx;
    }
    
    z = z * 3.02;
    z = abs(z) - 1.25;
  }
  
  return length(z) * 0.25;
}

// Variant 46: Hilbert Curve
float mapLSystemVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    vec3 oldZ = z;
    z.x = z.x - sign(z.x) * 0.86;
    z.y = z.y - sign(z.y) * 1.09;
    z.z = z.z - sign(z.z) * 1.32;
    
    if (oldZ.x * oldZ.y > 0.0) {
      z.xy = mat2(0.0, -1.0, 1.0, 0.0) * z.xy;
    }
    
    z = z * 3.18;
  }
  
  return length(z) * 0.5;
}

// Variant 47: Barnsley Fern
float mapLSystemVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float r = fract(sin(float(i) * 57.0) * 43758.5453);
    
    if (r < 0.01) {
      z.y = z.y * 0.335;
    } else if (r < 0.86) {
      z.xy = mat2(0.85, 0.04, -0.04, 0.85) * z.xy;
      z.y = z.y + 2.58;
    } else {
      z.xy = mat2(0.2, -0.26, 0.23, 0.22) * z.xy;
      z.y = z.y + 2.14;
    }
    
    z = z * 0.87;
  }
  
  return length(z) * 0.5;
}

// Variant 48: Spiral Phyllotaxis
float mapLSystemVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float goldenAngle = 4.40;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    float angle = float(i) * goldenAngle;
    float r = sqrt(float(i)) * 0.68;
    
    z.x = z.x - cos(angle) * r;
    z.y = z.y - sin(angle) * r;
    z.z = z.z - float(i) * 0.320;
    
    z = z * 1.82;
  }
  
  return length(z) * 0.5;
}

// Variant 49: Cube Subdivision
float mapLSystemVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float removeSize = 0.345;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    z = z * 4.95;
    z = fract(z) - 0.5;
    
    if (abs(z.x) < removeSize && abs(z.y) < removeSize && abs(z.z) < removeSize) {
      z = vec3(0.5);
    }
  }
  
  return length(z) * 0.202;
}

// Variant 50: Apical Dominance
float mapLSystemVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dominance = 1.35;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    if (abs(z.x) < 0.70 && abs(z.z) < 0.95) {
      z.y = z.y + 2.05 * dominance;
    } else {
      z.y = z.y + 0.70 * (1.0 - dominance);
    }
    
    z.x = z.x * 2.30;
    z.z = z.z * 2.55;
    
    z = z * 1.10;
  }
  
  return length(z) * 0.5;
}
`;
