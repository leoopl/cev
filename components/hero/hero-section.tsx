"use client";
import React, { useEffect } from "react";
import { HeroContent } from "./hero-content";
import { BrainField } from "./brain-field";

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Prefers reduced motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.style.setProperty("--animation-duration", "0s");
    }
  }, []);

  return (
    <section
      className="relative min-h-screen"
      role="banner"
      aria-label="CEV Congress Hero Section"
    >
      {/* Floating brain decoration */}
      <div className="absolute inset-0">
        <BrainField />
      </div>

      {/* Main content */}
      <HeroContent />
    </section>
  );
};

export default HeroSection;
