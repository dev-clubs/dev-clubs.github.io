# test plan

## Token Integrity

- verify all active design-system tokens use `--ui-*`
- verify Storybook preview globals use `uiTheme` and `uiExpression`
- verify no deleted `material.css` imports remain
- verify no active `Material 3/*` story titles remain

## Visual Regression Checklist

- hero surfaces show stronger hierarchy than standard cards
- grouped surfaces are visually distinct from flat backgrounds
- buttons, tabs, chips, and navigation pills share a coherent shape language
- imported reference images render correctly in Storybook

## Accessibility Checklist

- focus-visible styles remain visible on interactive controls
- semantic elements are used for form fields, lists, navigation, and dialogs
- color contrast remains acceptable in light and dark themes
- reduced-motion media query removes animated timing emphasis

## Responsive Checks

- hero layouts collapse to one column below `960px`
- card grids collapse to one column on narrow widths
- controls remain touch-usable on mobile widths

## Browser Sanity Checks

- Storybook preview builds in Vite
- Astro site build succeeds with the new stylesheet import

## Manual Review Areas

- Storybook manager brand title
- Google Sans rendering in `Expressive Vainilla/*`
- local image loading from `libraries/expressive_files`
