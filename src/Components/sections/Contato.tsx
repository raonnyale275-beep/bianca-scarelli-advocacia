import {
  ClipboardList,
  FileSearch,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import ContatoForm from "../ContatoForm";
import { Button } from "../ui/button";
import { SITE } from "../../siteConfig";

const PROCESSO = [
  {
    icon: ClipboardList,
    titulo: "Preencha o formulário",
    descricao: "Conte pra gente o que você precisa resolver.",
  },
  {
    icon: MessageCircle,
    titulo: `${SITE.advogada.split(" ")[0]} te atende`,
    descricao:
      "Em poucos instantes alguém da equipe entra em contato pra entender seu caso.",
  },
  {
    icon: FileSearch,
    titulo: "Receba uma avaliação jurídica",
    descricao: "Diagnóstico claro sobre o melhor caminho pra sua situação.",
  },
  {
    icon: ShieldCheck,
    titulo: "Resolva com segurança",
    descricao: "Acompanhamento até o problema virar solução.",
  },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-white py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal
          direction="up"
          className="mx-auto mb-11 max-w-[600px] text-center"
        >
          <Eyebrow text="Contato" center />
          <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.12] font-semibold text-ink">
            Vamos conversar sobre o seu{" "}
            <em className="text-wine font-medium not-italic italic">
              negócio?
            </em>
          </h2>
          <p className="text-muted mt-3.5 text-base">
            Preencha o formulário abaixo e receba um retorno rápido — ou
            chame direto no WhatsApp.
          </p>
        </Reveal>

        <div className="flex flex-col items-start gap-14 lg:flex-row lg:justify-center lg:gap-16">
          <Reveal direction="left" className="w-full max-w-100 lg:pt-6">
            <h3 className="text-ink mb-7 text-center text-xl font-semibold lg:text-left">
              Como funciona
            </h3>
            <ol className="flex flex-col gap-6">
              {PROCESSO.map((passo, index) => (
                <li key={passo.titulo} className="flex items-start gap-4">
                  <span className="bg-gold text-ink flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-ink flex items-center gap-2 text-base font-semibold">
                      <passo.icon className="text-gold h-5 w-5" />
                      {passo.titulo}
                    </span>
                    <span className="text-muted text-sm leading-relaxed">
                      {passo.descricao}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal direction="right" className="w-full flex-shrink-0 lg:w-auto">
            <ContatoForm />
          </Reveal>
        </div>

        <Reveal
          direction="up"
          className="border-line mx-auto mt-14 flex max-w-[680px] flex-col gap-6 border-t pt-10"
        >
          <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer">
            <Button variant="outline" className="w-full">
              Falar direto no WhatsApp
            </Button>
          </a>

          <div className="border-line divide-line overflow-hidden rounded-2xl border bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            {[
              { icon: Phone, label: "WhatsApp", value: SITE.whatsappDisplay },
              {
                icon: MessageCircle,
                label: "Atendimento",
                value: `${SITE.cidade} · Online`,
              },
              { icon: MapPin, label: "Endereço", value: SITE.endereco },
            ].map((item) => (
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
