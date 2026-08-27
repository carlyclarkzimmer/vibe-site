# ADR 0022: Site-wide brand token normalization

## Status

Accepted

## Context

The site and campaign pages share typography variables, but migrated and legacy routes retained several one-off accent and neutral colors. Some pages also requested bold Montserrat and Bodoni Moda styles while only one font weight was loaded, causing browser-synthesized typography.

## Decision

All routes use the existing shared font families: Bodoni Moda for display type, EB Garamond for body copy, Montserrat for interface text, and Cormorant Garamond only for the site monogram. The real Bodoni Moda and Montserrat weights already referenced by page styles are loaded through `next/font`.

Legacy lime and unrelated pink accents are normalized to the approved berry accent token. Repeated neutral surfaces, text colors, borders, and dark card surfaces use shared tokens in `styles/tokens.css`. Route-specific composition and approved copy remain unchanged.

## Consequences

- Site and landing pages share one typography and color system.
- Existing hierarchy may still use multiple weights, but those weights are genuine font files rather than synthetic browser styles.
- Campaign layouts remain distinct while no longer introducing unrelated brand colors.
- Future color additions should extend the shared token contract instead of adding route-local hex values.
