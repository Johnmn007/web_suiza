import { useState } from 'react';
import { X, BookOpen, Target, Sparkles, ChevronRight, GraduationCap, Briefcase, Clock, Award } from 'lucide-react';

const careersData = [
  {
    id: "admin",
    name: "ADMINISTRACIÓN DE EMPRESAS",
    tagline: "Forma líderes empresariales con visión estratégica y capacidad de gestión.",
    desc: "Formamos profesionales capaces de planificar, organizar, dirigir y controlar organizaciones públicas y privadas, liderando equipos de alto rendimiento, optimizando recursos y generando valor agregado en entornos competitivos y globalizados.",
    degree: "Técnico en Administración de Empresas",
    curriculum: [
      "Gestión empresarial y planeamiento estratégico",
      "Marketing, ventas y atención al cliente",
      "Contabilidad general, costos y finanzas corporativas",
      "Recursos humanos, liderazgo y trabajo en equipo",
      "Legislación laboral, tributaria y comercio internacional",
      "Proyectos de inversión, emprendimiento e innovación"
    ],
    skills: ["Liderazgo", "Toma de decisiones", "Gestión financiera", "Negociación", "Planificación estratégica", "Trabajo en equipo"],
    opportunities: [
      "Jefe de área administrativa o financiera",
      "Gerente general de pequeñas y medianas empresas",
      "Administrador de empresas comerciales, industriales o de servicios",
      "Emprendedor y creador de tu propio negocio",
      "Consultor empresarial independiente"
    ],
    whyYou: "Si posees facilidad para liderar, te motiva la toma de decisiones y el logro de objetivos, y te apasiona el mundo de los negocios, esta carrera potenciará tu talento directivo.",
    whyChoose: "Porque todo tipo de organización necesita administradores competentes. Es una de las profesiones con mayor campo laboral, permitiéndote trabajar en cualquier sector económico del país."
  },
  {
    id: "tur",
    name: "ADMINISTRACIÓN DE OPERACIONES TURÍSTICAS",
    tagline: "Promueve el turismo sostenible como motor de desarrollo regional.",
    desc: "Formamos profesionales capacitados para diseñar, planificar y gestionar servicios turísticos de calidad, promoviendo el turismo vivencial, ecológico y cultural como ejes del desarrollo sostenible de la región Ucayali y el país.",
    degree: "Técnico en Administración de Operaciones Turísticas",
    curriculum: [
      "Planificación y gestión de destinos turísticos",
      "Administración de hoteles, restaurantes y agencias de viaje",
      "Marketing digital y comercialización turística",
      "Contabilidad y legislación turística",
      "Guía de turismo, interpretación ambiental y cultural",
      "Diseño de paquetes turísticos sostenibles"
    ],
    skills: ["Creatividad", "Comunicación intercultural", "Gestión hotelera", "Atención al cliente", "Trabajo en campo", "Visión sostenible"],
    opportunities: [
      "Administrador de hoteles, lodges y restaurantes",
      "Operador turístico y agente de viajes",
      "Guía oficial de turismo especializado en Amazonía",
      "Promotor de turismo comunitario y vivencial",
      "Emprendedor en servicios turísticos sostenibles"
    ],
    whyYou: "Si eres creativo, con espíritu aventurero y vocación por compartir la riqueza natural y cultural de tu tierra, esta carrera hará de ti un agente de cambio.",
    whyChoose: "Porque Ucayali es un destino con enorme potencial turístico aún por explotar. Serás protagonista del desarrollo económico regional a través del turismo responsable."
  },
  {
    id: "asist",
    name: "ASISTENCIA ADMINISTRATIVA",
    tagline: "El soporte clave para la eficiencia organizacional.",
    desc: "Formamos profesionales competentes en la organización, gestión y optimización de procesos administrativos, documentarios y de comunicación, garantizando el funcionamiento eficiente de toda organización pública o privada.",
    degree: "Técnico en Asistencia Administrativa",
    curriculum: [
      "Gestión documentaria y archivo empresarial",
      "Redacción y comunicación corporativa",
      "Atención al cliente y protocolo empresarial",
      "Contabilidad básica, planillas y tributación",
      "Herramientas ofimáticas y sistemas administrativos",
      "Organización de eventos y logística empresarial"
    ],
    skills: ["Organización", "Responsabilidad", "Comunicación efectiva", "Manejo de software", "Atención al detalle", "Discreción profesional"],
    opportunities: [
      "Asistente de gerencia o dirección",
      "Secretario ejecutivo en empresas públicas y privadas",
      "Administrador de oficina y archivo",
      "Especialista en atención al cliente",
      "Asistente de recursos humanos, logística o contabilidad"
    ],
    whyYou: "Si eres meticuloso, responsable y disfrutas del orden y la eficiencia, tu capacidad organizativa será el pilar que toda empresa necesita.",
    whyChoose: "Porque todas las organizaciones requieren personal administrativo calificado. Es una carrera técnica con rápida inserción laboral y demanda constante."
  },
  {
    id: "civil",
    name: "CONSTRUCCIÓN CIVIL",
    tagline: "Construye el futuro con calidad, seguridad y responsabilidad.",
    desc: "Formamos profesionales técnicos capaces de planificar, supervisar y ejecutar proyectos de infraestructura civil, edificación y obras públicas, aplicando estándares de calidad, seguridad y normativa vigente.",
    degree: "Técnico en Construcción Civil",
    curriculum: [
      "Dibujo técnico, planos y topografía",
      "Tecnología de materiales, concreto y suelos",
      "Costos, presupuestos y valorizaciones de obra",
      "Estructuras, instalaciones sanitarias y eléctricas",
      "Seguridad en obra y prevención de riesgos",
      "Supervisión y control de calidad en construcción"
    ],
    skills: ["Visión espacial", "Liderazgo técnico", "Trabajo en campo", "Cálculo de costos", "Supervisión de equipos", "Cumplimiento normativo"],
    opportunities: [
      "Supervisor de obra y asistente de residente",
      "Maestro general de obra calificado",
      "Técnico en empresas constructoras e inmobiliarias",
      "Inspector de obras públicas y privadas",
      "Emprendedor en servicios de construcción"
    ],
    whyYou: "Si te apasiona ver cómo las ideas se convierten en estructuras sólidas y quieres ser parte del desarrollo urbano, esta carrera te dará el poder de construir.",
    whyChoose: "Porque el déficit de infraestructura en el Perú demanda profesionales técnicos en construcción. Es una carrera estable, bien remunerada y con proyección a largo plazo."
  },
  {
    id: "cont",
    name: "CONTABILIDAD",
    tagline: "El guardián de las finanzas empresariales.",
    desc: "Formamos profesionales íntegros y analíticos capaces de gestionar la información financiera, contable y tributaria de empresas e instituciones, garantizando la transparencia, legalidad y toma de decisiones acertadas.",
    degree: "Técnico en Contabilidad",
    curriculum: [
      "Contabilidad general, de costos y de sociedades",
      "Legislación y tributación laboral y empresarial",
      "Planillas electrónicas, PDT y declaraciones mensuales",
      "Auditoría financiera y control interno",
      "Sistemas contables computarizados (SUNAT, CONCAR)",
      "Finanzas empresariales y presupuestos"
    ],
    skills: ["Razonamiento analítico", "Meticulosidad", "Ética profesional", "Manejo de sistemas contables", "Confidencialidad", "Visión financiera"],
    opportunities: [
      "Asistente o analista contable",
      "Especialista en tributación y planillas",
      "Auditor interno o externo",
      "Contador general de empresas",
      "Consultor financiero independiente"
    ],
    whyYou: "Si eres analítico, preciso y te interesa el mundo de las finanzas, la contabilidad te convertirá en el profesional de confianza que toda organización necesita.",
    whyChoose: "Porque todas las empresas, sin excepción, requieren servicios contables. Es una de las carreras técnicas con mayor empleabilidad y estabilidad laboral."
  },
  {
    id: "sys",
    name: "DESARROLLO DE SISTEMAS DE INFORMACIÓN",
    tagline: "Crea soluciones digitales que transforman el mundo.",
    desc: "Formamos profesionales innovadores capaces de diseñar, desarrollar e implementar sistemas informáticos, aplicaciones web, móviles y soluciones digitales utilizando tecnologías de vanguardia para resolver problemas reales.",
    degree: "Técnico en Desarrollo de Sistemas de Información",
    curriculum: [
      "Programación estructurada y orientada a objetos",
      "Desarrollo web frontend y backend",
      "Aplicaciones móviles Android y iOS",
      "Bases de datos SQL y NoSQL",
      "Redes, ciberseguridad y cloud computing",
      "Inteligencia artificial, data science y proyectos TI"
    ],
    skills: ["Pensamiento lógico", "Resolución de problemas", "Adaptabilidad tecnológica", "Creatividad digital", "Trabajo colaborativo", "Autogestión"],
    opportunities: [
      "Desarrollador de software y aplicaciones",
      "Programador web y administrador de bases de datos",
      "Analista de sistemas y soporte TI",
      "Especialista en ciberseguridad",
      "Emprendedor tecnológico y freelancer"
    ],
    whyYou: "Si te apasiona la tecnología, resolver problemas complejos y crear soluciones que impacten a miles de personas, esta carrera te dará las herramientas para innovar.",
    whyChoose: "Porque la era digital necesita programadores. Es la carrera con mayor crecimiento laboral global, salarios competitivos y posibilidad de trabajo remoto desde cualquier lugar."
  },
  {
    id: "elec",
    name: "ELECTRICIDAD INDUSTRIAL",
    tagline: "La energía que mueve al mundo.",
    desc: "Formamos profesionales especializados en instalación, operación y mantenimiento de sistemas eléctricos industriales, automatización de procesos y control de maquinaria, garantizando eficiencia energética y seguridad industrial.",
    degree: "Técnico en Electricidad Industrial",
    curriculum: [
      "Instalaciones eléctricas domiciliarias e industriales",
      "Máquinas eléctricas, transformadores y motores",
      "Automatización industrial con PLC y sensores",
      "Sistemas de potencia y tableros de control",
      "Instrumentación y mantenimiento eléctrico",
      "Seguridad industrial y normativa eléctrica"
    ],
    skills: ["Precisión técnica", "Razonamiento lógico", "Trabajo seguro", "Diagnóstico de fallas", "Manejo de instrumentos", "Visión sistémica"],
    opportunities: [
      "Técnico electricista industrial",
      "Supervisor de mantenimiento eléctrico",
      "Instalador de sistemas de automatización",
      "Técnico en empresas mineras, constructoras y fabriles",
      "Emprendedor en servicios eléctricos"
    ],
    whyYou: "Si te fascina entender cómo funciona la energía y mantener los sistemas que mueven la industria, esta carrera te dará un campo de acción inmenso.",
    whyChoose: "Porque la industria peruana demanda constantemente técnicos electricistas. Es una carrera con alta empleabilidad en minería, construcción, manufactura y servicios."
  },
  {
    id: "enfer",
    name: "ENFERMERÍA TÉCNICA",
    tagline: "Vocación de servicio y compromiso con la vida.",
    desc: "Formamos profesionales humanitarios y competentes en el cuidado integral de la salud, capaces de brindar atención en prevención, recuperación y rehabilitación, trabajando en equipos multidisciplinarios con calidad y calidez.",
    degree: "Técnico en Enfermería Técnica",
    curriculum: [
      "Anatomía, fisiología y farmacología básica",
      "Cuidados de enfermería en adulto, niño y neonato",
      "Primeros auxilios, emergencias y desastres",
      "Nutrición, salud comunitaria y epidemiología",
      "Enfermería en pediatría, geriatría y cuidados paliativos",
      "Prácticas preprofesionales en hospitales y centros de salud"
    ],
    skills: ["Empatía", "Vocación de servicio", "Trabajo bajo presión", "Responsabilidad", "Trabajo en equipo", "Comunicación asertiva"],
    opportunities: [
      "Técnico de enfermería en hospitales y clínicas",
      "Promotor de salud comunitaria",
      "Asistente en centros de salud y postas médicas",
      "Cuidador de adultos mayores y pacientes domiciliarios",
      "Técnico en programas de salud preventiva"
    ],
    whyYou: "Si tu vocación es cuidar de los demás, tienes empatía y sensibilidad social, la enfermería técnica te permitirá salvar vidas y mejorar la salud de tu comunidad.",
    whyChoose: "Porque la salud es un derecho y una prioridad nacional. Los enfermeros técnicos son esenciales en el sistema de salud, con alta demanda y estabilidad laboral."
  },
  {
    id: "meca",
    name: "MECATRÓNICA AUTOMOTRIZ",
    tagline: "Diagnóstico y reparación de vehículos con tecnología de punta.",
    desc: "Formamos profesionales capacitados para diagnosticar, reparar y optimizar sistemas mecánicos, eléctricos y electrónicos de vehículos livianos, pesados y maquinaria, integrando la mecánica tradicional con la electrónica moderna.",
    degree: "Técnico en Mecatrónica Automotriz",
    curriculum: [
      "Motores de combustión interna y sistemas de transmisión",
      "Sistemas de frenos, suspensión y dirección",
      "Electrónica automotriz y diagnóstico computarizado",
      "Sistemas de inyección, encendido y sobrealimentación",
      "Aire acondicionado automotriz y climatización",
      "Mantenimiento de maquinaria pesada y equipos diésel"
    ],
    skills: ["Diagnóstico técnico", "Precisión manual", "Actualización constante", "Pensamiento analítico", "Uso de scanner automotriz", "Trabajo en taller"],
    opportunities: [
      "Técnico especializado en talleres mecánicos y concesionarios",
      "Diagnosticador automotriz con scanner",
      "Especialista en sistemas electrónicos de vehículos",
      "Técnico en maquinaria pesada y equipos diésel",
      "Emprendedor en taller de servicio automotriz"
    ],
    whyYou: "Si te apasionan los motores, la tecnología automotriz y el diagnóstico de precisión, esta carrera te convertirá en un experto altamente demandado.",
    whyChoose: "Porque el parque automotor crece aceleradamente y los vehículos modernos requieren técnicos con formación en mecatrónica. Es una carrera con excelente proyección económica."
  },
  {
    id: "forest",
    name: "MANEJO FORESTAL",
    tagline: "Conserva y aprovecha sosteniblemente la riqueza de nuestros bosques.",
    desc: "Formamos profesionales comprometidos con la gestión sostenible de los recursos forestales y de fauna silvestre, capaces de administrar, proteger y aprovechar los bosques amazónicos con responsabilidad ambiental y social.",
    degree: "Técnico en Manejo Forestal",
    curriculum: [
      "Ecología forestal, botánica y dendrología",
      "Sistemas de información geográfica (SIG) y teledetección",
      "Aprovechamiento maderable y no maderable",
      "Reforestación, silvicultura y viveros forestales",
      "Conservación de fauna silvestre y áreas protegidas",
      "Gestión de concesiones forestales y certificación"
    ],
    skills: ["Conciencia ambiental", "Trabajo de campo", "Visión sostenible", "Manejo de SIG", "Investigación aplicada", "Liderazgo comunitario"],
    opportunities: [
      "Técnico en empresas forestales y concesiones",
      "Promotor de conservación y reforestación",
      "Inspector de recursos forestales y fauna",
      "Técnico en áreas naturales protegidas",
      "Consultor en manejo forestal sostenible"
    ],
    whyYou: "Si amas la naturaleza, te preocupa el futuro del planeta y quieres trabajar directamente en la conservación de la Amazonía, esta carrera es tu propósito de vida.",
    whyChoose: "Porque la Amazonía es el pulmón del mundo y necesita profesionales capacitados. Es una carrera única con impacto local y relevancia global."
  },
  {
    id: "agro",
    name: "PRODUCCIÓN AGROPECUARIA",
    tagline: "Produce alimentos de calidad con tecnología e innovación.",
    desc: "Formamos profesionales capaces de gestionar sistemas de producción agrícola y pecuaria aplicando biotecnología, riego tecnificado y buenas prácticas agropecuarias, contribuyendo a la seguridad alimentaria y el desarrollo rural sostenible.",
    degree: "Técnico en Producción Agropecuaria",
    curriculum: [
      "Cultivos tropicales, sanidad vegetal y fertilización",
      "Riego tecnificado, suelos y manejo de cuencas",
      "Crianza de animales mayores y menores",
      "Biotecnología agropecuaria y transformación de productos",
      "Gestión agroempresarial y comercio de insumos",
      "Buenas prácticas agrícolas y certificación orgánica"
    ],
    skills: ["Trabajo de campo", "Visión productiva", "Innovación tecnológica", "Gestión de recursos", "Sostenibilidad", "Capacidad emprendedora"],
    opportunities: [
      "Técnico en empresas agroindustriales y fundos",
      "Asistente técnico en producción agrícola y pecuaria",
      "Promotor de buenas prácticas agropecuarias",
      "Técnico en programas de desarrollo rural",
      "Emprendedor agropecuario y productor independiente"
    ],
    whyYou: "Si valoras el trabajo del campo, te interesa la producción de alimentos y quieres aplicar tecnología al agro, esta carrera te hará parte de la revolución productiva del país.",
    whyChoose: "Porque Ucayali tiene un enorme potencial agropecuario. Serás clave para impulsar la seguridad alimentaria y el desarrollo económico desde el campo."
  }
];

export default function Careers() {
  const [selected, setSelected] = useState(null);
  const [activePreview, setActivePreview] = useState(careersData[0]);

  const openCareer = (career) => setSelected(career);
  const closeCareer = () => setSelected(null);

  return (
    <div>
      <section className="relative w-full h-[350px] md:h-[420px] overflow-hidden -mt-4">
        <img
          src="/carrera1.jpg"
          alt="Carreras IESTP Suiza"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center items-start pl-4 md:pl-8 lg:pl-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
            Programas de Estudio
          </h1>
          <p className="text-sm md:text-base text-white/90 mt-3 max-w-xl drop-shadow-md">
            Ofrecemos 11 carreras profesionales técnicas con alta demanda laboral, formación de calidad y certificación nacional.
          </p>
        </div>
      </section>

      <section className="w-full overflow-hidden">
        <div className="flex pt-12">
          {/* Lista de carreras */}
          <div className="pl-4 md:px-8 lg:pl-16 lg:pr-12 shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-8">
              CARRERAS
            </h2>
            <div className="inline-block">
              {careersData.map((career) => (
                <button
                  key={career.id}
                  onClick={() => openCareer(career)}
                  onMouseEnter={() => setActivePreview(career)}
                  className={`block w-full text-left text-xl md:text-2xl font-medium py-3 pl-4 transition-colors cursor-pointer border-b-2 border-primary/40 dark:border-primary/60 ${
                    activePreview?.id === career.id
                      ? 'text-primary dark:text-secondary border-l-4 border-l-primary dark:border-l-secondary font-bold'
                      : 'text-slate-text dark:text-dark-text hover:text-primary dark:hover:text-secondary'
                  }`}
                >
                  {career.name}
                </button>
              ))}
            </div>
          </div>

          {/* Panel de vista previa - borde derecho */}
          <div className="hidden lg:block flex-1 relative min-h-[500px]">
            {activePreview && (
              <div
                key={activePreview.id}
                className="absolute inset-0 animate-fade-in"
              >
                <img
                  src={`/careers/${activePreview.id}.jpg`}
                  alt={activePreview.name}
                  className="absolute inset-0 w-[calc(100%-2rem)] h-full object-cover rounded-l-2xl"
                />
                <div className="absolute inset-0 w-[calc(100%-2rem)] bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-l-2xl" />
                <div className="absolute bottom-0 left-0 w-[calc(100%-2rem)] p-8">
                  <p className="text-white font-extrabold text-2xl md:text-3xl drop-shadow-lg mb-2">
                    {activePreview.name}
                  </p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl line-clamp-3">
                    {activePreview.tagline}
                  </p>
                  <button
                    onClick={() => openCareer(activePreview)}
                    className="mt-4 inline-block text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/30 transition-all cursor-pointer"
                  >
                    Ver más detalles
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Backdrop blur */}
      {selected && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-500"
          onClick={closeCareer}
        />
      )}

      {/* Side panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full md:w-[75vw] lg:w-[70vw] xl:w-[65vw] bg-white dark:bg-dark-card shadow-2xl transition-transform duration-500 ease-out overflow-y-auto ${
          selected ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selected && (
          <div className="min-h-full flex flex-col">
            {/* Image header */}
            <div className="relative h-80 md:h-96 shrink-0">
              <img
                src={`/careers/${selected.id}.jpg`}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <button
                onClick={closeCareer}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/40 text-white transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-base font-semibold text-white/80 tracking-widest mb-1">
                  PROGRAMA DE ESTUDIO
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                  {selected.name}
                </h3>
                <p className="text-base md:text-lg text-white/80 mt-1 max-w-xl">
                  {selected.tagline}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 space-y-8">

              {/* Info badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>3 Años / 6 Ciclos</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-full">
                  <GraduationCap className="w-4 h-4" />
                  <span>{selected.degree}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-slate-text/80 dark:text-dark-text/80 leading-relaxed">
                {selected.desc}
              </p>

              {/* Plan de estudios */}
              <div>
                <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Plan de Estudios
                </h4>
                <div className="space-y-3">
                  {selected.curriculum.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                        {i + 1}
                      </div>
                      <span className="text-base md:text-lg text-slate-text/80 dark:text-dark-text/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Habilidades */}
              <div>
                <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  Habilidades a Desarrollar
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-slate-text bg-slate-light dark:bg-dark-border dark:text-dark-text px-4 py-2 rounded-full border border-primary/10 dark:border-dark-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Oportunidades laborales */}
              <div>
                <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Oportunidades Laborales
                </h4>
                <div className="space-y-3">
                  {selected.opportunities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg text-slate-text/80 dark:text-dark-text/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Por qué esta carrera es para ti */}
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-2xl border border-primary/10">
                <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-primary" />
                  ¿Por qué esta carrera es para ti?
                </h4>
                <p className="text-base md:text-lg text-slate-text/75 dark:text-dark-text/75 leading-relaxed">
                  {selected.whyYou}
                </p>
              </div>

              {/* Por qué elegir esta carrera */}
              <div className="bg-gradient-to-r from-amber-500/5 to-transparent p-6 rounded-2xl border border-amber-500/10">
                <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  ¿Por qué estudiar esta carrera?
                </h4>
                <p className="text-base md:text-lg text-slate-text/75 dark:text-dark-text/75 leading-relaxed">
                  {selected.whyChoose}
                </p>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
