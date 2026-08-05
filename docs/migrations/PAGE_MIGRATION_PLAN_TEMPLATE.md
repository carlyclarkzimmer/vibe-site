# Legacy page migration plan

Use this template before implementing a legacy page. The completed plan is the
approval record for content, structure, links, imagery, and launch behavior.
Harvesting and planning do not authorize implementation or publication.

## 1. Migration record

| Field | Proposed value | Approval |
| --- | --- | --- |
| Legacy URL |  | Pending |
| Legacy page title |  | Pending |
| Proposed page name |  | Pending |
| Proposed app route |  | Pending |
| Page type | Site page / Landing page / Legal | Pending |
| Primary visitor |  | Pending |
| Page purpose |  | Pending |
| Primary conversion |  | Pending |
| Navigation treatment | Shared site navigation / Campaign-only / None | Pending |
| Legacy URL behavior at launch | Keep / Redirect / Retire | Pending |

## 2. Source snapshot

- Harvest date:
- Source platform:
- Legacy metadata title:
- Legacy metadata description:
- Canonical or Open Graph URL:
- Existing tracking or embeds:
- Harvest limitations:

## 3. Content strategy

Choose a disposition for every source section:

- **Keep verbatim** — approved words move without proofreading or rewriting.
- **Keep with approved edits** — Carly supplies or explicitly approves changes.
- **Recompose** — preserve approved copy but change its visual grouping.
- **Remove** — omit only with explicit approval.
- **Replace** — new approved content is required.

| Order | Source section | Purpose | Proposed disposition | Approval notes |
| --- | --- | --- | --- | --- |
| 1 |  |  |  | Pending |

## 4. Copy inventory

Record source copy in page order. Preserve wording, capitalization,
punctuation, prices, dates, credentials, claims, and testimonials exactly.
Flag suspected issues instead of silently correcting them.

### Section name

**Label or eyebrow**

> Source copy

**CTA**

- Label:
- Destination:
- Behavior:

**Approval needed**

- None / describe decision

## 5. Offer and business facts

| Fact or claim | Source value | Current? | Approval needed |
| --- | --- | --- | --- |
| Offer name |  | Unknown | Yes |
| Price |  | Unknown | Yes |
| Schedule |  | Unknown | Yes |
| Deliverables |  | Unknown | Yes |
| Credentials |  | Unknown | Yes |
| Outcome claims |  | Unknown | Yes |

## 6. Link and conversion inventory

| Link role | Label | Current destination | Proposed destination | Verified? |
| --- | --- | --- | --- | --- |
| Primary CTA |  |  |  | No |

For forms or email capture, complete `docs/EMAIL_OPT_IN_RUNBOOK.md` before
implementation.

## 7. Image inventory

Do not copy third-party hosted images into `public/` until Carly confirms that
the image is approved and may be migrated.

| Image | Source role | Existing alt text | Proposed role | Approval / replacement |
| --- | --- | --- | --- | --- |
|  |  |  |  | Pending |

For every approved image, record:

- Proposed filename:
- Descriptive alt text:
- Crop guidance:
- Mobile treatment:
- Rights/source confirmation:

## 8. Proposed page structure

List the recommended new-app composition in order. This can simplify the
legacy layout, but it must not silently rewrite the approved copy.

1. Hero
2. Problem recognition
3. Offer explanation
4. Deliverables
5. Fit
6. Proof
7. CTA

## 9. Design direction

- Brand treatment:
- Reusable components:
- Route-owned sections:
- Desktop composition:
- Mobile composition:
- Motion or interactive behavior:
- Accessibility notes:

## 10. Metadata and discovery

| Field | Proposed value | Approval |
| --- | --- | --- |
| Browser title |  | Pending |
| Meta description |  | Pending |
| Social title |  | Pending |
| Social description |  | Pending |
| Social image |  | Pending |
| Indexing | Index / No index | Pending |

## 11. Integrations, privacy, and tracking

Inventory all existing integrations without assuming they should migrate.

| Integration | Legacy behavior | Proposed behavior | Approval |
| --- | --- | --- | --- |
| Checkout |  |  | Pending |
| Scheduling |  |  | Pending |
| Analytics/pixels |  |  | Pending |

## 12. Risks and inconsistencies

- Conflicting facts:
- Suspected copy issues:
- Broken or unverified links:
- Missing alt text:
- Stale dates or credentials:
- Legal/privacy considerations:

## 13. Approval gate

Implementation begins only after Carly approves:

- [ ] Page name, type, and route
- [ ] Section order and copy disposition
- [ ] All business facts, pricing, dates, and claims
- [ ] Testimonials and attribution
- [ ] Images, alt text, and usage rights
- [ ] CTA labels and destinations
- [ ] Metadata and indexing
- [ ] Tracking, privacy, and external integrations
- [ ] Legacy redirect behavior

## 14. Implementation and validation plan

After approval:

1. Update `docs/MIGRATION_STATUS.md`.
2. Add the route in the correct route group.
3. Add approved content and assets using repository ownership rules.
4. Add metadata and rendered-route tests.
5. Run build, lint, tests, and `git diff --check`.
6. Review desktop and mobile layouts, links, focus, headings, and alt text.
7. Provide a private preview.
8. Publish or redirect only after explicit approval.
