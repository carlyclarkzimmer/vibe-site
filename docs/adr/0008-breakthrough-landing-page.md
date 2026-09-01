# ADR 0008: Breakthrough landing-page migration

## Status

Accepted

## Context

The legacy `/breakthrough/` page offers the 5-Minute Laser Coach Custom GPT. It is a focused offer page with a Vimeo introduction and repeated access calls to action.

## Decision

Migrate it to the campaign-style `/breakthrough` route. Preserve the Vimeo video, place the legacy promotion artwork in `public/`, and omit the legacy Leadpages analytics and Facebook Pixel scripts.

Collect free-access registrations through the campaign's Drip Embedded Form using the shared `DripRecaptcha` integration. Store the public form configuration in typed campaign content. Present one branded form near the top of the page and point repeated access calls to action to that form.

## Consequences

The new page remains a focused landing page without shared site navigation. Drip owns submission, the disabled double-opt-in setting, campaign tagging, and the post-submission redirect to `/2026-5-minute-laser-coach-delivery`. The production redirect and inbox delivery flow must be tested end to end before registration is described as live.
