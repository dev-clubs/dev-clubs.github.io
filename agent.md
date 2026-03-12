# Agent Instructions

> **File naming convention**
> This file is named `CLAUDE.md` for automatic pickup by Claude Code.
> Rename or symlink to `AGENTS.md` for Cursor, OpenAI Codex CLI, GitHub Copilot Workspace, and other agents that follow the OpenAI AGENTS.md convention.
> The content is intentionally provider-agnostic.

## Project

GDG Querétaro static site and **Expressive Vainilla** design system.
Output target: `docs/` (GitHub Pages). No backend. 100% static.

## Stack

| Layer | Tool |
|---|---|
| Site generator | Astro 4 |
| UI runtime | React 19 (`client:only="react"`) |
| Component sandbox | Storybook 10 |
| Unit / component tests | Vitest 4 + `@storybook/addon-vitest` |
| Browser / visual tests | Playwright via `@playwright/mcp-server` |
| Design source | Figma via `@figma/mcp-server` |
| Design system | Expressive Vainilla (vanilla CSS) |

## Key Commands

```sh
npm run dev           # Astro dev server
npm run storybook     # Storybook :6006
npm run build         # Astro → docs/
npm run build-storybook
```

## Design System Rules (non-negotiable)

1. **No inline styles.** All visual decisions live in `src/tokens/` or `src/tokens/ui.comp.css`.
2. **No Tailwind, no utility-class frameworks.** Use `ui-*` classes and `--ui-*` tokens only.
3. **No `md3-` or `--md-` namespace.** The active namespace is `ui`.
4. **Token layers** — read before touching styles:
   - `ui.ref.css` → raw palette, scale, shape primitives
   - `ui.sys.css` → semantic roles, theme switching via `data-ui-theme`
   - `ui.type.css` → typography (Google Sans headings, Menlo data/code)
   - `ui.motion.css` → easing + expression via `data-ui-expression`
   - `ui.comp.css` → component and grid API (`ui-card`, `ui-button`, etc.)
5. **Single entrypoint**: import `src/styles/expressive-vainilla.css` or `src/styles/global.css` — never import token layers individually in product code.
6. Theme attributes on `<html>`: `data-ui-theme="dark|light|system"`, `data-ui-expression="low|medium|high"`.
7. Google Sans only loads when `data-ui-font="google-sans"` is set on `<html>`.

## File Map (critical paths)

```
src/
  tokens/           ← token layers (ui.ref, ui.sys, ui.type, ui.motion, ui.comp)
  styles/           ← expressive-vainilla.css entrypoint + global.css
  components/       ← WikiEngine.jsx (only React component in production)
  layouts/          ← GDGLayout.astro, MainLayout.astro
  pages/            ← Astro routing
  stories/expressive/ ← living Storybook spec for the design system
    Elements.stories.jsx   ← interactive individual component stories (args + play)
    Components.stories.jsx ← full-page gallery view
    Overview.mdx           ← Canvas + Controls interactive docs page

spec/
  expressive-vainilla/  ← CONTEXT, DECISIONS, TEST_PLAN, STATE, TODO
  WORKFLOWS.md          ← workflow playbooks (read before starting a task)

libraries/
  design-fundamentals.md
  material_tokens.md    ← token mapping reference
  swiss_intrinsic.md

.storybook/
  preview.js    ← globalTypes: uiTheme, uiExpression; decorator sets data attributes
  manager.js    ← brand title "expressive vainilla"
```

## Storybook Taxonomy

All design-system stories live under `Expressive Vainilla/`:
- `Expressive Vainilla/Overview` — interactive Canvas + Controls docs page
- `Expressive Vainilla/Foundations`
- `Expressive Vainilla/Grid System`
- `Expressive Vainilla/Elements` — gallery view + individual interactive stories
- `Expressive Vainilla/Color Palette`
- `Expressive Vainilla/Widgets`
- `Expressive Vainilla/Dashboard Landing`

Stories with `tags: ["autodocs"]` get an auto-generated docs page with Controls.
Individual component stories in `Elements.stories.jsx` use `argTypes` + `play` functions for the Controls panel and Interactions panel.

## MCP Servers

Three MCP servers are configured in `.mcp.json`:

| Server | Use for |
|---|---|
| `@storybook/mcp-server` | Query existing stories, component args, a11y results |
| `@figma/mcp-server` | Fetch Figma frames and extract design token/layout specs |
| `@playwright/mcp-server` | Visual snapshots, interaction tests, regression checks |

> Figma MCP requires a real token to replace `YOUR_FIGMA_API_TOKEN` in `.mcp.json`.

## Agentic Workflows

See `spec/WORKFLOWS.md` for step-by-step playbooks. Short reference:

### New Component
`spec/` update → `Elements.stories.jsx` (args + argTypes + play) → `ui.comp.css` → Astro usage → Playwright snapshot

### New Site Page
Read existing `.astro` layout → create `src/pages/` file using layout → add `ui-*` markup → `npm run build`

### Bug Fix
Read the component → check token cascade → fix in token layer first, comp CSS second, markup last

### Test Run
Open Storybook → **Tests** panel → **Run all** (Vitest via addon-vitest).
Individual story `play` functions run in the **Interactions** panel.
Playwright MCP handles visual + full-page interaction tests.

## Coding Conventions

- Astro components: `.astro` extension, no client JS unless necessary
- React: only for `WikiEngine.jsx` pattern (dynamic markdown). Add `client:only="react"`.
- CSS Grid preferred over Flexbox for page-level layout. Use `repeat(auto-fit, minmax(...))` for intrinsic reflow.
- Semantic HTML first. ARIA only when semantics are insufficient.
- Responsive: mobile-first, collapse asymmetric rails below `960px`.

## Storybook Story Conventions

- All stories in `src/stories/expressive/`
- Gallery stories (`Components.stories.jsx`, `Widgets.stories.jsx`): static render, no args, `layout: "fullscreen"`
- Individual component stories (`Elements.stories.jsx`): use `args` + `argTypes` + `play`, `layout: "padded"`
- `argTypes.description` must explain which CSS class/token the arg controls
- `play` functions must test at least: visibility, focus (for interactive elements), value/state after interaction
- Import `expect`, `userEvent`, `within` from `"storybook/test"`

## What to Read First

Before starting any non-trivial task:
1. `spec/WORKFLOWS.md` — workflow for the task type
2. `spec/expressive-vainilla/CONTEXT.md` — design system mental model
3. `spec/expressive-vainilla/STATE.md` — current implementation state
4. Relevant token file in `src/tokens/`
