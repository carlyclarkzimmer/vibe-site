# AGENTS.md

This file is the shared operating guide for human developers and autonomous
agents working on Beyond the Bottleneck. Follow it for all changes in this
repository. If a user request conflicts with this file, the user request wins.

Read these documents before substantial work:

- `CARLY_PLAYBOOK.md` for the owner-facing editing and approval workflow
- `docs/ARCHITECTURE.md` for system boundaries and extension rules
- `CONTRIBUTING.md` for branches, checks, and review expectations
- `docs/CONTENT_GUIDE.md` for copy, contributor, date, and image ownership
- `docs/EMAIL_OPT_IN_RUNBOOK.md` when adding or changing an email opt-in form
- `docs/MIGRATION_STATUS.md` when migrating or publishing a legacy page
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

This application has two intentional page types: a navigable main site and
focused campaign landing pages. The Florence Showit template inspired its
editorial design language, but this project must remain an original
implementation shaped around Carly's content and conversion flow.

- **Site pages** use the shared main-site navigation and footer, and help
  visitors move between Carly's services, story, resources, and contact paths.
- **Landing pages** keep the same brand system but omit shared site navigation.
  They may include campaign-only anchor links and CTAs, but must not send a
  visitor away from the campaign experience through the main-site menu.

## Current product state

- The main site homepage is composed in `app/(site)/page.tsx`.
- Campaign landing pages live under `app/(landing)/`; Beyond the Bottleneck is
  at `/beyond-the-bottleneck`.
- Shared site chrome is owned by `app/(site)/layout.tsx` and `components/site/`.
- Campaign chrome is owned by `app/(landing)/[campaign]/layout.tsx` and
  `components/campaign/`.
- Global reset behavior is in `app/globals.css`; brand tokens are in
  `styles/tokens.css`; component styling is colocated in CSS Modules.
- Structured campaign content is in
  `content/campaigns/beyond-the-bottleneck.ts`.
- Long-form Beyond the Bottleneck copy is in route-owned sections under
  `app/(landing)/beyond-the-bottleneck/_components/`.
- Site metadata and the root document shell are in `app/layout.tsx`.
- Brand photography is stored in `public/`.
- Contributor cards intentionally contain placeholders.
- The Beyond the Bottleneck form submits directly to Drip. It must not be
  described as live until its production redirect and end-to-end inbox test
  have been completed.
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

Carly's approved copy is the source of truth. Repeatable structured content
lives under `content/`; distinctive long-form copy stays in its owning route.

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
- Tailwind CSS `4.2.1`, plus CSS custom properties and CSS Modules
- Cloudflare Worker-compatible output
- Optional Drizzle/D1 scaffolding is present but unused

The application uses the Next.js App Router. Keep the implementation simple and
server-rendered unless interactivity genuinely requires a client component.
Avoid adding state, dependencies, routes, persistence, or authentication
speculatively.

## Repository map

- `app/(site)/page.tsx` — main-site homepage composition
- `app/(site)/layout.tsx` — shared site shell ownership
- `app/(landing)/` — campaign landing-page routes and layouts
- `components/site/` — shared site shell and navigation
- `app/(landing)/beyond-the-bottleneck/_components/` — route-owned Beyond the
  Bottleneck narrative sections
- `app/globals.css` — reset and truly global behavior
- `app/layout.tsx` — root document shell and metadata
- `app/chatgpt-auth.ts` — optional starter auth helpers; currently unused
- `components/campaign/` — reusable campaign structures
- `components/ui/` — brand-aware UI primitives without campaign copy
- `content/campaigns/` — typed repeatable campaign content
- `styles/tokens.css` — shared brand, spacing, focus, and motion tokens
- `public/` — brand imagery and static assets
- `worker/index.ts` — Worker entrypoint
- `vite.config.ts` — vinext and Sites build configuration
- `.openai/hosting.json` — Sites project binding
- `tests/` — rendered-output checks
- `db/`, `drizzle/`, `examples/d1/` — unused persistence scaffolding

When Carly requests a navigation, page, or content change, first identify the
page type: **site page** or **landing page**. Treat her as the site owner:
preserve her approved copy, implement the requested composition, and return a
preview-oriented handoff. Follow `CARLY_PLAYBOOK.md` for approval boundaries.
Do not require Carly to edit TypeScript manually.

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

- Staying synchronized across people, agents, and devices is a paramount
  repository invariant. Never assume a local branch or an earlier fetch is
  current.
- Before creating a new worktree or development branch for any ask or task,
  fetch the canonical remote and base the new worktree or branch on the latest
  `origin/main` (the repository's default branch, sometimes called "master").
  Never branch from a stale local copy of `main`.
- Before starting or resuming work, fetch the canonical remote and compare the
  local branch with its remote counterpart and `origin/main`.
- Immediately before pushing or merging, fetch again. If the remote changed,
  incorporate those changes, resolve conflicts, and rerun affected checks
  before continuing.
- Use normal fast-forward-safe pushes. Never overwrite a collaborator's remote
  work to make a push succeed.
- After pushing, verify that the canonical remote contains the intended commit.
  A production deployment must use that exact verified remote revision.
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

### "Go live" release shorthand

When any team member working with an agent in this repository says **"go
live,"** treat that phrase as a request to complete the full release workflow.
The team member does not need to separately ask the agent to merge, push, or
deploy.

1. Fetch the latest state of the canonical remote, the working branch, and its
   default branch (`origin/main`; use the remote default branch if it is
   renamed). Compare local and remote history before proceeding.
2. Run the required checks and resolve or report any failures.
3. Commit the in-scope changes so the release is captured as an exact Git
   revision. Do not include unrelated working-tree changes.
4. Incorporate the latest remote default branch and resolve merge conflicts
   conservatively, preserving both the release intent and collaborators' work.
   Rerun any checks affected by conflict resolution. If the correct resolution
   is materially ambiguous, stop and ask the team member instead of guessing.
5. Immediately before merging or pushing, fetch again. If collaborators have
   added remote work, incorporate it, resolve conflicts, and rerun affected
   checks before continuing.
6. Merge the release through the repository's normal collaboration workflow.
7. Push the resulting revision to the canonical GitHub repository without
   overwriting remote work, then verify the intended commit exists remotely.
8. Deploy that exact verified remote revision through the existing OpenAI Sites
   project.
9. Report the commit SHA, fetch/integration result, push/merge verification,
   deployment result, and any step that could not be completed.

Never deploy uncommitted or unpushed work. "Go live" does not authorize an
agent to force-push, bypass required checks, include unrelated changes, expose
secrets, create a second Sites project, or guess at an ambiguous merge-conflict
resolution.

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
