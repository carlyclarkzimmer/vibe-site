# ADR 0038: Beyond the Bottleneck delivery route

## Status

Accepted

## Context

People who register for the 2026 Beyond the Bottleneck listening tour need a
focused destination for the delivered audio series. The episode titles, audio
destinations, release schedule, notes, and final delivery copy are not yet
approved.

## Decision

Add `/beyond-the-bottleneck-2026-delivery` under the landing-page route group.
The route uses campaign chrome without shared site navigation and is marked
`noindex`. Until the final delivery content is approved, the page keeps episode
and audio details visibly labeled as placeholders and must not be published.

## Consequences

- The route can be reviewed and styled before final episode content arrives.
- Drip can use this route as the post-submission destination only after the
  placeholders are replaced and the complete flow is tested end to end.
- The delivery page remains public-by-URL rather than introducing accounts or
  authentication.
