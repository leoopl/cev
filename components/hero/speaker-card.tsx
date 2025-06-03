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
  state,
  speciality,
  image,
  delay,
  index,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 p-4 transform transition-all duration-500 cursor-pointer w-44 h-52"
      style={{
        animationDelay: `${delay}ms`,
        animation: `float-enhanced ${
          6 + index
        }s ease-in-out ${delay}ms infinite`,
        transform: isHovered ? "scale(1.05) translateY(-8px)" : "scale(1)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(147, 51, 234, 0.3)"
          : "0 8px 20px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Palestrante: ${name}`}
    >
      <div className="absolute inset-0 bg-gradient-cev opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-white/20 group-hover:ring-4 group-hover:ring-purple-400/50 transition-all duration-300 mx-auto">
          {image && !imageError ? (
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-cev flex items-center justify-center">
              <User className="w-8 h-8 text-white/80" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="text-center flex-1 flex flex-col justify-center">
          <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-gradient-cev transition-all duration-300 leading-tight">
            {name}
          </h4>
          <p className="text-white/70 text-xs mb-1 leading-relaxed">{state}</p>
          {speciality && (
            <p className="text-white/50 text-xs italic leading-relaxed">
              {speciality}
            </p>
          )}
        </div>
      </div>

      {/* Enhanced hover effect */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-cev rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
      <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500" />
    </div>
  );
};
