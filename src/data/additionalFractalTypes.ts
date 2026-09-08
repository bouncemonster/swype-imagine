// Additional Fractal Types - 50 new types
// Expanding the fractal library with advanced mathematical structures

export const ADDITIONAL_FRACTAL_TYPES = [
  // 4D HYPERCOMPLEX FRACTALS (10)
  'quaternionJulia',
  'octonianFractal',
  'biquaternionSet',
  'dualQuaternionFractal',
  'hypercomplexMandelbrot',
  'cliffordAlgebraFractal',
  'geometricAlgebraFractal',
  'spinorFractal',
  'twistorFractal',
  'multivectorFractal',
  
  // ALGEBRAIC VARIETIES (10)
  'cubicSurface',
  'quarticSurface',
  'quinticSurface',
  'sexticSurface',
  'algebraicCurve3D',
  'ellipticCurve',
  'abelianVariety',
  'calabiYau',
  'k3Surface',
  'riemannSurface',
  
  // DIFFERENTIAL GEOMETRY (10)
  'minimalSurface',
  'constantMeanCurvature',
  'gaussMapFractal',
  'principalCurvature',
  'geodesicFractal',
  'connectionFractal',
  'curvatureFlow',
  'harmonicMap',
  'conformalMap',
  'isometricEmbedding',
  
  // TOPOLOGICAL STRUCTURES (10)
  'fiberBundle',
  'vectorField',
  'differentialForm',
  'cohomologyFractal',
  'homologyFractal',
  'fundamentalGroup',
  'coveringSpace',
  'mappingTorus',
  'suspensionSpace',
  'loopSpace',
  
  // DYNAMICAL SYSTEMS (10)
  'strangeAttractor3D',
  'hyperbolicSystem',
  'parabolicSystem',
  'ellipticSystem',
  'bifurcationFractal',
  'juliaSet3D',
  'fatouSet3D',
  'mandelbrotVariation1',
  'mandelbrotVariation2',
  'newtonFractal3D'
];

export const ADDITIONAL_FRACTAL_NAMES: Record<string, string> = {
  // 4D HYPERCOMPLEX
  'quaternionJulia': 'Кватернионное множество Жюлиа',
  'octonianFractal': 'Октонионный фрактал',
  'biquaternionSet': 'Бикватернионное множество',
  'dualQuaternionFractal': 'Двойной кватернионный фрактал',
  'hypercomplexMandelbrot': 'Гиперкомплексное множество Мандельброта',
  'cliffordAlgebraFractal': 'Фрактал алгебры Клиффорда',
  'geometricAlgebraFractal': 'Фрактал геометрической алгебры',
  'spinorFractal': 'Спинорный фрактал',
  'twistorFractal': 'Твисторный фрактал',
  'multivectorFractal': 'Мультивекторный фрактал',
  
  // ALGEBRAIC VARIETIES
  'cubicSurface': 'Кубическая поверхность',
  'quarticSurface': 'Квартичная поверхность',
  'quinticSurface': 'Квинтическая поверхность',
  'sexticSurface': 'Секстическая поверхность',
  'algebraicCurve3D': 'Алгебраическая кривая 3D',
  'ellipticCurve': 'Эллиптическая кривая',
  'abelianVariety': 'Абелево многообразие',
  'calabiYau': 'Многообразие Калаби-Яу',
  'k3Surface': 'K3 поверхность',
  'riemannSurface': 'Поверхность Римана',
  
  // DIFFERENTIAL GEOMETRY
  'minimalSurface': 'Минимальная поверхность',
  'constantMeanCurvature': 'Поверхность постоянной средней кривизны',
  'gaussMapFractal': 'Фрактал карты Гаусса',
  'principalCurvature': 'Главные кривизны',
  'geodesicFractal': 'Геодезический фрактал',
  'connectionFractal': 'Фрактал связности',
  'curvatureFlow': 'Поток кривизны',
  'harmonicMap': 'Гармоническое отображение',
  'conformalMap': 'Конформное отображение',
  'isometricEmbedding': 'Изометрическое вложение',
  
  // TOPOLOGICAL STRUCTURES
  'fiberBundle': 'Расслоение',
  'vectorField': 'Векторное поле',
  'differentialForm': 'Дифференциальная форма',
  'cohomologyFractal': 'Фрактал когомологий',
  'homologyFractal': 'Фрактал гомологий',
  'fundamentalGroup': 'Фундаментальная группа',
  'coveringSpace': 'Накрывающее пространство',
  'mappingTorus': 'Тор отображения',
  'suspensionSpace': 'Пространство подвешивания',
  'loopSpace': 'Пространство петель',
  
  // DYNAMICAL SYSTEMS
  'strangeAttractor3D': 'Странный аттрактор 3D',
  'hyperbolicSystem': 'Гиперболическая система',
  'parabolicSystem': 'Параболическая система',
  'ellipticSystem': 'Эллиптическая система',
  'bifurcationFractal': 'Фрактал бифуркации',
  'juliaSet3D': 'Множество Жюлиа 3D',
  'fatouSet3D': 'Множество Фату 3D',
  'mandelbrotVariation1': 'Вариация Мандельброта 1',
  'mandelbrotVariation2': 'Вариация Мандельброта 2',
  'newtonFractal3D': 'Фрактал Ньютона 3D'
};

export const ADDITIONAL_DEFAULT_ZOOMS: Record<string, number> = {
  // 4D HYPERCOMPLEX
  'quaternionJulia': 2.5,
  'octonianFractal': 3.0,
  'biquaternionSet': 2.8,
  'dualQuaternionFractal': 2.6,
  'hypercomplexMandelbrot': 2.4,
  'cliffordAlgebraFractal': 3.2,
  'geometricAlgebraFractal': 3.0,
  'spinorFractal': 2.7,
  'twistorFractal': 3.5,
  'multivectorFractal': 2.9,
  
  // ALGEBRAIC VARIETIES
  'cubicSurface': 3.0,
  'quarticSurface': 2.8,
  'quinticSurface': 2.6,
  'sexticSurface': 2.4,
  'algebraicCurve3D': 3.5,
  'ellipticCurve': 3.2,
  'abelianVariety': 2.5,
  'calabiYau': 2.0,
  'k3Surface': 2.3,
  'riemannSurface': 2.7,
  
  // DIFFERENTIAL GEOMETRY
  'minimalSurface': 3.0,
  'constantMeanCurvature': 2.8,
  'gaussMapFractal': 3.2,
  'principalCurvature': 2.5,
  'geodesicFractal': 3.5,
  'connectionFractal': 2.9,
  'curvatureFlow': 2.6,
  'harmonicMap': 3.0,
  'conformalMap': 3.3,
  'isometricEmbedding': 2.7,
  
  // TOPOLOGICAL STRUCTURES
  'fiberBundle': 3.0,
  'vectorField': 3.5,
  'differentialForm': 2.8,
  'cohomologyFractal': 2.5,
  'homologyFractal': 2.6,
  'fundamentalGroup': 3.2,
  'coveringSpace': 2.9,
  'mappingTorus': 3.0,
  'suspensionSpace': 2.7,
  'loopSpace': 3.3,
  
  // DYNAMICAL SYSTEMS
  'strangeAttractor3D': 3.5,
  'hyperbolicSystem': 2.8,
  'parabolicSystem': 3.0,
  'ellipticSystem': 2.6,
  'bifurcationFractal': 2.5,
  'juliaSet3D': 2.7,
  'fatouSet3D': 2.8,
  'mandelbrotVariation1': 2.5,
  'mandelbrotVariation2': 2.6,
  'newtonFractal3D': 3.0
};
