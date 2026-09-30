import { useState } from "react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { Button } from "../ui/button";
import { SITE } from "../../siteConfig";
import { pandaEmbedUrl } from "../panda";

const CONTEUDOS = [
  {
    id: "diferencial",
    pandaId: "062cfa29-c4e6-4068-a649-aafebb84cda9",
    tag: "Diferencial",
    titulo: "Atendimento jurídico prático e estratégico",
    citacao:
      "O diferencial do meu escritório não são apenas serviços jurídicos, mas uma empreendedora que presta serviços jurídicos.",
  },
  {
    id: "atendimento",
    pandaId: "86b0aca2-d341-452d-b229-cfecad4ddfc2",
    tag: "Atendimento",
    titulo: "Você atende autônomos e prestadores de serviço?",
    citacao:
      "Meus maiores clientes hoje são médicos, dentistas, fotógrafos, pessoal envolvido em evento.",
  },
  {
    id: "extrajudicial",
    pandaId: "41511c6e-9370-4521-a0d3-b0201d56d200",
    tag: "Extrajudicial",
    titulo: "Resolver antes de virar processo",
    citacao:
      "Eu faço o acordo, o contrato, mediação de conflito pra não virar processo.",
  },
];

const EMBED_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

const relativeDistance = (index: number, active: number, total: number) => {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
};

export default function Conteudo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CONTEUDOS.length;
  const activeItem = CONTEUDOS[activeIndex];

  const goTo = (i: number) => setActiveIndex(((i % total) + total) % total);

  return (
    <section id="conteudo" className="bg-white py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal direction="up" className="mb-10 max-w-[600px] sm:mb-13">
          <Eyebrow text="Conteúdo" />
          <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold text-ink">
            Direito empresarial,{" "}
            <em className="text-wine font-medium not-italic italic">
              direto ao ponto.
            </em>
          </h2>
          <p className="text-muted mt-3.5 text-base">
            {SITE.advogada.split(" ")[0]} respondendo, na prática, as dúvidas
            mais comuns de quem empreende.
          </p>
        </Reveal>

        <Reveal
          direction="up"
          className="relative h-115 overflow-hidden sm:h-130"
        >
          {CONTEUDOS.map((item, index) => {
            const offset = relativeDistance(index, activeIndex, total);
            const isActive = offset === 0;
            const abs = Math.abs(offset);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ver: ${item.titulo}`}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                className={`border-line absolute top-1/2 left-1/2 aspect-[9/16] w-62.5 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ease-out sm:w-75 ${
                  isActive
                    ? "border-gold shadow-[0_20px_45px_-18px_rgba(212,160,23,0.45)]"
                    : "shadow-md"
                }`}
                style={{
                  transform: `translate(-50%, -50%) translateX(calc(${offset} * min(58vw, 235px))) scale(${
                    isActive ? 1 : 0.68
                  })`,
                  opacity: isActive ? 1 : 0.55,
                  zIndex: 10 - abs,
                  pointerEvents: abs <= 1 ? "auto" : "none",
                }}
              >
                {isActive && (
                  <span className="text-brass absolute top-3.5 left-3.5 z-10 rounded-full bg-black/60 px-2.5 py-1 text-[10.5px] tracking-[0.1em] uppercase">
                    {item.tag}
                  </span>
                )}
                <iframe
                  className="h-full w-full"
                  src={pandaEmbedUrl(item.pandaId, {
                    autoplay: true,
                    muted: true,
                    loop: true,
                  })}
                  title={item.titulo}
                  allow={EMBED_ALLOW}
                  allowFullScreen={isActive}
                  loading="lazy"
                />
              </button>
            );
          })}
        </Reveal>

        <Reveal
          key={activeItem.id}
          direction="up"
          className="mx-auto mt-6 flex max-w-100 flex-col gap-2.5 text-center"
        >
          <h3 className="text-[15px] font-semibold text-ink">
            {activeItem.titulo}
          </h3>
          <blockquote className="font-display border-line text-muted mx-auto border-l-2 pl-3 text-left text-[14px] leading-snug font-medium italic">
            "{activeItem.citacao}"
          </blockquote>
        </Reveal>

        <div className="mt-6 flex items-center justify-center gap-2">
          {CONTEUDOS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goTo(index)}
              aria-label={`Ver: ${item.titulo}`}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-brass w-6"
                  : "bg-line hover:bg-muted/40 w-2"
              }`}
            />
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center gap-4">
          <a href="#contato">
            <Button>Tenho uma dúvida parecida com essas</Button>
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-brass border-brass/40 hover:border-brass border-b pb-0.5 text-[13.5px] font-semibold transition-colors"
          >
            Ver mais conteúdo no Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
