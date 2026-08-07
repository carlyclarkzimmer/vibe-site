# ADR 0010: Site-wide equity pledge

## Status

Accepted

## Decision

The approved Cross-Cultural Competency, Awareness, and Equity Pledge renders
once from the root layout after all route-owned content and immediately before
the shared legal footer. Its copy is stored in
`content/site/equity-pledge.ts`, and its presentation is owned by the shared
`EquityPledge` component.

Route-specific copies of the same pledge are removed so visitors do not see
duplicate or inconsistent versions. The root layout therefore owns this single
required closing statement and the final legal footer in addition to
document-wide metadata and styles. `SiteShell` continues to own navigation but
no longer renders the legal footer.

## Consequences

- Every current and future site or landing page includes the pledge.
- The pledge always appears above copyright, Privacy Policy, and Terms and
  Conditions.
- Carly's approved wording has one source of truth.
- Campaign layouts retain their navigation boundaries while sharing the
  required closing statement.
- Removing or materially changing the pledge requires explicit owner approval.
