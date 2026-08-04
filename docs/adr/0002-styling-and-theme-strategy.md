# ADR 0002: Styling and theme strategy

## Status

Accepted

## Decision

CSS custom properties in `styles/tokens.css` define the brand system.
`app/globals.css` contains reset and global behavior. Components use colocated
CSS Modules.

Tailwind remains installed for build compatibility but is not the required
authoring model. No additional styling framework will be introduced.

## Consequences

- Brand values have one source of truth.
- Styles follow component ownership.
- Global selector collisions are reduced.
- The refactor can preserve the existing visual design without translating it
  into a new styling paradigm.
