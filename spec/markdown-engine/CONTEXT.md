# Markdown Engine Context

The site features a dynamic, client-side `.md` renderer. This is crucial for the "Wiki" aspects of the site.

## How it works

1. **Storage**: Markdown articles are stored natively as `.md` files in the `public/wiki/` directory.
2. **Fetching**: The Astro layout `src/layouts/ClubPage.astro` implements `WikiEngine.jsx` using the `client:only="react"` directive. It passes the `articlePath` prop to it.
3. **Parsing**: When the page loads, `WikiEngine.jsx` makes an HTTP `fetch()` request for the `.md` file. It parses the file using a lightweight front-matter parser and the `marked` library.
4. **Metadata Extraction**: Metadata such as title, author, or theme colors defined in YAML front-matter (e.g., `--- \n title: "Intro to AI" \n ---`) is parsed and applied defensively to modify the document context, such as injecting CSS `--brand-primary` colors or setting `<title>`.

## Development Guidelines

If extending the WikiEngine, remember:
- It relies on client-side fetching; do NOT use Node.js-specific libraries like `fs` or `path` inside `WikiEngine.jsx`.
- Always implement loading skeletons (`<div class="skeleton">`) while the markdown is fetching to prevent CLS (Cumulative Layout Shift).
- Ensure any raw HTML inside markdown is safely handled if XSS is a concern (though these markdown files are trusted content in this repo).
