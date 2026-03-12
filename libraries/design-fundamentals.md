# Design Fundamentals (Expressive Vainilla)

This document encapsulates the design foundations for creating user interfaces using the project's vanilla CSS tokens (`expressive vainilla`). Use this guide when creating new layouts or contributing to `src/styles/` or `src/tokens/`.

## 1. Typography

The primary and exclusive typeface is **Google Sans** (with Google Sans Text as an alternate weight/optical variant, where supported natively). This gives the site its strong, Google-native brand feel.
- We utilize large display sizes with tight tracking for Hero elements.
- Clean, open body styles for editorial content.
- Monospace tags use standard browser monos (`ui-sys-font-mono`) for snippet readability.

## 2. Color System

Instead of flat, generic hex strings sprinkled throughout components, we map all colors through a semantic role system based on Material 3 concepts, but customized to feel "editorial".
- **Brands**: `ui-ref-brand-primary` (Blue, Green, Red, Yellow variants injected via `.astro` files).
- **Backgrounds**: Surfaces are typically very light (off-white) or very dark (deep charcoal). Middle-gray surfaces are avoided to maintain maximum contrast.
- **Accents**: Subtle tints of Periwinkle, Sage, and Terracotta can be used to delineate semantic meaning.

## 3. Layout and Spacing

Follow a strict Swiss-inspired grid approach:
- **Asymmetry**: Prefer asymmetrical columns (e.g., an 8-column main content block paired with a 4-column sidebar) rather than equal halves.
- **High Negative Space**: Use generous margins (`--ui-sys-spacing-*`). Elements should have room to breathe; dense padding is reserved for inner control pills.
- **Flush-left Alignment**: Avoid center-aligning large blocks of text. Stick to strong flush-left alignment along grid lines.

## 4. Shape and Elevation

Shapes delineate function.
- **Hero / Containers**: Use large, friendly radii (`--ui-sys-shape-extra-large`, >24px).
- **Interactive Pills**: Buttons and chips generally use full pill (`--ui-sys-shape-full`) styling.
- **Overlapping Elevation**: Shadows (`--ui-sys-elevation-*`) are used sparingly, often in combinations with overlapping elements (a card partially hovering over a hero image) to create physical depth without heavy, muddy shadows.

## 5. Motion

Motion should be subtle and purposeful.
- All animations use CSS Custom Properties for easing (`--ui-motion-easing-standard`) and duration (`--ui-motion-duration-medium`).
- Never animate width, height, or padding. Animate `transform` and `opacity`.

When coding views, always prefer composing `.ui-card` and semantic layout classes defined in the `expressive-vainilla` CSS over hardcoding these values.
