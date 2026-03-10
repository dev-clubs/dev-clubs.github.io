import generatedEvents from "./events.generated.json";

export type EventItem = {
    id: string;
    title: string;
    summary?: string;
    start: string;
    end?: string;
    venue: string;
    href: string;
    club: string;
    bannerLabel?: string;
    bannerImage?: string;
    ctaLabel?: string;
};

export type EventCardParts = {
    weekday: string;
    day: string;
    month: string;
    time: string;
};

const FALLBACK_EVENTS: EventItem[] = [
    {
        id: "foro-mujeres-tech-2026-03-21",
        title: "Foro Mujeres @ Tech",
        summary:
            "Panel y networking para talento emergente en tecnologia con enfoque en comunidad y liderazgo.",
        start: "2026-03-21T17:30:00-06:00",
        end: "2026-03-21T20:00:00-06:00",
        venue: "Centro Queretaro de la Imagen",
        href: "https://gdg.community.dev/gdg-queretaro/",
        club: "empowerment",
        bannerLabel: "Community Forum",
        ctaLabel: "Registrate",
    },
    {
        id: "gemini-meetup-buildwithai-2026-03-27",
        title: "Gemini Meetup #BuildWithAI",
        summary:
            "Sesion practica sobre agentes, prototipos y demos con Gemini y herramientas de productividad.",
        start: "2026-03-27T18:00:00-06:00",
        end: "2026-03-27T20:30:00-06:00",
        venue: "Centro Queretaro de la Imagen",
        href: "https://gdg.community.dev/gdg-queretaro/",
        club: "cloud-ai",
        bannerLabel: "Featured Meetup",
        ctaLabel: "Aparta tu lugar",
    },
    {
        id: "frontend-systems-lab-2026-04-09",
        title: "Frontend Systems Lab",
        summary:
            "Workshop sobre diseno de componentes, tokens y handoff entre producto y frontend.",
        start: "2026-04-09T19:00:00-06:00",
        end: "2026-04-09T21:00:00-06:00",
        venue: "Hub de Innovacion Queretaro",
        href: "https://gdg.community.dev/gdg-queretaro/",
        club: "design-code",
        bannerLabel: "Workshop",
        ctaLabel: "Ver agenda",
    },
];

const EVENT_OVERRIDES: Record<string, Partial<EventItem>> = {};

function normalizeClub(club: string) {
    return club
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizeGeneratedEvent(event: Partial<EventItem> & { id?: string; title?: string; start?: string }) {
    if (!event.id || !event.title || !event.start) {
        return null;
    }

    const override = EVENT_OVERRIDES[event.id] ?? {};

    return {
        id: event.id,
        title: event.title,
        summary: event.summary ?? "",
        start: event.start,
        end: event.end,
        venue: event.venue ?? "Venue TBA",
        href: event.href ?? "https://gdg.community.dev/gdg-queretaro/",
        club: event.club ?? "GDG Queretaro",
        bannerLabel: event.bannerLabel ?? normalizeClub(event.club ?? "Community"),
        bannerImage: event.bannerImage,
        ctaLabel: event.ctaLabel ?? "Ver detalles",
        ...override,
    } satisfies EventItem;
}

export const EVENTS: EventItem[] =
    generatedEvents.length > 0
        ? generatedEvents
              .map((event) => normalizeGeneratedEvent(event))
              .filter((event): event is EventItem => Boolean(event))
        : FALLBACK_EVENTS;

export function getEventCardParts(event: EventItem): EventCardParts {
    const startDate = new Date(event.start);

    return {
        weekday: new Intl.DateTimeFormat("es-MX", {
            weekday: "short",
            timeZone: "America/Mexico_City",
        }).format(startDate),
        day: new Intl.DateTimeFormat("es-MX", {
            day: "2-digit",
            timeZone: "America/Mexico_City",
        }).format(startDate),
        month: new Intl.DateTimeFormat("es-MX", {
            month: "short",
            timeZone: "America/Mexico_City",
        }).format(startDate),
        time: new Intl.DateTimeFormat("es-MX", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "America/Mexico_City",
        }).format(startDate),
    };
}
