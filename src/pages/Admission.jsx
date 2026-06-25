import React, { useState } from 'react';
import { Search, User, Calendar, CheckCircle, XCircle, Clock, Award, DollarSign, ClipboardCheck, Trophy, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admission({ t }) {
  const [dniInput, setDniInput] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [trackingLoading, setTrackingLoading] = useState(false);
  const [trackingError, setTrackingError] = useState('');

  const mockResults = {
    '12345678': {
      nombre: 'Carlos Alejandro Ríos Paredes',
      carrera: 'Desarrollo de Sistemas de Información',
      estado: 'admitido',
      puntaje: 87,
      vacante: 1,
      modalidad: 'Ingreso Ordinario',
      fechaExamen: '15 de junio, 2026'
    },
    '87654321': {
      nombre: 'María Esther Torres López',
      carrera: 'Enfermería Técnica',
      estado: 'pendiente',
      puntaje: null,
      vacante: null,
      modalidad: 'Ingreso Ordinario',
      fechaExamen: '15 de junio, 2026'
    },
    '45678912': {
      nombre: 'Pedro Antonio Huamán Silva',
      carrera: 'Mecatrónica Automotriz',
      estado: 'no_admitido',
      puntaje: 52,
      vacante: null,
      modalidad: 'Primeros Puestos',
      fechaExamen: '15 de junio, 2026'
    }
  };

  const handleTrackingSearch = (e) => {
    e.preventDefault();
    if (!dniInput.trim() || dniInput.trim().length < 8) {
      setTrackingError('Ingresa un DNI válido (8 dígitos)');
      setTrackingResult(null);
      return;
    }
    setTrackingLoading(true);
    setTrackingError('');
    setTrackingResult(null);
    setTimeout(() => {
      const result = mockResults[dniInput.trim()];
      if (result) {
        setTrackingResult(result);
      } else {
        setTrackingError('No se encontraron resultados para este DNI. Verifica el número ingresado.');
      }
      setTrackingLoading(false);
    }, 1200);
  };

  const statusConfig = {
    registrado: { icon: Clock, label: 'Registrado', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/30' },
    exam_programado: { icon: Calendar, label: 'Examen Programado', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10', border: 'border-amber-200 dark:border-amber-500/30' },
    exam_rendido: { icon: CheckSquare, label: 'Examen Rendido', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10', border: 'border-purple-200 dark:border-purple-500/30' },
    admitido: { icon: CheckCircle, label: 'Admitido', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-200 dark:border-emerald-500/30' },
    no_admitido: { icon: XCircle, label: 'No Admitido', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-500/10', border: 'border-rose-200 dark:border-rose-500/30' },
    pendiente: { icon: Clock, label: 'Resultados Pendientes', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10', border: 'border-amber-200 dark:border-amber-500/30' }
  };

  const steps = [
    { stage: 'registrado', label: 'Registro' },
    { stage: 'exam_programado', label: 'Programación' },
    { stage: 'exam_rendido', label: 'Examen' },
    { stage: 'admitido', label: 'Resultado' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      <div className="bg-circle-1 top-20 right-10"></div>
      <div className="bg-circle-2 bottom-20 left-10"></div>

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
          {t.nav.admission}
        </h2>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          Inicia tu camino hacia la excelencia académica. Conoce los requisitos de admisión y resuelve tus dudas.
        </p>
      </div>

      {/* Seguimiento del Examen de Admisión */}
      <div className="mb-16 bg-white dark:bg-dark-card rounded-2xl border border-primary/10 dark:border-dark-border/40 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary p-6 md:p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Search className="w-6 h-6" />
            <h3 className="text-xl md:text-2xl font-bold">Seguimiento del Examen de Admisión</h3>
          </div>
          <p className="text-sm text-white/80 max-w-xl">Consulta los resultados de tu examen de admisión ingresando tu número de DNI.</p>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleTrackingSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-text/40 dark:text-dark-text/40" />
              <input
                type="text"
                value={dniInput}
                onChange={(e) => { setDniInput(e.target.value.replace(/\D/g, '').slice(0, 8)); setTrackingError(''); }}
                placeholder="Ingresa tu DNI (8 dígitos)"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary/10 dark:border-dark-border/40 bg-slate-light/50 dark:bg-dark-border/20 text-slate-text dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={trackingLoading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 justify-center cursor-pointer"
            >
              {trackingLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Consultando...
                </span>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Consultar
                </>
              )}
            </button>
          </form>

          {trackingError && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm flex items-start gap-2">
              <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{trackingError}</span>
            </div>
          )}

          {trackingResult && (
            <div className="space-y-5 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className={`p-5 rounded-xl ${statusConfig[trackingResult.estado]?.bg} ${statusConfig[trackingResult.estado]?.border} border`}>
                <div className="flex items-center gap-3 mb-1">
                  {React.createElement(statusConfig[trackingResult.estado]?.icon || Clock, { className: `w-6 h-6 ${statusConfig[trackingResult.estado]?.color}` })}
                  <div>
                    <span className={`text-sm font-bold ${statusConfig[trackingResult.estado]?.color}`}>
                      {statusConfig[trackingResult.estado]?.label}
                    </span>
                    <p className="text-lg font-extrabold text-slate-text dark:text-white">{trackingResult.nombre}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-light/50 dark:bg-dark-border/20 border border-primary/5">
                  <span className="text-[10px] font-semibold text-slate-text/50 dark:text-dark-text/50 uppercase tracking-wider">Carrera Postulada</span>
                  <p className="text-sm font-bold text-slate-text dark:text-white mt-1">{trackingResult.carrera}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-light/50 dark:bg-dark-border/20 border border-primary/5">
                  <span className="text-[10px] font-semibold text-slate-text/50 dark:text-dark-text/50 uppercase tracking-wider">Modalidad</span>
                  <p className="text-sm font-bold text-slate-text dark:text-white mt-1">{trackingResult.modalidad}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-light/50 dark:bg-dark-border/20 border border-primary/5">
                  <span className="text-[10px] font-semibold text-slate-text/50 dark:text-dark-text/50 uppercase tracking-wider">Fecha del Examen</span>
                  <p className="text-sm font-bold text-slate-text dark:text-white mt-1">{trackingResult.fechaExamen}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-light/50 dark:bg-dark-border/20 border border-primary/5">
                  <span className="text-[10px] font-semibold text-slate-text/50 dark:text-dark-text/50 uppercase tracking-wider">Puntaje Final</span>
                  <p className={`text-sm font-bold mt-1 ${trackingResult.puntaje != null ? (trackingResult.puntaje >= 70 ? 'text-emerald-500' : 'text-rose-500') : 'text-amber-500'}`}>
                    {trackingResult.puntaje != null ? `${trackingResult.puntaje}/100` : '—'}
                  </p>
                </div>
              </div>

              {trackingResult.estado === 'admitido' && (
                <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-200 dark:border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">¡Felicidades! Has sido admitido</span>
                  </div>
                  <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">
                    Vacante asignada. Acércate a nuestras instalaciones para formalizar tu matrícula con los documentos requeridos.
                  </p>
                </div>
              )}

              {trackingResult.estado === 'no_admitido' && (
                <div className="p-5 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-rose-500" />
                    <span className="text-sm font-bold text-rose-600 dark:text-rose-400">No alcanzaste una vacante en esta convocatoria</span>
                  </div>
                  <p className="text-xs text-rose-600/70 dark:text-rose-400/70">
                    Te invitamos a postular nuevamente en la próxima convocatoria. Puedes contactarnos para recibir orientación vocacional.
                  </p>
                </div>
              )}

              {trackingResult.estado === 'pendiente' && (
                <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-bold text-amber-600 dark:text-amber-400">Resultados aún no publicados</span>
                  </div>
                  <p className="text-xs text-amber-600/70 dark:text-amber-400/70">
                    Los resultados de tu examen están siendo procesados. Vuelve a consultar en los próximos días.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-primary/5">
            <p className="text-[10px] text-slate-text/40 dark:text-dark-text/40 text-center">
              Los resultados mostrados tienen carácter informativo. Para consultas oficiales, acércate a nuestras instalaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Accesos Directos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {[
          { label: 'Cronograma', path: '/cronograma', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
          { label: 'Costos y Tasas', path: '/costos', icon: DollarSign, color: 'from-rose-500 to-pink-500' },
          { label: 'Requisitos', path: '/requisitos', icon: ClipboardCheck, color: 'from-amber-500 to-orange-500' },
          { label: 'Resultados', path: '/resultados', icon: Trophy, color: 'from-emerald-500 to-teal-500' },
          { label: 'Preinscripción', path: '/preinscripcion', icon: UserPlus, color: 'from-violet-500 to-purple-500' }
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all text-center"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-[11px] font-semibold text-slate-text dark:text-white leading-tight">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
