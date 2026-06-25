import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, BookOpen, Target, ChevronRight, GraduationCap, Briefcase, Clock, Award, Monitor, Heart, Cog, Leaf, ChevronDown, FileText, Users, Beaker, Handshake, UserCheck, BookMarked } from 'lucide-react';

const categories = [
  {
    name: 'Tecnología e Informática',
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50 dark:bg-blue-900/10',
    careers: ['sys']
  },
  {
    name: 'Ciencias de la Salud',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    bgLight: 'bg-rose-50 dark:bg-rose-900/10',
    careers: ['enfer']
  },
  {
    name: 'Ingeniería y Tecnología',
    icon: Cog,
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50 dark:bg-amber-900/10',
    careers: ['meca', 'civil', 'elec']
  },
  {
    name: 'Gestión Empresarial',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50 dark:bg-emerald-900/10',
    careers: ['admin', 'tur', 'asist', 'cont']
  },
  {
    name: 'Agropecuaria y Ambiental',
    icon: Leaf,
    color: 'from-green-500 to-lime-500',
    bgLight: 'bg-green-50 dark:bg-green-900/10',
    careers: ['agro', 'forest']
  }
];

const careersData = [
  {
    id: "admin",
    name: "Administración de Empresas",
    tagline: "Forma líderes empresariales con visión estratégica.",
    desc: "Formamos profesionales capaces de planificar, organizar, dirigir y controlar organizaciones públicas y privadas, liderando equipos de alto rendimiento, optimizando recursos y generando valor agregado en entornos competitivos y globalizados.",
    degree: "Técnico en Administración de Empresas",
    curriculum: [ "Gestión empresarial y planeamiento estratégico", "Marketing, ventas y atención al cliente", "Contabilidad general, costos y finanzas corporativas", "Recursos humanos, liderazgo y trabajo en equipo", "Legislación laboral, tributaria y comercio internacional", "Proyectos de inversión, emprendimiento e innovación" ],
    skills: ["Liderazgo", "Toma de decisiones", "Gestión financiera", "Negociación", "Planificación estratégica"],
    opportunities: [ "Jefe de área administrativa", "Gerente de PYME", "Administrador de empresas", "Emprendedor", "Consultor empresarial" ],
    whyYou: "Si posees facilidad para liderar, te motiva la toma de decisiones y el logro de objetivos, y te apasiona el mundo de los negocios, esta carrera potenciará tu talento directivo."
  },
  {
    id: "tur",
    name: "Administración de Operaciones Turísticas",
    tagline: "Promueve el turismo sostenible como motor de desarrollo.",
    desc: "Formamos profesionales capacitados para diseñar, planificar y gestionar servicios turísticos de calidad, promoviendo el turismo vivencial, ecológico y cultural como ejes del desarrollo sostenible de la región Ucayali.",
    degree: "Técnico en Administración de Operaciones Turísticas",
    curriculum: [ "Planificación y gestión de destinos turísticos", "Administración de hoteles y restaurantes", "Marketing digital turístico", "Guía de turismo e interpretación ambiental", "Diseño de paquetes turísticos sostenibles" ],
    skills: ["Creatividad", "Comunicación intercultural", "Gestión hotelera", "Atención al cliente", "Visión sostenible"],
    opportunities: [ "Administrador de hoteles y lodges", "Operador turístico", "Guía de turismo especializado", "Promotor de turismo comunitario", "Emprendedor turístico" ],
    whyYou: "Si eres creativo, con espíritu aventurero y vocación por compartir la riqueza natural y cultural de tu tierra, esta carrera hará de ti un agente de cambio."
  },
  {
    id: "asist",
    name: "Asistencia Administrativa",
    tagline: "El soporte clave para la eficiencia organizacional.",
    desc: "Formamos profesionales competentes en la organización, gestión y optimización de procesos administrativos, documentarios y de comunicación, garantizando el funcionamiento eficiente de toda organización.",
    degree: "Técnico en Asistencia Administrativa",
    curriculum: [ "Gestión documentaria y archivo empresarial", "Redacción y comunicación corporativa", "Atención al cliente y protocolo", "Contabilidad básica y planillas", "Herramientas ofimáticas y sistemas administrativos" ],
    skills: ["Organización", "Responsabilidad", "Comunicación efectiva", "Manejo de software", "Atención al detalle"],
    opportunities: [ "Asistente de gerencia", "Secretario ejecutivo", "Administrador de oficina", "Especialista en atención al cliente", "Asistente de RRHH" ],
    whyYou: "Si eres meticuloso, responsable y disfrutas del orden y la eficiencia, tu capacidad organizativa será el pilar que toda empresa necesita."
  },
  {
    id: "civil",
    name: "Construcción Civil",
    tagline: "Construye el futuro con calidad y seguridad.",
    desc: "Formamos profesionales técnicos capaces de planificar, supervisar y ejecutar proyectos de infraestructura civil, edificación y obras públicas, aplicando estándares de calidad, seguridad y normativa vigente.",
    degree: "Técnico en Construcción Civil",
    curriculum: [ "Dibujo técnico y topografía", "Tecnología de materiales y concreto", "Costos y presupuestos de obra", "Estructuras e instalaciones", "Seguridad en obra y prevención de riesgos" ],
    skills: ["Visión espacial", "Liderazgo técnico", "Trabajo en campo", "Cálculo de costos", "Supervisión de equipos"],
    opportunities: [ "Supervisor de obra", "Maestro de obra calificado", "Técnico en construcción", "Inspector de obras", "Emprendedor en construcción" ],
    whyYou: "Si te apasiona ver cómo las ideas se convierten en estructuras sólidas y quieres ser parte del desarrollo urbano, esta carrera te dará el poder de construir."
  },
  {
    id: "cont",
    name: "Contabilidad",
    tagline: "El guardián de las finanzas empresariales.",
    desc: "Formamos profesionales íntegros y analíticos capaces de gestionar la información financiera, contable y tributaria de empresas, garantizando transparencia y legalidad.",
    degree: "Técnico en Contabilidad",
    curriculum: [ "Contabilidad general y de costos", "Legislación y tributación empresarial", "Planillas y declaraciones", "Auditoría financiera", "Sistemas contables computarizados" ],
    skills: ["Razonamiento analítico", "Meticulosidad", "Ética profesional", "Manejo de sistemas contables", "Visión financiera"],
    opportunities: [ "Asistente contable", "Especialista en tributación", "Auditor", "Contador general", "Consultor financiero" ],
    whyYou: "Si eres analítico, preciso y te interesa el mundo de las finanzas, la contabilidad te convertirá en el profesional de confianza que toda organización necesita."
  },
  {
    id: "sys",
    name: "Desarrollo de Sistemas de Información",
    tagline: "Crea soluciones digitales que transforman el mundo.",
    desc: "Formamos profesionales innovadores capaces de diseñar, desarrollar e implementar sistemas informáticos, aplicaciones web, móviles y soluciones digitales utilizando tecnologías de vanguardia.",
    degree: "Técnico en Desarrollo de Sistemas",
    curriculum: [ "Programación orientada a objetos", "Desarrollo web y móvil", "Bases de datos SQL y NoSQL", "Redes y ciberseguridad", "Inteligencia artificial y data science" ],
    skills: ["Pensamiento lógico", "Resolución de problemas", "Adaptabilidad tecnológica", "Creatividad digital", "Autogestión"],
    opportunities: [ "Desarrollador de software", "Programador web", "Analista de sistemas", "Especialista en ciberseguridad", "Emprendedor tecnológico" ],
    whyYou: "Si te apasiona la tecnología, resolver problemas complejos y crear soluciones que impacten a miles de personas, esta carrera te dará las herramientas para innovar."
  },
  {
    id: "elec",
    name: "Electricidad Industrial",
    tagline: "La energía que mueve al mundo.",
    desc: "Formamos profesionales especializados en instalación, operación y mantenimiento de sistemas eléctricos industriales, automatización de procesos y control de maquinaria, garantizando eficiencia y seguridad.",
    degree: "Técnico en Electricidad Industrial",
    curriculum: [ "Instalaciones eléctricas industriales", "Máquinas y motores eléctricos", "Automatización con PLC", "Sistemas de potencia", "Seguridad industrial" ],
    skills: ["Precisión técnica", "Diagnóstico de fallas", "Trabajo seguro", "Manejo de instrumentos", "Visión sistémica"],
    opportunities: [ "Técnico electricista industrial", "Supervisor de mantenimiento", "Instalador de automatización", "Técnico en minería", "Emprendedor eléctrico" ],
    whyYou: "Si te fascina entender cómo funciona la energía y mantener los sistemas que mueven la industria, esta carrera te dará un campo de acción inmenso."
  },
  {
    id: "enfer",
    name: "Enfermería Técnica",
    tagline: "Vocación de servicio y compromiso con la vida.",
    desc: "Formamos profesionales humanitarios y competentes en el cuidado integral de la salud, capaces de brindar atención en prevención, recuperación y rehabilitación, trabajando con calidad y calidez.",
    degree: "Técnico en Enfermería",
    curriculum: [ "Anatomía y farmacología básica", "Cuidados de enfermería general", "Primeros auxilios y emergencias", "Salud comunitaria", "Prácticas en hospitales" ],
    skills: ["Empatía", "Vocación de servicio", "Trabajo bajo presión", "Responsabilidad", "Comunicación asertiva"],
    opportunities: [ "Técnico de enfermería", "Promotor de salud", "Asistente en centros de salud", "Cuidador de adultos mayores", "Técnico en salud preventiva" ],
    whyYou: "Si tu vocación es cuidar de los demás, tienes empatía y sensibilidad social, la enfermería técnica te permitirá salvar vidas y mejorar la salud de tu comunidad."
  },
  {
    id: "meca",
    name: "Mecatrónica Automotriz",
    tagline: "Diagnóstico y reparación con tecnología de punta.",
    desc: "Formamos profesionales capacitados para diagnosticar, reparar y optimizar sistemas mecánicos, eléctricos y electrónicos de vehículos, integrando la mecánica tradicional con la electrónica moderna.",
    degree: "Técnico en Mecatrónica Automotriz",
    curriculum: [ "Motores y sistemas de transmisión", "Sistemas de frenos y suspensión", "Electrónica automotriz", "Diagnóstico computarizado", "Mantenimiento de maquinaria pesada" ],
    skills: ["Diagnóstico técnico", "Precisión manual", "Pensamiento analítico", "Uso de scanner", "Trabajo en taller"],
    opportunities: [ "Técnico automotriz especializado", "Diagnosticador con scanner", "Especialista en electrónica vehicular", "Técnico en maquinaria pesada", "Emprendedor automotriz" ],
    whyYou: "Si te apasionan los motores, la tecnología automotriz y el diagnóstico de precisión, esta carrera te convertirá en un experto altamente demandado."
  },
  {
    id: "forest",
    name: "Manejo Forestal",
    tagline: "Conserva y aprovecha sosteniblemente los bosques.",
    desc: "Formamos profesionales comprometidos con la gestión sostenible de los recursos forestales y de fauna silvestre, capaces de administrar, proteger y aprovechar los bosques amazónicos con responsabilidad ambiental.",
    degree: "Técnico en Manejo Forestal",
    curriculum: [ "Ecología forestal y botánica", "Sistemas de información geográfica", "Aprovechamiento forestal sostenible", "Reforestación y viveros", "Conservación de fauna silvestre" ],
    skills: ["Conciencia ambiental", "Trabajo de campo", "Visión sostenible", "Manejo de SIG", "Investigación aplicada"],
    opportunities: [ "Técnico forestal", "Promotor de conservación", "Inspector forestal", "Técnico en áreas protegidas", "Consultor forestal" ],
    whyYou: "Si amas la naturaleza, te preocupa el futuro del planeta y quieres trabajar directamente en la conservación de la Amazonía, esta carrera es tu propósito de vida."
  },
  {
    id: "agro",
    name: "Producción Agropecuaria",
    tagline: "Produce alimentos con tecnología e innovación.",
    desc: "Formamos profesionales capaces de gestionar sistemas de producción agrícola y pecuaria aplicando biotecnología, riego tecnificado y buenas prácticas, contribuyendo a la seguridad alimentaria.",
    degree: "Técnico en Producción Agropecuaria",
    curriculum: [ "Cultivos tropicales y sanidad vegetal", "Riego tecnificado y suelos", "Crianza de animales", "Biotecnología agropecuaria", "Buenas prácticas agrícolas" ],
    skills: ["Trabajo de campo", "Visión productiva", "Innovación tecnológica", "Gestión de recursos", "Sostenibilidad"],
    opportunities: [ "Técnico agroindustrial", "Asistente técnico agrícola", "Promotor agropecuario", "Técnico en desarrollo rural", "Emprendedor agropecuario" ],
    whyYou: "Si valoras el trabajo del campo, te interesa la producción de alimentos y quieres aplicar tecnología al agro, esta carrera te hará parte de la revolución productiva del país."
  }
];

const gradients = {
  admin: 'from-emerald-500 to-teal-600', tur: 'from-teal-500 to-cyan-600', asist: 'from-sky-500 to-blue-600',
  civil: 'from-amber-500 to-orange-600', cont: 'from-violet-500 to-purple-600', sys: 'from-blue-500 to-indigo-600',
  elec: 'from-yellow-500 to-amber-600', enfer: 'from-rose-500 to-pink-600', meca: 'from-orange-500 to-red-600',
  forest: 'from-green-500 to-emerald-600', agro: 'from-lime-500 to-green-600'
};

export default function Careers() {
  const [selected, setSelected] = useState(null);
  const [expandedCat, setExpandedCat] = useState(categories[0].name);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-10 right-10"></div>
      <div className="bg-circle-2 bottom-10 left-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
          Programas de Estudio
        </h2>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          11 carreras profesionales técnicas con formación de calidad, certificación nacional y alta demanda laboral en la región Ucayali.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => {
          const catCareers = careersData.filter(c => cat.careers.includes(c.id));
          const isOpen = expandedCat === cat.name;

          return (
            <div key={cat.name} className="rounded-2xl border border-primary/10 dark:border-dark-border/40 overflow-hidden bg-white dark:bg-dark-card shadow-sm">
              <button
                onClick={() => setExpandedCat(isOpen ? null : cat.name)}
                className={`w-full flex items-center justify-between gap-3 px-6 py-4 transition-all cursor-pointer ${cat.bgLight}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}>
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-base font-bold text-slate-text dark:text-white">{cat.name}</div>
                    <div className="text-[11px] text-slate-text/60 dark:text-dark-text/60">{catCareers.length} carreras</div>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-text/50 dark:text-dark-text/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {catCareers.map((career) => (
                    <button
                      key={career.id}
                      onClick={() => setSelected(career)}
                      className="group text-left p-4 rounded-xl border border-slate-100 dark:border-dark-border/30 hover:border-primary/30 bg-white dark:bg-dark-card hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col h-full"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradients[career.id]} flex items-center justify-center shrink-0`}>
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-slate-text dark:text-white group-hover:text-primary transition-colors leading-tight">
                          {career.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed line-clamp-3 flex-1">
                        {career.tagline}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-primary/70 group-hover:text-primary transition-colors">
                        <span>Ver detalles</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Información Académica */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { id: 'malla-curricular', label: 'Malla Curricular', icon: BookMarked, color: 'from-blue-500 to-cyan-500' },
          { id: 'docentes', label: 'Docentes', icon: Users, color: 'from-rose-500 to-pink-500' },
          { id: 'laboratorios', label: 'Laboratorios', icon: Beaker, color: 'from-amber-500 to-orange-500' },
          { id: 'convenios', label: 'Convenios', icon: Handshake, color: 'from-emerald-500 to-teal-500' },
          { id: 'perfil-egresado', label: 'Perfil del Egresado', icon: UserCheck, color: 'from-violet-500 to-purple-500' },
          { id: 'modalidades', label: 'Modalidades', icon: FileText, color: 'from-green-500 to-lime-500' }
        ].map((item) => (
          <Link
            key={item.id}
            to={`/${item.id}`}
            className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all text-center"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-[11px] font-semibold text-slate-text dark:text-white leading-tight">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-white dark:bg-dark-card shadow-2xl border border-slate-100 dark:border-dark-border/50 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/80 dark:bg-dark-border/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-border text-slate-text dark:text-dark-text transition-all cursor-pointer shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>

            <div className={`bg-gradient-to-br ${gradients[selected.id]} p-6 md:p-8 text-white`}>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-1">Programa de Estudio</p>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{selected.name}</h3>
              <p className="text-sm text-white/80 mt-2 max-w-lg">{selected.tagline}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> 3 Años / 6 Ciclos
                </span>
                <span className="text-[10px] font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <GraduationCap className="w-3 h-3" /> {selected.degree}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <p className="text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed">{selected.desc}</p>

              <div>
                <h4 className="text-sm font-bold text-slate-text dark:text-white flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" /> Plan de Estudios
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selected.curriculum.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-light/50 dark:bg-dark-border/20">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-[10px] font-bold">{i + 1}</span>
                      <span className="text-xs text-slate-text/75 dark:text-dark-text/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-text dark:text-white flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-primary" /> Habilidades
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selected.skills.map((s, i) => (
                    <span key={i} className="text-[10px] font-medium px-2.5 py-1.5 rounded-full bg-slate-light dark:bg-dark-border/30 text-slate-text/70 dark:text-dark-text/70 border border-primary/5">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-text dark:text-white flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-primary" /> Oportunidades Laborales
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selected.opportunities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-light/50 dark:bg-dark-border/20">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-xs text-slate-text/75 dark:text-dark-text/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                <h4 className="text-sm font-bold text-slate-text dark:text-white flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" /> ¿Por qué esta carrera?
                </h4>
                <p className="text-xs text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{selected.whyYou}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
