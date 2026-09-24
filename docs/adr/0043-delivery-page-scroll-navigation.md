# ADR 0043: Delivery-page scroll navigation

## Status

Accepted

## Context

The Beyond the Bottleneck listening library contains 25 long-form episode
sections. Listeners need a table of contents that preserves listening order and
shows which episode is currently relevant while they move through the page.

## Decision

Keep the delivery route server-rendered, with one route-owned client boundary
around the table of contents and episode library. A shared Intersection Observer
tracks the active episode. One request-animation-frame-coordinated scroll
listener updates only episode-title colors, and reduced-motion users receive a
static active-title treatment instead of continuous interpolation.

The table of contents uses CSS multi-column flow on larger screens so source
order runs down the first column before continuing in the second. It returns to
a single source-ordered column on mobile.

## Consequences

- All anchor relationships remain present in the server-rendered HTML.
- Active navigation does not require one listener per episode.
- The client boundary is limited to the part of the page that needs viewport
  awareness; the hero, Pattern Interrupt section, and footer remain server
  components.
- The Apple Podcasts CTA remains an explicit placeholder until Carly supplies
  the approved series URL.
