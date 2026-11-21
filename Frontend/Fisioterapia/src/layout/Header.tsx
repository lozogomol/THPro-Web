"use client"
import Link from "next/link";
import { IMAGES, ANIMBG, ANIMBG_STYLE, holoCss } from "../constant/theme";
import { menudata } from "../constant/alldata";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoTHPro from "../../public/assets/Logo-THPro.png";

interface Props{
    columnstand : string;
}

interface MenuItem {  
  title: string;
  to?: string;  
  classChange?: string;
  content?: { title: string; to: string; image?: any }[];
}

function Header({ columnstand } : Props) {
    const [scroll, setScroll] = useState(false);
    const [show, setShow] = useState<boolean>(false);
    const handleclick = () => {
        setShow(prev => !prev);
    };
    const [isActive, setIsActive] = useState<number[]>([]);
    function menuHandler(index : number) {
        if (isActive.includes(index)) {
            setIsActive(isActive.filter(i => i !== index))
        } else {
            setIsActive([...isActive, index])
        }
    }

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <>
            <header className={`site-header header style-1 ${columnstand} ${scroll ? 'is-scrolled' : ''}`}>
                <style>{`
                    /* Barra superior con fondo de Fisioterapia.png y puntas cuadradas */
                    .site-header,
                    .site-header.style-1,
                    .site-header.box-header {
                        position: sticky !important;
                        top: 0 !important;
                        z-index: 9999 !important;
                        width: 100% !important;
                        height: 80px !important;
                        min-height: 80px !important;
                        ${holoCss(0.45)}
                        border-radius: 0px !important;
                        border: none !important;
                        border-bottom: none !important;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25) !important;
                    }
                    .site-header.is-scrolled {
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35) !important;
                        border: none !important;
                        border-bottom: none !important;
                    }
                    .site-header .main-bar-wraper,
                    .site-header .sticky-header {
                        width: 100% !important;
                        height: 100% !important;
                        min-height: 100% !important;
                        position: relative !important;
                        background: transparent !important;
                        background-image: none !important;
                        border-radius: 0px !important;
                        border: none !important;
                        border-bottom: none !important;
                        box-shadow: none !important;
                    }
                    .site-header .main-bar {
                        background: transparent !important;
                        background-image: none !important;
                        border-radius: 0px !important;
                        border: none !important;
                        border-bottom: none !important;
                        box-shadow: none !important;
                    }
                    .site-header .main-bar > .container,
                    .site-header .main-bar > .container-fluid,
                    .site-header .container,
                    .site-header .inner-bar,
                    .site-header .header-nav {
                        background-color: transparent !important;
                        background: transparent !important;
                        border-radius: 0px !important;
                        border: none !important;
                        border-bottom: none !important;
                        box-shadow: none !important;
                    }

                    /* Remove all white/rounded pseudo elements in header */
                    .site-header:before,
                    .site-header:after,
                    .site-header.box-header:before,
                    .site-header.box-header:after,
                    .site-header .main-bar:before,
                    .site-header .main-bar:after,
                    .site-header .main-bar > *:before,
                    .site-header .main-bar > *:after,
                    .site-header .main-bar > .container:before,
                    .site-header .main-bar > .container:after,
                    .site-header .container:before,
                    .site-header .container:after,
                    .site-header .inner-bar:before,
                    .site-header .inner-bar:after {
                        display: none !important;
                        content: none !important;
                        border-radius: 0px !important;
                        background: none !important;
                    }

                    .main-bar { 
                        background: transparent !important;
                        background-image: none !important;
                        border-radius: 0px !important;
                        height: 80px !important;
                        min-height: 80px !important;
                        display: flex !important;
                        align-items: center !important;
                        position: relative !important;
                        top: 0 !important;
                        margin-top: 0 !important;
                        animation: none !important;
                        -webkit-animation: none !important;
                        border: none !important;
                        border-bottom: none !important;
                        box-shadow: none !important;
                    }
                    /* Eliminate any position:fixed or headerSlideDown jump from template */
                    .site-header .sticky-header.is-fixed,
                    .sticky-header.is-fixed { 
                        background: transparent !important;
                        background-image: none !important;
                        border-radius: 0px !important;
                        width: 100% !important; 
                        max-width: 100% !important; 
                        margin: 0 !important; 
                        position: relative !important;
                        border: none !important;
                        border-bottom: none !important;
                        box-shadow: none !important;
                        top: 0 !important;
                    }
                    .site-header .sticky-header.is-fixed .main-bar,
                    .site-header .is-fixed .main-bar,
                    .is-fixed .main-bar {
                        position: relative !important;
                        top: 0 !important;
                        margin-top: 0 !important;
                        animation: none !important;
                        -webkit-animation: none !important;
                        background: transparent !important;
                        background-image: none !important;
                        border-radius: 0px !important;
                        border: none !important;
                        border-bottom: none !important;
                        box-shadow: none !important;
                    }

                    /* ==============================
                       DESKTOP MENU (min-width: 992px)
                       ============================== */
                    @media (min-width: 992px) {
                        .site-header .main-bar .inner-bar {
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            height: 80px !important;
                            position: relative !important;
                            width: 100% !important;
                            padding: 0 20px !important;
                        }
                        .main-bar-logo,
                        .main-bar .inner-bar > .logo-header {
                            position: absolute !important;
                            left: 20px !important;
                            top: 50% !important;
                            transform: translateY(-50%) !important;
                            display: flex !important;
                            align-items: center !important;
                            height: 80px !important;
                            width: auto !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            float: none !important;
                            z-index: 100 !important;
                        }
                        .main-bar-logo a,
                        .main-bar-logo .logo-link {
                            display: inline-flex !important;
                            align-items: center !important;
                            height: 100% !important;
                        }
                        .main-bar-logo img {
                            height: 52px !important;
                            max-height: 52px !important;
                            width: auto !important;
                            object-fit: contain !important;
                            display: block !important;
                        }
                        .header-nav.w3menu {
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            margin: 0 auto !important;
                            padding: 0 !important;
                        }
                        .header-nav.w3menu > ul {
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            gap: 22px !important;
                            margin: 0 auto !important;
                            height: 80px !important;
                        }
                        .header-nav.w3menu > ul > li {
                            position: relative !important;
                            height: 80px !important;
                            display: flex !important;
                            align-items: center !important;
                            padding: 0 !important;
                            margin: 0 !important;
                            border: none !important;
                            border-bottom: none !important;
                        }
                        /* Enlaces principales del menú */
                        .header-nav.w3menu > ul > li > a {
                            color: #ffffff !important;
                            font-size: 16px !important;
                            font-weight: 600 !important;
                            display: inline-flex !important;
                            align-items: center !important;
                            gap: 8px !important;
                            padding: 8px 6px !important;
                            transition: color 0.2s ease !important;
                            text-decoration: none !important;
                            border: none !important;
                            border-bottom: none !important;
                            outline: none !important;
                            letter-spacing: 0.3px;
                        }
                        .header-nav.w3menu > ul > li > a span {
                            color: inherit !important;
                            transition: color 0.2s ease !important;
                        }
                        .header-nav.w3menu > ul > li > a i {
                            color: inherit !important;
                            font-size: 12px !important;
                            transition: transform 0.2s ease, color 0.2s ease !important;
                        }
                        /* Remueve cualquier línea, borde o adorno bajo los enlaces de la barra */
                        .header-nav.w3menu > ul > li > a:after,
                        .header-nav.w3menu .nav > li > a:after,
                        .header-nav.w3menu > ul > li > a:before,
                        .header-nav.w3menu .nav > li > a:before,
                        .header-nav.w3menu > ul > li:after,
                        .header-nav.w3menu > ul > li:before {
                            display: none !important;
                            content: none !important;
                            border: none !important;
                        }

                        /* Hover principal: letras en rosa (#7B3FE4) */
                        .header-nav.w3menu > ul > li:hover > a,
                        .header-nav.w3menu > ul > li:hover > a > span,
                        .header-nav.w3menu > ul > li:hover > a > i {
                            color: #FFFFFF !important;
                        }
                        .header-nav.w3menu > ul > li:hover > a i {
                            transform: rotate(180deg);
                        }

                        /* Dropdown en escritorio: morado oscuro semi-transparente, esquinas rectas */
                        .header-nav.w3menu .sub-menu, 
                        .header-nav.w3menu .mega-menu,
                        .header-nav.w3menu .nav > li .sub-menu,
                        .header-nav.w3menu .nav > li .mega-menu,
                        .header-nav .sub-menu {
                            position: absolute !important;
                            top: 80px !important;
                            left: 50% !important;
                            transform: translateX(-50%) !important;
                            -webkit-transform: translateX(-50%) !important;
                            background-color: rgba(27, 11, 61, 0.93) !important;
                            background: rgba(27, 11, 61, 0.93) !important;
                            border: 1px solid rgba(255, 255, 255, 0.15) !important;
                            border-radius: 0px !important;
                            box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25) !important;
                            backdrop-filter: blur(14px) !important;
                            -webkit-backdrop-filter: blur(14px) !important;
                            margin: 0 !important;
                            margin-top: 0 !important;
                            opacity: 0 !important;
                            visibility: hidden !important;
                            pointer-events: none !important;
                            transition: opacity 0.15s ease, visibility 0.15s ease !important;
                            -webkit-transition: opacity 0.15s ease, visibility 0.15s ease !important;
                            z-index: 99999 !important;
                        }
                        .header-nav.w3menu > ul > li:hover > .sub-menu,
                        .header-nav.w3menu > ul > li:hover > .mega-menu,
                        .header-nav.w3menu .nav > li:hover > .sub-menu,
                        .header-nav.w3menu .nav > li:hover > .mega-menu {
                            opacity: 1 !important;
                            visibility: visible !important;
                            pointer-events: auto !important;
                            margin: 0 !important;
                            margin-top: 0 !important;
                            left: 50% !important;
                            transform: translateX(-50%) !important;
                            -webkit-transform: translateX(-50%) !important;
                        }

                        /* Grilla de 2 columnas para Servicios de Fisioterapia: 4 a la izquierda, 4 a la derecha alineadas a la izquierda */
                        .header-nav.w3menu .sub-menu.sub-menu-grid-2 {
                            display: grid !important;
                            grid-template-columns: repeat(2, 240px) !important;
                            grid-auto-flow: column !important;
                            grid-template-rows: repeat(4, auto) !important;
                            gap: 0px 22px !important;
                            justify-content: flex-start !important;
                            min-width: 500px !important;
                            padding: 12px 18px !important;
                        }

                        /* Lista directa para Especialidades alineada a la izquierda */
                        .header-nav.w3menu .sub-menu.sub-menu-single {
                            display: flex !important;
                            flex-direction: column !important;
                            align-items: stretch !important;
                            min-width: 240px !important;
                            padding: 10px 14px !important;
                            gap: 2px !important;
                        }

                        .header-nav.w3menu .sub-menu li, 
                        .header-nav.w3menu .mega-menu li,
                        .header-nav.w3menu .nav > li .sub-menu li,
                        .header-nav.w3menu .demo-menu li {
                            margin: 0 !important;
                            padding: 0 !important;
                            list-style: none !important;
                            border: none !important;
                            background-color: transparent !important;
                            background: transparent !important;
                            width: 100% !important;
                            text-align: left !important;
                        }
                        .header-nav.w3menu .sub-menu li a, 
                        .header-nav.w3menu .mega-menu li a,
                        .header-nav.w3menu .nav > li .sub-menu li a,
                        .header-nav.w3menu .demo-menu li a {
                            color: #ffffff !important;
                            font-size: 14.5px !important;
                            font-weight: 500 !important;
                            padding: 10px 14px !important;
                            display: flex !important;
                            justify-content: flex-start !important;
                            align-items: center !important;
                            width: 100% !important;
                            text-align: left !important;
                            transition: color 0.15s ease, background-color 0.15s ease !important;
                            background-color: transparent !important;
                            background: transparent !important;
                            text-decoration: none !important;
                            border: none !important;
                            border-radius: 0px !important;
                            white-space: nowrap !important;
                        }

                        .header-nav.w3menu .demo-menu {
                            background: transparent !important;
                            background-color: transparent !important;
                            border: none !important;
                        }

                        .header-nav.w3menu .demo-menu li a img {
                            border-radius: 0px !important;
                            border: 1px solid rgba(255, 255, 255, 0.15) !important;
                        }

                        /* Hover en opciones del dropdown: solo la letra en el rosa exacto (#7B3FE4) */
                        .header-nav.w3menu .sub-menu li:hover > a,
                        .header-nav.w3menu .sub-menu li a:hover,
                        .header-nav.w3menu .mega-menu li:hover > a,
                        .header-nav.w3menu .mega-menu li a:hover,
                        .header-nav.w3menu .nav > li .sub-menu li:hover > a,
                        .header-nav.w3menu .nav > li .sub-menu li a:hover,
                        .header-nav.w3menu .demo-menu li:hover > a,
                        .header-nav.w3menu .demo-menu li a:hover {
                            color: #FFFFFF !important;
                            background-color: transparent !important;
                            background: transparent !important;
                            box-shadow: none !important;
                            border: none !important;
                        }
                    }

                    /* ==============================
                       MOBILE MENU (max-width: 991px)
                       ============================== */
                    @media (max-width: 991px) {
                        .site-header,
                        .site-header.style-1,
                        .site-header.box-header,
                        .site-header .main-bar-wraper,
                        .site-header .sticky-header,
                        .site-header .main-bar,
                        .main-bar {
                            min-height: 70px !important;
                            height: 70px !important;
                            max-height: 70px !important;
                            position: relative !important;
                        }
                        .site-header {
                            position: sticky !important;
                            top: 0 !important;
                        }
                        .main-bar .inner-bar,
                        .main-bar .container,
                        .main-bar .container-fluid {
                            position: relative !important;
                            height: 70px !important;
                            min-height: 70px !important;
                            max-height: 70px !important;
                            display: flex !important;
                            align-items: center !important;
                            justify-content: space-between !important;
                            padding: 0 20px !important;
                            background: transparent !important;
                            background-image: none !important;
                        }
                        .main-bar-logo,
                        .main-bar .inner-bar > .logo-header {
                            position: absolute !important;
                            left: 20px !important;
                            top: 50% !important;
                            transform: translateY(-50%) !important;
                            display: flex !important;
                            align-items: center !important;
                            height: 70px !important;
                            width: auto !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            float: none !important;
                            z-index: 10 !important;
                        }
                        .main-bar-logo a,
                        .main-bar-logo .logo-link {
                            display: inline-flex !important;
                            align-items: center !important;
                            height: 100% !important;
                        }
                        .main-bar-logo img {
                            height: 44px !important;
                            max-height: 44px !important;
                            width: auto !important;
                            object-fit: contain !important;
                            display: block !important;
                        }
                        .mobile-drawer-header {
                            position: relative !important;
                            display: flex !important;
                            flex-direction: column !important;
                            align-items: center !important;
                            justify-content: center !important;
                            width: 100% !important;
                            margin-bottom: 20px !important;
                            padding: 5px 0 18px 0 !important;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
                        }
                        .drawer-close-btn {
                            position: absolute !important;
                            top: 0px !important;
                            right: 0px !important;
                            background: transparent !important;
                            border: none !important;
                            color: #ffffff !important;
                            font-size: 32px !important;
                            line-height: 1 !important;
                            cursor: pointer !important;
                            padding: 2px 6px !important;
                            transition: color 0.2s ease !important;
                            z-index: 10 !important;
                        }
                        .drawer-close-btn:hover {
                            color: #FFFFFF !important;
                        }
                        .drawer-logo-container {
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            width: 100% !important;
                            margin: 6px auto 0 auto !important;
                            text-align: center !important;
                        }
                        .drawer-logo-container a {
                            display: inline-flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                        }
                        .drawer-logo-img {
                            height: 48px !important;
                            max-height: 48px !important;
                            width: auto !important;
                            object-fit: contain !important;
                            display: block !important;
                            margin: 0 auto !important;
                        }

                        /* Botón de 3 líneas centrado a la derecha dentro de la barra */
                        .w3menu-toggler,
                        .w3menu-toggler.navicon {
                            position: absolute !important;
                            right: 20px !important;
                            top: 50% !important;
                            transform: translateY(-50%) !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            width: 44px !important;
                            height: 44px !important;
                            background: transparent !important;
                            border: none !important;
                            border-radius: 0 !important;
                            box-shadow: none !important;
                            display: flex !important;
                            flex-direction: column !important;
                            justify-content: center !important;
                            align-items: center !important;
                            gap: 5px !important;
                            cursor: pointer !important;
                            z-index: 100000 !important;
                            pointer-events: auto !important;
                            touch-action: manipulation !important;
                        }
                        .w3menu-toggler span,
                        .w3menu-toggler.navicon span {
                            position: static !important;
                            display: block !important;
                            width: 26px !important;
                            height: 3px !important;
                            background-color: #ffffff !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            left: auto !important;
                            top: auto !important;
                            border-radius: 2px !important;
                            transition: all 0.3s ease !important;
                        }
                        .w3menu-toggler.navicon:hover span {
                            background-color: #FFFFFF !important;
                        }
                        .w3menu-toggler.open span:nth-child(1) {
                            transform: translateY(8px) rotate(45deg) !important;
                        }
                        .w3menu-toggler.open span:nth-child(2) {
                            opacity: 0 !important;
                        }
                        .w3menu-toggler.open span:nth-child(3) {
                            transform: translateY(-8px) rotate(-45deg) !important;
                        }

                        /* Overlay de fondo - deshabilitado */
                        .menu-close.fade-overlay {
                            position: fixed !important;
                            top: 0 !important;
                            left: 0 !important;
                            width: 100vw !important;
                            height: 100vh !important;
                            background: transparent !important;
                            z-index: 99990 !important;
                            opacity: 0 !important;
                            visibility: hidden !important;
                            pointer-events: none !important;
                            transition: none !important;
                        }
                        .menu-close.fade-overlay.active,
                        .w3menu-toggler.open ~ .menu-close.fade-overlay {
                            opacity: 0 !important;
                            visibility: visible !important;
                            pointer-events: auto !important;
                            background: transparent !important;
                        }

                        /* Cajón de menú lateral en móvil */
                        .header-nav.w3menu,
                        .header-nav.w3menu.mo-left {
                            position: fixed !important;
                            top: 0 !important;
                            left: -320px !important;
                            width: 290px !important;
                            max-width: 85vw !important;
                            height: 100vh !important;
                            ${holoCss(0.72)} -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
                            border-radius: 0px !important;
                            box-shadow: 5px 0 25px rgba(0, 0, 0, 0.35) !important;
                            padding: 25px 20px 30px !important;
                            overflow-y: auto !important;
                            transition: left 0.35s ease !important;
                            z-index: 99999 !important;
                            display: block !important;
                            visibility: visible !important;
                            pointer-events: auto !important;
                        }
                        .header-nav.w3menu.show,
                        .header-nav.w3menu.mo-left.show {
                            left: 0 !important;
                            display: block !important;
                            visibility: visible !important;
                            pointer-events: auto !important;
                        }


                        .header-nav.w3menu > ul {
                            list-style: none !important;
                            padding: 0 !important;
                            margin: 0 !important;
                        }
                        .header-nav.w3menu > ul > li {
                            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                            padding: 4px 0 !important;
                        }
                        .header-nav.w3menu > ul > li > a {
                            color: #ffffff !important;
                            font-size: 16px !important;
                            font-weight: 600 !important;
                            display: flex !important;
                            align-items: center !important;
                            justify-content: space-between !important;
                            padding: 12px 5px !important;
                            transition: color 0.2s ease !important;
                            pointer-events: auto !important;
                        }
                        /* Botones de flecha sin fondo, solo el icono limpio */
                        .header-nav .nav > li.menu-item-has-children > a i,
                        .header-nav .nav > li.sub-menu-down > a i,
                        .header-nav.w3menu > ul > li > a i,
                        .header-nav.w3menu .nav > li > a i {
                            background: transparent !important;
                            background-color: transparent !important;
                            border: none !important;
                            box-shadow: none !important;
                            width: auto !important;
                            height: auto !important;
                            line-height: 1 !important;
                            float: none !important;
                            font-size: 14px !important;
                            color: #ffffff !important;
                            display: inline-flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            transition: transform 0.25s ease, color 0.25s ease !important;
                        }
                        .header-nav .nav > li.menu-item-has-children > a i:before,
                        .header-nav .nav > li.sub-menu-down > a i:before,
                        .header-nav.w3menu > ul > li > a i:before {
                            background: transparent !important;
                            background-color: transparent !important;
                        }
                        .header-nav.w3menu > ul > li:hover > a i,
                        .header-nav.w3menu > ul > li.open > a i {
                            color: #FFFFFF !important;
                            background: transparent !important;
                            background-color: transparent !important;
                        }
                        .header-nav.w3menu > ul > li.open > a i {
                            transform: rotate(180deg) !important;
                        }

                        /* Tarjetas / submenús abiertos de la barra: morado oscuro semi-transparente, esquinas rectas */
                        .header-nav.w3menu .sub-menu, 
                        .header-nav.w3menu .mega-menu,
                        .header-nav.w3menu .demo-menu {
                            display: none !important;
                            background: rgba(27, 11, 61, 0.93) !important;
                            background-color: rgba(27, 11, 61, 0.93) !important;
                            border: 1px solid rgba(255, 255, 255, 0.12) !important;
                            border-radius: 0px !important;
                            padding: 6px 4px !important;
                            margin: 6px 0 12px 0 !important;
                            list-style: none !important;
                            box-shadow: none !important;
                            position: static !important;
                            width: 100% !important;
                            opacity: 1 !important;
                            visibility: visible !important;
                            pointer-events: auto !important;
                        }
                        .header-nav.w3menu li.open > .sub-menu, 
                        .header-nav.w3menu li.open > .mega-menu {
                            display: block !important;
                        }
                        .header-nav.w3menu .sub-menu li, 
                        .header-nav.w3menu .mega-menu li,
                        .header-nav.w3menu .demo-menu li {
                            background: transparent !important;
                            background-color: transparent !important;
                            border: none !important;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
                            padding: 2px 0 !important;
                        }
                        .header-nav.w3menu .sub-menu li:last-child, 
                        .header-nav.w3menu .mega-menu li:last-child,
                        .header-nav.w3menu .demo-menu li:last-child {
                            border-bottom: none !important;
                        }
                        .header-nav.w3menu .sub-menu li a, 
                        .header-nav.w3menu .mega-menu li a,
                        .header-nav.w3menu .demo-menu li a {
                            color: #ffffff !important;
                            font-size: 14px !important;
                            padding: 8px 12px !important;
                            display: flex !important;
                            align-items: center !important;
                            border: none !important;
                            background: transparent !important;
                            background-color: transparent !important;
                            border-radius: 0px !important;
                            transition: color 0.2s ease, background-color 0.2s ease !important;
                            pointer-events: auto !important;
                        }
                        .header-nav.w3menu .demo-menu li a img {
                            border-radius: 0px !important;
                            border: 1px solid rgba(255, 255, 255, 0.12) !important;
                        }
                        .header-nav.w3menu .sub-menu li a:hover,
                        .header-nav.w3menu .sub-menu li a:active,
                        .header-nav.w3menu .mega-menu li a:hover,
                        .header-nav.w3menu .mega-menu li a:active,
                        .header-nav.w3menu .demo-menu li a:hover,
                        .header-nav.w3menu .demo-menu li a:active {
                            color: #FFFFFF !important;
                            background-color: transparent !important;
                            border: none !important;
                        }
                    }
                    @media (min-width: 992px) {
                        .mobile-drawer-header {
                            display: none !important;
                        }
                        .w3menu-toggler,
                        .w3menu-toggler.navicon {
                            display: none !important;
                        }
                    }
                `}</style>
                <div className={`sticky-header main-bar-wraper ${scroll ? 'is-fixed' : ''}`}>
                    <div className="main-bar clearfix">
                        <div className="container-fluid clearfix inner-bar text-white">
                            <div className="logo-header logo-dark main-bar-logo">
                                <Link href="/" className="logo-link">
                                    <Image 
                                        src={logoTHPro} 
                                        alt="Logo THPro" 
                                        priority 
                                    />
                                </Link>
                            </div>
                            <button 
                                onClick={handleclick} 
                                className={`w3menu-toggler navicon ${show ? 'open' : ''}`} 
                                type="button" 
                                aria-label="Menú"
                                aria-expanded={show}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div 
                                onClick={() => setShow(false)} 
                                className={`menu-close fade-overlay ${show ? 'active' : ''}`}
                                aria-hidden="true"
                            ></div>
                            <div className={`header-nav w3menu w3menu-center mo-left ${show ? 'show' : ''}`} id="W3Menu">
                                <div className="mobile-drawer-header">
                                    <button 
                                        type="button" 
                                        onClick={() => setShow(false)} 
                                        className="drawer-close-btn"
                                        aria-label="Cerrar menú"
                                    >
                                        &times;
                                    </button>
                                    <div className="drawer-logo-container">
                                        <Link href="/" onClick={() => setShow(false)}>
                                            <Image 
                                                src={logoTHPro} 
                                                alt="Logo THPro" 
                                                className="drawer-logo-img"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="nav navbar-nav" style={{ margin: '0 auto' }}>
                                    {menudata.map((data: MenuItem, i : number) => {
                                        let menuClass = data.classChange;
                                        if (menuClass === 'has-mega-menu') {
                                            return (
                                                <li key={i} className={`has-mega-menu sub-menu-down auto-width menu-left ${isActive.includes(i) ? 'open' : ''}`}>
                                                    <Link href={"#"} onClick={(e) => { e.preventDefault(); menuHandler(i); }}> 
                                                        <span>{data.title}</span> 
                                                        <i className="fas fa-chevron-down tabIndex" /> 
                                                    </Link>
                                                    <div className="mega-menu">
                                                        <ul className="demo-menu">
                                                            {data.content?.map((item, index) => (
                                                                <li key={index}>
                                                                    {['/', '/estetica-facial', '/estetica-corporal', '/fisioterapia'].includes(item.to) || item.to.startsWith('http') ? (
                                                                        <a href={item.to} onClick={() => setShow(false)}> 
                                                                            <Image src={item.image} alt={item.title} /> 
                                                                            <span className="menu-title">{item.title}</span>
                                                                        </a>
                                                                    ) : (
                                                                        <Link href={item.to} onClick={() => setShow(false)}> 
                                                                            <Image src={item.image} alt={item.title} /> 
                                                                            <span className="menu-title">{item.title}</span>
                                                                        </Link>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        else if (menuClass === 'sub-menu-down') {
                                            return (
                                                <li key={i} className={`sub-menu-down ${isActive.includes(i) ? 'open' : ''}`}>
                                                    <Link onClick={(e) => { e.preventDefault(); menuHandler(i); }} href={"#"}>
                                                        <span>{data.title}</span> 
                                                        <i className="fas fa-chevron-down tabIndex" />
                                                    </Link>
                                                    <ul className={`sub-menu ${data.content && data.content.length > 4 ? 'sub-menu-grid-2' : 'sub-menu-single'}`}>
                                                        {data.content?.map((item, index) => (
                                                            <li key={index}>
                                                                {['/', '/estetica-facial', '/estetica-corporal', '/fisioterapia'].includes(item.to) || item.to.startsWith('http') || item.to.startsWith('#') || item.to.includes('#') ? (
                                                                    <a 
                                                                        href={item.to} 
                                                                        onClick={(e) => {
                                                                            setShow(false);
                                                                            if (item.to.includes('#')) {
                                                                                const hash = item.to.split('#')[1];
                                                                                const targetEl = document.getElementById(hash);
                                                                                if (targetEl) {
                                                                                    e.preventDefault();
                                                                                    targetEl.scrollIntoView({ behavior: 'smooth' });
                                                                                    window.history.pushState(null, '', `#${hash}`);
                                                                                }
                                                                            }
                                                                        }}
                                                                    >
                                                                        {item.title}
                                                                    </a>
                                                                ) : (
                                                                    <Link href={item.to} onClick={() => setShow(false)}>{item.title}</Link>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li key={i}>
                                                    {  data.to ?   <Link href={data.to} onClick={() => setShow(false)}><span>{data.title}</span></Link> : ""}
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;


