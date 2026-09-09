// L-System Variations 1-50 for webglShaders.ts
// Lindenmayer Systems with recursive branching

float mapLSystemVariant1(vec3 p, float t, float phi, int iters) {
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

float mapLSystemVariant2(vec3 p, float t, float phi, int iters) {
  float d = length(p) - 1.2;
  float scale = 0.6 + cos(t * 0.12) * 0.15;
  
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    p.yz = abs(p.yz) - vec2(0.4, 0.5);
    float angle = t * 0.06 + float(i) * 0.25;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.yz = rot * p.yz;
    p *= scale;
    d = min(d, length(p) - 0.35);
  }
  return d;
}

float mapLSystemVariant3(vec3 p, float t, float phi, int iters) {
  float d = length(p) - 0.9;
  float scale = 0.55 + sin(t * 0.08) * 0.12;
  
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    p.xz = abs(p.xz) - vec2(0.35, 0.45);
    float angle = t * 0.07 + float(i) * 0.18;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xz = rot * p.xz;
    p *= scale;
    d = min(d, length(p) - 0.28);
  }
  return d;
}

float mapLSystemVariant4(vec3 p, float t, float phi, int iters) {
  float d = length(p) - 1.1;
  float scale = 0.52 + cos(t * 0.15) * 0.18;
  
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    p = abs(p) - vec3(0.45, 0.38, 0.42);
    float angle = t * 0.04 + float(i) * 0.22;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xy = rot * p.xy;
    p *= scale;
    d = min(d, length(p) - 0.32);
  }
  return d;
}

float mapLSystemVariant5(vec3 p, float t, float phi, int iters) {
  float d = length(p) - 1.05;
  float scale = 0.58 + sin(t * 0.11) * 0.14;
  
  for (int i = 0; i < 8; i++) {
    if (i >= iters) break;
    p.xy = abs(p.xy) - vec2(0.42, 0.48);
    float angle = t * 0.09 + float(i) * 0.2;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xy = rot * p.xy;
    p *= scale;
    d = min(d, length(p) - 0.3);
  }
  return d;
}

// L-System Variants 6-50: Parametric generation
float mapLSystemVariant6(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(6) * 0.025), t + float(6) * 0.15, phi, iters); }
float mapLSystemVariant7(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(7) * 0.025), t + float(7) * 0.15, phi, iters); }
float mapLSystemVariant8(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(8) * 0.025), t + float(8) * 0.15, phi, iters); }
float mapLSystemVariant9(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(9) * 0.025), t + float(9) * 0.15, phi, iters); }
float mapLSystemVariant10(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(10) * 0.025), t + float(10) * 0.15, phi, iters); }

float mapLSystemVariant11(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(11) * 0.025), t + float(11) * 0.15, phi, iters); }
float mapLSystemVariant12(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(12) * 0.025), t + float(12) * 0.15, phi, iters); }
float mapLSystemVariant13(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(13) * 0.025), t + float(13) * 0.15, phi, iters); }
float mapLSystemVariant14(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(14) * 0.025), t + float(14) * 0.15, phi, iters); }
float mapLSystemVariant15(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(15) * 0.025), t + float(15) * 0.15, phi, iters); }

float mapLSystemVariant16(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(16) * 0.025), t + float(16) * 0.15, phi, iters); }
float mapLSystemVariant17(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(17) * 0.025), t + float(17) * 0.15, phi, iters); }
float mapLSystemVariant18(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(18) * 0.025), t + float(18) * 0.15, phi, iters); }
float mapLSystemVariant19(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(19) * 0.025), t + float(19) * 0.15, phi, iters); }
float mapLSystemVariant20(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(20) * 0.025), t + float(20) * 0.15, phi, iters); }

float mapLSystemVariant21(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(21) * 0.025), t + float(21) * 0.15, phi, iters); }
float mapLSystemVariant22(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(22) * 0.025), t + float(22) * 0.15, phi, iters); }
float mapLSystemVariant23(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(23) * 0.025), t + float(23) * 0.15, phi, iters); }
float mapLSystemVariant24(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(24) * 0.025), t + float(24) * 0.15, phi, iters); }
float mapLSystemVariant25(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(25) * 0.025), t + float(25) * 0.15, phi, iters); }

float mapLSystemVariant26(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(26) * 0.025), t + float(26) * 0.15, phi, iters); }
float mapLSystemVariant27(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(27) * 0.025), t + float(27) * 0.15, phi, iters); }
float mapLSystemVariant28(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(28) * 0.025), t + float(28) * 0.15, phi, iters); }
float mapLSystemVariant29(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(29) * 0.025), t + float(29) * 0.15, phi, iters); }
float mapLSystemVariant30(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(30) * 0.025), t + float(30) * 0.15, phi, iters); }

float mapLSystemVariant31(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(31) * 0.025), t + float(31) * 0.15, phi, iters); }
float mapLSystemVariant32(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(32) * 0.025), t + float(32) * 0.15, phi, iters); }
float mapLSystemVariant33(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(33) * 0.025), t + float(33) * 0.15, phi, iters); }
float mapLSystemVariant34(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(34) * 0.025), t + float(34) * 0.15, phi, iters); }
float mapLSystemVariant35(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(35) * 0.025), t + float(35) * 0.15, phi, iters); }

float mapLSystemVariant36(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(36) * 0.025), t + float(36) * 0.15, phi, iters); }
float mapLSystemVariant37(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(37) * 0.025), t + float(37) * 0.15, phi, iters); }
float mapLSystemVariant38(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(38) * 0.025), t + float(38) * 0.15, phi, iters); }
float mapLSystemVariant39(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(39) * 0.025), t + float(39) * 0.15, phi, iters); }
float mapLSystemVariant40(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(40) * 0.025), t + float(40) * 0.15, phi, iters); }

float mapLSystemVariant41(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(41) * 0.025), t + float(41) * 0.15, phi, iters); }
float mapLSystemVariant42(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(42) * 0.025), t + float(42) * 0.15, phi, iters); }
float mapLSystemVariant43(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(43) * 0.025), t + float(43) * 0.15, phi, iters); }
float mapLSystemVariant44(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(44) * 0.025), t + float(44) * 0.15, phi, iters); }
float mapLSystemVariant45(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(45) * 0.025), t + float(45) * 0.15, phi, iters); }

float mapLSystemVariant46(vec3 p, float t, float phi, int iters) { return mapLSystemVariant1(p * (1.0 + float(46) * 0.025), t + float(46) * 0.15, phi, iters); }
float mapLSystemVariant47(vec3 p, float t, float phi, int iters) { return mapLSystemVariant2(p * (1.0 + float(47) * 0.025), t + float(47) * 0.15, phi, iters); }
float mapLSystemVariant48(vec3 p, float t, float phi, int iters) { return mapLSystemVariant3(p * (1.0 + float(48) * 0.025), t + float(48) * 0.15, phi, iters); }
float mapLSystemVariant49(vec3 p, float t, float phi, int iters) { return mapLSystemVariant4(p * (1.0 + float(49) * 0.025), t + float(49) * 0.15, phi, iters); }
float mapLSystemVariant50(vec3 p, float t, float phi, int iters) { return mapLSystemVariant5(p * (1.0 + float(50) * 0.025), t + float(50) * 0.15, phi, iters); }
