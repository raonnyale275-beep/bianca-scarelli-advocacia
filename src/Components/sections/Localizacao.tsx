import { CalendarCheck, Car, Laptop, MapPin } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../Reveal";
import { Button } from "../ui/button";
import { SITE } from "../../siteConfig";

const SELOS = [
  { icon: Laptop, texto: "Presencial & Online" },
  { icon: Car, texto: "Fácil acesso" },
  { icon: CalendarCheck, texto: "Hora marcada" },
];

export default function Localizacao() {
  const query = encodeURIComponent(
    `${SITE.endereco}, ${SITE.cidade}, ${SITE.cep}`,
  );
  const mapEmbedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section id="localizacao" className="py-16 sm:py-22">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <Reveal
          direction="up"
          className="mx-auto mb-11 max-w-[600px] text-center"
        >
          <Eyebrow text="Localização" center />
          <h2 className="text-[clamp(26px,3vw,38px)] leading-[1.12] font-semibold text-ink">
            Onde <em className="text-wine font-medium not-italic italic">ficamos.</em>
          </h2>
          <p className="text-muted mt-3.5 text-base">
            Atendimento presencial e também 100% online, pra você em
            qualquer lugar.
          </p>
        </Reveal>

        <Reveal
          direction="up"
          className="border-line group relative h-125 overflow-hidden rounded-2xl border shadow-sm sm:h-135"
        >
          <iframe
            src={mapEmbedSrc}
            title={`Localização de ${SITE.nome}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[55%] transition-all duration-500 group-hover:grayscale-0"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent sm:bg-gradient-to-r" />

          <div className="border-line pointer-events-auto absolute inset-x-4 bottom-4 flex flex-col gap-5 rounded-2xl border bg-white/95 p-6 shadow-[0_20px_50px_-20px_rgba(20,40,63,0.4)] backdrop-blur-sm sm:inset-auto sm:top-6 sm:bottom-6 sm:left-6 sm:w-80 sm:p-7">
            <div className="bg-gold/10 flex h-13 w-13 flex-shrink-0 items-center justify-center rounded-full">
              <MapPin className="text-gold h-6 w-6" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-ink mb-1.5 text-lg font-semibold">
                {SITE.nome}
              </h3>
              <p className="text-muted text-[14.5px] leading-relaxed">
                {SITE.endereco}
                <br />
                {SITE.enderecoReferencia} · {SITE.cidade}
              </p>
            </div>

            <div className="border-line flex flex-col gap-2.5 border-t pt-4">
              {SELOS.map((selo) => (
                <div
                  key={selo.texto}
                  className="text-ink flex items-center gap-2.5 text-[13.5px] font-medium"
                >
                  <selo.icon className="text-gold h-4 w-4 flex-shrink-0" strokeWidth={1.75} />
                  {selo.texto}
                </div>
              ))}
            </div>

            <a href={mapLink} target="_blank" rel="noreferrer" className="w-full">
              <Button variant="outline" className="w-full">
                Ver no Google Maps
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
