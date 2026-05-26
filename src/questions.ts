export interface Question {
  id: number;
  dimension: 'vista' | 'olfato' | 'oido' | 'tacto' | 'gusto' | 'diseno';
  dimensionLabel: string;
  questionText: string;
  contextText: string;
}

export interface DimensionInfo {
  id: 'vista' | 'olfato' | 'oido' | 'tacto' | 'gusto' | 'diseno';
  label: string;
  iconName: string;
  description: string;
  tip: string;
}

export const dimensions: Record<string, DimensionInfo> = {
  vista: {
    id: 'vista',
    label: 'Vista (Conexión Visual)',
    iconName: 'Eye',
    description: 'Establece la estimulación visual a través del contacto constante con el exterior, vegetación y luz solar.',
    tip: 'Se recomienda reubicar puestos de trabajo para maximizar los ángulos de visión hacia ventanas con arbustos o arbolado.'
  },
  olfato: {
    id: 'olfato',
    label: 'Olfato (Calidad del Aire)',
    iconName: 'Wind',
    description: 'Relación con la pureza biológica del aire, aromas naturales y frescura ambiental.',
    tip: 'Incorporar plantas aromáticas activas como lavanda, romero o sistemas de aromatización orgánica difusa sin químicos.'
  },
  oido: {
    id: 'oido',
    label: 'Oído (Paisaje Acústico)',
    iconName: 'Volume2',
    description: 'Control de la contaminación por ruidos artificiales e integración de sonidos orgánicos/absorbentes.',
    tip: 'Utilizar fuentes de agua de ciclo cerrado o música ambiente con sonido de agua/viento para enmascarar ruidos técnicos.'
  },
  tacto: {
    id: 'tacto',
    label: 'Tacto (Materiales y Texturas)',
    iconName: 'Feather',
    description: 'Presencia de texturas naturales y materiales auténticos (madera, piedra, fibras vegetales) en el mobiliario diario.',
    tip: 'Sustituir tableros laminados e imitaciones de plástico por maderas con veta natural al tacto o textil orgánico.'
  },
  gusto: {
    id: 'gusto',
    label: 'Gusto (Sustento y Pureza)',
    iconName: 'Droplet',
    description: 'Acceso a agua de excelente calidad, infusiones puras y alimentos frescos de temporada que conectan con el ritmo circadiano.',
    tip: 'Establecer un rincón de hidratación premium con fruta fresca, agua purificada y tés herbales ecológicos gratuitos.'
  },
  diseno: {
    id: 'diseno',
    label: 'Diseño General (Refugio y Formas)',
    iconName: 'Sprout',
    description: 'Integración de patrones geométricos de la naturaleza, formas curvas, biominerales y espacios en modo "refugio".',
    tip: 'Crear zonas de concentración baja con mobiliario curvo envolvente que brinde privacidad visual protectora.'
  }
};

export const questions: Question[] = [
  {
    id: 1,
    dimension: 'vista',
    dimensionLabel: 'Vista (Conexión Visual)',
    questionText: '¿Dispone tu puesto de trabajo directo de vistas claras al exterior que incluyan vegetación, árboles o elementos naturales vivos?',
    contextText: 'La conexión visual con la naturaleza reduce el estrés de forma inmediata y mitiga de forma constante la fatiga visual.'
  },
  {
    id: 2,
    dimension: 'vista',
    dimensionLabel: 'Vista (Conexión Visual)',
    questionText: '¿Es la luz natural la fuente de iluminación primordial o muy mayoritaria en tu espacio habitual de concentración?',
    contextText: 'Los ritmos circadianos se desequilibran frente a iluminación artificial continuada, disminuyendo el nivel de energía por la tarde.'
  },
  {
    id: 3,
    dimension: 'olfato',
    dimensionLabel: 'Olfato (Calidad del Aire)',
    questionText: '¿Se perciben de forma sutil fragancias naturales (como plantas reales, flores o maderas) u olores frescos en las zonas de trabajo?',
    contextText: 'Los estímulos olfativos naturales impactan directamente en el sistema límbico, promoviendo estados cognitivos de alta productividad.'
  },
  {
    id: 4,
    dimension: 'olfato',
    dimensionLabel: 'Olfato (Calidad del Aire)',
    questionText: '¿Está el aire del espacio de trabajo habitualmente libre de olores sintéticos agresivos, aire cargado o fragancias químicas sintéticas?',
    contextText: 'Un aire excesivamente recirculado o cargado de químicos sintéticos de limpieza bloquea la claridad mental y detona dolores de cabeza.'
  },
  {
    id: 5,
    dimension: 'oido',
    dimensionLabel: 'Oído (Paisaje Acústico)',
    questionText: '¿El silencio o el nivel acústico de fondo en tu espacio te permite concentrarte con comodidad sin aislarte continuamente?',
    contextText: 'El ruido blanco estresante de sistemas de ventilación o conversaciones cruzadas satura neurológicamente al trabajador.'
  },
  {
    id: 6,
    dimension: 'oido',
    dimensionLabel: 'Oído (Paisaje Acústico)',
    questionText: '¿Existen elementos acústicos relajantes como caídas de agua sutiles, aislamiento orgánico o materiales absorbentes naturales?',
    contextText: 'Los materiales naturales como lana, musgo preservado u corcho reducen la reverberación nociva de forma altamente estética.'
  },
  {
    id: 7,
    dimension: 'tacto',
    dimensionLabel: 'Tacto (Materiales y Texturas)',
    questionText: '¿Interactúas físicamente con materiales reales como madera maciza, piedra natural, lino, lana o metal pulido en tu puesto de trabajo?',
    contextText: 'Las respuestas galvánicas de la piel demuestran que tocar madera o fibras naturales disminuye la presión arterial frente al plástico.'
  },
  {
    id: 8,
    dimension: 'tacto',
    dimensionLabel: 'Tacto (Materiales y Texturas)',
    questionText: '¿Tienes interacción cercana habitual con tierra física, plantas de oficina vivas u otros sustratos naturales palpables?',
    contextText: 'La presencia física y mantenida de vegetación incrementa la sensación de seguridad climática en el subconsciente.'
  },
  {
    id: 9,
    dimension: 'gusto',
    dimensionLabel: 'Gusto (Sustento y Pureza)',
    questionText: '¿Es de fácil e inmediato acceso el agua filtrada o purificada de alta calidad organoléptica en tu puesto?',
    contextText: 'Una hidratación deficiente por agua con mal sabor u olor reduce un 10% la atención intelectual y la velocidad de respuesta.'
  },
  {
    id: 10,
    dimension: 'gusto',
    dimensionLabel: 'Gusto (Sustento y Pureza)',
    questionText: '¿Se promueve activamente el consumo de fruta natural fresca o alimentos biológicos de procedencia estacional en los descansos?',
    contextText: 'Tener acceso a fruta en el descanso en lugar de máquinas expendedoras de ultraprocesados optimiza el rendimiento metabólico.'
  },
  {
    id: 11,
    dimension: 'diseno',
    dimensionLabel: 'Diseño General (Refugio y Formas)',
    questionText: '¿El espacio de oficinas incorpora líneas suaves, curvas orgánicas, patrones decorativos naturales (fractales) o colores de la naturaleza?',
    contextText: 'Nuestros cerebros procesan más rápido la geometría fractal orgánica porque reduce el esfuerzo cerebral de codificación visual.'
  },
  {
    id: 12,
    dimension: 'diseno',
    dimensionLabel: 'Diseño General (Refugio y Formas)',
    questionText: '¿Ofrece tu oficina rincones de aislamiento protegidos lateralmente por mobiliario u ornamentación que evoquen un refugio natural?',
    contextText: 'Los seres humanos aman el diseño biofílico con doble espectro: perspectiva para otear el entorno y refugio para sentirse protegidos.'
  }
];
