import React from 'react';
import { Target, Eye, ShieldAlert, Award, Landmark, CheckCircle } from 'lucide-react';

export default function AboutUs({ t }) {
  const values = [
    { title: "Excelencia", desc: "Buscamos el más alto estándar en la formación técnica y humana." },
    { title: "Innovación", desc: "Impulsamos la investigación aplicada y el uso de tecnologías de vanguardia." },
    { title: "Inclusión", desc: "Respetamos y valoramos la diversidad sociocultural de nuestra Amazonía." },
    { title: "Integridad", desc: "Actuamos con ética, honestidad, transparencia y responsabilidad social." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      <div className="bg-circle-1 top-10 left-10"></div>
      <div className="bg-circle-2 bottom-10 right-10"></div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
          Nuestra Institución
        </h2>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          Conoce la trayectoria, misión, visión y los valores que guían al IESTP Suiza de Pucallpa.
        </p>
      </div>

      {/* Mission & Vision grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Mission card */}
        <div className="p-6 md:p-8 rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 text-left shadow-sm hover:scale-[1.01] transition-transform">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary flex items-center justify-center mb-5">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-text dark:text-white mb-3">Misión</h3>
          <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed">
            Somos una institución de educación superior tecnológica pública licenciada, dedicada a formar profesionales técnicos competentes, creativos, innovadores y con sólidos valores éticos, capaces de contribuir activamente al desarrollo socioeconómico sostenible de la región Ucayali y el país.
          </p>
        </div>

        {/* Vision card */}
        <div className="p-6 md:p-8 rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 text-left shadow-sm hover:scale-[1.01] transition-transform">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary flex items-center justify-center mb-5">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-text dark:text-white mb-3">Visión</h3>
          <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed">
            Al 2030, ser un instituto tecnológico líder en la Amazonía peruana y referente nacional por su excelencia académica, infraestructura moderna, procesos automatizados, convenios internacionales y egresados de alta empleabilidad comprometidos con la innovación y el cuidado ambiental.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-white/40 dark:bg-dark-card/25 border border-primary/5 dark:border-dark-border/30 rounded-[2.5rem] p-8 md:p-12 mb-16 text-left backdrop-blur-sm shadow-sm">
        <h3 className="text-2xl font-bold text-slate-text dark:text-white mb-8 border-b border-primary/5 pb-3">Nuestros Valores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <h4 className="font-bold text-slate-text dark:text-white text-base">{v.title}</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed pl-6">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* History timeline */}
      <div className="text-left bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 p-8 md:p-10 rounded-[2.5rem] shadow-sm">
        <h3 className="text-2xl font-bold text-slate-text dark:text-white mb-8 flex items-center gap-2.5 border-b border-primary/5 pb-3">
          <Landmark className="w-6 h-6 text-primary" />
          <span>Reseña Histórica</span>
        </h3>
        
        {/* Timeline representation */}
        <div className="flex flex-col gap-8 relative border-l border-primary/10 dark:border-dark-border pl-6 ml-4">
          {[
            {
              year: "1976",
              title: "Fundación y Primeros Pasos",
              desc: "Nace como respuesta a la creciente demanda de formación técnica calificada en la provincia de Coronel Portillo, Ucayali, ofreciendo los primeros programas en áreas agropecuarias y de mecánica."
            },
            {
              year: "1995",
              title: "Consolidación y Nuevos Programas",
              desc: "Se inaugura el campus actual en la Carretera Federico Basadre y se incorporan especialidades como Contabilidad, Computación y Enfermería Técnica, adaptándose al crecimiento digital de la época."
            },
            {
              year: "2018",
              title: "Modernización Tecnológica",
              desc: "Se equipan nuevos laboratorios con tecnología de mecatrónica y desarrollo de software, y se consolidan convenios estratégicos con empresas nacionales y regionales."
            },
            {
              year: "2024",
              title: "Licenciamiento Institucional",
              desc: "El IESTP Suiza logra exitosamente su licenciamiento institucional ante el Ministerio de Educación, validando sus condiciones básicas de calidad académica e infraestructura."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              {/* timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-dark-card border-4 border-primary group-hover:scale-110 transition-transform"></div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-extrabold text-primary dark:text-secondary">{item.year}</span>
                <h4 className="text-base md:text-lg font-bold text-slate-text dark:text-white">{item.title}</h4>
                <p className="text-xs md:text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed max-w-3xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
