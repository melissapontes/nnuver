import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background z-0" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Núcleo de Nefrologia e Urologia Veterinárias em Recife.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Ciência que vira cuidado: educação para prevenir, diagnosticar cedo e tratar cães e gatos com doenças do
              trato urinário.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a href="#contato">Entre em contato</a>
              </Button>

              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary" asChild>
                <a href="#servicos">O que oferecemos</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Cão e gato saudáveis em ambiente veterinário"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
