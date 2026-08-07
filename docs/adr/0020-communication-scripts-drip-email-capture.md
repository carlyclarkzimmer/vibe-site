# ADR 0020: Communication Scripts Drip email capture

## Status

Accepted

## Decision

Replace the retired external Leadpages CTA on `/scripts` with the Communication
Scripts Drip Embedded Form. Preserve the landing page's established visual
design and CTA language while collecting first name, email address, and social
media. Submit the unconditional `Communication Scripts Opt-In` tag and use the
shared Drip reCAPTCHA component. Do not include a general-email checkbox.

Keep the form configuration in typed campaign content and submit directly to
Drip without an API token, application proxy, or database. Link to the local
privacy policy below the submit button.

## Consequences

Drip owns submission, redirect, subscriber state, tagging, and resource
delivery. The integration must not be described as working until its production
redirect and the complete inbox delivery flow have been tested end to end.

This decision supersedes the Leadpages integration boundary for `/scripts` in
ADR 0013 and ADR 0017 without changing the route's landing-page ownership.
