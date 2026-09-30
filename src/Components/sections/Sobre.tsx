import { Award, Laptop, MapPin, Scale } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { SITE } from "../../siteConfig";

const FICHA = [
  { icon: Scale, label: "Área", value: "Direito Empresarial" },
  { icon: MapPin, label: "Atuação", value: `${SITE.cidade} · Online` },
  { icon: Laptop, label: "Modalidade", value: "Presencial e online" },
  { icon: Award, label: "OAB", value: SITE.oab },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal
          direction="up"
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
        >
          <div>
            <Eyebrow text="Sobre" />
            <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold text-ink">
              Advocacia pensada pra quem{" "}
              <em className="text-wine font-medium not-italic italic">
                toca um negócio.
              </em>
            </h2>
            <p className="text-muted mt-4.5 text-[15.5px] leading-relaxed">
              {SITE.advogada} atua com Direito Empresarial, ajudando
              empreendedores a tomar decisões jurídicas com segurança — antes
              que virem problema. Da elaboração de contratos à recuperação de
              crédito, o foco é sempre o mesmo: proteger o patrimônio e o
              tempo de quem empreende.
            </p>
            <p className="text-muted mt-4 text-[15.5px] leading-relaxed">
              O compromisso é claro: menos juridiquês, mais decisão
              informada. Cada orientação vem acompanhada do porquê — pra
              você entender o risco, pesar as opções e seguir com segurança,
              mesmo sem ser da área.
            </p>
          </div>

          <div className="border-line divide-line overflow-hidden rounded-2xl border bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            {FICHA.map((item) => (
              <div
                key={item.label}
                className="hover:bg-bg-alt flex items-center gap-4 px-6 py-4.5 transition-colors [&:not(:last-child)]:border-b [&:not(:last-child)]:border-line sm:px-7"
              >
                <div className="bg-gold/10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full">
                  <item.icon className="text-gold h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-muted text-[11px] font-bold tracking-wide uppercase">
                    {item.label}
                  </p>
                  <p className="text-ink text-[15px] font-semibold">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
