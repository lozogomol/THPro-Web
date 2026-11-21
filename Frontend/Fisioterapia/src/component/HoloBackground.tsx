// Fondo morado fijo detrás de todo (z-index: -1) con luz volumétrica realista.
// Solo CSS: ver app/thpro-holografico.css
import React from "react";

// Haces de luz: pocos, anchos e irregulares (como luz real entrando por una ventana).
// ang = dirección, w = ancho, o = intensidad, b = difuminado, d = duración del vaivén
const RAYS = [
    { ang: -28, w: 14, o: 0.30, b: 38, d: 17, delay: -3 },
    { ang: -36, w: 6,  o: 0.21, b: 22, d: 13, delay: -8 },
    { ang: -43, w: 18, o: 0.24, b: 45, d: 21, delay: -1 },
    { ang: -51, w: 8,  o: 0.33, b: 26, d: 15, delay: -11 },
    { ang: -58, w: 22, o: 0.18, b: 55, d: 24, delay: -6 },
    { ang: -66, w: 10, o: 0.22, b: 30, d: 19, delay: -14 },
];

// Partículas de polvo flotando dentro de la luz (posiciones fijas para evitar errores de hidratación)
const DUST = [
    { x: 12, y: 18, s: 3, d: 22, delay: -4 }, { x: 22, y: 34, s: 2, d: 28, delay: -12 },
    { x: 30, y: 12, s: 2, d: 25, delay: -7 },  { x: 8,  y: 42, s: 3, d: 31, delay: -19 },
    { x: 38, y: 28, s: 2, d: 26, delay: -2 },  { x: 18, y: 55, s: 2, d: 34, delay: -15 },
    { x: 45, y: 46, s: 3, d: 29, delay: -9 },  { x: 27, y: 66, s: 2, d: 36, delay: -21 },
    { x: 52, y: 22, s: 2, d: 24, delay: -5 },  { x: 35, y: 50, s: 2, d: 30, delay: -13 },
    { x: 15, y: 28, s: 2, d: 27, delay: -17 }, { x: 58, y: 38, s: 2, d: 33, delay: -10 },
    { x: 42, y: 8,  s: 3, d: 23, delay: -6 },  { x: 25, y: 44, s: 2, d: 32, delay: -24 },
];

export default function HoloBackground() {
    return (
        <div className="thpro-holo" aria-hidden="true">
            <span className="thpro-holo__beams" />
            <span className="thpro-holo__sparks" />

            {/* Luz volumétrica realista */}
            <div className="thpro-light">
                <span className="thpro-light__bloom" />
                {RAYS.map((r, i) => (
                    <span
                        key={i}
                        className="thpro-light__ray"
                        style={{
                            width: `${r.w}vmax`,
                            marginLeft: `-${r.w / 2}vmax`,
                            filter: `blur(${r.b}px)`,
                            ["--ang" as string]: `${r.ang}deg`,
                            ["--op" as string]: r.o,
                            animationDuration: `${r.d}s`,
                            animationDelay: `${r.delay}s`,
                        } as React.CSSProperties}
                    />
                ))}
                {DUST.map((p, i) => (
                    <span
                        key={`d${i}`}
                        className="thpro-light__dust"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.s,
                            height: p.s,
                            animationDuration: `${p.d}s`,
                            animationDelay: `${p.delay}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
