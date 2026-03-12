import React from "react";
import "../../tokens/shape.radius.css";
import "./shape-system-story.css";

const cornerTokens = [
  ["--shape-corner-none", "0px"],
  ["--shape-corner-extra-small", "4px"],
  ["--shape-corner-small", "8px"],
  ["--shape-corner-medium", "12px"],
  ["--shape-corner-large", "16px"],
  ["--shape-corner-large-increased", "20px"],
  ["--shape-corner-extra-large", "28px"],
  ["--shape-corner-extra-large-increased", "32px"],
  ["--shape-corner-extra-extra-large", "48px"],
  ["--shape-corner-full", "9999px"]
];

const shapeRecipes = [
  { label: "No rounding", token: "var(--shape-rounding-none)", className: "shape-none" },
  { label: "Extra small rounding", token: "var(--shape-rounding-extra-small)", className: "shape-extra-small" },
  { label: "Small rounding", token: "var(--shape-rounding-small)", className: "shape-small" },
  { label: "Medium rounding", token: "var(--shape-rounding-medium)", className: "shape-medium" },
  { label: "Large rounding", token: "var(--shape-rounding-large)", className: "shape-large" },
  { label: "Large increased rounding", token: "var(--shape-rounding-large-increased)", className: "shape-large-increased" },
  { label: "Extra large rounding", token: "var(--shape-rounding-extra-large)", className: "shape-extra-large" },
  {
    label: "Extra large increased rounding",
    token: "var(--shape-rounding-extra-large-increased)",
    className: "shape-extra-large-increased"
  },
  {
    label: "Extra extra large rounding",
    token: "var(--shape-rounding-extra-extra-large)",
    className: "shape-extra-extra-large"
  },
  { label: "Fully rounded", token: "var(--shape-rounding-full)", className: "shape-full" },
  { label: "Extra small top rounding", token: "var(--shape-rounding-extra-small-top)", className: "shape-extra-small-top" },
  { label: "Large top rounding", token: "var(--shape-rounding-large-top)", className: "shape-large-top" },
  { label: "Extra large top rounding", token: "var(--shape-rounding-extra-large-top)", className: "shape-extra-large-top" },
  { label: "Large start rounding", token: "var(--shape-rounding-large-start)", className: "shape-large-start" },
  { label: "Large end rounding", token: "var(--shape-rounding-large-end)", className: "shape-large-end" }
];

export default {
  title: "Grid Design/Shape System",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};

export const MaterialShapeCatalog = {
  name: "Material Shape Catalog",
  render: () => (
    <main className="shape-root">
      <div className="shape-shell">
        <header className="shape-header">
          <p className="shape-kicker">Material Design 3</p>
          <h1>Shape scale and corner tokens</h1>
          <p>
            Separate shape story based on the local Material references:
            <code>Shape - Material Design 3.html</code> and <code>Shape radius - Material Design 3.html</code>.
          </p>
        </header>

        <section className="shape-token-panel" aria-label="Corner tokens">
          <h2>Corner value tokens</h2>
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {cornerTokens.map(([token, value]) => (
                <tr key={token}>
                  <td><code>{token}</code></td>
                  <td><code>{value}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="shape-grid" aria-label="Shape variants">
          {shapeRecipes.map((recipe) => (
            <article key={recipe.label} className="shape-card">
              <div className={`shape-preview ${recipe.className}`} aria-hidden="true" />
              <h3>{recipe.label}</h3>
              <code>{recipe.token}</code>
            </article>
          ))}
        </section>

        <section className="shape-optical" aria-label="Optical roundness">
          <h2>Optical roundness</h2>
          <p>
            Nested radii should be proportional. Use: <code>outer radius - padding = inner radius</code>.
          </p>
          <div className="shape-optical-demo">
            <div className="shape-optical-outer">
              <div className="shape-optical-inner">Outer 48px, padding 14px, inner 34px</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
};
