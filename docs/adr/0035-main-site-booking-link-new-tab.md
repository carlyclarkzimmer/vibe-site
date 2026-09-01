# ADR 0035: Open the main-site booking CTA in a new tab

## Context

The shared main-site header links visitors to Carly's external Acuity
scheduling page through its “Book a call” CTA. Following that link previously
replaced the current site page.

## Decision

Mark the shared primary site CTA as a new-tab destination. Apply the same
`target="_blank"` and `rel="noreferrer"` behavior to both the desktop button
and the mobile-menu version of the link.

## Consequences

- Visitors keep Carly's site open while scheduling in a separate tab.
- Desktop and mobile navigation behave consistently.
- The external scheduling destination remains unchanged.
