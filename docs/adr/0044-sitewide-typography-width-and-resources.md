# ADR 0044: Shared site typography, content width, and resources route

- Status: Accepted
- Date: 2026-10-01

## Context

The main site used small eyebrow and body styles, compressed display line-height,
and wide fixed section gutters. The “Ways to Work Together” composition was also
duplicated between routes, making a standalone resources destination harder to
maintain consistently.

## Decision

- Define body size, eyebrow size, body line-height, display line-height, and
  content width as shared design tokens.
- Reduce desktop section gutters through the shared section-inline token while
  retaining the existing mobile edge padding and reading-width limit.
- Underline links only inside prose contexts at the global level; button and
  navigation treatments remain unchanged.
- Extract “Ways to Work Together” into a shared site component used by the
  homepage, services page, and the new `/resources` site route.
- Add Resources to the shared site navigation. The route uses the existing site
  shell, including its header and footer.

## Consequences

Typography and section width changes now propagate through tokens instead of
route-specific overrides. Offer content continues to come from the existing
homepage content source, so updates remain synchronized across all three uses.
