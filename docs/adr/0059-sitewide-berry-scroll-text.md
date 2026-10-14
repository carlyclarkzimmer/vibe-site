# ADR 0059: Extend berry scroll text to editorial copy

## Status

Accepted

## Context

The Beyond the Bottleneck campaign uses view-progress color changes in selected
sections. Carly wants the black text on the rest of the website to gain the same
berry-pink response while scrolling, without recoloring white text or controls.

## Decision

Mount one lightweight scroll controller at the root document level. On each
route, it identifies dark neutral editorial text in the page's main content and
interpolates that text to the existing `--color-accent` token as it moves through
the viewport. It excludes navigation, links, buttons, forms, and text with an
existing non-black brand color. The Beyond the Bottleneck campaign retains its
own route-specific timelines rather than receiving a second effect. Respect
`prefers-reduced-motion` by leaving text in its original color.

## Consequences

- Site and landing pages share the color behavior without changing their copy
  or route-owned section components.
- The effect is limited to editorial text that was originally dark neutral;
  white text and interactive elements retain their authored contrast.
- Route navigation and reduced-motion changes restore any inline color that
  the controller temporarily applies.
