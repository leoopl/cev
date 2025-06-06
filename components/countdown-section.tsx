"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CEVLogo } from "./cev-logo";

const TARGET_DATE = new Date(new Date().getFullYear(), 5, 7, 0, 0, 0); // June is month 5 (0-indexed)

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isTimeUp: boolean;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isTimeUp: true,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isTimeUp: false,
    };
  }
  return timeLeft;
}

export default function CountownSection() {
  const [time, setTime] = useState<TimeLeft>(calculateTimeLeft(TARGET_DATE));

  useEffect(() => {
    if (time.isTimeUp) return; // Stop interval if time is up

    const interval = setInterval(() => {
      setTime(calculateTimeLeft(TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, [time.isTimeUp]);

  return (
    <section className="py-16 md:py-24 w-full overflow-hidden bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            {time.isTimeUp ? (
              <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-red-500">
                OFERTA ENCERRADA!
              </h1>
            ) : (
              <>
                <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2">
                  ESTE LOTE ESGOTA EM:
                </h2>
                <div className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-[#5bccb8] flex justify-center lg:justify-start space-x-2 md:space-x-3">
                  <div>
                    <span>{String(time.days).padStart(2, "0")}</span>
                    <span className="block text-xs md:text-sm font-poppins font-normal text-white/70">
                      DIAS
                    </span>
                  </div>
                  <span>:</span>
                  <div>
                    <span>{String(time.hours).padStart(2, "0")}</span>
                    <span className="block text-xs md:text-sm font-poppins font-normal text-white/70">
                      HORAS
                    </span>
                  </div>
                  <span>:</span>
                  <div>
                    <span>{String(time.minutes).padStart(2, "0")}</span>
                    <span className="block text-xs md:text-sm font-poppins font-normal text-white/70">
                      MINUTOS
                    </span>
                  </div>
                  <span>:</span>
                  <div>
                    <span>{String(time.seconds).padStart(2, "0")}</span>
                    <span className="block text-xs md:text-sm font-poppins font-normal text-white/70">
                      SEGUNDOS
                    </span>
                  </div>
                </div>
                <p className="font-poppins text-lg md:text-xl text-neutral-300 mt-1">
                  Não perca! Últimas vagas com preço promocional até 07/06.
                </p>
              </>
            )}
            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full bg-[#ad6ca5] text-white font-bold text-lg md:text-xl py-4 md:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <Link
                href={"https://pay.kiwify.com.br/mOqGnCZ"}
                target="_blank"
                rel="noopener noreferrer"
              >
                GARANTIR MINHA VAGA
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-2 group font-montserrat text-base text-white sm:text-lg md:text-xl">
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

            <CEVLogo className="size-40 md:size-50 lg:size-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
