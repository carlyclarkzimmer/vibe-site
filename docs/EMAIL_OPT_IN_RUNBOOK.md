# Campaign email opt-in runbook

Use this runbook whenever Carly asks to add a page or campaign email capture.
It is the shared operating procedure for Carly and agents. It supplements
`CARLY_PLAYBOOK.md`, `docs/CONTENT_GUIDE.md`, and ADR 0005.

## Owner handoff

First, determine the page type. Email captures for a campaign, free resource,
or offer normally belong on a **landing page** under `app/(landing)/` and must
not render the shared site navigation. A permanent **site page** under
`app/(site)/` can link to a focused landing page instead.

The agent should help Carly provide the following, in plain language:

1. Campaign/page purpose, approved copy, CTA, images, and navigation location.
2. The Drip campaign tag. Use a distinct tag per campaign, such as
   `beyond-the-bottleneck-listening-tour`.
3. Fields to collect. The default is first name and email.
4. Whether an optional, unchecked broader-marketing checkbox is appropriate.
   If it is, agree its separate Drip tag before implementation.
5. Double-opt-in behavior. Beyond the Bottleneck uses **Disabled**, which makes
   a person active immediately. Confirm the intended behavior for every future
   campaign rather than assuming it.
6. Any required consent or privacy-policy wording.
7. The generated Drip Embedded Form **Settings and Code** snippet.

Never request or accept a Drip API key, password, reCAPTCHA secret, or other
credential in source control or chat. The normal embedded-form snippet and
form ID are sufficient for this implementation.

## Drip setup

Carly or a Drip account administrator creates one Drip Embedded Form for each
campaign:

1. Go to **Forms → Embedded Forms → Create**.
2. Name the form clearly for the campaign.
3. Add Email Address and, if requested, First Name mapped to `first_name`.
4. Apply the campaign tag to every submission.
5. Configure the approved double-opt-in behavior. The current Beyond the
   Bottleneck form uses **Disabled**.
6. Configure the campaign workflow from the campaign tag and ensure it respects
   the confirmed/subscribed state.
7. Share the complete **Settings and Code** snippet with the agent.

When the live domain is known, configure this absolute post-submission URL in
Drip for a campaign without double opt-in:

| Setting | Value |
| --- | --- |
| Post-submission redirect | `https://YOUR-DOMAIN/thank-you?status=registered` |

If a future campaign uses double opt-in, configure `status=check-email` for
post-submission and `status=confirmed` for post-confirmation with matching
branded page copy.

Use the real production domain. Do not use `localhost`, a temporary preview,
or the literal placeholder `YOUR-DOMAIN`.

## Agent implementation

1. Confirm the provider, form identifier, tags, fields, consent wording,
   double opt-in, redirects, success state, error expectations, and any
   tracking request before activating an integration.
2. Preserve the established visual form. Do not paste vendor-provided generic
   style blocks into the campaign.
3. Declare each campaign’s Drip endpoint, form ID, campaign tag, and optional
   general-marketing tag in typed campaign content. Reuse
   `RegistrationSection`; do not create a one-off form UI.
4. Keep the Drip form submission as a normal POST. Do not introduce an API
   token, server proxy, database, or client-side state unless Carly explicitly
   approves a requirement that needs one.
5. Keep the campaign tag unconditional. The general-email tag must only be
   submitted from an unchecked, optional checkbox.
6. Maintain the local privacy-policy link and the branded thank-you states.
7. Add or update rendered-output tests. Run `pnpm lint`, `pnpm build`,
   `pnpm test`, and `git diff --check`.

Add an ADR when changing this durable integration boundary rather than merely
adding a campaign’s configuration.

## Pre-launch verification

Test on the deployed production URL with a new, controlled email address:

1. Confirm labels, required email validation, keyboard access, mobile layout,
   privacy link, and optional checkbox behavior.
2. Submit without the optional checkbox. Verify the campaign tag is present
   and the general-email tag is absent in Drip.
3. Verify the post-submission redirect, immediate active subscriber state,
   campaign tag, and campaign workflow when double opt-in is disabled.
4. If double opt-in is enabled for a future campaign, verify the confirmation
   email, post-confirmation redirect, confirmed subscriber state, campaign tag,
   and campaign workflow instead.
5. Submit with the optional checkbox. Verify both tags.
6. Test an existing confirmed subscriber. Verify the campaign tag is added
   without an unnecessary confirmation step.
7. Verify sender identity, unsubscribe behavior, and email links.

Do not claim that registration is functional until this end-to-end test passes.
