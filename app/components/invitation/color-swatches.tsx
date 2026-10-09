import { useWedding } from "../../context/wedding-context";
import { THEME_SWATCHES } from "../../data/mock-data";

export function ColorSwatches() {
  const { invitationConfig, updateInvitationConfig } = useWedding();

  const handleSelectSwatch = (id: string, accentHex: string) => {
    updateInvitationConfig({
      activeSwatchId: id,
      customAccentColor: accentHex,
    });
  };

  const handleHexChange = (hex: string) => {
    updateInvitationConfig({ customAccentColor: hex });
  };

  return (
    <div className="space-y-space-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        {THEME_SWATCHES.map((swatch) => {
          const isActive = invitationConfig.activeSwatchId === swatch.id;
          return (
            <div
              key={swatch.id}
              onClick={() => handleSelectSwatch(swatch.id, swatch.accentHex)}
              className={`flex items-center justify-between p-space-md rounded-xl cursor-pointer transition-all border ${
                isActive
                  ? "bg-surface-container-low shadow-xs border-primary/40 ring-1 ring-primary/30"
                  : "bg-surface-container-lowest hover:bg-surface-container-low border-outline-variant/60"
              }`}
            >
              <div className="flex items-center gap-space-sm">
                <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-inner border border-outline-variant/40">
                  <div
                    className="w-4 h-8 absolute left-0"
                    style={{ backgroundColor: swatch.primaryColor }}
                  />
                  <div
                    className="w-4 h-8 absolute right-0"
                    style={{ backgroundColor: swatch.secondaryColor }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-[13px] text-on-surface font-semibold">
                    {swatch.name}
                  </span>
                  <span className="font-label-sm text-[11px] text-outline">
                    {swatch.subtitle}
                  </span>
                </div>
              </div>

              {isActive ? (
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check_circle
                </span>
              ) : (
                <span className="w-4 h-4 rounded-full bg-surface-container-high border border-outline-variant/40" />
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-space-md border-t border-outline-variant/40 flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span
            className="w-6 h-6 rounded-full shadow-xs inline-block border border-outline-variant/40"
            style={{ backgroundColor: invitationConfig.customAccentColor }}
          />
          <span className="font-label-md text-[13px] text-on-surface font-medium">
            Custom Accent Color
          </span>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/40">
          <span className="font-code-sm text-[11px] text-outline">HEX</span>
          <input
            className="w-20 bg-transparent text-primary font-code-sm text-[12px] uppercase font-semibold focus:outline-none"
            type="text"
            value={invitationConfig.customAccentColor}
            onChange={(e) => handleHexChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

