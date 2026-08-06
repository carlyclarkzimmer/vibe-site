# ADR 0005: Campaign email capture

## Status

Accepted

## Decision

Campaign registration uses the site’s reusable `RegistrationSection` markup and
submits directly to a Drip Embedded Form. Each campaign declares its own Drip
form identifier, submission endpoint, and campaign tag in its typed content
module. An optional general-marketing checkbox adds a separate general-email
tag only when selected.

The application does not store a Drip API token or proxy subscriptions through
an application API. Drip owns confirmation and subscriber state. The site owns
the visual form, accessible field labels, privacy link, and branded thank-you
pages.

## Consequences

- Future campaigns can reuse the registration component by supplying their own
  Drip form configuration and tag.
- Campaign-level form configuration remains visible alongside campaign content.
- Drip form settings must explicitly configure the campaign’s double-opt-in
  behavior and matching redirects. Beyond the Bottleneck currently uses no
  double opt-in and redirects to the immediate-registration thank-you state.
- Google reCAPTCHA is enabled through Drip's supplied public script. Its
  token is requested when the visitor submits the form rather than when the
  page loads, because tokens expire after two minutes and can only be used
  once. Its production behavior must be verified during the end-to-end inbox
  test.
