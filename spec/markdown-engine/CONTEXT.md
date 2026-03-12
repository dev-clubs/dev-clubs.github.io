# Markdown Engine Context

The wiki uses a build-time Astro markdown pipeline with a single catch-all route. This keeps the site fully static while preserving the existing wiki UI shell.

## How it works

1. **Storage**: Markdown articles are stored natively as `.md` files in the `public/wiki/` directory.
2. **Routing**: `src/pages/[...slug].astro` scans `public/wiki/**/*.md` and maps each file to a public URL.
3. **Route Rules**:
   - `public/wiki/<folder>/README.md` -> `/<folder>/`
   - `public/wiki/<club>/<course>/<lesson>.md` -> `/<club>/<course>/<lesson>/`
   - `public/wiki/contributors/<club>.md` -> `/<club>/contributors/`
   - `public/wiki/contributors/README.md` -> `/contributors/`
4. **Rendering**: Each markdown module is imported at build time and rendered through Astro's compiled `<Content />` component inside `ClubPage.astro`.
5. **Metadata Extraction**: Front-matter such as `title`, `description`, `themeColor`, or `color` is read from the markdown module and used to set page-level metadata and wiki theming.
6. **Single Source**: `scripts/clean-docs-wiki.js` runs after `npm run build` to remove the markdown copies from `docs/wiki/`, ensuring `public/wiki/` remains the sole editable source.

## Development Guidelines

If extending the wiki routing, remember:
- Keep routing logic centralized in `src/pages/[...slug].astro`; do not add parallel hardcoded wiki page files.
- Preserve the existing club shell by reusing `src/layouts/ClubPage.astro`.
- Remember that `public/wiki/` is the single source of article content; post-build cleanup removes any extra copies emitted into `docs/wiki/`.
- `WikiEngine.jsx` is now a fallback runtime renderer, not the primary route path.
- Ensure any raw HTML inside markdown is safely handled if XSS is a concern, though these markdown files are trusted repo content.
