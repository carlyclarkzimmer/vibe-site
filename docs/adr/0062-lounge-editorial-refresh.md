# ADR 0062: Lounge editorial refresh

## Status
Accepted — owner approved proposal November 9, 2026; publication pending preview review.

## Decision
Preserve `/lounge` as the existing navigable site sales page (ADR 0058), with
its shared navigation and footer. Replace its route-owned sales copy with the
owner's supplied November revision verbatim. Keep immutable approved text in a
route-local module, with semantic rendering in the page.

Use an explicitly approved route-local ivory, charcoal, blush, and berry palette,
without changing global tokens. The Business Restoration Method infographic is
visual inspiration only; its messaging and layout are not imported. Reuse the
existing Lounge portrait and supplied Restoration Studio artwork, preserving
source pixels. Present Studio as a complimentary gathering separate from paid
benefits. Preserve the ThriveCart destination and external checkout ownership.

## Consequences
The offer now specifies an initial three-month commitment, private resets every
90 days, and a designated Voxer week with a sabbatical week. Checkout terms must
be confirmed before publication. The initial roadmap session has no stated
duration in the new approved copy; do not reintroduce the old 60-minute claim.

## Hero refinement

The owner requested the previous header treatment. Restore the full-bleed
portrait hero, dark overlay, white text, and transparent shared navigation,
retaining the revised approved wording and the editorial body layout.

The Lounge hero opts out of the existing scroll text color controller through
`data-no-scroll-berry`. Its text retains its authored colors while the body
continues to use the sitewide scroll behavior.

## Creative Reset photograph

Use the owner-supplied watercolor-framed studio portrait for Creative Reset.
Preserve the original image; route-local CSS masks soften only its outer edges
to blend the watercolor into the section background.
