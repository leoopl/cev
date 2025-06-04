import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-[-5rem]">
          <h1 className="text-[35rem] md:text-[45rem] lg:text-[45rem] text-[#270853]/80 font-black leading-none select-none">
            3
          </h1>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col mt-43 md:mt-60">
          <div className="space-y-5 sm:ml-24 md:ml-40">
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
            <h2 className="font-poppins text-3xl font-extrabold leading-tight text-[#5bccb8] sm:text-5xl md:text-7xl lg:text-8xl">
              CONGRESSO CEV <span className="text-white">| MCZ</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-2 group font-montserrat lg:ml-25 text-base text-white sm:text-lg md:text-xl">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 " />
                <span>14-16 de Agosto, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 " />
                <span>Centro Cultural do Cesmac</span>
              </div>
            </div>
          </div>

          {/* CTA + Logo */}
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-10 sm:mr-20">
            {/* <Image src="/logo.png" alt="CEV Logo" width={300} height={300} /> */}

            {/* Logo */}
            <div className="relative size-40 sm:size-50 md:size-60 lg:size-70">
              <Image
                src="/logo.png"
                alt="CEV Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Button */}
            <Button className="rounded-lg bg-[#0b6380] sm:mt-11 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-10 sm:py-5 sm:text-lg md:px-12 md:py-6 md:text-xl">
              QUERO PARTICIPAR
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
