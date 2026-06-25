import React from 'react';
import { Shield, FileText, Scale, BarChart3, Search, Download, Eye, ChevronRight, FileSpreadsheet, Users, Building2, Landmark } from 'lucide-react';

const documents = [
  { title: 'Plan Estratégico Institucional 2024-2030', type: 'PDF', size: '2.4 MB', date: '2024' },
  { title: 'Reglamento Interno del IESTP Suiza', type: 'PDF', size: '1.8 MB', date: '2024' },
  { title: 'Plan Operativo Institucional 2026', type: 'PDF', size: '3.1 MB', date: '2026' },
  { title: 'Manual de Organización y Funciones', type: 'PDF', size: '4.2 MB', date: '2024' }
];

const norms = [
  { title: 'Ley N° 30512 - Ley de Educación Superior Tecnológica', type: 'Ley' },
  { title: 'DS N° 010-2023-MINEDU - Reglamento de Licenciamiento', type: 'Decreto Supremo' },
  { title: 'R.D. N° 045-2024-IESTP Suiza - Directiva Académica 2024', type: 'Resolución Directoral' },
  { title: 'R.D. N° 078-2025-IESTP Suiza - Régimen de Estudios', type: 'Resolución Directoral' }
];

const reports = [
  { title: 'Informe de Gestión 2025', period: 'Ene - Dic 2025', icon: BarChart3 },
  { title: 'Ejecución Presupuestal I Trimestre 2026', period: 'Ene - Mar 2026', icon: FileSpreadsheet },
  { title: 'Informe de Licenciamiento Institucional', period: '2024', icon: FileText },
  { title: 'Memoria Anual del IESTP Suiza', period: '2025', icon: Landmark }
];

export default function Transparency({ t }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      <div className="bg-circle-1 top-10 right-10"></div>
      <div className="bg-circle-2 bottom-10 left-10"></div>

      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary flex items-center justify-center mx-auto mb-4">
          <Shield className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
          Transparencia
        </h2>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          Accede a la información institucional, documentos de gestión, normativas e informes.
          Garantizamos el derecho al acceso a la información pública.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        {[
          { icon: FileText, value: '24+', label: 'Documentos' },
          { icon: Scale, value: '18+', label: 'Normativas' },
          { icon: BarChart3, value: '12+', label: 'Informes' },
          { icon: Eye, value: '100%', label: 'Transparencia' }
        ].map((stat, i) => (
          <div key={i} className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 text-center shadow-sm hover:scale-[1.03] transition-transform">
            <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-xl font-extrabold text-slate-text dark:text-white">{stat.value}</div>
            <div className="text-[11px] text-slate-text/60 dark:text-dark-text/60">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm">
          <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Documentos de Gestión
          </h3>
          <div className="flex flex-col gap-3">
            {documents.map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-light/50 dark:bg-dark-border/20 hover:bg-primary/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-primary/60 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-text dark:text-white group-hover:text-primary transition-colors">{doc.title}</div>
                    <div className="text-[10px] text-slate-text/50 dark:text-dark-text/50">{doc.type} · {doc.size} · {doc.date}</div>
                  </div>
                </div>
                <Download className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm">
          <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5 flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            Normativas
          </h3>
          <div className="flex flex-col gap-3">
            {norms.map((norm, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-light/50 dark:bg-dark-border/20 hover:bg-primary/5 transition-colors group cursor-pointer">
                <div className="flex items-center gap-3">
                  <Scale className="w-4 h-4 text-primary/60 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-text dark:text-white group-hover:text-primary transition-colors">{norm.title}</div>
                    <div className="text-[10px] text-slate-text/50 dark:text-dark-text/50">{norm.type}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-slate-text dark:text-white mb-6 flex items-center gap-2.5">
          <BarChart3 className="w-6 h-6 text-primary" />
          Informes y Reportes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reports.map((r, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <r.icon className="w-5 h-5 text-primary mb-3" />
              <h4 className="text-sm font-bold text-slate-text dark:text-white group-hover:text-primary transition-colors">{r.title}</h4>
              <p className="text-[11px] text-slate-text/50 dark:text-dark-text/50 mt-1">{r.period}</p>
              <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-primary">
                Ver informe <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 dark:from-primary/10 dark:to-secondary/5 border border-primary/10 dark:border-dark-border/40 shadow-sm text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Search className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-slate-text dark:text-white">Portal de Transparencia</h3>
        </div>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-6 max-w-2xl mx-auto">
          Consulta toda la información institucional a través de nuestro Portal de Transparencia Estándar,
          en cumplimiento de la Ley de Transparencia y Acceso a la Información Pública.
        </p>
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
          Ir al Portal de Transparencia
        </button>
      </div>
    </div>
  );
}
