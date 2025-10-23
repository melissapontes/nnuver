import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import fredImage from "@/assets/fred.jpeg";
import melissaImage from "@/assets/melissa.jpg";
import telgaImage from "@/assets/telga.jpeg";

const testimonials = [
  {
    image: fredImage,
    author: "Frederico Cunegundes",
    title: "Médico Veterinário",
    description: "Atendimento especializadas em nefrologia e urologia de cães e gatos",
    education: "Pós Graduado em Nefrologia e Urologia Veterinária",
  },
  {
    image: melissaImage,
    author: "Melissa Pontes",
    title: "Médica Veterinária",
    description: "Programa de Aprimoramento em Nefrologia de Pequenos Animais – paNpa",
    education: "Pós Graduanda em Nefrologia e Urologia de Pequenos Animais – Anclivepa SP",
  },
  {
    image: telgaImage,
    author: "Telga Craveiro",
    title: "Médica Veterinária",
    description: "Residência em patologia clínica, pós graduação em patologia clínica, mestrado e doutorado na UFRPE, doutorado com hemodiálise.",
    education: "Professora de graduação e pós graduação. Coordenadora da pós-graduação em Nefrologia Veterinária da Atuale. Pós graduanda em hematologia e canabis.",
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
                {testimonial.image ? (
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <Quote className="h-8 w-8 text-primary/40" aria-hidden="true" />
                )}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                  {testimonial.title && (
                    <p className="text-sm font-medium text-card-foreground mt-1">{testimonial.title}</p>
                  )}
                  {testimonial.description && (
                    <p className="text-sm text-muted-foreground mt-2">{testimonial.description}</p>
                  )}
                  {testimonial.education && (
                    <p className="text-sm text-muted-foreground mt-2">{testimonial.education}</p>
                  )}
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
