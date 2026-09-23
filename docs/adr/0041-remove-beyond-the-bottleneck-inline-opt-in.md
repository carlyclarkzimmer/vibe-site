# ADR 0041: Remove the Beyond the Bottleneck inline opt-in

## Status

Accepted

## Context

Carly requested removal of the final opt-in form beneath the campaign's
closing line. That form was the page's only on-page signup destination.

## Decision

- Remove the inline Drip form and its form-specific button and reCAPTCHA from
  the 2026 campaign page.
- Preserve the surrounding campaign-details copy and the `#register` section
  anchor so existing page CTAs have a valid on-page destination.
- Do not represent those CTAs as a working registration flow. A new signup
  destination requires a separate owner decision and end-to-end test.
- Keep the existing structured Drip configuration and reusable reCAPTCHA
  component for possible future use; do not delete unrelated integrations.

## Consequences

Visitors can read the campaign details but cannot register from this page.
Future work must either supply an approved external destination or redesign
the campaign CTAs when signup resumes.
