# ADR 0063: Route-owned Lounge editorial composition

## Status
Accepted for preview, November 10, 2026. Publication awaits owner review.

## Decision
Art-direct the existing navigable `/lounge` sales page as an editorial feature,
using its current route-local palette and shared brand fonts. Preserve all
existing sales text, metadata, navigation, footer, CTA labels, and destinations.
Keep content in the existing route-owned module; add no dependencies or shared
styling changes.

Use asymmetric introductory and fit compositions, a numbered 2×2 pillars grid,
staggered outcomes, paired private-coaching features, distinct layouts for the
remaining benefits, a dark community statement, light investment details, and
an asymmetrical closing spread. The six benefits retain their order and numbers.
The current portrait and Studio image remain unmodified; CSS controls placement.
Five identified, visibly labeled image placeholders reserve space for owner assets.
No stock or generated imagery is introduced. Preserve the hero scroll-color
opt-out and reduced-motion support. No new scroll controller is needed.

## Consequences
The page remains server-rendered. Other pages and global styles are unchanged.
Placeholder captions identify missing assets and are not additions to sales copy.
Validate copy and link preservation against the previous rendered page, plus
production build, lint, rendered checks, and responsive browser inspection.

## Tuesday Afternoon full-bleed feature

The owner revised the introduction to headline, edge-to-edge landscape image
slot, then a narrower reading column containing all original paragraphs and CTA.
Keep EDITORIAL_IMAGE_01 explicitly labeled until a final photograph is supplied.
Its brief is a sunlit waterside veranda with seating and an open book, closed
laptop, and coffee on a small table. Reserve 2:1 desktop, 16:9 tablet, and 4:3
mobile space, without frames, gutters, text overlays, stock assets, or generation.
Use section width rather than viewport-width breakout to avoid horizontal overflow.

## Image 02 personal invitation

Place the original fit heading above a 40/60 portrait-and-bullets grid, then
render the unchanged closing paragraphs in a separate reading-width column
below it. EDITORIAL_IMAGE_02 reserves a borderless 4:5 documentary lifestyle
portrait of a relaxed woman outdoors, for replacement after the owner's shoot.
On mobile use heading, 5:6 portrait slot, full bullet list, then closing copy.
No actual photograph, likeness, or new sales copy is invented.

## Editorial images 03 and 04

Group coaching pairs all original copy on the left with a 45% portrait slot
on the right; a fine rule introduces the unchanged scheduling paragraph.
The resources feature reverses the rhythm: a 45% still-life image slot on the
left, original heading and copy on the right. Its optional owner-supplied caption
is included beneath the slot. Both mobile compositions retain number/heading,
image, then complete body copy. Placeholders remain explicit and replaceable;
no stock photograph or invented portrait is introduced.

## Artist profile and closing invitation

Use the original unmodified studio JPEG prominently at left, with the existing
transparent watercolor asset behind it in surrounding negative space. Keep the
original number, heading, opening question, paragraphs, and emphasis at right;
mobile order is heading, full photograph, complete copy. Include the supplied
“In the Studio” credit caption. No synthetic portrait, crop, recoloring, or
additional image editing is performed.

Recompose the closing as headline, wide EDITORIAL_IMAGE_05, narrow body copy,
original invitation, original CTA, and original sign-off. Preserve its words
and destinations exactly. Both requested editorial captions are the only
authorized additions to existing sales text.

## Selected Image 01

Replace EDITORIAL_IMAGE_01 with the owner's supplied seaside terrace image.
Render it full-bleed at its natural aspect ratio across breakpoints, preserving
the book and coffee near the lower edge without cropping or retouching.
Alt text describes only visible details; no closed laptop is claimed.

## Final supplied photographs

All five placeholders have owner-selected assets. Preserve original compositions
and colors with proportional, uncropped rendering. Convert the owner's closing
HEIC to JPEG for browser compatibility, retaining its orientation and full frame.
Its portrait format is centered at a 720px maximum rather than forced into a
landscape crop. The owner removed the Studio watercolor decoration; retain only
the original studio photograph and its supplied credit caption.

## Release selections

Final owner selections: Mediterranean terrace for Image 01; black-top 109
portrait for fit; green-jacket 027 portrait for group coaching with a small
CSS-only top crop; berry-jacket 097 portrait for resources; original Studio
photo without watercolor; berry-jacket 092 portrait for the closing invitation.
Preserve the source files and natural colors. Only these selected assets are
part of the release; rejected photo alternatives remain outside tracked source.

The final group-coaching selection is portrait 076, superseding 027 during
release preparation. Preserve its full frame; the previous top crop is removed.
