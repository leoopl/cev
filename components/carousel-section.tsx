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

interface carouselCardProps {
  title: string;
  img: string;
  descricion: string;
}

const CarouselCard = ({ title, img, descricion }: carouselCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-white font-poppins font-bold text-2xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center">
          <Image src={img} alt={title} width={100} height={100} />
        </div>
      </CardContent>
      <CardFooter className="text-center font-montserrat text-sm text-white">
        {descricion}
      </CardFooter>
    </Card>
  );
};

export default function CarouselSection() {
  const carouselItem = [
    {
      title: "Conexão Genuína",
      img: "/cris.png",
      descricion:
        "Uma atmosfera acolhedora com AFETO REAL, conexões, networking e experiências de reparação emocional.",
    },
    {
      title: "Prática REAL",
      img: "/cris.png",
      descricion:
        "Passo a passo, Role Plays, vivências, CASOS REAIS e prática.",
    },
    {
      title: "Generosidade",
      img: "/cris.png",
      descricion:
        "Generosidade na transmissão do conhecimento é a nossa marca: sem medo de compartilhar!",
    },
  ];
  return (
    <section className="w-full py-16 z-10">
      <Carousel className="w-full max-h-[300px]">
        <CarouselContent>
          {carouselItem.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <CarouselCard
                  title={item.title}
                  img={item.img}
                  descricion={item.descricion}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
