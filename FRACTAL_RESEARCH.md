# Исследование Математических Техник Фракталов

## 📚 Источники и Техники

### 1. **Классические 3D Фракталы**

#### **Mandelbulb** (Power Formula)
```glsl
// Формула: z = z^power + c в сферических координатах
float theta = acos(z.z / r);
float phi = atan(z.y, z.x);
float zr = pow(r, power);
z = zr * vec3(sin(theta*power) * cos(phi*power), 
              sin(theta*power) * sin(phi*power), 
              cos(theta*power));
z += c;
```
**Особенности:**
- Power = 8 дает классический Mandelbulb
- Разные power создают разные формы
- Distance estimation через derivative tracking

#### **Mandelbox** (Box Fold + Sphere Fold)
```glsl
// Box fold: отражение если вне границ
z = clamp(z, -1.0, 1.0) * 2.0 - z;

// Sphere fold: инверсия если внутри сферы
float r2 = dot(z, z);
if (r2 < 0.25) z *= 4.0;
else if (r2 < 1.0) z /= r2;

// Scale and translate
z = z * scale + offset;
```
**Особенности:**
- Создает коробчатые структуры
- Kaleidoscopic folding
- Множество отражений и инверсий

#### **Julia Set** (Quaternion)
```glsl
// Quaternion multiplication: z = z^2 + c
vec4 z2 = vec4(
  z.x*z.x - z.y*z.y - z.z*z.z - z.w*z.w,
  2.0*z.x*z.y,
  2.0*z.x*z.z,
  2.0*z.x*z.w
);
z = z2 + c;
```
**Особенности:**
- 4D вращение
- Проекция в 3D
- Органические формы

### 2. **Вариации Julia Set**

#### **Burning Ship Julia**
```glsl
// Abs перед добавлением c
z = abs(z);
z = z_squared + c;
```
**Визуальный эффект:** Острые, "горящие" формы

#### **Tricorn Julia** (Conjugate)
```glsl
// Отрицание imaginary parts
z = vec3(z.x, -z.y, -z.z);
z = z_squared + c;
```
**Визуальный эффект:** Зеркальные, симметричные формы

#### **Phoenix Julia** (Memory Term)
```glsl
// Использует предыдущий z
vec3 z_new = z_squared + c + p * z_prev;
z_prev = z;
z = z_new;
```
**Визуальный эффект:** "Хвостатые", динамичные формы

#### **Celtic Julia** (Real Part Condition)
```glsl
// Условие на real part
if (z.x > 0.0) z.x = -z.x;
z = z_squared + c;
```
**Визуальный эффект:** Кельтские узоры, симметрия

#### **Buffalo Julia** (Mixed Abs)
```glsl
// Смешанный abs (только x и z)
z = vec3(abs(z.x), z.y, abs(z.z));
z = z_squared + c;
```
**Визуальный эффект:** Смешанные, асимметричные формы

#### **Spider Julia** (Two Memory Terms)
```glsl
// Два c: текущий и предыдущий
vec3 z_new = z_squared + c + c_prev * 0.5;
c_prev = c;
c = z_new;
z = z_new;
```
**Визуальный эффект:** "Паукообразные", связанные структуры

#### **Newton Julia** (Newton's Method)
```glsl
// Newton's method для z^3 - 1
vec3 fz = z * (dot(z,z) - 1.0);
vec3 fpz = 3.0 * z * dot(z,z);
z = z - fz / dot(fpz, fpz);
```
**Визуальный эффект:** Basin boundaries, фрактальные границы

### 3. **IFS (Iterated Function Systems)**

#### **Kaleidoscopic IFS**
```glsl
// Sorting-based folding
z = abs(z);
if (z.x < z.y) z.xy = z.yx;
if (z.x < z.z) z.xz = z.zx;
if (z.y < z.z) z.yz = z.zy;

// Scale and translate
z = z * scale - offset;
```
**Особенности:**
- Симметричные структуры
- Множество отражений
- Kaleidoscopic patterns

#### **Sierpinski IFS**
```glsl
// Condition-based folding
if (z.x + z.y < 0.0) z.xy = -z.yx;
if (z.x + z.z < 0.0) z.xz = -z.zx;
if (z.y + z.z < 0.0) z.yz = -z.zy;

z = z * 2.0 - vec3(1.0);
```
**Особенности:**
- Треугольные структуры
- Self-similar patterns

#### **Menger Sponge IFS**
```glsl
// Face-based folding
if (abs(z.x) < abs(z.y)) z.xy = z.yx;
if (abs(z.x) < abs(z.z)) z.xz = z.zx;
if (abs(z.y) < abs(z.z)) z.yz = z.zy;

z = z * 3.0 - offset;
```
**Особенности:**
- Кубические структуры
- Holes и tunnels

### 4. **L-System (Lindenmayer System)**

#### **Recursive Branching**
```glsl
// Recursive branching с rotation
for (int i = 0; i < 8; i++) {
  p = abs(p);
  p.xy = rot2D(angle) * p.xy;
  p = p * scale - offset;
}
```
**Особенности:**
- Древовидные структуры
- Рекурсивное ветвление
- Органические формы

### 5. **Flame Fractals**

#### **Sinusoidal Variation**
```glsl
z = vec3(sin(z.x), sin(z.y), sin(z.z));
```

#### **Spherical Variation**
```glsl
float r2 = dot(z, z);
z = z / r2;
```

#### **Swirl Variation**
```glsl
float r2 = dot(z.xy, z.xy);
float s = sin(r2);
float c = cos(r2);
z.xy = mat2(c, -s, s, c) * z.xy;
```

#### **Horseshoe Variation**
```glsl
float r = length(z.xy);
z = vec3((z.x*z.x - z.y*z.y) / r, 2.0*z.x*z.y / r, z.z);
```

#### **Heart Variation**
```glsl
float r = length(z.xy);
float theta = atan(z.y, z.x);
z = r * vec3(sin(theta*r), -cos(theta*r), z.z);
```

### 6. **Гибридные Техники**

#### **Mandelbrot-Julia Hybrid**
```glsl
//Blend между Mandelbrot и Julia
vec3 z_mandel = mandelbrot_iteration(z, c);
vec3 z_julia = julia_iteration(z, c_julia);
z = mix(z_mandel, z_julia, blend_factor);
```

#### **Mandelbrot-IFS Hybrid**
```glsl
// Mandelbrot с IFS folding
z = mandelbrot_iteration(z, c);
z = kaleidoscopic_fold(z);
z = z * scale + offset;
```

#### **Julia-Flame Hybrid**
```glsl
// Julia с flame variation
z = julia_iteration(z, c);
z = sinusoidal_variation(z);
```

### 7. **Advanced Techniques**

#### **Kaleidoscopic Folding**
```glsl
// Sorting-based symmetry
z = abs(z);
if (z.x < z.y) z.xy = z.yx;
if (z.x < z.z) z.xz = z.zx;
if (z.y < z.z) z.yz = z.zy;
```

#### **Box Folding**
```glsl
// Reflect if outside box
z = clamp(z, -1.0, 1.0) * 2.0 - z;
```

#### **Sphere Folding**
```glsl
// Invert if inside sphere
float r2 = dot(z, z);
if (r2 < minR2) z *= (maxR2 / minR2);
else if (r2 < maxR2) z /= r2;
```

#### **Rotation Folding**
```glsl
// Rotate around axis
float angle = atan(z.y, z.x) + rotation;
float r = length(z.xy);
z.xy = r * vec2(cos(angle), sin(angle));
```

#### **Scale Folding**
```glsl
// Scale with offset
z = z * scale - offset;
```

## 🎯 Применение к Проекту

### **Проблема:**
- Все 300 новых типов использовали одинаковые формулы с разными параметрами
- Результат: визуально похожие "миндалевидные" фигуры

### **Решение:**
- Применить 15+ уникальных математических техник
- Каждый тип должен иметь УНИКАЛЬНУЮ структуру
- Комбинировать разные техники для создания разнообразия

### **План:**
1. ✅ Julia Variations: 15 уникальных техник (реализовано)
2. ⏳ IFS Variations: Kaleidoscopic, Sierpinski, Menger, Dragon, etc.
3. ⏳ L-System Variations: Recursive branching, tree structures
4. ⏳ Flame Variations: Sinusoidal, Spherical, Swirl, Horseshoe, Heart
5. ⏳ Hybrid Variations: Комбинации разных техник

## 📊 Ожидаемый Результат

**До:**
- 300 типов = 300 копий одной формулы
- Визуально: одинаковые формы

**После:**
- 300 типов = 15+ уникальных техник × 20 вариаций
- Визуально: КАЖДЫЙ тип имеет уникальную сложную структуру

## 🔗 Источники

1. Paul Bourke - Fractals Introduction: https://paulbourke.net/fractals/
2. Syntopia - Distance Estimated 3D Fractals: http://blog.hvidtfeldts.net/
3. Inigo Quilez - Mandelbulb: https://iquilezles.org/articles/mandelbulb/
4. Daniel Gray - GLSL 3D Fractals Series: https://www.danbgray.com/blog/Coding/GLSL_
5. Wikipedia - Fractal: https://en.wikipedia.org/wiki/Fractal

---

*Last updated: September 2026*
