# ADR 0039: Align the 2026 campaign page with the approved build brief

## Status

Accepted

## Context

The `/beyond-the-bottleneck-2026` landing page needed to reflect the approved
audio-series positioning, copy sequence, CTA hierarchy, and editorial brand
system while preserving the existing campaign shell, photography, contributor
placeholders, and Drip integration.

## Decision

- Keep the route and campaign component boundaries unchanged.
- Store repeatable brief content in the existing typed campaign module and keep
  long-form prose in route-owned sections.
- Recompose the route in the brief's section order, followed by the existing
  belief section and the shared registration section.
- Extend shared buttons and contributor presentation only with opt-in variants
  so other routes retain their current appearance.
- Preserve the Drip endpoint, form ID, field names, campaign tag, reCAPTCHA,
  UTM field behavior, privacy link, and normal POST submission.
- Continue using labeled contributor-photo placeholders until approved assets
  and contributor details are supplied.

## Consequences

The campaign is now consistently described as an audio series and its visual
rhythm follows the approved black, white, neutral, berry, and hero-hairline
system. Future copy swaps can remain within the existing structured-content and
route-section boundaries. Registration still requires production redirect and
end-to-end inbox verification before it can be described as fully live.
