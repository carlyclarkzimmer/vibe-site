# ADR 0018: Services page baseline migration

## Status

Accepted

## Context

The app's `/services` route used a short placeholder composition while the
legacy Carly Clark Zimmer site contained the current approved service
positioning, offer descriptions, testimonials, destinations, and photography.

## Decision

Migrate the legacy Services page into the `(site)` route group as a route-owned
editorial composition. Preserve the shared app navigation and existing brand
tokens, while reproducing the source page's black, white, gray, and pink
section rhythm. Store the four Services-specific approved photographs in
`public/` and keep the long-form copy in the route component.

## Consequences

- `/services` remains a navigable site page with shared site chrome.
- The current offer copy and destinations are represented directly in the app.
- The route owns its distinctive layout and prose; no generic page-builder or
  new shared abstraction is introduced.
- Publication remains subject to the migration checklist and Carly's review.
