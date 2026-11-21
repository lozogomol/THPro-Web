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
    'dermaplaning': {
        id: 1,
        slug: 'dermaplaning',
        title: 'Dermaplaning',
        description: 'Exfoliación física profesional que retira suavemente las células muertas y el vello fino (pelusa) del rostro con una hoja quirúrgica estéril. La piel queda lisa, luminosa y preparada para absorber mejor los activos y el maquillaje.',
        image: IMAGES.about2,
        advantages: [
            'Piel visiblemente más suave, uniforme y luminosa desde la primera sesión.',
            'Eliminación del vello facial fino sin dolor ni irritación.',
            'Mejor absorción de sérums, cremas y tratamientos posteriores.',
            'Maquillaje con acabado más natural y uniforme.',
            'Procedimiento rápido, indoloro y sin tiempo de recuperación.',
            'Atenuación de manchas superficiales y textura irregular.'
        ],
        phases: [
            { number: '01', title: 'Diagnóstico de la Piel', description: 'Evaluación del tipo de piel, sensibilidad y objetivos para personalizar el tratamiento.' },
            { number: '02', title: 'Limpieza y Preparación', description: 'Doble limpieza y desengrase de la piel para trabajar sobre una superficie limpia y seca.' },
            { number: '03', title: 'Dermaplaning Profesional', description: 'Deslizamiento controlado de la hoja estéril para retirar células muertas y vello fino.' },
            { number: '04', title: 'Hidratación y Protección', description: 'Aplicación de sérum calmante, hidratante y protector solar para cerrar el tratamiento.' }
        ]
    },
    'limpieza-facial': {
        id: 2,
        slug: 'limpieza-facial',
        title: 'Limpieza Facial',
        description: 'Limpieza facial profunda que purifica los poros, elimina impurezas, puntos negros y exceso de sebo. Combina exfoliación, vapor, extracción profesional y mascarilla para devolverle a tu piel frescura, oxigenación y equilibrio.',
        image: IMAGES.about3,
        advantages: [
            'Poros más limpios y visiblemente reducidos.',
            'Extracción profesional de puntos negros y comedones.',
            'Piel oxigenada, fresca y con un tono más uniforme.',
            'Prevención de brotes de acné e imperfecciones.',
            'Mejor textura y suavidad al tacto.',
            'Protocolo personalizado según tu tipo de piel.'
        ],
        phases: [
            { number: '01', title: 'Análisis de la Piel', description: 'Identificación del tipo de piel, nivel de obstrucción de poros y zonas a tratar.' },
            { number: '02', title: 'Exfoliación y Vapor', description: 'Exfoliación suave y vapor ozono para abrir los poros y facilitar la limpieza.' },
            { number: '03', title: 'Extracción Profesional', description: 'Retiro cuidadoso de puntos negros e impurezas con técnica higiénica y segura.' },
            { number: '04', title: 'Mascarilla y Cierre', description: 'Mascarilla calmante, tónico equilibrante, hidratación y protección solar.' }
        ]
    },
    'anti-edad': {
        id: 3,
        slug: 'anti-edad',
        title: 'Tratamiento Anti Edad',
        description: 'Tratamiento facial rejuvenecedor que estimula la producción de colágeno y elastina para atenuar líneas de expresión, arrugas finas y flacidez. Devuelve firmeza, luminosidad y un aspecto descansado al rostro.',
        image: IMAGES.about5,
        advantages: [
            'Atenuación visible de líneas de expresión y arrugas finas.',
            'Estimulación natural de colágeno y elastina.',
            'Rostro más firme, tonificado y con mejor contorno.',
            'Piel más luminosa, jugosa y con aspecto descansado.',
            'Activos antioxidantes que combaten el envejecimiento prematuro.',
            'Resultados progresivos y naturales sesión tras sesión.'
        ],
        phases: [
            { number: '01', title: 'Valoración del Envejecimiento', description: 'Evaluación de arrugas, flacidez, manchas y calidad de la piel para definir el protocolo.' },
            { number: '02', title: 'Limpieza y Renovación', description: 'Limpieza profunda y peeling suave para renovar la superficie de la piel.' },
            { number: '03', title: 'Activos Reafirmantes', description: 'Aplicación de sérums con péptidos, vitamina C y ácido hialurónico con masaje tensor.' },
            { number: '04', title: 'Mascarilla y Mantenimiento', description: 'Mascarilla reafirmante y pautas de cuidado en casa para prolongar los resultados.' }
        ]
    },
    'hidratacion-profunda': {
        id: 4,
        slug: 'hidratacion-profunda',
        title: 'Hidratación Profunda',
        description: 'Tratamiento intensivo que repone el agua y los lípidos que la piel pierde por el clima, el sol y el estrés. Ideal para pieles secas, deshidratadas o apagadas que necesitan recuperar elasticidad, confort y brillo saludable.',
        image: IMAGES.about6,
        advantages: [
            'Hidratación intensa y duradera desde las capas profundas.',
            'Alivio inmediato de tirantez, descamación y resequedad.',
            'Piel más elástica, suave y confortable.',
            'Recupera el brillo saludable de un rostro apagado.',
            'Refuerza la barrera protectora natural de la piel.',
            'Ideal para el clima seco y frío de La Paz.'
        ],
        phases: [
            { number: '01', title: 'Diagnóstico de Hidratación', description: 'Evaluación del nivel de deshidratación, sensibilidad y necesidades de tu piel.' },
            { number: '02', title: 'Limpieza Suave', description: 'Limpieza delicada y exfoliación enzimática que respeta la barrera cutánea.' },
            { number: '03', title: 'Infusión de Activos', description: 'Aplicación de ácido hialurónico y activos humectantes con masaje facial.' },
            { number: '04', title: 'Mascarilla Hidratante', description: 'Mascarilla nutritiva y crema selladora para mantener la hidratación por más tiempo.' }
        ]
    },
    'limpieza-facial-basica': {
        id: 5,
        slug: 'limpieza-facial-basica',
        title: 'Limpieza Facial Básica',
        description: 'Limpieza esencial para mantener la piel sana, fresca y libre de impurezas. Una sesión práctica y relajante, ideal como mantenimiento mensual o como primer paso en el cuidado profesional de tu rostro.',
        image: IMAGES.about7,
        advantages: [
            'Rostro limpio, fresco y renovado en una sola sesión.',
            'Retiro de impurezas, maquillaje residual y exceso de grasa.',
            'Ideal como mantenimiento mensual del cuidado facial.',
            'Sesión ágil, cómoda y relajante.',
            'Apta para todo tipo de piel.',
            'Excelente punto de partida para iniciar tu rutina de cuidado.'
        ],
        phases: [
            { number: '01', title: 'Desmaquillado y Limpieza', description: 'Retiro de maquillaje e impurezas superficiales con productos según tu tipo de piel.' },
            { number: '02', title: 'Exfoliación Suave', description: 'Exfoliación ligera para eliminar células muertas y dar luminosidad.' },
            { number: '03', title: 'Tonificación', description: 'Tónico equilibrante que regula el pH y prepara la piel para hidratarse.' },
            { number: '04', title: 'Hidratación y Protección', description: 'Crema hidratante y protector solar para terminar la sesión.' }
        ]
    },
    'facial-controlador': {
        id: 6,
        slug: 'facial-controlador',
        title: 'Facial Controlador',
        description: 'Tratamiento facial correctivo enfocado en controlar imperfecciones, brotes y enrojecimiento. Equilibra la piel, calma la inflamación y ayuda a prevenir nuevas lesiones con activos purificantes y antibacterianos.',
        image: IMAGES.about8,
        advantages: [
            'Control de brotes, granitos e imperfecciones activas.',
            'Reducción del enrojecimiento y la inflamación.',
            'Activos purificantes y antibacterianos de uso profesional.',
            'Piel más equilibrada, calmada y uniforme.',
            'Prevención de marcas y nuevas lesiones.',
            'Plan de cuidado en casa adaptado a tu piel.'
        ],
        phases: [
            { number: '01', title: 'Evaluación de Imperfecciones', description: 'Análisis del tipo de lesiones, grado de inflamación y factores desencadenantes.' },
            { number: '02', title: 'Limpieza Purificante', description: 'Limpieza con activos seborreguladores y exfoliación química suave.' },
            { number: '03', title: 'Tratamiento Controlador', description: 'Extracción higiénica y aplicación de activos calmantes y antibacterianos.' },
            { number: '04', title: 'Calma y Seguimiento', description: 'Mascarilla descongestiva, protección solar y pautas para el seguimiento.' }
        ]
    },
    'control-de-grasa': {
        id: 7,
        slug: 'control-de-grasa',
        title: 'Control de Grasa',
        description: 'Tratamiento seborregulador para pieles grasas o mixtas con brillo excesivo y poros dilatados. Regula la producción de sebo, matifica el rostro y mantiene la piel limpia y fresca por más tiempo.',
        image: IMAGES.about9,
        advantages: [
            'Regulación de la producción excesiva de sebo.',
            'Efecto matificante: adiós al brillo en la zona T.',
            'Poros más cerrados y menos visibles.',
            'Menor tendencia a puntos negros y brotes.',
            'Piel fresca y limpia durante más tiempo.',
            'Recomendaciones de productos según tu tipo de piel.'
        ],
        phases: [
            { number: '01', title: 'Diagnóstico de Oleosidad', description: 'Evaluación del nivel de grasa, tamaño de poros y zonas con más brillo.' },
            { number: '02', title: 'Limpieza Profunda', description: 'Limpieza seborreguladora y exfoliación para destapar los poros.' },
            { number: '03', title: 'Mascarilla Absorbente', description: 'Mascarilla de arcilla y activos astringentes que absorben el exceso de sebo.' },
            { number: '04', title: 'Equilibrio y Matificación', description: 'Hidratante oil-free, protector solar matificante y pautas de cuidado diario.' }
        ]
    }
};
