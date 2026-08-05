# Baseline page migration template

Use this template to turn a legacy URL into an execution-ready migration plan.
The goal is a faithful baseline page in the new application, not a complete
content strategy or business review.

## Working defaults

Unless the migration request says otherwise:

- Preserve the legacy page’s copy verbatim.
- Preserve the legacy slug.
- Preserve section order and conversion intent.
- Use the new app’s existing brand system and page architecture.
- Treat focused offer, campaign, checkout, and opt-in pages as landing pages.
- Treat permanent navigable content as site pages.
- Recompose legacy layout where needed for readability and responsiveness
  without rewriting copy.
- Download retrievable first-party page images into `public/`; do not hotlink
  legacy page-builder assets.
- Preserve current external CTA destinations.
- Do not reproduce legacy page-builder scripts, pixels, analytics, or
  animations automatically.
- Do not publish or redirect the legacy URL during baseline composition.
- Record obvious conflicts or broken dependencies as implementation notes.
  Stop only when a conflict blocks rendering or safe operation.

## Migration record

| Field | Value |
| --- | --- |
| Legacy URL |  |
| Page name |  |
| Proposed app route |  |
| Page type | Site page / Landing page / Legal |
| Page purpose |  |
| Primary visitor action |  |
| Status | Harvested / Ready to build / Baseline composed / Preview ready |

## Source snapshot

- Harvest date:
- Source platform:
- Metadata title:
- Metadata description:
- Canonical or Open Graph URL:
- Existing embeds or integrations:

## Baseline content structure

List the source sections in order and describe how they map into the new page.

| Order | Source section | Baseline treatment |
| --- | --- | --- |
| 1 |  | Preserve / Recompose / Omit platform artifact |

## Copy

Record the exact source copy in page order or link to a complete harvested-copy
appendix. Do not silently proofread or improve it during baseline migration.

## Links and conversion paths

| Role | Label | Destination | Baseline treatment |
| --- | --- | --- | --- |
| Primary CTA |  |  | Preserve |

## Images

| Source asset | Content shown | Baseline role | Proposed local filename |
| --- | --- | --- | --- |
|  |  |  |  |

Add descriptive alt text based on the visible image. If the identity or subject
cannot be determined safely, use a neutral description or mark the image
decorative.

## Implementation notes

- Route ownership:
- Structured content:
- Route-owned prose:
- Reusable components:
- Mobile behavior:
- Accessibility:
- External dependencies:

## Blockers

List only issues that prevent a safe, renderable baseline. Examples:

- The source page cannot be accessed.
- A required checkout or form destination is missing.
- An image cannot be retrieved and has no reasonable placeholder.
- Two source values make the page impossible to represent without choosing one.

Non-blocking inconsistencies should be preserved and noted for a later content
polish pass.

## Baseline implementation sequence

1. Add the route in the correct route group.
2. Add source copy and structured content.
3. Add retrievable first-party assets under descriptive local filenames.
4. Recompose the legacy structure in the current editorial brand system.
5. Add metadata and rendered-route coverage.
6. Run build, lint, tests, and `git diff --check`.
7. Review desktop and mobile rendering, headings, focus, links, and alt text.
8. Provide a preview.
9. Leave publication, redirects, tracking, and content polish for separate
   instructions.
