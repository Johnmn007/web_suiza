import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'María García',
    role: 'Egresada de Enfermería Técnica',
    quote: 'El IESTP Suiza me dio las herramientas y la formación humana para convertirme en una profesional de la salud. Los laboratorios y las prácticas en hospitales fueron fundamentales.',
    rating: 5
  },
  {
    name: 'Carlos Sánchez',
    role: 'Estudiante de Desarrollo de Sistemas',
    quote: 'Los docentes son excelentes, siempre actualizados con las tecnologías del mercado. Ya estoy trabajando como desarrollador mientras termino mi carrera.',
    rating: 5
  },
  {
    name: 'Lucía Huamán',
    role: 'Egresada de Administración de Empresas',
    quote: 'Gracias al instituto conseguí mi primer empleo antes de titularme. El enfoque práctico y los convenios empresariales marcan la diferencia.',
    rating: 5
  },
  {
    name: 'Roberto Mori',
    role: 'Estudiante de Mecatrónica Automotriz',
    quote: 'Los talleres están equipados con tecnología moderna. Aprendemos haciendo, no solo teoría. Eso me prepara para el mundo laboral real.',
    rating: 4
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section ref={ref} className={`max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 reveal ${isVisible ? 'visible' : ''}`}>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-slate-text dark:text-white tracking-tight">
          Lo que dicen nuestros estudiantes
        </h2>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-2">
          Historias reales de quienes forman parte de la comunidad Suiza.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-lg relative text-center">
          <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/10 dark:text-primary/20" />
          <Quote className="absolute bottom-4 right-4 w-8 h-8 text-primary/10 dark:text-primary/20 rotate-180" />

          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-base md:text-lg text-slate-text/85 dark:text-dark-text/85 leading-relaxed italic mb-8">
            &ldquo;{t.quote}&rdquo;
          </p>

          <div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold">
              {t.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="font-bold text-slate-text dark:text-white text-sm">{t.name}</div>
            <div className="text-xs text-slate-text/60 dark:text-dark-text/60">{t.role}</div>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/50 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-slate-text dark:text-dark-text cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/50 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-slate-text dark:text-dark-text cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? 'bg-primary w-6'
                  : 'bg-slate-300 dark:bg-dark-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
