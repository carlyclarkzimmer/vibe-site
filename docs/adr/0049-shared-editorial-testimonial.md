# ADR 0049: Shared editorial testimonial component

## Status

Accepted

## Decision

Centered editorial testimonials that use a quote, client name, professional
title, and optional approved portrait are rendered through the shared
`EditorialTestimonial` site component. The component owns the ivory, charcoal,
and berry visual treatment while receiving all testimonial-specific content as
props. Its testimonial body accepts either a single text value or semantic
paragraph elements so longer approved testimonials can retain their original
paragraph breaks without creating page-specific testimonial markup.

The homepage Laurie J. testimonial is the first adopter. Emily J. and Rochelle
Y. use the same component on the Services page after their individual
presentation was approved.

## Consequences

- Approved testimonials can reuse one semantic figure and blockquote structure.
- Client photographs remain optional and are never replaced with stock imagery.
- Testimonial copy and identity stay outside the shared component.
- Future adopters must preserve approved wording and supply descriptive image
  alt text when a portrait is included.
