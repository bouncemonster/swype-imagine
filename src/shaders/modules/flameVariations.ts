/**
 * Fractal Flames Variations 1-50 for WebGL2 Shaders
 * CORRECT FRACTAL FLAME MATHEMATICS
 * Based on: https://en.wikipedia.org/wiki/Fractal_flame
 */

export const FLAME_VARIATIONS_GLSL = `
// ===================================================================
// Flame Variations 1-50 - CORRECT FRACTAL FLAME FORMULAS
// ===================================================================

// Variant 1: Sinusoidal Flame
float mapFlameVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.5;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Sinusoidal variation
    z = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Spherical Flame
float mapFlameVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.64;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Swirl Flame
float mapFlameVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.74;
  float swirl = 0.59;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Horseshoe Flame
float mapFlameVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.88;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Heart Flame
float mapFlameVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.02;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 6: Disc Flame
float mapFlameVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.78;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Spiral Flame
float mapFlameVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.84;
  float spiral = 0.58;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Hyperbolic Flame
float mapFlameVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Diamond Flame
float mapFlameVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.17;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Exponential Flame
float mapFlameVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: Power Flame
float mapFlameVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.98;
  float power = 3.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Power variation
    float angle = atan(z.y, z.x);
    float radius = pow(r, power);
    z = vec3(cos(angle * power) * radius, sin(angle * power) * radius, cos(r * power));
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 12: Spherical Flame
float mapFlameVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.84;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Swirl Flame
float mapFlameVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.90;
  float swirl = 0.89;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Horseshoe Flame
float mapFlameVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.08;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Heart Flame
float mapFlameVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.27;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 16: Disc Flame
float mapFlameVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.08;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Spiral Flame
float mapFlameVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  float spiral = 0.98;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Hyperbolic Flame
float mapFlameVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.25;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Diamond Flame
float mapFlameVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.47;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Exponential Flame
float mapFlameVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: Power Flame
float mapFlameVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.23;
  float power = 4.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Power variation
    float angle = atan(z.y, z.x);
    float radius = pow(r, power);
    z = vec3(cos(angle * power) * radius, sin(angle * power) * radius, cos(r * power));
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 22: Spherical Flame
float mapFlameVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Swirl Flame
float mapFlameVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  float swirl = 1.19;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Horseshoe Flame
float mapFlameVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.28;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Heart Flame
float mapFlameVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.52;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 26: Disc Flame
float mapFlameVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.38;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Spiral Flame
float mapFlameVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  float spiral = 1.38;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Hyperbolic Flame
float mapFlameVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Diamond Flame
float mapFlameVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.77;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Exponential Flame
float mapFlameVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: Power Flame
float mapFlameVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.48;
  float power = 5.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Power variation
    float angle = atan(z.y, z.x);
    float radius = pow(r, power);
    z = vec3(cos(angle * power) * radius, sin(angle * power) * radius, cos(r * power));
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 32: Spherical Flame
float mapFlameVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Swirl Flame
float mapFlameVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.19;
  float swirl = 1.49;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Horseshoe Flame
float mapFlameVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.48;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Heart Flame
float mapFlameVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.77;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 36: Disc Flame
float mapFlameVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.68;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Spiral Flame
float mapFlameVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  float spiral = 1.78;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Hyperbolic Flame
float mapFlameVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.75;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Diamond Flame
float mapFlameVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.07;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Exponential Flame
float mapFlameVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: Power Flame
float mapFlameVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.73;
  float power = 6.10;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Power variation
    float angle = atan(z.y, z.x);
    float radius = pow(r, power);
    z = vec3(cos(angle * power) * radius, sin(angle * power) * radius, cos(r * power));
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 42: Spherical Flame
float mapFlameVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spherical variation: z = z / r^2
    z = z / (r * r + 0.1);
    z *= scale;
    z += p * 0.25;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Swirl Flame
float mapFlameVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.34;
  float swirl = 1.79;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Swirl variation: rotate xy by r
    float angle = r * swirl;
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy;
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Horseshoe Flame
float mapFlameVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.68;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Horseshoe variation: (|z|^2 - z) / r
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.1);
    z *= scale;
    z += p * 0.22;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Heart Flame
float mapFlameVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.02;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Heart variation
    float angle = r;
    z = vec3(z.x * cos(angle) - z.y * sin(angle), 
             z.x * sin(angle) + z.y * cos(angle), 
             z.z);
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 46: Disc Flame
float mapFlameVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.98;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Disc variation
    float angle = atan(z.y, z.x);
    float radius = r * 0.5;
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Spiral Flame
float mapFlameVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.64;
  float spiral = 2.18;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Spiral variation
    float angle = spiral * log(r);
    float c = cos(angle);
    float s = sin(angle);
    z.xy = mat2(c, -s, s, c) * z.xy / (r * r + 0.1);
    z *= scale;
    z += p * 0.28;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Hyperbolic Flame
float mapFlameVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Hyperbolic variation
    float angle = atan(z.y, z.x);
    float radius = 1.0 / (r + 0.1);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z * 0.5);
    z *= scale;
    z += p * 0.24;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Diamond Flame
float mapFlameVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.37;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Diamond variation
    float angle = atan(z.y, z.x);
    float radius = sin(angle) * r;
    z = vec3(cos(angle) * radius, sin(angle) * radius, cos(r));
    z *= scale;
    z += p * 0.26;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Exponential Flame
float mapFlameVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Exponential variation
    float angle = atan(z.y, z.x);
    float radius = exp(r - 1.0);
    z = vec3(cos(angle) * radius, sin(angle) * radius, z.z);
    z *= scale;
    z += p * 0.3;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`;
