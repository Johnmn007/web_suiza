import React, { useState, useEffect } from 'react';
import logoDsi from '../assets/img/logo_dsi.jpg';

function LoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [fadeOut, setFadeOut] = useState(false);
  const [shake, setShake] = useState(false);

  // Monitor network status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Lock scrolling while loading is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Preload critical images to measure real loading speed
  useEffect(() => {
    if (!isOnline) return;

    // Reset progress tracking when coming online
    setTargetProgress(0);
    setProgress(0);

    const imagesToLoad = [
      logoDsi,
      '/fontis.jpg',
      '/frontis_2.jpg',
      '/campus.jpg',
    ];

    let loadedCount = 0;
    const total = imagesToLoad.length;

    if (total === 0) {
      setTargetProgress(100);
      return;
    }

    const imageObjects = [];

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setTargetProgress(Math.round((loadedCount / total) * 100));
      };
      img.onerror = () => {
        // Count errors as finished to prevent locking the screen permanently
        loadedCount++;
        setTargetProgress(Math.round((loadedCount / total) * 100));
      };
      imageObjects.push(img);
    });

    return () => {
      imageObjects.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [isOnline]);

  // Smoothly interpolate progress toward targetProgress
  useEffect(() => {
    if (!isOnline) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          // Increment smoothly by small steps (approx 1s minimum load time if cached)
          return Math.min(prev + 1.5, targetProgress);
        }
        return prev;
      });
    }, 15);

    return () => clearInterval(timer);
  }, [targetProgress, isOnline]);

  // Control exit animation when progress reaches 100%
  useEffect(() => {
    if (progress === 100 && isOnline) {
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
        const finishTimer = setTimeout(() => {
          if (onFinished) {
            onFinished();
          }
        }, 700); // Matches the opacity-0 transition duration
        return () => clearTimeout(finishTimer);
      }, 300); // Brief pause at 100% for user feedback
      return () => clearTimeout(fadeTimer);
    }
  }, [progress, isOnline, onFinished]);

  const handleRetry = () => {
    if (navigator.onLine) {
      setIsOnline(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  // 1. Offline State Layout
  if (!isOnline) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#E5EEFE] dark:bg-[#0d1117] px-6 text-center select-none">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className={`relative flex flex-col items-center max-w-md w-full p-8 md:p-10 rounded-[2rem] bg-white dark:bg-dark-card border border-red-100 dark:border-red-950/20 shadow-2xl z-10 transition-transform duration-300 ${shake ? 'animate-shake' : ''}`}>
          {/* Animated Offline Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md animate-ping" />
            <div className="relative w-20 h-20 rounded-full bg-red-50 dark:bg-red-950/30 flex items-center justify-center border-2 border-red-200 dark:border-red-900/50">
              <svg className="w-10 h-10 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-3.536 5 5 0 011.414-3.536m0 0L8.464 8.464M3.636 18.364a9 9 0 010-12.728M12 12v.01" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-text dark:text-white mb-3 font-sans">
            Sin Conexión a Internet
          </h2>
          <p className="text-sm text-slate-text/75 dark:text-dark-text/70 leading-relaxed mb-8">
            Para cargar la aplicación del <b>I.S.T. Suiza</b>, se requiere una conexión activa a la red. Por favor, verifica tu Wi-Fi o datos móviles.
          </p>

          <button
            onClick={handleRetry}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white font-bold text-sm tracking-wider shadow-lg shadow-red-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18" />
            </svg>
            Reintentar Conexión
          </button>
        </div>
      </div>
    );
  }

  // 2. Normal Loading State Layout
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#E5EEFE] dark:bg-[#0d1117] transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative flex flex-col items-center max-w-md px-6 text-center z-10 select-none">
        {/* Logo container with double glowing outer rings */}
        <div className="relative mb-8">
          {/* External spinner glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary opacity-60 blur-lg animate-spin" style={{ animationDuration: '8s' }} />
          
          {/* Subtle pulsate border */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse opacity-80" />
          
          {/* Logo Frame */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white dark:border-dark-card shadow-2xl bg-white flex items-center justify-center">
            <img
              src={logoDsi}
              alt="Instituto Superior Tecnológico Suiza"
              className="w-full h-full object-cover animate-soft-pulse"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Institution / Specialization text */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-slate-text dark:text-white mb-2 font-sans drop-shadow-sm">
          I.S.T. SUIZA
        </h1>
        <p className="text-xs md:text-sm font-semibold tracking-widest text-primary/90 dark:text-secondary/90 uppercase mb-8">
          Desarrollo de Sistemas de Información
        </p>

        {/* Custom Premium Progress Bar */}
        <div className="w-64 bg-slate-light dark:bg-dark-border h-2 rounded-full overflow-hidden relative mb-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 ease-out shadow-[0_0_12px_rgba(75,122,244,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Number Counter */}
        <div className="text-lg font-bold text-slate-text dark:text-dark-text tabular-nums tracking-wider">
          {Math.round(progress)}%
        </div>

        {/* Elegant loading text indicator */}
        <div className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-2 tracking-widest uppercase flex items-center gap-1.5 font-semibold">
          Iniciando
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
