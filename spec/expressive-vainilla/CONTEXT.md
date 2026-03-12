# Expressive Vainilla Context

`Expressive Vainilla` is the custom vanilla CSS design system used in this project. It is a reinterpretation of Material tokens combined with strict Swiss grid layouts, designed to feel editorial and expressive without the overhead of utility-first CSS frameworks.

## Token Taxonomy

The system is rigorously split into CSS layers, primarily located in `src/tokens/` and `src/styles/`:

- `--ui-ref-*`: Reference tokens (raw colors, spacing scales, typography primitives).
- `--ui-sys-*`: Semantic system roles (surface colors, border behaviors, shape roles).
- `--ui-type-*`: Typography roles (Display, Headline, Body, Label).
- `--ui-motion-*`: Animation/easing primitives.
- `ui-*`: CSS component classes that rely heavily on the tokens above.

## Class Usage Guidelines

Agents must avoid writing inline styles or adding extraneous custom CSS classes when building UI. Instead, composition should be achieved using existing `ui-*` classes (e.g., `ui-card`, `ui-card--hero`, `ui-widget`).

- **Grid/Layout**: Heavily favors CSS Grid with `repeat(auto-fit, minmax(...))` for intrinsic responsiveness, or a 12-column layout. 
- **Typography**: Interface text uses Google Sans.

See `README - UI.md` or the `libraries/` directory for full token mappings and principles. Storybook is also the primary sandbox for visualizing the expressive components.
