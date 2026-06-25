import React from 'react';
import { GraduationCap, Monitor, FileText } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const modalities = [
  {
    icon: GraduationCap,
    title: 'Presencial',
    color: 'from-primary to-secondary',
    desc: 'Clases teórico-prácticas en nuestras instalaciones con acceso a laboratorios y talleres.',
    schedule: 'Lun - Vie · 7:30 am - 1:00 pm'
  },
  {
    icon: Monitor,
    title: 'Semipresencial',
    color: 'from-amber-500 to-orange-500',
    desc: 'Combinación de clases virtuales y sesiones presenciales para prácticas y evaluaciones.',
    schedule: 'Horarios flexibles'
  },
  {
    icon: Monitor,
    title: 'A distancia',
    color: 'from-emerald-500 to-teal-500',
    desc: 'Plataforma virtual con acompañamiento docente, recursos digitales y evaluación online.',
    schedule: 'Acceso 24/7'
  }
];

export default function ModalidadesPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-10 left-10"></div>
      <div className="bg-circle-2 bottom-10 right-10"></div>

      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FileText className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Modalidades de Estudio
          </h2>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
            Elige la modalidad que mejor se adapte a tus necesidades y ritmo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modalities.map((m, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-5`}>
                <m.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-text dark:text-white">{m.title}</h3>
              <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">{m.desc}</p>
              <div className="mt-5 inline-block px-4 py-2 rounded-full bg-slate-light dark:bg-dark-border/30 text-[11px] font-semibold text-slate-text/60 dark:text-dark-text/60 border border-primary/5">
                {m.schedule}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
