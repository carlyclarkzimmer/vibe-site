# ADR 0011: Right Role landing page

## Status

Accepted

## Decision

Migrate the approved "Simplify How to Make Your Next Hire the Right Hire"
mini-class content to `/right-role` as a focused route under `(landing)`.
Preserve the existing site-wide editorial brand system and approved project
photography while omitting shared site navigation.

Registration submits directly to the campaign's Drip Embedded Form using the
shared `DripRecaptcha` integration. Keep the public form identifier, endpoint,
campaign tag, and reCAPTCHA site key in typed campaign content. Preserve the
page's established visual system instead of copying Drip's generic style block
or inline script.

## Consequences

The route remains server-rendered apart from the shared client-side reCAPTCHA
token refresh and adds no analytics, persistence, server proxy, or dependency.
Drip owns submission, campaign tagging, redirect, opt-in behavior, and
delivery. The production redirect and full inbox flow must be configured and
tested independently before the form is described as live.
