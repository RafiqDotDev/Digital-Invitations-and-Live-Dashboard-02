interface CelebrationMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  venueName: string;
  address: string;
  mapQuery: string;
}

export function CelebrationMapModal({
  isOpen,
  onClose,
  eventTitle,
  venueName,
  address,
  mapQuery,
}: CelebrationMapModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2B2B]/40 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-[#EADFC8] flex flex-col gap-4 animate-in zoom-in-95">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#FAF6EE] text-[#B8975A] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
            </span>
            <div>
              <h3 className="font-headline-sm text-[16px] font-serif font-semibold text-[#2B2B2B]">
                {eventTitle}
              </h3>
              <p className="font-label-sm text-[11px] text-[#7A7468]">{venueName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="text-[#7A7468] hover:text-[#2B2B2B] p-1 rounded"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Map Placeholder Graphic */}
        <div className="w-full h-36 rounded-xl bg-[#F1EDE6] border border-[#EADFC8] overflow-hidden relative flex flex-col items-center justify-center text-center p-3">
          <div className="w-10 h-10 rounded-full bg-white shadow-md text-[#B8975A] flex items-center justify-center mb-1 animate-bounce">
            <span className="material-symbols-outlined text-[20px]">pin_drop</span>
          </div>
          <span className="font-label-md text-[13px] font-semibold text-[#2B2B2B]">
            {venueName}
          </span>
          <span className="font-body-sm text-[11px] text-[#7A7468] line-clamp-1">
            {address}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-lg bg-[#B8975A] text-white font-label-md text-[13px] font-medium text-center shadow-xs hover:bg-[#A38347] transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Open in Google Maps</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
          <button
            onClick={onClose}
            type="button"
            className="w-full py-2 rounded-lg border border-[#EADFC8] text-[#7A7468] font-label-md text-[12px] font-medium hover:bg-[#FAF6EE] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

