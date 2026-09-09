/**
 * IFS Variations 1-50 for WebGL2 Shaders
 * Iterated Function Systems with folding, rotation, and scaling
 */

export const IFS_VARIATIONS_GLSL = `
// ===================================================================
// IFS Variations 1-50
// Based on iterated function systems with folding and rotation
// ===================================================================

float mapIFSVariant1(vec3 p, float t, float phi, int iters) {
  float scale = 2.0 + sin(t * 0.1) * 0.2;
  float minDist = 1e10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    p.xy = abs(p.xy);
    p.xz = abs(p.xz);
    float angle = t * 0.05 + float(i) * 0.1;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xy = rot * p.xy;
    p *= scale;
    p -= vec3(1.0, 0.5, 0.3);
    minDist = min(minDist, length(p) - 0.5);
  }
  return minDist;
}

float mapIFSVariant2(vec3 p, float t, float phi, int iters) {
  float scale = 2.2 + cos(t * 0.12) * 0.25;
  float minDist = 1e10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    p = abs(p) - vec3(0.5, 0.3, 0.4);
    float angle = t * 0.06 + float(i) * 0.15;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.yz = rot * p.yz;
    p *= scale;
    minDist = min(minDist, length(p) - 0.6);
  }
  return minDist;
}

float mapIFSVariant3(vec3 p, float t, float phi, int iters) {
  float scale = 1.8 + sin(t * 0.08) * 0.3;
  float minDist = 1e10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    p.xy = abs(p.xy) - vec2(0.4, 0.6);
    p.xz = abs(p.xz) - vec2(0.3, 0.5);
    float angle = t * 0.07 + float(i) * 0.12;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xz = rot * p.xz;
    p *= scale;
    minDist = min(minDist, length(p) - 0.4);
  }
  return minDist;
}

float mapIFSVariant4(vec3 p, float t, float phi, int iters) {
  float scale = 2.5 + cos(t * 0.15) * 0.2;
  float minDist = 1e10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    p = abs(p) - vec3(0.6, 0.4, 0.5);
    float angle = t * 0.04 + float(i) * 0.08;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xy = rot * p.xy;
    p *= scale;
    minDist = min(minDist, length(p) - 0.7);
  }
  return minDist;
}

float mapIFSVariant5(vec3 p, float t, float phi, int iters) {
  float scale = 2.1 + sin(t * 0.11) * 0.28;
  float minDist = 1e10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    p.yz = abs(p.yz) - vec2(0.5, 0.3);
    p.xy = abs(p.xy) - vec2(0.4, 0.6);
    float angle = t * 0.09 + float(i) * 0.14;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.yz = rot * p.yz;
    p *= scale;
    minDist = min(minDist, length(p) - 0.55);
  }
  return minDist;
}

// IFS Variants 6-50: Parametric generation
float mapIFSVariant6(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(6) * 0.03), t + float(6) * 0.12, phi, iters); }
float mapIFSVariant7(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(7) * 0.03), t + float(7) * 0.12, phi, iters); }
float mapIFSVariant8(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(8) * 0.03), t + float(8) * 0.12, phi, iters); }
float mapIFSVariant9(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(9) * 0.03), t + float(9) * 0.12, phi, iters); }
float mapIFSVariant10(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(10) * 0.03), t + float(10) * 0.12, phi, iters); }

float mapIFSVariant11(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(11) * 0.03), t + float(11) * 0.12, phi, iters); }
float mapIFSVariant12(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(12) * 0.03), t + float(12) * 0.12, phi, iters); }
float mapIFSVariant13(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(13) * 0.03), t + float(13) * 0.12, phi, iters); }
float mapIFSVariant14(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(14) * 0.03), t + float(14) * 0.12, phi, iters); }
float mapIFSVariant15(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(15) * 0.03), t + float(15) * 0.12, phi, iters); }

float mapIFSVariant16(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(16) * 0.03), t + float(16) * 0.12, phi, iters); }
float mapIFSVariant17(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(17) * 0.03), t + float(17) * 0.12, phi, iters); }
float mapIFSVariant18(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(18) * 0.03), t + float(18) * 0.12, phi, iters); }
float mapIFSVariant19(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(19) * 0.03), t + float(19) * 0.12, phi, iters); }
float mapIFSVariant20(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(20) * 0.03), t + float(20) * 0.12, phi, iters); }

float mapIFSVariant21(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(21) * 0.03), t + float(21) * 0.12, phi, iters); }
float mapIFSVariant22(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(22) * 0.03), t + float(22) * 0.12, phi, iters); }
float mapIFSVariant23(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(23) * 0.03), t + float(23) * 0.12, phi, iters); }
float mapIFSVariant24(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(24) * 0.03), t + float(24) * 0.12, phi, iters); }
float mapIFSVariant25(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(25) * 0.03), t + float(25) * 0.12, phi, iters); }

float mapIFSVariant26(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(26) * 0.03), t + float(26) * 0.12, phi, iters); }
float mapIFSVariant27(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(27) * 0.03), t + float(27) * 0.12, phi, iters); }
float mapIFSVariant28(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(28) * 0.03), t + float(28) * 0.12, phi, iters); }
float mapIFSVariant29(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(29) * 0.03), t + float(29) * 0.12, phi, iters); }
float mapIFSVariant30(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(30) * 0.03), t + float(30) * 0.12, phi, iters); }

float mapIFSVariant31(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(31) * 0.03), t + float(31) * 0.12, phi, iters); }
float mapIFSVariant32(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(32) * 0.03), t + float(32) * 0.12, phi, iters); }
float mapIFSVariant33(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(33) * 0.03), t + float(33) * 0.12, phi, iters); }
float mapIFSVariant34(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(34) * 0.03), t + float(34) * 0.12, phi, iters); }
float mapIFSVariant35(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(35) * 0.03), t + float(35) * 0.12, phi, iters); }

float mapIFSVariant36(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(36) * 0.03), t + float(36) * 0.12, phi, iters); }
float mapIFSVariant37(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(37) * 0.03), t + float(37) * 0.12, phi, iters); }
float mapIFSVariant38(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(38) * 0.03), t + float(38) * 0.12, phi, iters); }
float mapIFSVariant39(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(39) * 0.03), t + float(39) * 0.12, phi, iters); }
float mapIFSVariant40(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(40) * 0.03), t + float(40) * 0.12, phi, iters); }

float mapIFSVariant41(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(41) * 0.03), t + float(41) * 0.12, phi, iters); }
float mapIFSVariant42(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(42) * 0.03), t + float(42) * 0.12, phi, iters); }
float mapIFSVariant43(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(43) * 0.03), t + float(43) * 0.12, phi, iters); }
float mapIFSVariant44(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(44) * 0.03), t + float(44) * 0.12, phi, iters); }
float mapIFSVariant45(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(45) * 0.03), t + float(45) * 0.12, phi, iters); }

float mapIFSVariant46(vec3 p, float t, float phi, int iters) { return mapIFSVariant1(p * (1.0 + float(46) * 0.03), t + float(46) * 0.12, phi, iters); }
float mapIFSVariant47(vec3 p, float t, float phi, int iters) { return mapIFSVariant2(p * (1.0 + float(47) * 0.03), t + float(47) * 0.12, phi, iters); }
float mapIFSVariant48(vec3 p, float t, float phi, int iters) { return mapIFSVariant3(p * (1.0 + float(48) * 0.03), t + float(48) * 0.12, phi, iters); }
float mapIFSVariant49(vec3 p, float t, float phi, int iters) { return mapIFSVariant4(p * (1.0 + float(49) * 0.03), t + float(49) * 0.12, phi, iters); }
float mapIFSVariant50(vec3 p, float t, float phi, int iters) { return mapIFSVariant5(p * (1.0 + float(50) * 0.03), t + float(50) * 0.12, phi, iters); }
`;
