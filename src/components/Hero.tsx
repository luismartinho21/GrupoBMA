import { ChevronRight, Clock, Users, Building2, Award, MapPin } from 'lucide-react';
import { COMPANY_INFO, METRICS } from '../data/siteData';
import { AnimatedCounter } from './AnimatedCounter';

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
      className="relative min-h-[94vh] flex flex-col justify-end pb-14 pt-32 sm:pb-20 overflow-hidden bg-[#1E1510]"
    >
      {/* Background Architectural Image */}
      <img
        src="./images/hero-roof.jpg"
        alt="Grupo B.M.A & Filhos — Construção Civil e Coberturas"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
      />
      {/* Warm Wood / Espresso Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1510] via-[#1E1510]/70 to-[#1E1510]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,163,89,0.22),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          {/* Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5B869]/50 bg-[#1E1510]/70 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#E5B869] backdrop-blur-md">
            <span>{COMPANY_INFO.heroBadge}</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#FFFBF6] sm:text-6xl lg:text-7xl leading-[1.05]">
            Construímos{' '}
            <span className="bg-gradient-to-r from-[#F0CA86] via-[#D4A359] to-[#C88A4B] bg-clip-text text-transparent">
              Sonhos
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-[#EFE4D6] sm:text-xl leading-relaxed">
            Mais de duas décadas de experiência, qualidade comprovada e atuação nacional.{' '}
            {COMPANY_INFO.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#simulador"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#B57436] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#B57436]/30 transition-all hover:brightness-110 hover:-translate-y-0.5"
            >
              <span>Simular Pré-Orçamento</span>
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="#obras"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#EFE4D6]/30 bg-[#1E1510]/65 px-8 py-4 text-base font-semibold text-[#FFFBF6] backdrop-blur-sm transition-all hover:border-[#E5B869] hover:bg-white/10"
            >
              <span>Ver Projetos</span>
            </a>
          </div>
        </div>

        {/* Animated Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[#EFE4D6]/15 pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {METRICS.map((metric, idx) => {
            const Icon = METRIC_ICONS[metric.key];
            return (
              <div
                key={metric.label}
                style={{ animationDelay: `${120 + idx * 90}ms` }}
                className="animate-fade-up flex flex-col items-center rounded-2xl border border-[#E5B869]/20 bg-[#2A1D15]/80 px-4 py-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E5B869]/55 hover:shadow-lg hover:shadow-[#B57436]/20 last:col-span-2 sm:last:col-span-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C88A4B]/20 text-[#E5B869]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display text-2xl font-extrabold text-[#FFFBF6] sm:text-3xl">
                  {metric.key === 'experience' || metric.key === 'team' ? (
                    <AnimatedCounter target={20} prefix="+" durationMs={1200} />
                  ) : metric.key === 'projects' || metric.key === 'clients' ? (
                    <AnimatedCounter target={1000} suffix="+" durationMs={1800} />
                  ) : (
                    metric.value
                  )}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#DECBB4]">
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
