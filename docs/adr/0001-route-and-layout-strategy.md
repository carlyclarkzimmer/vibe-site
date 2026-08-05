# ADR 0001: Route and layout strategy

## Status

Superseded by [ADR 0006](0006-site-and-landing-page-layouts.md).

This record describes the original single-campaign route strategy. It remains
as historical context; ADR 0006 defines the current site and landing layouts.

## Decision

The root layout owns the document shell and global metadata defaults.
Campaigns live under a `(campaigns)` route group with focused campaign chrome.
The existing campaign remains at `/`.

A `(site)` route group will be added only when approved main-site chrome exists.
Moving the campaign from `/` must include an explicit URL and redirect decision.

## Consequences

- Campaign and main-site chrome cannot couple accidentally.
- The current public route remains stable during this refactor.
- The future homepage migration remains a deliberate product decision.
