import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { ChevronDown, ChevronUp, FileText, CheckSquare, Award } from 'lucide-react';

export default function Admission({ t }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqItems = [
    { id: 1, question: t.faq.q1, answer: t.faq.a1 },
    { id: 2, question: t.faq.q2, answer: t.faq.a2 },
    { id: 3, question: t.faq.q3, answer: t.faq.a3 },
    { id: 4, question: t.faq.q4, answer: t.faq.a4 }
  ];

  const requirements = [
    "Certificado oficial de estudios secundarios completos.",
    "Copia simple de Documento Nacional de Identidad (DNI) vigente.",
    "Partida de nacimiento original.",
    "2 Fotografías tamaño carnet en fondo blanco.",
    "Recibo de pago por derecho de inscripción al examen."
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

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

      {/* Content Split: Left (Requirements & FAQs) | Right (Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Requirements & FAQs */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          {/* Section: Requirements */}
          <div className="text-left bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 p-6 md:p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-slate-text dark:text-white flex items-center gap-2.5 mb-5 border-b border-primary/5 pb-3">
              <FileText className="w-5 h-5 text-primary" />
              <span>Requisitos de Postulación</span>
            </h3>
            
            <ul className="flex flex-col gap-3.5 text-sm md:text-base text-slate-text/80 dark:text-dark-text/80">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-2 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <Award className="w-4 h-4" />
              <span>Modalidades de Ingreso Libre para Primeros Puestos y Deportistas Calificados</span>
            </div>
          </div>

          {/* Section: FAQs (Adapted from example1.jpg options) */}
          <div className="text-left">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-text dark:text-white">
                {t.faq.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 mt-1">
                {t.faq.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {faqItems.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 overflow-hidden transition-all duration-300 shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-light/40 dark:hover:bg-dark-border/20 transition-all font-semibold text-sm md:text-base text-slate-text dark:text-white cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed border-t border-primary/5 animate-in slide-in-from-top-2 duration-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Form card */}
        <div className="lg:col-span-5 w-full">
          <ContactForm t={t} />
        </div>

      </div>
    </div>
  );
}
