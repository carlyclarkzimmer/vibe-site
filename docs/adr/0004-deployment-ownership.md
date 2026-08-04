# ADR 0004: Deployment ownership

## Status

Accepted

## Decision

GitHub is the canonical source repository. OpenAI Sites is the production
deployment system. GitHub pushes do not automatically deploy.

Every Sites deployment reuses the existing project ID and references an exact
pushed commit. A second production pipeline requires a new architecture
decision.

## Consequences

- Source collaboration and production publication remain independently
  controlled.
- Development versions can stay private.
- Competing deployment systems cannot overwrite one another accidentally.
