# ADR 0048: Add the Laser Coach opt-in to the homepage

## Status

Accepted

## Context

The homepage needs to introduce the free 5-Minute Laser Coach near the top of
the visitor journey without sending the visitor away from the page. The
existing `/breakthrough` landing page already owns the approved Drip form,
campaign tag, reCAPTCHA site key, and delivery workflow.

## Decision

Add a route-owned homepage opt-in section directly after the hero. Reuse the
public configuration from `content/campaigns/breakthrough.ts` and the shared
`DripRecaptcha` component so both entry points submit to the same Drip form and
campaign tag. The homepage variant collects only required first name and email
fields and presents validation, submitting, error, and inline success states.

Keep the new visual treatment scoped to the homepage. Load Playfair Display as
an additional font variable for this section only, while continuing to use the
existing Montserrat interface font and established site architecture.

## Consequences

- The Laser Coach has a prominent homepage entry point without changing the
  `/breakthrough` page.
- The homepage and `/breakthrough` share the same delivery configuration.
- A future change to the Drip form ID, campaign tag, or reCAPTCHA site key is
  still made once in typed campaign content.
- Production delivery remains unverified until a controlled live signup and
  inbox test are completed.
