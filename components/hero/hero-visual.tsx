import React from "react";
import type { SpeakerData } from "./types";
import { SpeakerCard } from "./speaker-card";

export const HeroVisual: React.FC = () => {
  const speakers: SpeakerData[] = [
    {
      id: "1",
      name: "Dr. Cristiano Nabuco",
      state: "São Paulo",
      speciality: "Dependência Tecnológica",
      image: "/nabuco.png",
    },
    {
      id: "2",
      name: "Dra. Cris Shumann",
      state: "Minas Gerais",
      speciality: "Grupo Casule",
      image: "/cris.png",
    },
    {
      id: "3",
      name: "Dr. Wilson Melo",
      state: "Rio Grande do Sul",
      speciality: "Terapia Comportamental Dialética (DBT)",
      image: "/wilson.png",
    },
    {
      id: "4",
      name: "Me. Renata Moreira",
      state: "Minas Gerais",
      speciality: "Mentes Funcionais e Casais Funcionais",
      image: "/renata.png",
    },
    {
      id: "5",
      name: "Dra. Cris Manfro",
      state: "Rio Grande do Sul",
      speciality: "Crises no Casamento",
      image: "/manfro.png",
    },
    {
      id: "6",
      name: "Dra. Amélia Guimarães",
      state: "Alagoas",
      speciality: "Crises no Casamento",
      image: "/amelia.png",
    },
    {
      id: "7",
      name: "Dr. Leonardo Naves",
      state: "Alagoas",
      speciality: "Crises no Casamento",
      image: "/naves.png",
    },
    {
      id: "8",
      name: "Dra. Isabella Parros",
      state: "São Paulo",
      speciality: "Crises no Casamento",
    },
  ];

  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="relative w-full max-w-lg h-full">
        {/* Central glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-gradient-cev-radial rounded-full blur-3xl opacity-30 animate-pulse" />
          <div
            className="absolute inset-0 w-64 h-64 bg-gradient-cev-radial rounded-full blur-2xl opacity-20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Responsive grid layout for speaker cards */}
        <div className="relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-full place-items-center">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="transform"
                style={{
                  transform: `rotate(${(index - 1) * 3}deg)`,
                }}
              >
                <SpeakerCard {...speaker} delay={index * 200} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-purple-500/30 rounded-full animate-spin-slow" />
        <div
          className="absolute bottom-10 left-10 w-32 h-32 border-2 border-pink-500/30 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "12s" }}
        />

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-0 w-16 h-16 border border-white/10 rounded-full animate-float-enhanced" />
        <div
          className="absolute bottom-1/4 left-0 w-12 h-12 bg-gradient-cev opacity-20 rounded-full animate-float-enhanced"
          style={{ animationDelay: "2s" }}
        />

        {/* New floating particles */}
        <div
          className="absolute top-1/3 left-1/4 w-8 h-8 bg-purple-400/20 rounded-full blur-sm animate-float-enhanced"
          style={{ animationDelay: "3s", animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-pink-400/20 rounded-full blur-sm animate-float-enhanced"
          style={{ animationDelay: "1.5s", animationDuration: "8s" }}
        />
      </div>
    </div>
  );
};
