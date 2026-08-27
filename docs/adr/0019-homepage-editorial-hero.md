# ADR 0019: Homepage editorial hero

## Status

Accepted

## Context

The main-site homepage needed a more immersive, editorial first viewport while preserving Carly's approved copy, navigation behavior, and the distinction between shared site chrome and route-owned page composition.

## Decision

The homepage hero remains route-owned in `app/(site)/page.tsx` and uses a dedicated, non-destructively copied brand photograph from `public/`. The shared site header remains a shared component, but its existing markup receives a transparent, light-on-image treatment when the homepage hero is present. Interior site pages retain the existing solid header treatment.

Bodoni Moda, EB Garamond, and Montserrat are loaded through `next/font` and exposed through the existing typography tokens so the editorial type system remains centralized.

## Consequences

- Homepage copy and navigation data remain in their current typed content modules.
- No new client state, route, or styling dependency is introduced.
- Responsive image crops are controlled with CSS and do not alter the source photograph.
- Future homepage hero changes should remain route-owned; shared navigation behavior should remain in `components/site/`.
