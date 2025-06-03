"use client";
import React, { useEffect, useRef, useCallback } from "react";
import type { Particle, Position } from "./types";

interface ConnectionNetworkProps {
  particleCount?: number;
  maxDistance?: number;
  mouseRadius?: number;
}

export const ConnectionNetwork: React.FC<ConnectionNetworkProps> = ({
  particleCount = 60,
  maxDistance = 150,
  mouseRadius = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef<Position>({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const initParticles = useCallback(
    (width: number, height: number) => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
      }));
    },
    [particleCount]
  );

  const drawParticle = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      particle: Particle,
      mouseDistance: number
    ) => {
      const scale = mouseDistance < mouseRadius ? 1.5 : 1;
      const opacity =
        mouseDistance < mouseRadius ? particle.opacity * 1.5 : particle.opacity;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(147, 51, 234, ${opacity})`;
      ctx.fill();
    },
    [mouseRadius]
  );

  const drawConnection = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      p1: Particle,
      p2: Particle,
      distance: number
    ) => {
      const opacity = 0.2 * (1 - distance / maxDistance);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    },
    [maxDistance]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const particles = particlesRef.current;

    particles.forEach((particle, i) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off walls
      if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

      // Mouse interaction
      const dx = mousePos.current.x - particle.x;
      const dy = mousePos.current.y - particle.y;
      const mouseDistance = Math.sqrt(dx * dx + dy * dy);

      if (mouseDistance < mouseRadius) {
        const force = (1 - mouseDistance / mouseRadius) * 0.5;
        particle.vx += (dx / mouseDistance) * force;
        particle.vy += (dy / mouseDistance) * force;
      }

      // Draw particle
      drawParticle(ctx, particle, mouseDistance);

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const distance = Math.sqrt(
          Math.pow(particle.x - p2.x, 2) + Math.pow(particle.y - p2.y, 2)
        );

        if (distance < maxDistance) {
          drawConnection(ctx, particle, p2, distance);
        }
      }

      // Damping
      particle.vx *= 0.99;
      particle.vy *= 0.99;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [mouseRadius, drawParticle, drawConnection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    updateCanvasSize();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};
