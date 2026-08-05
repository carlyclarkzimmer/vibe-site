# Content guide

## Source of truth

Carly's approved campaign copy is the source of truth. Do not silently rewrite,
shorten, or proofread it. Flag suspected errors rather than changing them
without approval.

## Structured campaign content

`content/campaigns/beyond-the-bottleneck.ts` owns:

- Campaign metadata
- Launch date
- Navigation
- Hero details
- Ticker items
- Checklist items
- Fear questions
- Possibility items
- Evidence items
- Conversation topics
- Contributor records
- Registration details
- CTA labels and anchors

Update a date in its single typed field rather than editing multiple components.
Never invent a date.

## Page types and navigation

Choose the page type before adding content:

- **Site pages** are permanent navigable pages under `app/(site)/`. Shared
  navigation belongs in `content/site/navigation.ts`, not in individual pages.
- **Landing pages** are focused conversion pages under `app/(landing)/`. They
  use campaign-only anchors and CTAs and must not render the shared site
  navigation.

The visual brand is shared between both types. Navigation intent is not.

## Long-form prose

Distinctive narrative prose remains in route-owned section components. Beyond
the Bottleneck's sections live under
`app/(landing)/beyond-the-bottleneck/_components/`. This keeps writing close to
its intended layout without forcing every paragraph into a configuration object.

## Contributors

Contributor records must include:

- Name
- Role or business
- Pattern interrupted
- Outcome
- Optional approved image

Placeholder values must remain visibly placeholders. Do not infer contributor
facts from social profiles or other sources without Carly's approval.

## Images

- Hero: `public/carly-hero.jpg`
- Founder story: `public/carly-supporting.jpg`

Do not destructively edit these files. Adjust presentation with CSS. Add new
images under clear, descriptive filenames and include useful alt text.

## Registration

Beyond the Bottleneck submits directly to Drip, but registration must not be
described as live until its production redirect and end-to-end inbox test pass.
Before connecting a future campaign form, confirm:

1. Provider and audience/list/form identifier
2. Required fields
3. Consent and privacy language
4. Double-opt-in behavior
5. Spam protection
6. Success and error states
7. Analytics requirements
8. Tracking-parameter retention

Do not claim registration is functional until the full flow is tested.
