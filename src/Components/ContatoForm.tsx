import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SITE } from "../siteConfig";

type Status = "idle" | "success";

const AREAS_JURIDICAS = [
  "Contratos empresariais",
  "Compliance e prevenção de riscos",
  "Recuperação de crédito",
  "Direito societário",
  "Consultoria preventiva",
  "Contencioso empresarial",
  "Outro assunto",
];

const URGENCIAS = [
  "Imediato, quero resolver agora",
  "Em até 30 dias",
  "Em até 3 meses",
  "Ainda estou avaliando",
];

interface FormState {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  cidade: string;
  area: string;
  areaOutro: string;
  urgencia: string;
  temAdvogado: string;
  descricao: string;
}

const initialState: FormState = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  cidade: "",
  area: "",
  areaOutro: "",
  urgencia: "",
  temAdvogado: "",
  descricao: "",
};

const inputClass = "bg-white py-5";
const labelClass = "text-ink text-sm font-bold";
const selectClass =
  "border-line focus-visible:ring-brass/40 flex h-11 w-full rounded-md border bg-white px-3 text-sm outline-none focus-visible:ring-[3px]";
const textareaClass =
  "border-line focus-visible:ring-brass/40 resize-none rounded-md border bg-white px-3 py-2.5 text-sm outline-none focus-visible:ring-[3px]";
const pillClass = (active: boolean) =>
  `cursor-pointer rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
    active
      ? "bg-brass border-brass text-white"
      : "border-line bg-white text-muted hover:border-brass"
  }`;

export default function ContatoForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const setField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    form.nome.trim() &&
    form.email.trim() &&
    form.telefone.trim() &&
    form.cidade.trim() &&
    form.area &&
    (form.area !== "Outro assunto" || form.areaOutro.trim()) &&
    form.urgencia &&
    form.temAdvogado;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isValid) return;

    const areaFinal =
      form.area === "Outro assunto" ? form.areaOutro : form.area;

    const mensagem =
      `Olá! Vim pelo site e gostaria de agendar uma conversa.\n\n` +
      `Nome: ${form.nome}\n` +
      `E-mail: ${form.email}\n` +
      `Telefone: ${form.telefone}\n` +
      `Empresa: ${form.empresa || "(não informado)"}\n` +
      `Cidade: ${form.cidade}\n\n` +
      `Área jurídica: ${areaFinal}\n` +
      `Urgência: ${form.urgencia}\n` +
      `Já possui advogado: ${form.temAdvogado}\n` +
      `Descrição: ${form.descricao || "(não informado)"}`;

    window.open(SITE.whatsappLink(mensagem), "_blank");
    setStatus("success");
    setForm(initialState);
  };

  if (status === "success") {
    return (
      <div className="border-line mx-auto flex w-full max-w-xl flex-col items-center gap-3 rounded-2xl border bg-white p-8 text-center shadow-sm">
        <CheckCircle2 className="text-brass h-12 w-12" />
        <h3 className="text-ink text-xl font-semibold">Quase lá!</h3>
        <p className="text-muted text-sm">
          Abrimos o WhatsApp com sua mensagem pronta — é só enviar por lá pra
          concluir.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="link"
          className="cursor-pointer p-0 text-sm font-bold"
        >
          Enviar outra solicitação
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-line mx-auto flex w-full max-w-xl flex-col gap-8 rounded-2xl border bg-white p-6 shadow-sm sm:p-8 md:p-10"
    >
      <div className="flex flex-col gap-5">
        <h3 className="text-ink text-lg font-semibold sm:text-xl">
          Preencha seus dados
        </h3>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-nome" className={labelClass}>
            Nome Completo *
          </label>
          <Input
            id="cf-nome"
            value={form.nome}
            onChange={(e) => setField("nome", e.target.value)}
            placeholder="Digite seu nome completo"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className={labelClass}>
            E-mail *
          </label>
          <Input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="seu@email.com"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-telefone" className={labelClass}>
            Telefone/WhatsApp *
          </label>
          <Input
            id="cf-telefone"
            type="tel"
            value={form.telefone}
            onChange={(e) => setField("telefone", e.target.value)}
            placeholder="(00) 00000-0000"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-empresa" className={labelClass}>
            Nome da Empresa
          </label>
          <Input
            id="cf-empresa"
            value={form.empresa}
            onChange={(e) => setField("empresa", e.target.value)}
            placeholder="Nome da sua empresa (opcional)"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-cidade" className={labelClass}>
            Cidade *
          </label>
          <Input
            id="cf-cidade"
            value={form.cidade}
            onChange={(e) => setField("cidade", e.target.value)}
            placeholder="Digite sua cidade"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-ink text-lg font-semibold sm:text-xl">
          Detalhes do seu caso
        </h3>

        <div className="flex flex-col gap-2">
          <span className={labelClass}>Área jurídica *</span>
          <div className="flex flex-wrap gap-2">
            {AREAS_JURIDICAS.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setField("area", area)}
                className={pillClass(form.area === area)}
              >
                {area}
              </button>
            ))}
          </div>
          {form.area === "Outro assunto" && (
            <Input
              value={form.areaOutro}
              onChange={(e) => setField("areaOutro", e.target.value)}
              placeholder="Qual assunto você gostaria de tratar?"
              required
              className={`${inputClass} mt-1`}
            />
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-urgencia" className={labelClass}>
            Qual a urgência do seu caso? *
          </label>
          <select
            id="cf-urgencia"
            value={form.urgencia}
            onChange={(e) => setField("urgencia", e.target.value)}
            required
            className={selectClass}
          >
            <option value="">Selecione</option>
            {URGENCIAS.map((urgencia) => (
              <option key={urgencia} value={urgencia}>
                {urgencia}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <span className={labelClass}>
            Já possui um advogado cuidando desse assunto? *
          </span>
          <div className="flex gap-2">
            {["Sim", "Não"].map((opcao) => (
              <button
                key={opcao}
                type="button"
                onClick={() => setField("temAdvogado", opcao)}
                className={pillClass(form.temAdvogado === opcao)}
              >
                {opcao}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-descricao" className={labelClass}>
            Conte um pouco sobre o seu caso
          </label>
          <textarea
            id="cf-descricao"
            value={form.descricao}
            onChange={(e) => setField("descricao", e.target.value)}
            placeholder="Opcional — quanto mais detalhes, melhor conseguimos te ajudar"
            rows={4}
            className={textareaClass}
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={!isValid}
        className="w-full py-5.5 text-base disabled:cursor-not-allowed disabled:opacity-50"
      >
        Agendar conversa
      </Button>
    </form>
  );
}
