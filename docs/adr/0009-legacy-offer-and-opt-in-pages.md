# ADR 0009: Legacy offer and opt-in page migrations

## Status

Accepted

## Decision

Migrate the 5-Minute Laser Coach delivery, Trust Issues, Decision Points newsletter, and newsletter thank-you pages as focused routes under `(landing)`: `/2026-5-minute-laser-coach-delivery`, `/trust`, `/newsletter`, and `/newsletter-thank-you`. Preserve Vimeo, ChatGPT, Spotify, and Leadpages destinations; omit legacy tracking scripts. Leadpages forms remain external and unverified.

## Consequences

These routes do not render shared site navigation. External form and media behavior remains owned by the original providers and must be tested separately before being described as working.
