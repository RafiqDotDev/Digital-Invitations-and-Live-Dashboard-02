import { useState } from "react";
import { useWedding } from "../../context/wedding-context";
import { ColorSwatches } from "./color-swatches";
import type { ItineraryItem } from "../../types";

export function InvitationEditor() {
  const { invitationConfig, updateInvitationConfig, showToast } = useWedding();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  const handleAudioPlayToggle = () => {
    setIsPlayingAudio(!isPlayingAudio);
    showToast(
      !isPlayingAudio ? "Playing Track" : "Paused Track",
      invitationConfig.musicTrackTitle
    );
  };

  const handleAddPhoto = () => {
    const newPhotoUrl =
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAE2Ac_uPicnyVBZWZ5BgofJr4vRE2XdCx-kM0w7dFXRkAk6AFlx_yyupPEUeHYTFbyHFGZ0lCJ_vywyhL5Z-Sr2jF6g3jZV76zMkXsjx5wb5SIGEVYTjJnFKpL6-H7FM2dIICDAvfjfBbX8ajFIWILE-OBGza4VSCHA9IM2VV9rq1aFvMrpu-9-vus_ly-ffRJaJlcX4P9tXtBJPqP6caaWbh7d6CWgf7xeAwcZ5f4vAnxAjtnry2FjA";
    updateInvitationConfig({
      galleryPhotos: [...invitationConfig.galleryPhotos, newPhotoUrl],
    });
    showToast("Photo Added", "New photo added to guest suite gallery");
  };

  const handleDeletePhoto = (index: number) => {
    const updated = [...invitationConfig.galleryPhotos];
    updated.splice(index, 1);
    updateInvitationConfig({ galleryPhotos: updated });
    showToast("Photo Removed", "Photo removed from gallery");
  };

  const handleRemoveEvent = (id: string) => {
    updateInvitationConfig({
      itinerary: invitationConfig.itinerary.filter((ev) => ev.id !== id),
    });
    showToast("Event Removed", "Ceremonial schedule updated");
  };

  const handleAddEvent = () => {
    const newEvent: ItineraryItem = {
      id: `ev-${Date.now()}`,
      title: "After-Party Celebration",
      dateStr: "Dec 12, 2026",
      timeStr: "11:00 PM",
      locationName: "The Glasshouse Conservatory Lounge",
      mapQuery: "glasshouse+conservatory+london",
      dressCode: "Festive Glamour",
    };
    updateInvitationConfig({
      itinerary: [...invitationConfig.itinerary, newEvent],
    });
    showToast("Event Added", "New celebration added to wedding weekend itinerary");
  };

  return (
    <div className="flex flex-col gap-space-lg">
      {/* SECTION 1: Couple & Headline */}
      <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60">
        <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-outline-variant/40">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">favorite</span>
            </span>
            <div>
              <h2 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
                Couple &amp; Headline
              </h2>
              <p className="font-body-sm text-[12px] text-outline">
                Manage formal guest titles and monogram presentation.
              </p>
            </div>
          </div>
          <span className="font-label-sm text-[11px] px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-semibold">
            Step 01
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
              Bride&apos;s Full Name
            </label>
            <input
              className="px-3.5 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
              type="text"
              value={invitationConfig.brideName}
              onChange={(e) => updateInvitationConfig({ brideName: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
              Groom&apos;s Full Name
            </label>
            <input
              className="px-3.5 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
              type="text"
              value={invitationConfig.groomName}
              onChange={(e) => updateInvitationConfig({ groomName: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
              Display Title Override
            </label>
            <input
              className="px-3.5 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
              type="text"
              value={invitationConfig.displayTitle}
              onChange={(e) => updateInvitationConfig({ displayTitle: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
              Wedding Date Display
            </label>
            <input
              className="px-3.5 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
              type="text"
              value={invitationConfig.weddingDate}
              onChange={(e) => updateInvitationConfig({ weddingDate: e.target.value })}
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
              Formal Invitation Header Tagline
            </label>
            <input
              className="px-3.5 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-container"
              type="text"
              value={invitationConfig.formalTagline}
              onChange={(e) => updateInvitationConfig({ formalTagline: e.target.value })}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60">
        <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-outline-variant/40">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">auto_stories</span>
            </span>
            <div>
              <h2 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
                Our Story
              </h2>
              <p className="font-body-sm text-[12px] text-outline">
                Personalized love story shared on the landing fold.
              </p>
            </div>
          </div>
          <span className="font-label-sm text-[11px] px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-semibold">
            Step 02
          </span>
        </div>

        <div className="rounded-lg bg-surface-container-lowest overflow-hidden border border-outline-variant/60">
          {/* Formatting Bar */}
          <div className="flex items-center gap-1 p-2 bg-surface-container-low border-b border-outline-variant/40">
            <button
              className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface"
              title="Bold"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">format_bold</span>
            </button>
            <button
              className="p-1.5 rounded bg-surface-container text-primary"
              title="Italic"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">format_italic</span>
            </button>
            <button
              className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface"
              title="Blockquote"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">format_quote</span>
            </button>
            <button
              className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface"
              title="Link"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">link</span>
            </button>
            <span className="w-px h-4 bg-outline-variant mx-1" />
            <span className="font-code-sm text-[11px] text-outline px-2">
              Font: Playfair Display Italic
            </span>
          </div>

          <textarea
            className="w-full p-space-md font-body-md text-[14px] text-on-surface bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container leading-relaxed resize-none"
            rows={4}
            value={invitationConfig.ourStory}
            onChange={(e) => updateInvitationConfig({ ourStory: e.target.value })}
          />
        </div>
      </section>

      {/* SECTION 3: Color Palette & Swatches */}
      <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60">
        <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-outline-variant/40">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">palette</span>
            </span>
            <div>
              <h2 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
                Color Palette &amp; Theme Swatches
              </h2>
              <p className="font-body-sm text-[12px] text-outline">
                Atmospheric styling reflected in fonts, monograms, and badges.
              </p>
            </div>
          </div>
          <span className="font-label-sm text-[11px] px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-semibold">
            Step 03
          </span>
        </div>

        <ColorSwatches />
      </section>

      {/* SECTION 4: Photo Gallery & Cover Art */}
      <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60">
        <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-outline-variant/40">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">photo_library</span>
            </span>
            <div>
              <h2 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
                Photo Gallery &amp; Cover Art
              </h2>
              <p className="font-body-sm text-[12px] text-outline">
                Featured hero imagery and guest gallery carousel (16:9 or 4:5).
              </p>
            </div>
          </div>
          <span className="font-label-sm text-[11px] px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-semibold">
            {1 + invitationConfig.galleryPhotos.length} / 8 Photos
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
          {/* Slot 1: Cover Photo */}
          <div className="relative group rounded-xl overflow-hidden shadow-xs aspect-[3/4] bg-surface-container-low border border-outline-variant/40">
            <img
              alt="Cover Photo"
              className="w-full h-full object-cover"
              src={invitationConfig.coverPhoto}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent" />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full font-label-sm text-[10px] bg-primary text-on-primary font-semibold">
              Cover
            </span>
          </div>

          {/* Additional Photos */}
          {invitationConfig.galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-xs aspect-[3/4] bg-surface-container-low border border-outline-variant/40"
            >
              <img
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
                src={photo}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <button
                className="absolute bottom-2 right-2 p-1.5 rounded-full bg-surface-container-lowest/80 text-on-surface opacity-0 group-hover:opacity-100 transition-opacity hover:bg-tertiary hover:text-on-tertiary"
                onClick={() => handleDeletePhoto(idx)}
                type="button"
                title="Remove photo"
              >
                <span className="material-symbols-outlined text-[16px]">delete</span>
              </button>
            </div>
          ))}

          {/* Empty Upload Slot */}
          <div
            onClick={handleAddPhoto}
            className="rounded-xl p-space-sm flex flex-col items-center justify-center text-center aspect-[3/4] bg-surface-container-low/60 hover:bg-surface-container-low transition-colors cursor-pointer group border border-dashed border-outline-variant"
          >
            <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-2 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span>
            </span>
            <span className="font-label-md text-[13px] text-on-surface font-semibold">
              + Add Photo
            </span>
            <span className="font-label-sm text-[11px] text-outline mt-0.5">
              Max 8 (PNG, JPG)
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 5: Ambient Music & Sound */}
      <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60">
        <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-outline-variant/40">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">music_note</span>
            </span>
            <div>
              <h2 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
                Ambient Music &amp; Sound
              </h2>
              <p className="font-body-sm text-[12px] text-outline">
                Curated musical backdrop activated upon digital invitation open.
              </p>
            </div>
          </div>
          <span className="font-label-sm text-[11px] px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-semibold">
            Step 05
          </span>
        </div>

        <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md border border-outline-variant/30">
          <div className="flex items-center gap-space-sm">
            <button
              className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm hover:bg-primary-container transition-colors shrink-0"
              onClick={handleAudioPlayToggle}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">
                {isPlayingAudio ? "pause" : "play_arrow"}
              </span>
            </button>
            <div className="flex flex-col">
              <span className="font-label-md text-[13px] text-on-surface font-semibold">
                {invitationConfig.musicTrackTitle}
              </span>
              <span className="font-label-sm text-[11px] text-outline">
                {invitationConfig.musicTrackMeta}
              </span>
            </div>
          </div>

          <button
            className="font-label-sm text-[12px] text-primary hover:underline font-semibold self-start md:self-auto"
            onClick={() => showToast("Track Selector", "Audio library browser opened")}
            type="button"
          >
            Change Track
          </button>
        </div>

        <div className="mt-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-2 border-t border-outline-variant/40">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              checked={invitationConfig.autoplayMuted}
              className="w-4 h-4 rounded text-primary focus:ring-primary-container"
              onChange={(e) => updateInvitationConfig({ autoplayMuted: e.target.checked })}
              type="checkbox"
            />
            <span className="font-body-md text-[13px] text-on-surface">
              Autoplay muted with guest tap prompt
            </span>
          </label>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-outline text-[18px]">volume_down</span>
            <input
              type="range"
              min="0"
              max="100"
              value={invitationConfig.musicVolume}
              onChange={(e) => updateInvitationConfig({ musicVolume: parseInt(e.target.value) })}
              className="w-28 accent-primary cursor-pointer"
            />
            <span className="material-symbols-outlined text-outline text-[18px]">volume_up</span>
          </div>
        </div>
      </section>

      {/* SECTION 6: Event Itinerary */}
      <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60">
        <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-outline-variant/40">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </span>
            <div>
              <h2 className="font-headline-sm text-[18px] font-serif font-semibold text-on-surface">
                Event Itinerary ({invitationConfig.itinerary.length} Celebrations)
              </h2>
              <p className="font-body-sm text-[12px] text-outline">
                Ceremonial timeline across the wedding weekend.
              </p>
            </div>
          </div>
          <button
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-[12px] font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/40"
            onClick={handleAddEvent}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Event
          </button>
        </div>

        <div className="flex flex-col gap-space-sm">
          {invitationConfig.itinerary.map((ev) => (
            <div
              key={ev.id}
              className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low/50 transition-colors shadow-xs border border-outline-variant/40 flex items-start gap-space-sm"
            >
              <span className="material-symbols-outlined text-outline cursor-grab pt-1 select-none">
                drag_indicator
              </span>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="sm:col-span-1">
                  <span className="font-headline-sm text-[15px] font-serif font-bold text-on-surface block">
                    {ev.title}
                  </span>
                  <span className="font-label-sm text-[11px] text-primary mt-0.5 block font-semibold">
                    {ev.dateStr} • {ev.timeStr}
                  </span>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-[13px]">
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      location_on
                    </span>
                    <span>{ev.locationName}</span>
                    <a
                      className="text-primary hover:underline ml-1 font-code-sm text-[11px] font-semibold"
                      href={`https://maps.google.com/?q=${ev.mapQuery}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Map
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 text-outline font-body-sm text-[12px]">
                    <span className="material-symbols-outlined text-[16px]">checkroom</span>
                    <span>Dress Code: {ev.dressCode}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  className="p-1.5 text-outline hover:text-tertiary transition-colors rounded-lg hover:bg-surface-container-low"
                  onClick={() => handleRemoveEvent(ev.id)}
                  title="Remove event"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

