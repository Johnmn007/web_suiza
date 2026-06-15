import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Accessibility, ChevronDown } from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import { useDeviceType } from '../hooks/useDeviceType';

export default function Navbar({ lang, setLang, darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const location = useLocation();
  const { isLaptop } = useDeviceType();
  const navRef = useRef(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (showDropdown && navRef.current && !navRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, showDropdown]);

  // Close drawer and dropdown on path change
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [location.pathname]);

  // Reset mobile submenu when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setMobileSubmenuOpen(false);
    }
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/careers', label: 'Programas de Estudio' },
    { path: '/about', label: 'Nosotros' },
    { path: '/news', label: 'Noticias' },
    { path: '/contact', label: 'Escríbenos' }
  ];

  const languages = [
    { code: 'es', label: 'ESP' },
    { code: 'en', label: 'ENG' },
    { code: 'sh', label: 'SMS' }
  ];

  const isActive = (path) => location.pathname === path;

  // Toggle Accessibility Mode (High Contrast & Font Zoom)
  useEffect(() => {
    const root = window.document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
      root.style.fontSize = '17px';
    } else {
      root.classList.remove('high-contrast');
      root.style.fontSize = '';
    }
  }, [highContrast]);

  return (
    <>
      {/* Floating Navigation Bar - Top on mobile, Bottom on desktop */}
      <nav ref={navRef} className="fixed top-4 bottom-auto lg:bottom-6 lg:top-auto left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300">
        
        {/* Main Floating Capsule */}
        <div className="w-full bg-white dark:bg-dark-card rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-slate-100 dark:border-dark-border/80 px-4 py-2.5 md:px-7 flex justify-between items-center transition-all duration-300">
          
          {/* Hamburger Menu (Left on Mobile) */}
          <div className="flex lg:hidden items-center order-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-slate-50 dark:bg-dark-border/50 text-[#1A202C] dark:text-white transition-all duration-300 cursor-pointer"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* LEFT: Official Logo with Circular Insignia */}
          <Link to="/" className="flex items-center gap-2 group shrink-0 order-2 lg:order-none">
            <div className="relative w-11 h-11 rounded-full bg-slate-50 dark:bg-dark-border/40 p-1 flex items-center justify-center border border-slate-100 dark:border-dark-border/30 overflow-hidden shadow-inner group-hover:scale-105 transition-all duration-300">
              <img src={LogoSuiza} alt="IESTP Suiza" className="w-9 h-9 object-contain" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-extrabold text-xs tracking-tight text-[#1A202C] dark:text-white leading-none">
                IESTP SUIZA
              </span>
              <span className="text-[9px] text-primary dark:text-secondary font-black tracking-widest mt-0.5 uppercase leading-none">
                PUCALLPA
              </span>
            </div>
          </Link>

          {/* CENTER: Interactive Links (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              if (link.path === '/about') {
                return (
                  <div 
                    key={link.path}
                    className="relative"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDropdown(!showDropdown);
                      }}
                      className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-1 cursor-pointer border border-transparent ${
                        isActive('/about')
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-slate-600 dark:text-dark-text hover:bg-slate-50 dark:hover:bg-dark-border/50 hover:text-primary'
                      }`}
                    >
                      <span>Nosotros</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                    </button>
                     {showDropdown && (
                      <div className="absolute bottom-10 pb-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300 w-max">
                        <div className="flex flex-row items-center gap-1 p-2.5 bg-white/75 dark:bg-dark-card/75 backdrop-blur-xl border border-white/40 dark:border-dark-border/40 rounded-[24px] shadow-xl">
                          <Link
                            to="/about?tab=institucion"
                            className={`px-5 py-3 text-[11px] font-extrabold tracking-wider transition-all relative whitespace-nowrap cursor-pointer uppercase ${
                              isActive('/about') && !location.search.includes('tab=docentes')
                                ? 'text-primary dark:text-secondary'
                                : 'text-slate-400 hover:text-primary dark:text-dark-text/60 dark:hover:text-white'
                            }`}
                          >
                            <span>Misión, Visión e Historia</span>
                            {isActive('/about') && !location.search.includes('tab=docentes') && (
                              <span className="absolute bottom-0 left-5 right-5 h-[3px] bg-primary dark:bg-secondary rounded-full" />
                            )}
                          </Link>
                          
                          {/* Divider */}
                          <div className="w-[1px] h-6 bg-slate-200 dark:bg-dark-border/60 mx-1.5" />
 
                          <Link
                            to="/about?tab=docentes"
                            className={`px-5 py-3 text-[11px] font-extrabold tracking-wider transition-all relative whitespace-nowrap cursor-pointer uppercase ${
                              location.search.includes('tab=docentes')
                                ? 'text-primary dark:text-secondary'
                                : 'text-slate-400 hover:text-primary dark:text-dark-text/60 dark:hover:text-white'
                            }`}
                          >
                            <span>Plana Docente</span>
                            {location.search.includes('tab=docentes') && (
                              <span className="absolute bottom-0 left-5 right-5 h-[3px] bg-primary dark:bg-secondary rounded-full" />
                            )}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                    active
                      ? 'bg-primary text-white shadow-md shadow-primary/20 hover:scale-[1.02]'
                      : 'text-slate-600 dark:text-dark-text hover:bg-slate-50 dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Admission 2026, Selector, Accessibility (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Admisión 2026 Button */}
            <Link
              to="/admission"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-extrabold text-xs rounded-full shadow-md shadow-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Admisión</span>
              <span className="bg-blue-950/45 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider">
                2026
              </span>
            </Link>

            {/* Language Selector */}
            <div className="flex bg-slate-50 dark:bg-dark-border/50 p-1 rounded-full border border-slate-100 dark:border-dark-border/30">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider transition-all duration-300 cursor-pointer ${
                    lang === l.code
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-500 dark:text-dark-text/75 hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-slate-50 dark:bg-dark-border/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-500 dark:text-dark-text/80 hover:text-primary transition-all duration-300 cursor-pointer border border-slate-100 dark:border-dark-border/30"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Accessibility Icon */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                highContrast
                  ? 'bg-amber-500 border-amber-500 text-white shadow-md'
                  : 'bg-slate-50 dark:bg-dark-border/50 border-slate-100 dark:border-dark-border/30 text-slate-500 dark:text-dark-text/80 hover:text-primary hover:bg-primary/10'
              }`}
              title="Ajustes de Accesibilidad (Contraste y Tamaño)"
            >
              <Accessibility className="w-3.5 h-3.5" />
            </button>

            {/* Device Type Indicator Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-dark-border/50 border border-slate-100 dark:border-dark-border/30 rounded-full text-[10px] font-extrabold tracking-wide text-slate-500 dark:text-dark-text/80 shadow-inner select-none">
              {isLaptop ? (
                <>
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span>💻 Laptop</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                  <span>📱 Celular</span>
                </>
              )}
            </div>

          </div>

          {/* MOBILE CONTROLS (Right on Mobile) */}
          <div className="flex lg:hidden items-center gap-2 order-3">
            
            {/* Mobile Device Indicator Badge */}
            <div className="flex items-center gap-1 px-2.5 py-1 bg-primary/10 border border-primary/25 rounded-full text-[9px] font-extrabold text-primary dark:text-secondary shadow-inner select-none mr-1">
              <span>📱 Celular</span>
            </div>

            {/* Quick Admisión 2026 Button for Mobile */}
            <Link
              to="/admission"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white font-extrabold text-[10px] rounded-full shadow-sm"
            >
              <span>Admisión</span>
              <span className="bg-blue-950/45 px-1.5 py-0.2 rounded-full text-[8px] font-black">
                2026
              </span>
            </Link>
          </div>

        </div>

        {/* MOBILE OVERLAY DRAWER: Floats directly below the bar on mobile, above on desktop */}
        {isOpen && (
          <div className="absolute top-16 lg:bottom-16 lg:top-auto left-0 right-0 z-40 bg-white/95 dark:bg-dark-card/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-100 dark:border-dark-border/80 p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 lg:slide-in-from-bottom-5 duration-300">
            
            {/* Nav Links */}
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                if (link.path === '/about') {
                  return (
                    <div key={link.path} className="flex flex-col">
                      <button
                        onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                        className={`px-5 py-2.5 rounded-2xl text-sm font-bold text-left transition-all duration-300 flex justify-between items-center cursor-pointer ${
                          isActive('/about')
                            ? 'bg-primary/10 text-primary dark:text-secondary font-black'
                            : 'text-slate-600 dark:text-dark-text hover:bg-slate-50 dark:hover:bg-dark-border/50 hover:text-primary'
                        }`}
                      >
                        <span>Nosotros</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenuOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                      </button>
                      
                      {mobileSubmenuOpen && (
                        <div className="flex flex-col gap-1 mt-1.5 p-1.5 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/15 animate-in fade-in slide-in-from-top-2 duration-200">
                          <Link
                            to="/about?tab=institucion"
                            onClick={() => setIsOpen(false)}
                            className={`px-5 py-2 rounded-xl text-xs font-bold text-left transition-all duration-300 ${
                              isActive('/about') && !location.search.includes('tab=docentes')
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-slate-600 dark:text-dark-text hover:bg-slate-50 dark:hover:bg-dark-border/50 hover:text-primary'
                            }`}
                          >
                            Quiénes Somos
                          </Link>
                          <Link
                            to="/about?tab=docentes"
                            onClick={() => setIsOpen(false)}
                            className={`px-5 py-2 rounded-xl text-xs font-bold text-left transition-all duration-300 ${
                              location.search.includes('tab=docentes')
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-slate-600 dark:text-dark-text hover:bg-slate-50 dark:hover:bg-dark-border/50 hover:text-primary'
                            }`}
                          >
                            Plana Docente
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-5 py-2.5 rounded-2xl text-sm font-bold text-left transition-all duration-300 ${
                      active
                        ? 'bg-primary text-white shadow-md'
                        : 'text-slate-600 dark:text-dark-text hover:bg-slate-50 dark:hover:bg-dark-border/50 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <hr className="border-slate-100 dark:border-dark-border/50" />

            {/* Mobile Controls Row */}
            <div className="flex justify-between items-center px-2">
              {/* Language Selector */}
              <div className="flex bg-slate-50 dark:bg-dark-border/50 p-1 rounded-full border border-slate-100 dark:border-dark-border/30">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsOpen(false);
                    }}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider transition-all duration-300 ${
                      lang === l.code
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-slate-500 dark:text-dark-text/75'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              {/* Theme & Accessibility Row */}
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2.5 rounded-full bg-slate-50 dark:bg-dark-border/50 text-slate-500 dark:text-dark-text border border-slate-100 dark:border-dark-border/30"
                >
                  {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                </button>
                
                <button
                  onClick={() => {
                    setHighContrast(!highContrast);
                    setIsOpen(false);
                  }}
                  className={`p-2.5 rounded-full border transition-all duration-300 ${
                    highContrast
                      ? 'bg-amber-500 border-amber-500 text-white'
                      : 'bg-slate-50 dark:bg-dark-border/50 border-slate-100 dark:border-dark-border/30 text-slate-500 dark:text-dark-text'
                  }`}
                >
                  <Accessibility className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        )}

      </nav>
    </>
  );
}
