import bianca from "../../assets/bianca.jpg";
import { Button } from "../ui/button";
import { SITE } from "../../siteConfig";

export default function Hero() {
  return (
    <section className="border-line border-b">
      <div className="flex flex-col lg:grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-22">
          <p className="text-wine mb-4 flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase before:h-px before:w-6.5 before:bg-current">
            {SITE.nome}
          </p>
          <h1 className="mb-5 text-[clamp(32px,4.2vw,54px)] leading-[1.12] font-semibold tracking-tight text-ink">
            <em className="text-wine font-medium not-italic italic">
              Direito Empresarial
            </em>{" "}
            pra proteger o negócio antes do problema.
          </h1>
          <p className="text-muted mb-8 max-w-115 text-base leading-relaxed sm:text-[17px]">
            Soluções jurídicas estratégicas pra empresários que não podem
            perder tempo — nem dinheiro — com risco jurídico mal calculado. A
            gente mitiga o risco antes que ele vire prejuízo.
          </p>
          <div className="mb-8 flex flex-wrap gap-3.5">
            <a href="#contato">
              <Button>Agendar conversa</Button>
            </a>
            <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer">
              <Button variant="outline">Falar no WhatsApp</Button>
            </a>
          </div>
          <div className="border-line flex flex-wrap gap-6 border-t pt-6 text-[13px] text-muted">
            <div>
              <b className="font-display block text-[14.5px] font-semibold text-ink">
                Atuação
              </b>
              <span className="text-wine italic">{SITE.cidade}</span> · Online
            </div>
            <div>
              <b className="font-display block text-[14.5px] font-semibold text-ink">
                OAB
              </b>
              <span className="text-wine italic">{SITE.oab}</span>
            </div>
          </div>
        </div>

        <div className="border-line relative flex min-h-[280px] flex-col items-center justify-center gap-6 border-t bg-[radial-gradient(circle_at_50%_38%,#eef3f9_0%,#dee8f2_78%)] px-8 py-10 sm:min-h-[340px] lg:min-h-0 lg:border-t-0 lg:border-l lg:py-12">
          <div className="border-line w-full max-w-95 overflow-hidden rounded-[10px] border leading-none shadow-[0_30px_60px_-24px_rgba(29,78,137,0.2)]">
            <img
              src={bianca}
              alt={`${SITE.advogada}, advogada empresarial`}
              className="block h-auto w-full"
            />
          </div>
          <p className="font-display border-brass text-ink max-w-75 border-l-2 pl-3.5 text-left text-[16px] font-medium italic">
            "Meu trabalho não é só resolver o problema jurídico — é evitar
            que ele aconteça."
          </p>
        </div>
      </div>
    </section>
  );
}
