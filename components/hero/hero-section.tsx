import React, { useEffect } from "react";
import { ConnectionNetwork } from "./connection-network";
import { HeroContent } from "./hero-content";
import { StarField } from "./star-field";

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
      className="relative min-h-screen overflow-hidden bg-gradient-cev"
      role="banner"
      aria-label="CEV Congress Hero Section"
    >
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

      {/* Animated background network */}
      <ConnectionNetwork />

      {/* Floating stars decoration */}
      <div className="absolute inset-0">
        <StarField />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <HeroContent />
    </section>
  );
};

// Add required styles
const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
  50% { transform: translateY(-20px) rotate(var(--rotate, 0deg)); }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Accessibility - Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-float,
  .animate-spin-slow,
  .animate-pulse {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* Performance optimization */
.pointer-events-none {
  pointer-events: none;
}

/* GPU acceleration for animations */
.transform {
  will-change: transform;
}
`;

// Inject styles
if (typeof document !== "undefined") {
  const existingStyle = document.getElementById("hero-styles");
  if (existingStyle) {
    existingStyle.remove();
  }

  const styleSheet = document.createElement("style");
  styleSheet.id = "hero-styles";
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default HeroSection;
