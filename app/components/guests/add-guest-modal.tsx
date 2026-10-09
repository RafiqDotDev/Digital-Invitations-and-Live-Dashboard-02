import { useState } from "react";
import { useWedding } from "../../context/wedding-context";
import type { GuestSide, RSVPStatus, WeddingEventId } from "../../types";

interface AddGuestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddGuestModal({ isOpen, onClose }: AddGuestModalProps) {
  const { addGuestParty } = useWedding();

  const [familyName, setFamilyName] = useState("");
  const [leadContact, setLeadContact] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [side, setSide] = useState<GuestSide>("bride");
  const [invitedCount, setInvitedCount] = useState(2);
  const [status, setStatus] = useState<RSVPStatus>("awaiting");
  const [events, setEvents] = useState<WeddingEventId[]>(["dinner", "ceremony", "reception"]);
  const [dietary, setDietary] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const toggleEvent = (ev: WeddingEventId) => {
    setEvents((prev) =>
      prev.includes(ev) ? prev.filter((e) => e !== ev) : [...prev, ev]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!familyName.trim() || !leadContact.trim()) return;

    addGuestParty({
      familyName: familyName.trim(),
      leadContact: leadContact.trim(),
      phone: phone.trim() || "+44 7700 000000",
      email: email.trim() || "guest@example.com",
      side,
      invitedCount,
      confirmedCount: status === "confirmed" ? invitedCount : 0,
      status,
      events,
      tableAssignment: status === "confirmed" ? "Table Unassigned" : undefined,
      dietaryNotes: dietary.trim() || undefined,
      dietaryTags: dietary.trim() ? [dietary.trim()] : [],
      lastReply: "Just now",
      replyChannel: "Manual Entry",
      inviteCode: `${familyName.slice(0, 4).toUpperCase()}-${invitedCount}`,
      notes: notes.trim() || undefined,
      members: Array.from({ length: invitedCount }, (_, i) => ({
        id: `m-new-${i}`,
        name: i === 0 ? leadContact.trim() : `Guest ${i + 1} (${familyName})`,
        type: "adult",
        dietary: dietary.trim() || undefined,
        attending: status === "confirmed",
      })),
    });

    onClose();
    // Reset form
    setFamilyName("");
    setLeadContact("");
    setPhone("");
    setEmail("");
    setDietary("");
    setNotes("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">person_add</span>
            <h3 className="font-headline-sm text-[20px] font-serif text-on-surface font-semibold">
              Add Guest / Family Party
            </h3>
          </div>
          <button
            className="text-outline hover:text-on-surface p-1 rounded-lg"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                Family / Group Name *
              </label>
              <input
                required
                className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
                placeholder="e.g. Tariq Family"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                Lead Contact Name *
              </label>
              <input
                required
                className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
                placeholder="e.g. Dr. Tariq"
                value={leadContact}
                onChange={(e) => setLeadContact(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                Phone Number
              </label>
              <input
                className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
                placeholder="+44 7700 900000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
                placeholder="guest@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                Side
              </label>
              <select
                className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[13px] focus:outline-none focus:ring-2 focus:ring-primary-container"
                value={side}
                onChange={(e) => setSide(e.target.value as GuestSide)}
              >
                <option value="bride">Bride Side</option>
                <option value="groom">Groom Side</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                Invited Pax
              </label>
              <input
                type="number"
                min="1"
                max="20"
                className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
                value={invitedCount}
                onChange={(e) => setInvitedCount(parseInt(e.target.value) || 1)}
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                Initial Status
              </label>
              <select
                className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[13px] focus:outline-none focus:ring-2 focus:ring-primary-container"
                value={status}
                onChange={(e) => setStatus(e.target.value as RSVPStatus)}
              >
                <option value="awaiting">Awaiting</option>
                <option value="confirmed">Confirmed</option>
                <option value="declined">Declined</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1.5">
              Invited Events
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { id: "dinner", label: "Welcome Dinner" },
                { id: "ceremony", label: "The Ceremony" },
                { id: "reception", label: "Ballroom Reception" },
              ].map((ev) => (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => toggleEvent(ev.id as WeddingEventId)}
                  className={`px-3 py-1 rounded-full text-[12px] font-medium border transition-colors ${
                    events.includes(ev.id as WeddingEventId)
                      ? "bg-primary-container text-on-primary border-primary-container font-semibold"
                      : "bg-surface-container-low text-on-surface-variant border-outline-variant"
                  }`}
                >
                  {events.includes(ev.id as WeddingEventId) && "✓ "}
                  {ev.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
              Dietary Requirements / Allergies
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[13px] focus:outline-none focus:ring-2 focus:ring-primary-container"
              placeholder="e.g. Halal, Gluten-Free, Nut allergy"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
              Internal Notes
            </label>
            <textarea
              className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface text-[13px] focus:outline-none focus:ring-2 focus:ring-primary-container"
              placeholder="Additional information for planner/venue..."
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-outline-variant">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-low text-[13px] font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-primary-container text-on-primary text-[13px] font-medium shadow-sm hover:opacity-95 transition-all"
            >
              Add Guest Party
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

