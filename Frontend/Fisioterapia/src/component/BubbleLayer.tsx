"use client"
import React from "react";

// Burbujas de vidrio translúcidas que suben flotando sobre el fondo animado.
// Valores fijos (no aleatorios) para evitar diferencias entre servidor y cliente.
const BUBBLES = [
    { left: "6%",  size: 70,  dur: 19, delay: -2,  drift: "30px" },
    { left: "15%", size: 130, dur: 26, delay: -14, drift: "-40px" },
    { left: "27%", size: 44,  dur: 15, delay: -6,  drift: "20px" },
    { left: "38%", size: 96,  dur: 23, delay: -18, drift: "-25px" },
    { left: "50%", size: 58,  dur: 17, delay: -9,  drift: "35px" },
    { left: "61%", size: 160, dur: 30, delay: -4,  drift: "-30px" },
    { left: "72%", size: 38,  dur: 14, delay: -11, drift: "18px" },
    { left: "81%", size: 84,  dur: 21, delay: -16, drift: "-22px" },
    { left: "90%", size: 110, dur: 25, delay: -8,  drift: "28px" },
    { left: "96%", size: 50,  dur: 16, delay: -1,  drift: "-18px" },
];

export default function BubbleLayer({ count = BUBBLES.length }: { count?: number }) {
    return (
        <div className="thpro-bubbles" aria-hidden="true">
            {BUBBLES.slice(0, count).map((b, i) => (
                <span
                    key={i}
                    className="thpro-bubble"
                    style={{
                        left: b.left,
                        width: b.size,
                        height: b.size,
                        ["--thpro-dur" as string]: `${b.dur}s`,
                        ["--thpro-delay" as string]: `${b.delay}s`,
                        ["--thpro-drift" as string]: b.drift,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
}
