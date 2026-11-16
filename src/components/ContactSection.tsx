import { Phone, Mail, MapPin, MessageCircle, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export function ContactSection() {
  return (
    <section id="contactos" className="bg-[#0B0C0E] py-20 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#C9A449]/25 bg-gradient-to-br from-[#141518] to-[#0B0C0E] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4B45A]">
                Solicite um Orçamento
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Fale diretamente com a nossa equipa
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                Prefere falar por telefone, WhatsApp ou enviar o seu projeto por e-mail? Estamos
                disponíveis para responder rapidamente em todo o país.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`${COMPANY_INFO.whatsappBase}?text=${encodeURIComponent(
                    'Olá Grupo B.M.A & Filhos! Gostaria de solicitar um orçamento.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#0B0C0E] transition-all hover:brightness-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Direto</span>
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A449] to-[#B08A32] px-6 py-3.5 text-sm font-bold text-[#0B0C0E] transition-all hover:brightness-110"
                >
                  <Phone className="h-4 w-4" />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              <a
                href={COMPANY_INFO.phoneHref}
                className="rounded-2xl border border-white/10 bg-[#0B0C0E]/80 p-5 transition-colors hover:border-[#C9A449]/50"
              >
                <Phone className="h-5 w-5 text-[#D4B45A]" />
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Telefone
                </div>
                <div className="mt-1 font-display text-base font-bold text-white">
                  {COMPANY_INFO.phoneDisplay}
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="rounded-2xl border border-white/10 bg-[#0B0C0E]/80 p-5 transition-colors hover:border-[#C9A449]/50"
              >
                <Mail className="h-5 w-5 text-[#D4B45A]" />
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  E-mail
                </div>
                <div className="mt-1 font-display text-base font-bold text-white">
                  {COMPANY_INFO.email}
                </div>
              </a>

              <div className="rounded-2xl border border-white/10 bg-[#0B0C0E]/80 p-5">
                <MapPin className="h-5 w-5 text-[#D4B45A]" />
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Sede — Pombal
                </div>
                <div className="mt-1 text-sm font-medium text-zinc-200">
                  {COMPANY_INFO.address}, {COMPANY_INFO.postalCode}
                </div>
              </div>

              <a
                href={COMPANY_INFO.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-[#0B0C0E]/80 p-5 transition-colors hover:border-[#C9A449]/50"
              >
                <div className="flex items-center gap-2 text-[#D4B45A]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <Globe className="h-4 w-4 opacity-70" />
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Redes &amp; Domínio
                </div>
                <div className="mt-1 font-display text-base font-bold text-white">
                  {COMPANY_INFO.instagram} • {COMPANY_INFO.website}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
