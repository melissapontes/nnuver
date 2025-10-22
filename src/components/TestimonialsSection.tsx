import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "O atendimento mudou a vida do meu gato!",
    author: "Maria S.",
    pet: "tutora do Tom",
  },
  {
    text: "Profissionais extremamente dedicados e atenciosos. Meu cão está muito melhor!",
    author: "João P.",
    pet: "tutor do Rex",
  },
  {
    text: "Excelente acompanhamento! Me sinto segura sabendo que minha pet está em boas mãos.",
    author: "Ana L.",
    pet: "tutora da Luna",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Sobre nós</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Equipe NNUVER</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/40" aria-hidden="true" />
                <p className="text-lg text-card-foreground italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
