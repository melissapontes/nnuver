import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background z-0" />

      <div className="container relative z-10 px-4 pt-6 pb-12 md:pt-8 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Núcleo de Nefrologia e Urologia Veterinárias em Recife
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Nossa missão é transformar Ciência em cuidado: educação para prevenir, diagnosticar cedo e tratar cães e
              gatos com doenças do trato urinário.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="relative px-4 md:px-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl md:rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Cão e gato saudáveis em ambiente veterinário"
                className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Seção temporariamente desabilitada para corrigir responsividade */}
            {/* 
            <div className="relative px-4 md:px-0">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 text-center">
                Dicas sobre saúde renal
              </h3>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="ml-0">
                  <CarouselItem className="pl-0 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="border-2 border-[#00d4aa] h-full">
                      <CardContent className="p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                          Você sabe o que os rins fazem pelo seu pet?
                        </h4>
                        <p className="text-muted-foreground">
                          Descubra porque eles são vitais para a saúde do cão e do gato.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="pl-0 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="border-2 border-[#00d4aa] h-full">
                      <CardContent className="p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                          Função dos rins: Filtração
                        </h4>
                        <p className="text-muted-foreground">
                          Os rins filtram o sangue, removendo resíduos do organismo.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="pl-0 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="border-2 border-[#00d4aa] h-full">
                      <CardContent className="p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                          Função dos rins: Equilíbrio
                        </h4>
                        <p className="text-muted-foreground">
                          Os rins auxiliam na regulação do PH sanguíneo.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="pl-0 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="border-2 border-[#00d4aa] h-full">
                      <CardContent className="p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                          Função dos rins: Controle da pressão arterial
                        </h4>
                        <p className="text-muted-foreground">
                          Os rins auxiliam na regulação da pressão arterial.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="pl-0 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="border-2 border-[#00d4aa] h-full">
                      <CardContent className="p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                          Função dos rins: Endócrina
                        </h4>
                        <p className="text-muted-foreground">
                          Os rins produzem hormônios.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="pl-0 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="border-2 border-[#00d4aa] h-full">
                      <CardContent className="p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">
                          Função dos rins: Regulação hídrica
                        </h4>
                        <p className="text-muted-foreground">
                          Os rins contribuem para a regulação dos níveis de água do corpo.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex md:left-0 md:h-10 md:w-10" />
                <CarouselNext className="hidden md:flex md:right-0 md:h-10 md:w-10" />
              </Carousel>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
