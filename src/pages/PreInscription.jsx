import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, BookOpen, Calendar, FileText } from 'lucide-react';

const programas = [
  'Desarrollo de Sistemas de Información',
  'Enfermería Técnica',
  'Mecatrónica Automotriz',
  'Producción Agropecuaria',
  'Manejo Forestal',
  'Contabilidad',
  'Administración de Empresas',
  'Construcción Civil',
  'Electricidad Industrial',
  'Administración Turística',
  'Asistencia Administrativa'
];

export default function PreInscription() {
  const [form, setForm] = useState({
    nombres: '',
    apellidos: '',
    dni: '',
    fechaNac: '',
    celular: '',
    email: '',
    direccion: '',
    programa: '',
    procedencia: '',
    enteraste: ''
  });
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.programa || !form.nombres || !form.apellidos || !form.dni) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto py-16 px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-text dark:text-white mb-2">¡Preinscripción exitosa!</h2>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-6">
          Hemos recibido tus datos. Te contactaremos al {form.celular} para coordinar los siguientes pasos.
        </p>
        <button
          onClick={() => { setSubmitted(false); setStep(1); setForm({ nombres: '', apellidos: '', dni: '', fechaNac: '', celular: '', email: '', direccion: '', programa: '', procedencia: '', enteraste: '' }); }}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        >
          Nueva Preinscripción
        </button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 rounded-xl bg-slate-light/50 dark:bg-dark-border/30 border border-slate-200 dark:border-dark-border/40 text-sm text-slate-text dark:text-dark-text placeholder:text-slate-text/40 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all";
  const labelClass = "text-xs font-semibold text-slate-text/70 dark:text-dark-text/70 uppercase tracking-wider";

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="bg-circle-1 top-10 left-10"></div>
      <div className="bg-circle-2 bottom-10 right-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary flex items-center justify-center mx-auto mb-4">
          <FileText className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-text dark:text-white tracking-tight">
          Preinscripción
        </h2>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-2">
          Completa tus datos para preinscribirte en el IESTP Suiza. Proceso gratuito y sin compromiso.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= s ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-dark-border/50 text-slate-text/40'}`}>
                {s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 rounded transition-all ${step > s ? 'bg-primary' : 'bg-slate-200 dark:bg-dark-border/50'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 p-6 md:p-8 shadow-[0_20px_50px_rgba(75,122,244,0.05)]">
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold text-slate-text dark:text-white flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Datos Personales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Nombres *</label>
                  <input className={inputClass} placeholder="Juan Carlos" value={form.nombres} onChange={e => update('nombres', e.target.value)} required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Apellidos *</label>
                  <input className={inputClass} placeholder="García Pérez" value={form.apellidos} onChange={e => update('apellidos', e.target.value)} required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>DNI *</label>
                  <input className={inputClass} placeholder="12345678" maxLength={8} value={form.dni} onChange={e => update('dni', e.target.value.replace(/\D/g, ''))} required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Fecha de Nacimiento *</label>
                  <input type="date" className={inputClass} value={form.fechaNac} onChange={e => update('fechaNac', e.target.value)} required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Celular *</label>
                  <input className={inputClass} placeholder="987654321" maxLength={9} value={form.celular} onChange={e => update('celular', e.target.value.replace(/\D/g, ''))} required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Correo Electrónico</label>
                  <input type="email" className={inputClass} placeholder="correo@ejemplo.com" value={form.email} onChange={e => update('email', e.target.value)} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Dirección</label>
                <input className={inputClass} placeholder="Jr. Los Olivos 123, Pucallpa" value={form.direccion} onChange={e => update('direccion', e.target.value)} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold text-slate-text dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Programa y Procedencia
              </h3>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Programa de Estudio *</label>
                <select className={inputClass} value={form.programa} onChange={e => update('programa', e.target.value)} required>
                  <option value="">Selecciona un programa</option>
                  {programas.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Colegio de Procedencia</label>
                  <input className={inputClass} placeholder="Nombre del colegio" value={form.procedencia} onChange={e => update('procedencia', e.target.value)} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>¿Cómo te enteraste?</label>
                  <select className={inputClass} value={form.enteraste} onChange={e => update('enteraste', e.target.value)}>
                    <option value="">Selecciona</option>
                    <option value="Redes Sociales">Redes Sociales</option>
                    <option value="Amigos/Familiares">Amigos / Familiares</option>
                    <option value="Colegio">Colegio</option>
                    <option value="Radio/TV">Radio / TV</option>
                    <option value="Página Web">Página Web</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold text-slate-text dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Revisa tus datos
              </h3>
              <div className="rounded-2xl bg-slate-light/50 dark:bg-dark-border/20 p-5 flex flex-col gap-3 text-sm">
                {[
                  ['Nombres', form.nombres],
                  ['Apellidos', form.apellidos],
                  ['DNI', form.dni],
                  ['Celular', form.celular],
                  ['Email', form.email || '—'],
                  ['Programa', form.programa],
                  ['Procedencia', form.procedencia || '—']
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between border-b border-slate-200/50 dark:border-dark-border/30 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-text/60 dark:text-dark-text/60">{l}</span>
                    <span className="font-medium text-slate-text dark:text-dark-text">{v}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-text/50 dark:text-dark-text/50 text-center">
                Al enviar confirmas que los datos proporcionados son correctos.
              </p>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-5 border-t border-slate-100 dark:border-dark-border/30">
            {step > 1 ? (
              <button type="button" onClick={() => setStep(s => s - 1)} className="px-5 py-2.5 rounded-xl bg-slate-light dark:bg-dark-border/30 text-slate-text dark:text-dark-text font-medium text-sm hover:bg-slate-200 dark:hover:bg-dark-border/50 transition-all cursor-pointer">
                Anterior
              </button>
            ) : <div />}
            {step < 3 ? (
              <button type="button" onClick={() => setStep(s => s + 1)} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                Siguiente
              </button>
            ) : (
              <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 transition-all cursor-pointer">
                <Send className="w-4 h-4" />
                Enviar Preinscripción
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
