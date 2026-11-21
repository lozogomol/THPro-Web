import { IMAGES } from './theme';

export interface TreatmentPhase {
    number: string;
    title: string;
    description: string;
}

export interface ServiceDetailData {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: any;
    advantages: string[];
    phases: TreatmentPhase[];
}

export const servicesDetailMap: Record<string, ServiceDetailData> = {
    'fisioterapia-a-domicilio': {
        id: 1,
        slug: 'fisioterapia-a-domicilio',
        title: 'Fisioterapia a Domicilio',
        description: 'Atención y rehabilitación profesional en la comodidad y privacidad de tu hogar. Nuestro equipo de fisioterapeutas colegiados traslada equipamiento clínico portátil para tratar afecciones traumatológicas, postoperatorias y dolor agudo sin necesidad de que te desplaces.',
        image: IMAGES.fisioterapiaEnCasa,
        advantages: [
            'Sin traslados ni tiempo perdido en tráfico o salas de espera.',
            'Evaluación y tratamiento directo en tu entorno real y cotidiano.',
            'Equipamiento terapéutico portátil certificado llevado a tu hogar.',
            'Atención exclusiva y personalizada 1 a 1 durante toda la sesión.',
            'Ideal para personas con movilidad reducida o agendas exigentes.',
            'Pautas ergonómicas adaptadas a los muebles y rutinas de tu casa.'
        ],
        phases: [
            {
                number: '01',
                title: 'Evaluación y Diagnóstico en Casa',
                description: 'Valoración clínica completa, antecedentes médicos y análisis funcional de tu movilidad en tu propio entorno.'
            },
            {
                number: '02',
                title: 'Alivio del Dolor y Terapia Manual',
                description: 'Aplicación de agentes físicos portátiles y técnicas manuales específicas para desinflamar y calmar el dolor.'
            },
            {
                number: '03',
                title: 'Rehabilitación y Ejercicio Terapéutico',
                description: 'Plan progresivo de ejercicios de fuerza, movilidad y propiocepción adaptados al espacio de tu hogar.'
            },
            {
                number: '04',
                title: 'Autocuidado y Prevención',
                description: 'Educación postural, pautas para familiares y recomendaciones ergonómicas para evitar recaídas.'
            }
        ]
    },
    'fisioterapia-pediatrica': {
        id: 2,
        slug: 'fisioterapia-pediatrica',
        title: 'Fisioterapia Pediátrica',
        description: 'Tratamiento especializado y afectivo para bebés, niños y adolescentes. Nos enfocamos en la estimulación temprana del desarrollo psicomotor, la corrección de alteraciones posturales y la rehabilitación ortopédica mediante dinámicas lúdicas.',
        image: IMAGES.about2,
        advantages: [
            'Terapias lúdicas, empáticas y adaptadas a la edad de cada niño.',
            'Estimulación temprana de hitos motores (gateo, sedestación y marcha).',
            'Corrección oportuna de pisada, marcha en puntillas y escoliosis.',
            'Acompañamiento cercano y orientación continua a los padres de familia.',
            'Ambiente seguro, afectuoso y libre de ansiedad para los pequeños.',
            'Prevención de complicaciones ortopédicas y refuerzo de su autonomía.'
        ],
        phases: [
            {
                number: '01',
                title: 'Valoración Psicomotriz y Postural',
                description: 'Evaluación del tono muscular, reflejos, postura y desarrollo psicomotor de acuerdo a su etapa de crecimiento.'
            },
            {
                number: '02',
                title: 'Estimulación y Terapia Lúdica',
                description: 'Ejercicios guiados a través del juego para incentivar el movimiento voluntario y la coordinación.'
            },
            {
                number: '03',
                title: 'Reeducación de la Marcha y Postura',
                description: 'Técnicas activas para corregir desviaciones biomecánicas, mejorar el equilibrio y alinear la columna.'
            },
            {
                number: '04',
                title: 'Guía Familiar de Continuidad',
                description: 'Pautas prácticas y sencillas para que la familia continúe reforzando los avances en casa.'
            }
        ]
    },
    'fisioterapia-geriatrica': {
        id: 3,
        slug: 'fisioterapia-geriatrica',
        title: 'Fisioterapia Geriátrica',
        description: 'Cuidado clínico integral enfocado en preservar la autonomía motriz, prevenir caídas y aliviar dolores articulares crónicos en adultos mayores. Protocolos suaves, seguros y adaptados al ritmo de cada paciente.',
        image: IMAGES.about3,
        advantages: [
            'Prevención efectiva de caídas mediante reeducación del equilibrio.',
            'Alivio significativo del dolor articular por artrosis, artritis o reuma.',
            'Mantenimiento y recuperación de la fuerza muscular funcional.',
            'Mejora de la circulación sanguínea y la movilidad articular.',
            'Trato cálido, respetuoso y con la paciencia que merecen.',
            'Fomento de la independencia para realizar actividades cotidianas.'
        ],
        phases: [
            {
                number: '01',
                title: 'Evaluación Funcional y de Equilibrio',
                description: 'Examen de la movilidad articular, estabilidad en la marcha y detección de factores de riesgo de caídas.'
            },
            {
                number: '02',
                title: 'Alivio del Dolor y Movilización Suave',
                description: 'Termoterapia y movilizaciones asistidas para disminuir la rigidez matutina y el dolor articular.'
            },
            {
                number: '03',
                title: 'Fortalecimiento de Bajo Impacto',
                description: 'Circuitos terapéuticos seguros para tonificar piernas, brazos y mejorar la estabilidad del tronco.'
            },
            {
                number: '04',
                title: 'Mantenimiento de la Autonomía',
                description: 'Pautas de seguridad doméstica y orientación en el uso correcto de calzado, bastones o andadores.'
            }
        ]
    },
    'fisioterapia-general': {
        id: 4,
        slug: 'fisioterapia-general',
        title: 'Fisioterapia General',
        description: 'Diagnóstico, tratamiento y recuperación de lesiones traumatológicas, afecciones musculares, dolores articulares y procesos postoperatorios. Aplicamos terapia manual ortopédica y ejercicio clínico basado en evidencia.',
        image: IMAGES.about5,
        advantages: [
            'Alivio rápido de dolores de columna (lumbalgia, cervicalgia y ciática).',
            'Recuperación acelerada de esguinces, fracturas y tendinopatías.',
            'Protocolos postquirúrgicos especializados (ligamentos, prótesis y meniscos).',
            'Terapia manual ortopédica avanzada y liberación miofascial.',
            'Disminución inmediata de inflamación y contracturas musculares.',
            'Plan personalizado para prevenir recaídas y retornar a tu rutina.'
        ],
        phases: [
            {
                number: '01',
                title: 'Diagnóstico Biomecánico',
                description: 'Identificación precisa de la causa estructural y funcional de la lesión o el dolor muscular.'
            },
            {
                number: '02',
                title: 'Manejo del Dolor e Inflamación',
                description: 'Uso de agentes físicos analgésicos y terapia manual para reducir la irritación tisular.'
            },
            {
                number: '03',
                title: 'Readaptación y Fortalecimiento',
                description: 'Ejercicios correctivos progresivos para recuperar el rango de movimiento y la fuerza muscular.'
            },
            {
                number: '04',
                title: 'Alta y Prevención de Recaídas',
                description: 'Reeducación postural y rutina de mantenimiento físico para proteger las articulaciones.'
            }
        ]
    },
    'masaje-de-cuerpo-completo': {
        id: 5,
        slug: 'masaje-de-cuerpo-completo',
        title: 'Masaje de Cuerpo Completo',
        description: 'Experiencia terapéutica integral de pies a cabeza que combina maniobras descontracturantes y relajantes. Diseñada para disolver sobrecargas musculares acumuladas, reactivar la circulación y equilibrar el sistema nervioso.',
        image: IMAGES.about6,
        advantages: [
            'Liberación profunda de contracturas en piernas, espalda, cuello y hombros.',
            'Estimulación del drenaje linfático y eliminación de toxinas.',
            'Reducción drástica del estrés físico, la ansiedad y el cansancio.',
            'Aumento notable de la flexibilidad y la elasticidad muscular.',
            'Inducción a un sueño profundo, continuo y reparador.',
            'Sensación instantánea de ligereza, descompresión y vitalidad.'
        ],
        phases: [
            {
                number: '01',
                title: 'Detección de Focos de Sobrecarga',
                description: 'Exploración inicial para identificar las áreas con mayor acumulación de nudos y tensión muscular.'
            },
            {
                number: '02',
                title: 'Terapia Manual Descontracturante',
                description: 'Amasamientos profundos y fricciones terapéuticas para desarmar contracturas en piernas y espalda.'
            },
            {
                number: '03',
                title: 'Descompresión Cervical y Craneal',
                description: 'Maniobras focalizadas en trapecios, hombros, cuello y nuca para liberar la tensión acumulada.'
            },
            {
                number: '04',
                title: 'Relajación e Integración',
                description: 'Pases suaves con aceites aromaterapéuticos para normalizar el tono muscular y relajar el cuerpo.'
            }
        ]
    },
    'masaje-de-medio-cuerpo': {
        id: 6,
        slug: 'masaje-de-medio-cuerpo',
        title: 'Masaje de Medio Cuerpo',
        description: 'Tratamiento focalizado en las zonas con mayor acumulación de sobrecarga: espalda alta y baja, cuello, trapecios y hombros. Sesión intensiva para desarmar contracturas rebeldes provocadas por el trabajo y el estrés diario.',
        image: IMAGES.about7,
        advantages: [
            'Alivio directo de contracturas y nudos musculares en espalda y cuello.',
            'Descompresión cervical y mitigación de dolores de cabeza tensionales.',
            'Eliminación de la pesadez y rigidez al girar o inclinar el cuello.',
            'Técnicas miofasciales de presión media y profunda personalizadas.',
            'Mejora de la postura al relajar los músculos del pecho y hombros.',
            'Sesión ágil y altamente concentrada con resultados inmediatos.'
        ],
        phases: [
            {
                number: '01',
                title: 'Palpación de Puntos Gatillo',
                description: 'Localización exacta de las bandas tensas y contracturas en la región dorsal, escapular y cervical.'
            },
            {
                number: '02',
                title: 'Desactivación Miofascial Profunda',
                description: 'Terapia manual intensiva para liberar el tejido fascial y restaurar la elasticidad muscular.'
            },
            {
                number: '03',
                title: 'Movilizaciones Cervicales y Escapulares',
                description: 'Técnicas asistidas para desbloquear las articulaciones vertebrales y ganar rango de movimiento.'
            },
            {
                number: '04',
                title: 'Descompresión y Alivio Inmediato',
                description: 'Aplicación de calor o gel calmante y pautas sencillas de estiramiento para tu rutina.'
            }
        ]
    },
    'ergonomia-laboral': {
        id: 7,
        slug: 'ergonomia-laboral',
        title: 'Ergonomía Laboral',
        description: 'Asesoramiento e intervención postural para adaptar tu puesto de trabajo y teletrabajo. Prevenimos molestias lumbares, cervicalgias y síndrome del túnel carpiano mediante correcciones biomecánicas y pausas activas.',
        image: IMAGES.about8,
        advantages: [
            'Evaluación ergonómica personalizada de tu escritorio, silla y postura.',
            'Prevención activa de lesiones por movimientos repetitivos.',
            'Disminución notable de la fatiga al final de la jornada de trabajo.',
            'Diseño de rutinas de pausas activas breves y de alto impacto.',
            'Asesoramiento profesional para regular alturas y soportes lumbares.',
            'Mayor confort corporal, bienestar y productividad diaria.'
        ],
        phases: [
            {
                number: '01',
                title: 'Evaluación del Puesto de Trabajo',
                description: 'Análisis biomecánico de las alturas de la silla, monitor, teclado y hábitos al sentarse.'
            },
            {
                number: '02',
                title: 'Ajuste y Corrección Ergonómica',
                description: 'Adaptación inmediata de los ángulos de confort para cuello, espalda baja, codos y muñecas.'
            },
            {
                number: '03',
                title: 'Terapia Manual Compensatoria',
                description: 'Maniobras descontracturantes para liberar las sobrecargas posturales ya instauradas.'
            },
            {
                number: '04',
                title: 'Plan de Pausas Activas',
                description: 'Diseño de una rutina de estiramientos de 3 a 5 minutos para oxigenar los músculos durante la jornada.'
            }
        ]
    },
    'masaje-expres': {
        id: 8,
        slug: 'masaje-expres',
        title: 'Masaje Exprés',
        description: 'Sesión corta e intensiva de 20 a 30 minutos orientada a liberar la rigidez y el estrés en cuello y hombros. Diseñada para quienes cuentan con poco tiempo pero necesitan una recarga física y mental inmediata.',
        image: IMAGES.about9,
        advantages: [
            'Optimización total del tiempo: sesión rápida de 20 a 30 minutos.',
            'Alivio focalizado en las zonas clave de sobrecarga (cuello y hombros).',
            'No requiere cambios de vestimenta complejos ni esperas.',
            'Sensación instantánea de ligereza, alivio y reactivación muscular.',
            'Técnicas directas de presión rítmica y descompresión miofascial.',
            'Ideal para un descanso revitalizante en medio de la jornada.'
        ],
        phases: [
            {
                number: '01',
                title: 'Exploración Rápida de Rigidez',
                description: 'Identificación inmediata de las contracturas más agudas en trapecios y nuca.'
            },
            {
                number: '02',
                title: 'Terapia Manual Directa',
                description: 'Maniobras intensivas de compresión y descompresión para desarmar la tensión acumulada.'
            },
            {
                number: '03',
                title: 'Movilización y Estiramiento Asistido',
                description: 'Pases suaves para elongar las fibras musculares del cuello y descomprimir hombros.'
            },
            {
                number: '04',
                title: 'Cierre Revitalizante',
                description: 'Percusiones sutiles para activar la circulación y retomar tu día con frescura y ligereza.'
            }
        ]
    }
};
