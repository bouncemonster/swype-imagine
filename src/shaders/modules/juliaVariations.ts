/**
 * Julia Variations 1-50 for WebGL2 Shaders
 * DIVERSE MATHEMATICAL APPROACHES
 */

export const JULIA_VARIATIONS_GLSL = `
// ===================================================================
// Julia Variations 1-50 - DIVERSE APPROACHES
// ===================================================================

// Variant 1: Classic Julia Set
float mapJuliaVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.355, 0.355, 0.355);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}


// Variant 2: Quaternion Julia
float mapJuliaVariant2(vec3 p, float t, float phi, int iters) {
  vec4 z = vec4(p, 0.0);
  vec4 c = vec4(0.320, 0.210, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    vec4 z2 = vec4(
      z.x*z.x - z.y*z.y - z.z*z.z - z.w*z.w,
      2.0*z.x*z.y,
      2.0*z.x*z.z,
      2.0*z.x*z.w
    );
    z = z2 + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 3: Burning Ship Julia
float mapJuliaVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.370, 0.615, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z = abs(z) + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 4: Tricorn Julia
float mapJuliaVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.232, 0.040, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), -sin(theta) * sin(phiAngle), -cos(theta));
    z += c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 5: Newton Julia
float mapJuliaVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 100.0) break;
    
    float zr2 = r * r;
    vec3 fz = z * (zr2 - 1.10);
    vec3 fpz = 3.0 * z * zr2;
    
    float fpz_len2 = dot(fpz, fpz);
    if (fpz_len2 < 0.0001) break;
    
    z = z - fz / fpz_len2;
  }
  
  return log(r + 1.0) * 0.1;
}

// Variant 6: Phoenix Julia
float mapJuliaVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 z_prev = vec3(0.0);
  vec3 c = vec3(0.530, -0.282, 0.0);
  vec3 p_param = vec3(-0.476, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + p_param * z_prev;
    z_prev = z;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 7: Celtic Julia
float mapJuliaVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.258, 0.728, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    
    if (z_new.x > 0.07) {
      z_new.x = -z_new.x;
    }
    
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 8: Buffalo Julia
float mapJuliaVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.440, 0.332, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new = vec3(abs(z_new.x), z_new.y, abs(z_new.z));
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 9: Spider Julia
float mapJuliaVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.336, 0.427, 0.0);
  vec3 c_prev = c;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + c_prev * 0.34;
    c_prev = c;
    c = z_new;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 10: Lambdoma Julia
float mapJuliaVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.050, 0.540, 0.530);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    z = abs(z) / dot(z, z) - c;
    dr = dr / (r * r) + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 11: IFS-style Julia
float mapJuliaVariant11(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.02;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x + z.y < z.z) z.z -= z.x + z.y;
    else if (z.x + z.z < z.y) z.y -= z.x + z.z;
    else if (z.y + z.z < z.x) z.x -= z.y + z.z;
    
    z = z * scale - vec3(1.61, 1.67, 1.72);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 12: Quaternion Julia
float mapJuliaVariant12(vec3 p, float t, float phi, int iters) {
  vec4 z = vec4(p, 0.0);
  vec4 c = vec4(0.420, 0.260, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    vec4 z2 = vec4(
      z.x*z.x - z.y*z.y - z.z*z.z - z.w*z.w,
      2.0*z.x*z.y,
      2.0*z.x*z.z,
      2.0*z.x*z.w
    );
    z = z2 + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 13: Burning Ship Julia
float mapJuliaVariant13(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.270, 0.665, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z = abs(z) + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 14: Tricorn Julia
float mapJuliaVariant14(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.312, 0.140, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), -sin(theta) * sin(phiAngle), -cos(theta));
    z += c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 15: Newton Julia
float mapJuliaVariant15(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 100.0) break;
    
    float zr2 = r * r;
    vec3 fz = z * (zr2 - 1.30);
    vec3 fpz = 3.0 * z * zr2;
    
    float fpz_len2 = dot(fpz, fpz);
    if (fpz_len2 < 0.0001) break;
    
    z = z - fz / fpz_len2;
  }
  
  return log(r + 1.0) * 0.1;
}

// Variant 16: Phoenix Julia
float mapJuliaVariant16(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 z_prev = vec3(0.0);
  vec3 c = vec3(0.580, -0.252, 0.0);
  vec3 p_param = vec3(-0.436, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + p_param * z_prev;
    z_prev = z;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 17: Celtic Julia
float mapJuliaVariant17(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.198, 0.768, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    
    if (z_new.x > 0.17) {
      z_new.x = -z_new.x;
    }
    
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 18: Buffalo Julia
float mapJuliaVariant18(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.490, 0.372, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new = vec3(abs(z_new.x), z_new.y, abs(z_new.z));
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 19: Spider Julia
float mapJuliaVariant19(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.376, 0.457, 0.0);
  vec3 c_prev = c;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + c_prev * 0.40;
    c_prev = c;
    c = z_new;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 20: Lambdoma Julia
float mapJuliaVariant20(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.100, 0.580, 0.560);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    z = abs(z) / dot(z, z) - c;
    dr = dr / (r * r) + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 21: IFS-style Julia
float mapJuliaVariant21(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.22;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x + z.y < z.z) z.z -= z.x + z.y;
    else if (z.x + z.z < z.y) z.y -= z.x + z.z;
    else if (z.y + z.z < z.x) z.x -= z.y + z.z;
    
    z = z * scale - vec3(1.71, 1.81, 1.92);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 22: Quaternion Julia
float mapJuliaVariant22(vec3 p, float t, float phi, int iters) {
  vec4 z = vec4(p, 0.0);
  vec4 c = vec4(0.520, 0.310, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    vec4 z2 = vec4(
      z.x*z.x - z.y*z.y - z.z*z.z - z.w*z.w,
      2.0*z.x*z.y,
      2.0*z.x*z.z,
      2.0*z.x*z.w
    );
    z = z2 + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 23: Burning Ship Julia
float mapJuliaVariant23(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.170, 0.715, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z = abs(z) + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 24: Tricorn Julia
float mapJuliaVariant24(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.392, 0.240, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), -sin(theta) * sin(phiAngle), -cos(theta));
    z += c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 25: Newton Julia
float mapJuliaVariant25(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 100.0) break;
    
    float zr2 = r * r;
    vec3 fz = z * (zr2 - 1.50);
    vec3 fpz = 3.0 * z * zr2;
    
    float fpz_len2 = dot(fpz, fpz);
    if (fpz_len2 < 0.0001) break;
    
    z = z - fz / fpz_len2;
  }
  
  return log(r + 1.0) * 0.1;
}

// Variant 26: Phoenix Julia
float mapJuliaVariant26(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 z_prev = vec3(0.0);
  vec3 c = vec3(0.630, -0.222, 0.0);
  vec3 p_param = vec3(-0.396, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + p_param * z_prev;
    z_prev = z;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 27: Celtic Julia
float mapJuliaVariant27(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.138, 0.808, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    
    if (z_new.x > 0.27) {
      z_new.x = -z_new.x;
    }
    
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 28: Buffalo Julia
float mapJuliaVariant28(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.540, 0.412, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new = vec3(abs(z_new.x), z_new.y, abs(z_new.z));
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 29: Spider Julia
float mapJuliaVariant29(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.416, 0.487, 0.0);
  vec3 c_prev = c;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + c_prev * 0.44;
    c_prev = c;
    c = z_new;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 30: Lambdoma Julia
float mapJuliaVariant30(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.150, 0.620, 0.590);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    z = abs(z) / dot(z, z) - c;
    dr = dr / (r * r) + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 31: IFS-style Julia
float mapJuliaVariant31(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.42;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x + z.y < z.z) z.z -= z.x + z.y;
    else if (z.x + z.z < z.y) z.y -= z.x + z.z;
    else if (z.y + z.z < z.x) z.x -= z.y + z.z;
    
    z = z * scale - vec3(1.81, 1.96, 2.12);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 32: Quaternion Julia
float mapJuliaVariant32(vec3 p, float t, float phi, int iters) {
  vec4 z = vec4(p, 0.0);
  vec4 c = vec4(0.620, 0.360, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    vec4 z2 = vec4(
      z.x*z.x - z.y*z.y - z.z*z.z - z.w*z.w,
      2.0*z.x*z.y,
      2.0*z.x*z.z,
      2.0*z.x*z.w
    );
    z = z2 + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 33: Burning Ship Julia
float mapJuliaVariant33(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.070, 0.765, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z = abs(z) + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 34: Tricorn Julia
float mapJuliaVariant34(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.472, 0.340, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), -sin(theta) * sin(phiAngle), -cos(theta));
    z += c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 35: Newton Julia
float mapJuliaVariant35(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 100.0) break;
    
    float zr2 = r * r;
    vec3 fz = z * (zr2 - 1.70);
    vec3 fpz = 3.0 * z * zr2;
    
    float fpz_len2 = dot(fpz, fpz);
    if (fpz_len2 < 0.0001) break;
    
    z = z - fz / fpz_len2;
  }
  
  return log(r + 1.0) * 0.1;
}

// Variant 36: Phoenix Julia
float mapJuliaVariant36(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 z_prev = vec3(0.0);
  vec3 c = vec3(0.680, -0.192, 0.0);
  vec3 p_param = vec3(-0.356, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + p_param * z_prev;
    z_prev = z;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 37: Celtic Julia
float mapJuliaVariant37(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.078, 0.848, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    
    if (z_new.x > 0.37) {
      z_new.x = -z_new.x;
    }
    
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 38: Buffalo Julia
float mapJuliaVariant38(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.590, 0.452, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new = vec3(abs(z_new.x), z_new.y, abs(z_new.z));
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 39: Spider Julia
float mapJuliaVariant39(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.456, 0.517, 0.0);
  vec3 c_prev = c;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + c_prev * 0.49;
    c_prev = c;
    c = z_new;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 40: Lambdoma Julia
float mapJuliaVariant40(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.200, 0.660, 0.620);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    z = abs(z) / dot(z, z) - c;
    dr = dr / (r * r) + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 41: IFS-style Julia
float mapJuliaVariant41(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = 2.62;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x + z.y < z.z) z.z -= z.x + z.y;
    else if (z.x + z.z < z.y) z.y -= z.x + z.z;
    else if (z.y + z.z < z.x) z.x -= z.y + z.z;
    
    z = z * scale - vec3(1.91, 2.12, 2.32);
  }
  
  return length(z) * pow(scale, -float(iters));
}

// Variant 42: Quaternion Julia
float mapJuliaVariant42(vec3 p, float t, float phi, int iters) {
  vec4 z = vec4(p, 0.0);
  vec4 c = vec4(0.720, 0.410, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    vec4 z2 = vec4(
      z.x*z.x - z.y*z.y - z.z*z.z - z.w*z.w,
      2.0*z.x*z.y,
      2.0*z.x*z.z,
      2.0*z.x*z.w
    );
    z = z2 + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 43: Burning Ship Julia
float mapJuliaVariant43(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.030, 0.815, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z = abs(z) + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 44: Tricorn Julia
float mapJuliaVariant44(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.552, 0.440, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), -sin(theta) * sin(phiAngle), -cos(theta));
    z += c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 45: Newton Julia
float mapJuliaVariant45(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 100.0) break;
    
    float zr2 = r * r;
    vec3 fz = z * (zr2 - 1.90);
    vec3 fpz = 3.0 * z * zr2;
    
    float fpz_len2 = dot(fpz, fpz);
    if (fpz_len2 < 0.0001) break;
    
    z = z - fz / fpz_len2;
  }
  
  return log(r + 1.0) * 0.1;
}

// Variant 46: Phoenix Julia
float mapJuliaVariant46(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 z_prev = vec3(0.0);
  vec3 c = vec3(0.730, -0.162, 0.0);
  vec3 p_param = vec3(-0.316, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + p_param * z_prev;
    z_prev = z;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 47: Celtic Julia
float mapJuliaVariant47(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.018, 0.888, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    
    if (z_new.x > 0.47) {
      z_new.x = -z_new.x;
    }
    
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 48: Buffalo Julia
float mapJuliaVariant48(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.640, 0.492, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new = vec3(abs(z_new.x), z_new.y, abs(z_new.z));
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 49: Spider Julia
float mapJuliaVariant49(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.496, 0.547, 0.0);
  vec3 c_prev = c;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    float zr = r * r;
    
    vec3 z_new = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z_new += c + c_prev * 0.54;
    c_prev = c;
    c = z_new;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variant 50: Lambdoma Julia
float mapJuliaVariant50(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.250, 0.700, 0.650);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    z = abs(z) / dot(z, z) - c;
    dr = dr / (r * r) + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`;
