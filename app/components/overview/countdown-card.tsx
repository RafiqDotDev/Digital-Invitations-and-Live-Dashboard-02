import { useWedding } from "../../context/wedding-context";

export function CountdownCard() {
  const { showToast } = useWedding();

  const handleCopy = () => {
    navigator.clipboard.writeText("https://liveguest.app/rsvp/zara-adam-2026");
    showToast("Link Copied", "Digital RSVP link copied to clipboard");
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col gap-space-md relative overflow-hidden">
      {/* Visual Accent: Gold Emblem Watermark in corner */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-5 pointer-events-none text-primary">
        <span className="material-symbols-outlined text-[140px]">spa</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-semibold">
          Milestone Countdown
        </span>
        <span className="material-symbols-outlined text-outline text-[18px]">event</span>
      </div>

      <div className="flex flex-col text-center py-2 bg-surface-container-low/50 rounded-lg border border-outline-variant/30">
        <span className="font-headline-xl text-[36px] font-serif text-primary font-normal">
          184
        </span>
        <span className="font-label-md text-[13px] text-on-surface-variant uppercase tracking-wider font-semibold">
          Days Until Saturday
        </span>
        <span className="font-body-sm text-[12px] text-outline mt-0.5">12 December 2026</span>
      </div>

      {/* Couple and Coordination Info */}
      <div className="flex flex-col gap-2 pt-1 border-t border-outline-variant/40">
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-body-sm text-[13px] text-outline">Couple:</span>
          <span className="font-label-md text-[13px] font-semibold">Zara &amp; Adam</span>
        </div>
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-body-sm text-[13px] text-outline">Lead Planner:</span>
          <span className="font-label-md text-[13px] font-medium">Sarah Jensen (Hall Dir.)</span>
        </div>
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-body-sm text-[13px] text-outline">Primary Venue:</span>
          <span className="font-label-md text-[13px] text-right font-medium">
            The Rose Garden &amp; Glasshouse
          </span>
        </div>
      </div>

      {/* Digital RSVP Quick Share / Link */}
      <div className="bg-surface-container-low rounded-lg p-3.5 flex flex-col gap-2.5 border border-outline-variant/40">
        <span className="font-label-sm text-[11px] text-on-surface-variant font-semibold">
          Live Guest Digital RSVP Link
        </span>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-surface-container-lowest px-3 py-1.5 rounded border border-outline-variant/40 text-outline font-code-sm text-[12px] truncate">
            https://liveguest.app/rsvp/zara-adam-2026
          </div>
          <button
            className="w-8 h-8 rounded bg-surface-container-lowest hover:bg-surface-container text-primary flex items-center justify-center shrink-0 shadow-xs border border-outline-variant/40 transition-colors"
            onClick={handleCopy}
            title="Copy Link"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">content_copy</span>
          </button>
        </div>
        <div className="flex items-center justify-between text-outline font-body-sm text-[12px] pt-1">
          <span className="inline-flex items-center gap-1 font-medium">
            <span className="material-symbols-outlined text-[16px] text-secondary">qr_code_2</span>
            QR Code Active
          </span>
          <button
            className="text-primary hover:underline font-label-sm text-[11px] font-semibold"
            onClick={() => showToast("QR Generated", "High-res QR card downloaded")}
            type="button"
          >
            Download Card
          </button>
        </div>
      </div>
    </div>
  );
}

