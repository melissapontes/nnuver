import { Card, CardContent } from "@/components/ui/card";
import { Quote, ExternalLink } from "lucide-react";
import fredImage from "@/assets/fred.jpeg";
import melissaImage from "@/assets/melissa.jpg";
import telgaImage from "@/assets/telga.jpeg";
import eltonImage from "@/assets/elton.jpeg";
import allanImage from "@/assets/allan.jpg";

const testimonials = [
  {
    image: fredImage,
    author: "Frederico Cunegundes",
    title: "Médico Veterinário",
    description:
      "Atendimento especializadas em nefrologia e urologia de cães e gatos. Professor da Atuale Especialização Veterinária",
    education: "Pós Graduado em Nefrologia e Urologia Veterinárias.",
  },
  {
    image: melissaImage,
    author: "Melissa Pontes",
    title: "Médica Veterinária",
    description: "Atendimento focado no trato urinário de cães e gatos.",
    education:
      "Profissional premiada no Simpósio Internacional de Nefrologia e Urologia Veterinárias – Versão Ibero-Americana (SINUV, 2022). Pós-graduanda em Nefrologia e Urologia de Pequenos Animais (Anclivepa-SP), Mestre e Especialista em Engenharia de Software. Concluiu o Programa de Aprimoramento em Nefrologia de Pequenos Animais (paNpa). Utiliza inteligências artificiais aplicadas à nefrologia e atua como professora nesse tema.",
  },
  {
    image: telgaImage,
    author: "Telga Lucena Craveiro",
    title: "Médica Veterinária",
    description:
      "Professora de Graduação e Pós graduação em Medicina Veterinária. Coordenadora da Pós-Graduação em Nefrologia e urologia Veterinária da Atuale Especialização Veterinária.",
    education:
      "Residência (UFRPE) e Pós Graduação em Patologia Clínica (qualittas). Mestrado (tumor de mama em cadelas) e Doutorado (ênfase em hemodiálise) ambos com glutamina - UFRPE. Pós graduanda em hematologia clínica (Qualittas) e cannabis (Unyleya).",
  },
  {
    image: eltonImage,
    author: "Elton Medeiros",
    title: "Médico Veterinário",
    description: "Residência em cirurgia de pequenos animais. Mestre em Ciências Veterinárias - UFRPE",
    education: "Especialização em terapia intensiva veterinária de pequenos animais. Palestrante e Professor.",
  },
  {
    image: allanImage,
    author: "Allan Kardec",
    title: "Médico Veterinário",
    description:
      "Realiza procedimentos como cirurgias renais, cistotomias, implantes de sistemas avançados (Duplo J e SIDUS) e outras cirurgias de alta complexidade.",
    education: "Especializado no diagnóstico e tratamento de doenças do trato urinário de cães e gatos.",
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
                  <Quote className="h-8 w-8 text-[#00d4aa]/40" aria-hidden="true" />
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
