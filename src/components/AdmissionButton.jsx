import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, FileText, Users, CheckCircle2, ArrowRight, X, Download, PhoneIcon, Mail } from 'lucide-react';

export default function AdmissionButton({ t, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  // Calcular días restantes hasta fin de admisión (ejemplo: 31 de diciembre 2026)
  useEffect(() => {
    const admissionDeadline = new Date('2026-12-31');
    const today = new Date();
    const difference = admissionDeadline - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    setDaysRemaining(Math.max(days, 0));
  }, []);

  const admissionSteps = [
    {
      step: 1,
      title: 'Registro',
      description: 'Crea tu cuenta y completa datos básicos',
      icon: Users,
      status: 'active'
    },
    {
      step: 2,
      title: 'Documentos',
      description: 'Sube los requisitos necesarios',
      icon: FileText,
      status: 'pending'
    },
    {
      step: 3,
      title: 'Examen',
      description: 'Realiza el examen de admisión',
      icon: CheckCircle2,
      status: 'pending'
    },
    {
      step: 4,
      title: 'Resultados',
      description: 'Revisa los resultados oficiales',
      icon: Calendar,
      status: 'pending'
    }
  ];

  const stats = [
    { label: 'Postulantes', value: '2,400+', icon: Users },
    { label: 'Programas', value: '15+', icon: FileText },
    { label: 'Becas', value: '180+', icon: CheckCircle2 },
  ];

  return (
    <>
      {/* Botón Principal - Reemplaza el anterior */}
      <button
        onClick={() => setIsOpen(true)}
        className={className || "group relative px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/40 text-white font-bold text-sm tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer overflow-hidden"}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        
        {/* Content */}
        <div className="relative flex items-center gap-2">
          <Calendar className="w-4 h-4 animate-pulse" />
          <span>{t.nav.admission}</span>
          {daysRemaining > 0 && (
            <span className="ml-1.5 px-2 py-1 rounded-lg bg-white/20 text-xs font-semibold">
              {daysRemaining}d
            </span>
          )}
        </div>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Modal Mejorado */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full md:w-2xl bg-white dark:bg-dark-card rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:zoom-in-95 duration-300">
            
            {/* Header con Gradient */}
            <div className="relative bg-gradient-to-br from-primary to-primary-dark text-white p-6 md:p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-xl transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-8">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                  Admisión 2026
                </h2>
                <p className="text-white/85 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {daysRemaining > 0 
                    ? `${daysRemaining} días para postular`
                    : 'Período de admisión cerrado'}
                </p>
              </div>

              {/* Contador visual */}
              {daysRemaining > 0 && (
                <div className="mt-6 p-4 bg-white/15 rounded-2xl border border-white/20 backdrop-blur-sm">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold">{daysRemaining}</span>
                    <span className="text-white/75 font-semibold">días restantes</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1 mt-3 overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-500"
                      style={{width: `${Math.min((daysRemaining / 365) * 100, 100)}%`}}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Contenido Principal */}
            <div className="p-6 md:p-8 flex flex-col gap-8">

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-light dark:bg-dark-border/40 text-center hover:shadow-md transition-all">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-text dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline del Proceso */}
              <div>
                <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5">
                  Proceso de Admisión
                </h3>
                <div className="space-y-3">
                  {admissionSteps.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                          item.status === 'active'
                            ? 'bg-primary text-white shadow-lg shadow-primary/50'
                            : 'bg-slate-light dark:bg-dark-border text-slate-text dark:text-dark-text'
                        }`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        {idx < admissionSteps.length - 1 && (
                          <div className="w-1 h-12 bg-primary/20 mt-2"></div>
                        )}
                      </div>
                      <div className="pt-1.5">
                        <h4 className="font-bold text-slate-text dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-text/70 dark:text-dark-text/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Información de Contacto */}
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40">
                <h4 className="font-bold text-slate-text dark:text-white mb-3">
                  ¿Necesitas ayuda?
                </h4>
                <div className="space-y-2 text-sm">
                  <a href="tel:061280665" className="flex items-center gap-3 text-slate-text/75 dark:text-dark-text/75 hover:text-primary transition-colors">
                    <PhoneIcon className="w-4 h-4 text-primary" />
                    061-280665
                  </a>
                  <a href="mailto:suiza@iestpsuiza.edu.pe" className="flex items-center gap-3 text-slate-text/75 dark:text-dark-text/75 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    suiza@iestpsuiza.edu.pe
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-light dark:border-dark-border">
                <Link
                  to="/admission"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/40 text-white font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  Ver Requisitos Completos
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => {
                    // Aquí puedes agregar funcionalidad para descargar prospecto
                    alert('Se descargará el prospecto de admisión 2026');
                  }}
                  className="w-full px-6 py-3 rounded-2xl border-2 border-primary text-primary dark:text-secondary hover:bg-primary/5 dark:hover:bg-primary/10 font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Descargar Prospecto
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-3 rounded-2xl text-slate-text/60 dark:text-dark-text/60 hover:text-slate-text dark:hover:text-dark-text font-semibold text-sm transition-all"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
