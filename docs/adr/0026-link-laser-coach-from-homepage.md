# ADR 0026: Link homepage service offers

## Status

Accepted

## Context

The homepage services showcase named offers but did not give visitors direct
paths to their corresponding offer or enrollment pages.

## Decision

Link the “⚡️ 5-Minute Laser Coach” service title to the existing
`/breakthrough` route. Link “The Pattern Interrupt” to its approved ThriveCart
page, “The Living Business Lounge” to its approved Acuity catalog page, and
“Business Restoration Method” to the existing `/services` route. Preserve the
editorial title styling and use the brand accent for hover and keyboard-focus
feedback.

## Consequences

Visitors can move directly from the homepage service overview to the matching
offer without introducing a new route or external dependency.
