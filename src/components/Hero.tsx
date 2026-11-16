import { ChevronRight, Clock, Users, Building2, Award, MapPin } from 'lucide-react';
import { COMPANY_INFO, METRICS } from '../data/siteData';

const METRIC_ICONS = {
  experience: Clock,
  team: Users,
  projects: Building2,
  clients: Award,
  coverage: MapPin,
} as const;

export function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-[94vh] flex flex-col justify-end pb-14 pt-32 sm:pb-20 overflow-hidden bg-[#0B0C0E]"
    >
      {/* Background Architectural Image */}
      <img
        src="./images/hero-roof.jpg"
        alt="Grupo B.M.A & Filhos — Construção Civil e Coberturas"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />
      {/* Dark Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/80 to-[#0B0C0E]/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,164,73,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Pill Badge matching print */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A449]/40 bg-[#C9A449]/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#D4B45A] backdrop-blur-md">
            <span>{COMPANY_INFO.heroBadge}</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
            Construímos{' '}
            <span className="bg-gradient-to-r from-[#E6CA7A] via-[#D4B45A] to-[#B08A32] bg-clip-text text-transparent">
              Sonhos
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-300 sm:text-xl leading-relaxed">
            Mais de duas décadas de experiência, qualidade comprovada e atuação nacional.{' '}
            {COMPANY_INFO.tagline}
          </p>

          {/* CTA Buttons matching print */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#simulador"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A449] to-[#B08A32] px-8 py-4 text-base font-bold text-[#0B0C0E] shadow-xl shadow-[#C9A449]/20 transition-all hover:brightness-110 hover:-translate-y-0.5"
            >
              <span>Simular Pré-Orçamento</span>
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="#obras"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#141518]/80 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-[#C9A449]/50 hover:bg-white/10"
            >
              <span>Ver Projetos</span>
            </a>
          </div>
        </div>

        {/* Metrics Grid matching print (+20, +20, 1000+, 1000+, Norte a Sul) */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {METRICS.map((metric) => {
            const Icon = METRIC_ICONS[metric.key];
            return (
              <div
                key={metric.label}
                className="flex flex-col items-center rounded-2xl border border-white/5 bg-[#141518]/70 px-4 py-5 text-center backdrop-blur-sm transition-colors hover:border-[#C9A449]/30 last:col-span-2 sm:last:col-span-1"
              >
                <Icon className="h-6 w-6 text-[#D4B45A]" />
                <div className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
