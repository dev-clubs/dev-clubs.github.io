import React from "react";
import "./expressive-story.css";

const typographyScale = [
  { label: "Display", className: "ui-display", text: "Swiss structure." },
  { label: "Headline", className: "ui-headline", text: "Asymmetry guides attention." },
  { label: "Title", className: "ui-title", text: "Cards stay rounded and dense." },
  { label: "Body", className: "ui-body", text: "Readable measure and generous negative space reduce cognitive load." },
  { label: "Data", className: "ui-mono", text: "METRIC_RESPONSE_TIME=182ms" }
];

const rules = [
  "Grid: 12 columns, asymmetrical spans, no center-balanced hero blocks.",
  "Typography: Google Sans for layout text and headlines, flush-left and tightly tracked.",
  "Snippets/Data: Roboto Mono for metrics, code, and technical labels.",
  "Shapes: pill controls and cards rounded between 24px and 32px.",
  "Color: off-white/deep-charcoal base with blue, red, and green accents."
];

export default {
  title: "Expressive Vainilla/Foundations",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};

export const TokensAndTypography = {
  render: () => (
    <main className="ui-root ev-page">
      <div className="ui-shell ev-shell">
        <section className="ui-grid-12 ev-hero">
          <header className="ev-hero__main">
            <span className="ui-kicker">Expressive Vainilla Foundations</span>
            <h1 className="ui-display">Google Sans hierarchy on a strict Swiss grid.</h1>
            <p className="ui-body ev-card-copy">
              The system keeps rigid column logic and negative space from Swiss layout while layering expressive shapes,
              soft elevations, and accent-driven contrast inspired by Material Expressive.
            </p>
            <div className="ui-cluster">
              <span className="ui-note ui-note--primary">Grid-first</span>
              <span className="ui-note ui-note--secondary">Expressive corners</span>
              <span className="ui-note ui-note--primary">Tokenized CSS</span>
            </div>
          </header>

          <aside className="ev-hero__aside">
            <article className="ui-card ui-card--hero ui-stack-sm">
              <span className="ui-label">Typeface Contract</span>
              <div className="ev-mono-stack">
                <span className="ui-body-sm">Primary text: Google Sans</span>
                <code className="ui-code">font-family: "Google Sans", sans-serif;</code>
                <span className="ui-body-sm">Data/snippets: Roboto Mono</span>
                <code className="ui-code">font-family: "Roboto Mono", monospace;</code>
              </div>
            </article>
          </aside>
        </section>

        <section className="ev-token-grid" aria-label="Color and type tokens">
          <article className="ui-card ui-stack-sm">
            <span className="ui-label">Accent Palette</span>
            <div className="ev-token-grid">
              <div className="ev-swatch ev-swatch--blue">Blue / Primary</div>
              <div className="ev-swatch ev-swatch--red">Red / Secondary</div>
              <div className="ev-swatch ev-swatch--green">Green / Tertiary</div>
              <div className="ev-swatch ev-swatch--yellow">Yellow / Accent</div>
              <div className="ev-swatch ev-swatch--paper">Paper / Base</div>
              <div className="ev-swatch ev-swatch--charcoal">Charcoal / Dark Base</div>
            </div>
          </article>

          <article className="ui-card ui-stack-sm">
            <span className="ui-label">Type Scale</span>
            <div className="ev-token-block">
              {typographyScale.map((row) => (
                <div className="ev-token-row" key={row.label}>
                  <span className="ui-mono">{row.label}</span>
                  <p className={row.className}>{row.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="ui-card ui-stack-sm">
            <span className="ui-label">Usage Rules</span>
            <div className="ev-rule-list">
              {rules.map((rule) => (
                <div className="ev-rule-item" key={rule}>
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

export const SwissAsymmetricalGrid = {
  render: () => (
    <main className="ui-root ev-page">
      <div className="ui-shell ev-shell">
        <section className="ui-grid-12 ev-hero">
          <header className="ev-hero__main">
            <span className="ui-kicker">Layout Discipline</span>
            <h1 className="ui-headline">Mathematical fields, expressive volumes.</h1>
            <p className="ui-body ev-card-copy">
              Columns stay explicit and asymmetrical. Modules never drift off-grid; tension comes from offsets and
              differential scale, not random placement.
            </p>
          </header>

          <aside className="ev-hero__aside">
            <article className="ui-card ui-stack-sm">
              <span className="ui-label">Intrinsic Rule</span>
              <pre className="ui-snippet">
                {`grid-template-columns:
repeat(auto-fit, minmax(min(100%, 18rem), 1fr));`}
              </pre>
            </article>
          </aside>
        </section>

        <section className="ui-card ui-stack-sm" aria-label="Asymmetrical field map">
          <span className="ui-label">12-Column Map</span>
          <div className="ev-grid-map-wrap">
            <div className="ev-grid-map">
              <div className="ev-grid-map__lead">Lead copy 1-5</div>
              <div className="ev-grid-map__body">Body block 6-9</div>
              <div className="ev-grid-map__aside">Aside 10-12</div>
              <div className="ev-grid-map__offset">Offset utility block 4-9</div>
            </div>
          </div>
          <p className="ui-body-sm ui-mono">GRID_VERSION=v1.0.0 · BASELINE=8pt · CARD_RADIUS=24/32px</p>
        </section>
      </div>
    </main>
  )
};
