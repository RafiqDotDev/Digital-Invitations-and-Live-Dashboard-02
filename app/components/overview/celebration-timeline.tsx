export function CelebrationTimeline() {
  const events = [
    {
      title: "1. Welcome Dinner",
      subtitle: "Friday, Dec 11 • The Rose Garden Pergola • Cap: 120",
      attending: 94,
      capacity: 120,
      confirmed: 94,
      pending: 14,
      declined: 12,
      openSeats: 26,
      icon: "dinner_dining",
      confirmedPct: 78.3,
      pendingPct: 11.7,
      declinedPct: 10,
    },
    {
      title: "2. The Ceremony",
      subtitle: "Saturday, Dec 12 • The Grand Glasshouse • Cap: 250",
      attending: 198,
      capacity: 250,
      confirmed: 198,
      pending: 28,
      declined: 24,
      openSeats: 52,
      icon: "favorite",
      confirmedPct: 79.2,
      pendingPct: 11.2,
      declinedPct: 9.6,
    },
    {
      title: "3. Crystal Ballroom Reception",
      subtitle: "Saturday, Dec 12 • Crystal Ballroom & Lawn • Cap: 250",
      attending: 192,
      capacity: 250,
      confirmed: 192,
      pending: 34,
      declined: 24,
      openSeats: 58,
      icon: "celebration",
      confirmedPct: 76.8,
      pendingPct: 13.6,
      declinedPct: 9.6,
    },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
        <div>
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-semibold">
            Celebration Timeline
          </span>
          <h2 className="font-headline-md text-[22px] font-serif text-on-surface">
            Event Breakdown &amp; Capacity
          </h2>
        </div>
        <span className="font-body-sm text-[13px] text-outline">
          Caps locked with venue management
        </span>
      </div>

      <div className="flex flex-col gap-space-md">
        {events.map((ev) => (
          <div
            key={ev.title}
            className="bg-surface-container-low/60 rounded-lg p-space-md flex flex-col gap-3 border border-outline-variant/30"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-xs">
                  <span className="material-symbols-outlined text-[18px]">{ev.icon}</span>
                </span>
                <div>
                  <h3 className="font-headline-sm text-[16px] font-serif font-semibold text-on-surface">
                    {ev.title}
                  </h3>
                  <p className="font-body-sm text-[12px] text-outline">{ev.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-label-md text-[13px] font-semibold text-on-surface">
                  {ev.attending} Attending
                </span>
                <span className="font-body-sm text-[12px] text-outline">
                  {" "}
                  / {ev.capacity} ({Math.round((ev.attending / ev.capacity) * 100)}%)
                </span>
              </div>
            </div>

            {/* Custom Multi-segment Progress Bar */}
            <div className="w-full bg-surface-variant h-2.5 rounded-full overflow-hidden flex">
              <div
                className="bg-primary-container h-full transition-all duration-500"
                style={{ width: `${ev.confirmedPct}%` }}
                title={`Confirmed: ${ev.confirmed}`}
              />
              <div
                className="bg-surface-dim h-full transition-all duration-500"
                style={{ width: `${ev.pendingPct}%` }}
                title={`Pending: ${ev.pending}`}
              />
              <div
                className="bg-tertiary-container/60 h-full transition-all duration-500"
                style={{ width: `${ev.declinedPct}%` }}
                title={`Declined: ${ev.declined}`}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 font-label-sm text-[11px] text-outline pt-0.5">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary-container" />
                  {ev.confirmed} Confirmed
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-surface-dim" />
                  {ev.pending} Pending
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-tertiary-container/60" />
                  {ev.declined} Declined
                </span>
              </div>
              <span className="text-secondary font-medium">{ev.openSeats} Open Seats Available</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

