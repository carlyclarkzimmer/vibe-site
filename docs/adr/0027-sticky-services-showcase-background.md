# ADR 0027: Pin the homepage services background

## Status

Accepted

## Context

The homepage hero uses a pinned photographic layer while the following content
moves over it. The “Ways to Work Together” image previously scrolled as a
single flat section, so its behavior did not echo the hero.

## Decision

Place the services photograph and its approved overlay in a viewport-height
sticky backdrop inside the services section. Let the translucent editorial
services panel scroll above that backdrop, then release the backdrop when the
section ends.

## Consequences

The services photograph remains visually fixed while visitors read the offer
list, creating the same layered editorial rhythm as the hero without adding
client-side JavaScript or a new dependency.
