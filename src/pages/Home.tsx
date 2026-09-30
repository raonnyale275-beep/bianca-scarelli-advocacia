import Hero from "../Components/sections/Hero";
import Highlights from "../Components/sections/Highlights";
import Sobre from "../Components/sections/Sobre";
import Conteudo from "../Components/sections/Conteudo";
import Areas from "../Components/sections/Areas";
import CtaBanner from "../Components/sections/CtaBanner";
import Diferenciais from "../Components/sections/Diferenciais";
import ArtigosPreview from "../Components/sections/ArtigosPreview";
import Depoimentos from "../Components/sections/Depoimentos";
import Faq from "../Components/sections/Faq";
import Contato from "../Components/sections/Contato";
import Localizacao from "../Components/sections/Localizacao";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Sobre />
      <Localizacao />
      <Conteudo />
      <Areas />
      <CtaBanner />
      <Diferenciais />
      <ArtigosPreview />
      <Depoimentos />
      <Faq />
      <Contato />
    </>
  );
}
