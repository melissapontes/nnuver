import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent" />
          <span className="text-xl font-bold text-foreground">Nefrologia & Urologia Veterinárias em Recife</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Serviços
          </a>
          <a
            href="#depoimentos"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Depoimentos
          </a>
          <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDark(!isDark)}
          aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
