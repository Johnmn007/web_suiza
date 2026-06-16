import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';

export default function Footer({ t }) {
  return (
    <footer className="relative w-full overflow-hidden bg-slate-950 text-white/90 border-t border-white/5 py-16 transition-all duration-300 z-10">
      
      {/* BACKGROUND TEXTURE: Colorful soft particles on dark base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none opacity-95 z-0"></div>
      <div className="absolute top-[15%] left-[20%] w-3 h-3 bg-primary/45 rounded-full blur-[2px] animate-pulse pointer-events-none z-0"></div>
      <div className="absolute top-[65%] left-[45%] w-4.5 h-4.5 bg-orange-500/35 rounded-full blur-[3px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-[35%] right-[25%] w-3.5 h-3.5 bg-green-500/35 rounded-full blur-[2px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '3.0s' }}></div>
      <div className="absolute top-[75%] left-[10%] w-2.5 h-2.5 bg-yellow-500/30 rounded-full blur-[2px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute top-[10%] right-[10%] w-3 h-3 bg-pink-500/35 rounded-full blur-[2px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '2.0s' }}></div>
      
      {/* Grid Pattern overlay for texture */}
      <div className="absolute inset-0 bg-dots opacity-[0.12] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 4 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Isotype, Slogan, Socials */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 p-1 border border-white/10">
                <img src={LogoSuiza} alt="IESTP Suiza Isotipo" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm tracking-widest text-white uppercase leading-none">
                  IESTP SUIZA
                </h3>
                <h4 className="text-[10px] text-primary font-bold tracking-widest mt-1 uppercase leading-none">
                  EXCELENCIA ACADÉMICA
                </h4>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
              Formando profesionales técnicos de excelencia en la Amazonia peruana con reconocimiento nacional e internacional.
            </p>
            {/* Social media row */}
            <div className="flex items-center gap-3.5 mt-3">
              <a href="https://www.facebook.com/people/IESTP-Suiza/100063777595304/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary text-white transition-all duration-300 border border-white/5 hover:scale-105" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/results?search_query=iestp+suiza+pucallpa" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary text-white transition-all duration-300 border border-white/5 hover:scale-105" aria-label="Youtube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-.98-1.071-1.762-2.075-2.02C19.57 3.545 12 3.545 12 3.545s-7.57 0-9.423.598c-1.004.258-1.803 1.04-2.075 2.02C0 7.978 0 12.01 0 12.01s0 4.032.502 6.008c.272.98 1.071 1.762 2.075 2.02 1.853.598 9.423.598 9.423.598s7.57 0 9.423-.598c1.004-.258 1.803-1.04 2.075-2.02.502-1.976.502-6.008.502-6.008s0-4.032-.502-6.008zM9.545 15.568V8.452L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.iestpsuiza.edu.pe/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary text-white transition-all duration-300 border border-white/5 hover:scale-105" aria-label="Sitio Web">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Link list */}
          <div className="flex flex-col items-start gap-4 text-left">
            <h3 className="font-extrabold text-sm text-white uppercase tracking-wider">
              Enlaces
            </h3>
            <ul className="flex flex-col gap-3 text-xs">
              <li>
                <Link to="/" className="text-slate-300 hover:text-primary transition-all duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-primary transition-all duration-300">
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-300 hover:text-primary transition-all duration-300">
                  Programas de Estudio
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-slate-300 hover:text-primary transition-all duration-300">
                  Examen de Admisión
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Careers sample links */}
          <div className="flex flex-col items-start gap-4 text-left">
            <h3 className="font-extrabold text-sm text-white uppercase tracking-wider">
              Programas de Estudio
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-slate-300">
              <li>
                <Link to="/careers" className="hover:text-primary transition-all duration-300">
                  Desarrollo de Sistemas
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-all duration-300">
                  Enfermería Técnica
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-all duration-300">
                  Mecatrónica Automotriz
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-all duration-300">
                  Manejo Forestal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details with icons */}
          <div className="flex flex-col items-start gap-4 text-left">
            <h3 className="font-extrabold text-sm text-white uppercase tracking-wider">
              Contacto
            </h3>
            <div className="flex flex-col gap-3.5 text-xs text-slate-300">
              
              {/* Address -> Google Maps Link */}
              <a 
                href="https://maps.google.com/?q=IESTP+Suiza+Pucallpa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-2.5 hover:text-primary transition-all duration-300"
              >
                <MapPin className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Carretera Federico Basadre Km 5.700, Callería, Pucallpa, Ucayali, Perú</span>
              </a>

              {/* Phone -> tel Link */}
              <a 
                href="tel:061280665" 
                className="flex items-center gap-2.5 hover:text-primary transition-all duration-300"
              >
                <Phone className="w-4.5 h-4.5 text-primary shrink-0" />
                <span>061-280665</span>
              </a>

              {/* Email -> mailto Link */}
              <a 
                href="mailto:suiza@iestpsuiza.edu.pe" 
                className="flex items-center gap-2.5 hover:text-primary transition-all duration-300"
              >
                <Mail className="w-4.5 h-4.5 text-primary shrink-0" />
                <span>suiza@iestpsuiza.edu.pe</span>
              </a>

            </div>
          </div>

        </div>

        {/* Footer Closure with line separator */}
        <hr className="border-white/10 mt-12 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-semibold tracking-wide">
          <div>
            © 2026 IESTP Suiza Pucallpa. Todos los derechos reservados. Licenciado por MINEDU.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-all duration-300">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-all duration-300">Transparencia Pública</a>
            <a href="#" className="hover:text-primary transition-all duration-300">Aula Virtual</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
