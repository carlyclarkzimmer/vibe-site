# Carly's site playbook

This is the working guide for Carly, the project lead and site owner. The
fastest way to make a change is to describe the outcome to the coding agent in
plain language, then review the preview before approving it.

## What you can ask the agent to do

You can ask for any of these directly:

- Add, remove, rename, or reorder a navigation link.
- Point a link at an existing section or page.
- Draft and compose a new page in the site's editorial style.
- Update approved copy, calls to action, dates, contributor details, or image
  alt text.
- Add an image that you provide and place it in a page section.
- Check the result on desktop and mobile, and fix layout or accessibility
  issues.

Useful request format:

> Add a navigation link labeled “About” that goes to `/about`. Compose an
> editorial About page using this approved copy: [paste copy]. Use this image:
> [attach image]. Keep the existing black, white, and berry-pink visual
> direction. Show me a preview and list anything that still needs my approval.

The agent should ask for clarification when a request changes a business fact,
launch date, form behavior, privacy language, public access, or deployment.

## Current editing model

The site is composed in code rather than a drag-and-drop CMS. Navigation and
repeatable copy live in typed files under `content/`; page structure and
distinctive long-form sections live in `app/`. Carly does not need to edit
those files manually. The agent should make the changes, run the checks, and
provide a preview.

Adding a link to an existing section is a small content change. Adding a new
page is a normal implementation task: the agent creates the route, composes
the page from approved copy, adds the navigation entry, and adds a smoke test.
Do not create a generic JSON page builder just to make one new page editable.

## Two kinds of pages

Every request begins by choosing one page type. Tell the agent which applies;
if you are unsure, describe the visitor's goal and the agent will help you
choose.

- **Site page:** Part of Carly's permanent website. It uses the shared site
  navigation and footer, so visitors can move to services, About, resources,
  and contact pages. Examples: Home, Services, About, and Contact.
- **Landing page:** A focused campaign, offer, lead-magnet, or registration
  page. It has the same visual brand but no shared site navigation, keeping
  visitors inside that specific experience. It can have internal links to
  sections on the same page.

Useful request format:

> Create a [site page / landing page] for [purpose]. The visitor should
> [outcome]. Use this approved copy: [paste copy]. The CTA is [label] and goes
> to [destination]. [For a landing page: use this Drip form/tag information.]

The agent will not turn a landing page into a site page, or add the shared site
menu to a landing page, without your approval.

For pages migrating from the existing site, the agent keeps the current status
and outstanding approvals in [`docs/MIGRATION_STATUS.md`](docs/MIGRATION_STATUS.md).

## Approval boundaries

The agent may make reversible editorial and layout changes within this repo.
Carly must explicitly approve:

- New claims, testimonials, contributor facts, dates, or rewritten branded
  copy.
- Connecting the registration form to an email/CRM provider.
- Analytics, tracking, consent, or privacy changes.
- Publishing publicly, changing the access list, or changing the production
  deployment.
- Destructive changes to photography or existing content.

The Beyond the Bottleneck registration form is wired to Drip but is not ready
to be described as live until its production URLs are configured and the
end-to-end inbox test has passed. Do not claim registration works before that
test.

## Adding a page with an email opt-in

Tell the agent the outcome in plain language. You do not need to edit
TypeScript or install a form yourself. Include the approved page copy, images,
CTA, and where it belongs in navigation. If the page collects email addresses,
also provide:

- The campaign name and the Drip tag for people who register (for example,
  `beyond-the-bottleneck-listening-tour`).
- Whether to collect first name as well as email.
- Whether the optional general-email checkbox should appear, and the tag it
  should apply when selected.
- Whether this campaign uses double opt-in. Beyond the Bottleneck uses **Disabled**:
  people register immediately without a confirmation email. Changing this is a
  campaign and consent decision, so tell the agent explicitly.
- The specific resource or campaign emails a registrant should expect.
- Any approved changes to the privacy policy or consent wording.

The agent will reuse the site’s email-capture design and wire the campaign to
the supplied Drip Embedded Form. The agent will ask for the generated Drip form
configuration, not an API key, password, or other secret.

### What to configure in Drip

Create one Drip Embedded Form per campaign. Set up the fields, campaign tag,
opt-in behavior, and any campaign workflow in Drip. Copy the complete
**Settings and Code** snippet for the form and give it to the agent.

After the page is deployed at its real public domain, Beyond the Bottleneck uses
this post-submission URL in Drip:

- Post-submission: `https://YOUR-DOMAIN/thank-you?status=registered`

The post-confirmation URL is unused when double opt-in is disabled. If a future
campaign uses double opt-in, ask the agent to configure both thank-you states.

`YOUR-DOMAIN` is the actual live site URL, not `localhost`, a preview URL, or
text to be added to the codebase.

### Ready-to-use request

> Add a new **landing page** for [campaign]. Use this approved copy: [paste
> copy]. Do not add the shared site navigation; use these internal section
> links if needed: [labels]. It should collect [email / first name and email].
> Use this Drip campaign tag: `[tag]`. [Include / do not include] the optional
> general-email checkbox; if included, use the tag `[tag]`. Use double opt-in
> [setting]. Here is the Drip Embedded Form Settings and Code snippet: [paste
> snippet, without API keys or passwords]. Do not publish until I approve the
> preview and complete the inbox test.

For the full agent implementation and testing workflow, see
[`docs/EMAIL_OPT_IN_RUNBOOK.md`](docs/EMAIL_OPT_IN_RUNBOOK.md).

## Preview and handoff

For each requested change, ask the agent to:

1. Make the change on a focused branch or draft change.
2. Run `pnpm build`, `pnpm lint`, `pnpm test`, and `git diff --check` as
   appropriate.
3. Check desktop and mobile layouts for visual changes.
4. Report the files changed, preview URL, checks passed, and open decisions.

Before approving publication, Carly should verify the copy, links, images,
mobile view, and any form or privacy behavior personally.

## Ready-to-use requests

> Add “Resources” to the main navigation and link it to `/resources`. Do not
> publish. Create the page with these sections and this approved copy: ...

> Change the “Who it’s for” nav label to “Is this for you?” Keep the anchor and
> all copy unchanged. Run the relevant checks.

> Compose a page for [purpose]. Here is the approved copy, section order, CTA,
> and image guidance: ... Keep placeholders visible where information is
> missing and tell me what I still need to approve.
