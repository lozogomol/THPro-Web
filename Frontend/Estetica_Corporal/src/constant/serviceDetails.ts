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
    'maderoterapia': {
        id: 1,
        slug: 'maderoterapia',
        title: 'Maderoterapia',
        description: 'Técnica de masaje corporal que utiliza instrumentos de madera de diferentes formas y tamaños para moldear la figura. Ayuda a reducir la celulitis, reafirmar la piel y activar la circulación de manera natural y sin cirugía.',
        image: IMAGES.about2,
        advantages: [
            'Moldea y estiliza la figura de forma natural.',
            'Ayuda a reducir la apariencia de la celulitis.',
            'Reafirma y tonifica la piel de abdomen, piernas y glúteos.',
            'Activa la circulación sanguínea y linfática.',
            'Favorece la eliminación de líquidos retenidos.',
            'Tratamiento no invasivo y sin tiempo de recuperación.'
        ],
        phases: [
            { number: '01', title: 'Valoración Corporal', description: 'Evaluación de las zonas a tratar, tipo de celulitis y objetivos de modelado.' },
            { number: '02', title: 'Preparación de la Piel', description: 'Aplicación de aceites o cremas reductoras para facilitar el deslizamiento.' },
            { number: '03', title: 'Modelado con Madera', description: 'Maniobras con instrumentos de madera para moldear, drenar y reafirmar.' },
            { number: '04', title: 'Cierre y Recomendaciones', description: 'Masaje de cierre y pautas de hidratación, alimentación y frecuencia de sesiones.' }
        ]
    },
    'drenaje-linfatico': {
        id: 2,
        slug: 'drenaje-linfatico',
        title: 'Drenaje Linfático',
        description: 'Masaje manual suave y rítmico que estimula el sistema linfático para eliminar líquidos retenidos y toxinas. Ideal para reducir la hinchazón, la sensación de piernas pesadas y como complemento en procesos postoperatorios estéticos.',
        image: IMAGES.about3,
        advantages: [
            'Disminuye la retención de líquidos y la hinchazón.',
            'Alivia la sensación de piernas cansadas y pesadas.',
            'Favorece la eliminación de toxinas del organismo.',
            'Complemento ideal en postoperatorios estéticos.',
            'Mejora el aspecto de la celulitis edematosa.',
            'Técnica suave, relajante y totalmente indolora.'
        ],
        phases: [
            { number: '01', title: 'Evaluación Inicial', description: 'Identificación de zonas con retención de líquidos y antecedentes del paciente.' },
            { number: '02', title: 'Apertura de Ganglios', description: 'Estimulación suave de los ganglios linfáticos principales para preparar el drenaje.' },
            { number: '03', title: 'Drenaje Manual', description: 'Maniobras lentas y rítmicas que dirigen la linfa hacia los ganglios.' },
            { number: '04', title: 'Pautas de Cuidado', description: 'Recomendaciones de hidratación, actividad física y frecuencia de sesiones.' }
        ]
    },
    'mesoterapia': {
        id: 3,
        slug: 'mesoterapia',
        title: 'Mesoterapia',
        description: 'Tratamiento que aplica microdosis de activos directamente en las zonas a tratar para ayudar a reducir grasa localizada, celulitis y flacidez. Potencia los resultados de los tratamientos reductores y mejora la calidad de la piel.',
        image: IMAGES.about5,
        advantages: [
            'Actúa directamente sobre la grasa localizada.',
            'Ayuda a mejorar la celulitis y la textura de la piel.',
            'Reafirma zonas con flacidez.',
            'Potencia los resultados de otros tratamientos corporales.',
            'Protocolo personalizado según cada zona.',
            'Procedimiento rápido y ambulatorio.'
        ],
        phases: [
            { number: '01', title: 'Valoración y Diagnóstico', description: 'Evaluación de las zonas, antecedentes y definición del protocolo adecuado.' },
            { number: '02', title: 'Preparación de la Zona', description: 'Limpieza y desinfección de la piel de las áreas a tratar.' },
            { number: '03', title: 'Aplicación de Activos', description: 'Aplicación de microdosis de activos reductores o reafirmantes en la zona.' },
            { number: '04', title: 'Seguimiento', description: 'Indicaciones post tratamiento y control de la evolución en cada sesión.' }
        ]
    },
    'reduccion-de-medidas': {
        id: 4,
        slug: 'reduccion-de-medidas',
        title: 'Reducción de Medidas',
        description: 'Programa corporal integral que combina técnicas manuales y aparatología para reducir centímetros en abdomen, cintura, caderas, piernas y brazos. Un plan personalizado para moldear tu figura y ver resultados medibles.',
        image: IMAGES.about6,
        advantages: [
            'Reducción de centímetros en zonas específicas.',
            'Combinación de técnicas manuales y aparatología.',
            'Control de medidas en cada sesión para ver tu avance.',
            'Moldea la silueta y mejora la firmeza de la piel.',
            'Plan personalizado según tus objetivos.',
            'Orientación en hábitos para mantener los resultados.'
        ],
        phases: [
            { number: '01', title: 'Toma de Medidas', description: 'Registro de medidas, peso y fotografías para definir el punto de partida.' },
            { number: '02', title: 'Plan Personalizado', description: 'Diseño de la combinación de técnicas según las zonas y metas.' },
            { number: '03', title: 'Sesiones Reductoras', description: 'Aplicación de masajes reductores, maderoterapia y aparatología.' },
            { number: '04', title: 'Control y Mantenimiento', description: 'Medición de resultados y pautas para mantener la figura lograda.' }
        ]
    }
};
