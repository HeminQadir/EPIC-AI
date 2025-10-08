import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  isElectrode?: boolean;
}

export default function BrainElectrodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles: Particle[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = Math.min(canvas.width, canvas.height) * 0.3;

    // Create a better head profile shape
    const headOutline = [];
    const numPoints = 80;
    
    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const angle = t * Math.PI * 2;
      
      let radius;
      // Create head-like shape with forehead, top, and back
      if (angle < Math.PI * 0.25) {
        // Forehead
        radius = 0.7 + Math.sin(angle * 4) * 0.1;
      } else if (angle < Math.PI * 0.75) {
        // Top of head
        radius = 0.9 + Math.sin(angle * 6) * 0.05;
      } else if (angle < Math.PI * 1.25) {
        // Back of head
        radius = 0.85 + Math.cos(angle * 4) * 0.08;
      } else {
        // Lower back and neck area
        radius = 0.6 + Math.sin(angle * 3) * 0.1;
      }
      
      const x = centerX + Math.cos(angle) * radius * scale;
      const y = centerY + Math.sin(angle) * radius * scale * 0.95;
      headOutline.push({ x, y });
    }

    // Add brain outline particles with more movement
    headOutline.forEach(point => {
      particles.push({
        x: point.x,
        y: point.y,
        baseX: point.x,
        baseY: point.y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
      });
    });

    // Add electrode positions (EEG 10-20 system)
    const electrodePositions = [
      { angle: -Math.PI * 0.5, radius: 0.85, label: 'Fz' },     // Front center
      { angle: -Math.PI * 0.35, radius: 0.82, label: 'F3' },    // Front left
      { angle: -Math.PI * 0.65, radius: 0.82, label: 'F4' },    // Front right
      { angle: 0, radius: 0.88, label: 'Cz' },                   // Center top
      { angle: -Math.PI * 0.2, radius: 0.85, label: 'C3' },     // Center left
      { angle: -Math.PI * 0.8, radius: 0.85, label: 'C4' },     // Center right
      { angle: Math.PI * 0.5, radius: 0.82, label: 'Pz' },      // Back center
      { angle: Math.PI * 0.35, radius: 0.8, label: 'P3' },      // Back left
      { angle: Math.PI * 0.65, radius: 0.8, label: 'P4' },      // Back right
      { angle: -Math.PI * 0.15, radius: 0.7, label: 'T3' },     // Temporal left
      { angle: -Math.PI * 0.85, radius: 0.7, label: 'T4' },     // Temporal right
    ];

    electrodePositions.forEach(pos => {
      const x = centerX + Math.cos(pos.angle) * pos.radius * scale;
      const y = centerY + Math.sin(pos.angle) * pos.radius * scale * 0.95;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        isElectrode: true,
      });
    });

    const maxDistance = 100;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        if (!particle.isElectrode) {
          // Move particles
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce back toward base position with spring effect
          const dx = particle.baseX - particle.x;
          const dy = particle.baseY - particle.y;
          particle.vx += dx * 0.02;
          particle.vy += dy * 0.02;
          
          // Add damping
          particle.vx *= 0.95;
          particle.vy *= 0.95;
        }

        // Draw particle
        ctx.beginPath();
        if (particle.isElectrode) {
          ctx.arc(particle.x, particle.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.9)';
          ctx.fill();
          // Add glow effect
          ctx.arc(particle.x, particle.y, 10, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
          ctx.fill();
        } else {
          ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(100, 100, 100, 0.6)';
          ctx.fill();
        }
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = (1 - distance / maxDistance) * 0.4;
            
            // Highlight electrode connections
            if (particles[i].isElectrode || particles[j].isElectrode) {
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 1.2})`;
              ctx.lineWidth = 2;
            } else {
              ctx.strokeStyle = `rgba(100, 100, 100, ${opacity})`;
              ctx.lineWidth = 1.2;
            }
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
