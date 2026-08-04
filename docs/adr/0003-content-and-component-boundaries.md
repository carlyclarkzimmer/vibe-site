# ADR 0003: Content and component boundaries

## Status

Accepted

## Decision

Typed modules own repeatable structured content. Distinctive long-form prose
may remain in route-owned section components. Shared components receive content
through typed props and do not contain Carly-specific prose.

This refactor will not create a recursive JSON page renderer or CMS abstraction.

## Consequences

- Dates, lists, contributors, and CTA data are maintained centrally.
- Editorial writing remains understandable alongside its layout.
- Reuse is based on demonstrated contracts rather than premature abstraction.
