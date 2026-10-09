import { useWedding } from "../../context/wedding-context";

export function ToastNotification() {
  const { toast, hideToast } = useWedding();

  if (!toast.open) return null;

  return (
    <aside aria-label="Notifications" className="fixed bottom-6 right-6 z-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_16px_36px_-4px_rgba(43,43,43,0.12),0_4px_12px_-2px_rgba(184,151,90,0.12)] border border-outline-variant/60 flex items-center gap-space-md min-w-[320px]">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-25"></span>
          <span className="material-symbols-outlined text-[20px] text-secondary">how_to_reg</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-label-sm text-[11px] text-secondary font-semibold uppercase tracking-wider">
            {toast.title}
          </p>
          <p className="font-label-md text-[13px] text-on-surface font-medium truncate">
            {toast.message}
          </p>
          <p className="font-code-sm text-[11px] text-outline">{toast.time}</p>
        </div>
        <button
          aria-label="Close notification"
          className="text-outline hover:text-on-surface p-1 rounded transition-colors shrink-0"
          onClick={hideToast}
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </aside>
  );
}

