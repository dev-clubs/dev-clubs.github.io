# state

## done

- `ui` token architecture exists under `src/tokens/`
- `src/styles/expressive-vainilla.css` is the new design-system entrypoint
- Storybook preview uses `uiTheme` and `uiExpression`
- Storybook manager brand config was added for `expressive vainilla`
- `Expressive Vainilla/*` stories exist and old material stories were removed
- `Expressive Vainilla/Homepage` now reinterprets `src/pages/index.astro` as an expressive Storybook story
- root project documentation files were created
- `npm run build-storybook` passes
- `npm run build` passes
- active `md` implementation references were removed from `src` and `.storybook`
- `Expressive Vainilla/IDE` story set: App Bar, Footer Bar, Lesson Progress, 3-Panel Layout
- `Expressive Vainilla/Dev Experience` story set: Article Format, Code Tests, Article Editor
- `Expressive Vainilla/Navigation` story set: App Bar, Nav Bar, Nav Rail (static + interactive)
- `playground-elements` integrated: real CodeMirror editor + sandboxed JS preview in IDE story
- `playground-service-worker.js` served via `.storybook/public/` + `staticDirs` config
- `--playground-*` CSS tokens bridged to `--ui-sys-*` in `ide-story.css`
- `DevExperience / Article Editor` uses `<playground-code-editor>` standalone for Markdown editing
- Material Symbols Rounded (variable font) integrated in `ui.type.css`; all icons use `.ui-icon` ligature pattern

## in progress

- visual review of IDE story: verify Run button executes JS in the preview iframe
- visual review of DevExperience story: verify parse view updates on editor change

## blocked

- the prompt referenced `libraries/material_tokens/`, but only `libraries/material_tokens.md` exists in this repo

## next

- port the homepage Storybook implementation into `src/pages/index.astro` if design-system parity is desired
- add more lesson content to the IDE story (multiple lessons, lesson navigation)
- visual regression snapshots for IDE and DevExperience stories
- optimize or replace the heavy reference images used in expressive Storybook stories

## source of truth

- token intent: `libraries/material_tokens.md`
- expressive direction: `libraries/expressive.html`
- active implementation: `src/tokens/*.css`, `src/styles/expressive-vainilla.css`, `src/stories/expressive/*`
- session handoff: `STATE.md`, `DEVELOPMENT_LOG.md`, `TODO.md`
