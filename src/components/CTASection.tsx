import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Cuide da saúde renal do seu pet hoje</h2>

          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">Agende um atendimento com nossa equipe</p>

          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 shadow-xl"
            asChild
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
