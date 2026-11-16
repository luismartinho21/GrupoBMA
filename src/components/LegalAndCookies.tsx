import { useEffect, useState } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export type LegalDocType = 'privacy' | 'cookies' | 'terms' | null;

const STORAGE_KEY = 'bma_cookie_consent';

interface CookieBannerProps {
  onOpenLegal: (doc: LegalDocType) => void;
  forceOpen?: boolean;
  onCloseForce?: () => void;
}

export function CookieBanner({ onOpenLegal, forceOpen, onCloseForce }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [showPrefs, setShowPrefs] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setVisible(true);
      setShowPrefs(true);
    }
  }, [forceOpen]);

  const saveConsent = (analytics: boolean) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ essential: true, analytics, updatedAt: new Date().toISOString() })
    );
    setVisible(false);
    setShowPrefs(false);
    onCloseForce?.();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div className="mx-auto max-w-4xl pointer-events-auto rounded-2xl border border-[#C9A449]/35 bg-[#141518]/95 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A449]/15 text-[#D4B45A]">
              <Cookie className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-white sm:text-base">
                Cookies &amp; Privacidade (RGPD)
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos
                opcionais para melhorar a sua experiência. Consulte a nossa{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="font-semibold text-[#D4B45A] underline hover:text-white"
                >
                  Política de Privacidade
                </button>{' '}
                e{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookies')}
                  className="font-semibold text-[#D4B45A] underline hover:text-white"
                >
                  Política de Cookies
                </button>
                .
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => saveConsent(false)}
            className="self-end sm:self-start rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
            aria-label="Fechar aviso de cookies"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {showPrefs && (
          <div className="mt-4 grid gap-3 rounded-xl border border-white/10 bg-[#0B0C0E] p-4 sm:grid-cols-2">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white">Cookies Essenciais</div>
                <div className="text-[11px] text-zinc-400">Sempre ativos para navegação</div>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                Ativo
              </span>
            </div>

            <label className="flex cursor-pointer items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white">Cookies Analíticos</div>
                <div className="text-[11px] text-zinc-400">Métricas anónimas de utilização</div>
              </div>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="h-4 w-4 accent-[#C9A449]"
              />
            </label>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-end gap-2.5">
          {!showPrefs ? (
            <button
              type="button"
              onClick={() => setShowPrefs(true)}
              className="rounded-xl border border-white/15 px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              Personalizar
            </button>
          ) : (
            <button
              type="button"
              onClick={() => saveConsent(analyticsEnabled)}
              className="rounded-xl border border-[#C9A449]/40 px-4 py-2 text-xs font-semibold text-[#D4B45A] hover:bg-[#C9A449]/10"
            >
              Guardar Preferências
            </button>
          )}

          <button
            type="button"
            onClick={() => saveConsent(false)}
            className="rounded-xl border border-white/15 bg-[#0B0C0E] px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
          >
            Apenas Essenciais
          </button>

          <button
            type="button"
            onClick={() => saveConsent(true)}
            className="rounded-xl bg-gradient-to-r from-[#C9A449] to-[#B08A32] px-5 py-2 text-xs font-bold text-[#0B0C0E] hover:brightness-110"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
}

export function LegalModal({
  doc,
  onClose,
}: {
  doc: LegalDocType;
  onClose: () => void;
}) {
  if (!doc) return null;

  const titles: Record<Exclude<LegalDocType, null>, string> = {
    privacy: 'Política de Privacidade e Proteção de Dados (RGPD)',
    cookies: 'Política de Cookies',
    terms: 'Termos de Utilização e Direitos de Autor',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#C9A449]/30 bg-[#141518] p-6 sm:p-8 text-zinc-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 shrink-0 text-[#D4B45A]" />
            <h3 className="font-display text-lg font-extrabold text-white sm:text-xl">
              {titles[doc]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm leading-relaxed">
          {doc === 'privacy' && (
            <>
              <p>
                A <strong className="text-white">{COMPANY_INFO.name}</strong>, com sede em{' '}
                {COMPANY_INFO.address}, {COMPANY_INFO.postalCode}, compromete-se a proteger a
                privacidade e os dados pessoais dos utilizadores em conformidade com o Regulamento
                Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679).
              </p>
              <h4 className="font-display font-bold text-white">1. Dados Recolhidos</h4>
              <p>
                Os dados submetidos no simulador de pré-orçamento (nome, telefone, e-mail e
                informações sobre a obra) são utilizados exclusivamente para análise técnica e envio
                de proposta comercial solicitada pelo titular.
              </p>
              <h4 className="font-display font-bold text-white">2. Conservação e Direitos</h4>
              <p>
                Não partilhamos os seus dados com terceiros para fins comerciais. Pode solicitar a
                retificação, portabilidade ou eliminação dos seus dados a qualquer momento através
                do e-mail <strong className="text-[#D4B45A]">{COMPANY_INFO.email}</strong>.
              </p>
            </>
          )}

          {doc === 'cookies' && (
            <>
              <p>
                Este website utiliza cookies para assegurar o correto funcionamento técnico e
                memorizar as suas preferências de consentimento.
              </p>
              <h4 className="font-display font-bold text-white">Tipos de Cookies</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Cookies Essenciais:</strong> Necessários para o
                  funcionamento básico da página e gravação das preferências de privacidade.
                </li>
                <li>
                  <strong className="text-white">Cookies Analíticos (Opcionais):</strong> Ajudam a
                  compreender como os visitantes interagem com o site de forma agregada e anónima.
                </li>
              </ul>
              <p>
                Pode alterar ou retirar o seu consentimento a qualquer momento através do botão{' '}
                <em>Gerir Cookies</em> no rodapé.
              </p>
            </>
          )}

          {doc === 'terms' && (
            <>
              <p>
                Os valores apresentados no simulador de pré-orçamento são meramente indicativos e
                não constituem proposta contratual vinculativa até vistoria técnica e aprovação de
                orçamento final pela equipa da {COMPANY_INFO.shortName}.
              </p>
              <h4 className="font-display font-bold text-white">Propriedade &amp; Créditos</h4>
              <p>
                Conceção web, design e desenvolvimento protegidos por direitos reservados de{' '}
                <a
                  href="https://lumar.email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#D4B45A] underline"
                >
                  lumar.email
                </a>
                .
              </p>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-[#C9A449] to-[#B08A32] px-5 py-2.5 text-sm font-bold text-[#0B0C0E]"
          >
            Compreendido
          </button>
        </div>
      </div>
    </div>
  );
}
