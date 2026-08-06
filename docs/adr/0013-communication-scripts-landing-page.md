# ADR 0013: Communication Scripts landing page

## Status

Accepted

## Decision

Migrate the legacy Go-To Communication Scripts page to `/scripts` as a focused
route under `(landing)`. Preserve its approved copy and metadata, use the
documented project photography roles, and keep scripts signup and delivery
owned by the existing external Leadpages leadbox. Omit the legacy page's
analytics, tracking scripts, and Leadpages platform metadata.

## Consequences

The route does not render shared site navigation. Its CTA links to the verified
legacy leadbox destination, while submission and resource delivery remain
provider-owned and must be tested end to end before they are described as
working.
