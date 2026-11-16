import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/siteData';
import type { LegalDocType } from './LegalAndCookies';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
  onOpenCookies: () => void;
}

export function Footer({ onOpenLegal, onOpenCookies }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#07080A] py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <BrandLogo compact />
            <p className="mt-3 text-xs text-zinc-500">
              {COMPANY_INFO.address} • {COMPANY_INFO.postalCode}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#servicos" className="hover:text-[#D4B45A] transition-colors">
              Serviços
            </a>
            <a href="#simulador" className="hover:text-[#D4B45A] transition-colors">
              Pré-Orçamento
            </a>
            <a href="#obras" className="hover:text-[#D4B45A] transition-colors">
              Projetos
            </a>
            <a href="#sobre" className="hover:text-[#D4B45A] transition-colors">
              Sobre Nós
            </a>
            <a href="#contactos" className="hover:text-[#D4B45A] transition-colors">
              Contactos
            </a>
          </div>
        </div>

        {/* Legal & Privacy Links */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-zinc-400">
          <button
            type="button"
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-[#D4B45A] transition-colors"
          >
            Política de Privacidade
          </button>
          <button
            type="button"
            onClick={() => onOpenLegal('cookies')}
            className="hover:text-[#D4B45A] transition-colors"
          >
            Política de Cookies
          </button>
          <button
            type="button"
            onClick={() => onOpenLegal('terms')}
            className="hover:text-[#D4B45A] transition-colors"
          >
            Termos e Direitos
          </button>
          <button
            type="button"
            onClick={onOpenCookies}
            className="hover:text-[#D4B45A] transition-colors"
          >
            Gerir Cookies
          </button>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-3 border-t border-white/5 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY_INFO.name} Todos os direitos reservados.
          </p>
          <p>
            Direitos reservados de{' '}
            <a
              href="https://lumar.email"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#D4B45A] underline decoration-[#D4B45A]/40 underline-offset-4 transition-colors hover:text-white"
            >
              lumar.email
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
