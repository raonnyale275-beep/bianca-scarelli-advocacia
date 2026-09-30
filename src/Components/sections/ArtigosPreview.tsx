import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { Button } from "../ui/button";
import { ARTIGOS } from "../../data/artigos";

const DESTAQUES = ARTIGOS.slice(0, 3);

export default function ArtigosPreview() {
  return (
    <section className="bg-bg-alt py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal
          direction="up"
          className="mb-10 flex flex-col items-start justify-between gap-5 sm:mb-13 sm:flex-row sm:items-end"
        >
          <div className="max-w-[560px]">
            <Eyebrow text="Artigos" />
            <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold text-ink">
              Conteúdo pra quem{" "}
              <em className="text-wine font-medium not-italic italic">
                empreende.
              </em>
            </h2>
            <p className="text-muted mt-3.5 text-base">
              Explicações diretas sobre os temas jurídicos que mais afetam o
              dia a dia de quem toca um negócio.
            </p>
          </div>
          <Link to="/artigos" className="w-full flex-shrink-0 sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              Ver todos os artigos
            </Button>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {DESTAQUES.map((artigo, index) => (
            <Reveal key={artigo.slug} direction="up" delay={index * 90}>
              <Link to={`/artigos/${artigo.slug}`} className="group block h-full">
                <article className="group border-line hover:border-gold relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(212,160,23,0.35)]">
                  <span
                    aria-hidden
                    className="bg-gold absolute top-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                  />
                  <div className="bg-gold/10 group-hover:bg-gold mb-5 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300">
                    <artigo.icon
                      className="text-gold h-5.5 w-5.5 transition-colors duration-300 group-hover:text-white"
                      strokeWidth={1.75}
                    />
                  </div>

                  <span className="text-gold mb-2 text-[11px] font-bold tracking-wide uppercase">
                    {artigo.categoria}
                  </span>
                  <h3 className="text-ink mb-2 text-[16px] leading-snug font-semibold">
                    {artigo.titulo}
                  </h3>
                  <p className="text-muted mb-5 flex-1 text-[13.5px] leading-relaxed">
                    {artigo.resumo}
                  </p>

                  <div className="border-line flex items-center justify-between border-t pt-4 text-[12.5px]">
                    <span className="text-muted flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {artigo.tempoLeitura}
                    </span>
                    <span className="text-wine group-hover:text-gold flex items-center gap-1 font-semibold transition-colors">
                      Ler
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
