import { marked } from "marked";

const SAFE_HTML_TAGS = new Set([
    "a",
    "b",
    "blockquote",
    "br",
    "code",
    "del",
    "details",
    "div",
    "em",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "ins",
    "li",
    "ol",
    "p",
    "pre",
    "strong",
    "sub",
    "summary",
    "sup",
    "span",
    "table",
    "tbody",
    "td",
    "th",
    "thead",
    "tr",
    "ul",
]);

const GLOBAL_SAFE_ATTRS = new Set([
    "id",
    "title",
    "aria-hidden",
    "aria-label",
    "aria-labelledby",
]);

const TAG_SAFE_ATTRS: Record<string, Set<string>> = {
    a: new Set(["href"]),
    details: new Set(["open"]),
    img: new Set(["src", "alt", "width", "height"]),
    ol: new Set(["start"]),
    td: new Set(["colspan", "rowspan", "align"]),
    th: new Set(["colspan", "rowspan", "align"]),
};

const VOID_TAGS = new Set(["br", "hr", "img"]);

const SAFE_URL_PROTOCOL = /^(?:https?:|mailto:|tel:|\/|#)/i;

export function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function isSafeUrl(attrName: string, value: string) {
    if (!["href", "src"].includes(attrName)) {
        return true;
    }

    const normalized = value.trim();
    return normalized === "" || SAFE_URL_PROTOCOL.test(normalized);
}

function sanitizeTag(rawTag: string) {
    if (/^<!--[\s\S]*?-->$/.test(rawTag)) {
        return "";
    }

    const closingMatch = rawTag.match(/^<\s*\/\s*([a-z0-9-]+)\s*>$/i);
    if (closingMatch) {
        const tagName = closingMatch[1].toLowerCase();
        return SAFE_HTML_TAGS.has(tagName) ? `</${tagName}>` : escapeHtml(rawTag);
    }

    const openingMatch = rawTag.match(/^<\s*([a-z0-9-]+)([\s\S]*?)\s*(\/?)\s*>$/i);
    if (!openingMatch) {
        return escapeHtml(rawTag);
    }

    const [, rawName, rawAttrs, selfClosing] = openingMatch;
    const tagName = rawName.toLowerCase();

    if (!SAFE_HTML_TAGS.has(tagName)) {
        return escapeHtml(rawTag);
    }

    const allowedAttrs = new Set([
        ...GLOBAL_SAFE_ATTRS,
        ...(TAG_SAFE_ATTRS[tagName] ?? []),
    ]);

    const attrs: string[] = [];
    const attrRegex =
        /([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;

    for (const match of rawAttrs.matchAll(attrRegex)) {
        const attrName = match[1].toLowerCase();
        const attrValue = match[2] ?? match[3] ?? match[4] ?? "";

        if (!allowedAttrs.has(attrName) || attrName.startsWith("on")) {
            continue;
        }

        if (!isSafeUrl(attrName, attrValue)) {
            continue;
        }

        if (attrValue === "" && attrName === "open") {
            attrs.push("open");
            continue;
        }

        attrs.push(`${attrName}="${escapeHtml(attrValue)}"`);
    }

    const attrString = attrs.length > 0 ? ` ${attrs.join(" ")}` : "";
    const shouldSelfClose = selfClosing === "/" || VOID_TAGS.has(tagName);

    return shouldSelfClose ? `<${tagName}${attrString} />` : `<${tagName}${attrString}>`;
}

export function sanitizeRenderedHtml(html: string) {
    return html.replace(/<!--[\s\S]*?-->|<\/?[a-zA-Z][^>]*>/g, (tag) => sanitizeTag(tag));
}

export function renderMarkdown(markdown: string, options?: marked.MarkedOptions) {
    const html = marked.parse(markdown, {
        gfm: true,
        ...options,
    }) as string;

    return sanitizeRenderedHtml(html);
}
