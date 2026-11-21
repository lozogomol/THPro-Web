"use client"
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { IMAGES } from "../constant/theme";
import Link from "next/link";
import { wecaredata2 } from "../constant/alldata";

// Evita advertencias de SSR en Next.js
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Función matemática que calcula la silueta vectorial exacta de la tarjeta grande
// Se deforma en la esquina inferior derecha con un recorte cóncavo curvado (notch)
// para dar espacio a la tarjeta pequeña sin llegar a tocarla nunca
function getCardPath(w: number, h: number, r = 22, cw = 74, ch = 74, cr = 14) {
    if (w <= 0 || h <= 0) return "";
    const pad = 1; // 1px de compensación para trazo centrado de 2px
    const x0 = pad;
    const y0 = pad;
    const x1 = w - pad;
    const y1 = h - pad;

    const safeCw = Math.min(cw, (x1 - x0) * 0.45);
    const safeCh = Math.min(ch, (y1 - y0) * 0.45);
    const safeR = Math.min(r, (x1 - x0 - safeCw) / 2, (y1 - y0 - safeCh) / 2);
    const safeCr = Math.min(cr, safeCw / 3, safeCh / 3);

    return [
        `M ${x0 + safeR} ${y0}`,
        `H ${x1 - safeR}`,
        `A ${safeR} ${safeR} 0 0 1 ${x1} ${y0 + safeR}`,
        `V ${y1 - safeCh - safeCr}`,
        `A ${safeCr} ${safeCr} 0 0 1 ${x1 - safeCr} ${y1 - safeCh}`,
        `H ${x1 - safeCw + safeCr}`,
        `A ${safeCr} ${safeCr} 0 0 0 ${x1 - safeCw} ${y1 - safeCh + safeCr}`,
        `V ${y1 - safeCr}`,
        `A ${safeCr} ${safeCr} 0 0 1 ${x1 - safeCw - safeCr} ${y1}`,
        `H ${x0 + safeR}`,
        `A ${safeR} ${safeR} 0 0 1 ${x0} ${y1 - safeR}`,
        `V ${y0 + safeR}`,
        `A ${safeR} ${safeR} 0 0 1 ${x0 + safeR} ${y0}`,
        'Z'
    ].join(' ');
}

// Componente individual de Tarjeta de Servicio
function ServiceCard({ data, isHovered, onHover, onLeave }: {
    data: (typeof wecaredata2)[0];
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ w: 560, h: 260 });
    const [isMobile, setIsMobile] = useState(false);
    const touchStartY = useRef<number>(0);

    useIsomorphicLayoutEffect(() => {
        if (!cardRef.current) return;
        const update = () => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                setSize({ w: Math.round(rect.width), h: Math.round(rect.height) });
            }
            setIsMobile(window.innerWidth <= 767);
        };
        update();
        const ro = new ResizeObserver(update);
        ro.observe(cardRef.current);
        window.addEventListener('resize', update);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', update);
        };
    }, []);

    const cutoutSize = isMobile ? 68 : 74;
    const cornerRadius = isMobile ? 18 : 22;
    const notchRadius = isMobile ? 12 : 14;

    const pathD = getCardPath(size.w, size.h, cornerRadius, cutoutSize, cutoutSize, notchRadius);

    return (
        <div 
            id={data.slug}
            ref={cardRef}
            className={`wecare2-card-wrapper ${isHovered ? 'active' : ''}`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onTouchStart={(e) => {
                touchStartY.current = e.touches[0].clientY;
                onHover();
            }}
            onTouchMove={(e) => {
                if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
                    onLeave();
                }
            }}
            onTouchEnd={() => {
                onLeave();
            }}
            onTouchCancel={() => {
                onLeave();
            }}
        >
            {/* Silueta vectorial SVG de la tarjeta grande que se deforma en la esquina */}
            <svg
                className="wecare2-card-svg"
                width={size.w}
                height={size.h}
                viewBox={`0 0 ${size.w} ${size.h}`}
                aria-hidden="true"
            >
                <defs>
                    <clipPath id={`wecare2-clip-${data.id}`}>
                        <path d={pathD} />
                    </clipPath>
                </defs>

                {/* Fondo blanco y borde institucional morado */}
                <path
                    d={pathD}
                    fill={isHovered ? "#4B1D96" : "#ffffff"}
                    stroke="#E9D8FF"
                    strokeWidth="2"
                    className="wecare2-card-path"
                />

                {/* Fondo Fisioterapia.png activado al pasar el mouse o tocar con el dedo en móvil */}
                <g clipPath={`url(#wecare2-clip-${data.id})`}>
                    <image
                        href={IMAGES.fisioterapia.src}
                        x="0"
                        y="0"
                        width={size.w}
                        height={size.h}
                        preserveAspectRatio="xMidYMid slice"
                        className="wecare2-texture-image"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            transition: 'opacity 0.28s ease'
                        }}
                    />
                </g>
            </svg>

            {/* Contenido de la tarjeta grande */}
            <div className="wecare2-card-content">
                <div>
                    <h3 className="wecare2-card-title">
                        <Link href={`/${data.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {data.title}
                        </Link>
                    </h3>
                    <p className="wecare2-card-desc">{data.description}</p>
                </div>
                <div className="wecare2-card-footer">
                    <Link href={`/${data.slug}`} className="wecare2-link-btn">
                        <span>Más Información</span>
                    </Link>
                </div>
            </div>

            {/* Tarjeta pequeña abajo a la derecha con avión de papel */}
            <Link
                href={`/${data.slug}`}
                className="wecare2-square-btn"
                title={`Más información sobre ${data.title}`}
                aria-label={`Ver detalles de ${data.title}`}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </Link>
        </div>
    );
}

export default function Wecare2() {
    const [hover, setHover] = useState<number | null>(null);

    return (
        <div className="wecare2-container">
            <style>{`
                /* ============================================================
                   TARJETAS WECARE2 - SERVICIOS DE FISIOTERAPIA
                   - Tarjeta grande: se deforma en la esquina inferior derecha
                     para darle espacio al cuadrado pequeño sin tocarlo.
                   - Tarjeta pequeña: ubicada abajo a la derecha, independiente
                     (separación limpia, sin líneas de unión).
                   - Texto justificado de extremo a extremo ("como libro").
                   ============================================================ */
                .wecare2-container {
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .wecare2-themed {
                    display: flex !important;
                    flex-wrap: wrap !important;
                    gap: 26px !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                }
                .wecare2-card-col {
                    flex: 1 1 calc((100% - 26px) / 2) !important;
                    width: calc((100% - 26px) / 2) !important;
                    max-width: calc((100% - 26px) / 2) !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    box-sizing: border-box !important;
                }

                /* Contenedor relativo de la tarjeta */
                .wecare2-card-wrapper {
                    position: relative !important;
                    width: 100% !important;
                    min-height: 250px !important;
                    padding: 26px 28px 24px 28px !important;
                    box-sizing: border-box !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: space-between !important;
                    background: transparent !important;
                    transition: transform 0.28s ease !important;
                }
                .wecare2-card-wrapper:hover,
                .wecare2-card-wrapper.active {
                    transform: translateY(-5px) !important;
                }

                /* Silueta SVG de la tarjeta grande */
                .wecare2-card-svg {
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    pointer-events: none !important;
                    z-index: 0 !important;
                    overflow: visible !important;
                }
                .wecare2-card-path {
                    fill: #ffffff !important;
                    stroke: #4B1D96 !important;
                    stroke-width: 2 !important;
                    transition: fill 0.28s ease, stroke 0.28s ease !important;
                }
                .wecare2-texture-image {
                    opacity: 0 !important;
                    transition: opacity 0.28s ease !important;
                }

                /* Estado ACTIVO unificado (activado por mouse en desktop o al presionar con el dedo en móvil) */
                .wecare2-card-wrapper.active {
                    transform: translateY(-5px) !important;
                }
                .wecare2-card-wrapper.active .wecare2-card-path {
                    fill: #4B1D96 !important;
                }
                .wecare2-card-wrapper.active .wecare2-texture-image {
                    opacity: 1 !important;
                }
                .wecare2-card-wrapper.active .wecare2-card-title {
                    color: #ffffff !important;
                }
                .wecare2-card-wrapper.active .wecare2-card-title:after {
                    background: #ffffff !important;
                }
                .wecare2-card-wrapper.active .wecare2-card-desc {
                    color: #FFFFFF !important;
                }
                .wecare2-card-wrapper.active .wecare2-link-btn {
                    color: #ffffff !important;
                }
                .wecare2-card-wrapper.active .wecare2-link-btn i {
                    color: #ffffff !important;
                }
                .wecare2-card-wrapper.active .wecare2-square-btn {
                    background-color: #4B1D96 !important;
                    border-color: #4B1D96 !important;
                    color: #ffffff !important;
                    transform: scale(1.08) !important;
                }
                .wecare2-card-wrapper.active .wecare2-square-btn svg {
                    color: #ffffff !important;
                    transform: translate(2px, -2px) !important;
                }

                /* Hover solo para dispositivos con mouse real (evita bugs de hover pegajoso en móvil) */
                @media (hover: hover) and (pointer: fine) {
                    .wecare2-card-wrapper:hover {
                        transform: translateY(-5px) !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-card-path {
                        fill: #4B1D96 !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-texture-image {
                        opacity: 1 !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-card-title {
                        color: #ffffff !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-card-title:after {
                        background: #ffffff !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-card-desc {
                        color: #FFFFFF !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-link-btn {
                        color: #ffffff !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-link-btn i {
                        color: #ffffff !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-link-btn:hover {
                        color: #FFFFFF !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-link-btn:hover i {
                        color: #FFFFFF !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-square-btn {
                        background-color: #4B1D96 !important;
                        border-color: #4B1D96 !important;
                        color: #ffffff !important;
                        transform: scale(1.08) !important;
                    }
                    .wecare2-card-wrapper:hover .wecare2-square-btn svg {
                        color: #ffffff !important;
                        transform: translate(2px, -2px) !important;
                    }
                }

                /* Contenido textual dentro de la tarjeta grande */
                .wecare2-card-content {
                    position: relative !important;
                    z-index: 1 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    height: 100% !important;
                    justify-content: space-between !important;
                    pointer-events: auto !important;
                }

                /* Título del servicio centrado */
                .wecare2-card-title {
                    color: #211638 !important;
                    font-size: 21px !important;
                    font-weight: 700 !important;
                    line-height: 1.35 !important;
                    margin: 0 0 16px 0 !important;
                    padding-bottom: 14px !important;
                    position: relative !important;
                    text-align: center !important;
                    transition: color 0.3s ease !important;
                }
                .wecare2-card-title a {
                    color: inherit !important;
                    text-decoration: none !important;
                }
                .wecare2-card-title:after {
                    content: "" !important;
                    position: absolute !important;
                    left: 0 !important;
                    bottom: 0 !important;
                    width: 100% !important;
                    height: 2px !important;
                    background: #4B1D96 !important;
                    transition: background 0.3s ease !important;
                }

                /* Descripción: Justificada de extremo a extremo ("como libro") */
                .wecare2-card-desc {
                    color: #211638 !important;
                    font-size: 15px !important;
                    line-height: 1.65 !important;
                    margin: 0 0 20px 0 !important;
                    padding: 0 !important;
                    text-align: justify !important;
                    text-justify: inter-word !important;
                    hyphens: auto !important;
                    transition: color 0.3s ease !important;
                }

                /* Pie de tarjeta con enlace Más Información */
                .wecare2-card-footer {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: flex-start !important;
                    width: 100% !important;
                    margin-top: auto !important;
                    padding-top: 10px !important;
                    padding-right: 85px !important; /* Espacio para que el texto no toque la esquina recortada */
                    box-sizing: border-box !important;
                }
                .wecare2-link-btn {
                    color: #211638 !important;
                    font-size: 15px !important;
                    font-weight: 700 !important;
                    text-decoration: none !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                    transition: color 0.25s ease !important;
                }
                .wecare2-link-btn:hover {
                    color: #7B3FE4 !important;
                }
                .wecare2-link-btn i {
                    color: #211638 !important;
                    font-size: 16px !important;
                    transition: transform 0.25s ease, color 0.25s ease !important;
                }
                .wecare2-link-btn:hover i {
                    color: #7B3FE4 !important;
                    transform: translateX(4px) !important;
                }

                /* Tarjeta pequeña abajo a la derecha: morado institucional con avión de papel */
                .wecare2-square-btn {
                    position: absolute !important;
                    right: 2px !important;
                    bottom: 2px !important;
                    width: 56px !important;
                    height: 56px !important;
                    min-width: 56px !important;
                    min-height: 56px !important;
                    background-color: #4B1D96 !important;
                    border: 2px solid #4B1D96 !important;
                    border-radius: 16px !important;
                    color: #ffffff !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-decoration: none !important;
                    z-index: 2 !important;
                    cursor: pointer !important;
                    box-sizing: border-box !important;
                    transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.22s ease, color 0.25s ease !important;
                }
                .wecare2-square-btn svg {
                    color: #ffffff !important;
                    transition: transform 0.25s ease, color 0.25s ease !important;
                }
                .wecare2-square-btn:hover {
                    background-color: #7B3FE4 !important;
                    border-color: #7B3FE4 !important;
                    transform: scale(1.12) !important;
                }
                .wecare2-square-btn:hover svg {
                    color: #ffffff !important;
                }

                @media (max-width: 991px) {
                    .wecare2-card-col {
                        flex: 1 1 100% !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .wecare2-card-wrapper {
                        padding: 24px 22px 20px 22px !important;
                        min-height: auto !important;
                    }
                    .wecare2-card-title {
                        font-size: 19px !important;
                    }
                    .wecare2-card-desc {
                        font-size: 14.5px !important;
                        margin-bottom: 16px !important;
                    }
                }

                @media (max-width: 767px) {
                    .wecare2-square-btn {
                        width: 50px !important;
                        height: 50px !important;
                        min-width: 50px !important;
                        min-height: 50px !important;
                        border-radius: 14px !important;
                        right: 2px !important;
                        bottom: 2px !important;
                    }
                    .wecare2-square-btn svg {
                        width: 19px !important;
                        height: 19px !important;
                    }
                    .wecare2-card-footer {
                        padding-right: 75px !important;
                    }
                }
            `}</style>

            <div className="row counter-reset wecare2-themed">
                {wecaredata2.map((data, i) => (
                    <div 
                        className="wecare2-card-col wow fadeInUp"
                        data-wow-delay={data.delay} 
                        data-wow-duration="0.8s" 
                        key={i}
                    >
                        <ServiceCard
                            data={data}
                            isHovered={hover === data.id}
                            onHover={() => setHover(data.id)}
                            onLeave={() => setHover(null)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}