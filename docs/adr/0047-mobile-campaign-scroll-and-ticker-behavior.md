# ADR 0047: Mobile campaign scroll and ticker behavior

## Status

Accepted

## Context

The Beyond the Bottleneck landing page uses CSS view timelines for checkmarks,
text color, and reveal effects. Those effects were not reliable on mobile, and
the first ticker's duplicated text did not form a reliable seamless track.
The approved desktop composition and motion must remain unchanged.

## Decision

Keep the existing CSS view timelines as the desktop source of truth. Add one
route-owned scroll-progress controller for mobile widths and browsers without
view-timeline support. It applies the same start/end ranges and visual phases
to every affected section, and does no work when reduced motion is requested.

Make the shared ticker's two repeated groups equal-width flex items, so its
existing continuous translation has an exact seam. On mobile, use a slower
duration. Position only the mobile hero image below the CTA using CSS; preserve
the existing source image, proportions, and desktop hero rules.

## Consequences

- All campaign scroll effects use a common mobile fallback instead of
  individual fixed end-state colors.
- Desktop CSS-driven scroll effects remain intact.
- The ticker still has one continuous animation and respects reduced motion.
- The fallback is limited to this landing route and can be removed once its
  browser-support requirement is no longer needed.
