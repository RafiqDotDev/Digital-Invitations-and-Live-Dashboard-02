interface CoverPageScreenProps {
  onContinue: () => void;
  brideName?: string;
  groomName?: string;
  weddingDate?: string;
  venueName?: string;
}

export function CoverPageScreen({
  onContinue,
  brideName = "Zara",
  groomName = "Adam",
  weddingDate = "SATURDAY, 12 DECEMBER 2026",
  venueName = "The Grand Hall",
}: CoverPageScreenProps) {
  return (
    <div className="relative w-full h-full min-h-[640px] bg-[#FAF6EE] flex flex-col justify-between items-center px-5 py-8 select-none overflow-hidden animate-in fade-in duration-500">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-6 w-32 h-32 rounded-full bg-[#F6EFE2] blur-2xl" />
        <div className="absolute bottom-16 right-6 w-40 h-40 rounded-full bg-[#EDF4EE] blur-2xl" />
      </div>

      {/* Center Elevated Formal Invitation Card */}
      <div className="relative w-full max-w-[320px] bg-white rounded-2xl p-7 shadow-[0_16px_36px_-4px_rgba(43,43,43,0.08),0_4px_12px_-2px_rgba(184,151,90,0.08)] border border-[#EADFC8] flex flex-col items-center text-center my-auto z-10">
        {/* Botanical Garland Arch Top Frame */}
        <div className="w-full h-24 mb-4 text-[#5E8B6B] relative flex items-center justify-center">
          <svg viewBox="0 0 240 90" fill="none" className="w-full h-full">
            {/* Soft Garland Arch */}
            <path
              d="M 20,80 C 40,30 90,15 120,15 C 150,15 200,30 220,80"
              stroke="#5E8B6B"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Secondary Golden Stem */}
            <path
              d="M 30,85 C 50,38 95,22 120,22 C 145,22 190,38 210,85"
              stroke="#B8975A"
              strokeWidth="0.8"
              opacity="0.8"
            />
            {/* White Ranunculus & Floral Clusters Left */}
            <circle cx="50" cy="55" r="7" fill="#FAF6EE" stroke="#EADFC8" strokeWidth="1" />
            <circle cx="50" cy="55" r="3" fill="#B8975A" opacity="0.6" />
            <circle cx="85" cy="30" r="8" fill="#FAF6EE" stroke="#EADFC8" strokeWidth="1" />
            <circle cx="85" cy="30" r="3.5" fill="#B8975A" opacity="0.6" />
            {/* White Ranunculus Clusters Right */}
            <circle cx="190" cy="55" r="7" fill="#FAF6EE" stroke="#EADFC8" strokeWidth="1" />
            <circle cx="190" cy="55" r="3" fill="#B8975A" opacity="0.6" />
            <circle cx="155" cy="30" r="8" fill="#FAF6EE" stroke="#EADFC8" strokeWidth="1" />
            <circle cx="155" cy="30" r="3.5" fill="#B8975A" opacity="0.6" />
            {/* Center Wreath Bud */}
            <circle cx="120" cy="18" r="4.5" fill="#FAF6EE" stroke="#B8975A" strokeWidth="1" />
            {/* Eucalyptus Leaves */}
            <ellipse cx="68" cy="40" rx="3.5" ry="7" transform="rotate(-40 68 40)" fill="#7EA588" opacity="0.6" />
            <ellipse cx="102" cy="22" rx="3" ry="6" transform="rotate(-15 102 22)" fill="#7EA588" opacity="0.6" />
            <ellipse cx="138" cy="22" rx="3" ry="6" transform="rotate(15 138 22)" fill="#7EA588" opacity="0.6" />
            <ellipse cx="172" cy="40" rx="3.5" ry="7" transform="rotate(40 172 40)" fill="#7EA588" opacity="0.6" />
          </svg>
        </div>

        {/* Header Tagline */}
        <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-[#7A7468] font-semibold mb-3">
          Together With Their Families
        </span>

        {/* Couple Names */}
        <div className="flex flex-col items-center gap-0.5 my-2">
          <h2 className="font-headline-xl text-[38px] font-serif text-[#2B2B2B] leading-none font-normal tracking-tight">
            {brideName}
          </h2>
          <span className="font-headline-sm text-[20px] font-serif italic text-[#B8975A] my-1">
            and
          </span>
          <h2 className="font-headline-xl text-[38px] font-serif text-[#2B2B2B] leading-none font-normal tracking-tight">
            {groomName}
          </h2>
        </div>

        {/* Divider hairline */}
        <div className="w-16 h-[1px] bg-[#EADFC8] my-4" />

        {/* Date & Hall Venue */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-label-sm text-[11px] uppercase tracking-[0.15em] text-[#2B2B2B] font-semibold">
            {weddingDate}
          </span>
          <span className="font-body-sm text-[13px] text-[#7A7468]">
            {venueName}
          </span>
        </div>
      </div>

      {/* Bottom Scroll / Continue Prompt */}
      <div className="flex flex-col items-center pb-3 z-10">
        <button
          onClick={onContinue}
          type="button"
          className="flex flex-col items-center gap-1 text-[#7A7468] hover:text-[#B8975A] transition-colors cursor-pointer group"
        >
          <span className="font-label-sm text-[11px] uppercase tracking-widest font-medium">
            Scroll down
          </span>
          <span className="material-symbols-outlined text-[20px] animate-bounce group-hover:text-[#B8975A]">
            keyboard_arrow_down
          </span>
        </button>
      </div>
    </div>
  );
}

