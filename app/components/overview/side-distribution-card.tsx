export function SideDistributionCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 space-y-space-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline-md text-[22px] font-serif text-on-surface">
            Bride side vs groom side
          </h2>
          <p className="font-body-sm text-[13px] text-outline">
            RSVP distribution across parties
          </p>
        </div>
        <div className="text-right">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
            Total Confirmed
          </span>
          <div className="font-headline-sm text-[20px] font-serif text-on-surface font-semibold">
            180
          </div>
        </div>
      </div>

      <div className="space-y-space-sm">
        {/* Split Bar */}
        <div className="w-full h-5 rounded-full overflow-hidden flex bg-surface-container-low shadow-inner">
          <div
            className="bg-primary-container h-full transition-all duration-300"
            style={{ width: "54.4%" }}
            title="Bride: 98 (54%)"
          />
          <div
            className="bg-secondary-container h-full transition-all duration-300"
            style={{ width: "45.6%" }}
            title="Groom: 82 (46%)"
          />
        </div>

        {/* Labels & Legend */}
        <div className="flex items-center justify-between pt-1 font-label-md text-[13px]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary-container" />
            <span className="font-medium text-on-surface">Bride&apos;s Family &amp; Friends</span>
            <span className="font-headline-sm text-[16px] font-serif font-bold text-primary ml-1">
              98
            </span>
            <span className="font-body-sm text-[12px] text-outline">(54%)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-body-sm text-[12px] text-outline">(46%)</span>
            <span className="font-headline-sm text-[16px] font-serif font-bold text-on-secondary-container mr-1">
              82
            </span>
            <span className="font-medium text-on-surface">Groom&apos;s Family &amp; Friends</span>
            <span className="w-3 h-3 rounded-full bg-secondary-container" />
          </div>
        </div>
      </div>
    </div>
  );
}

