import { Link } from "react-router";

export function CheckinTerminalCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex items-center justify-between gap-4">
      <div className="flex flex-col">
        <h4 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
          Check-in Terminal
        </h4>
        <p className="font-body-sm text-[13px] text-outline mt-0.5">
          Prep tablet scanners for the Welcome Pergola desk.
        </p>
        <Link
          className="font-label-sm text-[11px] text-primary font-semibold hover:underline mt-2 inline-flex items-center gap-1"
          to="/guests"
        >
          Launch Fast Check-in <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
        </Link>
      </div>
      <div className="w-16 h-16 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 border border-outline-variant/40">
        <span className="material-symbols-outlined text-[36px]">contactless</span>
      </div>
    </div>
  );
}

