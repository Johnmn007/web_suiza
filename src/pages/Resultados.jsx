import React from 'react';
import { Trophy, Search, User, Award, Calendar, MapPin } from 'lucide-react';

const results = [
  { position: 1, name: 'Luis Fernando García Rojas', career: 'Desarrollo de Sistemas', score: 96, color: 'from-yellow-400 to-amber-500' },
  { position: 2, name: 'Carmen Elena Saldaña Pisco', career: 'Enfermería Técnica', score: 93, color: 'from-gray-300 to-slate-400' },
  { position: 3, name: 'Raúl Andrés Vega Tello', career: 'Mecatrónica Automotriz', score: 91, color: 'from-amber-600 to-orange-700' },
];

export default function Resultados() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-20 right-10"></div>
      <div className="bg-circle-2 bottom-20 left-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Resultados de Admisión</h2>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-3">Ingresantes al semestre 2026-II del IESTP Suiza.</p>
      </div>

      <div className="space-y-5">
        {results.map((r, i) => (
          <div key={i} className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center shadow-md shrink-0`}>
              <span className="text-lg font-extrabold text-white">#{r.position}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-text dark:text-white">{r.name}</h3>
              <p className="text-xs text-slate-text/60 dark:text-dark-text/60">{r.career}</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-extrabold text-primary dark:text-secondary">{r.score}</div>
              <div className="text-[10px] text-slate-text/40 dark:text-dark-text/40">puntos</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 text-center">
        <p className="text-xs text-slate-text/60 dark:text-dark-text/60">
          Para consultar tu resultado individual, visita la sección de{' '}
          <a href="/admission" className="text-primary dark:text-secondary font-semibold hover:underline">Seguimiento del Examen de Admisión</a> e ingresa tu DNI.
        </p>
      </div>
    </div>
  );
}
