import React from 'react';
import { Monitor, Cog, Heart, Leaf, Beaker } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const labs = [
  { name: 'Lab. de Cómputo', icon: Monitor, desc: '40 estaciones de trabajo con software especializado para desarrollo de software y diseño.', color: 'from-blue-500 to-cyan-500' },
  { name: 'Taller de Mecatrónica', icon: Cog, desc: 'Equipos de diagnóstico automotriz, scanners y maquinaria para prácticas mecánicas.', color: 'from-amber-500 to-orange-500' },
  { name: 'Lab. de Enfermería', icon: Heart, desc: 'Simuladores, maniquíes y equipos médicos para prácticas de atención clínica.', color: 'from-rose-500 to-pink-500' },
  { name: 'Taller de Electricidad', icon: Monitor, desc: 'Tableros eléctricos, PLC, motores y sistemas de automatización industrial.', color: 'from-yellow-500 to-amber-500' },
  { name: 'Lab. de Cómputo', icon: Monitor, desc: 'Software contable, tributario y de gestión empresarial para simulaciones financieras.', color: 'from-emerald-500 to-teal-500' },
  { name: 'Taller Agropecuario', icon: Leaf, desc: 'Invernaderos, parcelas demostrativas y área de crianza para prácticas de campo.', color: 'from-green-500 to-lime-500' }
];

export default function LaboratoriosPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-10 right-10"></div>
      <div className="bg-circle-2 bottom-10 left-10"></div>

      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Beaker className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Laboratorios y Talleres
          </h2>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
            Ambientes equipados con tecnología moderna para el desarrollo de habilidades prácticas en cada programa de estudio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lab.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-4`}>
                <lab.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-text dark:text-white">{lab.name}</h3>
              <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 mt-2 leading-relaxed">{lab.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
