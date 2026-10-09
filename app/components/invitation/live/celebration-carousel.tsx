import { useState } from "react";
import { EventCard, type EventCardData } from "./event-card";

interface CelebrationCarouselProps {
  guestFamilyName?: string;
  onRsvp: () => void;
  onNotification?: (msg: string) => void;
  initialTab?: "ceremony" | "dinner" | "reception";
}

export const LIVE_EVENTS_DATA: EventCardData[] = [
  {
    id: "ceremony",
    title: "Ceremony",
    tabLabel: "Ceremony",
    dateStr: "SATURDAY, 12 DECEMBER",
    timeStr: "4:00 PM",
    venueName: "The Grand Hall",
    address: "The Grand Glasshouse Pavilion, London",
    dressCode: "Formal",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmZolNd-oV_GfakCcmawzja48bNVbC4-DqHYbJOsLHUldu7_eosfjZNbxnRYNHrLKFDYAbj5PP7ZjuYEQ8kgYh2Cv-CHU6-2eJ7phQ9YsOjbZFoCT2iMVVmjcrRu7FEHsioycOaqVo3me6aj760FZ_aDWf8uh0r44dqllgGYtiz3nJMzkeRw1-QSl66WRFbwvIFXhaoAsmZOMXESa995TWQHtswp0q0-YWYcyz9uONU9sK__DupPlaMA",
    mapQuery: "The Grand Hall London",
    calendarStart: "20261212T160000",
    calendarEnd: "20261212T173000",
  },
  {
    id: "dinner",
    title: "Welcome Dinner",
    tabLabel: "Dinner",
    dateStr: "FRIDAY, 11 DECEMBER",
    timeStr: "7:00 PM",
    venueName: "The Garden Terrace",
    address: "The Rose Garden Pergola & Terrace, Mayfair",
    dressCode: "Smart casual",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAE2Ac_uPicnyVBZWZ5BgofJr4vRE2XdCx-kM0w7dFXRkAk6AFlx_yyupPEUeHYTFbyHFGZ0lCJ_vywyhL5Z-Sr2jF6g3jZV76zMkXsjx5wb5SIGEVYTjJnFKpL6-H7FM2dIICDAvfjfBbX8ajFIWILE-OBGza4VSCHA9IM2VV9rq1aFvMrpu-9-vus_ly-ffRJaJlcX4P9tXtBJPqP6caaWbh7d6CWgf7xeAwcZ5f4vAnxAjtnry2FjA",
    mapQuery: "The Garden Terrace Mayfair London",
    calendarStart: "20261211T190000",
    calendarEnd: "20261211T220000",
  },
  {
    id: "reception",
    title: "Reception",
    tabLabel: "Reception",
    dateStr: "SATURDAY, 12 DECEMBER",
    timeStr: "6:30 PM",
    venueName: "The Grand Hall Ballroom",
    address: "Crystal Ballroom & Rose Lawn, London",
    dressCode: "Formal",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSh3gdNJgAazdAJslTl6PxZjT5yQiS45w2JUV2ArfSAelTw2LOjC9EHyWv0z0HugQ80N4SeqVzL8G8HokRz6BhZz-m3nD3-cLdss2zF5HT4KHDvllnJk6ym96vzMDurq2Ai0F2z8Z_9H7Vo0c5KoBX5LvuaaG3ZzX0ggiN38a1dbO0p-3jdMzv-eypCNdyh7yQDeTPpBKtOR42QzXXr-ETW6ko04r5IngZ16tMFu3tBxop8Wbw931p6A",
    mapQuery: "The Grand Hall Ballroom London",
    calendarStart: "20261212T183000",
    calendarEnd: "20261212T233000",
  },
];

export function CelebrationCarousel({
  guestFamilyName = "Dear Morgan Family",
  onRsvp,
  onNotification,
  initialTab = "ceremony",
}: CelebrationCarouselProps) {
  const [activeTab, setActiveTab] = useState<"ceremony" | "dinner" | "reception">(initialTab);

  const activeEvent = LIVE_EVENTS_DATA.find((e) => e.id === activeTab) || LIVE_EVENTS_DATA[0];

  return (
    <div className="relative w-full h-full min-h-[640px] bg-[#FAF6EE] flex flex-col justify-between items-center px-4 py-6 select-none overflow-hidden animate-in fade-in duration-300">
      {/* Top Greeting Header */}
      <div className="flex flex-col items-center text-center w-full z-10">
        <span className="font-label-sm text-[10px] uppercase tracking-[0.22em] text-[#7A7468] font-bold">
          The Celebration
        </span>
        <h2 className="font-headline-sm text-[20px] font-serif text-[#2B2B2B] mt-0.5 font-medium">
          {guestFamilyName.startsWith("Dear") ? guestFamilyName : `Dear ${guestFamilyName}`}
        </h2>

        {/* Event Navigation Pill Tabs */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white border border-[#EADFC8] shadow-xs mt-3.5">
          {LIVE_EVENTS_DATA.map((event) => {
            const isActive = activeTab === event.id;
            return (
              <button
                key={event.id}
                onClick={() => setActiveTab(event.id)}
                type="button"
                className={`px-3.5 py-1 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#B8975A] text-white shadow-xs font-semibold"
                    : "text-[#7A7468] hover:text-[#2B2B2B] hover:bg-[#FAF6EE]"
                }`}
              >
                {event.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Event Card Area */}
      <div className="w-full max-w-[320px] my-auto py-2 z-10 animate-in fade-in zoom-in-95 duration-200" key={activeEvent.id}>
        <EventCard event={activeEvent} onNotification={onNotification} />
      </div>

      {/* Bottom Sticky Action: RSVP now */}
      <div className="w-full max-w-[320px] flex flex-col items-center pb-2 z-10">
        <button
          onClick={onRsvp}
          type="button"
          className="w-full py-3.5 rounded-xl bg-[#B8975A] hover:bg-[#A38347] text-white font-label-md text-[14px] font-semibold tracking-wide shadow-[0_4px_16px_rgba(184,151,90,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>RSVP now</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

