import {
  Banknote,
  Building2,
  ClipboardCheck,
  FileSignature,
  Gavel,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Artigo {
  slug: string;
  categoria: string;
  icon: LucideIcon;
  titulo: string;
  resumo: string;
  tempoLeitura: string;
  conteudo: string[];
}

export const ARTIGOS: Artigo[] = [
  {
    slug: "contrato-empresarial-protege-negocio",
    categoria: "Contratos empresariais",
    icon: FileSignature,
    titulo: "5 cláusulas que todo contrato empresarial precisa ter",
    resumo:
      "Um contrato mal feito custa mais caro do que parece. Veja os pontos que mais geram dor de cabeça quando ficam de fora.",
    tempoLeitura: "5 min",
    conteudo: [
      "Muito empresário só percebe que um contrato estava incompleto quando o problema já aconteceu — um fornecedor que não entrega, um sócio que sai sem avisar, um cliente que se recusa a pagar. Na maioria das vezes, o contrato existia, só não previa o que fazer nessas situações.",
      "A cláusula de rescisão é um dos pontos mais negligenciados. Ela define como e quando cada parte pode encerrar o contrato, e sob quais condições — sem isso, encerrar uma relação comercial problemática pode virar uma novela jurídica.",
      "Outro ponto essencial é a definição clara de obrigações e prazos. Contratos genéricos, escritos em juridiquês vago, dão margem pra interpretação — e interpretação divergente é onde nascem a maioria das disputas.",
      "Cláusula de multa e penalidades também precisa ser específica. Não basta dizer que 'em caso de descumprimento haverá penalidade' — é preciso definir o valor, a forma de cálculo e o prazo pra cobrança.",
      "Foro e legislação aplicável parecem detalhes burocráticos, mas definem literalmente onde e como um eventual processo vai correr — importante principalmente em contratos com empresas de outras cidades ou estados.",
      "Por fim, cláusulas de confidencialidade e não concorrência protegem informações estratégicas do negócio, especialmente em contratos com ex-funcionários, prestadores de serviço e parceiros comerciais.",
      "O contrato certo não é o mais longo, é o que antecipa os problemas que o seu tipo de negócio costuma enfrentar. Revisar antes de assinar sai muito mais barato do que corrigir depois.",
    ],
  },
  {
    slug: "compliance-empresa-pequena",
    categoria: "Compliance",
    icon: ShieldCheck,
    titulo: "Compliance não é só pra empresa grande",
    resumo:
      "A palavra assusta, mas na prática é sobre organizar a casa antes que um problema jurídico apareça. Entenda o que muda no dia a dia.",
    tempoLeitura: "4 min",
    conteudo: [
      "Quando se fala em compliance, a imagem que vem à cabeça costuma ser de multinacional com departamento jurídico próprio. Mas na prática, compliance é qualquer estrutura que ajuda a empresa a operar dentro da lei e a identificar riscos antes que virem problema — e isso vale pra negócio de qualquer porte.",
      "Na prática, começa com coisas simples: contratos padronizados, processos internos documentados, clareza sobre quem pode assinar o quê pela empresa, e rotina de conferência de obrigações fiscais e trabalhistas.",
      "Empresas que crescem rápido costumam sentir esse tipo de lacuna primeiro — decisões que antes eram informais passam a precisar de respaldo jurídico, porque o volume de operações aumenta o risco de erro.",
      "Um erro comum é achar que compliance é sobre burocracia. Na verdade, é sobre previsibilidade: saber exatamente o que fazer quando surge uma situação fora do script, porque já existe um processo pensado pra isso.",
      "O primeiro passo costuma ser um raio-x simples da operação: quais contratos existem, quais riscos trabalhistas e fiscais estão mais expostos, e o que precisa de atenção imediata versus o que pode ser estruturado aos poucos.",
      "Não precisa resolver tudo de uma vez. O importante é começar a construir essa estrutura antes que um problema específico force a empresa a correr atrás — que é justamente quando sai mais caro.",
    ],
  },
  {
    slug: "como-cobrar-cliente-que-nao-paga",
    categoria: "Recuperação de crédito",
    icon: Banknote,
    titulo: "Cliente não pagou? O que fazer antes de virar prejuízo",
    resumo:
      "Inadimplência é parte do jogo em qualquer negócio, mas o jeito como você reage nos primeiros dias muda completamente a chance de recuperar o valor.",
    tempoLeitura: "4 min",
    conteudo: [
      "A primeira reação de muito empresário diante de um cliente inadimplente é esperar — dar um tempo, mandar mensagem, esperar mais um pouco. O problema é que quanto mais tempo passa, menor a chance de recuperar o valor integralmente.",
      "O primeiro passo é sempre a notificação formal — um documento que comprove que a cobrança foi feita, com prazo e forma de pagamento claros. Isso não é só formalidade: é a base de qualquer cobrança judicial que venha a ser necessária depois.",
      "Antes de entrar com qualquer ação, vale reunir toda a documentação da relação comercial: contrato assinado, notas fiscais, trocas de mensagem, comprovantes de entrega. Quanto mais organizado esse histórico, mais rápida e forte fica a cobrança.",
      "Nem toda cobrança precisa virar processo judicial. Muitas vezes uma negociação bem conduzida — com respaldo jurídico pra garantir que o acordo seja cumprido — resolve mais rápido e com menos desgaste do que uma ação na justiça.",
      "Quando a via judicial é necessária, existem caminhos mais rápidos, como a ação de cobrança e o protesto de título, que costumam pressionar o devedor a negociar antes mesmo do processo avançar.",
      "O ponto central é: inadimplência não se resolve sozinha, e cada semana de espera reduz as chances de recuperação. Ter um processo claro de cobrança — e saber quando chamar apoio jurídico — protege o caixa da empresa.",
    ],
  },
  {
    slug: "abrir-sociedade-o-que-formalizar",
    categoria: "Direito societário",
    icon: Building2,
    titulo: "Vai abrir sociedade com alguém? Formalize isso antes de começar",
    resumo:
      "A maioria das brigas entre sócios não é sobre dinheiro — é sobre coisa que nunca foi combinada por escrito. Veja o que precisa estar no contrato social.",
    tempoLeitura: "5 min",
    conteudo: [
      "É comum começar uma sociedade só na confiança — os sócios se conhecem, combinam tudo verbalmente e seguem em frente. O problema aparece quando o negócio cresce, ou quando surge uma divergência que nunca tinha sido discutida.",
      "O contrato social é o documento que formaliza a empresa perante a lei, mas ele pode — e deve — ir além do mínimo exigido. Ele é a chance de deixar por escrito como as decisões importantes vão ser tomadas.",
      "Divisão de responsabilidades é um dos pontos que mais geram atrito quando não está claro: quem responde por qual área do negócio, quem pode assinar contratos em nome da empresa, e como fica a divisão de lucros.",
      "Outro ponto essencial é a cláusula de saída de sócio — o que acontece se um dos sócios quiser (ou precisar) deixar a sociedade. Sem isso definido, a saída de um sócio pode travar o negócio inteiro por meses.",
      "Vale também prever o que acontece em caso de falecimento de um sócio, ou de divergência grave entre as partes que impeça a empresa de continuar operando normalmente — situações que parecem distantes, mas que sem previsão contratual viram processo judicial.",
      "Formalizar isso não é sinal de desconfiança entre os sócios — é o contrário: é o que permite que a sociedade continue funcionando bem mesmo quando a relação pessoal passa por um momento difícil.",
    ],
  },
  {
    slug: "consultoria-preventiva-vale-a-pena",
    categoria: "Consultoria preventiva",
    icon: ClipboardCheck,
    titulo: "Por que procurar um advogado antes do problema aparecer",
    resumo:
      "A imagem do advogado como 'bombeiro' que só aparece na crise é a que mais custa caro pro empresário. Entenda a diferença de atuar antes.",
    tempoLeitura: "4 min",
    conteudo: [
      "É comum o empresário só buscar orientação jurídica quando o problema já estourou — um processo, uma notificação, uma cobrança inesperada. Nessa hora, as opções já estão mais limitadas e o custo, quase sempre, é maior.",
      "A consultoria preventiva trabalha do outro lado: identificar riscos antes que eles se concretizem. Isso pode ser revisar um contrato antes de assinar, avaliar um novo modelo de negócio antes de lançar, ou simplesmente ter alguém pra perguntar 'isso que eu tô pensando de fazer tem risco jurídico?'",
      "Decisões do dia a dia — contratar um fornecedor, lançar um novo produto, mudar a forma de cobrança dos clientes — quase sempre têm implicação jurídica que passa despercebida até dar errado.",
      "Ter acompanhamento contínuo também muda a forma como o empresário toma decisão: em vez de decidir e torcer pra não dar problema, passa a decidir sabendo exatamente qual é o risco e como mitigá-lo.",
      "Não é sobre burocratizar o negócio — é sobre transformar decisão no escuro em decisão informada. Quem entende o risco com antecedência tem muito mais liberdade pra crescer com segurança.",
    ],
  },
  {
    slug: "empresa-processada-primeiros-passos",
    categoria: "Contencioso empresarial",
    icon: Gavel,
    titulo: "Sua empresa foi processada: o que fazer nas primeiras 48 horas",
    resumo:
      "Receber uma notificação judicial gera pânico, mas as primeiras horas depois da citação são as que mais pesam no resultado final do processo.",
    tempoLeitura: "5 min",
    conteudo: [
      "Ser notificado de um processo judicial costuma gerar duas reações erradas: ignorar, na esperança de que o problema se resolva sozinho, ou entrar em pânico e responder por conta própria sem orientação. As duas colocam a empresa em desvantagem.",
      "O primeiro passo é entender o prazo. Toda notificação judicial vem com um prazo de resposta, e perder esse prazo pode significar perder o direito de se defender naquele momento processual — por isso a urgência real está em buscar orientação jurídica assim que a citação chega, não em resolver o mérito da questão.",
      "Reunir toda a documentação relacionada ao caso é o segundo passo — contratos, e-mails, comprovantes, qualquer registro que tenha relação com o que está sendo discutido no processo. Quanto mais completo esse material, mais forte fica a defesa.",
      "Vale lembrar que a maioria dos processos empresariais não termina em julgamento — muitos se resolvem por acordo ao longo do caminho. Ter uma estratégia clara desde o início, incluindo até onde vale a pena negociar, muda o resultado final.",
      "Processo judicial também tem impacto reputacional e operacional além do jurídico — pode travar certidões, dificultar participação em licitações, ou gerar insegurança com fornecedores e clientes. Por isso a resposta rápida e bem orientada importa tanto quanto o resultado final do processo.",
      "O ponto mais importante: quanto antes um advogado entra no caso, mais opções estratégicas ainda estão disponíveis. Esperar reduz alternativas.",
    ],
  },
];

export const getArtigoBySlug = (slug: string) =>
  ARTIGOS.find((artigo) => artigo.slug === slug);
