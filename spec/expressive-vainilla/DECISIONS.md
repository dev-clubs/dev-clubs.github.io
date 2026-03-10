# decisions

## 2026-03-07 - Replace `md` namespace with `ui`

### Context

The requested refactor explicitly rejects Material-oriented naming in the implementation API.

### Options Considered

- keep `md` names and only rebrand stories
- alias `md` to `ui`
- replace the active implementation namespace with `ui`

### Decision

Replace the active implementation namespace with `ui` and delete the old `material` Storybook files.

### Consequences

- the public token API is clearer and less brand-bound
- migration is cleaner for future vanilla HTML adoption
- any downstream code using the removed `material.css` file must move to `expressive-vainilla.css`

## 2026-03-07 - Use split token layers

### Context

The design system must be maintainable and easy to reason about.

### Options Considered

- one monolithic CSS file
- split tokens with a small style entrypoint

### Decision

Create `ui.ref`, `ui.sys`, `ui.type`, `ui.motion`, and `ui.comp` layers, composed by `src/styles/expressive-vainilla.css`.

### Consequences

- token responsibilities are explicit
- future theme expansion is easier
- Storybook and site integration both use the same entrypoint

## 2026-03-08 - Use playground-elements for IDE story execution

### Context

The IDE story originally used a React `useState` textarea + simulated preview (regex-extracted variable value). This was adequate for layout design but could not demonstrate real code execution.

### Options Considered

- Keep simulated preview (state only, no real execution)
- Use Monaco Editor (heavy, no sandboxed preview)
- Use playground-elements (Google, serverless, CodeMirror 6, Service Worker sandbox)

### Decision

Use `playground-elements`. The custom layout (Learn | Editor | Preview panels) is preserved using our `.ide-root` shell. The playground components (`<playground-project>`, `<playground-code-editor>`, `<playground-preview>`) slot into the editor and preview panels without their own chrome. The service worker is served from `.storybook/public/` via Storybook `staticDirs`.

### Consequences

- The IDE story executes real JS in a sandboxed iframe
- Learner code (`index.js`) runs against a hidden `index.html` runtime that defines the lesson environment
- The Run button calls `project.save()` to trigger re-execution
- `--playground-*` CSS tokens are bridged to `--ui-sys-*` in `ide-story.css` so the editor matches the design system theme
- `.storybook/public/playground-service-worker.js` must be updated when the package is bumped

## 2026-03-08 - Standalone playground-code-editor for DevExperience

### Context

The DevExperience / Article Editor story needed a real code editor for the Markdown authoring panel, but does not need code execution.

### Decision

Use `<playground-code-editor>` in standalone mode (`type="plaintext"`) with `value` and `change` event listener wired to React state. No `<playground-project>` needed. The parse view remains a live React render driven by the `change` event.

### Consequences

- The editor gives CodeMirror 6 UX (cursor, selection, keyboard shortcuts) without Service Worker overhead
- The parse view updates in real time as the user edits

## 2026-03-07 - Treat `libraries/expressive.html` as visual source of truth

### Context

The requested token directory is missing, but the expressive reference page contains the clearest visual evidence for layout, grouping, and rhythm.

### Options Considered

- stop and block on missing files
- infer only from current implementation
- use the available Material token map plus expressive page evidence

### Decision

Use `libraries/material_tokens.md` for semantic token mapping and `libraries/expressive.html` for expressive layout and presentation direction.

### Consequences

- the refactor remains grounded in actual workspace files
- documentation must explicitly record the missing source directory
