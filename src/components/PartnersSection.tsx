import atualeImage from "@/assets/atuale.jpeg";
import fitocleenImage from "@/assets/fitocleen.jpeg";

const partners = [
  {
    name: "Atuale",
    image: atualeImage,
    instagramUrl: "https://www.instagram.com/atualevet/",
  },
  {
    name: "Fitocleen",
    image: fitocleenImage,
    instagramUrl: "https://www.instagram.com/fitocleem/",
  },
];

const PartnersSection = () => {
  return (
    <section id="parceiros" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nossos Parceiros
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas que confiam em nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
              aria-label={`Visite ${partner.name} no Instagram`}
            >
              <img
                src={partner.image}
                alt={`Logo ${partner.name}`}
                className="w-48 h-48 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
