# Design Guidelines: Neurological Outcomes Research Dissemination Platform

## Design Approach
**System-Based with Academic Excellence Focus**
Following Material Design principles adapted for academic research dissemination, with a sophisticated grayscale palette that conveys scientific credibility and clarity. The design prioritizes information hierarchy, readability, and professional presentation of complex medical research.

## Core Design Elements

### A. Color Palette

**Grayscale Foundation (Dark Mode Primary):**
- Background Deep: 220 15% 12% (rich charcoal)
- Background Mid: 220 12% 18% (elevated surfaces)
- Background Light: 220 10% 24% (cards, modals)
- Text Primary: 0 0% 95% (high contrast body text)
- Text Secondary: 0 0% 65% (supporting content)
- Text Muted: 0 0% 45% (metadata, captions)
- Border Subtle: 220 8% 28% (dividers, borders)
- Border Emphasis: 220 6% 35% (interactive borders)

**Light Mode Alternative:**
- Background: 0 0% 98% (warm white)
- Surface: 0 0% 100% (pure white cards)
- Text Primary: 220 15% 15% (near black)
- Text Secondary: 220 10% 35%
- Borders: 220 8% 88%

**Accent (Minimal Usage):**
- Clinical Blue: 210 45% 55% (CTAs, links, data highlights)
- Success Green: 142 35% 48% (positive outcomes)
- Alert Red: 358 65% 52% (critical data points)

### B. Typography

**Font Stack:**
- Primary: 'Inter' (Google Fonts) - body text, UI elements
- Headings: 'Space Grotesk' (Google Fonts) - h1-h3 for impact
- Data/Code: 'JetBrains Mono' (Google Fonts) - statistics, technical content

**Scale & Hierarchy:**
- Hero/H1: text-5xl lg:text-7xl, font-bold, tracking-tight
- H2 (Section): text-3xl lg:text-5xl, font-semibold
- H3 (Subsection): text-2xl lg:text-3xl, font-medium
- Body Large: text-lg, leading-relaxed
- Body: text-base, leading-7
- Caption/Meta: text-sm, text-secondary

### C. Layout System

**Spacing Primitives:**
Core units: 2, 4, 6, 8, 12, 16, 20, 24 (Tailwind scale)
- Micro spacing: p-2, gap-2 (component internals)
- Standard spacing: p-4, p-6, gap-4 (cards, lists)
- Section spacing: py-12 md:py-20 lg:py-24 (vertical rhythm)
- Large spacing: py-16 md:py-24 lg:py-32 (section dividers)

**Container Strategy:**
- Max width: max-w-7xl for content sections
- Reading width: max-w-4xl for text-heavy content (publications)
- Full bleed: Images and data visualizations can span full width

### D. Component Library

**Hero Section:**
Include a striking full-width hero image (grayscale medical/research imagery: brain scans, ICU monitoring equipment, or abstract neural networks) with text overlay. Use backdrop-blur-md on dark overlay (bg-black/60) for text legibility. Height: min-h-[70vh] to create impact without forcing 100vh.

**Navigation:**
Sticky header with glassmorphism effect (backdrop-blur-lg bg-background/80). Logo left, nav center, CTA right. Mobile: hamburger menu with slide-in drawer.

**Content Cards:**
- Research papers: Elevated cards (bg-surface) with subtle border, hover:shadow-lg transition
- Team members: Grid layout with avatar, name, role, expertise tags
- Data results: Combination of cards with charts/graphs using shadcn-style containers

**Data Visualization:**
- Use Chart.js or Recharts for graphs
- Maintain grayscale with accent blue for data points
- Include clear legends and axis labels

**Forms (Contact):**
- Single column layout, max-w-xl
- Floating labels, border-b-2 inputs with focus states
- Clear error states with red accent
- Dark mode: bg-surface with lighter borders

**Footer:**
Multi-column (4 cols desktop, stack mobile): Quick links, Contact info, Research partners, Newsletter signup. Include institutional logos in grayscale.

### E. Page-Specific Layouts

**Project Overview:**
Hero + 2-column intro (problem statement | solution) + Timeline component + Key findings grid (3-4 cards) + Methodology accordion

**Research Team:**
Grid of team cards (3 cols lg, 2 md, 1 sm) with filter by role/expertise. Each card: Photo (grayscale), name, title, bio expand, contact

**Publications:**
Filterable list with search. Each entry: Citation, abstract toggle, DOI link, PDF download button. Use alternating bg for readability.

**Data/Results:**
Dashboard-style with KPI cards at top (patient outcomes, statistics) + interactive charts below + downloadable datasets section

**Contact:**
2-column split: Form left (name, email, institution, message) + Info right (office location map placeholder, email, phone, office hours)

### F. Images

**Hero Image:**
Full-width grayscale medical research imagery - preferably brain monitoring/ICU setting or abstract neural visualization. Apply dark gradient overlay (bg-gradient-to-r from-black/70 to-black/40) for text contrast.

**Supporting Images:**
- Team photos: Professional headshots, convert to grayscale for consistency
- Data visualization backgrounds: Subtle abstract neural patterns at 10% opacity
- Research imagery: Equipment photos, brain scans - all desaturated to match grayscale theme

## Accessibility & Interactions

- Minimum contrast ratio 4.5:1 for all text
- Focus indicators: 2px solid ring in clinical blue
- Smooth scroll behavior for anchor links
- Skeleton loading states for data-heavy sections
- Responsive images with srcset for performance
- No animations on data visualizations (clarity over flair)
- Hover states: Subtle scale (1.02) and shadow increase for cards

## Critical Implementation Notes

- Multi-column grids for team (3-col) and publications list (single with side filters)
- Vertical rhythm: consistent py-20 lg:py-24 for sections
- Never force 100vh except hero (use 70vh)
- Contact form should feel grounded with context, not floating
- Each section must be complete: CTA sections include supporting text + visual element, not just button