"use client"
import Image from "next/image";
import HighlyTeam from "@/component/HighlyTeam";
import MapForm from "@/component/MapForm";
import ProductsSection from "@/component/ProductsSection";
import ConsultationSection from "@/component/ConsultationSection";
import Wecare from "@/component/Wecare";
import Wecare2 from "@/component/Wecare2";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Fragment } from "react";

const HomePage = () => {
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
                    section,
                    .content-inner,
                    .wecare-outer-section {
                        border: none !important;
                        outline: none !important;
                        box-shadow: none !important;
                        background: #f4f5f7 !important;
                        background-color: #f4f5f7 !important;
                        background-image: none !important;
                    }
                    section::before,
                    section::after,
                    .content-inner::before,
                    .content-inner::after,
                    .wecare-outer-section::before,
                    .wecare-outer-section::after {
                        display: none !important;
                        content: none !important;
                    }
                    /* Sección Hero con imagen de fondo EsteticaCorporal.png */
                    .hero-banner.hero-custom-section {
                        width: 100% !important;
                        margin: 0 !important;
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                        border: none !important;
                        border-radius: 0px !important;
                        min-height: calc(100vh - 80px) !important;
                        height: auto !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: center !important;
                        padding: 40px 20px 44px 20px !important;
                        background: url(${IMAGES.fondoCorporal.src}) center / cover no-repeat !important;
                        background-image: url(${IMAGES.fondoCorporal.src}) !important;
                        background-size: cover !important;
                        background-position: center !important;
                        background-repeat: no-repeat !important;
                        position: relative !important;
                        overflow: hidden !important;
                        text-align: center !important;
                        box-sizing: border-box !important;
                    }
                    .hero-banner.hero-custom-section::before,
                    .hero-banner.hero-custom-section::after {
                        display: none !important;
                        content: none !important;
                    }
                    .hero-banner.hero-custom-section > * {
                        height: auto !important;
                    }
                    .hero-banner-container {
                        width: 100% !important;
                        max-width: 1260px !important;
                        padding-left: 20px !important;
                        padding-right: 20px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                        position: relative !important;
                        z-index: 5 !important;
                    }
                    .hero-content-wrapper {
                        max-width: 1200px !important;
                        width: 100% !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center !important;
                        gap: 16px !important;
                        margin: 0 auto !important;
                    }
                    .hero-logo-box {
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        margin-bottom: 4px !important;
                    }
                    .hero-logo-img {
                        height: clamp(95px, 11vw, 130px) !important;
                        max-height: 135px !important;
                        width: auto !important;
                        object-fit: contain !important;
                        filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.45)) !important;
                        transition: transform 0.3s ease !important;
                    }
                    .hero-logo-img:hover {
                        transform: scale(1.04) !important;
                    }
                    .hero-company-name {
                        color: #ffffff !important;
                        font-size: clamp(13px, 1.8vw, 21px) !important;
                        font-weight: 700 !important;
                        letter-spacing: 3px !important;
                        white-space: nowrap !important;
                        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4) !important;
                        line-height: 1.2 !important;
                        margin: 0 !important;
                        text-align: center !important;
                    }
                    /* En celular el nombre largo puede bajar de línea para no salirse de la pantalla */
                    @media (max-width: 575px) {
                        .hero-content-wrapper .hero-company-name.hero-company-name {
                            white-space: normal !important;
                            max-width: 92vw !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                            letter-spacing: 2px !important;
                        }
                    }
                    .hero-title-main {
                        color: #ffffff !important;
                        font-size: clamp(34px, 5.5vw, 68px) !important;
                        font-weight: 900 !important;
                        letter-spacing: 4px !important;
                        line-height: 1.1 !important;
                        margin: 0 !important;
                        text-align: center !important;
                        text-shadow: 0 4px 16px rgba(0, 0, 0, 0.45) !important;
                    }


                    /* Línea divisoria animada */
                    .hero-section-divider {
                        width: 100% !important;
                        position: relative !important;
                        z-index: 10 !important;
                        line-height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow: hidden !important;
                    }
                    .hero-section-divider-line {
                        width: 100% !important;
                        height: 4px !important;
                        border-radius: 0px !important;
                        background: #1E40AF !important;
                        position: relative !important;
                        box-shadow: 0 0 10px rgba(30, 64, 175, 0.45) !important;
                        overflow: hidden !important;
                    }
                    .hero-section-divider-line::after {
                        content: '' !important;
                        position: absolute !important;
                        top: 0 !important;
                        bottom: 0 !important;
                        width: 200px !important;
                        background: linear-gradient(90deg, transparent 0%, #3B82F6 50%, transparent 100%) !important;
                        animation: pinkDividerTravel 2.8s ease-in-out infinite !important;
                    }
                    .wecare-outer-section {
                        padding-top: 28px !important;
                        padding-bottom: 28px !important;
                        margin: 0 !important;
                        position: relative !important;
                        width: 100% !important;
                        background: #f4f5f7 !important;
                        background-color: #f4f5f7 !important;
                    }
                    .content-inner {
                        padding-top: 28px !important;
                        padding-bottom: 28px !important;
                        background: #f4f5f7 !important;
                        background-color: #f4f5f7 !important;
                    }
                    @media (max-width: 991px) {
                        .hero-banner.hero-custom-section {
                            min-height: calc(100vh - 70px) !important;
                            height: auto !important;
                            padding: 30px 16px 36px 16px !important;
                        }
                        .hero-logo-img {
                            height: clamp(80px, 11vw, 105px) !important;
                            max-height: 105px !important;
                        }
                        .hero-company-name {
                            font-size: clamp(11.5px, 2vw, 15px) !important;
                            letter-spacing: 2px !important;
                        }
                        .hero-title-main {
                            font-size: clamp(26px, 6vw, 44px) !important;
                            letter-spacing: 2.5px !important;
                        }
                        .wecare-outer-section {
                            padding-top: 28px !important;
                            padding-bottom: 28px !important;
                        }
                        .content-inner {
                            padding-top: 28px !important;
                            padding-bottom: 28px !important;
                        }
                    }
                    @media (max-width: 575px) {
                        .hero-banner.hero-custom-section {
                            min-height: calc(100vh - 70px) !important;
                            height: auto !important;
                            padding: 24px 12px 28px 12px !important;
                        }
                        .hero-logo-img {
                            height: 68px !important;
                            max-height: 72px !important;
                        }
                        .hero-company-name {
                            font-size: 10.5px !important;
                            letter-spacing: 1px !important;
                        }
                        .hero-title-main {
                            font-size: 22px !important;
                            letter-spacing: 1.2px !important;
                        }
                    }
                    @keyframes pinkDividerTravel {
                        0% {
                            left: -200px;
                            opacity: 0;
                        }
                        15% {
                            opacity: 1;
                        }
                        85% {
                            opacity: 1;
                        }
                        100% {
                            left: 100%;
                            opacity: 0;
                        }
                    }
                    /* Modelo 3D masajeador flotante */
                    .hero-3d-masajeador {
                        position: absolute !important;
                        top: 40px !important;
                        right: 40px !important;
                        width: 220px !important;
                        height: 220px !important;
                        z-index: 10 !important;
                        pointer-events: none !important;
                        animation: floatMasajeador 3.5s ease-in-out infinite !important;
                    }
                    @keyframes floatMasajeador {
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-18px);
                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }
                    @media (max-width: 991px) {
                        .hero-3d-masajeador {
                            width: 150px !important;
                            height: 150px !important;
                            top: 20px !important;
                            right: 20px !important;
                        }
                    }
                    @media (max-width: 575px) {
                        .hero-3d-masajeador {
                            width: 110px !important;
                            height: 110px !important;
                            top: 10px !important;
                            right: 10px !important;
                        }
                    }
                `}</style>

                {/* 1. Hero Banner Principal */}
                <div 
                    className="hero-banner hero-custom-section"
                    style={{ 
                        backgroundImage: `url(${IMAGES.fondoCorporal.src})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="container hero-banner-container">
                        <div className="hero-content-wrapper wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            {/* Logo institucional centrado */}
                            <div className="hero-logo-box">
                                <Image 
                                    src={IMAGES.logoTHPro} 
                                    alt="Talento Humano Productivo - THPro S.R.L." 
                                    className="hero-logo-img"
                                    priority
                                />
                            </div>

                            {/* Textos centrados al igual que el logo */}
                            <div className="hero-company-name text-uppercase">
                                TALENTO HUMANO PRODUCTIVO - THPro S.R.L.
                            </div>

                            <h1 className="hero-title-main text-uppercase">
                                ESTÉTICA CORPORAL
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Contenedor Unificado de Fisioterapia - Fondo Blanco Ceniza Continuo #f4f5f7, 26px en los 4 bordes y doble separación (52px) entre apartados */}
                <div 
                    className="estetica-corporal-unified-wrapper" 
                    style={{ 
                        backgroundColor: '#f4f5f7', 
                        background: '#f4f5f7', 
                        paddingTop: '26px', 
                        paddingBottom: '26px', 
                        paddingLeft: '26px', 
                        paddingRight: '26px', 
                        width: '100%', 
                        boxSizing: 'border-box' 
                    }}
                >
                    <div className="container" style={{ maxWidth: '100%', width: '100%', padding: '0', margin: '0 auto' }}>
                        {/* 2. Servicios de Fisioterapia */}
                        <div id="servicios" style={{ marginBottom: '52px' }}>
                            <Wecare />
                            <Wecare2 />
                        </div>

                        {/* 3. Equipo de Fisioterapeutas THPro */}
                        <div id="equipo" style={{ marginBottom: '52px' }}>
                            <HighlyTeam />
                        </div>

                        {/* 4. Apartado de Productos de Fisioterapia */}
                        <div id="productos" style={{ marginBottom: '52px' }}>
                            <ProductsSection />
                        </div>

                        {/* 5. Generar / Reservar Consulta */}
                        <div id="reservar" style={{ marginBottom: '52px' }}>
                            <ConsultationSection />
                        </div>

                        {/* 6. Ubicación con Mapa de THPro S.R.L. en La Paz, Bolivia */}
                        <div id="ubicacion" style={{ marginBottom: '0' }}>
                            <MapForm />
                        </div>
                    </div>
                </div>
            </main>

            {/* 7. Footer con el estilo de fondo institucional (#1E40AF + bg7 color-burn), redes y datos THPro */}
            <Footer />            
        </Fragment>
    );
};

export default HomePage;
