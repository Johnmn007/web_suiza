import React from 'react';
import { Award, Target, Briefcase, Leaf, ChevronRight, UserCheck } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const profiles = [
  {
    icon: Award,
    title: 'Competencias Técnicas',
    color: 'from-blue-500 to-indigo-500',
    items: [
      'Dominio de herramientas y tecnologías propias de su especialidad.',
      'Capacidad para aplicar conocimientos teóricos en contextos reales.',
      'Habilidad para resolver problemas técnicos con eficiencia y calidad.',
      'Manejo de normativas y estándares vigentes en su área profesional.'
    ]
  },
  {
    icon: Target,
    title: 'Competencias Blandas',
    color: 'from-rose-500 to-pink-500',
    items: [
      'Comunicación asertiva y trabajo en equipo multidisciplinario.',
      'Liderazgo, responsabilidad y toma de decisiones bajo presión.',
      'Adaptabilidad al cambio y aprendizaje continuo y autónomo.',
      'Ética profesional, honestidad y compromiso con la calidad.'
    ]
  },
  {
    icon: Briefcase,
    title: 'Empleabilidad',
    color: 'from-amber-500 to-orange-500',
    items: [
      'Preparado para insertarse al mercado laboral en su especialidad.',
      'Capacidad de emprendimiento y gestión de proyectos propios.',
      'Habilidad para desempeñarse en empresas públicas y privadas.',
      'Competencias para la certificación y acreditación profesional.'
    ]
  },
  {
    icon: Leaf,
    title: 'Compromiso Social',
    color: 'from-emerald-500 to-teal-500',
    items: [
      'Conciencia ambiental y desarrollo sostenible en su práctica profesional.',
      'Vocación de servicio y responsabilidad social comunitaria.',
      'Respeto por la diversidad cultural e inclusión social.',
      'Contribución al desarrollo económico y social de la región Ucayali.'
    ]
  }
];

export default function PerfilEgresado() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-10 right-10"></div>
      <div className="bg-circle-2 bottom-10 left-10"></div>

      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <UserCheck className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Perfil del Egresado
          </h2>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
            Formamos profesionales integrales con sólidas competencias técnicas, habilidades blandas y compromiso social.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((p, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-text dark:text-white">{p.title}</h3>
              </div>
              <ul className="space-y-3">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
