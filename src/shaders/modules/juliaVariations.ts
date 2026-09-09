/**
 * Julia Variations 1-50 for WebGL2 Shaders
 * CORRECT MANDELBULB MATHEMATICS
 * Based on: https://en.wikipedia.org/wiki/Mandelbulb
 */

export const JULIA_VARIATIONS_GLSL = `
// ===================================================================
// Julia Variations 1-50 - CORRECT MANDELBULB FORMULAS
// ===================================================================

// Variant 1: Classic Mandelbulb (Power 8)
float mapJuliaVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0; // Classic Mandelbulb power
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Convert to polar coordinates
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    // Raise to power
    float zr = pow(r, power);
    theta = theta * power;
    phiAngle = phiAngle * power;
    
    // Convert back to cartesian
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += p; // Add original point (Mandelbrot formula)
    
    // Update distance estimation
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Mandelbulb Power 4.2
float mapJuliaVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 4.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Mandelbulb Power 12.6
float mapJuliaVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Julia Set (Power 8)
float mapJuliaVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.340, 0.320, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Burning Ship Mandelbulb
float mapJuliaVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.75;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 6: Tricorn Mandelbulb
float mapJuliaVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Rotated Mandelbulb
float mapJuliaVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.40;
  float rot = 0.240;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Folded Mandelbulb
float mapJuliaVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Mandelbulb Power 6.9
float mapJuliaVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 6.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Mandelbulb Power 19.0
float mapJuliaVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 19.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: Mandelbulb (Escape 2.55)
float mapJuliaVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.10;
  float escapeR = 2.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > escapeR) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 12: Mandelbulb Power 5.2
float mapJuliaVariant12(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 5.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Mandelbulb Power 14.6
float mapJuliaVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 14.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Julia Set (Power 8)
float mapJuliaVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.440, 0.370, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Burning Ship Mandelbulb
float mapJuliaVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.25;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 16: Tricorn Mandelbulb
float mapJuliaVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Rotated Mandelbulb
float mapJuliaVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.40;
  float rot = 0.440;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Folded Mandelbulb
float mapJuliaVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Mandelbulb Power 7.9
float mapJuliaVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 7.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Mandelbulb Power 22.0
float mapJuliaVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 22.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: Mandelbulb (Escape 3.05)
float mapJuliaVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.10;
  float escapeR = 3.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > escapeR) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 22: Mandelbulb Power 6.2
float mapJuliaVariant22(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 6.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Mandelbulb Power 16.6
float mapJuliaVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 16.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Julia Set (Power 8)
float mapJuliaVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.540, 0.420, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Burning Ship Mandelbulb
float mapJuliaVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.75;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 26: Tricorn Mandelbulb
float mapJuliaVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Rotated Mandelbulb
float mapJuliaVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.40;
  float rot = 0.640;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Folded Mandelbulb
float mapJuliaVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Mandelbulb Power 8.9
float mapJuliaVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Mandelbulb Power 25.0
float mapJuliaVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 25.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: Mandelbulb (Escape 3.55)
float mapJuliaVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.10;
  float escapeR = 3.55;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > escapeR) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 32: Mandelbulb Power 7.2
float mapJuliaVariant32(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 7.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Mandelbulb Power 18.6
float mapJuliaVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 18.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Julia Set (Power 8)
float mapJuliaVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.640, 0.470, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Burning Ship Mandelbulb
float mapJuliaVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.25;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 36: Tricorn Mandelbulb
float mapJuliaVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 11.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Rotated Mandelbulb
float mapJuliaVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.40;
  float rot = 0.840;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Folded Mandelbulb
float mapJuliaVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 13.70;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Mandelbulb Power 9.9
float mapJuliaVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 9.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Mandelbulb Power 28.0
float mapJuliaVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 28.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: Mandelbulb (Escape 4.05)
float mapJuliaVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.10;
  float escapeR = 4.05;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > escapeR) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 42: Mandelbulb Power 8.2
float mapJuliaVariant42(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 8.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Mandelbulb Power 20.6
float mapJuliaVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 20.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Julia Set (Power 8)
float mapJuliaVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.740, 0.520, 0.0);
  float dr = 1.0;
  float r = 0.0;
  float power = 8.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += c; // Julia uses constant c, not p
    dr = pow(r, power - 1.0) * power * dr;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Burning Ship Mandelbulb
float mapJuliaVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 14.75;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z = abs(z) + p; // Burning ship uses abs
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 46: Tricorn Mandelbulb
float mapJuliaVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 12.60;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    // Tricorn: conjugate (negate imaginary parts)
    z = zr * vec3(sin(theta * power) * cos(-phiAngle * power), 
                  sin(theta * power) * sin(-phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Rotated Mandelbulb
float mapJuliaVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 17.40;
  float rot = 1.040;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x) + rot; // Add rotation
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Folded Mandelbulb
float mapJuliaVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 15.20;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    // Folding before transformation
    z = abs(z);
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Mandelbulb Power 10.9
float mapJuliaVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 10.90;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Mandelbulb Power 31.0
float mapJuliaVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float power = 31.00;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 2.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = pow(r, power);
    
    z = zr * vec3(sin(theta * power) * cos(phiAngle * power), 
                  sin(theta * power) * sin(phiAngle * power), 
                  cos(theta * power));
    z += p;
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`;
