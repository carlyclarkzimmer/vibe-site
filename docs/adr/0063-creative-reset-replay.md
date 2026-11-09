# ADR 0063: Creative Reset replay landing page

## Status

Accepted

## Decision

Add `/creative-reset` under the landing route group with no shared main-site
navigation. Preserve `/restoration-studio` as the original registration route.
Use a route-owned server component and CSS Module, the existing campaign shell,
and the established black, white, and berry typography system.

Embed Carly's supplied Vimeo recording with its unlisted hash, no autoplay,
and Vimeo's do-not-track option. Include a direct Vimeo fallback. Follow the
recording with Carly's supplied Studio-to-Lounge transition and a compact
invitation linked to `https://carlyclarkzimmer.com/lounge` in a new tab. Describe Voxer
support as a designated support week. The full offer owns pricing and enrollment.

## Consequences

No new signup gate, analytics, dependencies, API routes, or persistence are
introduced. The email replay link should target this route after release.
Production publishing remains subject to Carly's preview approval.
