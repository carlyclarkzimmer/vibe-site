# ADR 0019: Pattern Breaker Drip email capture

## Status

Accepted

## Decision

Replace the two legacy Leadpages forms on `/pattern-breaker` with two
presentations of the Pattern Breaker Drip Embedded Form. Both forms use Drip
form `300703732`, submit the `Pattern Breaker Email Opt-in` tag, collect first
name, email, and social media, and use the shared Drip reCAPTCHA component with
unique response-input IDs.

Drip owns the disabled double-opt-in setting and the post-submission redirect
to `/thank-you?status=registered`. The page retains its approved CTA labels and
visual form treatment, adds the standard local privacy-policy link, and does
not add a general-email checkbox or vendor styling.

This decision supersedes ADR 0017 only where that record preserved the legacy
Leadpages integration.

## Consequences

The application adds no API token, server proxy, database, or subscription
state. Drip owns subscriber state, tagging, workflow, redirect, and delivery.
The opt-in must not be described as fully working until the deployed production
route passes the controlled end-to-end inbox test.
