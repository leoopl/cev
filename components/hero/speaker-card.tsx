"use client";
import React, { useState } from "react";
import { User } from "lucide-react";
import type { SpeakerData } from "./types";
import Image from "next/image";

interface SpeakerCardProps extends SpeakerData {
  delay: number;
  index: number;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  speciality,
  image,
  delay,
  index,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 p-4 transform transition-all duration-500 hover:scale-110 hover:shadow-gradient-cev-lg cursor-pointer"
      style={{
        animationDelay: `${delay}ms`,
        animation: `float ${6 + index}s ease-in-out ${delay}ms infinite`,
        transform: isHovered ? "scale(1.1) translateY(-5px)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Palestrante: ${name}`}
    >
      <div className="absolute inset-0 bg-gradient-cev opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-white/20 group-hover:ring-4 transition-all duration-300">
          {image && !imageError ? (
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-cev flex items-center justify-center">
              <User className="w-10 h-10 text-white/80" />
            </div>
          )}
        </div>

        <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-gradient-cev transition-all duration-300">
          {name}
        </h4>
        <p className="text-white/70 text-xs mb-1">{title}</p>
        {speciality && (
          <p className="text-white/50 text-xs italic">{speciality}</p>
        )}
      </div>

      {/* Hover effect gradient */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-cev rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
    </div>
  );
};
