import React from "react";
import { Brain } from "lucide-react";

export const BrainField: React.FC = () => {
  const brains = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <>
      {brains.map((brain) => (
        <Brain
          key={brain.id}
          className="absolute text-white/20 animate-pulse pointer-events-none"
          style={{
            top: `${brain.top}%`,
            left: `${brain.left}%`,
            fontSize: `${brain.size}px`,
            animationDelay: `${brain.delay}s`,
            animationDuration: `${brain.duration}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
};
