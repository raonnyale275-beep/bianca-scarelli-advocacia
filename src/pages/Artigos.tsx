import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Eyebrow from "../Components/Eyebrow";
import Reveal from "../Components/Reveal";
import { ARTIGOS } from "../data/artigos";

export default function Artigos() {
  return (
    <section className="bg-white py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal direction="up" className="mx-auto mb-13 max-w-[640px] text-center">
          <Eyebrow text="Artigos" center />
          <h1 className="text-[clamp(28px,3.6vw,44px)] leading-[1.12] font-semibold text-ink">
            Conteúdo pra quem{" "}
            <em className="text-wine font-medium not-italic italic">
              empreende.
            </em>
          </h1>
          <p className="text-muted mt-3.5 text-base">
            Explicações diretas sobre os temas jurídicos que mais afetam o
            dia a dia de quem toca um negócio — sem juridiquês.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTIGOS.map((artigo, index) => (
            <Reveal key={artigo.slug} direction="up" delay={index * 80}>
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
                  <h2 className="text-ink mb-2 text-[17px] leading-snug font-semibold">
                    {artigo.titulo}
                  </h2>
                  <p className="text-muted mb-5 flex-1 text-[13.5px] leading-relaxed">
                    {artigo.resumo}
                  </p>

                  <div className="border-line flex items-center justify-between border-t pt-4 text-[12.5px]">
                    <span className="text-muted flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {artigo.tempoLeitura} de leitura
                    </span>
                    <span className="text-wine group-hover:text-gold flex items-center gap-1 font-semibold transition-colors">
                      Ler artigo
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
