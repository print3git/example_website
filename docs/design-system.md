# Design System: ChronoCare Atelier

This document defines the visual and interaction system for the first production version of the site. It is intentionally specific so page implementation stays consistent and premium.

## 1) Visual Direction

Design style: precision editorial.

- Mood: calm, meticulous, and expensive without looking flashy.
- Visual metaphor: workshop craft + luxury materials.
- Density: low to medium; use generous whitespace.
- Edge treatment: subtle radius, thin dividers, restrained shadows.
- Motion: present but quiet; no large springy effects.

## 2) Token Naming Convention

Use CSS custom properties with category prefixes.

- Color: `--color-*`
- Typography: `--font-*`, `--text-*`
- Space: `--space-*`
- Radius: `--radius-*`
- Shadow: `--shadow-*`
- Motion: `--motion-*`
- Layout: `--layout-*`

## 3) Typography System

### 3.1 Font Families

Use a deliberate two-family pairing.

- Display serif: `"Fraunces", "Iowan Old Style", "Times New Roman", serif`
- UI sans: `"Manrope", "Avenir Next", "Helvetica Neue", sans-serif`
- Mono (optional technical labels only): `"IBM Plex Mono", "SFMono-Regular", monospace`

### 3.2 Type Scale Tokens

Base body size is 18px on desktop, 16px on mobile. Use `clamp()` for fluid scaling.

- `--text-hero`: `clamp(2.5rem, 5.2vw, 4.9rem)`
- `--text-display`: `clamp(2rem, 3.6vw, 3.4rem)`
- `--text-h1`: `clamp(1.75rem, 2.8vw, 2.65rem)`
- `--text-h2`: `clamp(1.4rem, 2.1vw, 2rem)`
- `--text-h3`: `clamp(1.125rem, 1.45vw, 1.45rem)`
- `--text-body-lg`: `clamp(1.05rem, 1.1vw, 1.2rem)`
- `--text-body`: `1rem`
- `--text-body-sm`: `0.89rem`
- `--text-label`: `0.77rem`

### 3.3 Type Usage Rules

- Hero title: display serif, `--text-hero`, line-height 0.98-1.04, letter-spacing -0.015em.
- H1/H2: display serif, line-height 1.08-1.2.
- H3 and below: UI sans, line-height 1.2-1.35.
- Body: UI sans, line-height 1.6 desktop / 1.55 mobile.
- Labels, eyebrow text, nav text: uppercase UI sans, tracking 0.08em to 0.12em.
- Avoid centered long paragraphs; max width 70ch for body copy.

## 4) Color System

### 4.1 Core Brand Colors

- `--color-ink-950: #0D1116`
- `--color-ink-900: #151B22`
- `--color-ink-800: #212A34`
- `--color-steel-700: #495766`
- `--color-steel-500: #6E7C8C`
- `--color-steel-300: #A6B0BA`
- `--color-ivory-100: #F4F0E8`
- `--color-ivory-50: #FAF7F2`
- `--color-brass-500: #B08D57`
- `--color-brass-400: #C5A56F`
- `--color-brass-300: #D8BD8A`

Accent for premium warmth (use sparingly):

- `--color-oxblood-600: #5B1F27`

### 4.2 Semantic Tokens

Bind all UI to semantic tokens, not raw hex values.

- `--color-bg-page: var(--color-ivory-50)`
- `--color-bg-surface: #FFFFFF`
- `--color-bg-surface-2: #F8F5EE`
- `--color-bg-inverse: var(--color-ink-900)`
- `--color-text-primary: var(--color-ink-900)`
- `--color-text-secondary: #35414E`
- `--color-text-muted: #5E6B79`
- `--color-text-inverse: var(--color-ivory-50)`
- `--color-border-subtle: #D9D2C7`
- `--color-border-strong: #B7AD9E`
- `--color-interactive-primary: var(--color-brass-500)`
- `--color-interactive-primary-hover: #9A7846`
- `--color-interactive-primary-active: #85663C`
- `--color-interactive-link: #7C5F35`
- `--color-focus-ring: #2C6DB2`

Status tokens:

- `--color-success: #1F6A45`
- `--color-warning: #9A6A0B`
- `--color-error: #9B2F2F`
- `--color-info: #255E96`

### 4.3 Color Usage Ratios

- 70% neutrals (ink, ivory, steel)
- 20% surface contrast and borders
- 10% brass/oxblood accents

Do not flood large areas with brass or oxblood.

## 5) Spacing and Rhythm

Use a 6px base rhythm to avoid generic 8px-template feel and create a precise visual cadence.

### 5.1 Spacing Tokens

- `--space-0: 0`
- `--space-1: 0.375rem` (6px)
- `--space-2: 0.75rem` (12px)
- `--space-3: 1.125rem` (18px)
- `--space-4: 1.5rem` (24px)
- `--space-5: 2.25rem` (36px)
- `--space-6: 3rem` (48px)
- `--space-7: 4.5rem` (72px)
- `--space-8: 6rem` (96px)
- `--space-9: 7.5rem` (120px)

### 5.2 Layout Spacing Rules

- Section vertical padding:
  - desktop: `--space-8` to `--space-9`
  - tablet: `--space-7`
  - mobile: `--space-6`
- Internal card padding:
  - dense: `--space-3`
  - default: `--space-4`
  - feature cards: `--space-5`
- Vertical rhythm in text blocks: body paragraph margin-bottom `--space-3`.
- Avoid random values; pick only from tokens.

## 6) Grid and Layout

### 6.1 Container Tokens

- `--layout-max-width: 76rem` (1216px)
- `--layout-reading-width: 44rem` (704px)
- `--layout-gutter-desktop: 2rem`
- `--layout-gutter-tablet: 1.5rem`
- `--layout-gutter-mobile: 1rem`

### 6.2 Grid Structure

- Desktop >= 1200px: 12 columns, 24px gutters.
- Tablet 768-1199px: 8 columns, 18px gutters.
- Mobile <= 767px: 4 columns, 12px gutters.

### 6.3 Section Layout Patterns

- Hero: 7/5 split (content/media) desktop, stacked mobile.
- Service cards: 2x2 desktop, 2-column tablet, 1-column mobile.
- Testimonial cards: 3 across desktop, 2 on tablet, 1 on mobile.
- Contact page: form + info 7/5 split desktop, stacked mobile.

## 7) Shape, Borders, and Elevation

### 7.1 Radius Tokens

- `--radius-1: 0.375rem` (6px)
- `--radius-2: 0.625rem` (10px)
- `--radius-3: 0.875rem` (14px)
- `--radius-pill: 999px`

Rule: no mixed radius style per page section. Prefer `--radius-2` for most cards/buttons.

### 7.2 Border Tokens

- `--border-hairline: 1px solid var(--color-border-subtle)`
- `--border-strong: 1px solid var(--color-border-strong)`

### 7.3 Shadow Tokens

- `--shadow-soft: 0 6px 20px rgba(16, 21, 28, 0.08)`
- `--shadow-lift: 0 14px 38px rgba(16, 21, 28, 0.12)`
- `--shadow-focus: 0 0 0 3px color-mix(in srgb, var(--color-focus-ring) 40%, transparent)`

Shadows should be low-opacity and broad; avoid hard drop-shadow aesthetics.

## 8) Component Variants

### 8.1 Buttons

### Button Sizes

- `sm`: height 38px, horizontal padding 16px
- `md` (default): height 44px, horizontal padding 22px
- `lg`: height 50px, horizontal padding 28px

### Button Variants

- Primary:
  - bg `--color-interactive-primary`
  - text `--color-ink-950`
  - hover bg `--color-interactive-primary-hover`
  - active bg `--color-interactive-primary-active`
- Secondary:
  - bg transparent
  - border `--border-strong`
  - text `--color-text-primary`
  - hover bg `--color-bg-surface-2`
- Ghost:
  - text `--color-interactive-link`
  - underline-on-hover only
- Text Link CTA:
  - UI sans semibold
  - animated underline grow from left

### Button Behavior

- Transition: 180-220ms for color/background.
- Hover movement: optional `translateY(-1px)` only on desktop pointer devices.
- Disabled: 45% opacity and no shadow or transform.

### 8.2 Cards

### Service Card

- Surface: `--color-bg-surface`
- Border: `--border-hairline`
- Radius: `--radius-2`
- Padding: `--space-5`
- Header includes service title + price-start marker.
- Include meta row for turnaround and suitability.

### Testimonial Card

- Surface: `--color-bg-surface`
- Left accent line: 2px brass
- Quote text in serif body large.
- Customer meta in UI sans small uppercase.

### Policy/Info Card

- Surface: `--color-bg-surface-2`
- Border subtle
- Dense spacing (`--space-3` to `--space-4`)

Card hover: only gentle lift (`--shadow-soft` -> `--shadow-lift`) and border darkening.

### 8.3 Inputs and Form Controls

### Input Variants

- Default:
  - Height 46px for text/select
  - Background white
  - Border `--border-hairline`
  - Radius `--radius-1`
- Textarea:
  - Min height 132px
  - Vertical resize allowed
- Error:
  - Border color `--color-error`
  - Error text below input, UI sans small
- Success:
  - Border color `--color-success`
  - Optional confirmation icon at right

### Input States

- Hover: border transitions to `--color-border-strong`
- Focus-visible: 2px focus ring + 1px border in `--color-focus-ring`
- Placeholder: `--color-text-muted`, 0.92 opacity
- Disabled: bg `#F2EFE8`, text muted, no shadow

### Form Layout Rules

- Labels are always visible above fields; do not rely on placeholders as labels.
- Field help text max 90 chars.
- Required marker text should not rely on color only.
- Group related fields with `fieldset` and visible legend where needed.

## 9) Motion and Interaction Rules

### 9.1 Motion Tokens

- `--motion-duration-fast: 140ms`
- `--motion-duration-base: 220ms`
- `--motion-duration-slow: 360ms`
- `--motion-ease-standard: cubic-bezier(0.2, 0.7, 0.2, 1)`
- `--motion-ease-emphasis: cubic-bezier(0.19, 1, 0.22, 1)`

### 9.2 Allowed Animations

- Section reveal: opacity 0 -> 1 with Y offset 12px -> 0.
- Card hover: slight lift and shadow shift.
- Underline reveal for text links.
- FAQ accordion: height animation with opacity fade (max 220ms).

### 9.3 Disallowed Motion

- No parallax backgrounds.
- No bouncing or elastic scale effects.
- No auto-playing count-up statistics.
- No animation longer than 500ms for core UI interactions.

### 9.4 Reduced Motion

For `prefers-reduced-motion: reduce`:

- Disable transforms and reveal offsets.
- Keep opacity transitions <= 100ms or remove entirely.
- Keep layout stable; no motion-only communication.

## 10) Accessibility Constraints (Non-Negotiable)

- Body text contrast ratio >= 4.5:1.
- Large text (>= 24px or 19px bold) contrast >= 3:1.
- Interactive controls contrast >= 3:1 against adjacent colors.
- Minimum tap target: 44x44px.
- Keyboard access required for all nav, accordions, forms, and CTAs.
- Visible `:focus-visible` indicator on every interactive element.
- Form errors must include text, not color-only cues.
- Use semantic landmarks (`header`, `main`, `nav`, `section`, `footer`).
- One H1 per page; heading levels must not skip.
- Decorative icons/images marked appropriately (`aria-hidden` or empty alt).
- Motion must respect `prefers-reduced-motion`.

## 11) Imagery and Media Rules

- Use close-up macro imagery of watches, tools, and material textures.
- Prefer warm, directional lighting over bright flat stock imagery.
- Avoid generic office/laptop stock photos.
- Image treatment:
  - Slight desaturation (-8% to -12%)
  - Mild contrast lift (+6% to +10%)
  - Optional grain overlay very low opacity (< 6%)
- Keep consistent aspect ratios inside each component type.

## 12) Premium Consistency Checklist

All pages must satisfy these checks before delivery.

- Uses tokenized colors, spacing, and type only.
- CTA hierarchy is consistent (one primary action per viewport area).
- Cards, inputs, and buttons share the same radius family.
- No raw hex values added outside token definitions.
- No placeholder text.
- Hover, focus, error, success states exist for all interactive components.
- Mobile layout keeps clear hierarchy and readable spacing.

## 13) Build-Phase Order (How to Apply)

1. Implement tokens and global typography first.
2. Build layout primitives (container, grid, section spacing).
3. Build components (buttons, cards, inputs) before page sections.
4. Build pages with only existing variants; no ad-hoc styles.
5. Run accessibility and visual consistency pass last.
