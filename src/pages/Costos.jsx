import React from 'react';
import { DollarSign, CreditCard, FileText, BadgePercent, Landmark, Receipt } from 'lucide-react';

const fees = [
  { label: 'Derecho de Inscripción', amount: 'S/ 50.00', note: 'Pago único por proceso de admisión', icon: FileText, color: 'from-blue-500 to-cyan-500' },
  { label: 'Examen de Admisión', amount: 'S/ 80.00', note: 'Incluye evaluación escrita y entrevista', icon: BadgePercent, color: 'from-rose-500 to-pink-500' },
  { label: 'Matrícula Semestral', amount: 'S/ 200.00', note: 'Por semestre académico', icon: CreditCard, color: 'from-amber-500 to-orange-500' },
  { label: 'Carnet de Estudiante', amount: 'S/ 15.00', note: 'Carnet institucional con validez oficial', icon: Receipt, color: 'from-emerald-500 to-teal-500' },
  { label: 'Constancia de Ingreso', amount: 'S/ 10.00', note: 'Para trámites de beca y otros fines', icon: Landmark, color: 'from-violet-500 to-purple-500' },
  { label: 'Centro de Cómputo', amount: 'S/ 25.00/mes', note: 'Acceso a laboratorios y talleres', icon: DollarSign, color: 'from-green-500 to-lime-500' }
];

export default function Costos() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-20 right-10"></div>
      <div className="bg-circle-2 bottom-20 left-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Costos y Tasas</h2>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-3">Conoce los costos del proceso de admisión y formación en el IESTP Suiza.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fees.map((f, i) => (
          <div key={i} className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-slate-text dark:text-white">{f.label}</h3>
                <p className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-0.5">{f.note}</p>
                <div className="mt-2 text-lg font-extrabold text-primary dark:text-secondary">{f.amount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-transparent border border-emerald-200 dark:border-emerald-500/20 text-center">
        <p className="text-xs text-slate-text/60 dark:text-dark-text/60">
          Los costos están sujetos a modificación según disposición institucional. Consulta en nuestra oficina de tesorería.
        </p>
      </div>
    </div>
  );
}
