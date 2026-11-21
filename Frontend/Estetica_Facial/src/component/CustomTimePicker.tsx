"use client";
import React, { useState, useEffect, useRef } from "react";

interface CustomTimePickerProps {
    value: string; // HH:MM
    onChange: (timeStr: string) => void;
    selectedDate?: string; // YYYY-MM-DD
}

const MORNING_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
const AFTERNOON_SLOTS = ["15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"];

export default function CustomTimePicker({ value, onChange, selectedDate }: CustomTimePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectTime = (slot: string) => {
        onChange(slot);
        setIsOpen(false);
    };

    return (
        <div className="custom-timepicker-container" ref={containerRef} style={{ position: "relative", width: "100%" }}>
            <div 
                className="consultation-card-box consultation-clickable-card"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer", userSelect: "none" }}
            >
                <span style={{ color: "#500724", fontWeight: 700, fontSize: "16px", letterSpacing: "0.5px", minHeight: "24px", display: "inline-flex", alignItems: "center" }}>
                    {value ? value : "\u00A0"}
                </span>
            </div>

            {isOpen && (
                <div 
                    className="custom-timepicker-popup"
                    style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 9999,
                        background: "#ffffff",
                        border: "2px solid #9D174D",
                        borderRadius: "18px",
                        padding: "16px",
                        boxShadow: "0 10px 30px rgba(157, 23, 77, 0.22)",
                        width: "320px",
                        maxWidth: "calc(100vw - 32px)",
                        minHeight: "310px",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: "8px" }}>
                        <span style={{ color: "#500724", fontWeight: 800, fontSize: "15px" }}>
                            Horarios de Atención
                        </span>
                    </div>

                    {/* Turno Mañana */}
                    <div style={{ marginBottom: "10px" }}>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#500724", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                            Turno Mañana - 09:00 - 13:00
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
                            {MORNING_SLOTS.map((slot) => {
                                const selected = value === slot;
                                return (
                                    <button
                                        key={slot}
                                        type="button"
                                        onClick={() => handleSelectTime(slot)}
                                        style={{
                                            padding: "6px 4px",
                                            borderRadius: "10px",
                                            border: selected ? "2px solid #9D174D" : "1.5px solid #FCE7F3",
                                            background: selected ? "#9D174D" : "#ffffff",
                                            color: selected ? "#ffffff" : "#500724",
                                            fontWeight: selected ? 800 : 700,
                                            fontSize: "13px",
                                            cursor: "pointer",
                                            transition: "all 0.15s ease"
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!selected) {
                                                e.currentTarget.style.background = "#EC4899";
                                                e.currentTarget.style.borderColor = "#EC4899";
                                                e.currentTarget.style.color = "#ffffff";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!selected) {
                                                e.currentTarget.style.background = "#ffffff";
                                                e.currentTarget.style.borderColor = "#FCE7F3";
                                                e.currentTarget.style.color = "#500724";
                                            }
                                        }}
                                    >
                                        {slot}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Turno Tarde */}
                    <div>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#500724", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                            Turno Tarde - 15:00 - 19:00
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
                            {AFTERNOON_SLOTS.map((slot) => {
                                const selected = value === slot;
                                return (
                                    <button
                                        key={slot}
                                        type="button"
                                        onClick={() => handleSelectTime(slot)}
                                        style={{
                                            padding: "6px 4px",
                                            borderRadius: "10px",
                                            border: selected ? "2px solid #9D174D" : "1.5px solid #FCE7F3",
                                            background: selected ? "#9D174D" : "#ffffff",
                                            color: selected ? "#ffffff" : "#500724",
                                            fontWeight: selected ? 800 : 700,
                                            fontSize: "13px",
                                            cursor: "pointer",
                                            transition: "all 0.15s ease"
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!selected) {
                                                e.currentTarget.style.background = "#EC4899";
                                                e.currentTarget.style.borderColor = "#EC4899";
                                                e.currentTarget.style.color = "#ffffff";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!selected) {
                                                e.currentTarget.style.background = "#ffffff";
                                                e.currentTarget.style.borderColor = "#FCE7F3";
                                                e.currentTarget.style.color = "#500724";
                                            }
                                        }}
                                    >
                                        {slot}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
