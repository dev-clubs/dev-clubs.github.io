import React, { useState, useEffect, useRef } from "react";
import { expect, within } from "storybook/test";
import "./expressive-story.css";
import "./ide-story.css";
import "playground-elements/playground-project.js";
import "playground-elements/playground-code-editor.js";
import "playground-elements/playground-preview.js";

export default {
  title: "Learning/IDE",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};

// ─── Sample lesson content ────────────────────────────────────────────────────

const LESSON = {
  track: "Code Foundations",
  number: 3,
  total: 7,
  title: "Changing Variables",
  instructions: [
    {
      done: false,
      text: "Change the text stored in the single quotes ('') in the message variable from 'Change the message!' to a new message."
    }
  ],
  starterCode: `// Change the value of the message variable to
// change the text on screen
message = 'Change the message!';

drawName(message);
bounceBubbles();`
};

// Hidden HTML runtime — defines drawName() and bounceBubbles(), then loads index.js
const RUNTIME_HTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #ffffff;
      font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
      overflow: hidden;
    }
    #output {
      font-size: clamp(1.8rem, 5vw, 3.5rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      color: #0d0d0d;
      text-align: center;
      padding: 1rem;
      position: relative;
      z-index: 1;
    }
    .bubble {
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      animation: rise linear forwards;
    }
    @keyframes rise {
      from { transform: translateY(110vh) scale(0.3); opacity: 0.8; }
      80%  { opacity: 0.6; }
      to   { transform: translateY(-10vh) scale(1); opacity: 0; }
    }
  </style>
</head>
<body>
  <div id="output">…</div>
  <script>
    function drawName(msg) {
      document.getElementById('output').textContent = msg;
    }
    function bounceBubbles() {
      const colors = ['#4285f4', '#ea4335', '#fbbc04', '#34a853'];
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          const b = document.createElement('div');
          b.className = 'bubble';
          const size = 24 + Math.random() * 36;
          b.style.cssText =
            'width:' + size + 'px;height:' + size + 'px;' +
            'left:' + (10 + Math.random() * 80) + '%;' +
            'bottom:-' + size + 'px;' +
            'background:' + colors[i % 4] + ';' +
            'animation-duration:' + (2.5 + Math.random() * 2) + 's;';
          document.body.appendChild(b);
          setTimeout(() => b.remove(), 5000);
        }, i * 180);
      }
    }
  </script>
  <script type="module" src="./index.js"><\/script>
</body>
</html>`;

// ─── IDE Layout ───────────────────────────────────────────────────────────────

export const IDELayout = {
  name: "IDE / 3-Panel Layout",
  parameters: { controls: { disable: true } },
  render: () => {
    const projectRef = useRef(null);
    const editorRef = useRef(null);
    const previewRef = useRef(null);
    const [running, setRunning] = useState(false);
    const [ready, setReady] = useState(false);

    // Wire up playground-project config and connect editor + preview
    useEffect(() => {
      const project = projectRef.current;
      const editor = editorRef.current;
      const preview = previewRef.current;
      if (!project || !editor || !preview) return;

      project.config = {
        files: {
          "index.html": { content: RUNTIME_HTML, hidden: true },
          "index.js": { content: LESSON.starterCode, selected: true }
        }
      };

      editor.project = project;
      editor.filename = "index.js";
      preview.project = project;

      setReady(true);
    }, []);

    const handleRun = async () => {
      const project = projectRef.current;
      if (!project) return;
      setRunning(true);
      // save() triggers the preview to re-execute the project files
      if (typeof project.save === "function") {
        await project.save();
      }
      setTimeout(() => setRunning(false), 700);
    };

    return (
      <div className="ide-root">
        {/* Hidden playground project (manages virtual filesystem) */}
        <playground-project ref={projectRef} style={{ display: "none" }} />

        {/* ── Top chrome ─────────────────────────────────── */}
        <header className="ide-app-bar">
          <span className="ide-app-bar__brand">
            <span className="ui-icon ui-icon--sm" aria-hidden="true">code</span>
            <span className="ide-app-bar__track">{LESSON.track}</span>
          </span>
          <span className="ide-app-bar__title">{LESSON.title}</span>
          <div className="ide-app-bar__actions">
            <button className="ui-icon-button" type="button" aria-label="Help">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">help_outline</span>
            </button>
            <button className="ui-icon-button" type="button" aria-label="Settings">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">settings</span>
            </button>
          </div>
        </header>

        {/* ── Three-panel body ────────────────────────────── */}
        <div className="ide-body">

          {/* Panel 1 — Learn / Instructions */}
          <aside className="ide-panel ide-panel--learn" aria-label="Learn panel">
            <header className="ide-panel__header">
              <span className="ui-label">Learn</span>
            </header>
            <div className="ide-panel__content">
              <div className="ide-lesson-meta">
                <span className="ui-kicker">{LESSON.track}</span>
              </div>
              <h2 className="ide-lesson-title">
                {LESSON.number}. {LESSON.title}
              </h2>
              <div className="ide-lesson-body">
                <p className="ui-body-sm">
                  Now you'll use a <em>variable</em> to quickly change your program. Variables are used to store some kind of data
                  in a program that can be referenced elsewhere (often more than once).
                </p>
                <p className="ui-body-sm">
                  Variables look different in different programming languages. In the code editor, there's a line that looks like this:
                </p>
                <pre className="ui-snippet ide-inline-snippet">message = 'Change the message!';</pre>
                <p className="ui-body-sm">
                  This line creates a <code className="ui-code">message</code> variable and stores the{" "}
                  <code className="ui-code">Change the message!</code> text in it.
                </p>
                <p className="ui-body-sm">
                  Later in the program, <code className="ui-code">message</code> is used to reference that text inside{" "}
                  <code className="ui-code">drawName()</code>, meaning that the <code className="ui-code">message</code> text
                  appears on the screen.
                </p>
              </div>

              <div className="ide-instructions">
                <h3 className="ide-instructions__heading">
                  <span className="ui-icon ui-icon--sm" aria-hidden="true">checklist</span>
                  Instructions
                </h3>
                <ol className="ide-instructions__list">
                  {LESSON.instructions.map((item, i) => (
                    <li key={i} className={`ide-instruction${item.done ? " ide-instruction--done" : ""}`}>
                      <span className="ide-instruction__check" aria-hidden="true">
                        <span className="ui-icon ui-icon--sm">{item.done ? "check_circle" : "radio_button_unchecked"}</span>
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>

          {/* Panel 2 — Code Editor (playground-code-editor) */}
          <section className="ide-panel ide-panel--editor" aria-label="Code editor">
            <header className="ide-panel__header">
              <div className="ide-tab ide-tab--active">
                <span className="ui-icon ui-icon--sm" aria-hidden="true">javascript</span>
                index.js
              </div>
              <span className="ide-panel__actions">
                <button className="ui-icon-button" type="button" aria-label="Expand editor">
                  <span className="ui-icon ui-icon--sm" aria-hidden="true">open_in_full</span>
                </button>
              </span>
            </header>
            <playground-code-editor
              ref={editorRef}
              line-numbers=""
              className="ide-pg-editor"
              aria-label="Code editor"
            />
          </section>

          {/* Panel 3 — Preview (playground-preview) */}
          <section className="ide-panel ide-panel--preview" aria-label="Preview">
            <header className="ide-panel__header ide-panel__header--browser">
              <button className="ui-icon-button" type="button" aria-label="Back" disabled>
                <span className="ui-icon ui-icon--sm" aria-hidden="true">arrow_back</span>
              </button>
              <button className="ui-icon-button" type="button" aria-label="Reload" disabled>
                <span className="ui-icon ui-icon--sm" aria-hidden="true">refresh</span>
              </button>
              <div className="ide-address-bar">
                <span>http://localhost:8000/</span>
              </div>
              <button className="ui-icon-button" type="button" aria-label="Open in new tab">
                <span className="ui-icon ui-icon--sm" aria-hidden="true">open_in_new</span>
              </button>
            </header>
            <playground-preview
              ref={previewRef}
              className="ide-pg-preview"
            />
          </section>
        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <footer className="ide-footer">
          <button
            className="ui-button ui-button--primary ide-run-btn"
            type="button"
            onClick={handleRun}
            disabled={running || !ready}
          >
            {running
              ? <><span className="ui-loading ui-loading--sm" role="status" aria-label="Running" />&nbsp;Running…</>
              : <><span className="ui-icon ui-icon--sm" aria-hidden="true">play_arrow</span>&nbsp;Run</>
            }
          </button>

          <div className="ide-footer__actions">
            <button className="ui-icon-button" type="button" aria-label="Refresh preview">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">refresh</span>
            </button>
            <button className="ui-icon-button" type="button" aria-label="Copy share link">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">share</span>
            </button>
          </div>

          <span className="ide-footer__spacer" />

          <div className="ide-footer__nav">
            <button className="ui-button ui-button--ghost" type="button">Back</button>
            <span className="ide-lesson-counter">
              {LESSON.number}/{LESSON.total}
            </span>
            <button className="ui-button ui-button--primary" type="button">Next</button>
          </div>
        </footer>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: /Run/i })).toBeVisible();
    await expect(canvas.getByLabelText("Code editor")).toBeDefined();
  }
};

// ─── App Bar only ─────────────────────────────────────────────────────────────

export const IDEAppBar = {
  name: "IDE / App Bar",
  parameters: { controls: { disable: true } },
  render: () => (
    <header className="ide-app-bar" style={{ position: "static" }}>
      <span className="ide-app-bar__brand">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">code</span>
        <span className="ide-app-bar__track">Code Foundations</span>
      </span>
      <span className="ide-app-bar__title">Changing Variables</span>
      <div className="ide-app-bar__actions">
        <button className="ui-icon-button" type="button" aria-label="Help">
          <span className="ui-icon ui-icon--sm" aria-hidden="true">help_outline</span>
        </button>
        <button className="ui-icon-button" type="button" aria-label="Settings">
          <span className="ui-icon ui-icon--sm" aria-hidden="true">settings</span>
        </button>
      </div>
    </header>
  )
};

// ─── Footer bar only ──────────────────────────────────────────────────────────

export const IDEFooter = {
  name: "IDE / Footer Bar",
  parameters: { controls: { disable: true } },
  render: () => (
    <footer className="ide-footer" style={{ position: "static", borderTop: "var(--ui-sys-border-strong)" }}>
      <button className="ui-button ui-button--primary ide-run-btn" type="button">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">play_arrow</span>
        &nbsp;Run
      </button>
      <div className="ide-footer__actions">
        <button className="ui-icon-button" type="button" aria-label="Refresh preview">
          <span className="ui-icon ui-icon--sm" aria-hidden="true">refresh</span>
        </button>
        <button className="ui-icon-button" type="button" aria-label="Copy share link">
          <span className="ui-icon ui-icon--sm" aria-hidden="true">share</span>
        </button>
      </div>
      <span className="ide-footer__spacer" />
      <div className="ide-footer__nav">
        <button className="ui-button ui-button--ghost" type="button">Back</button>
        <span className="ide-lesson-counter">3/7</span>
        <button className="ui-button ui-button--primary" type="button">Next</button>
      </div>
    </footer>
  )
};

// ─── Progress indicator ───────────────────────────────────────────────────────

export const LessonProgress = {
  name: "IDE / Lesson Progress",
  argTypes: {
    current: { control: "number", description: "Current lesson number." },
    total: { control: "number", description: "Total lessons in track." }
  },
  args: { current: 3, total: 7 },
  render: ({ current, total }) => (
    <div className="ui-card ui-stack-sm" style={{ maxWidth: "24rem", padding: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="ui-label">Track progress</span>
        <span className="ui-mono">{current}/{total}</span>
      </div>
      <div className="ui-progress" role="progressbar" aria-valuenow={current} aria-valuemin={0} aria-valuemax={total}>
        <span style={{ width: `${(current / total) * 100}%` }} />
      </div>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`ide-lesson-dot${i < current ? " ide-lesson-dot--done" : i === current - 1 ? " ide-lesson-dot--active" : ""}`}
            aria-label={`Lesson ${i + 1}${i < current ? " completed" : ""}`}
          >
            {i < current
              ? <span className="ui-icon ui-icon--sm" aria-hidden="true">check</span>
              : i + 1}
          </span>
        ))}
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("progressbar")).toBeVisible();
  }
};
