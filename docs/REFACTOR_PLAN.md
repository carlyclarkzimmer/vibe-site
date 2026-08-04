# Reusable site foundation refactor plan

## Objective

Turn the current campaign prototype into a reusable, documented foundation for
campaign and future main-site pages without changing its approved visual design,
copy, route, or behavior.

## Sequence

1. Standardize pnpm and replace obsolete starter tests.
2. Document architecture, content, contribution, and deployment decisions.
3. Establish brand tokens and reduce global CSS.
4. Extract stable UI primitives.
5. Create focused campaign chrome and reusable campaign components.
6. Separate typed structured campaign content.
7. Decompose distinctive prose into route-owned sections.
8. Update documentation to match the implemented architecture.
9. Run build, lint, tests, responsive checks, and accessibility checks.
10. Push the feature branch, open a draft pull request, and publish a private
    Sites preview.

## Invariants

- `/` continues to render Beyond the Bottleneck.
- Approved copy and October 5th remain unchanged.
- The hero and founder-story images keep their roles.
- The palette remains black, white, gray, and `#991f5d`.
- The moving ticker remains.
- Registration remains clearly nonfunctional.
- No CMS, database, analytics, authentication, or email provider is added.
- No second Sites project or production pipeline is created.
- Every implementation commit after baseline repair is buildable.

## Definition of done

- One package manager and lockfile remain.
- Build, lint, and tests pass.
- Theme tokens are shared.
- Global CSS contains only global rules.
- Shared components contain no Carly-specific long-form copy.
- Campaign chrome and stable campaign structures are reusable.
- Route-specific narrative content has clear ownership.
- Architecture and content workflows are documented.
- Future agents are directed to the documentation through `AGENTS.md`.
- A future campaign can be composed without copying the entire page.
- The implementation is available as a draft pull request and private preview.
