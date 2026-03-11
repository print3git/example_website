# Section Specification: ChronoCare Atelier

This file defines exact page sections, component composition, and required content blocks. Build sections in listed order.

## Home (`/`)

### Section 1: Hero
- Purpose: Communicate premium trust and immediate action.
- Components:
  - Sticky header (global)
  - Eyebrow label
  - H1 + supporting paragraph
  - Primary CTA button
  - Secondary CTA link (call)
  - Hero image/media block
- Content blocks:
  - Eyebrow: workshop trust statement
  - Headline: clear value proposition
  - Subhead: who it serves + what is repaired
  - Primary CTA label: `Book a Service Assessment`
  - Secondary CTA label: `Call the Workshop`
  - Visual caption: optional workshop detail note

### Section 2: Trust Metrics
- Purpose: Provide fast credibility proof.
- Components:
  - Section heading block
  - 3-4 metric cards
- Content blocks:
  - Metrics: years in practice, watches serviced, average rating, warranty period
  - Short proof disclaimer text

### Section 3: Services Snapshot
- Purpose: Introduce core offers and move user to details.
- Components:
  - Section heading block
  - 4 service summary cards
  - Section CTA
- Content blocks:
  - Card fields: service name, one-line description, starting-from price, indicative turnaround
  - CTA label: `View All Services`

### Section 4: Process Preview
- Purpose: Reduce perceived risk with simple workflow.
- Components:
  - Section heading block
  - 4-step mini timeline
  - Section CTA
- Content blocks:
  - Steps: Intake, Diagnostic, Approval, Service + QA + Return
  - CTA label: `See Full Service Process`

### Section 5: Testimonials
- Purpose: Add social proof.
- Components:
  - Section heading block
  - 3 testimonial cards
- Content blocks:
  - Quote text
  - Customer name + watch type or context
  - Optional rating indicator

### Section 6: Final CTA Banner
- Purpose: Convert visitors who reached lower page.
- Components:
  - Full-width CTA panel
  - Primary button + secondary contact link
- Content blocks:
  - Headline
  - Supporting text
  - CTA labels: `Book a Service Assessment`, `Request a Quote`

## Services (`/services`)

### Section 1: Services Hero
- Purpose: Frame service offering and transparency.
- Components:
  - Page hero heading block
  - Intro paragraph
- Content blocks:
  - Headline focused on craftsmanship + transparency
  - Supporting copy about estimate-first model

### Section 2: Detailed Service Cards
- Purpose: Help users choose correct service.
- Components:
  - Repeating service detail cards (4-6)
- Content blocks per card:
  - Service name
  - Best for / symptoms
  - Included work list
  - Not included note
  - Starting price range
  - Typical turnaround range
  - Card CTA: `Request Quote`

### Section 3: Pricing and Turnaround Notes
- Purpose: Set expectations and prevent ambiguity.
- Components:
  - Two-column policy block
- Content blocks:
  - Pricing assumptions
  - Factors affecting final quote
  - Turnaround caveats (parts availability, complexity)

### Section 4: Service FAQ
- Purpose: Remove objections before contact.
- Components:
  - FAQ accordion (6-8 items)
- Content blocks:
  - Warranty coverage
  - Water resistance testing questions
  - Genuine vs compatible parts policy
  - Decline/cancel after diagnostic policy

### Section 5: Services CTA
- Purpose: Move qualified lead to form.
- Components:
  - CTA strip with single primary button
- Content blocks:
  - CTA headline
  - Button label: `Book a Service Assessment`

## Service Process (`/process`)

### Section 1: Process Hero
- Purpose: Explain careful handling from start to finish.
- Components:
  - Hero heading block
- Content blocks:
  - Headline
  - Subhead emphasizing transparency and approval checkpoints

### Section 2: Full Process Timeline
- Purpose: Provide operational clarity.
- Components:
  - 6-step timeline cards
- Content blocks per step:
  - Step number + title
  - Step description
  - Customer decision point flag where applicable
- Steps:
  - Intake
  - Diagnostic inspection
  - Quote approval
  - Service execution
  - Quality assurance + pressure test
  - Handover/return

### Section 3: Quality Controls
- Purpose: Demonstrate standards and risk management.
- Components:
  - Checklist grid or cards
- Content blocks:
  - Tooling standards
  - Clean handling protocol
  - Final timekeeping checks
  - Seal and pressure validation (where applicable)

### Section 4: Warranty and Guarantees
- Purpose: Increase trust for conversion.
- Components:
  - Policy summary cards
- Content blocks:
  - Warranty duration and coverage scope
  - Exclusions
  - Re-check policy window

### Section 5: Process CTA
- Purpose: Convert confidence into action.
- Components:
  - CTA panel
- Content blocks:
  - Headline
  - Button label: `Start Your Assessment`

## About (`/about`)

### Section 1: About Hero
- Purpose: Position brand expertise and values.
- Components:
  - Heading block
  - Intro visual
- Content blocks:
  - Headline
  - Brand positioning paragraph

### Section 2: Story
- Purpose: Humanize brand and explain origin.
- Components:
  - Two-column text/media section
- Content blocks:
  - Founder/workshop origin story
  - Philosophy statement on craftsmanship and transparency

### Section 3: Credentials and Expertise
- Purpose: Strengthen authority.
- Components:
  - Credential cards
- Content blocks:
  - Years experience
  - Brand familiarity examples
  - Training/certification claims (fictional but realistic)

### Section 4: Workshop Standards
- Purpose: Show operational quality.
- Components:
  - Standards list + supporting imagery
- Content blocks:
  - Bench and tool standards
  - Parts sourcing policy
  - Documentation and QA notes

### Section 5: About CTA
- Purpose: Move trust into conversion.
- Components:
  - CTA strip
- Content blocks:
  - Headline
  - Button label: `Book a Service Assessment`

## Contact / Booking (`/contact`)

### Section 1: Contact Hero
- Purpose: Make next step easy and low-friction.
- Components:
  - Heading block with reassurance copy
- Content blocks:
  - Headline
  - Subhead including response-time promise

### Section 2: Booking Form
- Purpose: Capture qualified inbound lead.
- Components:
  - Form card
  - Validation states
  - Submission feedback states
- Content blocks:
  - Fields:
    - Full name
    - Email
    - Phone
    - Watch brand/model
    - Service needed (dropdown)
    - Issue description (textarea)
    - Preferred appointment date
  - Consent text
  - Submit label: `Submit Assessment Request`
  - Success message copy
  - Error message copy

### Section 3: Direct Contact Methods
- Purpose: Offer alternate contact channels.
- Components:
  - Contact method cards
- Content blocks:
  - Phone number
  - Email address
  - Workshop address
  - Business hours

### Section 4: Location and Visit Notes
- Purpose: Support local intent and in-person drop-off.
- Components:
  - Map/embed placeholder block
  - Visit guidance text
- Content blocks:
  - Nearby landmarks/parking note
  - Drop-off instructions

### Section 5: Final Reassurance
- Purpose: Reduce hesitation after form view.
- Components:
  - Policy microcopy block
- Content blocks:
  - Diagnostic-first promise
  - No-work-without-approval statement
  - Expected first response SLA

## Reusable Content Modules (Cross-Page)

- Trust message variants:
  - "Handled by specialist watch technicians"
  - "Transparent quotes before any service work"
- CTA variants:
  - Book a Service Assessment
  - Request a Quote
  - Call the Workshop
- Proof data fields:
  - Years operating
  - Total watches serviced
  - Review score
  - Warranty period

## Content Completion Rules

- No placeholder text or lorem ipsum.
- Every section must have one clear user action or intent.
- Every service card must include price and turnaround guidance.
- Every page must include at least one conversion path to `/contact`.
