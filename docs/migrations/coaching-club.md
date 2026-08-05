# Coaching Club baseline migration

Status: **Ready to build**

This plan is an execution specification for a faithful baseline migration. It
does not require a separate copy-approval phase. Preserve the source content
and conversion paths, adapt the presentation to the current app, and leave
content polishing and publication for later.

## Migration record

| Field | Value |
| --- | --- |
| Legacy URL | `https://carlyclarkzimmer.com/coaching-club/` |
| Page name | Laser Coaching Club |
| App route | `/coaching-club` |
| Page type | Landing page |
| Page purpose | Sell an ongoing coaching and accountability membership |
| Primary visitor | Coaches, creatives, entrepreneurs, and leaders stalled by recurring behavior patterns |
| Primary action | Join the Club through ThriveCart |
| Navigation | Campaign-only; no shared main-site navigation |

## Source snapshot

- Harvested: August 5, 2026
- Source platform: Leadpages
- HTML/Open Graph title: `Laser Coach Lab`
- Offer name in page copy: `The Laser Coaching Club`
- Open Graph URL: `https://carlyclarkzimmer.com/laser-coaching-lab/`
- Meta description: blank
- Existing integrations: ThriveCart, Acuity Scheduling, Instagram, Leadpages
  analytics, and Meta/Facebook Pixel

For the baseline, use **Laser Coaching Club** as the visible page name and keep
the legacy route `/coaching-club`. Preserve conflicting source wording inside
the body; note it for later polish.

## Baseline page structure

| Order | Source content | Baseline treatment |
| --- | --- | --- |
| 1 | Hero promise and JOIN THE CLUB CTA | Preserve; render with brand typography instead of the raster wordmark |
| 2 | Desk and to-do-list story | Preserve |
| 3 | “You’re not... The pattern is.” reframe | Preserve |
| 4 | Anonymous client story | Preserve |
| 5 | Practical outcomes | Preserve and recompose as a readable list |
| 6 | What this is | Preserve |
| 7 | What a month looks like | Preserve in a four-part editorial sequence |
| 8 | What you get | Preserve |
| 9 | Who this is and is not for | Preserve as accessible checklists |
| 10 | Why this works | Preserve |
| 11 | Investment | Preserve existing price, terms, and deliverables |
| 12 | Rhythm note | Preserve |
| 13 | What shifts | Preserve as an outcome list |
| 14 | Carly biography | Preserve with Carly portrait |
| 15 | 1:1 support alternative | Preserve with recommendation-call link |
| 16 | Final invitation and CTA | Preserve |
| 17 | Founding-season note | Preserve |
| 18 | Three testimonials | Preserve with portraits |
| 19 | Contact options | Preserve |
| 20 | Equity pledge and copyright | Preserve in campaign footer |

## Source copy map

The implementation should harvest the complete source copy from the legacy
page and preserve it verbatim. These anchors define the expected sequence and
make it easy to verify that no section was missed.

### Hero

> What if the thing you have been putting off for six months was done by
> Friday?

> The Laser Coaching Club is where you stop gathering more info, and become the
> person who follows through on what's most important to you.

CTA: **JOIN THE CLUB**

### Recognition and reframe

- “You sit down at your desk to finally tackle the one thing...”
- Email, outreach, offer, and team-conversation examples.
- Inbox, Google Drive, and Slack avoidance sequence.
- “You’re not... The pattern is.”
- Intentional interruption and pattern explanation.

### Client story and outcomes

- Former investment-banking client story.
- Conscious choice versus reaction mode.
- Clearer priorities and faster follow-through.
- Goal mapping, identifying the stalling pattern, and finishing.

### Offer explanation

- “WHAT THIS IS”
- Not another unfinished course.
- Not a notification-heavy community.
- Not more unapplied content.
- Implementation, accountability, and real-time support.

### Monthly rhythm and deliverables

- Four-week rhythm.
- Pattern Breaker Power Hours.
- Pattern Breaker Plan.
- Friday and Voxer check-ins.
- Community coaching and accountability.
- Behavior Bottleneck Finder.
- Intentional integration time.

### Fit

- “WHO THIS IS FOR”
- Seven positive-fit checklist items.
- Three “not for you” items.

### Method

- “WHY THIS WORKS”
- Repeated interruption practice.
- Community witness and coaching.
- AI-powered tools plus human accountability and co-regulation.

### Investment and schedule

- `$97 per month (Founding Member Rate)`.
- Existing inclusions and cancel-any-time language.
- First and third Tuesdays at 11 AM Eastern.
- Intentional second- and fourth-week integration.

Preserve the source page’s two-versus-three-call inconsistency in the baseline.
Record it in the preview handoff for later correction.

### Outcomes and biography

- “WHAT SHIFTS INSIDE THE CLUB”
- Five outcome bullets.
- Carly’s ICF-certified Life and Leadership Coach biography.
- Identity-based leadership, Internal Family Systems, and pattern-recognition
  language.

### Alternative offer and final CTA

- 1:1 Laser Coaching inclusions.
- Recommendation-call link.
- “Bring the pattern... Bring the messy middle.”
- Final **JOIN THE CLUB** CTA.

### Founding season and testimonials

- Founding-season explanation and member benefits.
- Anne K. testimonial and portrait.
- Jennifer B. testimonial and portrait.
- Jenn L. testimonial and portrait.

### Contact and footer

- Recommendation-call link.
- Instagram link.
- Source email address.
- Cross-Cultural Competency, Awareness, and Equity Pledge.
- 2026 Balance by the Bay, LLC copyright.

Preserve the apparent email and role typos in the baseline and report them
without silently correcting them.

## Conversion paths

| Role | Label | Destination | Baseline treatment |
| --- | --- | --- | --- |
| Primary checkout | JOIN THE CLUB | `https://carlyclarkzimmer.thrivecart.com/laser-coaching-club/` | Preserve |
| Recommendation call | Book/click to book | `https://carlyclarkzimmer.as.me/connect` | Preserve |
| Instagram | DM on Instagram @carlyclarkzimmer | `https://www.instagram.com/carlyclarkzimmer/` | Preserve |
| Email | `carly@carlylclarkzimmer.com` | Visible source value | Preserve and flag as likely typo |

Do not migrate Leadpages analytics or the Meta Pixel as part of the baseline.
Tracking can be added through a separate privacy and analytics task.

## Image migration

| Asset | Content | Baseline role | Proposed filename |
| --- | --- | --- | --- |
| Legacy wordmark | “Laser Coaching Club” graphic | Replace with HTML text | None |
| Carly portrait | Carly seated outdoors in berry jacket | About Carly section | `carly-coaching-club.jpg` |
| Kolbe credential graphic | Kolbe Certified credential | Carly credentials | `kolbe-certified.png` |
| Anne K. portrait | Black-and-white headshot | Testimonial | `anne-k-testimonial.png` |
| Jennifer B. portrait | Black-and-white portrait | Testimonial | `jennifer-b-testimonial.png` |
| Jenn L. portrait | Black-and-white headshot | Testimonial | `jenn-l-testimonial.jpg` |

Download the source assets into `public/` during implementation. Do not retain
the Google/Leadpages asset URLs.

## Implementation notes

- Route: `app/(landing)/coaching-club/`
- Typed content: offer facts, CTA URLs, monthly rhythm, lists, testimonials,
  and image records
- Route-owned content: distinctive long-form sales prose
- Chrome: landing-page treatment without shared site navigation
- Styling: existing black, white, and berry-pink editorial system
- Primary CTA: reusable brand-aware button
- Mobile: single-column long-form flow with readable checklists and portraits
- Accessibility: semantic headings, descriptive alt text, visible focus, and
  external-link behavior that does not trap keyboard users

## Non-blocking issues for the preview handoff

These should not delay baseline composition:

- `Laser Coach Lab` and `Laser Coaching Club` naming conflict.
- Open Graph URL differs from the live legacy path.
- Two-versus-three-live-call conflict.
- “Founding season” and lowest-rate claims may be time-sensitive.
- Eight-years-of-experience language may be stale.
- Source email appears to contain an extra `l`.
- “Femine Embodiment Coach” may be a typo.
- Legacy images mostly lack useful alt text.
- Meta description is blank.

## Baseline completion

The migration is complete when:

- `/coaching-club` renders in the new app.
- All legacy sections and source copy are represented.
- Images are local and responsive.
- Existing CTA destinations are preserved.
- The page works on desktop and mobile.
- Headings, links, focus, and alt text are accessible.
- Build, lint, tests, and `git diff --check` pass.
- A preview is ready.

Publication, legacy redirects, tracking, and copy cleanup remain separate
follow-up tasks.
