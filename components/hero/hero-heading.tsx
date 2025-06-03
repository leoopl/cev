"use client";
import React, { useState, useEffect } from "react";
import { Brain } from "lucide-react";

export const HeroHeading: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "3º Congresso CEV";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex items-center gap-2 text-white/80">
        <Brain className="w-5 h-5 animate-pulse" />
        <span className="text-sm font-medium tracking-wider uppercase">
          Psicologia Baseada em Evidências
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
        <span className="block relative">
          <span className="gradient-text">{displayText}</span>
          {showCursor && (
            <span className="absolute -right-2 top-0 text-white animate-pulse">
              |
            </span>
          )}
        </span>
        <span
          className="block text-3xl md:text-4xl mt-2 text-white/90 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          Maceió 2025
        </span>
      </h1>

      {/* Decorative line */}
      <div
        className="w-24 h-1 bg-gradient-cev rounded-full animate-fade-in-up"
        style={{ animationDelay: "1.2s" }}
      />
    </div>
  );
};
