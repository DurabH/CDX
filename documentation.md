# CDX — Creative · Develop · Experience
## Project Documentation

> **Version:** 1.1.0
> **Created:** 2026-10-17
> **Updated:** 2026-10-17 — Added Hybrid Multi-Page Architecture decision (§1)
> **Author:** CDX Engineering Team
> **Taglines:** "Create. Develop. Experience." · "Create. Build. Transform."

---

## Table of Contents

1. [Site Architecture Decision](#1-site-architecture-decision)
2. [Project Overview](#2-project-overview)
3. [Brand Identity](#3-brand-identity)
4. [File & Folder Architecture](#4-file--folder-architecture)
5. [Page Structures](#5-page-structures)
6. [Component System](#6-component-system)
7. [User Journeys](#7-user-journeys)
8. [Animation Strategy](#8-animation-strategy)
9. [Media Handling Standards](#9-media-handling-standards)
10. [Responsive Design System](#10-responsive-design-system)
11. [Performance & SEO Standards](#11-performance--seo-standards)
12. [Data Layer](#12-data-layer)
13. [TypeScript Type System](#13-typescript-type-system)
14. [Accessibility Standards](#14-accessibility-standards)

---

## 1. Site Architecture Decision

### Architecture: Hybrid Multi-Page Website

> **Decision Date:** 2026-10-17
> **Status:** Confirmed — do not alter without explicit stakeholder approval.

The CDX website is a **Hybrid Multi-Page Architecture** built on the **Next.js 15 App Router**. Each route is a
distinct, fully server-rendered page with its own metadata, layout, and content focus. Pages are linked via the
persistent Navbar and share a single root `layout.tsx` (Navbar + Footer + ScrollProgress injected globally).

This architecture provides:
- **True URL-addressable pages** — each section has a shareable, indexable URL.
- **Per-page SEO** — individual `generateMetadata()` per route for targeted search optimization.
- **Optimal LCP** — each page is SSR'd with only the data it needs; no over-fetching.
- **Smooth navigation** — Next.js `<Link>` prefetching + `AnimatePresence` page transitions feel instant.
- **Maintainability** — clear separation of concerns; each page is independently editable.

### Page Route Map

| Route | Page | Primary Purpose | Key Interaction |
|-------|------|-----------------|------------------|
| `/` | Home | Landing & conversion hub | Smooth-scroll sections, CTAs |
| `/services` | Services | Deep-dive service breakdown | Tabbed Engineering vs Creative split |
| `/portfolio` | Portfolio | Filterable media showcase | Category filter, lazy media, case-study modal |
| `/about` | About | Company story, co-founders & principles | Founder profiles, portfolio links, selected work |
| `/contact` | Contact | Lead generation | High-converting form + contact panel |

### Services Grouping (Two Verticals)

The `/services` page divides the five services into two named verticals for clearer positioning:

**Engineering Vertical**
| Service | Slug |
|---------|------|
| Full-Stack Web Application Development | `web-development` |
| Mobile Application Development (iOS & Android) | `mobile-development` |
| AI & Machine Learning Services | `ai-ml` |

**Creative Vertical**
| Service | Slug |
|---------|------|
| Graphic Design & UI/UX Design | `design` |
| High-End Video Editing & Media Creation | `video-media` |

### Navigation Behaviour
- **Navbar:** Persistent across all routes. Links use Next.js `<Link>` (client-side navigation, no full reload).
- **Page transitions:** Wrapped in Framer Motion `<AnimatePresence>` in `layout.tsx` — 300ms fade + slight translate.
- **Scroll state:** Each page starts at the top (Next.js default scroll restoration). Hero sections are always above the fold.
- **Active route:** Navbar highlights the current route with a gradient underline via `usePathname()`.
- **Mobile:** Full-screen overlay menu with staggered link reveals; closes on route change.

### What This Architecture Is NOT
- **Not a Single-Page Application (SPA):** There is no single `page.tsx` with hash-anchor in-page scrolling for routing between major sections. Each route is its own server-rendered page.
- **Not Pages Router:** The project uses the Next.js App Router exclusively. The `pages/` directory does not exist.
- **Not a Static Export:** Pages use `generateMetadata()` and may use server-side data; static export (`output: 'export'`) is not used.

---

## 2. Project Overview

CDX (Creative · Develop · Experience) is a premium tech-agency startup offering five core service verticals.
The website serves as the primary marketing and conversion surface — designed to immediately communicate
premium quality, technical excellence, and creative capability to prospective clients.

### Business Goals
- **Primary CTA:** Drive contact form submissions and discovery call bookings.
- **Secondary CTA:** Portfolio showcase to build trust and demonstrate output quality.
- **Tertiary:** Communicate brand identity as a premium, AI-forward full-service digital agency.

### Core Services

**Engineering Vertical**

| # | Service | Slug |
|---|---------|------|
| 1 | Full-Stack Web Application Development | `web-development` |
| 2 | Mobile Application Development (iOS & Android) | `mobile-development` |
| 3 | AI & Machine Learning Services | `ai-ml` |

**Creative Vertical**

| # | Service | Slug |
|---|---------|------|
| 4 | Graphic Design & UI/UX Design | `design` |
| 5 | High-End Video Editing & Media Creation | `video-media` |

---

## 3. Brand Identity

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#0B0F17` | Global page background |
| `--color-bg-secondary` | `#111827` | Card/section backgrounds |
| `--color-bg-tertiary` | `#1A2235` | Elevated surfaces, hover states |
| `--color-text-primary` | `#FFFFFF` | Headlines, primary copy |
| `--color-text-secondary` | `#94A3B8` | Body text, subtitles |
| `--color-text-muted` | `#475569` | Captions, metadata |
| `--color-accent-blue` | `#007AFF` | Primary brand accent |
| `--color-accent-cyan` | `#00D4FF` | Secondary accent, gradient end |
| `--color-gradient-brand` | `#007AFF to #00D4FF` | CTAs, logo, highlight elements |
| `--color-border` | `rgba(255,255,255,0.08)` | Subtle dividers, card borders |
| `--color-border-accent` | `rgba(0,122,255,0.3)` | Focused/active borders |

### Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Hero | `Inter` (Google Fonts) | 800 (ExtraBold) | `clamp(3rem, 8vw, 6rem)` |
| H1 | `Inter` | 700 (Bold) | `clamp(2rem, 5vw, 3.5rem)` |
| H2 | `Inter` | 600 (SemiBold) | `clamp(1.5rem, 3vw, 2.25rem)` |
| H3 | `Inter` | 600 | `1.25rem` |
| Body | `Inter` | 400 | `1rem (16px)` |
| Caption / Label | `Inter` | 500 | `0.875rem` |
| Mono / Code | `JetBrains Mono` | 400 | `0.875rem` |

### Logo & Monogram
- The CDX monogram is an SVG-based logo with the gradient `#007AFF to #00D4FF` applied to the letterform.
- Maintained as a React SVG component in `/src/components/common/Logo.tsx`.
- Minimum display size: `32px` height.
- Never placed on backgrounds lighter than `#1A2235`.

### Motion & Feel
- **Personality:** Precise, confident, futuristic — not flashy or chaotic.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for entrances.
- **Timing:** Micro-interactions `150–250ms`, element reveals `400–600ms`, page transitions `300ms`.

---

## 3. File & Folder Architecture

```
d:\CDX\
├── public/
│   ├── images/
│   │   ├── hero/               # Hero section visuals & backgrounds
│   │   ├── services/           # Per-service illustration assets
│   │   ├── portfolio/          # Client/work samples grouped by project slug
│   │   │   ├── gym-website/
│   │   │   └── eventbooking-website/
│   │   ├── founders/
│   │   │   └── waleed-bin-naeem/ # Co-founder portfolio media
│   │   ├── team/               # Team member photos
│   │   └── branding/           # Logo files (SVG, PNG, dark/light variants)
│   ├── videos/
│   │   ├── hero-reel.mp4       # Muted ambient hero background video
│   │   ├── showreel.mp4        # Full showreel for media section
│   │   └── founders/
│   │       └── waleed-bin-naeem/ # Co-founder portfolio videos
│   └── fonts/                  # Self-hosted font fallbacks (if needed)
│
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── layout.tsx          # Root layout: fonts, metadata, providers
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global resets, CSS custom properties
│   │   ├── services/
│   │   │   └── page.tsx        # /services — full services breakdown
│   │   ├── portfolio/
│   │   │   └── page.tsx        # /portfolio — filterable project showcase
│   │   ├── about/
│   │   │   └── page.tsx        # /about — team, values, story
│   │   └── contact/
│   │       └── page.tsx        # /contact — contact form + info
│   │
│   ├── components/
│   │   ├── common/             # Atomic, reusable UI elements
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── ScrollProgress.tsx
│   │   │
│   │   ├── sections/           # Full page sections (assembled from common)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── PortfolioShowcase.tsx
│   │   │   ├── AIHighlightSection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── media/              # Lazy-loaded media components
│   │       ├── PhotoGallery.tsx
│   │       ├── VideoPlayer.tsx
│   │       └── ParallaxImage.tsx
│   │
│   ├── data/                   # Static content — decoupled from UI
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── founders.ts
│   │   ├── company.ts
│   │   └── testimonials.ts
│   │
│   ├── styles/
│   │   ├── animations.css      # Keyframe definitions, animation utilities
│   │   └── tailwind.css        # Tailwind directives + custom layer overrides
│   │
│   ├── types/
│   │   ├── service.ts
│   │   ├── project.ts
│   │   ├── founder.ts
│   │   └── common.ts
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useScrollProgress.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useReducedMotion.ts
│   │
│   └── lib/                    # Utility functions & helpers
│       ├── utils.ts
│       └── cn.ts               # Class name utility (clsx + tailwind-merge)
│
├── documentation.md            # <- You are here
├── tech-stack.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 5. Page Structures

### 5.1 Home Page (`/`)

**Layout Flow (top to bottom):**

```
[Navbar — sticky, blur backdrop]
[HeroSection]
  |- Animated headline with gradient text
  |- Sub-tagline fade-in
  |- CTA buttons (Primary: "Start a Project", Secondary: "View Portfolio")
  |- Ambient background: animated mesh gradient blobs
  |- Floating tech-badge pills (Next.js, React, AI, etc.)
[StatsBar]
  |- 4 animated counters: Projects Delivered, Client Satisfaction, Years Active, Technologies
[ServicesGrid]
  |- 5 service cards with icon, gradient hover state, brief description
  |- "View All Services" link
[AIHighlightSection]
  |- Full-width section spotlighting AI/ML services
  |- Animated neural-network background motif
  |- Feature list with icon bullets
[PortfolioShowcase]
  |- 3-col masonry grid — top 6 featured projects
  |- Filter tabs by service category
  |- "View Full Portfolio" CTA
[Testimonials]
  |- Auto-scrolling horizontal carousel
  |- Client name, avatar, quote, rating
[ContactForm — minimal teaser]
  |- "Ready to build something?" section
  |- Large CTA -> links to /contact
[Footer]
```

### 5.2 Services Page (`/services`)

```
[Navbar]
[Page Hero — compact]
  |- "What We Build" headline
  |- Brief intro paragraph
  |- Two vertical tabs: Engineering | Creative
[Engineering Vertical — Tab 1]
  |- Full-Stack Web Application Development card
  |- Mobile Application Development card
  |- AI & Machine Learning Services card
  |- Each card: icon, full description, tech stack chips, example use cases
  |- Staggered entrance animation (80ms apart)
[Creative Vertical — Tab 2]
  |- Graphic Design & UI/UX Design card
  |- High-End Video Editing & Media Creation card
  |- Each card: icon, full description, tools used, example outcomes
  |- Staggered entrance animation (80ms apart)
[ProcessSection]
  |- 5-step horizontal timeline: Discovery -> Design -> Develop -> Test -> Launch
[FAQ Accordion]
  |- Common client questions per service category
[CTA Banner]
  |- "Have a project in mind? Let's talk."
[Footer]
```

### 5.3 Portfolio Page (`/portfolio`)

```
[Navbar]
[Page Hero]
  |- "Our Work" headline with animated counter (e.g., "50+ Projects")
[Filter Bar]
  |- Category tabs: All | Web | Mobile | AI | Design | Video
[Portfolio Grid]
  |- Responsive masonry/grid layout
  |- Each card: thumbnail image, project name, category badge, domain challenge and value-focused description
  |- Highlights explain what the experience offers and how it helps its audience
  |- Hover: overlay with "View Case Study" button
  |- Expandable media gallery, plus repository and live-site links where available
[Footer]
```

### 5.4 About Page (`/about`)

```
[Navbar]
[Hero — About]
  |- About CDX headline and company positioning
[Co-Founders]
  |- Founder names and confirmed roles
  |- Portfolio links and expandable selected-work gallery where available
  |- Add biographies and profile photos once provided
[Operating Principles]
  |- Build with intent, design for people, ship with polish, stay curious
[Footer]
```

### 5.5 Contact Page (`/contact`)

```
[Navbar]
[Contact Hero]
  |- "Let's Build Something Great" headline
[Two-Column Layout]
  Left: Contact Form
    |- Fields: Name, Email, Company (optional), Service Interest (dropdown), Message
    |- Submit button with loading state and success animation
  Right: Contact Info Panel
    |- Email, WhatsApp/Phone, Office Location
    |- Social links (LinkedIn, GitHub, Behance, Instagram)
    |- Availability badge ("Currently accepting projects")
[Footer]
```

---

## 6. Component System

### 6.1 Navbar (`Navbar.tsx`)

**Behavior:**
- Transparent on initial load (overlaid on hero).
- On scroll > 60px: `backdrop-blur-xl`, semi-transparent dark bg with subtle bottom border.
- Mobile: hamburger menu -> full-screen slide-in overlay with staggered nav links.
- Active page indicator: gradient underline on current route.
- Sticky positioned (`position: sticky; top: 0; z-index: 50`).

**Props:** None (reads current route via `usePathname()`).

### 6.2 Button (`Button.tsx`)

**Variants:**

| Variant | Description |
|---------|-------------|
| `primary` | Gradient bg (`#007AFF to #00D4FF`), white text, glow shadow on hover |
| `secondary` | Transparent bg, gradient border, gradient text on hover |
| `ghost` | No border, subtle hover bg, muted text |
| `icon` | Square, icon-only, tooltip on hover |

**Sizes:** `sm`, `md` (default), `lg`

**States:** Default, Hover (scale + glow), Active (scale-down), Loading (spinner), Disabled (reduced opacity)

### 6.3 Card (`Card.tsx`)

**Variants:**

| Variant | Description |
|---------|-------------|
| `service` | Dark bg, gradient top-border on hover, icon + text |
| `portfolio` | Image thumbnail with overlay on hover |
| `testimonial` | Quote-first layout, avatar, name, star rating |
| `stat` | Large number, label, optional trend indicator |

### 6.4 SectionHeader (`SectionHeader.tsx`)

Renders: optional eyebrow label (small caps, gradient), H2 title, optional subtitle paragraph.
Accepts `align` prop: `left`, `center`.

### 6.5 Modal (`Modal.tsx`)

- Renders into a React Portal (document.body).
- Backdrop blur + fade-in animation.
- Inner content: slide-up entrance.
- Close: X button, Escape key, backdrop click.
- Used for: portfolio case study detail, video player full-screen.

### 6.6 PhotoGallery (`PhotoGallery.tsx`)

- Masonry layout using CSS Grid with `grid-auto-rows`.
- Images: lazy-loaded via Next.js `<Image>` with `loading="lazy"` and `placeholder="blur"`.
- Click to open in Modal lightbox.
- Category filtering with animated reflow transition.

### 6.7 VideoPlayer (`VideoPlayer.tsx`)

- Wraps native HTML5 `<video>` element.
- Custom controls: play/pause, mute/unmute, progress bar, fullscreen.
- Auto-muted for ambient/background use.
- For the hero background: `autoPlay muted loop playsInline`, no controls shown.
- For showreel: full custom controls UI.
- Lazy loading: Intersection Observer triggers load when in viewport.

---

## 7. User Journeys

### Journey A: Prospective Client — Service Discovery
1. Lands on `/` via Google search for "web development agency".
2. Hero section grabs attention -> reads tagline -> scrolls to ServicesGrid.
3. Clicks "Full-Stack Web Development" card -> reads full card.
4. Scrolls to Portfolio -> sees relevant projects -> clicks case study.
5. Reviews the project's audience, value, and supporting media.
6. Scrolled to Contact teaser -> clicks primary CTA -> navigates to `/contact`.
7. Fills and submits contact form.

### Journey B: Design Client — Portfolio-First
1. Lands on `/portfolio` via referral/direct link.
2. Filters by "Design" -> browses project thumbnails.
3. Clicks portfolio card -> views case study with images, video reel.
4. Impressed -> navigates to `/about` -> reads team info.
5. Clicks contact CTA -> navigates to `/contact` -> submits inquiry.

### Journey C: Investor / Partner
1. Lands on `/about` — reads founding story, values, team.
2. Checks `/services` to understand service breadth.
3. Reviews `/portfolio` for portfolio quality.
4. Contacts via email link (no form).

---

## 8. Animation Strategy

### Philosophy
All animations must reinforce the premium, technical aesthetic — never distract.
Performance is paramount: **60fps locked, zero jank**.

### Principles
1. **Purpose-driven:** Every animation communicates state or guides attention.
2. **Reduced Motion:** All animations respect `prefers-reduced-motion` via `useReducedMotion` hook.
3. **GPU-only properties:** Only animate `transform` and `opacity`. Never animate layout properties.
4. **Stagger discipline:** Staggered reveals capped at 8 children x 80ms max = 640ms total.

### Animation Catalog

| Animation | Component | Trigger | Duration | Easing |
|-----------|-----------|---------|----------|--------|
| Hero headline reveal | `HeroSection` | Mount | 800ms | expo-out |
| Sub-text fade | `HeroSection` | +200ms delay | 600ms | ease-out |
| CTA buttons slide-up | `HeroSection` | +400ms delay | 500ms | expo-out |
| Stats counter increment | `StatsBar` | Intersection | 1500ms | ease-out |
| Service card entrance | `ServicesGrid` | Intersection | 500ms + stagger 80ms | expo-out |
| Service card hover glow | `Card (service)` | Hover | 250ms | ease |
| Portfolio card entrance | `PortfolioShowcase` | Intersection | 400ms + stagger 60ms | expo-out |
| Portfolio card hover overlay | `Card (portfolio)` | Hover | 200ms | ease |
| Navbar bg transition | `Navbar` | Scroll > 60px | 300ms | ease |
| Mobile menu open | `Navbar` | Click | 350ms | expo-out |
| Section fade-up | All sections | Intersection | 600ms | expo-out |
| Modal open | `Modal` | Click | 300ms | expo-out |
| Modal close | `Modal` | Close trigger | 200ms | ease-in |
| Page transition | `layout.tsx` | Route change | 300ms | ease |
| Scroll progress bar | `ScrollProgress` | Scroll | Continuous | — |

### Framer Motion Variants Convention

```typescript
// Standard fade-up entrance (reused across components)
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};
```

### Background Animations
- **Hero Mesh Gradient:** CSS `@keyframes` animated gradient blobs — GPU-accelerated via `transform: translate()`.
- **Particle Field (AI Section):** Canvas-based — max 60 nodes, `requestAnimationFrame` loop, throttled on mobile.
- **Noise Texture Overlay:** Static PNG at 4–6% opacity for tactile depth.

---

## 9. Media Handling Standards

### Images

| Rule | Detail |
|------|--------|
| Format | WebP primary, JPEG fallback |
| Component | Next.js `<Image>` always (auto-optimization) |
| Loading | `loading="lazy"` for below-fold, `priority` for hero/LCP images |
| Placeholder | `placeholder="blur"` with `blurDataURL` for smooth skeleton |
| Alt Text | Descriptive, non-keyword-stuffed; empty `alt=""` for purely decorative images |
| Sizing | `sizes` prop set per breakpoint to prevent oversized downloads |
| Max resolution | Hero: 1920x1080. Portfolio thumbs: 800x600. Team photos: 400x400 |

### Videos

| Rule | Detail |
|------|--------|
| Format | MP4 (H.264) for compatibility; WebM for Chrome/Firefox |
| Hero bg video | `autoPlay muted loop playsInline`, no controls, `pointer-events: none` |
| Lazy loading | Intersection Observer — `preload="none"` until in-viewport |
| Fallback | Static image fallback if video fails to load |
| Mobile | Hero bg video disabled on mobile (<768px) — replaced with static hero image |
| Max file size | Hero bg: 8MB max. Showreel: 50MB max (streamed, not preloaded) |

### Fonts
- Loaded via `next/font/google` for zero CLS and optimal subsetting.
- `Inter` for UI, `JetBrains Mono` for code/monospace elements.
- `display: 'swap'` set for all fonts.

---

## 10. Responsive Design System

### Breakpoints (Tailwind defaults)

| Name | Min Width | Use Case |
|------|-----------|----------|
| `sm` | 640px | Large phones landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Standard desktops |
| `2xl` | 1536px | Wide screens |

### Layout Containers
- Max content width: `1280px` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- Section vertical padding: `py-20 md:py-28 lg:py-32`.

### Grid Strategies

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| ServicesGrid | 1 col | 2 col | 3 col |
| PortfolioGrid | 1 col | 2 col | 3 col |
| TeamGrid | 1 col | 2 col | 4 col |
| StatsBar | 2x2 | 4 col | 4 col |

---

## 11. Performance & SEO Standards

### Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.05 |
| FID / INP | < 100ms |
| FCP | < 1.8s |

### SEO Implementation
- Each page exports a `generateMetadata()` function.
- Includes: `title`, `description`, `openGraph`, `twitter`, `robots`.
- Structured data (JSON-LD): `Organization` schema in root layout, `Service` schema on services page.
- Sitemap: auto-generated via App Router `sitemap.ts`.
- `robots.txt`: generated via `robots.ts`.

### Optimization Checklist
- Dynamic imports for heavy components (PhotoGallery, VideoPlayer, Modal).
- `React.memo` on pure list-item components (Card variants).
- `useCallback`/`useMemo` on filter functions in Portfolio page.
- Intersection Observer (not scroll event listener) for reveal animations.
- Avoid third-party scripts; load analytics deferred.

---

## 12. Data Layer

### `services.ts` Shape

```typescript
export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    shortDescription: '...',
    fullDescription: '...',
    icon: 'Monitor',           // Lucide icon name
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    highlights: ['...', '...'],
    ctaLabel: 'Build Your Web App',
  },
  // ... 4 more services
];
```

### `projects.ts` Shape

```typescript
export const projects: PortfolioProject[] = [
  {
    id: 'project-slug',
    title: 'Project Name',
    category: 'Web application',
    description: '...',
    highlights: ['...'],
    repositoryUrl: 'https://github.com/owner/repository',
    liveUrl: 'https://example.com', // optional
    coverImage: '/images/portfolio/project-slug/cover.webp', // optional
    media: [
      { type: 'image', src: '/images/portfolio/project-slug/detail.webp', title: '...', alt: '...' },
      { type: 'video', src: '/videos/portfolio/project-slug/demo.mp4', title: '...', alt: '...' },
    ],
  },
];
```

Keep each repository's copied media in a folder named for that project under
`public/images/portfolio/` and `public/videos/portfolio/`. Use kebab-case names,
avoid duplicate copies when a repository includes the same asset in multiple folders,
and leave `media` empty when a project has no local media to import.

### `company.ts` Shape

```typescript
export const company = {
  name: 'CDX',
  fullName: 'Creative · Develop · Experience',
  taglines: ['Create. Develop. Experience.', 'Create. Build. Transform.'],
  founded: 2024,
  mission: '...',
  values: [{ icon: '...', title: '...', description: '...' }],
  stats: [{ label: 'Projects Delivered', value: 50, suffix: '+' }],
  team: [{ name: '...', role: '...', avatar: '...', socials: { linkedin: '...' } }],
  contact: { email: '...', phone: '...', location: '...' },
  socials: { linkedin: '...', github: '...', behance: '...', instagram: '...' },
};
```

---

## 13. TypeScript Type System

All interfaces live in `/src/types/`. Components import types from there — never inline type declarations inside component files unless locally scoped props.

```typescript
// types/service.ts
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  techStack: string[];
  highlights: string[];
  ctaLabel: string;
}

// types/project.ts
export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  title: string;
  alt: string;
  poster?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  repositoryUrl: string;
  liveUrl?: string;
  coverImage?: string;
  coverAlt?: string;
  media: ProjectMedia[];
  mediaNote?: string;
}

// types/common.ts
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type Alignment = 'left' | 'center' | 'right';
```

---

## 14. Accessibility Standards

- **WCAG 2.1 AA** compliance target.
- All interactive elements have `:focus-visible` styles (gradient outline).
- Color contrast: all text 4.5:1 minimum against background.
- Modal: focus trap; `aria-modal="true"`, `role="dialog"`.
- Images: descriptive `alt` text always set.
- Animated elements: respect `prefers-reduced-motion`.
- Hamburger menu: `aria-expanded`, `aria-controls`, `aria-label`.
- Form: proper `<label>` for every input, `aria-required`, `aria-invalid` on error state.
- Skip navigation link: visually hidden but focusable ("Skip to main content" -> `#main-content`).
