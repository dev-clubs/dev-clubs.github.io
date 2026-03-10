import React from "react";
import { expect, userEvent, within } from "storybook/test";
import "./expressive-story.css";

export default {
  title: "Expressive Vainilla/Elements",
  tags: ["autodocs"],
  parameters: { layout: "padded" }
};

// ─── Button ───────────────────────────────────────────────────────────────────

export const Button = {
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tonal", "ghost"],
      description:
        "Sets the `ui-button--{variant}` modifier. Controls visual weight and the semantic color role applied from `--ui-sys-*` tokens.",
      table: { type: { summary: "string" }, defaultValue: { summary: "primary" } }
    },
    label: {
      control: "text",
      description: "Visible button text."
    },
    disabled: {
      control: "boolean",
      description: "Passes the native `disabled` attribute. Reduced-opacity treatment comes from `ui.comp.css`."
    }
  },
  args: { variant: "primary", label: "Confirm", disabled: false },
  render: ({ variant, label, disabled }) => (
    <button className={`ui-button ui-button--${variant}`} disabled={disabled} type="button">
      {label}
    </button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard("{Enter}");
  }
};

export const ButtonDisabled = {
  name: "Button / Disabled",
  ...Button,
  args: { ...Button.args, disabled: true, label: "Unavailable" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button")).toBeDisabled();
  }
};

export const ButtonAllVariants = {
  name: "Button / All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="ui-cluster" style={{ padding: "1rem" }}>
      {["primary", "secondary", "tonal", "ghost"].map((v) => (
        <button key={v} className={`ui-button ui-button--${v}`} type="button">
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </button>
      ))}
    </div>
  )
};

// ─── Chip ─────────────────────────────────────────────────────────────────────

export const Chip = {
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "active", "quiet"],
      description:
        "`default` = neutral pill, `active` = selected/highlighted state, `quiet` = reduced emphasis. Maps to `ui-chip--{variant}` modifier.",
      table: { type: { summary: "string" }, defaultValue: { summary: "default" } }
    },
    label: {
      control: "text",
      description: "Chip label text."
    }
  },
  args: { variant: "default", label: "Filter tag" },
  render: ({ variant, label }) => (
    <span className={`ui-chip${variant !== "default" ? ` ui-chip--${variant}` : ""}`}>
      {label}
    </span>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText(args.label);
    await expect(chip).toBeVisible();
    await expect(chip).toHaveClass("ui-chip");
  }
};

export const ChipAllVariants = {
  name: "Chip / All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="ev-pill-row" style={{ padding: "1rem" }}>
      <span className="ui-chip ui-chip--active">Active</span>
      <span className="ui-chip">Default</span>
      <span className="ui-chip ui-chip--quiet">Quiet</span>
    </div>
  )
};

// ─── Note / Badge ─────────────────────────────────────────────────────────────

export const Note = {
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "danger"],
      description:
        "Sets the `ui-note--{intent}` modifier. Maps to the corresponding `--ui-sys-color-*` role.",
      table: { type: { summary: "string" }, defaultValue: { summary: "primary" } }
    },
    label: {
      control: "text",
      description: "Note text."
    }
  },
  args: { intent: "primary", label: "Ready" },
  render: ({ intent, label }) => (
    <span className={`ui-note ui-note--${intent}`}>{label}</span>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.label)).toBeVisible();
  }
};

// ─── Input Field ──────────────────────────────────────────────────────────────

export const InputField = {
  argTypes: {
    label: {
      control: "text",
      description: "Accessible label paired to the input via `htmlFor`."
    },
    placeholder: {
      control: "text",
      description: "Input placeholder text."
    },
    inputType: {
      control: "select",
      options: ["text", "email", "search", "url", "password"],
      description: "Native `type` attribute on the `<input>` element.",
      table: { defaultValue: { summary: "text" } }
    },
    disabled: {
      control: "boolean",
      description: "Passes the native `disabled` attribute."
    }
  },
  args: {
    label: "Project name",
    placeholder: "e.g. Expressive Vainilla",
    inputType: "text",
    disabled: false
  },
  render: ({ label, placeholder, inputType, disabled }) => (
    <div className="ui-field" style={{ minWidth: "20rem" }}>
      <label htmlFor="story-input">{label}</label>
      <input
        id="story-input"
        className="ui-input"
        type={inputType}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await expect(input).toBeVisible();
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await userEvent.type(input, "Swiss grid, expressive motion.");
    await expect(input).toHaveValue("Swiss grid, expressive motion.");
  }
};

export const InputFieldDisabled = {
  name: "Input Field / Disabled",
  ...InputField,
  args: { ...InputField.args, disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("textbox")).toBeDisabled();
  }
};

// ─── Select Field ─────────────────────────────────────────────────────────────

export const SelectField = {
  argTypes: {
    label: {
      control: "text",
      description: "Accessible label paired to the select via `htmlFor`."
    },
    disabled: {
      control: "boolean",
      description: "Passes the native `disabled` attribute."
    }
  },
  args: { label: "View mode", disabled: false },
  render: ({ label, disabled }) => (
    <div className="ui-field" style={{ minWidth: "16rem" }}>
      <label htmlFor="story-select">{label}</label>
      <select id="story-select" className="ui-select" disabled={disabled} defaultValue="asymmetric">
        <option value="asymmetric">Asymmetric grid</option>
        <option value="balanced">Balanced</option>
        <option value="compact">Compact</option>
      </select>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await expect(select).toBeVisible();
    await userEvent.selectOptions(select, "balanced");
    await expect(select).toHaveValue("balanced");
  }
};

// ─── Card ─────────────────────────────────────────────────────────────────────

export const Card = {
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "hero", "soft-primary", "soft-secondary", "overlap"],
      description:
        "Sets the `ui-card--{variant}` modifier. Controls surface elevation, corner radius, and accent treatment from `--ui-sys-*` tokens.",
      table: { type: { summary: "string" }, defaultValue: { summary: "default" } }
    },
    title: {
      control: "text",
      description: "Card heading rendered with `ui-title` class."
    },
    body: {
      control: "text",
      description: "Card body copy rendered with `ui-body-sm` class."
    }
  },
  args: {
    variant: "default",
    title: "Expressive surface",
    body: "Cards stay rounded and dense. Hero containers use stronger elevation and gradient treatment."
  },
  render: ({ variant, title, body }) => (
    <article
      className={`ui-card ui-stack-sm${variant !== "default" ? ` ui-card--${variant}` : ""}`}
      style={{ maxWidth: "28rem" }}
    >
      <span className="ui-label">Component</span>
      <h2 className="ui-title">{title}</h2>
      <p className="ui-body-sm">{body}</p>
    </article>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("article")).toBeVisible();
    await expect(canvas.getByRole("heading", { name: args.title })).toBeInTheDocument();
  }
};

export const CardHero = {
  name: "Card / Hero",
  ...Card,
  args: { ...Card.args, variant: "hero", title: "Hero moment" }
};

export const CardAllVariants = {
  name: "Card / All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))", gap: "1rem", padding: "1rem" }}>
      {[
        { mod: "", label: "Default" },
        { mod: "hero", label: "Hero" },
        { mod: "soft-primary", label: "Soft primary" },
        { mod: "soft-secondary", label: "Soft secondary" },
        { mod: "overlap", label: "Overlap" }
      ].map(({ mod, label }) => (
        <article key={label} className={`ui-card ui-stack-sm${mod ? ` ui-card--${mod}` : ""}`}>
          <span className="ui-label">{label}</span>
          <p className="ui-body-sm">Surface variant using semantic tokens.</p>
        </article>
      ))}
    </div>
  )
};

// ─── Icon Button ──────────────────────────────────────────────────────────────

export const IconButton = {
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "tonal", "outlined"],
      description:
        "Visual treatment. `filled` uses primary surface, `tonal` uses primary-soft, `outlined` adds a border. Maps to `ui-icon-button--{variant}`.",
      table: { type: { summary: "string" }, defaultValue: { summary: "default" } }
    },
    icon: {
      control: "text",
      description: "Material Symbols ligature name (e.g. `edit`, `search`, `add`). Rendered inside `.ui-icon`."
    },
    label: {
      control: "text",
      description: "Accessible `aria-label` text."
    },
    disabled: {
      control: "boolean",
      description: "Passes the native `disabled` attribute."
    }
  },
  args: { variant: "default", icon: "edit", label: "Edit", disabled: false },
  render: ({ variant, icon, label, disabled }) => (
    <button
      className={`ui-icon-button${variant !== "default" ? ` ui-icon-button--${variant}` : ""}`}
      type="button"
      aria-label={label}
      disabled={disabled}
    >
      <span className="ui-icon" aria-hidden="true">{icon}</span>
    </button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button");
    await expect(btn).toBeVisible();
    await userEvent.tab();
    await expect(btn).toHaveFocus();
  }
};

export const IconButtonAllVariants = {
  name: "Icon Button / All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="ui-cluster" style={{ padding: "1rem" }}>
      {[
        { mod: "", label: "Default", icon: "search" },
        { mod: "filled", label: "Filled", icon: "add" },
        { mod: "tonal", label: "Tonal", icon: "star" },
        { mod: "outlined", label: "Outlined", icon: "edit" }
      ].map(({ mod, label, icon }) => (
        <button
          key={label}
          className={`ui-icon-button${mod ? ` ui-icon-button--${mod}` : ""}`}
          type="button"
          aria-label={label}
          title={label}
        >
          <span className="ui-icon" aria-hidden="true">{icon}</span>
        </button>
      ))}
    </div>
  )
};

// ─── FAB ──────────────────────────────────────────────────────────────────────

export const FAB = {
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Size variant: `sm` (2.4rem), `default` (3.5rem), `lg` (4.75rem).",
      table: { type: { summary: "string" }, defaultValue: { summary: "default" } }
    },
    color: {
      control: "select",
      options: ["default", "primary", "tertiary", "surface"],
      description:
        "Color role. `default` = secondary, `primary`, `tertiary`, or `surface` (neutral with primary icon). Maps to `ui-fab--{color}`.",
      table: { type: { summary: "string" }, defaultValue: { summary: "default" } }
    },
    icon: {
      control: "text",
      description: "Material Symbols ligature name (e.g. `add`, `edit`, `star`)."
    }
  },
  args: { size: "default", color: "default", icon: "add" },
  render: ({ size, color, icon }) => {
    const cls = [
      "ui-fab",
      size !== "default" && `ui-fab--${size}`,
      color !== "default" && `ui-fab--${color}`
    ].filter(Boolean).join(" ");
    return (
      <button className={cls} type="button" aria-label="Add">
        <span className="ui-icon ui-icon--heavy" aria-hidden="true">{icon}</span>
      </button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button")).toBeVisible();
  }
};

export const FABExtended = {
  name: "FAB / Extended",
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "tertiary", "surface"],
      description: "Color role — same as FAB.",
      table: { type: { summary: "string" }, defaultValue: { summary: "default" } }
    },
    icon: { control: "text", description: "Material Symbols ligature name for the leading icon." },
    label: { control: "text", description: "Action label shown beside the icon." }
  },
  args: { color: "default", icon: "add", label: "New event" },
  render: ({ color, icon, label }) => {
    const cls = [
      "ui-fab ui-fab--extended",
      color !== "default" && `ui-fab--${color}`
    ].filter(Boolean).join(" ");
    return (
      <button className={cls} type="button">
        <span className="ui-icon ui-icon--heavy" aria-hidden="true">{icon}</span>
        {label}
      </button>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: args.label })).toBeVisible();
  }
};

export const FABMenu = {
  name: "FAB / Menu",
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Stack direction. `vertical` = column (default), `horizontal` = row.",
      table: { type: { summary: "string" }, defaultValue: { summary: "vertical" } }
    }
  },
  args: { orientation: "vertical" },
  render: ({ orientation }) => (
    <div className={`ui-fab-menu${orientation === "horizontal" ? " ui-fab-menu--horizontal" : ""}`}
         style={{ padding: "1rem" }}>
      <button className="ui-fab ui-fab--sm ui-fab--surface" type="button" aria-label="Share">
        <span className="ui-icon" aria-hidden="true">share</span>
      </button>
      <button className="ui-fab ui-fab--sm ui-fab--surface" type="button" aria-label="Download">
        <span className="ui-icon" aria-hidden="true">download</span>
      </button>
      <button className="ui-fab ui-fab--primary" type="button" aria-label="Create">
        <span className="ui-icon ui-icon--heavy" aria-hidden="true">add</span>
      </button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: "Create" })).toBeVisible();
  }
};

export const FABAllVariants = {
  name: "FAB / All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="ui-cluster" style={{ padding: "1rem", alignItems: "center" }}>
      <button className="ui-fab ui-fab--sm" type="button" aria-label="Small FAB">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">add</span>
      </button>
      <button className="ui-fab" type="button" aria-label="Default FAB">
        <span className="ui-icon ui-icon--heavy" aria-hidden="true">add</span>
      </button>
      <button className="ui-fab ui-fab--lg" type="button" aria-label="Large FAB">
        <span className="ui-icon ui-icon--lg ui-icon--heavy" aria-hidden="true">add</span>
      </button>
      <button className="ui-fab ui-fab--primary" type="button" aria-label="Primary FAB">
        <span className="ui-icon ui-icon--heavy" aria-hidden="true">star</span>
      </button>
      <button className="ui-fab ui-fab--tertiary" type="button" aria-label="Tertiary FAB">
        <span className="ui-icon ui-icon--heavy" aria-hidden="true">palette</span>
      </button>
      <button className="ui-fab ui-fab--surface" type="button" aria-label="Surface FAB">
        <span className="ui-icon" aria-hidden="true">edit</span>
      </button>
      <button className="ui-fab ui-fab--extended" type="button">
        <span className="ui-icon ui-icon--heavy" aria-hidden="true">add</span>
        New event
      </button>
    </div>
  )
};

// ─── Button Group ─────────────────────────────────────────────────────────────

export const ButtonGroup = {
  argTypes: {
    variant: {
      control: "select",
      options: ["ghost", "primary", "tonal"],
      description: "Applies `ui-button--{variant}` to every button in the group.",
      table: { type: { summary: "string" }, defaultValue: { summary: "ghost" } }
    }
  },
  args: { variant: "ghost" },
  render: ({ variant }) => (
    <div className="ui-button-group">
      {["Day", "Week", "Month"].map((label) => (
        <button key={label} className={`ui-button ui-button--${variant}`} type="button">
          {label}
        </button>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: "Day" })).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Week" })).toBeVisible();
  }
};

// ─── Split Button ─────────────────────────────────────────────────────────────

export const SplitButton = {
  argTypes: {
    label: {
      control: "text",
      description: "Primary action label on the left segment."
    }
  },
  args: { label: "Publish" },
  render: ({ label }) => (
    <div className="ui-split-button">
      <button className="ui-split-button__main" type="button">
        {label}
      </button>
      <button className="ui-split-button__arrow" type="button" aria-label="More options">
        <span className="ui-icon" aria-hidden="true">expand_more</span>
      </button>
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: args.label })).toBeVisible();
    await expect(canvas.getByRole("button", { name: "More options" })).toBeVisible();
  }
};

// ─── Toolbar ──────────────────────────────────────────────────────────────────

export const Toolbar = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="ui-toolbar" role="toolbar" aria-label="Text formatting">
      <button className="ui-icon-button ui-icon-button--tonal" type="button" aria-label="Bold">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">format_bold</span>
      </button>
      <button className="ui-icon-button" type="button" aria-label="Italic">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">format_italic</span>
      </button>
      <button className="ui-icon-button" type="button" aria-label="Underline">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">format_underlined</span>
      </button>
      <span className="ui-toolbar__divider" role="separator" />
      <button className="ui-icon-button" type="button" aria-label="Align left">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">format_align_left</span>
      </button>
      <button className="ui-icon-button" type="button" aria-label="Align center">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">format_align_center</span>
      </button>
      <button className="ui-icon-button" type="button" aria-label="Align right">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">format_align_right</span>
      </button>
      <span className="ui-toolbar__spacer" />
      <button className="ui-icon-button" type="button" aria-label="More options">
        <span className="ui-icon ui-icon--sm" aria-hidden="true">more_horiz</span>
      </button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("toolbar")).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Bold" })).toBeVisible();
  }
};

// ─── Slider ───────────────────────────────────────────────────────────────────

export const Slider = {
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Color role applied to the thumb. Maps to `ui-slider--{color}`. Default is primary.",
      table: { type: { summary: "string" }, defaultValue: { summary: "primary" } }
    },
    min: { control: "number", description: "Minimum value." },
    max: { control: "number", description: "Maximum value." },
    defaultValue: { control: "number", description: "Starting value." },
    disabled: { control: "boolean", description: "Passes the native `disabled` attribute." }
  },
  args: { color: "primary", min: 0, max: 100, defaultValue: 40, disabled: false },
  render: ({ color, min, max, defaultValue, disabled }) => (
    <div className="ui-field" style={{ minWidth: "20rem", padding: "1rem 0" }}>
      <label htmlFor="story-slider">Expression level</label>
      <input
        id="story-slider"
        className={`ui-slider${color !== "primary" ? ` ui-slider--${color}` : ""}`}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("slider")).toBeVisible();
  }
};

// ─── Loading Indicator ────────────────────────────────────────────────────────

export const LoadingIndicator = {
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Size variant: `sm` (1.5rem), `default` (2.5rem), `lg` (3.75rem). Maps to `ui-loading--{size}`.",
      table: { type: { summary: "string" }, defaultValue: { summary: "default" } }
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Spinner color role. Maps to `ui-loading--{color}`.",
      table: { type: { summary: "string" }, defaultValue: { summary: "primary" } }
    }
  },
  args: { size: "default", color: "primary" },
  render: ({ size, color }) => {
    const cls = [
      "ui-loading",
      size !== "default" && `ui-loading--${size}`,
      color !== "primary" && `ui-loading--${color}`
    ].filter(Boolean).join(" ");
    return (
      <div style={{ padding: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <span className={cls} role="status" aria-label="Loading" />
        <span className="ui-body-sm">Loading…</span>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toBeVisible();
  }
};

export const LoadingAllVariants = {
  name: "Loading Indicator / All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="ui-cluster" style={{ padding: "1rem", alignItems: "center" }}>
      <span className="ui-loading ui-loading--sm" role="status" aria-label="Small loading" />
      <span className="ui-loading" role="status" aria-label="Default loading" />
      <span className="ui-loading ui-loading--lg" role="status" aria-label="Large loading" />
      <span className="ui-loading ui-loading--secondary" role="status" aria-label="Secondary loading" />
      <span className="ui-loading ui-loading--tertiary" role="status" aria-label="Tertiary loading" />
    </div>
  )
};
