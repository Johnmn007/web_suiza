import { useState } from 'react';
import {
  Code, Heart, Truck, Sprout, Trees, Calculator,
  Briefcase, HardHat, Bolt, Compass, FolderClosed,
  ChevronDown, ChevronUp, Star, GraduationCap, Clock, CheckCircle2, Sparkles, BookOpen, Map, Hammer,
  Search, Award, ShieldCheck, Sun, Moon, Activity, FileText, School
} from 'lucide-react';
import careerImages from '../assets/career_images_map.json';

const categoryColors = {
  tech: { hex: '#4B7AF4', glow: 'rgba(75, 122, 244, 0.4)', text: 'text-primary' },
  business: { hex: '#F59E0B', glow: 'rgba(245, 158, 11, 0.4)', text: 'text-amber-500' },
  field: { hex: '#10B981', glow: 'rgba(16, 185, 129, 0.4)', text: 'text-emerald-500' },
};

const careerIcons = {
  sys: Code, enfer: Heart, meca: Truck, agro: Sprout,
  forest: Trees, cont: Calculator, admin: Briefcase,
  civil: HardHat, elec: Bolt, tur: Compass, asist: FolderClosed,
};

// Real detailed content for IESTP Suiza careers
const careerDetails = {
  sys: {
    field: ["Empresas de desarrollo de software", "Áreas de TI en instituciones públicas y privadas", "Consultoría tecnológica independiente", "Administración de bases de datos y servidores"],
    skills: ["Desarrollo frontend y backend", "Modelado de bases de datos relacionales y NoSQL", "Administración de redes y seguridad de la información", "Desarrollo de aplicaciones móviles"],
    certifications: [
      "Módulo I: Soporte Técnico y Operación de Centros de Cómputo",
      "Módulo II: Desarrollo de Software y Gestión de Bases de Datos",
      "Módulo III: Análisis, Diseño e Integración de Sistemas de Información"
    ],
    photos: ["/careers/sys.jpg", "/sys_practice.png", "/suiza_campus.png"],
    turns: "Diurno y Vespertino"
  },
  enfer: {
    field: ["Hospitales públicos (MINSA, EsSalud)", "Clínicas privadas y centros de atención integral", "Centros médicos comunitarios", "Atención médica domiciliaria y geriátrica"],
    skills: ["Primeros auxilios y enfermería preventiva", "Administración de medicamentos bajo supervisión", "Cuidado integral del paciente hospitalizado", "Campañas de salud comunitaria y vacunación"],
    certifications: [
      "Módulo I: Servicios Básicos de Salud y Atención Preventiva",
      "Módulo II: Servicios Especializados de Enfermería y Hospitalización",
      "Módulo III: Atención en Salud Pública e Intervención Comunitaria"
    ],
    photos: ["/careers/enfer.jpg", "/suiza_campus.png", "/sys_practice.png"],
    turns: "Diurno y Vespertino"
  },
  meca: {
    field: ["Concesionarias y talleres automotrices multimarca", "Empresas de transporte de carga y pasajeros", "Centros de diagnóstico computarizado automotriz", "Emprendimientos propios de servicio mecánico"],
    skills: ["Diagnóstico electrónico automotriz por escáner", "Reparación y mantenimiento de motores de combustión", "Mantenimiento del sistema de transmisión y frenos", "Sistemas eléctricos y electrónicos del vehículo"],
    certifications: [
      "Módulo I: Mantenimiento de Sistemas Mecánicos Automotrices",
      "Módulo II: Reparación de Motores y Sistemas de Suspensión",
      "Módulo III: Diagnóstico y Control de Sistemas Eléctricos y Electrónicos"
    ],
    photos: ["/careers/meca.jpg", "/suiza_campus.png", "/agro_practice.png"],
    turns: "Diurno"
  },
  agro: {
    field: ["Empresas agroindustriales y fundos de producción", "Asistencia técnica en cooperativas agrarias", "Organismos no gubernamentales de desarrollo rural", "Gestión de viveros y granjas pecuarias"],
    skills: ["Manejo fitosanitario de cultivos tropicales (cacao, café)", "Producción y sanidad animal (porcinos, aves, vacunos)", "Instalación de sistemas de riego tecnificado", "Formulación de proyectos agropecuarios sostenibles"],
    certifications: [
      "Módulo I: Producción de Cultivos Alimenticios y Agroindustriales",
      "Módulo II: Producción y Sanidad de Animales Menores y Mayores",
      "Módulo III: Gestión y Comercialización Agropecuaria"
    ],
    photos: ["/careers/agro.jpg", "/agro_practice.png", "/suiza_campus.png"],
    turns: "Diurno"
  },
  forest: {
    field: ["Empresas forestales maderables y no maderables", "Organismos públicos de conservación ambiental (SERFOR)", "Viveros forestales de propagación clonal", "Evaluación de impacto ambiental y reforestación"],
    skills: ["Inventario y censo forestal con GPS y drones", "Manejo y propagación en viveros de especies nativas", "Monitoreo de concesiones forestales y fauna silvestre", "Procesamiento y comercialización de madera sostenible"],
    certifications: [
      "Módulo I: Propagación y Reforestación de Especies Forestales",
      "Módulo II: Inventario y Aprovechamiento Sostenible de Bosques",
      "Módulo III: Conservación y Gestión de Recursos de Fauna Silvestre"
    ],
    photos: ["/careers/forest.jpg", "/agro_practice.png", "/suiza_campus.png"],
    turns: "Diurno"
  },
  cont: {
    field: ["Áreas de contabilidad y finanzas de empresas privadas", "Gobiernos regionales y municipalidades", "Estudios contables y asesoría independiente", "Auditoría interna corporativa"],
    skills: ["Declaración de tributos y software contable (SISCONT)", "Elaboración de estados financieros balanceados", "Análisis de costos y presupuestos operativos", "Planillas electrónicas y legislación laboral"],
    certifications: [
      "Módulo I: Registro Contable de Operaciones y Transacciones",
      "Módulo II: Determinación de Costos y Declaraciones Tributarias",
      "Módulo III: Formulación y Análisis de Estados Financieros"
    ],
    photos: ["/careers/cont.jpg", "/suiza_campus.png", "/sys_practice.png"],
    turns: "Diurno y Vespertino"
  },
  admin: {
    field: ["Administración de negocios comerciales y de servicios", "Áreas de recursos humanos y logística", "Gestión de compras y control de almacenes", "Planificación de campañas de marketing digital"],
    skills: ["Planificación y control de presupuestos empresariales", "Gestión del talento humano y clima organizacional", "Negociación y compras con proveedores estratégicos", "Gestión de atención al cliente y ventas efectivas"],
    certifications: [
      "Módulo I: Gestión Administrativa y Operativa de Negocios",
      "Módulo II: Administración de Recursos Humanos y Logística",
      "Módulo III: Formulación de Proyectos e Innovación Comercial"
    ],
    photos: ["/careers/admin.jpg", "/suiza_campus.png", "/sys_practice.png"],
    turns: "Diurno y Vespertino"
  },
  civil: {
    field: ["Supervisión de obras civiles y carreteras", "Oficinas de proyectos y dibujo arquitectónico (CAD/Revit)", "Empresas constructoras y contratistas del estado", "Laboratorios de control de calidad de suelos y concreto"],
    skills: ["Levantamiento topográfico asistido por estación total", "Lectura y elaboración de planos arquitectónicos y estructurales", "Cómputos métricos, presupuestos y metrados (S10)", "Control de calidad de mezclas de concreto y asfalto"],
    certifications: [
      "Módulo I: Levantamiento Topográfico y Dibujo Técnico",
      "Módulo II: Metrados, Presupuestos y Programación de Obras",
      "Módulo III: Supervisión y Control de Calidad en Construcción"
    ],
    photos: ["/careers/civil.jpg", "/suiza_campus.png", "/agro_practice.png"],
    turns: "Diurno"
  },
  elec: {
    field: ["Mantenimiento eléctrico en plantas industriales", "Instalaciones eléctricas residenciales y comerciales", "Servicios de bobinado de motores e instrumentación", "Empresas distribuidoras de energía eléctrica"],
    skills: ["Montaje de tableros eléctricos de potencia y mando", "Programación de controladores lógicos (PLC)", "Bobinado y mantenimiento de motores eléctricos", "Instalaciones eléctricas inteligentes y domótica"],
    certifications: [
      "Módulo I: Instalaciones Eléctricas de Interiores y Edificaciones",
      "Módulo II: Automatización y Control de Tableros Eléctricos",
      "Módulo III: Operación de Plantas y Sistemas de Control Industrial"
    ],
    photos: ["/careers/elec.jpg", "/suiza_campus.png", "/sys_practice.png"],
    turns: "Diurno"
  },
  tur: {
    field: ["Agencias de viajes y tour operadoras locales", "Hoteles, resorts y establecimientos de hospedaje", "Guía turístico en reservas naturales de la Amazonía", "Centros de promoción turística cultural e institucional"],
    skills: ["Guiado e interpretación turística y bilingüe", "Planificación de paquetes y rutas turísticas locales", "Gestión operativa de servicios hoteleros y de recepción", "Promoción del patrimonio natural y arqueológico regional"],
    certifications: [
      "Módulo I: Operaciones de Servicios Turísticos e Información",
      "Módulo II: Guiado y Asistencia Turística en la Amazonía",
      "Módulo III: Gestión y Administración de Proyectos Turísticos"
    ],
    photos: ["/careers/tur.jpg", "/suiza_campus.png", "/agro_practice.png"],
    turns: "Diurno"
  },
  asist: {
    field: ["Secretaría de alta gerencia en corporaciones", "Asistencia administrativa en dependencias estatales", "Gestión de correspondencia y archivo institucional", "Organización de eventos ejecutivos y corporativos"],
    skills: ["Técnicas de redacción administrativa y ortografía", "Manejo avanzado de herramientas de oficina (MS Office)", "Atención telefónica, protocolo y etiqueta empresarial", "Clasificación, digitalización y archivo de documentos"],
    certifications: [
      "Módulo I: Operaciones de Asistencia de Oficina y Archivo",
      "Módulo II: Gestión de Documentos y Redacción Comercial",
      "Módulo III: Asistencia de Dirección y Gestión de Protocolos"
    ],
    photos: ["/careers/asist.jpg", "/suiza_campus.png", "/sys_practice.png"],
    turns: "Diurno"
  }
};

// 3D Tilt Card wrapper
function TiltCard({ children, className, onClick, style, activeColor }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // max 6 degrees for stability
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`${className} transition-all duration-300 ease-out relative`}
      style={{
        ...style,
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        boxShadow: isHovered 
          ? `0 20px 40px rgba(0,0,0,0.12), 0 0 25px ${activeColor}20` 
          : '0 4px 20px rgba(0,0,0,0.02)',
      }}
    >
      {/* Dynamic light sheer overlay */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-overlay z-20 transition-opacity duration-300 rounded-[2.5rem]"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`
          }}
        />
      )}
      {children}
    </div>
  );
}

// Custom carousel of real images inside each career section
function CareerPhotoCarousel({ photos, name }) {
  const [current, setCurrent] = useState(0);

  const next = (e) => {
    e.stopPropagation();
    setCurrent((current + 1) % photos.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setCurrent((current - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative w-full h-56 rounded-3xl overflow-hidden group/carousel border border-slate-100 dark:border-dark-border/40 bg-slate-100 dark:bg-dark-border/30 shadow-inner">
      {/* Photo Render with smooth fade */}
      <div className="w-full h-full relative">
        {photos.map((photo, idx) => (
          <img
            key={idx}
            src={photo}
            alt={`${name} slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            loading="lazy"
          />
        ))}
      </div>
      
      {/* Gradient Darkener Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

      {/* Slide Navigation */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer text-sm font-bold z-20 hover:scale-105 active:scale-95"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer text-sm font-bold z-20 hover:scale-105 active:scale-95"
      >
        &#8594;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-md">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-white w-5' : 'bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Module Timeline customized per career certifications
function ModuleTimeline({ certifications, isEn }) {
  const romanNums = ['I', 'II', 'III'];
  const moduleStats = [
    { hours: 820, credits: 32 },
    { hours: 860, credits: 34 },
    { hours: 920, credits: 36 }
  ];

  return (
    <div className="relative pl-8 border-l-2 border-primary/20 flex flex-col gap-8 text-left my-4 ml-4">
      {certifications.map((cert, idx) => (
        <div key={idx} className="relative group/module">
          {/* Timeline Node Icon */}
          <div className="absolute -left-[49px] top-1 w-9 h-9 rounded-full bg-white dark:bg-dark-card border-2 border-primary flex items-center justify-center text-xs font-black text-primary group-hover/module:bg-primary group-hover/module:text-white transition-all duration-300 shadow-md group-hover/module:shadow-primary/25">
            {romanNums[idx]}
          </div>
          {/* Module card */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-dark-border/20 border border-slate-100 dark:border-dark-border/30 hover:border-primary/40 hover:bg-white dark:hover:bg-dark-card transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h5 className="text-xs font-extrabold text-slate-800 dark:text-white leading-tight uppercase tracking-wider">
                {cert.split(': ')[0]}
              </h5>
              {/* Module Stats */}
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-dark-border text-slate-500 dark:text-dark-text/80">
                  {moduleStats[idx].hours} hrs
                </span>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {moduleStats[idx].credits} {isEn ? 'credits' : 'créditos'}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-dark-text/80 leading-relaxed font-medium">
              {cert.split(': ')[1]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Careers({ t }) {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCareer, setExpandedCareer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [innerTabs, setInnerTabs] = useState({});

  const isEn = t.careers.categories.all === "All" || t.careers.categories.all === "all";

  // Filter logic
  const filteredCareers = t.careers.items.filter(c => {
    const matchesTab = activeTab === 'all' || c.category === activeTab;
    const matchesSearch = searchQuery === '' || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (careerDetails[c.id]?.skills || []).some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (careerDetails[c.id]?.field || []).some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const toggleExpand = (id) => {
    setExpandedCareer(expandedCareer === id ? null : id);
    // Initialize active sub-tab for this career to 'modules'
    if (!innerTabs[id]) {
      setInnerTabs(prev => ({ ...prev, [id]: 'modules' }));
    }
  };

  const handleInnerTabChange = (careerId, tabKey) => {
    setInnerTabs(prev => ({ ...prev, [careerId]: tabKey }));
  };

  const tabs = [
    { id: 'all', label: t.careers.categories.all, hex: '#4B7AF4' },
    { id: 'tech', label: t.careers.categories.tech, hex: '#4B7AF4' },
    { id: 'business', label: t.careers.categories.business, hex: '#F59E0B' },
    { id: 'field', label: t.careers.categories.field, hex: '#10B981' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 relative text-slate-700 dark:text-dark-text">

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-soft-pulse pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-soft-pulse pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-[#0f172a] text-white mb-10 p-8 md:p-16 border border-white/10 shadow-2xl">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
        {/* Glowing Circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4B7AF4]/25 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#10B981]/15 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

        <GraduationCap className="absolute right-12 bottom-12 w-64 h-64 text-white/5 pointer-events-none animate-float-slow" />

        <div className="relative z-10 text-left max-w-4xl flex flex-col items-start w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-secondary font-extrabold text-xs tracking-wider uppercase mb-6 border border-white/10 backdrop-blur-md animate-pulse">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{isEn ? 'MINEDU LICENSED • 100% SECURE EDUCATION' : 'Licenciado por MINEDU • Calidad de Nivel Nacional'}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-sm">
            {t.careers.title}
          </h1>
          
          <p className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed font-normal mb-8">
            {t.careers.subtitle}
          </p>

          {/* Interactive Search Bar inside Hero */}
          <div className="relative w-full max-w-xl group/search">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#10B981] rounded-2xl blur opacity-30 group-focus-within/search:opacity-60 transition duration-300" />
            <div className="relative flex items-center bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md overflow-hidden p-1.5 pl-4 transition-all duration-300 group-focus-within/search:border-white/45">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEn ? 'Search careers, skills, potential jobs...' : 'Buscar especialidad, habilidad, campo laboral...'}
                className="w-full bg-transparent border-0 outline-none text-white placeholder-slate-400 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer mr-2"
                >
                  {isEn ? 'Clear' : 'Limpiar'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Grid of Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { icon: School, title: isEn ? '100% Free' : '100% Gratuito', desc: isEn ? 'Public State Education' : 'Educación Pública del Estado', color: 'text-primary bg-primary/10' },
          { icon: Award, title: isEn ? 'Official Degree' : 'Título Oficial', desc: isEn ? 'On behalf of the Nation' : 'A nombre de la Nación', color: 'text-amber-500 bg-amber-500/10' },
          { icon: Clock, title: isEn ? 'Short Duration' : '3 Años de Carrera', desc: isEn ? '6 academic semesters' : '6 semestres académicos', color: 'text-emerald-500 bg-emerald-500/10' },
          { icon: Sparkles, title: isEn ? 'Modular Certificates' : 'Certificación Modular', desc: isEn ? 'Upon passing each module' : 'Al culminar cada año de estudio', color: 'text-pink-500 bg-pink-500/10' }
        ].map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-dark-card/50 border border-slate-100 dark:border-dark-border/30 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <div className={`p-3 rounded-xl ${stat.color} shrink-0`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">{stat.title}</h4>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium leading-tight">{stat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-col items-center mb-10 gap-3">
        <div className="flex bg-white/70 dark:bg-dark-card/70 backdrop-blur-md border border-slate-200/50 dark:border-dark-border/40 p-1.5 rounded-2xl shadow-md gap-1 max-w-full overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setExpandedCareer(null); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'text-slate-500 dark:text-dark-text/70 hover:text-primary hover:bg-slate-100/60 dark:hover:bg-dark-border/50'
                }`}
                style={isActive ? { backgroundColor: tab.hex } : {}}
              >
                {tab.id === 'all' && <BookOpen className="w-3.5 h-3.5" />}
                {tab.id === 'tech' && <Code className="w-3.5 h-3.5" />}
                {tab.id === 'business' && <Briefcase className="w-3.5 h-3.5" />}
                {tab.id === 'field' && <Sprout className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
        
        {/* Results Counter */}
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
          {isEn ? `Showing ${filteredCareers.length} study programs` : `Mostrando ${filteredCareers.length} programas de estudio`}
        </p>
      </div>

      {/* Careers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCareers.map((c) => {
          const isExpanded = expandedCareer === c.id;
          const catColor = categoryColors[c.category] || categoryColors.tech;
          const Icon = careerIcons[c.id] || FolderClosed;
          const details = careerDetails[c.id];
          const activeInnerTab = innerTabs[c.id] || 'modules';

          // Extract first 3 skills as visual highlights for the card
          const visualTags = details?.skills?.slice(0, 3) || [];

          return (
            <TiltCard
              key={c.id}
              activeColor={catColor.hex}
              className={`group rounded-[2.5rem] bg-white dark:bg-dark-card border ${
                isExpanded 
                  ? 'ring-2 ring-primary/45 border-transparent shadow-[0_20px_50px_rgba(75,122,244,0.15)] md:col-span-2 lg:col-span-3' 
                  : 'border-slate-100 dark:border-dark-border/30 hover:border-slate-200 dark:hover:border-dark-border/80'
              } flex flex-col text-left overflow-hidden`}
            >
              {/* Card Main Structure */}
              <div className={`flex flex-col ${isExpanded ? 'lg:flex-row' : ''} w-full`}>
                
                {/* Visual Header / Cover Image */}
                <div className={`relative h-60 shrink-0 ${isExpanded ? 'lg:w-[40%] lg:h-auto min-h-[320px]' : 'w-full'} overflow-hidden bg-slate-100 dark:bg-dark-border/30`}>
                  <img
                    src={careerImages[c.id]?.[0] || `/careers/${c.id}.jpg`}
                    alt={c.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Glass Gradient Darkener Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Action Header inside cover */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[8px] font-black text-white tracking-widest uppercase border border-white/20 shadow-md">
                      {c.category === 'tech' ? 'Tecnología' : c.category === 'business' ? 'Gestión' : 'Ingeniería / Campo'}
                    </span>
                  </div>

                  {/* Icon & Duration overlay (bottom left of image) */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg text-white border border-white/20 transform group-hover:rotate-6 transition-all duration-300"
                      style={{ backgroundColor: catColor.hex }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-lg bg-white/95 dark:bg-dark-card/95 backdrop-blur-sm text-[8px] font-black text-slate-800 dark:text-white tracking-widest uppercase border border-slate-100 dark:border-dark-border/30 shadow-sm flex items-center gap-1">
                        <Clock className="w-3 h-3 text-primary" />
                        3 AÑOS
                      </span>
                      <span className="mt-1 block text-[9px] text-white/80 font-bold tracking-wider capitalize flex items-center gap-1">
                        {details?.turns.includes('Vespertino') ? (
                          <>
                            <Sun className="w-2.5 h-2.5 text-amber-300" />
                            <Moon className="w-2.5 h-2.5 text-blue-300" />
                            {isEn ? 'Day & Night Shifts' : 'Diurno y Vespertino'}
                          </>
                        ) : (
                          <>
                            <Sun className="w-2.5 h-2.5 text-amber-300" />
                            {isEn ? 'Day Shift' : 'Turno Diurno'}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info and Expand Container */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Name Tag */}
                    <span className="inline-block text-[9px] font-black tracking-widest uppercase mb-1" style={{ color: catColor.hex }}>
                      {c.category === 'tech' ? (isEn ? 'Technology & Innovation' : 'Tecnología e Innovación') : c.category === 'business' ? (isEn ? 'Management & Business' : 'Gestión y Negocios') : (isEn ? 'Engineering & Field' : 'Ingeniería y Desarrollo')}
                    </span>

                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors mb-3">
                      {c.name}
                    </h3>

                    {/* Employability Stats Gauge */}
                    <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-dark-border/30 pb-4">
                      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-400/15 text-amber-500 font-extrabold text-xs">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </div>
                      <div className="flex flex-col text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-black text-slate-800 dark:text-white">{c.employabilityRate}%</span>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{isEn ? 'Employability Rate' : 'Tasa de Empleabilidad'}</span>
                        </div>
                        {/* Custom progress pill with dynamic color depending on rate */}
                        <div className="w-40 bg-slate-100 dark:bg-dark-border rounded-full h-1.5 mt-1 overflow-hidden">
                          <div 
                            className="h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400" 
                            style={{ width: `${c.employabilityRate}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 dark:text-dark-text/75 leading-relaxed mb-6 font-medium">
                      {c.desc}
                    </p>

                    {/* Quick Highlights / Tags (Only visible when not expanded to make cards informative at first glance) */}
                    {!isExpanded && visualTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {visualTags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-border/30 border border-slate-200/40 dark:border-dark-border/40 text-[10px] font-bold text-slate-500 dark:text-dark-text/80 shadow-sm"
                          >
                            #{tag.split(' ')[0]} {tag.split(' ')[1] || ''}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expand / Collapse CTA Button */}
                  <div>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleExpand(c.id); }}
                      className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? 'bg-slate-100 dark:bg-dark-border text-slate-700 dark:text-white shadow-inner'
                          : 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99]'
                      }`}
                    >
                      <span>{isExpanded ? (isEn ? 'Hide Details' : 'Ocultar Detalles') : (isEn ? 'View Study Plan & Details' : 'Ver Detalles y Malla Curricular')}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0 animate-bounce" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* HIGH-QUALITY DETAILED AREA (EXPANDED PORTAL STATE) */}
              {isExpanded && details && (
                <div className="p-8 border-t border-slate-100 dark:border-dark-border/30 bg-slate-50/50 dark:bg-dark-border/10 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300 text-left w-full">
                  
                  {/* Expanded Nav Controller */}
                  <div className="flex border-b border-slate-200 dark:border-dark-border/50 pb-2 gap-4 overflow-x-auto scrollbar-none">
                    {[
                      { key: 'modules', label: isEn ? 'Study Plan (Curriculum)' : 'Plan de Estudios (Módulos)', icon: BookOpen },
                      { key: 'occupational', label: isEn ? 'Career Profile' : 'Perfil de Egreso (Campo Laboral)', icon: Briefcase },
                      { key: 'workshops', label: isEn ? 'Labs & Shifts' : 'Talleres e Instalaciones', icon: School }
                    ].map((innerTabItem) => {
                      const isInnerActive = activeInnerTab === innerTabItem.key;
                      const TabIcon = innerTabItem.icon;
                      return (
                        <button
                          key={innerTabItem.key}
                          onClick={() => handleInnerTabChange(c.id, innerTabItem.key)}
                          className={`pb-3.5 px-2 text-xs font-black tracking-wider uppercase transition-all relative cursor-pointer shrink-0 flex items-center gap-2 ${
                            isInnerActive 
                              ? 'text-primary' 
                              : 'text-slate-400 hover:text-slate-600 dark:hover:text-white'
                          }`}
                        >
                          <TabIcon className="w-4 h-4" />
                          <span>{innerTabItem.label}</span>
                          {isInnerActive && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-in fade-in zoom-in-50 duration-300" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* SUB-TABS VIEWER PANEL */}
                  <div className="pt-2">
                    
                    {/* TAB 1: Plan de Estudios */}
                    {activeInnerTab === 'modules' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="flex items-center justify-between mb-4 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            <p className="text-xs font-extrabold text-slate-800 dark:text-white tracking-wide uppercase">
                              {isEn ? 'Modular Certificates Progresive' : 'Certificación Modular Progresiva'}
                            </p>
                          </div>
                          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-extrabold text-[9px] uppercase tracking-wider">
                            {isEn ? 'Official Degree' : 'Título Oficial'}
                          </span>
                        </div>
                        <ModuleTimeline certifications={details.certifications} isEn={isEn} />
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-4 text-center">
                          {isEn 
                            ? '* To obtain the title of technical professional, the approval of all modules and pre-professional practices is required.'
                            : '* Para la obtención del título profesional técnico, es requisito indispensable la aprobación de todos los módulos y las prácticas preprofesionales.'}
                        </p>
                      </div>
                    )}

                    {/* TAB 2: Perfil de Egreso */}
                    {activeInnerTab === 'occupational' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                        {/* Campo Laboral */}
                        <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-sm">
                          <h4 className="font-black text-xs text-primary uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-dark-border/20">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span>{isEn ? 'Where will you work?' : '¿Dónde Trabajarás?'}</span>
                          </h4>
                          <div className="flex flex-col gap-2.5">
                            {details.field.map((item, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                                  <Compass className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs text-slate-600 dark:text-dark-text/90 font-semibold leading-relaxed">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Competencias Clave */}
                        <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-sm">
                          <h4 className="font-black text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-dark-border/20">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{isEn ? 'Key Skills to Develop' : 'Habilidades Clave a Desarrollar'}</span>
                          </h4>
                          <div className="flex flex-col gap-3">
                            {details.skills.map((item, i) => (
                              <div key={i} className="flex items-start gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 animate-pulse" />
                                <span className="text-xs text-slate-600 dark:text-dark-text/85 leading-relaxed font-semibold">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB 3: Talleres e Instalaciones */}
                    {activeInnerTab === 'workshops' && (
                      <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                          {/* Carousel container */}
                          <div className="md:col-span-2 flex flex-col gap-2">
                            <h4 className="font-black text-xs text-slate-800 dark:text-white uppercase tracking-widest flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                              <span>{isEn ? 'Equipment & Live Practice Labs' : 'Instalaciones y Prácticas Reales'}</span>
                            </h4>
                            <CareerPhotoCarousel photos={careerImages[c.id] || details.photos} name={c.name} />
                          </div>

                          {/* Info panel */}
                          <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-sm">
                            <h4 className="font-black text-xs text-slate-800 dark:text-white uppercase tracking-widest pb-2 border-b border-slate-100 dark:border-dark-border/20">
                              {isEn ? 'Schedules & Shifts' : 'Horarios y Turnos'}
                            </h4>
                            <div className="flex items-center justify-between text-xs py-2 border-b border-slate-50 dark:border-dark-border/10">
                              <span className="text-slate-400 font-extrabold uppercase tracking-wider">{isEn ? 'Available Shift:' : 'Turno Disponible:'}</span>
                              <span className="font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-lg uppercase tracking-wide">{details.turns}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs py-2 border-b border-slate-50 dark:border-dark-border/10">
                              <span className="text-slate-400 font-extrabold uppercase tracking-wider">{isEn ? 'Duration:' : 'Duración:'}</span>
                              <span className="font-extrabold text-slate-700 dark:text-white">{isEn ? '3 Years (6 Sem.)' : '3 Años (6 Sem.)'}</span>
                            </div>
                            <div className="flex items-start gap-2.5 mt-2 bg-emerald-500/5 p-3.5 rounded-xl border border-emerald-500/10">
                              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <p className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 leading-tight">
                                {isEn 
                                  ? 'Guaranteed internships in regional public and private entities.' 
                                  : 'Prácticas preprofesionales con convenios institucionales garantizados en la región.'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )}
            </TiltCard>
          );
        })}
      </div>

      {/* Empty Search State */}
      {filteredCareers.length === 0 && (
        <div className="text-center py-20 bg-white/40 dark:bg-dark-card/40 rounded-[2.5rem] border border-dashed border-slate-200 dark:border-dark-border/60 max-w-xl mx-auto mt-8 flex flex-col items-center justify-center p-8">
          <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-700 mb-4" />
          <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider mb-2">
            {isEn ? 'No study programs found' : 'No se encontraron programas de estudio'}
          </h4>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium max-w-sm mb-6">
            {isEn 
              ? 'Try modifying your search criteria or clear the query to view all technical careers.' 
              : 'Intenta cambiar los términos de búsqueda o limpia el filtro de texto para ver la lista completa.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
            className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            {isEn ? 'Clear all filters' : 'Ver Todas las Carreras'}
          </button>
        </div>
      )}
    </div>
  );
}
