# ADR 0058: Living Business Lounge as a main-site sales page

## Status

Accepted

## Context

The Living Business Lounge appears in the Home and Services offer listings, but those links previously led directly to an Acuity product. Carly supplied approved long-form sales copy in a Google Doc, confirmed its price, schedule, commitment, refund policy, and Thrivecart checkout destination, and requested a page at `/lounge`.

## Decision

Create `/lounge` as a navigable main-site page under `app/(site)/`. Keep its distinctive sales copy and layout route-owned. Home and Services reuse their existing offer listing component and link to `/lounge`; the page's join buttons link to the approved Thrivecart checkout. The existing site navigation, footer, brand tokens, and other offer destinations remain unchanged.

## Consequences

- Visitors can review how the Lounge works, what is included, fit, pricing, and policies before leaving for checkout.
- The checkout remains provider-owned; this application does not store payment or member data.
- Future changes to price, schedule, or policies require Carly's approval and should be updated in the route-owned page copy.
- The hero uses Carly's supplied wide portrait as full-bleed photography behind transparent navigation. On narrow screens, the photo occupies the top of the hero while the approved headline and CTA continue on a dark surface below, preserving her face and text readability.
