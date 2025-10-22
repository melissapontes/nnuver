import { Coffee, BookOpen, Users, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Coffee,
    title: "Bom dia com Nefrologia",
    description:
      "Live semanal sobre Nefro e Uro. Toda quinta-feira, 10h — no Instagram @nnuver.vet. Linguagem didática e acessível sobre saúde renal de cães e gatos.",
  },
  {
    icon: BookOpen,
    title: "Centro de Conhecimento",
    description: "Artigos e boas práticas em nefrologia veterinária, do básico ao aplicado",
    link: "/conhecimento",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Educação</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Saúde urinária em foco!</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            const cardContent = (
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card h-full cursor-pointer">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );

            return service.link ? (
              <Link key={index} to={service.link} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
