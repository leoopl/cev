"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface CarouselCardProps {
  title: string;
  img: string;
  description: string;
  gradientIndex: number;
}

const CarouselCard = ({
  title,
  img,
  description,
  gradientIndex,
}: CarouselCardProps) => {
  const gradientPatterns = [
    "bg-gradient-to-br from-[#4d0b80] via-[#270853] to-[#1b042d]",
    "bg-gradient-to-br from-[#12186a] via-[#7c5797] via-[#8200e9] to-[#12186a]",
    "bg-gradient-to-br from-[#0b6380] via-[#5a307a] via-[#12186a] to-[#270853]",
  ];
  const gradientClass = gradientPatterns[gradientIndex % 3];

  return (
    <Card
      className={`${gradientClass} h-[35rem] w-full mx-auto border-white/20 border-2 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.5)] rounded-xl flex flex-col justify-between`}
    >
      <CardHeader className="min-h-[6rem] md:min-h-[7rem] flex flex-col justify-center items-center px-4">
        <CardTitle className="text-center text-white pt-3 font-poppins font-bold text-2xl md:text-3xl leading-tight drop-shadow-lg">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="relative w-full h-52 md:h-60 overflow-hidden shadow-xl ring-2 ring-white/30 rounded-lg">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
      </CardContent>

      <CardFooter className="min-h-[8rem] md:min-h-[9rem] flex flex-col justify-center px-4 pb-3">
        <p className="text-center font-montserrat text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md">
          {description}
        </p>
      </CardFooter>
    </Card>
  );
};

export default function CarouselSection() {
  const carouselItemsData = [
    {
      title: "Conexão Genuína",
      img: "/cg.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
    {
      title: "Visão Inovadora",
      img: "/vi.png",
      description:
        "Abordagens contemporâneas e eficazes para os desafios da psicologia moderna.",
    },
    {
      title: "Conexão Genuína",
      img: "/cg1.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr1.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge1.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
    {
      title: "Visão Inovadora",
      img: "/vi1.png",
      description:
        "Abordagens contemporâneas e eficazes para os desafios da psicologia moderna.",
    },
    {
      title: "Conexão Genuína",
      img: "/cg2.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr2.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge2.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
    {
      title: "Visão Inovadora",
      img: "/vi2.png",
      description:
        "Abordagens contemporâneas e eficazes para os desafios da psicologia moderna.",
    },
    {
      title: "Conexão Genuína",
      img: "/cg3.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr3.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge3.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
    {
      title: "Visão Inovadora",
      img: "/vi3.png",
      description:
        "Abordagens contemporâneas e eficazes para os desafios da psicologia moderna.",
    },
    {
      title: "Conexão Genuína",
      img: "/cg4.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr4.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge4.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
    {
      title: "Visão Inovadora",
      img: "/vi4.png",
      description:
        "Abordagens contemporâneas e eficazes para os desafios da psicologia moderna.",
    },
    {
      title: "Conexão Genuína",
      img: "/cg5.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr5.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge5.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
    {
      title: "Visão Inovadora",
      img: "/vi5.png",
      description:
        "Abordagens contemporâneas e eficazes para os desafios da psicologia moderna.",
    },
    {
      title: "Conexão Genuína",
      img: "/cg.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr6.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge6.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
    {
      title: "Visão Inovadora",
      img: "/vi6.png",
      description:
        "Abordagens contemporâneas e eficazes para os desafios da psicologia moderna.",
    },
    {
      title: "Conexão Genuína",
      img: "/cg1.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr7.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge7.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
    {
      title: "Visão Inovadora",
      img: "/vi7.png",
      description:
        "Abordagens contemporâneas e eficazes para os desafios da psicologia moderna.",
    },
    {
      title: "Conexão Genuína",
      img: "/cg2.png",
      description:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/pr8.png",
      description:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/ge8.png",
      description:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
  ];
  return (
    <section className="w-full py-16 z-10">
      <div className="relative">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-[100rem] mx-auto px-4"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselItemsData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <CarouselCard
                    title={item.title}
                    img={item.img}
                    description={item.description}
                    gradientIndex={index}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-10 md:size-12 bg-white/10 border-white/20 border-2 hover:bg-white/20 hover:border-white/30 text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110" />
          <CarouselNext className="size-10 md:size-12 bg-white/10 border-white/20 border-2 hover:bg-white/20 hover:border-white/30 text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110" />
        </Carousel>
      </div>
    </section>
  );
}
