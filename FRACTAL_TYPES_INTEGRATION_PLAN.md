# Подключение 300 типов фракталов к шейдерам

## Проблема
В файлах `additionalFractalTypes.ts` и `extendedFractalTypes.ts` определено 300 типов фракталов, но они не подключены к шейдерам. Это мертвый код.

## Решение
Нужно добавить 300 map* функций в `webglShaders.ts` и подключить их в `fractalMappers.ts`.

## План подключения

### Группа 1: Mandelbrot Variations (50 типов)
Добавить функции `mapMandelbrotVariant1` через `mapMandelbrotVariant50`.

**Формула Mandelbrot:**
```glsl
float mapMandelbrotVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    // Variation 1: Power modulation
    float power = 2.0 + sin(t * 0.1) * 0.5;
    
    // Convert to polar
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    // Scale and rotate
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    // Convert back to cartesian
    z = zr * vec3(
      sin(theta) * cos(phiAngle),
      sin(theta) * sin(phiAngle),
      cos(theta)
    );
    z += p;
    
    // Update distance estimator
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
```

### Группа 2: Julia Variations (50 типов)
Добавить функции `mapJuliaVariant1` через `mapJuliaVariant50`.

**Формула Julia:**
```glsl
float mapJuliaVariant1(vec3 p, float t, float phi, int iters) {
  vec3 z = p;
  vec3 c = vec3(0.355 + sin(t * 0.05) * 0.1, 0.355, 0.355); // Animated c
  float dr = 1.0;
  float r = 0.0;
  
  for (int i = 0; i < 32; i++) {
    if (i >= iters) break;
    r = length(z);
    if (r > 4.0) break;
    
    // Variation 1: Different power
    float power = 2.0 + cos(t * 0.08) * 0.3;
    
    float theta = acos(z.z / r);
    float phiAngle = atan(z.y, z.x);
    
    float zr = pow(r, power);
    theta *= power;
    phiAngle *= power;
    
    z = zr * vec3(
      sin(theta) * cos(phiAngle),
      sin(theta) * sin(phiAngle),
      cos(theta)
    );
    z += c;
    
    dr = pow(r, power - 1.0) * power * dr + 1.0;
  }
  
  return 0.5 * log(r) * r / dr;
}
```

### Группа 3: IFS Variations (50 типов)
Добавить функции `mapIFSVariant1` через `mapIFSVariant50`.

**Формула IFS:**
```glsl
float mapIFSVariant1(vec3 p, float t, float phi, int iters) {
  float scale = 2.0 + sin(t * 0.1) * 0.2;
  float minDist = 1e10;
  
  for (int i = 0; i < 16; i++) {
    if (i >= iters) break;
    
    // Folding
    p.xy = abs(p.xy);
    p.xz = abs(p.xz);
    
    // Rotation
    float angle = t * 0.05 + float(i) * 0.1;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p.xy = rot * p.xy;
    
    // Scale and translate
    p *= scale;
    p -= vec3(1.0, 0.5, 0.3);
    
    minDist = min(minDist, length(p) - 0.5);
  }
  
  return minDist;
}
```

### Группа 4: L-System Variations (50 типов)
Добавить функции `mapLSystemVariant1` через `mapLSystemVariant50`.

### Группа 5: Fractal Flames (50 типов)
Добавить функции `mapFlameVariant1` через `mapFlameVariant50`.

## Интеграция

### Шаг 1: Добавить map* функции
Добавить все 300 функций в `webglShaders.ts` после существующих map* функций.

### Шаг 2: Добавить в evalSingleFractal
Добавить dispatch в `evalSingleFractal`:
```glsl
if (ftype == 131) return vec2(mapMandelbrotVariant1(p, t, phi, iters), 0.0);
if (ftype == 132) return vec2(mapMandelbrotVariant2(p, t, phi, iters), 0.0);
// ... через ftype == 430
```

### Шаг 3: Обновить fractalMappers.ts
Добавить маппинги:
```typescript
case 'mandelbrotVariant1': return 131;
case 'mandelbrotVariant2': return 132;
// ... через case 'flameVariant50': return 430;
```

### Шаг 4: Обновить NeuroAestheticsEngine.ts
Добавить новые типы в `ALL_FRACTAL_TYPES`.

## Оптимизация
Для ускорения можно:
1. Использовать макросы для генерации похожих функций
2. Группировать типы с похожими формулами
3. Использовать параметрические вариации вместо отдельных функций

## Статус
- ✅ Группа 1 (Mandelbrot): 0/50
- ✅ Группа 2 (Julia): 0/50
- ✅ Группа 3 (IFS): 0/50
- ✅ Группа 4 (L-System): 0/50
- ✅ Группа 5 (Flames): 0/50

**ВСЕГО: 0/300 типов подключено**
