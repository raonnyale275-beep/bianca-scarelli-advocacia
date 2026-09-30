import { Compass, MessageSquareText, ShieldAlert, Users } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { Button } from "../ui/button";

const DIFERENCIAIS = [
  {
    icon: Compass,
    titulo: "Visão estratégica",
    descricao:
      "O objetivo não é só resolver o processo — é proteger o negócio como um todo.",
  },
  {
    icon: ShieldAlert,
    titulo: "Prevenção antes da cura",
    descricao:
      "Atuação constante pra evitar que o problema chegue até a Justiça.",
  },
  {
    icon: MessageSquareText,
    titulo: "Linguagem direta",
    descricao:
      "Sem juridiquês — você entende o risco e a decisão antes de assinar qualquer coisa.",
  },
  {
    icon: Users,
    titulo: "Acompanhamento próximo",
    descricao:
      "Você sabe exatamente em que pé está cada demanda do seu negócio.",
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="bg-white py-16 sm:py-22"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal
          direction="up"
          className="mx-auto mb-13 max-w-[600px] text-center"
        >
          <Eyebrow text="Diferenciais" center />
          <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold text-ink">
            Por que empresários{" "}
            <em className="text-wine font-medium not-italic italic">
              confiam
            </em>{" "}
            nesse acompanhamento.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((item, index) => (
            <Reveal
              key={item.titulo}
              direction="up"
              delay={index * 100}
              className="flex flex-col items-center text-center"
            >
              <div className="border-gold mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed bg-white shadow-sm">
                <item.icon className="text-gold h-8 w-8" strokeWidth={1.75} />
              </div>
              <h3 className="mb-1.5 text-[15px] font-semibold text-ink">
                {item.titulo}
              </h3>
              <p className="text-muted text-[13px] leading-relaxed">
                {item.descricao}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={200} className="mt-11 text-center">
          <a href="#contato">
            <Button>Quero esse acompanhamento</Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
