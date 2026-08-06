# ADR 0017: Correct Scripts and Laser Coaching Lab thank-you routes

## Status

Accepted

## Decision

Restore the approved Go-To Communication Scripts landing page at `/scripts`
and move the Laser Coaching Lab welcome page intact to
`/thank-you-laser-coaching-lab`.

Both routes remain focused landing pages without shared site navigation.
Communication Scripts retains its verified external Leadpages leadbox, while
the Laser Coaching Lab page retains its verified Telegram group invitation.
Each route owns matching canonical and Open Graph URLs.

## Consequences

ADR 0013 remains the active decision for `/scripts`. ADR 0016 is superseded
because it assigned the Laser Coaching Lab page to the wrong route. Provider
submission and email-delivery behavior remain external and must not be
described as verified application integrations.
