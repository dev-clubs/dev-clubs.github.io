import React from "react";
import "./expressive-story.css";

const queueItems = [
  { label: "Storybook audit", source: "ui/review", state: "Queued" },
  { label: "Token build", source: "ci/tokens", state: "Running" },
  { label: "Visual snapshots", source: "ci/chromatic", state: "Passed" }
];

const commandRows = [
  "npm run storybook",
  "npm run build-storybook",
  "npm run build"
];

export default {
  title: "Expressive Vainilla/Widgets",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};

export const WidgetGallery = {
  render: () => (
    <main className="ui-root ev-page">
      <div className="ui-shell ev-shell">
        <section className="ui-grid-12 ev-hero">
          <header className="ev-hero__main">
            <span className="ui-kicker">Widget Set</span>
            <h1 className="ui-display">Operational widgets with expressive depth.</h1>
            <p className="ui-body ev-card-copy">
              Widgets combine strict left alignment and narrow information blocks with rounded geometry and layered
              colored elevations.
            </p>
          </header>

          <aside className="ev-hero__aside">
            <article className="ui-card ui-stack-sm">
              <span className="ui-label">Widget schema</span>
              <pre className="ui-snippet">{`<article class="ui-widget">
  <header class="ui-widget__header" />
  <div class="ui-widget__list" />
</article>`}</pre>
            </article>
          </aside>
        </section>

        <section className="ev-widget-grid" aria-label="Widget examples">
          <article className="ui-widget ui-card--soft-primary">
            <div className="ui-widget__header">
              <div className="ui-widget__meta">
                <span className="ui-label">Queue</span>
                <h2 className="ui-title">Automation stream</h2>
              </div>
              <span className="ui-badge">{queueItems.length}</span>
            </div>

            <div className="ui-widget__list">
              {queueItems.map((item, index) => (
                <div className="ui-widget__item" key={item.label}>
                  <span className={index === 1 ? "ui-dot ui-dot--secondary" : "ui-dot"} />
                  <span>{item.label}</span>
                  <span className="ui-mono">{item.state}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="ui-widget ui-card--soft-secondary">
            <div className="ui-widget__header">
              <div className="ui-widget__meta">
                <span className="ui-label">Command Center</span>
                <h2 className="ui-title">Build scripts</h2>
              </div>
            </div>
            <div className="ui-widget__list">
              {commandRows.map((row) => (
                <div className="ui-widget__item" key={row}>
                  <span className="ui-dot ui-dot--tertiary" />
                  <span className="ui-mono">{row}</span>
                  <button className="ui-button ui-button--ghost" type="button">Run</button>
                </div>
              ))}
            </div>
          </article>

          <article className="ui-widget ui-card--overlap">
            <div className="ui-widget__header">
              <div className="ui-widget__meta">
                <span className="ui-label">Metric Wall</span>
                <h2 className="ui-title">Health summary</h2>
              </div>
            </div>
            <div className="ui-stat-grid">
              <div className="ui-stat">
                <span className="ui-stat-label">Accessibility</span>
                <strong className="ui-stat-value">AA</strong>
              </div>
              <div className="ui-stat">
                <span className="ui-stat-label">Coverage</span>
                <strong className="ui-stat-value">92%</strong>
              </div>
              <div className="ui-stat">
                <span className="ui-stat-label">Bundle delta</span>
                <strong className="ui-stat-value">+1.8kb</strong>
              </div>
            </div>
            <span className="ui-mono">BUILD_HASH=95f91f8 · TARGET=storybook-static</span>
          </article>
        </section>
      </div>
    </main>
  )
};
