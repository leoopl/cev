import React from "react";
import type { SpeakerData } from "./types";
import { SpeakerCard } from "./speaker-card";

export const HeroVisual: React.FC = () => {
  const speakers: SpeakerData[] = [
    {
      id: "1",
      name: "Dr. Cristiano Nabuco",
      title: "Psicologia Digital",
      speciality: "Dependência Tecnológica",
    },
    {
      id: "2",
      name: "Dra. Ana Silva",
      title: "Neuropsicologia",
      speciality: "Cognição e Aprendizagem",
    },
    {
      id: "3",
      name: "Dr. Carlos Mendes",
      title: "Terapia Cognitiva",
      speciality: "TCC e Mindfulness",
    },
  ];

  const positions = [
    { top: "5%", left: "10%", rotate: -5 },
    { top: "35%", left: "50%", rotate: 5 },
    { top: "65%", left: "15%", rotate: -3 },
  ];

  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="relative w-full max-w-lg">
        {/* Central glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-gradient-cev-radial rounded-full blur-3xl opacity-30 animate-pulse" />
          <div
            className="absolute inset-0 w-64 h-64 bg-gradient-cev-radial rounded-full blur-2xl opacity-20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Floating speaker cards */}
        <div className="relative z-10">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className="absolute transition-all duration-700"
              style={{
                top: positions[index].top,
                left: positions[index].left,
                transform: `rotate(${positions[index].rotate}deg)`,
              }}
            >
              <SpeakerCard {...speaker} delay={index * 200} index={index} />
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 border-2 border-purple-500/30 rounded-full animate-spin-slow" />
        <div
          className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-pink-500/30 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        />

        {/* Additional decorative circles */}
        <div className="absolute top-1/4 right-0 w-16 h-16 border border-white/10 rounded-full animate-float" />
        <div
          className="absolute bottom-1/4 left-0 w-12 h-12 bg-gradient-cev opacity-20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  );
};
