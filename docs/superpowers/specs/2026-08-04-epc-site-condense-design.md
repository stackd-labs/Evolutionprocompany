# EPC Site — Condense & Restructure

**Date:** 2026-08-04
**Branch:** `content/premiere-2027`
**Status:** Approved, implementing

## Problem

The site carries 14 content pages that repeat each other. Three specific failures:

1. **Two hand-maintained copies of the same facts.** `/details` re-declares the 9 membership
   inclusions and 8 pro-dev benefits as local arrays, while `/company` imports the same lists from
   `lib/constants.ts`. Editing one silently desyncs the other. The 4 company tracks are likewise
   described twice from scratch — `AUDITION_TIERS` on `/company`, `DIVISIONS` on `/details`.
2. **The most valuable page is hidden.** `/details` holds the pay rates ($50–$400/show,
   $300–$2,400/production), the touring model, and the credits-vs-cash rules. It is absent from the
   nav and sits in the footer's legal row beside Privacy Policy at 25% opacity, labeled
   "Company Details."
3. **Sections that argue the same point back to back.** `/experience` makes the
   not-a-recital/continuous/on-ice case three times in a row. `/company` states the
   casting-is-audition-based rule three times. "Every member performs" appears in ~10 places.

Dead weight: `components/Shows.tsx` (69 lines) is imported by nothing; 27 written-out member perks
on `/company` never render; two Unsplash stock photos are live on a client site.

## Decisions

| Decision | Choice |
|---|---|
| Scope | Trim + fix nav. **All 14 pages stay, no URLs change.** |
| Money prominence | **Lead with it.** Promote `/details` to the nav; surface the pay range on `/company`. |
| Member perks | **Surface all 27.** Real perks justify $200/mo better than 9 vague pills. |
| `/company` ↔ `/details` split | **One source in code, two levels of depth.** |

### The chosen split

`lib/constants.ts` is the single source of truth. `/company` renders the decision-grade summary;
`/details` renders the full reference. Both read the same constants, so they cannot drift. Remaining
repetition is deliberate summary→detail, not two hand-written descriptions.

## Navigation

"Home" is removed — the logo already links to `/` — so promoting `/details` keeps the nav at 6 links.

```
Ascend | Join EPC | Fees & Pay | EPC Experience | Corporate Events | About   [Apply Now]
```

`/details` is renamed **"Fees & Pay"** in the nav, page title, and metadata. It moves out of the
footer legal row into the footer's "Get Involved" column.

## Page ownership

One owner per topic. A page must not restate what another page owns.

| Page | Owns | Must not repeat |
|---|---|---|
| `/` | Casting-now hook, Ascend 2027, founding member | Track detail, fees |
| `/shows` | Ascend production + audition registration | Membership, tracks |
| `/company` | 4 tracks (canonical), training, curriculum, calendar, perks, $200/mo | Pay rates, touring schedule |
| `/details` | Every number: fees, rate table, credits-vs-cash, touring schedule, profit sharing | Track descriptions, FAQ |
| `/experience` | The performance model, for audiences and bookers | Partnership pitch |
| `/events` | Booking EPC for an event | Partnership tiers |
| `/partnerships` | Organizations and money — rinks, sponsors, media, schools | Individual roles |
| `/work-with-us` | Individuals and labor — affiliates, instructors, ops, volunteers | Sponsor tiers |
| `/about` | Story, mission, growth phases | — |
| `/faq` | All questions — the single home | — |
| `/contact` | Contact | — |

## Changes by file

### `lib/constants.ts`
- Add `MEMBER_EXPERIENCES` — the 9 categories × 3 items currently unrendered on `/company`.
- Add `ROLE_COMPENSATION` — moved from `/details` so `/company` can source its pay hook.
- Add `PERFORMER_PAY_SUMMARY` — the range used by the `/company` hook.
- Add the one unique `/details` question ("Can anyone audition?") to `FAQ`.
- Delete `WHAT_MAKES_DIFFERENT` (last consumer removed).

### `/company`
Remove:
- The **"Built to work alongside your training"** section. Its argument is already in the hero
  paragraph two sections above. Preserve its one distinct sentence — studio and club commitments
  come first — by folding it into the hero.
- The "All casting is audition-based…" subhead under Company Structure. The `Membership` block
  already ends with that note.

Add:
- Pay hook under the tracks table: Company Artists 16+ earn $50–$400 per show, linking to Fees & Pay.
- The 27 perks, rendered as 9 collapsible categories, replacing the 9 dead pills.

### `components/Membership.tsx`
- Remove the `$200/month for every division` gradient banner. The tier card directly above states it.

### `/details` (525 → ~300 lines)
- Delete local `MEMBERSHIP_INCLUDES` and `PRO_DEV_BENEFITS`; import from constants.
- Delete the `DIVISIONS` block (~70 lines). Tracks are canonical on `/company`. The credits-vs-cash
  fact it carried is already stated by the age-based compensation cards, so nothing is lost.
- Delete `COMP_FAQ`. Five of six duplicate `/faq`; the unique one moves to the `FAQ` constant.
  Replace with a link to `/faq`.
- Collapse "Performance & Casting" — the YES / NOT AUTOMATICALLY cards and the prose beneath them
  make the same point twice.
- Transparency statement: 3 paragraphs → 1.
- Import `ROLE_COMPENSATION` from constants instead of declaring it locally.

### `/experience`
- Remove the `WhatMakesDifferent` block; keep the 6 `PILLARS`, which subsume it and are more
  specific (marley platform, skating/dance integration, on-ice seating).
- "The Performance Model": 2 paragraphs → 1. The second restates pillars 01 and 02.
- Remove the `Partners` block — a clone of the `/partnerships` hero (same eyebrow, same
  "GROW WITH EPC" headline, same prose). Replace with a one-line link.

### Deleted components
`components/WhatMakesDifferent.tsx`, `components/Partners.tsx` (both orphaned by the above),
`components/Shows.tsx` (already imported by nothing).

### `/events`
- Collapse the two-column "Venue & Production Partnerships" section to a single link card.
- Remove the *"earliest partners don't just sponsor a company"* pull-quote; it stays on
  `/partnerships` only.

### `/partnerships` and `/work-with-us`
- State the boundary in copy: organizations and money vs individuals and labor.
- Differentiate the two structurally identical gradient CTA banners.
- Add a cross-link each way so a visitor on the wrong page is redirected.

### `/shows`
- Merge "Who EPC Is For" and "We Are Seeking" — adjacent sections making the same argument.
- Replace the Unsplash production-overview image with `illuminate-show.jpg` (already in `public/`,
  referenced by nothing).
- Delete the comment "Placeholder copy carried over; replace with final info."

### `components/About.tsx`
- Replace the Unsplash photo in the strip with `skater.jpg` (already in `public/`, unreferenced).

## Found during verification, fixed beyond the original plan

Cross-page probes against the rendered HTML caught three duplications the read-through missed:

1. **`/shows` rendered the entire 20-question `FAQ`** via `FaqAccordion` — a complete copy of `/faq`.
   Now shows only an audition-relevant subset, filtered from the same `FAQ` constant via the new
   `AUDITION_FAQ_QUESTIONS` list, with a link to the full set. (Missed on first read because earlier
   edits shifted the file's line numbers past the section.)
2. **The homepage `Auditions` block printed all four full track descriptions** — a third copy of the
   tracks. Reduced to a name-and-age teaser with a link to `/company`.
3. **The 9-item membership feature list rendered on both `/company` and `/details`.** Reading the same
   constant prevented drift but still printed the same list twice. `components/Membership.tsx` now
   summarizes ("9 inclusions: Rehearsals, Production Participation, Performance Opportunities, and 6
   more") and `/details` remains the only page that itemizes them.

A fourth split fell out of the tracks work: `AUDITION_TIERS` carries both a `description` (what the
track involves) and `requirements` (what the audition needs). `/company`, `/shows`, and the homepage
each rendered both. Now `/company` renders `description` only, `/shows` renders `requirements` only,
and the homepage renders neither — a field-level split with zero overlap and mutual cross-links.

## Out of scope

- **`auditions-flyer.png` is 13.5 MB** (3864×5000, displayed at 600×800). It bloats the repo and
  every build. Flagged for the owner rather than re-encoded without approval.
- Splitting `/shows` into separate show and audition pages — rejected to keep URLs stable.
- Any change to the forms, API routes, or legal pages.

## Verification — results

All checks run against the dev server on 2026-08-04:

- `npx tsc --noEmit` — exit 0.
- `npm run build` — exit 0, 22/22 static pages prerendered.
- All 13 content pages return 200.
- **8/8 single-owner probes pass.** Each canonical string (track prose, audition requirements, member
  perks, pay hook, rate table, FAQ answers, partner pull-quote, itemized membership features) appears
  on exactly one page, and that page is its designated owner.
- Zero `unsplash` references remain in any rendered page.
- Grep confirms no remaining imports of the three deleted components.

## Outcome

Duplicated and dead code removed; three components deleted; `/details` cut roughly in half. No
information a visitor previously read is gone — it stopped being said more than once. `/experience`
also dropped from 2.84 kB to 1.58 kB of route JS by shedding two client components.
