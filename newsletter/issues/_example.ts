// Starting point for a new issue, and the content the preview server shows.
// Copy to issues/YYYY-MM-DD.ts and replace every field. The draft script
// refuses files that start with "_", so this one can't be sent by mistake.

import type { Issue } from "../emails/types";

const issue: Issue = {
  subject: "Sourcing in rounds, clearer screening, and more",
  preview: "Tell Staffer what was missing. It searches again with your feedback in context.",
  title: "Sourcing in rounds, clearer screening, and more",
  hero: { src: "hero-default.jpg", alt: "Staffer product update" },
  intro:
    "Here's what shipped this week. The full list is in the [changelog](https://docs.staffer.com/changelog).",
  sections: [
    {
      heading: "Steer sourcing in rounds",
      body: [
        "Tell Staffer what was missing from the last batch. It searches again with your feedback in context, and keeps the earlier round beside the new one so you can see what the first pass found.",
        "Once the shortlist looks right, Staffer finds available contact details and prepares personalised outreach for each candidate. You review and send it.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/features/sourcing" },
    },
    {
      heading: "See the evidence behind every score",
      body: [
        "Open a criterion and you get the specific thing in the candidate's history that met it, and the sentence explaining the call. Each criterion is Met, Partial, Gap or Unknown, so missing information never quietly counts as a miss.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/features/match-scoring" },
    },
    {
      heading: "Build the process your way",
      body: [
        "Define what happens after an application, an interview, a scorecard or a decision. If Staffer owns a step, it runs it. If a step is assigned to a person, it stops and waits.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/features/process-builder" },
    },
  ],
  cta: { label: "View Update", href: "https://docs.staffer.com/changelog" },
};

export default issue;
