import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { Button } from "../ui/button";

// TODO: depoimentos fictícios — trocar pelos reais assim que o Raonny mandar
const DEPOIMENTOS = [
  {
    quote:
      "Consegui entender exatamente o risco que eu tava correndo e o que fazer pra resolver, sem enrolação e sem juridiquês.",
    nome: "Cliente Empresário",
    iniciais: "CE",
    caso: "Contratos empresariais",
  },
  {
    quote:
      "Atendimento direto, rápido e muito claro. Senti segurança em cada decisão que precisei tomar pro negócio.",
    nome: "Cliente Empresária",
    iniciais: "CE",
    caso: "Recuperação de crédito",
  },
  {
    quote:
      "O acompanhamento foi próximo do início ao fim. Sempre soube exatamente em que pé estava o meu caso.",
    nome: "Cliente Empresário",
    iniciais: "CE",
    caso: "Consultoria preventiva",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % DEPOIMENTOS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) =>
    setIndex((i + DEPOIMENTOS.length) % DEPOIMENTOS.length);

  return (
    <section className="bg-white py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal direction="up" className="mx-auto mb-13 max-w-[600px] text-center">
          <Eyebrow text="Depoimentos" center />
          <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold text-ink">
            O que dizem os{" "}
            <em className="text-wine font-medium not-italic italic">
              clientes.
            </em>
          </h2>
          <p className="text-muted mt-3.5 text-center text-base">
            Empresários que já contaram com esse acompanhamento jurídico.
          </p>
        </Reveal>

        <Reveal direction="up" className="relative mx-auto max-w-[680px]">
          <div className="border-line relative min-h-78 overflow-hidden rounded-2xl border bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,43,87,0.25)] sm:min-h-70 sm:p-12">
            {DEPOIMENTOS.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 py-8 text-center transition-all duration-500 ease-out sm:px-14 ${
                  i === index
                    ? "pointer-events-auto translate-x-0 opacity-100"
                    : "pointer-events-none translate-x-6 opacity-0"
                }`}
              >
                <div className="bg-gold/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <Quote className="text-gold h-5.5 w-5.5" fill="currentColor" />
                </div>

                <p className="font-display text-ink text-[16px] leading-relaxed italic sm:text-[18px]">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className="text-gold h-4 w-4"
                      fill="currentColor"
                    />
                  ))}
                </div>

                <div className="border-line flex items-center gap-3 border-t pt-4">
                  <div className="bg-brass flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                    {item.iniciais}
                  </div>
                  <div className="text-left">
                    <p className="text-ink text-sm font-semibold">
                      {item.nome}
                    </p>
                    <p className="text-muted text-xs">{item.caso}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => goTo(index - 1)}
            aria-label="Depoimento anterior"
            className="border-line hover:border-gold hover:text-gold text-ink absolute top-1/2 -left-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow-md transition-colors sm:-left-5"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Próximo depoimento"
            className="border-line hover:border-gold hover:text-gold text-ink absolute top-1/2 -right-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow-md transition-colors sm:-right-5"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {DEPOIMENTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-gold w-6" : "bg-line hover:bg-muted/40 w-2"
                }`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal
          direction="up"
          delay={150}
          className="mt-8 flex items-center justify-center gap-2.5"
        >
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, star) => (
              <Star key={star} className="text-gold h-4 w-4" fill="currentColor" />
            ))}
          </div>
          <span className="text-ink text-sm font-semibold">5.0</span>
          <span className="text-muted text-sm">
            · Baseado em atendimentos reais
          </span>
        </Reveal>

        <Reveal direction="up" delay={250} className="mt-8 text-center">
          <a href="#contato">
            <Button>Quero um resultado assim também</Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
