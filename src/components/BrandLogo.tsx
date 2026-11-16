export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 group">
      {/* Diamond Gold Emblem matching Grupo B.M.A & Filhos identity */}
      <svg
        viewBox="0 0 64 64"
        className={`${compact ? 'h-10 w-10' : 'h-12 w-12'} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        fill="none"
      >
        <defs>
          <linearGradient id="bmaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6CA7A" />
            <stop offset="50%" stopColor="#C9A449" />
            <stop offset="100%" stopColor="#9E7B2F" />
          </linearGradient>
        </defs>
        <polygon points="32,4 54,32 32,60 10,32" stroke="url(#bmaGold)" strokeWidth="2.2" />
        <polygon points="32,10 48,32 32,54 16,32" stroke="url(#bmaGold)" strokeWidth="1.2" opacity="0.85" />
        <rect x="4" y="26.5" width="56" height="11" rx="1.5" fill="url(#bmaGold)" />
        <text
          x="32"
          y="34"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, Arial, sans-serif"
          fontWeight="800"
          fontSize="6.3"
          fill="#0B0C0E"
          letterSpacing="0.5"
        >
          GRUPO B.M.A
        </text>
      </svg>

      <div className="flex flex-col">
        <span className="font-display text-sm font-extrabold tracking-wider text-white sm:text-base leading-none">
          GRUPO B.M.A
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D4B45A]">
          &amp; Filhos, Lda.
        </span>
      </div>
    </div>
  );
}
