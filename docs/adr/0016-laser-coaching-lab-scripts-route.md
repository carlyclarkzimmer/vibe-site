# ADR 0016: Laser Coaching Lab welcome page at `/scripts`

## Status

Superseded by ADR 0017

## Decision

Replace the Communication Scripts landing page at `/scripts` with the approved
Laser Coaching Lab welcome and delivery composition. Keep the route in the
focused landing-page layout without shared site navigation, reuse approved
project photography, and retain the verified Telegram group invitation as the
only external action.

Use route-level metadata derived from the legacy Laser Coach Lab page, with the
canonical and Open Graph URL owned by the new `/scripts` route. Omit Leadpages
analytics, tracking, and platform-specific metadata.

## Consequences

The prior Communication Scripts offer is no longer served from `/scripts`.
Laser Coaching Lab email delivery remains provider-owned and is not represented
as an application integration. The Telegram invitation opens in a new tab with
clear keyboard focus and no application-side tracking.
