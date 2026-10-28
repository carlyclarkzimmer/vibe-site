# ADR 0060: Restoration Studio event landing page

## Status

Accepted

## Decision

Add `/restoration-studio` as a focused campaign landing page without shared site
navigation. Keep its editorial composition and approved event prose route-owned,
and its event details, takeaways, and public Drip configuration in
`content/campaigns/restoration-studio.ts`.

Use Carly's supplied photograph without modifying the source image. Reuse the
brand typography, berry accent, campaign shell, and existing `DripRecaptcha`
submission behavior. First name is optional and email is required, matching the
supplied fields without inventing an additional requirement.

The form posts directly to Drip form `994182651` and submits the exact campaign
tag `Restoration Studio Nov 6th 2026`. Carly configured the workflow named
`Restoration Studio Nov 6th`; workflow execution is provider-owned and must be
verified in Drip, not inferred from a successful POST. Carly confirmed that
registration is immediate, with double opt-in disabled. Replace the embed's
placeholder opt-in source with the event-specific form name. Do not add a
general-marketing checkbox or generic vendor promotional copy.

## Consequences

- No database, API token, signup proxy, or new shared component is introduced.
- The event remains Friday, November 6, 2026, 12:00–1:00 PM ET, virtual.
- Production release remains pending preview approval, confirmation of redirect
  behavior, and an end-to-end subscriber/workflow/inbox test.
- Local rendering and form configuration checks do not establish that event
  registration or email delivery works.
