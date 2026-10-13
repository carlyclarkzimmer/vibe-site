# ADR 0052: Align the About page with the main-site editorial system

## Status

Accepted

## Context

The About page uses the approved main-site typefaces and colors, but its independent section widths,
heading scales, spacing, image proportions, and call-to-action treatment make it feel visually separate
from the Home and Services pages. Its narrative order and approved copy must remain unchanged.

## Decision

The About route keeps its route-owned markup and CSS Module while adopting the established main-site
editorial system: a 1500px maximum layout grid with 24–40px gutters, the shared Bodoni Moda display
hierarchy, EB Garamond narrative typography, Montserrat labels and buttons, consistent responsive image
proportions, and the existing Home and Services section rhythm. The story, promise, method, biography,
and closing CTA retain distinct compositions appropriate to their narrative roles.

Large berry-filled narrative sections use the same warm ivory (`#f8f5f1`), charcoal (`#2d2226`),
and berry-accent treatment as the approved editorial testimonials. Berry remains reserved for labels,
numbering, rules, and calls to action rather than filling entire About-page sections.

No shared component abstraction is introduced because the About sections contain unique long-form copy
and sequencing. Shared navigation, footer, photography, copy, links, and section order remain unchanged.

## Consequences

- Home, Services, and About now share recognizable typography, margins, spacing, image, and CTA rules.
- The About page remains editorial and story-led rather than becoming a duplicate of another route.
- Repeated ivory surfaces create a calmer page rhythm while berry accents preserve hierarchy and
  conversion emphasis.
- Future About-page styling should use the main-site grid and type hierarchy before adding route-specific
  exceptions.
- Copy and photography changes remain separate approval decisions.
