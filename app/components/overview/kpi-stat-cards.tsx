import { useWedding } from "../../context/wedding-context";

export function KpiStatCards() {
  const { totals } = useWedding();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
      {/* Card 1: Total Invited */}
      <div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col justify-between overflow-hidden">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
              Total Invited
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-headline-xl text-[36px] font-serif text-on-surface">
                {totals.invited}
              </span>
              <span className="font-body-sm text-[13px] text-outline">Guests</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">groups</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-on-surface-variant">
          <span className="font-body-sm text-[13px] text-outline">142 unique invite links</span>
          <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-secondary bg-secondary-container/50 px-2 py-0.5 rounded-full font-medium">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +12 this week
          </span>
        </div>
      </div>

      {/* Card 2: Attending Confirmed */}
      <div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col justify-between overflow-hidden">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary font-semibold">
              Attending Confirmed
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-headline-xl text-[36px] font-serif text-secondary">
                {totals.confirmed}
              </span>
              <span className="font-label-md text-[13px] text-secondary font-semibold">
                {((totals.confirmed / totals.invited) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary-container/60 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between">
          <span className="font-body-sm text-[13px] text-outline">Includes 34 plus-ones</span>
          <span className="font-label-sm text-[11px] text-secondary font-medium">
            164 Main • 34 +1s
          </span>
        </div>
      </div>

      {/* Card 3: Regretfully Declined */}
      <div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col justify-between overflow-hidden">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-tertiary font-semibold">
              Regretfully Declined
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-headline-xl text-[36px] font-serif text-tertiary">
                {totals.declined}
              </span>
              <span className="font-label-md text-[13px] text-tertiary font-semibold">
                {((totals.declined / totals.invited) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-[20px]">cancel</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between">
          <span className="font-body-sm text-[13px] text-outline">18 sent personal blessings</span>
          <span className="font-label-sm text-[11px] text-tertiary font-medium">6 no notes</span>
        </div>
      </div>

      {/* Card 4: Awaiting Response */}
      <div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col justify-between overflow-hidden">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-semibold">
              Awaiting Response
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-headline-xl text-[36px] font-serif text-primary">
                {totals.awaiting}
              </span>
              <span className="font-label-md text-[13px] text-primary font-semibold">
                {((totals.awaiting / totals.invited) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">hourglass_empty</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between">
          <span className="font-body-sm text-[13px] text-outline">Auto reminder in 4 days</span>
          <span className="font-label-sm text-[11px] text-primary font-medium">32 viewed invite</span>
        </div>
      </div>
    </div>
  );
}

