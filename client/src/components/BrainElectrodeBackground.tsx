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
    const brainRadius = Math.min(canvas.width, canvas.height) * 0.25;

    // Brain shape points (simplified brain outline)
    const brainPoints = [];
    const numPoints = 60;
    
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const radius = brainRadius * (0.9 + Math.sin(angle * 3) * 0.1 + Math.cos(angle * 5) * 0.05);
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius * 0.9; // Slightly flatten vertically
      brainPoints.push({ x, y });
    }

    // Add brain particles
    brainPoints.forEach(point => {
      particles.push({
        x: point.x,
        y: point.y,
        baseX: point.x,
        baseY: point.y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    });

    // Add electrode positions (10-20 system inspired)
    const electrodePositions = [
      { angle: 0, radius: 0.9 }, // Fz
      { angle: Math.PI / 4, radius: 0.9 }, // F4
      { angle: -Math.PI / 4, radius: 0.9 }, // F3
      { angle: Math.PI / 2, radius: 0.9 }, // C4
      { angle: -Math.PI / 2, radius: 0.9 }, // C3
      { angle: Math.PI * 3/4, radius: 0.9 }, // P4
      { angle: -Math.PI * 3/4, radius: 0.9 }, // P3
      { angle: Math.PI, radius: 0.9 }, // Pz
      { angle: Math.PI / 6, radius: 0.7 }, // Additional
      { angle: -Math.PI / 6, radius: 0.7 }, // Additional
    ];

    electrodePositions.forEach(pos => {
      const x = centerX + Math.cos(pos.angle) * brainRadius * pos.radius;
      const y = centerY + Math.sin(pos.angle) * brainRadius * pos.radius * 0.9;
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

    const maxDistance = 80;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        if (!particle.isElectrode) {
          // Small oscillation around base position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Return to base position
          const dx = particle.baseX - particle.x;
          const dy = particle.baseY - particle.y;
          particle.x += dx * 0.05;
          particle.y += dy * 0.05;
        }

        // Draw particle
        ctx.beginPath();
        if (particle.isElectrode) {
          ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.8)'; // Blue for electrodes
        } else {
          ctx.arc(particle.x, particle.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
        }
        ctx.fill();
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
            const opacity = (1 - distance / maxDistance) * 0.25;
            
            // Highlight electrode connections
            if (particles[i].isElectrode || particles[j].isElectrode) {
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 1.5})`;
              ctx.lineWidth = 1.5;
            } else {
              ctx.strokeStyle = `rgba(100, 100, 100, ${opacity})`;
              ctx.lineWidth = 1;
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
      style={{ opacity: 0.6 }}
    />
  );
}
