import { useState } from "react";
import { generateIcsFile } from "../../../utils/calendar";
import { CelebrationMapModal } from "./celebration-map-modal";

export interface EventCardData {
  id: "ceremony" | "dinner" | "reception";
  title: string;
  tabLabel: string;
  dateStr: string;
  timeStr: string;
  venueName: string;
  address: string;
  dressCode: string;
  imageUrl: string;
  mapQuery: string;
  calendarStart: string;
  calendarEnd: string;
}

interface EventCardProps {
  event: EventCardData;
  onNotification?: (msg: string) => void;
}

export function EventCard({ event, onNotification }: EventCardProps) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleAddToCalendar = () => {
    generateIcsFile({
      title: `Zara & Adam Wedding — ${event.title}`,
      description: `${event.title} at ${event.venueName}. Dress code: ${event.dressCode}.`,
      location: `${event.venueName}, ${event.address}`,
      startDate: event.calendarStart,
      endDate: event.calendarEnd,
    });
    if (onNotification) {
      onNotification(`Added ${event.title} to calendar!`);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl p-4 shadow-[0_12px_32px_-4px_rgba(43,43,43,0.06),0_2px_8px_rgba(184,151,90,0.06)] border border-[#EADFC8] flex flex-col gap-3.5 transition-all">
      {/* Event Header Artwork / Photo */}
      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#FAF6EE] shadow-inner border border-[#EADFC8]/60">
        <img
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={event.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Date & Time Header */}
      <div className="flex flex-col items-center text-center">
        <span className="font-label-sm text-[11px] uppercase tracking-[0.18em] text-[#7A7468] font-bold">
          {event.dateStr}
        </span>
        <div className="font-headline-lg text-[32px] font-serif text-[#2B2B2B] leading-tight my-0.5 font-medium">
          {event.timeStr}
        </div>
        <h3 className="font-headline-sm text-[18px] font-serif text-[#755A23] font-semibold">
          {event.title}
        </h3>
        <p className="font-body-sm text-[13px] text-[#7A7468] mt-0.5 font-medium">
          {event.venueName}
        </p>
        <span className="font-label-sm text-[11px] text-[#7A7468] italic mt-0.5">
          Dress code: {event.dressCode}
        </span>
      </div>

      {/* Actions: View Map & Add to Calendar */}
      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#EADFC8]/60">
        <button
          onClick={() => setIsMapOpen(true)}
          type="button"
          className="py-2 px-3 rounded-lg border border-[#EADFC8] bg-white hover:bg-[#FAF6EE] text-[#7A7468] hover:text-[#2B2B2B] font-label-md text-[12px] font-medium transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px] text-[#B8975A]">map</span>
          <span>View map</span>
        </button>

        <button
          onClick={handleAddToCalendar}
          type="button"
          className="py-2 px-3 rounded-lg border border-[#EADFC8] bg-white hover:bg-[#FAF6EE] text-[#7A7468] hover:text-[#2B2B2B] font-label-md text-[12px] font-medium transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px] text-[#B8975A]">event</span>
          <span>Add to calendar</span>
        </button>
      </div>

      <CelebrationMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        eventTitle={event.title}
        venueName={event.venueName}
        address={event.address}
        mapQuery={event.mapQuery}
      />
    </div>
  );
}

