"use client";
import React, { useEffect, useRef, useCallback } from "react";
import type { InteractiveBackgroundProps, Particle, Position } from "./types";

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
  particleCount = 80,
  maxDistance = 150,
  mouseRadius = 120,
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
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 2,
        opacity: Math.random() * 0.4 + 0.6,
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
      const isNearMouse = mouseDistance < mouseRadius;
      const scale = isNearMouse ? 1.8 : 1;
      const opacity = isNearMouse ? particle.opacity * 1.2 : particle.opacity;

      // Use different colors based on mouse proximity
      const baseColor = isNearMouse ? "159, 255, 238" : "10, 186, 175"; // #9fffee : #0abaaf

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${baseColor}, ${opacity})`;
      ctx.fill();

      // Add glow effect for particles near mouse
      if (isNearMouse) {
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * scale * 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(159, 255, 238, ${opacity * 0.3})`;
        ctx.fill();
      }
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
      const opacity = 0.6 * (1 - distance / maxDistance);
      const mouseDistance1 = Math.sqrt(
        Math.pow(mousePos.current.x - p1.x, 2) +
          Math.pow(mousePos.current.y - p1.y, 2)
      );
      const mouseDistance2 = Math.sqrt(
        Math.pow(mousePos.current.x - p2.x, 2) +
          Math.pow(mousePos.current.y - p2.y, 2)
      );

      // Enhance connections near mouse
      const isNearMouse =
        mouseDistance1 < mouseRadius || mouseDistance2 < mouseRadius;
      const lineWidth = isNearMouse ? 1.5 : 1;
      const connectionOpacity = isNearMouse ? opacity * 1.5 : opacity;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(10, 186, 175, ${connectionOpacity})`; // #0abaaf
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    },
    [maxDistance, mouseRadius]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const particles = particlesRef.current;

    particles.forEach((particle, i) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Attract particles to mouse
      const dx = mousePos.current.x - particle.x;
      const dy = mousePos.current.y - particle.y;
      const mouseDistance = Math.sqrt(dx * dx + dy * dy);

      if (mouseDistance < mouseRadius && mouseDistance > 0) {
        const force = (1 - mouseDistance / mouseRadius) * 0.3;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle) * force;
        particle.vy += Math.sin(angle) * force;
      }

      drawParticle(ctx, particle, mouseDistance);

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const distance = Math.sqrt(
          Math.pow(particle.x - p2.x, 2) + Math.pow(particle.y - p2.y, 2)
        );

        if (distance < maxDistance) {
          drawConnection(ctx, particle, p2, distance);
        }
      }

      particle.vx *= 0.985;
      particle.vy *= 0.985;

      particle.vx += (Math.random() - 0.5) * 0.02;
      particle.vy += (Math.random() - 0.5) * 0.02;

      const maxVelocity = 2;
      const velocity = Math.sqrt(
        particle.vx * particle.vx + particle.vy * particle.vy
      );
      if (velocity > maxVelocity) {
        particle.vx = (particle.vx / velocity) * maxVelocity;
        particle.vy = (particle.vy / velocity) * maxVelocity;
      }
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [mouseRadius, maxDistance, drawParticle, drawConnection]);

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
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};
