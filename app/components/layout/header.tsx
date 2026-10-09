import { useState } from "react";
import { useWedding } from "../../context/wedding-context";

export function Header() {
  const { language, setLanguage, activityFeed } = useWedding();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="fixed top-0 left-[72px] right-0 h-[72px] bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant shadow-[0_1px_3px_0_rgba(43,43,43,0.02)] z-40 px-gutter-lg flex items-center justify-between">
      {/* Left: Active Event & Status */}
      <div className="flex items-center gap-space-md">
        <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-2 rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined text-primary text-[20px]">diamond</span>
          <div className="flex flex-col text-left">
            <span className="font-label-md text-[13px] text-on-surface font-medium">
              Zara &amp; Adam — Sat, Dec 12, 2026
            </span>
          </div>
          <span className="material-symbols-outlined text-outline text-[18px]">expand_more</span>
        </div>

        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-[11px] bg-secondary-container text-on-secondary-container border border-secondary-fixed-dim font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5 animate-pulse"></span>
          Live &amp; Collecting
        </span>
      </div>

      {/* Right: Stream Indicator, Language, Notifications, Director Profile */}
      <div className="flex items-center gap-space-lg">
        {/* RSVP Stream Active */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="font-label-sm text-[11px] text-on-surface-variant font-medium">RSVP Stream Active</span>
        </div>

        {/* Language Switcher */}
        <div className="inline-flex items-center p-0.5 rounded-full bg-surface-container-low border border-outline-variant">
          <button
            className={`px-2.5 py-1 rounded-full font-label-sm text-[11px] transition-colors ${
              language === "EN"
                ? "bg-surface-container-lowest text-primary border border-outline-variant shadow-sm font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-medium"
            }`}
            onClick={() => setLanguage("EN")}
            type="button"
          >
            EN
          </button>
          <button
            className={`px-2.5 py-1 rounded-full font-label-sm text-[11px] transition-colors ${
              language === "اردو"
                ? "bg-surface-container-lowest text-primary border border-outline-variant shadow-sm font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-medium"
            }`}
            onClick={() => setLanguage("اردو")}
            type="button"
          >
            اردو
          </button>
        </div>

        {/* Notification Bell & Dropdown */}
        <div className="relative">
          <button
            className="relative p-2 text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container-low"
            onClick={() => setShowNotifications(!showNotifications)}
            type="button"
            title="Notifications"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-tertiary text-on-tertiary font-label-sm text-[10px] font-bold">
              {activityFeed.length}
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl z-50 p-3 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-outline-variant">
                <span className="font-label-md text-[13px] font-semibold text-on-surface">Recent RSVP Updates</span>
                <span className="text-[10px] text-secondary font-medium">Live Stream</span>
              </div>
              <div className="flex flex-col gap-2 max-h-72 overflow-y-auto">
                {activityFeed.map((item) => (
                  <div key={item.id} className="p-2 rounded-lg bg-surface-container-low/60 flex items-start gap-2 text-left">
                    <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {item.initials}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[12px] font-semibold text-on-surface truncate">{item.guestName}</span>
                      <span className="text-[11px] text-secondary">{item.statusText}</span>
                      <span className="text-[10px] text-outline">{item.timeAgo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-space-sm pl-space-md border-l border-outline-variant">
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiq5LFoucZ14wv2a4nVv5kLX9usyWWQzsAJHU3YnMRv8eONz2tlzH4o2Q1XgL_2wV2mNI9xT_sxV_DbSaIiUMmuYH6AsTRqPs6esnAXwlG9iaeOZLScpCcvsnPfuMSBQpNAdvWpaCA5ATM5VKprmero6op9sDAbb3idvxU5sRXR11bk_ZoAAF9WR-Fu8p0lh-r68nOf7_pj61vzvaeywU0c7_UvW4XD4kHThoHy2UInMKApzDvl-_kLg"
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-label-md text-[13px] font-medium text-on-surface leading-none mb-0.5">
              Sarah Jensen
            </span>
            <span className="font-label-sm text-[11px] text-outline leading-none">
              Hall Director
            </span>
          </div>
          <span className="material-symbols-outlined text-outline text-[18px]">unfold_more</span>
        </div>
      </div>
    </header>
  );
}

