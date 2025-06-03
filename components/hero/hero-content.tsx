import React from "react";
import { HeroCTA } from "./hero-cta";
import { HeroDescription } from "./hero-description";
import { HeroHeading } from "./hero-heading";
import { HeroVisual } from "./hero-visual";

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 container mx-auto px-6 py-12 md:py-20 min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div className="space-y-8 lg:space-y-10">
          <HeroHeading />
          <HeroDescription />
          <HeroCTA />
        </div>

        <div className="hidden lg:block h-[600px]">
          <HeroVisual />
        </div>
      </div>
    </div>
  );
};
