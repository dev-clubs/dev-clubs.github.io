# Architecture Documentation

This repository houses the GDG Querétaro static website. It is fully static, optimized for GitHub Pages, and relies on a custom Vanilla CSS design system with Astro-rendered markdown content.

## Core Technologies

- **Astro**: Used as the primary static site generator. The build output is configured to be static and is output to the `docs/` directory for GitHub Pages hosting.
- **Expressive Vainilla**: A custom, vanilla CSS design system located in `src/styles/` and `src/tokens/`. It uses Google Sans typography and a strict, editorial token architecture instead of heavy frameworks like Tailwind. It serves as the single source of truth for styles.
- **Astro Markdown**: Markdown files under `public/wiki/` are imported at build time through the catch-all route `src/pages/[...slug].astro`, which renders each article through its compiled `<Content />` component.
- **React**: Still available for client-only wiki experiences that need runtime fetching, via `WikiEngine.jsx`, but it is no longer the primary wiki page path.

## Directory Structure Overview

- `src/layouts/`: Contains the base Astro layouts (`GDGLayout.astro`, `ClubPage.astro`) which define the core HTML shell, SEO meta tags, and the global navigation/footer.
- `src/pages/`: Astro routing pages. `src/pages/[...slug].astro` is the single wiki route generator.
- `src/pages/events/index.astro`: Dedicated events landing page backed by shared event data.
- `src/components/`: Reusable UI components. `WikiEngine.jsx` remains available as a fallback runtime renderer.
- `src/data/events.ts`: Normalized event model with fallback content and generated Google Calendar data.
- `src/styles/` and `src/tokens/`: The Expressive Vainilla CSS architecture.
- `public/`: Static assets and the source markdown tree under `public/wiki/`.

## Important Patterns

1. **No Backend**: The site is 100% static. Wiki pages are generated from `public/wiki/` during the Astro build and emitted into `docs/`.
2. **Route Contract**: Wiki URLs do not mirror the source tree directly. `README.md` becomes the folder index route, nested lesson markdown becomes nested page routes, and `public/wiki/contributors/<club>.md` maps to `/<club>/contributors/`.
3. **Vanilla CSS First**: Avoid introducing utility CSS frameworks or complex CSS-in-JS. Rely on the `ui-*` classes and `--ui-*` tokens defined in the Expressive Vainilla system.
4. **Interactive Documentation**: The site uses the `<playground-ide>` web component (from `playground-elements`) inside markdown files to provide interactive coding tutorials natively.
5. **Calendar Sync**: Event schedule data can be fetched at build time from Google Calendar into `src/data/events.generated.json`, then enriched locally with photos, banner copy, and CTA metadata before rendering.
