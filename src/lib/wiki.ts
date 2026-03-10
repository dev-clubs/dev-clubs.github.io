export type MarkdownModule = {
    Content: any;
    frontmatter?: Record<string, any>;
};

export type WikiPage = {
    sourcePath: string;
    slug: string[];
    route: string;
    isIndex: boolean;
    frontmatter: Record<string, any>;
    Content: any;
};

const markdownModules = import.meta.glob("../../public/wiki/**/*.md", {
    eager: true,
}) as Record<string, MarkdownModule>;

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
            } satisfies WikiPage;
        })
        .filter((page) => page.slug.length > 0)
        .sort((left, right) => left.route.localeCompare(right.route));
}

export function getWikiContents(slug: string[]) {
    const prefix = slug.join("/");

    return getWikiPages()
        .filter((page) => {
            if (page.route === prefix) {
                return false;
            }

            if (page.slug.length !== slug.length + 1) {
                return false;
            }

            return page.slug.slice(0, slug.length).join("/") === prefix;
        })
        .map((page) => ({
            label:
                page.frontmatter.title ??
                page.frontmatter.navTitle ??
                formatSlugLabel(page.slug.at(-1) ?? page.route),
            href: `/${page.route}/`,
        }));
}
