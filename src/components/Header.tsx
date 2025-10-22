import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [open, setOpen] = useState(false);

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
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent" />
          <span className="text-xl font-bold text-foreground">Nnuver</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            O que oferecemos
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

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a 
                  href="#inicio" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Início
                </a>
                <a
                  href="#servicos"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  O que oferecemos
                </a>
                <a
                  href="#depoimentos"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Depoimentos
                </a>
                <a 
                  href="#contato" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contato
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
