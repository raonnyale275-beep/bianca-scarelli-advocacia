import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { SITE } from "../../siteConfig";

const PERGUNTAS = [
  {
    pergunta: "Preciso já ter um problema pra falar com a Bianca?",
    resposta:
      "Não. Boa parte do trabalho é preventivo — revisar contrato antes de assinar, estruturar a empresa do jeito certo, entender um risco antes que ele vire prejuízo. Quanto antes a orientação, mais barato costuma sair.",
  },
  {
    pergunta: "Atende empresa pequena ou MEI, ou só empresa grande?",
    resposta:
      "Atende empresário de qualquer porte. O que muda é a complexidade do caso, não o tamanho do CNPJ.",
  },
  {
    pergunta: "O atendimento é só presencial?",
    resposta: `Não, é presencial e online. Se fizer mais sentido resolver tudo por chamada de vídeo, sem precisar ir até ${SITE.cidade.split(",")[0]}, também funciona.`,
  },
  {
    pergunta: "Quanto tempo demora pra ter um retorno?",
    resposta:
      "O primeiro contato costuma ser respondido rápido pelo WhatsApp. O prazo de cada caso depende da complexidade, mas isso é alinhado logo na conversa inicial.",
  },
  {
    pergunta: "Como funciona depois que eu mando mensagem?",
    resposta:
      "Você conta o que precisa, a equipe entende o cenário e a Bianca faz uma avaliação do caso. A partir daí fica claro o caminho, o que precisa ser feito e como seguir.",
  },
];

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 sm:py-22">
      <div className="mx-auto max-w-[820px] px-5 sm:px-7">
        <Reveal direction="up" className="mx-auto mb-11 max-w-[600px] text-center">
          <Eyebrow text="Dúvidas frequentes" center />
          <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold text-ink">
            Perguntas que{" "}
            <em className="text-wine font-medium not-italic italic">
              todo mundo faz.
            </em>
          </h2>
        </Reveal>

        <Reveal
          direction="up"
          className="border-line divide-line overflow-hidden rounded-2xl border bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
        >
          {PERGUNTAS.map((item, index) => {
            const isOpen = aberto === index;
            return (
              <div key={item.pergunta} className="[&:not(:last-child)]:border-b [&:not(:last-child)]:border-line">
                <button
                  type="button"
                  onClick={() => setAberto(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bg-alt sm:px-7"
                >
                  <span className="text-ink text-[15px] font-semibold sm:text-base">
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    className={`text-gold h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted px-6 pb-5 text-[14.5px] leading-relaxed sm:px-7">
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
