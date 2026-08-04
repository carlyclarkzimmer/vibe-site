# Beyond the Bottleneck

Landing page and reusable campaign foundation for Carly Clark Zimmer's
**Beyond the Bottleneck** audio series.

The site is a Next.js App Router application built with vinext and Vite for a
Cloudflare Worker-compatible OpenAI Sites deployment.

## Quick start

Requirements:

- Node.js 22.13 or newer
- pnpm 11.9.0

```bash
pnpm install
pnpm dev
```

Use the exact local URL printed by the development server.

## Validation

```bash
pnpm build
pnpm lint
pnpm test
```

## Repository map

- `app/` — routes, layouts, global styles, and route-owned sections
- `components/` — reusable campaign and UI components
- `content/` — typed campaign content
- `styles/` — shared brand and theme tokens
- `public/` — brand photography and static assets
- `docs/` — architecture, content, and decision records
- `tests/` — rendered-output smoke tests
- `.openai/hosting.json` — existing OpenAI Sites project binding

## Documentation

- [AGENTS.md](AGENTS.md) — durable instructions for developers and agents
- [CONTRIBUTING.md](CONTRIBUTING.md) — contribution and review workflow
- [Architecture](docs/ARCHITECTURE.md) — system structure and boundaries
- [Content guide](docs/CONTENT_GUIDE.md) — safe campaign-content editing
- [Carly's site playbook](CARLY_PLAYBOOK.md) — how Carly can request and
  approve navigation, page, and content changes
- [Architecture decisions](docs/adr/) — significant technical decisions

## Deployment

GitHub is the canonical source repository. OpenAI Sites is the production
deployment system. Pushing to GitHub does not automatically deploy the site.
The existing Sites project binding must be reused for every deployment.

The registration form is currently presentational and does not submit to an
email platform or API.
