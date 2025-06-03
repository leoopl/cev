import HeroSection from "@/components/hero/hero-section";
import { ConnectionNetwork } from "@/components/hero/connection-network";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Global gradient background encompassing all future components */}
      <div className="fixed inset-0 bg-gradient-cev -z-10">
        {/* Enhanced gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

        {/* Animated background network */}
        <ConnectionNetwork />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <HeroSection />
    </main>
  );
}
