import { FractalType, CompositeOp, RenderStyle } from '../types/fractal';

export type FractalCategoryKey = 
  | 'geometric_curves'
  | 'constructive'
  | 'algebraic_complex'
  | 'multidimensional'
  | 'ifs_attractors'
  | 'stochastic'
  | 'topological_physical'
  | 'expanded_real';

export interface CanonicalFractal {
  id: string;
  name: string;
  englishName: string;
  category: FractalCategoryKey;
  formula: string;
  dimension: string;
  generatorRule?: string;
  description: string;
  phiPiRelation: string;
  enginePreset: {
    type: FractalType;
    hybridType?: FractalType;
    compositeOp: CompositeOp;
    hybridBlend?: number;
    warpStrength?: number;
    boxFold?: number;
    sphereFold?: number;
    octaveLayers?: number;
    zoom?: number;
    phiMultiplier?: number;
    rotX?: number;
    rotY?: number;
    iterations?: number;
    paletteSeed?: number;
    smoothK?: number;
    glowIntensity?: number;
    morphSpeed?: number;
    interiorCut?: number;
    renderStyle?: RenderStyle;
  };
}

export const FRACTAL_CATEGORIES: {
  id: FractalCategoryKey;
  title: string;
  subtitle: string;
  iconName: string;
}[] = [
  {
    id: 'geometric_curves',
    title: '1. Геометрические кривые и L-системы',
    subtitle: 'Линейные пространственно-заполняющие и рекурсивные кривые',
    iconName: 'Compass',
  },
  {
    id: 'constructive',
    title: '2. Плоскостные и пространственные конструктивные',
    subtitle: 'Рекурсивное разбиение симплексов, ковры, губки и упаковки',
    iconName: 'Layers',
  },
  {
    id: 'algebraic_complex',
    title: '3. Алгебраические фракталы (Комплексная динамика)',
    subtitle: 'Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны',
    iconName: 'Infinity',
  },
  {
    id: 'multidimensional',
    title: '4. Многомерные алгебраические фракталы',
    subtitle: 'Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна',
    iconName: 'Box',
  },
  {
    id: 'ifs_attractors',
    title: '5. Системы итерируемых функций (IFS) и аттракторы',
    subtitle: 'Странные аттракторы динамических систем и нелинейный хаос',
    iconName: 'Activity',
  },
  {
    id: 'stochastic',
    title: '6. Стохастические (Случайные) и шумы',
    subtitle: 'Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой',
    iconName: 'Sparkles',
  },
  {
    id: 'topological_physical',
    title: '7. Физические и топологические концепции',
    subtitle: 'Бабочка Хофштадтера, множества Кантора и зацепления торов',
    iconName: 'Atom',
  },
  {
    id: 'expanded_real',
    title: '8. Расширенный каталог реальных фракталов',
    subtitle: 'Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны',
    iconName: 'FlaskConical',
  },
];
