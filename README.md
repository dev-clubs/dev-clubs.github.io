# GDG Querétaro Website

Official website for GDG Querétaro, built with Astro and the **Expressive Vainilla** design system.

## Project Context

- Framework: Astro 4 (static output to `docs/`)
- Design system: Expressive Vainilla — vanilla CSS, token-layered, in `src/styles/expressive-vainilla.css`
- Dynamic wiki rendering: React + `marked` via `src/components/WikiEngine.jsx`
- Interactive tutorials: `playground-elements` (Google) — serverless JS execution via Service Worker
- Component documentation: Storybook 10 (`Expressive Vainilla/*` stories)
- LLM context & specs: `/spec` and `/libraries`
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
    cloud-ai/index.astro + wiki.astro
    empowerment/index.astro + wiki.astro
    computer-science/index.astro + wiki.astro
    design-code/index.astro + wiki.astro
    contributors/wiki.astro
  stories/expressive/          ← Storybook component stories
    Elements.stories.jsx
    Widgets.stories.jsx
    Navigation.stories.jsx
    IDE.stories.jsx             ← interactive e-learning IDE
    DevExperience.stories.jsx   ← article schema + code test docs
    ide-story.css
    expressive-story.css
  styles/
    expressive-vainilla.css     ← design system entrypoint
  tokens/
    ui.ref.css                  ← raw palette / spacing / shape
    ui.sys.css                  ← semantic roles, theme switching
    ui.type.css                 ← typography + Material Symbols icons
    ui.motion.css               ← easing + expression levels
    ui.comp.css                 ← component + grid API

.storybook/
  main.js
  preview.js
  public/                      ← static files served at Storybook root
    playground-service-worker.js
    playground-service-worker-proxy.html

public/
  assets/
    Google-Developer-Group__title-font-branded.svg
  wiki/
    cloud-ai.md
    empowerment.md
    computer-science.md
    design-code.md
    contributors.md

spec/
  ARCHITECTURE.md
  WORKFLOWS.md
  expressive-vainilla/         ← design system state, decisions, todos
  playground-ide/              ← playground-elements integration spec
  markdown-engine/
```

## Design System — Expressive Vainilla

Token namespace: `--ui-*`. Class namespace: `ui-*`. No Tailwind, no inline styles.

| Layer | File | Purpose |
|---|---|---|
| ref | `ui.ref.css` | Raw palette, spacing, shape primitives |
| sys | `ui.sys.css` | Semantic color roles, light/dark theme |
| type | `ui.type.css` | Typography scale, Material Symbols icon font |
| motion | `ui.motion.css` | Duration, easing, expression levels |
| comp | `ui.comp.css` | Component classes and grid API |

Theme: `data-ui-theme="dark|light|system"` on `<html>`.
Expression: `data-ui-expression="low|medium|high"` on `<html>`.

## Interactive IDE (playground-elements)

The site uses [`playground-elements`](https://github.com/google/playground-elements) for live, serverless JS coding environments — no backend required. Code runs in the browser via Service Worker + sandboxed iframe.

### How it works

- `<playground-project>` manages a virtual filesystem
- `<playground-code-editor>` provides a CodeMirror 6 editor
- `<playground-preview>` renders the sandboxed output iframe
- Calling `project.save()` re-executes all project files in the preview

### Service Worker

The playground Service Worker must be served at the **same origin** as the page.

**In Storybook** — served via `.storybook/main.js` `staticDirs`:
```js
staticDirs: [{ from: "./public", to: "/" }]
```
Files `.storybook/public/playground-service-worker.js` and `.storybook/public/playground-service-worker-proxy.html` are checked in to the repo and must be refreshed when `playground-elements` is upgraded:
```sh
cp node_modules/playground-elements/playground-service-worker.js .storybook/public/
cp node_modules/playground-elements/playground-service-worker-proxy.html .storybook/public/
```

**In Astro (wiki pages)** — serve via the Astro `public/` directory or load from unpkg:
```html
<script type="module" src="https://unpkg.com/playground-elements?module"></script>
```

See `spec/playground-ide/CONTEXT.md` for full wiring details, CSS theming bridge, and wiki authoring rules.

## UI/UX Baseline

- Google Sans / Google Sans Text is the primary type stack.
- Material Symbols Rounded (variable font) for all icons via `.ui-icon` ligature class.
- Navbar and page sections share consistent horizontal gutters.
- Theme controls: Mode `system|light|dark`, Expression `low|medium|high`.
- Homepage: hero with club cards, events section, contributors section.
- Club pages: hero header, wiki article body, right sidebar resources card.

## Important Links

- Join: <https://gdg.community.dev/gdg-queretaro/>
- Instagram: <https://www.instagram.com/dev.queretaro>
- LinkedIn: <https://www.linkedin.com/company/dev-queretaro>
- WhatsApp: <https://chat.whatsapp.com/FOeO2zm502w3oDE84EhWsV>
- GitHub org: <https://github.com/dev-clubs>

## Development

### Commands

```bash
npm install
npm run dev            # Astro dev server → :4321
npm run storybook      # Storybook dev → :6006
npm run build          # Astro static build → docs/
npm run build-storybook
npm run preview
```

### Agent / LLM Workspace Tools

MCP server config in `.mcp.json`:
- **Figma**: `@figma/mcp-server` — replace `YOUR_FIGMA_API_TOKEN` to enable
- **Storybook**: `@storybook/mcp-server`

Full agentic workflow playbooks: `spec/WORKFLOWS.md`.

## Build Output

Production build is generated in `docs/` (GitHub Pages target).
