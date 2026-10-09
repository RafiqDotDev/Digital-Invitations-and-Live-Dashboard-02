export type RSVPStatus = "confirmed" | "declined" | "awaiting";
export type GuestSide = "bride" | "groom";
export type WeddingEventId = "dinner" | "ceremony" | "reception";

export interface GuestMember {
  id: string;
  name: string;
  type: "adult" | "child";
  age?: number;
  dietary?: string;
  drinkPreference?: string;
  specialNeeds?: string;
  attending: boolean;
}

export interface GuestParty {
  id: string;
  familyName: string;
  leadContact: string;
  phone: string;
  email: string;
  side: GuestSide;
  invitedCount: number;
  confirmedCount: number;
  status: RSVPStatus;
  events: WeddingEventId[];
  tableAssignment?: string;
  dietaryNotes?: string;
  dietaryTags: string[];
  lastReply: string;
  replyChannel: string;
  inviteCode: string;
  arrivalDate?: string;
  arrivalTime?: string;
  arrivalFlight?: string;
  transportMode?: "flight" | "car" | "train";
  needsPickup?: boolean;
  needsHotelRoom?: boolean;
  roomBlockNotes?: string;
  driverAssigned?: string;
  notes?: string;
  members: GuestMember[];
  history: {
    title: string;
    description: string;
    timestamp: string;
    type: "confirmed" | "reminder" | "opened" | "sent";
  }[];
}

export interface ActivityFeedItem {
  id: string;
  initials: string;
  guestName: string;
  status: "confirmed" | "declined" | "updated" | "awaiting";
  statusText: string;
  detail: string;
  timeAgo: string;
  avatarBg?: string;
}

export interface CoordinatorNote {
  id: string;
  author: string;
  role: string;
  avatar: string;
  date: string;
  content: string;
}

export interface ThemeSwatch {
  id: string;
  name: string;
  subtitle: string;
  primaryColor: string;
  secondaryColor: string;
  accentHex: string;
}

export interface ItineraryItem {
  id: string;
  title: string;
  dateStr: string;
  timeStr: string;
  locationName: string;
  mapQuery: string;
  dressCode: string;
}

export interface InvitationConfig {
  brideName: string;
  groomName: string;
  displayTitle: string;
  weddingDate: string;
  formalTagline: string;
  ourStory: string;
  activeSwatchId: string;
  customAccentColor: string;
  coverPhoto: string;
  galleryPhotos: string[];
  musicTrackTitle: string;
  musicTrackMeta: string;
  autoplayMuted: boolean;
  musicVolume: number;
  itinerary: ItineraryItem[];
}
