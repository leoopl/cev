"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import React from "react";
import { CEVLogo } from "./cev-logo";

interface SpeakerData {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string;
}

// Seus dados de palestrantes
const speakers: SpeakerData[] = [
  {
    id: "1",
    name: "Dr. Cristiano Nabuco",
    state: "São Paulo",
    description:
      "Psicólogo e palestrante, dono de uma vasta experiência clínica e acadêmica, Cristiano Nabuco ao longo de sua carreira desenvolveu protocolos de atendimento clínico, coordenando o Serviço de Psicologia do Ambulatório de Transtornos Alimentares (AMBULIM - IPq/HCFMUSP). Nabuco é criador de uma unidade pioneira no país para o atendimento de pacientes dependentes em tecnologia, desenvolvendo modelos de intervenção em psicoterapia. Além disso, coordena o Programa Ambulatorial integrado dos Transtornos do Impulso (PRO-AMITI - IPq/HCFMUSP), é diretor do Núcleo de Terapias Virtuais para o Tratamento de Saúde Mental (Perseus - Realidade Virtual) e consultor técnico do Governo Federal para o Programa Reconecte. Como autor, publicou diversos livros abordando temas variados da psicologia, psiquiatria e da saúde mental. Uma de suas publicações 'Internet addiction: a handbook and guide to evaluation and treatment', já foi traduzida para 7 idiomas. Também é autor do best-seller intitulado 'Psicologia do Cotidiano' e 'Internet addiction in children and adolescents'",
    image: "/nabuco.png",
  },
  {
    id: "2",
    name: "Dra. Cris Shumann",
    state: "Minas Gerais",
    description:
      "Psicóloga, Doutora e Mestre em Saúde pela Universidade Federal de Juiz de Fora, Certificada por Harvard e por Cambridge no tratamento de casais, Especialista em Políticas e Pesquisas em Saúde Coletiva (UFJF), especialista em Terapia Cognitivo Comportamental pela Faculdade Redentor. Fundadora do Grupo Casule (casule.com) e do canal @Casule no youtube. Mentora da Formação em Terapeutas de Casais e Terapeutas de Relacionamentos e Fundadora da maior comunidade de Terapeutas de Relacionamentos do Brasil (TERA).",
    image: "/cris.png",
  },
  {
    id: "3",
    name: "Dr. Wilson Melo",
    state: "Rio Grande do Sul",
    description:
      "Doutor em Psicologia (UFRGS), com estágio de pesquisa na University of Virginia (USA). Mestre em Psicologia Clínica (PUCRS) e com Treinamento Intensivo em Terapia Comportamental Dialética (The Linehan Institute Behavioral Tech), foi professor de Graduação em Psicologia durante dez anos (FACCAT / ULBRA / IBGEN). Atualmente, é professor de Pós-Graduação em nível de Especialização em Terapias Cognitivas e Contextuais em diversos estados do Brasil. Ministrou curso como Professor Convidado na Palo Alto University (USA) sobre Terapia Comportamental Dialética (DBT) para o Transtorno da Personalidade Borderline e também Adaptações culturais da DBT no Brasil. Participou dos Estudos de Campo para elaboração do Código Internacional de Doenças, CID 11 (OMS). Ex-Presidente da Federação Brasileira de Terapias Cognitivas - FBTC.",
    image: "/wilson.png",
  },
  {
    id: "4",
    name: "Me. Renata Moreira",
    state: "Minas Gerais",
    description:
      "Psicóloga, formada pela PUC Minas, professora e escritora. Mestre em cognição e comportamento pela Universidade Federal de Minas Gerais, Especialista em Terapia Cognitivo Comportamental pelo ITC, SP, Formada em Terapia de Esquemas pela Wainer Psicologia Cognitiva, e certificada pelo Gottman Institute Method of Couple's Therapy, Estados Unidos, atua com adultos, casais e famílias. Atualmente coordena os projetos Mentes Funcionais (@mentesfuncionais) e Casais Funcionais (@casaisfuncionais), e se dedica a levar terapia para todas as pessoas. É Facilitadora de grupos de estudos, supervisora clínica, workshops e palestras voltadas á temas de saúde emocional nas relações interpessoais e conjugais.",
    image: "/renata.png",
  },
  {
    id: "5",
    name: "Dra. Cris Manfro",
    state: "Rio Grande do Sul",
    description:
      "Cris Manfro é psicóloga, terapeuta de casais e mentora de relacionamentos. Já atuou como supervisora em diversos cursos de especialização. E hoje é a maior referência do país em Crises no Casamento. Nos últimos 35 anos, ela orientou centenas de casais a superarem graves crises no casamento por diversos motivos, como por exemplo: traição, insegurança e ciúmes, falta de diálogo, falta de conexão, brigas, rotina, filhos, conflitos de família e problemas financeiros. Cris se considera uma fiel defensora dos relacionamentos. E acredita que pequenos ajustes nas crenças e rotinas do casal podem ser responsáveis por mudanças incríveis.",
    image: "/manfro.png",
  },
  {
    id: "6",
    name: "Dra. Amélia Guimarães",
    state: "Alagoas",
    description:
      "Coordenadora do CEV Educacional, treinadora de psicólogos em todo o Brasil. Autora de 'Psicologia Baseada em Evidências para Relacionamentos', coautora da ferramenta de Habilidades em DBT. Core Skills em EFT para Casais pelo ICEEFT no Canadá. Mestrado em Psicologia da Saúde em andamento.",
    image: "/amelia.png",
  },
  {
    id: "7",
    name: "Dr. Leonardo Naves",
    state: "Alagoas",
    description:
      "Psicólogo Clínico com vasta experiência em Terapia Cognitivo-Comportamental e Neuropsicologia, focado no tratamento de transtornos de ansiedade, depressão e no desenvolvimento de estratégias para o bem-estar emocional.",
    image: "/naves.png",
  },
  {
    id: "8",
    name: "Dra. Isabella Parros",
    state: "São Paulo",
    description:
      "Terapeuta de Casais e Famílias, Mestre em Psicologia Clínica. Especialista em comunicação afetiva, resolução de conflitos e fortalecimento de vínculos familiares e conjugais, promovendo relações mais saudáveis.",
    image: "/wilson.png",
  },
];

const SpeakerCard = ({ speaker }: { speaker: SpeakerData }) => {
  return (
    <div className="w-full max-w-9xl mx-auto h-[20rem] sm:h-[30rem] md:h-[40rem] lg:h-[50rem] rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
      <div className="relative w-full h-full">
        {/* Background Image */}
        <Image
          src={speaker.image}
          alt={`Foto de ${speaker.name}`}
          fill
          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          priority={parseInt(speaker.id) <= 3}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
        />

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div> */}

        {/* Content positioned in top left */}
        <div className="absolute top-0 left-0 p-6 md:p-8 lg:p-12 text-white z-10 max-w-3xl">
          {/* Speaker Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-4 md:mb-6 drop-shadow-2xl">
            {speaker.name}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/95 drop-shadow-lg line-clamp-3 md:line-clamp-none">
            {speaker.description}
          </p>
        </div>

        {/* CEV Logo in bottom right */}
        <CEVLogo className="absolute size-30 md:size-50 bottom-0.5 right-8" />

        {/* State badge in top right */}
        {/* <div className="absolute top-6 right-6 md:top-8 md:right-8">
          <div className="bg-[#5bccb8] px-4 py-2 rounded-full text-black text-sm md:text-base font-semibold backdrop-blur-sm">
            {speaker.state}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default function SpeakersSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 md:py-24 w-full overflow-hidden">
      {/* <div className="container mx-auto px-4 mb-10 md:mb-16 text-center">
        <h2 className="text-3xl font-poppins sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
          Palestrantes Convidados
        </h2>
        <p className="text-base font-montserrat sm:text-lg md:text-xl text-neutral-300 mx-auto max-w-3xl">
          Profissionais renomados que irão compartilhar insights valiosos e
          transformar sua perspectiva.
        </p>
      </div> */}

      <div className="w-full px-4 md:px-8">
        <Carousel
          setApi={setApi}
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
            {speakers.map((speaker) => (
              <CarouselItem key={speaker.id} className="pl-2 md:pl-4">
                <SpeakerCard speaker={speaker} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel indicators */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
                current === index + 1
                  ? "bg-[#5bccb8] border-[#5bccb8] shadow-lg shadow-[#5bccb8]/30"
                  : "border-white/40 hover:border-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
