# ADR 0013: Walk the House landing page

## Status

Accepted

## Decision

Add `/house` as a focused landing route for the approved Walk the House
exercise opt-in. It uses the campaign shell without shared site navigation,
preserves the reference copy, and translates the source composition into the
existing black, white, berry-pink editorial brand system.

Preserve the verified legacy Leadpages form endpoint, field identifiers, and
configured Walk the House delivery-page destination. Preserve the verified
Mixermind member-resource destination and the source page's exercise artwork
and room comparison image as local assets. Reuse approved project photography
for Carly's story section without modifying the source image.

Add page-specific metadata and a route-relative canonical URL. Omit the legacy
page's mismatched newsletter title and Open Graph fields, legacy analytics,
tracking scripts, platform metadata, and vendor styling.

## Consequences

The route remains server-rendered and adds no application state, dependency,
analytics, database, or proxy integration. Leadpages continues to own form
processing and the delivery redirect, so the opt-in must not be described as
fully working until it is tested end to end on the production route with a
controlled email address. The Mixermind destination remains login protected.
