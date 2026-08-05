# ADR 0008: Breakthrough landing-page migration

## Status

Accepted

## Context

The legacy `/breakthrough/` page sells the 5-Minute Laser Coach Custom GPT. It is a focused offer page with a Vimeo introduction and repeated calls to the existing ThriveCart checkout.

## Decision

Migrate it to the campaign-style `/breakthrough` route. Preserve the legacy Vimeo video and existing ThriveCart checkout destination, place the legacy promotion artwork in `public/`, and omit the legacy Leadpages analytics and Facebook Pixel scripts.

## Consequences

The new page remains a focused landing page without shared site navigation. Checkout behavior stays owned by ThriveCart and must be verified through a real purchase-flow test before it is described as live.
