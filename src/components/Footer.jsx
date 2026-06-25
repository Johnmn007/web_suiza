import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, MapPin, Phone, Mail } from 'lucide-react';
import FooterParticles from './FooterParticles';

export default function Footer({ t }) {
  return (
    <footer className="relative w-full bg-slate-light/60 dark:bg-dark-card/50 border-t border-primary/10 dark:border-dark-border mt-20 transition-all duration-300 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Section 1: Logo & Vision */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-lg shadow-primary/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-base leading-none text-slate-text dark:text-white tracking-tight">
                  IESTP SUIZA
                </div>
                <div className="text-[10px] text-primary dark:text-secondary font-medium tracking-widest mt-0.5">
                  EXCELENCIA ACADÉMICA
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="p-2 rounded-lg bg-white dark:bg-dark-border/40 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-text/70 dark:text-dark-text transition-all duration-300 shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white dark:bg-dark-border/40 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-text/70 dark:text-dark-text transition-all duration-300 shadow-sm" aria-label="Youtube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-.98-1.071-1.762-2.075-2.02C19.57 3.545 12 3.545 12 3.545s-7.57 0-9.423.598c-1.004.258-1.803 1.04-2.075 2.02C0 7.978 0 12.01 0 12.01s0 4.032.502 6.008c.272.98 1.071 1.762 2.075 2.02 1.853.598 9.423.598 9.423.598s7.57 0 9.423-.598c1.004-.258 1.803-1.04 2.075-2.02.502-1.976.502-6.008.502-6.008s0-4.032-.502-6.008zM9.545 15.568V8.452L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white dark:bg-dark-border/40 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-text/70 dark:text-dark-text transition-all duration-300 shadow-sm">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-sm text-slate-text dark:text-white uppercase tracking-wider mb-4">
              {t.nav.about}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-text/75 dark:text-dark-text/75 hover:text-primary dark:hover:text-secondary transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-text/75 dark:text-dark-text/75 hover:text-primary dark:hover:text-secondary transition-colors">
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-text/75 dark:text-dark-text/75 hover:text-primary dark:hover:text-secondary transition-colors">
                  {t.nav.careers}
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-slate-text/75 dark:text-dark-text/75 hover:text-primary dark:hover:text-secondary transition-colors">
                  Examen de Admisión
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Accesos Directos */}
          <div>
            <h3 className="font-semibold text-sm text-slate-text dark:text-white uppercase tracking-wider mb-4">
              Accesos Directos
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-text/75 dark:text-dark-text/75">
              <li>
                <Link to="/research" className="hover:text-primary dark:hover:text-secondary transition-colors">
                  {t.nav.research}
                </Link>
              </li>
              <li>
                <Link to="/library" className="hover:text-primary dark:hover:text-secondary transition-colors">
                  {t.nav.library}
                </Link>
              </li>
              <li>
                <Link to="/transparency" className="hover:text-primary dark:hover:text-secondary transition-colors">
                  {t.nav.transparency}
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary dark:hover:text-secondary transition-colors">
                  {t.nav.news}
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact Coordinate */}
          <div className="flex flex-col gap-3.5 text-sm text-slate-text/75 dark:text-dark-text/75">
            <h3 className="font-semibold text-sm text-slate-text dark:text-white uppercase tracking-wider mb-0.5">
              Ubicación y Contacto
            </h3>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Carretera Federico Basadre Km 5.700, Callería, Pucallpa, Ucayali, Perú</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>061-280665</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>suiza@iestpsuiza.edu.pe</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 dark:border-dark-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-text/60 dark:text-dark-text/60">
          <div>
            © {new Date().getFullYear()} IESTP SUIZA Pucallpa. Todos los derechos reservados. Licenciado por MINEDU.
          </div>
          <div className="flex gap-4">
            <Link to="/transparency" className="hover:text-primary transition-colors">Transparencia</Link>
            <Link to="/library" className="hover:text-primary transition-colors">Biblioteca</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contacto</Link>
            <a href="#" className="hover:text-primary transition-colors">Aula Virtual</a>
          </div>
        </div>
      </div>
      
      {/* Background Animated Particles at the Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-44 pointer-events-none z-0 overflow-hidden">
        <FooterParticles />
      </div>
    </footer>
  );
}
