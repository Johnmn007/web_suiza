import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import { GraduationCap, ArrowRight, User, Search, Folder, CheckSquare, BookOpen, Library, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Home({ t }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [isLogged, setIsLogged] = useState(false);
  const [selectedTaskTab, setSelectedTaskTab] = useState('Recent');

  const stats = [
    { number: "1,600+", label: t.hero.stats.students },
    { number: "57+", label: t.hero.stats.teachers },
    { number: "150+", label: t.hero.stats.newStudents },
    { number: "1,000+", label: t.hero.stats.graduates },
  ];

  return (
    <div className="relative overflow-hidden w-full px-4 md:px-8 py-8">
      {/* Background glowing circles */}
      <div className="bg-circle-1 top-10 left-10"></div>
      <div className="bg-circle-2 top-80 right-20"></div>

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 pb-20">
        
        {/* Left Side: Welcome info & stats */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-6 animate-in fade-in slide-in-from-left-8 duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-secondary font-semibold text-xs tracking-wider uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>Licenciado por MINEDU</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-text dark:text-white leading-tight tracking-tight mt-2">
            {t.hero.welcome}
          </h1>

          <p className="text-base md:text-lg text-slate-text/80 dark:text-dark-text/80 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/careers"
              className="px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary-dark text-white font-bold text-sm tracking-wider shadow-lg shadow-primary/25 hover:shadow-primary-dark/30 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>{t.hero.explore}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/admission"
              className="px-6 py-3.5 rounded-2xl bg-white dark:bg-dark-card border border-primary/20 hover:bg-slate-light dark:hover:bg-dark-border/50 text-slate-text dark:text-white font-semibold text-sm tracking-wider transition-all"
            >
              {t.nav.admission}
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mt-8 p-6 rounded-3xl bg-white/40 dark:bg-dark-card/20 border border-primary/5 dark:border-dark-border/30 backdrop-blur-sm shadow-[0_15px_30px_rgba(75,122,244,0.02)]">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-2xl md:text-3xl font-extrabold text-primary dark:text-secondary tracking-tight">
                  {s.number}
                </span>
                <span className="text-xs font-medium text-slate-text/70 dark:text-dark-text/70 mt-1 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Vanguardist Interactive App Mockup (Inspired by modelo.jpg) */}
        <div className="lg:col-span-6 w-full flex justify-center items-center relative py-12 md:py-16 overflow-visible">
          {/* Outer container layout for the three phones */}
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-4 items-center scale-90 sm:scale-100 origin-center transition-all duration-300">
            
            {/* Phone 1: Login UI */}
            <div className="w-[230px] h-[460px] rounded-[2.5rem] bg-gradient-to-b from-[#4B7AF4] to-[#2b51ba] p-3 shadow-2xl relative shrink-0 border-[6px] border-slate-text dark:border-dark-border/80 flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 delay-100">
              {/* Speaker & Camera notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-text dark:bg-dark-border/80 rounded-full z-20"></div>
              
              <div className="flex-1 flex flex-col justify-between pt-8 pb-4 px-4 text-white">
                <div className="flex flex-col items-center gap-1.5 mt-8">
                  <div className="w-12 h-12 rounded-[50%]  backdrop-blur-md flex items-center justify-center border border-white/25">
                    {/* <GraduationCap className="w-7 h-7" /> */}
                    <img src={LogoSuiza} alt="Logo Suiza" className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold tracking-tight mt-2">suizaLearning</h4>
                  <span className="text-[9px] tracking-wider text-white/60">Aula Virtual</span>
                </div>

                {isLogged ? (
                  <div className="text-center py-6 animate-in zoom-in duration-300">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                    <p className="text-xs font-semibold">¡Bienvenido!</p>
                    <p className="text-[10px] text-white/70 mt-1">Has iniciado sesión</p>
                    <button 
                      onClick={() => setIsLogged(false)}
                      className="mt-4 px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-medium border border-white/20 transition-all"
                    >
                      Cerrar
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setIsLogged(true); }} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-[9px] font-semibold text-white/80 uppercase">Correo</label>
                      <input 
                        type="email" 
                        required
                        value={loginForm.email}
                        onChange={(e) => setFormData({...loginForm, email: e.target.value})}
                        placeholder="usuario@suiza" 
                        className="bg-white/10 border border-white/25 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:bg-white/15"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-[9px] font-semibold text-white/80 uppercase">Clave</label>
                      <input 
                        type="password" 
                        required
                        value={loginForm.password}
                        onChange={(e) => setFormData({...loginForm, password: e.target.value})}
                        placeholder="••••••••" 
                        className="bg-white/10 border border-white/25 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:bg-white/15"
                      />
                    </div>
                    <button type="submit" className="w-full mt-2 py-2.5 rounded-xl bg-white hover:bg-slate-light text-primary font-bold text-xs shadow-md transition-all cursor-pointer">
                      LOGIN
                    </button>
                    <span className="text-[9px] text-white/60 hover:text-white text-center mt-1 cursor-pointer">¿Olvidaste tu contraseña?</span>
                  </form>
                )}
              </div>

              {/* Bottom bar pill */}
              <div className="w-20 h-1 bg-white/40 rounded-full mx-auto mb-1"></div>
            </div>

            {/* Phone 2: Dashboard UI */}
            <div className="w-[230px] h-[460px] rounded-[2.5rem] bg-white dark:bg-dark-card p-3 shadow-2xl relative shrink-0 border-[6px] border-slate-text dark:border-dark-border/80 flex flex-col justify-between overflow-hidden md:-translate-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-200">
              {/* Speaker & Camera notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-text dark:bg-dark-border/80 rounded-full z-20"></div>
              
              <div className="flex-1 flex flex-col text-slate-text dark:text-white pt-6 overflow-hidden">
                {/* curved header background */}
                <div className="h-40 bg-gradient-to-br from-primary to-primary-dark rounded-b-[2rem] p-4 text-white flex flex-col justify-between pt-6 relative">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[10px] font-bold">📚 IESTP SUIZA</span>
                    <div className="w-6 h-6 rounded-full bg-white/25 border border-white/35 flex items-center justify-center">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="text-left mt-2 pb-2">
                    <span className="text-[10px] text-white/70 block leading-tight">Welcome,</span>
                    <span className="text-sm font-bold block leading-none mt-0.5">Estudiante Suiza</span>
                    <span className="text-[9px] text-white/60 block mt-1">ID: 192005104 • Sistemas</span>
                  </div>
                </div>

                {/* Overlapping Search Bar */}
                <div className="px-3 -mt-4 mb-4 relative z-10">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-dark-border border border-primary/10 shadow-md">
                    <Search className="w-3.5 h-3.5 text-primary" />
                    <input 
                      type="text" 
                      placeholder="Search..."
                      readOnly
                      className="w-full text-[10px] text-slate-text dark:text-white outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Categories title */}
                <span className="text-[10px] font-bold text-left px-4 mb-2 opacity-80">¿Qué haremos hoy?</span>

                {/* 4 Square Grid Categories */}
                <div className="grid grid-cols-2 gap-3 px-4 flex-1 pb-4">
                  <div className="rounded-2xl border border-primary/5 bg-slate-light/50 dark:bg-dark-border/20 p-3 flex flex-col items-center justify-center text-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <CheckSquare className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold">Asistencia</span>
                  </div>

                  <div className="rounded-2xl border border-primary/5 bg-slate-light/50 dark:bg-dark-border/20 p-3 flex flex-col items-center justify-center text-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold">Tareas</span>
                  </div>

                  <div className="rounded-2xl border border-primary/5 bg-slate-light/50 dark:bg-dark-border/20 p-3 flex flex-col items-center justify-center text-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Folder className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold">Recursos</span>
                  </div>

                  <div className="rounded-2xl border border-primary/5 bg-slate-light/50 dark:bg-dark-border/20 p-3 flex flex-col items-center justify-center text-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Library className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold">Biblioteca</span>
                  </div>
                </div>
              </div>

              {/* Bottom bar pill */}
              <div className="w-20 h-1 bg-slate-text/40 dark:bg-dark-border rounded-full mx-auto mb-1"></div>
            </div>

            {/* Phone 3: Tasks and Progress list */}
            <div className="w-[230px] h-[460px] rounded-[2.5rem] bg-white dark:bg-dark-card p-3 shadow-2xl relative shrink-0 border-[6px] border-slate-text dark:border-dark-border/80 flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 delay-300">
              {/* Speaker & Camera notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-text dark:bg-dark-border/80 rounded-full z-20"></div>
              
              <div className="flex-1 flex flex-col text-slate-text dark:text-white pt-6 overflow-hidden">
                {/* Header text */}
                <div className="px-4 pt-4 text-left">
                  <h5 className="text-xs font-bold leading-none">Let's finish your task!</h5>
                  <span className="text-[9px] opacity-60 block mt-1">05 Noviembre 2026</span>
                </div>

                {/* Tabs bar */}
                <div className="flex justify-between border-b border-primary/5 px-4 py-2 mt-2">
                  {['Recent', 'All', 'Complete'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTaskTab(tab)}
                      className={`text-[9px] font-bold pb-1 transition-all ${
                        selectedTaskTab === tab
                          ? 'text-primary border-b border-primary'
                          : 'opacity-55 hover:opacity-100'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tasks container */}
                <div className="flex-1 overflow-y-auto px-3 py-2 flex flex-col gap-2.5">
                  {[
                    { title: "Desarrollo Web", progress: 80, deadline: "Nov 08" },
                    { title: "Base de Datos", progress: 60, deadline: "Nov 10" },
                    { title: "Estadística Aplicada", progress: 40, deadline: "Nov 25" }
                  ].map((task, index) => (
                    <div key={index} className="p-2.5 rounded-2xl bg-gradient-to-tr from-primary to-primary-dark text-white text-left relative overflow-hidden shadow-sm hover:scale-[1.01] transition-transform">
                      {/* folder icon */}
                      <div className="flex items-center justify-between mb-1.5">
                        <Folder className="w-5 h-5 opacity-70" />
                        <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full">Faltan 2 días</span>
                      </div>
                      <h6 className="text-[10px] font-bold truncate leading-tight">{task.title}</h6>
                      <span className="text-[8px] opacity-75 block mt-0.5">Límite: {task.deadline}</span>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-white/25 rounded-full h-1 mt-2.5 overflow-hidden">
                        <div className="bg-white h-1 rounded-full" style={{ width: `${task.progress}%` }}></div>
                      </div>
                      <span className="text-[8px] font-bold block text-right mt-1 opacity-90">{task.progress}% Completado</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar pill */}
              <div className="w-20 h-1 bg-slate-text/40 dark:bg-dark-border rounded-full mx-auto mb-1"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Info & Call-To-Action Sections representing structural elements from the old website */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 border-t border-primary/5 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Acceso Rápido al Estudiante
          </h2>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-2">
            Enlaces a portales oficiales y recursos digitales del IESTP Suiza.
          </p>
        </div>

        {/* 4 Cards quick actions (from original website elements) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "¿Por qué IESTP Suiza?",
              desc: "Conoce nuestra acreditación nacional, educación de calidad 100% gratuita y convenios.",
              link: "/about",
              tag: "Institucional"
            },
            {
              title: "Admisión Regular 2026",
              desc: "Requisitos de postulación, cronograma y vacantes de las 11 especialidades.",
              link: "/admission",
              tag: "Admisiones"
            },
            {
              title: "Nuestras Carreras",
              desc: "Explora la currícula, laboratorios y el campo de acción de cada carrera profesional.",
              link: "/careers",
              tag: "Especialidades"
            },
            {
              title: "Últimas Noticias",
              desc: "Entérate de las actividades institucionales, eventos y publicaciones científicas.",
              link: "/news",
              tag: "Eventos"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-3xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 hover:border-primary/30 hover:shadow-[0_15px_35px_rgba(75,122,244,0.06)] dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-primary dark:text-secondary tracking-widest uppercase">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
              <Link
                to={item.link}
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary dark:text-secondary hover:translate-x-1 transition-all"
              >
                <span>Saber más</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
