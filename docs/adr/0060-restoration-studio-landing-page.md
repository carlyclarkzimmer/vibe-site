# ADR 0060: Restoration Studio event landing page

## Status

Accepted

## Decision

Add `/restoration-studio` as a focused campaign landing page without shared site
navigation. Keep its editorial composition and approved event prose route-owned,
and its event details, takeaways, and public Drip configuration in
`content/campaigns/restoration-studio.ts`.

Use Carly's supplied painting photograph without modifying the source image.
The approved simplified composition has three simple sections:
invitation, experience with unnumbered takeaways, and inline registration.
Use the revised owner-approved copy, show free/Zoom/date details in the opening,
and label both CTAs “Save My Spot.” The hero uses the approved delivery-page
berry background (`#a41f64`), white text, and hot-pink (`#ff37b0`) button with
dark text. The experience and registration sections stay white. The approved studio treatment
adds a white photo mat, offset dusty-teal backing sampled in spirit from the
painting, a hot-pink corner brushstroke, and a hand-drawn invitation arrow.
Two labeled AI-generated creative-process images illustrate the activity; they
do not document prior participants. Decorations are CSS/SVG and leave Carly’s
original photograph untouched. Reuse the
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
- The event remains Friday, November 6, 2026, 12–1:15 PM Eastern, live on Zoom.
- Production release remains pending preview approval, confirmation of redirect
  behavior, and an end-to-end subscriber/workflow/inbox test.
- Local rendering and form configuration checks do not establish that event
  registration or email delivery works.

## Approved clarity revision

The headline is “Creative Coaching Workshop.” The opening names successful,
hardworking business owners and entrepreneurs, describes the pre-Black-Friday
break, and explains the 75-minute drawing and coaching activity. The body uses
three workshop steps and keeps “Make Room for What Matters” as a supporting
idea. Both CTAs have bold white text; hover and keyboard focus use the approved
lime-green background with dark text for readability.

## Painterly hero treatment

The approved refinement adds a static SVG paint-and-paper texture to the berry
hero, concentrated toward the photograph and edges. An irregular white mat
sits behind the unmodified photo, with the existing offset teal backing and
a hand-shaped pink paint swipe. The photograph is never clipped or retouched.
These decorative assets contain no motion and do not change copy or form behavior.

## October 28 studio build brief

The latest owner brief supersedes the berry-background direction with a route-local
ivory studio surface. Preserve the full supplied hero photograph and organic
white paper edge, without face alteration or recoloring. Replace the generated
supporting-image pair with a clearly labeled original-artwork placeholder in
section two, identified by `restoration-studio-artwork.jpg`; do not show a broken
image or generate replacement art. Keep existing assets for recoverability.
The owner specifies 12–1 PM Eastern in this brief, so visible duration is 60
minutes. The received brief ends mid-sentence; additional directions are pending.

## Supplied artwork image

Replace the section-two placeholder with the owner-supplied chalk-pastel image
at `public/restoration-studio-artwork.png`. Preserve its colors and full
proportions, add descriptive alt text, and retain “Art in the making.” as the
caption. No artwork attribution or participant identity is inferred.

## Restrained hero-only studio accents

Add lightweight decorative SVG paint droplets at three peripheral positions,
a raspberry dry-brush underline below the headline, and fine-grain ivory paper
texture. User-approved pigment accents include coral, ochre, teal, and lavender.
CSS pseudo-elements keep all decorations out of the accessibility tree and
layout flow; the hero clips edge overflow and decorations ignore pointer input.
No copy, photo, typography, layout structure, CTA behavior, or other section
changes are part of this refinement.
