export function SeatingReadinessCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">table_bar</span>
          <h3 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
            Seating Readiness
          </h3>
        </div>
        <span className="font-label-md text-[13px] font-semibold text-secondary">
          72% Assigned
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between font-body-sm text-[13px] text-on-surface-variant">
          <span>Tables Fully Assigned</span>
          <span className="font-semibold text-on-surface">18 of 25 Tables</span>
        </div>
        <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
          <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: "72%" }} />
        </div>
        <div className="flex justify-between font-label-sm text-[11px] text-outline mt-1 font-medium">
          <span>7 Tables Pending Placement</span>
          <span>56 Guests Unassigned</span>
        </div>
      </div>

      {/* Severe Allergy Banner Alert */}
      <div className="bg-tertiary-container/20 rounded-lg p-3 flex items-start gap-2.5 border border-tertiary-container/40">
        <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
          warning
        </span>
        <div className="flex flex-col">
          <span className="font-label-sm text-[11px] font-semibold text-tertiary">
            Critical Allergy Notice
          </span>
          <p className="font-body-sm text-[12px] text-on-surface mt-0.5 leading-snug">
            3 guests at Table 4 and Table 9 noted severe peanut allergies. Flagged for kitchen supervisor.
          </p>
        </div>
      </div>
    </div>
  );
}

