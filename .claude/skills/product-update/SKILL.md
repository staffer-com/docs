---
name: product-update
description: Turn this week's Staffer release notes into shipped docs and a product update email. Updates the Mintlify docs pages, adds the week's changelog entry, writes the newsletter issue, opens the PR, and creates the Resend broadcast draft. Use this whenever someone pastes release notes, a list of shipped features or fixes, "this week's updates", or asks to update the docs, the changelog, the product update email or the newsletter for new features, even if they only mention one of those.
argument-hint: "[paste this week's release notes]"
---

# Weekly product update

One set of release notes becomes four things, in this order:

1. Updated docs pages (the source of truth)
2. A changelog entry on `changelog.mdx` (everything that shipped)
3. A newsletter issue in `newsletter/issues/` (the highlights, linking to the docs)
4. A Resend broadcast draft, created only after the docs are live

The order matters. The email links to docs pages and loads images from `docs.staffer.com`, so the docs have to be merged and deployed before anyone sends the email.

If the user only wants one part (say, just the changelog), do that part and skip the rest.

## Inputs

Release notes: $ARGUMENTS

If that's empty, use the notes from the user's message. If there are none, ask for them.

Run `date +%F` for today's date and `date +%V` for the ISO week number. Both go into the changelog entry and the issue file name.

Before writing anything, read:

- `newsletter/COPYWRITING.md`: how Staffer explains itself, which words to avoid, and product truths you must not contradict.
- `AGENTS.md`: docs style rules.
- If the `staffer-writing` skill is available, load it for the newsletter copy.

## Step 1: Sort the notes

For each item in the notes, decide:

- Which docs page it belongs on. Grep the repo for the feature name first. The map below is a starting point, the repo is the truth.
- Whether it's newsletter-worthy (a change users will notice) or changelog-only (small fixes, polish).
- What the note actually states, and what it leaves out.

| Area | Pages |
|---|---|
| AI interviews | `companies/ai-interviews`, `features/ai-interviews`, and `candidates/ai-interview` if candidates notice it |
| Jobs | `companies/create-a-job`, `companies/jobs-list`, `companies/brief-criteria`, `companies/editing-and-rescoring` |
| Candidates | `companies/candidate-view`, `companies/recommended-actions`, `companies/candidate-state`, `companies/notes-and-messages` |
| Chat agent | `companies/ai-copilot` |
| Process and interviews | `companies/build-a-process`, `companies/reviewer-holds-and-gates`, `companies/human-interviews`, `features/process-builder` |
| Sourcing and scouting | `features/sourcing`, `companies/running-a-search`, `companies/match-scores`, `companies/shortlist-and-push` |
| Listings and career page | `companies/publish-a-listing`, `companies/career-page`, `companies/anonymous-listings`, `features/career-page-and-listings` |
| Candidate side | `candidates/*` |

**Don't invent details.** Release notes are terse. Don't fill the gaps with guesses: no UI labels, keyboard shortcuts, setting locations, default values, limits, or scope (which interview modes, which plans) that the notes don't state. Write the detail generally and add it to your open questions. A vague sentence is fixable. A wrong shortcut in the docs misleads every reader until someone notices.

Ask the user for a screenshot of any new UI. One screenshot of the AI interview settings gave the exact labels, the tab name and the default speed (0.85x), which the notes never mentioned.

## Step 2: Update the docs pages

- Read each page before editing it. Add to the section where the feature already lives.
- Create a new page only when nothing covers the feature. Add it to `docs.json` in the right group, and link to it from the closest related page.
- If candidates see the change, update the `candidates/` page too.
- Follow `AGENTS.md`: second person, sentence case headings, **bold** UI labels, one idea per sentence.
- Leave unrelated content alone.

## Step 3: Add the changelog entry

Add a new `<Update>` block at the top of `changelog.mdx`, below the intro paragraph. If this week already has a block, add to it instead.

```mdx
<Update label="September 23, 2026" description="Week 39" tags={["AI interviews", "Jobs"]}>
  ## AI interviews

  - **Speaking-speed slider.** Set the general tempo the agent speaks at, in the AI interview step settings. [AI interviews](/companies/ai-interviews)
  - **Transcript fixes.** Audio tags are stripped from transcripts.

  ## Jobs

  - **Job status.** Open and closed status shows on the jobs list, and you can filter and sort by it. [Your jobs list](/companies/jobs-list)
</Update>
```

- List every item, small fixes included. The changelog is the complete record, and the newsletter links to it.
- `label` is the date, `description` is `Week NN`, and `tags` are the areas (they become filters on the page).
- Link to the docs page from the first bullet of each area.
- Use plain Markdown only inside the block. The RSS feed drops components.

## Step 4: Write the newsletter issue

Copy `newsletter/issues/_example.ts` to `newsletter/issues/<today>.ts`. `newsletter/issues/2026-09-23.ts` is the reference for a finished issue.

- **Highlights only.** 2 to 4 sections, biggest user-visible change first. Small fixes stay in the changelog.
- **Subject:** `<Headline change>, <second change>, and more`. The title matches the subject.
- **Preview:** one concrete line about the headline change.
- **Intro:** one line linking to the changelog.
- **Each section:** the heading says what got easier, the body says what Staffer now does, and it ends with a `Learn more here.` link to the docs page.
- **Button:** `{ label: "View Update", href: "https://docs.staffer.com/changelog" }`. The label has to say where the button goes. A "View Update" button that opens the app went out once already.
- **Hero:** if the user gives you a product screenshot, save it as `images/newsletter/<today>-hero.png` (about 1200 wide, PNG or JPG, never SVG, since Gmail drops SVG). Otherwise use `hero-default.jpg`.
- **Copy rules:** no em dashes, no semicolons, no bold or italics in prose, contractions throughout. No invented numbers, quotes or roadmap items. Where it fits, add an honest limit ("voice and video interviews only"), because a limit makes the rest believable.

A section at the right level:

> **AI interviews that leave room to think**
> A candidate pauses to think. The agent now waits. Voice interviews leave more room between responses, and the agent ignores thinking sounds and filler words instead of treating them as an answer. Learn more here.

## Step 5: Check it

Install dependencies if `newsletter/node_modules` is missing: `npm --prefix newsletter install`.

```bash
npm --prefix newsletter run typecheck
```

```bash
npm --prefix newsletter run render -- issues/<today>.ts
```

Then check `newsletter/out/<today>.txt`: no em dashes (`—`), every link points at a real page, and the button goes to the changelog.

```bash
npx -y -p node@22 -p mint@latest -c "mint broken-links"
```

The Mintlify CLI refuses to run on Node 25, which is why this goes through `node@22`.

For a visual check: `npm --prefix newsletter run dev` previews the email on port 3030, and `mint dev` (through the same `node@22` wrapper) previews the docs. If a port is busy, pick another.

## Step 6: Open the PR

```bash
git fetch && git switch --no-track -c update-<today> origin/main
```

- Commit the docs pages, `docs.json`, `changelog.mdx`, the issue file and any hero image together. Use the session's commit attribution.
- Push the branch and open the PR with `gh pr create`.
- Leave the merge to the user unless they ask you to merge. Auto mode blocks merging without review. Give them the command: `gh pr merge <number> --merge`.

## Step 7: After the merge, create the draft

Wait for Mintlify to deploy, which usually takes a few minutes. Check that every page and image the email uses returns 200:

```bash
curl -s -o /dev/null -w "%{http_code}\n" "https://docs.staffer.com/changelog?t=$(date +%s)"
```

Then create the draft:

```bash
npm --prefix newsletter run draft -- issues/<today>.ts
```

This creates a Resend broadcast draft for the **Company users** segment and the **Product news** topic. It never sends. Give the user the draft link. They send a test to themselves, check it in Gmail, then send.

## Gotchas

- **Resend editor lock.** Once someone edits a broadcast draft in the Resend editor, the API refuses HTML changes (422, "cannot be updated on broadcasts composed via the email editor"). Make every fix before running `draft`. After that, changes happen in the Resend dashboard. Copy any lasting design change back into `newsletter/emails/product-update.tsx` so next week starts from it.
- **Resend templates** made in the editor can still be updated through the API (`PATCH /templates/<id>`). Update both `html` and `text`, or the plain-text version keeps the old content.
- **Template sync.** After changing `newsletter/emails/product-update.tsx`, run `npm --prefix newsletter run push-template` to update the "Product update" template in Resend.
- **`.mintignore` uses gitignore rules.** Anchor root folders (`/newsletter/`). An unanchored `newsletter/` also hides `images/newsletter/`, and the email images 404.
- **Email clients.** PNG or JPG only. Desktop Outlook ignores rounded corners. Keep `mso-padding-alt` at `0px`.
- **Secrets.** `.env` in the repo root holds `RESEND_API_KEY`. Load it with `set -a; . ./.env; set +a` and never print it. It's gitignored, so keep it out of commits.
- **Audience.** The segment and topic IDs live in `newsletter/scripts/draft.tsx`. Change them there if the user wants a different audience.

## Report back

Keep it short:

- The PR link, and one line per docs page you changed or added
- The newsletter subject and its section headings
- Open questions: every detail you had to write generally because the notes didn't say
- Next steps, with the exact merge and draft commands
