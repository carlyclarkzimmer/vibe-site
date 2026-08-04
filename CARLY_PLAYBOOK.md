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

The existing site is a composed campaign rather than a drag-and-drop CMS.
Navigation and repeatable copy live in typed files under `content/`; page
structure and distinctive long-form sections live in `app/`. Carly does not
need to edit those files manually. The agent should make the changes, run the
checks, and provide a preview.

Adding a link to an existing section is a small content change. Adding a new
page is a normal implementation task: the agent creates the route, composes
the page from approved copy, adds the navigation entry, and adds a smoke test.
Do not create a generic JSON page builder just to make one new page editable.

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

The registration form is currently visual only; it does not collect or send
registrations.

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

