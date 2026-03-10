import { promises as fs } from "node:fs";
import { join } from "node:path";

const calendarId = process.env.GOOGLE_CALENDAR_ID;
const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
const outputPath = join(
  process.cwd(),
  "src",
  "data",
  "events.generated.json",
);

async function writeEvents(events) {
  await fs.writeFile(outputPath, `${JSON.stringify(events, null, 2)}\n`);
}

async function syncGoogleCalendar() {
  if (!calendarId || !apiKey) {
    await writeEvents([]);
    return;
  }

  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
  );
  url.searchParams.set("key", apiKey);
  url.searchParams.set("singleEvents", "true");
  url.searchParams.set("orderBy", "startTime");
  url.searchParams.set("timeMin", new Date().toISOString());
  url.searchParams.set("maxResults", "20");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Google Calendar sync failed with status ${response.status}`);
  }

  const payload = await response.json();
  const events = (payload.items ?? [])
    .filter((item) => item.status !== "cancelled" && item.start)
    .map((item) => ({
      id: item.id,
      title: item.summary ?? "Untitled event",
      summary: item.description ?? "",
      start: item.start.dateTime ?? item.start.date,
      end: item.end?.dateTime ?? item.end?.date,
      venue: item.location ?? "Venue TBA",
      href: item.htmlLink ?? "https://gdg.community.dev/gdg-queretaro/",
      club: "gdg-queretaro",
    }));

  await writeEvents(events);
}

syncGoogleCalendar();
