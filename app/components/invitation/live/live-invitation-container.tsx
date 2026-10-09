import { useState } from "react";
import { useNavigate } from "react-router";
import { TapToOpenScreen } from "./tap-to-open-screen";
import { CoverPageScreen } from "./cover-page-screen";
import { CelebrationCarousel } from "./celebration-carousel";

export type LiveStage = "tap_to_open" | "cover" | "celebration";

interface LiveInvitationContainerProps {
  guestFamilyName?: string;
  initialStage?: LiveStage;
  initialTab?: "ceremony" | "dinner" | "reception";
  showStageControls?: boolean;
  onNotification?: (msg: string) => void;
}

export function LiveInvitationContainer({
  guestFamilyName = "Morgan Family",
  initialStage = "tap_to_open",
  initialTab = "ceremony",
  showStageControls = false,
  onNotification,
}: LiveInvitationContainerProps) {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState<LiveStage>(initialStage);
  const [activeCelebrationTab, setActiveCelebrationTab] = useState<"ceremony" | "dinner" | "reception">(initialTab);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setIsAudioPlaying(true);
    setCurrentStage("cover");
    if (onNotification) {
      onNotification("Invitation opened — Audio ambiance playing");
    }
  };

  const handleScrollToCelebration = () => {
    setCurrentStage("celebration");
  };

  const handleRsvp = () => {
    navigate("/rsvp");
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-[#FAF6EE] select-none">
      {/* Optional Top Stage Navigator (Enabled in Designer Studio Preview) */}
      {showStageControls && (
        <div className="w-full bg-white/90 backdrop-blur-xs px-3 py-1.5 border-b border-[#EADFC8] flex items-center justify-between text-[11px] font-medium z-30 shrink-0">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setCurrentStage("tap_to_open")}
              type="button"
              className={`px-2 py-0.5 rounded ${
                currentStage === "tap_to_open"
                  ? "bg-[#B8975A] text-white font-semibold"
                  : "text-[#7A7468] hover:bg-[#FAF6EE]"
              }`}
            >
              1. Tap open
            </button>
            <button
              onClick={() => setCurrentStage("cover")}
              type="button"
              className={`px-2 py-0.5 rounded ${
                currentStage === "cover"
                  ? "bg-[#B8975A] text-white font-semibold"
                  : "text-[#7A7468] hover:bg-[#FAF6EE]"
              }`}
            >
              2. Cover
            </button>
            <button
              onClick={() => {
                setCurrentStage("celebration");
                setActiveCelebrationTab("ceremony");
              }}
              type="button"
              className={`px-2 py-0.5 rounded ${
                currentStage === "celebration" && activeCelebrationTab === "ceremony"
                  ? "bg-[#B8975A] text-white font-semibold"
                  : "text-[#7A7468] hover:bg-[#FAF6EE]"
              }`}
            >
              3. Ceremony
            </button>
            <button
              onClick={() => {
                setCurrentStage("celebration");
                setActiveCelebrationTab("dinner");
              }}
              type="button"
              className={`px-2 py-0.5 rounded ${
                currentStage === "celebration" && activeCelebrationTab === "dinner"
                  ? "bg-[#B8975A] text-white font-semibold"
                  : "text-[#7A7468] hover:bg-[#FAF6EE]"
              }`}
            >
              4. Dinner
            </button>
            <button
              onClick={() => {
                setCurrentStage("celebration");
                setActiveCelebrationTab("reception");
              }}
              type="button"
              className={`px-2 py-0.5 rounded ${
                currentStage === "celebration" && activeCelebrationTab === "reception"
                  ? "bg-[#B8975A] text-white font-semibold"
                  : "text-[#7A7468] hover:bg-[#FAF6EE]"
              }`}
            >
              5. Reception
            </button>
          </div>

          {/* Sound indicator toggle */}
          <button
            onClick={() => setIsAudioPlaying(!isAudioPlaying)}
            type="button"
            className="p-1 text-[#7A7468] hover:text-[#B8975A] shrink-0"
            title={isAudioPlaying ? "Mute audio" : "Play audio"}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isAudioPlaying ? "volume_up" : "volume_off"}
            </span>
          </button>
        </div>
      )}

      {/* Screen Content Render */}
      <div className="flex-1 w-full relative overflow-y-auto scrollbar-none">
        {currentStage === "tap_to_open" && (
          <TapToOpenScreen onOpen={handleOpenInvitation} />
        )}

        {currentStage === "cover" && (
          <CoverPageScreen onContinue={handleScrollToCelebration} />
        )}

        {currentStage === "celebration" && (
          <CelebrationCarousel
            guestFamilyName={guestFamilyName}
            onRsvp={handleRsvp}
            onNotification={onNotification}
            initialTab={activeCelebrationTab}
          />
        )}
      </div>
    </div>
  );
}

