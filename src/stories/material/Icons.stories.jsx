import React from "react";
import "./material-story.css";

const iconNames = ["home", "favorite", "search", "auto_awesome", "settings", "rocket_launch", "palette", "terminal"];

export default {
  title: "Material 3/Icons",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};

export const MaterialSymbols = {
  render: () => (
    <section className="md3-app m3-story-root">
      <div className="m3-story-shell m3-story-stack">
        <header className="m3-story-header">
          <h1 className="md3-headline-small">Material Symbols</h1>
          <p className="md3-body-medium m3-story-muted">
            Use `material-symbols-outlined`, `material-symbols-rounded` or `material-symbols-sharp` with helper classes.
          </p>
        </header>

        <div className="md3-card m3-story-stack">
          <h2 className="md3-title-large">Outlined</h2>
          <div className="m3-icon-grid">
            {iconNames.map((name) => (
              <div className="m3-icon-tile" key={`outlined-${name}`}>
                <span className="material-symbols-outlined mi-lg">{name}</span>
                <span className="md3-label-large">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md3-card m3-story-stack">
          <h2 className="md3-title-large">Rounded (filled + weight variants)</h2>
          <div className="m3-icon-grid">
            {iconNames.map((name) => (
              <div className="m3-icon-tile" key={`rounded-${name}`}>
                <span className="material-symbols-rounded mi-lg mi-filled mi-600">{name}</span>
                <span className="md3-label-large">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md3-card m3-story-stack">
          <h2 className="md3-title-large">Sharp</h2>
          <div className="m3-icon-grid">
            {iconNames.map((name) => (
              <div className="m3-icon-tile" key={`sharp-${name}`}>
                <span className="material-symbols-sharp mi-lg">{name}</span>
                <span className="md3-label-large">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};
