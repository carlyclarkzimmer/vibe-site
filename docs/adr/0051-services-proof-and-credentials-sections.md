# ADR 0051: Services proof and credentials sections

## Status

Accepted

## Context

The Services page needs multiple forms of approved social proof, including written testimonials,
an original client video, and original client-message screenshots, as well as a concise account of
Carly's professional training. These elements are specific to the Business Restoration conversion
flow and require distinct responsive presentations.

## Decision

The Services route owns three new presentation components: a featured video testimonial, a client
message gallery, and a credentials section. Approved written testimonials continue to use the
shared `EditorialTestimonial` component. Original media is stored under `public/testimonials/` and
is presented without rewriting, simulation, or stock substitutions. Screenshot cards link to their
full-size source assets for legibility.

These components remain route-owned because their order, content, and conversion purpose are
specific to the Services page.

## Consequences

- The Services page can combine written, video, and screenshot evidence without treating every
  proof format as the same component.
- Client-message screenshots remain authentic images and can be opened at full size.
- Rochelle's approved testimonial and portrait remain available in the repository but are not
  rendered on the Services page.
- Future changes to this page's proof sequence should preserve approved attribution and avoid
  implying that group-coaching clients completed the Business Restoration Method.
