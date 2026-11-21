"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { useState } from "react";
import { servicedata } from "../constant/alldata";
import Image from "next/image";

function Servicesdata() {
    return (
        <>
            <style>{`
                .service-card-thpro {
                    background-color: #1E40AF !important;
                    background-blend-mode: color-burn !important;
                    background-size: cover !important;
                    background-position: bottom right !important;
                    border-radius: 20px !important;
                    border: none !important;
                    box-shadow: 0 12px 30px rgba(30, 64, 175, 0.2) !important;
                    padding: 30px 24px !important;
                    height: 100% !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: space-between !important;
                    position: relative;
                }

                .service-card-thpro .dz-title {
                    color: #ffffff !important;
                    font-size: 20px !important;
                    font-weight: 700 !important;
                    margin-bottom: 12px !important;
                }
                .service-card-thpro p {
                    color: rgba(255, 255, 255, 0.85) !important;
                    font-size: 14px !important;
                    line-height: 1.6 !important;
                    margin-bottom: 20px !important;
                }
                .service-card-thpro .dz-media {
                    border-radius: 14px !important;
                    overflow: hidden !important;
                    margin-bottom: 20px !important;
                }
                .service-card-thpro .dz-media img {
                    border-radius: 14px !important;
                    width: 100% !important;
                    height: 180px !important;
                    object-fit: cover !important;
                }
                .service-card-thpro .icon-link-hover-end {
                    color: #ffffff !important;
                    font-weight: 600 !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    gap: 8px !important;
                    text-decoration: none !important;
                }
            `}</style>
            {servicedata.map((data, i) => {
                return (
                    <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                        <div className="service-card-thpro background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg2png.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom right' }}>
                            <div className="icon-content">
                                <h3 className="dz-title">{data.title}</h3>
                                <p>Tratamientos especializados para tu salud, recuperación física y bienestar integral.</p>
                            </div>
                            <div className="dz-media">
                                <Image src={data.image} alt={data.title} />
                            </div>
                            <div className="icon-footer">
                                <Link href="/services" className="icon-link-hover-end">
                                    Ver Detalles {" "}
                                    <i className="feather icon-arrow-right-circle" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Servicesdata;