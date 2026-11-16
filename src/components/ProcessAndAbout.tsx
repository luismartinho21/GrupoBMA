import { Building2, Compass, HardHat, Award } from 'lucide-react';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/siteData';

export function ProcessAndAbout() {
  return (
    <>
      {/* Process */}
      <section id="processo" className="bg-[#0B0C0E] py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4B45A]">
              Como Trabalhamos
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Do projeto à entrega, sem surpresas
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-[#141518] p-7 transition-colors hover:border-[#C9A449]/35"
              >
                <span className="font-display text-4xl font-extrabold text-[#C9A449]/35">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="bg-[#101216] py-20 sm:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="./images/service-renovation.jpg"
                  alt="Remodelação interior Grupo B.M.A & Filhos"
                  className="h-64 w-full rounded-3xl border border-white/10 object-cover sm:h-80"
                />
                <img
                  src="./images/project-pavilion.jpg"
                  alt="Armazém construído pelo Grupo B.M.A & Filhos"
                  className="mt-8 h-64 w-full rounded-3xl border border-white/10 object-cover sm:h-80"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4B45A]">
                Sobre o Grupo B.M.A &amp; Filhos
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Mais de duas décadas a construir confiança de Norte a Sul.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
                Com sede em Pombal e atuação em todo o território nacional, o{' '}
                <strong className="text-white">{COMPANY_INFO.name}</strong> soma mais de 20 anos
                de experiência, mais de 1000 projetos concluídos e uma equipa com mais de 20
                profissionais dedicados.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Da construção civil e remodelações interiores e exteriores à reabilitação de
                imóveis, armazéns e apoio de obra com materiais e execução, garantimos rigor
                técnico em cada detalhe.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="flex items-start gap-3">
                  <Compass className="h-5 w-5 shrink-0 text-[#D4B45A] mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      Projeto &amp; Execução
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400">Acompanhamento completo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HardHat className="h-5 w-5 shrink-0 text-[#D4B45A] mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      Apoio de Obra &amp; Materiais
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400">Equipa própria qualificada</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 shrink-0 text-[#D4B45A] mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      Norte a Sul do País
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400">Sede em Pombal, Leiria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 shrink-0 text-[#D4B45A] mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      1000+ Obras Entregues
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400">Qualidade comprovada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
