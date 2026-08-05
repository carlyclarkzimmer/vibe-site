# ADR 0007: Coaching Club landing-page migration

## Status

Accepted

## Decision

The legacy Coaching Club offer is migrated as a focused landing page at
`/coaching-club` under the `(landing)` route group. It uses the shared brand
tokens and campaign shell without main-site navigation.

The baseline preserves the legacy page’s copy, offer facts, testimonials,
external checkout, recommendation-call link, and campaign footer. Structured
lists and conversion destinations live in a typed campaign content module;
distinctive long-form sales prose remains in the route.

Legacy Leadpages analytics, Meta Pixel code, and page-builder behavior are not
migrated. Legacy imagery is stored locally rather than hotlinked.

## Consequences

- The page can be reviewed independently as a faithful baseline migration.
- Existing checkout and scheduling services remain external boundaries.
- Source inconsistencies remain visible for a later content-polish pass.
- Tracking, redirect behavior, and publication remain separate decisions.
