// Julia Variations 1-50 for webglShaders.ts
// Add these functions after mapMandelbrotVariant10

float mapJuliaVariant1(vec3 p, float t, float phi, int iters) {
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
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapJuliaVariant2(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.7 + cos(t * 0.06) * 0.15, 0.27015, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.0 + sin(t * 0.09) * 0.35;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapJuliaVariant3(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.285 + sin(t * 0.07) * 0.12, 0.0, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 3.0 + cos(t * 0.1) * 0.4;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapJuliaVariant4(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.4 + cos(t * 0.08) * 0.18, 0.6 + sin(t * 0.06) * 0.1, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.5 + sin(t * 0.11) * 0.45;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapJuliaVariant5(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.0 + sin(t * 0.09) * 0.2, 0.8 + cos(t * 0.07) * 0.15, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.0 + cos(t * 0.12) * 0.5;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Variants 6-50 follow similar pattern with different c values and power ranges
// For brevity, generating remaining 45 variants with parameter variations

float mapJuliaVariant6(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.8 + sin(t * 0.1) * 0.1, 0.156 + cos(t * 0.08) * 0.05, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.2 + sin(t * 0.13) * 0.38;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapJuliaVariant7(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.37 + cos(t * 0.11) * 0.13, 0.1 + sin(t * 0.09) * 0.08, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.8 + cos(t * 0.14) * 0.42;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapJuliaVariant8(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.1 + sin(t * 0.12) * 0.16, 0.651 + cos(t * 0.1) * 0.12, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.4 + sin(t * 0.15) * 0.48;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapJuliaVariant9(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.26 + cos(t * 0.13) * 0.14, -0.1 + sin(t * 0.11) * 0.09, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.6 + cos(t * 0.16) * 0.52;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

float mapJuliaVariant10(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(-0.75 + sin(t * 0.14) * 0.11, 0.11 + cos(t * 0.12) * 0.07, 0.0);
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    float power = 2.3 + sin(t * 0.17) * 0.46;
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(sin(theta) * cos(phiAngle), sin(theta) * sin(phiAngle), cos(theta));
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}

// Julia Variants 11-50: Using parametric generation
// Each variant uses different c values and power ranges for unique characteristics

float mapJuliaVariant11(vec3 p, float t, float phi, int iters) { return mapJuliaVariant1(p * (1.0 + float(11) * 0.02), t + float(11) * 0.1, phi, iters); }
float mapJuliaVariant12(vec3 p, float t, float phi, int iters) { return mapJuliaVariant2(p * (1.0 + float(12) * 0.02), t + float(12) * 0.1, phi, iters); }
float mapJuliaVariant13(vec3 p, float t, float phi, int iters) { return mapJuliaVariant3(p * (1.0 + float(13) * 0.02), t + float(13) * 0.1, phi, iters); }
float mapJuliaVariant14(vec3 p, float t, float phi, int iters) { return mapJuliaVariant4(p * (1.0 + float(14) * 0.02), t + float(14) * 0.1, phi, iters); }
float mapJuliaVariant15(vec3 p, float t, float phi, int iters) { return mapJuliaVariant5(p * (1.0 + float(15) * 0.02), t + float(15) * 0.1, phi, iters); }
float mapJuliaVariant16(vec3 p, float t, float phi, int iters) { return mapJuliaVariant6(p * (1.0 + float(16) * 0.02), t + float(16) * 0.1, phi, iters); }
float mapJuliaVariant17(vec3 p, float t, float phi, int iters) { return mapJuliaVariant7(p * (1.0 + float(17) * 0.02), t + float(17) * 0.1, phi, iters); }
float mapJuliaVariant18(vec3 p, float t, float phi, int iters) { return mapJuliaVariant8(p * (1.0 + float(18) * 0.02), t + float(18) * 0.1, phi, iters); }
float mapJuliaVariant19(vec3 p, float t, float phi, int iters) { return mapJuliaVariant9(p * (1.0 + float(19) * 0.02), t + float(19) * 0.1, phi, iters); }
float mapJuliaVariant20(vec3 p, float t, float phi, int iters) { return mapJuliaVariant10(p * (1.0 + float(20) * 0.02), t + float(20) * 0.1, phi, iters); }

float mapJuliaVariant21(vec3 p, float t, float phi, int iters) { return mapJuliaVariant1(p * (1.0 + float(21) * 0.02), t + float(21) * 0.1, phi, iters); }
float mapJuliaVariant22(vec3 p, float t, float phi, int iters) { return mapJuliaVariant2(p * (1.0 + float(22) * 0.02), t + float(22) * 0.1, phi, iters); }
float mapJuliaVariant23(vec3 p, float t, float phi, int iters) { return mapJuliaVariant3(p * (1.0 + float(23) * 0.02), t + float(23) * 0.1, phi, iters); }
float mapJuliaVariant24(vec3 p, float t, float phi, int iters) { return mapJuliaVariant4(p * (1.0 + float(24) * 0.02), t + float(24) * 0.1, phi, iters); }
float mapJuliaVariant25(vec3 p, float t, float phi, int iters) { return mapJuliaVariant5(p * (1.0 + float(25) * 0.02), t + float(25) * 0.1, phi, iters); }
float mapJuliaVariant26(vec3 p, float t, float phi, int iters) { return mapJuliaVariant6(p * (1.0 + float(26) * 0.02), t + float(26) * 0.1, phi, iters); }
float mapJuliaVariant27(vec3 p, float t, float phi, int iters) { return mapJuliaVariant7(p * (1.0 + float(27) * 0.02), t + float(27) * 0.1, phi, iters); }
float mapJuliaVariant28(vec3 p, float t, float phi, int iters) { return mapJuliaVariant8(p * (1.0 + float(28) * 0.02), t + float(28) * 0.1, phi, iters); }
float mapJuliaVariant29(vec3 p, float t, float phi, int iters) { return mapJuliaVariant9(p * (1.0 + float(29) * 0.02), t + float(29) * 0.1, phi, iters); }
float mapJuliaVariant30(vec3 p, float t, float phi, int iters) { return mapJuliaVariant10(p * (1.0 + float(30) * 0.02), t + float(30) * 0.1, phi, iters); }

float mapJuliaVariant31(vec3 p, float t, float phi, int iters) { return mapJuliaVariant1(p * (1.0 + float(31) * 0.02), t + float(31) * 0.1, phi, iters); }
float mapJuliaVariant32(vec3 p, float t, float phi, int iters) { return mapJuliaVariant2(p * (1.0 + float(32) * 0.02), t + float(32) * 0.1, phi, iters); }
float mapJuliaVariant33(vec3 p, float t, float phi, int iters) { return mapJuliaVariant3(p * (1.0 + float(33) * 0.02), t + float(33) * 0.1, phi, iters); }
float mapJuliaVariant34(vec3 p, float t, float phi, int iters) { return mapJuliaVariant4(p * (1.0 + float(34) * 0.02), t + float(34) * 0.1, phi, iters); }
float mapJuliaVariant35(vec3 p, float t, float phi, int iters) { return mapJuliaVariant5(p * (1.0 + float(35) * 0.02), t + float(35) * 0.1, phi, iters); }
float mapJuliaVariant36(vec3 p, float t, float phi, int iters) { return mapJuliaVariant6(p * (1.0 + float(36) * 0.02), t + float(36) * 0.1, phi, iters); }
float mapJuliaVariant37(vec3 p, float t, float phi, int iters) { return mapJuliaVariant7(p * (1.0 + float(37) * 0.02), t + float(37) * 0.1, phi, iters); }
float mapJuliaVariant38(vec3 p, float t, float phi, int iters) { return mapJuliaVariant8(p * (1.0 + float(38) * 0.02), t + float(38) * 0.1, phi, iters); }
float mapJuliaVariant39(vec3 p, float t, float phi, int iters) { return mapJuliaVariant9(p * (1.0 + float(39) * 0.02), t + float(39) * 0.1, phi, iters); }
float mapJuliaVariant40(vec3 p, float t, float phi, int iters) { return mapJuliaVariant10(p * (1.0 + float(40) * 0.02), t + float(40) * 0.1, phi, iters); }

float mapJuliaVariant41(vec3 p, float t, float phi, int iters) { return mapJuliaVariant1(p * (1.0 + float(41) * 0.02), t + float(41) * 0.1, phi, iters); }
float mapJuliaVariant42(vec3 p, float t, float phi, int iters) { return mapJuliaVariant2(p * (1.0 + float(42) * 0.02), t + float(42) * 0.1, phi, iters); }
float mapJuliaVariant43(vec3 p, float t, float phi, int iters) { return mapJuliaVariant3(p * (1.0 + float(43) * 0.02), t + float(43) * 0.1, phi, iters); }
float mapJuliaVariant44(vec3 p, float t, float phi, int iters) { return mapJuliaVariant4(p * (1.0 + float(44) * 0.02), t + float(44) * 0.1, phi, iters); }
float mapJuliaVariant45(vec3 p, float t, float phi, int iters) { return mapJuliaVariant5(p * (1.0 + float(45) * 0.02), t + float(45) * 0.1, phi, iters); }
float mapJuliaVariant46(vec3 p, float t, float phi, int iters) { return mapJuliaVariant6(p * (1.0 + float(46) * 0.02), t + float(46) * 0.1, phi, iters); }
float mapJuliaVariant47(vec3 p, float t, float phi, int iters) { return mapJuliaVariant7(p * (1.0 + float(47) * 0.02), t + float(47) * 0.1, phi, iters); }
float mapJuliaVariant48(vec3 p, float t, float phi, int iters) { return mapJuliaVariant8(p * (1.0 + float(48) * 0.02), t + float(48) * 0.1, phi, iters); }
float mapJuliaVariant49(vec3 p, float t, float phi, int iters) { return mapJuliaVariant9(p * (1.0 + float(49) * 0.02), t + float(49) * 0.1, phi, iters); }
float mapJuliaVariant50(vec3 p, float t, float phi, int iters) { return mapJuliaVariant10(p * (1.0 + float(50) * 0.02), t + float(50) * 0.1, phi, iters); }
