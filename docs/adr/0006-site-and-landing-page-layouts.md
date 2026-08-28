# ADR 0006: Site and landing-page layouts

## Status

Accepted

## Decision

The app has two page types with the same design system and different navigation
contracts:

- `(site)` provides the permanent main-site experience at `/` through
  `SiteShell`, including shared navigation and footer.
- `(landing)` provides campaign and conversion routes without shared site
  navigation. Beyond the Bottleneck lives at `/beyond-the-bottleneck` and uses
  only campaign-specific navigation and CTAs when the campaign calls for them.
  Its current composition omits the campaign header and begins directly with
  the hero.

The root layout remains responsible only for document-wide concerns. Page type
is selected by route group, not by a `hideNav` option on a shared header.

The shared site navigation uses 14.535px interface text for its links, primary
CTA, and mobile menu label—a further 5% reduction from the previous 15.3px
scale.
Tighter responsive gaps preserve the complete desktop and tablet navigation
while the CCZ monogram retains its approved scale.

## Consequences

- The main homepage can become the durable root route without turning campaign
  journeys into navigable site pages.
- Future site pages automatically receive the shared navigation; future landing
  pages cannot accidentally inherit it.
- Shared site navigation uses local relative routes. Until approved content is
  migrated, those routes render clear placeholders rather than sending visitors
  back to the legacy site.
- New page requests must identify site or landing intent before implementation.
