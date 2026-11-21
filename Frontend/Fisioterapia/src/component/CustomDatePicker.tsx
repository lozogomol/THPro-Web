"use client";
import React, { useState, useEffect, useRef } from "react";

interface CustomDatePickerProps {
    value: string; // YYYY-MM-DD
    onChange: (dateStr: string) => void;
    minDate?: string; // YYYY-MM-DD
}

const MONTH_NAMES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const DAY_NAMES = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export default function CustomDatePicker({ value, onChange, minDate }: CustomDatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Parse value or default to current date
    const initialDate = value ? new Date(value + "T00:00:00") : new Date();
    const [currentYear, setCurrentYear] = useState(initialDate.getFullYear() || 2026);
    const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth() || 0);

    // Sync when value changes externally
    useEffect(() => {
        if (value) {
            const d = new Date(value + "T00:00:00");
            if (!isNaN(d.getTime())) {
                setCurrentYear(d.getFullYear());
                setCurrentMonth(d.getMonth());
            }
        }
    }, [value]);

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

    // Format display string: DD / MM / YYYY
    const formatDisplay = (val: string) => {
        if (!val) return "DD / MM / AAAA";
        const parts = val.split("-");
        if (parts.length === 3) {
            return `${parts[2]} / ${parts[1]} / ${parts[0]}`;
        }
        return val;
    };

    // Calendar math
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // Monday as first day of week (0 = Monday, 6 = Sunday)
    const firstDayIndex = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

    const prevMonth = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const nextMonth = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleSelectDay = (day: number) => {
        const m = String(currentMonth + 1).padStart(2, "0");
        const d = String(day).padStart(2, "0");
        const formatted = `${currentYear}-${m}-${d}`;
        onChange(formatted);
        setIsOpen(false);
    };

    const isDayDisabled = (day: number) => {
        const m = String(currentMonth + 1).padStart(2, "0");
        const d = String(day).padStart(2, "0");
        const thisDate = `${currentYear}-${m}-${d}`;

        // Min date check
        if (minDate && thisDate < minDate) return true;

        return false;
    };

    const isSelected = (day: number) => {
        if (!value) return false;
        const m = String(currentMonth + 1).padStart(2, "0");
        const d = String(day).padStart(2, "0");
        return value === `${currentYear}-${m}-${d}`;
    };

    return (
        <div className="custom-datepicker-container" ref={containerRef} style={{ position: "relative", width: "100%" }}>
            <div 
                className="consultation-card-box consultation-clickable-card"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer", userSelect: "none" }}
            >
                <span style={{ color: "#211638", fontWeight: 700, fontSize: "16px", letterSpacing: "0.5px" }}>
                    {formatDisplay(value)}
                </span>
            </div>

            {isOpen && (
                <div 
                    className="custom-datepicker-popup"
                    style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 9999,
                        background: "#ffffff",
                        border: "2px solid #4B1D96",
                        borderRadius: "18px",
                        padding: "16px",
                        boxShadow: "0 10px 30px rgba(75, 29, 150, 0.22)",
                        width: "320px",
                        maxWidth: "calc(100vw - 32px)",
                        minHeight: "310px",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                        <button 
                            type="button" 
                            onClick={prevMonth}
                            style={{
                                background: "#4B1D96",
                                border: "none",
                                color: "#ffffff",
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px",
                                fontWeight: "bold"
                            }}
                        >
                            &#8249;
                        </button>
                        <span style={{ color: "#211638", fontWeight: 800, fontSize: "15px" }}>
                            {MONTH_NAMES[currentMonth]} {currentYear}
                        </span>
                        <button 
                            type="button" 
                            onClick={nextMonth}
                            style={{
                                background: "#4B1D96",
                                border: "none",
                                color: "#ffffff",
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px",
                                fontWeight: "bold"
                            }}
                        >
                            &#8250;
                        </button>
                    </div>

                    {/* Day labels */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", textAlign: "center", marginBottom: "6px" }}>
                        {DAY_NAMES.map((name) => (
                            <span key={name} style={{ color: "#211638", fontWeight: 800, fontSize: "12px", padding: "2px 0" }}>
                                {name}
                            </span>
                        ))}
                    </div>

                    {/* Days grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
                        {Array.from({ length: firstDayIndex }).map((_, i) => (
                            <div key={`empty-${i}`} />
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const disabled = isDayDisabled(day);
                            const selected = isSelected(day);
                            return (
                                <button
                                    key={day}
                                    type="button"
                                    disabled={disabled}
                                    onClick={() => handleSelectDay(day)}
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        margin: "0 auto",
                                        border: selected ? "2px solid #4B1D96" : "1px solid transparent",
                                        borderRadius: "50%",
                                        background: selected ? "#4B1D96" : "transparent",
                                        color: selected ? "#ffffff" : disabled ? "rgba(75, 29, 150, 0.22)" : "#211638",
                                        fontWeight: selected ? 800 : 600,
                                        fontSize: "13px",
                                        cursor: disabled ? "not-allowed" : "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.15s ease",
                                        opacity: disabled ? 0.3 : 1
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!disabled && !selected) {
                                            e.currentTarget.style.background = "#7B3FE4";
                                            e.currentTarget.style.color = "#ffffff";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!disabled && !selected) {
                                            e.currentTarget.style.background = "transparent";
                                            e.currentTarget.style.color = "#211638";
                                        }
                                    }}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
