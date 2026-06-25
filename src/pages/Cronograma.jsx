import React from 'react';
import { Calendar, CheckCircle, FileText, ClipboardCheck, CreditCard, UserCheck } from 'lucide-react';

const events = [
  { date: '01 Jun - 30 Jul', label: 'Inscripciones', desc: 'Registro de postulantes en la página web y oficina de admisión.', icon: FileText, color: 'from-blue-500 to-cyan-500' },
  { date: '01 Ago', label: 'Cierre de Inscripciones', desc: 'Fecha límite para el registro de nuevos postulantes.', icon: ClipboardCheck, color: 'from-rose-500 to-pink-500' },
  { date: '05 Ago - 09 Ago', label: 'Publicación de Aula y Horario', desc: 'Se publica el aula y horario del examen de admisión.', icon: Calendar, color: 'from-amber-500 to-orange-500' },
  { date: '15 Ago', label: 'Examen de Admisión', desc: 'Evaluación escrita a las 8:00 am en las instalaciones del IESTP Suiza.', icon: CheckCircle, color: 'from-emerald-500 to-teal-500' },
  { date: '20 Ago', label: 'Publicación de Resultados', desc: 'Lista de ingresantes publicada en la página web y en el instituto.', icon: UserCheck, color: 'from-violet-500 to-purple-500' },
  { date: '22 Ago - 05 Set', label: 'Matrícula de Ingresantes', desc: 'Formalización de matrícula para los nuevos estudiantes admitidos.', icon: CreditCard, color: 'from-green-500 to-lime-500' }
];

export default function Cronograma() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-20 right-10"></div>
      <div className="bg-circle-2 bottom-20 left-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Cronograma 2026-II</h2>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-3">Fechas importantes del proceso de admisión para el semestre 2026-II.</p>
      </div>

      <div className="flex flex-col gap-5">
        {events.map((e, i) => (
          <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all group">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${e.color} flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform`}>
              <e.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-primary tracking-widest uppercase">{e.date}</div>
              <h3 className="text-sm font-bold text-slate-text dark:text-white mt-0.5">{e.label}</h3>
              <p className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-1 leading-relaxed">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
