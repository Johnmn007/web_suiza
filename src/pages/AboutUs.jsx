import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Target, Eye, Star, Zap, Users, Shield, FileText, ChevronDown, ChevronUp, Search, UserCheck, Briefcase, GraduationCap } from 'lucide-react';
import teacherImages from '../assets/teacher_images_map.json';

const facultyData = {
  admin: {
    name: "Administración de Empresas",
    coordinator: "Lic. Adm. Roli Antenor Ramírez Vivas",
    secretary: "Sec. Ejec. Maura Chanella Villanueva Inuma",
    teachers: [
      "Econ. Carlos Henry Bardales Pezo",
      "Mg. Clay Nixon Saavedra Saavedra",
      "José Tejada Ojeda",
      "Dra. Alejandrina Tuesta Gonzales",
      "Mg. Segundo Regner Cárdenas del Águila",
      "Mg. José Luis Meza Salinas",
      "Lic. Pedro Jesús Díaz Picón",
      "Mg. Zelita Tejada Rodríguez",
      "Mg. Anna Pegguibeth Rodríguez Gómez",
      "Tec. G.T. Diana Carolina Hidalgo Gonzales",
      "Ursula Norgelina Panduro Rocha"
    ]
  },
  tur: {
    name: "Administración de Operaciones Turísticas",
    coordinator: "Lic. Edu. Betty Rosario Ruiz Ruiz",
    secretary: "Sec. Ejec. Alexandra Mariciela Sigueñas Becerra",
    teachers: [
      "Tec. José Manuel Cartagena Sandoval",
      "Mg. Pedro Berrospi Almeida",
      "Teolinda Torres García"
    ]
  },
  asist: {
    name: "Asistencia Administrativa",
    coordinator: "Mg. Suselva Sánchez Huancho",
    secretary: "Tec. Patricia Michelle Castagne Villacorta",
    teachers: [
      "Lic. Silvia Aida Alvarado Caballero",
      "Mg. Escarlet Escobar Pezo",
      "Elmer Alez Huaraca Chávez",
      "Laura Cárdenas Pérez",
      "Lucila Elena Soria Ruíz"
    ]
  },
  cont: {
    name: "Contabilidad",
    coordinator: "Mg. Graciela Aleida Roca Cabrera",
    secretary: "Rosa María Farías Camba",
    teachers: [
      "Dra. María Micaela Castillo de Lima",
      "Mg. Silvia Virgnia Montoya",
      "Dr. Marden Odilo Vásquez Reategui",
      "Cpc. Carlos Saúl Miguel Velis",
      "Mg. Jimmy Edinson Silva May",
      "Cpc. Lud Mi Flor Andrés Maylle",
      "Lic. Adm. José Luis Bardales Bocanegra"
    ]
  },
  civil: {
    name: "Construcción Civil",
    coordinator: "Ing. Estuardo Alonso Lizarzaburu Velarde",
    secretary: "Charo Vela Sifuentes",
    teachers: [
      "Ing. Vemny Eusebio Granda Kio",
      "Tec. C.C. Harrinzon Ríos Rivera",
      "Daniel Alcides Ramos Olivera",
      "Tussi Quio Apuela",
      "Ing. Pablo Angelo Ortiz Andrade"
    ]
  },
  sys: {
    name: "Desarrollo de Sistemas de Información",
    coordinator: "Dr. Gil Torres Arévalo",
    secretary: "Sec. Ejec. Lisniari Tuanama Seberiano",
    teachers: [
      "Dr. Ruber Torres Arévalo",
      "Mg. Christian Dustin Puyo Torres",
      "Tec. John Saboya Fulca",
      "Dr. Juan Carlos Ríos Arriaga"
    ]
  },
  elec: {
    name: "Electricidad Industrial",
    coordinator: "Luis Alberto Lecca Alva",
    secretary: "Criz Leydy Díaz Vega",
    teachers: [
      "Cristhian Pichiule Tovar",
      "Julio César Cuentas Rodríguez",
      "Jeperson Nicocin Vela Ramirez",
      "Joel Jaime Amaro Cosme",
      "Jose Luis Aranda Vergara",
      "Julio Antonio Ochavano Lopez"
    ]
  },
  enfer: {
    name: "Enfermería Técnica",
    coordinator: "Mg. Orfilia Navarro Zumaeta",
    secretary: "Sec. Ejec. Kristell Laly Diaz Calampa",
    teachers: [
      "Lic. Gladys Leonor Prada Gonzales",
      "M. Sc. Oscar Amado Ruiz Torres",
      "Lic. Sadith Aspajo Vásquez",
      "Mg. Cayo Eduardo Leveau Bartra",
      "Lic. Eulalia Condor Taipe",
      "Lic. Carlos Alberto Ramos Bardales",
      "Mg. Rosio Del Pilar Tafur Quevedo",
      "Lic. Kathleen Valeria Solis Vela",
      "Lic. Norma Vela Silvano",
      "Mg. Roxana Lizbeth Montoya Tejada",
      "Mg. Karla Rosario Vela Ríos",
      "Marvin Teófilo Amasifuén Carrión",
      "Pedro Tarazona Valle",
      "Lic. Diana Isabel Romero Salazar"
    ]
  },
  forest: {
    name: "Manejo Forestal",
    coordinator: "Ing. Merly Cabanillas Lomas",
    secretary: "Sec. Ej. Anita Gómez Sinarahua",
    teachers: [
      "Tec. William Ernesto Bar Torres",
      "Ing. Ángel Raúl Egoavil Recuay",
      "Tec. Horatio Córdova Vásquez",
      "Tec. Shoyleer Ríos Vásquez"
    ]
  },
  meca: {
    name: "Mecatrónica Automotriz",
    coordinator: "P.T. César Antonio Cauper Cárdenas",
    secretary: "P.T. Lucita Soplin Carbajal",
    teachers: [
      "Dr. Armando Vásquez Castro",
      "P.T. Juan Miguel Álvarez García",
      "Mg. Noe Abraham Albornoz Isidro",
      "P.T. Segundo Hoshikato Katayama Gonzales",
      "P.T. Davis Norton Panaifo Plaza",
      "Ing. Dennis Eyvind Chávez Ramírez",
      "P.T. Wagner Lodan Ríos Vásquez",
      "P.T. Jack Darwin Flores Cavero"
    ]
  },
  agro: {
    name: "Producción Agropecuaria",
    coordinator: "Mg. José Abraham Díaz Sandoval",
    secretary: "Sec. Ejec. Gueybi Rosmery Bartra Saenz",
    teachers: [
      "Prof. Carmen del Pilar Flores Venegas",
      "Doc. Nicolás Rodríguez Cárdenas",
      "Prof. Vicente Artemio Rivera Gómez",
      "Ing. Jorge Luis Díaz Tangoa",
      "Mg. Katherine Erika Nahir Navarro Ramírez"
    ]
  }
};

export default function AboutUs({ t }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tabParam = queryParams.get('tab');

  const [activeTab, setActiveTab] = useState('institucion');
  const [showMoreHistory, setShowMoreHistory] = useState(false);
  
  // Faculty filters
  const [selectedCareer, setSelectedCareer] = useState('all');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    if (tabParam === 'docentes') {
      setActiveTab('docentes');
    } else {
      setActiveTab('institucion');
    }
  }, [tabParam]);

  const values = [
    { 
      title: "Excelencia", 
      desc: "Buscamos el más alto estándar en la formación técnica y humana.",
      icon: Star,
      colorClass: "text-orange-500 bg-orange-500/10 border-orange-500/20 hover:border-orange-500/60 hover:shadow-orange-500/5",
      gradientBorder: "from-orange-400/20 to-orange-500/30 group-hover:from-orange-400 group-hover:to-orange-500"
    },
    { 
      title: "Innovación", 
      desc: "Impulsamos la investigación aplicada y el uso de tecnologías de vanguardia.",
      icon: Zap,
      colorClass: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20 hover:border-yellow-500/60 hover:shadow-yellow-500/5",
      gradientBorder: "from-yellow-400/20 to-yellow-500/30 group-hover:from-yellow-400 group-hover:to-yellow-500"
    },
    { 
      title: "Inclusión", 
      desc: "Respetamos y valoramos la diversidad sociocultural de nuestra Amazonía.",
      icon: Users,
      colorClass: "text-green-500 bg-green-500/10 border-green-500/20 hover:border-green-500/60 hover:shadow-green-500/5",
      gradientBorder: "from-green-400/20 to-green-500/30 group-hover:from-green-400 group-hover:to-green-500"
    },
    { 
      title: "Integridad", 
      desc: "Actuamos con ética, honestidad, transparencia y responsabilidad social.",
      icon: Shield,
      colorClass: "text-pink-500 bg-pink-500/10 border-pink-500/20 hover:border-pink-500/60 hover:shadow-pink-500/5",
      gradientBorder: "from-pink-400/20 to-pink-500/30 group-hover:from-pink-400 group-hover:to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white dark:bg-dark-bg text-[#2D3748] dark:text-dark-text transition-colors duration-300">
      
      {/* Tab Selector Buttons at the top */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 flex justify-center border-b border-slate-100 dark:border-dark-border/40">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('institucion')}
            className={`pb-4 px-4 font-bold text-xs md:text-sm tracking-wider uppercase border-b-2 transition-all duration-300 cursor-pointer ${
              activeTab === 'institucion'
                ? 'border-primary text-primary'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Misión, Visión e Historia
          </button>
          <button
            onClick={() => setActiveTab('docentes')}
            className={`pb-4 px-4 font-bold text-xs md:text-sm tracking-wider uppercase border-b-2 transition-all duration-300 cursor-pointer ${
              activeTab === 'docentes'
                ? 'border-primary text-primary'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Plana Docente
          </button>
        </div>
      </div>

      {/* VIEW 1: INSTITUTION (MISSION, VISION, VALUES & HISTORY) */}
      {activeTab === 'institucion' && (
        <>
          {/* SECTION: Quiénes Somos */}
          <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
            {/* Header Center-Aligned */}
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center justify-center">
              <span className="inline-block px-3.5 py-1.5 bg-primary/10 text-primary dark:text-secondary font-semibold text-xs tracking-wider uppercase rounded-full mb-3 animate-pulse">
                Nuestra Institución
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A202C] dark:text-white tracking-tight leading-tight mb-4 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-text-shimmer">
                Quiénes Somos
              </h1>
              <p className="text-base md:text-lg text-[#4A5568] dark:text-dark-text/75 max-w-2xl leading-relaxed transition-colors duration-300">
                Conoce la trayectoria, misión, visión y los valores que guían al IESTP Suiza de Pucallpa hacia la excelencia académica.
              </p>
            </div>

            {/* Mission and Vision: 2 columns desk, 1 column mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full mt-6">
              
              {/* Mission Card */}
              <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover-lift flex flex-col justify-between text-left h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-8">
                    {/* Vector icon in a subtle light blue circle */}
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-secondary group-hover:scale-110 transition-all duration-300">
                      <Target className="w-7 h-7" />
                    </div>
                    {/* Numeric identifier */}
                    <span className="text-4xl font-black text-slate-200 dark:text-dark-border select-none">
                      01
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] dark:text-white mb-4 transition-colors duration-300">
                    Misión
                  </h2>
                  <p className="text-sm md:text-base text-[#4A5568] dark:text-dark-text/85 leading-relaxed font-normal transition-colors duration-300">
                    Somos una institución de educación superior tecnológica pública licenciada, dedicada a formar profesionales técnicos competentes, creativos, innovadores y con sólidos valores éticos, capaces de contribuir activamente al desarrollo socioeconómico sostenible de la región Ucayali y el país.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover-lift flex flex-col justify-between text-left h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-8">
                    {/* Blue focus eye icon in subtle circle */}
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-secondary group-hover:scale-110 transition-all duration-300">
                      <Eye className="w-7 h-7" />
                    </div>
                    {/* Numeric identifier */}
                    <span className="text-4xl font-black text-slate-200 dark:text-dark-border select-none">
                      02
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] dark:text-white mb-4 transition-colors duration-300">
                    Visión
                  </h2>
                  <p className="text-sm md:text-base text-[#4A5568] dark:text-dark-text/85 leading-relaxed font-normal transition-colors duration-300">
                    Al 2030, ser un instituto tecnológico líder en la Amazonía peruana y referente nacional por su excelencia académica, infraestructura moderna, procesos automatizados, convenios internacionales y egresados de alta empleabilidad comprometidos con la innovación y el cuidado ambiental.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION: Valores Fundamentales (Alternate Background: Gris Ultra Claro) */}
          <section className="py-20 px-4 md:px-8 bg-slate-50/70 dark:bg-dark-card/20 border-y border-slate-100/80 dark:border-dark-border/40 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] dark:text-white mb-16 text-center tracking-tight transition-colors duration-300">
                Nuestros Valores Fundamentales
              </h2>

              {/* Grid: 4 items in a row desk, vertical list mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((v, idx) => {
                  const IconComponent = v.icon;
                  return (
                    <div key={idx} className="group relative h-full transition-all duration-300">
                      <div className={`absolute -inset-[1px] bg-gradient-to-br ${v.gradientBorder} rounded-2xl opacity-60 transition duration-300 pointer-events-none`}></div>
                      <div className="relative p-6 rounded-2xl bg-white dark:bg-dark-card h-full flex flex-col items-start justify-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover-lift transition-all duration-300">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-all duration-300 ${v.colorClass.split(' ')[0]} ${v.colorClass.split(' ')[1]} group-hover:scale-110`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="font-extrabold text-[#1A202C] dark:text-white text-lg mb-2.5 transition-colors duration-300">
                          {v.title}
                        </h3>
                        <p className="text-sm text-[#4A5568] dark:text-dark-text/75 leading-relaxed font-normal transition-colors duration-300">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION: Reseña Histórica (White general background) */}
          <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex items-center gap-3.5 mb-16 border-b border-slate-100 dark:border-dark-border/40 pb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary dark:text-secondary">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] dark:text-white tracking-tight transition-colors duration-300">
                Reseña Histórica
              </h2>
            </div>

            <div className="relative pl-6 sm:pl-10 md:pl-16 max-w-4xl mx-auto">
              <div className="absolute left-[7px] sm:left-[11px] md:left-[17px] top-4 bottom-4 w-[3px] bg-primary rounded-full"></div>

              <div className="flex flex-col gap-12">
                <div className="relative group text-left">
                  <div className="absolute -left-[24px] sm:-left-[28px] md:-left-[34px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-dark-bg border-[3px] border-primary group-hover:scale-[1.4] transition-all duration-300 shadow-md"></div>
                  <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover-lift transition-all duration-300">
                    <span className="inline-block px-3.5 py-1 bg-primary text-white font-extrabold text-xs tracking-wider rounded-full mb-3">
                      1979
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#1A202C] dark:text-white mb-2 transition-colors duration-300">
                      Fundación y Primeros Pasos
                    </h3>
                    <p className="text-sm md:text-base text-[#4A5568] dark:text-dark-text/75 leading-relaxed font-normal transition-colors duration-300">
                      Nace como respuesta a la creciente demanda de formación técnica calificada en la provincia de Coronel Portillo, Ucayali, ofreciendo los primeros programas en áreas agropecuarias y de mecánica.
                    </p>
                  </div>
                </div>

                <div className="relative group text-left">
                  <div className="absolute -left-[24px] sm:-left-[28px] md:-left-[34px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-dark-bg border-[3px] border-primary group-hover:scale-[1.4] transition-all duration-300 shadow-md"></div>
                  <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover-lift transition-all duration-300">
                    <span className="inline-block px-3.5 py-1 bg-primary text-white font-extrabold text-xs tracking-wider rounded-full mb-3">
                      1992
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#1A202C] dark:text-white mb-2 transition-colors duration-300">
                      Consolidación y Nuevos Programas
                    </h3>
                    <p className="text-sm md:text-base text-[#4A5568] dark:text-dark-text/75 leading-relaxed font-normal transition-colors duration-300">
                      Se inaugura el campus actual en la Carretera Federico Basadre y se incorporan especialidades como Contabilidad, Computación y Enfermería Técnica, adaptándose al crecimiento digital de la época.
                    </p>
                  </div>
                </div>

                <div className="relative group text-left">
                  <div className="absolute -left-[24px] sm:-left-[28px] md:-left-[34px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-dark-bg border-[3px] border-primary group-hover:scale-[1.4] transition-all duration-300 shadow-md"></div>
                  <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover-lift transition-all duration-300">
                    <span className="inline-block px-3.5 py-1 bg-primary text-white font-extrabold text-xs tracking-wider rounded-full mb-3">
                      2018
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#1A202C] dark:text-white mb-2 transition-colors duration-300">
                      Modernización Tecnológica
                    </h3>
                    <p className="text-sm md:text-base text-[#4A5568] dark:text-dark-text/75 leading-relaxed font-normal transition-colors duration-300">
                      Se equipan nuevos laboratorios con tecnología de mecatrónica y desarrollo de software, y se consolidan convenios estratégicos con empresas nacionales y regionales.
                    </p>
                  </div>
                </div>

                <div className="relative text-left">
                  <div className="flex justify-start mb-2">
                    <button
                      onClick={() => setShowMoreHistory(!showMoreHistory)}
                      className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs tracking-wider hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>{showMoreHistory ? "OCULTAR EVENTOS RECIENTES" : "VER EVENTOS RECIENTES (2024 EN ADELANTE)"}</span>
                      {showMoreHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMoreHistory ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <div className="relative group text-left">
                      <div className="absolute -left-[24px] sm:-left-[28px] md:-left-[34px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-dark-bg border-[3px] border-primary transition-all duration-300 shadow-md"></div>
                      <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-[0_4px_15px_rgba(0,0,0,0.015)] hover-lift transition-all duration-300">
                        <span className="inline-block px-3.5 py-1 bg-emerald-500 text-white font-extrabold text-xs tracking-wider rounded-full mb-3">
                          2024
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-[#1A202C] dark:text-white mb-2 transition-colors duration-300">
                          Licenciamiento Institucional
                        </h3>
                        <p className="text-sm md:text-base text-[#4A5568] dark:text-dark-text/75 leading-relaxed font-normal transition-colors duration-300">
                          El IESTP Suiza logra exitosamente su licenciamiento institucional ante el Ministerio de Educación (MINEDU), validando sus condiciones básicas de calidad académica e infraestructura para seguir formando líderes tecnológicos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
      )}

      {/* VIEW 2: PLANA DOCENTE */}
      {activeTab === 'docentes' && (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center">
            <span className="inline-block px-3.5 py-1.5 bg-primary/10 text-primary dark:text-secondary font-semibold text-xs tracking-wider uppercase rounded-full mb-3 animate-pulse">
              Staff Académico
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#1A202C] dark:text-white tracking-tight mb-3 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-text-shimmer">
              Plana Docente Institucional
            </h1>
            <p className="text-sm md:text-base text-slate-500 dark:text-dark-text/75 max-w-xl">
              Conoce a nuestros coordinadores de área, personal administrativo y docentes capacitados divididos por especialidad técnica.
            </p>
          </div>

          {/* Filters Bar: Search & Select Category */}
          <div className="w-full max-w-4xl bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-dark-border p-4 rounded-3xl flex flex-col md:flex-row gap-4 mb-12 shadow-sm">
            
            {/* Search Name Input */}
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-white dark:bg-dark-bg border border-slate-100 dark:border-dark-border/60 rounded-2xl focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Buscar docente por nombre..."
                className="w-full text-xs md:text-sm outline-none bg-transparent text-[#1A202C] dark:text-white font-medium"
              />
            </div>

            {/* Select Career dropdown */}
            <div className="w-full md:w-80 flex items-center gap-2 px-3 py-2 bg-white dark:bg-dark-bg border border-slate-100 dark:border-dark-border/60 rounded-2xl focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <select
                value={selectedCareer}
                onChange={(e) => setSelectedCareer(e.target.value)}
                className="w-full text-xs md:text-sm outline-none bg-transparent text-[#1A202C] dark:text-white font-bold cursor-pointer"
              >
                <option value="all">Todas las Carreras</option>
                {Object.keys(facultyData).map((key) => (
                  <option key={key} value={key}>
                    {facultyData[key].name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Render Staff Divided by Career */}
          <div className="w-full flex flex-col gap-16">
            {Object.keys(facultyData)
              .filter((key) => selectedCareer === 'all' || selectedCareer === key)
              .map((key) => {
                const career = facultyData[key];
                
                // Filter teachers inside current career
                const filteredTeachers = career.teachers.filter(teacher =>
                  teacher.toLowerCase().includes(searchName.toLowerCase())
                );
                
                const coordinatorMatches = career.coordinator.toLowerCase().includes(searchName.toLowerCase());
                const secretaryMatches = career.secretary.toLowerCase().includes(searchName.toLowerCase());
                
                // If search query is active and nothing matches, hide this career block
                if (searchName && !coordinatorMatches && !secretaryMatches && filteredTeachers.length === 0) {
                  return null;
                }

                return (
                  <div key={key} className="w-full text-left border-b border-slate-100 dark:border-dark-border/30 pb-12 last:border-0 last:pb-0 animate-in fade-in duration-300">
                    <h2 className="text-xl md:text-2xl font-black text-[#1A202C] dark:text-white border-l-4 border-primary pl-3.5 mb-8">
                      {career.name}
                    </h2>

                    {/* Staff Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      
                      {/* Coordinator Card */}
                      {coordinatorMatches && (
                        <div className="group relative p-6 rounded-3xl bg-white dark:bg-dark-card border border-primary/20 shadow-lg hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between items-center text-center h-full hover-lift animate-glow-gold">
                          <div className="w-full flex flex-col items-center">
                            <div className="relative mb-4">
                              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-amber-500/20 group-hover:border-amber-500/60 shadow-md transition-all duration-500 bg-slate-light dark:bg-dark-bg">
                                <img 
                                  src={teacherImages[career.coordinator] || "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Logo-suiza.png"} 
                                  alt={career.coordinator} 
                                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                />
                              </div>
                              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[8px] font-black uppercase tracking-wider shadow-sm border border-white dark:border-dark-card">
                                COORDINADOR(A)
                              </span>
                            </div>
                            
                            <h4 className="font-extrabold text-sm text-[#1A202C] dark:text-white leading-snug group-hover:text-primary transition-colors min-h-[40px] flex items-center justify-center">
                              {career.coordinator}
                            </h4>
                          </div>
                          <div className="w-full flex items-center justify-between border-t border-slate-100 dark:border-dark-border/40 pt-4 mt-6">
                            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">
                              LÍDER DE ÁREA
                            </span>
                            <UserCheck className="w-4 h-4 text-amber-500 animate-pulse" />
                          </div>
                        </div>
                      )}

                      {/* Secretary Card */}
                      {secretaryMatches && (
                        <div className="group relative p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-lg hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between items-center text-center h-full hover-lift animate-glow-primary">
                          <div className="w-full flex flex-col items-center">
                            <div className="relative mb-4">
                              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/60 shadow-md transition-all duration-500 bg-slate-light dark:bg-dark-bg">
                                <img 
                                  src={teacherImages[career.secretary] || "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Logo-suiza.png"} 
                                  alt={career.secretary} 
                                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                />
                              </div>
                              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-primary text-white text-[8px] font-black uppercase tracking-wider shadow-sm border border-white dark:border-dark-card">
                                SECRETARÍA
                              </span>
                            </div>
                            
                            <h4 className="font-extrabold text-sm text-[#1A202C] dark:text-white leading-snug group-hover:text-primary transition-colors min-h-[40px] flex items-center justify-center">
                              {career.secretary}
                            </h4>
                          </div>
                          <div className="w-full flex items-center justify-between border-t border-slate-100 dark:border-dark-border/40 pt-4 mt-6">
                            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">
                              APOYO ADM.
                            </span>
                            <Briefcase className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      )}

                      {/* Teachers list */}
                      {filteredTeachers.map((teacher, i) => (
                        <div key={i} className="group relative p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-md hover:shadow-lg transition-all duration-500 flex flex-col justify-between items-center text-center h-full hover-lift">
                          <div className="w-full flex flex-col items-center">
                            <div className="relative mb-4">
                              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-100 dark:border-dark-border group-hover:border-primary/40 shadow-md transition-all duration-500 bg-slate-light dark:bg-dark-bg">
                                <img 
                                  src={teacherImages[teacher] || "https://iestpsuiza.edu.pe/wp-content/uploads/2023/08/Logo-suiza.png"} 
                                  alt={teacher} 
                                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                />
                              </div>
                              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-border text-slate-500 dark:text-dark-text text-[8px] font-black uppercase tracking-wider shadow-sm border border-white dark:border-dark-card">
                                DOCENTE
                              </span>
                            </div>
                            
                            <h4 className="font-extrabold text-sm text-[#1A202C] dark:text-white leading-snug group-hover:text-primary transition-colors min-h-[40px] flex items-center justify-center">
                              {teacher}
                            </h4>
                          </div>
                          <div className="w-full flex items-center justify-between border-t border-slate-100 dark:border-dark-border/40 pt-4 mt-6">
                            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">
                              PLANA DOCENTE
                            </span>
                            <GraduationCap className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:rotate-12 transition-all" />
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                );
              })}
          </div>

        </section>
      )}

    </div>
  );
}
