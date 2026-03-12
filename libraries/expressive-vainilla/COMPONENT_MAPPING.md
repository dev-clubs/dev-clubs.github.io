# Material Web -> Expressive Vainilla coverage

Generated: 2026-03-08T23:08:37.474Z
Source: `libraries/material-web/docs/components/*.md`
Coverage: 100% (41/41)

## Component map

| Material tag | Expressive replacement | Status |
| --- | --- | --- |
| `md-assist-chip` | `<button class="ui-chip ui-chip--assist">` | ✅ mapped |
| `md-branded-fab` | `<button class="ui-fab ui-fab--primary">` | ✅ mapped |
| `md-checkbox` | `<input class="ui-checkbox__control">` | ✅ mapped |
| `md-chip-set` | `<div class="ui-chip-set">` | ✅ mapped |
| `md-circular-progress` | `<span class="ui-loading">` | ✅ mapped |
| `md-dialog` | `<dialog class="ui-dialog">` | ✅ mapped |
| `md-divider` | `<hr class="ui-divider">` | ✅ mapped |
| `md-elevated-button` | `<button class="ui-button ui-button--ghost">` | ✅ mapped |
| `md-elevation` | `<div class="ui-elevation">` | ✅ mapped |
| `md-fab` | `<button class="ui-fab">` | ✅ mapped |
| `md-filled-button` | `<button class="ui-button ui-button--primary">` | ✅ mapped |
| `md-filled-icon-button` | `<button class="ui-icon-button ui-icon-button--filled">` | ✅ mapped |
| `md-filled-select` | `<select class="ui-select">` | ✅ mapped |
| `md-filled-text-field` | `<input class="ui-input">` | ✅ mapped |
| `md-filled-tonal-button` | `<button class="ui-button ui-button--tonal">` | ✅ mapped |
| `md-filled-tonal-icon-button` | `<button class="ui-icon-button ui-icon-button--tonal">` | ✅ mapped |
| `md-filter-chip` | `<button class="ui-chip ui-chip--filter">` | ✅ mapped |
| `md-focus-ring` | `<span class="ui-focus-ring">` | ✅ mapped |
| `md-icon` | `<span class="ui-icon">` | ✅ mapped |
| `md-icon-button` | `<button class="ui-icon-button">` | ✅ mapped |
| `md-input-chip` | `<button class="ui-chip ui-chip--input">` | ✅ mapped |
| `md-linear-progress` | `<div class="ui-progress">` | ✅ mapped |
| `md-list` | `<ul class="ui-list">` | ✅ mapped |
| `md-list-item` | `<li class="ui-list-item">` | ✅ mapped |
| `md-menu` | `<div class="ui-menu">` | ✅ mapped |
| `md-menu-item` | `<button class="ui-menu-item">` | ✅ mapped |
| `md-outlined-button` | `<button class="ui-button ui-button--ghost">` | ✅ mapped |
| `md-outlined-icon-button` | `<button class="ui-icon-button ui-icon-button--outlined">` | ✅ mapped |
| `md-outlined-select` | `<select class="ui-select">` | ✅ mapped |
| `md-outlined-text-field` | `<input class="ui-input">` | ✅ mapped |
| `md-primary-tab` | `<button class="ui-tab">` | ✅ mapped |
| `md-radio` | `<input class="ui-radio__control">` | ✅ mapped |
| `md-ripple` | `<span class="ui-ripple">` | ✅ mapped |
| `md-secondary-tab` | `<button class="ui-tab ui-tab--secondary">` | ✅ mapped |
| `md-select-option` | `<option>` | ✅ mapped |
| `md-slider` | `<input class="ui-slider">` | ✅ mapped |
| `md-sub-menu` | `<div class="ui-sub-menu">` | ✅ mapped |
| `md-suggestion-chip` | `<button class="ui-chip ui-chip--suggestion">` | ✅ mapped |
| `md-switch` | `<input class="ui-switch__control">` | ✅ mapped |
| `md-tabs` | `<nav class="ui-tabs">` | ✅ mapped |
| `md-text-button` | `<button class="ui-button">` | ✅ mapped |

## Vanilla snippets

### `md-assist-chip`

```html
<button class="ui-chip ui-chip--assist" type="button">Assist</button>
```

### `md-branded-fab`

```html
<button class="ui-fab ui-fab--primary" type="button" aria-label="Create"><span class="ui-icon ui-icon--heavy">add</span></button>
```

### `md-checkbox`

```html
<label class="ui-checkbox"><input class="ui-checkbox__control" type="checkbox" aria-label="Option" /><span>Option</span></label>
```

### `md-chip-set`

```html
<div class="ui-chip-set" role="toolbar" aria-label="Chip set"></div>
```

### `md-circular-progress`

```html
<span class="ui-loading" role="status" aria-label="Loading"></span>
```

### `md-dialog`

```html
<dialog class="ui-dialog" open><h2 class="ui-dialog__headline">Dialog title</h2><div class="ui-dialog__content">Dialog content.</div><div class="ui-dialog__actions"><button class="ui-button" type="button">Cancel</button><button class="ui-button ui-button--primary" type="button">Ok</button></div></dialog>
```

### `md-divider`

```html
<hr class="ui-divider" />
```

### `md-elevated-button`

```html
<button class="ui-button ui-button--ghost" type="button">Elevated</button>
```

### `md-elevation`

```html
<div class="ui-elevation ui-card">Elevated surface</div>
```

### `md-fab`

```html
<button class="ui-fab" type="button" aria-label="Create"><span class="ui-icon ui-icon--heavy">add</span></button>
```

### `md-filled-button`

```html
<button class="ui-button ui-button--primary" type="button">Filled</button>
```

### `md-filled-icon-button`

```html
<button class="ui-icon-button ui-icon-button--filled" type="button" aria-label="Action"><span class="ui-icon">edit</span></button>
```

### `md-filled-select`

```html
<label class="ui-field"><span>Select</span><select class="ui-select"><option>Option</option></select></label>
```

### `md-filled-text-field`

```html
<label class="ui-field"><span>Label</span><input class="ui-input" type="text" value="Value" /></label>
```

### `md-filled-tonal-button`

```html
<button class="ui-button ui-button--tonal" type="button">Tonal</button>
```

### `md-filled-tonal-icon-button`

```html
<button class="ui-icon-button ui-icon-button--tonal" type="button" aria-label="Action"><span class="ui-icon">edit</span></button>
```

### `md-filter-chip`

```html
<button class="ui-chip ui-chip--filter" type="button">Filter</button>
```

### `md-focus-ring`

```html
<button class="ui-button" type="button" style="position:relative;">Action<span class="ui-focus-ring" aria-hidden="true"></span></button>
```

### `md-icon`

```html
<span class="ui-icon" aria-hidden="true">check</span>
```

### `md-icon-button`

```html
<button class="ui-icon-button" type="button" aria-label="Action"><span class="ui-icon">edit</span></button>
```

### `md-input-chip`

```html
<button class="ui-chip ui-chip--input" type="button">Input</button>
```

### `md-linear-progress`

```html
<div class="ui-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="55"><span style="width:55%"></span></div>
```

### `md-list`

```html
<ul class="ui-list" role="list"></ul>
```

### `md-list-item`

```html
<li class="ui-list-item" role="listitem">Item</li>
```

### `md-menu`

```html
<div class="ui-menu" role="menu"></div>
```

### `md-menu-item`

```html
<button class="ui-menu-item" type="button" role="menuitem">Option</button>
```

### `md-outlined-button`

```html
<button class="ui-button ui-button--ghost" type="button">Outlined</button>
```

### `md-outlined-icon-button`

```html
<button class="ui-icon-button ui-icon-button--outlined" type="button" aria-label="Action"><span class="ui-icon">edit</span></button>
```

### `md-outlined-select`

```html
<label class="ui-field"><span>Select</span><select class="ui-select"><option>Option</option></select></label>
```

### `md-outlined-text-field`

```html
<label class="ui-field"><span>Label</span><input class="ui-input" type="text" value="Value" /></label>
```

### `md-primary-tab`

```html
<button class="ui-tab ui-tab--active" type="button" role="tab" aria-selected="true">Primary</button>
```

### `md-radio`

```html
<label class="ui-radio"><input class="ui-radio__control" type="radio" name="group" aria-label="Option" /><span>Option</span></label>
```

### `md-ripple`

```html
<button class="ui-button ui-button--primary" type="button"><span class="ui-ripple"></span>Action</button>
```

### `md-secondary-tab`

```html
<button class="ui-tab ui-tab--secondary" type="button" role="tab" aria-selected="false">Secondary</button>
```

### `md-select-option`

```html
<option value="item">Item</option>
```

### `md-slider`

```html
<input class="ui-slider" type="range" min="0" max="100" value="40" aria-label="Slider" />
```

### `md-sub-menu`

```html
<div class="ui-sub-menu"></div>
```

### `md-suggestion-chip`

```html
<button class="ui-chip ui-chip--suggestion" type="button">Suggestion</button>
```

### `md-switch`

```html
<label class="ui-switch"><input class="ui-switch__control" type="checkbox" role="switch" aria-label="Toggle" /><span>Toggle</span></label>
```

### `md-tabs`

```html
<nav class="ui-tabs" role="tablist"></nav>
```

### `md-text-button`

```html
<button class="ui-button" type="button">Text</button>
```

