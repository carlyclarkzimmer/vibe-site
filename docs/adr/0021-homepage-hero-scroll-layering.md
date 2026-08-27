# ADR 0021: Homepage hero scroll layering

## Status

Accepted

## Context

The homepage needed an editorial transition in which the recognition section moves over the hero as the visitor scrolls, while the hero image and content remain visually pinned beneath it. The behavior must remain route-specific, accessible, and free of unnecessary client-side scripting.

## Decision

The route-owned homepage hero uses CSS `position: sticky` at the top of the viewport. The recognition section and all later homepage sections establish opaque, higher stacking layers so normal document scrolling naturally covers the hero. The recognition section uses a viewport-scale minimum height to give the transition the deliberate pacing of an editorial spread.

The effect is disabled when the visitor requests reduced motion. No scroll listeners, client components, or animation dependencies are introduced.

## Consequences

- The hero remains server-rendered and the page keeps its existing semantic order.
- Homepage content and imagery remain unchanged.
- Later sections must retain an opaque background and a stacking level above the hero.
- The interaction remains local to the homepage stylesheet and does not affect site or campaign layouts.
