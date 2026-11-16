import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <section id="servicos" className="bg-[#EFE4D6] py-20 sm:py-28 border-t border-[#DFCBB2]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A6652A]">
            O Que Fazemos
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1E1510] sm:text-4xl">
            Do início ao fim da obra, soluções práticas, seguras e bem executadas.
          </h2>
          <p className="mt-4 text-base text-[#5C4B3E] sm:text-lg">
            Construção civil, remodelações interiores e exteriores, reabilitação de imóveis,
            armazéns e apoio de obra com materiais e execução própria.
          </p>
        </div>

        {/* Selector Cards */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                className={`group text-left rounded-2xl p-5 transition-all border ${
                  isActive
                    ? 'bg-gradient-to-br from-[#C88A4B] to-[#9F5F27] text-white border-[#B57436] shadow-xl shadow-[#9F5F27]/20'
                    : 'bg-[#FFFBF6] text-[#1E1510] border-[#DFCBB2] hover:border-[#B57436]'
                }`}
              >
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EFE4D6] text-[#A6652A]'
                  }`}
                >
                  {service.badge}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold">{service.title}</h3>
                <p
                  className={`mt-1 text-sm ${
                    isActive ? 'text-white/90 font-medium' : 'text-[#6E5947]'
                  }`}
                >
                  {service.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Service Detail */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#DFCBB2] bg-[#FFFBF6] shadow-xl shadow-[#5C3D22]/5">
          <div className="grid lg:grid-cols-12">
            <div className="relative h-64 sm:h-80 lg:col-span-6 lg:h-auto">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-6 lg:p-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B57436]">
                  {activeService.badge}
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-[#1E1510] sm:text-3xl">
                  {activeService.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#5C4B3E]">
                  {activeService.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {activeService.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#3A2C21] sm:text-base">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C88A4B]/20 text-[#A6652A]">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-[#EFE4D6] pt-6">
                <a
                  href="#simulador"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#B57436] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-110"
                >
                  <span>Simular Pré-Orçamento</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
