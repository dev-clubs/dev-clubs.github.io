import React, { useState, useEffect, useRef } from "react";
import { expect, within } from "storybook/test";
import "./expressive-story.css";
import "./ide-story.css";
import "playground-elements/playground-code-editor.js";

export default {
  title: "Learning/Dev Experience",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};

// ─── Markdown article schema ───────────────────────────────────────────────────

const ARTICLE_FRONTMATTER = `---
title: "Changing Variables"
lesson: 3
track: "Code Foundations"
tags: ["javascript", "variables", "beginner"]
starter_code: "lesson-03-starter.js"
solution_code: "lesson-03-solution.js"
---`;

const ARTICLE_BODY = `## Concept

Variables are used to store data in a program that can be referenced
elsewhere — often more than once.

\`\`\`js
message = 'Change the message!';
\`\`\`

Later in the program, \`message\` is used inside \`drawName()\`,
meaning the text stored in the variable appears on screen.

## Instructions

1. Change the text stored in the single quotes (\`''\`) in the \`message\`
   variable from \`'Change the message!'\` to a new message.

\`\`\`js test
// Starter
message = 'Change the message!';

// Expected: message is not the default text
assert(message !== 'Change the message!', 'Update the message variable.');

// Expected: drawName was called with the new value
assert(typeof message === 'string', 'message must be a string.');
\`\`\`

## Key Terms

- **Variable** — a named container for a value that can change.
- **String** — text data, enclosed in single or double quotes.`;

const TEST_SCHEMA_LINES = [
  { type: "comment", text: "// Starter code context" },
  { type: "code", text: "message = 'Change the message!';" },
  { type: "blank", text: "" },
  { type: "comment", text: "// assert(condition, failMessage)" },
  { type: "assert", text: "assert(message !== 'Change the message!', …);" },
  { type: "assert", text: "assert(typeof message === 'string', …);" },
];

const DECISION_LOG = [
  { token: "--ui-icon-fill", decision: "CSS custom property drives FILL axis", layer: "type" },
  { token: ".ui-icon--sm", decision: "opsz:20 for inline / panel-header icons", layer: "type" },
  { token: ".ide-panel", decision: "3-col grid in ide-story.css only", layer: "story" },
  { token: ".ide-run-btn", decision: "Primary button + icon gap override", layer: "story" },
];

// ─── Article Format ───────────────────────────────────────────────────────────

export const ArticleFormat = {
  name: "Article / Markdown Format",
  parameters: { controls: { disable: true } },
  render: () => (
    <main className="ui-root ev-page">
      <div className="ui-shell ev-shell">
        <section className="ui-grid-12 ev-hero">
          <header className="ev-hero__main">
            <span className="ui-kicker">Developer Experience</span>
            <h1 className="ui-display">Tutorial Article Schema</h1>
            <p className="ui-body ev-card-copy">
              Every lesson is a single <code className="ui-code">.md</code> file with YAML front matter +
              fenced code blocks. The IDE parses front matter for metadata and extracts{" "}
              <code className="ui-code">```js test</code> blocks to run assertions.
            </p>
          </header>
          <aside className="ev-hero__aside">
            <article className="ui-card ui-stack-sm">
              <span className="ui-label">File convention</span>
              <div className="ev-mono-stack">
                <code className="ui-code">content/tracks/{"{"}track-slug{"}"}/{"{"}NN{"}"}-{"{"}slug{"}"}.md</code>
              </div>
              <div className="ui-cluster" style={{ marginTop: "0.25rem" }}>
                <span className="ui-note ui-note--primary">YAML front matter</span>
                <span className="ui-note ui-note--secondary">Fenced code blocks</span>
              </div>
            </article>
          </aside>
        </section>

        <section className="ev-elements-grid">
          {/* Front matter */}
          <article className="ui-card ui-stack-sm">
            <span className="ui-label">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">description</span>
              &nbsp;Front Matter
            </span>
            <pre className="ui-snippet" style={{ fontSize: "0.75rem" }}>{ARTICLE_FRONTMATTER}</pre>
            <div className="dxp-field-table">
              {[
                ["title", "string", "Shown in app bar + nav"],
                ["lesson", "number", "Lesson order within track"],
                ["track", "string", "Parent track slug"],
                ["tags", "array", "Search / filter metadata"],
                ["starter_code", "string", "Relative path to starter .js"],
                ["solution_code", "string", "Relative path to solution .js"],
              ].map(([field, type, desc]) => (
                <div key={field} className="dxp-field-row">
                  <code className="ui-code">{field}</code>
                  <span className="ui-chip ui-chip--quiet">{type}</span>
                  <span className="ui-body-sm">{desc}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Body sections */}
          <article className="ui-card ui-stack-sm">
            <span className="ui-label">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">article</span>
              &nbsp;Article Body
            </span>
            <pre className="ui-snippet" style={{ fontSize: "0.72rem", maxHeight: "22rem", overflowY: "auto" }}>
              {ARTICLE_BODY}
            </pre>
          </article>

          {/* Section rules */}
          <article className="ui-card ui-stack-sm">
            <span className="ui-label">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">rule</span>
              &nbsp;Section Rules
            </span>
            <div className="ev-rule-list">
              {[
                "## Concept — Required. Explain the idea before the code.",
                "## Instructions — Required. Numbered list. Each step maps to one assert.",
                "```js test — Required. Fenced block that the test runner evaluates.",
                "## Key Terms — Optional. Glossary block rendered as definition list.",
                "## Hint — Optional. Shown when learner clicks 'Get a hint'.",
              ].map((rule) => (
                <div key={rule} className="ev-rule-item">
                  <p className="ui-body-sm">{rule}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
};

// ─── Code Test Format ─────────────────────────────────────────────────────────

export const CodeTestFormat = {
  name: "Code Tests / Assert Schema",
  parameters: { controls: { disable: true } },
  render: () => (
    <main className="ui-root ev-page">
      <div className="ui-shell ev-shell">
        <section className="ui-grid-12 ev-hero">
          <header className="ev-hero__main">
            <span className="ui-kicker">Code Tests</span>
            <h1 className="ui-headline">Writing assertions for the test runner.</h1>
            <p className="ui-body ev-card-copy">
              Tests live inside a <code className="ui-code">```js test</code> fenced block in the lesson{" "}
              <code className="ui-code">.md</code> file. The runner evaluates the learner's code first,
              then runs each <code className="ui-code">assert()</code> in order. Failure stops the run and
              highlights the matching instruction step.
            </p>
          </header>
          <aside className="ev-hero__aside">
            <article className="ui-card ui-stack-sm">
              <span className="ui-label">assert() signature</span>
              <pre className="ui-snippet" style={{ fontSize: "0.75rem" }}>{`assert(
  condition: boolean,
  failMessage: string
)`}</pre>
            </article>
          </aside>
        </section>

        <section className="ev-elements-grid">
          {/* Annotated test block */}
          <article className="ui-card ui-stack-sm" style={{ gridColumn: "span 2" }}>
            <span className="ui-label">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">code_blocks</span>
              &nbsp;Annotated Test Block
            </span>
            <div className="dxp-test-block">
              {TEST_SCHEMA_LINES.map((line, i) => (
                <div key={i} className={`dxp-test-line dxp-test-line--${line.type}`}>
                  <span className="dxp-test-line__gutter">{line.type !== "blank" ? i + 1 : ""}</span>
                  <span className="dxp-test-line__badge">{line.type}</span>
                  <code className="dxp-test-line__code">{line.text}</code>
                </div>
              ))}
            </div>
          </article>

          {/* Rules */}
          <article className="ui-card ui-stack-sm">
            <span className="ui-label">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">checklist</span>
              &nbsp;Test Writing Rules
            </span>
            <div className="ev-rule-list">
              {[
                "One assert per instruction step — they map 1-to-1.",
                "Conditions must use only the learner's variable scope — no imports.",
                "failMessage is shown verbatim in the error UI; keep it to ≤ 12 words.",
                "Order matters — the runner stops on first failure.",
                "Never test implementation details; test observable outputs only.",
              ].map((rule) => (
                <div key={rule} className="ev-rule-item">
                  <p className="ui-body-sm">{rule}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Test states */}
          <article className="ui-card ui-stack-sm">
            <span className="ui-label">
              <span className="ui-icon ui-icon--sm" aria-hidden="true">task_alt</span>
              &nbsp;Test States
            </span>
            <div className="ui-widget__list">
              {[
                { state: "idle", icon: "radio_button_unchecked", note: "Not yet run", color: "muted" },
                { state: "running", icon: "pending", note: "Evaluating…", color: "secondary" },
                { state: "pass", icon: "check_circle", note: "Assertion passed", color: "tertiary" },
                { state: "fail", icon: "error", note: "Assertion failed", color: "danger" },
              ].map(({ state, icon, note, color }) => (
                <div key={state} className="ui-widget__item">
                  <span className={`ui-icon ui-icon--sm dxp-state--${color}`} aria-hidden="true">{icon}</span>
                  <span className="ui-mono">{state}</span>
                  <span className="ui-body-sm">{note}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
};

// ─── Live Article Editor ──────────────────────────────────────────────────────

const DEFAULT_MD = `---
title: "My Lesson"
lesson: 1
track: "Getting Started"
---

## Concept

Write your concept here...

## Instructions

1. Do the first thing.

\`\`\`js test
assert(true, 'This always passes.');
\`\`\``;

export const ArticleEditor = {
  name: "Article / Live Editor",
  parameters: { controls: { disable: true } },
  render: () => {
    const editorRef = useRef(null);
    const [md, setMd] = useState(DEFAULT_MD);

    // Wire up playground-code-editor value + change listener
    useEffect(() => {
      const editor = editorRef.current;
      if (!editor) return;
      editor.value = DEFAULT_MD;
      const onchange = () => setMd(editor.value ?? "");
      editor.addEventListener("change", onchange);
      return () => editor.removeEventListener("change", onchange);
    }, []);

    const lines = md.split("\n");
    const inFrontmatter = (i) => {
      const start = lines.findIndex((l) => l.trim() === "---");
      const end = lines.findIndex((l, idx) => idx > start && l.trim() === "---");
      return i > start && i < end;
    };

    return (
      <main className="ui-root ev-page">
        <div className="ui-shell ev-shell">
          <section className="ui-grid-12 ev-hero">
            <header className="ev-hero__main">
              <span className="ui-kicker">Live Preview</span>
              <h1 className="ui-headline">Article Editor</h1>
              <p className="ui-body ev-card-copy">
                Edit the Markdown on the left. The right panel shows a simplified parse view —
                front matter fields, sections, and detected test blocks.
              </p>
            </header>
          </section>

          <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {/* Editor — playground-code-editor for proper syntax experience */}
            <article className="ui-card" style={{ padding: 0, overflow: "hidden" }}>
              <header className="ide-panel__header">
                <div className="ide-tab ide-tab--active">
                  <span className="ui-icon ui-icon--sm" aria-hidden="true">description</span>
                  lesson.md
                </div>
              </header>
              <playground-code-editor
                ref={editorRef}
                type="plaintext"
                line-numbers=""
                className="dxp-md-editor"
                aria-label="Markdown article editor"
              />
            </article>

            {/* Parse view — live, driven by editor onChange */}
            <article className="ui-card ui-stack-sm">
              <span className="ui-label">
                <span className="ui-icon ui-icon--sm" aria-hidden="true">account_tree</span>
                &nbsp;Parse View
              </span>
              <div className="dxp-parse-view">
                {lines.map((line, i) => {
                  let tag = "text";
                  if (line.trim() === "---") tag = "fence";
                  else if (inFrontmatter(i)) tag = "frontmatter";
                  else if (line.startsWith("## ")) tag = "h2";
                  else if (line.startsWith("```js test")) tag = "test-open";
                  else if (line.startsWith("```") && tag !== "test-open") tag = "code-fence";
                  else if (line.startsWith("assert(")) tag = "assert";
                  else if (line.startsWith("1.") || line.match(/^\d+\./)) tag = "instruction";
                  else if (line.trim() === "") tag = "blank";
                  return (
                    <div key={i} className={`dxp-parse-row dxp-parse-row--${tag}`}>
                      <span className="dxp-parse-row__num">{i + 1}</span>
                      <span className="dxp-parse-row__tag">{tag}</span>
                      <span className="dxp-parse-row__text">{line || " "}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          </section>

          {/* Token decision log */}
          <section>
            <article className="ui-card ui-stack-sm">
              <span className="ui-label">
                <span className="ui-icon ui-icon--sm" aria-hidden="true">history</span>
                &nbsp;Token Decision Log — IDE additions
              </span>
              <div className="ui-table-wrap">
                <table className="ui-table">
                  <thead>
                    <tr>
                      <th>Token / Class</th>
                      <th>Decision</th>
                      <th>Layer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DECISION_LOG.map(({ token, decision, layer }) => (
                      <tr key={token}>
                        <td><code className="ui-code">{token}</code></td>
                        <td className="ui-body-sm">{decision}</td>
                        <td><span className={`ui-note ui-note--${layer === "type" ? "primary" : "secondary"}`}>{layer}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </section>
        </div>
      </main>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // playground-code-editor is a web component — verify it mounted
    await expect(canvas.getByLabelText("Markdown article editor")).toBeDefined();
  }
};
