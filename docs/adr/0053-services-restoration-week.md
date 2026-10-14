# ADR 0053: Add the Business Restoration week narrative

## Status

Accepted

## Context

The Services page explains the three phases of the Business Restoration Method, but it did not
show how those phases feel in a client's ordinary week. Carly supplied a five-day editorial card
reference and requested a responsive, photo-led version directly beneath the method's focused
intention statement.

## Decision

Keep the feature route-owned inside `BusinessRestorationMethod`. On desktop, render all five days
as compact cards in one row with square, softly rounded photographs so they remain visually distinct
from the three architectural phase arches. On small screens, stack the days as compact rows with the
photograph on the left and the copy on the right. Use original project-owned imagery
stored under `public/business-restoration/week/` and the existing Bodoni Moda, EB Garamond, and
Montserrat brand typography.

Tuesday uses an over-the-shoulder voice-note photograph with the speaker's face concealed, while
Friday uses a rear-view river kayaking photograph without mountains. These images make the daily
actions explicit without repeating the larger phase imagery.

## Consequences

The Services page gains a more concrete narrative of the coaching experience without introducing a
new shared component or changing other routes. The section adds five static image assets and is
covered by rendered-output regression assertions.
