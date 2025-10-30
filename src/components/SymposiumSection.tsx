import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SymposiumSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-card to-card/50 border-2 border-primary rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
              {/* Icon highlight */}
              <div className="flex-shrink-0 bg-gradient-to-br from-primary to-accent p-4 rounded-2xl shadow-lg">
                <Calendar className="w-12 h-12 text-primary-foreground" />
              </div>

              <div className="flex-1">
                {/* Badge destaque */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-md animate-pulse">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                  </span>
                  Inscrições Abertas
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  1º Simpósio NNUVER
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Participe do 1º simpósio NNUVER sobre nefrologia e urologia veterinárias. Uma excelente oportunidade
                  de aprendizado e networking com profissionais especializados na área.
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3 text-foreground font-medium">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span>20 de dezembro de 2025</span>
                  </div>
                  <div className="flex items-start gap-3 text-foreground font-medium">
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>AtualeVet, Rua Padre Giordano, 169, Boa Viagem, Recife - PE</span>
                  </div>
                </div>

                <Link to="/conhecimento#eventos">
                  <Button size="lg" className="group shadow-lg">
                    Inscreva-se
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymposiumSection;
