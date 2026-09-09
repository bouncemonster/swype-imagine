/**
 * Universal Adaptive Render System
 * Combines all 7 render styles into one intelligent adaptive mode
 * Automatically selects best visualization based on fractal type and context
 */

export const UNIVERSAL_RENDER_GLSL = `
// ===================================================================
// Universal Adaptive Render Mode
 * Combines: PBR + X-Ray + Topography + Hologram + Iridescent + Plasma + Crystal
 * Auto-selects best visualization based on fractal characteristics
// ===================================================================

vec3 renderUniversal(vec3 col, vec3 p, vec3 n, vec3 rd, vec3 light1, float trap, float min_trap, 
                     float curv, float depthNorm, float fresnel, vec3 baseColor, float u_time,
                     vec3 u_primary_color, vec3 u_secondary_color, vec3 u_accent_color,
                     float u_render_style) {
  
  // Base PBR with soft shadows and SSS
  vec3 lightDir = normalize(light1 - p);
  float NdotL = max(dot(n, lightDir), 0.0);
  float shadow = calcSoftShadow(p, lightDir);
  float sss = exp(-trap * 8.0) * 0.3; // Subsurface scattering
  
  vec3 pbrCol = baseColor * (0.15 + NdotL * shadow * 0.85);
  pbrCol += u_primary_color * sss;
  
  // X-Ray density visualization
  float density = 1.0 - smoothstep(0.0, 0.5, trap);
  vec3 xrayCol = u_accent_color * density * 0.6;
  xrayCol += u_primary_color * (1.0 - density) * 0.2;
  
  // Topography contours
  float contour = smoothstep(0.0, 0.05, abs(fract(curv * 8.0) - 0.5) - 0.45);
  vec3 topoCol = mix(baseColor, u_secondary_color, contour * 0.5);
  
  // Hologram projection with hex grid
  vec3 hexP = p * 3.0;
  float hx = abs(fract(hexP.x) - 0.5);
  float hy = abs(fract(hexP.y * 0.866) - 0.5) * 2.0;
  float hexGrid = min(hx, hy);
  float hexLine = smoothstep(0.0, 0.08, hexGrid);
  float shimmer = 0.85 + 0.15 * sin(u_time * 6.0 + length(p) * 12.0);
  vec3 holoCol = baseColor * (0.30 + fresnel * 1.5) * shimmer;
  holoCol += u_accent_color * (1.0 - hexLine) * 0.15;
  
  // Iridescent thin-film interference
  float filmThickness = 0.5 + curv * 0.8;
  float order1 = fresnel * 3.0 * filmThickness;
  float order2 = fresnel * 5.0 * filmThickness + u_time * 0.08;
  float iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33));
  float iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33));
  float iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order1 * 0.33));
  vec3 iridCol = vec3(iridR, iridG, iridB);
  
  // Plasma energy field
  float energy = sin(p.x * 12.0 + u_time) * sin(p.y * 12.0 - u_time) * sin(p.z * 12.0 + u_time * 0.5);
  vec3 plasmaCol = u_accent_color * (0.5 + 0.5 * energy) * 0.4;
  
  // Crystal refraction with caustics
  float caustic = pow(max(dot(reflect(-lightDir, n), rd), 0.0), 32.0);
  vec3 crystalCol = baseColor * (0.5 + caustic * 2.0);
  crystalCol += u_primary_color * caustic * 1.5;
  
  // Adaptive blending based on fractal characteristics
  // High curvature -> more topography
  // High trap -> more X-ray and SSS
  // High fresnel -> more hologram and iridescent
  // Low everything -> base PBR
  
  float topoWeight = smoothstep(0.3, 1.0, curv);
  float xrayWeight = smoothstep(0.1, 0.5, density);
  float holoWeight = smoothstep(0.4, 1.0, fresnel);
  float iridWeight = smoothstep(0.2, 0.7, curv) * holoWeight;
  float plasmaWeight = smoothstep(0.5, 1.0, energy * 0.5 + 0.5);
  float crystalWeight = smoothstep(0.3, 0.9, caustic);
  
  // Normalize weights
  float totalWeight = 1.0 + topoWeight + xrayWeight + holoWeight + iridWeight + plasmaWeight + crystalWeight;
  
  vec3 finalCol = pbrCol; // Base PBR always present
  finalCol += topoCol * topoWeight * 0.3;
  finalCol += xrayCol * xrayWeight * 0.4;
  finalCol += holoCol * holoWeight * 0.25;
  finalCol += iridCol * iridWeight * 0.35;
  finalCol += plasmaCol * plasmaWeight * 0.3;
  finalCol += crystalCol * crystalWeight * 0.4;
  finalCol /= totalWeight;
  
  // Enhance micro-details with trap-based sharpening
  float detailEnhance = 1.0 + smoothstep(0.0, 0.1, min_trap) * 0.5;
  finalCol *= detailEnhance;
  
  // Golden ratio color harmony
  float phi = 1.61803398875;
  finalCol.r *= pow(phi, 0.1);
  finalCol.g *= pow(phi, -0.05);
  finalCol.b *= pow(phi, 0.05);
  
  return finalCol;
}
`;

export const UNIVERSAL_RENDER_WGSL = `
// ===================================================================
// Universal Adaptive Render Mode (WGSL)
// Combines all 7 modes with automatic selection
// ===================================================================

fn renderUniversal(
  col: vec3<f32>, p: vec3<f32>, n: vec3<f32>, rd: vec3<f32>, light1: vec3<f32>,
  trap: f32, min_trap: f32, curv: f32, depthNorm: f32, fresnel: f32,
  baseColor: vec3<f32>, time: f32,
  primary_color: vec3<f32>, secondary_color: vec3<f32>, accent_color: vec3<f32>,
  render_style: f32
) -> vec3<f32> {
  
  // Base PBR with soft shadows and SSS
  let lightDir = normalize(light1 - p);
  let NdotL = max(dot(n, lightDir), 0.0);
  let shadow = calcSoftShadow(p, lightDir);
  let sss = exp(-trap * 8.0) * 0.3;
  
  var pbrCol = baseColor * (0.15 + NdotL * shadow * 0.85);
  pbrCol = pbrCol + primary_color * sss;
  
  // X-Ray density
  let density = 1.0 - smoothstep(0.0, 0.5, trap);
  var xrayCol = accent_color * density * 0.6;
  xrayCol = xrayCol + primary_color * (1.0 - density) * 0.2;
  
  // Topography contours
  let contour = smoothstep(0.0, 0.05, abs(fract(curv * 8.0) - 0.5) - 0.45);
  let topoCol = mix(baseColor, secondary_color, contour * 0.5);
  
  // Hologram with hex grid
  let hexP = p * 3.0;
  let hx = abs(fract(hexP.x) - 0.5);
  let hy = abs(fract(hexP.y * 0.866) - 0.5) * 2.0;
  let hexGrid = min(hx, hy);
  let hexLine = smoothstep(0.0, 0.08, hexGrid);
  let shimmer = 0.85 + 0.15 * sin(time * 6.0 + length(p) * 12.0);
  var holoCol = baseColor * (0.30 + fresnel * 1.5) * shimmer;
  holoCol = holoCol + accent_color * (1.0 - hexLine) * 0.15;
  
  // Iridescent interference
  let filmThickness = 0.5 + curv * 0.8;
  let order1 = fresnel * 3.0 * filmThickness;
  let order2 = fresnel * 5.0 * filmThickness + time * 0.08;
  let iridR = 0.5 + 0.5 * cos(6.28318 * (0.0 + order1 * 0.33));
  let iridG = 0.5 + 0.5 * cos(6.28318 * (0.33 + order2 * 0.33));
  let iridB = 0.5 + 0.5 * cos(6.28318 * (0.67 + order1 * 0.33));
  let iridCol = vec3<f32>(iridR, iridG, iridB);
  
  // Plasma energy
  let energy = sin(p.x * 12.0 + time) * sin(p.y * 12.0 - time) * sin(p.z * 12.0 + time * 0.5);
  let plasmaCol = accent_color * (0.5 + 0.5 * energy) * 0.4;
  
  // Crystal caustics
  let caustic = pow(max(dot(reflect(-lightDir, n), rd), 0.0), 32.0);
  var crystalCol = baseColor * (0.5 + caustic * 2.0);
  crystalCol = crystalCol + primary_color * caustic * 1.5;
  
  // Adaptive blending
  let topoWeight = smoothstep(0.3, 1.0, curv);
  let xrayWeight = smoothstep(0.1, 0.5, density);
  let holoWeight = smoothstep(0.4, 1.0, fresnel);
  let iridWeight = smoothstep(0.2, 0.7, curv) * holoWeight;
  let plasmaWeight = smoothstep(0.5, 1.0, energy * 0.5 + 0.5);
  let crystalWeight = smoothstep(0.3, 0.9, caustic);
  
  let totalWeight = 1.0 + topoWeight + xrayWeight + holoWeight + iridWeight + plasmaWeight + crystalWeight;
  
  var finalCol = pbrCol;
  finalCol = finalCol + topoCol * topoWeight * 0.3;
  finalCol = finalCol + xrayCol * xrayWeight * 0.4;
  finalCol = finalCol + holoCol * holoWeight * 0.25;
  finalCol = finalCol + iridCol * iridWeight * 0.35;
  finalCol = finalCol + plasmaCol * plasmaWeight * 0.3;
  finalCol = finalCol + crystalCol * crystalWeight * 0.4;
  finalCol = finalCol / totalWeight;
  
  // Detail enhancement
  let detailEnhance = 1.0 + smoothstep(0.0, 0.1, min_trap) * 0.5;
  finalCol = finalCol * detailEnhance;
  
  // Golden ratio harmony
  let phi = 1.61803398875;
  finalCol = finalCol * vec3<f32>(pow(phi, 0.1), pow(phi, -0.05), pow(phi, 0.05));
  
  return finalCol;
}
`;
