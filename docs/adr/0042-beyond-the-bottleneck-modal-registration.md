# ADR 0042: Restore Beyond the Bottleneck registration in a modal

## Status

Accepted

## Context

The campaign's inline form was removed in ADR 0041. Its registration CTAs then
led to the details section, which was not a working signup destination. Carly
supplied the approved Drip embedded-form configuration and requested a native
campaign modal from every registration CTA.

## Decision

- Render one route-owned registration dialog on the 2026 campaign page.
- Intercept the page's existing registration-anchor CTAs to open the dialog,
  leaving the details section and anchor available as a no-JavaScript fallback.
- Preserve the Drip POST endpoint, form identifier, field names, hidden
  honeypot, campaign tag, and submit-time reCAPTCHA token.
- Keep the form as a normal browser POST. Drip owns acceptance and redirect;
  the page does not invent a client-side success state.
- Use native dialog behavior for focus containment, Escape dismissal, and
  background inertness, with explicit focus restoration and scroll locking.

## Consequences

The campaign has an on-page signup affordance again. Production signup must
still be tested end to end in Drip before it is described as working.
