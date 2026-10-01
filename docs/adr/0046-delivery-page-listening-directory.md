# ADR 0046: Delivery-page listening directory

## Status

Accepted

## Context

The Beyond the Bottleneck delivery page originally rendered every planned
episode as one long library and used a text table of contents with client-side
active-section tracking. The approved delivery experience now prioritizes the
universal podcast-app destination, visual contributor browsing, and a reusable
episode pattern that can be approved before the remaining contributor content
is connected.

## Decision

Keep the delivery route server-rendered and replace the text table of contents
with a route-owned visual episode directory. The directory uses one reusable
card component, a distinct Start Here card, Kimberly Tara's approved card, and
clearly labeled placeholders for the remaining contributors.

Use one reusable episode component with separate audio, contributor-profile,
resource, podcast-CTA, and return-navigation subcomponents. Render the Welcome
episode, Kimberly Tara's complete approved episode, and two obvious placeholder
episodes during the component-approval phase. Keep a compact universal podcast
CTA available while the visitor browses.

This decision supersedes ADR 0043's text table of contents and viewport-driven
active-episode color behavior.

## Consequences

- The main listening action is available in the hero, episode pattern, and
  persistent CTA without repeating a sales offer after every contributor.
- The delivery page no longer needs a client component or scroll listeners.
- Remaining contributor cards and episodes can be populated through typed
  content without introducing independently styled sections.
- Placeholder content remains explicit until Carly supplies and approves the
  remaining episode details and destinations.
