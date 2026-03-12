# Events Calendar Context

The site now has a dedicated `/events/` page and a shared event model in `src/data/events.ts`.

## Recommendation

Use Google Calendar as the source of truth for schedule metadata, but not as the only content source for presentation.

- **Calendar owns**: title, date/time, location, description, event URL.
- **Repo owns**: banners, photos, CTA labels, editorial summaries, club tags, fallback content.

This split gives the best developer experience for a static Astro site on GitHub Pages:

1. **Static-safe**: the site stays pre-rendered; no browser-side API dependency is required.
2. **Secret-safe**: `GOOGLE_CALENDAR_API_KEY` is used at build time, not shipped to visitors.
3. **Editorial control**: Google Calendar alone is weak for banners/photos, so the repo can add marketing assets per event.
4. **Local DX**: if no calendar env vars are present, the site still builds with fallback events.

## Current Pipeline

1. `npm run build`
2. `prebuild` runs `scripts/sync-google-calendar.mjs`
3. If `GOOGLE_CALENDAR_ID` and `GOOGLE_CALENDAR_API_KEY` exist, the script fetches upcoming public events from Google Calendar and writes `src/data/events.generated.json`
4. `src/data/events.ts` normalizes that feed and falls back to local events when generated data is empty
5. Astro pages render those cards in `src/pages/index.astro` and `src/pages/events/index.astro`

## Editorial Enrichment Contract

Each event card supports these enrichment fields on top of the calendar feed:

- `bannerLabel`
- `bannerImage`
- `ctaLabel`
- `club`
- `summary`

Those fields should stay in repo-managed data so the site can support event photos, ad banners, and stronger calls to action without turning the Google Calendar into a CMS.

## Developer Experience Evaluation

- **Iframe embed**: fastest to start, but weak branding, weak layout control, and poor banner/photo support.
- **Client-side API fetch**: easy to prototype, but it exposes the API key in a static site and makes page rendering dependent on the browser.
- **Build-time sync**: best fit here. It matches Astro's static output, keeps the UI deterministic, and lets the team review generated schedule changes in Git.

## Next Extension

If the team wants richer event promotions, add an overrides file keyed by calendar event id to merge photos, banner art, sponsor callouts, or per-event landing page links into the generated feed.
