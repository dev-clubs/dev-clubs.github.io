# component mapping

| Old Material Name | New Expressive Name | Token Namespace | Status | Notes |
|---|---|---|---|---|
| `--md-ref-*` | `--ui-ref-*` | `ui.ref` | Done | raw values renamed and split by role |
| `--md-sys-*` | `--ui-sys-*` | `ui.sys` | Done | semantic roles preserved, naming updated |
| `--md-sys-typescale-*` | `--ui-type-*` | `ui.type` | Done | typography simplified for vanilla CSS |
| `--md-sys-motion-*` | `--ui-motion-*` | `ui.motion` | Done | expression controls preserved |
| `Material 3/Overview` | `Expressive Vainilla/Overview` | `ui.sys` | Done | Storybook taxonomy renamed |
| `Material 3/Foundations` | `Expressive Vainilla/Foundations` | `ui.ref`, `ui.sys`, `ui.type` | Done | foundations rebuilt around expressive framing |
| `Material 3/Components` | `Expressive Vainilla/Components` | `ui.comp` | Done | component gallery rebuilt with `ui-*` classes |
| `md3 button` patterns | `ui-button` patterns | `ui.comp.button` | Done | primary, soft, outline, ghost, hero variants |
| `md3 card` patterns | `ui-card` patterns | `ui.comp.card` | Done | expressive hero and spot surfaces added |
| `md3 field` patterns | `ui-input`, `ui-select`, `ui-field` | `ui.comp.field` | Done | semantic label and control pair |
| `md3 chips` | `ui-chip` | `ui.comp.chip` | Done | pill-based grouped metadata |
| `md3 tabs` | `ui-tabs`, `ui-tab` | `ui.comp.tabs` | Done | segmented navigation treatment |
| `md3 navigation/list/menu` | `ui-nav-pill`, `ui-list-item`, `ui-menu-item` | `ui.comp.navigation` | Done | grouped expressive containers |
| `md3 dialog/tooltip/snackbar/badge` | `ui-dialog`, `ui-tooltip`, `ui-snackbar`, `ui-badge` | `ui.comp.feedback` | Done | all represented in Storybook |
