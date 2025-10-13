import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-muted/30 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>(81) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>contato@nefrovet.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-primary mt-0.5" aria-hidden="true" />
                <span>Recife, PE</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-foreground">Redes Sociais</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/nnuver.vet/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nefrologia & Urologia Veterinária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
