"use client";

import React, { useState } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { Button } from "../ui/button";

export const HeroCTA: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePrimaryClick = () => {
    setIsLoading(true);
    // Simulate action
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
      style={{ animationDelay: "400ms" }}
    >
      <Button
        onClick={handlePrimaryClick}
        disabled={isLoading}
        className="btn-gradient px-15 py-7 rounded-lg text-lg font-medium text-white w-2xs hover:text-black"
        aria-label="Inscrever-se no congresso"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Processando...</span>
          </>
        ) : (
          <>
            <span>Inscreva-se Agora</span>
            <ChevronRight className="size-4 mt-0.5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>

      <Button
        className="btn-gradient-outline px-15 py-7 rounded-lg text-lg font-medium text-white w-2xs hover:text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        aria-label="Mais informações sobre o congresso"
      >
        Saiba Mais
      </Button>
    </div>
  );
};
