import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Instagram } from "lucide-react";

const SymposiumSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-card to-card/50 border-2 border-primary rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 md:gap-6">
              {/* Icon highlight */}
              <div className="flex-shrink-0 bg-gradient-to-br from-primary to-accent p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg">
                <Calendar className="w-8 h-8 md:w-12 md:h-12 text-primary-foreground" />
              </div>

              <div className="flex-1 w-full">
                {/* Badge destaque */}
                <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-white"></span>
                  Inscrições Abertas
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  1º Simpósio NNUVER
                </h2>

                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Participe do 1º simpósio NNUVER sobre nefrologia e urologia veterinárias. Uma excelente oportunidade
                  de aprendizado e networking com profissionais especializados na área.
                </p>

                <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-foreground font-medium">
                    <div className="bg-primary/10 p-1.5 md:p-2 rounded-lg flex-shrink-0">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <span>20 de dezembro de 2025</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-foreground font-medium">
                    <div className="bg-primary/10 p-1.5 md:p-2 rounded-lg flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="break-words">Rua Padre Giordano, 169, Boa Viagem, Recife - PE</span>
                      <a 
                        href="https://www.instagram.com/atuale.vet/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors text-xs md:text-sm"
                      >
                        <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        @atuale.vet
                      </a>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://www.sympla.com.br/evento/1-simposio-nnuver-de-nefrologia-e-urologia-veterinarias/3192930" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto"
                >
                  <Button size="lg" className="group shadow-lg w-full md:w-auto">
                    Inscreva-se
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymposiumSection;
