interface TapToOpenScreenProps {
  onOpen: () => void;
  displayTitle?: string;
}

export function TapToOpenScreen({ onOpen }: TapToOpenScreenProps) {
  return (
    <div className="relative w-full h-full min-h-[620px] bg-[#FAF6EE] flex flex-col justify-between items-center px-6 py-8 select-none overflow-hidden">
      {/* Decorative Botanical Arch Frame SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-[#755A23]/30"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 360 700"
        preserveAspectRatio="none"
      >
        {/* Arch contour */}
        <path
          d="M 30,700 L 30,120 Q 30,30 180,30 Q 330,30 330,120 L 330,700"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          opacity="0.5"
        />
        {/* Inner Arch */}
        <path
          d="M 38,700 L 38,124 Q 38,40 180,40 Q 322,40 322,124 L 322,700"
          strokeWidth="0.8"
          opacity="0.4"
        />
        {/* Top arch foliage left */}
        <path
          d="M 60,110 Q 90,60 140,45 M 80,85 Q 95,75 110,80 M 115,58 Q 130,50 140,65"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Top arch foliage right */}
        <path
          d="M 300,110 Q 270,60 220,45 M 280,85 Q 265,75 250,80 M 245,58 Q 230,50 220,65"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Subtle leaf dots */}
        <circle cx="100" cy="70" r="2.5" fill="#B8975A" opacity="0.6" />
        <circle cx="125" cy="52" r="2" fill="#B8975A" opacity="0.6" />
        <circle cx="260" cy="70" r="2.5" fill="#B8975A" opacity="0.6" />
        <circle cx="235" cy="52" r="2" fill="#B8975A" opacity="0.6" />
      </svg>

      {/* Top Header & Floral Laurel Wreath */}
      <div className="flex flex-col items-center text-center pt-6 z-10">
        {/* Laurel Wreath Emblem */}
        <div className="w-16 h-16 text-[#B8975A] opacity-90 mb-3">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
            {/* Laurel Left */}
            <path
              d="M 50,85 C 30,80 20,60 22,40 C 23,28 32,18 45,15"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Laurel Right */}
            <path
              d="M 50,85 C 70,80 80,60 78,40 C 77,28 68,18 55,15"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Leaves Left */}
            <ellipse cx="28" cy="65" rx="4" ry="7" transform="rotate(-30 28 65)" fill="currentColor" fillOpacity="0.25" />
            <ellipse cx="22" cy="48" rx="4" ry="7" transform="rotate(-15 22 48)" fill="currentColor" fillOpacity="0.25" />
            <ellipse cx="27" cy="32" rx="4" ry="7" transform="rotate(10 27 32)" fill="currentColor" fillOpacity="0.25" />
            <ellipse cx="38" cy="20" rx="4" ry="7" transform="rotate(35 38 20)" fill="currentColor" fillOpacity="0.25" />
            {/* Leaves Right */}
            <ellipse cx="72" cy="65" rx="4" ry="7" transform="rotate(30 72 65)" fill="currentColor" fillOpacity="0.25" />
            <ellipse cx="78" cy="48" rx="4" ry="7" transform="rotate(15 78 48)" fill="currentColor" fillOpacity="0.25" />
            <ellipse cx="73" cy="32" rx="4" ry="7" transform="rotate(-10 73 32)" fill="currentColor" fillOpacity="0.25" />
            <ellipse cx="62" cy="20" rx="4" ry="7" transform="rotate(-35 62 20)" fill="currentColor" fillOpacity="0.25" />
            {/* Center Monogram / Star */}
            <circle cx="50" cy="50" r="3" fill="currentColor" />
          </svg>
        </div>

        <span className="font-label-sm text-[12px] uppercase tracking-[0.25em] text-[#7A7468] font-medium">
          You Are Invited
        </span>
      </div>

      {/* Romantic Hands Illustration (Bride & Groom Hands with Wedding Rings) */}
      <div className="relative w-full max-w-[280px] h-[260px] flex items-center justify-center z-10 my-auto">
        <svg
          viewBox="0 0 280 260"
          className="w-full h-full drop-shadow-sm select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft ambient aura */}
          <circle cx="140" cy="130" r="90" fill="#F6EFE2" fillOpacity="0.6" />

          {/* Groom Sleeve & Cuff (Right) */}
          <path
            d="M 230,240 L 270,260 L 250,200 L 195,170 Z"
            fill="#2B2B2B"
          />
          {/* White Shirt Cuff */}
          <path
            d="M 195,170 L 205,160 L 188,150 L 178,160 Z"
            fill="#FFFFFF"
            stroke="#EADFC8"
            strokeWidth="1"
          />
          {/* Gold Cufflink */}
          <circle cx="198" cy="162" r="3" fill="#B8975A" />

          {/* Groom Hand & Fingers */}
          <path
            d="M 185,152 C 180,140 165,128 145,124 C 130,121 115,125 105,132 C 100,135 102,142 108,140 C 120,136 135,134 150,138 L 155,148 C 145,145 130,144 118,149 C 112,151 114,158 120,157 C 132,154 145,154 158,158 L 160,168 C 150,166 138,166 128,171 C 122,174 125,180 131,179 C 142,177 155,177 168,181 L 185,175 Z"
            fill="#F6D1BA"
            stroke="#E4BA9F"
            strokeWidth="1.2"
          />
          {/* Groom Wedding Band on Ring Finger */}
          <rect
            x="125"
            y="150"
            width="6"
            height="9"
            rx="2"
            transform="rotate(-15 125 150)"
            fill="#B8975A"
            stroke="#8F6C2C"
            strokeWidth="0.8"
          />

          {/* Bride Sleeve with Delicate Lace (Left) */}
          <path
            d="M 20,250 C 40,225 55,195 72,168 L 92,185 C 75,212 55,245 40,260 Z"
            fill="#FAF6EE"
            stroke="#EADFC8"
            strokeWidth="1.2"
          />
          {/* Lace pattern details */}
          <path
            d="M 35,230 Q 45,220 55,230 Q 65,220 75,230 M 50,205 Q 60,195 70,205 Q 80,195 90,205"
            stroke="#B8975A"
            strokeWidth="1"
            strokeDasharray="2 2"
            opacity="0.6"
          />

          {/* Bride Hand & Gentle Fingers */}
          <path
            d="M 75,166 C 85,150 98,128 108,105 C 111,98 118,100 116,108 C 110,125 100,142 94,155 L 108,152 C 116,132 125,112 132,95 C 135,88 142,91 140,99 C 132,118 122,138 116,155 L 126,155 C 134,138 142,122 148,108 C 151,102 157,105 155,112 C 148,128 140,145 133,162 L 122,176 C 110,188 95,192 82,185 Z"
            fill="#FCE0D2"
            stroke="#EBBFA9"
            strokeWidth="1.2"
          />
          {/* Bride Diamond Engagement Ring & Band */}
          <ellipse
            cx="108"
            cy="115"
            rx="4"
            ry="2.5"
            transform="rotate(65 108 115)"
            fill="#B8975A"
            stroke="#8F6C2C"
            strokeWidth="0.8"
          />
          {/* Sparkling Diamond */}
          <path
            d="M 110,113 L 112,110 L 114,113 L 112,116 Z"
            fill="#FFFFFF"
            stroke="#B8975A"
            strokeWidth="0.8"
          />
          <circle cx="112" cy="113" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Bottom CTA: "Tap to open" */}
      <div className="w-full flex flex-col items-center pb-6 z-10">
        <button
          onClick={onOpen}
          type="button"
          className="group/btn relative px-8 py-3.5 rounded-full bg-[#B8975A] hover:bg-[#A38347] text-white font-label-md text-[14px] font-medium tracking-wide shadow-[0_4px_16px_rgba(184,151,90,0.35)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span className="relative z-10">Tap to open</span>
          <span className="material-symbols-outlined text-[18px] relative z-10 transition-transform group-hover/btn:translate-x-0.5">
            arrow_forward
          </span>
          {/* Subtle pulse glow */}
          <span className="absolute inset-0 rounded-full bg-[#B8975A] opacity-30 animate-ping pointer-events-none" />
        </button>
      </div>
    </div>
  );
}

