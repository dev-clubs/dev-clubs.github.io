# Architecture Documentation

This repository houses the GDG Querétaro static website. It is designed to be fully static, fast, and reliant on a custom Vanilla CSS design system, with client-side markdown rendering for dynamic wiki-like content.

## Core Technologies

- **Astro**: Used as the primary static site generator. The build output is configured to be static and is output to the `docs/` directory for GitHub Pages hosting.
- **Expressive Vainilla**: A custom, vanilla CSS design system located in `src/styles/` and `src/tokens/`. It uses Google Sans typography and a strict, editorial token architecture instead of heavy frameworks like Tailwind. It serves as the single source of truth for styles.
- **React**: Used exclusively as a client-side library (`client:only="react"`) for the `WikiEngine.jsx` component to dynamically fetch and render markdown logs.
- **marked** & **gray-matter (concept)**: Used inside `WikiEngine.jsx` to parse and render Markdown text to HTML.

## Directory Structure Overview

- `src/layouts/`: Contains the base Astro layouts (`GDGLayout.astro`, `ClubPage.astro`) which define the core HTML shell, SEO meta tags, and the global navigation/footer.
- `src/pages/`: Astro routing pages.
- `src/components/`: Reusable UI components. `WikiEngine.jsx` is the primary React component for markdown article rendering.
- `src/styles/` and `src/tokens/`: The Expressive Vainilla CSS architecture.
- `public/`: Static assets (images, raw `.md` wiki files that are fetched by the client at runtime).

## Important Patterns

1. **No Backend**: The site is 100% static. Content is either hardcoded in `.astro` files or fetched from the `public/wiki/` folder at runtime via the `WikiEngine.jsx`.
2. **Vanilla CSS First**: Avoid introducing utility CSS frameworks or complex CSS-in-JS. Rely on the `ui-*` classes and `--ui-*` tokens defined in the Expressive Vainilla system.
3. **Interactive Documentation**: The site uses the `<playground-ide>` web component (from `playground-elements`) inside markdown files to provide interactive coding tutorials natively.
