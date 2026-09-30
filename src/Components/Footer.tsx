import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import logo from "../assets/logo-scarelli.png";
import { InstagramIcon } from "./icons";
import { SITE } from "../siteConfig";

const AREAS_LINKS = ["Contratos", "Compliance", "Recuperação de crédito", "Societário"];
const NAV_LINKS = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/artigos", label: "Artigos" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-deep border-gold/60 border-t-2 px-5 pt-12 pb-6 text-white sm:px-7 sm:pt-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-11 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="Página inicial">
              <img src={logo} alt={SITE.nome} className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-70 text-[13.5px] text-white/65">
              Advocacia Empresarial — soluções jurídicas estratégicas pra
              quem empreende.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:border-gold hover:text-gold flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[11.5px] tracking-[0.1em] text-white/55 uppercase">
              Áreas
            </h4>
            <ul className="flex flex-col gap-2.5">
              {AREAS_LINKS.map((label) => (
                <li key={label} className="text-[13.5px] text-white/85">
                  <a href="/#areas" className="opacity-85 hover:opacity-100">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[11.5px] tracking-[0.1em] text-white/55 uppercase">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) =>
                link.href === "/artigos" ? (
                  <li key={link.href} className="text-[13.5px] text-white/85">
                    <Link to={link.href} className="opacity-85 hover:opacity-100">
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.href} className="text-[13.5px] text-white/85">
                    <a href={link.href} className="opacity-85 hover:opacity-100">
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[11.5px] tracking-[0.1em] text-white/55 uppercase">
              Contato
            </h4>
            <ul className="flex flex-col gap-3 text-[13.5px]">
              <li>
                <a
                  href={SITE.whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold flex items-center gap-2.5 text-white/85 transition-colors"
                >
                  <Phone className="text-gold h-4 w-4 flex-shrink-0" />
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/85">
                <MapPin className="text-gold h-4 w-4 flex-shrink-0" />
                {SITE.cidade}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 border-t border-white/10 pt-6.5 text-xs text-white/55">
          <span>
            © {new Date().getFullYear()} {SITE.nome} · {SITE.oab}
          </span>
        </div>
      </div>
    </footer>
  );
}
