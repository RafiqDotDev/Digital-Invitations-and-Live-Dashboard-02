import { useState } from "react";
import type { GuestParty } from "../../types";
import { useWedding } from "../../context/wedding-context";

interface GuestsTableProps {
  guests: GuestParty[];
}

export function GuestsTable({ guests }: GuestsTableProps) {
  const { setSelectedPartyId, exportCsv, showToast } = useWedding();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(guests.map((g) => g.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleToggleRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyLink = (code: string, family: string) => {
    navigator.clipboard.writeText(`https://liveguest.app/rsvp/${code}`);
    showToast("Link Copied", `Digital invite URL for ${family} copied to clipboard`);
  };

  const handleBroadcastReminder = () => {
    if (selectedIds.length === 0) {
      showToast("No Parties Selected", "Select one or more families to broadcast reminders");
      return;
    }
    showToast(
      "Broadcast Sent",
      `Automated RSVP reminder dispatched to ${selectedIds.length} selected families via WhatsApp & SMS`
    );
  };

  const isAllSelected = guests.length > 0 && selectedIds.length === guests.length;

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/60 overflow-hidden flex flex-col">
      {/* Bulk Action Glance Bar */}
      <div className="bg-surface-container-low px-space-lg py-2.5 flex items-center justify-between text-body-sm font-body-sm border-b border-outline-variant/40">
        <div className="flex items-center gap-space-md">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              checked={isAllSelected}
              className="w-4 h-4 rounded text-primary-container accent-primary-container cursor-pointer"
              onChange={(e) => handleSelectAll(e.target.checked)}
              type="checkbox"
            />
            <span className="font-label-md text-[13px] text-on-surface font-medium">
              Select All Families
            </span>
          </label>
          <span className="text-outline text-label-sm text-[11px] hidden sm:inline">•</span>
          <span className="text-outline text-label-sm text-[11px] hidden sm:inline">
            {selectedIds.length} parties selected
          </span>
        </div>

        <div className="flex items-center gap-space-md">
          <button
            className="text-primary hover:underline font-label-md text-[13px] flex items-center gap-1 font-medium transition-colors"
            onClick={handleBroadcastReminder}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Broadcast Reminder</span>
          </button>
          <span className="text-outline text-label-sm text-[11px]">•</span>
          <button
            className="text-primary hover:underline font-label-md text-[13px] flex items-center gap-1 font-medium transition-colors"
            onClick={exportCsv}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Export View</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50 border-b border-outline-variant/40">
              <th className="py-3.5 pl-space-lg pr-2 w-12" scope="col">
                <span className="sr-only">Row Selection</span>
              </th>
              <th className="py-3.5 px-4 font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold" scope="col">
                Family / Contact
              </th>
              <th className="py-3.5 px-4 font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold" scope="col">
                Side
              </th>
              <th className="py-3.5 px-3 font-label-sm text-[11px] uppercase tracking-wider text-outline text-center font-semibold" scope="col">
                Inv.
              </th>
              <th className="py-3.5 px-3 font-label-sm text-[11px] uppercase tracking-wider text-outline text-center font-semibold" scope="col">
                Att.
              </th>
              <th className="py-3.5 px-4 font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold" scope="col">
                Events
              </th>
              <th className="py-3.5 px-4 font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold" scope="col">
                Status
              </th>
              <th className="py-3.5 px-4 font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold" scope="col">
                Last Reply
              </th>
              <th className="py-3.5 pr-space-lg pl-4 font-label-sm text-[11px] uppercase tracking-wider text-outline text-right font-semibold" scope="col">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-surface-container-low text-body-md text-on-surface">
            {guests.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-outline">
                  <span className="material-symbols-outlined text-[36px] mb-2 block text-outline/60">
                    person_search
                  </span>
                  No guest parties match your search and filter criteria.
                </td>
              </tr>
            ) : (
              guests.map((g) => {
                const isSelected = selectedIds.includes(g.id);
                return (
                  <tr
                    key={g.id}
                    className={`hover:bg-surface-container-low/40 transition-colors group cursor-pointer ${
                      isSelected ? "bg-surface-container-low/60" : ""
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-4 pl-space-lg pr-2" onClick={(e) => e.stopPropagation()}>
                      <input
                        checked={isSelected}
                        className="row-checkbox w-4 h-4 rounded text-primary-container accent-primary-container cursor-pointer"
                        onChange={() => handleToggleRow(g.id)}
                        type="checkbox"
                      />
                    </td>

                    {/* Family / Contact */}
                    <td className="py-4 px-4" onClick={() => setSelectedPartyId(g.id)}>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-primary transition-colors">
                          {g.familyName}
                        </span>
                        <span className="font-body-sm text-[12px] text-outline">
                          {g.leadContact}
                        </span>
                        {g.dietaryTags.length > 0 && (
                          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                            {g.dietaryTags.map((tag) => (
                              <span
                                key={tag}
                                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-sm text-[10px] font-medium ${
                                  tag.toLowerCase().includes("allergy")
                                    ? "bg-tertiary-fixed text-on-tertiary-fixed-variant"
                                    : "bg-surface-container-low text-outline"
                                }`}
                              >
                                {tag.toLowerCase().includes("allergy") ? (
                                  <span className="material-symbols-outlined text-[12px] text-tertiary">
                                    warning
                                  </span>
                                ) : (
                                  <span className="material-symbols-outlined text-[12px] text-primary">
                                    restaurant
                                  </span>
                                )}
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Side */}
                    <td className="py-4 px-4" onClick={() => setSelectedPartyId(g.id)}>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full font-label-sm text-[11px] font-medium ${
                          g.side === "bride"
                            ? "bg-surface-container-low text-primary-container font-semibold"
                            : "bg-surface-container-low text-outline font-medium"
                        }`}
                      >
                        {g.side === "bride" ? "Bride" : "Groom"}
                      </span>
                    </td>

                    {/* Inv Count */}
                    <td className="py-4 px-3 text-center font-metric-number text-[20px] font-serif text-on-surface" onClick={() => setSelectedPartyId(g.id)}>
                      {g.invitedCount}
                    </td>

                    {/* Att Count */}
                    <td
                      className={`py-4 px-3 text-center font-metric-number text-[20px] font-serif font-medium ${
                        g.confirmedCount > 0 ? "text-secondary" : "text-outline"
                      }`}
                      onClick={() => setSelectedPartyId(g.id)}
                    >
                      {g.confirmedCount}
                    </td>

                    {/* Events */}
                    <td className="py-4 px-4" onClick={() => setSelectedPartyId(g.id)}>
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {g.events.map((ev) => (
                          <span
                            key={ev}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-surface-container-low text-on-surface-variant border border-outline-variant/30"
                          >
                            {ev === "dinner" ? "Dinner" : ev === "ceremony" ? "Ceremony" : "Reception"}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4" onClick={() => setSelectedPartyId(g.id)}>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-[11px] font-medium capitalize ${
                          g.status === "confirmed"
                            ? "bg-secondary-container text-on-secondary-container"
                            : g.status === "declined"
                            ? "bg-tertiary-container/40 text-tertiary"
                            : "bg-primary-fixed/40 text-primary"
                        }`}
                      >
                        {g.status === "confirmed" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        )}
                        {g.status}
                      </span>
                    </td>

                    {/* Last Reply */}
                    <td className="py-4 px-4 whitespace-nowrap" onClick={() => setSelectedPartyId(g.id)}>
                      <div className="flex flex-col">
                        <span className="font-body-sm text-[13px] text-on-surface">
                          {g.lastReply}
                        </span>
                        <span className="font-label-sm text-[11px] text-outline">
                          {g.replyChannel}
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 pr-space-lg pl-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <div className="inline-flex items-center gap-1">
                        <button
                          className="p-2 rounded-lg text-outline hover:text-primary hover:bg-surface-container-low transition-colors"
                          onClick={() => handleCopyLink(g.inviteCode, g.familyName)}
                          title="Copy Unique Invitation Link"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">link</span>
                        </button>
                        <button
                          className="px-3 py-1.5 rounded-lg text-label-sm text-[12px] text-primary hover:bg-surface-container-low font-semibold transition-colors border border-outline-variant/40"
                          onClick={() => setSelectedPartyId(g.id)}
                          type="button"
                        >
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

