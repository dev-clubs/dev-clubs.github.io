import React, { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import "./expressive-story.css";

export default {
  title: "Expressive Vainilla/Navigation",
  tags: ["autodocs"],
  parameters: { layout: "padded" }
};

// ─── App Bar ──────────────────────────────────────────────────────────────────

export const AppBar = {
  argTypes: {
    title: {
      control: "text",
      description: "Page or section title rendered in `.ui-app-bar__title`."
    },
    center: {
      control: "boolean",
      description:
        "Adds `ui-app-bar--center` modifier — centers the title. Useful for modal-like sheets."
    },
    compact: {
      control: "boolean",
      description: "Adds `ui-app-bar--compact` — reduces padding and font size for denser chrome."
    }
  },
  args: { title: "GDG Querétaro", center: false, compact: false },
  render: ({ title, center, compact }) => {
    const cls = [
      "ui-app-bar",
      center && "ui-app-bar--center",
      compact && "ui-app-bar--compact"
    ].filter(Boolean).join(" ");
    return (
      <div style={{ maxWidth: "32rem" }}>
        <header className={cls}>
          <button className="ui-icon-button" type="button" aria-label="Menu">
            <span className="ui-icon ui-icon--sm" aria-hidden="true">menu</span>
          </button>
          <span className="ui-app-bar__title">{title}</span>
          <button className="ui-icon-button" type="button" aria-label="Search">
            <span className="ui-icon ui-icon--sm" aria-hidden="true">search</span>
          </button>
          <button className="ui-icon-button" type="button" aria-label="Account">
            <span className="ui-icon ui-icon--sm" aria-hidden="true">account_circle</span>
          </button>
        </header>
      </div>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.title)).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Menu" })).toBeVisible();
  }
};

export const AppBarCenter = {
  name: "App Bar / Center title",
  ...AppBar,
  args: { ...AppBar.args, title: "New Event", center: true, compact: false }
};

export const AppBarCompact = {
  name: "App Bar / Compact",
  ...AppBar,
  args: { ...AppBar.args, compact: true }
};

// ─── Navigation Bar ───────────────────────────────────────────────────────────

const NAV_BAR_ITEMS = [
  { id: "home",    icon: "home",           label: "Home" },
  { id: "events",  icon: "calendar_today", label: "Events" },
  { id: "explore", icon: "search",         label: "Explore" },
  { id: "profile", icon: "account_circle", label: "Profile" }
];

export const NavigationBar = {
  argTypes: {
    active: {
      control: "select",
      options: NAV_BAR_ITEMS.map((i) => i.id),
      description:
        "Currently active destination id. The matching item receives `ui-nav-bar__item--active` and its indicator gets a pill background.",
      table: { type: { summary: "string" }, defaultValue: { summary: "home" } }
    }
  },
  args: { active: "home" },
  render: ({ active }) => (
    <div style={{ maxWidth: "32rem" }}>
      <nav className="ui-nav-bar" aria-label="Main navigation">
        {NAV_BAR_ITEMS.map(({ id, icon, label }) => (
          <button
            key={id}
            className={`ui-nav-bar__item${id === active ? " ui-nav-bar__item--active" : ""}`}
            type="button"
            aria-current={id === active ? "page" : undefined}
          >
            <span className="ui-nav-bar__indicator" aria-hidden="true">
              <span className={`ui-icon ui-icon--sm${id === active ? " ui-icon--filled" : ""}`}>{icon}</span>
            </span>
            {label}
          </button>
        ))}
      </nav>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("navigation")).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Home" })).toBeVisible();
  }
};

export const NavigationBarInteractive = {
  name: "Navigation Bar / Interactive",
  parameters: { controls: { disable: true } },
  render: () => {
    const [active, setActive] = useState("home");
    return (
      <div style={{ maxWidth: "32rem" }}>
        <nav className="ui-nav-bar" aria-label="Main navigation">
          {NAV_BAR_ITEMS.map(({ id, icon, label }) => (
            <button
              key={id}
              className={`ui-nav-bar__item${id === active ? " ui-nav-bar__item--active" : ""}`}
              type="button"
              aria-current={id === active ? "page" : undefined}
              onClick={() => setActive(id)}
            >
              <span className="ui-nav-bar__indicator" aria-hidden="true">
                <span className={`ui-icon ui-icon--sm${id === active ? " ui-icon--filled" : ""}`}>{icon}</span>
              </span>
              {label}
            </button>
          ))}
        </nav>
        <p className="ui-body-sm" style={{ marginTop: "1rem", paddingLeft: "0.5rem" }}>
          Active: <strong>{active}</strong>
        </p>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const eventsBtn = canvas.getByRole("button", { name: "Events" });
    await userEvent.click(eventsBtn);
    await expect(eventsBtn).toHaveAttribute("aria-current", "page");
  }
};

// ─── Navigation Rail ──────────────────────────────────────────────────────────

const NAV_RAIL_ITEMS = [
  { id: "home",      icon: "home",           label: "Home" },
  { id: "events",    icon: "calendar_today", label: "Events" },
  { id: "community", icon: "group",          label: "Community" },
  { id: "settings",  icon: "settings",       label: "Settings" }
];

export const NavigationRail = {
  argTypes: {
    active: {
      control: "select",
      options: NAV_RAIL_ITEMS.map((i) => i.id),
      description:
        "Currently active destination id. The matching item receives `ui-nav-rail__item--active`.",
      table: { type: { summary: "string" }, defaultValue: { summary: "home" } }
    }
  },
  args: { active: "home" },
  render: ({ active }) => (
    <div style={{ display: "flex", height: "20rem", gap: "1.5rem" }}>
      <nav className="ui-nav-rail" aria-label="Section navigation">
        {NAV_RAIL_ITEMS.map(({ id, icon, label }) => (
          <button
            key={id}
            className={`ui-nav-rail__item${id === active ? " ui-nav-rail__item--active" : ""}`}
            type="button"
            aria-current={id === active ? "page" : undefined}
          >
            <span className="ui-nav-rail__indicator" aria-hidden="true">
              <span className={`ui-icon ui-icon--sm${id === active ? " ui-icon--filled" : ""}`}>{icon}</span>
            </span>
            {label}
          </button>
        ))}
      </nav>
      <div className="ui-card ui-stack-sm" style={{ flex: 1 }}>
        <span className="ui-label">Content area</span>
        <p className="ui-body-sm">
          Active destination: <strong>{active}</strong>
        </p>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("navigation")).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Home" })).toBeVisible();
  }
};

export const NavigationRailInteractive = {
  name: "Navigation Rail / Interactive",
  parameters: { controls: { disable: true } },
  render: () => {
    const [active, setActive] = useState("home");
    return (
      <div style={{ display: "flex", height: "20rem", gap: "1.5rem" }}>
        <nav className="ui-nav-rail" aria-label="Section navigation">
          {NAV_RAIL_ITEMS.map(({ id, icon, label }) => (
            <button
              key={id}
              className={`ui-nav-rail__item${id === active ? " ui-nav-rail__item--active" : ""}`}
              type="button"
              aria-current={id === active ? "page" : undefined}
              onClick={() => setActive(id)}
            >
              <span className="ui-nav-rail__indicator" aria-hidden="true">
              <span className={`ui-icon ui-icon--sm${id === active ? " ui-icon--filled" : ""}`}>{icon}</span>
            </span>
              {label}
            </button>
          ))}
        </nav>
        <div className="ui-card ui-stack-sm" style={{ flex: 1 }}>
          <span className="ui-label">Content area</span>
          <p className="ui-body-sm">
            Active destination: <strong>{active}</strong>
          </p>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const communityBtn = canvas.getByRole("button", { name: "Community" });
    await userEvent.click(communityBtn);
    await expect(communityBtn).toHaveAttribute("aria-current", "page");
  }
};

// ─── Navigation Gallery ───────────────────────────────────────────────────────

export const NavigationGallery = {
  name: "Navigation / Gallery",
  parameters: {
    controls: { disable: true },
    layout: "fullscreen"
  },
  render: () => (
    <main className="ui-root ev-page">
      <div className="ui-shell ev-shell">
        <section className="ui-grid-12 ev-hero">
          <header className="ev-hero__main">
            <span className="ui-kicker">Navigation Components</span>
            <h1 className="ui-display">App Bar · Nav Bar · Nav Rail</h1>
            <p className="ui-body ev-card-copy">
              Three chrome components for orienting users across surfaces. App Bar anchors the top of
              a screen; Navigation Bar provides primary destinations on mobile; Navigation Rail serves
              compact side navigation on tablet and desktop.
            </p>
          </header>
          <aside className="ev-hero__aside">
            <article className="ui-card ui-stack-sm">
              <span className="ui-label">CSS classes</span>
              <div className="ev-mono-stack">
                <code className="ui-code">.ui-app-bar</code>
                <code className="ui-code">.ui-nav-bar</code>
                <code className="ui-code">.ui-nav-rail</code>
              </div>
            </article>
          </aside>
        </section>

        <section className="ev-elements-grid" aria-label="Navigation examples">
          <article className="ui-card ui-stack-sm">
            <span className="ui-label">App Bar</span>
            <header className="ui-app-bar" style={{ borderRadius: "var(--ui-sys-shape-card)" }}>
              <button className="ui-icon-button" type="button" aria-label="Menu">
                <span className="ui-icon ui-icon--sm" aria-hidden="true">menu</span>
              </button>
              <span className="ui-app-bar__title">GDG Querétaro</span>
              <button className="ui-icon-button" type="button" aria-label="Search">
                <span className="ui-icon ui-icon--sm" aria-hidden="true">search</span>
              </button>
            </header>
            <header className="ui-app-bar ui-app-bar--compact" style={{ borderRadius: "var(--ui-sys-shape-card)" }}>
              <button className="ui-icon-button" type="button" aria-label="Back">
                <span className="ui-icon ui-icon--sm" aria-hidden="true">arrow_back</span>
              </button>
              <span className="ui-app-bar__title" style={{ textAlign: "center" }}>New Event</span>
              <button className="ui-icon-button" type="button" aria-label="Done">
                <span className="ui-icon ui-icon--sm" aria-hidden="true">check</span>
              </button>
            </header>
          </article>

          <article className="ui-card ui-stack-sm">
            <span className="ui-label">Navigation Bar</span>
            <nav className="ui-nav-bar" aria-label="Demo navigation" style={{ borderRadius: "var(--ui-sys-shape-card)" }}>
              {NAV_BAR_ITEMS.map(({ id, icon, label }) => (
                <button
                  key={id}
                  className={`ui-nav-bar__item${id === "home" ? " ui-nav-bar__item--active" : ""}`}
                  type="button"
                >
                  <span className="ui-nav-bar__indicator" aria-hidden="true">
                    <span className={`ui-icon ui-icon--sm${id === "home" ? " ui-icon--filled" : ""}`}>{icon}</span>
                  </span>
                  {label}
                </button>
              ))}
            </nav>
          </article>

          <article className="ui-card ui-stack-sm">
            <span className="ui-label">Navigation Rail</span>
            <div style={{ display: "flex", gap: "1rem", minHeight: "12rem" }}>
              <nav className="ui-nav-rail" aria-label="Demo rail" style={{ borderRadius: "var(--ui-sys-shape-card)" }}>
                {NAV_RAIL_ITEMS.map(({ id, icon, label }) => (
                  <button
                    key={id}
                    className={`ui-nav-rail__item${id === "home" ? " ui-nav-rail__item--active" : ""}`}
                    type="button"
                  >
                    <span className="ui-nav-rail__indicator" aria-hidden="true">
                      <span className={`ui-icon ui-icon--sm${id === "home" ? " ui-icon--filled" : ""}`}>{icon}</span>
                    </span>
                    {label}
                  </button>
                ))}
              </nav>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p className="ui-body-sm ui-mono">Content area</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
};
