# Wiseloop Landing Page — Design Specification

Source: reference design images (desktop full-page composite + two tablet/desktop crops) of the "Wiseloop" hiring-partner marketing site. This document is the single source of truth for the React/Next.js implementation.

---

## 1. Color System

| Token | Hex (approx) | Usage |
|---|---|---|
| `--color-cream` | `#F3ECDD` | Primary page background (hero, "We've hired before", "Talent builds companies", "Success stories" sections) |
| `--color-cream-light` | `#F8F3E8` | Card backgrounds sitting on cream sections |
| `--color-ink` | `#141414` | Primary text color; background for dark sections (services, "Smarter way", trusted partners, final CTA) |
| `--color-ink-soft` | `#1E1E1E` | Card fill within dark sections (e.g. "Talent Acquisition" cards, "Hire Faster" card) |
| `--color-yellow` | `#F5B93F` | Primary accent — CTA buttons, underline swashes, decorative shapes, "20K+" not used here (purple), bullets |
| `--color-yellow-dark` | `#E5A62B` | Yellow button hover/active |
| `--color-purple` | `#9B8AF2` | Secondary accent — decorative star/shard shapes, "Companies Trust Us" stat card fill |
| `--color-coral` | `#E9604C` | Tertiary accent — decorative hexagon/dot shapes, "Candidates Connected" stat card fill, tag pills on story cards |
| `--color-white` | `#FFFFFF` | Card backgrounds on dark sections, outline-button text on dark bg |
| `--color-border` | `#141414` | Hairline borders on outline buttons and bordered cards (cards use a thin black border, not gray) |
| `--color-muted` | `#6B6B6B` | Secondary/body copy on cream background |
| `--color-muted-light` | `#B8B8B8` | Secondary copy on dark background |

Gradients/overlays: none used — the design is flat color with a hand-drawn illustration aesthetic. Decorative confetti shapes (triangle, 4-point star, hexagon, squiggle) are flat single-color SVGs scattered around headlines, never gradients.

---

## 2. Typography

- **Display / heading font:** A bold, rounded-corner grotesque (reference renders like *Poppins ExtraBold/Black* or *Archivo Black*). Implementation uses **Poppins** (900 weight) via `next/font/google` as the closest widely-available match — chunky, geometric, uppercase-friendly, slightly rounded terminals.
- **Body font:** A clean neutral sans (reference body copy reads like *Inter*). Implementation uses **Inter** via `next/font/google`.

| Style | Font | Weight | Size (desktop) | Size (mobile) | Line height | Letter spacing | Case |
|---|---|---|---|---|---|---|---|
| H1 (hero) | Poppins | 800 | 64px | 36px | 1.05 | -0.02em | UPPERCASE |
| H2 (section headline) | Poppins | 800 | 44px | 28px | 1.1 | -0.01em | UPPERCASE |
| H3 (card headline) | Poppins | 700 | 20px | 18px | 1.2 | normal | UPPERCASE |
| Eyebrow (small label above H2, e.g. "Our Services", "Why Work With Us") | Inter | 500 | 13px | 12px | 1.4 | 0.12em | UPPERCASE |
| Body large (hero subhead) | Inter | 500 | 18px | 15px | 1.5 | normal | sentence |
| Body | Inter | 400 | 15px | 14px | 1.6 | normal | sentence |
| Body small (card copy, dates) | Inter | 400 | 13px | 12px | 1.5 | normal | sentence |
| Button label | Inter | 600 | 14px | 14px | 1 | normal | sentence |
| Stat number (20K+) | Poppins | 800 | 32px | 26px | 1 | normal | — |

Headlines are set uppercase with tight tracking and occasionally break across 2–3 lines with decorative shapes tucked into the whitespace around ascenders/descenders.

---

## 3. Layout

- **Max content width:** `1280px` (`max-w-7xl`), centered, with `24px` horizontal padding on mobile, `40px` on tablet, `80px`+ on desktop via container padding.
- **Section vertical rhythm:** `96px` top/bottom padding on desktop sections, `56px` on mobile. Dark full-bleed sections extend edge-to-edge (`w-screen`/`100%` background) with the same inner max-width container for content.
- **Grid patterns:**
  - Hero: 2-column flex (text block ~55% / illustration ~45%) on desktop, stacked single column on mobile (text first, illustration below).
  - "For Companies / For Candidates": 2-column card grid, stacks to 1 column on mobile.
  - "Dynamic End-to-End Hiring Partners": 4-column card grid on desktop, 2-column on tablet, 1-column on mobile.
  - "Talent Builds Companies" stats: 2 overlapping stat cards + 2 photos in an asymmetric row, stacks vertically on mobile.
  - "Success Stories": horizontal scroll-snap row of 4 cards on desktop (with prev/next arrow affordance implied), 1 column stacked scroll on mobile.
  - "Trusted Partners": 5-column logo strip on desktop, 2–3 column wrap on mobile.
  - Footer: 4-column (brand+blurb / Services / Work / Contact) collapsing to stacked accord<br/>-like column on mobile.
- **Alignment:** All section headlines are left-aligned; hero and CTA sections keep left-aligned text with right/side-aligned visual. Buttons left-align under headline copy.

---

## 4. Components

### 4.1 Navbar
- Sticky/static top bar, cream background, no border/shadow.
- Left: wordmark logo "wiseloop" (lowercase, bold, with a small owl-eyes motif formed by the double "o" — rendered here as styled text with two dot accents).
- Center/left-of-right: nav links `Services`, `Work`, `About Us` — Inter medium, 15px, ink color, no underline, hover → yellow underline.
- Right: pill button "Contact Us" — yellow fill, ink text, small flame/fire icon, `border-radius: 999px`, padding `10px 20px`.

### 4.2 Hero Section
- Two-line/three-line uppercase H1 "TALENT POWERS PROGRESS" with a small yellow parallelogram shape beside "TALENT" and a purple 4-point star beside "POWERS".
- Below H1: two short lines of body copy (muted gray, first line lighter/smaller as a kicker, second line darker as the real subhead).
- Two buttons: primary yellow pill "Try TalentLoop"; secondary outline pill "Explore Features" (transparent bg, 1px ink border).
- Illustration (right): flat line-art hot air balloon with two passengers, in ink black outline with yellow/purple fills, small bird marks and cloud squiggles around it, floating over the section.

### 4.3 "We've Hired Before" Trust Section
- H2 "WE'VE HIRED BEFORE. WE KNOW GREAT TALENT." on the left; a short paragraph with 2 inline highlighted words (yellow highlight behind "growing", coral/pink highlight behind "hire" and "talent") on the right — two-column split at top.
- Below: two testimonial cards side by side, cream-light background, rounded corners (`24px`), thin ink border, slight rotation (few degrees) for a "stacked photo" feel:
  - **For Companies** card: line-art illustration of a person at a desk, quote text, bold label "FOR COMPANIES", small pill button.
  - **For Candidates** card: line-art illustration of three people with crossed arms, quote text, bold label "FOR CANDIDATES", small pill button.

### 4.4 "Dynamic End-to-End Hiring Partners" (dark section)
- Dark ink full-bleed background.
- Eyebrow "Our Services" centered-small above H2, H2 in white uppercase with purple/coral decorative shapes.
- 4 white cards in a row: each has a small colored icon-square (purple/yellow/coral/yellow), bold uppercase title (`Talent Acquisition`, `Specialized Hiring`, `Candidate Development`, `HR Strategy Consulting`), and 2–3 lines of small gray body copy. Cards: white bg, `16px` radius, `24px` padding, subtle border.

### 4.5 "Talent Builds Companies" Stats Section
- Cream background. H2 "TALENT BUILDS COMPANIES" with coral hexagon + purple star accents.
- Sub-headline "GET TALENT. GET GROWTH. GET AHEAD." (smaller bold uppercase) + short paragraph.
- Row of 2 stat cards + 2 photo tiles: purple card "20K+ / Companies Trust Us", photo of a person at desk, coral card "10M+ / Candidates Connected", photo of a team meeting — all `20px` radius, cards overlap the photos slightly with negative margin for a collage effect.

### 4.6 "Success Stories" Section
- Cream background, centered eyebrow-free H2 "SUCCESS STORIES" centered, centered supporting paragraph below it.
- Horizontally scrollable row of story cards (4 visible): each card = photo top (with a small colored tag pill overlapping the top-left corner, e.g. "Tech Startup – Talent Boost"), title below in bold, date + read-time in small gray text, black pill "Read More" button, cream-light card background, rounded `20px` corners.
- Centered yellow pill button "All Stories" below the row.
- Left/right chevron affordances at the row edges for scrolling on desktop.

### 4.7 "A Smarter Way to Build Your Team" (dark section)
- Dark ink background, eyebrow "Why Work With Us" centered small, H2 centered "A SMARTER WAY TO BUILD YOUR TEAM" with coral hexagon + purple shard accents.
- Centered stack of 2–3 overlapping cream cards (rotated collage), top card visible: bolt icon, bold "HIRE FASTER" title, small gray paragraph beneath.

### 4.8 "Trusted Partners" (dark section)
- Dark ink background continuing from above (or its own dark block), small eyebrow, centered H2 "TRUSTED PARTNERS", supporting paragraph.
- Row of 5 logo chips (wordmark + small icon) in white/light boxes or plain white text on dark, evenly spaced, wraps to 2–3 per row on mobile: `Salontopper`, `seeing flex`, `Graafschap College`, `fides`, `8RHK…`.

### 4.9 Final CTA ("Let's Build Your Team")
- Dark ink background, centered H2 "LET'S BUILD YOUR TEAM" with purple triangle + yellow arrow accents.
- Two centered pill buttons: yellow "Contact Us" and coral "Mail One Direct".

### 4.10 Footer
- Cream-light/cream background, large "wiseloop" wordmark logo top-left, short tagline underneath ("Building better teams with smarter hiring. WiseLoop — your trusted partner in talent.").
- Right-aligned nav columns mirrored from navbar (Services / Work / About Us / Contact) plus social icon row (LinkedIn, Twitter/X, Instagram — simple circular icon buttons).
- Bottom bar: copyright line "© 2025 WiseLoop. All rights reserved." left, "Terms & Conditions" link right, separated by a thin top border.

---

## 5. Responsive Design

Breakpoints (Tailwind defaults, used as-is):
- **Mobile:** `< 640px` — single column everywhere; hero illustration moves below text and shrinks ~70%; nav links collapse into a hamburger menu revealing a full-screen/dropdown panel; card grids become 1 column; success-story row becomes a vertical stack (native scroll-snap horizontal retained but full-width cards); stat/photo collage stacks vertically; footer columns stack with nav links wrapping.
- **Tablet:** `640px–1024px` — 2-column card grids (services 2x2, footer 2-column); hero stays 2-column but illustration shrinks; success stories show ~1.5 cards per view (scrollable).
- **Desktop:** `≥ 1024px` — full multi-column layouts as described in Section 3; container caps at `1280px` and centers with growing side padding up to `1440px+` viewports.

General rules: font sizes step down one tier per breakpoint (H1 64→44→36, H2 44→32→28); section padding steps down (96→72→56px); decorative confetti shapes are hidden or shrunk on mobile to avoid clutter; buttons remain full-width stacked (not side-by-side) on the smallest screens where two CTAs appear together.

---

## 6. Visual Effects

- **Border radius:** Buttons/pills `999px` (full). Cards `16px–24px` (services cards `16px`, testimonial/story/stat cards `20–24px`). Logo chips `12px`.
- **Borders:** Most cards use a thin `1px solid` ink-black border rather than a drop shadow, reinforcing the flat hand-drawn look. Outline buttons use the same `1px solid` ink border.
- **Shadows:** Minimal — only a very soft shadow (`0 4px 12px rgba(0,0,0,0.06)`) on stacked/rotated card collages to lift them off the background; no heavy elevation shadows elsewhere.
- **Rotation:** Testimonial cards and the "Hire Faster" collage cards are rotated ±2–4deg via `transform: rotate()` to mimic scattered photographs.
- **Decorative shapes:** Flat-fill SVG confetti (triangle, 4-point star/sparkle, hexagon, dot, squiggle/swash, arrow) placed absolutely around headlines in yellow/purple/coral — purely decorative, `aria-hidden`.
- **Transitions:** `150–200ms ease` on button background/border hover, link underline hover, and card lift (`translateY(-4px)`) on hover for story/service cards.
- **Hover states:** Yellow button → darker yellow fill. Outline button → ink fill with cream text (invert). Nav link → yellow underline grows from center. Story/service cards → subtle `translateY(-4px)` + border darkens.
- **No blur/glassmorphism effects** are present in the reference; the aesthetic is flat, illustrated, high-contrast (cream/ink/yellow/purple/coral).
