import type { GuestSide, RSVPStatus, WeddingEventId } from "../../types";

interface GuestsToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedEvent: string;
  onEventChange: (ev: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  selectedSide: string;
  onSideChange: (side: string) => void;
  filterDietaryOnly: boolean;
  onToggleDietary: () => void;
  filterPickupOnly: boolean;
  onTogglePickup: () => void;
  filterRoomOnly: boolean;
  onToggleRoom: () => void;
  onOpenAddModal: () => void;
  onImportCsv: () => void;
}

export function GuestsToolbar({
  searchQuery,
  onSearchChange,
  selectedEvent,
  onEventChange,
  selectedStatus,
  onStatusChange,
  selectedSide,
  onSideChange,
  filterDietaryOnly,
  onToggleDietary,
  filterPickupOnly,
  onTogglePickup,
  filterRoomOnly,
  onToggleRoom,
  onOpenAddModal,
  onImportCsv,
}: GuestsToolbarProps) {
  return (
    <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[280px] max-w-md">
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
          search
        </span>
        <input
          className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant/60 rounded-lg font-body-sm text-[13px] text-on-surface placeholder:text-outline shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
          placeholder="Search family, guest name, or phone..."
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface text-[14px]"
          >
            ✕
          </button>
        )}
      </div>

      {/* Quick Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 xl:pb-0 scrollbar-none">
        {/* Event Filter */}
        <div className="relative shrink-0">
          <select
            className="appearance-none inline-flex items-center pl-3 pr-8 py-2 rounded-full font-label-md text-[13px] bg-surface-container-lowest text-on-surface shadow-sm border border-outline-variant/60 hover:bg-surface-container-low transition-colors cursor-pointer focus:outline-none"
            value={selectedEvent}
            onChange={(e) => onEventChange(e.target.value)}
          >
            <option value="all">All Events</option>
            <option value="dinner">Welcome Dinner</option>
            <option value="ceremony">The Ceremony</option>
            <option value="reception">Reception</option>
          </select>
          <span className="material-symbols-outlined text-[16px] text-outline absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
            expand_more
          </span>
        </div>

        {/* Status Filter */}
        <div className="relative shrink-0">
          <select
            className="appearance-none inline-flex items-center pl-3 pr-8 py-2 rounded-full font-label-md text-[13px] bg-surface-container-lowest text-on-surface shadow-sm border border-outline-variant/60 hover:bg-surface-container-low transition-colors cursor-pointer focus:outline-none"
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            <option value="all">Status: All</option>
            <option value="confirmed">Confirmed</option>
            <option value="awaiting">Awaiting</option>
            <option value="declined">Declined</option>
          </select>
          <span className="material-symbols-outlined text-[16px] text-outline absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
            expand_more
          </span>
        </div>

        {/* Side Filter */}
        <div className="relative shrink-0">
          <select
            className="appearance-none inline-flex items-center pl-3 pr-8 py-2 rounded-full font-label-md text-[13px] bg-surface-container-lowest text-on-surface shadow-sm border border-outline-variant/60 hover:bg-surface-container-low transition-colors cursor-pointer focus:outline-none"
            value={selectedSide}
            onChange={(e) => onSideChange(e.target.value)}
          >
            <option value="all">Side: All</option>
            <option value="bride">Bride Side</option>
            <option value="groom">Groom Side</option>
          </select>
          <span className="material-symbols-outlined text-[16px] text-outline absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
            expand_more
          </span>
        </div>

        {/* Dietary Pill Toggle */}
        <button
          className={`shrink-0 px-3 py-2 rounded-full font-label-md text-[13px] shadow-sm transition-colors flex items-center gap-1.5 border ${
            filterDietaryOnly
              ? "bg-primary-container text-on-primary border-primary-container font-semibold"
              : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface border-outline-variant/60 hover:bg-surface-container-low"
          }`}
          onClick={onToggleDietary}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">restaurant</span>
          <span>Dietary</span>
        </button>

        {/* Pickup Pill Toggle */}
        <button
          className={`shrink-0 px-3 py-2 rounded-full font-label-md text-[13px] shadow-sm transition-colors flex items-center gap-1.5 border ${
            filterPickupOnly
              ? "bg-secondary text-on-secondary border-secondary font-semibold"
              : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface border-outline-variant/60 hover:bg-surface-container-low"
          }`}
          onClick={onTogglePickup}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">airport_shuttle</span>
          <span>Needs pickup</span>
        </button>

        {/* Room Pill Toggle */}
        <button
          className={`shrink-0 px-3 py-2 rounded-full font-label-md text-[13px] shadow-sm transition-colors flex items-center gap-1.5 border ${
            filterRoomOnly
              ? "bg-primary-container text-on-primary border-primary-container font-semibold"
              : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface border-outline-variant/60 hover:bg-surface-container-low"
          }`}
          onClick={onToggleRoom}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">hotel</span>
          <span>Needs room</span>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-space-sm shrink-0">
        <button
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-label-md text-[13px] bg-surface-container-lowest text-primary hover:bg-surface-container-low shadow-sm border border-outline-variant/60 transition-all font-medium"
          onClick={onImportCsv}
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">file_upload</span>
          <span>Import CSV</span>
        </button>
        <button
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-label-md text-[13px] bg-primary-container text-on-primary hover:bg-primary shadow-sm hover:shadow-md transition-all font-medium"
          onClick={onOpenAddModal}
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>+ Add family</span>
        </button>
      </div>
    </div>
  );
}

