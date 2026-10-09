export interface CalendarEventData {
  title: string;
  description: string;
  location: string;
  startDate: string; // YYYYMMDDTHHMMSS
  endDate: string;   // YYYYMMDDTHHMMSS
}

export function generateIcsFile(event: CalendarEventData): void {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Live Guest//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    `DTSTART:${event.startDate}`,
    `DTEND:${event.endDate}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT24H",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Wedding Celebration",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${event.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(event: CalendarEventData): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${event.startDate}/${event.endDate}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

