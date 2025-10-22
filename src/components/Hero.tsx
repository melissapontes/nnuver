import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background z-0" />

      <div className="container relative z-10 pt-6 pb-12 md:pt-8 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Núcleo de Nefrologia e Urologia Veterinárias em Recife
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossa missão é transformar Ciência em cuidado: educação para prevenir, diagnosticar cedo e tratar cães e
              gatos com doenças do trato urinário.
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Cão e gato saudáveis em ambiente veterinário"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            <div className="relative">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 text-center">
                Assista nossas lives
              </h3>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <Card className="border-border">
                      <CardContent className="p-4">
                        <div className="aspect-video">
                          <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Vídeo 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <Card className="border-border">
                      <CardContent className="p-4">
                        <div className="aspect-video">
                          <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Vídeo 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <Card className="border-border">
                      <CardContent className="p-4">
                        <div className="aspect-video">
                          <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Vídeo 3"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-0 h-12 w-12" />
                <CarouselNext className="right-0 h-12 w-12" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
