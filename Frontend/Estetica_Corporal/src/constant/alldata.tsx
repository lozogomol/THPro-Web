import CountUp from "react-countup"
import { IMAGES, SVGICONS } from "./theme"
import { StaticImageData } from "next/image";



interface MenuItemContent {
  title: string;
  to: string;
  image?: string | StaticImageData; 
}

interface MenuItem {
  title: string;
  to? : string | undefined;
  classChange?: string;
  content?: MenuItemContent[];
}

// header menu data 
export const menudata : MenuItem[] =[
    {
        title: "Especialidades",
        classChange: "sub-menu-down",
        content: [
            { title: "Fisioterapia", to: "/fisioterapia", image: IMAGES.demohome2, },
            { title: "Estética Corporal", to: "/estetica-corporal", image: IMAGES.demohome1, },
            { title: "Estética Facial", to: "/estetica-facial", image: IMAGES.demohome3, },
        ],
    },
    {
        title: "Servicios de Estética Corporal",
        classChange: "sub-menu-down",
        content: [
            { title: "Maderoterapia", to: "/maderoterapia" },
            { title: "Drenaje Linfático", to: "/drenaje-linfatico" },
            { title: "Mesoterapia", to: "/mesoterapia" },
            { title: "Reducción de Medidas", to: "/reduccion-de-medidas" },
        ],
    },
]
// clientswiper  
export const clientswiperdata = [
    { image: IMAGES.logomiddle1, delay: '0.1s', },
    { image: IMAGES.logomiddle2, delay: '0.2s', },
    { image: IMAGES.logomiddle3, delay: '0.3s', },
    { image: IMAGES.logomiddle4, delay: '0.4s', },
    { image: IMAGES.logomiddle1, delay: '0.5s', },
    { image: IMAGES.logomiddle2, delay: '0.6s', },
    { image: IMAGES.logomiddle3, delay: '0.7s', },
    { image: IMAGES.logomiddle4, delay: '0.8s', },
]
// compareswiper 
export const compareswiperdata = [
    { image: IMAGES.comparemiddle1, delay: '0.1s', },
    { image: IMAGES.comparemiddle2, delay: '0.2s', },
    { image: IMAGES.comparemiddle3, delay: '0.3s', },
    { image: IMAGES.comparemiddle4, delay: '0.4s', },
    { image: IMAGES.comparemiddle5, delay: '0.5s', },
    { image: IMAGES.comparemiddle1, delay: '0.6s', },
    { image: IMAGES.comparemiddle2, delay: '0.7s', },
    { image: IMAGES.comparemiddle3, delay: '0.8s', },
]
// contactmap 
export const mapdata = [
    { delay: '0.6s', title: 'United States', flag: IMAGES.unitedstate, },
    { delay: '0.8s', title: 'Canada', flag: IMAGES.cananda, },
]
// highlyteam 
export interface SwiperTeamItem {
    id: number;
    image: any;
    image2: any;
    name: string;
    position: string;
    skills: string[];
    description: string;
}

export const swiperteamdata: SwiperTeamItem[] = [
    { 
        id: 1, 
        image: IMAGES.teamsmall1, 
        image2: IMAGES.teamlarge1, 
        name: "Lic. Valeria Mendoza",
        position: "Fisioterapia Deportiva",
        skills: ["Readaptación Física", "Descarga Muscular"],
        description: "Especialista en lesiones deportivas y optimización del rendimiento musculoesquelético."
    },
    { 
        id: 2, 
        image: IMAGES.teamsmall2, 
        image2: IMAGES.teamlarge2, 
        name: "Lic. Mateo Morales",
        position: "Rehabilitación Traumatológica",
        skills: ["Terapia Postoperatoria", "Movilidad Articular"],
        description: "Recuperación efectiva de fracturas, esguinces y cirugías osteoarticulares."
    },
    { 
        id: 3, 
        image: IMAGES.teamsmall3, 
        image2: IMAGES.teamlarge3, 
        name: "Lic. Camila Fernández",
        position: "Fisioterapia Pediátrica",
        skills: ["Desarrollo Psicomotor", "Estimulación Temprana"],
        description: "Atención cálida y especializada para el desarrollo motor de bebés y niños."
    },
    { 
        id: 4, 
        image: IMAGES.teamsmall4, 
        image2: IMAGES.teamlarge4, 
        name: "Lic. Alejandro Soto",
        position: "Fisioterapia Geriátrica",
        skills: ["Equilibrio y Marcha", "Autonomía Funcional"],
        description: "Cuidado integral para adultos mayores enfocado en preservar vitalidad e independencia."
    },
    { 
        id: 5, 
        image: IMAGES.teamsmall5, 
        image2: IMAGES.teamlarge5, 
        name: "Lic. Sofía Villalba",
        position: "Fisioterapia de Columna",
        skills: ["Reeducación Postural", "Ergonomía Laboral"],
        description: "Tratamiento avanzado del dolor lumbar, cervical y corrección de vicios posturales."
    },
    { 
        id: 6, 
        image: IMAGES.teamsmall1, 
        image2: IMAGES.teamlarge1, 
        name: "Lic. Daniel Rojas",
        position: "Fisioterapia a Domicilio",
        skills: ["Rehabilitación Funcional", "Terapia en el Hogar"],
        description: "Atención personalizada para pacientes con movilidad reducida en la comodidad de su hogar."
    },
    { 
        id: 7, 
        image: IMAGES.teamsmall2, 
        image2: IMAGES.teamlarge2, 
        name: "Lic. Lucía Paredes",
        position: "Terapia Miofascial y Masaje",
        skills: ["Liberación Miofascial", "Masaje Descontracturante"],
        description: "Alivio profundo de sobrecargas musculares, contracturas y estrés tensional."
    },
    { 
        id: 8, 
        image: IMAGES.teamsmall3, 
        image2: IMAGES.teamlarge3, 
        name: "Lic. Gabriel Navarro",
        position: "Kinesiología y Bienestar",
        skills: ["Ejercicio Terapéutico", "Prevención de Lesiones"],
        description: "Readaptación muscular guiada para prevenir recidivas y fortalecer el bienestar corporal."
    },
]
// newsupdat 
export const newsdata = [
    { image: IMAGES.bloggrid1, delay: '0.6s', },
    { image: IMAGES.bloggrid2, delay: '0.8s', },
    { image: IMAGES.bloggrid3, delay: '1.0s', },
]
// question  
export const accordiondata2 = [
    { key: "0", title: 'How much do you charge for pedicure ?' },
    { key: "1", title: 'What types of treatments do you offer?' },
    { key: "2", title: 'How do i book my appointment ?' },
    { key: "3", title: 'Can i cancel my appointment ?' },
]
export const accordionnavdata = [
    { i: 1, id: 'pills-tab1', target: '#pills-target-tabs1', title: 'Maderoterapia', },
    { i: 2, id: 'pills-tab2', target: '#pills-target-tabs2', title: 'Drenaje Linfático', },
    { i: 3, id: 'pills-tab3', target: '#pills-target-tabs3', title: 'Mesoterapia', },
    { i: 4, id: 'pills-tab4', target: '#pills-target-tabs4', title: 'Reducción de Medidas', },
    { i: 5, id: 'pills-tab5', target: '#pills-target-tabs5', title: 'Masajes Relajantes', },
]
// servicedata 
export const servicedata = [
    { id: 1, title: 'Maderoterapia', svg: '', image: IMAGES.service1, delay: '0.2s', },
    { id: 2, title: 'Drenaje Linfático', svg: '', image: IMAGES.service2, delay: '0.4s', },
    { id: 3, title: 'Mesoterapia', svg: '', image: IMAGES.service3, delay: '0.6s', },
    { id: 4, title: 'Reducción de Medidas', svg: '', image: IMAGES.service4, delay: '0.8s', },
]
// sidebar 
export const tagdata = [
    { title: 'Acupressure', num: '(10)', },
    { title: 'Allgemein', num: '(5)', },
    { title: 'Blood', num: '(17)', },
    { title: 'Food', num: '(13)', },
    { title: 'Health', num: '(06)', },
    { title: 'Mental Health', num: '(17)', },
    { title: 'Therapy', num: '(13)', },
    { title: 'Walking', num: '(06)', },
]
export const sidebarpostdata = [
    { image: IMAGES.blogsmall1, content:"The New Face of Care Blending Empathy with Expertise"},
    { image: IMAGES.blogsmall2, content:"The Art of Managing Business and Patient Care"},
    { image: IMAGES.blogsmall3, content:"Here Care Expertise Elevating the Patient Experience"},
]
// testimonialswiper 
export const testiswiperdata = [
    { avatar:IMAGES.smallavatar1,image: IMAGES.testimonial1, delay: '0.6', name:"Kenneth Fong"},
    { avatar:IMAGES.smallavatar2,image: IMAGES.testimonial2, delay: '0.8', name:"Rashid Martel"},
    { avatar:IMAGES.smallavatar3,image: IMAGES.testimonial1, delay: '1.0', name:"Faisal Darwish"},
]
// wecare 
export const counterdata = [
    { title: "Pacientes Atendidos", count: <CountUp end={25} duration={4} />, span: 'k+', delay: '0.6s', },
    { title: "Especialistas Certificados", count: <CountUp end={30} duration={4} />, span: '+', delay: '0.8s', },
    { title: "Años de Experiencia", count: <CountUp end={15} duration={4} />, span: '+', delay: '1.0s', },
]
// wecare2 
export const wecaredata2 = [
    {
        id: 1,
        title: 'Maderoterapia',
        slug: 'maderoterapia',
        number: '01',
        delay: '0.2s',
        description: 'Masaje con instrumentos de madera que moldea la figura, reduce la celulitis y reafirma la piel de forma natural.',
        features: [
            'Moldea y estiliza la figura',
            'Reduce la apariencia de la celulitis',
            'Reafirma abdomen, piernas y glúteos',
            'Activa la circulación sanguínea',
        ],
    },
    {
        id: 2,
        title: 'Drenaje Linfático',
        slug: 'drenaje-linfatico',
        number: '02',
        delay: '0.3s',
        description: 'Masaje suave y rítmico que elimina líquidos retenidos y toxinas, ideal para la hinchazón y postoperatorios estéticos.',
        features: [
            'Disminuye la retención de líquidos',
            'Alivia las piernas cansadas y pesadas',
            'Elimina toxinas del organismo',
            'Complemento ideal en postoperatorios',
        ],
    },
    {
        id: 3,
        title: 'Mesoterapia',
        slug: 'mesoterapia',
        number: '03',
        delay: '0.4s',
        description: 'Microdosis de activos aplicadas en zonas específicas para tratar grasa localizada, celulitis y flacidez.',
        features: [
            'Actúa sobre la grasa localizada',
            'Mejora la celulitis y textura de la piel',
            'Reafirma zonas con flacidez',
            'Potencia otros tratamientos corporales',
        ],
    },
    {
        id: 4,
        title: 'Reducción de Medidas',
        slug: 'reduccion-de-medidas',
        number: '04',
        delay: '0.5s',
        description: 'Programa integral con técnicas manuales y aparatología para reducir centímetros y moldear la silueta.',
        features: [
            'Reducción de centímetros por zona',
            'Técnicas manuales y aparatología',
            'Control de medidas en cada sesión',
            'Plan personalizado según tus metas',
        ],
    },
]
// whychoose 
export const accordiondata = [
    { key: "0", image: IMAGES.blogsmall1, delay: '0.4s', title: 'Experiencia en Estética Corporal', },
    { key: "1", image: IMAGES.blogsmall2, delay: '0.6s', title: 'Patient-Centered Care', },
    { key: "2", image: IMAGES.blogsmall3, delay: '0.8s', title: 'Flexible Appointment Scheduling', },
]
// faqdata 
export const pricingplandata = [
    {
        vertical: 'PROFESSIONAL', image: IMAGES.pricetable1, title: 'Maintenance Package', month: '$49', year: '$1049',
        feature: <ul className="pricingtable-features">
            <li>Sesión de maderoterapia</li>
            <li>Polishing</li>
            <li>Filling</li>
            <li>Gum care</li>
            <li>Flossing</li>
        </ul>,
    },
    {
        vertical: 'FAMILY PACK', image: IMAGES.pricetable2, title: 'Paquete Reductor', month: '$99', year: '$1099',
        feature: <ul className="pricingtable-features">
            <li>Root canal treatment</li>
            <li>Braces</li>
            <li>Implants</li>
            <li>Bridges</li>
            <li>Crown</li>
        </ul>,
    },
    {
        vertical: 'PROFESSIONAL', image: IMAGES.pricetable3, title: 'Restorative Procedures', month: '$49', year: '$1049',
        feature: <ul className="pricingtable-features">
            <li>Missing teeth</li>
            <li>Bridges</li>
            <li>Tooth bonding</li>
            <li>Porcelain veneers</li>
            <li>Invisalign</li>
        </ul>,
    },
    {
        vertical: 'FAMILY PACK', image: IMAGES.pricetable4, title: 'Offered Services', month: '$99', year: '$1099',
        feature: <ul className="pricingtable-features">
            <li>Sesión de maderoterapias</li>
            <li>Evaluación corporal</li>
            <li>X-rays</li>
            <li>Fluoride treatments</li>
            <li>Tratamientos linfáticos</li>
        </ul>,
    },
]
// pages 
// aboutus2 
export const aboutus2data = [
    { id: 1, delay: '0.2s', title: 'Mission', },
    { id: 2, delay: '0.4s', title: 'Vision', },
]


// testimoniol 
export const testidata = [
    { image: IMAGES.testimonial1, classChange: 'testimonial-media', name:"Nashid Martines"},
    { image: IMAGES.smallavatar3, classChange: 'testimonial-detail', name:"Kareem Martines"},
    { image: IMAGES.testimonial2, classChange: 'testimonial-media',name:"Samir Martines" },
    { image: IMAGES.smallavatar2, classChange: 'testimonial-detail', name:"Hamid Serrano"},
    { image: IMAGES.testimonial2, classChange: 'testimonial-media', name:"Tariq Mendez"},
    { image: IMAGES.smallavatar1, classChange: 'testimonial-detail', name:"Nasir Qadiri"},
]
// bloggrid 


export interface BlogItem {
  image: string;
  dealy: string;
  title: string;
}
export const blogdata = [
    { image: IMAGES.bloggrid1, dealy: '0.2s', title: 'Radiant reflections expert dermatology and skin.', },
    { image: IMAGES.bloggrid2, dealy: '0.4s', title: 'Glow guide your path to perfect skin health', },
    { image: IMAGES.bloggrid3, dealy: '0.6s', title: 'Brilliant skin blog your dermatology care resource', },
    { image: IMAGES.bloggrid4, dealy: '0.8s', title: 'Radiant reflections expert dermatology and skin.', },
    { image: IMAGES.bloggrid5, dealy: '1.0s', title: 'Glow guide your path to perfect skin health', },
    { image: IMAGES.bloggrid6, dealy: '1.2s', title: 'Brilliant skin blog your dermatology care resource', },
]
// serivece details 2 
export const accordiondata3 = [
    { key: "0", title: 'Improved Stability and Comfort:', },
    { key: "1", title: 'Enhanced Chewing and Speaking Ability', },
    { key: "2", title: 'Better aesthetics and higher self-confidence', },
    { key: "3", title: 'Long-Term Durability', },
]
// service 2
export const service2data = [
    { svg: '', image: IMAGES.service1, number: '01', title: 'Maderoterapia', },
    { svg: '', image: IMAGES.service2, number: '02', title: 'Drenaje Linfático', columnstand: 'right', },
    { svg: '', image: IMAGES.service3, number: '03', title: 'Mesoterapia', },
    { svg: '', image: IMAGES.service4, number: '04', title: 'Reducción de Medidas', columnstand: 'right', },
]
// footer 
export const footerdata = [
    {
        title: 'Our Services', span1: 'Emergency Care', span2: 'Operation Theater', span3: 'Medical Checkup', span4: 'Diagnostic Center', span5: 'Outdoor Checkup',
        link1: '/service-detail', link2: '/service-detail', link3: '/service-detail', link4: '/service-detail', link5: '/service-detail',
    },
    {
        title: 'Useful Links', span1: 'Privacy Policy', span2: 'Terms & Conditions', span3: 'Contact Us', span4: 'Latest News', span5: 'Our Sitemap',
        link1: '#', link2: '#', link3: '/contact-us', link4: '/blog-grid', link5: '#',
    },
    {
        title: 'Our Stores', span1: 'New York', span2: 'London SF', span3: 'Edinburgh', span4: 'Los Angeles', span5: 'Las Vegas',
        link1: '#', link2: '#', link3: '#', link4: '#', link5: '#',
    },
    {
        title: 'Quick Links', span1: 'About Us', span2: 'Our Services', span3: 'Our Team', span4: 'Appointments', span5: 'Contact Us',
        link1: '/about-us', link2: '/services', link3: '/team', link4: '/appointment', link5: '/contact-us',
    },
]

