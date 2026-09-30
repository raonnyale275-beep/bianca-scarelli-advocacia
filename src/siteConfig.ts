export const SITE = {
  nome: "Scarelli Advocacia Empresarial",
  advogada: "Bianca Scarelli",
  iniciais: "BS",
  cidade: "Bauru, SP",
  oab: "OAB/SP 412.845",
  whatsapp: "5514997758230",
  whatsappDisplay: "(14) 99775-8230",
  endereco: "Rua Rio Branco, 18-50, Sala 4",
  enderecoReferencia: "Em cima dos Correios",
  cep: "17014-037",
  instagram: "https://www.instagram.com/scarelliadvocacia/",
  whatsappLink: (mensagem?: string) =>
    `https://wa.me/${SITE.whatsapp}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ""}`,
};
