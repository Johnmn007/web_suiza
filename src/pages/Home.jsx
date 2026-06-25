import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, ChevronRight, Sparkles, BookOpen, FlaskConical } from 'lucide-react';
import Carousel from '../components/Carousel';
import Testimonials from '../components/Testimonials';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';

function AnimatedStat({ end, label, suffix }) {
  const { count, ref } = useCountUp({ end, duration: 1800 });

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
        {count}{suffix || '+'}
      </span>
      <span className="text-xs font-medium text-white/75 mt-1 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function Home({ t }) {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

  const cards = [
    {
      title: '¿Por qué IESTP Suiza?',
      desc: 'Educación superior tecnológica pública licenciada por MINEDU, 100% gratuita y con convenios empresariales.',
      link: '/about',
      tag: 'Institucional',
      icon: GraduationCap,
      gradient: 'from-primary/10 to-secondary/5'
    },
    {
      title: 'Admisión Regular 2026',
      desc: 'Requisitos, cronograma y vacantes para las 11 carreras profesionales con alta demanda laboral.',
      link: '/admission',
      tag: 'Admisiones',
      icon: Sparkles,
      gradient: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10'
    },
    {
      title: 'Investigación e Innovación',
      desc: 'Proyectos, publicaciones científicas y semilleros que impulsan el desarrollo tecnológico regional.',
      link: '/research',
      tag: 'Investigación',
      icon: FlaskConical,
      gradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10'
    },
    {
      title: 'Biblioteca y Recursos',
      desc: 'Accede al catálogo en línea, repositorio institucional y recursos digitales académicos.',
      link: '/library',
      tag: 'Biblioteca',
      icon: BookOpen,
      gradient: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/10'
    }
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <section className="relative overflow-hidden group">
        <Carousel>
          <div className="relative z-10 px-4 md:px-8 py-12 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start text-left gap-6 animate-in fade-in slide-in-from-left-8 duration-500">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Licenciado por MINEDU</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mt-2 drop-shadow-lg">
                  {t.hero.welcome}
                </h1>

                <p className="text-base md:text-lg text-white/85 max-w-xl leading-relaxed drop-shadow-md">
                  {t.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 mt-2">
                  <Link to="/careers" className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-light text-primary font-bold text-sm tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 transition-all cursor-pointer">
                    <span>{t.hero.explore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/admission" className="px-6 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold text-sm tracking-wider transition-all">
                    {t.nav.admission}
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mt-8 p-6 rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xl">
                  <AnimatedStat end={1600} label={t.hero.stats.students} />
                  <AnimatedStat end={57} label={t.hero.stats.teachers} />
                  <AnimatedStat end={150} label={t.hero.stats.newStudents} />
                  <AnimatedStat end={1000} label={t.hero.stats.graduates} />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-24 pt-16" ref={cardsRef}>
        <div className={'text-center max-w-2xl mx-auto mb-12 transition-all duration-700 delay-100 ' + (cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <h2 className="text-3xl font-extrabold text-slate-text dark:text-white tracking-tight">Acceso Rápido</h2>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-2">Encuentra todo lo que necesitas para tu formación profesional.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, idx) => (
            <div key={idx} className={'group p-6 rounded-3xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 hover:border-primary/30 hover:shadow-[0_15px_35px_rgba(75,122,244,0.08)] dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-500 flex flex-col justify-between text-left ' + (cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: (200 + idx * 100) + 'ms' }}>
              <div className="flex flex-col gap-3">
                <div className={'w-10 h-10 rounded-xl bg-gradient-to-br ' + item.gradient + ' flex items-center justify-center group-hover:scale-110 transition-transform duration-300'}>
                  <item.icon className="w-5 h-5 text-primary dark:text-secondary" />
                </div>
                <span className="text-[10px] font-bold text-primary dark:text-secondary tracking-widest uppercase mt-1">{item.tag}</span>
                <h3 className="text-lg font-bold text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{item.desc}</p>
              </div>
              <Link to={item.link} className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary dark:text-secondary hover:translate-x-1 transition-all">
                <span>Saber más</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
}
