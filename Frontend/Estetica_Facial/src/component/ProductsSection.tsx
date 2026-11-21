"use client"
import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constant/theme';

interface ProductItem {
    id: number;
    title: string;
    image: any;
}

const products: ProductItem[] = [
    {
        id: 1,
        title: "Limpiadores Faciales",
        image: IMAGES.about1
    },
    {
        id: 2,
        title: "Sérum de Ácido Hialurónico",
        image: IMAGES.about7
    },
    {
        id: 3,
        title: "Protector Solar Facial",
        image: IMAGES.about8
    },
    {
        id: 4,
        title: "Cremas Hidratantes",
        image: IMAGES.about9
    },
    {
        id: 5,
        title: "Tónicos Equilibrantes",
        image: IMAGES.about10
    },
    {
        id: 6,
        title: "Mascarillas Faciales",
        image: IMAGES.about11
    }
];

export default function ProductsSection() {
    return (
        <div className="products-section-container">
            <style>{`
                .products-section-container {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    box-sizing: border-box !important;
                }
                .products-header {
                    text-align: center !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: center !important;
                    margin-top: 0 !important;
                    margin-bottom: 26px !important;
                    padding: 0 !important;
                }
                .products-title {
                    color: #500724 !important;
                    font-size: clamp(24px, 2.4vw, 36px) !important;
                    font-weight: 800 !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    line-height: 1.15 !important;
                    text-align: center !important;
                    text-shadow: none !important;
                }
                .products-grid {
                    display: grid !important;
                    grid-template-columns: repeat(3, 1fr) !important;
                    gap: 26px !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    box-sizing: border-box !important;
                }
                .product-card {
                    background: #ffffff !important;
                    border: 2px solid #FCE7F3 !important;
                    border-radius: 20px !important;
                    overflow: hidden !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    text-align: center !important;
                    width: 100% !important;
                    height: 100% !important;
                    transition: transform 0.25s ease, border-color 0.25s ease !important;
                    box-shadow: none !important;
                    box-sizing: border-box !important;
                }
                .product-card:hover {
                    transform: translateY(-4px) !important;
                    border-color: #EC4899 !important;
                    box-shadow: none !important;
                }
                .product-img-box {
                    position: relative !important;
                    width: 100% !important;
                    height: 220px !important;
                    background: #ffffff !important;
                    overflow: hidden !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                .product-img-box img {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover !important;
                    transition: transform 0.4s ease !important;
                }
                .product-card:hover .product-img-box img {
                    transform: scale(1.05) !important;
                }
                .product-body {
                    padding: 18px 20px 22px 20px !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    text-align: center !important;
                    width: 100% !important;
                    flex: 1 !important;
                    gap: 14px !important;
                    box-sizing: border-box !important;
                }
                .product-name {
                    color: #500724 !important;
                    font-size: 17px !important;
                    font-weight: 800 !important;
                    margin: 0 !important;
                    line-height: 1.35 !important;
                    text-align: center !important;
                    text-shadow: none !important;
                    transition: color 0.25s ease !important;
                }
                .product-card:hover .product-name {
                    color: #EC4899 !important;
                }
                .product-btn {
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    gap: 8px !important;
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important;
                    color: #ffffff !important;
                    padding: 10px 22px !important;
                    border-radius: 12px !important;
                    font-size: 14px !important;
                    font-weight: 700 !important;
                    text-decoration: none !important;
                    border: 2px solid #F3167E !important;
                    transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease !important;
                    cursor: pointer !important;
                }
                .product-btn svg {
                    flex-shrink: 0 !important;
                }
                .product-btn:hover {
                    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 220, 238, 0.18) 48%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 220, 238, 0.18) 52%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at center, rgba(249, 22, 129, 0.95) 0, rgba(249, 22, 129, 0) 60%), radial-gradient(circle at center, rgba(141, 18, 90, 0.95) 0, rgba(141, 18, 90, 0) 60%), linear-gradient(135deg, #8D125A 0%, #F91681 100%) !important; background-size: 250% 100%, 250% 250%, 250% 250%, 100% 100% !important; background-repeat: no-repeat !important; animation: var(--thpro-holo-anim) !important; filter: brightness(1.12) !important;
                    border-color: #CE1470 !important;
                    color: #ffffff !important;
                    transform: translateY(-2px) !important;
                }

                @media (max-width: 991px) {
                    .products-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 20px !important;
                    }
                }

                /* Modo web de móvil: más grande, autoajustable a todo el ancho sin límite de 360px */
                @media (max-width: 767px) {
                    .products-grid {
                        grid-template-columns: 1fr !important;
                        gap: 22px !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        margin: 0 !important;
                    }
                    .product-card {
                        width: 100% !important;
                        max-width: 100% !important;
                        border-radius: 22px !important;
                    }
                    .product-img-box {
                        height: 260px !important;
                    }
                    .product-body {
                        padding: 22px 20px 24px 20px !important;
                        gap: 16px !important;
                    }
                    .product-name {
                        font-size: 19px !important;
                        font-weight: 800 !important;
                    }
                    .product-btn {
                        width: 100% !important;
                        padding: 12px 24px !important;
                        font-size: 15px !important;
                        border-radius: 14px !important;
                    }
                }

                @media (max-width: 480px) {
                    .product-img-box {
                        height: 240px !important;
                    }
                    .product-body {
                        padding: 18px 16px 20px 16px !important;
                    }
                    .product-name {
                        font-size: 18px !important;
                    }
                }
            `}</style>

            <div className="products-header wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <h2 className="products-title">Productos de Estética Facial</h2>
            </div>

            {/* Cuadrícula directa autoajustable de extremo a extremo */}
            <div className="products-grid">
                {products.map((item, idx) => (
                    <div 
                        key={item.id} 
                        className="product-card wow fadeInUp" 
                        data-wow-delay={`${0.2 + idx * 0.1}s`} 
                        data-wow-duration="0.8s"
                    >
                        <div className="product-img-box">
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                width={400} 
                                height={260}
                            />
                        </div>
                        <div className="product-body">
                            <h3 className="product-name">{item.title}</h3>
                            <a 
                                href={`https://api.whatsapp.com/send?phone=59173087757&text=Hola%20THPro%20S.R.L.,%20deseo%20consultar%20sobre%20el%20producto:%20${encodeURIComponent(item.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="product-btn"
                                title={`Consultar por ${item.title}`}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                </svg>
                                <span>Consultar Producto</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
