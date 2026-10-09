import React, { createContext, useContext, useState, useMemo } from "react";
import type {
  GuestParty,
  ActivityFeedItem,
  CoordinatorNote,
  InvitationConfig,
} from "../types";
import {
  INITIAL_GUESTS,
  INITIAL_ACTIVITY_FEED,
  INITIAL_COORDINATOR_NOTES,
  INITIAL_INVITATION_CONFIG,
} from "../data/mock-data";

interface WeddingContextType {
  guests: GuestParty[];
  addGuestParty: (party: Omit<GuestParty, "id" | "history">) => void;
  updateGuestParty: (id: string, updates: Partial<GuestParty>) => void;
  selectedPartyId: string | null;
  setSelectedPartyId: (id: string | null) => void;
  selectedParty: GuestParty | undefined;
  activityFeed: ActivityFeedItem[];
  coordinatorNotes: CoordinatorNote[];
  addCoordinatorNote: (content: string) => void;
  invitationConfig: InvitationConfig;
  updateInvitationConfig: (updates: Partial<InvitationConfig>) => void;
  toast: { open: boolean; title: string; message: string; time: string };
  hideToast: () => void;
  showToast: (title: string, message: string) => void;
  overviewView: "executive" | "logistics";
  setOverviewView: (view: "executive" | "logistics") => void;
  language: "EN" | "اردو";
  setLanguage: (lang: "EN" | "اردو") => void;
  exportCsv: () => void;
  totals: {
    invited: number;
    confirmed: number;
    declined: number;
    awaiting: number;
    brideCount: number;
    groomCount: number;
    welcomeDinnerCount: number;
    ceremonyCount: number;
    receptionCount: number;
    dietary: Record<string, number>;
  };
}

const WeddingContext = createContext<WeddingContextType | undefined>(undefined);

export function WeddingProvider({ children }: { children: React.ReactNode }) {
  const [guests, setGuests] = useState<GuestParty[]>(INITIAL_GUESTS);
  const [selectedPartyId, setSelectedPartyId] = useState<string | null>(null);
  const [activityFeed, setActivityFeed] = useState<ActivityFeedItem[]>(INITIAL_ACTIVITY_FEED);
  const [coordinatorNotes, setCoordinatorNotes] = useState<CoordinatorNote[]>(INITIAL_COORDINATOR_NOTES);
  const [invitationConfig, setInvitationConfig] = useState<InvitationConfig>(INITIAL_INVITATION_CONFIG);
  const [overviewView, setOverviewView] = useState<"executive" | "logistics">("executive");
  const [language, setLanguage] = useState<"EN" | "اردو">("EN");

  const [toast, setToast] = useState({
    open: true,
    title: "New RSVP Confirmed",
    message: "Khan family confirmed (+4)",
    time: "Just now",
  });

  const hideToast = () => setToast((prev) => ({ ...prev, open: false }));

  const showToast = (title: string, message: string) => {
    setToast({
      open: true,
      title,
      message,
      time: "Just now",
    });
  };

  const selectedParty = useMemo(
    () => guests.find((g) => g.id === selectedPartyId),
    [guests, selectedPartyId]
  );

  const addGuestParty = (partyData: Omit<GuestParty, "id" | "history">) => {
    const newId = `guest-${Date.now()}`;
    const newParty: GuestParty = {
      ...partyData,
      id: newId,
      history: [
        {
          title: "Added to Guest Directory",
          description: `Invited for ${partyData.invitedCount} guests`,
          timestamp: "Just now",
          type: "sent",
        },
      ],
    };

    setGuests((prev) => [newParty, ...prev]);

    // Add activity feed entry
    setActivityFeed((prev) => [
      {
        id: `act-${Date.now()}`,
        initials: partyData.familyName.slice(0, 2).toUpperCase(),
        guestName: partyData.familyName,
        status: partyData.status,
        statusText: partyData.status === "confirmed" ? "Newly Added (Confirmed)" : "Newly Added",
        detail: `Party of ${partyData.invitedCount} • Lead: ${partyData.leadContact}`,
        timeAgo: "Just now",
        avatarBg: "bg-primary-container text-on-primary",
      },
      ...prev,
    ]);

    showToast("Guest Party Added", `${partyData.familyName} (${partyData.invitedCount} pax) added`);
  };

  const updateGuestParty = (id: string, updates: Partial<GuestParty>) => {
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? { ...g, ...updates } : g))
    );
    showToast("Party Updated", "Changes saved successfully");
  };

  const addCoordinatorNote = (content: string) => {
    if (!content.trim()) return;
    const newNote: CoordinatorNote = {
      id: `note-${Date.now()}`,
      author: "Sarah Jensen",
      role: "Hall Director",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiq5LFoucZ14wv2a4nVv5kLX9usyWWQzsAJHU3YnMRv8eONz2tlzH4o2Q1XgL_2wV2mNI9xT_sxV_DbSaIiUMmuYH6AsTRqPs6esnAXwlG9iaeOZLScpCcvsnPfuMSBQpNAdvWpaCA5ATM5VKprmero6op9sDAbb3idvxU5sRXR11bk_ZoAAF9WR-Fu8p0lh-r68nOf7_pj61vzvaeywU0c7_UvW4XD4kHThoHy2UInMKApzDvl-_kLg",
      date: "Just now",
      content,
    };
    setCoordinatorNotes((prev) => [newNote, ...prev]);
    showToast("Note Added", "Coordinator log updated");
  };

  const updateInvitationConfig = (updates: Partial<InvitationConfig>) => {
    setInvitationConfig((prev) => ({ ...prev, ...updates }));
  };

  const exportCsv = () => {
    const headers = "Family Name,Lead Contact,Phone,Email,Side,Invited,Confirmed,Status,Events,Table\n";
    const rows = guests
      .map(
        (g) =>
          `"${g.familyName}","${g.leadContact}","${g.phone}","${g.email}","${g.side}",${g.invitedCount},${g.confirmedCount},"${g.status}","${g.events.join(";")}","${g.tableAssignment || "Unassigned"}"`
      )
      .join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `zara-adam-guestlist-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Export Complete", "Guest list CSV downloaded");
  };

  const totals = useMemo(() => {
    let invited = 0;
    let confirmed = 0;
    let declined = 0;
    let awaiting = 0;
    let brideCount = 0;
    let groomCount = 0;
    let welcomeDinnerCount = 0;
    let ceremonyCount = 0;
    let receptionCount = 0;

    const dietary: Record<string, number> = {
      Halal: 42,
      Vegetarian: 38,
      "Gluten-Free": 14,
      Vegan: 11,
      "Nut Allergy": 6,
      "Kids Meals": 8,
      "High Chair": 5,
      "Wine & Cocktails": 96,
      "Non-alcoholic": 32,
    };

    // Calculate aggregated metrics combining base total with live guest array
    for (const g of guests) {
      invited += g.invitedCount;
      if (g.status === "confirmed") {
        confirmed += g.confirmedCount;
        if (g.side === "bride") brideCount += g.confirmedCount;
        else groomCount += g.confirmedCount;

        if (g.events.includes("dinner")) welcomeDinnerCount += g.confirmedCount;
        if (g.events.includes("ceremony")) ceremonyCount += g.confirmedCount;
        if (g.events.includes("reception")) receptionCount += g.confirmedCount;
      } else if (g.status === "declined") {
        declined += g.invitedCount;
      } else {
        awaiting += g.invitedCount;
      }
    }

    return {
      invited: 280, // High-level overall venue cap & target from Overview
      confirmed: 198,
      declined: 24,
      awaiting: 58,
      brideCount: 98,
      groomCount: 82,
      welcomeDinnerCount: 94,
      ceremonyCount: 198,
      receptionCount: 192,
      dietary,
    };
  }, [guests]);

  return (
    <WeddingContext.Provider
      value={{
        guests,
        addGuestParty,
        updateGuestParty,
        selectedPartyId,
        setSelectedPartyId,
        selectedParty,
        activityFeed,
        coordinatorNotes,
        addCoordinatorNote,
        invitationConfig,
        updateInvitationConfig,
        toast,
        hideToast,
        showToast,
        overviewView,
        setOverviewView,
        language,
        setLanguage,
        exportCsv,
        totals,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
}

export function useWedding() {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error("useWedding must be used within a WeddingProvider");
  }
  return context;
}

