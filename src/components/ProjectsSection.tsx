import { useState } from 'react';
import { MapPin, Ruler, Clock, ArrowUpRight } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/siteData';

const CATEGORIES = ['Todos', 'Construção Civil', 'Remodelações', 'Armazéns & Coberturas'] as const;

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('Todos');
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const visibleProjects =
    filter === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="obras" className="bg-[#FFFBF6] py-20 sm:py-28 border-t border-[#DFCBB2]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B57436]">
              Portfólio &amp; Obras
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#1E1510] sm:text-4xl">
              Projetos concluídos com rigor e garantia
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  filter === cat
                    ? 'bg-[#B57436] text-white shadow-sm'
                    : 'border border-[#DFCBB2] bg-[#F6EFE6] text-[#5C4B3E] hover:border-[#B57436]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelected(project)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-[#DFCBB2] bg-[#F6EFE6] transition-all hover:-translate-y-1 hover:border-[#B57436] hover:shadow-xl hover:shadow-[#5C3D22]/10"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#1E1510]/85 px-3.5 py-1 text-xs font-semibold text-[#E5B869] backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-[#1E1510] group-hover:text-[#A6652A] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8A7664] group-hover:text-[#A6652A] transition-colors" />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#5C4B3E]">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-4 border-t border-[#DFCBB2] pt-4 text-xs font-medium text-[#6E5947]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#B57436]" />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="h-3.5 w-3.5 text-[#B57436]" />
                    {project.area}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#B57436]" />
                    {project.duration}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1510]/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-2xl w-full overflow-hidden rounded-3xl border border-[#DFCBB2] bg-[#FFFBF6] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="h-64 w-full object-cover sm:h-72"
            />
            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B57436]">
                {selected.category} • {selected.location}
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-[#1E1510]">
                {selected.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5C4B3E] sm:text-base">
                {selected.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-lg border border-[#DFCBB2] bg-[#F6EFE6] px-3 py-1.5 text-xs font-semibold text-[#3A2C21]"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-end gap-3 border-t border-[#EFE4D6] pt-5">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#6E5947] hover:bg-[#EFE4D6]"
                >
                  Fechar
                </button>
                <a
                  href="#simulador"
                  onClick={() => setSelected(null)}
                  className="rounded-xl bg-gradient-to-r from-[#D4A359] to-[#B57436] px-5 py-2.5 text-sm font-bold text-white"
                >
                  Simular Obra Semelhante
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
