"use client";
import React from "react";
import { Users, Heart, Brain, Sparkles, Calendar, MapPin } from "lucide-react";
import type { ValueItem } from "./types";

export const HeroDescription: React.FC = () => {
  const values: ValueItem[] = [
    { icon: Users, text: "Conexão", description: "Networking profissional" },
    {
      icon: Heart,
      text: "Generosidade",
      description: "Compartilhamento de conhecimento",
    },
    { icon: Brain, text: "Conhecimento", description: "Baseado em evidências" },
    { icon: Sparkles, text: "Experiência", description: "Aprendizado prático" },
  ];

  return (
    <div
      className="space-y-6 animate-fade-in-up"
      style={{ animationDelay: "200ms" }}
    >
      <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
        Três dias de imersão intensiva em psicologia baseada em evidências,
        promovendo conexões genuínas e aprendizado transformador com os maiores
        especialistas do Brasil.
      </p>

      <div className="flex flex-wrap gap-3">
        {values.map((value, index) => (
          <div
            key={value.text}
            className="group relative badge-gradient-outline flex items-center gap-2 px-4 py-2 rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-gradient-cev hover:text-white cursor-pointer"
            style={{
              animationDelay: `${300 + index * 100}ms`,
              animation: "fade-in-up 0.8s ease-out forwards",
            }}
            role="button"
            tabIndex={0}
            aria-label={`${value.text}: ${value.description}`}
          >
            <value.icon className="w-4 h-4 group-hover:animate-pulse" />
            <span className="text-sm font-medium">{value.text}</span>

            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {value.description}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 text-white/80">
        <div className="flex items-center gap-2 group">
          <Calendar className="size-5 group-hover:text-white transition-colors" />
          <span className="group-hover:text-white transition-colors">
            14-16 de Agosto, 2025
          </span>
        </div>
        <div className="flex items-center gap-2 group">
          <MapPin className="size-5 group-hover:text-white transition-colors" />
          <span className="group-hover:text-white transition-colors">
            Centro Cultural do Cesmac, Maceió - AL
          </span>
        </div>
      </div>
    </div>
  );
};
