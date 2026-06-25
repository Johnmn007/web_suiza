import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, User, PhoneCall, Volume2, VolumeX, Sparkles, Zap, MessageCircle, Bot, ExternalLink, Smile, Cpu } from 'lucide-react';

const typingPhrases = [
  'Analizando datos...', 'Procesando información...', 'Consultando base de datos...',
  'Revisando archivos...', 'Buscando respuesta...', 'Sintetizando información...',
  'Conectando con servidores...', 'Optimizando resultado...'
];

const RobotAvatar = ({ isListening, isSpeaking, mood = 'neutral' }) => {
  const blinkRef = useRef(null);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const scheduleBlink = () => {
      const delay = 2000 + Math.random() * 4000;
      blinkRef.current = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
        scheduleBlink();
      }, delay);
    };
    if (!isListening && !isSpeaking) scheduleBlink();
    return () => { if (blinkRef.current) clearTimeout(blinkRef.current); };
  }, [isListening, isSpeaking]);

  const eyeOpen = isBlinking ? 1 : 7;
  const headTilt = mood === 'happy' ? 3 : 0;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4B7AF4" /><stop offset="100%" stopColor="#6C63FF" />
        </linearGradient>
      </defs>
      {/* Glow behind head */}
      <circle cx="50" cy="48" r="28" fill="#4B7AF4" opacity={isListening ? 0.25 : 0.1}>
        {isListening && <animate attributeName="opacity" values="0.1;0.3;0.1" dur="1.2s" repeatCount="indefinite" />}
      </circle>
      {/* Antenna */}
      <g style={{ transformOrigin: '50px 20px', animation: isListening ? 'none' : 'none' }}>
        <line x1="50" y1="15" x2="50" y2="28" stroke="#4B7AF4" strokeWidth="2.5" strokeLinecap="round">
          {isListening && <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" repeatCount="indefinite" />}
        </line>
        <circle cx="50" cy="13" r="3.5" fill="#4B7AF4">
          {isListening && <animate attributeName="r" values="3;5;3" dur="0.5s" repeatCount="indefinite" />}
        </circle>
        {isListening && (
          <circle cx="50" cy="13" r="5" fill="none" stroke="#4B7AF4" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="r" values="5;10;5" dur="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="1s" repeatCount="indefinite" />
          </circle>
        )}
      </g>
      {/* Head */}
      <g style={{ transform: `rotate(${headTilt}deg)`, transformOrigin: '50px 50px' }}>
        <rect x="23" y="26" width="54" height="42" rx="12" fill={isSpeaking ? "url(#bg)" : "#4B7AF4"} stroke="#6C63FF" strokeWidth="1.5">
          {isSpeaking && <animate attributeName="fill" values="#4B7AF4;#7C6FFF;#4B7AF4" dur="0.8s" repeatCount="indefinite" />}
        </rect>
        {/* Eyes */}
        <ellipse cx="38" cy="48" rx="7" ry={eyeOpen} fill="white" />
        <ellipse cx="62" cy="48" rx="7" ry={eyeOpen} fill="white" />
        {!isBlinking && (
          <>
            <circle cx="38" cy="48" r="4" fill="#1A202C" />
            <circle cx="62" cy="48" r="4" fill="#1A202C" />
            <circle cx="36" cy="46" r="1.8" fill="white" />
            <circle cx="60" cy="46" r="1.8" fill="white" />
          </>
        )}
        {/* Cheeks */}
        <circle cx="30" cy="56" r="4" fill="#6C63FF" opacity={mood === 'happy' ? 0.4 : 0.15} />
        <circle cx="70" cy="56" r="4" fill="#6C63FF" opacity={mood === 'happy' ? 0.4 : 0.15} />
        {/* Mouth */}
        <rect x="40" y="58" width="20" height="4" rx="2" fill="white" opacity="0.95">
          {isSpeaking && <animate attributeName="height" values="4;2;7;3;4" dur="0.4s" repeatCount="indefinite" />}
        </rect>
        {/* Ears */}
        <rect x="18" y="40" width="6" height="16" rx="3" fill="#6C63FF" />
        <rect x="76" y="40" width="6" height="16" rx="3" fill="#6C63FF" />
      </g>
      {/* Body */}
      <rect x="32" y="70" width="36" height="18" rx="6" fill="#6C63FF" opacity="0.45" />
      <circle cx="50" cy="79" r="4" fill="#4B7AF4" opacity="0.4">
        {isListening && <animate attributeName="opacity" values="0.2;0.7;0.2" dur="0.6s" repeatCount="indefinite" />}
      </circle>
      {/* Waving hand (left) */}
      <g style={{ transformOrigin: '22px 72px', animation: 'wave 2s ease-in-out infinite' }}>
        <rect x="18" y="70" width="6" height="14" rx="3" fill="#6C63FF" opacity="0.4" />
      </g>
    </svg>
  );
};

const Confetti = () => {
  const pieces = Array.from({ length: 8 }, (_, i) => ({
    id: i, left: 20 + Math.random() * 60, delay: Math.random() * 0.3, color: ['#4B7AF4', '#6C63FF', '#FFD700', '#FF6B6B', '#51CF66'][i % 5]
  }));
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map(p => (
        <div key={p.id} className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${p.left}%`, top: '-5%', backgroundColor: p.color,
            animation: `confetti-fall 0.8s ease-out ${p.delay}s both`
          }}
        />
      ))}
    </div>
  );
};

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i, x: 10 + Math.random() * 80, y: 10 + Math.random() * 80,
  size: 1.5 + Math.random() * 2.5, delay: Math.random() * 3, duration: 2 + Math.random() * 3
}));

const actionDefs = {
  careers: { label: 'Ver carreras', route: '/careers' },
  admission: { label: 'Ir a Admisión', route: '/admission' },
  about: { label: 'Ver ubicación', route: '/about' },
  contact: { label: 'Contactar', route: '/contact' },
  news: { label: 'Ver noticias', route: '/news' }
};

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "¡Hola! Soy SuizaBot 🤖\n\nTu asistente virtual del IESTP Suiza.\nEstoy aquí para ayudarte con:\n✨ Carreras Profesionales\n📅 Admisión 2026-II\n💰 Costos y Requisitos\n📍 Ubicación y Horarios\n\n¿En qué puedo ayudarte hoy?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: null
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [robotMood, setRobotMood] = useState('neutral');
  const [typingPhrase, setTypingPhrase] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const chatEndRef = useRef(null);
  const streamTimerRef = useRef(null);
  const speechSynthRef = useRef(null);
  const latestMsgIdRef = useRef(null);
  const voicesLoadedRef = useRef(false);
  const typingPhraseRef = useRef(null);

  useEffect(() => {
    speechSynthRef.current = window.speechSynthesis;
    return () => {
      if (streamTimerRef.current) clearInterval(streamTimerRef.current);
      if (typingPhraseRef.current) clearInterval(typingPhraseRef.current);
      if (speechSynthRef.current) speechSynthRef.current.cancel();
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      setTypingPhrase(typingPhrases[0]);
      typingPhraseRef.current = setInterval(() => {
        i = (i + 1) % typingPhrases.length;
        setTypingPhrase(typingPhrases[i]);
      }, 2000);
      setRobotMood('thinking');
    } else {
      if (typingPhraseRef.current) clearInterval(typingPhraseRef.current);
      if (!isSpeaking) setRobotMood('neutral');
    }
    return () => { if (typingPhraseRef.current) clearInterval(typingPhraseRef.current); };
  }, [isTyping, isSpeaking]);

  useEffect(() => {
    if (isSpeaking) setRobotMood('happy');
    else if (!isTyping) setRobotMood('neutral');
  }, [isSpeaking, isTyping]);

  const cancelSpeech = useCallback(() => {
    if (speechSynthRef.current) {
      speechSynthRef.current.cancel();
      setIsSpeaking(false);
      setRobotMood('neutral');
    }
  }, []);

  const handleToggleOpen = useCallback(() => {
    setIsOpen(prev => {
      if (prev) cancelSpeech();
      return !prev;
    });
  }, [cancelSpeech]);

  const findBestVoice = () => {
    if (!speechSynthRef.current) return null;
    const voices = speechSynthRef.current.getVoices();
    return voices.find(v => v.lang.startsWith('es') && v.name.includes('Latin')) ||
           voices.find(v => v.lang.startsWith('es') && v.name.includes('Spanish')) ||
           voices.find(v => v.lang.startsWith('es')) ||
           voices.find(v => v.lang.startsWith('en-US'));
  };

  const speakText = useCallback((text) => {
    if (isMuted || !speechSynthRef.current) return;
    cancelSpeech();
    const clean = text
      .replace(/[📚💰📋📅📍✨🏥💻🏫🎓📝✍🏆📊🚀🌲🏗️🛡️💼🚜💵❌👤💊🔬🤝⭐🔹▪️✅➕🎉]/g, '')
      .replace(/•\s*/g, '. ').replace(/\n{2,}/g, '. ').replace(/\n/g, '. ').replace(/\.{2,}/g, '.').trim();
    if (!clean) return;
    const utter = new SpeechSynthesisUtterance(clean);
    const best = findBestVoice();
    if (best) utter.voice = best;
    utter.lang = 'es-ES';
    utter.rate = 0.95;
    utter.pitch = 1.0;
    utter.volume = 1;
    utter.onstart = () => { setIsSpeaking(true); setRobotMood('happy'); };
    utter.onend = () => { setIsSpeaking(false); setRobotMood('neutral'); };
    utter.onerror = () => { setIsSpeaking(false); setRobotMood('neutral'); };
    speechSynthRef.current.speak(utter);
  }, [isMuted, cancelSpeech]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const loadVoices = () => { if (speechSynthRef.current) speechSynthRef.current.getVoices(); voicesLoadedRef.current = true; };
    loadVoices();
    if (speechSynthRef.current) speechSynthRef.current.addEventListener('voiceschanged', loadVoices);
    return () => { if (speechSynthRef.current) speechSynthRef.current.removeEventListener('voiceschanged', loadVoices); };
  }, []);

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last && last.sender === 'ai' && !last.isStreaming && last.id === latestMsgIdRef.current && !last.played) {
      setMessages(prev => prev.map(m => m.id === last.id ? { ...m, played: true } : m));
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
      speakText(last.text);
    }
  }, [messages, speakText]);

  const checkHumanAvailability = () => {
    const now = new Date();
    return now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() >= 13 && now.getHours() < 19;
  };

  const normalizeText = (text) => {
    if (!text) return "";
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[¿?¡!.,;]/g, "");
  };

  const detectActions = (q) => {
    const actions = [];
    if (/carrera|estudiar|especialidad|programa|profesion|sistemas|enfermeria|mecatronica|contabilidad|administracion/i.test(q)) actions.push(actionDefs.careers);
    if (/costo|precio|pagar|pago|cuesta|tasa|postular|requisito|documento|carpeta|fecha|cronograma|calendario|examen|simulacro|gratis|mensualidad|pension|cuota/i.test(q) && !actions.find(a => a.route === '/admission'))
      actions.push(actionDefs.admission);
    if (/donde|ubicacion|direccion|campus|llegar|inversion|sede|obra|construccion|seguridad|cerco/i.test(q) && !actions.find(a => a.route === '/about'))
      actions.push(actionDefs.about);
    if (/contacto|telefono|whatsapp|celular|correo|email/i.test(q) && !actions.find(a => a.route === '/contact'))
      actions.push(actionDefs.contact);
    return actions.length > 0 ? actions : null;
  };

  const getLocalResponse = (input) => {
    const q = normalizeText(input);
    const actions = detectActions(input);

    if (/hola|buenos|saludos|hey|buen[oa]/i.test(q))
      return { text: "¡Hola! ¿Cómo estás? Soy SuizaBot 🤖\n\nEstoy listo para resolver todas tus dudas sobre el IESTP Suiza.\nPuedes preguntarme sobre carreras, costos, requisitos, fechas y más.\n\n¿Qué te gustaría saber?", actions };
    if (/costo|precio|pagar|pago|cuesta|tasa|postular/i.test(q))
      return { text: "💰 Tasas de Admisión 2026-II:\n\n• Examen Ordinario: S/ 180.00\n• Exonerados/Especiales: S/ 300.00\n• Convenios Especiales: S/ 180.00\n\nEl pago se realiza en Tesorería del campus.", actions };
    if (/requisito|documento|necesito|carpeta|papeles/i.test(q))
      return { text: "📋 Requisitos de Postulación:\n\n1. Certificado original de estudios (1°-5°)\n2. Copia de DNI vigente\n3. Partida de nacimiento original\n4. 4 fotos carnet a color, fondo blanco\n5. Recibo de pago (Tesorería)\n\n➕ Certificado de salud, aptitud física/mental, grupo sanguíneo RH y declaración jurada.", actions };
    if (/carrera|estudiar|especialidad|programa|profesion/i.test(q))
      return { text: "🎓 11 Carreras Profesionales (3 años):\n\n💻 Tecnología:\n• Desarrollo de Sistemas de Información\n• Electricidad Industrial\n\n🏥 Salud:\n• Enfermería Técnica\n\n💼 Gestión:\n• Contabilidad\n• Administración de Empresas\n• Asistencia Administrativa\n• Administración de Operaciones Turísticas\n\n🚜 Ingeniería:\n• Mecatrónica Automotriz\n• Producción Agropecuaria\n• Manejo Forestal\n• Construcción Civil", actions };
    if (/fecha|cronograma|calendario|examen|cuando|simulacro/i.test(q))
      return { text: "📅 Admisión II Semestre 2026:\n\n• Inscripciones: 08 Jun - 18 Ago\n• Simulacro: Dom 23 Ago\n• Examen Ordinario: Dom 30 Ago (ingreso 7:30 AM)\n• Resultados: Lun 31 Ago\n• Inicio Clases: Lun 07 Sep", actions };
    if (/donde|ubicacion|direccion|campus|llegar/i.test(q))
      return { text: "📍 Carretera Federico Basadre Km 5.700\nCallería, Pucallpa - Ucayali\n\nHorario: Lun-Vie 8:00 AM - 4:30 PM", actions };
    if (/gratis|mensualidad|pension|cuota|cobra/i.test(q))
      return { text: "✨ ¡Educación 100% Gratuita!\n\nAl ser instituto público licenciado por MINEDU:\n❌ Sin mensualidades\n❌ Sin pensiones\n✅ Solo derecho de admisión y matrícula básica\n✅ Título oficial a nombre de la Nación", actions };
    if (/humano|asesor|persona|hablar|whatsapp|contacto|telefono/i.test(q))
      return { text: "TRANSFER_HUMAN", actions: null };
    if (/inversion|sede|nueva|obra|construccion|gore|201/i.test(q))
      return { text: "🏗️ ¡Nueva Mega Sede!\n\nInversión histórica de S/ 201 millones del GORE Ucayali:\n• 22 módulos modernos\n• Piscigranja, biblioteca, losa deportiva\n• Laboratorios especializados\n• Cerco perimétrico integral\n• 31 módulos de contingencia al 99% para clases durante la obra", actions };
    if (/seguridad|cerco|invasion|defensa/i.test(q))
      return { text: "🛡️ El instituto defendió su campus forestal en 2011 frente a una invasión. La nueva megaobra incluye un cerco perimétrico moderno para proteger laboratorios, talleres y campos agrícolas.", actions };
    return { text: "No tengo esa información exacta. ¿Puedes preguntar de otra forma?\n\nPregunta sobre: carreras, requisitos, costos o fechas.\n\nO escribe 'asesor humano' para hablar con alguien.", actions: null };
  };

  const detectActionsFromText = (text) => {
    const lower = text.toLowerCase();
    const actions = [];
    if (/carrera|desarrollo de sistemas|enfermeria|mecatronica/i.test(lower)) actions.push(actionDefs.careers);
    if (/admision|inscripcion|examen|costo|requisito|pago|matricula|calendario/i.test(lower) && !actions.find(a => a.route === '/admission')) actions.push(actionDefs.admission);
    if (/ubicacion|direccion|carretera|pucallpa|sede|inversion|cerco/i.test(lower) && !actions.find(a => a.route === '/about')) actions.push(actionDefs.about);
    return actions.length > 0 ? actions : null;
  };

  const getAIResponse = async (inputText, chatHistory) => {
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const systemPrompt = `Eres SuizaBot, asistente virtual oficial del IESTP Suiza, Pucallpa, Perú. Personalidad: amigable, entusiasta, robot servicial. Responde SOLO sobre el instituto. DATOS OFICIALES: 11 carreras; Costos Ordinario S/180, Exonerados S/300, Convenios S/180; Requisitos; Calendario 2026-II; Ubicación Carretera Federico Basadre Km 5.700; Educación gratuita; Nueva sede S/201 millones; defensa 2011. Si preguntan algo fuera del instituto, responde educadamente que solo ayudas con info del IESTP Suiza. Sé servicial, responde en español, estructurado, con emojis moderados.`;

    if (geminiKey && geminiKey.trim()) {
      try {
        const history = chatHistory.map(m => ({ role: m.sender === 'user' ? 'user' : 'model', parts: [{ text: m.text }] }));
        history.push({ role: 'user', parts: [{ text: inputText }] });
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: history, systemInstruction: { parts: [{ text: systemPrompt }] }, generationConfig: { temperature: 0.15, maxOutputTokens: 800 } })
        });
        if (res.ok) { const d = await res.json(); const t = d.candidates?.[0]?.content?.parts?.[0]?.text; if (t) return { text: t, actions: detectActionsFromText(t) }; }
      } catch (_) {}
    }
    if (openaiKey && openaiKey.trim() && !openaiKey.startsWith('YOUR_')) {
      try {
        const msgs = [{ role: 'system', content: systemPrompt }, ...chatHistory.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })), { role: 'user', content: inputText }];
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${openaiKey}` },
          body: JSON.stringify({ model: 'gpt-4o-mini', messages: msgs, temperature: 0.15, max_tokens: 800 })
        });
        if (res.ok) { const d = await res.json(); const t = d.choices?.[0]?.message?.content; if (t) return { text: t, actions: detectActionsFromText(t) }; }
      } catch (_) {}
    }
    return getLocalResponse(inputText);
  };

  const streamResponse = (fullText, actions = null) => {
    setIsTyping(false);
    if (streamTimerRef.current) clearInterval(streamTimerRef.current);
    const id = Date.now();
    latestMsgIdRef.current = id;
    setMessages(prev => [...prev, { id, sender: 'ai', text: '', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), isStreaming: true, played: false, actions }]);
    let curr = '', idx = 0;
    streamTimerRef.current = setInterval(() => {
      if (idx < fullText.length) { curr += fullText.charAt(idx); setMessages(prev => prev.map(m => m.id === id ? { ...m, text: curr } : m)); idx++; }
      else { clearInterval(streamTimerRef.current); streamTimerRef.current = null; setMessages(prev => prev.map(m => m.id === id ? { ...m, isStreaming: false } : m)); }
    }, 10);
  };

  const navigateTo = (route) => { if (window.location.hash !== `#${route}`) window.location.hash = route; };

  const triggerHumanTransfer = () => {
    if (checkHumanAvailability())
      streamResponse("¡Te conecto con un asesor ahora! 💬", [{ label: "WhatsApp Asesoría", link: "https://wa.me/51961280665?text=Hola,%20necesito%20ayuda%20con%20la%20admisi%C3%B3n%20del%20IESTP%20Suiza", type: "external" }]);
    else
      streamResponse("Actualmente no hay asesores disponibles. Horario: Lun-Vie 1:00 PM - 7:00 PM. Puedes escribir a admision@iestpsuiza.edu.pe", [actionDefs.contact]);
  };

  const handleSend = async (textToSend = inputVal) => {
    if (!textToSend.trim() || isTyping || messages.some(m => m.isStreaming)) return;
    const userMsg = { sender: 'user', text: textToSend, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    const history = [...messages];
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);
    setIsListening(true);
    setRobotMood('thinking');
    const start = Date.now();
    const minDelay = 800;
    try {
      const q = normalizeText(textToSend);
      if (/humano|asesor|persona|hablar|whatsapp|contacto|telefono/i.test(q)) { await new Promise(r => setTimeout(r, minDelay)); setIsListening(false); triggerHumanTransfer(); return; }
      const reply = await getAIResponse(textToSend, history);
      const elapsed = Date.now() - start;
      if (elapsed < minDelay) await new Promise(r => setTimeout(r, minDelay - elapsed));
      setIsListening(false);
      streamResponse(reply.text, reply.actions);
    } catch (_) {
      const elapsed = Date.now() - start;
      if (elapsed < minDelay) await new Promise(r => setTimeout(r, minDelay - elapsed));
      setIsListening(false);
      const fallback = getLocalResponse(textToSend);
      streamResponse(fallback.text, fallback.actions);
    }
  };

  const quickQuestions = [
    { text: "¿Qué carreras tienen?", label: "Carreras", icon: "🎓" },
    { text: "¿Cuánto cuesta postular?", label: "Costos", icon: "💰" },
    { text: "¿Cuáles son los requisitos?", label: "Requisitos", icon: "📋" },
    { text: "¿Cuándo es el examen?", label: "Fechas", icon: "📅" }
  ];

  const isBusy = isTyping || messages.some(m => m.isStreaming);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[560px] bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-primary/20 dark:border-dark-border/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300 relative">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-purple-500 via-pink-500 to-primary rounded-2xl opacity-20 blur-md animate-pulse pointer-events-none" />

          <div className="relative bg-gradient-to-r from-primary via-[#5B5FFF] to-[#6C63FF] px-5 py-4.5 text-white flex items-center justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-6">
              <svg width="100%" height="100%">
                <defs><pattern id="g3" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M 14 0 L 0 0 0 14" fill="none" stroke="white" strokeWidth="0.3" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#g3)" />
              </svg>
            </div>
            {particles.map(p => (
              <div key={p.id} className="absolute rounded-full bg-white/15 pointer-events-none"
                style={{ width: p.size+'px', height: p.size+'px', left: p.x+'%', top: p.y+'%', animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite` }}
              />
            ))}
            <div className="flex items-center gap-3 relative z-10">
              <div className={`w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center border border-white/25 transition-all duration-500 ${isSpeaking ? 'scale-110 shadow-lg shadow-white/20' : ''} ${robotMood === 'thinking' ? 'animate-pulse' : ''}`}>
                <RobotAvatar isListening={isListening} isSpeaking={isSpeaking} mood={robotMood} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-base leading-none tracking-tight">SuizaBot</h4>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                  <span className="px-1.5 py-0.5 bg-white/15 rounded text-[7px] font-bold tracking-wider border border-white/20">v2.0</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="relative flex">
                    <span className={`w-1.5 h-1.5 rounded-full ${isTyping ? 'bg-yellow-400' : isSpeaking ? 'bg-green-400' : 'bg-emerald-400'} ${isTyping || isSpeaking ? '' : 'animate-ping'} absolute`} />
                    <span className={`w-1.5 h-1.5 rounded-full ${isTyping ? 'bg-yellow-400' : isSpeaking ? 'bg-green-400' : 'bg-emerald-400'} relative`} />
                  </span>
                  <span className="text-[9px] text-white/75 font-semibold">
                    {isTyping ? 'Procesando...' : isSpeaking ? 'Hablando...' : 'Online'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 relative z-10">
              <button onClick={() => setIsMuted(!isMuted)}
                className={`group p-2 rounded-xl transition-all duration-200 cursor-pointer relative overflow-hidden ${
                  isMuted ? 'bg-red-400/25 shadow-inner' : 'hover:bg-white/15 active:bg-white/20'
                }`}
                title={isMuted ? "Activar voz" : "Silenciar voz"}>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
                {isMuted ? <VolumeX className="w-4 h-4 relative z-10" /> : <Volume2 className={`w-4 h-4 relative z-10 ${isSpeaking ? 'animate-pulse' : ''}`} />}
              </button>
              <button onClick={handleToggleOpen}
                className="group p-2 rounded-xl hover:bg-white/15 active:bg-white/20 transition-all duration-200 cursor-pointer hover:rotate-90 duration-300 relative overflow-hidden">
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
                <X className="w-4 h-4 relative z-10" />
              </button>
            </div>
          </div>

          {isSpeaking && (
            <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 px-4 py-1.5 flex items-center gap-2 border-b border-primary/10 dark:border-dark-border/30">
              <div className="flex gap-0.5 items-center h-3">
                {[0,0.15,0.3,0.45].map((d,i) => (
                  <span key={i} className="w-0.5 bg-primary rounded-full animate-bounce" style={{ height: `${6+i*2}px`, animationDelay: `${d}s` }} />
                ))}
              </div>
              <span className="text-[10px] font-bold text-primary/70">Reproduciendo respuesta...</span>
              <button onClick={cancelSpeech} className="ml-auto px-2.5 py-1 text-[9px] font-extrabold text-primary/60 bg-primary/5 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-200 cursor-pointer active:scale-90 border border-primary/10 hover:border-red-500/30">
                ⏹ Detener
              </button>
            </div>
          )}

          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-gradient-to-b from-slate-50/70 via-white to-white/90 dark:from-dark-bg/40 dark:via-dark-card/60 dark:to-dark-card/50 relative">
            {messages.map((m, idx) => {
              const isUser = m.sender === 'user';
              const isNew = idx === messages.length - 1 && m.sender === 'ai' && !m.isStreaming;
              return (
                <div key={idx} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[90%] ${isUser ? 'self-end' : 'self-start'} ${isNew ? 'animate-bounce-in' : idx === 0 ? 'animate-fade-in' : ''} relative`}>
                  {isNew && showConfetti && <Confetti />}
                  <div className="flex items-center gap-1.5 mb-1 px-1 text-[8px] text-slate-400 dark:text-dark-text/50 font-bold uppercase tracking-wider">
                    {isUser ? <User className="w-2.5 h-2.5" /> : <Cpu className="w-2.5 h-2.5" />}
                    <span>{isUser ? 'Tú' : 'SuizaBot'}</span>
                    <span>•</span>
                    <span>{m.time}</span>
                  </div>
                  <div className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm whitespace-pre-wrap relative transition-all ${
                    isUser
                      ? 'bg-gradient-to-br from-primary to-[#6C63FF] text-white rounded-tr-none shadow-primary/20'
                      : 'bg-white dark:bg-dark-bg/70 text-slate-700 dark:text-dark-text border border-slate-100 dark:border-dark-border/30 rounded-tl-none shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/20'
                  }`}>
                    {!isUser && (
                      <div className="flex items-center gap-1 mb-1.5">
                        <span className="w-4 h-4 inline-block">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <rect x="25" y="28" width="50" height="40" rx="8" fill="#4B7AF4" opacity="0.2" />
                            <circle cx="40" cy="48" r="4" fill="#4B7AF4" opacity="0.4" />
                            <circle cx="60" cy="48" r="4" fill="#4B7AF4" opacity="0.4" />
                          </svg>
                        </span>
                        <Smile className="w-3 h-3 text-primary/40" />
                      </div>
                    )}
                    <span>{m.text}</span>
                    {m.isStreaming && (
                      <span className="inline-flex items-center ml-1 gap-0.5 align-middle select-none">
                        {[0,0.15,0.3].map((d,i) => (
                          <span key={i} className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: `${d}s`, display: 'inline-block' }} />
                        ))}
                      </span>
                    )}
                    {m.actions && !m.isStreaming && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.actions.map((a, ai) =>
                          a.type === 'external' ? (
                            <a key={ai} href={a.link} target="_blank" rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white font-extrabold text-[11px] rounded-xl transition-all duration-200 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-[1.05] active:scale-95 cursor-pointer relative overflow-hidden">
                              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                              <PhoneCall className="w-3.5 h-3.5 relative z-10" />
                              <span className="relative z-10">{a.label}</span>
                            </a>
                          ) : (
                            <button key={ai} onClick={() => navigateTo(a.route)}
                              className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-primary via-[#5B5FFF] to-[#6C63FF] text-white font-extrabold text-[11px] rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.05] active:scale-95 cursor-pointer relative overflow-hidden">
                              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                              <span className="absolute -inset-full top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer" />
                              <ExternalLink className="w-3.5 h-3.5 relative z-10" />
                              <span className="relative z-10">{a.label}</span>
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex flex-col items-start max-w-[88%] self-start">
                <div className="flex items-center gap-1.5 mb-1 px-1 text-[8px] text-slate-400 dark:text-dark-text/50 font-bold uppercase tracking-wider">
                  <Cpu className="w-2.5 h-2.5" />
                  <span>{typingPhrase}</span>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white dark:bg-dark-bg/70 border border-slate-100 dark:border-dark-border/30 rounded-tl-none flex items-center gap-2">
                  <div className="flex gap-1">
                    {[0,0.2,0.4].map((d,i) => (
                      <span key={i} className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
                    ))}
                  </div>
                  <Zap className="w-3 h-3 text-primary/30 animate-pulse" />
                  <span className="text-[9px] text-slate-400 dark:text-dark-text/40 font-medium ml-0.5">Procesando...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="px-3.5 py-2.5 bg-gradient-to-r from-slate-50/50 via-white to-slate-50/50 dark:from-dark-bg/10 dark:via-dark-card/50 dark:to-dark-bg/10 border-t border-slate-100 dark:border-dark-border/20 flex gap-2 overflow-x-auto scrollbar-none">
            {quickQuestions.map((q, i) => (
              <button key={i} onClick={() => !isBusy && handleSend(q.text)} disabled={isBusy}
                className={`group flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-[10px] transition-all duration-200 whitespace-nowrap shrink-0 relative overflow-hidden ${
                  isBusy
                    ? 'opacity-40 cursor-not-allowed bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/50 text-slate-400 dark:text-dark-text/40'
                    : 'bg-white dark:bg-dark-card border-2 border-slate-200 dark:border-dark-border/50 text-slate-600 dark:text-dark-text/80 cursor-pointer hover:border-primary hover:text-primary hover:bg-gradient-to-br hover:from-primary/5 hover:to-[#6C63FF]/5 hover:shadow-lg hover:shadow-primary/10 active:scale-90 hover:-translate-y-0.5 hover:scale-105'
                }`}>
                <span className="text-sm leading-none">{q.icon}</span>
                <span>{q.label}</span>
                {!isBusy && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
                )}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-slate-100 dark:border-dark-border/30 flex items-center gap-2 bg-white dark:bg-dark-card">
            <input type="text" value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isBusy}
              placeholder={isBusy ? "SuizaBot está respondiendo..." : "Escribe tu mensaje..."}
              className={`flex-1 px-4 py-2.5 border border-slate-100 dark:border-dark-border/30 rounded-full text-xs md:text-sm bg-slate-50 dark:bg-dark-bg/30 text-[#1A202C] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white dark:focus:bg-dark-card transition-all ${
                isBusy ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            />
            <button onClick={() => handleSend()} disabled={isBusy || !inputVal.trim()}
              className={`group w-11 h-11 rounded-full bg-gradient-to-br from-primary via-[#5B5FFF] to-[#6C63FF] text-white flex items-center justify-center transition-all duration-200 shadow-lg shadow-primary/25 shrink-0 relative overflow-hidden ${
                isBusy || !inputVal.trim() ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-primary/40 hover:scale-110 active:scale-90 cursor-pointer'
              }`} aria-label="Enviar">
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              <span className={`absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 ${inputVal.trim() && !isBusy ? 'group-hover:animate-shimmer-fast' : ''}`} />
              <Send className="w-4.5 h-4.5 relative z-10" />
            </button>
          </div>
        </div>
      )}

      <button onClick={handleToggleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-20 h-20 rounded-full bg-gradient-to-br from-primary via-[#5B5FFF] to-[#6C63FF] text-white flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer border-[3px] border-white/25 group ${
          isOpen
            ? 'shadow-primary/40 scale-95 rotate-45'
            : 'hover:shadow-2xl hover:shadow-primary/50 hover:scale-110 active:scale-95 animate-float-bot'
        }`}
        title={isOpen ? "Cerrar" : "Abrir SuizaBot"}
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente"}>
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 animate-ping opacity-40" />
            <span className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 animate-ping opacity-20" style={{ animationDelay: '0.3s', animationDuration: '2.5s' }} />
            <span className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/5 to-purple-500/5 animate-ping opacity-10" style={{ animationDelay: '0.6s', animationDuration: '3s' }} />
          </>
        )}
        <span className={`absolute inset-1 rounded-full bg-gradient-to-tr from-white/15 to-transparent ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
        <div className={`w-12 h-12 relative transition-transform duration-500 ${isOpen ? 'scale-0' : 'scale-100'}`}>
          <RobotAvatar isListening={isListening} isSpeaking={isSpeaking} mood={robotMood} />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`}>
          <MessageCircle className="w-7 h-7" />
        </div>
        {!isOpen && (
          <>
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-emerald-400 rounded-full border-[3px] border-white dark:border-dark-card" />
            {/* Floating badge */}
            <span className="absolute -bottom-1 -left-1 px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-[8px] font-black rounded-full shadow-lg animate-pulse border border-white/30">
              NUEVO
            </span>
          </>
        )}
      </button>

      {!isOpen && isHovered && (
        <div className="absolute -top-2 right-0 bg-gradient-to-br from-dark-card to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-dark-card text-sm font-bold px-5 py-3 rounded-2xl shadow-2xl whitespace-nowrap animate-fade-in pointer-events-none border border-primary/20">
          <div className="flex items-center gap-2.5">
            <span className="inline-block animate-wave-hand text-xl" style={{ transformOrigin: 'bottom' }}>👋</span>
            <span>¡Hablemos! Soy SuizaBot</span>
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-dark-card dark:bg-white rotate-45 border-r border-b border-primary/20" />
        </div>
      )}
    </div>
  );
}
