"use client"
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import { IMAGES, holoCss } from '@/constant/theme';
import { ServiceDetailData } from '@/constant/serviceDetails';
import CustomDatePicker from './CustomDatePicker';
import CustomTimePicker from './CustomTimePicker';

interface ServiceDetailLayoutProps {
    service: ServiceDetailData;
}

export default function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
    const [fullName, setFullName] = useState('');
    const [date, setDate] = useState(() => {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    });
    const [time, setTime] = useState('');

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `*SOLICITUD DE RESERVA - THPro S.R.L.*%0A%0A` +
            `*Servicio:* ${encodeURIComponent(service.title)}%0A` +
            `*Nombre Completo:* ${encodeURIComponent(fullName || 'No especificado')}%0A` +
            `*Fecha de Reserva:* ${encodeURIComponent(date || 'A convenir')}%0A` +
            `*Hora de Reserva:* ${encodeURIComponent(time || 'A convenir')}%0A` +
            `*Consulta:* Deseo agendar una sesión de ${encodeURIComponent(service.title)}.`;
        window.open(`https://api.whatsapp.com/send?phone=59173087757&text=${msg}`, '_blank');
    };

    return (
        <Fragment>
            <Header columnstand="" />
            <main className="page-content">
                <style>{`
                    html,
                    body,
                    #bg,
                    .page-wraper,
                    .page-content,
                    main.page-content {
                        background: #f4f5f7 !important;
                        background-color: #f4f5f7 !important;
                        margin-top: 0 !important;
                        padding-top: 0 !important;
                    }

                    /* Encabezado con imagen pura de EsteticaFacial.png, SIN ningún efecto, filtro ni mezcla */
                    .service-clean-header {
                        width: 100% !important;
                        margin: 0 !important;
                        border: none !important;
                        padding: 60px 20px !important;
                        ${holoCss(0.45)}
                        text-align: center !important;
                        box-sizing: border-box !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: center !important;
                    }
                    .service-clean-header::before,
                    .service-clean-header::after {
                        display: none !important;
                        content: none !important;
                    }
                    .service-clean-title {
                        font-size: clamp(28px, 4vw, 48px) !important;
                        font-weight: 800 !important;
                        line-height: 1.2 !important;
                        margin: 0 !important;
                        color: #ffffff !important;
                        letter-spacing: -0.3px !important;
                        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
                        text-align: center !important;
                    }

                    /* Contenedor Unificado: Fondo Blanco Ceniza Continuo #f4f5f7, 26px padding */
                    .service-clean-wrapper {
                        background: #f4f5f7 !important;
                        background-color: #f4f5f7 !important;
                        padding: 26px !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                    }
                    .service-clean-container {
                        max-width: 100% !important;
                        width: 100% !important;
                        margin: 0 auto !important;
                        padding: 0 !important;
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 36px !important;
                    }

                    /* Tarjetas limpias: blanco puro #ffffff, borde 2px rosa #9D174D, sin sombra */
                    .service-clean-card {
                        background-color: #ffffff !important;
                        background: #ffffff !important;
                        border: 2px solid #FCE7F3 !important;
                        border-radius: 20px !important;
                        padding: 26px !important;
                        box-shadow: none !important;
                        box-sizing: border-box !important;
                        width: 100% !important;
                    }
                    .service-card-title {
                        color: #500724 !important;
                        font-size: clamp(20px, 2vw, 26px) !important;
                        font-weight: 800 !important;
                        margin: 0 0 18px 0 !important;
                        line-height: 1.25 !important;
                        text-shadow: none !important;
                    }

                    /* 2 Columnas 50% / 50% lado a lado para ¿En qué consiste? y Ventajas */
                    .service-twocol-row {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        gap: 26px !important;
                        width: 100% !important;
                        align-items: stretch !important;
                    }
                    .service-col-card {
                        height: 100% !important;
                        display: flex !important;
                        flex-direction: column !important;
                        justify-content: flex-start !important;
                        box-sizing: border-box !important;
                    }
                    .service-desc-text {
                        color: #555555 !important;
                        font-size: 15.5px !important;
                        line-height: 1.7 !important;
                        margin: 0 0 20px 0 !important;
                        text-shadow: none !important;
                    }
                    .service-clean-img-box {
                        border-radius: 18px !important;
                        overflow: hidden !important;
                        border: 2px solid #FCE7F3 !important;
                        width: 100% !important;
                        height: 390px !important;
                        min-height: 360px !important;
                        position: relative !important;
                        margin-top: auto !important;
                        box-shadow: none !important;
                    }
                    .service-clean-img {
                        width: 100% !important;
                        height: 100% !important;
                        object-fit: cover !important;
                        display: block !important;
                    }

                    /* Ventajas: Lista limpia, super puntual y SIN marco/recuadro individual */
                    .service-adv-list {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 16px !important;
                        justify-content: flex-start !important;
                        padding: 4px 0 !important;
                    }
                    .service-adv-item {
                        display: flex !important;
                        align-items: flex-start !important;
                        gap: 14px !important;
                        padding: 0 !important;
                        background: transparent !important;
                        background-color: transparent !important;
                        border: none !important;
                        box-shadow: none !important;
                        border-radius: 0 !important;
                    }
                    .service-adv-badge {
                        width: 22px !important;
                        height: 22px !important;
                        border-radius: 50% 50% 0% 50% !important;
                        background-color: #9D174D !important;
                        color: #ffffff !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        flex-shrink: 0 !important;
                        font-size: 12px !important;
                        margin-top: 2px !important;
                    }
                    .service-adv-text {
                        color: #500724 !important;
                        font-size: 15px !important;
                        font-weight: 600 !important;
                        line-height: 1.45 !important;
                        margin: 0 !important;
                        text-shadow: none !important;
                    }

                    /* ========================================================
                       SECCIÓN DE RESERVA: IDÉNTICA A CONSULTATIONSECTION (HOME)
                       ======================================================== */
                    .consultation-header {
                        text-align: center !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: center !important;
                        margin-top: 0 !important;
                        margin-bottom: 26px !important;
                        padding: 0 !important;
                    }
                    .consultation-title {
                        color: #500724 !important;
                        font-size: clamp(24px, 2.4vw, 36px) !important;
                        font-weight: 800 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        line-height: 1.15 !important;
                        text-align: center !important;
                        text-shadow: none !important;
                    }
                    .consultation-white-card {
                        background-color: #ffffff !important;
                        background: #ffffff !important;
                        border: 2px solid #FCE7F3 !important;
                        border-radius: 20px !important;
                        padding: 26px !important;
                        box-shadow: none !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                        margin: 0 !important;
                    }
                    .consultation-form {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 26px !important;
                    }
                    .form-inputs-row {
                        display: grid !important;
                        grid-template-columns: 1.2fr 1.8fr !important;
                        gap: 26px !important;
                        align-items: start !important;
                    }
                    .consultation-name-group {
                        width: 100% !important;
                    }
                    .consultation-datetime-wrapper {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        gap: 26px !important;
                        width: 100% !important;
                    }
                    .consultation-input-group {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center !important;
                        gap: 10px !important;
                        width: 100% !important;
                    }
                    .consultation-input-group label {
                        color: #500724 !important;
                        font-size: 15px !important;
                        font-weight: 700 !important;
                        margin: 0 !important;
                        text-align: center !important;
                        width: 100% !important;
                        letter-spacing: 0.1px !important;
                        text-shadow: none !important;
                    }
                    .consultation-card-box {
                        background-color: #ffffff !important;
                        background: #ffffff !important;
                        border: 2px solid #FCE7F3 !important;
                        border-radius: 16px !important;
                        padding: 0 16px !important;
                        width: 100% !important;
                        height: 52px !important;
                        box-sizing: border-box !important;
                        box-shadow: none !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        position: relative !important;
                        transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease !important;
                    }
                    .consultation-card-box.consultation-clickable-card {
                        cursor: pointer !important;
                    }
                    .consultation-card-box:hover {
                        box-shadow: none !important;
                        transform: translateY(-2px) !important;
                    }
                    .consultation-card-input {
                        background: transparent !important;
                        background-color: transparent !important;
                        border: none !important;
                        outline: none !important;
                        width: 100% !important;
                        height: 100% !important;
                        font-size: 16px !important;
                        font-weight: 700 !important;
                        color: #500724 !important;
                        text-align: center !important;
                        font-family: inherit !important;
                        box-sizing: border-box !important;
                        -webkit-appearance: none !important;
                        -moz-appearance: none !important;
                        appearance: none !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        text-shadow: none !important;
                    }
                    .consultation-name-input {
                        cursor: text !important;
                    }

                    /* Botón de generar reserva idéntico a la de afuera */
                    .consultation-btn-container {
                        display: flex !important;
                        justify-content: center !important;
                        align-items: center !important;
                        gap: 16px !important;
                        flex-wrap: wrap !important;
                        margin-top: 4px !important;
                    }
                    .btn-generate-reservation {
                        background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                        color: #ffffff !important;
                        border: 2px solid #F3167E !important;
                        border-radius: 14px !important;
                        padding: 13px 44px !important;
                        font-size: 16px !important;
                        font-weight: 800 !important;
                        cursor: pointer !important;
                        text-align: center !important;
                        letter-spacing: 0.3px !important;
                        transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease !important;
                        box-shadow: none !important;
                        text-shadow: none !important;
                    }
                    .btn-generate-reservation:hover {
                        background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important; filter: brightness(1.12) !important;
                        border-color: #CE1470 !important;
                        color: #ffffff !important;
                        transform: translateY(-2px) !important;
                        box-shadow: none !important;
                    }
                    .service-btn-back {
                        background: transparent !important;
                        border: 2px solid #FCE7F3 !important;
                        color: #500724 !important;
                        font-size: 15px !important;
                        font-weight: 800 !important;
                        padding: 12px 28px !important;
                        border-radius: 14px !important;
                        text-decoration: none !important;
                        display: inline-flex !important;
                        align-items: center !important;
                        gap: 8px !important;
                        transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease !important;
                        text-shadow: none !important;
                    }
                    .service-btn-back:hover {
                        background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                        color: #ffffff !important;
                        transform: translateY(-2px) !important;
                    }

                    /* Redes sociales idénticas a la de afuera */
                    .consultation-socials-wrapper {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: center !important;
                        gap: 12px !important;
                        margin-top: 26px !important;
                        margin-bottom: 0 !important;
                    }
                    .consultation-socials-title {
                        color: #500724 !important;
                        font-size: 14.5px !important;
                        font-weight: 700 !important;
                        margin: 0 !important;
                        text-shadow: none !important;
                    }
                    .consultation-socials-row {
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        gap: 12px !important;
                    }
                    .consultation-social-btn {
                        width: 38px !important;
                        height: 38px !important;
                        border-radius: 50% !important;
                        background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                        color: #ffffff !important;
                        display: inline-flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        text-decoration: none !important;
                        font-size: 15px !important;
                        border: 1px solid #F3167E !important;
                        box-shadow: none !important;
                        transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease !important;
                    }
                    .consultation-social-btn svg,
                    .consultation-social-btn i {
                        color: #ffffff !important;
                    }
                    .consultation-social-btn:hover {
                        background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important; filter: brightness(1.12) !important;
                        border-color: #CE1470 !important;
                        color: #ffffff !important;
                        transform: translateY(-2px) scale(1.08) !important;
                    }

                    @media (max-width: 991px) {
                        .service-twocol-row {
                            grid-template-columns: 1fr !important;
                        }
                        .form-inputs-row {
                            display: flex !important;
                            flex-direction: column !important;
                            gap: 16px !important;
                        }
                        .consultation-datetime-wrapper {
                            display: grid !important;
                            grid-template-columns: 1fr 1fr !important;
                            gap: 14px !important;
                        }
                        .service-clean-img-box {
                            height: 300px !important;
                            min-height: 260px !important;
                        }
                        .consultation-white-card {
                            padding: 24px 18px !important;
                        }
                    }
                    @media (max-width: 640px) {
                        .consultation-datetime-wrapper {
                            grid-template-columns: 1fr !important;
                            gap: 16px !important;
                            width: 100% !important;
                            max-width: 320px !important;
                            margin: 0 auto !important;
                        }
                        .consultation-name-group {
                            max-width: 320px !important;
                            margin: 0 auto !important;
                        }
                        .consultation-card-box {
                            width: 100% !important;
                            max-width: 320px !important;
                            margin: 0 auto !important;
                        }
                        .consultation-white-card {
                            padding: 20px 14px !important;
                        }
                    }
                `}</style>

                {/* 1. Encabezado limpio y compacto (solo el nombre del servicio, sin marcas adicionales ni brillos) */}
                <div className="service-clean-header">
                    <h1 className="service-clean-title">{service.title}</h1>
                </div>

                {/* 2. Contenido unificado: 26px padding, fondo blanco ceniza #f4f5f7 */}
                <div className="service-clean-wrapper">
                    <div className="container" style={{ maxWidth: '100%', width: '100%', padding: '0', margin: '0 auto' }}>
                        <div className="service-clean-container">
                            
                            {/* Apartado 1: 2 Columnas lado a lado (50% ¿En qué consiste? y 50% Ventajas) */}
                            <div className="service-twocol-row wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                {/* Columna Izquierda: ¿En qué consiste el tratamiento? */}
                                <div className="service-clean-card service-col-card">
                                    <h2 className="service-card-title">¿En qué consiste el tratamiento?</h2>
                                    <p className="service-desc-text">{service.description}</p>
                                    <div className="service-clean-img-box">
                                        <Image 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="service-clean-img"
                                            width={900}
                                            height={600}
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Columna Derecha: Ventajas de [Servicio] (Puntuales y sin marcos individuales) */}
                                <div className="service-clean-card service-col-card">
                                    <h2 className="service-card-title">Ventajas de {service.title}</h2>
                                    <div className="service-adv-list">
                                        {service.advantages.map((adv, idx) => (
                                            <div key={idx} className="service-adv-item">
                                                <div className="service-adv-badge">
                                                    <i className="feather icon-check" />
                                                </div>
                                                <p className="service-adv-text">{adv}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Apartado 2: Reserva de Consulta (ESTILO IDÉNTICO AL DE AFUERA / HOME) */}
                            <div className="consultation-section-block">
                                {/* Título centrado idéntico al de afuera */}
                                <div className="consultation-header wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="consultation-title">Reserva tu Consulta de {service.title}</h2>
                                </div>

                                {/* Tarjeta blanca con borde morado idéntica a la de afuera */}
                                <div className="consultation-white-card wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.8s">
                                    <form className="consultation-form" onSubmit={handleBooking}>
                                        {/* Fila 1: Nombre Completo, Fecha de Reserva y Hora de Reserva */}
                                        <div className="form-inputs-row">
                                            <div className="consultation-input-group consultation-name-group">
                                                <label>Nombre Completo</label>
                                                <div className="consultation-card-box">
                                                    <input 
                                                        type="text" 
                                                        required 
                                                        className="consultation-card-input consultation-name-input" 
                                                        value={fullName} 
                                                        onChange={(e) => setFullName(e.target.value)} 
                                                    />
                                                </div>
                                            </div>

                                            {/* Fecha de Reserva y Hora de Reserva SIEMPRE a la par en una misma línea */}
                                            <div className="consultation-datetime-wrapper">
                                                <div className="consultation-input-group">
                                                    <label>Fecha de Reserva</label>
                                                    <CustomDatePicker 
                                                        value={date} 
                                                        onChange={(newDate) => setDate(newDate)} 
                                                        minDate={date} 
                                                    />
                                                </div>
                                                <div className="consultation-input-group">
                                                    <label>Hora de Reserva</label>
                                                    <CustomTimePicker 
                                                        value={time} 
                                                        onChange={(newTime) => setTime(newTime)} 
                                                        selectedDate={date}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Botón de generar reserva y volver a servicios */}
                                        <div className="consultation-btn-container">
                                            <button type="submit" className="btn-generate-reservation">
                                                Agendar Consulta
                                            </button>
                                            <Link href="/#servicios" className="service-btn-back">
                                                Volver a Servicios
                                            </Link>
                                        </div>
                                    </form>

                                    {/* Redes sociales abajo de la tarjeta */}
                                    <div className="consultation-socials-wrapper">
                                        <span className="consultation-socials-title">Contáctanos en nuestras redes sociales:</span>
                                        <div className="consultation-socials-row">
                                            {/* TikTok */}
                                            <a 
                                                href="https://www.tiktok.com/@thpro.srl?fbclid=IwY2xjawVMjHRleHRuA2FlbQIxMABwZG9mAWJyaWQRMURBUDFjVEFZWVlUQ1NBbTFzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe6ldmv3AKBfg2ARseTHbQ0NEMLsPI_4eGZjjWCnKW5xOTp2Lbm57dI74uNUc_aem_IUwlEb8tjW6Ki48en0YRfg" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="consultation-social-btn" 
                                                title="TikTok THPro S.R.L."
                                            >
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                                                </svg>
                                            </a>

                                            {/* Facebook */}
                                            <a 
                                                href="https://www.facebook.com/THProSRL/" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="consultation-social-btn" 
                                                title="Facebook THPro S.R.L."
                                            >
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>

                                            {/* Instagram */}
                                            <a 
                                                href="https://www.instagram.com/thpro.srl?fbclid=IwY2xjawVMjGJleHRuA2FlbQIxMABwZG9mAWJyaWQRMURBUDFjVEFZWVlUQ1NBbTFzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe5ERXdfmhMJgd7Z0_RnEiePArUENUE1XuEf6WXIXCTOjoSWHgyeDppfnvapU_aem_8bF3MAgFhRhYE0FmVikkMA" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="consultation-social-btn" 
                                                title="Instagram THPro S.R.L."
                                            >
                                                <i className="fa-brands fa-instagram" />
                                            </a>

                                            {/* WhatsApp */}
                                            <a 
                                                href="https://api.whatsapp.com/send?phone=59173087757&text=Hola%20THPro%20S.R.L.,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20est%C3%A9tica%20facial." 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="consultation-social-btn" 
                                                title="WhatsApp: 73087757"
                                            >
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                                </svg>
                                            </a>

                                            {/* Gmail */}
                                            <a 
                                                href="https://mail.google.com/mail/?view=cm&fs=1&to=gerencia@thpro.com.bo&su=Consulta%20Reserva%20THPro%20S.R.L." 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="consultation-social-btn" 
                                                title="Gmail: gerencia@thpro.com.bo"
                                            >
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
}
