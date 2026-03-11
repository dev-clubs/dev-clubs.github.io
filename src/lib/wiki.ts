export type MarkdownModule = {
    Content: any;
    frontmatter?: Record<string, any>;
};

import { codeToHtml } from "shiki";
import { escapeHtml, renderMarkdown } from "./markdown";
import { marked } from "marked";

export type WikiHeading = {
    depth: number;
    text: string;
    id: string;
};

export type WikiLink = {
    label: string;
    href: string;
    description?: string;
};

export type WikiCourseLink = WikiLink & {
    depth: number;
    slug: string[];
    sectionId?: string;
    sectionLabel?: string;
};

export type WikiPage = {
    sourcePath: string;
    slug: string[];
    route: string;
    isIndex: boolean;
    frontmatter: Record<string, any>;
    Content: any;
    rawContent: string;
    excerpt: string;
    headings: WikiHeading[];
};

const markdownModules = import.meta.glob("../../public/wiki/**/*.md", {
    eager: true,
}) as Record<string, MarkdownModule>;

const rawMarkdownModules = import.meta.glob("../../public/wiki/**/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
}) as Record<string, string>;

function stripFrontmatter(markdown: string) {
    if (!markdown.startsWith("---")) {
        return markdown.trim();
    }

    const endIdx = markdown.indexOf("\n---", 3);
    if (endIdx === -1) {
        return markdown.trim();
    }

    return markdown.slice(endIdx + 4).trim();
}

function slugifyHeading(value: string) {
    return value
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

function extractHeadings(markdown: string) {
    const seen = new Map<string, number>();

    return stripFrontmatter(markdown)
        .split(/\r?\n/)
        .map((line) => line.match(/^(#{1,6})\s+(.+?)\s*#*$/))
        .filter(Boolean)
        .map((match) => {
            const depth = match![1].length;
            const text = match![2].trim();
            const baseId = slugifyHeading(text) || "section";
            const count = seen.get(baseId) ?? 0;
            seen.set(baseId, count + 1);

            return {
                depth,
                text,
                id: count === 0 ? baseId : `${baseId}-${count}`,
            } satisfies WikiHeading;
        });
}

function extractExcerpt(markdown: string) {
    const cleanMarkdown = stripFrontmatter(markdown);
    const linkReplacer = (line: string) =>
        line
            // images: ![alt](url) -> alt
            .replace(/!\[([^\]]*?)\]\([^)]+?\)/g, "$1")
            // links: [text](url) -> text
            .replace(/\[([^\]]+?)\]\([^)]+?\)/g, "$1")
            // bold/italic/code markers
            .replace(/[*_`~]{1,3}/g, "")
            // inline code fences ```...``` -> ...
            .replace(/```/g, "");

    const lines = stripFrontmatter(markdown)
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

    for (const line of lines) {
        if (
            line.startsWith("#") ||
            line.startsWith("!") ||
            line.startsWith("```") ||
            line.startsWith("* ") ||
            line.startsWith("- ") ||
            /^\d+\.\s/.test(line)
        ) {
            continue;
        }

        return linkReplacer(line);
    }

    const firstLine = cleanMarkdown.split(/\r?\n/).find(Boolean) ?? "";
    return linkReplacer(firstLine);
}

export async function renderMarkdownWithHeadingIds(markdown: string) {
    const cleanMarkdown = stripFrontmatter(markdown);
    const headings = extractHeadings(markdown);
    let headingIndex = 0;
    const renderer = new marked.Renderer();

    renderer.code = (code, infostring) => {
        const lang = (infostring || "text").trim().toLowerCase();

        return `@@CODEBLOCK_${lang}__${escapeHtml(code)}@@`;
    };

    const placeholderHtml = renderMarkdown(cleanMarkdown, { renderer });
    const codeBlocks = Array.from(
        placeholderHtml.matchAll(/@@CODEBLOCK_([^_]+)__([\s\S]*?)@@/g),
    );

    const highlightedBlocks = await Promise.all(
        codeBlocks.map(async ([fullMatch, lang, encodedCode]) => {
            try {
                const html = await codeToHtml(
                    encodedCode
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&amp;/g, "&"),
                    {
                        lang: lang || "text",
                        theme: "dark-plus",
                    },
                );
                return [fullMatch, html] as const;
            } catch {
                const html = await codeToHtml(
                    encodedCode
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&amp;/g, "&"),
                    {
                        lang: "text",
                        theme: "dark-plus",
                    },
                );
                return [fullMatch, html] as const;
            }
        }),
    );

    let html = placeholderHtml;
    for (const [placeholder, blockHtml] of highlightedBlocks) {
        html = html.replace(placeholder, blockHtml);
    }

    return html.replace(/<h([1-6])>(.*?)<\/h\1>/g, (match, level, innerHtml) => {
        const heading = headings[headingIndex];
        headingIndex += 1;

        if (!heading) {
            return match;
        }

        return `<h${level} id="${heading.id}">${innerHtml}</h${level}>`;
    });
}

function normalizePath(filePath: string) {
    return filePath.replace(/^.*\/public\/wiki\//, "").replace(/\\/g, "/");
}

function toSlug(sourcePath: string) {
    const parts = sourcePath.split("/");
    const fileName = parts.at(-1) ?? "";
    const fileBaseName = fileName.replace(/\.md$/i, "");
    const dirParts = parts.slice(0, -1);

    if (
        dirParts.length === 1 &&
        dirParts[0] === "contributors" &&
        fileBaseName.toLowerCase() !== "readme"
    ) {
        return [fileBaseName, "contributors"];
    }

    if (dirParts.length === 0 && fileBaseName.toLowerCase() === "readme") {
        return ["wiki"];
    }

    if (fileBaseName.toLowerCase() === "readme") {
        return dirParts;
    }

    return [...dirParts, fileBaseName];
}

function formatSlugLabel(segment: string) {
    return segment
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getWikiPages() {
    return Object.entries(markdownModules)
        .map(([filePath, module]) => {
            const sourcePath = normalizePath(filePath);
            const slug = toSlug(sourcePath);
            const route = slug.join("/");
            return {
                sourcePath,
                slug,
                route,
                isIndex: /\/README\.md$/i.test(sourcePath),
                frontmatter: module.frontmatter ?? {},
                Content: module.Content,
                rawContent: rawMarkdownModules[filePath] ?? "",
                excerpt: extractExcerpt(rawMarkdownModules[filePath] ?? ""),
                headings: extractHeadings(rawMarkdownModules[filePath] ?? ""),
            } satisfies WikiPage;
        })
        .filter((page) => page.slug.length > 0)
        .sort((left, right) => left.route.localeCompare(right.route));
}

function formatPageLabel(page: WikiPage) {
    return (
        page.frontmatter.course_name ??
        page.frontmatter.title ??
        page.frontmatter.navTitle ??
        formatSlugLabel(page.slug.at(-1) ?? page.route)
    );
}

function getWikiChildren(
    slug: string[],
    options: {
        indexesOnly?: boolean;
        articlesOnly?: boolean;
    } = {},
) {
    const prefix = slug.join("/");

    return getWikiPages()
        .filter((page) => {
            if (page.route === prefix) {
                return false;
            }

            if (page.slug.length !== slug.length + 1) {
                return false;
            }

            if (page.slug.slice(0, slug.length).join("/") !== prefix) {
                return false;
            }

            if (options.indexesOnly) {
                return page.isIndex;
            }

            if (options.articlesOnly) {
                return !page.isIndex;
            }

            return true;
        })
        .map((page) => ({
            label: formatPageLabel(page),
            href: `/${page.route}/`,
            description: page.frontmatter.description ?? page.excerpt,
        }));
}

export function getWikiCourseContents(slug: string[]) {
    return getWikiChildren(slug, { indexesOnly: true }) satisfies WikiLink[];
}

export function getWikiArticleContents(slug: string[]) {
    return getWikiChildren(slug, { articlesOnly: true }) satisfies WikiLink[];
}

export function getWikiCourseSequence(slug: string[]) {
    if (slug.length < 2) {
        return [] satisfies WikiLink[];
    }

    const courseSlug = slug.slice(0, 2);
    const courseRoute = courseSlug.join("/");
    const wikiPages = getWikiPages();
    const pagesInCourse = wikiPages.filter(
        (page) =>
            page.route === courseRoute || page.route.startsWith(`${courseRoute}/`),
    );

    const baseDepth = courseSlug.length;

    return pagesInCourse.map((page) => ({
        label: formatPageLabel(page),
        href: `/${page.route}/`,
        description: page.frontmatter.description ?? page.excerpt,
        depth:
            page.route === courseRoute
                ? 0
                : Math.max(0, page.slug.length - baseDepth - 1),
        slug: page.slug,
        sectionId:
            page.slug.length > baseDepth + 1 ? page.slug[baseDepth] : undefined,
        sectionLabel:
            page.slug.length > baseDepth + 1
                ? (() => {
                      const sectionSegment = page.slug[baseDepth];
                      const sectionIndex = wikiPages.find(
                          (candidate) =>
                              candidate.isIndex &&
                              candidate.route === `${courseRoute}/${sectionSegment}`,
                      );
                      return sectionIndex
                          ? formatPageLabel(sectionIndex)
                          : formatSlugLabel(sectionSegment);
                  })()
                : undefined,
    })) satisfies WikiCourseLink[];
}

export function getWikiSearchIndex() {
    return getWikiPages().map((page) => ({
        label: formatPageLabel(page),
        href: `/${page.route}/`,
    }));
}
