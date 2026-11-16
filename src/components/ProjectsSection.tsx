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
    <section id="obras" className="bg-[#101216] py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4B45A]">
              Portfólio &amp; Obras
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
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
                    ? 'bg-[#C9A449] text-[#0B0C0E]'
                    : 'border border-white/10 bg-[#141518] text-zinc-300 hover:border-[#C9A449]/40'
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
              className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#141518] transition-all hover:-translate-y-1 hover:border-[#C9A449]/40 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-[#C9A449]/40 bg-[#0B0C0E]/85 px-3.5 py-1 text-xs font-semibold text-[#D4B45A] backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#D4B45A] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 group-hover:text-[#D4B45A] transition-colors" />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs font-medium text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#D4B45A]" />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="h-3.5 w-3.5 text-[#D4B45A]" />
                    {project.area}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#D4B45A]" />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-2xl w-full overflow-hidden rounded-3xl border border-[#C9A449]/30 bg-[#141518] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="h-64 w-full object-cover sm:h-72"
            />
            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4B45A]">
                {selected.category} • {selected.location}
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-white">
                {selected.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {selected.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-lg border border-white/10 bg-[#0B0C0E] px-3 py-1.5 text-xs font-semibold text-zinc-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-end gap-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-400 hover:bg-white/5 hover:text-white"
                >
                  Fechar
                </button>
                <a
                  href="#simulador"
                  onClick={() => setSelected(null)}
                  className="rounded-xl bg-gradient-to-r from-[#C9A449] to-[#B08A32] px-5 py-2.5 text-sm font-bold text-[#0B0C0E]"
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
