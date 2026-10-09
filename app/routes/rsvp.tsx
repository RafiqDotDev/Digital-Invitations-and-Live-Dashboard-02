import { useState } from "react";
import { Link, useNavigate } from "react-router";
import type { Route } from "./+types/rsvp";
import { useWedding } from "../context/wedding-context";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Travel & Stay RSVP — Zara & Adam Wedding" },
    { name: "description", content: "Coordinate your arrival date, flight transfers, and suite reservations for Zara & Adam’s wedding." },
  ];
}

export default function Rsvp() {
  const navigate = useNavigate();
  const { showToast } = useWedding();

  const [selectedDate, setSelectedDate] = useState<"10" | "11" | "12">("11");
  const [selectedTime, setSelectedTime] = useState<"morning" | "afternoon" | "evening">("afternoon");
  const [selectedTransport, setSelectedTransport] = useState<"car" | "flight" | "train">("flight");
  const [needPickup, setNeedPickup] = useState(true);
  const [needRoom, setNeedRoom] = useState(true);
  const [submittingState, setSubmittingState] = useState<"idle" | "loading" | "confirmed">("idle");

  const handleContinue = () => {
    setSubmittingState("loading");
    setTimeout(() => {
      setSubmittingState("confirmed");
      showToast(
        "Travel Preferences Saved",
        "Arrival details confirmed! Chauffeur dispatch & suite block updated."
      );
    }, 700);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen">
      {/* Top Mobile/Desktop Floating Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/40 shadow-xs">
        <div className="h-16 max-w-xl mx-auto px-gutter flex items-center justify-between">
          <button
            aria-label="Go Back"
            className="w-11 h-11 -ml-space-xs flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors"
            onClick={() => navigate(-1)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>

          <div className="flex flex-col items-center justify-center text-center px-space-xs">
            <span className="font-label-sm text-[11px] text-primary tracking-widest uppercase font-semibold">
              Zara &amp; Adam
            </span>
            <h1 className="font-headline-sm text-[17px] font-serif text-on-surface leading-tight tracking-normal font-semibold">
              Travel &amp; Stay
            </h1>
          </div>

          <Link
            to="/"
            title="Return to Hall Dashboard"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xs hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">dashboard</span>
          </Link>
        </div>
      </header>

      {/* Main Form Body */}
      <main className="flex flex-col relative w-full pt-20 pb-16 bg-surface min-h-screen max-w-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col w-full relative overflow-hidden pb-space-xl">
          {/* Subtle sage botanical accent overlay top right */}
          <div className="absolute -top-6 -right-6 w-36 h-36 pointer-events-none opacity-25 select-none text-secondary">
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 160 160">
              <path d="M140 10C120 40 85 55 60 80C40 100 25 130 20 155" strokeLinecap="round" strokeWidth="1.2" />
              <path d="M120 30C125 18 135 15 142 22C143 32 135 40 125 36" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" strokeWidth="1" />
              <path d="M98 48C108 40 118 43 120 52C118 62 106 64 99 56" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" strokeWidth="1" />
              <path d="M80 68C88 56 100 58 102 68C98 78 86 78 80 72" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" strokeWidth="1" />
              <path d="M60 88C64 74 76 72 80 82C78 92 67 96 61 90" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" strokeWidth="1" />
              <path d="M42 110C42 96 54 94 57 104C55 114 45 118 40 112" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" strokeWidth="1" />
              <circle cx="138" cy="18" fill="currentColor" r="1.5" />
              <circle cx="118" cy="46" fill="currentColor" r="1.5" />
              <circle cx="98" cy="62" fill="currentColor" r="1.5" />
            </svg>
          </div>

          {/* Progress Bar (Step 3 of 4 = 75%) */}
          <div className="pt-space-sm mb-space-md">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-primary font-bold">
                Step 3 of 4
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant font-medium">
                Arrival &amp; Logistics
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden flex border border-outline-variant/30">
              <div className="w-3/4 h-full bg-primary-container rounded-full transition-all duration-500 ease-out" />
            </div>
          </div>

          {/* Heading Block */}
          <div className="mb-space-lg">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container mb-2.5 border border-secondary-fixed-dim">
              <span className="material-symbols-outlined text-[14px]">flight_land</span>
              <span className="font-label-sm text-[11px] uppercase tracking-wider font-semibold">
                Weekend Itinerary
              </span>
            </div>
            <h2 className="font-headline-lg text-[28px] font-serif text-on-surface tracking-tight mb-2 font-medium">
              When are you arriving?
            </h2>
            <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed">
              Help us coordinate airport transfers, welcome hospitality, and hotel check-in arrangements for Zara &amp; Adam&apos;s celebration.
            </p>
          </div>

          {/* Section 1: Arrival Date */}
          <div className="mb-space-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                Arrival Date
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant">Dec 2026</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {/* Thu 10 Dec */}
              <button
                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 text-left active:scale-[0.98] ${
                  selectedDate === "10"
                    ? "bg-primary text-on-primary shadow-md border-primary relative"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedDate("10")}
                type="button"
              >
                {selectedDate === "10" && (
                  <span className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 rounded-full bg-primary-fixed text-on-primary-fixed">
                    <span className="material-symbols-outlined text-[11px] font-bold">check</span>
                  </span>
                )}
                <span
                  className={`font-label-sm text-[11px] uppercase font-medium ${
                    selectedDate === "10" ? "text-primary-fixed font-semibold" : "text-on-surface-variant"
                  }`}
                >
                  Thu
                </span>
                <span
                  className={`font-metric-number text-[26px] font-serif leading-tight my-0.5 ${
                    selectedDate === "10" ? "text-on-primary" : "text-on-surface"
                  }`}
                >
                  10
                </span>
                <span
                  className={`font-label-sm text-[10px] ${
                    selectedDate === "10" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  Early Welcome
                </span>
              </button>

              {/* Fri 11 Dec */}
              <button
                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 text-left active:scale-[0.98] ${
                  selectedDate === "11"
                    ? "bg-primary text-on-primary shadow-md border-primary relative"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedDate("11")}
                type="button"
              >
                {selectedDate === "11" && (
                  <span className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 rounded-full bg-primary-fixed text-on-primary-fixed">
                    <span className="material-symbols-outlined text-[11px] font-bold">check</span>
                  </span>
                )}
                <span
                  className={`font-label-sm text-[11px] uppercase font-medium ${
                    selectedDate === "11" ? "text-primary-fixed font-semibold" : "text-on-surface-variant"
                  }`}
                >
                  Fri
                </span>
                <span
                  className={`font-metric-number text-[26px] font-serif leading-tight my-0.5 ${
                    selectedDate === "11" ? "text-on-primary" : "text-on-surface"
                  }`}
                >
                  11
                </span>
                <span
                  className={`font-label-sm text-[10px] ${
                    selectedDate === "11" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  Welcome Soirée
                </span>
              </button>

              {/* Sat 12 Dec */}
              <button
                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 text-left active:scale-[0.98] ${
                  selectedDate === "12"
                    ? "bg-primary text-on-primary shadow-md border-primary relative"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedDate("12")}
                type="button"
              >
                {selectedDate === "12" && (
                  <span className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 rounded-full bg-primary-fixed text-on-primary-fixed">
                    <span className="material-symbols-outlined text-[11px] font-bold">check</span>
                  </span>
                )}
                <span
                  className={`font-label-sm text-[11px] uppercase font-medium ${
                    selectedDate === "12" ? "text-primary-fixed font-semibold" : "text-on-surface-variant"
                  }`}
                >
                  Sat
                </span>
                <span
                  className={`font-metric-number text-[26px] font-serif leading-tight my-0.5 ${
                    selectedDate === "12" ? "text-on-primary" : "text-on-surface"
                  }`}
                >
                  12
                </span>
                <span
                  className={`font-label-sm text-[10px] ${
                    selectedDate === "12" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  Wedding Day
                </span>
              </button>
            </div>
          </div>

          {/* Section 2: Estimated Arrival Time */}
          <div className="mb-space-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">schedule</span>
                Estimated Arrival Time
              </span>
              <span className="font-label-sm text-[11px] text-outline">GMT (London)</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {/* Morning */}
              <button
                className={`flex flex-col items-center py-3 px-2 rounded-xl border transition-all duration-200 text-center active:scale-[0.98] ${
                  selectedTime === "morning"
                    ? "bg-primary text-on-primary shadow-md border-primary"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedTime("morning")}
                type="button"
              >
                <span
                  className={`material-symbols-outlined mb-1 text-[20px] ${
                    selectedTime === "morning" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  wb_twilight
                </span>
                <span
                  className={`font-label-md text-[13px] font-medium ${
                    selectedTime === "morning" ? "text-on-primary font-semibold" : "text-on-surface"
                  }`}
                >
                  Morning
                </span>
                <span
                  className={`font-code-sm text-[11px] mt-0.5 scale-90 ${
                    selectedTime === "morning" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  Before 12 PM
                </span>
              </button>

              {/* Afternoon */}
              <button
                className={`flex flex-col items-center py-3 px-2 rounded-xl border transition-all duration-200 text-center active:scale-[0.98] ${
                  selectedTime === "afternoon"
                    ? "bg-primary text-on-primary shadow-md border-primary"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedTime("afternoon")}
                type="button"
              >
                <span
                  className={`material-symbols-outlined mb-1 text-[20px] ${
                    selectedTime === "afternoon" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  wb_sunny
                </span>
                <span
                  className={`font-label-md text-[13px] font-medium ${
                    selectedTime === "afternoon" ? "text-on-primary font-semibold" : "text-on-surface"
                  }`}
                >
                  Afternoon
                </span>
                <span
                  className={`font-code-sm text-[11px] mt-0.5 scale-90 ${
                    selectedTime === "afternoon" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  12 - 5 PM
                </span>
              </button>

              {/* Evening */}
              <button
                className={`flex flex-col items-center py-3 px-2 rounded-xl border transition-all duration-200 text-center active:scale-[0.98] ${
                  selectedTime === "evening"
                    ? "bg-primary text-on-primary shadow-md border-primary"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedTime("evening")}
                type="button"
              >
                <span
                  className={`material-symbols-outlined mb-1 text-[20px] ${
                    selectedTime === "evening" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  dark_mode
                </span>
                <span
                  className={`font-label-md text-[13px] font-medium ${
                    selectedTime === "evening" ? "text-on-primary font-semibold" : "text-on-surface"
                  }`}
                >
                  Evening
                </span>
                <span
                  className={`font-code-sm text-[11px] mt-0.5 scale-90 ${
                    selectedTime === "evening" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  After 5 PM
                </span>
              </button>
            </div>
          </div>

          {/* Section 3: Mode of Transport */}
          <div className="mb-space-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">commute</span>
                How will you be traveling?
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-3">
              {/* Car */}
              <button
                className={`flex flex-col items-center p-3 rounded-xl border transition-all duration-200 text-center active:scale-[0.98] ${
                  selectedTransport === "car"
                    ? "bg-primary text-on-primary shadow-md border-primary relative"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedTransport("car")}
                type="button"
              >
                {selectedTransport === "car" && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                  </div>
                )}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    selectedTransport === "car"
                      ? "bg-primary-fixed/20 text-primary-fixed"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">directions_car</span>
                </div>
                <span
                  className={`font-label-md text-[13px] font-medium ${
                    selectedTransport === "car" ? "text-on-primary font-semibold" : "text-on-surface"
                  }`}
                >
                  Car
                </span>
                <span
                  className={`font-label-sm text-[11px] mt-0.5 truncate ${
                    selectedTransport === "car" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  Personal / Rental
                </span>
              </button>

              {/* Flight */}
              <button
                className={`flex flex-col items-center p-3 rounded-xl border transition-all duration-200 text-center active:scale-[0.98] ${
                  selectedTransport === "flight"
                    ? "bg-primary text-on-primary shadow-md border-primary relative"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedTransport("flight")}
                type="button"
              >
                {selectedTransport === "flight" && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                  </div>
                )}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    selectedTransport === "flight"
                      ? "bg-primary-fixed/20 text-primary-fixed"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">flight</span>
                </div>
                <span
                  className={`font-label-md text-[13px] font-medium ${
                    selectedTransport === "flight" ? "text-on-primary font-semibold" : "text-on-surface"
                  }`}
                >
                  Flight
                </span>
                <span
                  className={`font-label-sm text-[11px] mt-0.5 truncate ${
                    selectedTransport === "flight" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  Airport Transfer
                </span>
              </button>

              {/* Train */}
              <button
                className={`flex flex-col items-center p-3 rounded-xl border transition-all duration-200 text-center active:scale-[0.98] ${
                  selectedTransport === "train"
                    ? "bg-primary text-on-primary shadow-md border-primary relative"
                    : "bg-surface-container-lowest shadow-xs border-outline-variant/50 hover:bg-surface-container-low"
                }`}
                onClick={() => setSelectedTransport("train")}
                type="button"
              >
                {selectedTransport === "train" && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                  </div>
                )}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    selectedTransport === "train"
                      ? "bg-primary-fixed/20 text-primary-fixed"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">train</span>
                </div>
                <span
                  className={`font-label-md text-[13px] font-medium ${
                    selectedTransport === "train" ? "text-on-primary font-semibold" : "text-on-surface"
                  }`}
                >
                  Train
                </span>
                <span
                  className={`font-label-sm text-[11px] mt-0.5 truncate ${
                    selectedTransport === "train" ? "text-primary-fixed" : "text-outline"
                  }`}
                >
                  Rail Express
                </span>
              </button>
            </div>

            {/* Dynamic Flight Assistance Drawer */}
            {selectedTransport === "flight" && (
              <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-xs flex items-start gap-3 transition-all duration-300 animate-in fade-in">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary mt-0.5 border border-secondary/20">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-[13px] text-on-surface font-semibold leading-tight mb-0.5">
                    Flight numbers handled gracefully
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant leading-snug">
                    No need to look up flight numbers now. Our concierge team will reach out via WhatsApp 2 weeks before for flight numbers and gate arrival tracking.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Section 4: Logistics & Concierge Requests */}
          <div className="mb-space-lg">
            <div className="mb-3">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">room_service</span>
                Concierge Services &amp; Accommodations
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Checkbox 1: Shuttle Pickup */}
              <label className="cursor-pointer flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/50 shadow-xs hover:shadow-sm transition-all duration-200 active:scale-[0.99] select-none">
                <input
                  type="checkbox"
                  checked={needPickup}
                  onChange={(e) => setNeedPickup(e.target.checked)}
                  className="hidden peer"
                />
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors shadow-xs ${
                    needPickup
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-high text-transparent border border-outline-variant"
                  }`}
                >
                  {needPickup && (
                    <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                  )}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-[13px] text-on-surface font-semibold leading-tight mb-1">
                    I need a shuttle pickup
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                    Complimentary private chauffeur transfer from Heathrow (LHR) or London City Airport direct to the estate.
                  </span>
                </div>
              </label>

              {/* Checkbox 2: Hotel Room Block */}
              <label className="cursor-pointer flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/50 shadow-xs hover:shadow-sm transition-all duration-200 active:scale-[0.99] select-none">
                <input
                  type="checkbox"
                  checked={needRoom}
                  onChange={(e) => setNeedRoom(e.target.checked)}
                  className="hidden peer"
                />
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors shadow-xs ${
                    needRoom
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-high text-transparent border border-outline-variant"
                  }`}
                >
                  {needRoom && (
                    <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                  )}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-[13px] text-on-surface font-semibold leading-tight mb-1">
                    Reserve my guest suite in the wedding block
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                    Preferred preferential rate secured at Mayfair Pavilion &amp; Suites. Payment settled upon checkout.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Reassurance Box with Photo Card preview */}
          <div className="mb-space-lg p-3 rounded-xl bg-surface-container flex items-center gap-3 border border-outline-variant/40">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden shrink-0 shadow-inner relative border border-outline-variant/30">
              <img
                alt="English country estate foyer"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE2Ac_uPicnyVBZWZ5BgofJr4vRE2XdCx-kM0w7dFXRkAk6AFlx_yyupPEUeHYTFbyHFGZ0lCJ_vywyhL5Z-Sr2jF6g3jZV76zMkXsjx5wb5SIGEVYTjJnFKpL6-H7FM2dIICDAvfjfBbX8ajFIWILE-OBGza4VSCHA9IM2VV9rq1aFvMrpu-9-vus_ly-ffRJaJlcX4P9tXtBJPqP6caaWbh7d6CWgf7xeAwcZ5f4vAnxAjtnry2FjA"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 text-secondary mb-0.5">
                <span className="material-symbols-outlined text-[14px]">local_florist</span>
                <span className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-secondary">
                  Mayfair Welcome Lounge
                </span>
              </div>
              <p className="font-body-sm text-[12px] text-on-surface-variant truncate">
                Open for all guests starting Friday 2:00 PM
              </p>
            </div>
          </div>

          {/* Bottom Action Section */}
          <div className="flex flex-col gap-3 mt-space-xs">
            <button
              className="w-full h-12 rounded-xl bg-primary text-on-primary font-body-lg text-[15px] font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-surface-tint active:scale-[0.98] transition-all duration-200"
              onClick={handleContinue}
              type="button"
              disabled={submittingState === "loading"}
            >
              {submittingState === "loading" ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">
                    progress_activity
                  </span>
                  <span>Saving Details...</span>
                </>
              ) : submittingState === "confirmed" ? (
                <>
                  <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                    check_circle
                  </span>
                  <span>Travel Details Confirmed!</span>
                </>
              ) : (
                <>
                  <span>Continue to Step 4</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-center px-4">
              <span className="material-symbols-outlined text-[14px] text-outline">history</span>
              <span className="font-body-sm text-[12px] text-outline">
                You can adjust travel arrangements freely until Dec 1, 2026.
              </span>
            </div>

            <div className="text-center pt-2">
              <Link
                to="/"
                className="text-[12px] text-primary hover:underline font-semibold inline-flex items-center gap-1"
              >
                ← Return to Hall Director Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

