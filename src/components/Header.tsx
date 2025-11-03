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
          {isHomePage ? (
            <a
              href="#educacao"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Educação
            </a>
          ) : (
            <Link
              to="/#educacao"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Educação
            </Link>
          )}
          {isHomePage ? (
            <a
              href="#sobre-nos"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre nós
            </a>
          ) : (
            <Link
              to="/#sobre-nos"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre nós
            </Link>
          )}
          {isHomePage ? (
            <a
              href="#parceiros"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Parceiros
            </a>
          ) : (
            <Link
              to="/#parceiros"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Parceiros
            </Link>
          )}
          {isHomePage ? (
            <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          ) : (
            <Link to="/#contato" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          )}
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
                {isHomePage ? (
                  <a
                    href="#educacao"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Educação
                  </a>
                ) : (
                  <Link
                    to="/#educacao"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Educação
                  </Link>
                )}
                {isHomePage ? (
                  <a
                    href="#sobre-nos"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Sobre nós
                  </a>
                ) : (
                  <Link
                    to="/#sobre-nos"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Sobre nós
                  </Link>
                )}
                {isHomePage ? (
                  <a
                    href="#parceiros"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Parceiros
                  </a>
                ) : (
                  <Link
                    to="/#parceiros"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Parceiros
                  </Link>
                )}
                {isHomePage ? (
                  <a
                    href="#contato"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Contato
                  </a>
                ) : (
                  <Link
                    to="/#contato"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Contato
                  </Link>
                )}
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
