// Script to generate all 50 Julia variants
const fs = require('fs');

let glsl = `/**
 * Julia Variations 1-50 for WebGL2 Shaders
 * DIVERSE MATHEMATICAL APPROACHES
 */

export const JULIA_VARIATIONS_GLSL = \`
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

`;

// Generate variants 2-50
for (let n = 2; n <= 50; n++) {
  const technique = (n - 2) % 10;
  
  if (technique === 0) {
    // Quaternion Julia
    glsl += `
// Variant ${n}: Quaternion Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec4 z = vec4(p, 0.0);
  vec4 c = vec4(${(0.3 + n * 0.01).toFixed(3)}, ${(0.2 + n * 0.005).toFixed(3)}, 0.0, 0.0);
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
`;
  } else if (technique === 1) {
    // Burning Ship
    glsl += `
// Variant ${n}: Burning Ship Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(${(-0.4 + n * 0.01).toFixed(3)}, ${(0.6 + n * 0.005).toFixed(3)}, 0.0);
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
`;
  } else if (technique === 2) {
    // Tricorn
    glsl += `
// Variant ${n}: Tricorn Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(${(0.2 + n * 0.008).toFixed(3)}, ${(n * 0.01).toFixed(3)}, 0.0);
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
`;
  } else if (technique === 3) {
    // Newton
    glsl += `
// Variant ${n}: Newton Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 100.0) break;
    
    float zr2 = r * r;
    vec3 fz = z * (zr2 - ${(1.0 + n * 0.02).toFixed(2)});
    vec3 fpz = 3.0 * z * zr2;
    
    float fpz_len2 = dot(fpz, fpz);
    if (fpz_len2 < 0.0001) break;
    
    z = z - fz / fpz_len2;
  }
  
  return log(r + 1.0) * 0.1;
}
`;
  } else if (technique === 4) {
    // Phoenix
    glsl += `
// Variant ${n}: Phoenix Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 z_prev = vec3(0.0);
  vec3 c = vec3(${(0.5 + n * 0.005).toFixed(3)}, ${(-0.3 + n * 0.003).toFixed(3)}, 0.0);
  vec3 p_param = vec3(${(-0.5 + n * 0.004).toFixed(3)}, 0.0, 0.0);
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
`;
  } else if (technique === 5) {
    // Celtic
    glsl += `
// Variant ${n}: Celtic Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(${(-0.3 + n * 0.006).toFixed(3)}, ${(0.7 + n * 0.004).toFixed(3)}, 0.0);
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
    
    if (z_new.x > ${(n * 0.01).toFixed(2)}) {
      z_new.x = -z_new.x;
    }
    
    z = z_new + c;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`;
  } else if (technique === 6) {
    // Buffalo
    glsl += `
// Variant ${n}: Buffalo Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(${(0.4 + n * 0.005).toFixed(3)}, ${(0.3 + n * 0.004).toFixed(3)}, 0.0);
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
`;
  } else if (technique === 7) {
    // Spider
    glsl += `
// Variant ${n}: Spider Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(${(0.3 + n * 0.004).toFixed(3)}, ${(0.4 + n * 0.003).toFixed(3)}, 0.0);
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
    z_new += c + c_prev * ${(0.3 + n * 0.005).toFixed(2)};
    c_prev = c;
    c = z_new;
    z = z_new;
    dr = 2.0 * r * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
`;
  } else if (technique === 8) {
    // Lambdoma
    glsl += `
// Variant ${n}: Lambdoma Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(${(n * 0.005).toFixed(3)}, ${(0.5 + n * 0.004).toFixed(3)}, ${(0.5 + n * 0.003).toFixed(3)});
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
  } else {
    // IFS-style
    glsl += `
// Variant ${n}: IFS-style Julia
float mapJuliaVariant${n}(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float scale = ${(1.8 + n * 0.02).toFixed(2)};
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    
    z = abs(z);
    if (z.x + z.y < z.z) z.z -= z.x + z.y;
    else if (z.x + z.z < z.y) z.y -= z.x + z.z;
    else if (z.y + z.z < z.x) z.x -= z.y + z.z;
    
    z = z * scale - vec3(${(1.5 + n * 0.01).toFixed(2)}, ${(1.5 + n * 0.015).toFixed(2)}, ${(1.5 + n * 0.02).toFixed(2)});
  }
  
  return length(z) * pow(scale, -float(iters));
}
`;
  }
}

glsl += '`;\n';

fs.writeFileSync('src/shaders/modules/juliaVariations.ts', glsl);
console.log('Generated 50 Julia variants');
