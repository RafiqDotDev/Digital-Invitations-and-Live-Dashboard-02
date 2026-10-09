import { Link } from "react-router";
import { useWedding } from "../../context/wedding-context";

export function InvitationPreviewCard() {
  const { invitationConfig, showToast } = useWedding();

  const handleCopy = () => {
    navigator.clipboard.writeText("https://invite.example.com/zara-adam");
    showToast("Link Copied", "https://invite.example.com/zara-adam copied to clipboard");
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 space-y-space-md">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-md text-[22px] font-serif text-on-surface">Your invitation</h2>
        <span className="font-label-sm text-[11px] text-secondary flex items-center gap-1 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Published
        </span>
      </div>

      {/* Invitation Thumbnail Preview */}
      <div className="relative w-full h-44 rounded-lg bg-surface-container-low overflow-hidden flex items-center justify-center shadow-inner group border border-outline-variant/30">
        <img
          alt="Ivory wedding invitation suite"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={invitationConfig.coverPhoto}
        />
        <div className="absolute inset-0 bg-inverse-surface/20 backdrop-blur-[1px] flex items-center justify-center">
          <div className="bg-surface-container-lowest/90 px-4 py-2 rounded-lg shadow-md text-center border border-outline-variant/30">
            <span className="font-headline-sm text-[18px] font-serif text-primary italic font-semibold">
              {invitationConfig.displayTitle}
            </span>
            <span className="block font-label-sm text-[9px] text-outline tracking-widest uppercase mt-0.5 font-bold">
              Formal Digital Suite
            </span>
          </div>
        </div>
      </div>

      {/* URL string display */}
      <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface border border-outline-variant/40">
        <span className="font-code-sm text-[12px] truncate text-on-surface-variant font-mono">
          /invite (Live Guest View)
        </span>
        <div className="flex items-center gap-1">
          <Link
            className="text-primary hover:text-on-surface transition-colors p-1 rounded hover:bg-surface-container"
            to="/invite"
            target="_blank"
            rel="noreferrer"
            title="Open Live Guest Invitation"
          >
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </Link>
          <button
            className="text-outline hover:text-primary transition-colors p-1 rounded hover:bg-surface-container"
            onClick={handleCopy}
            title="Copy invitation link"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">content_copy</span>
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-space-sm pt-1">
        <Link
          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-[13px] font-medium shadow-sm hover:opacity-95 transition-opacity"
          to="/invitation"
        >
          <span className="material-symbols-outlined text-[16px]">edit</span>
          Edit invitation
        </Link>
        <button
          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container-low text-primary font-label-md text-[13px] font-medium hover:bg-surface-container transition-colors border border-outline-variant/40"
          onClick={handleCopy}
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">content_copy</span>
          Copy link
        </button>
      </div>

      {/* Metadata */}
      <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30">
        <span className="font-body-sm text-[12px] text-outline">Last edited today</span>
        <span className="font-code-sm text-[11px] text-outline">v2.4 live sync</span>
      </div>
    </div>
  );
}

