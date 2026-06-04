import React, { useEffect, useRef, useState } from 'react';

export default function FooterParticles() {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    // Watch for dark mode changes in the document root classList
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    
    // Theme-based particle color prefixes
    const getParticleColors = () => {
      if (isDark) {
        // Glowing colors for dark mode matching the palette
        return [
          'rgba(75, 122, 244, ',   // Primary Blue
          'rgba(160, 193, 247, ',  // Secondary Blue
          'rgba(229, 238, 254, ',  // Light blue-white
          'rgba(0, 194, 255, ',    // Bright neon-ish blue/cyan
        ];
      } else {
        // Soft blue and slate tones for light mode
        return [
          'rgba(75, 122, 244, ',   // Primary Blue
          'rgba(160, 193, 247, ',  // Secondary Blue
          'rgba(58, 75, 116, ',    // Slate Slate-text representation
          'rgba(110, 150, 250, ',  // Soft sky blue
        ];
      }
    };

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(width, height) {
        this.reset(width, height, true);
      }

      reset(width, height, isInitial = false) {
        this.width = width;
        this.height = height;
        this.x = Math.random() * width;
        // Scatter vertically if starting for the first time, otherwise spawn at bottom
        this.y = isInitial ? Math.random() * height : height + Math.random() * 20;
        this.radius = 1 + Math.random() * 3;
        this.speedY = 0.12 + Math.random() * 0.38; // Slow floating velocity
        this.speedX = (Math.random() - 0.5) * 0.1; // Gentle horizontal drift
        this.waveFreq = 0.01 + Math.random() * 0.015;
        this.waveAmp = 0.1 + Math.random() * 0.3;
        
        const colors = getParticleColors();
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Alpha controls for fade in/out
        this.maxAlpha = 0.15 + Math.random() * 0.45;
        this.alpha = 0;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX + Math.sin(this.y * this.waveFreq) * this.waveAmp;

        // Calculate progress from bottom (y=height) to top (y=0)
        const progress = this.y / this.height; // 1 at bottom, 0 at top
        
        if (progress > 0.9) {
          // Fade in as it enters from the bottom
          this.alpha = ((1 - progress) / 0.2) * this.maxAlpha;
        } else if (progress < 0.4) {
          // Fade out as it nears the top edge
          this.alpha = (progress / 0.4) * this.maxAlpha;
        } else {
          this.alpha = this.maxAlpha;
        }

        // Reset particle if it leaves the boundaries
        if (this.y < -5 || this.x < -5 || this.x > this.width + 5) {
          this.reset(this.width, this.height);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Construct rgba string
        ctx.fillStyle = `${this.color}${this.alpha})`;
        
        // Draw soft glowing shadows in dark mode for premium look
        if (isDark && this.radius > 1.2) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = `${this.color}0.5)`;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }
    }

    const init = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      // Adjust density based on screen width
      const particleCount = Math.min(Math.floor(rect.width / 35), 45);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(rect.width, rect.height));
      }
    };

    init();

    // Re-initialize only if width changes significantly (e.g. orientation swap / resize)
    let lastWidth = canvas.parentElement.getBoundingClientRect().width;
    const checkResize = () => {
      const currentWidth = canvas.parentElement.getBoundingClientRect().width;
      if (Math.abs(currentWidth - lastWidth) > 50) {
        lastWidth = currentWidth;
        init();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      checkResize();
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      resizeObserver.disconnect();
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
    />
  );
}
