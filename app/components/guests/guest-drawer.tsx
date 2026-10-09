import { useState } from "react";
import { useWedding } from "../../context/wedding-context";

export function GuestDrawer() {
  const { selectedParty, setSelectedPartyId, updateGuestParty, showToast } = useWedding();
  const [editingNotes, setEditingNotes] = useState(false);
  const [internalNotes, setInternalNotes] = useState("");

  if (!selectedParty) return null;

  const handleClose = () => setSelectedPartyId(null);

  const handleSaveNotes = () => {
    if (editingNotes) {
      updateGuestParty(selectedParty.id, { notes: internalNotes });
      setEditingNotes(false);
    } else {
      setInternalNotes(selectedParty.notes || "");
      setEditingNotes(true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://liveguest.app/rsvp/${selectedParty.inviteCode}`);
    showToast("Invite Link Copied", `Link for ${selectedParty.familyName} copied`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          aria-label="Party details drawer"
          className="w-screen max-w-xl bg-surface-container-lowest border-l border-outline-variant shadow-2xl flex flex-col justify-between h-full animate-in slide-in-from-right duration-300"
        >
          {/* Drawer Top Header */}
          <div className="p-space-lg border-b border-outline-variant bg-surface-container-lowest flex flex-col gap-3 shrink-0">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-headline-md text-[24px] font-serif font-bold text-on-surface">
                    {selectedParty.familyName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full font-label-sm text-[11px] bg-secondary-container text-on-secondary-container font-semibold">
                    Party of {selectedParty.invitedCount}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full font-label-sm text-[11px] bg-surface-container-low text-primary-container font-semibold">
                    {selectedParty.side === "bride" ? "Bride Side" : "Groom Side"}
                  </span>
                </div>
                <span className="font-body-sm text-[13px] text-outline mt-0.5">
                  {selectedParty.leadContact} • {selectedParty.phone}
                </span>
                <span className="font-body-sm text-[12px] text-outline">
                  {selectedParty.email}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  className="p-2 text-outline hover:text-primary rounded-lg hover:bg-surface-container-low transition-colors"
                  onClick={handleCopyLink}
                  title="Copy Unique Invitation Link"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">link</span>
                </button>
                <button
                  className="p-2 text-outline hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors"
                  onClick={handleClose}
                  title="Close Drawer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                <span className="text-[11px] font-semibold text-outline uppercase tracking-wider">
                  Table Assignment
                </span>
                <span className="text-[12px] font-bold text-primary">
                  {selectedParty.tableAssignment || "Pending Placement"}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-secondary-container/40 flex items-center justify-between border border-secondary-fixed-dim">
                <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                  Status
                </span>
                <span className="text-[12px] font-bold text-on-secondary-container capitalize flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {selectedParty.status} ({selectedParty.replyChannel})
                </span>
              </div>
            </div>

            {/* Event Attendance Badges */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] text-outline font-semibold uppercase">Events:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedParty.events.map((ev) => (
                  <span
                    key={ev}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-surface-container-low text-on-surface border border-outline-variant/40"
                  >
                    ✓ {ev === "dinner" ? "Welcome Dinner" : ev === "ceremony" ? "Ceremony" : "Reception"} ({selectedParty.confirmedCount}/{selectedParty.invitedCount})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-space-lg space-y-space-lg">
            {/* Section 1: Individual Party Members */}
            <section className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-bold">
                  Party Members ({selectedParty.members.length})
                </h3>
                <span className="text-[11px] text-secondary font-medium">All Confirmed</span>
              </div>

              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant divide-y divide-outline-variant/40 shadow-xs">
                {selectedParty.members.map((member, index) => (
                  <div key={member.id} className="p-3 flex items-start justify-between gap-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-[13px] text-on-surface font-semibold">
                          {index + 1}. {member.name}
                        </span>
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-label-sm bg-surface-container-low text-outline">
                          {member.type === "adult" ? `Adult (${member.age || "—"})` : `Child (${member.age || "—"})`}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-[12px] text-on-surface-variant">
                        {member.dietary && (
                          <span className="inline-flex items-center gap-1 text-primary">
                            <span className="material-symbols-outlined text-[13px]">restaurant</span>
                            {member.dietary}
                          </span>
                        )}
                        {member.drinkPreference && (
                          <>
                            <span>•</span>
                            <span className="text-outline">Drink: {member.drinkPreference}</span>
                          </>
                        )}
                        {member.specialNeeds && (
                          <>
                            <span>•</span>
                            <span className="text-tertiary font-semibold">{member.specialNeeds}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">
                      check_circle
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Arrival & Logistics */}
            <section className="space-y-2">
              <h3 className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-bold">
                Arrival &amp; Logistics
              </h3>

              <div className="bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant shadow-xs space-y-3">
                <div className="grid grid-cols-2 gap-3 text-body-sm">
                  <div className="bg-surface-container-low/50 p-2.5 rounded-lg border border-outline-variant/30">
                    <span className="font-label-sm text-[11px] text-outline block">Day &amp; Date</span>
                    <span className="font-label-md text-[13px] text-on-surface font-semibold">
                      {selectedParty.arrivalDate || "Friday, 11 Dec 2026"}
                    </span>
                  </div>
                  <div className="bg-surface-container-low/50 p-2.5 rounded-lg border border-outline-variant/30">
                    <span className="font-label-sm text-[11px] text-outline block">Estimated Arrival</span>
                    <span className="font-label-md text-[13px] text-on-surface font-semibold">
                      {selectedParty.arrivalTime || "3:30 PM (Flight PK-785)"}
                    </span>
                  </div>
                </div>

                {/* Pickup details */}
                <div className="flex items-center justify-between p-2.5 bg-surface-container-low/50 rounded-lg border border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      flight_land
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-[13px] text-on-surface font-medium">
                        Airport Pickup: {selectedParty.needsPickup ? "Yes" : "Not Required"}
                      </span>
                      <span className="font-body-sm text-[12px] text-outline">
                        {selectedParty.invitedCount} passengers with checked luggage
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[11px] bg-secondary-container text-on-secondary-container font-medium">
                    Flight Arrival
                  </span>
                </div>

                {/* Hotel room block */}
                <div className="p-2.5 bg-surface-container-low/50 rounded-lg flex items-center justify-between border border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      hotel
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-[13px] text-on-surface font-medium">
                        {selectedParty.roomBlockNotes || "2 Suites Reserved"}
                      </span>
                      <span className="font-body-sm text-[12px] text-outline">
                        Mayfair Pavilion &amp; Suites Block
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[18px]">verified</span>
                </div>

                {/* Driver Assignment */}
                <div className="flex items-center justify-between p-2.5 bg-secondary-container/40 rounded-lg border border-secondary-fixed-dim">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      directions_car
                    </span>
                    <span className="font-label-sm text-[12px] text-on-secondary-container font-medium">
                      Driver: {selectedParty.driverAssigned || "Tariq Q. (Mercedes Sprinter VIP)"}
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-secondary font-semibold">
                    Ready
                  </span>
                </div>
              </div>
            </section>

            {/* Section 3: Reminder & Activity History */}
            <section className="space-y-2">
              <h3 className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-bold">
                Reminder &amp; Activity History
              </h3>

              <div className="bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant shadow-xs">
                <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
                  {selectedParty.history.map((h, i) => (
                    <div key={i} className="relative">
                      <span
                        className={`absolute -left-6 top-1 w-2.5 h-2.5 rounded-full ring-4 ring-surface-container-lowest ${
                          h.type === "confirmed"
                            ? "bg-secondary"
                            : h.type === "opened"
                            ? "bg-primary-container"
                            : "bg-outline"
                        }`}
                      />
                      <div className="flex flex-col">
                        <span className="font-label-md text-[13px] text-on-surface font-semibold">
                          {h.title}
                        </span>
                        <span className="font-body-sm text-[12px] text-on-surface-variant">
                          {h.description}
                        </span>
                        <span className="font-code-sm text-[11px] text-outline mt-0.5">
                          {h.timestamp}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Internal Notes area */}
            {selectedParty.notes && (
              <div className="bg-surface-container-low/70 p-3 rounded-lg border border-outline-variant/40">
                <span className="text-[11px] font-semibold text-outline uppercase block mb-1">
                  Planner Special Notes
                </span>
                <p className="text-[13px] text-on-surface-variant leading-relaxed">
                  {selectedParty.notes}
                </p>
              </div>
            )}
          </div>

          {/* Drawer Action Footer */}
          <div className="p-space-lg border-t border-outline-variant bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
            <button
              className="flex-1 px-4 py-2.5 rounded-lg border border-outline-variant font-label-md text-[13px] text-on-surface hover:bg-surface-container-low transition-colors text-center font-medium"
              onClick={handleSaveNotes}
              type="button"
            >
              {editingNotes ? "Cancel Edit" : "Edit Party Details"}
            </button>
            <button
              className="flex-1 px-4 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-[13px] shadow-sm hover:shadow-md transition-all text-center font-medium"
              onClick={handleSaveNotes}
              type="button"
            >
              Save Changes / Note
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

