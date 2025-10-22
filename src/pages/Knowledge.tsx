import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Insuficiência Renal Crônica em Cães",
    description: "Entenda as causas, sintomas e tratamentos da IRC em cães",
    link: "#",
    category: "Nefrologia"
  },
  {
    title: "Doença Renal em Gatos",
    description: "Guia completo sobre manejo e cuidados renais felinos",
    link: "#",
    category: "Nefrologia"
  },
  {
    title: "Infecção do Trato Urinário",
    description: "Diagnóstico e tratamento de ITU em pequenos animais",
    link: "#",
    category: "Urologia"
  },
  {
    title: "Urolitíase em Cães e Gatos",
    description: "Prevenção e manejo de cálculos urinários",
    link: "#",
    category: "Urologia"
  }
];

const videos = [
  {
    title: "Como avaliar função renal",
    description: "Interpretação de exames laboratoriais renais",
    link: "#",
    duration: "15 min"
  },
  {
    title: "Nutrição para pacientes renais",
    description: "Dietas terapêuticas e suporte nutricional",
    link: "#",
    duration: "20 min"
  },
  {
    title: "Ultrassonografia do trato urinário",
    description: "Técnicas e achados comuns em imagem",
    link: "#",
    duration: "25 min"
  }
];

const websites = [
  {
    title: "International Renal Interest Society (IRIS)",
    description: "Guidelines e staging de doença renal crônica",
    link: "http://www.iris-kidney.com",
    type: "Internacional"
  },
  {
    title: "Veterinary Information Network (VIN)",
    description: "Comunidade e recursos para veterinários",
    link: "https://www.vin.com",
    type: "Internacional"
  },
  {
    title: "Journal of Veterinary Internal Medicine",
    description: "Artigos científicos em medicina veterinária",
    link: "https://onlinelibrary.wiley.com/journal/19391676",
    type: "Periódico"
  }
];

const Knowledge = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Centro de Conhecimento
              </h1>
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
                <TabsTrigger value="videos" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Vídeos
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
                      <CardContent className="space-y-4">
                        <CardDescription>{article.description}</CardDescription>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={article.link} className="flex items-center justify-center gap-2">
                            Ler artigo
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Video className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                            {video.duration}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription>{video.description}</CardDescription>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={video.link} className="flex items-center justify-center gap-2">
                            Assistir vídeo
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
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
                        <CardTitle className="text-xl">{site.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription>{site.description}</CardDescription>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={site.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            Visitar site
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
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
