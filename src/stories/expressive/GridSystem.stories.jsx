import React, { useMemo, useState } from "react";
import "../../tokens/shape.radius.css";
import "./grid-system-story.css";

const presets = {
  capsule_gallery: {
    label: "Capsule gallery",
    summary: "Large framed media plus vertical pills for supporting art.",
    columns: 12,
    minHeight: "30rem",
    rows: "repeat(4, minmax(5rem, 1fr))",
    mode: "fixed",
    canvasBg: "#c8c6dd",
    frameBg: "#151720",
    items: [
      { id: "lead", title: "Lead media", column: "1 / span 8", row: "1 / -1", tone: "photo", shape: "extra-large" },
      { id: "pill-a", title: "Strip 01", column: "9 / span 1", row: "1 / -1", tone: "sun", shape: "full" },
      { id: "pill-b", title: "Strip 02", column: "10 / span 1", row: "1 / -1", tone: "mono", shape: "full" },
      { id: "pill-c", title: "Strip 03", column: "11 / span 1", row: "1 / -1", tone: "sea", shape: "full" }
    ]
  },
  wellness_hero: {
    label: "Wellness hero",
    summary: "Layered hero with floating cards and rounded controls.",
    columns: 12,
    minHeight: "36rem",
    rows: "5.5rem repeat(5, minmax(4.5rem, 1fr))",
    mode: "fixed",
    canvasBg: "#d9d6cd",
    frameBg: "#e8eaec",
    items: [
      { id: "nav", title: "Navigation", column: "1 / -1", row: "1", tone: "ghost", shape: "large" },
      { id: "hero", title: "Hero image", column: "4 / span 6", row: "2 / span 5", tone: "photo-soft", shape: "extra-large" },
      { id: "watermark", title: "Watermark copy", column: "1 / -1", row: "3 / span 2", tone: "watermark", shape: "none" },
      { id: "headline", title: "Headline card", column: "1 / span 6", row: "5 / span 2", tone: "paper", shape: "extra-large-top" },
      { id: "chip", title: "Section chip", column: "1 / span 3", row: "4", tone: "chip", shape: "full" },
      { id: "insight", title: "Insight card", column: "10 / span 3", row: "4 / span 3", tone: "glass", shape: "large" },
      { id: "cta", title: "Primary action", column: "6 / span 2", row: "6", tone: "chip", shape: "full" }
    ]
  },
  banking_dashboard: {
    label: "Banking dashboard",
    summary: "Centered headline with dense modular cards and utility rails.",
    columns: 12,
    minHeight: "35rem",
    rows: "5rem repeat(4, minmax(4.8rem, 1fr))",
    mode: "fixed",
    canvasBg: "#cacaca",
    frameBg: "#e8eaec",
    items: [
      { id: "topbar", title: "Top bar", column: "1 / -1", row: "1", tone: "ghost", shape: "large" },
      { id: "headline", title: "Hero statement", column: "3 / span 8", row: "2", tone: "none", shape: "none" },
      { id: "left-rail", title: "Transactions", column: "1 / span 1", row: "3 / span 3", tone: "panel", shape: "large" },
      { id: "expense", title: "Top expenses", column: "2 / span 3", row: "4 / span 2", tone: "panel", shape: "large" },
      { id: "card", title: "Payment card", column: "5 / span 2", row: "4 / span 2", tone: "contrast", shape: "extra-large" },
      { id: "balance", title: "Total balance", column: "7 / span 3", row: "4 / span 2", tone: "paper", shape: "large" },
      { id: "schedule", title: "Payment schedule", column: "10 / span 2", row: "4 / span 2", tone: "paper", shape: "large" },
      { id: "stat", title: "Statistics", column: "12 / span 1", row: "4 / span 2", tone: "panel", shape: "large" }
    ]
  },
  editorial_poster: {
    label: "Editorial poster",
    summary: "High-contrast poster grid with visible spec lines and asymmetry.",
    columns: 12,
    minHeight: "34rem",
    rows: "repeat(6, minmax(4.2rem, 1fr))",
    mode: "fixed",
    canvasBg: "#9ea09f",
    frameBg: "#f25c27",
    items: [
      { id: "meta-left", title: "Thread meta", column: "1 / span 2", row: "1", tone: "none", shape: "none" },
      { id: "meta-mid", title: "Thread ID", column: "6 / span 2", row: "1", tone: "none", shape: "none" },
      { id: "menu", title: "Menu", column: "12", row: "1", tone: "button", shape: "small" },
      { id: "title", title: "Primary heading", column: "1 / span 8", row: "2 / span 2", tone: "none", shape: "none" },
      { id: "question", title: "Provocation", column: "8 / span 3", row: "5", tone: "none", shape: "none" },
      { id: "refresh", title: "Refresh", column: "11 / span 2", row: "6", tone: "button", shape: "full" }
    ]
  },
  minimal_portfolio: {
    label: "Minimal portfolio",
    summary: "Large whitespace, strict typographic blocks, and sparse utility anchors.",
    columns: 12,
    minHeight: "34rem",
    rows: "4rem 2rem repeat(4, minmax(4.5rem, 1fr))",
    mode: "fixed",
    canvasBg: "#d0d2d4",
    frameBg: "#e8eaec",
    items: [
      { id: "brand", title: "Portfolio label", column: "1 / span 3", row: "1", tone: "none", shape: "none" },
      { id: "nav", title: "Main nav", column: "8 / span 4", row: "1", tone: "none", shape: "none" },
      { id: "rule", title: "Rule", column: "1 / -1", row: "2", tone: "line", shape: "none" },
      { id: "name", title: "Designer name", column: "1 / span 5", row: "3 / span 2", tone: "none", shape: "none" },
      { id: "note", title: "Availability", column: "1 / span 3", row: "5", tone: "none", shape: "none" },
      { id: "location", title: "Location", column: "1 / span 3", row: "6", tone: "none", shape: "none" },
      { id: "silhouette", title: "ASCII portrait", column: "9 / span 3", row: "4 / span 3", tone: "ascii", shape: "none" }
    ]
  }
};

const shapeRadiusMap = {
  none: "var(--shape-rounding-none)",
  small: "var(--shape-rounding-small)",
  large: "var(--shape-rounding-large)",
  "large-start": "var(--shape-rounding-large-start)",
  "large-end": "var(--shape-rounding-large-end)",
  "extra-large": "var(--shape-rounding-extra-large)",
  "extra-large-top": "var(--shape-rounding-extra-large-top)",
  full: "var(--shape-rounding-full)"
};

function itemStyle(item) {
  return {
    gridColumn: item.column,
    gridRow: item.row,
    borderRadius: shapeRadiusMap[item.shape] ?? "var(--shape-rounding-medium)"
  };
}

export default {
  title: "Grid Design/Grid System",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};

export const GridObjectSpecLab = {
  name: "Grid Object Spec Lab",
  render: () => {
    const [presetKey, setPresetKey] = useState("capsule_gallery");
    const [gap, setGap] = useState("1rem");
    const [showSpec, setShowSpec] = useState(true);
    const [densePacking, setDensePacking] = useState(false);
    const [justifyTracks, setJustifyTracks] = useState("stretch");
    const [alignTracks, setAlignTracks] = useState("stretch");

    const preset = presets[presetKey];
    const canvasStyle = {
      "--grid-canvas-bg": preset.canvasBg
    };

    const gridStyle = {
      "--grid-columns": preset.columns,
      "--grid-gap": gap,
      "--grid-frame-bg": preset.frameBg,
      gridTemplateRows: preset.rows,
      minHeight: preset.minHeight,
      justifyContent: justifyTracks,
      alignContent: alignTracks
    };

    const cssSpec = useMemo(() => {
      const lines = [
        ".grid {",
        `  --grid-columns: ${preset.columns};`,
        `  --grid-gap: ${gap};`,
        "  display: grid;",
        "  gap: var(--grid-gap);",
        `  grid-template-columns: repeat(${preset.columns}, minmax(0, 1fr));`,
        `  grid-template-rows: ${preset.rows};`,
        densePacking ? "  grid-auto-flow: row dense;" : "  grid-auto-flow: row;",
        `  justify-content: ${justifyTracks};`,
        `  align-content: ${alignTracks};`,
        "}"
      ];

      const placements = preset.items.map(
        (item) =>
          `.grid-item--${item.id} { grid-column: ${item.column}; grid-row: ${item.row}; border-radius: ${shapeRadiusMap[item.shape] ?? "var(--shape-rounding-medium)"}; }`
      );

      return `${lines.join("\n")}\n\n${placements.join("\n")}`;
    }, [preset, gap, densePacking, justifyTracks, alignTracks]);

    return (
      <main className="grid-root grid-object">
        <div className="grid-shell">
          <header className="grid-header">
            <p className="grid-kicker">Vanilla CSS object</p>
            <h1>Reusable <code>.grid</code> system for layout reproduction and specs</h1>
            <p>
              Pick a reference layout and inspect the generated spec. The same <code>.grid</code> object drives each composition.
            </p>
          </header>

          <section className="grid-controls" aria-label="Grid controls">
            <label>
              <span>Layout preset</span>
              <select value={presetKey} onChange={(event) => setPresetKey(event.target.value)}>
                {Object.entries(presets).map(([key, value]) => (
                  <option key={key} value={key}>{value.label}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Gap</span>
              <select value={gap} onChange={(event) => setGap(event.target.value)}>
                <option value="0.5rem">0.5rem</option>
                <option value="1rem">1rem</option>
                <option value="1.5rem">1.5rem</option>
                <option value="2rem">2rem</option>
              </select>
            </label>

            <label>
              <span>Spec overlay</span>
              <select value={showSpec ? "on" : "off"} onChange={(event) => setShowSpec(event.target.value === "on")}>
                <option value="on">on</option>
                <option value="off">off</option>
              </select>
            </label>

            <label>
              <span>Auto placement</span>
              <select value={densePacking ? "dense" : "row"} onChange={(event) => setDensePacking(event.target.value === "dense")}>
                <option value="row">row</option>
                <option value="dense">row dense</option>
              </select>
            </label>

            <label>
              <span>Horizontal distribution</span>
              <select value={justifyTracks} onChange={(event) => setJustifyTracks(event.target.value)}>
                <option value="stretch">stretch</option>
                <option value="start">start</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>
            </label>

            <label>
              <span>Vertical distribution</span>
              <select value={alignTracks} onChange={(event) => setAlignTracks(event.target.value)}>
                <option value="stretch">stretch</option>
                <option value="start">start</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>
            </label>
          </section>

          <section className="grid-canvas-wrap">
            <div
              className="grid-canvas"
              data-preset={presetKey}
              data-spec={showSpec ? "on" : "off"}
              style={canvasStyle}
            >
              <div className="grid" data-mode={preset.mode} data-flow={densePacking ? "dense" : "row"} style={gridStyle}>
                {preset.items.map((item) => (
                  <article
                    key={item.id}
                    className={`grid-item grid-item--${item.id} tone-${item.tone}`}
                    style={itemStyle(item)}
                  >
                    <span>{item.title}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="grid-spec-panel">
              <h2>{preset.label}</h2>
              <p>{preset.summary}</p>
              <pre>{cssSpec}</pre>
            </aside>
          </section>
        </div>
      </main>
    );
  }
};
