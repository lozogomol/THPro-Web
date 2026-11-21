"use client"
import React from 'react';
import Image from 'next/image';
import { IMAGES } from "../constant/theme";

const googleMapsUrl = "https://www.google.com/maps/place/TALENTO+HUMANO+PRODUCTIVO+-+THPro+S.R.L./@-16.5037719,-68.1348571,17z/data=!4m6!3m5!1s0x915f21cbc155f9e7:0x7d6cf15fbaefbe63!8m2!3d-16.5037719!4d-68.1322822!16s%2Fg%2F11ywkz0tn9?entry=ttu";

function MapForm() { 
    return (
        <div className="mapform-section">
            <style>{`
                .mapform-section {
                    width: 100% !important;
                    box-sizing: border-box !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .mapform-header {
                    text-align: center !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: center !important;
                    margin-top: 0 !important;
                    margin-bottom: 26px !important;
                    padding: 0 !important;
                }
                .mapform-title {
                    color: #500724 !important;
                    font-size: clamp(24px, 2.4vw, 36px) !important;
                    font-weight: 800 !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    line-height: 1.15 !important;
                    text-align: center !important;
                }
                .mapform-row {
                    display: flex !important;
                    align-items: stretch !important;
                    gap: 26px !important;
                    width: 100% !important;
                    margin: 0 !important;
                }
                .mapform-info-col {
                    flex: 0 0 calc(50% - 13px) !important;
                    width: calc(50% - 13px) !important;
                    max-width: calc(50% - 13px) !important;
                    box-sizing: border-box !important;
                }
                .mapform-map-col {
                    flex: 0 0 calc(50% - 13px) !important;
                    width: calc(50% - 13px) !important;
                    max-width: calc(50% - 13px) !important;
                    box-sizing: border-box !important;
                    position: relative !important;
                    min-height: 420px !important;
                }
                /* Tarjeta todo blanco con borde morado sin sombra */
                .mapform-white-card {
                    background-color: #ffffff !important;
                    background: #ffffff !important;
                    border: 2px solid #FCE7F3 !important;
                    border-radius: 20px !important;
                    padding: 26px !important;
                    box-shadow: none !important;
                    height: 100% !important;
                    box-sizing: border-box !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    gap: 26px !important;
                }
                .mapform-items-container {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 26px !important;
                    height: 100% !important;
                    justify-content: center !important;
                }
                /* Sin aspecto de tarjeta interior: contenido normal y limpio */
                .mapform-detail-item {
                    display: flex !important;
                    align-items: flex-start !important;
                    gap: 16px !important;
                    background: transparent !important;
                    border: none !important;
                    border-radius: 0 !important;
                    padding: 0 !important;
                    box-shadow: none !important;
                    transition: transform 0.2s ease !important;
                }
                .mapform-detail-item.clickable {
                    cursor: pointer !important;
                    text-decoration: none !important;
                }
                .mapform-detail-item.clickable:hover {
                    transform: none !important;
                }
                .mapform-detail-icon {
                    width: 46px !important;
                    height: 46px !important;
                    border-radius: 50% !important;
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                    color: #ffffff !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    font-size: 18px !important;
                    flex-shrink: 0 !important;
                    box-shadow: none !important;
                    transition: background 0.25s ease !important;
                }
                .mapform-detail-item.clickable:hover .mapform-detail-icon {
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important; filter: brightness(1.12) !important;
                }
                .mapform-detail-texts {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 4px !important;
                    flex: 1 !important;
                }
                .mapform-detail-texts h4 {
                    color: #500724 !important;
                    font-size: 15px !important;
                    font-weight: 800 !important;
                    margin: 0 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.5px !important;
                }
                .mapform-detail-texts p {
                    color: #555555 !important;
                    font-size: 14px !important;
                    font-weight: 600 !important;
                    margin: 0 !important;
                    line-height: 1.4 !important;
                }
                .mapform-schedule-list {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 6px !important;
                    margin-top: 4px !important;
                }
                .mapform-schedule-item {
                    display: flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                    flex-wrap: wrap !important;
                }
                .mapform-schedule-day {
                    color: #500724 !important;
                    font-size: 14px !important;
                    font-weight: 800 !important;
                }
                .mapform-schedule-time {
                    color: #555555 !important;
                    font-size: 14px !important;
                    font-weight: 600 !important;
                }
                .mapform-action-btn {
                    display: inline-flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                    color: #ffffff !important;
                    padding: 10px 18px !important;
                    border-radius: 12px !important;
                    font-size: 13.5px !important;
                    font-weight: 800 !important;
                    text-decoration: none !important;
                    border: 2px solid #F3167E !important;
                    margin-top: 6px !important;
                    width: fit-content !important;
                    box-shadow: none !important;
                    transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease !important;
                }
                .mapform-action-btn:hover {
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important; filter: brightness(1.12) !important;
                    border-color: #CE1470 !important;
                    color: #ffffff !important;
                    transform: translateY(-2px) !important;
                }
                /* Iframe del Mapa a la derecha sin sombra */
                .thpro-map-iframe {
                    width: 100% !important;
                    height: 100% !important;
                    min-height: 420px !important;
                    border: 2px solid #FCE7F3 !important;
                    border-radius: 20px !important;
                    display: block !important;
                    box-shadow: none !important;
                }
                @media (max-width: 991px) {
                    .mapform-row {
                        flex-direction: column !important;
                    }
                    .mapform-info-col,
                    .mapform-map-col {
                        flex: 0 0 100% !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .thpro-map-iframe {
                        min-height: 340px !important;
                        height: 340px !important;
                    }
                    .mapform-white-card {
                        padding: 26px !important;
                    }
                }
            `}</style>

            {/* Título de ubicación de THPro S.R.L. */}
            <div className="mapform-header wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <h2 className="mapform-title">Ubicación de THPro S.R.L.</h2>
            </div>

            <div className="mapform-row">
                {/* Columna Izquierda: Tarjeta blanca con Logo, Ubicación con botón morado y Horarios */}
                <div className="mapform-info-col wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <div className="mapform-white-card">
                        <div className="mapform-items-container">
                            {/* Ubicación / Dirección - al presionar se abre Google Maps */}
                            <a 
                                href={googleMapsUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="mapform-detail-item clickable"
                                title="Abrir ubicación en Google Maps"
                            >
                                <div className="mapform-detail-icon">
                                    <i className="feather icon-map-pin" />
                                </div>
                                <div className="mapform-detail-texts">
                                    <h4>Ubicación:</h4>
                                    <p>TALENTO HUMANO PRODUCTIVO - THPro S.R.L.</p>
                                    <p>La Paz, Bolivia</p>
                                    <span className="mapform-action-btn">
                                        Ver Ubicación
                                    </span>
                                </div>
                            </a>

                            {/* Horarios de Atención */}
                            <div className="mapform-detail-item">
                                <div className="mapform-detail-icon">
                                    <i className="feather icon-clock" />
                                </div>
                                <div className="mapform-detail-texts">
                                    <h4>Horarios de Atención:</h4>
                                    <div className="mapform-schedule-list">
                                        <div className="mapform-schedule-item">
                                            <span className="mapform-schedule-day">Lun - Dom:</span>
                                            <span className="mapform-schedule-time">09:00 - 13:00 &nbsp;|&nbsp; 15:00 - 19:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Tarjeta con Ubicación y Mapa interactivo de Google Maps */}
                <div className="mapform-map-col wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                    <iframe 
                        src="https://maps.google.com/maps?q=-16.5037719,-68.1322822&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                        className="thpro-map-iframe"
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación TALENTO HUMANO PRODUCTIVO - THPro S.R.L."
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default MapForm;
