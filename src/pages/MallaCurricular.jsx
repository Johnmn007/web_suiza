import React from 'react';
import { BookOpen, Target, Award } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const cycles = [
  {
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    cycles: ['I', 'II'],
    title: 'Formación Básica',
    desc: 'Fundamentos teóricos y científicos de la carrera. Desarrollo de competencias generales y conocimientos esenciales para la formación profesional.',
    items: [
      'Matemática y comunicación',
      'Introducción a la especialidad',
      'Metodología de la investigación',
      'Informática básica'
    ]
  },
  {
    icon: Target,
    color: 'from-amber-500 to-orange-500',
    cycles: ['III', 'IV'],
    title: 'Formación Especializada',
    desc: 'Profundización en competencias técnicas específicas. Aplicación de conocimientos en situaciones reales con equipos y tecnología especializada.',
    items: [
      'Tecnología aplicada a la especialidad',
      'Gestión de procesos',
      'Talleres prácticos avanzados',
      'Proyectos integradores'
    ]
  },
  {
    icon: Award,
    color: 'from-emerald-500 to-teal-500',
    cycles: ['V', 'VI'],
    title: 'Práctica e Investigación',
    desc: 'Integración de conocimientos mediante prácticas preprofesionales y proyectos de investigación aplicada vinculados al sector productivo.',
    items: [
      'Prácticas preprofesionales',
      'Proyecto de investigación',
      'Emprendimiento e innovación',
      'Certificación profesional'
    ]
  }
];

export default function MallaCurricular() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-10 right-10"></div>
      <div className="bg-circle-2 bottom-10 left-10"></div>

      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <BookOpen className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Malla Curricular
          </h2>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
            Estructura académica organizada en seis semestres con formación progresiva que combina teoría, práctica e investigación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cycles.map((cycle, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cycle.color} flex items-center justify-center shadow-md mb-4`}>
                <cycle.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                {cycle.cycles.map((c, j) => (
                  <span key={j} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-light dark:bg-dark-border/30 text-slate-text/60 dark:text-dark-text/60">
                    {c} Ciclo
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-slate-text dark:text-white mt-2">{cycle.title}</h3>
              <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 mt-2 leading-relaxed">
                {cycle.desc}
              </p>
              <ul className="mt-4 space-y-2">
                {cycle.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-slate-text/60 dark:text-dark-text/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/5 border border-primary/10 dark:border-dark-border/40 text-center">
          <p className="text-sm font-semibold text-slate-text dark:text-white">
            Duración total: 3 años académicos · 6 semestres · Modalidad presencial
          </p>
        </div>
      </div>
    </div>
  );
}
