# ADR 0057: Flow campaign hero copy before the contributor collage

## Status

Accepted

## Context

The Beyond the Bottleneck hero previously overlaid its copy on an absolutely
positioned collage. On wide, short screens the collage scaled with viewport
width, raising contributors' heads behind the title, description, and CTA.
Fixed viewport-height spacing could not keep the copy clear at every aspect
ratio.

## Decision

Place the hero copy and CTA before the collage in normal document flow. Keep
the approved image and editorial styling. Clip only the image's empty top area
inside its own container, with a centered, proportional frame, so the
contributors appear just below the copy without changing the source asset.
At tablet and phone widths, retain a taller centered frame to preserve the
existing close-up presentation.

## Consequences

Copy can wrap or grow without overlapping a portrait, including on unusually
wide or short viewports. The hero may be taller than one screen, but the image
remains proportional and all campaign content and destinations are unchanged.
This supersedes ADR 0040's overlay-in-negative-space placement and ADR 0047's
mobile-only image offset.
