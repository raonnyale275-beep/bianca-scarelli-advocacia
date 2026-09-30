import { Laptop, MessageCircleMore, Scale, UserCheck } from "lucide-react";
import Reveal from "../Reveal";

const ITENS = [
  {
    icon: Scale,
    titulo: "Foco exclusivo",
    descricao: "Atuação 100% especializada em Direito Empresarial.",
  },
  {
    icon: UserCheck,
    titulo: "Atendimento direto",
    descricao: "Você fala com a advogada, sem intermediários.",
  },
  {
    icon: Laptop,
    titulo: "Presencial ou online",
    descricao: "Atendimento flexível, do jeito que for melhor pra você.",
  },
  {
    icon: MessageCircleMore,
    titulo: "Resposta rápida",
    descricao: "Retorno ágil pelo WhatsApp, sem enrolação.",
  },
];

function ItemHighlight({ item }: { item: (typeof ITENS)[number] }) {
  return (
    <div className="mx-6 flex w-72 flex-shrink-0 items-center gap-3 sm:mx-8">
      <div className="border-gold flex h-9.5 w-9.5 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed">
        <item.icon className="text-gold h-4 w-4" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-[13.5px] font-semibold text-white">
          {item.titulo}
        </h3>
        <p className="text-[12px] leading-snug text-white/60">
          {item.descricao}
        </p>
      </div>
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="bg-bg-deep overflow-hidden py-6 sm:py-7">
      <Reveal direction="up">
        <div className="marquee-track flex w-max">
          {ITENS.map((item) => (
            <ItemHighlight key={`a-${item.titulo}`} item={item} />
          ))}
          {ITENS.map((item) => (
            <ItemHighlight key={`b-${item.titulo}`} item={item} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
