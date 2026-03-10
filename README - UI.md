# expressive vainilla specification

## Purpose

`expressive vainilla` is a vanilla HTML and CSS design system that reinterprets Material token discipline through a more editorial, expressive visual language.

## Source Inputs Used

- `libraries/material_tokens.md`
- `libraries/expressive.html`

## Source Constraint

The requested `libraries/material_tokens/` directory is not present in this workspace. The implemented token mapping is therefore derived from `libraries/material_tokens.md` and the token/style evidence embedded in `libraries/expressive.html`.

## Scope

- Token refactor from `md.*` naming to `ui.*`
- Split CSS token architecture with reference, system, typography, motion, and component layers
- Storybook refactor from `Material 3/*` to `Expressive Vainilla/*`
- Expressive vanilla components documented through Storybook stories and root markdown project files
- System design foundations and agent context documented in `/spec/expressive-vainilla/` and `/libraries/design-fundamentals.md`.

## Token Taxonomy

- `--ui-ref-*`
  - raw values for color, spacing, shape, shadow, and layout primitives
- `--ui-sys-*`
  - semantic roles for color, surface, border, shape, spacing, and focus behavior
- `--ui-type-*`
  - typography roles and type utility values
- `--ui-motion-*`
  - easing and duration tokens, plus expression-level adjustments
- `ui-*` classes
  - component and layout APIs implemented in vanilla CSS

## Naming Rules

- `md.ref.*` becomes `ui-ref-*`
- `md.sys.*` becomes `ui-sys-*`
- `md.typescale.*` becomes `ui-type-*`
- `md.motion.*` becomes `ui-motion-*`
- component-facing APIs use `ui-` classes rather than `md3-` classes

## Material to Expressive Mapping Strategy

- Preserve semantic meaning first, not literal identifier shape
- Reuse color-role intent from Material token mapping
- Reframe visual output using expressive principles from `expressive.html`
- Keep component APIs semantic, lightweight, and directly usable from plain HTML

## Expressive Principles Adopted

- Oversized hero moments with tighter secondary text
- Contrast through mixed surface brightness and grouped containers
- Editorial rhythm using larger vertical spacing and asymmetrical emphasis
- Shape contrast: rounded hero containers, tighter control pills, sharper notes
- Restraint: expressive surfaces and color accents are used to guide focus, not decorate every element

## Component Inventory

- buttons
- cards
- dialog
- input/select fields
- checkbox
- radio
- switch
- tabs
- chips
- top bar
- navigation pills
- list items
- menu items
- tooltip
- snackbar
- badge
- divider
- figure/media/callout patterns

## Accessibility Requirements

- semantic HTML in Storybook examples
- visible focus treatment through `--ui-sys-focus-ring`
- keyboard-friendly native controls for form elements
- reduced-motion handling via media query override
- sufficient foreground/background contrast in both light and dark themes

## File Structure

- `src/tokens/ui.ref.css`
- `src/tokens/ui.sys.css`
- `src/tokens/ui.type.css`
- `src/tokens/ui.motion.css`
- `src/tokens/ui.comp.css`
- `src/styles/expressive-vainilla.css`
- `src/stories/expressive/*`
- root markdown documentation files

## Acceptance Criteria

- no active `md.*` design-system namespace remains in the implementation files
- Storybook exposes the system as `expressive vainilla`
- design tokens are available as CSS custom properties under `ui`
- expressive layouts visibly reflect `libraries/expressive.html`
- documentation is durable enough for a future session handoff


# Expressive Vainilla UI

`expressive vainilla` is a vanilla CSS token design system that combines Swiss layout rigor with Material Expressive behavior.

## Design Contract

- Grid and layout: strict 12-column asymmetrical composition, heavy negative space, flush-left hierarchy
- Shape language: pill controls, 24px-32px rounded cards, overlapping elevation layers
- Color: high contrast with off-white and deep-charcoal base surfaces plus periwinkle, terracotta, and sage accents
- Typography: `Google Sans` for headings and interface text
- Snippets/data: `Menlo` for code, metrics, technical labels, and structured data

## File Map

- `src/styles/expressive-vainilla.css`
- `src/tokens/ui.ref.css`
- `src/tokens/ui.sys.css`
- `src/tokens/ui.type.css`
- `src/tokens/ui.motion.css`
- `src/tokens/ui.comp.css`
- `src/stories/expressive/Overview.mdx`
- `src/stories/expressive/Foundations.stories.jsx`
- `src/stories/expressive/Components.stories.jsx` (`Expressive Vainilla/Elements`)
- `src/stories/expressive/Widgets.stories.jsx`
- `src/stories/expressive/Homepage.stories.jsx` (`Expressive Vainilla/Dashboard Landing`)
- `src/stories/expressive/expressive-story.css`

## Storybook Taxonomy

- `Expressive Vainilla/Overview`
- `Expressive Vainilla/Foundations`
- `Expressive Vainilla/Elements`
- `Expressive Vainilla/Widgets`
- `Expressive Vainilla/Dashboard Landing`

## Token Layers

1. Reference (`ui.ref.css`)
- Raw palette, spacing scale, radii, shadow primitives, and font tokens.

2. System (`ui.sys.css`)
- Semantic mapping (surface, on-surface, primary/secondary/tertiary roles), theme switching (`data-ui-theme`).

3. Typography (`ui.type.css`)
- Google Sans-first display/headline/body classes and Roboto Mono data/snippet classes.

4. Motion (`ui.motion.css`)
- Duration/easing contracts plus expression-level overrides via `data-ui-expression`.

5. Components (`ui.comp.css`)
- Grid utilities, cards, buttons, forms, chips, stats, widgets, dashboard primitives.

## Dashboard Landing Component

The requested specific component is implemented as:

- Story: `Expressive Vainilla/Dashboard Landing`
- File: `src/stories/expressive/Homepage.stories.jsx`

### Structure Summary

- `ui-dashboard__lead`: dominant content block (columns 1-8)
- `ui-dashboard__rail`: utility widgets (columns 10-12)
- `ui-dashboard__widgets`: intrinsically responsive widget row

### Core Utility Classes

- `ui-card--hero`: expressive gradient hero with large radius
- `ui-card--overlap`: layered card elevation behavior
- `ui-widget`, `ui-widget__header`, `ui-widget__list`, `ui-widget__item`
- `ui-stat-grid`, `ui-progress`, `ui-calendar`

## Accessibility and Responsiveness Notes

- Focus states use shared semantic focus ring (`--ui-sys-focus-ring`).
- Intrinsic reflow patterns use `repeat(auto-fit, minmax(min(100%, ...), 1fr))`.
- Reduced motion is honored through `prefers-reduced-motion`.
- Mobile breakpoints collapse asymmetrical rails into single-column reading order.
