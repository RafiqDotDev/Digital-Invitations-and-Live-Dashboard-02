import type { Route } from "./+types/invitation";
import { AppShell } from "../components/layout/app-shell";
import { InvitationEditor } from "../components/invitation/invitation-editor";
import { PhonePreview } from "../components/invitation/phone-preview";
import { useWedding } from "../context/wedding-context";
import { INITIAL_INVITATION_CONFIG } from "../data/mock-data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Invitation Suite Studio — Live Guest" },
    { name: "description", content: "Design and customize the digital luxury wedding invitation with live mobile preview." },
  ];
}

export default function Invitation() {
  const { updateInvitationConfig, showToast } = useWedding();

  const handleReset = () => {
    updateInvitationConfig(INITIAL_INVITATION_CONFIG);
    showToast("Reset to Default", "Invitation suite restored to default theme");
  };

  const handleShareQr = () => {
    navigator.clipboard.writeText("https://invite.example.com/zara-adam");
    showToast("QR Link Ready", "Invitation link and QR package copied to clipboard");
  };

  return (
    <AppShell>
      <div className="flex flex-col w-full pb-28">
        {/* Page Subheader & Action Strip */}
        <header className="px-gutter-lg pt-space-lg pb-space-md flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-primary font-bold">
                Invitation Designer &amp; Live Preview
              </span>
              <span className="text-outline-variant">•</span>
              <span className="font-label-sm text-[11px] text-outline">v2.4 Live Sync</span>
            </div>
            <h1 className="font-headline-xl text-[36px] font-serif text-on-surface font-medium">
              Digital Invitation Suite
            </h1>
            <p className="font-body-sm text-[13px] text-outline mt-0.5 flex items-center gap-1.5 flex-wrap">
              <span>Live Guest URL:</span>
              <a
                className="text-primary hover:underline font-label-md text-[13px] font-medium inline-flex items-center gap-1"
                href="/invite"
                rel="noreferrer"
                target="_blank"
              >
                /invite (Open Live Experience)
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
              <span className="text-outline-variant">•</span>
              <span>Last autosaved 2 mins ago</span>
            </p>
          </div>

          {/* Actions and Status */}
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="inline-flex items-center px-3 py-1 rounded-full font-label-sm text-[11px] bg-secondary-container text-on-secondary-container font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 animate-pulse" />
              Published &amp; Live
            </span>
            <button
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-primary shadow-xs border border-outline-variant/60 hover:bg-surface-container-low transition-colors font-medium text-[13px]"
              onClick={handleShareQr}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
              <span>Preview Link / QR</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface shadow-xs border border-outline-variant/60 hover:bg-surface-container-low transition-colors font-medium text-[13px]"
              onClick={handleReset}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              <span>Reset to Default</span>
            </button>
          </div>
        </header>

        {/* Main 2-Column Suite Area */}
        <div className="px-gutter-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg mt-space-sm items-start">
          {/* LEFT COLUMN: Editing Canvas (7 cols on 12-col desktop ~58%) */}
          <div className="lg:col-span-7">
            <InvitationEditor />
          </div>

          {/* RIGHT COLUMN: Sticky Real-Time Phone Preview (5 cols on desktop ~42%) */}
          <div className="lg:col-span-5">
            <PhonePreview />
          </div>
        </div>
      </div>
    </AppShell>
  );
}

