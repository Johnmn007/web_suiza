import React from 'react';
import { Users } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const teachers = [
  { name: 'Mg. Carlos Ríos', role: 'Desarrollo de Sistemas', area: 'Tecnología', color: 'from-blue-500 to-indigo-500', initials: 'CR' },
  { name: 'Lic. María Torres', role: 'Enfermería Técnica', area: 'Salud', color: 'from-rose-500 to-pink-500', initials: 'MT' },
  { name: 'Ing. Pedro Huamán', role: 'Mecatrónica Automotriz', area: 'Ingeniería', color: 'from-amber-500 to-orange-500', initials: 'PH' },
  { name: 'CPC. Ana López', role: 'Contabilidad', area: 'Gestión', color: 'from-emerald-500 to-teal-500', initials: 'AL' },
  { name: 'Ing. José Silva', role: 'Construcción Civil', area: 'Ingeniería', color: 'from-amber-500 to-orange-500', initials: 'JS' },
  { name: 'Big. Rosa Pinedo', role: 'Manejo Forestal', area: 'Ambiental', color: 'from-green-500 to-lime-500', initials: 'RP' },
  { name: 'Lic. Miguel Ángel', role: 'Administración', area: 'Gestión', color: 'from-emerald-500 to-teal-500', initials: 'MA' },
  { name: 'Mg. Sofía Rengifo', role: 'Electricidad Industrial', area: 'Ingeniería', color: 'from-amber-500 to-orange-500', initials: 'SR' }
];

export default function DocentesPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-10 left-10"></div>
      <div className="bg-circle-2 bottom-10 right-10"></div>

      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Users className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Docentes
          </h2>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
            Plana docente altamente calificada con amplia experiencia profesional y académica, comprometida con tu formación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                <span className="text-lg font-bold text-white">{t.initials}</span>
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-text dark:text-white">{t.name}</h3>
              <p className="text-xs text-slate-text/70 dark:text-dark-text/70 mt-1">{t.role}</p>
              <span className="inline-block mt-3 text-[10px] font-semibold px-3 py-1 rounded-full bg-slate-light dark:bg-dark-border/30 text-slate-text/60 dark:text-dark-text/60">
                {t.area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
