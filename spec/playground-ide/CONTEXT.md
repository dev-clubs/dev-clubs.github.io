# Playground IDE — Context

`playground-elements` (Google) provides serverless code execution via Service Worker + virtual URL space. No backend required. Used in two surfaces in this project:

1. **Storybook** — interactive e-learning IDE story for design and UX documentation
2. **Astro wiki** — embedded coding sandboxes in `.md` tutorial content

---

## Package

```sh
npm i playground-elements   # v0.21.x+
```

Listed in `package.json` → `dependencies` (not devDependencies — used in Storybook and potentially in wiki pages at runtime).

---

## Service Worker Setup (Storybook)

The service worker must be served at the **same origin** as the page. For Storybook:

**`.storybook/main.js`**
```js
staticDirs: [{ from: "./public", to: "/" }]
```

**`.storybook/public/`** — contains the two required static files (checked in to the repo):
- `playground-service-worker.js`
- `playground-service-worker-proxy.html`

These are copied from `node_modules/playground-elements/` and must be kept in sync when the package is upgraded:
```sh
cp node_modules/playground-elements/playground-service-worker.js .storybook/public/
cp node_modules/playground-elements/playground-service-worker-proxy.html .storybook/public/
```

Vite dep-optimizer exclusion (required to prevent bundling conflicts):
```js
// .storybook/main.js → viteFinal
config.optimizeDeps.exclude = [...(config.optimizeDeps.exclude ?? []), "playground-elements"];
```

---

## Component Model

| Element | Role |
|---|---|
| `<playground-project>` | Virtual filesystem + service worker orchestrator. Hidden from UI. |
| `<playground-code-editor>` | Standalone CodeMirror 6 editor. Connects to a project via `.project` property. |
| `<playground-file-editor>` | Editor + tab bar chrome. Use when you want playground's own header. |
| `<playground-preview>` | Sandboxed iframe that re-renders on `project.save()`. Connects via `.project`. |
| `<playground-ide>` | All-in-one: project + tab bar + editor + preview. Use for simple embeds. |

---

## Storybook IDE Story Pattern

The `IDELayout` story in `src/stories/expressive/IDE.stories.jsx` uses the **custom layout** model: our own `.ide-root` shell wrapping the Learn panel, editor panel, and preview panel. The playground components slot into the editor and preview panels.

### Wiring (React + web components)

```jsx
import "playground-elements/playground-project.js";
import "playground-elements/playground-code-editor.js";
import "playground-elements/playground-preview.js";

const projectRef = useRef(null);
const editorRef  = useRef(null);
const previewRef = useRef(null);

useEffect(() => {
  const project = projectRef.current;
  project.config = {
    files: {
      "index.html": { content: RUNTIME_HTML, hidden: true },
      "index.js":   { content: STARTER_CODE, selected: true }
    }
  };
  editorRef.current.project  = project;
  editorRef.current.filename = "index.js";
  previewRef.current.project = project;
}, []);
```

Key rules:
- **Always use refs** to set the `project` property — it is an object reference, not a string attribute.
- **`hidden: true`** on files the learner should not see or edit (e.g. the runtime HTML).
- **`selected: true`** on the file that should be open in the editor by default.
- React does not re-render web component internals; playground state is fully encapsulated.

### Runtime HTML Pattern

Each lesson has a hidden `index.html` that:
1. Defines the visual runtime environment (`drawName()`, `bounceBubbles()`, canvas setup, etc.)
2. Loads the learner's editable `index.js` via `<script type="module" src="./index.js"><\/script>`

The `<\/script>` escape is required inside JS template literals to avoid prematurely terminating the enclosing script tag during HTML parsing.

### Run Button

The **Run** button in `.ide-footer` calls `project.save()`, which triggers `playground-preview` to re-execute:

```js
const handleRun = async () => {
  setRunning(true);
  await projectRef.current?.save();
  setTimeout(() => setRunning(false), 700);
};
```

### CSS Theming Bridge

`--playground-*` custom properties are mapped to `--ui-sys-*` tokens in `ide-story.css`:

```css
:root {
  --playground-code-font-family:   var(--ui-type-font-mono);
  --playground-code-background:    var(--ui-sys-color-background);
  --playground-code-default-color: var(--ui-sys-color-on-surface);
  --playground-code-keyword-color: var(--ui-sys-color-primary);
  --playground-highlight-color:    color-mix(in srgb, var(--ui-sys-color-primary) 15%, transparent);
  --playground-border:             none;
}
```

---

## Standalone Code Editor (DevExperience)

For a non-executing editor (Markdown article editor in the DevExperience story), use `<playground-code-editor>` in **standalone mode** — no project required:

```jsx
import "playground-elements/playground-code-editor.js";

useEffect(() => {
  const editor = editorRef.current;
  editor.value = DEFAULT_CONTENT;
  const onchange = () => setContent(editor.value ?? "");
  editor.addEventListener("change", onchange);
  return () => editor.removeEventListener("change", onchange);
}, []);

// JSX
<playground-code-editor ref={editorRef} type="plaintext" line-numbers="" />
```

---

## Astro Wiki Embedding

For `.md` content in `public/wiki/`, embed a live sandbox using plain HTML within the Markdown:

```html
<playground-ide line-numbers resizable>
  <script type="sample/html" filename="index.html">
    <!doctype html>
    <body>Hello World&lt;/body>
  </script>
  <script type="sample/js" filename="index.js">
    console.log("ready");
  </script>
</playground-ide>
```

The Astro layout must load playground-elements as a module script. In `GDGLayout.astro`:
```html
<script type="module" src="/node_modules/playground-elements/playground-ide.js"></script>
```

Or use unpkg for zero-config wiki pages:
```html
<script type="module" src="https://unpkg.com/playground-elements?module"></script>
```

### Authoring Rules for Wiki

- All files must have `type="sample/html|css|js|ts"` and a `filename` attribute.
- Escape `</script>` inside sample content as `&lt;/script>`.
- Keep examples concise — they run entirely in the browser via Service Worker.
- Use `hidden` attribute on helper files so learners only see the editable file.
