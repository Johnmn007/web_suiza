import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe, GraduationCap } from 'lucide-react';

export default function Navbar({ lang, setLang, darkMode, setDarkMode, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/careers', label: t.nav.careers },
    { path: '/admission', label: t.nav.admission },
    { path: '/about', label: t.nav.about },
    { path: '/news', label: t.nav.news },
    { path: '/contact', label: t.nav.contact }
  ];

  const languages = [
    { code: 'es', label: 'ESP' },
    { code: 'en', label: 'ENG' },
    { code: 'sh', label: 'SHB' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 md:px-8">
      {/* Contact info bar above Navbar */}
      <div className="max-w-7xl mx-auto mb-2 px-4 py-1.5 flex flex-wrap justify-between items-center text-xs border-b border-primary/10 text-slate-text/70 dark:text-dark-text/70">
        <div className="flex gap-4 items-center">
          <span>📞 061-280665</span>
          <span className="hidden sm:inline">✉️ suiza@iestpsuiza.edu.pe</span>
          <span className="hidden md:inline">📍 Carretera Federico Basadre Km 5.700, Pucallpa</span>
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <Globe className="w-3.5 h-3.5" />
          <span>IESTP SUIZA - Ucayali</span>
        </div>
      </div>

      {/* Main glassmorphism nav bar */}
      <div className="max-w-7xl mx-auto rounded-2xl glassmorphism dark:glassmorphism-dark shadow-[0_8px_32px_0_rgba(75,122,244,0.08)] px-4 py-3 md:px-6 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-all duration-300">
            {/* Vanguardist geometric representation of the Swiss gear logo */}
            <GraduationCap className="w-6 h-6 animate-pulse" />
            <div className="absolute -inset-0.5 rounded-xl border border-white/30 animate-ping opacity-25 pointer-events-none"></div>
          </div>
          <div>
            <div className="font-bold text-base leading-none text-slate-text dark:text-white tracking-tight group-hover:text-primary transition-colors">
              IESTP SUIZA
            </div>
            <div className="text-[10px] text-primary dark:text-secondary font-medium tracking-widest mt-0.5">
              PUCALLPA
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Controls (Lang, Dark Mode, Mobile Menu Button) */}
        <div className="flex items-center gap-3">
          {/* Language Selector Segmented Control */}
          <div className="flex bg-slate-light dark:bg-dark-border/50 p-1 rounded-xl">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 ${
                  lang === l.code
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-light dark:bg-dark-border/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text hover:text-primary dark:hover:text-secondary transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-light dark:bg-dark-border/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text transition-all duration-300 cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-28 left-4 right-4 z-50 rounded-2xl glassmorphism dark:glassmorphism-dark shadow-2xl p-4 flex flex-col gap-2 border border-white/20 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
