/**
 * Hybrid Variations 1-90 for WebGL2 Shaders
 * CORRECT HYBRID FRACTAL MATHEMATICS
 * Combining Mandelbrot, Julia, IFS, and Flames with proper formulas
 */

export const HYBRID_VARIATIONS_GLSL = `
// ===================================================================
// Hybrid Variations 1-90 - CORRECT HYBRID FORMULAS
// ===================================================================

// Variant 1: Mandelbrot-Julia Hybrid
float mapHybridVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = mix(z, c, 0.3); // Julia blend
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}


// Variant 2: Mandelbrot-IFS Hybrid
float mapHybridVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.04;
  float power = 8.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 3: Julia-Flame Hybrid
float mapHybridVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.45;
  float blend = 0.215;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 4: IFS-L-System Hybrid
float mapHybridVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 1.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 5: Mandelbrot Power 5.0
float mapHybridVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 5.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 6: Mandelbrot Power 13.8
float mapHybridVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 7: Burning Ship Hybrid
float mapHybridVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 8: Rotated Mandelbrot
float mapHybridVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.60;
  float rot = 0.260;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 9: Folded Mandelbrot
float mapHybridVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 10: Mandelbrot Power 8.5
float mapHybridVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 11: Mandelbrot Power 20.4
float mapHybridVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 20.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 12: Mandelbrot-IFS Hybrid
float mapHybridVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.24;
  float power = 9.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 13: Julia-Flame Hybrid
float mapHybridVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 9.95;
  float blend = 0.265;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 14: IFS-L-System Hybrid
float mapHybridVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.15;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 15: Mandelbrot Power 7.0
float mapHybridVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 7.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 16: Mandelbrot Power 16.8
float mapHybridVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 17: Burning Ship Hybrid
float mapHybridVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 18: Rotated Mandelbrot
float mapHybridVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.60;
  float rot = 0.460;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 19: Folded Mandelbrot
float mapHybridVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 20: Mandelbrot Power 11.0
float mapHybridVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 21: Mandelbrot Power 24.4
float mapHybridVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 24.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 22: Mandelbrot-IFS Hybrid
float mapHybridVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.44;
  float power = 10.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 23: Julia-Flame Hybrid
float mapHybridVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 11.45;
  float blend = 0.315;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 24: IFS-L-System Hybrid
float mapHybridVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 25: Mandelbrot Power 9.0
float mapHybridVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 26: Mandelbrot Power 19.8
float mapHybridVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 27: Burning Ship Hybrid
float mapHybridVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 28: Rotated Mandelbrot
float mapHybridVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.60;
  float rot = 0.660;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 29: Folded Mandelbrot
float mapHybridVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 30: Mandelbrot Power 13.5
float mapHybridVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 31: Mandelbrot Power 28.4
float mapHybridVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 28.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 32: Mandelbrot-IFS Hybrid
float mapHybridVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.64;
  float power = 11.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 33: Julia-Flame Hybrid
float mapHybridVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 12.95;
  float blend = 0.365;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 34: IFS-L-System Hybrid
float mapHybridVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.65;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 35: Mandelbrot Power 11.0
float mapHybridVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 36: Mandelbrot Power 22.8
float mapHybridVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 22.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 37: Burning Ship Hybrid
float mapHybridVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 38: Rotated Mandelbrot
float mapHybridVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.60;
  float rot = 0.860;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 39: Folded Mandelbrot
float mapHybridVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 40: Mandelbrot Power 16.0
float mapHybridVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 41: Mandelbrot Power 32.4
float mapHybridVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 32.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 42: Mandelbrot-IFS Hybrid
float mapHybridVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.84;
  float power = 12.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 43: Julia-Flame Hybrid
float mapHybridVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 14.45;
  float blend = 0.415;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 44: IFS-L-System Hybrid
float mapHybridVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 2.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 45: Mandelbrot Power 13.0
float mapHybridVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 46: Mandelbrot Power 25.8
float mapHybridVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 25.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 47: Burning Ship Hybrid
float mapHybridVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 48: Rotated Mandelbrot
float mapHybridVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 17.60;
  float rot = 1.060;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 49: Folded Mandelbrot
float mapHybridVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 50: Mandelbrot Power 18.5
float mapHybridVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 18.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 51: Mandelbrot Power 36.4
float mapHybridVariant51(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 36.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 52: Mandelbrot-IFS Hybrid
float mapHybridVariant52(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.04;
  float power = 13.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 53: Julia-Flame Hybrid
float mapHybridVariant53(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 15.95;
  float blend = 0.465;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 54: IFS-L-System Hybrid
float mapHybridVariant54(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.15;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 55: Mandelbrot Power 15.0
float mapHybridVariant55(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 56: Mandelbrot Power 28.8
float mapHybridVariant56(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 28.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 57: Burning Ship Hybrid
float mapHybridVariant57(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 58: Rotated Mandelbrot
float mapHybridVariant58(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.60;
  float rot = 1.260;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 59: Folded Mandelbrot
float mapHybridVariant59(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 60: Mandelbrot Power 21.0
float mapHybridVariant60(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 61: Mandelbrot Power 40.4
float mapHybridVariant61(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 40.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 62: Mandelbrot-IFS Hybrid
float mapHybridVariant62(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.24;
  float power = 14.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 63: Julia-Flame Hybrid
float mapHybridVariant63(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 17.45;
  float blend = 0.515;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 64: IFS-L-System Hybrid
float mapHybridVariant64(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 65: Mandelbrot Power 17.0
float mapHybridVariant65(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 17.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 66: Mandelbrot Power 31.8
float mapHybridVariant66(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 31.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 67: Burning Ship Hybrid
float mapHybridVariant67(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 18.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 68: Rotated Mandelbrot
float mapHybridVariant68(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.60;
  float rot = 1.460;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 69: Folded Mandelbrot
float mapHybridVariant69(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 18.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 70: Mandelbrot Power 23.5
float mapHybridVariant70(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 23.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 71: Mandelbrot Power 44.4
float mapHybridVariant71(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 44.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 72: Mandelbrot-IFS Hybrid
float mapHybridVariant72(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.44;
  float power = 15.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 73: Julia-Flame Hybrid
float mapHybridVariant73(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 18.95;
  float blend = 0.565;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 74: IFS-L-System Hybrid
float mapHybridVariant74(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.65;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 75: Mandelbrot Power 19.0
float mapHybridVariant75(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 76: Mandelbrot Power 34.8
float mapHybridVariant76(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 34.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 77: Burning Ship Hybrid
float mapHybridVariant77(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 78: Rotated Mandelbrot
float mapHybridVariant78(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 23.60;
  float rot = 1.660;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 79: Folded Mandelbrot
float mapHybridVariant79(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.85;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 80: Mandelbrot Power 26.0
float mapHybridVariant80(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 26.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 81: Mandelbrot Power 48.4
float mapHybridVariant81(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 48.40;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 82: Mandelbrot-IFS Hybrid
float mapHybridVariant82(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.64;
  float power = 16.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    // Mandelbulb transformation
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z *= scale * 0.5;
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 83: Julia-Flame Hybrid
float mapHybridVariant83(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 20.45;
  float blend = 0.615;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    // Mandelbulb
    vec3 mb = zr * vec3(sin(theta) * cos(phiAngle), 
                        sin(theta) * sin(phiAngle), 
                        cos(theta));
    
    // Flame variation (sinusoidal)
    vec3 flame = vec3(sin(z.x) * cos(z.y), sin(z.x) * sin(z.y), cos(z.z));
    
    z = mix(mb, flame, blend);
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 84: IFS-L-System Hybrid
float mapHybridVariant84(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float scale = 3.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // L-System branching
    if (z.x > 0.0) {
      z.x = z.x - 1.0;
      z.xy = mat2(0.7, -0.7, 0.7, 0.7) * z.xy;
    } else {
      z.x = z.x + 1.0;
      z.xy = mat2(0.7, 0.7, -0.7, 0.7) * z.xy;
    }
    
    // IFS folding
    z = abs(z);
    if (z.x < z.y) z.xy = z.yx;
    
    z *= scale;
    
    dr = dr * scale + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 85: Mandelbrot Power 21.0
float mapHybridVariant85(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 86: Mandelbrot Power 37.8
float mapHybridVariant86(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 37.80;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 87: Burning Ship Hybrid
float mapHybridVariant87(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z = abs(z) + p; // Burning ship
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 88: Rotated Mandelbrot
float mapHybridVariant88(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 25.60;
  float rot = 1.860;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0));
    float phiAngle = atan(z.y, z.x) + rot;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 89: Folded Mandelbrot
float mapHybridVariant89(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 21.35;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding
    z = abs(z);
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}

// Variant 90: Mandelbrot Power 28.5
float mapHybridVariant90(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 28.50;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(clamp(z.z / max(r, 0.001), -1.0, 1.0)) * power;
    float phiAngle = atan(z.y, z.x) * power;
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta) * cos(phiAngle), 
                  sin(theta) * sin(phiAngle), 
                  cos(theta));
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(max(r, 1.0001)) * r / max(dr, 0.0001);
}
`;
