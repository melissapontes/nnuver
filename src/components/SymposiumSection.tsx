import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SymposiumSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Inscrições Abertas
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  1º Simpósio NNUVER
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Participe do primeiro simpósio sobre nefrologia e urologia veterinária. 
                  Uma oportunidade única de aprendizado e networking com especialistas da área.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Data em breve</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Local a confirmar</span>
                  </div>
                </div>

                <Link to="/conhecimento#eventos">
                  <Button size="lg" className="group">
                    Ver Detalhes e Inscrever-se
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
