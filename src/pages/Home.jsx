import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import { GraduationCap, ArrowRight, User, Search, Folder, CheckSquare, BookOpen, Library, CheckCircle2, ChevronRight } from 'lucide-react';
import Carousel from '../components/Carousel';
import AdmissionButton from '../components/AdmissionButton';
import { useDeviceType } from '../hooks/useDeviceType';

export default function Home({ t }) {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [isLogged, setIsLogged] = useState(false);
  const [selectedTaskTab, setSelectedTaskTab] = useState('Recent');
  const [hoveredPanel, setHoveredPanel] = useState(null);
  const [activeMockupTab, setActiveMockupTab] = useState(2); // default to Dashboard mockup on mobile

  const { isCelular, isLaptop } = useDeviceType();
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Intentar reproducir con audio desmutiado
          videoElement.muted = false;
          videoElement.play().catch(error => {
            console.log("Autoplay con audio bloqueado por el navegador, intentando silenciado:", error);
            // Fallback: reproducir silenciado si el navegador bloquea la reproducción con audio
            videoElement.muted = true;
            videoElement.play().catch(err => {
              console.log("La reproducción silenciada también falló:", err);
            });
          });
        } else {
          // Pausar el video cuando sale de vista
          videoElement.pause();
        }
      },
      {
        threshold: 0.3, // Se reproduce cuando al menos el 30% del video es visible
      }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const stats = [
    { number: "1,600+", label: t.hero.stats.students },
    { number: "57+", label: t.hero.stats.teachers },
    { number: "150+", label: t.hero.stats.newStudents },
    { number: "1,000+", label: t.hero.stats.graduates },
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Hero with full-width background slider */}
      {isCelular ? (
        <>
          {/* Carousel without children (banner mode) */}
          <section className="relative overflow-hidden group w-full">
            <Carousel />
          </section>

          {/* Welcome content, buttons & stats directly below */}
          <section className="relative px-4 py-6 bg-gradient-to-b from-[#E5EEFE] to-transparent dark:from-[#0d1117]/30 dark:to-transparent">
            <div className="flex flex-col items-start text-left gap-4 animate-in fade-in slide-in-from-bottom-6 duration-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white font-semibold text-[10px] tracking-wider uppercase">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                <span>Licenciado por MINEDU</span>
              </div>

              <h1 className="font-extrabold text-slate-text dark:text-white leading-tight tracking-tight text-2xl">
                {t.hero.welcome}
              </h1>

              <p className="text-slate-text/80 dark:text-dark-text/85 leading-relaxed text-xs">
                {t.hero.subtitle}
              </p>

              <div className="flex gap-3 w-full">
                <Link
                  to="/careers"
                  className="flex-1 rounded-2xl bg-white hover:bg-slate-light text-primary font-bold tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 transition-all cursor-pointer px-4 py-3 text-xs border border-primary/10"
                >
                  <span>{t.hero.explore}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </Link>
                <div className="flex-1">
                  <AdmissionButton 
                    t={t} 
                    className="w-full group relative py-3 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/40 text-white font-bold text-xs tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
                  />
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 gap-4 w-full mt-2 p-4 rounded-2xl bg-white/85 dark:bg-dark-card/85 backdrop-blur-sm border border-slate-100 dark:border-dark-border/40 shadow-md">
                {stats.map((s, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="font-extrabold text-primary dark:text-secondary tracking-tight text-xl">
                      {s.number}
                    </span>
                    <span className="font-semibold text-slate-text/60 dark:text-dark-text/60 mt-0.5 uppercase tracking-wider text-[8px]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="relative overflow-hidden group">
          <Carousel>
            <div className={`relative z-10 transition-all duration-300 ${
              isLaptop 
                ? 'py-12 px-6' 
                : 'py-12 md:py-20 px-4 md:px-8'
            }`}>
              <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center ${
                isLaptop ? 'gap-8' : 'gap-12'
              }`}>
                
                {/* Left Side: Welcome info & stats */}
                <div className={`lg:col-span-6 flex flex-col items-start text-left animate-in fade-in slide-in-from-left-8 duration-500 ${
                  isLaptop ? 'gap-4' : 'gap-6'
                }`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-semibold text-[10px] tracking-wider uppercase backdrop-blur-sm">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Licenciado por MINEDU</span>
                  </div>

                  <h1 className={`font-extrabold text-white leading-tight tracking-tight drop-shadow-lg ${
                    isLaptop 
                      ? 'text-4xl mt-1.5' 
                      : 'text-4xl md:text-5xl lg:text-6xl mt-2'
                  }`}>
                    {t.hero.welcome}
                  </h1>

                  <p className={`text-white/85 max-w-xl leading-relaxed drop-shadow-md ${
                    isLaptop 
                      ? 'text-sm' 
                      : 'text-base md:text-lg'
                  }`}>
                    {t.hero.subtitle}
                  </p>

                  <div className="flex flex-wrap mt-0.5 gap-4">
                    <Link
                      to="/careers"
                      className="rounded-2xl bg-white hover:bg-slate-light text-primary font-bold tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 transition-all cursor-pointer px-6 py-3.5 text-sm"
                    >
                      <span>{t.hero.explore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <AdmissionButton t={t} />
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-4 w-full mt-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xl p-4 lg:p-6 gap-4 lg:gap-6">
                    {stats.map((s, idx) => (
                      <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <span className={`font-extrabold text-white tracking-tight drop-shadow-md ${
                          isLaptop ? 'text-xl' : 'text-2xl md:text-3xl'
                        }`}>
                          {s.number}
                        </span>
                        <span className={`font-medium text-white/75 mt-0.5 uppercase tracking-wider ${
                          isLaptop ? 'text-[9px]' : 'text-xs'
                        }`}>
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Vanguardist Interactive App Mockup (Desktop/Laptop Only) */}
                <div className="lg:col-span-6 w-full flex justify-center items-center relative py-8 md:py-12 overflow-visible">
                  <div className="relative flex flex-col md:flex-row gap-6 md:gap-4 items-center scale-90 sm:scale-100 origin-center transition-all duration-300 phone-perspective-container">
                    
                    {/* Phone 1: Login UI */}
                    <div 
                      onMouseEnter={() => setHoveredPanel(1)}
                      onMouseLeave={() => setHoveredPanel(null)}
                      className={`w-[230px] h-[460px] rounded-[2.5rem] bg-gradient-to-b from-[#4B7AF4] to-[#2b51ba] p-3 shadow-2xl relative shrink-0 border-[6px] border-white/30 flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 delay-100 phone-mockup ${hoveredPanel === 1 ? 'hover-active' : hoveredPanel !== null ? 'sibling-blurred' : ''}`}
                    >
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-white/30 rounded-full z-20"></div>
                      
                      <div className="flex-1 flex flex-col justify-between pt-8 pb-4 px-4 text-white">
                        <div className="flex flex-col items-center gap-1.5 mt-8">
                          <div className="w-18 h-18 rounded-[50%] backdrop-blur-md flex items-center justify-center border border-white/25">
                            <img src={LogoSuiza} alt="Logo Suiza" className="w-15 h-15" />
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
                                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                                placeholder="usuario@suiza" 
                                className="bg-white/10 border border-white/25 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:bg-white/15 login-input-interactive"
                              />
                            </div>
                            <div className="flex flex-col gap-1 text-left">
                              <label className="text-[9px] font-semibold text-white/80 uppercase">Clave</label>
                              <input 
                                type="password" 
                                required
                                value={loginForm.password}
                                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                                placeholder="••••••••" 
                                className="bg-white/10 border border-white/25 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:bg-white/15 login-input-interactive"
                              />
                            </div>
                            <button type="submit" className="w-full mt-2 py-2.5 rounded-xl bg-white hover:bg-slate-light text-primary font-bold text-xs shadow-md transition-all cursor-pointer login-btn-interactive">
                              LOGIN
                            </button>
                            <span className="text-[9px] text-white/60 hover:text-white text-center mt-1 cursor-pointer">¿Olvidaste tu contraseña?</span>
                          </form>
                        )}
                      </div>
                      <div className="w-20 h-1 bg-white/40 rounded-full mx-auto mb-1"></div>
                    </div>

                    {/* Phone 2: Dashboard UI */}
                    <div 
                      onMouseEnter={() => setHoveredPanel(2)}
                      onMouseLeave={() => setHoveredPanel(null)}
                      className={`w-[230px] h-[460px] rounded-[2.5rem] bg-white dark:bg-dark-card p-3 shadow-2xl relative shrink-0 border-[6px] border-white/30 flex flex-col justify-between overflow-hidden md:-translate-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-200 phone-mockup ${hoveredPanel === 2 ? 'hover-active' : hoveredPanel !== null ? 'sibling-blurred' : ''}`}
                    >
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-text/30 dark:bg-dark-border/80 rounded-full z-20"></div>
                      
                      <div className="flex-1 flex flex-col text-slate-text dark:text-white pt-6 overflow-hidden">
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

                        <div className="px-3 -mt-4 mb-4 relative z-10">
                          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-dark-border border border-primary/10 shadow-md search-input-container">
                            <Search className="w-3.5 h-3.5 text-primary" />
                            <input 
                              type="text" 
                              placeholder="Search..."
                              readOnly
                              className="w-full text-[10px] text-slate-text dark:text-white outline-none bg-transparent"
                            />
                          </div>
                        </div>

                        <span className="text-[10px] font-bold text-left px-4 mb-2 opacity-80">¿Qué haremos hoy?</span>

                        <div className="grid grid-cols-2 gap-3 px-4 flex-1 pb-4">
                          <div className="rounded-2xl border border-primary/5 bg-slate-light/50 dark:bg-dark-border/20 p-3 flex flex-col items-center justify-center text-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer quick-action-btn">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                              <CheckSquare className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-bold">Asistencia</span>
                          </div>
                          <div className="rounded-2xl border border-primary/5 bg-slate-light/50 dark:bg-dark-border/20 p-3 flex flex-col items-center justify-center text-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer quick-action-btn">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                              <BookOpen className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-bold">Tareas</span>
                          </div>
                          <div className="rounded-2xl border border-primary/5 bg-slate-light/50 dark:bg-dark-border/20 p-3 flex flex-col items-center justify-center text-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer quick-action-btn">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                              <Folder className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-bold">Recursos</span>
                          </div>
                          <div className="rounded-2xl border border-primary/5 bg-slate-light/50 dark:bg-dark-border/20 p-3 flex flex-col items-center justify-center text-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer quick-action-btn">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                              <Library className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-bold">Biblioteca</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-20 h-1 bg-slate-text/40 dark:bg-dark-border rounded-full mx-auto mb-1"></div>
                    </div>

                    {/* Phone 3: Tasks and Progress list */}
                    <div 
                      onMouseEnter={() => setHoveredPanel(3)}
                      onMouseLeave={() => setHoveredPanel(null)}
                      className={`w-[230px] h-[460px] rounded-[2.5rem] bg-white dark:bg-dark-card p-3 shadow-2xl relative shrink-0 border-[6px] border-white/30 flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 delay-300 phone-mockup ${hoveredPanel === 3 ? 'hover-active' : hoveredPanel !== null ? 'sibling-blurred' : ''}`}
                    >
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-text/30 dark:bg-dark-border/80 rounded-full z-20"></div>
                      
                      <div className="flex-1 flex flex-col text-slate-text dark:text-white pt-6 overflow-hidden">
                        <div className="px-4 pt-4 text-left">
                          <h5 className="text-xs font-bold leading-none">Let's finish your task!</h5>
                          <span className="text-[9px] opacity-60 block mt-1">05 Noviembre 2026</span>
                        </div>

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

                        <div className="flex-1 overflow-y-auto px-3 py-2 flex flex-col gap-2.5">
                          {[
                            { title: "Desarrollo Web", progress: 80, deadline: "Nov 08" },
                            { title: "Base de Datos", progress: 60, deadline: "Nov 10" },
                            { title: "Estadística Aplicada", progress: 40, deadline: "Nov 25" }
                          ].map((task, index) => (
                            <div key={index} className="p-2.5 rounded-2xl bg-gradient-to-tr from-primary to-primary-dark text-white text-left relative overflow-hidden shadow-sm hover:scale-[1.01] transition-transform task-card">
                              <div className="flex items-center justify-between mb-1.5">
                                <Folder className="w-5 h-5 opacity-70" />
                                <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full">Faltan 2 días</span>
                              </div>
                              <h6 className="text-[10px] font-bold truncate leading-tight">{task.title}</h6>
                              <span className="text-[8px] opacity-75 block mt-0.5">Límite: {task.deadline}</span>
                              
                              <div className="w-full bg-white/25 rounded-full h-1 mt-2.5 overflow-hidden">
                                <div className="bg-white h-1 rounded-full progress-bar-fill" style={{ width: `${task.progress}%` }}></div>
                              </div>
                              <span className="text-[8px] font-bold block text-right mt-1 opacity-90">{task.progress}% Completado</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-20 h-1 bg-slate-text/40 dark:bg-dark-border rounded-full mx-auto mb-1"></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
      )}

      {/* Info & Call-To-Action Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-24 border-t border-primary/5 pt-16">
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
              className="group p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 flex flex-col justify-between text-left hover-lift"
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

      {/* Video Presentation Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 mb-16 border-t border-primary/5 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 text-left flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-secondary font-semibold text-xs tracking-wider uppercase">
              Recorrido Virtual
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] dark:text-white leading-tight tracking-tight">
              Camino a la Excelencia
            </h2>
            <p className="text-sm md:text-base text-slate-text/75 dark:text-dark-text/75 leading-relaxed font-normal">
              Te invitamos a ver nuestra presentación institucional. Conoce el campus, nuestros laboratorios equipados con tecnología de punta y la experiencia de estudiantes que hoy lideran el desarrollo tecnológico en la Amazonía peruana.
            </p>
            <div className="flex flex-col gap-3 mt-2 w-full">
              {[
                "Educación 100% Gratuita de Calidad",
                "11 Programas de Estudio Licenciados",
                "Infraestructura y Laboratorios Modernos",
                "Inserción Laboral Rápida y Convenios"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-black">
                    ✓
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-text/90 dark:text-dark-text/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="relative w-full max-w-2xl rounded-[2rem] overflow-hidden bg-slate-50 dark:bg-dark-card border-4 border-white dark:border-dark-border shadow-2xl shadow-primary/10 group/video">
              <video 
                ref={videoRef}
                className="w-full aspect-video object-cover" 
                controls 
                preload="metadata"
                playsInline
                poster="https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Suiza.webp"
              >
                <source src="https://iestpsuiza.edu.pe/wp-content/uploads/2023/09/instituto.mp4" type="video/mp4" />
                Tu navegador no soporta el reproductor de video.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
