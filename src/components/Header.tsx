import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nnuverLogo from "@/assets/nnuver-logo.png";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={nnuverLogo} alt="NNUVER - Núcleo de Nefrologia e Urologia Veterinárias" className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {isHomePage ? (
            <a href="#inicio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
          ) : (
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
          )}
          <a
            href="#servicos"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Educação
          </a>
          <a
            href="#depoimentos"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Sobre nós
          </a>
          <a
            href="#parceiros"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Parceiros
          </a>
          <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5 text-[#00d4aa]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {isHomePage ? (
                  <a
                    href="#inicio"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                ) : (
                  <Link
                    to="/"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                )}
                <a
                  href="#servicos"
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Educação
                </a>
                <a
                  href="#depoimentos"
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Sobre nós
                </a>
                <a
                  href="#parceiros"
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Parceiros
                </a>
                <a
                  href="#contato"
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contato
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {isDark ? <Sun className="h-5 w-5 text-[#00d4aa]" /> : <Moon className="h-5 w-5 text-[#00d4aa]" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
