# CDX — Tech Stack Reference
## Technology, Dependencies & Maintenance Guide

> **Version:** 1.1.0
> **Created:** 2026-10-17
> **Updated:** 2026-10-17 — Documented Hybrid Multi-Page Architecture in §1
> **Purpose:** Precise technical reference for developers and AI models maintaining this codebase.
> **Rule:** Do not alter technology choices or naming conventions without updating this document.

---

## Table of Contents

1. [Core Framework](#1-core-framework)
2. [Styling System](#2-styling-system)
3. [Animation Library](#3-animation-library)
4. [Icon System](#4-icon-system)
5. [Full Dependency Manifest](#5-full-dependency-manifest)
6. [Next.js 15 Configuration](#6-nextjs-15-configuration)
7. [Tailwind CSS Configuration](#7-tailwind-css-configuration)
8. [TypeScript Configuration](#8-typescript-configuration)
9. [Asset & Media Guidelines](#9-asset--media-guidelines)
10. [Environment Variables](#10-environment-variables)
11. [Development Workflow](#11-development-workflow)
12. [Build & Deployment](#12-build--deployment)
13. [Code Conventions](#13-code-conventions)
14. [AI Model Maintenance Guide](#14-ai-model-maintenance-guide)

---

## 1. Core Framework

### Next.js 15 (App Router)

| Property | Value |
|----------|-------|
| Version | `15.x` (latest stable) |
| Router | App Router (NOT Pages Router) |
| Site Architecture | **Hybrid Multi-Page Website** |
| Rendering | SSR (Server Components by default); `"use client"` only where required |
| TypeScript | Full strict-mode TypeScript |
| Package Manager | `npm` |

**Why Next.js 15 App Router:**
- Streaming SSR and React Server Components for optimal LCP performance.
- Built-in `<Image>` optimization (WebP conversion, lazy loading, blur placeholders).
- Built-in `next/font` for zero-CLS font loading.
- File-system routing maps 1:1 to the five CDX pages.
- `generateMetadata()` API for per-page, per-route SEO metadata without boilerplate.
- `<Link>` prefetching makes multi-page navigation feel instantaneous.

### Hybrid Multi-Page Architecture

The CDX website is a **Hybrid Multi-Page Website** — not an SPA. Each URL is a distinct,
server-rendered Next.js page with its own metadata, layout tree, and data scope.

**Page Route Map & Rendering Strategy:**

| Route | File | Rendering | `"use client"` Boundary |
|-------|------|-----------|-------------------------|
| `/` | `src/app/page.tsx` | SSR | Section components only |
| `/services` | `src/app/services/page.tsx` | SSR | Tab switcher, FAQ accordion |
| `/portfolio` | `src/app/portfolio/page.tsx` | SSR | Filter bar, modal, gallery |
| `/about` | `src/app/about/page.tsx` | SSR | Co-founder selected-work galleries |
| `/contact` | `src/app/contact/page.tsx` | SSR | Form state, submission logic |

**Multi-Page Navigation Rules:**
- All cross-page links use Next.js `<Link>` — never `<a href>` for internal URLs.
- The Navbar is a Server Component wrapper with a `"use client"` NavbarClient child for scroll detection.
- Page transitions: `AnimatePresence` in `layout.tsx` wraps `{children}` with a fade + translate animation (300ms).
- Each page Hero is always above the fold — no page requires scrolling to find the first CTA.
- Scroll progress bar (`ScrollProgress.tsx`) resets on each page navigation.

**What Is NOT Permitted:**
- Do NOT use hash-based routing (`/#services`, `/#portfolio`) to replace dedicated pages.
- Do NOT add a `pages/` directory — this project uses App Router exclusively.
- Do NOT use `output: 'export'` for static export — SSR is required for `generateMetadata()`.

**App Router Rules:**
- All components in `/src/app/` are Server Components unless they declare `"use client"`.
- Interactive components (Navbar, animations, forms, modals) MUST declare `"use client"`.
- Data fetching is done in Server Components or via `async` page components — never in Client Components unless it's client-side-only state.
- Layout files (`layout.tsx`) wrap all child pages and inject persistent UI (Navbar, Footer, ScrollProgress).

---

## 2. Styling System

### Tailwind CSS v3

| Property | Value |
|----------|-------|
| Version | `3.x` (NOT v4 — v4 is in beta and has breaking changes) |
| Config file | `tailwind.config.ts` |
| PostCSS | Used via `postcss.config.mjs` |
| Base layer | Custom CSS variables defined in `src/app/globals.css` |
| Utility approach | Tailwind utilities + custom CSS variables for design tokens |

**Why Tailwind CSS:**
- Rapid development with responsive utility classes.
- PurgeCSS in production eliminates unused styles for minimal bundle.
- Custom tokens (colors, fonts, spacing) defined as Tailwind theme extensions.

**Custom Design Token Extensions (`tailwind.config.ts`):**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0F17',
        'bg-secondary': '#111827',
        'bg-tertiary': '#1A2235',
        'accent-blue': '#007AFF',
        'accent-cyan': '#00D4FF',
        'text-secondary': '#94A3B8',
        'text-muted': '#475569',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #007AFF, #00D4FF)',
        'gradient-brand-radial': 'radial-gradient(circle, #007AFF, #00D4FF)',
      },
      boxShadow: {
        'glow-blue': '0 0 24px rgba(0, 122, 255, 0.4)',
        'glow-cyan': '0 0 24px rgba(0, 212, 255, 0.3)',
        'card': '0 1px 3px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'counter': 'counter 1.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 122, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 3. Animation Library

### Framer Motion v11

| Property | Value |
|----------|-------|
| Version | `framer-motion@^11` |
| Import | `import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'` |
| Usage | Client Components only (`"use client"` required) |

**Core APIs Used:**

| API | Usage in CDX |
|-----|-------------|
| `motion.div`, `motion.section`, etc. | Element entrance animations |
| `AnimatePresence` | Modal open/close, mobile menu, page transitions |
| `useScroll` + `useTransform` | Parallax effects, scroll-linked opacity/scale |
| `useInView` | Trigger animations on intersection |
| `useReducedMotion` | Disable animations for accessibility |
| `variants` | Reusable animation state objects (defined in `src/lib/animations.ts`) |
| `staggerChildren` | Grid/list staggered reveals |

**Central Animation Variants File:** `src/lib/animations.ts`

```typescript
import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2, ease: 'easeIn' } },
};
```

**Performance Rules for Framer Motion:**
- Never use `layout` prop on large lists (causes expensive layout calculations).
- Use `will-change: transform` only when animation is about to start, remove after.
- Prefer `useInView` over manual Intersection Observer for Framer Motion elements.
- Set `once: true` in `useInView` to prevent re-triggering already-visible elements.

---

## 4. Icon System

### Lucide React

| Property | Value |
|----------|-------|
| Package | `lucide-react` |
| Version | `^0.400.0` (latest) |
| Import style | Named imports only: `import { Monitor, Smartphone } from 'lucide-react'` |
| Usage | Server and Client Components (tree-shaken) |

**Icon Size Convention:**
| Context | Size | Class |
|---------|------|-------|
| Service card main icon | 32px | `size={32}` |
| Navigation icons | 20px | `size={20}` |
| Button icons | 18px | `size={18}` |
| Inline text icons | 16px | `size={16}` |
| Social link icons | 20px | `size={20}` |

**Service Icon Mapping (`src/data/services.ts`):**
```typescript
'web-development'    -> Monitor
'mobile-development' -> Smartphone
'ai-ml'              -> Brain
'design'             -> Palette
'video-media'        -> Video
```

---

## 5. Full Dependency Manifest

### Production Dependencies (`dependencies`)

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | `^15.0.0` | Core framework |
| `react` | `^19.0.0` | UI library |
| `react-dom` | `^19.0.0` | DOM renderer |
| `framer-motion` | `^11.0.0` | Animation library |
| `lucide-react` | `^0.400.0` | Icon system |
| `clsx` | `^2.1.0` | Conditional className utility |
| `tailwind-merge` | `^2.3.0` | Merge Tailwind classes without conflicts |

### Development Dependencies (`devDependencies`)

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | `^5.4.0` | TypeScript compiler |
| `@types/node` | `^20.0.0` | Node.js types |
| `@types/react` | `^19.0.0` | React types |
| `@types/react-dom` | `^19.0.0` | React DOM types |
| `tailwindcss` | `^3.4.0` | CSS framework |
| `postcss` | `^8.4.0` | PostCSS (required by Tailwind) |
| `autoprefixer` | `^10.4.0` | CSS autoprefixer |
| `eslint` | `^8.57.0` | Linter |
| `eslint-config-next` | `^15.0.0` | Next.js ESLint config |

### Installation Command

```bash
npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
npm install framer-motion lucide-react clsx tailwind-merge
```

---

## 6. Next.js 15 Configuration

**`next.config.ts`:**

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for catching bugs early
  reactStrictMode: true,

  // Image optimization config
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [], // Add external image domains here if needed
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features (stable in Next.js 15)
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Headers for performance & security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## 7. Tailwind CSS Configuration

See full config in Section 2. Additional notes:

- **Content paths:** Must include all component, page, and data files: `./src/**/*.{js,ts,jsx,tsx,mdx}`.
- **Dark mode:** Not needed — the design is exclusively dark. Do NOT enable `darkMode`.
- **Plugins:** None required. Custom animations defined via `keyframes` in theme.
- **Custom utilities:** Complex one-off styles go in `globals.css` under `@layer utilities`.

---

## 8. TypeScript Configuration

**`tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Strict Mode Rules Enforced:**
- `strict: true` enables all strict checks including `strictNullChecks`, `noImplicitAny`.
- All component props must have explicit TypeScript interfaces.
- No `any` types — use `unknown` and type narrowing if needed.
- All async functions must have explicit return type annotations.

---

## 9. Asset & Media Guidelines

### Directory Map

```
public/
├── images/
│   ├── hero/
│   │   └── hero-bg.webp           # Static fallback for hero (1920x1080)
│   ├── services/
│   │   ├── web-development.webp   # 800x600, service illustration
│   │   ├── mobile-development.webp
│   │   ├── ai-ml.webp
│   │   ├── design.webp
│   │   └── video-media.webp
│   ├── portfolio/
│   │   ├── [project-id]/            # Images grouped by project slug
│   │   │   └── [asset-name].webp
│   │   └── ...
│   ├── founders/
│   │   └── [founder-id]/            # Founder portfolio and profile media
│   ├── team/
│   │   └── [name].webp            # 400x400, square crop, person photo
│   └── branding/
│       ├── cdx-logo.svg           # Vector, primary
│       ├── cdx-logo-white.svg     # White variant
│       └── cdx-favicon.ico
├── videos/
│   ├── hero-reel.mp4              # Ambient loop, no audio, max 8MB
│   ├── showreel.mp4               # Full showreel with audio, max 50MB
│   ├── portfolio/
│   │   └── [project-id]/          # Video work grouped by project slug
│   └── founders/
│       └── [founder-id]/          # Founder portfolio videos
└── og-image.jpg                   # Open Graph image, 1200x630
```

### Naming Convention
- All assets: `kebab-case`.
- Images: descriptive names that reflect content (NOT generic names like `img1.webp`).
- Videos: `[purpose]-[context].mp4`.

### Image Quality Settings
- WebP quality: `85` for photos, `90` for UI screenshots, `95` for portfolio work.
- Never upscale — source resolution must meet or exceed display resolution.

---

## 10. Environment Variables

Store in `.env.local` (gitignored). Never commit secrets.

```bash
# Contact form (if using a form service like Resend, Formspree, or EmailJS)
NEXT_PUBLIC_FORM_SERVICE_URL=
FORM_SERVICE_API_KEY=

# Analytics (Plausible, PostHog, or Vercel Analytics)
NEXT_PUBLIC_ANALYTICS_ID=

# Optional: CMS or headless backend API
NEXT_PUBLIC_API_URL=
API_SECRET_KEY=
```

**Rules:**
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.
- All server-only secrets (API keys, DB URLs) must NOT have the `NEXT_PUBLIC_` prefix.

---

## 11. Development Workflow

### Initial Setup

```bash
# 1. Navigate to project root
cd d:\CDX

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev server | `npm run dev` | Start local dev server with HMR |
| Build | `npm run build` | Production build |
| Start | `npm run start` | Start production server |
| Lint | `npm run lint` | Run ESLint |
| Type check | `npx tsc --noEmit` | Run TypeScript compiler check |

### Development Order (Phase-by-Phase)

**Phase 1 — Foundation**
1. `next.config.ts` — framework config
2. `tailwind.config.ts` — design tokens
3. `src/app/globals.css` — CSS variables, resets
4. `src/lib/cn.ts` — className utility
5. `src/lib/animations.ts` — Framer Motion variants

**Phase 2 — Types & Data**
6. `src/types/` — all TypeScript interfaces
7. `src/data/` — all static content files

**Phase 3 — Common Components**
8. `Logo.tsx`, `Button.tsx`, `Badge.tsx`
9. `SectionHeader.tsx`, `Card.tsx`
10. `Modal.tsx`, `ScrollProgress.tsx`
11. `Navbar.tsx`, `Footer.tsx`

**Phase 4 — Media Components**
12. `VideoPlayer.tsx`, `PhotoGallery.tsx`, `ParallaxImage.tsx`

**Phase 5 — Section Components**
13. `HeroSection.tsx`, `StatsBar.tsx`
14. `ServicesGrid.tsx`, `AIHighlightSection.tsx`
15. `PortfolioShowcase.tsx`, `Testimonials.tsx`
16. `ProcessSection.tsx`, `ContactForm.tsx`

**Phase 6 — Pages (Multi-Page Routes)**
17. `src/app/layout.tsx` — root layout with Navbar, Footer, AnimatePresence page wrapper
18. `src/app/page.tsx` — `/` Home: Hero + StatsBar + ServicesGrid + AIHighlight + Portfolio teaser + Testimonials + CTA
19. `src/app/services/page.tsx` — `/services`: Engineering & Creative vertical tabs + ProcessSection + FAQ
20. `src/app/portfolio/page.tsx` — `/portfolio`: Filter bar + lazy PhotoGallery + VideoPlayer + case-study Modal
21. `src/app/about/page.tsx` — `/about`: Company overview + Co-Founder profiles and selected work + Operating principles
22. `src/app/contact/page.tsx` — `/contact`: High-converting ContactForm + Contact info panel

**Phase 7 — Polish**
23. Custom hooks (`useScrollProgress`, `useIntersectionObserver`, `useReducedMotion`)
24. SEO metadata for all pages
25. Performance audit and optimization

---

## 12. Build & Deployment

### Recommended Deployment: Vercel

- Connect GitHub repository to Vercel.
- Framework preset: **Next.js** (auto-detected).
- Root directory: `/` (project root).
- Build command: `npm run build`.
- Output directory: `.next` (auto-detected).
- Environment variables: Set in Vercel dashboard.

### Build Requirements
- Node.js version: `>=18.17.0` (as required by Next.js 15).
- All `NEXT_PUBLIC_` env vars must be set before build for them to be embedded.

### Performance Validation
After deployment, validate with:
- [PageSpeed Insights](https://pagespeed.web.dev) — target 95+ score.
- [WebPageTest](https://webpagetest.org) — validate LCP < 2.5s, CLS < 0.05.
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) — run in CI pipeline.

---

## 13. Code Conventions

### File Naming
| Type | Convention | Example |
|------|-----------|---------|
| React Components | PascalCase | `HeroSection.tsx` |
| Hooks | camelCase with `use` prefix | `useScrollProgress.ts` |
| Utilities | camelCase | `utils.ts`, `cn.ts` |
| Types/Interfaces | PascalCase | `Service`, `Project` |
| Data files | camelCase | `services.ts` |
| CSS files | camelCase or kebab-case | `animations.css` |
| Public assets | kebab-case | `hero-bg.webp` |

### Component Structure Template

```typescript
"use client"; // Only if interactive

import { ... } from 'framer-motion';
import { ... } from 'lucide-react';
import { cn } from '@/lib/cn';
import { fadeUp, staggerContainer } from '@/lib/animations';
import type { ComponentNameProps } from '@/types/common';

// ─── Types ────────────────────────────────────────────────────────────────────
interface ComponentNameProps {
  // local props only (all shared types in /src/types/)
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Hooks first
  // Derived state / memos
  // Event handlers
  // Render
  return (
    <section>
      {/* ... */}
    </section>
  );
}
```

### Import Order (enforced by ESLint)
1. React / Next.js core
2. Third-party libraries (framer-motion, lucide-react)
3. Internal aliases (`@/lib`, `@/types`, `@/data`)
4. Relative imports (`./`, `../`)
5. CSS/style imports (last)

### CSS-in-Tailwind Rules
- Never use inline `style={{}}` for values that can be expressed as Tailwind utilities.
- Use `cn()` utility for all conditional className strings.
- CSS custom properties (`var(--color-*)`) defined in `globals.css` for use in complex CSS.
- Avoid `!important` entirely.

---

## 14. AI Model Maintenance Guide

> This section is specifically written for future AI models or developers inheriting this codebase.

### Critical Rules — Do Not Violate

1. **Never switch the router** — This project uses Next.js App Router. Never refactor to Pages Router or add `pages/` directory.
2. **Never add `"use client"` to Server Components** that don't need interactivity — it degrades performance.
3. **Never use `<img>` directly** — Always use Next.js `<Image>` from `next/image`.
4. **Never hardcode colors or typography** in component files — use Tailwind utilities that map to design tokens.
5. **Never animate layout properties** (`height`, `width`, `top`, `left`, etc.) — only `transform` and `opacity`.
6. **Never use Tailwind v4 syntax** — This project uses Tailwind v3. The config is `tailwind.config.ts` (not CSS-only config).
7. **Never inline type declarations** in component files for shared data structures — always use `/src/types/`.
8. **Never break the component hierarchy** — common → sections → pages. Data flows down, never up via prop drilling (use React context for deep sharing).

### Adding a New Service
1. Add entry to `src/data/services.ts` following the `Service` interface.
2. Add corresponding icon mapping in the same file.
3. Add a service illustration to `public/images/services/[id].webp`.
4. The `ServicesGrid.tsx` component renders dynamically from data — no component code change needed.

### Adding a New Portfolio Project
1. Add an entry to `src/data/projects.ts` following the `PortfolioProject` interface.
2. Store images under `public/images/portfolio/[project-id]/` and videos under `public/videos/portfolio/[project-id]/`.
3. Use kebab-case asset names and avoid copying duplicate files from the same repository.
4. Reference the cover, gallery assets, repository URL, and optional live URL in the project entry.
5. If the repository has no local media, leave the media list empty and note that in `mediaNote`.

### Adding a Co-Founder
1. Add the co-founder's confirmed name, role, and portfolio URL to `src/data/founders.ts`.
2. Store their media under `public/images/founders/[founder-id]/` and `public/videos/founders/[founder-id]/`.
3. Do not invent profile details or use unrelated artwork as a founder portrait.
4. The `/about` page renders co-founder profiles and expandable selected-work galleries from this data.

### Modifying Animations
- All Framer Motion variants are centralized in `src/lib/animations.ts`.
- Never define new animation variants inline inside component files.
- The `useReducedMotion` hook wraps all animated sections — always pass it through.

### Testing Responsiveness
Test at these exact widths: `375px` (iPhone SE), `768px` (iPad), `1024px` (iPad Pro landscape), `1280px` (laptop), `1920px` (desktop).

### Debugging CLS (Cumulative Layout Shift)
- Ensure all `<Image>` components have explicit `width` and `height` or `fill` with a sized container.
- Fonts loaded via `next/font` — do NOT load via `<link>` tag or `@import` in CSS.
- Any dynamic content that changes size after load must have `min-height` reserved.
