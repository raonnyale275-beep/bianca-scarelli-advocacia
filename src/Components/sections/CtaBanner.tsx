import Reveal from "../Reveal";
import { Button } from "../ui/button";
import { SITE } from "../../siteConfig";

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal
          direction="up"
          className="border-line flex flex-col flex-wrap items-start gap-7 rounded-xl border bg-[linear-gradient(120deg,var(--color-brass),var(--color-bg-deep))] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-13"
        >
          <h2 className="max-w-125 text-[clamp(22px,2.6vw,30px)] font-semibold text-white">
            Não deixa o risco jurídico virar{" "}
            <em className="font-medium text-[#a9c9ea] not-italic italic">
              prejuízo.
            </em>
          </h2>
          <a href={SITE.whatsappLink()} target="_blank" rel="noreferrer">
            <Button className="bg-white text-wine hover:bg-[#eaf1f8]">
              Agendar conversa
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
