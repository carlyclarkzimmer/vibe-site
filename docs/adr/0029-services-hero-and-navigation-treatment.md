# ADR 0029: Extend the immersive hero navigation treatment to Services

## Status

Accepted

## Context

The Work With Carly page opened with a solid dark section and the standard
light site header. The requested design direction is to use approved brand
photography as a full-bleed hero and match the homepage's integrated white
navigation and outlined CTA treatment.

## Decision

Use `public/carly-services-hero.jpg` as the full-bleed Services hero image with
a restrained dark overlay. Set the approved “Business Restoration” headline
across the lower center using the homepage display typography at a scale that
keeps Carly's face unobstructed, and pin the hero so
the opening content and first testimonial scroll over it. Constrain that sticky
behavior to the opening sequence so the hero releases immediately after the
first testimonial. Treat both
`#home-hero` and `#services-hero` as immersive hero pages in the shared site
header styles.

Set the approved supporting sentence beneath the headline in the same
supporting serif treatment used by the homepage hero.

Render the homepage approach section, using its existing approved content and
CTA, immediately beneath the Services hero. Keep the existing Services opening
content, image, and first testimonial after that copied section.

Give the copied Services section its own approved headline at 80% of the
homepage section's display scale. Use Services-specific approved body copy and
use the approved “Book a Recommendation Call” button label. Link that CTA to
Carly's approved scheduling page and open it in a new tab. The shared Button
primitive accepts an explicit `newTab` option so external CTA behavior remains
safe and intentional.

Keep the complete navigation visible through desktop and tablet widths. Switch
to the existing compact menu only below 760px, where displaying every link and
the primary CTA would cause crowding or overflow.

## Consequences

The Work With Carly page now opens with the same editorial image, typography,
layering, and navigation language as the homepage. The shared navigation
remains unchanged on other site pages, and focused landing pages still omit it.
Mobile visitors retain the accessible compact menu.
