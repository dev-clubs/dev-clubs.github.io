import React from "react";
import "./material-story.css";

const colorRoles = [
  ["Primary", "--md-sys-color-primary", "--md-sys-color-on-primary"],
  ["Primary Container", "--md-sys-color-primary-container", "--md-sys-color-on-primary-container"],
  ["Secondary", "--md-sys-color-secondary", "--md-sys-color-on-secondary"],
  ["Secondary Container", "--md-sys-color-secondary-container", "--md-sys-color-on-secondary-container"],
  ["Tertiary", "--md-sys-color-tertiary", "--md-sys-color-on-tertiary"],
  ["Tertiary Container", "--md-sys-color-tertiary-container", "--md-sys-color-on-tertiary-container"],
  ["Surface", "--md-sys-color-surface", "--md-sys-color-on-surface"],
  ["Surface Container High", "--md-sys-color-surface-container-high", "--md-sys-color-on-surface"],
  ["Inverse Surface", "--md-sys-color-inverse-surface", "--md-sys-color-inverse-on-surface"],
  ["Error", "--md-sys-color-error", "--md-sys-color-on-error"]
];

const typeRows = [
  ["Display Large", "md3-display-large", "Design systems should feel alive."],
  ["Headline Small", "md3-headline-small", "Expressive hierarchy with clear contrast."],
  ["Title Large", "md3-title-large", "Title with stronger brand tone."],
  ["Body Large", "md3-body-large", "Body styles prioritize readability and rhythm."],
  ["Label Large", "md3-label-large", "Label styles support controls and metadata."]
];

const shapeRows = [
  ["Extra Small", "--md-sys-shape-corner-extra-small"],
  ["Small", "--md-sys-shape-corner-small"],
  ["Medium", "--md-sys-shape-corner-medium"],
  ["Large", "--md-sys-shape-corner-large"],
  ["Extra Large", "--md-sys-shape-corner-extra-large"],
  ["Full", "--md-sys-shape-corner-full"]
];

const motionRows = [
  ["Standard easing", "--md-sys-motion-easing-standard"],
  ["Expressive easing", "--md-sys-motion-easing-expressive"],
  ["Short 2", "--md-sys-motion-duration-short2"],
  ["Medium 2", "--md-sys-motion-duration-medium2"]
];

const elevationRows = [
  ["Level 0", "--md-sys-elevation-level0"],
  ["Level 1", "--md-sys-elevation-level1"],
  ["Level 2", "--md-sys-elevation-level2"],
  ["Level 3", "--md-sys-elevation-level3"],
  ["Level 4", "--md-sys-elevation-level4"],
  ["Level 5", "--md-sys-elevation-level5"]
];

const ColorTokenGrid = () => (
  <div className="m3-grid">
    {colorRoles.map(([label, token, onToken]) => (
      <article className="m3-swatch" key={token}>
        <div className="m3-swatch__chip" style={{ background: `var(${token})`, color: `var(${onToken})` }}>
          {label}
        </div>
        <div className="m3-swatch__meta">
          <code>{token}</code>
          <span className="m3-token-pill">{onToken}</span>
        </div>
      </article>
    ))}
  </div>
);

export default {
  title: "Material 3/Foundations",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};

export const ColorRoles = {
  render: () => (
    <section className="md3-app m3-story-root">
      <div className="m3-story-shell m3-story-stack">
        <header className="m3-story-header">
          <h1 className="md3-headline-small">Material 3 color roles</h1>
          <p className="md3-body-medium m3-story-muted">
            Semantic system roles mapped to CSS custom properties. Toggle Storybook toolbar theme to inspect light and
            dark behavior.
          </p>
        </header>
        <ColorTokenGrid />
      </div>
    </section>
  )
};

export const TypeScale = {
  render: () => (
    <section className="md3-app m3-story-root">
      <div className="m3-story-shell m3-story-stack">
        <header className="m3-story-header">
          <h1 className="md3-headline-small">Material 3 type scale</h1>
          <p className="md3-body-medium m3-story-muted">Display, headline, title, body and label styles from token roles.</p>
        </header>
        <div className="md3-card m3-story-stack">
          {typeRows.map(([label, className, sample]) => (
            <div key={label} className="m3-story-stack" style={{ gap: "0.3rem" }}>
              <span className="m3-token-pill">{label}</span>
              <p className={className}>{sample}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export const ShapeMotionElevation = {
  render: () => (
    <section className="md3-app m3-story-root">
      <div className="m3-story-shell m3-story-stack">
        <header className="m3-story-header">
          <h1 className="md3-headline-small">Shape, motion and elevation</h1>
          <p className="md3-body-medium m3-story-muted">
            Tokens used to control corner styles, animation timing and depth across components.
          </p>
        </header>
        <div className="m3-card-grid">
          <div className="md3-card m3-story-stack">
            <h2 className="md3-title-large">Shape tokens</h2>
            <table className="m3-token-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Token</th>
                </tr>
              </thead>
              <tbody>
                {shapeRows.map(([label, token]) => (
                  <tr key={token}>
                    <td>{label}</td>
                    <td>
                      <code>{token}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md3-card m3-story-stack">
            <h2 className="md3-title-large">Motion tokens</h2>
            <table className="m3-token-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Token</th>
                </tr>
              </thead>
              <tbody>
                {motionRows.map(([label, token]) => (
                  <tr key={token}>
                    <td>{label}</td>
                    <td>
                      <code>{token}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md3-card m3-story-stack">
            <h2 className="md3-title-large">Elevation tokens</h2>
            <table className="m3-token-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Token</th>
                </tr>
              </thead>
              <tbody>
                {elevationRows.map(([label, token]) => (
                  <tr key={token}>
                    <td>{label}</td>
                    <td>
                      <code>{token}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
};
