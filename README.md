# Pantheon Marketing UI Kit

A faithful recreation of [pantheondronesolutions.com](https://pantheondronesolutions.com/) as reusable React components. CSS is lifted directly from the live site's inline `<style>` block, preserving classnames so the kit drops into the existing site if needed.

## Files
- `index.html` — runnable click-thru of the marketing site (hero → features → process → credentials → contact → footer).
- `components.jsx` — `<Nav>`, `<AnnouncementBar>`, `<Hero>`, `<FeatureGrid>`, `<ProcessSteps>`, `<Credentials>`, `<ContactForm>`, `<Footer>`, plus primitives `<Logo>`, `<PantheonGlyph>`, `<Eyebrow>`, `<SectionHead>`, `<HeroStats>`.
- `styles.css` — the full marketing CSS, imports `colors_and_type.css` for tokens.

## Interactivity (fake)
- Nav links smooth-scroll to the right section.
- "Book demo" CTAs scroll to the form.
- Submitting the contact form swaps to the success state (no real submit).

## Out of scope (omitted intentionally)
The live site has additional sections (services breakdown, JTC10 spec card, FAQ accordion, urgency countdown, CTA band). They follow the same component vocabulary already represented here — add them by composing `<SectionHead>` + a card grid.
