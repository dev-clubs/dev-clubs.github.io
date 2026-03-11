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
    dateTbd?: boolean;
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
        id: "dsa-training-2026-04",
        title: "DSA Training",
        summary:
            "Sesión del club de Computer Science para practicar estructuras de datos y algoritmos. Fecha exacta por confirmar en abril.",
        start: "2026-04-01T00:00:00-06:00",
        venue: "Por definir",
        href: "https://gdg.community.dev/gdg-queretaro/",
        club: "computer-science",
        bannerLabel: "Sesion del club",
        ctaLabel: "Aparta tu lugar",
        dateTbd: true,
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
        venue: event.venue ?? "Lugar por definir",
        href: event.href ?? "https://gdg.community.dev/gdg-queretaro/",
        club: event.club ?? "GDG Queretaro",
        bannerLabel: event.bannerLabel ?? "Evento destacado",
        bannerImage: event.bannerImage,
        ctaLabel: event.ctaLabel ?? "Ver detalles",
        dateTbd: event.dateTbd ?? false,
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
    const hasValidDate = !isNaN(startDate.getTime());
    const showDay = hasValidDate && !event.dateTbd;

    return {
        weekday: showDay
            ? new Intl.DateTimeFormat("es-MX", {
                  weekday: "short",
                  timeZone: "America/Mexico_City",
              }).format(startDate)
            : "",
        day: showDay
            ? new Intl.DateTimeFormat("es-MX", {
                  day: "2-digit",
                  timeZone: "America/Mexico_City",
              }).format(startDate)
            : "",
        month: hasValidDate
            ? new Intl.DateTimeFormat("es-MX", {
                  month: "short",
                  timeZone: "America/Mexico_City",
              }).format(startDate)
            : "",
        time: showDay
            ? new Intl.DateTimeFormat("es-MX", {
                  hour: "numeric",
                  minute: "2-digit",
                  timeZone: "America/Mexico_City",
              }).format(startDate)
            : "Horario por definir",
    };
}
