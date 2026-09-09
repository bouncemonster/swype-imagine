/**
 * Fractal Flames Variations 1-50 for WebGL2 Shaders
 * Apophysis-style fractal flames with variations
 */

export const FLAME_VARIATIONS_GLSL = `
// ===================================================================
// Flame Variations 1-50
// Based on Apophysis-style fractal flames
// ===================================================================

float mapFlameVariant1(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    // Sinusoidal variation
    z = vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z *= 1.5 + sin(t * 0.1) * 0.3;
    z += p * 0.3;
    
    d = min(d, length(z) - 0.5);
  }
  return d;
}

float mapFlameVariant2(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    
    // Spherical variation
    z = z / (r * r + 0.5);
    z *= 1.8 + cos(t * 0.12) * 0.25;
    z += p * 0.25;
    
    d = min(d, length(z) - 0.6);
  }
  return d;
}

float mapFlameVariant3(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    float angle = atan(z.y, z.x) + t * 0.05;
    
    // Swirl variation
    z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    z *= 1.6 + sin(t * 0.08) * 0.28;
    z += p * 0.28;
    
    d = min(d, length(z) - 0.55);
  }
  return d;
}

float mapFlameVariant4(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Horseshoe variation
    float r = length(z);
    z = vec3(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y, z.z) / (r + 0.3);
    z *= 1.7 + cos(t * 0.15) * 0.22;
    z += p * 0.22;
    
    d = min(d, length(z) - 0.58);
  }
  return d;
}

float mapFlameVariant5(vec3 p, float t, float phi, int iters) {
  float d = 1e10;
  vec3 z = p;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    
    // Heart variation
    z = vec3(z.x * cos(r) - z.y * sin(r), z.x * sin(r) + z.y * cos(r), z.z);
    z *= 1.9 + sin(t * 0.11) * 0.26;
    z += p * 0.26;
    
    d = min(d, length(z) - 0.52);
  }
  return d;
}

// Flame Variants 6-50: Parametric generation
float mapFlameVariant6(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(6) * 0.02), t + float(6) * 0.13, phi, iters); }
float mapFlameVariant7(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(7) * 0.02), t + float(7) * 0.13, phi, iters); }
float mapFlameVariant8(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(8) * 0.02), t + float(8) * 0.13, phi, iters); }
float mapFlameVariant9(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(9) * 0.02), t + float(9) * 0.13, phi, iters); }
float mapFlameVariant10(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(10) * 0.02), t + float(10) * 0.13, phi, iters); }

float mapFlameVariant11(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(11) * 0.02), t + float(11) * 0.13, phi, iters); }
float mapFlameVariant12(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(12) * 0.02), t + float(12) * 0.13, phi, iters); }
float mapFlameVariant13(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(13) * 0.02), t + float(13) * 0.13, phi, iters); }
float mapFlameVariant14(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(14) * 0.02), t + float(14) * 0.13, phi, iters); }
float mapFlameVariant15(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(15) * 0.02), t + float(15) * 0.13, phi, iters); }

float mapFlameVariant16(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(16) * 0.02), t + float(16) * 0.13, phi, iters); }
float mapFlameVariant17(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(17) * 0.02), t + float(17) * 0.13, phi, iters); }
float mapFlameVariant18(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(18) * 0.02), t + float(18) * 0.13, phi, iters); }
float mapFlameVariant19(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(19) * 0.02), t + float(19) * 0.13, phi, iters); }
float mapFlameVariant20(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(20) * 0.02), t + float(20) * 0.13, phi, iters); }

float mapFlameVariant21(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(21) * 0.02), t + float(21) * 0.13, phi, iters); }
float mapFlameVariant22(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(22) * 0.02), t + float(22) * 0.13, phi, iters); }
float mapFlameVariant23(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(23) * 0.02), t + float(23) * 0.13, phi, iters); }
float mapFlameVariant24(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(24) * 0.02), t + float(24) * 0.13, phi, iters); }
float mapFlameVariant25(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(25) * 0.02), t + float(25) * 0.13, phi, iters); }

float mapFlameVariant26(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(26) * 0.02), t + float(26) * 0.13, phi, iters); }
float mapFlameVariant27(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(27) * 0.02), t + float(27) * 0.13, phi, iters); }
float mapFlameVariant28(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(28) * 0.02), t + float(28) * 0.13, phi, iters); }
float mapFlameVariant29(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(29) * 0.02), t + float(29) * 0.13, phi, iters); }
float mapFlameVariant30(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(30) * 0.02), t + float(30) * 0.13, phi, iters); }

float mapFlameVariant31(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(31) * 0.02), t + float(31) * 0.13, phi, iters); }
float mapFlameVariant32(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(32) * 0.02), t + float(32) * 0.13, phi, iters); }
float mapFlameVariant33(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(33) * 0.02), t + float(33) * 0.13, phi, iters); }
float mapFlameVariant34(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(34) * 0.02), t + float(34) * 0.13, phi, iters); }
float mapFlameVariant35(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(35) * 0.02), t + float(35) * 0.13, phi, iters); }

float mapFlameVariant36(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(36) * 0.02), t + float(36) * 0.13, phi, iters); }
float mapFlameVariant37(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(37) * 0.02), t + float(37) * 0.13, phi, iters); }
float mapFlameVariant38(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(38) * 0.02), t + float(38) * 0.13, phi, iters); }
float mapFlameVariant39(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(39) * 0.02), t + float(39) * 0.13, phi, iters); }
float mapFlameVariant40(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(40) * 0.02), t + float(40) * 0.13, phi, iters); }

float mapFlameVariant41(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(41) * 0.02), t + float(41) * 0.13, phi, iters); }
float mapFlameVariant42(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(42) * 0.02), t + float(42) * 0.13, phi, iters); }
float mapFlameVariant43(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(43) * 0.02), t + float(43) * 0.13, phi, iters); }
float mapFlameVariant44(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(44) * 0.02), t + float(44) * 0.13, phi, iters); }
float mapFlameVariant45(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(45) * 0.02), t + float(45) * 0.13, phi, iters); }

float mapFlameVariant46(vec3 p, float t, float phi, int iters) { return mapFlameVariant1(p * (1.0 + float(46) * 0.02), t + float(46) * 0.13, phi, iters); }
float mapFlameVariant47(vec3 p, float t, float phi, int iters) { return mapFlameVariant2(p * (1.0 + float(47) * 0.02), t + float(47) * 0.13, phi, iters); }
float mapFlameVariant48(vec3 p, float t, float phi, int iters) { return mapFlameVariant3(p * (1.0 + float(48) * 0.02), t + float(48) * 0.13, phi, iters); }
float mapFlameVariant49(vec3 p, float t, float phi, int iters) { return mapFlameVariant4(p * (1.0 + float(49) * 0.02), t + float(49) * 0.13, phi, iters); }
float mapFlameVariant50(vec3 p, float t, float phi, int iters) { return mapFlameVariant5(p * (1.0 + float(50) * 0.02), t + float(50) * 0.13, phi, iters); }
`;
