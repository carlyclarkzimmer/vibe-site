# ADR 0056: Publish “A Love Letter to Éire” as a route-owned editorial page

## Status

Accepted

## Context

Carly’s About page includes a personal section about living in Ireland. The full poem “A Love Letter to Éire” needs its own permanent URL while remaining connected to that narrative and to the main site.

## Decision

Create `/love` as a shared-navigation site page under `app/(site)/love/`. Keep the poem and its presentation route-owned, reuse the approved Cliffs of Moher photograph, and link to the page directly beneath the Ireland story on `/about`.

The page uses the established brand typography and palette with a narrow, uninterrupted long-form reading measure. It retains the shared legal footer but intentionally omits the global equity pledge so the letter can conclude without an additional content section.

## Consequences

- The poem has a stable, shareable canonical URL.
- Visitors retain access to the main site navigation and footer.
- The equity pledge remains on every other page but does not render on `/love`.
- The distinctive long-form copy remains close to its owning route instead of entering a generic content schema.
