import React from 'react';
import { Microscope, FileText, Megaphone, Sprout, BookOpen, Award, Users, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Sistema IoT para Monitoreo de Cultivos en Ucayali',
    area: 'Tecnología',
    desc: 'Implementación de sensores IoT para optimizar el riego y monitoreo de suelos en la agricultura regional.',
    status: 'En ejecución'
  },
  {
    title: 'Telemedicina para Comunidades Shipibo-Conibo',
    area: 'Salud',
    desc: 'Plataforma de atención primaria a distancia para comunidades nativas de la región Ucayali.',
    status: 'En ejecución'
  },
  {
    title: 'Biodigestores para Zonas Rurales Amazónicas',
    area: 'Ambiental',
    desc: 'Diseño e implementación de biodigestores de bajo costo para comunidades sin acceso a gas.',
    status: 'Finalizado'
  }
];

const publications = [
  { title: 'Revista Científica Suiza', type: 'Revista Indexada', date: 'Semestral' },
  { title: 'Innovación Tecnológica en la Amazonía', type: 'Libro', date: '2025' },
  { title: 'Manual de Buenas Prácticas Agropecuarias', type: 'Guía Técnica', date: '2024' }
];

const calls = [
  { title: 'Concurso de Proyectos 2026-II', deadline: '15 Jul 2026', area: 'Docentes' },
  { title: 'Beca de Investigación Estudiantil', deadline: '30 Ago 2026', area: 'Estudiantes' },
  { title: 'Feria de Ciencias y Tecnología', deadline: '10 Set 2026', area: 'General' }
];

export default function Research({ t }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      <div className="bg-circle-1 top-10 right-10"></div>
      <div className="bg-circle-2 bottom-10 left-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary flex items-center justify-center mx-auto mb-4">
          <Microscope className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
          Investigación
        </h2>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          Impulsamos la investigación aplicada, la innovación tecnológica y la producción científica
          como motores del desarrollo regional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Award, value: '12+', label: 'Proyectos Activos' },
          { icon: FileText, value: '45+', label: 'Publicaciones' },
          { icon: Users, value: '80+', label: 'Investigadores' }
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 text-center shadow-sm hover:scale-[1.02] transition-transform">
            <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-extrabold text-slate-text dark:text-white">{stat.value}</div>
            <div className="text-xs text-slate-text/60 dark:text-dark-text/60">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-slate-text dark:text-white mb-6 flex items-center gap-2.5">
          <Microscope className="w-6 h-6 text-primary" />
          Proyectos de Investigación
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary">{p.area}</span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">{p.status}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-text dark:text-white mb-2 group-hover:text-primary transition-colors">{p.title}</h4>
              <p className="text-xs text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm">
          <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Publicaciones
          </h3>
          <div className="flex flex-col gap-4">
            {publications.map((pub, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-light/50 dark:bg-dark-border/20 hover:bg-primary/5 transition-colors">
                <div>
                  <div className="text-sm font-medium text-slate-text dark:text-white">{pub.title}</div>
                  <div className="text-[11px] text-slate-text/60 dark:text-dark-text/60">{pub.type} · {pub.date}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-primary/50 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm">
          <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5 flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-primary" />
            Convocatorias Abiertas
          </h3>
          <div className="flex flex-col gap-4">
            {calls.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-light/50 dark:bg-dark-border/20 hover:bg-primary/5 transition-colors">
                <div>
                  <div className="text-sm font-medium text-slate-text dark:text-white">{c.title}</div>
                  <div className="text-[11px] text-slate-text/60 dark:text-dark-text/60">{c.area} · Cierre: {c.deadline}</div>
                </div>
                <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 shrink-0">Activo</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/5 border border-primary/10 dark:border-dark-border/40 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Sprout className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-slate-text dark:text-white">Semilleros de Investigación</h3>
        </div>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-6 max-w-3xl">
          Grupos de estudiantes que desarrollan capacidades investigativas bajo la mentoría de docentes,
          fomentando el pensamiento crítico y la innovación desde los primeros ciclos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Tecnología e Innovación', 'Ciencias de la Salud', 'Agroecología', 'Gestión Empresarial'].map((s, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/60 dark:bg-dark-card/60 border border-primary/5 dark:border-dark-border/30 text-center">
              <div className="text-sm font-semibold text-slate-text dark:text-white">{s}</div>
              <div className="text-[10px] text-slate-text/50 dark:text-dark-text/50 mt-1">{8 + i * 3} integrantes</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
