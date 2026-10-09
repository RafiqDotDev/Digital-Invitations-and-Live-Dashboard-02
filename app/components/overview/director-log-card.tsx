import { useState } from "react";
import { useWedding } from "../../context/wedding-context";

export function DirectorLogCard() {
  const { coordinatorNotes, addCoordinatorNote } = useWedding();
  const [isAdding, setIsAdding] = useState(false);
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    addCoordinatorNote(noteText.trim());
    setNoteText("");
    setIsAdding(false);
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">edit_note</span>
          <h3 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
            Director&apos;s Log
          </h3>
        </div>
        <span className="font-label-sm text-[11px] text-outline font-medium">Internal Staff Only</span>
      </div>

      <div className="flex flex-col gap-2.5 max-h-72 overflow-y-auto">
        {coordinatorNotes.map((note) => (
          <div
            key={note.id}
            className="bg-surface-container-low/70 rounded-lg p-3.5 flex flex-col gap-2 border border-outline-variant/30"
          >
            <div className="flex items-center gap-2">
              <img
                alt={note.author}
                className="w-6 h-6 rounded-full object-cover"
                src={note.avatar}
              />
              <span className="font-label-sm text-[12px] font-semibold text-on-surface">
                {note.author}
              </span>
              <span className="font-code-sm text-[11px] text-outline ml-auto">{note.date}</span>
            </div>
            <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
              {note.content}
            </p>
          </div>
        ))}
      </div>

      {isAdding ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 pt-1 animate-in fade-in">
          <textarea
            autoFocus
            className="w-full p-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-[13px] focus:outline-none focus:ring-2 focus:ring-primary-container"
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Type coordinator note..."
            rows={2}
            value={noteText}
          />
          <div className="flex items-center justify-end gap-2">
            <button
              className="px-3 py-1.5 rounded-lg text-outline hover:text-on-surface text-[12px] font-medium"
              onClick={() => setIsAdding(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary text-[12px] font-medium hover:bg-primary transition-colors"
              type="submit"
            >
              Save Note
            </button>
          </div>
        </form>
      ) : (
        <button
          className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-[13px] text-center font-medium transition-colors"
          onClick={() => setIsAdding(true)}
          type="button"
        >
          + Add Coordinator Note
        </button>
      )}
    </div>
  );
}

