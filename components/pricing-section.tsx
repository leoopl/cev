"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Check, Users } from "lucide-react";

interface PricingPhoto {
  src: string;
  alt: string;
}

const pricingPhotos: PricingPhoto[] = [
  { src: "/pricing.png", alt: "Oferta especial para duplas" },
  { src: "/pricing.png", alt: "Desconto exclusivo" },
  { src: "/pricing.png", alt: "Promoção limitada" },
  { src: "/pricing.png", alt: "Melhor custo-benefício" },
];

const PricingCarousel = () => (
  <div className="w-full max-w-2xl mx-auto">
    <Carousel
      opts={{
        align: "center",
        loop: true,
        skipSnaps: false,
        dragFree: false,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          stopOnFocusIn: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {pricingPhotos.map((photo, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                priority={index === 0}
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 600px"
              />
              {/* Subtle overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
);

const PricingFeatures = () => {
  const features = [
    "Acesso para 2 pessoas",
    // "Certificado de participação",
    // "Material complementar",
    "Networking exclusivo",
  ];

  return (
    <div className="items-center justify-around grid grid-rows-2 grid-flow-col gap-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="flex-shrink-0 size-5 rounded-full border-[#5bccb8] border-1 flex items-center justify-center">
            <Check className="size-3 text-[#5bccb8]" />
          </div>
          <span className="text-white/90 text-sm md:text-base">{feature}</span>
        </div>
      ))}
    </div>
  );
};

const PricingCard = () => (
  <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
    <div className="text-center space-y-15">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-[#5bccb8] leading-tight">
          Oferta Única
        </h2>
        <div className="flex items-center justify-center gap-2 text-white/80">
          <Users className="w-5 h-5" />
          <span className="text-lg md:text-xl">Você + um amigo</span>
        </div>
      </div>

      {/* CEV Logo */}
      <div className="flex justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
          <span className="text-[#5bccb8] font-bold text-lg md:text-xl">
            CEV
          </span>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-2">
        <p className="text-[#5bccb8] font-semibold text-lg md:text-xl">
          por apenas
        </p>
        <div className="flex items-baseline justify-center gap-1">
          {/* <span className="text-white/60 text-lg line-through">R$ 800,00</span> */}
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white">
            R$ 400
          </span>
          <span className="text-white/80 text-lg">,00</span>
        </div>
        {/* <p className="text-[#5bccb8] text-sm md:text-base">
          Economia de 50% • Pagamento único
        </p> */}
      </div>

      {/* Features */}
      <PricingFeatures />

      {/* CTA Button */}
      <Button
        size="lg"
        className="w-full bg-[#ad6ca5] text-white font-bold text-lg md:text-xl py-4 md:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
      >
        GARANTIR MINHA VAGA
      </Button>

      <p className="text-white/60 text-xs md:text-sm">
        ⏰ Oferta válida por tempo limitado
      </p>
    </div>
  </div>
);

const LogoSection = () => (
  <div className="flex justify-center">
    <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
      <Image
        src="/logo.png"
        alt="CEV Educacional Logo"
        fill
        className="object-contain drop-shadow-lg"
        sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
      />
    </div>
  </div>
);

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 w-full overflow-hidden bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Pricing Card */}
          <div className="flex flex-col h-full justify-center space-y-8 ">
            <PricingCard />
          </div>

          {/* Right Column - Carousel & Logo */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-2 group font-montserrat lg:ml-25 text-base text-white sm:text-lg md:text-xl">
              <p className="font-montserrat text-sm font-medium uppercase tracking-wide text-white sm:text-base md:text-lg">
                PSICOLOGIA BASEADA EM EVIDÊNCIAS |
              </p>
              <Link
                href="https://www.instagram.com/ceveducacional"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5bccb8] transition-colors duration-300"
              >
                @ceveducacional
              </Link>
            </div>

            <PricingCarousel />
            <LogoSection />
          </div>
        </div>
      </div>
    </section>
  );
}
