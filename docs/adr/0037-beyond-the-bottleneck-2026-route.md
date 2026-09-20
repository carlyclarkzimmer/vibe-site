# ADR 0037: Beyond the Bottleneck 2026 route

## Status

Accepted

## Context

The 2026 Beyond the Bottleneck campaign needs a year-specific public URL on
Carly's existing custom domain. Existing campaign links may still point to the
original `/beyond-the-bottleneck` path.

## Decision

The canonical landing-page route is `/beyond-the-bottleneck-2026`, with its
registration completion page at `/beyond-the-bottleneck-2026/thank-you`.
The original `/beyond-the-bottleneck` route permanently redirects to the new
campaign URL so previously shared links continue to work.

## Consequences

- Campaign, email, social, ad, and Drip links should use the year-specific URL.
- Existing links to the former campaign root remain valid through the redirect.
- The campaign stays inside the landing-page route group and keeps its focused
  campaign chrome.
