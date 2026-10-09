import { useState, useMemo } from "react";
import type { Route } from "./+types/guests";
import { AppShell } from "../components/layout/app-shell";
import { useWedding } from "../context/wedding-context";
import { GuestsToolbar } from "../components/guests/guests-toolbar";
import { GuestsTable } from "../components/guests/guests-table";
import { GuestDrawer } from "../components/guests/guest-drawer";
import { AddGuestModal } from "../components/guests/add-guest-modal";
import type { WeddingEventId } from "../types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Guests Directory — Live Guest Wedding Operations" },
    { name: "description", content: "Manage guest directory, real-time RSVPs, airport transfers, and room blocks." },
  ];
}

export default function Guests() {
  const { guests, showToast } = useWedding();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedSide, setSelectedSide] = useState("all");
  const [filterDietaryOnly, setFilterDietaryOnly] = useState(false);
  const [filterPickupOnly, setFilterPickupOnly] = useState(false);
  const [filterRoomOnly, setFilterRoomOnly] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter guests based on active toolbar settings
  const filteredGuests = useMemo(() => {
    return guests.filter((g) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesFamily = g.familyName.toLowerCase().includes(q);
        const matchesLead = g.leadContact.toLowerCase().includes(q);
        const matchesPhone = g.phone.toLowerCase().includes(q);
        const matchesEmail = g.email.toLowerCase().includes(q);
        if (!matchesFamily && !matchesLead && !matchesPhone && !matchesEmail) return false;
      }

      // Event filter
      if (selectedEvent !== "all") {
        if (!g.events.includes(selectedEvent as WeddingEventId)) return false;
      }

      // Status filter
      if (selectedStatus !== "all") {
        if (g.status !== selectedStatus) return false;
      }

      // Side filter
      if (selectedSide !== "all") {
        if (g.side !== selectedSide) return false;
      }

      // Dietary filter
      if (filterDietaryOnly) {
        if (!g.dietaryTags || g.dietaryTags.length === 0) return false;
      }

      // Pickup filter
      if (filterPickupOnly) {
        if (!g.needsPickup) return false;
      }

      // Room filter
      if (filterRoomOnly) {
        if (!g.needsHotelRoom) return false;
      }

      return true;
    });
  }, [
    guests,
    searchQuery,
    selectedEvent,
    selectedStatus,
    selectedSide,
    filterDietaryOnly,
    filterPickupOnly,
    filterRoomOnly,
  ]);

  const handleImportCsv = () => {
    showToast("Import CSV", "CSV guest importer ready — Drag and drop your .csv file");
  };

  return (
    <AppShell>
      <div className="px-gutter-lg py-space-xl max-w-[1440px] mx-auto w-full space-y-space-xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
          <div className="space-y-space-xs">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-container" />
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
                Real-Time Guest Operations
              </span>
            </div>
            <h1 className="font-headline-xl text-[36px] font-serif text-on-surface tracking-tight font-medium">
              Guest Directory &amp; RSVPs
            </h1>
            <p className="font-body-md text-[14px] text-on-surface-variant">
              Zara and Adam, Saturday 12 December 2026{" "}
              <span className="text-outline-variant mx-1">•</span> 180 Total Invited{" "}
              <span className="text-outline-variant mx-1">•</span> 48 Families / Parties
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-container-low p-2 rounded-xl shadow-xs border border-outline-variant/40">
            <div className="bg-surface-container-lowest px-4 py-2.5 rounded-lg flex flex-col justify-center min-w-[110px] shadow-xs border border-outline-variant/30">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
                Invited
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-headline-sm text-[18px] font-serif text-on-surface font-semibold">
                  180
                </span>
                <span className="font-label-sm text-[11px] text-outline">pax</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest px-4 py-2.5 rounded-lg flex flex-col justify-center min-w-[110px] shadow-xs border border-outline-variant/30">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Confirmed
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-headline-sm text-[18px] font-serif text-secondary font-semibold">
                  126
                </span>
                <span className="font-label-sm text-[11px] text-secondary/70">70%</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest px-4 py-2.5 rounded-lg flex flex-col justify-center min-w-[110px] shadow-xs border border-outline-variant/30">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-semibold">
                Awaiting
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-headline-sm text-[18px] font-serif text-primary font-semibold">
                  40
                </span>
                <span className="font-label-sm text-[11px] text-primary/70">22%</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest px-4 py-2.5 rounded-lg flex flex-col justify-center min-w-[110px] shadow-xs border border-outline-variant/30">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-tertiary font-semibold">
                Declined
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-headline-sm text-[18px] font-serif text-tertiary font-semibold">
                  14
                </span>
                <span className="font-label-sm text-[11px] text-tertiary/70">8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Progress & Editorial Accent Bar */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/60 flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md w-full sm:w-auto">
            <div className="h-10 w-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container shrink-0 border border-outline-variant/40">
              <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-[13px] text-on-surface font-semibold">
                Acceptance Target on Track
              </span>
              <span className="font-body-sm text-[12px] text-outline">
                Reception hall baseline configured for 140 guaranteed plates
              </span>
            </div>
          </div>

          <div className="w-full sm:w-72 flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-label-sm text-[11px] font-label-sm">
              <span className="text-on-surface-variant font-medium">Capacity Reached</span>
              <span className="text-primary font-bold">70.0%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden flex border border-outline-variant/20">
              <div className="bg-secondary h-full" style={{ width: "70%" }} />
              <div className="bg-primary-container h-full" style={{ width: "22.2%" }} />
              <div className="bg-tertiary-container h-full" style={{ width: "7.8%" }} />
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <GuestsToolbar
          filterDietaryOnly={filterDietaryOnly}
          filterPickupOnly={filterPickupOnly}
          filterRoomOnly={filterRoomOnly}
          onEventChange={setSelectedEvent}
          onImportCsv={handleImportCsv}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onSearchChange={setSearchQuery}
          onSideChange={setSelectedSide}
          onStatusChange={setSelectedStatus}
          onToggleDietary={() => setFilterDietaryOnly(!filterDietaryOnly)}
          onTogglePickup={() => setFilterPickupOnly(!filterPickupOnly)}
          onToggleRoom={() => setFilterRoomOnly(!filterRoomOnly)}
          searchQuery={searchQuery}
          selectedEvent={selectedEvent}
          selectedSide={selectedSide}
          selectedStatus={selectedStatus}
        />

        {/* Main Table */}
        <GuestsTable guests={filteredGuests} />
      </div>

      {/* Slide-over Drawer */}
      <GuestDrawer />

      {/* Add Guest Modal */}
      <AddGuestModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </AppShell>
  );
}

