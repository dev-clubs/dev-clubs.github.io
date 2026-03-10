# Expressive Vainilla conversion

This folder holds the material-web to expressive-vainilla conversion artifacts.

- `component-map.json`: canonical mapping from `md-*` components to `ui-*` vanilla primitives.
- `scripts/generate-material-web-coverage.mjs`: scans `libraries/material-web/docs/components` and verifies mapping coverage.
- `COMPONENT_MAPPING.md`: generated report with complete tag coverage and vanilla usage snippets.

## Refresh coverage report

```bash
node libraries/expressive-vainilla/scripts/generate-material-web-coverage.mjs
```
