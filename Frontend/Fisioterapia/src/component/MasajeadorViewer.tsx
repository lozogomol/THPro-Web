"use client"
import { useEffect, useState } from "react";

const MasajeadorViewer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className="hero-3d-masajeador"
            dangerouslySetInnerHTML={{
                __html: `<model-viewer
                    src="/fisioterapia/assets/Masajeador.glb"
                    alt="Masajeador 3D"
                    auto-rotate
                    auto-rotate-delay="0"
                    rotation-per-second="30deg"
                    camera-orbit="45deg 65deg 2.5m"
                    disable-zoom
                    disable-pan
                    disable-tap
                    interaction-prompt="none"
                    style="width:100%;height:100%;pointer-events:none;--poster-color:transparent;"
                ></model-viewer>`
            }}
        />
    );
};

export default MasajeadorViewer;
