import React, { useState } from 'react';
import { 
  Code, Heart, Truck, Sprout, Trees, Calculator, 
  Briefcase, HardHat, Bolt, Compass, FolderClosed, 
  Calendar, Check, ChevronDown, ChevronUp, Star 
} from 'lucide-react';

export default function Careers({ t }) {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCareer, setExpandedCareer] = useState(null);

  // Icon selector based on career ID
  const getCareerIcon = (id) => {
    switch (id) {
      case 'sys': return <Code className="w-6 h-6" />;
      case 'enfer': return <Heart className="w-6 h-6" />;
      case 'meca': return <Truck className="w-6 h-6" />;
      case 'agro': return <Sprout className="w-6 h-6" />;
      case 'forest': return <Trees className="w-6 h-6" />;
      case 'cont': return <Calculator className="w-6 h-6" />;
      case 'admin': return <Briefcase className="w-6 h-6" />;
      case 'civil': return <HardHat className="w-6 h-6" />;
      case 'elec': return <Bolt className="w-6 h-6" />;
      case 'tur': return <Compass className="w-6 h-6" />;
      case 'asist': return <FolderClosed className="w-6 h-6" />;
      default: return <FolderClosed className="w-6 h-6" />;
    }
  };

  const filteredCareers = activeTab === 'all' 
    ? t.careers.items 
    : t.careers.items.filter(c => c.category === activeTab);

  const toggleExpand = (id) => {
    setExpandedCareer(expandedCareer === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      {/* Background glowing circles */}
      <div className="bg-circle-1 bottom-10 left-10"></div>
      <div className="bg-circle-2 top-80 right-20"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
          {t.careers.title}
        </h2>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          {t.careers.subtitle}
        </p>
      </div>

      {/* Categories Filter Tabs (similar design to model.jpg tabs) */}
      <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 p-1.5 rounded-2xl shadow-sm">
          {[
            { id: 'all', label: t.careers.categories.all },
            { id: 'tech', label: t.careers.categories.tech },
            { id: 'business', label: t.careers.categories.business },
            { id: 'field', label: t.careers.categories.field }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setExpandedCareer(null); }}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-slate-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Careers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCareers.map((c) => {
          const isExpanded = expandedCareer === c.id;
          return (
            <div
              key={c.id}
              className={`group p-6 rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 transition-all duration-300 flex flex-col justify-between text-left shadow-[0_10px_35px_-5px_rgba(75,122,244,0.02)] hover:shadow-[0_15px_40px_-5px_rgba(75,122,244,0.08)] dark:hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.3)] hover:-translate-y-1 ${
                isExpanded ? 'ring-2 ring-primary/40' : ''
              }`}
            >
              <div>
                {/* Icon header in folder style */}
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {getCareerIcon(c.id)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-text/50 dark:text-dark-text/50 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>3 Años</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-text dark:text-white mb-2 leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {c.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed mb-6">
                  {c.desc}
                </p>
              </div>

              {/* Progress and Action Footer */}
              <div>
                {/* Progress bar representing Employability Rate (similar style to model.jpg task bars) */}
                <div className="w-full mb-6">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-semibold text-slate-text/70 dark:text-dark-text/70 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>{t.careers.employability}</span>
                    </span>
                    <span className="font-bold text-primary dark:text-secondary">{c.employabilityRate}%</span>
                  </div>
                  <div className="w-full bg-slate-light dark:bg-dark-border/40 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${c.employabilityRate}%` }}
                    ></div>
                  </div>
                </div>

                {/* Toggle details button */}
                <button
                  onClick={() => toggleExpand(c.id)}
                  className="w-full py-3 rounded-xl border border-primary/15 dark:border-dark-border hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-text dark:text-dark-text font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{t.careers.viewCurriculum}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Expandable Syllabus section */}
                {isExpanded && (
                  <div className="mt-4 p-4 rounded-2xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 text-xs text-slate-text/80 dark:text-dark-text/80 animate-in slide-in-from-top-2 duration-300">
                    <h4 className="font-bold uppercase tracking-wider mb-2.5 text-primary">Módulos Técnicos Principales:</h4>
                    <ul className="flex flex-col gap-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>Módulo I: Fundamentos y Soporte Técnico Operativo (Semestre 1 y 2)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>Módulo II: Desarrollo de Soluciones y Procesos Especializados (Semestre 3 y 4)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>Módulo III: Gestión Estratégica e Innovación Tecnológica (Semestre 5 y 6)</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
