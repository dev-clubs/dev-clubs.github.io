# GDG Querétaro Website

Official website for GDG Querétaro, built with Astro and a custom design system using Google Sans typography and Google brand colors.

## Project Context

- Framework: Astro (static output to `docs/`)
- Styling: Vanilla CSS design system in `src/styles/global.css`
- Dynamic wiki rendering: React + `marked` via `src/components/WikiEngine.jsx`
- Hosting target: GitHub Pages
- Primary layout shell: `src/layouts/GDGLayout.astro`
- Reusable club page layout: `src/layouts/ClubPage.astro`

## Current Site Structure

```text
src/
  components/
    WikiEngine.jsx
  layouts/
    GDGLayout.astro
    ClubPage.astro
  pages/
    index.astro
    cloud-ai/index.astro
    cloud-ai/wiki.astro
    empowerment/index.astro
    empowerment/wiki.astro
    computer-science/index.astro
    computer-science/wiki.astro
    design-code/index.astro
    design-code/wiki.astro
    contributors/wiki.astro
  styles/
    global.css

public/
  assets/
    Google-Developer-Group__title-font-branded.svg
  wiki/
    cloud-ai.md
    empowerment.md
    computer-science.md
    design-code.md
    contributors.md
```

## UI/UX Baseline

- Google Sans / Google Sans Text is the primary type stack.
- Navbar and page sections share consistent horizontal gutters.
- Theme controls are available from the hamburger menu:
  - Mode: `System` (default), `Light`, `Dark`
  - Accent: Blue, Green, Red, Yellow
- Homepage includes:
  - Hero with club cards
  - Events section
  - Contributors section
- Club pages include:
  - Hero header
  - Wiki article body
  - Right sidebar resources card

## Important Links

- Join: <https://gdg.community.dev/gdg-queretaro/>
- Instagram: <https://www.instagram.com/dev.queretaro>
- LinkedIn: <https://www.linkedin.com/company/dev-queretaro>
- WhatsApp: <https://chat.whatsapp.com/FOeO2zm502w3oDE84EhWsV>
- GitHub org: <https://github.com/dev-clubs>

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Build Output

Production build is generated in `docs/`.
