"use client"
import { IMAGES, ANIMBG, ANIMBG_STYLE, holoCss } from "../constant/theme";
import { counterdata } from "../constant/alldata";
import Image from "next/image";

function Wecare() {
    return (
        <div id="servicios-fisioterapia" className="wecare-main-container">
            <style>{`
                .wecare-main-container {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 !important;
                    margin: 0 0 26px 0 !important;
                }
                .wecare-services-row {
                    display: flex !important;
                    align-items: stretch !important;
                    gap: 26px !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .wecare-img-col {
                    padding: 0 !important;
                    margin: 0 !important;
                    position: relative !important;
                    display: flex !important;
                    align-items: stretch !important;
                    justify-content: center !important;
                }
                .wecare-content-col {
                    padding: 0 !important;
                    margin: 0 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: flex-start !important;
                    height: 100% !important;
                }
                .wecare-content-col .content-info {
                    margin: 0 !important;
                    padding: 0 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 26px !important;
                    height: 100% !important;
                    justify-content: flex-start !important;
                }
                .wecare-img-container {
                    width: 100% !important;
                    height: 100% !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: stretch !important;
                    position: relative !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .wecare-img-wrapper {
                    position: relative !important;
                    display: flex !important;
                    width: 100% !important;
                    height: 100% !important;
                    max-width: 100% !important;
                    border-radius: 20px !important;
                    overflow: hidden !important;
                    box-shadow: none !important;
                }
                .wecare-img-custom {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover !important;
                    object-position: center top !important;
                    border-radius: 20px !important;
                    border: 2px solid #E9D8FF !important;
                    display: block !important;
                    margin: 0 !important;
                }
                /* Badge 150k Pacientes recuperados con redes sociales e iconos morados - Abajo */
                .wecare-patient-badge {
                    position: absolute !important;
                    bottom: 22px !important;
                    top: auto !important;
                    left: 22px !important;
                    right: 22px !important;
                    width: calc(100% - 44px) !important;
                    background: #ffffff !important;
                    backdrop-filter: none !important;
                    -webkit-backdrop-filter: none !important;
                    border: 2px solid #E9D8FF !important;
                    border-radius: 8px !important;
                    box-shadow: none !important;
                    padding: 10px 16px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    gap: 12px !important;
                    z-index: 5 !important;
                    transition: transform 0.25s ease !important;
                    box-sizing: border-box !important;
                }
                .wecare-patient-badge:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: none !important;
                }
                .wecare-badge-socials {
                    display: flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                    flex-shrink: 0 !important;
                }
                .wecare-badge-icon-btn {
                    width: 32px !important;
                    height: 32px !important;
                    border-radius: 8px !important;
                    background: #4B1D96 !important;
                    color: #ffffff !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-decoration: none !important;
                    font-size: 14px !important;
                    border: 1px solid #4B1D96 !important;
                    box-shadow: none !important;
                    transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease !important;
                }
                .wecare-badge-icon-btn svg,
                .wecare-badge-icon-btn i {
                    color: #ffffff !important;
                    display: inline-block !important;
                    vertical-align: middle !important;
                }
                .wecare-badge-icon-btn:hover {
                    background: #7B3FE4 !important;
                    border-color: #7B3FE4 !important;
                    color: #ffffff !important;
                    transform: translateY(-2px) scale(1.08) !important;
                    box-shadow: none !important;
                }
                /* Encabezado con 0 margen para que gap: 22px aplique EXACTAMENTE 22px abajo */
                .wecare-services-header {
                    text-align: center !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: center !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .wecare-services-header .title {
                    color: #211638 !important;
                    text-transform: none !important;
                    font-weight: 800 !important;
                    font-size: clamp(24px, 2.4vw, 36px) !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    line-height: 1.15 !important;
                    text-align: center !important;
                }
                .wecare-services-card {
                    background-color: #ffffff !important;
                    background: #ffffff !important;
                    border: 2px solid #E9D8FF !important;
                    border-radius: 20px !important;
                    padding: 26px !important;
                    box-shadow: none !important;
                    position: relative !important;
                    width: 100% !important;
                    height: auto !important;
                    display: block !important;
                    box-sizing: border-box !important;
                    margin: 0 !important;
                    flex: 0 0 auto !important;
                }
                .wecare-services-card::before {
                    display: none !important;
                }
                .wecare-services-grid {
                    display: grid !important;
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 26px !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                @media (max-width: 575px) {
                    .wecare-services-grid {
                        grid-template-columns: 1fr !important;
                        gap: 26px !important;
                    }
                }
                .wecare-services-grid ul.list-check-try {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 26px !important;
                }
                .wecare-services-grid ul.list-check-try li {
                    color: #211638 !important;
                    font-size: 15px !important;
                    font-weight: 600 !important;
                    padding: 0 0 0 34px !important;
                    margin: 0 !important;
                    position: relative !important;
                    line-height: 24px !important;
                    min-height: 24px !important;
                    display: flex !important;
                    align-items: center !important;
                    transition: color 0.25s ease, transform 0.2s ease !important;
                    cursor: pointer !important;
                    letter-spacing: 0.2px;
                }
                .wecare-services-grid ul.list-check-try li:hover {
                    color: #7B3FE4 !important;
                    transform: translateX(4px);
                }
                .wecare-services-grid ul.list-check-try li:before {
                    content: "\\e83f" !important;
                    font-family: "feather" !important;
                    position: absolute !important;
                    left: 0 !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    width: 22px !important;
                    height: 22px !important;
                    line-height: 22px !important;
                    text-align: center !important;
                    font-size: 12px !important;
                    background-color: #4B1D96 !important;
                    color: #ffffff !important;
                    border-radius: 50% 50% 0% 50% !important;
                    box-shadow: none !important;
                    transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease !important;
                }
                .wecare-services-grid ul.list-check-try li:hover:before {
                    background-color: #7B3FE4 !important;
                    box-shadow: none !important;
                    transform: translateY(-50%) scale(1.1) !important;
                }

                /* Fila de contadores reducida a la mitad (125px) */
                .wecare-counters-row {
                    display: flex !important;
                    gap: 26px !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    height: 125px !important;
                    min-height: 125px !important;
                    max-height: 125px !important;
                    flex: 0 0 125px !important;
                }
                .wecare-counter-col {
                    flex: 1 1 calc((100% - 56px) / 3) !important;
                    width: calc((100% - 56px) / 3) !important;
                    max-width: calc((100% - 56px) / 3) !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    height: 100% !important;
                    display: flex !important;
                }
                .wecare-counter-card {
                    ${ANIMBG}
                    border: 2px solid #4B1D96 !important;
                    border-radius: 20px !important;
                    padding: 12px 10px !important;
                    box-shadow: none !important;
                    height: 100% !important;
                    width: 100% !important;
                    flex: 1 1 auto !important;
                    gap: 6px !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    align-items: center !important;
                    text-align: center !important;
                    box-sizing: border-box !important;
                    transition: transform 0.25s ease, box-shadow 0.25s ease !important;
                }
                .wecare-counter-card:hover {
                    transform: translateY(-3px) !important;
                    box-shadow: none !important;
                }
                .wecare-counter-card .counter-number {
                    font-size: clamp(22px, 1.9vw, 30px) !important;
                    font-weight: 800 !important;
                    line-height: 1 !important;
                    color: #ffffff !important;
                    margin: 0 !important;
                    display: inline-flex !important;
                    flex-direction: row !important;
                    flex-wrap: nowrap !important;
                    white-space: nowrap !important;
                    align-items: baseline !important;
                    justify-content: center !important;
                }
                .wecare-counter-card .counter-number *,
                .wecare-counter-card .counter,
                .wecare-counter-card .counter span {
                    display: inline !important;
                    white-space: nowrap !important;
                    line-height: 1 !important;
                }
                .wecare-counter-card .counter-suffix {
                    color: #FFFFFF !important;
                    font-weight: 800 !important;
                    margin-left: 2px !important;
                    display: inline !important;
                    white-space: nowrap !important;
                    line-height: 1 !important;
                }
                .wecare-counter-card .counter-title {
                    font-size: clamp(11.5px, 0.85vw, 13px) !important;
                    font-weight: 600 !important;
                    color: #FFFFFF !important;
                    margin: 0 !important;
                    line-height: 1.3 !important;
                    text-transform: none !important;
                    text-align: center !important;
                }

                /* Reglas para Desktop (min-width: 992px) - El final de la foto y las tarjetas en una misma línea exacta */
                @media (min-width: 992px) {
                    .wecare-services-row {
                        flex-direction: row !important;
                        flex-wrap: nowrap !important;
                        align-items: stretch !important;
                        height: auto !important;
                        min-height: auto !important;
                    }
                    .wecare-img-col {
                        order: 1 !important;
                        flex: 0 0 calc(42% - 11px) !important;
                        width: calc(42% - 11px) !important;
                        max-width: calc(42% - 11px) !important;
                        align-self: stretch !important;
                        position: relative !important;
                        display: flex !important;
                        flex-direction: column !important;
                        height: auto !important;
                    }
                    .wecare-content-col {
                        order: 2 !important;
                        flex: 0 0 calc(58% - 11px) !important;
                        width: calc(58% - 11px) !important;
                        max-width: calc(58% - 11px) !important;
                        height: 100% !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .wecare-content-col .content-info {
                        height: 100% !important;
                        justify-content: space-between !important;
                        gap: 22px !important;
                    }
                    .wecare-img-container {
                        position: relative !important;
                        width: 100% !important;
                        height: 100% !important;
                        flex: 1 1 auto !important;
                        display: block !important;
                    }
                    .wecare-img-wrapper {
                        position: absolute !important;
                        top: 0 !important;
                        bottom: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                    }
                }

                /* Reglas para Tablet / Mobile (max-width: 991px) */
                @media (max-width: 991px) {
                    .wecare-services-row {
                        flex-direction: column !important;
                        gap: 26px !important;
                        margin-bottom: 0 !important;
                    }
                    .wecare-counters-row {
                        height: auto !important;
                        min-height: auto !important;
                        max-height: none !important;
                        flex: none !important;
                    }
                    .wecare-content-col {
                        order: 1 !important;
                        flex: 0 0 100% !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .wecare-img-col {
                        order: 2 !important;
                        flex: 0 0 100% !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        display: block !important;
                    }
                    .wecare-img-container {
                        height: auto !important;
                        display: block !important;
                    }
                    .wecare-img-wrapper {
                        position: relative !important;
                        top: auto !important;
                        left: auto !important;
                        right: auto !important;
                        bottom: auto !important;
                        width: 100% !important;
                        height: clamp(380px, 50vh, 460px) !important;
                    }
                    .wecare-img-custom {
                        min-height: unset !important;
                        max-height: unset !important;
                    }
                    .wecare-patient-badge {
                        position: absolute !important;
                        bottom: 14px !important;
                        top: auto !important;
                        left: 14px !important;
                        right: 14px !important;
                        width: calc(100% - 28px) !important;
                        transform: none !important;
                        margin: 0 !important;
                        padding: 8px 12px !important;
                        border-radius: 8px !important;
                        box-shadow: none !important;
                        box-sizing: border-box !important;
                    }
                    .wecare-services-card {
                        border-radius: 18px !important;
                        padding: 22px 18px !important;
                    }
                    .wecare-counter-card {
                        border-radius: 18px !important;
                        padding: 16px 10px !important;
                    }
                }

                /* Reglas para Móvil Pequeño (max-width: 767px) */
                @media (max-width: 767px) {
                    .wecare-counters-row {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 16px !important;
                    }
                    .wecare-counter-col {
                        flex: none !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .wecare-patient-badge {
                        bottom: 12px !important;
                        top: auto !important;
                        left: 12px !important;
                        right: 12px !important;
                        width: calc(100% - 24px) !important;
                        padding: 6px 10px !important;
                        border-radius: 8px !important;
                        box-shadow: none !important;
                    }
                    .wecare-services-card {
                        border-radius: 16px !important;
                        padding: 18px 14px !important;
                    }
                    .wecare-services-grid ul.list-check-try li {
                        font-size: 14px !important;
                        line-height: 22px !important;
                        min-height: 22px !important;
                    }
                    .wecare-counter-card {
                        padding: 14px 6px !important;
                        border-radius: 14px !important;
                    }
                    .wecare-counter-card .counter-number {
                        font-size: clamp(20px, 4.5vw, 26px) !important;
                    }
                    .wecare-counter-card .counter-suffix {
                        font-size: clamp(16px, 3.8vw, 20px) !important;
                    }
                    .wecare-counter-card .counter-title {
                        font-size: clamp(10.5px, 2.6vw, 12px) !important;
                        line-height: 1.25 !important;
                    }
                }

                @media (max-width: 420px) {
                    .wecare-counters-row {
                        gap: 10px !important;
                    }
                    .wecare-counter-card {
                        padding: 10px 4px !important;
                        border-radius: 12px !important;
                    }
                    .wecare-counter-card .counter-number {
                        font-size: 17px !important;
                    }
                    .wecare-counter-card .counter-suffix {
                        font-size: 14px !important;
                    }
                    .wecare-counter-card .counter-title {
                        font-size: 9.5px !important;
                    }
                }
            `}</style>
            
            {/* Fila principal: Imagen y Tarjeta de servicios con contadores abajo */}
            <div className="wecare-services-row">
                {/* Columna de imagen */}
                <div className="wecare-img-col">
                    <div className="wecare-img-container">
                        <div className="wecare-img-wrapper wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <Image 
                                src={IMAGES.fisioterapiaEnCasa} 
                                alt="Fisioterapia en Casa - THPro S.R.L." 
                                className="wecare-img-custom"
                                priority
                            />
                            <div className="wecare-patient-badge">
                                {/* Iconos sociales y de comunicación morados: TikTok, Facebook, Instagram, WhatsApp, Gmail */}
                                <div className="wecare-badge-socials">
                                    {/* TikTok */}
                                    <a 
                                        href="https://www.tiktok.com/@thpro.srl?fbclid=IwY2xjawVMjHRleHRuA2FlbQIxMABwZG9mAWJyaWQRMURBUDFjVEFZWVlUQ1NBbTFzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe6ldmv3AKBfg2ARseTHbQ0NEMLsPI_4eGZjjWCnKW5xOTp2Lbm57dI74uNUc_aem_IUwlEb8tjW6Ki48en0YRfg" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="wecare-badge-icon-btn" 
                                        title="TikTok THPro S.R.L."
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                                        </svg>
                                    </a>

                                    {/* Facebook */}
                                    <a 
                                        href="https://www.facebook.com/THProSRL/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="wecare-badge-icon-btn" 
                                        title="Facebook THPro S.R.L."
                                    >
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>

                                    {/* Instagram */}
                                    <a 
                                        href="https://www.instagram.com/thpro.srl?fbclid=IwY2xjawVMjGJleHRuA2FlbQIxMABwZG9mAWJyaWQRMURBUDFjVEFZWVlUQ1NBbTFzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe5ERXdfmhMJgd7Z0_RnEiePArUENUE1XuEf6WXIXCTOjoSWHgyeDppfnvapU_aem_8bF3MAgFhRhYE0FmVikkMA" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="wecare-badge-icon-btn" 
                                        title="Instagram THPro S.R.L."
                                    >
                                        <i className="fa-brands fa-instagram" />
                                    </a>

                                    {/* WhatsApp (73087757) */}
                                    <a 
                                        href="https://api.whatsapp.com/send?phone=59173087757&text=Hola%20THPro%20S.R.L.,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20fisioterapia." 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="wecare-badge-icon-btn" 
                                        title="WhatsApp THPro: 73087757"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                        </svg>
                                    </a>

                                    {/* Gmail */}
                                    <a 
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=gerencia@thpro.com.bo&su=Consulta%20THPro%20Fisioterapia" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="wecare-badge-icon-btn" 
                                        title="Gmail: gerencia@thpro.com.bo"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                        </svg>
                                    </a>
                                </div>

                                {/* Contador de Pacientes en morado institucional #4B1D96 */}
                                <div className="d-flex align-items-center" style={{ gap: '8px', minWidth: 0, overflow: 'hidden' }}>
                                    <span className="number" style={{ color: '#211638', fontWeight: 800, fontSize: '18px', lineHeight: 1, flexShrink: 0 }}>150k</span>
                                    <span style={{ fontSize: '13.5px', color: '#211638', fontWeight: 700, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Pacientes recuperados</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna de contenido */}
                <div className="wecare-content-col">
                    <div className="content-info d-flex flex-column" style={{ gap: '22px', margin: 0, padding: 0, height: '100%', justifyContent: 'space-between' }}>
                        <div className="section-head style-3 text-center wecare-services-header wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">
                                Servicios de Fisioterapia
                            </h2>
                        </div>
                        <div className="info-widget wecare-services-card wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="wecare-services-grid">
                                <div>
                                    <ul className="list-check-try">
                                        <li><a href="#fisioterapia-a-domicilio" onClick={(e) => { e.preventDefault(); document.getElementById('fisioterapia-a-domicilio')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '#fisioterapia-a-domicilio'); }} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>Fisioterapia a Domicilio</a></li>
                                        <li><a href="#fisioterapia-pediatrica" onClick={(e) => { e.preventDefault(); document.getElementById('fisioterapia-pediatrica')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '#fisioterapia-pediatrica'); }} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>Fisioterapia Pediátrica</a></li>
                                        <li><a href="#fisioterapia-geriatrica" onClick={(e) => { e.preventDefault(); document.getElementById('fisioterapia-geriatrica')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '#fisioterapia-geriatrica'); }} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>Fisioterapia Geriátrica</a></li>
                                        <li><a href="#fisioterapia-general" onClick={(e) => { e.preventDefault(); document.getElementById('fisioterapia-general')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '#fisioterapia-general'); }} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>Fisioterapia General</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-check-try">
                                        <li><a href="#masaje-de-cuerpo-completo" onClick={(e) => { e.preventDefault(); document.getElementById('masaje-de-cuerpo-completo')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '#masaje-de-cuerpo-completo'); }} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>Masaje de Cuerpo Completo</a></li>
                                        <li><a href="#masaje-de-medio-cuerpo" onClick={(e) => { e.preventDefault(); document.getElementById('masaje-de-medio-cuerpo')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '#masaje-de-medio-cuerpo'); }} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>Masaje de Medio Cuerpo</a></li>
                                        <li><a href="#ergonomia-laboral" onClick={(e) => { e.preventDefault(); document.getElementById('ergonomia-laboral')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '#ergonomia-laboral'); }} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>Ergonomía Laboral</a></li>
                                        <li><a href="#masaje-expres" onClick={(e) => { e.preventDefault(); document.getElementById('masaje-expres')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '#masaje-expres'); }} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%' }}>Masaje Exprés</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Fila de contadores abajo de los servicios con el estilo morado de THPro S.R.L. FISIOTERAPIA */}
                        <div className="wecare-counters-row wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                            {counterdata.map((data, i) => (
                                <div key={i} className="wecare-counter-col">
                                    <div 
                                        className="wecare-counter-card" 
                                        style={{ 
                                            ...ANIMBG_STYLE, 
                                        }}
                                    >
                                        <div className="counter-number"><span className="counter">{data.count}</span><span className="counter-suffix">{data.span}</span></div>
                                        <h3 className="counter-title">{data.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wecare;
