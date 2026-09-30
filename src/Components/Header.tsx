import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-scarelli.png";
import { Button } from "./ui/button";
import { SITE } from "../siteConfig";

const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#areas", label: "Áreas" },
  { href: "/#conteudo", label: "Conteúdo" },
  { href: "/artigos", label: "Artigos" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-bg-deep sticky top-0 z-50 border-b border-white/10">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3.5 sm:px-7">
        <Link to="/" className="flex-shrink-0" aria-label="Página inicial">
          <img src={logo} alt={SITE.nome} className="h-9 w-auto sm:h-8" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href === "/artigos" ? (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/#contato">
            <Button variant="outline-dark" size="sm">
              Agendar conversa
            </Button>
          </a>
          <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer">
            <Button size="sm">WhatsApp</Button>
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="text-white md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="bg-bg-deep border-t border-white/10 px-5 pt-1 pb-5 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) =>
              link.href === "/artigos" ? (
                <li key={link.href} className="border-t border-white/10 first:border-t-0">
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className="block py-3.5 text-[15.5px] text-white/85"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.href} className="border-t border-white/10 first:border-t-0">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3.5 text-[15.5px] text-white/85"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
          <a href="/#contato" onClick={closeMenu} className="mt-2 block">
            <Button className="w-full">Agendar conversa</Button>
          </a>
          <a
            href={SITE.whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-2.5 block"
          >
            <Button variant="outline-dark" className="w-full">
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
