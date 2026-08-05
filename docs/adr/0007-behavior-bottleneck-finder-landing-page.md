# ADR 0007: Behavior Bottleneck Finder landing page

## Status

Accepted

## Decision

The legacy Behavior Bottleneck Finder beta-signup page is migrated as a focused landing page at `/behavior-bottleneck-finder` under the `(landing)` route group. It preserves the source copy, localizes the source image, and posts its form directly to the existing Leadpages submission endpoint.

The legacy Leadpages analytics and Meta Pixel scripts are not migrated. The legacy provider remains responsible for the existing thank-you behavior.

## Consequences

- The baseline retains the legacy sign-up field names and consent data.
- The live submission behavior must be verified before the form is described as working.
- Any migration to a new provider, thank-you route, analytics, or access logic is a future integration decision.
