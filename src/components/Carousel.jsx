import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import careerImages from '../assets/career_images_map.json';

const images = [
  { src: careerImages.admin[0], alt: 'Administración de Empresas' },
  { src: careerImages.agro[0], alt: 'Producción Agropecuaria' },
  { src: careerImages.asist[0], alt: 'Asistencia Administrativa' },
  { src: careerImages.civil[0], alt: 'Construcción Civil' },
  { src: careerImages.cont[0], alt: 'Contabilidad' },
  { src: careerImages.elec[0], alt: 'Electricidad Industrial' },
  { src: careerImages.enfer[0], alt: 'Enfermería Técnica' },
  { src: careerImages.forest[0], alt: 'Manejo Forestal' },
  { src: careerImages.meca[0], alt: 'Mecatrónica Automotriz' },
  { src: careerImages.sys[0], alt: 'Desarrollo de Sistemas de Información' },
  { src: careerImages.tur[0], alt: 'Administración de Operaciones Turísticas' },
];

export default function Carousel({ autoPlayInterval = 5000, children }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  return (
    <div className="relative w-full overflow-hidden aspect-[3/2] md:aspect-auto">
      {/* Background images with crossfade */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Blue gradient overlay - suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/25 to-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content on top */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/70 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
