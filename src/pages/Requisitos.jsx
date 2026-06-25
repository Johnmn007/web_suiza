import React from 'react';
import { FileText, CheckSquare, Award, Fingerprint, Camera, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const reqs = [
  { label: 'Certificado de Estudios Secundarios', desc: 'Certificado oficial de estudios secundarios completos (original y copia).', icon: FileText, color: 'from-blue-500 to-cyan-500' },
  { label: 'Documento Nacional de Identidad', desc: 'Copia simple del DNI vigente del postulante.', icon: Fingerprint, color: 'from-rose-500 to-pink-500' },
  { label: 'Partida de Nacimiento', desc: 'Partida de nacimiento original (emitida por Reniec).', icon: FileText, color: 'from-amber-500 to-orange-500' },
  { label: 'Fotografías', desc: '02 fotografías tamaño carnet en fondo blanco (no instantáneas).', icon: Camera, color: 'from-emerald-500 to-teal-500' },
  { label: 'Voucher de Pago', desc: 'Recibo de pago por derecho de inscripción al examen de admisión.', icon: Receipt, color: 'from-violet-500 to-purple-500' },
  { label: 'Modalidades de Ingreso', desc: 'Libre para primeros puestos y deportistas calificados (presentar constancia).', icon: Award, color: 'from-green-500 to-lime-500' }
];

export default function Requisitos() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
      <div className="bg-circle-1 top-20 right-10"></div>
      <div className="bg-circle-2 bottom-20 left-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Requisitos de Postulación</h2>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-3">Documentación necesaria para tu proceso de admisión al IESTP Suiza.</p>
      </div>

      <div className="flex flex-col gap-4">
        {reqs.map((r, i) => (
          <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all group">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform`}>
              <r.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-[10px] font-bold">{i + 1}</span>
                <h3 className="text-sm font-bold text-slate-text dark:text-white">{r.label}</h3>
              </div>
              <p className="text-xs text-slate-text/60 dark:text-dark-text/60 ml-7">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 text-center">
        <p className="text-xs text-slate-text/60 dark:text-dark-text/60">
          Presenta toda la documentación en la oficina de admisión dentro de las fechas establecidas en el{' '}
          <Link to="/cronograma" className="text-primary dark:text-secondary font-semibold hover:underline">cronograma vigente</Link>.
        </p>
      </div>
    </div>
  );
}
