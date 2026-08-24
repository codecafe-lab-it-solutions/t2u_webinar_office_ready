function toGoogleDate(iso: string): string {
  return iso.replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function buildGoogleCalendarUrl(params: {
  title: string;
  startISO: string;
  endISO: string;
  details?: string;
  location?: string;
}): string {
  const search = new URLSearchParams({
    action: "TEMPLATE",
    text: params.title,
    dates: `${toGoogleDate(params.startISO)}/${toGoogleDate(params.endISO)}`,
    details: params.details ?? "",
    location: params.location ?? "",
  });
  return `https://calendar.google.com/calendar/render?${search.toString()}`;
}
