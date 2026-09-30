import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Reveal from "../Components/Reveal";
import { Button } from "../Components/ui/button";
import { ARTIGOS, getArtigoBySlug } from "../data/artigos";
import { SITE } from "../siteConfig";

export default function Artigo() {
  const { slug } = useParams();
  const artigo = getArtigoBySlug(slug ?? "");

  if (!artigo) return <Navigate to="/artigos" replace />;

  const relacionados = ARTIGOS.filter((a) => a.slug !== artigo.slug).slice(0, 2);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[760px] px-5 sm:px-7">
        <Reveal direction="up">
          <Link
            to="/artigos"
            className="text-muted hover:text-gold mb-8 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Todos os artigos
          </Link>

          <span className="text-gold mb-3 block text-[11.5px] font-bold tracking-wide uppercase">
            {artigo.categoria}
          </span>
          <h1 className="text-[clamp(26px,3.4vw,40px)] leading-[1.15] font-semibold text-ink">
            {artigo.titulo}
          </h1>
          <div className="text-muted mt-4 flex items-center gap-2 border-b border-line pb-8 text-[13.5px]">
            <Clock className="h-4 w-4" />
            {artigo.tempoLeitura} de leitura
          </div>
        </Reveal>

        <Reveal direction="up" delay={100} className="mt-8 flex flex-col gap-5">
          {artigo.conteudo.map((paragrafo, index) => (
            <p key={index} className="text-ink/80 text-[15.5px] leading-[1.8]">
              {paragrafo}
            </p>
          ))}
        </Reveal>

        <Reveal
          direction="up"
          className="border-line bg-bg-alt mt-12 flex flex-col items-start gap-4 rounded-2xl border p-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="text-ink text-lg font-semibold">
              Quer conversar sobre o seu caso?
            </h3>
            <p className="text-muted mt-1 text-[14px]">
              {SITE.advogada} pode te ajudar a entender o melhor caminho.
            </p>
          </div>
          <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Falar no WhatsApp</Button>
          </a>
        </Reveal>

        {relacionados.length > 0 && (
          <Reveal direction="up" className="mt-14">
            <h3 className="text-ink mb-5 text-base font-semibold">
              Veja também
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relacionados.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/artigos/${rel.slug}`}
                  className="group border-line hover:border-gold block rounded-xl border bg-white p-5 transition-colors"
                >
                  <span className="text-gold text-[11px] font-bold tracking-wide uppercase">
                    {rel.categoria}
                  </span>
                  <p className="text-ink group-hover:text-wine mt-1.5 text-[14.5px] font-semibold transition-colors">
                    {rel.titulo}
                  </p>
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
