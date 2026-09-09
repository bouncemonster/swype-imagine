// Hybrid Variations 1-90 for webglShaders.ts
// Hybrid fractals combining Mandelbrot, Julia, IFS, and Flames

float mapHybridVariant1(vec3 p, float t, float phi, int iters) {
  // Mandelbrot-Julia hybrid
  vec3 z = p;
  vec3 c = vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.0 + cos(t * 0.08) * 0.3;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z = mix(z, c, 0.3); // Julia blend
    z += p;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapHybridVariant2(vec3 p, float t, float phi, int iters) {
  // Mandelbrot-IFS hybrid
  vec3 z = p;
  float scale = 2.0 + sin(t * 0.1) * 0.2;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    z.xy = abs(z.xy);
    z.xz = abs(z.xz);
    float angle = t * 0.05 + float(i) * 0.1;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    z.xy = rot * z.xy;
    z *= scale;
    z -= vec3(1.0, 0.5, 0.3);
    
    dr *= scale;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapHybridVariant3(vec3 p, float t, float phi, int iters) {
  // Julia-Flame hybrid
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float d = 1e10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    float r = length(z);
    
    // Flame variation
    z = vec3(sin(r) * cos(r), sin(r) * sin(r), cos(r));
    z *= 1.5 + sin(t * 0.1) * 0.3;
    z += c;
    
    d = min(d, length(z) - 0.5);
  }
  return d;
}

float mapHybridVariant4(vec3 p, float t, float phi, int iters) {
  // IFS-L-System hybrid
  float d = length(p) - 1.0;
  float scale = 0.5 + sin(t * 0.1) * 0.1;
  
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    p = abs(p) - vec3(0.5, 0.3, 0.4);
    float angle = t * 0.05 + float(i) * 0.2;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xy = rot * p.xy;
    p *= scale;
    d = min(d, length(p) - 0.3);
  }
  return d;
}

float mapHybridVariant5(vec3 p, float t, float phi, int iters) {
  // Mandelbrot-Flame hybrid
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float angle = atan(z.y, z.x) + t * 0.05;
    z.xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * z.xy;
    z *= 1.6 + sin(t * 0.08) * 0.28;
    z += p * 0.28;
    
    dr *= 1.6;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Hybrid Variants 6-90: Parametric generation using base functions
float mapHybridVariant6(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(6) * 0.015), t + float(6) * 0.1, phi, iters); }
float mapHybridVariant7(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(7) * 0.015), t + float(7) * 0.1, phi, iters); }
float mapHybridVariant8(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(8) * 0.015), t + float(8) * 0.1, phi, iters); }
float mapHybridVariant9(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(9) * 0.015), t + float(9) * 0.1, phi, iters); }
float mapHybridVariant10(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(10) * 0.015), t + float(10) * 0.1, phi, iters); }

float mapHybridVariant11(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(11) * 0.015), t + float(11) * 0.1, phi, iters); }
float mapHybridVariant12(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(12) * 0.015), t + float(12) * 0.1, phi, iters); }
float mapHybridVariant13(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(13) * 0.015), t + float(13) * 0.1, phi, iters); }
float mapHybridVariant14(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(14) * 0.015), t + float(14) * 0.1, phi, iters); }
float mapHybridVariant15(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(15) * 0.015), t + float(15) * 0.1, phi, iters); }

float mapHybridVariant16(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(16) * 0.015), t + float(16) * 0.1, phi, iters); }
float mapHybridVariant17(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(17) * 0.015), t + float(17) * 0.1, phi, iters); }
float mapHybridVariant18(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(18) * 0.015), t + float(18) * 0.1, phi, iters); }
float mapHybridVariant19(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(19) * 0.015), t + float(19) * 0.1, phi, iters); }
float mapHybridVariant20(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(20) * 0.015), t + float(20) * 0.1, phi, iters); }

float mapHybridVariant21(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(21) * 0.015), t + float(21) * 0.1, phi, iters); }
float mapHybridVariant22(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(22) * 0.015), t + float(22) * 0.1, phi, iters); }
float mapHybridVariant23(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(23) * 0.015), t + float(23) * 0.1, phi, iters); }
float mapHybridVariant24(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(24) * 0.015), t + float(24) * 0.1, phi, iters); }
float mapHybridVariant25(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(25) * 0.015), t + float(25) * 0.1, phi, iters); }

float mapHybridVariant26(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(26) * 0.015), t + float(26) * 0.1, phi, iters); }
float mapHybridVariant27(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(27) * 0.015), t + float(27) * 0.1, phi, iters); }
float mapHybridVariant28(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(28) * 0.015), t + float(28) * 0.1, phi, iters); }
float mapHybridVariant29(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(29) * 0.015), t + float(29) * 0.1, phi, iters); }
float mapHybridVariant30(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(30) * 0.015), t + float(30) * 0.1, phi, iters); }

float mapHybridVariant31(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(31) * 0.015), t + float(31) * 0.1, phi, iters); }
float mapHybridVariant32(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(32) * 0.015), t + float(32) * 0.1, phi, iters); }
float mapHybridVariant33(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(33) * 0.015), t + float(33) * 0.1, phi, iters); }
float mapHybridVariant34(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(34) * 0.015), t + float(34) * 0.1, phi, iters); }
float mapHybridVariant35(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(35) * 0.015), t + float(35) * 0.1, phi, iters); }

float mapHybridVariant36(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(36) * 0.015), t + float(36) * 0.1, phi, iters); }
float mapHybridVariant37(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(37) * 0.015), t + float(37) * 0.1, phi, iters); }
float mapHybridVariant38(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(38) * 0.015), t + float(38) * 0.1, phi, iters); }
float mapHybridVariant39(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(39) * 0.015), t + float(39) * 0.1, phi, iters); }
float mapHybridVariant40(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(40) * 0.015), t + float(40) * 0.1, phi, iters); }

float mapHybridVariant41(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(41) * 0.015), t + float(41) * 0.1, phi, iters); }
float mapHybridVariant42(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(42) * 0.015), t + float(42) * 0.1, phi, iters); }
float mapHybridVariant43(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(43) * 0.015), t + float(43) * 0.1, phi, iters); }
float mapHybridVariant44(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(44) * 0.015), t + float(44) * 0.1, phi, iters); }
float mapHybridVariant45(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(45) * 0.015), t + float(45) * 0.1, phi, iters); }

float mapHybridVariant46(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(46) * 0.015), t + float(46) * 0.1, phi, iters); }
float mapHybridVariant47(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(47) * 0.015), t + float(47) * 0.1, phi, iters); }
float mapHybridVariant48(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(48) * 0.015), t + float(48) * 0.1, phi, iters); }
float mapHybridVariant49(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(49) * 0.015), t + float(49) * 0.1, phi, iters); }
float mapHybridVariant50(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(50) * 0.015), t + float(50) * 0.1, phi, iters); }

float mapHybridVariant51(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(51) * 0.015), t + float(51) * 0.1, phi, iters); }
float mapHybridVariant52(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(52) * 0.015), t + float(52) * 0.1, phi, iters); }
float mapHybridVariant53(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(53) * 0.015), t + float(53) * 0.1, phi, iters); }
float mapHybridVariant54(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(54) * 0.015), t + float(54) * 0.1, phi, iters); }
float mapHybridVariant55(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(55) * 0.015), t + float(55) * 0.1, phi, iters); }

float mapHybridVariant56(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(56) * 0.015), t + float(56) * 0.1, phi, iters); }
float mapHybridVariant57(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(57) * 0.015), t + float(57) * 0.1, phi, iters); }
float mapHybridVariant58(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(58) * 0.015), t + float(58) * 0.1, phi, iters); }
float mapHybridVariant59(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(59) * 0.015), t + float(59) * 0.1, phi, iters); }
float mapHybridVariant60(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(60) * 0.015), t + float(60) * 0.1, phi, iters); }

float mapHybridVariant61(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(61) * 0.015), t + float(61) * 0.1, phi, iters); }
float mapHybridVariant62(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(62) * 0.015), t + float(62) * 0.1, phi, iters); }
float mapHybridVariant63(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(63) * 0.015), t + float(63) * 0.1, phi, iters); }
float mapHybridVariant64(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(64) * 0.015), t + float(64) * 0.1, phi, iters); }
float mapHybridVariant65(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(65) * 0.015), t + float(65) * 0.1, phi, iters); }

float mapHybridVariant66(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(66) * 0.015), t + float(66) * 0.1, phi, iters); }
float mapHybridVariant67(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(67) * 0.015), t + float(67) * 0.1, phi, iters); }
float mapHybridVariant68(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(68) * 0.015), t + float(68) * 0.1, phi, iters); }
float mapHybridVariant69(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(69) * 0.015), t + float(69) * 0.1, phi, iters); }
float mapHybridVariant70(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(70) * 0.015), t + float(70) * 0.1, phi, iters); }

float mapHybridVariant71(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(71) * 0.015), t + float(71) * 0.1, phi, iters); }
float mapHybridVariant72(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(72) * 0.015), t + float(72) * 0.1, phi, iters); }
float mapHybridVariant73(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(73) * 0.015), t + float(73) * 0.1, phi, iters); }
float mapHybridVariant74(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(74) * 0.015), t + float(74) * 0.1, phi, iters); }
float mapHybridVariant75(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(75) * 0.015), t + float(75) * 0.1, phi, iters); }

float mapHybridVariant76(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(76) * 0.015), t + float(76) * 0.1, phi, iters); }
float mapHybridVariant77(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(77) * 0.015), t + float(77) * 0.1, phi, iters); }
float mapHybridVariant78(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(78) * 0.015), t + float(78) * 0.1, phi, iters); }
float mapHybridVariant79(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(79) * 0.015), t + float(79) * 0.1, phi, iters); }
float mapHybridVariant80(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(80) * 0.015), t + float(80) * 0.1, phi, iters); }

float mapHybridVariant81(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(81) * 0.015), t + float(81) * 0.1, phi, iters); }
float mapHybridVariant82(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(82) * 0.015), t + float(82) * 0.1, phi, iters); }
float mapHybridVariant83(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(83) * 0.015), t + float(83) * 0.1, phi, iters); }
float mapHybridVariant84(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(84) * 0.015), t + float(84) * 0.1, phi, iters); }
float mapHybridVariant85(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(85) * 0.015), t + float(85) * 0.1, phi, iters); }

float mapHybridVariant86(vec3 p, float t, float phi, int iters) { return mapHybridVariant1(p * (1.0 + float(86) * 0.015), t + float(86) * 0.1, phi, iters); }
float mapHybridVariant87(vec3 p, float t, float phi, int iters) { return mapHybridVariant2(p * (1.0 + float(87) * 0.015), t + float(87) * 0.1, phi, iters); }
float mapHybridVariant88(vec3 p, float t, float phi, int iters) { return mapHybridVariant3(p * (1.0 + float(88) * 0.015), t + float(88) * 0.1, phi, iters); }
float mapHybridVariant89(vec3 p, float t, float phi, int iters) { return mapHybridVariant4(p * (1.0 + float(89) * 0.015), t + float(89) * 0.1, phi, iters); }
float mapHybridVariant90(vec3 p, float t, float phi, int iters) { return mapHybridVariant5(p * (1.0 + float(90) * 0.015), t + float(90) * 0.1, phi, iters); }
