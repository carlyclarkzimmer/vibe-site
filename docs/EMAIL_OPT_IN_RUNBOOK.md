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

## Copy-and-paste handoff for a new form

For a new campaign, the owner should send the agent this completed handoff:

```text
Route: /campaign-slug
Drip Embedded Form Settings and Code: [paste the complete snippet]
Campaign tag: exact Drip tag value
Fields: first name + email / email only
Double opt-in: enabled / disabled
Redirect: Drip controls this; send visitors to https://YOUR-DOMAIN/path
Consent: [approved required or optional wording, if any]
Optional general-email checkbox: yes/no; tag and label if yes
```

The agent should resolve any mismatch between the stated tag and the tag in
the Drip snippet before coding. Use the exact confirmed tag value; do not
silently correct or guess a tag name.

## What to extract from Drip

Do **not** paste Drip's generated `<style>` block, generic description, or
inline script into the page. Preserve the site's existing form design and
extract only these values from the embedded-form snippet:

| Drip snippet value | Where it belongs in the app |
| --- | --- |
| `forms/FORM_ID/submissions` | Typed campaign content: `formId` and `action` |
| `fields[first_name]` | First-name input `name`, when collected |
| `fields[email]` | Email input `name` |
| `tags[]` value | Typed campaign content: `campaignTag` |
| `recaptcha/api.js?render=SITE_KEY` | Typed campaign content: `recaptchaSiteKey` |

The reCAPTCHA **site key** in the snippet is public and may be used in the
client. A reCAPTCHA secret key must never be requested or stored here.

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
| Post-submission redirect | `https://YOUR-DOMAIN/beyond-the-bottleneck/thank-you?status=registered` |

If a future campaign uses double opt-in, configure `status=check-email` for
post-submission and `status=confirmed` for post-confirmation with matching
branded page copy.

Use the real production domain. Do not use `localhost`, a temporary preview,
or the literal placeholder `YOUR-DOMAIN`.

## Implementation recipe

### 1. Keep Drip configuration in typed campaign content

Add the campaign's public form configuration to its existing content module.
If the page has no campaign-content module yet, create a small, named module
under `content/campaigns/`; do not place the endpoint or tag inline in the
route.

```ts
export const exampleEmailCapture = {
  provider: "drip",
  formId: "123456789",
  action: "https://www.getdrip.com/forms/123456789/submissions",
  campaignTag: "Exact Drip tag",
  recaptchaSiteKey: "public-site-key-from-the-snippet",
} as const;
```

### 2. Preserve the route's form layout

Import `DripRecaptcha` from `components/campaign/DripRecaptcha`. Keep the
page's established labels, fields, CTA, consent wording, and CSS. Update the
form to make a normal Drip POST:

```tsx
<form
  action={exampleEmailCapture.action}
  data-drip-embedded-form={exampleEmailCapture.formId}
  id={`drip-ef-${exampleEmailCapture.formId}`}
  method="post"
>
  <label htmlFor="campaign-first-name">First Name</label>
  <input id="campaign-first-name" name="fields[first_name]" type="text" />

  <label htmlFor="campaign-email">Email Address</label>
  <input id="campaign-email" name="fields[email]" required type="email" />

  <div aria-hidden="true" className={styles.honeypot}>
    <label htmlFor="campaign-website">Website</label>
    <input id="campaign-website" name="website" tabIndex={-1} type="text" />
  </div>

  <DripRecaptcha siteKey={exampleEmailCapture.recaptchaSiteKey} />
  <input name="tags[]" type="hidden" value={exampleEmailCapture.campaignTag} />
  <button data-drip-attribute="sign-up-button" type="submit">Approved CTA</button>
</form>
```

`DripRecaptcha` loads the public Drip reCAPTCHA script, obtains a fresh token
at submission time, and preserves the normal form POST. Reuse it; do not copy
Drip's vendor script into a route.

Add the standard privacy link directly below the CTA unless Carly has approved
a different treatment:

```tsx
<a
  className={styles.privacyLink}
  href="/privacy"
  rel="noreferrer"
  target="_blank"
>
  Privacy Policy
</a>
```

It should be visibly underlined, smaller than the CTA, and use the page's
existing interface typography. Do not silently add, remove, or rewrite consent
copy; obtain approval first.

### 3. Keep hidden Drip inputs hidden

When a page's form CSS uses a broad selector such as `.form input`, narrow it
to visible direct fields before adding the Drip tag and reCAPTCHA inputs:

```css
.form > input:not([type="hidden"]) {
  /* existing visible input styles */
}
```

This avoids accidentally styling or displaying Drip's hidden tag and
reCAPTCHA fields.

### 4. Pages with more than one copy of the same form

Use the same `data-drip-embedded-form` and campaign tag for each copy, but
give each form and reCAPTCHA input a unique ID. Pass the unique reCAPTCHA ID to
the component:

```tsx
<DripRecaptcha
  inputId="g-recaptcha-response-data-form-submission-story"
  siteKey={exampleEmailCapture.recaptchaSiteKey}
/>
```

Duplicate HTML IDs can cause only one form to receive a token. Do not use a
single shared hidden reCAPTCHA input across multiple forms.

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

## Tests and local workstation setup

For each affected route, update `tests/rendered-html.test.mjs` to assert:

- The expected Drip form ID and `getdrip.com` submission URL.
- `fields[first_name]` only when first name is collected, and `fields[email]`.
- The campaign tag and public reCAPTCHA site key.
- The local `/privacy` link and `target="_blank"` treatment.
- Absence of the prior provider endpoint, such as `api.leadpages.io`.
- For pages with multiple forms, the correct number of forms and unique IDs.

Use the repository's pinned package manager and lockfile on a new workstation:

```bash
pnpm install --frozen-lockfile
CI=true pnpm lint
CI=true pnpm test
git diff --check
```

`CI=true` prevents pnpm from prompting to rebuild generated `node_modules` in
non-interactive shells. `node_modules` and any local `.pnpm-store/` directory
are generated artifacts; never stage them. If dependencies must be rebuilt,
confirm that local servers are stopped first.

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
