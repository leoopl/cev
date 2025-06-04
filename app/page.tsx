import { HeroSection } from "@/components/hero-section";
import { InteractiveBackground } from "@/components/interactive-background";
import CarouselSection from "@/components/carousel-section";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#3b0b80] to-[#770b80] overflow-hidden">
      {/* Animated Background */}
      <InteractiveBackground />

      {/* Main Content */}
      <div className="flex flex-col gap-10 z-10">
        <HeroSection />
        <CarouselSection />
      </div>
    </main>
  );
}
