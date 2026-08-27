# ADR 0023: Homepage services showcase

## Status

Accepted

## Context

The homepage needs a concise way to present Carly's four levels of support without turning the page into a second Services page. The requested visual reference uses a full-bleed editorial image, an inset light panel, and a ruled list to create strong hierarchy without card-style UI.

## Decision

The homepage includes a route-owned services showcase between the surface-level bottleneck section and the existing process section. Its copy remains structured in `content/site/home.ts`, while its composition and responsive styling stay with the homepage route.

The section adapts the reference's broad layout behavior—full-bleed photography, a large inset panel, fine rules, and vertically stacked entries—using Carly's photography, typography, color tokens, and approved service copy. It does not reproduce the reference site's wording, assets, or exact styling.

## Consequences

- Visitors can compare four support levels without leaving the homepage.
- The main Services page remains the authoritative destination for full offer details.
- Future service-copy updates remain centralized in the homepage content model.
- The section collapses to a single-column ruled list on mobile.
