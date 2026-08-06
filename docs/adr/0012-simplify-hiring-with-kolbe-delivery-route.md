# ADR 0012: Simplify Hiring with Kolbe delivery route

## Status

Accepted

## Decision

Add `/training-simplify-hiring-with-kolbe` as a focused campaign landing route
for the approved Simplify Hiring with Kolbe training delivery experience. It
uses the campaign shell without shared site navigation, embeds the verified
Vimeo training, and links to the verified ThriveCart Kolbe session checkout.

Preserve the reference copy and translate its composition into the existing
black, white, berry-pink, editorial brand system. Reuse approved project
photography through CSS cropping only. Add page-specific metadata and a
route-relative canonical URL while omitting the legacy page's mismatched
Drama Triangle metadata, analytics, tracking scripts, and platform fields.

## Consequences

The route remains server-rendered and adds no application state, dependency,
analytics, or form integration. Vimeo owns training playback and ThriveCart
owns checkout. Both destinations must continue to be maintained and tested
independently.
