"use client"
import Link from "next/link";
import { IMAGES, ANIMBG, ANIMBG_STYLE } from "../constant/theme";
import Image from "next/image";

function Footer() {
    return (
        <>
            <style>{`
                .thpro-site-footer {
                    background: url(${IMAGES.fisioterapia.src}) center / cover no-repeat !important;
                    background-image: url(${IMAGES.fisioterapia.src}) !important;
                    background-size: cover !important;
                    background-position: center !important;
                    background-repeat: no-repeat !important;
                    animation: none !important;
                    color: #ffffff !important;
                    position: relative !important;
                    overflow: hidden !important;
                }
                .thpro-site-footer::before {
                    display: none !important;
                }
                .thpro-site-footer > * {
                    position: relative !important;
                    z-index: 2 !important;
                }
                .thpro-footer-logo-img {
                    max-height: 56px !important;
                    width: auto !important;
                    object-fit: contain !important;
                    margin-bottom: 14px !important;
                    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3)) !important;
                }
                .thpro-footer-desc {
                    color: #FFFFFF !important;
                    font-size: 14px !important;
                    line-height: 1.6 !important;
                    margin: 0 !important;
                    max-width: 440px !important;
                }
                .thpro-footer-title {
                    color: #FFFFFF !important;
                    font-size: 18px !important;
                    font-weight: 800 !important;
                    margin-bottom: 16px !important;
                    letter-spacing: 0.3px !important;
                }
                .thpro-footer-list {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 10px !important;
                }
                .thpro-footer-list li a {
                    color: #FFFFFF !important;
                    text-decoration: none !important;
                    font-size: 14px !important;
                    font-weight: 500 !important;
                    transition: color 0.2s ease, padding-left 0.2s ease !important;
                    display: inline-block !important;
                }
                .thpro-footer-list li a:hover {
                    color: #FFFFFF !important;
                    padding-left: 6px !important;
                }
                .thpro-footer-contact-item {
                    display: flex !important;
                    align-items: flex-start !important;
                    gap: 10px !important;
                    color: #FFFFFF !important;
                    font-size: 13.5px !important;
                    line-height: 1.45 !important;
                    margin-bottom: 12px !important;
                }
                .thpro-footer-contact-item i {
                    color: #FFFFFF !important;
                    font-size: 16px !important;
                    margin-top: 3px !important;
                    flex-shrink: 0 !important;
                }
                .thpro-footer-contact-item a {
                    color: #FFFFFF !important;
                    text-decoration: none !important;
                    font-weight: 600 !important;
                }
                .thpro-footer-contact-item a:hover {
                    color: #FFFFFF !important;
                }
                .thpro-footer-socials {
                    display: flex !important;
                    gap: 18px !important;
                    align-items: center !important;
                    flex-wrap: wrap !important;
                    margin-top: 16px !important;
                }
                /* Iconos limpios de redes sociales sin circulo, sin fondo ni borde */
                .thpro-footer-social-btn {
                    width: auto !important;
                    height: auto !important;
                    border-radius: 0 !important;
                    background: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                    color: #ffffff !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    text-decoration: none !important;
                    font-size: 20px !important;
                    padding: 0 !important;
                    transition: color 0.25s ease, transform 0.2s ease !important;
                }
                .thpro-footer-social-btn svg {
                    width: 20px !important;
                    height: 20px !important;
                    fill: currentColor !important;
                    transition: fill 0.25s ease !important;
                }
                .thpro-footer-social-btn i {
                    font-size: 20px !important;
                    color: currentColor !important;
                    transition: color 0.25s ease !important;
                }
                .thpro-footer-social-btn:hover {
                    background: transparent !important;
                    border: none !important;
                    color: #FFFFFF !important;
                    transform: translateY(-2px) scale(1.15) !important;
                }
                .thpro-footer-social-btn:hover svg {
                    fill: #FFFFFF !important;
                }
                .thpro-footer-social-btn:hover i {
                    color: #FFFFFF !important;
                }
                .thpro-footer-bottom {
                    padding: 20px 0 !important;
                    border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
                    margin-top: 35px !important;
                    text-align: center !important;
                    color: #FFFFFF !important;
                    font-size: 13.5px !important;
                }
            `}</style>

            <footer className="thpro-site-footer">
                <div className="footer-top" style={{ paddingTop: '95px', paddingBottom: '10px' }}>
                    <div className="container">
                        <div className="row g-4">
                            {/* Columna 1: Logo y Acerca de THPro S.R.L. */}
                            <div className="col-xl-5 col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="widget widget_about me-lg-3">
                                    <div className="footer-logo">
                                        <Link href="/">
                                            <Image 
                                                src={IMAGES.logoTHPro} 
                                                alt="THPro S.R.L. Logo" 
                                                className="thpro-footer-logo-img" 
                                                priority
                                            />
                                        </Link>
                                    </div>
                                    <p className="thpro-footer-desc">
                                        <strong>TALENTO HUMANO PRODUCTIVO - THPro S.R.L.</strong><br />
                                        Especialistas en Fisioterapia, Rehabilitación Integral, Terapia a Domicilio y Bienestar Clínico. Atención profesional en La Paz, Bolivia.
                                    </p>
                                </div>
                            </div>

                            {/* Columna 2: Servicios de Fisioterapia */}
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.8s">
                                <h3 className="thpro-footer-title">Servicios</h3>
                                <ul className="thpro-footer-list">
                                    <li><Link href="/fisioterapia-a-domicilio">Fisioterapia a Domicilio</Link></li>
                                    <li><Link href="/fisioterapia-pediatrica">Fisioterapia Pediátrica</Link></li>
                                    <li><Link href="/fisioterapia-geriatrica">Fisioterapia Geriátrica</Link></li>
                                    <li><Link href="/fisioterapia-general">Fisioterapia General</Link></li>
                                    <li><Link href="/masaje-de-cuerpo-completo">Masaje de Cuerpo Completo</Link></li>
                                    <li><Link href="/masaje-de-medio-cuerpo">Masaje de Medio Cuerpo</Link></li>
                                    <li><Link href="/ergonomia-laboral">Ergonomía Laboral</Link></li>
                                    <li><Link href="/masaje-expres">Masaje Exprés</Link></li>
                                </ul>
                            </div>

                            {/* Columna 3: Contacto y Todas las redes sociales con iconos */}
                            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <h3 className="thpro-footer-title">Contacto</h3>
                                <div className="thpro-footer-contact-item">
                                    <i className="feather icon-phone" />
                                    <div>
                                        <strong>WhatsApp / Celular:</strong><br />
                                        <a href="https://api.whatsapp.com/send?phone=59173087757" target="_blank" rel="noopener noreferrer">
                                            +591 73087757
                                        </a>
                                    </div>
                                </div>
                                <div className="thpro-footer-contact-item">
                                    <i className="feather icon-mail" />
                                    <div>
                                        <strong>Correo Electrónico:</strong><br />
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gerencia@thpro.com.bo" target="_blank" rel="noopener noreferrer">
                                            gerencia@thpro.com.bo
                                        </a>
                                    </div>
                                </div>
                                <div className="thpro-footer-contact-item">
                                    <i className="feather icon-map-pin" />
                                    <div>
                                        <strong>Ubicación:</strong><br />
                                        TALENTO HUMANO PRODUCTIVO - THPro S.R.L.<br />
                                        La Paz, Bolivia
                                    </div>
                                </div>

                                {/* Todas las redes sociales con iconos */}
                                <div className="thpro-footer-socials">
                                    {/* TikTok */}
                                    <a 
                                        href="https://www.tiktok.com/@thpro.srl?fbclid=IwY2xjawVMjHRleHRuA2FlbQIxMABwZG9mAWJyaWQRMURBUDFjVEFZWVlUQ1NBbTFzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe6ldmv3AKBfg2ARseTHbQ0NEMLsPI_4eGZjjWCnKW5xOTp2Lbm57dI74uNUc_aem_IUwlEb8tjW6Ki48en0YRfg" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="thpro-footer-social-btn" 
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
                                        className="thpro-footer-social-btn" 
                                        title="Facebook THPro S.R.L."
                                    >
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>

                                    {/* Instagram */}
                                    <a 
                                        href="https://www.instagram.com/thpro.srl?fbclid=IwY2xjawVMjGJleHRuA2FlbQIxMABwZG9mAWJyaWQRMURBUDFjVEFZWVlUQ1NBbTFzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe5ERXdfmhMJgd7Z0_RnEiePArUENUE1XuEf6WXIXCTOjoSWHgyeDppfnvapU_aem_8bF3MAgFhRhYE0FmVikkMA" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="thpro-footer-social-btn" 
                                        title="Instagram THPro S.R.L."
                                    >
                                        <i className="fa-brands fa-instagram" />
                                    </a>

                                    {/* WhatsApp */}
                                    <a 
                                        href="https://api.whatsapp.com/send?phone=59173087757&text=Hola%20THPro%20S.R.L.,%20deseo%20m%C3%A1s%20informaci%C3%B3n." 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="thpro-footer-social-btn" 
                                        title="WhatsApp: 73087757"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                        </svg>
                                    </a>

                                    {/* Gmail */}
                                    <a 
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=gerencia@thpro.com.bo&su=Contacto%20THPro%20S.R.L." 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="thpro-footer-social-btn" 
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

                {/* Footer Bottom: Derechos reservados */}
                <div className="thpro-footer-bottom">
                    <div className="container">
                        <p style={{ margin: 0 }}>
                            © 2026 <strong>TALENTO HUMANO PRODUCTIVO - THPro S.R.L.</strong> Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
