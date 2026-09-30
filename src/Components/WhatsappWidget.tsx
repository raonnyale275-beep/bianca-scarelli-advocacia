import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SITE } from "../siteConfig";

const OPCOES = [
  { label: "Contratos empresariais", assunto: "contratos empresariais." },
  {
    label: "Compliance e prevenção de riscos",
    assunto: "compliance e prevenção de riscos.",
  },
  { label: "Recuperação de crédito", assunto: "recuperação de crédito." },
  { label: "Direito societário", assunto: "direito societário." },
  {
    label: "Consultoria preventiva",
    assunto: "uma consultoria jurídica preventiva.",
  },
  { label: "Outro assunto", assunto: null },
];

export default function WhatsappWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!isOpen) setShowNotice(true);
    }, 2500);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!showNotice) return;
    const id = setTimeout(() => setShowNotice(false), 10000);
    return () => clearTimeout(id);
  }, [showNotice]);

  const open = () => {
    setIsOpen(true);
    setShowNotice(false);
  };

  const opcaoHref = (assunto: string | null) => {
    const mensagem = assunto
      ? `Oi ${SITE.advogada.split(" ")[0]}! Vim pelo site e queria falar sobre ${assunto}`
      : `Oi ${SITE.advogada.split(" ")[0]}! Vim pelo site e gostaria de conversar com você.`;
    return SITE.whatsappLink(mensagem);
  };

  return (
    <div className="fixed right-5 bottom-5 z-[80]">
      {isOpen && (
        <div className="border-line absolute right-0 bottom-18.5 w-77.5 max-w-[calc(100vw-40px)] overflow-hidden rounded-[14px] border bg-white shadow-[0_24px_60px_-16px_rgba(0,0,0,0.55)]">
          <div className="flex items-center gap-3 bg-[linear-gradient(120deg,#1e6e46,#175a3a)] px-4.5 py-4">
            <div className="bg-brass text-bg-deep font-display flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold">
              {SITE.iniciais}
            </div>
            <div>
              <b className="block text-sm text-white">{SITE.advogada}</b>
              <span className="text-[11.5px] text-white/75">
                Costuma responder rápido
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar"
              className="ml-auto text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-4">
            <p className="bg-bg-alt text-ink mb-3.5 rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-[2px] px-3.5 py-3 text-[13.5px]">
              Oi! 👋 O que você está precisando?
            </p>
            <div className="flex flex-col gap-2">
              {OPCOES.map((opcao) => (
                <a
                  key={opcao.label}
                  href={opcaoHref(opcao.assunto)}
                  target="_blank"
                  rel="noreferrer"
                  className="border-line hover:border-brass hover:bg-bg-alt text-ink rounded-[9px] border bg-white px-3.5 py-2.5 text-left text-[13px] transition-colors"
                >
                  {opcao.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {showNotice && !isOpen && (
        <button
          onClick={open}
          className="border-line absolute right-17.5 bottom-3 max-w-50 cursor-pointer rounded-tl-xl rounded-tr-xl rounded-bl-[2px] border bg-white px-3.5 py-2.5 text-left text-[13px] whitespace-normal text-ink shadow-[0_12px_30px_-14px_rgba(0,0,0,0.5)] sm:whitespace-nowrap"
        >
          Oi! 👋 Posso ajudar em alguma coisa?
        </button>
      )}

      <button
        onClick={open}
        aria-label="Abrir chat WhatsApp"
        className={`relative flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_26px_-8px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 ${
          showNotice ? "animate-[wa-pulse_1.6s_ease-out_infinite]" : ""
        }`}
      >
        <svg viewBox="0 0 24 24" fill="#fff" className="h-7.5 w-7.5">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.12.08-1.8-.12a15 15 0 0 1-1.68-.6c-2.96-1.28-4.89-4.25-5.04-4.45-.15-.2-1.2-1.6-1.2-3.05s.75-2.16 1.02-2.46c.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.58.82 1.99.89 2.13.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.3 2.36 1.46.3.15.47.13.65-.08.18-.2.76-.88.96-1.19.2-.3.4-.25.66-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.13.07.75-.17 1.43Z" />
        </svg>
        {showNotice && (
          <span className="border-bg-alt absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-[#ff4d4f] text-[11px] font-bold text-white">
            1
          </span>
        )}
      </button>
    </div>
  );
}
