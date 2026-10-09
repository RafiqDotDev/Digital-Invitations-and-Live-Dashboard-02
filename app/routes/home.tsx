import { useState } from "react";
import type { Route } from "./+types/home";
import { AppShell } from "../components/layout/app-shell";
import { useWedding } from "../context/wedding-context";
import { KpiStatCards } from "../components/overview/kpi-stat-cards";
import { CelebrationTimeline } from "../components/overview/celebration-timeline";
import { DietarySummary } from "../components/overview/dietary-summary";
import { LiveActivityFeed } from "../components/overview/live-activity-feed";
import { CountdownCard } from "../components/overview/countdown-card";
import { SeatingReadinessCard } from "../components/overview/seating-readiness-card";
import { DirectorLogCard } from "../components/overview/director-log-card";
import { CheckinTerminalCard } from "../components/overview/checkin-terminal-card";
import { ArrivalsConcierge } from "../components/overview/arrivals-concierge";
import { SideDistributionCard } from "../components/overview/side-distribution-card";
import { InvitationPreviewCard } from "../components/overview/invitation-preview-card";
import { AddGuestModal } from "../components/guests/add-guest-modal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Overview — Live Guest Luxury RSVP Operations" },
    { name: "description", content: "Real-time guest response tracking and event orchestration for Zara & Adam’s celebration." },
  ];
}

export default function Home() {
  const { overviewView, setOverviewView, exportCsv, showToast } = useWedding();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleShareInvite = () => {
    navigator.clipboard.writeText("https://liveguest.app/rsvp/zara-adam-2026");
    showToast("Invite Link Copied", "Digital invitation URL copied to clipboard");
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto p-space-lg lg:p-gutter-lg">
        <div className="flex flex-col w-full gap-space-lg">
          {/* Top Banner / Headline Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-xs">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/60 text-secondary font-label-sm text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Real-Time Syncing • Last RSVP 3m ago
                </span>
                <span className="text-outline font-label-sm text-[11px] hidden sm:inline">•</span>
                <span className="text-outline font-label-sm text-[11px] hidden sm:inline">
                  Portal Ref: #ZA-2026-DEC
                </span>

                {/* View Switcher Pills */}
                <div className="inline-flex items-center p-0.5 rounded-lg bg-surface-container-low border border-outline-variant/60 ml-0 sm:ml-2">
                  <button
                    type="button"
                    onClick={() => setOverviewView("executive")}
                    className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                      overviewView === "executive"
                        ? "bg-surface-container-lowest text-primary shadow-xs font-semibold"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Executive Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => setOverviewView("logistics")}
                    className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                      overviewView === "logistics"
                        ? "bg-surface-container-lowest text-primary shadow-xs font-semibold"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Logistics &amp; Operations
                  </button>
                </div>
              </div>

              <h1 className="font-headline-xl text-[36px] font-serif text-on-surface tracking-tight font-medium">
                Wedding RSVP Overview
              </h1>
              <p className="font-body-md text-[14px] text-on-surface-variant max-w-2xl">
                Real-time guest response tracking and event orchestration for Zara &amp; Adam’s celebration on Saturday, 12 December 2026.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-[13px] font-medium shadow-sm border border-outline-variant/60 hover:bg-surface-container-low transition-all"
                onClick={() => setIsAddModalOpen(true)}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                <span>+ Add Guest Manually</span>
              </button>
              <button
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface-variant font-label-md text-[13px] font-medium shadow-sm border border-outline-variant/60 hover:bg-surface-container-low hover:text-on-surface transition-all"
                onClick={exportCsv}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Export CSV</span>
              </button>
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-[13px] font-medium shadow-sm hover:opacity-95 transition-all"
                onClick={handleShareInvite}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Share Digital Invite</span>
              </button>
            </div>
          </div>

          {/* Key Metrics Row (4 Bento Stat Cards) */}
          <KpiStatCards />

          {/* Main Body Grid: 2 Columns (65% / 35%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {overviewView === "executive" ? (
              <>
                {/* LEFT COLUMN: Executive View */}
                <div className="lg:col-span-8 flex flex-col gap-space-lg">
                  <CelebrationTimeline />
                  <DietarySummary />
                  <LiveActivityFeed />
                </div>

                {/* RIGHT COLUMN: Executive View */}
                <div className="lg:col-span-4 flex flex-col gap-space-lg">
                  <CountdownCard />
                  <SeatingReadinessCard />
                  <DirectorLogCard />
                  <CheckinTerminalCard />
                </div>
              </>
            ) : (
              <>
                {/* LEFT COLUMN: Logistics View */}
                <div className="lg:col-span-8 flex flex-col gap-space-lg">
                  <CelebrationTimeline />
                  <ArrivalsConcierge />
                  <SideDistributionCard />
                </div>

                {/* RIGHT COLUMN: Logistics View */}
                <div className="lg:col-span-4 flex flex-col gap-space-lg">
                  <DietarySummary />
                  <InvitationPreviewCard />
                  <SeatingReadinessCard />
                  <DirectorLogCard />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <AddGuestModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </AppShell>
  );
}
