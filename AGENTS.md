> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is the help site for Staffer (docs.staffer.com), built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Run `mint dev` to preview locally (needs a Node LTS version, not Node 25)
- Run `mint broken-links` to check links
- Old URLs are kept working through `redirects` in `docs.json`. When you move or delete a page, add a redirect.

## Structure

| Tab | Folder | What goes there |
|---|---|---|
| Get started | `index.mdx`, `get-started/` | What Staffer is, quickstart, key concepts, roles, general FAQ |
| For companies | `companies/` | One page per feature or task for recruiters and hiring teams |
| Admin | `pricing/`, `admin/` | Plans, credits and billing, organization settings, compliance and privacy |
| For candidates | `candidates/` | The candidate portal, applying, steps, messages, privacy |
| Academy | `academy/` | Opinionated how-to guides that combine features (writing criteria, designing a process) |
| Changelog | `changelog.mdx` | Shipped changes, newest first |

## Terminology

Use exactly these words:

| Use | Not |
|---|---|
| job | role, position, req, vacancy (except the menu item **Close position**) |
| brief | job description |
| criteria, criterion (**Required** or **Preferred**) | requirements, skills |
| the agent (company side) | copilot, AI assistant |
| copilot (candidate side only) | agent |
| candidate, application (a candidate's record in one job) | applicant, talent, profile |
| stage (**In review**, **In progress**, **Offer**, **Hired**, **Rejected**, **Withdrawn**) | status, state |
| shortlist, shortlisted | saved, bookmarked |
| promote (UI: **Promote**, **Promote to candidate**) | push, freeze |
| match score, potential score | fit score, rating |
| next action | recommendation, action item |
| process, step | pipeline, workflow (a stage is not a step) |
| workspace, organization | account, company, tenant |
| credits | balance, tokens |
| share link | public link |
| talent pool | CRM, database |

Candidate pages avoid internal words entirely: never "corpus", "overlay", "snapshot" or "token". Say "a copy of your profile" or "your private link".

## Style preferences

- Use active voice and second person ("you"), present tense, contractions
- Lead with the answer. The first sentence of a page or section says the most useful fact
- Keep sentences short: one idea per sentence
- Use sentence case for headings
- Bold for UI elements, spelled exactly as in the app: Click **Settings**
- Navigation paths: **Settings** → **Workspace** → **Members**
- Code formatting for file names, commands, paths, and things the user types or copies
- No em dashes or semicolons in our own prose. Exact UI strings that contain an em dash are quoted as they appear
- No italics, exclamation marks or emoji
- No marketing words: AI-powered, seamless, powerful, effortless, robust, comprehensive, leverage, unlock, empower, simply, just, easily
- Say what happens after an action: emails sent, credits used, whether it can be undone
- State at least one real limit or catch on most pages
- Say who decides when AI is involved: what the AI does and what a person does
- State the role needed when a member can't do something
- Use `<Steps>` for procedures of 3 or more steps, `<AccordionGroup>` for "Common questions", at most two callouts per page
- Avoid a bare `<` before a number in prose (MDX breaks). Write "under 40", not `<40`. Avoid raw `{...}` in prose

## Content boundaries

- Document what customers see in production today (app.staffer.com), not the staging branch
- Don't document staging-only features until they ship: message steps that send automatically, a working **Send as** sender picker, the AI disclosure line on outreach, the Process tab for rejected candidates
- Don't document unbuilt or roadmap items: candidate review requests for AI decisions, Outlook calendar, Zoom or Teams, SSO/SAML/SCIM, custom roles, ATS integrations or imports, LinkedIn or Indeed posting, realtime notifications, a mobile app
- Don't name internal systems or vendors (databases, queues, search index, capability names, event codes). Exceptions: Google Calendar, Google Meet, Stripe, and the EU data-location facts on the security page
- Don't claim certifications Staffer doesn't have. SOC 2 is not audited yet
- Never use real candidate or customer names in examples

## Product update newsletter

- For the weekly flow (release notes to docs, changelog, newsletter and Resend draft), use the `/product-update` skill in `.claude/skills/product-update/SKILL.md`.
- Lives in `newsletter/` (excluded from Mintlify via `.mintignore`). See `newsletter/README.md`.
- When a feature ships, update the docs page, then add it to `changelog.mdx` (one `<Update>` block per ship date, newest on top). Newsletter issues in `newsletter/issues/` cover the highlights and link to the docs. The skill has the full rules.
- Follow `newsletter/COPYWRITING.md` for all newsletter copy.
- Email images go in `images/newsletter/` so Mintlify hosts them.
