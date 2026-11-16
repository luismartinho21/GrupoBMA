import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/siteData';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Pré-Orçamento', href: '#simulador' },
  { label: 'Projetos', href: '#obras' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contactos', href: '#contactos' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1E1510]/95 backdrop-blur-md border-b border-[#C88A4B]/30 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#1E1510]/85 to-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#topo" aria-label="Grupo B.M.A & Filhos">
          <BrandLogo compact={scrolled} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#F6EFE6]/90 transition-colors hover:text-[#E5B869]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={COMPANY_INFO.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-[#F6EFE6] hover:text-[#E5B869] transition-colors"
          >
            <Phone className="h-4 w-4 text-[#E5B869]" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>
          <a
            href="#simulador"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#B57436] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#B57436]/25 transition-all hover:brightness-110 active:scale-[0.98]"
          >
            <span>Simular Pré-Orçamento</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#F6EFE6] hover:bg-white/10 lg:hidden"
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#1E1510] px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[#F6EFE6] hover:bg-white/5 hover:text-[#E5B869]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 py-2.5 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4 text-[#E5B869]" />
                {COMPANY_INFO.phoneDisplay}
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D4A359] to-[#B57436] py-2.5 text-sm font-bold text-white"
              >
                Simular Pré-Orçamento
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
