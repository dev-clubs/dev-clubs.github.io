import {
    getWikiCourseContents,
    getWikiCourseSequence,
    getWikiPages,
    renderMarkdownWithHeadingIds,
    type WikiPage,
} from "./wiki";
import { EVENTS, getEventCardParts, type EventItem } from "../data/events";

export type ClubConfig = {
    title: string;
    clubName: string;
    clubDescription: string;
    badgeLabel: string;
    badgeColor: string;
    icon: string;
    sidebarLinks: Array<{ label: string; href: string }>;
};

export const CLUB_CONFIG: Record<string, ClubConfig> = {
    "cloud-ai": {
        title: "AI & Cloud — GDG Querétaro",
        clubName: "Club AI & Cloud",
        clubDescription:
            "Explora inteligencia artificial, machine learning, y servicios en la nube de Google. Desde Vertex AI hasta Cloud Run, aprende a construir soluciones escalables con tecnologia de vanguardia.",
        badgeLabel: "Servers / Data Science",
        badgeColor: "#4285F4",
        icon: "cloud",
        sidebarLinks: [
            {
                label: "Google Cloud Skills Boost",
                href: "https://www.cloudskillsboost.google/",
            },
            {
                label: "Vertex AI Docs",
                href: "https://cloud.google.com/vertex-ai/docs",
            },
            {
                label: "Cloud Run Quickstart",
                href: "https://cloud.google.com/run/docs/quickstarts",
            },
            { label: "Gemini API", href: "https://ai.google.dev/" },
        ],
    },
    empowerment: {
        title: "Mujeres x Diversidad — GDG Querétaro",
        clubName: "Mujeres x Diversidad",
        clubDescription:
            "Un espacio seguro para mujeres y personas de diversidades en tecnologia. Mentoria, talleres y comunidad para impulsar tu carrera tech.",
        badgeLabel: "Activismo social",
        badgeColor: "#EA4335",
        icon: "diversity",
        sidebarLinks: [],
    },
    "design-code": {
        title: "Codigo y Diseno — GDG Querétaro",
        clubName: "Codigo y Diseno",
        clubDescription:
            "Frontend, UI/UX, diseno de producto y desarrollo web moderno. Explora la interseccion entre codigo y diseno con talleres practicos y proyectos colaborativos.",
        badgeLabel: "Creatividad",
        badgeColor: "#34A853",
        icon: "code",
        sidebarLinks: [],
    },
    "computer-science": {
        title: "Computer Science — GDG Querétaro",
        clubName: "Computer Science",
        clubDescription:
            "Fundamentos de ciencias de la computacion, algoritmos, estructuras de datos y preparacion para entrevistas tecnicas en GDG Queretaro.",
        badgeLabel: "Computer Science",
        badgeColor: "#F9AB00",
        icon: "terminal",
        sidebarLinks: [],
    },
    contributors: {
        title: "Contributors Wiki — GDG Querétaro",
        clubName: "Contributors",
        clubDescription:
            "Guia para contribuidores del proyecto GDG Queretaro. Setup del proyecto, guidelines de codigo y flujo de trabajo para colaborar en el sitio web y recursos de la comunidad.",
        badgeLabel: "Open Source",
        badgeColor: "#4285F4",
        icon: "code",
        sidebarLinks: [
            {
                label: "Repositorio en GitHub",
                href: "https://github.com/dev-clubs/dev-clubs.github.io",
            },
            {
                label: "Guia de Contribucion",
                href: "https://github.com/dev-clubs/dev-clubs.github.io/blob/main/CONTRIBUTING.md",
            },
        ],
    },
};

export function getClubConfig(slugParts: string[]) {
    const section = slugParts[0] === "contributors" ? "contributors" : slugParts[0];
    return CLUB_CONFIG[section] ?? CLUB_CONFIG.contributors;
}

function formatPageLabel(page: WikiPage) {
    return (
        page.frontmatter.course_name ??
        page.frontmatter.title ??
        page.frontmatter.navTitle ??
        page.slug.at(-1)?.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) ??
        page.route
    );
}

export async function getClubPageState(slugParts: string[]) {
    const currentRoute = slugParts.join("/");
    const wikiPages = getWikiPages();
    const currentPage = wikiPages.find((page) => page.route === currentRoute);
    const frontmatter = currentPage?.frontmatter ?? {};
    const clubConfig = getClubConfig(slugParts);
    const courseSlug =
        currentPage && currentPage.slug.length >= 2 ? currentPage.slug.slice(0, 2) : null;
    const courseRoute = courseSlug?.join("/") ?? "";
    const coursePage = courseRoute
        ? wikiPages.find((page) => page.isIndex && page.route === courseRoute)
        : null;

    const articleHtml = currentPage
        ? await renderMarkdownWithHeadingIds(currentPage.rawContent)
        : "";
    const articleHeadings =
        currentPage?.headings.filter((heading) => heading.depth >= 2) ?? [];
    const courseLinks =
        currentPage?.isIndex && currentPage.slug.length === 1
            ? getWikiCourseContents(currentPage.slug)
            : [];
    const courseContents = currentPage ? getWikiCourseSequence(currentPage.slug) : [];
    const currentSequenceIndex = courseContents.findIndex(
        (link) => link.href === `/${currentRoute}/`,
    );
    const previousContent =
        currentSequenceIndex > 0 ? courseContents[currentSequenceIndex - 1] : null;
    const nextContent =
        currentSequenceIndex >= 0 && currentSequenceIndex < courseContents.length - 1
            ? courseContents[currentSequenceIndex + 1]
            : null;
    const viewMode = currentPage?.isIndex
        ? currentPage.slug.length === 1
            ? "club-catalog"
            : "article"
        : "article";

    const pageTitle = frontmatter.title
        ? `${frontmatter.title} — GDG Querétaro`
        : clubConfig.title;
    const now = new Date();
    const clubEvents: Array<EventItem & { parts: ReturnType<typeof getEventCardParts> }> = EVENTS.filter(
        (event) => (event.club ?? "").toLowerCase() === (slugParts[0] ?? "").toLowerCase(),
    )
        .filter((event) => {
            const start = new Date(event.start);
            const isFuture = !isNaN(start.getTime()) && start >= now;
            return event.dateTbd ? true : isFuture;
        })
        .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .slice(0, 3)
        .map((event) => ({
            ...event,
            parts: getEventCardParts(event),
        }));

    return {
        clubConfig,
        frontmatter,
        articleHtml,
        articleHeadings,
        courseLinks,
        courseContents,
        currentContentHref: currentRoute ? `/${currentRoute}/` : "",
        previousContent,
        nextContent,
        viewMode,
        pageTitle,
        courseTitle: coursePage ? formatPageLabel(coursePage) : "",
        courseDescription:
            coursePage?.frontmatter.description ?? coursePage?.excerpt ?? "",
        clubHref: slugParts[0] ? `/${slugParts[0]}/` : "/",
        clubLabel: clubConfig.clubName,
        clubEvents,
    };
}
