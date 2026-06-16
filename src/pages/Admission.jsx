import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  CheckSquare, 
  Award, 
  Calendar, 
  Clock, 
  Users, 
  Zap, 
  TrendingUp,
  CreditCard,
  UserCheck,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Info,
  Accessibility
} from 'lucide-react';

export default function Admission({ t }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [showPhysicalModal, setShowPhysicalModal] = useState(false);

  useEffect(() => {
    // Target Date: August 18, 2026 (Real deadline for II Semestre 2026 process)
    const admissionDeadline = new Date('2026-08-18T23:59:59');
    const today = new Date();
    const difference = admissionDeadline - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    setDaysRemaining(Math.max(days, 0));
  }, []);

  const steps = [
    {
      step: "01",
      title: "Realizar el Pago",
      desc: "Cancela la tasa en la Tesorería de la Institución (Carretera Federico Basadre Km 5.700). Tasa ordinaria: S/ 180.00. Conserva el recibo.",
      icon: CreditCard
    },
    {
      step: "02",
      title: "Registrar Inscripción",
      desc: "Presenta tus requisitos físicos en la Oficina de Admisión o regístrate en el portal virtual adjuntando tus documentos digitalizados.",
      icon: FileText
    },
    {
      step: "03",
      title: "Rendir el Examen",
      desc: "Asiste al campus para el Examen de Admisión el 30 de Agosto de 2026 a las 07:30 AM portando tu DNI y ficha de postulante.",
      icon: UserCheck
    },
    {
      step: "04",
      title: "Resultados y Matrícula",
      desc: "Verifica los resultados en el portal el 31 de Agosto e inicia tu matrícula 100% gratuita para comenzar clases en Septiembre.",
      icon: Award
    }
  ];

  const requirements = [
    { title: "Certificado de Estudios original", desc: "De 1° a 5° de Secundaria, visado por la UGEL (si no cuenta con firma digital/código QR)." },
    { title: "Documento Nacional de Identidad", desc: "Copia ampliada y nítida de tu DNI vigente (legible)." },
    { title: "Partida de Nacimiento original", desc: "Expedida por RENIEC o municipalidad de origen, sin enmendaduras." },
    { title: "4 Fotografías actuales", desc: "Tamaño carnet a color, con fondo blanco, vestimenta formal." },
    { title: "Recibo de Pago de Inscripción", desc: "Comprobante de pago original emitido por la Tesorería del Instituto." }
  ];

  const modalities = [
    {
      name: "Examen Ordinario",
      target: "Egresados de secundaria general.",
      cost: "S/ 180.00",
      desc: "Evaluación presencial de aptitud académica y conocimientos generales (50 preguntas)."
    },
    {
      name: "Exoneración de Examen",
      target: "Primeros puestos, deportistas destacados y artistas.",
      cost: "S/ 300.00",
      desc: "Ingreso directo sustentando documentación aprobada por MINEDU."
    },
    {
      name: "Convenios Especiales",
      target: "Comunidades nativas de la Amazonía y personas con discapacidad.",
      cost: "S/ 180.00",
      desc: "Vacantes reservadas por ley con facilidades de postulación directa."
    }
  ];

  const faqItems = [
    {
      question: "¿La formación en el IESTP Suiza tiene algún costo mensual?",
      answer: "No, la educación es 100% gratuita. El instituto es de gestión pública y no cobra mensualidades ni pensiones de enseñanza. Solo se realiza un pago único anual por matrícula."
    },
    {
      question: "¿Cuántas vacantes se ofrecen por programa de estudios?",
      answer: "Generalmente se ofrecen 40 vacantes por turno (diurno/vespertino) para cada una de las 11 especialidades acreditadas, garantizando una educación personalizada de alta calidad en laboratorios."
    },
    {
      question: "¿Dónde puedo hacer mis prácticas pre-profesionales?",
      answer: "Contamos con convenios estratégicos vigentes con el Gobierno Regional de Ucayali, municipalidades, el Hospital Regional de Pucallpa, constructoras, talleres de mecatrónica y empresas agrarias y forestales líderes en toda la Amazonía."
    },
    {
      question: "¿Qué pasa si mis certificados de secundaria están en trámite?",
      answer: "Puedes pre-inscribirte presentando una declaración jurada de compromiso de entrega de documentos. Tienes plazo para regularizar la entrega de tu certificado visado hasta la fecha límite establecida por la Oficina de Admisión."
    }
  ];

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-dark-bg text-[#2D3748] dark:text-dark-text transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-20 px-4 md:px-8 bg-slate-50/50 dark:bg-dark-card/10 border-b border-slate-100 dark:border-dark-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold tracking-wider uppercase mb-2">
              <Zap className="w-3.5 h-3.5" />
              Admisión II Semestre 2026 - Convocatoria Abierta
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A202C] dark:text-white tracking-tight leading-tight transition-colors duration-300">
              Tu Futuro Profesional <br />
              <span className="text-primary">Empieza Hoy</span>
            </h1>
            <p className="text-base md:text-lg text-[#4A5568] dark:text-dark-text/75 leading-relaxed max-w-xl">
              Postula al Instituto Suiza de Pucallpa y fórmate de manera 100% gratuita con certificación a Nombre de la Nación y alta inserción laboral.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="#cronograma"
                className="px-6 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                VER CRONOGRAMA 2026
              </a>
              <button 
                onClick={() => setShowPhysicalModal(true)}
                className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-dark-border dark:text-white font-bold text-xs tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-transparent"
              >
                REQUISITOS FÍSICOS
              </button>
            </div>
          </div>

          {/* Hero Right: Modern Countdown & Stats Board */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            
            {/* Days Countdown Card */}
            <div className="p-6 rounded-[2rem] bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border shadow-[0_15px_40px_rgba(0,0,0,0.02)] text-left transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">CIERRE DE INSCRIPCIONES</span>
                </div>
                <span className="text-[10px] bg-red-500/10 text-red-600 dark:text-red-400 px-2.5 py-1 rounded-full font-bold">
                  Hasta 18 de Agosto
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-primary tracking-tight">
                  {daysRemaining}
                </span>
                <span className="text-sm font-extrabold text-slate-500">
                  Días Restantes
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-dark-border rounded-full h-1.5 mt-4 overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((daysRemaining / 70) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-2.5 leading-relaxed">
                * Las inscripciones se realizan de forma presencial de Lunes a Viernes de 8:00 AM a 4:30 PM en el campus principal.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-sm text-left">
                <TrendingUp className="w-5 h-5 text-primary mb-2" />
                <span className="block text-xl font-extrabold text-[#1A202C] dark:text-white">11 Carreras</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Acreditadas</span>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-sm text-left">
                <Users className="w-5 h-5 text-emerald-500 mb-2" />
                <span className="block text-xl font-extrabold text-[#1A202C] dark:text-white">Gratuito</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Sin Mensualidades</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PASO A PASO DEL PROCESO */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-secondary font-bold text-xs tracking-wider uppercase rounded-full mb-3">
          ¿Cómo Postular?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] dark:text-white tracking-tight mb-16">
          Proceso de Admisión en 4 Pasos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="group relative p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 dark:text-dark-border">{s.step}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-[#1A202C] dark:text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-[#4A5568] dark:text-dark-text/75 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. MODALIDADES Y TASAS (Alternate Background) */}
      <section className="py-20 px-4 md:px-8 bg-slate-50/70 dark:bg-dark-card/20 border-y border-slate-100 dark:border-dark-border/40 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-secondary font-bold text-xs tracking-wider uppercase rounded-full mb-3">
            Tasas Oficiales
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] dark:text-white tracking-tight mb-16">
            Modalidades e Inversión
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {modalities.map((m, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">{m.target}</span>
                  <h3 className="text-xl font-extrabold text-[#1A202C] dark:text-white mb-4">{m.name}</h3>
                  <p className="text-xs text-[#4A5568] dark:text-dark-text/75 leading-relaxed mb-6">{m.desc}</p>
                </div>
                <div className="border-t border-slate-100 dark:border-dark-border/30 pt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold">Derecho de Examen:</span>
                  <span className="text-2xl font-black text-primary">{m.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REQUISITOS Y FORMULARIO */}
      <section id="requisitos" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Requisitos List */}
          <div className="lg:col-span-7 text-left bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/40 p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_35px_rgba(0,0,0,0.015)]">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-100 dark:border-dark-border/30 pb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#1A202C] dark:text-white">Documentación Requerida</h2>
                <p className="text-xs text-slate-400 mt-1">Presentar en folder de manila tamaño A4 con pestaña oficial.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {requirements.map((r, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-dark-border/30 transition-all border border-transparent hover:border-slate-100 dark:hover:border-dark-border/30">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#1A202C] dark:text-white">{r.title}</h4>
                    <p className="text-xs text-[#4A5568] dark:text-dark-text/75 leading-relaxed mt-1">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special alert */}
            <div className="mt-8 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-3 text-left">
              <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-extrabold text-amber-600 dark:text-amber-500 mb-0.5">Postulante por Exoneración</h4>
                <p className="text-[10px] text-amber-600/90 dark:text-amber-500/80 leading-relaxed">
                  Si postulas bajo modalidad de Primer Puesto o Deportista Calificado, debes adjuntar una solicitud dirigida al Director General junto con la resolución oficial aprobatoria original.
                </p>
              </div>
            </div>

          </div>

          {/* Contacto / Registro Virtual */}
          <div className="lg:col-span-5 w-full">
            <ContactForm t={t} />
          </div>

        </div>
      </section>

      {/* 5. CRONOGRAMA OFICIAL (II SEMESTRE 2026) */}
      <section id="cronograma" className="py-20 px-4 md:px-8 bg-slate-50/70 dark:bg-dark-card/20 border-y border-slate-100 dark:border-dark-border/40">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-secondary font-bold text-xs tracking-wider uppercase rounded-full mb-3">
            Cronograma Oficial
          </span>
          <h2 className="text-3xl font-extrabold text-[#1A202C] dark:text-white mb-10 tracking-tight">
            Calendario de Fechas de Admisión II - 2026
          </h2>

          <div className="flex flex-col border border-slate-100 dark:border-dark-border/60 bg-white dark:bg-dark-card rounded-3xl overflow-hidden shadow-sm">
            {[
              { label: "Inscripción de Postulantes (Ordinario II)", date: "08 de Junio al 18 de Agosto de 2026", note: "Presencial en Campus" },
              { label: "Examen de Simulacro CEPRETEC", date: "23 de Agosto de 2026", note: "Inicio: 08:00 AM" },
              { label: "Examen de Admisión Ordinario", date: "30 de Agosto de 2026", note: "Ingreso al campus hasta 07:30 AM" },
              { label: "Publicación de Resultados", date: "31 de Agosto de 2026", note: "Vía portal web oficial" },
              { label: "Inicio de Clases Académicas", date: "07 de Septiembre de 2026", note: "Semestre 2026 - II" }
            ].map((c, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-5 border-b border-slate-100 dark:border-dark-border/40 last:border-0 hover:bg-slate-50 dark:hover:bg-dark-border/20 transition-all ${
                  idx === 2 ? 'bg-primary/5 dark:bg-primary/15' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#1A202C] dark:text-white">{c.label}</h4>
                    <span className="text-[10px] text-slate-400 font-bold block mt-0.5">{c.note}</span>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs font-extrabold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {c.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-extrabold text-[#1A202C] dark:text-white text-center mb-16 tracking-tight">
          Preguntas Frecuentes de Postulantes
        </h2>

        <div className="flex flex-col gap-4">
          {faqItems.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border/50 overflow-hidden transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.005)] hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 dark:hover:bg-dark-border/10 transition-all font-bold text-sm md:text-base text-[#1A202C] dark:text-white cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1.5 text-xs md:text-sm text-[#4A5568] dark:text-dark-text/80 leading-relaxed border-t border-slate-50 dark:border-dark-border/20 bg-slate-50/50 dark:bg-dark-border/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. ADMISSION CONTACT CHANNELS */}
      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto border-t border-slate-100 dark:border-dark-border/40 text-center">
        <h3 className="text-xl font-bold text-[#1A202C] dark:text-white mb-4">¿Necesitas asesoría personalizada?</h3>
        <p className="text-xs text-slate-400 mb-8">Comunícate directamente con la Oficina de Admisión a través de nuestros canales oficiales.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a 
            href="https://wa.me/51961280665" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-5 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 text-[#25D366] font-bold text-xs flex flex-col items-center gap-2.5 transition-all shadow-sm"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Asesoría por WhatsApp</span>
          </a>
          <a 
            href="tel:061280665" 
            className="p-5 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 text-primary font-bold text-xs flex flex-col items-center gap-2.5 transition-all shadow-sm"
          >
            <Phone className="w-6 h-6" />
            <span>Llamar: 061-280665</span>
          </a>
          <a 
            href="mailto:admision@iestpsuiza.edu.pe" 
            className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 hover:bg-amber-500/10 text-amber-600 dark:text-amber-500 font-bold text-xs flex flex-col items-center gap-2.5 transition-all shadow-sm"
          >
            <Mail className="w-6 h-6" />
            <span>admision@iestpsuiza.edu.pe</span>
          </a>
        </div>
      </section>

      {/* PHYSICAL REQUIREMENTS MODAL */}
      {showPhysicalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-dark-card rounded-[2rem] border border-slate-100 dark:border-dark-border max-w-lg w-full p-8 shadow-2xl relative animate-in zoom-in-95 duration-300 text-left">
            
            <button 
              onClick={() => setShowPhysicalModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3.5 mb-6 border-b border-slate-100 dark:border-dark-border/40 pb-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Accessibility className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#1A202C] dark:text-white leading-tight">Aptitud Médica y Requisitos Físicos</h3>
                <p className="text-[10px] text-slate-400 mt-0.5">Exigencia oficial para el proceso de admisión regular.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-[#4A5568] dark:text-dark-text/85 leading-relaxed">
              <p>
                De acuerdo con el Reglamento de Admisión del IESTP Suiza, todos los postulantes a programas técnicos (especialmente en <strong>Enfermería Técnica</strong>, <strong>Producción Agropecuaria</strong> y <strong>Manejo Forestal</strong>) deben constatar aptitud física y mental para el desarrollo de actividades formativas y de campo:
              </p>
              
              <ul className="flex flex-col gap-3.5 mt-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-extrabold mt-0.5">✓</span>
                  <div>
                    <strong>Certificado de Salud original:</strong> Emitido exclusivamente por un establecimiento del Ministerio de Salud (MINSA) o ESSALUD, que valide el buen estado de salud general.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-extrabold mt-0.5">✓</span>
                  <div>
                    <strong>Constancia de Aptitud Física y Mental:</strong> Declaración expedida por un médico cirujano colegiado que garantice que no presenta impedimento severo para realizar esfuerzos físicos o actividades de campo.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-extrabold mt-0.5">✓</span>
                  <div>
                    <strong>Constancia de Grupo Sanguíneo:</strong> Examen básico emitido por un laboratorio acreditado indicando tu tipo de sangre (RH), fundamental para tu expediente médico en caso de emergencias.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-extrabold mt-0.5">✓</span>
                  <div>
                    <strong>Declaración Jurada de Aptitud:</strong> Formato provisto en tu carpeta de postulación donde firmas bajo juramento gozar de aptitud mental óptima para estudios superiores.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setShowPhysicalModal(false)}
                className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider transition-all cursor-pointer"
              >
                ENTENDIDO
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
