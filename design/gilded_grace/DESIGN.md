---
name: Gilded Grace
colors:
  surface: '#fdf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fdf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3eb'
  surface-container: '#f1ede6'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e6e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#4d463a'
  inverse-surface: '#31302b'
  inverse-on-surface: '#f4f0e8'
  outline: '#7f7668'
  outline-variant: '#d1c5b5'
  surface-tint: '#755a23'
  primary: '#755a23'
  on-primary: '#ffffff'
  primary-container: '#b8975a'
  on-primary-container: '#453000'
  inverse-primary: '#e6c180'
  secondary: '#3c684a'
  on-secondary: '#ffffff'
  secondary-container: '#bbebc6'
  on-secondary-container: '#406c4e'
  tertiary: '#9e403a'
  on-tertiary: '#ffffff'
  tertiary-container: '#ea7b71'
  on-tertiary-container: '#641613'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea6'
  primary-fixed-dim: '#e6c180'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5b430d'
  secondary-fixed: '#bdeec9'
  secondary-fixed-dim: '#a2d2ae'
  on-secondary-fixed: '#00210e'
  on-secondary-fixed-variant: '#244f34'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ac'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#7f2924'
  background: '#fdf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e6e2da'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  metric-number:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-touch hospitality, tranquil poise, and modern celebratory elegance. Designed for premier wedding planners, event coordinators, and hosts managing real-time guest operations, the visual tone avoids chaotic event-day urgency in favor of grounded, luxurious control.

The visual direction marries modern editorial minimalism with subtle tactile luxury. It balances the timeless romance of bridal stationery with the precise density required of a live SaaS management console. Clean expansive spaces, warm fibrous backdrops, fine golden strokes, and deliberate serif titling foster trust, calm, and elevated sophistication.

## Colors

The palette relies on organic, linen-inspired warmth paired with precious metal accents and botanical undertones.

- **Background Canvas (`#FAF6EE`):** Warm Ivory provides an intimate, non-clinical foundation that reduces eye strain while evoking high-grade stationery paper.
- **Card Surfaces (`#FFFFFF`):** Crisp pure white cleanly elevates dashboard modular elements above the ivory wash, encased by a structural border in Champagne Veil (`#EADFC8`).
- **Primary Accent (`#B8975A`):** Warm Gold serves as the focal point for primary actions, active navigational indicators, real-time counters, and critical progression states.
- **Supportive Accents:**
  - **Sage Green (`#5E8B6B`):** Applied to confirmed RSVPs, successful seatings, and positive dietary confirmations. Paired with soft tint `#EDF4EE`.
  - **Rosewood Red (`#B5524A`):** Applied to dietary alerts, cancellations, and real-time exceptions. Paired with soft tint `#FAECEB`.
  - **Gold Tint (`#F6EFE2`):** Used for selection highlights, secondary pill fills, and hover states.
- **Typography & Structure:**
  - **Deep Charcoal (`#2B2B2B`):** The primary reading ink, softer and more refined than pure black.
  - **Warm Stone (`#7A7468`):** Muted metadata, subheaders, timestamp tracking, and table headers.

## Typography

The type system balances evocative editorial warmth with ergonomic data consumption.

- **Playfair Display** commands headlines, card titles, and high-level live metrics (such as "Guests Checked In", "Pending Arrivals"). Its delicate serifs and calligraphic roots reflect editorial event programs. It should never be used below 18px.
- **Inter** provides neutral, high-legibility clarity across dense real-time table views, seat assignments, search filters, dietary tags, and buttons. 
- All uppercase metadata labels leverage wide tracking (`letterSpacing: 0.05em`) with light weights to maintain an airy, luxury-bespoke print feel without sacrificing hierarchy.

## Layout & Spacing

The dashboard uses a 12-column responsive fluid grid with generous outer breathability, honoring the unhurried cadence of high-end events.

- **Breakpoints:**
  - **Mobile (< 768px):** 4-column layout, `1rem` outer canvas margin, gutters of `1rem`. Sticky top glance-bar for check-in speed.
  - **Tablet (768px – 1024px):** 8-column layout, `2rem` outer margins, gutters of `1.5rem`.
  - **Desktop (> 1024px):** 12-column layout capped at `1440px` maximum width, centered with `3rem` margins to ensure comfortable side borders.
- **Rhythm:** Generous interior padding inside modular cards (`2rem` desktop, `1.25rem` mobile) guarantees data sets never feel cramped. Vertical stack spacing between summary stats and tabular data preserves visual order during active guest arrivals.

## Elevation & Depth

Visual depth is achieved through layered warm surfaces, crisp hairline borders, and atmospheric ambient diffusion. High-intensity drop shadows and stark contrast borders are avoided to retain softness.

- **Canvas Foundation:** Layer 0 is the Warm Ivory `#FAF6EE` baseline canvas.
- **Surface Level 1 (Cards & Data Panels):** `#FFFFFF` surfaces bounded by a 1px solid border in `#EADFC8`. Supported by a gentle ambient drop shadow: `0px 4px 20px -2px rgba(184, 151, 90, 0.06), 0px 1px 3px 0px rgba(43, 43, 43, 0.02)`. The gold tint in the shadow prevents the gray mud effect typical of cold monochromatic elevations.
- **Surface Level 2 (Modals, Seating Drawers & Flyouts):** Pure white background framed with `#EADFC8` border and an elevated layered shadow: `0px 16px 36px -4px rgba(43, 43, 43, 0.08), 0px 4px 12px -2px rgba(184, 151, 90, 0.08)`.
- **Dividers:** Hairline borders of 1px solid `#EADFC8` seamlessly group guest information without visual noise.

## Shapes

The geometry blends structured discipline with organic curvature:

- **Cards & Data Containers:** Explicitly calibrated to `16px` border-radius (`rounded-lg`), delivering a soft architectural form that avoids aggressive corners.
- **Pill Geometry:** Used for chips, status tags, toggle chips, action badges, and guest count counters (`rounded-full` / 9999px), providing an inviting visual contrast against the structured rectilinearity of tables and cards.
- **Interactive Controls:** Input elements, search bars, and utility buttons adopt an `8px` radius (`rounded-md`) to clearly signal interactive affordance.

## Components

### Buttons
- **Primary:** Solid Warm Gold (`#B8975A`) fill, pure white text (`#FFFFFF`), `font-weight: 500`. Hover state gently warms to `#A38347`. Focus ring utilizes a 2px offset in `#FAF6EE` with 2px stroke in `#B8975A`.
- **Secondary / Outlined:** Transparent surface with 1px border in `#B8975A`, text in `#B8975A`. Hover reveals a subtle `#F6EFE2` tint fill.
- **Ghost:** Minimalist text button in `#7A7468` with no border; transitions to Deep Charcoal (`#2B2B2B`) with soft background hover.

### Badges & Pill Chips
- **Geometry:** Height 26px, padding 4px 12px, border-radius 9999px, typography `label-sm`.
- **Arrived / Confirmed:** Faded sage tint `#EDF4EE` background, text `#5E8B6B`, optional inner indicator dot in solid `#5E8B6B`.
- **Dietary / Special Attention:** Faded rose tint `#FAECEB` background, text `#B5524A`.
- **Pending / VIP / Table Group:** Faded gold tint `#F6EFE2` background, text `#B8975A`.

### Cards & Layout Panels
- Pure white `#FFFFFF` fill with 16px corner radius and a 1px border of `#EADFC8`.
- Internal card headers combine a Playfair Display title with Inter subtitle and an optional right-aligned pill badge.
- Content sections within cards are segmented by 1px solid `#EADFC8` divider rules.

### Input Fields & Search Bars
- Background `#FFFFFF`, 1px border `#EADFC8`, 8px corner radius, padding 10px 14px.
- Deep Charcoal input text with Warm Stone (`#7A7468`) placeholders.
- Active focus state: border transitions to `#B8975A` with a soft 3px box-glow `rgba(184, 151, 90, 0.15)`.

### Checkboxes & Radio Controls
- Base unselected state: 1px border `#EADFC8` with pure white background.
- Selected state: `#B8975A` solid fill with crisp white checkmark/dot. Smooth 150ms transition.

### Live Table Lists
- **Row Styling:** Header row in Warm Ivory or muted white with Warm Stone uppercase labels (`label-sm`).
- **Rows:** Alternate or clean white rows separated by 1px `#EADFC8` borders. Hover state illuminates row in `#FAF6EE` at 60% opacity for gentle scanning precision.
- **Live Guest Metrics:** Prominently displays aggregate guest counts (Total, Arrived, Seated, Unassigned) using the `metric-number` Playfair Display scale alongside a miniature gold progress tracking bar.