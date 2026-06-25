import React from 'react';
import { Handshake } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const convenios = [
  { name: 'Hospital Regional de Pucallpa', type: 'Prácticas de Enfermería', color: 'from-rose-500 to-pink-500' },
  { name: 'Municipalidad Provincial de Coronel Portillo', type: 'Convenio Marco', color: 'from-blue-500 to-cyan-500' },
  { name: 'Gobierno Regional de Ucayali', type: 'Prácticas Preprofesionales', color: 'from-amber-500 to-orange-500' },
  { name: 'Innova Ambiental', type: 'Investigación Ambiental', color: 'from-green-500 to-lime-500' },
  { name: 'Caja Municipal de Ahorro y Crédito', type: 'Prácticas Administrativas', color: 'from-emerald-500 to-teal-500' },
  { name: 'Talleres Automotrices Asociados', type: 'Prácticas Mecatrónica', color: 'from-amber-500 to-orange-500' },
  { name: 'Dirección Regional de Educación', type: 'Convenio Docente', color: 'from-violet-500 to-purple-500' },
  { name: 'Empresas de Construcción Local', type: 'Prácticas de Obra', color: 'from-yellow-500 to-amber-500' }
];

export default function ConveniosPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-10 left-10"></div>
      <div className="bg-circle-2 bottom-10 right-10"></div>

      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Handshake className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Convenios
          </h2>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
            Alianzas estratégicas con instituciones del sector público y privado para fortalecer la formación profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {convenios.map((c, i) => (
            <div
              key={i}
              className="p-5 md:p-6 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform`}>
                <span className="text-sm font-bold text-white">{i + 1}</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-text dark:text-white">{c.name}</h3>
                <span className="text-[11px] text-slate-text/60 dark:text-dark-text/60">{c.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
