# Product update newsletter

Weekly product update emails, sent through Resend to the **Product news** topic.
This folder is in `.mintignore`, so none of it shows up on the docs site.

## Layout

- `emails/product-update.tsx` — the template (React Email). One layout for every issue.
- `emails/types.ts` — the shape of an issue.
- `issues/` — one file per issue, `YYYY-MM-DD.ts`. `_example.ts` is the reference.
- `../images/newsletter/` — logo, hero and screenshots. Lives outside this folder so Mintlify hosts it at `https://docs.staffer.com/images/newsletter/...`, which is what the emails load.
- `COPYWRITING.md` — how Staffer writes. Read it before drafting an issue.

## Weekly flow

1. Ship the feature docs first (the MDX pages in the repo root). Newsletter sections link to them.
   Add a new `<Update>` block to the top of `changelog.mdx` with every item from the week, including small fixes. The newsletter covers the highlights, the changelog covers everything.
2. Copy `issues/_example.ts` to `issues/2026-09-29.ts` and write the issue.
3. Put images in `images/newsletter/` (hero 1200x675, screenshots 1200 wide, PNG or JPG, never SVG).
4. Preview: `npm run dev`, open http://localhost:3030.
5. Push to `main` so Mintlify deploys the images. Emails point at the hosted copies.
6. `npm run draft -- issues/2026-09-29.ts` creates a broadcast **draft** in Resend. It doesn't send.
7. In Resend, send a test to yourself, check it in Gmail, then send.

`npm run render -- issues/<file>.ts` writes the final HTML to `out/` if you want to inspect it.

## Writing an issue

- 2 to 4 sections. One feature per section, one idea per section.
- Heading says what got easier. Body says what Staffer now does. End with a link to the docs page.
- Only ship what's live. No roadmap, no invented numbers or quotes.
- Body text supports `**bold**` and `[links](https://...)`.
- Subject pattern: `<Headline feature>, <second feature>, and more`.
- The button label must say where it goes. Default: **View Update**, linking to `https://docs.staffer.com/changelog`. Don't label a button "View Update" and point it at the app.
- Hero: a real product screenshot beats the default banner. Put it in `images/newsletter/` before running `draft`, or upload it in the Resend editor.

## Editing in Resend

Once you edit a draft in the Resend editor, the API can no longer change its HTML. Make copy and layout fixes in the repo before running `draft`. After that, edit in Resend only, and copy any lasting changes back into the repo (`emails/product-update.tsx` for layout, the issue file for content).

## Config

`scripts/draft.tsx` holds the sender, segment and topic IDs. It reads `RESEND_API_KEY` from the repo-root `.env`.
Current target: segment **Company users**, topic **Product news**. Contacts who opted out of the topic are skipped.

## Resend template

`npm run push-template` pushes the same layout to Resend as the template **Product update** (alias `product-update`), with a fixed 3-section layout and variables: `TITLE`, `PREVIEW`, `HERO_URL`, `HERO_ALT`, `S1_HEADING`, `S1_BODY`, `S1_LINK_URL` (and S2, S3), `CTA_LABEL`, `CTA_URL`.
It creates the template on the first run, then updates and republishes it. Re-run it after you change `emails/product-update.tsx`. Variable text is plain: no bold, no inline links.
