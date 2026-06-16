import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 140, // interaction radius
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Colors aligned with the palete (Blue, Light Blue, Amber, Emerald, Rose/Violet)
    const colors = [
      'rgba(75, 122, 244, 0.6)',   // Primary Blue
      'rgba(160, 193, 247, 0.65)', // Secondary Light Blue
      'rgba(245, 158, 11, 0.55)',  // Amber
      'rgba(16, 185, 129, 0.55)',  // Emerald
      'rgba(239, 68, 68, 0.5)',    // Rose
      'rgba(139, 92, 246, 0.55)'   // Violet
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 4.5 + 1.5; // size of dots
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Base drift speed
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        
        // Dynamic velocities (for interactive inertia)
        this.dx = 0;
        this.dy = 0;
        
        // Friction and return factor
        this.friction = 0.94;
      }

      update() {
        // Apply base drift
        this.x += this.vx;
        this.y += this.vy;

        // Apply mouse interaction (repulsion)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Calculate force (1.0 at mouse, 0.0 at radius edge)
            const force = (mouse.radius - distance) / mouse.radius;
            
            // Push direction
            const angle = Math.atan2(dy, dx);
            
            // Accelerate away from cursor (dispersion)
            const pushForce = force * 2.2;
            const pushX = Math.cos(angle) * pushForce;
            const pushY = Math.sin(angle) * pushForce;
            
            this.dx += pushX;
            this.dy += pushY;
          }
        }

        // Apply inertia (damping)
        this.dx *= this.friction;
        this.dy *= this.friction;

        // Add interactive velocity to coordinates
        this.x += this.dx;
        this.y += this.dy;

        // Screen boundary wrap around with smooth transition
        if (this.x < -15) this.x = width + 15;
        if (this.x > width + 15) this.x = -15;
        if (this.y < -15) this.y = height + 15;
        if (this.y > height + 15) this.y = -15;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        // Subtle glow effect
        ctx.shadowBlur = this.radius * 2;
        ctx.shadowColor = this.color;
        
        ctx.fill();
      }
    }

    let particles = [];
    const initParticles = () => {
      particles = [];
      // Dynamic count based on screen area
      const count = Math.floor((width * height) / 10000); 
      const limitedCount = Math.min(Math.max(count, 50), 130);
      for (let i = 0; i < limitedCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 0; // Optimize clearing shadow

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[2] mix-blend-normal opacity-75 dark:opacity-50"
    />
  );
}
