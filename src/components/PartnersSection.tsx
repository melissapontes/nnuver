import atualeImage from "@/assets/atuale.jpeg";
import fitocleenImage from "@/assets/fitocleen.jpeg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const partners = [
  {
    name: "Atuale",
    image: atualeImage,
    instagramUrl: "https://www.instagram.com/atualevet/",
  },
  {
    name: "Fitocleen",
    image: fitocleenImage,
    instagramUrl: "https://www.instagram.com/fitocleem/",
  },
];

const PartnersSection = () => {
  return (
    <section id="parceiros" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Nossos Parceiros</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <a
                  href={partner.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 h-64"
                  aria-label={`Visite ${partner.name} no Instagram`}
                >
                  <img src={partner.image} alt={`Logo ${partner.name}`} className="w-48 h-48 object-contain" />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSection;
