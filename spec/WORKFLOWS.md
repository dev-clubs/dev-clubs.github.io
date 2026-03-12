# Agentic Development Workflows

Playbooks for Claude Code working on this codebase.
Read `CLAUDE.md` at the project root before using any workflow here.

---

## 1. New Component Workflow

Use when adding a `ui-*` component class that doesn't yet exist.

### Steps

1. **Spec first** — create or update `spec/expressive-vainilla/`:
   - Add the component to `COMPONENT_MAPPING.md`
   - Add relevant decisions to `DECISIONS.md`
   - Add the component to `TODO.md` under `now`

2. **Check existing tokens** — before writing any CSS, read:
   - `src/tokens/ui.sys.css` for surface/color roles
   - `src/tokens/ui.type.css` for any text treatment
   - `src/tokens/ui.comp.css` to see how similar components are built

3. **Write the Story first** — in `src/stories/expressive/Components.stories.jsx`
   (or a new file under `src/stories/expressive/` if it's a standalone widget):
   - Title must be `Expressive Vainilla/<Name>`
   - Export a `Default` and at least one variant
   - Use real semantic HTML in the story render function

4. **Implement in `ui.comp.css`** — add the component block after the last related component:
   - Use `--ui-sys-*` tokens for colors (never raw hex values)
   - Use `--ui-ref-*` tokens for spacing/shape primitives
   - Use `--ui-motion-*` for any transition
   - Apply BEM-lite naming: `ui-<component>`, `ui-<component>--<modifier>`, `ui-<component>__<part>`

5. **Verify in Storybook** — run `npm run storybook`, open the story:
   - Toggle `Theme` toolbar (light / dark / system)
   - Toggle `Expression` toolbar (low / medium / high)
   - Check focus-visible state with keyboard navigation

6. **Playwright snapshot** (optional but recommended for new components):
   ```
   # via Playwright MCP server
   navigate to http://localhost:6006/iframe.html?id=expressive-vainilla-<name>--default
   screenshot
   ```

7. **Update STATE.md** — move the item from `next` to `done`.

---

## 2. New Astro Page Workflow

Use when adding a new route to the static site.

### Steps

1. Read the existing layout: `src/layouts/GDGLayout.astro` or `src/layouts/MainLayout.astro`.

2. Create `src/pages/<route>.astro` using the appropriate layout.

3. Build the page content using only `ui-*` classes and `--ui-*` tokens.
   - Hero sections: `ui-card--hero`
   - Content grids: `ui-grid` or CSS Grid with `--ui-ref-spacing-*`
   - Typography: `ui-display`, `ui-headline`, `ui-body`, `ui-label`

4. If the page needs wiki markdown routing, update `src/pages/[...slug].astro` instead of creating another page file.
   - Keep URL mapping aligned with the wiki route contract in `spec/markdown-engine/CONTEXT.md`.
   - Reuse `ClubPage.astro` so the wiki UI shell stays unchanged.

5. Run `npm run build` and confirm `docs/` output is correct.

6. Run `npm run preview` for final visual check.

---

## 3. Design Token Edit Workflow

Use when changing colors, spacing, shape, or motion at the system level.

### Steps

1. Identify the correct token layer:
   | What you're changing | File |
   |---|---|
   | Raw color palette | `src/tokens/ui.ref.css` |
   | Semantic color roles, theme | `src/tokens/ui.sys.css` |
   | Typography scale | `src/tokens/ui.type.css` |
   | Animation duration/easing | `src/tokens/ui.motion.css` |
   | Component-specific overrides | `src/tokens/ui.comp.css` |

2. Edit only the identified layer. Do not edit raw values in `ui.sys.css` — trace them to `ui.ref.css`.

3. Validate in Storybook `Expressive Vainilla/Foundations` story — both themes must still look correct.

4. Record the decision in `spec/expressive-vainilla/DECISIONS.md`.

---

## 4. Figma-to-Component Workflow

Use when a Figma design is provided as the source of truth.

### Steps

1. **Fetch the Figma frame** via the `@figma/mcp-server`:
   - Extract layout structure, spacing values, color hex codes
   - Map hex codes to existing `--ui-ref-color-*` tokens using `libraries/material_tokens.md`

2. **Check if a matching `ui-*` class already exists** — use Storybook MCP:
   ```
   # via @storybook/mcp-server
   list stories matching "Expressive Vainilla/Components"
   ```
   If it exists, compose it; don't duplicate.

3. If new, follow **New Component Workflow** above.

4. Compare Storybook output to Figma using Playwright MCP screenshot.

---

## 5. Bug Fix / Style Correction Workflow

### Steps

1. Read the affected component's markup and CSS.

2. Identify the token layer responsible:
   - Wrong color → `ui.sys.css` or `ui.ref.css`
   - Wrong spacing → `ui.ref.css`
   - Wrong component shape → `ui.comp.css`
   - Wrong animation → `ui.motion.css`

3. Fix at the token layer, not by overriding in markup.

4. If a local override is truly necessary, add it as a modifier class (`ui-<component>--fix`) in `ui.comp.css`, never as inline style.

5. Confirm fix in both light and dark themes.

---

## 6. Test Workflow

### Component tests (Vitest + Storybook)

```sh
npm run storybook   # keep running
npx vitest          # runs tests via @storybook/addon-vitest
```

Or in Storybook UI: open the **Tests** panel, click **Run all**.

### A11y tests

Storybook addon-a11y runs automatically per story. Results appear in the **Accessibility** panel.
Current policy: `test: "todo"` (violations flagged, not blocking).
To enforce: change `.storybook/preview.js` → `a11y.test: "error"`.

### Visual regression (Playwright MCP)

```
navigate http://localhost:6006
screenshot  ← baseline
# make change
screenshot  ← compare
```

Use for:
- New component sign-off
- Theme toggle verification (light/dark)
- Mobile width collapse check (set viewport to 375px)

### Full build sanity

```sh
npm run build           # Astro → docs/
npm run build-storybook # Storybook static build
```

Both must succeed before merging to `main`.

---

## 7. Playground IDE Lesson Workflow

Use when adding a new interactive coding lesson to the IDE story or to a wiki article.

### Adding a lesson to the Storybook IDE story

1. **Define lesson data** at the top of `IDE.stories.jsx`:
   ```js
   const LESSON = {
     track: "Track Name",
     number: N,
     total: T,
     title: "Lesson Title",
     instructions: [{ done: false, text: "Step description." }],
     starterCode: `// learner-editable JS`
   };
   ```

2. **Define the runtime HTML** — a hidden `index.html` that sets up the visual environment and loads `index.js`:
   ```js
   const RUNTIME_HTML = `<!doctype html>
   <html><head><style>/* canvas styles */</style></head>
   <body>
     <script>
       function drawName(msg) { /* render output */ }
       function bounceBubbles() { /* visual effect */ }
     <\/script>
     <script type="module" src="./index.js"><\/script>
   </body></html>`;
   ```
   - Escape `</script>` as `<\/script>` inside JS template literals.
   - Keep the runtime HTML minimal — it is a lesson scaffold, not a full app.

3. **Wire the project** in `useEffect`:
   ```js
   project.config = {
     files: {
       "index.html": { content: RUNTIME_HTML, hidden: true },
       "index.js":   { content: LESSON.starterCode, selected: true }
     }
   };
   editorRef.current.project  = project;
   editorRef.current.filename = "index.js";
   previewRef.current.project = project;
   ```

4. **Run button** calls `project.save()` to trigger re-execution. No polling or manual iframe reload needed.

5. **Verify**:
   - Open `Expressive Vainilla/IDE / 3-Panel Layout` in Storybook
   - Edit `index.js` in the editor panel
   - Click **Run** — the preview iframe should update

### Adding a playground sandbox to a wiki article

1. Embed directly in the `.md` file using inline HTML:
   ```html
   <playground-ide line-numbers resizable>
     <script type="sample/html" filename="index.html">
       <!doctype html><body>Hello&lt;/body>
     </script>
     <script type="sample/js" filename="index.js">
       console.log("ready");
     </script>
   </playground-ide>
   ```

2. The Astro layout must register the custom elements (see `spec/playground-ide/CONTEXT.md`).

3. Escape all `</script>` occurrences inside sample content as `&lt;/script>`.

---

## 8. Session Handoff Workflow

When ending a session on an in-progress feature:

1. Update `spec/expressive-vainilla/STATE.md`:
   - Move completed items to `done`
   - Add new findings to `in progress` or `blocked`

2. Update `spec/expressive-vainilla/TODO.md`:
   - Move finished items from `now` to (removed)
   - Add new items as needed

3. Append a dated entry to `spec/expressive-vainilla/DEVELOPMENT_LOG.md`.

4. Commit with a descriptive message describing what is done and what is next.
