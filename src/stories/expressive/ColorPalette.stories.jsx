import React, { useState } from "react";
import "./expressive-story.css";

const families = {
    blue: {
        label: "Blue / Primary",
        sysVar: "--ui-sys-color-primary",
        steps: [
            { step: 95, hex: "#e8f0fe", cssVar: "--ev-ref-color-blue-95" },
            { step: 80, hex: "#aecbfa", cssVar: "--ev-ref-color-blue-80" },
            { step: 60, hex: "#8ab4f8", cssVar: "--ev-ref-color-blue-60" },
            { step: 40, hex: "#4285F4", cssVar: "--ev-ref-color-blue-40" },
            { step: 30, hex: "#1a73e8", cssVar: "--ev-ref-color-blue-30" }
        ]
    },
    red: {
        label: "Red / Secondary",
        sysVar: "--ui-sys-color-secondary",
        steps: [
            { step: 95, hex: "#fce8e6", cssVar: "--ev-ref-color-red-95" },
            { step: 80, hex: "#fad2cf", cssVar: "--ev-ref-color-red-80" },
            { step: 60, hex: "#f28b82", cssVar: "--ev-ref-color-red-60" },
            { step: 40, hex: "#EA4335", cssVar: "--ev-ref-color-red-40" },
            { step: 30, hex: "#d93025", cssVar: "--ev-ref-color-red-30" }
        ]
    },
    green: {
        label: "Green / Tertiary",
        sysVar: "--ui-sys-color-tertiary",
        steps: [
            { step: 95, hex: "#e6f4ea", cssVar: "--ev-ref-color-green-95" },
            { step: 80, hex: "#ceead6", cssVar: "--ev-ref-color-green-80" },
            { step: 60, hex: "#81c995", cssVar: "--ev-ref-color-green-60" },
            { step: 40, hex: "#34A853", cssVar: "--ev-ref-color-green-40" },
            { step: 30, hex: "#1e8e3e", cssVar: "--ev-ref-color-green-30" }
        ]
    },
    yellow: {
        label: "Yellow / Accent",
        sysVar: "--ui-sys-color-accent",
        steps: [
            { step: 95, hex: "#fef7e0", cssVar: "--ev-ref-color-yellow-95" },
            { step: 80, hex: "#fde293", cssVar: "--ev-ref-color-yellow-80" },
            { step: 60, hex: "#fdd663", cssVar: "--ev-ref-color-yellow-60" },
            { step: 40, hex: "#FBBC05", cssVar: "--ev-ref-color-yellow-40" },
            { step: 30, hex: "#f29900", cssVar: "--ev-ref-color-yellow-30" }
        ]
    }
};

function contrastOnColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.55 ? "#1f1f1f" : "#ffffff";
}

function TonalScale({ family, isSelected, onSelect }) {
    return (
        <article
            className={`ui-card ui-stack-sm ev-palette-card ${isSelected ? "ev-palette-card--active" : ""}`}
            onClick={onSelect}
            style={{ cursor: "pointer" }}
        >
            <span className="ui-label">{family.label}</span>
            <div className="ev-tonal-scale">
                {family.steps.map((s) => (
                    <div
                        key={s.step}
                        className="ev-tonal-step"
                        style={{
                            background: s.hex,
                            color: contrastOnColor(s.hex)
                        }}
                    >
                        <span className="ev-tonal-step__level">{s.step}</span>
                        <span className="ev-tonal-step__hex ui-mono">{s.hex}</span>
                    </div>
                ))}
            </div>
            <code className="ui-code" style={{ justifySelf: "start" }}>
                {family.sysVar}
            </code>
        </article>
    );
}

function LivePreview({ selected }) {
    const family = families[selected];
    const mainColor = family.steps.find((s) => s.step === 40)?.hex ?? family.steps[2].hex;
    const softColor = family.steps.find((s) => s.step === 95)?.hex ?? family.steps[0].hex;
    const fg = contrastOnColor(mainColor);

    return (
        <article className="ui-card ui-stack-sm" style={{ "--preview-color": mainColor, "--preview-soft": softColor, "--preview-fg": fg }}>
            <span className="ui-label">Live Preview — {family.label}</span>

            <div className="ui-cluster">
                <button
                    className="ui-button"
                    type="button"
                    style={{ background: "var(--preview-color)", color: "var(--preview-fg)" }}
                >
                    {family.label.split(" / ")[0]} Button
                </button>
                <button
                    className="ui-button ui-button--ghost"
                    type="button"
                    style={{ borderColor: mainColor, color: mainColor }}
                >
                    Ghost variant
                </button>
            </div>

            <div className="ui-cluster">
                <span
                    className="ui-chip"
                    style={{
                        borderColor: `color-mix(in srgb, ${mainColor} 35%, transparent)`,
                        background: softColor
                    }}
                >
                    Active chip
                </span>
                <span className="ui-chip">Default chip</span>
                <span
                    className="ui-badge"
                    style={{ background: mainColor, color: fg }}
                >
                    4
                </span>
            </div>

            <div
                className="ui-card"
                style={{
                    background: softColor,
                    borderColor: `color-mix(in srgb, ${mainColor} 20%, transparent)`
                }}
            >
                <div className="ui-stack-sm">
                    <div className="ui-widget__header">
                        <div className="ui-widget__meta">
                            <span className="ui-label">Sample Widget</span>
                            <h3 className="ui-title">Tinted card surface</h3>
                        </div>
                    </div>
                    <div className="ui-widget__list">
                        <div className="ui-widget__item">
                            <span className="ui-dot" style={{ background: mainColor }} />
                            <span>Item using {selected} accent</span>
                            <span className="ui-mono">Active</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ui-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={72}>
                <span
                    style={{
                        width: "72%",
                        background: `linear-gradient(90deg, ${mainColor}, ${family.steps.find((s) => s.step === 60)?.hex ?? mainColor})`
                    }}
                />
            </div>
            <span className="ui-mono">ACCENT_PREVIEW={selected.toUpperCase()} · HEX={mainColor}</span>
        </article>
    );
}

export default {
    title: "Expressive Vainilla/Color Palette",
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen"
    }
};

export const InteractivePalette = {
    render: () => {
        const [selected, setSelected] = useState("blue");

        return (
            <main className="ui-root ev-page">
                <div className="ui-shell ev-shell">
                    <section className="ui-grid-12 ev-hero">
                        <header className="ev-hero__main">
                            <span className="ui-kicker">Material Color System</span>
                            <h1 className="ui-display">Google brand palette, token-mapped.</h1>
                            <p className="ui-body ev-card-copy">
                                Select a tonal family below to preview how it renders across buttons, chips, cards,
                                and progress indicators. All values map directly to CSS custom properties defined
                                in the <code className="ui-code">ui.ref</code> and <code className="ui-code">ui.sys</code> layers.
                            </p>
                            <div className="ui-cluster">
                                {Object.keys(families).map((key) => (
                                    <button
                                        key={key}
                                        className={`ui-button ${selected === key ? "ui-button--primary" : "ui-button--ghost"}`}
                                        type="button"
                                        onClick={() => setSelected(key)}
                                        style={
                                            selected === key
                                                ? {
                                                    background: families[key].steps.find((s) => s.step === 40)?.hex,
                                                    color: contrastOnColor(families[key].steps.find((s) => s.step === 40)?.hex ?? "#fff"),
                                                    borderColor: "transparent"
                                                }
                                                : undefined
                                        }
                                    >
                                        {families[key].label.split(" / ")[0]}
                                    </button>
                                ))}
                            </div>
                        </header>

                        <aside className="ev-hero__aside">
                            <LivePreview selected={selected} />
                        </aside>
                    </section>

                    <section className="ev-palette-grid" aria-label="Tonal scales">
                        {Object.entries(families).map(([key, family]) => (
                            <TonalScale
                                key={key}
                                family={family}
                                isSelected={selected === key}
                                onSelect={() => setSelected(key)}
                            />
                        ))}
                    </section>
                </div>
            </main>
        );
    }
};
