import React from "react";
import { Star } from "lucide-react";

export const StarField: React.FC = () => {
  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <>
      {stars.map((star) => (
        <Star
          key={star.id}
          className="absolute text-white/20 animate-pulse pointer-events-none"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
};
