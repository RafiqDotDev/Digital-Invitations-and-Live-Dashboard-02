import { useParams, Link } from "react-router";
import type { Route } from "./+types/invite";
import { LiveInvitationContainer } from "../components/invitation/live/live-invitation-container";
import { useWedding } from "../context/wedding-context";

export function meta({ params }: Route.MetaArgs) {
  const code = params?.code || "zara-adam";
  return [
    { title: "Wedding Invitation — Zara & Adam" },
    { name: "description", content: "You are cordially invited to celebrate the marriage of Zara & Adam." },
  ];
}

export default function Invite() {
  const { code } = useParams();
  const { guests } = useWedding();

  // Look up party by code or format nicely
  let familyName = "Morgan Family";
  if (code) {
    const matchedParty = guests.find(
      (g) => g.id === code || g.inviteCode.toLowerCase() === code.toLowerCase()
    );
    if (matchedParty) {
      familyName = matchedParty.familyName;
    } else {
      // Format kebab-case string into capitalized words (e.g., morgan-family -> Morgan Family)
      familyName = code
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    }
  }

  return (
    <div className="min-h-screen bg-[#F1EDE6] flex flex-col items-center justify-center p-0 sm:p-4 md:p-6 antialiased">
      {/* Discreet top bar for organizers/hosts */}
      <div className="w-full max-w-[420px] mb-2 px-3 flex items-center justify-between text-[11px] text-[#7A7468]">
        <Link
          to="/"
          className="hover:text-[#B8975A] flex items-center gap-1 font-medium transition-colors"
        >
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          <span>Hall Dashboard</span>
        </Link>
        <span className="font-mono text-[10px] text-outline">
          Link: invite.example.com/{code || "zara-adam"}
        </span>
      </div>

      {/* Luxury Mobile Container Frame */}
      <div className="w-full max-w-[420px] h-[100dvh] sm:h-[840px] sm:max-h-[92vh] bg-white sm:rounded-[36px] overflow-hidden shadow-2xl sm:border sm:border-[#EADFC8] relative flex flex-col">
        <LiveInvitationContainer
          guestFamilyName={familyName}
          initialStage="tap_to_open"
          showStageControls={false}
        />
      </div>
    </div>
  );
}

