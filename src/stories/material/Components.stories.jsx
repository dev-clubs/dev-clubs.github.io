import React from "react";
import "./material-story.css";

export default {
  title: "Material 3/Components",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};

export const Buttons = {
  render: () => (
    <section className="md3-app m3-story-root">
      <div className="m3-story-shell m3-story-stack">
        <header className="m3-story-header">
          <h1 className="md3-headline-small">Button set</h1>
          <p className="md3-body-medium m3-story-muted">
            Core M3 button treatments with state layers, icon support and expressive radius from global tokens.
          </p>
        </header>

        <div className="md3-card m3-story-stack">
          <h2 className="md3-title-large">Buttons</h2>
          <div className="md3-cluster">
            <button className="md3-btn md3-btn--filled">
              <span className="material-symbols-rounded mi-sm">bolt</span>
              Filled
            </button>
            <button className="md3-btn md3-btn--tonal">
              <span className="material-symbols-rounded mi-sm">palette</span>
              Tonal
            </button>
            <button className="md3-btn md3-btn--outlined">
              <span className="material-symbols-rounded mi-sm">edit</span>
              Outlined
            </button>
            <button className="md3-btn md3-btn--text">Text</button>
            <button className="md3-btn md3-btn--filled md3-icon-btn" aria-label="Favorite">
              <span className="material-symbols-rounded mi-filled">favorite</span>
            </button>
            <button className="md3-btn md3-btn--tonal md3-fab" aria-label="Add">
              <span className="material-symbols-rounded mi-filled">add</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export const CardsChipsAndFields = {
  render: () => (
    <section className="md3-app m3-story-root">
      <div className="m3-story-shell m3-story-stack">
        <header className="m3-story-header">
          <h1 className="md3-headline-small">Cards, chips and fields</h1>
          <p className="md3-body-medium m3-story-muted">
            Container, metadata and form primitives for static HTML pages.
          </p>
        </header>

        <div className="m3-card-grid">
          <article className="md3-card m3-story-stack">
            <span className="m3-token-pill">Feature card</span>
            <h2 className="md3-title-large">Design tokens first</h2>
            <p className="md3-body-medium m3-story-muted">
              Components consume system role tokens instead of hardcoded values.
            </p>
            <div className="md3-cluster">
              <span className="md3-chip">
                <span className="material-symbols-rounded mi-sm">tune</span>
                Flexible
              </span>
              <span className="md3-chip">
                <span className="material-symbols-rounded mi-sm">verified</span>
                Accessible
              </span>
            </div>
          </article>

          <article className="md3-card m3-story-stack">
            <span className="m3-token-pill">Form field</span>
            <h2 className="md3-title-large">Input baseline</h2>
            <label className="md3-label-large" htmlFor="m3-name">
              Name
            </label>
            <input className="md3-field" id="m3-name" placeholder="Start typing..." />
            <p className="md3-body-medium m3-story-muted">
              Uses state, type and shape tokens for consistent behavior and spacing.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
};
