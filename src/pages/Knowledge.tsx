import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calendar, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Em breve",
    description: "Artigos e orientações sobre saúde renal de cães e gatos",
    link: "#",
    category: "Nefrologia e Urologia",
  },
];

const eventos = [
  {
    title: "1º Simpósio NNUVER",
    description: "Nefrologia e Urologia Veterinárias",
    link: "https://www.sympla.com.br/evento/1-simposio-nnuver-de-nefrologia-e-urologia-veterinarias/3192930",
    date: "Dezembro 2025",
  },
  {
    title: "Nefro em Foco",
    description: "Congresso Nefrologia Veterinária em Foco 2026",
    link: "https://congressovetemfoco.com.br/congresso-nefro-em-foco/",
    date: "Abril 2026",
  },
  {
    title: "CBA",
    description: "45º Congresso Brasileiro da Anclivepa",
    link: "https://www.cbago.com.br/",
    date: "Maio 2026",
  },
  {
    title: "2cinuv",
    description: "2º Congresso Internacional de Nefrologia e Urologia Veterinárias",
    link: "https://www.instagram.com/2cinuv/",
    date: "Julho 2026",
  },
];

const websites = [
  {
    title: "Sociedade Internacional de Interesse Renal (IRIS)",
    description: "A IRIS se dedica a aprimorar os padrões globais da nefrologia de pequenos animais",
    link: "http://www.iris-kidney.com",
    type: "Internacional",
  },
  {
    title: "Minnesota Urolith Center",
    description: "Padrão global para análise de urólitos e recomendações de tratamento.",
    link: "https://urolithcenter.org",
    type: "Internacional",
  },
  {
    title: "CBNUV",
    description: "Colégio Brasileiro de Nefrologia e Urologia Veterinárias",
    link: "https://cbnuv.com.br",
    type: "Nacional",
  },
];

const Knowledge = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Centro de Conhecimento</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Recursos educacionais em nefrologia e urologia veterinárias
              </p>
            </div>

            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="articles" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Artigos
                </TabsTrigger>
                <TabsTrigger value="eventos" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Eventos
                </TabsTrigger>
                <TabsTrigger value="websites" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Sites
                </TabsTrigger>
              </TabsList>

              <TabsContent value="articles" className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {article.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{article.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="eventos" className="space-y-6">
                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                  {eventos.map((evento, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <Calendar className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-xl">
                                  <a
                                    href={evento.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:opacity-80 transition-opacity flex items-center gap-2"
                                  >
                                    {evento.title}
                                    <ExternalLink className="h-5 w-5" />
                                  </a>
                                </CardTitle>
                                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap">
                                  {evento.date}
                                </span>
                              </div>
                              <CardDescription>{evento.description}</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="websites" className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {websites.map((site, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Globe className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                            {site.type}
                          </span>
                        </div>
                        <CardTitle className="text-xl">
                          <a
                            href={site.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:opacity-80 transition-opacity flex items-center gap-2"
                          >
                            {site.title}
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{site.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Knowledge;
