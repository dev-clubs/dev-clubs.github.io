import React from "react";
import "./expressive-story.css";

const rows = [
  { id: "QRO-1881", area: "Data API", owner: "Cloud", status: "Healthy" },
  { id: "QRO-1882", area: "Events", owner: "Ops", status: "Degraded" },
  { id: "QRO-1883", area: "Docs", owner: "Design", status: "Healthy" }
];

export default {
  title: "Expressive Vainilla/Elements",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};

export const RichElements = {
  render: () => (
    <main className="ui-root ev-page">
      <div className="ui-shell ev-shell">
        <section className="ui-grid-12 ev-hero">
          <header className="ev-hero__main">
            <span className="ui-kicker">Element Library</span>
            <h1 className="ui-display">Pill actions, rounded containers, dense information.</h1>
            <p className="ui-body ev-card-copy">
              Elements use shared semantic tokens so they can shift theme and expression level in Storybook without
              breaking visual hierarchy.
            </p>
          </header>

          <aside className="ev-hero__aside">
            <article className="ui-card ui-card--soft-secondary ui-stack-sm">
              <span className="ui-label">Control Geometry</span>
              <p className="ui-body-sm">Buttons and chips keep pill radii while cards stay in 24px-32px range.</p>
              <span className="ui-mono">SHAPE: pill | card(24/32)</span>
            </article>
          </aside>
        </section>

        <section className="ev-elements-grid" aria-label="Action elements">
          <article className="ui-card ui-stack-sm">
            <span className="ui-label">Buttons</span>
            <div className="ui-cluster">
              <button className="ui-button ui-button--primary" type="button">Primary</button>
              <button className="ui-button ui-button--secondary" type="button">Secondary</button>
              <button className="ui-button ui-button--tonal" type="button">Tonal</button>
              <button className="ui-button ui-button--ghost" type="button">Ghost</button>
            </div>
          </article>

          <article className="ui-card ui-stack-sm">
            <span className="ui-label">Chips and Notes</span>
            <div className="ev-pill-row">
              <span className="ui-chip ui-chip--active">Active filter</span>
              <span className="ui-chip">Typography</span>
              <span className="ui-chip ui-chip--quiet">Grid</span>
              <span className="ui-badge">5</span>
            </div>
            <div className="ev-pill-row">
              <span className="ui-note ui-note--primary">Ready</span>
              <span className="ui-note ui-note--secondary">Needs review</span>
              <span className="ui-note ui-note--danger">Contrast issue</span>
            </div>
          </article>

          <article className="ui-card ui-stack-sm">
            <span className="ui-label">Fields</span>
            <div className="ev-field-grid">
              <div className="ui-field">
                <label htmlFor="ev-title">Layout Name</label>
                <input id="ev-title" className="ui-input" defaultValue="Expressive Vainilla Dashboard" />
              </div>
              <div className="ui-field">
                <label htmlFor="ev-view">View Mode</label>
                <select id="ev-view" className="ui-select" defaultValue="asymmetric">
                  <option value="asymmetric">Asymmetric grid</option>
                  <option value="balanced">Balanced</option>
                  <option value="compact">Compact</option>
                </select>
              </div>
              <div className="ui-field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="ev-notes">Technical Notes</label>
                <textarea id="ev-notes" className="ui-textarea" defaultValue="Use Google Sans for content and Roboto Mono for all data rows." />
              </div>
            </div>
          </article>
        </section>

        <section className="ui-card ui-stack-sm" aria-label="Data table example">
          <div className="ui-widget__header">
            <div className="ui-widget__meta">
              <span className="ui-label">Data Snippet</span>
              <h2 className="ui-title">Operational Registry</h2>
            </div>
            <a className="ui-action-link" href="#details">Open schema</a>
          </div>

          <div className="ui-table-wrap">
            <table className="ui-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Area</th>
                  <th>Owner</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td className="ui-mono">{row.id}</td>
                    <td>{row.area}</td>
                    <td>{row.owner}</td>
                    <td className="ui-mono">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="ui-body-sm ev-table-note">IDs and status values are rendered in Roboto Mono to keep technical contrast.</p>
        </section>
      </div>
    </main>
  )
};
