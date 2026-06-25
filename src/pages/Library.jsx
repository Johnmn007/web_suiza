import React from 'react';
import { BookOpen, Search, Monitor, Clock, FileText, ArrowUpRight, BookMarked, GraduationCap, Globe } from 'lucide-react';

const resources = [
  { title: 'Repositorio Institucional', desc: 'Tesis, trabajos de investigación y proyectos de los estudiantes.', icon: BookMarked },
  { title: 'Base de Datos Académicas', desc: 'Acceso a SciELO, Redalyc, Google Scholar y más.', icon: Globe },
  { title: 'Biblioteca Virtual', desc: 'Libros digitales, revistas indexadas y material multimedia.', icon: Monitor },
  { title: 'Aula Virtual', desc: 'Plataforma educativa con recursos por programa de estudio.', icon: GraduationCap }
];

const schedule = [
  { day: 'Lunes a Viernes', morning: '7:30 am - 1:00 pm', afternoon: '3:00 pm - 9:00 pm' },
  { day: 'Sábados', morning: '8:00 am - 12:00 pm', afternoon: 'Cerrado' },
  { day: 'Domingos', morning: 'Cerrado', afternoon: 'Cerrado' }
];

export default function Library({ t }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      <div className="bg-circle-1 top-10 left-10"></div>
      <div className="bg-circle-2 bottom-10 right-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
          Biblioteca
        </h2>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          Centro de recursos académicos y digitales al servicio de la comunidad suiza,
          fomentando la investigación y el aprendizaje autónomo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {resources.map((r, i) => (
          <div key={i} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all group flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <r.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-text dark:text-white group-hover:text-primary transition-colors">{r.title}</h3>
              <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 mt-1 leading-relaxed">{r.desc}</p>
              <button className="mt-3 text-[11px] font-semibold text-primary dark:text-secondary flex items-center gap-1 hover:gap-2 transition-all">
                Acceder <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2 p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm">
          <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5 flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Catálogo en Línea
          </h3>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Buscar libros, tesis, artículos..."
              className="w-full px-4 py-3 pl-10 rounded-xl bg-slate-light/50 dark:bg-dark-border/30 border border-primary/10 dark:border-dark-border/40 text-sm text-slate-text dark:text-dark-text placeholder:text-slate-text/40 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <Search className="w-4 h-4 text-slate-text/40 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <div className="flex flex-wrap gap-2">
            {['Todos', 'Libros', 'Tesis', 'Revistas', 'Proyectos', 'Videos'].map((cat, i) => (
              <button key={i} className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-slate-light dark:bg-dark-border/30 text-slate-text/70 dark:text-dark-text/70 hover:bg-primary/10'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-slate-light/30 dark:bg-dark-border/10 text-center">
            <p className="text-xs text-slate-text/50 dark:text-dark-text/50">Más de 2,500 títulos disponibles en nuestro catálogo físico y digital.</p>
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm">
          <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Horarios
          </h3>
          <div className="flex flex-col gap-3">
            {schedule.map((s, i) => (
              <div key={i} className="pb-3 border-b border-slate-100 dark:border-dark-border/30 last:border-0">
                <div className="text-sm font-semibold text-slate-text dark:text-white">{s.day}</div>
                <div className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-0.5">
                  {s.morning !== 'Cerrado' ? `Mañana: ${s.morning}` : s.morning}
                </div>
                <div className="text-xs text-slate-text/60 dark:text-dark-text/60">
                  {s.afternoon !== 'Cerrado' ? `Tarde: ${s.afternoon}` : s.afternoon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/5 border border-primary/10 dark:border-dark-border/40 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-bold text-slate-text dark:text-white">Reglamento de Biblioteca</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { rule: 'Préstamo Interno', desc: 'Lectura en sala para toda la comunidad educativa.' },
            { rule: 'Préstamo a Domicilio', desc: 'Hasta 3 libros por 7 días, renovable una vez.' },
            { rule: 'Uso de Sala Virtual', desc: 'Reserva previa para equipos multimedia.' },
            { rule: 'Sanciones', desc: 'Mora: S/1.00 por día. Pérdida: reponer el material.' }
          ].map((r, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/60 dark:bg-dark-card/60 border border-primary/5 dark:border-dark-border/30">
              <h4 className="text-sm font-bold text-slate-text dark:text-white">{r.rule}</h4>
              <p className="text-[11px] text-slate-text/70 dark:text-dark-text/70 mt-1">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
