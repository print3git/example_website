# Sitemap: ChronoCare Atelier

## Information Architecture

### Primary Navigation
- Home (`/`)
- Services (`/services`)
- Service Process (`/process`)
- About (`/about`)
- Contact / Booking (`/contact`)
- Persistent CTA button: `Book a Service Assessment`

### Footer Navigation
- Services
- Service Process
- About
- Contact
- Phone link (`tel:`)
- Email link (`mailto:`)
- Address + business hours
- Legal placeholders: Privacy Policy, Terms (single-page placeholders for week-1 scope)

## Page Tree

1. Home (`/`)
2. Services (`/services`)
3. Service Process (`/process`)
4. About (`/about`)
5. Contact / Booking (`/contact`)

## Conversion Paths

### Primary Path (Main)
1. Home Hero CTA -> Contact / Booking Form
2. Form submit -> Confirmation message with expected response time

### Secondary Paths
1. Services page service card CTA -> Contact / Booking Form
2. Service Process reassurance CTA -> Contact / Booking Form
3. Header CTA (global) -> Contact / Booking Form
4. Phone CTA -> Click-to-call

## Route-Level Purpose and Core Sections

| Route | Page Goal | Core Sections |
|---|---|---|
| `/` | Build trust quickly and push first conversion | Hero, Trust Metrics, Services Snapshot, Process Preview, Testimonials, Final CTA |
| `/services` | Help user self-qualify and understand service options | Services Hero, Service Cards, Inclusions/Exclusions, Turnaround + Pricing Notes, FAQ, CTA |
| `/process` | Reduce anxiety and explain handling quality | Process Hero, Step Timeline, Quality Controls, Warranty/Guarantee, CTA |
| `/about` | Establish authority and credibility | About Hero, Story, Credentials, Workshop Standards, Team/Expertise, CTA |
| `/contact` | Capture qualified leads and appointment requests | Contact Hero, Booking Form, Contact Methods, Location/Hours, Response-Time Promise |

## Global Components Inventory

- Header (sticky): logo, nav links, primary CTA button
- Footer: contact data, quick links, legal links
- CTA button styles: primary, secondary, text link
- Section heading block: eyebrow, heading, supporting copy
- Trust metric cards
- Service cards
- Testimonial cards
- FAQ accordion rows
- Process step cards/timeline items
- Form fields with inline validation and error/success states
- Contact method cards (phone/email/address/hours)

## Week-1 Scope Boundaries

- No customer account system
- No online payment flow
- No real-time booking calendar integration
- No blog/CMS backend
- Static or lightweight form handling only

## SEO/Metadata Page Map

- `/`: brand + watch repair city/service intent metadata
- `/services`: service-focused keywords and intent
- `/process`: trust/quality process intent
- `/about`: brand credibility intent
- `/contact`: conversion/contact intent with LocalBusiness schema target (if time permits)
