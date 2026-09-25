---
name: product-update
description: Turn this week's Staffer release notes into shipped docs and a product update email. Updates the Mintlify docs pages, adds the changelog entry, writes the newsletter issue, opens the PR, and creates the Resend broadcast draft. Use this whenever someone pastes release notes, a list of shipped features or fixes, "this week's updates", or asks to update the docs, the changelog, the product update email or the newsletter for new features, even if they only mention one of those.
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

Run `date +%F` for today's date (the changelog label and the issue file name) and `date +%V` for the ISO week number (the changelog description).

Before writing anything, read:

- `newsletter/COPYWRITING.md`: how Staffer explains itself, which words to avoid, and product truths you must not contradict.
- `AGENTS.md`: docs style rules.
- If the `staffer-writing` skill is available, load it for the newsletter copy.

## Step 0: Start from current main

```bash
git fetch && git switch --no-track -c update-<today> origin/main
```

Do this before editing anything, so your changes land on the latest version of each page. If git refuses because of local changes, stop and ask the user. Don't stash or discard their work.

Run `gh pr list --state open`. If an open PR touches a page you're about to edit, tell the user to merge it first, or the two PRs will conflict.

If `newsletter/node_modules` is missing, run `npm --prefix newsletter install`.

## Step 1: Sort the notes

For each item in the notes, decide:

- Which docs page it belongs on. Grep the repo for the feature name first. The map below is a starting point, the repo is the truth.
- Whether it's newsletter-worthy (a change users will notice) or changelog-only (small fixes, polish).
- What the note actually states, and what it leaves out.

The **Tag** column is the fixed list of changelog tags. Use these names exactly, so the changelog filters don't split into near-duplicates.

| Tag | Pages |
|---|---|
| AI interviews | `companies/ai-interviews`, `features/ai-interviews` |
| Jobs | `companies/create-a-job`, `companies/jobs-list`, `companies/brief-criteria`, `companies/editing-and-rescoring` |
| Candidates | `companies/candidate-view`, `companies/recommended-actions`, `companies/candidate-state`, `companies/notes-and-messages` |
| Chat agent | `companies/ai-copilot` |
| Process | `companies/build-a-process`, `companies/reviewer-holds-and-gates`, `features/process-builder` |
| Scheduling | `companies/human-interviews` |
| Sourcing | `features/sourcing`, `companies/running-a-search`, `companies/match-scores`, `companies/shortlist-and-push` |
| Listings | `companies/publish-a-listing`, `companies/career-page`, `companies/anonymous-listings`, `features/career-page-and-listings` |
| Candidate experience | `candidates/*`, for example `candidates/ai-interview`, `candidates/screening-steps`, `candidates/tracking-your-application` |

A change candidates notice often needs both a company page and a candidate page.

**Don't invent details.** Release notes are terse. Don't fill the gaps with guesses: no UI labels, keyboard shortcuts, setting locations, default values, limits, or scope (which interview modes, which plans) that the notes don't state. Write the detail generally and add it to your open questions. A vague sentence is fixable. A wrong shortcut in the docs misleads every reader until someone notices.

**Ask for screenshots, but don't wait for them.** A screenshot of new UI gives exact labels and defaults the notes never mention. (One screenshot of the AI interview settings gave the tab name, every field and the 0.85x default speed.) Keep going with general wording and the default hero, and list the screenshots you need under open questions.

## Step 2: Update the docs pages

- Read each page before editing it. Add to the section where the feature already lives.
- Match the words the page already uses. For example, the candidate docs say "dashboard" and "application view", even when the notes say "portal".
- Create a new page only when nothing covers the feature. Add it to `docs.json` in the right group, and link to it from the closest related page.
- Follow `AGENTS.md`: second person, sentence case headings, **bold** UI labels, one idea per sentence.
- Leave unrelated content alone.

## Step 3: Add the changelog entry

Use one `<Update>` block per ship date, newest on top, below the intro paragraph. If a block with today's date already exists, add to it. Otherwise add a new block, even if this week already has one. Each block is its own RSS item, and feed readers don't pick up items added to a block that's already published.

```mdx
<Update label="<Month D, YYYY>" description="Week <NN>" tags={["<Tag>", "<Tag>"]}>
  ## <Tag>

  - **<Short name>.** <One sentence on what changed.> [<Page title>](/<page-path>)
  - **<Small fix>.** <One sentence.>
</Update>
```

- List every item, small fixes included. The changelog is the complete record, and the newsletter links to it.
- `label` is today's date, `description` is the ISO week, and `tags` come from the Tag column above. Use one `##` heading per tag.
- Link to the docs page from at least the first bullet of each tag.
- Use plain Markdown only inside the block. The RSS feed drops components.

## Step 4: Write the newsletter issue

**First, check whether an email already went out this week.** Issue files are named by date. Run `ls newsletter/issues`. If the newest issue (ignore `_example.ts`) is less than 7 days old, ask the user: send a second email now, or hold these items for next week's? Finish the docs and changelog either way. If they hold, skip the issue and the draft.

An issue covers every changelog item dated after the previous issue. That way, anything held from last week gets picked up.

Copy `newsletter/issues/_example.ts` to `newsletter/issues/<today>.ts` and replace every field. `newsletter/issues/2026-09-23.ts` is a finished issue to compare against.

- **Highlights only.** 2 to 4 sections, biggest user-visible change first. Small fixes don't get their own section. A one-line mention inside a related section is fine.
- **Subject:** `<Headline change>, <second change>, and more`. The title matches the subject.
- **Preview:** one concrete line about the headline change.
- **Intro:** one line linking to the changelog.
- **Each section:** the heading says what got easier, the body says what Staffer now does, and it ends with a `Learn more here.` link to the docs page. `COPYWRITING.md` lists "Learn more" as a CTA to avoid. This link is a deliberate exception: it's the house format, and the button carries the concrete action.
- **Which page to link:** the company-side page, even for a change candidates see, because the email goes to company users.
- **Button:** `{ label: "View Update", href: "https://docs.staffer.com/changelog" }`. The label has to say where the button goes. A "View Update" button that opened the app went out once already.
- **Hero:** if the user gives you a product screenshot, save it as `images/newsletter/<today>-hero.png` (about 1200 wide, PNG or JPG, never SVG, since Gmail drops SVG). Otherwise use `hero-default.jpg`.
- **Copy rules:** no em dashes, no semicolons, no bold or italics in prose, contractions throughout. No invented numbers, quotes or roadmap items. Where it fits, add an honest limit ("voice and video interviews only"), because a limit makes the rest believable.

A section at the right level:

> **AI interviews that leave room to think**
> A candidate pauses to think. The agent now waits. Voice interviews leave more room between responses, and the agent ignores thinking sounds and filler words instead of treating them as an answer. Learn more here.

## Step 5: Check it

Run these from the repo root.

```bash
npm --prefix newsletter run typecheck
```

If the `typecheck` script is missing, run `(cd newsletter && npx tsc -p .)`.

```bash
npm --prefix newsletter run render -- issues/<today>.ts
```

Check the rendered email. Each of these should print nothing:

```bash
grep -n "—" newsletter/out/<today>.html newsletter/issues/<today>.ts
```

```bash
grep -o 'href="https://docs.staffer.com/[^"#?]*' newsletter/out/<today>.html | sed 's|href="https://docs.staffer.com/||' | sort -u | while read -r p; do [ -z "$p" ] || [ -f "$p.mdx" ] || [ -f "$p" ] || echo "missing: $p"; done
```

```bash
grep -o 'src="https://docs.staffer.com/[^"]*' newsletter/out/<today>.html | sed 's|src="https://docs.staffer.com/||' | sort -u | while read -r f; do [ -f "$f" ] || echo "missing image: $f"; done
```

Then check the button: `grep -o 'View Update[^<]*' newsletter/out/<today>.txt` should show the changelog URL.

```bash
npx -y -p node@22 -p mint@latest -c "mint broken-links"
```

The Mintlify CLI refuses to run on Node 25, which is why this goes through `node@22`.

For a visual check, open `newsletter/out/<today>.html` in a browser. Don't use `npm --prefix newsletter run dev` for this. It previews `_example.ts`, not your issue.

## Step 6: Commit and open the PR

- Commit the docs pages, `docs.json`, `changelog.mdx`, the issue file and any hero image together. Use the session's commit attribution.
- Push with `git push -u origin update-<today>` and open the PR with `gh pr create`.
- Leave the merge to the user unless they ask you to merge. Auto mode blocks merging without review. Give them the command: `gh pr merge <number> --merge`.

## Step 7: After the merge, create the draft

Skip this if the user chose to hold the email.

Wait for Mintlify to deploy, which usually takes a few minutes. Check that every new page and image the email uses returns 200:

```bash
curl -s -o /dev/null -w "%{http_code}\n" "https://docs.staffer.com/<page-path>?t=$(date +%s)"
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
- The newsletter subject and its section headings, or "held for next week"
- Open questions: every detail you had to write generally because the notes didn't say
- Screenshots that would help, and what each would pin down
- Next steps, with the exact merge and draft commands
