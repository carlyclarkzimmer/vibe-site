# ADR 0045: Newsletter hero composition

## Status

Accepted

## Context

The newsletter signup page used a separate title band and two-column editorial layout. The site owner requested that the page instead use the same visual treatment as the Services hero, while keeping the opt-in centered.

## Decision

The `/newsletter` page uses a full-bleed, image-backed hero with a dark readability overlay, centered display heading, centered descriptive copy, and the existing Drip opt-in form centered within the hero content. The page remains a focused campaign page without main-site navigation, and the existing form destination, fields, tag, reCAPTCHA, and privacy link are unchanged.

## Consequences

- The newsletter page now shares the Services hero's editorial hierarchy and high-contrast presentation.
- Signup behavior remains unchanged.
- Future newsletter copy or form updates should preserve the centered hero composition unless the owner requests a new layout.
