# ADR 0029: Extend the immersive hero navigation treatment to Services

## Status

Accepted

## Context

The Work With Carly page opened with a solid dark section and the standard
light site header. The requested design direction is to use approved brand
photography as a full-bleed hero and match the homepage's integrated white
navigation and outlined CTA treatment.

## Decision

Use `public/carly-services-hero.jpg` as the full-bleed Services hero image with
a restrained dark overlay. Set the approved “Business Restoration” headline
across the lower center using the homepage display typography at a scale that
keeps Carly's face unobstructed, and pin the hero so
the opening content and first testimonial scroll over it. Constrain that sticky
behavior to the opening sequence so the hero releases immediately after the
first testimonial. Treat both
`#home-hero` and `#services-hero` as immersive hero pages in the shared site
header styles.

Set the approved supporting sentence beneath the headline in the same
supporting serif treatment used by the homepage hero.

Render the homepage approach section, using its existing approved content and
CTA, immediately beneath the Services hero. Keep the existing Services opening
content, image, and first testimonial after that copied section.

Give the copied Services section its own approved headline at 80% of the
homepage section's display scale. Use Services-specific approved body copy and
use the approved “Book a Recommendation Call” button label. Link that CTA to
Carly's approved scheduling page and open it in a new tab. The shared Button
primitive accepts an explicit `newTab` option so external CTA behavior remains
safe and intentional. Set the second line of the Services approach headline in
italic for the approved editorial emphasis.

Copy the homepage Meet Carly composition immediately beneath the recommendation
CTA section as a route-owned Services section. It initially reuses the approved
homepage story content and image so Carly can replace the Services-specific copy
in a subsequent content pass.

Give the copied Services section its own full-width headline: “That’s where the
Business Restoration Method comes in.” The heading spans both the story and
image columns while the homepage Meet Carly heading remains unchanged. Match
its scale, capitalization, and line height to the Services approach headline.
Use the approved berry-jacket portrait as this Services section's route-specific
photography, leaving the homepage story portrait unchanged. Present it in a
non-destructive 5:7 crop aligned to the bottom so the visible frame begins just
above Carly's head.
Place a full-width “Apply Here” button directly beneath this portrait and link
it to `https://carlyclarkzimmer.as.me/connect`, opening the scheduling page in a
new tab. Use the same shared outlined button treatment as the other primary
Services-page calls to action. Size it to 75% of the portrait width, increase
its height and label scale, and add generous separation from the image.
Replace the left-column story with Carly's approved Business Restoration process
copy. Remove the copied homepage closing paragraphs from the Services version,
then continue the column with the approved three-part Business Restoration
Method sequence and its stated goal.

Remove the legacy introductory offer, case-study copy, and accompanying portrait
that followed the new method section. Preserve its testimonial as a standalone
proof section.

Remove the legacy Decision Map Intensive offer section, including its details,
image, and booking button, while leaving the following Services content intact.
Remove the legacy Identity Uplevel offer section and its portrait as well,
without deleting the content that follows it.
Remove the following “What changes over six months” and logistics band as one
complete section.
Remove the legacy Laser Coaching Club offer section while retaining the
recommendation and testimonial sections that follow it.
Reduce the remaining final testimonial's display size so the longer quote reads
more comfortably while retaining its existing composition and attribution.
Use Rochelle's approved portrait alongside her final testimonial instead of
Carly's previous supporting image. Match Rochelle's quote and attribution
typography to Emily's testimonial treatment.

Repeat the homepage “Ways to Work Together” showcase immediately before Emily's
testimonial on the Services page, preserving its approved content, links,
photography, translucent panel, and sticky backdrop behavior.
Omit the Business Restoration Method item from this Services-page copy of the
showcase while retaining it on the homepage.
Add Emily's approved portrait to the left of her testimonial on wider screens,
stacking the portrait above the quote on smaller screens. Enclose the portrait
and quote together inside one continuous white bordered card.
Increase Emily's attribution size by 50% without changing the final testimonial
attribution.
Keep Emily's portrait close to the testimonial copy by tightening the card's
column gap and aligning the portrait toward the text.
Remove the legacy “What happens when you wait” section while preserving the
recommendation section that follows it.
Use the shared outlined button treatment for the recommendation section's call
to action so it matches the other primary Services-page buttons.
Match the recommendation section's heading scale and body typography to the
Business Restoration Method section.

Keep the complete navigation visible through desktop and tablet widths. Switch
to the existing compact menu only below 760px, where displaying every link and
the primary CTA would cause crowding or overflow.

## Consequences

The Work With Carly page now opens with the same editorial image, typography,
layering, and navigation language as the homepage. The shared navigation
remains unchanged on other site pages, and focused landing pages still omit it.
Mobile visitors retain the accessible compact menu.
