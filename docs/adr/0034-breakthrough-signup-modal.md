# ADR 0034: Breakthrough signup modal

## Context

The Breakthrough landing page previously displayed its Drip registration form
inline near the top and linked its repeated access calls to action to that form.
Carly requested that the form instead open as a popup from every access button
on the page.

## Decision

Keep one instance of the existing Drip form and present it in a native HTML
dialog. All five Breakthrough access calls to action open that shared dialog.
The dialog supports keyboard dismissal, backdrop dismissal, visible focus, and
an explicit close button while retaining the approved fields, campaign tag,
reCAPTCHA integration, privacy link, and direct Drip submission boundary.

## Consequences

- The form is no longer part of the normal page flow.
- Every access CTA has consistent behavior without duplicating form identifiers.
- The Breakthrough route now has a small client-side interaction boundary for
  dialog state; the remainder of the route stays server-rendered.
- Drip still owns submission and downstream email behavior.
