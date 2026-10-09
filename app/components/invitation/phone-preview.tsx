import { useState } from "react";
import { Link } from "react-router";
import { useWedding } from "../../context/wedding-context";
import { LiveInvitationContainer } from "./live/live-invitation-container";

export function PhonePreview() {
  const { showToast } = useWedding();
  const [deviceView, setDeviceView] = useState<"iphone" | "mobile_web">("iphone");

  return (
    <div className="sticky top-[92px] flex flex-col items-center">
      {/* Device View Controls */}
      <div className="w-full max-w-[380px] mb-space-sm flex items-center justify-between">
        <div className="inline-flex p-1 rounded-full bg-surface-container-low border border-outline-variant/40">
          <button
            className={`px-3 py-1 rounded-full font-label-sm text-[11px] font-semibold transition-all cursor-pointer ${
              deviceView === "iphone"
                ? "bg-surface-container-lowest text-primary shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={() => setDeviceView("iphone")}
            type="button"
          >
            iPhone 15 Pro
          </button>
          <button
            className={`px-3 py-1 rounded-full font-label-sm text-[11px] font-semibold transition-all cursor-pointer ${
              deviceView === "mobile_web"
                ? "bg-surface-container-lowest text-primary shadow-xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={() => setDeviceView("mobile_web")}
            type="button"
          >
            Mobile Web
          </button>
        </div>

        <Link
          className="inline-flex items-center gap-1 font-label-sm text-[11px] text-primary hover:underline font-semibold"
          to="/invite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          Open Live Guest Link
        </Link>
      </div>

      {/* Smartphone Hardware Frame */}
      <div
        className={`relative w-full max-w-[380px] h-[750px] bg-inverse-surface rounded-[48px] p-3 shadow-2xl ring-1 ring-primary-container/20 transition-all ${
          deviceView === "mobile_web" ? "rounded-2xl p-2" : ""
        }`}
      >
        {/* Screen Outer Rim */}
        <div className="relative w-full h-full bg-[#FAF6EE] rounded-[40px] overflow-hidden flex flex-col border border-outline-variant/30">
          {/* Dynamic Island / Top Speaker */}
          {deviceView === "iphone" && (
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-inverse-surface rounded-full z-40 flex items-center justify-end pr-2 shadow-inner pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111] ring-1 ring-white/10" />
            </div>
          )}

          {/* Inner Interactive Multi-Screen Live Invitation Flow */}
          <div className="w-full h-full flex flex-col pt-3">
            <LiveInvitationContainer
              guestFamilyName="Dear Morgan Family"
              initialStage="tap_to_open"
              showStageControls={true}
              onNotification={(msg) => showToast("Live Guest Preview", msg)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
