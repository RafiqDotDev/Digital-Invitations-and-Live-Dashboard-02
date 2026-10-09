import { Link } from "react-router";

export function ArrivalsConcierge() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 space-y-space-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline-md text-[22px] font-serif text-on-surface">Arrivals</h2>
          <p className="font-body-sm text-[13px] text-outline">
            Flight landings and venue check-in distribution
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-secondary">
          <span className="material-symbols-outlined text-[20px]">flight_land</span>
          <span className="font-label-sm text-[11px] uppercase tracking-wide font-semibold">
            Transit Concierge
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {/* Thu 10 Dec */}
        <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between space-y-2 border border-outline-variant/30">
          <div className="flex items-center justify-between text-outline">
            <span className="font-label-sm text-[11px] uppercase tracking-wider font-semibold">
              Thursday
            </span>
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          </div>
          <div>
            <p className="font-label-md text-[13px] text-on-surface font-semibold">10 Dec</p>
            <div className="font-headline-lg text-[28px] font-serif text-primary mt-1">
              14{" "}
              <span className="font-body-sm text-[13px] text-on-surface-variant font-normal">
                guests
              </span>
            </div>
          </div>
        </div>

        {/* Fri 11 Dec */}
        <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between space-y-2 border border-outline-variant/30">
          <div className="flex items-center justify-between text-outline">
            <span className="font-label-sm text-[11px] uppercase tracking-wider font-semibold">
              Friday
            </span>
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          </div>
          <div>
            <p className="font-label-md text-[13px] text-on-surface font-semibold">11 Dec</p>
            <div className="font-headline-lg text-[28px] font-serif text-primary mt-1">
              52{" "}
              <span className="font-body-sm text-[13px] text-on-surface-variant font-normal">
                guests
              </span>
            </div>
          </div>
        </div>

        {/* Sat 12 Dec */}
        <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between space-y-2 border border-outline-variant/30">
          <div className="flex items-center justify-between text-outline">
            <span className="font-label-sm text-[11px] uppercase tracking-wider font-semibold">
              Saturday
            </span>
            <span className="material-symbols-outlined text-[18px]">event</span>
          </div>
          <div>
            <p className="font-label-md text-[13px] text-on-surface font-semibold">
              12 Dec (Day of)
            </p>
            <div className="font-headline-lg text-[28px] font-serif text-primary mt-1">
              60{" "}
              <span className="font-body-sm text-[13px] text-on-surface-variant font-normal">
                guests
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Banner Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-space-md rounded-lg bg-surface-container text-on-surface border border-outline-variant/40">
        <div className="flex items-center gap-space-sm">
          <span className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
            <span className="material-symbols-outlined text-[18px]">airport_shuttle</span>
          </span>
          <span className="font-label-md text-[13px] font-medium">17 pickups needed</span>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
            <span className="material-symbols-outlined text-[18px]">hotel</span>
          </span>
          <span className="font-label-md text-[13px] font-medium">23 rooms needed</span>
        </div>
        <Link
          className="font-label-sm text-[11px] text-primary hover:underline flex items-center gap-1 font-semibold"
          to="/guests"
        >
          View logistics <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

