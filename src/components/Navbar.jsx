import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe, ChevronDown, GraduationCap, CalendarCheck, FileText, BarChart3, BookOpen, Building2, Users, History, Target, ClipboardList, Microscope, Shield, ArrowRight, Monitor, Heart, Cog, Briefcase, Leaf, Calendar, DollarSign, ClipboardCheck, Trophy, UserPlus, Clock, ScrollText, FlaskConical, Megaphone, Sprout, Scale, Search, Eye } from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';

const SvgIcon = ({ Icon, className }) => <Icon className={`w-[18px] h-[18px] ${className || ''}`} />;

const submenus = [
  {
    parent: '/careers',
    key: 'careers',
    icon: GraduationCap,
    items: [
      { label: 'Ver todas las carreras', path: '/careers', icon: ArrowRight, highlight: true },
      { label: 'Malla Curricular', path: '/malla-curricular', icon: BookOpen },
      { label: 'Docentes', path: '/docentes', icon: Users },
      { label: 'Laboratorios y Talleres', path: '/laboratorios', icon: Monitor },
      { label: 'Convenios Empresariales', path: '/convenios', icon: Briefcase },
      { label: 'Perfil del Egresado', path: '/perfil-egresado', icon: Target },
      { label: 'Modalidades de Estudio', path: '/modalidades', icon: Calendar }
    ]
  },
  {
    parent: '/admission',
    key: 'admission',
    icon: ClipboardList,
    items: [
      { label: 'Cronograma 2026-II', path: '/cronograma', icon: Calendar },
      { label: 'Costos y Tasas', path: '/costos', icon: DollarSign },
      { label: 'Requisitos', path: '/requisitos', icon: ClipboardCheck },
      { label: 'Resultados', path: '/resultados', icon: Trophy },
      { label: 'Preinscripción', path: '/preinscripcion', icon: UserPlus }
    ]
  },
  {
    parent: '/about',
    key: 'about',
    icon: Building2,
    items: [
      { label: 'Historia', path: '/about#historia', icon: ScrollText },
      { label: 'Misión y Visión', path: '/about#mision', icon: Target },
      { label: 'Autoridades', path: '/about#autoridades', icon: Users },
      { label: 'Infraestructura', path: '/about#infraestructura', icon: Building2 }
    ]
  },
  {
    parent: '/research',
    key: 'research',
    icon: Microscope,
    items: [
      { label: 'Proyectos de Investigación', path: '/research#proyectos', icon: FlaskConical },
      { label: 'Publicaciones', path: '/research#publicaciones', icon: FileText },
      { label: 'Convocatorias', path: '/research#convocatorias', icon: Megaphone },
      { label: 'Semilleros', path: '/research#semilleros', icon: Sprout }
    ]
  },
  {
    parent: '/library',
    key: 'library',
    icon: BookOpen,
    items: [
      { label: 'Catálogo en Línea', path: '/library#catalogo', icon: BookOpen },
      { label: 'Recursos Digitales', path: '/library#digitales', icon: Monitor },
      { label: 'Horarios', path: '/library#horarios', icon: Clock },
      { label: 'Reglamento', path: '/library#reglamento', icon: ScrollText }
    ]
  },
  {
    parent: '/transparency',
    key: 'transparency',
    icon: Shield,
    items: [
      { label: 'Documentos de Gestión', path: '/transparency#documentos', icon: FileText },
      { label: 'Normativas', path: '/transparency#normativas', icon: Scale },
      { label: 'Informes Anuales', path: '/transparency#informes', icon: BarChart3 },
      { label: 'Portal de Transparencia', path: '/transparency#portal', icon: Eye }
    ]
  }
];

export default function Navbar({ lang, setLang, darkMode, setDarkMode, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animPhase, setAnimPhase] = useState('centered');
  const [logoOffset, setLogoOffset] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const logoRef = useRef(null);
  const navInnerRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > 80) {
        setNavVisible(current < lastScrollY.current);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('suizaNavAnimated');
    if (hasAnimated) {
      setAnimPhase('complete');
      return;
    }
    const t1 = setTimeout(() => setAnimPhase('sliding'), 800);
    const t2 = setTimeout(() => {
      setAnimPhase('complete');
      sessionStorage.setItem('suizaNavAnimated', 'true');
    }, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (logoRef.current && navInnerRef.current && animPhase === 'centered') {
      const navW = navInnerRef.current.offsetWidth;
      const logoW = logoRef.current.offsetWidth;
      setLogoOffset((navW / 2) - (logoW / 2));
    }
  }, [animPhase]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !e.target.closest('[data-dropdown-btn]')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleDropdown = (key) => {
    if (openDropdown === key) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(key);
    }
  };

  const handleNavClick = (path) => {
    const [base, hash] = path.split('#');
    if (hash) {
      window.location.hash = base;
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.scrollBy(0, -120);
        }
      }, 100);
    } else {
      window.location.hash = base;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { path: '/', label: t.nav.home, hasSub: false },
    { path: '/careers', label: t.nav.careers, hasSub: true, subKey: 'careers' },
    { path: '/admission', label: t.nav.admission, hasSub: true, subKey: 'admission' },
    { path: '/research', label: t.nav.research, hasSub: true, subKey: 'research' },
    { path: '/library', label: t.nav.library, hasSub: true, subKey: 'library' },
    { path: '/transparency', label: t.nav.transparency, hasSub: true, subKey: 'transparency' },
    { path: '/about', label: t.nav.about, hasSub: true, subKey: 'about' },
    { path: '/news', label: t.nav.news, hasSub: false },
    { path: '/contact', label: t.nav.contact, hasSub: false }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  const isCentered = animPhase === 'centered';
  const isComplete = animPhase === 'complete';
  const langLabel = { es: 'ESP', en: 'ENG', sh: 'SHB' };

  return (
    <nav className={`fixed top-0 z-50 w-full px-4 py-3 md:px-8 transition-transform duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div
        className="max-w-7xl mx-auto mb-2 px-4 py-1.5 flex flex-wrap justify-between items-center text-xs border-b border-primary/10 text-slate-text/70 dark:text-dark-text/70 overflow-hidden"
        style={{
          transition: 'opacity 800ms ease-out, transform 800ms ease-out',
          opacity: isCentered ? 0 : 1,
          transform: isCentered ? 'translateY(-10px)' : 'translateY(0)'
        }}
      >
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

      <div
        ref={navInnerRef}
        className="max-w-7xl mx-auto rounded-2xl glassmorphism dark:glassmorphism-dark shadow-[0_8px_32px_0_rgba(75,122,244,0.08)] px-4 py-3 md:px-6 flex items-center justify-between relative overflow-visible"
      >
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none"
          style={{
            transition: 'width 1200ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 600ms ease-out',
            width: isCentered ? '0%' : '100%',
            opacity: isCentered ? 0 : isComplete ? 1 : 0.6
          }}
        />

        <Link
          ref={logoRef}
          to="/"
          className="flex items-center gap-2.5 group shrink-0 relative z-10"
          style={{
            transition: 'transform 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)',
            transform: isCentered ? `translateX(${logoOffset}px) scale(1.08)` : 'translateX(0) scale(1)'
          }}
        >
          <div className="relative flex items-center justify-center w-20 h-20 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-all duration-300">
            <div
              className="absolute -inset-2 rounded-xl bg-primary/5 blur-xl pointer-events-none"
              style={{ transition: 'opacity 1000ms ease-out', opacity: isCentered ? 1 : 0 }}
            />
            <img src={LogoSuiza} alt="Logo Suiza" className="w-20 h-20 relative z-10" />
            <div className="absolute -inset-0.5 rounded-xl border border-white/30 animate-ping opacity-25 pointer-events-none" />
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

        <div
          className="flex items-center relative z-10"
          style={{
            transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
            opacity: isCentered ? 0 : 1,
            transform: isCentered ? 'translateX(40px)' : 'translateX(0)'
          }}
        >
          <div className="flex items-center gap-2 pl-2">
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, i) => (
                <div key={link.path} className="relative" data-dropdown-btn>
                  {link.hasSub ? (
                    <button
                      onClick={() => handleDropdown(link.subKey)}
                      className={`flex items-center gap-0.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                        isActive(link.path)
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
                      }`}
                      style={{
                        transition: 'all 500ms ease-out',
                        transitionDelay: isComplete ? `${600 + i * 80}ms` : '0s',
                        opacity: isComplete ? 1 : isCentered ? 0 : 1,
                        transform: isComplete ? 'translateY(0)' : isCentered ? 'translateY(-6px)' : 'translateY(0)'
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.subKey ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold ${
                        isActive(link.path)
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
                      }`}
                      style={{
                        transition: 'all 500ms ease-out',
                        transitionDelay: isComplete ? `${600 + i * 80}ms` : '0s',
                        opacity: isComplete ? 1 : isCentered ? 0 : 1,
                        transform: isComplete ? 'translateY(0)' : isCentered ? 'translateY(-6px)' : 'translateY(0)'
                      }}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.hasSub && openDropdown === link.subKey && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-2 w-80 rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-dark-bg/90 shadow-2xl border border-slate-200/60 dark:border-dark-border/40 p-3 overflow-hidden"
                      style={{
                        animation: 'dropdown-enter 0.3s ease-out forwards',
                        transformOrigin: 'top center'
                      }}
                    >
                      {/* Section header */}
                      <div className="px-1 pb-2 mb-2 border-b border-slate-200/60 dark:border-dark-border/30">
                        <div className="flex items-center gap-2 px-3 py-1">
                          <div className="w-1 h-4 rounded-full bg-gradient-to-b from-primary to-secondary" />
                          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-dark-text/50">
                            {link.subKey === 'careers' && 'Programas Académicos'}
                            {link.subKey === 'admission' && 'Proceso de Admisión'}
                            {link.subKey === 'research' && 'Investigación'}
                            {link.subKey === 'library' && 'Biblioteca'}
                            {link.subKey === 'transparency' && 'Transparencia'}
                            {link.subKey === 'about' && 'Información Institucional'}
                          </span>
                        </div>
                      </div>
                      {submenus.find(s => s.key === link.subKey).items.map((item, idx) => (
                        <button
                          key={item.label}
                          onClick={() => {
                            handleNavClick(item.path);
                            setOpenDropdown(null);
                          }}
                          className={`w-full text-left relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 group overflow-hidden cursor-pointer ${
                            item.highlight
                              ? 'bg-gradient-to-r from-primary/10 to-secondary/8 text-primary font-semibold border border-primary/15 shadow-sm hover:shadow-md hover:from-primary/15 hover:to-secondary/12 mb-2'
                              : 'text-slate-text dark:text-dark-text hover:text-primary dark:hover:text-primary'
                          }`}
                          style={{
                            opacity: 0,
                            transform: 'translateY(16px) translateX(-12px)',
                            animation: `dropdown-item-stair 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.04 * idx}s forwards`,
                            marginLeft: item.highlight ? '0px' : `${idx * 12}px`
                          }}
                        >
                          {!item.highlight && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 rounded-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 group-hover:h-5 transition-all duration-300" />
                          )}
                          <span className={`flex items-center justify-center w-6 shrink-0 ${item.highlight ? '' : 'opacity-70 group-hover:opacity-100 transition-opacity'}`}>
                            <SvgIcon Icon={item.icon} />
                          </span>
                          <span className={`${item.highlight ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
                          {item.highlight && (
                            <span className="ml-auto text-primary/50 group-hover:translate-x-0.5 transition-transform">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex bg-slate-light dark:bg-dark-border/50 p-1 rounded-xl">
                {['es', 'en', 'sh'].map((code) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 ${
                      lang === code
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-slate-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    {langLabel[code]}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-xl bg-slate-light dark:bg-dark-border/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text hover:text-primary dark:hover:text-secondary transition-all duration-300 cursor-pointer"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-light dark:bg-dark-border/50 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-text dark:text-dark-text transition-all duration-300 cursor-pointer"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-28 left-4 right-4 z-50 rounded-2xl glassmorphism dark:glassmorphism-dark shadow-2xl p-4 border border-white/20 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const sub = link.hasSub ? submenus.find(s => s.key === link.subKey) : null;
              const isSubOpen = mobileSubOpen === link.subKey;

              if (!link.hasSub) {
                return (
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
                );
              }

              return (
                <div key={link.path}>
                  <button
                    onClick={() => setMobileSubOpen(isSubOpen ? null : link.subKey)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive(link.path)
                        ? 'bg-primary text-white shadow-md shadow-primary/25'
                        : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-border/50 hover:text-primary dark:hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSubOpen && (
                    <div className="submenu-slide ml-3 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3">
                      {sub.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => {
                            handleNavClick(item.path);
                            setIsOpen(false);
                          }}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium text-slate-text/80 dark:text-dark-text/80 hover:bg-primary/5 hover:text-primary dark:hover:text-primary transition-all text-left"
                        >
                          <span className="flex items-center justify-center w-5 shrink-0 opacity-60">
                            <SvgIcon Icon={item.icon} />
                          </span>
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
