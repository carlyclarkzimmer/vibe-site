# ADR 0017: Pattern Breaker landing page

## Status

Accepted

## Decision

Add `/pattern-breaker` as a focused landing route under `(landing)` without the
shared site navigation. Preserve the approved reference copy and translate its
composition into the existing black, white, and berry-pink editorial brand
system.

Preserve the two verified legacy Leadpages form endpoints, their field
identifiers, and their configured newsletter thank-you destination. Reuse the
approved project hero and supporting photography without modifying the source
images.

Add page-specific metadata and a route-relative canonical URL derived from the
approved page content. Omit the legacy page's mismatched title, Open Graph URL,
analytics, tracking scripts, platform metadata, and vendor styling.

## Consequences

The route remains server-rendered and adds no application state, dependency,
analytics, database, or proxy integration. Leadpages continues to own form
processing and the delivery redirect, so the training opt-in must not be
described as fully working until it is tested end to end on the production
route with a controlled email address.
