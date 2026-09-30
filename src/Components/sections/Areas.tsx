import { useEffect, useRef } from "react";
import {
  Banknote,
  Building2,
  ClipboardCheck,
  FileSignature,
  Gavel,
  ShieldCheck,
} from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";

const AREAS = [
  {
    n: "01",
    icon: FileSignature,
    titulo: "Contratos empresariais",
    descricao:
      "Elaboração, revisão e negociação de contratos que realmente protegem o negócio.",
  },
  {
    n: "02",
    icon: ShieldCheck,
    titulo: "Compliance e prevenção de riscos",
    descricao:
      "Estruturação jurídica pra evitar passivos antes que eles aconteçam.",
  },
  {
    n: "03",
    icon: Banknote,
    titulo: "Recuperação de crédito e cobrança",
    descricao: "Atuação estratégica pra recuperar valores devidos à empresa.",
  },
  {
    n: "04",
    icon: Building2,
    titulo: "Direito societário",
    descricao:
      "Constituição, alteração contratual, fusões e reorganizações societárias.",
  },
  {
    n: "05",
    icon: ClipboardCheck,
    titulo: "Consultoria jurídica preventiva",
    descricao:
      "Suporte contínuo pra decisões do dia a dia não virarem problema depois.",
  },
  {
    n: "06",
    icon: Gavel,
    titulo: "Contencioso empresarial",
    descricao:
      "Defesa e representação em disputas judiciais que envolvem o negócio.",
  },
];

export default function Areas() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll suave no mobile, pra dar a dica visual de que dá pra arrastar
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(min-width: 900px)").matches) return;

    const id = setInterval(() => {
      const card = track.querySelector<HTMLElement>("[data-area-card]");
      if (!card) return;
      const gap = 14;
      const cardWidth = card.getBoundingClientRect().width + gap;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 1) return;
      const next = track.scrollLeft + cardWidth;
      track.scrollTo({ left: next >= maxScroll - 5 ? 0 : next, behavior: "smooth" });
    }, 2800);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="areas" className="bg-white py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal direction="up" className="mb-10 max-w-[600px] sm:mb-13">
          <Eyebrow text="Especialidades" />
          <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold text-ink">
            Áreas de <em className="text-wine font-medium not-italic italic">atuação.</em>
          </h2>
          <p className="text-muted mt-3.5 text-base">
            Do contrato que evita o problema até a cobrança de quem não
            pagou — cuidado jurídico em cada etapa do negócio.
          </p>
        </Reveal>

        <div
          ref={trackRef}
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3.5 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {AREAS.map((area, index) => (
            <Reveal
              key={area.n}
              direction="up"
              delay={index * 90}
              className="w-[80%] flex-shrink-0 snap-center sm:w-auto sm:flex-shrink"
            >
              <div
                data-area-card
                className="group border-line hover:border-gold relative h-full overflow-hidden rounded-xl border bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(212,160,23,0.35)]"
              >
                <span
                  aria-hidden
                  className="bg-gold absolute top-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                />
                <span className="font-display group-hover:text-gold/20 pointer-events-none absolute top-3 right-4 text-[56px] leading-none font-semibold text-brass/8 transition-colors duration-300">
                  {area.n}
                </span>

                <div className="bg-gold/10 group-hover:bg-gold relative mb-5 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300">
                  <area.icon
                    className="text-gold h-5.5 w-5.5 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="relative mb-2 text-base font-semibold text-ink">
                  {area.titulo}
                </h3>
                <p className="text-muted relative text-[13.5px] leading-relaxed">
                  {area.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
