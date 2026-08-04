# AGENTS.md

This file is the shared operating guide for human developers and autonomous
agents working on Beyond the Bottleneck. Follow it for all changes in this
repository. If a user request conflicts with this file, the user request wins.

Read these documents before substantial work:

- `docs/ARCHITECTURE.md` for system boundaries and extension rules
- `CONTRIBUTING.md` for branches, checks, and review expectations
- `docs/CONTENT_GUIDE.md` for copy, contributor, date, and image ownership
- `docs/adr/` for accepted architectural decisions

Add an ADR when changing a durable route, component, content, styling,
integration, or deployment boundary.

## Project purpose

Beyond the Bottleneck is a long-form landing page for Carly Clark Zimmer's free
audio series. Its job is to:

1. Help booked-out service providers recognize the patterns that keep them
   overextended.
2. Build trust through Carly's story and contributor conversations.
3. Convert qualified visitors into listening-tour registrations.

This is a single landing page, not a multi-page photography or coaching site.
The Florence Showit template inspired its editorial design language, but this
project must remain an original implementation shaped around Carly's content
and conversion flow.

## Current product state

- The full landing page is implemented in `app/page.tsx`.
- Global responsive styling is in `app/globals.css`.
- Site metadata and the root layout are in `app/layout.tsx`.
- Brand photography is stored in `public/`.
- Contributor cards intentionally contain placeholders.
- The registration form is visual only. It does not yet send data to an email
  platform or API.
- The launch date currently displayed is October 5th.
- There is no application database, durable storage, or user account system.

Do not present a placeholder as a completed integration. In particular, never
claim that registration works until the form has a confirmed destination and
has been tested end to end.

## Brand and design rules

The visual direction is elegant, editorial, high-contrast, and spacious.

- Primary colors: black and white.
- Accent color: `#991f5d`.
- Neutral gray may be used for quiet backgrounds, borders, and supporting text.
- Do not introduce brown, cream, beige, gold, or unrelated accent colors.
- Use the accent selectively for calls to action, emphasis, and the moving
  banner. It should not dominate every section.
- Favor large serif display type, small tracked uppercase labels, generous
  negative space, fine rules, full-bleed photography, and deliberate
  asymmetry.
- Avoid generic SaaS cards, gradients, excessive rounded corners, cartoon
  icons, stock illustrations, or decorative effects that weaken the editorial
  tone.
- Preserve the moving ticker banner unless Carly explicitly asks to remove it.

### Photography roles

- `public/carly-hero.jpg` is the horizontal close-up used in the hero.
- `public/carly-supporting.jpg` is the vertical full-body image used in Carly's
  story section.
- `public/beyond-the-bottleneck-cover.png` is the earlier cover concept and is
  not the current landing-page hero.

Do not replace, crop destructively, recolor, or retouch Carly's photography
without explicit approval. Use CSS `object-fit` and `object-position` for
responsive presentation.

## Copy rules

Carly's supplied launch copy is the source of truth. The current approved page
copy lives in `app/page.tsx`.

- Do not silently rewrite, shorten, proofread, or "improve" branded copy.
- Preserve intentional voice, repetition, punctuation, capitalization, and
  phrases such as "And thank the goddesses for that!"
- If a typo or grammatical issue is noticed, flag it for Carly instead of
  changing it without approval.
- Do not invent contributor names, biographies, outcomes, testimonials,
  registration counts, deadlines, or business claims.
- Do not invent a new date. Confirm launch-date changes with Carly.
- CTA language should stay specific to the listening tour or free registration.

## Technical stack

- Next.js `16.2.6`
- React `19.2.6`
- TypeScript
- vinext `0.0.50`
- Vite `8.0.13`
- Tailwind CSS `4.2.1`, plus custom CSS in `app/globals.css`
- Cloudflare Worker-compatible output
- Optional Drizzle/D1 scaffolding is present but unused

The application uses the Next.js App Router. Keep the implementation simple and
server-rendered unless interactivity genuinely requires a client component.
Avoid adding state, dependencies, routes, persistence, or authentication
speculatively.

## Repository map

- `app/page.tsx` — landing-page structure and content
- `app/globals.css` — brand system, layout, animations, and breakpoints
- `app/layout.tsx` — document shell and metadata
- `app/chatgpt-auth.ts` — optional starter auth helpers; currently unused
- `public/` — brand imagery and static assets
- `worker/index.ts` — Worker entrypoint
- `vite.config.ts` — vinext and Sites build configuration
- `.openai/hosting.json` — Sites project binding
- `tests/` — rendered-output checks
- `db/`, `drizzle/`, `examples/d1/` — unused persistence scaffolding

Do not delete unused starter infrastructure merely because it appears unused.
Remove it only as part of an intentional cleanup that has been validated
against local builds and Sites deployment.

## Local development

Requirements:

- Node.js `>=22.13.0`
- pnpm

Common commands:

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm test
```

The development server normally starts at `http://localhost:3000`, but it may
select another port if that port is occupied. Use the exact URL printed by the
development server.

Before handing off a code change:

1. Run `pnpm build`.
2. Run `pnpm lint` when TypeScript, JavaScript, configuration, or imports
   changed.
3. Check the relevant desktop and mobile layouts when the change is visual.
4. Confirm that anchors, buttons, keyboard focus, and form labels remain
   accessible.
5. Report any validation that could not be completed.

## Git and collaboration

- Canonical GitHub repository:
  `https://github.com/carlyclarkzimmer/vibe-site`
- Default branch: `main`
- Keep commits focused and describe the user-visible outcome.
- Pull before beginning shared work when another collaborator may have pushed.
- Do not force-push `main`.
- Use a feature branch and pull request for substantial changes.
- Small, explicitly requested content edits may go directly to `main` only when
  Carly and the developer agree to that workflow.
- Never stage or overwrite unrelated local changes.
- Do not commit secrets, tokens, `.env` files, private exports, or temporary
  archives.

Suggested branch names:

```text
feature/email-signup
content/contributors
design/mobile-polish
fix/registration-form
```

## Deployment

GitHub and production deployment are separate operations.

- Pushing to GitHub does not automatically deploy the site.
- Production is managed through OpenAI Sites.
- `.openai/hosting.json` contains the existing opaque Sites `project_id`.
- Never replace, derive, reformat, or copy that project ID into another site.
- Build successfully before saving a Sites version.
- Prefer private deployment while the page is under development.
- Do not make the site public or change its access list without Carly's explicit
  approval.
- Do not create a second Sites project for this repository.

If a future developer introduces GitHub Actions or another deployment provider,
document exactly which system is authoritative before enabling it. Avoid two
independent production pipelines deploying the same branch.

## Planned integrations

These are open decisions, not authorization to implement them:

- Email/CRM destination for the registration form
- Success message or confirmation page
- Consent language and privacy-policy link
- Contributor names, roles, portraits, patterns, and outcomes
- Analytics and conversion tracking
- Final social-sharing image
- Custom domain and production access policy

Before implementing the registration flow, confirm:

1. The provider and list/audience/form identifier.
2. Required fields.
3. Double-opt-in behavior.
4. Consent and privacy copy.
5. Success and error behavior.
6. Whether tracking parameters must be retained.

## Decision principles

When a requirement is unclear:

1. Preserve the current brand and approved copy.
2. Prefer the smallest reversible change.
3. Do not invent business facts or external integrations.
4. Surface decisions that affect conversion, privacy, publication, or ongoing
   maintenance.
5. Leave the repository buildable and explain what changed.
