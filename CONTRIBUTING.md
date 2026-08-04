# Contributing

## Prerequisites

- Node.js 22.13 or newer
- pnpm 11.9.0
- Git

Install dependencies with:

```bash
pnpm install --frozen-lockfile
```

## Branches

Pull the latest `main` before starting shared work. Use a focused branch:

```text
feature/email-signup
content/contributors
design/mobile-polish
fix/registration-form
refactor/reusable-site-foundation
```

Do not force-push `main`. Substantial changes require a pull request. Keep
commits focused and buildable.

## Required checks

Before handing off a code change:

```bash
pnpm build
pnpm lint
pnpm test
git diff --check
```

Visual changes also require desktop and mobile review. Confirm keyboard focus,
semantic headings, image alt text, form labels, anchors, and reduced-motion
behavior.

## Content changes

Carly's approved copy is the source of truth.

- Do not silently proofread or rewrite branded copy.
- Flag suspected errors for Carly.
- Do not invent contributors, outcomes, dates, claims, or testimonials.
- Do not change the launch date without approval.
- Keep placeholders clearly identifiable.

See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md).

## Architecture changes

Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) before changing component,
content, route, styling, integration, or deployment boundaries. Add an
architecture decision record under `docs/adr/` when a change alters a durable
technical direction.

## Pull requests

Pull requests should explain:

- What changed
- Why it changed
- User and developer impact
- Checks performed
- Visual validation performed
- Known follow-up work

Open substantial work as a draft first.

## Deployment

GitHub and OpenAI Sites are separate systems.

- A GitHub push does not deploy.
- Reuse the project ID in `.openai/hosting.json`.
- Build before saving a Sites version.
- Keep development deployments private.
- Do not change access or publish publicly without Carly's approval.
- Do not create a second Sites project.

## Secrets

Do not commit tokens, credentials, private exports, `.env` files, or temporary
deployment archives. Store hosted runtime values through Sites.
