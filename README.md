# GDG Querétaro — dev-clubs.github.io

> Official website for Google Developer Group Querétaro. Built with Astro, vanilla CSS, and Swiss International Style design principles.

## Architecture

```
src/
├── assets/                     # SVG brand assets (GDG logo, title)
├── components/
│   └── WikiEngine.jsx          # React component for runtime .md parsing
├── layouts/
│   ├── GDGLayout.astro         # Shell layout (navbar, footer, head/SEO)
│   ├── ClubPage.astro          # Reusable club page template
│   └── MainLayout.astro        # Legacy layout (kept for compatibility)
├── pages/
│   ├── index.astro             # Homepage (hero, categories, events, contributors)
│   ├── cloud-data-ai/
│   │   └── wiki.astro          # AI & Cloud club page
│   ├── mujeres-diversidad/
│   │   └── wiki.astro          # Mujeres x Diversidad club page
│   ├── computer-science/
│   │   └── wiki.astro          # Computer Science club page
│   ├── codigo-diseno/
│   │   └── wiki.astro          # Código y Diseño club page
│   └── contributors/
│       └── wiki.astro          # Contributors wiki page
├── styles/
│   └── global.css              # Full design system (Swiss Grid)
└── env.d.ts

public/
├── assets/                     # Static assets served as-is
│   └── Google-Developer-Group__title-font-branded.svg
└── wiki/                       # Markdown articles (fetched at runtime)
    ├── cloud-data-ai.md
    ├── contributors.md
    ├── mujeres-diversidad.md
    ├── computer-science.md
    ├── codigo-diseno.md
    └── readme.md
```

## Design System

### Swiss Grid Architecture

The site uses a strict **12-column CSS Grid** following the Swiss International Style:

- **Negative space** — Generous padding and margin for breathing room
- **Asymmetrical balance** — Content placed deliberately, not centered by default
- **No decorative borders** — Clean edges, no drop shadows on layout
- **High contrast** — `#0F1115` background, `#FFFFFF` foreground

### Color Palette

| Token        | Hex       | Usage                       |
|--------------|-----------|-----------------------------|
| `--bg-deep`  | `#0F1115` | Page background             |
| `--fg`       | `#FFFFFF` | Primary text                |
| `--g-red`    | `#EA4335` | Mujeres x Diversidad        |
| `--g-blue`   | `#4285F4` | AI & Cloud, CTAs            |
| `--g-yellow` | `#F9AB00` | Computer Science            |
| `--g-green`  | `#34A853` | Código y Diseño             |

### Fluid Typography

All font sizes use `clamp()` for fluid scaling:

- **Headings**: `Inter` (700 weight, -0.02em tracking)
- **Body**: `Inter` (400 weight, 1.6 line-height)
- **Code/Metadata**: `JetBrains Mono` (uppercase, wide tracking)

### Responsive Breakpoints

| Range              | Columns | Behavior                          |
|--------------------|---------|-----------------------------------|
| Mobile (≤ 36rem)   | 1–2     | Stacked layout, large touch targets |
| Tablet (≤ 52rem)   | 4–6     | Intermediate grid                 |
| Desktop (≤ 112rem) | 12      | Full Swiss grid                   |
| 4K+ (> 112rem)     | 12      | Max-width container centered      |

### Card Geometry (Material 3)

All cards use prominent rounded corners:
- Large cards: `border-radius: 1.5rem` (24px)
- Inner elements: `border-radius: 1rem` (16px)
- CTAs: `border-radius: 9999px` (pill)

## Modules

### 1. WikiEngine (`src/components/WikiEngine.jsx`)

A React component that fetches `.md` files at runtime and parses them via `marked`. Features:

- **Loading state**: Skeleton shimmer animation
- **Error handling**: Branded error card with debug info
- **Prose styling**: Rendered HTML is wrapped in `.prose` for consistent typography

**Usage:**
```astro
<WikiEngine client:only="react" articlePath="/wiki/my-article.md" />
```

### 2. ClubPage Layout (`src/layouts/ClubPage.astro`)

Reusable template for individual club pages. Props:

| Prop              | Type     | Description                        |
|-------------------|----------|------------------------------------|
| `title`           | `string` | Page `<title>` tag                 |
| `clubName`        | `string` | Display name in hero               |
| `clubDescription` | `string` | Hero description paragraph         |
| `badgeLabel`      | `string` | Small badge text above title       |
| `badgeColor`      | `string` | Google brand hex color             |
| `articlePath`     | `string` | Path to wiki `.md` file            |
| `icon`            | `string` | Icon type: cloud/diversity/terminal/code |
| `sidebarLinks`    | `array`  | Optional resource links sidebar    |

### 3. GDGLayout (`src/layouts/GDGLayout.astro`)

Shell layout containing:

- **Navbar**: Glassmorphism sticky nav with desktop links + hamburger mobile menu
- **SEO Head**: Full Open Graph + Twitter Card metadata
- **Footer**: 12-column grid with brand, navigation, and social links
- **Scripts**: Mobile menu toggle, scroll animation observer

## Adding a New Club

1. Create a new `.astro` page in `src/pages/<slug>/wiki.astro`
2. Use the `ClubPage` layout, passing the appropriate props
3. Create a corresponding `.md` file in `public/wiki/<slug>.md`
4. Add a navigation link in `GDGLayout.astro`
5. Optionally add a category card on the homepage

## Development

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build to /docs for GitHub Pages
npm run preview  # Preview production build
```

## Deployment

The site builds to `/docs` for **GitHub Pages** deployment. The `astro.config.mjs` is configured with:

- `outDir: 'docs'` — Build output directory
- `build.format: 'file'` — HTML file per page
- `vite.build.emptyOutDir: false` — Preserve existing docs content

## Tech Stack

- **Astro** 4.x — Static site generator
- **React** 19.x — Runtime WikiEngine component
- **marked** — Markdown-to-HTML parser
- **Vanilla CSS** — Swiss Grid design system (no Tailwind for layout)
- **GitHub Pages** — Hosting
