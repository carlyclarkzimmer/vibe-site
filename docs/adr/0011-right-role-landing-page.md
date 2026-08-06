# ADR 0011: Right Role landing page

## Status

Accepted

## Decision

Migrate the approved "Simplify How to Make Your Next Hire the Right Hire"
mini-class content to `/right-role` as a focused route under `(landing)`.
Preserve the existing site-wide editorial brand system and approved project
photography while omitting shared site navigation.

Keep registration and delivery owned by the existing Leadpages flow. The page
links to the verified hosted access form rather than copying legacy scripts or
introducing a new application-side email integration. The live flow's verified
post-submit destination remains
`https://carlyclarkzimmer.com/training-simplify-hiring-with-kolbe`.

## Consequences

The route remains server-rendered and adds no client state, analytics,
tracking scripts, or new dependency. Leadpages continues to own form
validation, spam protection, submission, and delivery behavior. The external
form must continue to be maintained and tested independently.
