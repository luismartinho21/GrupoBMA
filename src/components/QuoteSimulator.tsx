import { useState, type FormEvent } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Send,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

type WorkCategory = 'Residencial' | 'Comercial' | 'Armazém';
type WorkNature = 'Remodelação' | 'Construção';
type HasProject = 'Sim' | 'Não';
type DecisionPhase =
  | 'Apenas pesquisa'
  | 'Pretendo avançar em breve'
  | 'Preciso de proposta com urgência';

const TOTAL_STEPS = 6;

const BASE_RATE_PER_M2: Record<WorkCategory, Record<WorkNature, [number, number]>> = {
  Residencial: {
    Remodelação: [450, 750],
    Construção: [950, 1400],
  },
  Comercial: {
    Remodelação: [400, 700],
    Construção: [850, 1250],
  },
  Armazém: {
    Remodelação: [220, 380],
    Construção: [420, 680],
  },
};

export function QuoteSimulator() {
  const [step, setStep] = useState(1);
  const [workCategory, setWorkCategory] = useState<WorkCategory>('Residencial');
  const [workNature, setWorkNature] = useState<WorkNature>('Remodelação');
  const [areaM2, setAreaM2] = useState('150');
  const [hasProject, setHasProject] = useState<HasProject>('Não');
  const [decisionPhase, setDecisionPhase] = useState<DecisionPhase>('Pretendo avançar em breve');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const parsedArea = Math.max(10, Number(areaM2) || 150);
  const [minRate, maxRate] = BASE_RATE_PER_M2[workCategory][workNature];
  const minEstimate = parsedArea * minRate;
  const maxEstimate = parsedArea * maxRate;

  const formatEUR = (val: number) =>
    new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(val);

  const progressPercent = submitted ? 100 : (step / TOTAL_STEPS) * 100;

  const handleNext = () => {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
  };

  const summaryText = `Olá Grupo B.M.A & Filhos! Simulei um pré-orçamento no site:\n- Tipo de obra: ${workCategory}\n- Modalidade: ${workNature}\n- Metragem aproximada: ${parsedArea} m²\n- Já possui projeto: ${hasProject}\n- Fase da decisão: ${decisionPhase}\n- Estimativa indicativa: ${formatEUR(minEstimate)} – ${formatEUR(maxEstimate)}\n\nDados de contacto:\n- Nome: ${name}\n- Telefone: ${phone}\n- Email: ${email}`;

  const mailtoHref = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Pré-Orçamento (${workCategory} • ${workNature} • ${parsedArea}m²) - ${name}`
  )}&body=${encodeURIComponent(summaryText)}`;

  const whatsappHref = `${COMPANY_INFO.whatsappBase}?text=${encodeURIComponent(summaryText)}`;

  return (
    <section id="simulador" className="bg-[#F6EFE6] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#DFCBB2] bg-[#FFFBF6] p-6 sm:p-10 shadow-xl shadow-[#5C3D22]/5">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#B57436] bg-[#C88A4B]/15 text-[#B57436]">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <h2 className="mt-6 font-display text-3xl font-extrabold text-[#1E1510] sm:text-4xl">
                Obrigado, {name || 'Cliente'}!
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base text-[#5C4B3E]">
                Recebemos os seus dados. A nossa equipa entrará em contacto brevemente com uma
                proposta personalizada.
              </p>

              <div className="mx-auto mt-7 max-w-md rounded-2xl border border-[#DFCBB2] bg-[#F6EFE6] p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#A6652A]">
                  Estimativa Indicativa ({workCategory} • {workNature} • {parsedArea} m²)
                </div>
                <div className="mt-2 font-display text-2xl font-extrabold text-[#1E1510]">
                  {formatEUR(minEstimate)} – {formatEUR(maxEstimate)}
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-[#7A6655]">
                  *O valor apresentado neste pré-orçamento é meramente indicativo, não definitivo,
                  podendo sofrer alterações após análise detalhada e definição final do projeto.
                </p>
              </div>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={mailtoHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#B57436] px-6 py-3.5 text-sm font-bold text-white transition-all hover:brightness-110"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar Agora por Email</span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#0B0C0E] transition-all hover:brightness-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enviar por WhatsApp</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A6655] hover:text-[#B57436] transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Fazer nova simulação</span>
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B57436]">
                    Pré-Orçamento Online
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-extrabold text-[#1E1510] sm:text-3xl">
                    {step === TOTAL_STEPS ? 'Receba o seu orçamento' : 'Simule o seu Pré-Orçamento'}
                  </h2>
                </div>
                <span className="rounded-full border border-[#DFCBB2] bg-[#F6EFE6] px-3 py-1 text-xs font-semibold text-[#6E5947]">
                  Passo {step} de {TOTAL_STEPS}
                </span>
              </div>

              <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-[#EFE4D6]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#D4A359] to-[#B57436] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="mt-8">
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1E1510] mb-4">
                      Tipo de obra
                    </h3>
                    <div className="space-y-3">
                      {(['Residencial', 'Comercial', 'Armazém'] as const).map((option) => {
                        const selected = workCategory === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setWorkCategory(option)}
                            className={`flex w-full items-center gap-3.5 rounded-xl border px-5 py-4 text-left text-base font-medium transition-all ${
                              selected
                                ? 'border-[#B57436] bg-[#C88A4B]/12 text-[#1E1510] shadow-sm'
                                : 'border-[#E6D7C3] bg-[#F6EFE6]/50 text-[#4A3B2F] hover:border-[#C88A4B]/50'
                            }`}
                          >
                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                selected ? 'border-[#B57436]' : 'border-[#B8A28B]'
                              }`}
                            >
                              {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#B57436]" />}
                            </span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1E1510] mb-4">
                      É remodelação ou construção?
                    </h3>
                    <div className="space-y-3">
                      {(['Remodelação', 'Construção'] as const).map((option) => {
                        const selected = workNature === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setWorkNature(option)}
                            className={`flex w-full items-center gap-3.5 rounded-xl border px-5 py-4 text-left text-base font-medium transition-all ${
                              selected
                                ? 'border-[#B57436] bg-[#C88A4B]/12 text-[#1E1510] shadow-sm'
                                : 'border-[#E6D7C3] bg-[#F6EFE6]/50 text-[#4A3B2F] hover:border-[#C88A4B]/50'
                            }`}
                          >
                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                selected ? 'border-[#B57436]' : 'border-[#B8A28B]'
                              }`}
                            >
                              {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#B57436]" />}
                            </span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1E1510] mb-4">
                      Metragem aproximada (m²)
                    </h3>
                    <input
                      type="number"
                      min={10}
                      max={50000}
                      value={areaM2}
                      onChange={(e) => setAreaM2(e.target.value)}
                      placeholder="Ex: 150"
                      className="w-full rounded-xl border border-[#C88A4B] bg-[#F6EFE6]/60 px-5 py-4 text-lg font-semibold text-[#1E1510] placeholder-[#9C8773] outline-none focus:border-[#B57436] focus:bg-white"
                    />
                    <p className="mt-3 text-xs text-[#7A6655]">
                      Indique a área aproximada em metros quadrados para calcularmos uma estimativa
                      inicial.
                    </p>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1E1510] mb-4">
                      Já possui projeto?
                    </h3>
                    <div className="space-y-3">
                      {(['Sim', 'Não'] as const).map((option) => {
                        const selected = hasProject === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setHasProject(option)}
                            className={`flex w-full items-center gap-3.5 rounded-xl border px-5 py-4 text-left text-base font-medium transition-all ${
                              selected
                                ? 'border-[#B57436] bg-[#C88A4B]/12 text-[#1E1510] shadow-sm'
                                : 'border-[#E6D7C3] bg-[#F6EFE6]/50 text-[#4A3B2F] hover:border-[#C88A4B]/50'
                            }`}
                          >
                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                selected ? 'border-[#B57436]' : 'border-[#B8A28B]'
                              }`}
                            >
                              {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#B57436]" />}
                            </span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1E1510] mb-4">
                      Fase da decisão
                    </h3>
                    <div className="space-y-3">
                      {(
                        [
                          'Apenas pesquisa',
                          'Pretendo avançar em breve',
                          'Preciso de proposta com urgência',
                        ] as const
                      ).map((option) => {
                        const selected = decisionPhase === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setDecisionPhase(option)}
                            className={`flex w-full items-center gap-3.5 rounded-xl border px-5 py-4 text-left text-base font-medium transition-all ${
                              selected
                                ? 'border-[#B57436] bg-[#C88A4B]/12 text-[#1E1510] shadow-sm'
                                : 'border-[#E6D7C3] bg-[#F6EFE6]/50 text-[#4A3B2F] hover:border-[#C88A4B]/50'
                            }`}
                          >
                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                selected ? 'border-[#B57436]' : 'border-[#B8A28B]'
                              }`}
                            >
                              {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#B57436]" />}
                            </span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <form id="simulador-form" onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-sm text-[#6E5947] mb-2">
                      Preencha os seus dados para receber a proposta.
                    </p>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C4B3E] mb-1.5">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full rounded-xl border border-[#DFCBB2] bg-[#F6EFE6]/60 px-4 py-3 text-sm text-[#1E1510] placeholder-[#9C8773] outline-none focus:border-[#B57436] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C4B3E] mb-1.5">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+351..."
                        className="w-full rounded-xl border border-[#DFCBB2] bg-[#F6EFE6]/60 px-4 py-3 text-sm text-[#1E1510] placeholder-[#9C8773] outline-none focus:border-[#B57436] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C4B3E] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full rounded-xl border border-[#DFCBB2] bg-[#F6EFE6]/60 px-4 py-3 text-sm text-[#1E1510] placeholder-[#9C8773] outline-none focus:border-[#B57436] focus:bg-white"
                      />
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#EFE4D6] pt-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={step === 1}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A6655] transition-colors hover:text-[#1E1510] disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Anterior</span>
                </button>

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#B57436] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-110"
                  >
                    <span>Seguinte</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="simulador-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#B57436] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-110"
                  >
                    <span>Enviar por Email</span>
                    <Send className="h-4 w-4" />
                  </button>
                )}
              </div>

              <p className="mt-5 text-center text-[11px] leading-relaxed text-[#8A7664]">
                *O valor apresentado neste pré-orçamento é meramente indicativo, não definitivo,
                podendo sofrer alterações após análise detalhada e definição final do projeto.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
