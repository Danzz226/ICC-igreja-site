import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoIgreja from "@/assets/logo-igreja.jpg";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Cultos", href: "#cultos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Visão", href: "#visao" },
  { label: "Galeria", href: "/galeria", isRoute: true },
  { label: "Conheça-nos", href: "#conheca-nos" },
  { label: "Pedidos", href: "#pedidos-oracao" },
  { label: "Contribua", href: "#contribua" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (link: { href: string, isRoute?: boolean }) => {
    setIsOpen(false);
    if (link.isRoute) {
      window.open(link.href, "_blank");
      return;
    }
    const el = document.querySelector(link.href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-church-dark/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleClick({ href: "#inicio" }); }}
          className="flex items-center gap-2"
        >
          <img src={logoIgreja} alt="Identidade Church" className="h-10 md:h-12 w-auto object-contain rounded-sm" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link); }}
                className="relative px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-church-gold transition-colors duration-200 rounded-md group"
              >
                {link.label}
                {/* Barra animada dourada */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-3/4"
                  style={{ backgroundColor: "hsl(var(--church-gold))" }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-church-dark/98 backdrop-blur-md border-t border-church-medium/30 animate-fade-in">
          <ul className="section-container py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link); }}
                  className="block px-4 py-3 text-primary-foreground/80 hover:text-church-gold hover:bg-church-medium/20 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
