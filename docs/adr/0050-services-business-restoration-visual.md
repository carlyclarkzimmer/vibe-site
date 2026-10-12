# ADR 0050: Services Business Restoration Method visual

## Status

Accepted

## Context

The Services page described the three phases of the Business Restoration Method as a long text
block. Carly requested a more legible editorial presentation based on architectural restoration,
with individual images and real HTML copy so the method remains readable across viewport sizes.

## Decision

The Services route owns a reusable `BusinessRestorationMethod` component. It accepts typed phase
content and renders three responsive cards using individual architectural images stored in
`public/business-restoration/`. The cards use semantic HTML, CSS-based arched image masks, and the
existing brand typography. The Apply Here destination remains unchanged.

The component remains route-owned because the visual and copy are specific to the Services page.

## Consequences

- Phase copy remains selectable, accessible, and responsive rather than embedded in a single
  infographic.
- Each image can be reviewed or replaced independently without changing the card structure.
- Desktop uses three columns, tablet uses two, and mobile stacks all phases vertically.
