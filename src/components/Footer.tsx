import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/siteData';

export function Footer() {
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

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY_INFO.name} Todos os direitos reservados.
          </p>
          <p>
            Construção Civil • Remodelações Interiores e Exteriores • Reabilitação • Armazéns
          </p>
        </div>
      </div>
    </footer>
  );
}
