"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES, holoCss, holoStyle } from "../constant/theme";

function HighlyTeam() {
    const [activeSpecialist, setActiveSpecialist] = useState<'carol' | 'wendy'>('carol');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveSpecialist((prev) => (prev === 'carol' ? 'wendy' : 'carol'));
        }, 4000);
        return () => clearInterval(interval);
    }, [isHovered]);
    return (
        <>
            <style>{`
                /* ============================================================
                   SECCIÓN EQUIPO DE FISIOTERAPEUTAS (INVERTIDO RESPECTO A WECARE)
                   Contenido a la izquierda (58%) e Imagen a la derecha (42%)
                   Separación de 22px y bordes corporativos de 2px #9D174D
                   ============================================================ */
                .team-services-row {
                    display: flex !important;
                    align-items: stretch !important;
                    gap: 26px !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .team-content-col {
                    padding: 0 !important;
                    margin: 0 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: flex-start !important;
                    height: 100% !important;
                }
                .team-content-col .content-info {
                    margin: 0 !important;
                    padding: 0 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 26px !important;
                    height: 100% !important;
                    justify-content: flex-start !important;
                }
                .team-img-col {
                    padding: 0 !important;
                    margin: 0 !important;
                    position: relative !important;
                    display: flex !important;
                    align-items: stretch !important;
                    justify-content: center !important;
                }
                .team-img-container {
                    width: 100% !important;
                    height: 100% !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: stretch !important;
                    position: relative !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .team-img-wrapper {
                    position: relative !important;
                    display: flex !important;
                    width: 100% !important;
                    height: 100% !important;
                    max-width: 100% !important;
                    border-radius: 20px !important;
                    overflow: visible !important;
                    box-sizing: border-box !important;
                    box-shadow: none !important;
                }
                .team-img-custom {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover !important;
                    object-position: center top !important;
                    border-radius: 20px !important;
                    border: 2px solid #FCE7F3 !important;
                    display: block !important;
                    margin: 0 !important;
                }
                /* Badge horizontal abajo para no tapar la cara de las especialistas */
                .team-specialist-badge {
                    position: absolute !important;
                    bottom: 22px !important;
                    top: auto !important;
                    left: 22px !important;
                    right: 22px !important;
                    width: calc(100% - 44px) !important;
                    background: rgba(255, 255, 255, 0.96) !important;
                    backdrop-filter: blur(8px) !important;
                    -webkit-backdrop-filter: blur(8px) !important;
                    border: 2px solid #FCE7F3 !important;
                    border-radius: 8px !important;
                    box-shadow: 0 10px 25px rgba(157, 23, 77, 0.15) !important;
                    padding: 10px 16px !important;
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    gap: 12px !important;
                    z-index: 5 !important;
                    transition: transform 0.25s ease !important;
                    box-sizing: border-box !important;
                }
                .team-specialist-badge:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: none !important;
                }
                .team-badge-left {
                    display: flex !important;
                    align-items: center !important;
                    gap: 12px !important;
                    flex: 1 !important;
                    min-width: 0 !important;
                }
                .team-badge-single-avatar {
                    width: 44px !important;
                    height: 44px !important;
                    border-radius: 8px !important;
                    border: 2px solid #FCE7F3 !important;
                    object-fit: cover !important;
                    flex-shrink: 0 !important;
                    transition: opacity 0.35s ease, transform 0.35s ease !important;
                }
                .team-badge-info {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center !important;
                    gap: 8px !important;
                    min-width: 0 !important;
                    overflow: hidden !important;
                }
                .team-badge-title {
                    color: #EC4899 !important;
                    font-weight: 800 !important;
                    font-size: 15px !important;
                    line-height: 1 !important;
                    letter-spacing: 0.3px !important;
                    white-space: nowrap !important;
                    flex-shrink: 0 !important;
                }

                .team-badge-name-single {
                    color: #500724 !important;
                    font-size: 14px !important;
                    font-weight: 700 !important;
                    line-height: 1.2 !important;
                    display: inline-block !important;
                    white-space: nowrap !important;
                    overflow: hidden !important;
                    text-overflow: ellipsis !important;
                    transition: opacity 0.35s ease !important;
                }
                .team-badge-icons-right {
                    display: flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                    flex-shrink: 0 !important;
                }
                .team-badge-icon-btn {
                    width: 32px !important;
                    height: 32px !important;
                    border-radius: 8px !important;
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                    color: #ffffff !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-decoration: none !important;
                    font-size: 13px !important;
                    border: 1px solid #F3167E !important;
                    box-shadow: none !important;
                    transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease !important;
                    flex-shrink: 0 !important;
                }
                .team-badge-icon-btn svg,
                .team-badge-icon-btn i {
                    color: #ffffff !important;
                    display: inline-block !important;
                    vertical-align: middle !important;
                }
                .team-badge-icon-btn:hover {
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important; filter: brightness(1.12) !important;
                    border-color: #CE1470 !important;
                    color: #ffffff !important;
                    transform: translateY(-2px) scale(1.05) !important;
                }

                /* Encabezado */
                .team-section-header {
                    text-align: center !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: center !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    flex: 0 0 auto !important;
                }
                .team-section-header .title {
                    color: #500724 !important;
                    text-transform: none !important;
                    font-weight: 800 !important;
                    font-size: clamp(24px, 2.4vw, 36px) !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    line-height: 1.15 !important;
                    text-align: center !important;
                }
                /* Tarjeta blanca de especialistas */
                .team-physio-card {
                    background-color: #ffffff !important;
                    background: #ffffff !important;
                    border: 2px solid #FCE7F3 !important;
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
                .team-physio-card::before {
                    display: none !important;
                }
                .team-physio-grid {
                    display: grid !important;
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 26px !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                @media (max-width: 575px) {
                    .team-physio-grid {
                        grid-template-columns: 1fr !important;
                        gap: 26px !important;
                    }
                }
                .team-physio-grid ul.list-check-try {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 26px !important;
                }
                .team-physio-grid ul.list-check-try li {
                    color: #500724 !important;
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
                .team-physio-grid ul.list-check-try li:hover {
                    color: #EC4899 !important;
                    transform: translateX(4px);
                }
                .team-physio-grid ul.list-check-try li:before {
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
                    background-color: #9D174D !important;
                    color: #ffffff !important;
                    border-radius: 50% 50% 0% 50% !important;
                    box-shadow: none !important;
                    transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease !important;
                }
                .team-physio-grid ul.list-check-try li:hover:before {
                    background-color: #EC4899 !important;
                    box-shadow: none !important;
                    transform: translateY(-50%) scale(1.1) !important;
                }

                /* Tarjetas moradas inferiores reducidas a la mitad (125px) */
                .team-counters-row {
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
                .team-counter-col {
                    flex: 1 1 calc((100% - 26px) / 2) !important;
                    width: calc((100% - 26px) / 2) !important;
                    max-width: calc((100% - 26px) / 2) !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    height: 100% !important;
                    display: flex !important;
                }
                .team-counter-card {
                    ${holoCss(0.45)}
                    border: 2px solid #9D174D !important;
                    border-radius: 20px !important;
                    padding: 12px 14px !important;
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
                .team-counter-card:hover {
                    transform: translateY(-3px) !important;
                    box-shadow: none !important;
                }
                .team-counter-card .counter-number {
                    font-size: clamp(20px, 1.8vw, 28px) !important;
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
                .team-counter-card .counter-number *,
                .team-counter-card .counter,
                .team-counter-card .counter span {
                    display: inline !important;
                    white-space: nowrap !important;
                    line-height: 1 !important;
                }
                .team-counter-card .counter-suffix {
                    color: #FFFFFF !important;
                    font-weight: 800 !important;
                    margin-left: 2px !important;
                    display: inline !important;
                    white-space: nowrap !important;
                    line-height: 1 !important;
                }
                .team-counter-card .counter-title {
                    font-size: clamp(12px, 0.9vw, 13.5px) !important;
                    font-weight: 600 !important;
                    color: #FFFFFF !important;
                    margin: 0 !important;
                    line-height: 1.3 !important;
                    text-transform: none !important;
                    white-space: normal !important;
                    text-align: center !important;
                }

                /* Reglas Desktop (min-width: 992px) - El final de la foto y las tarjetas en una misma línea exacta */
                @media (min-width: 992px) {
                    .team-services-row {
                        flex-direction: row !important;
                        flex-wrap: nowrap !important;
                        align-items: stretch !important;
                        height: auto !important;
                        min-height: auto !important;
                    }
                    .team-content-col {
                        order: 1 !important;
                        flex: 0 0 calc(58% - 11px) !important;
                        width: calc(58% - 11px) !important;
                        max-width: calc(58% - 11px) !important;
                        height: 100% !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .team-content-col .content-info {
                        height: 100% !important;
                        justify-content: space-between !important;
                        gap: 22px !important;
                    }
                    .team-img-col {
                        order: 2 !important;
                        flex: 0 0 calc(42% - 11px) !important;
                        width: calc(42% - 11px) !important;
                        max-width: calc(42% - 11px) !important;
                        align-self: stretch !important;
                        position: relative !important;
                        display: flex !important;
                        flex-direction: column !important;
                        height: auto !important;
                    }
                    .team-img-container {
                        position: relative !important;
                        width: 100% !important;
                        height: 100% !important;
                        flex: 1 1 auto !important;
                        display: block !important;
                    }
                    .team-img-wrapper {
                        position: absolute !important;
                        top: 0 !important;
                        bottom: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .team-solo-wrapper {
                        min-height: unset !important;
                        height: 100% !important;
                    }
                }

                /* Reglas Mobile (max-width: 991px) */
                @media (max-width: 991px) {
                    .team-services-row {
                        flex-direction: column !important;
                        gap: 22px !important;
                        margin-bottom: 0 !important;
                    }
                    .team-counters-row {
                        height: auto !important;
                        min-height: auto !important;
                        max-height: none !important;
                        flex: none !important;
                    }
                    .team-content-col {
                        order: 1 !important;
                        flex: 0 0 100% !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .team-img-col {
                        order: 2 !important;
                        flex: 0 0 100% !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        display: block !important;
                    }
                    .team-img-container {
                        height: auto !important;
                        display: block !important;
                    }
                    .team-img-wrapper {
                        position: relative !important;
                        top: auto !important;
                        left: auto !important;
                        right: auto !important;
                        bottom: auto !important;
                        width: 100% !important;
                        height: auto !important;
                        min-height: 400px !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .team-specialist-badge {
                        position: absolute !important;
                        bottom: 16px !important;
                        top: auto !important;
                        left: 16px !important;
                        right: 16px !important;
                        width: calc(100% - 32px) !important;
                        margin: 0 !important;
                        padding: 8px 12px !important;
                        border-radius: 8px !important;
                        box-shadow: 0 8px 20px rgba(157, 23, 77, 0.15) !important;
                    }
                    .team-badge-single-avatar {
                        width: 38px !important;
                        height: 38px !important;
                    }
                    .team-badge-title {
                        font-size: 14px !important;
                    }
                    .team-badge-name-single {
                        font-size: 13px !important;
                    }
                    .team-badge-icon-btn {
                        width: 32px !important;
                        height: 32px !important;
                    }
                    .team-physio-card {
                        border-radius: 18px !important;
                        padding: 22px 18px !important;
                    }
                    .team-counter-card {
                        border-radius: 18px !important;
                        padding: 16px 10px !important;
                    }
                }
                @media (max-width: 767px) {
                    .team-physio-card {
                        border-radius: 16px !important;
                        padding: 18px 14px !important;
                    }
                    .team-physio-grid ul.list-check-try li {
                        font-size: 14px !important;
                        line-height: 22px !important;
                        min-height: 22px !important;
                    }
                }
                @media (max-width: 575px) {
                    .team-counters-row {
                        gap: 12px !important;
                    }
                    .team-counter-col {
                        flex: 1 1 calc((100% - 12px) / 2) !important;
                        width: calc((100% - 12px) / 2) !important;
                        max-width: calc((100% - 12px) / 2) !important;
                    }
                    .team-counter-card {
                        padding: 14px 6px !important;
                        border-radius: 14px !important;
                    }
                    .team-counter-card .counter-number {
                        font-size: clamp(18px, 4.2vw, 24px) !important;
                    }
                    .team-counter-card .counter-suffix {
                        font-size: clamp(16px, 3.8vw, 20px) !important;
                    }
                    .team-counter-card .counter-title {
                        font-size: clamp(10.5px, 2.6vw, 12px) !important;
                        line-height: 1.25 !important;
                    }
                }
                @media (max-width: 420px) {
                    .team-counters-row {
                        gap: 10px !important;
                    }
                    .team-counter-col {
                        flex: 1 1 calc((100% - 10px) / 2) !important;
                        width: calc((100% - 10px) / 2) !important;
                        max-width: calc((100% - 10px) / 2) !important;
                    }
                    .team-counter-card {
                        padding: 10px 4px !important;
                        border-radius: 12px !important;
                    }
                    .team-counter-card .counter-number {
                        font-size: 16px !important;
                    }
                    .team-counter-card .counter-suffix {
                        font-size: 14px !important;
                    }
                    .team-counter-card .counter-title {
                        font-size: 9.5px !important;
                    }
                }

                /* ============================================================
                   ESTILOS PARA LA TRANSICIÓN ENTRE CAROL Y WENDY
                   ============================================================ */
                .team-solo-wrapper {
                    position: relative !important;
                    width: 100% !important;
                    height: 100% !important;
                    flex: 1 1 auto !important;
                    border-radius: 20px !important;
                    overflow: hidden !important;
                    background: #ffffff !important;
                    border: 2px solid #FCE7F3 !important;
                    box-sizing: border-box !important;
                    box-shadow: 0 10px 30px rgba(157, 23, 77, 0.12) !important;
                }
                .team-slide-image-box {
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    opacity: 0 !important;
                    transition: opacity 0.6s ease-in-out !important;
                    pointer-events: none !important;
                }
                .team-slide-image-box.active {
                    opacity: 1 !important;
                    pointer-events: auto !important;
                }
                .team-slide-image-box .team-img-custom {
                    border: none !important;
                    border-radius: 0 !important;
                }
                .team-nav-arrow {
                    position: absolute !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    width: 40px !important;
                    height: 40px !important;
                    border-radius: 8px !important;
                    background: rgba(255, 255, 255, 0.92) !important;
                    border: 2px solid #FCE7F3 !important;
                    color: #500724 !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    cursor: pointer !important;
                    z-index: 6 !important;
                    box-shadow: 0 4px 14px rgba(157, 23, 77, 0.2) !important;
                    transition: all 0.25s ease !important;
                    padding: 0 !important;
                }
                .team-nav-arrow:hover {
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                    color: #ffffff !important;
                    transform: translateY(-50%) scale(1.08) !important;
                }
                .team-nav-prev {
                    left: 14px !important;
                }
                .team-nav-next {
                    right: 14px !important;
                }
                .team-dots-indicator {
                    position: absolute !important;
                    top: 18px !important;
                    right: 20px !important;
                    display: flex !important;
                    gap: 8px !important;
                    z-index: 6 !important;
                    background: rgba(255, 255, 255, 0.92) !important;
                    backdrop-filter: blur(6px) !important;
                    padding: 6px 10px !important;
                    border-radius: 8px !important;
                    border: 1.5px solid #FCE7F3 !important;
                    align-items: center !important;
                }
                .team-dot {
                    width: 8px !important;
                    height: 8px !important;
                    border-radius: 4px !important;
                    background: rgba(157, 23, 77, 0.3) !important;
                    cursor: pointer !important;
                    transition: all 0.25s ease !important;
                    border: none !important;
                    padding: 0 !important;
                }
                .team-dot.active {
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                    width: 22px !important;
                    border-radius: 4px !important;
                }

            `}</style>

            <div className="team-services-row">
                {/* Columna de contenido a la IZQUIERDA (Invertido respecto a Servicios de Fisioterapia) */}
                <div className="team-content-col">
                    <div className="content-info d-flex flex-column" style={{ gap: '22px', margin: 0, padding: 0, height: '100%', justifyContent: 'space-between' }}>
                        {/* Encabezado */}
                        <div className="section-head style-3 text-center team-section-header wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">
                                Equipo de Especialistas
                            </h2>
                        </div>

                        {/* Tarjeta blanca con Ventajas y Beneficios de los Fisioterapeutas */}
                        <div className="info-widget team-physio-card wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="team-physio-grid">
                                <div>
                                    <ul className="list-check-try">
                                        <li>Diagnóstico Personalizado de Piel</li>
                                        <li>Piel Limpia, Sana y Luminosa</li>
                                        <li>Control de Grasa e Imperfecciones</li>
                                        <li>Prevención del Envejecimiento</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-check-try">
                                        <li>Hidratación y Nutrición Profunda</li>
                                        <li>Técnicas y Equipos Profesionales</li>
                                        <li>Tratamientos Personalizados</li>
                                        <li>Mayor Confianza y Bienestar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Fila de tarjetas moradas abajo con el estilo de THPro */}
                        <div className="team-counters-row wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                            <div className="team-counter-col">
                                <div 
                                    className="team-counter-card" 
                                    style={holoStyle(0.45)}
                                >
                                    <div className="counter-number"><span className="counter">100</span><span className="counter-suffix">%</span></div>
                                    <h3 className="counter-title">Atención Personalizada y Evaluación Clínica</h3>
                                </div>
                            </div>
                            <div className="team-counter-col">
                                <div 
                                    className="team-counter-card" 
                                    style={holoStyle(0.45)}
                                >
                                    <div className="counter-number"><span className="counter">Certificadas</span></div>
                                    <h3 className="counter-title">Especialistas en Rehabilitación y Bienestar</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna de imagen a la DERECHA (Equipo de Especialistas: Carol y Wendy) */}
                <div className="team-img-col">
                    <div className="team-img-container">
                        <div className="team-img-wrapper wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            {/* Tarjeta con transición automática entre Carol y Wendy */}
                            <div 
                                className="team-solo-wrapper"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {/* Foto Carol */}
                                <div className={`team-slide-image-box ${activeSpecialist === 'carol' ? 'active' : ''}`}>
                                    <Image 
                                        src={IMAGES.carol} 
                                        alt="Lic. Carol - Especialista en Estética Facial THPro" 
                                        className="team-img-custom"
                                        priority
                                    />
                                </div>

                                {/* Foto Wendy */}
                                <div className={`team-slide-image-box ${activeSpecialist === 'wendy' ? 'active' : ''}`}>
                                    <Image 
                                        src={IMAGES.wendy} 
                                        alt="Lic. Wendy - Especialista en Estética Facial THPro" 
                                        className="team-img-custom"
                                        priority
                                    />
                                </div>

                                {/* Flechas de navegación para alternar */}
                                <button 
                                    type="button" 
                                    onClick={() => setActiveSpecialist((prev) => (prev === 'carol' ? 'wendy' : 'carol'))}
                                    className="team-nav-arrow team-nav-prev"
                                    title="Ver especialista anterior"
                                    aria-label="Anterior"
                                >
                                    <i className="feather icon-chevron-left" />
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => setActiveSpecialist((prev) => (prev === 'carol' ? 'wendy' : 'carol'))}
                                    className="team-nav-arrow team-nav-next"
                                    title="Ver siguiente especialista"
                                    aria-label="Siguiente"
                                >
                                    <i className="feather icon-chevron-right" />
                                </button>

                                {/* Indicadores superiores de puntos */}
                                <div className="team-dots-indicator">
                                    <button 
                                        type="button"
                                        onClick={() => setActiveSpecialist('carol')}
                                        className={`team-dot ${activeSpecialist === 'carol' ? 'active' : ''}`}
                                        title="Lic. Carol"
                                        aria-label="Lic. Carol"
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setActiveSpecialist('wendy')}
                                        className={`team-dot ${activeSpecialist === 'wendy' ? 'active' : ''}`}
                                        title="Lic. Wendy"
                                        aria-label="Lic. Wendy"
                                    />
                                </div>

                                {/* Barra inferior de datos (abajo para no tapar la cara) */}
                                <div className="team-specialist-badge">
                                    <div className="team-badge-left">
                                        <div className="team-badge-info">
                                            <span className="team-badge-name-single">
                                                {activeSpecialist === 'carol' ? 'Lic. Carol — Especialista en Estética Facial' : 'Lic. Wendy — Especialista en Estética Facial'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="team-badge-icons-right">
                                        {/* WhatsApp */}
                                        <a 
                                            href="https://api.whatsapp.com/send?phone=59173087757&text=Hola%20THPro,%20quisiera%20agendar%20una%20consulta%20con%20la%20especialista%20en%20est%C3%A9tica%20facial." 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="team-badge-icon-btn" 
                                            title="Contactar por WhatsApp"
                                        >
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                            </svg>
                                        </a>
                                        {/* Gmail */}
                                        <a 
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=gerencia@thpro.com.bo&su=Consulta%20Est%C3%A9tica%20Facial%20THPro" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="team-badge-icon-btn" 
                                            title="Contactar por Correo"
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
        </>
    );
}

export default HighlyTeam;
