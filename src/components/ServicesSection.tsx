import { Shield, Sunrise, Users, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Prevenção e cuidados com os rins",
    description: "Programas de acompanhamento preventivo para manter a saúde renal do seu pet em dia.",
  },
  {
    icon: Sunrise,
    title: "Bom dia com Nefrologia",
    description: "Conteúdo educativo diário sobre saúde renal e bem-estar dos seus animais de estimação.",
  },
  {
    icon: Users,
    title: "Equipe especializada",
    description: "Nefrologistas e urologistas veterinários com vasta experiência e dedicação.",
  },
  {
    icon: Video,
    title: "Atendimento presencial e online",
    description: "Flexibilidade para cuidar do seu pet onde você estiver, com qualidade e segurança.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos cuidado completo e especializado para a saúde renal dos seus pets
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
