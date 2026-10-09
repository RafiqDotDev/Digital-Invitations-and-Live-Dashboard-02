import { Link } from "react-router";
import { useWedding } from "../../context/wedding-context";

export function LiveActivityFeed() {
  const { activityFeed } = useWedding();

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">rss_feed</span>
          <h2 className="font-headline-md text-[22px] font-serif text-on-surface">
            Live RSVP Submissions
          </h2>
        </div>
        <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-secondary font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
          Streaming live
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {activityFeed.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg bg-surface-container-low/40 hover:bg-surface-container-low transition-colors gap-2 border border-outline-variant/20"
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-label-md text-[13px] font-semibold ${
                  item.avatarBg || "bg-secondary-container text-secondary"
                }`}
              >
                {item.initials}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-label-md text-[13px] font-semibold text-on-surface">
                    {item.guestName}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-label-sm text-[11px] font-medium ${
                      item.status === "confirmed"
                        ? "bg-secondary-container/60 text-secondary"
                        : item.status === "declined"
                        ? "bg-tertiary-container/40 text-tertiary"
                        : "bg-primary-fixed/50 text-primary"
                    }`}
                  >
                    {item.statusText}
                  </span>
                </div>
                <p className="font-body-sm text-[13px] text-on-surface-variant mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="font-code-sm text-[12px] text-outline">{item.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 text-center">
        <Link
          className="font-label-md text-[13px] text-primary hover:text-on-primary-container inline-flex items-center gap-1.5 font-semibold transition-colors"
          to="/guests"
        >
          <span>View Full Guest Audit Trail</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

