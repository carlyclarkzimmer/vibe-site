# Architecture

## Purpose

This repository supports an editorial campaign landing page today and a
reusable foundation for future Carly Clark Zimmer campaign and main-site pages.
The architecture prioritizes clear ownership, visual consistency, and safe
extension over a generic page-builder abstraction.

## Runtime

- Next.js App Router supplies route and layout conventions.
- React server components are the default.
- vinext and Vite build a Cloudflare Worker-compatible application.
- `worker/index.ts` is the Worker entrypoint.
- OpenAI Sites packages and deploys the Worker output.
- D1, R2, and authentication scaffolding are present but unused.

No client-side state, persistent data, account system, or live form integration
is currently required.

## Dependency direction

```text
route
  -> route-owned section
    -> campaign component
      -> UI primitive
        -> theme token
```

Dependencies must not point upward:

- UI primitives do not import campaign components.
- Campaign components do not import route-owned sections.
- Content modules do not import React components.
- Shared components do not contain Carly-specific long-form prose.

## Routing and layouts

The root `app/layout.tsx` owns the HTML shell, global metadata defaults, and
global style import.

Campaign routes live in the `(campaigns)` route group. Its nested layout owns
focused campaign chrome. Route groups do not change public URLs, so the current
campaign remains at `/`.

A future `(site)` route group should be added only after a main-site header,
footer, navigation, and homepage have an approved design contract. Moving the
campaign away from `/` must be an intentional launch decision that addresses
URLs and redirects in the same change.

See [ADR 0001](adr/0001-route-and-layout-strategy.md).

## Component ownership

### UI primitives

Small components with stable brand contracts: buttons, eyebrow labels,
editorial headings, and section containers. These components contain no
campaign copy.

### Campaign components

Reusable campaign structures such as campaign chrome, hero, ticker,
contributor grid, and registration presentation. They receive typed content
through props.

### Route-owned sections

Distinctive narrative sections remain close to their route. They may use shared
components but should not be promoted solely because they use a common
two-column layout.

Shared code is extracted from demonstrated reuse or a stable design contract,
not from superficial visual similarity.

## Styling

CSS custom properties in `styles/tokens.css` are the source of truth for brand
colors, typography, spacing, widths, focus, and motion. `app/globals.css`
contains reset and truly global behavior. Components own their styles through
colocated CSS Modules.

Tailwind remains available for existing build compatibility, but new
components do not have to use utility classes. No additional styling framework
is needed.

See [ADR 0002](adr/0002-styling-and-theme-strategy.md).

## Content

Typed content modules own repeatable structured data such as metadata, dates,
navigation, lists, contributors, calls to action, and registration details.
Distinctive editorial prose may remain in route-owned sections.

This repository does not implement a recursive JSON section schema or internal
CMS. A CMS should be introduced only after a provider and editing workflow are
chosen.

See [ADR 0003](adr/0003-content-and-component-boundaries.md) and the
[content guide](CONTENT_GUIDE.md).

## Assets

Brand photography lives in `public/`. CSS controls responsive crops through
`object-fit` and `object-position`; source images are not destructively edited.
The hero and founder-story images have documented roles in `AGENTS.md`.

## Registration boundary

`RegistrationSection` owns presentation only. A future email integration should
use a server action or API route behind a provider-neutral boundary such as:

```text
lib/email/provider.ts
lib/email/subscribe.ts
```

Before implementation, confirm provider, list identifier, fields, consent,
double opt-in, spam protection, analytics, success behavior, and error
behavior.

## Testing

The minimum automated baseline is:

- Production vinext build
- ESLint
- Server-rendered route smoke tests
- Metadata and accessibility assertions

Visual changes also require desktop and mobile inspection. Add integration
tests when the registration form becomes functional.

## Source control and deployment

GitHub is the canonical source repository. OpenAI Sites is the production
deployment system. These are intentionally separate:

- A GitHub push does not deploy.
- A Sites deployment must reference an exact pushed source commit.
- `.openai/hosting.json` holds the existing opaque Sites project ID.
- No second Sites project or production pipeline should be introduced without
  an architecture decision.

See [ADR 0004](adr/0004-deployment-ownership.md).

## Known limitations

- Registration is presentational only.
- Contributor content is placeholder content.
- No main-site layout exists yet.
- No analytics or conversion tracking is configured.
- No final approved social-sharing image is configured.

## Adding a campaign

1. Create a campaign route.
2. Define typed metadata and structured content.
3. Compose existing campaign components.
4. Keep novel narrative sections route-local.
5. Add route smoke tests.
6. Validate desktop, tablet, and mobile layouts.
7. Add an ADR only when durable architecture changes.

## Adding a main-site page

1. Do not reuse campaign chrome as main-site chrome.
2. Establish approved main-site navigation and footer contracts.
3. Add a `(site)` layout.
4. Reuse tokens and appropriate UI primitives.
5. Store site navigation in one typed content module.

## Promoting code to shared

Promote a route-owned component only when it is used by at least two pages or
has a stable, explicitly approved design contract.
