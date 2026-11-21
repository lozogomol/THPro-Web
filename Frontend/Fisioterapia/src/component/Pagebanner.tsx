import Link from "next/link";
import { IMAGES, SVGICONS } from "../constant/theme";
import Image from "next/image";

interface titleProp{
    title : string;
}

function Pagebanner({title} : titleProp) {
    return (
        <>
            <div className="dz-bnr-inr style-2 dz-bnr-inr-md">
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <div className="dz-bnr-inr-flex">
                            <div className="bnr-info">
                                <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{title}</h1>
                                <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/"> Home</Link></li>
                                        <li className="breadcrumb-item">{title}</li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="bnr-media" data-bottom-top="transform: translateY(-100px)" data-top-bottom="transform: translateY(100px)">
                                <Image src={IMAGES.bnr1} alt="" className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" />
                            </div>
                        </div>
                    </div>
                </div>
                <svg className="banner-shape" viewBox="0 0 1920 180" fill="none" xmlns="http://www.w3.org/2000/svg"
                    dangerouslySetInnerHTML={{__html : SVGICONS.bannershape}}
                >
                </svg>  
                <div className="banner-shape4"></div>
                <div className="banner-shape5"></div>
            </div>
        </>
    )
}
export default Pagebanner;
