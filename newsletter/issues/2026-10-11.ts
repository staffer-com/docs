import type { Issue } from "../emails/types";

const issue: Issue = {
  subject: "Declines detected in candidate messages, pay-when-found lookups, and more",
  preview: "When a reply reads as a no, Staffer drafts the close-out and waits for you to confirm it.",
  title: "Declines detected in candidate messages, pay-when-found lookups, and more",
  hero: {
    src: "2026-10-11-hero.png",
    alt: "A Mark not interested card with an AI recommendation badge, the reason \"Their last message reads as a no.\" and the candidate's reply saying they've accepted another offer.",
  },
  intro:
    "Here's what shipped since the last update. The full list is in the [changelog](https://docs.staffer.com/changelog).",
  sections: [
    {
      heading: "Candidate declines automatically detected in messages",
      body: [
        "A sourced candidate writes back: thanks, but they've just accepted another offer. Until now, that reply sat in the thread until someone remembered to close them out.",
        "Staffer now reads every reply. When one reads as a no, the message gets a Sounds not interested badge and the next action becomes Mark not interested, with a short reply already drafted. Send it and the candidate moves to Not interested, a stage of its own, separate from a rejection.",
        "Staffer never moves anyone by itself. You send the reply, or choose Mark without replying. If it read the message wrong, reply as usual.",
      ],
      image: {
        src: "2026-10-11-not-interested.png",
        alt: "A message thread: the recruiter's outreach, the candidate's reply declining, and a purple Sounds not interested badge under the reply.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/recommended-actions" },
    },
    {
      heading: "Contact lookups only charged when an email is found",
      body: [
        "Request contact info now charges only for what it finds: $0.50 for a work email, $1.50 for a personal email. A lookup that finds nothing costs nothing. Before, a lookup usually cost $1.50, found or not.",
        "It works on more profiles too. With no LinkedIn URL, it searches by name and company. A lookup in progress keeps going if you reload, and teammates see it running, so two people don't pay for the same person.",
        "It still only finds emails. Phone numbers you add yourself.",
      ],
      image: {
        src: "2026-10-11-contact-details.png",
        alt: "A candidate's contact details after a lookup: LinkedIn and a found email address, Phone with an Add button, and a Contact details found message.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/contact-details" },
    },
    {
      heading: "Full candidate history in one Activity feed",
      body: [
        "The Activity tab now reads like a feed: who moved the candidate, who wrote what, which steps finished and how they scored. Every row names who did it. A teammate, the candidate, or Staffer for anything that happened automatically.",
        "Messages and notes show their text right in the feed, so you don't have to switch tabs to see what was said.",
      ],
      image: {
        src: "2026-10-11-activity.png",
        alt: "A candidate's Activity feed: Staffer completed a reference check automatically, a reference came in, the candidate added two referees, a recruiter moved them to In progress, and the candidate replied.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/candidate-view" },
    },
    {
      heading: "Referee count, invitations and reminders now configurable",
      body: [
        "Set how many referees a candidate adds, two by default and up to five, and send up to three reminders to referees who haven't answered.",
        "Turn off automatic invitations, and nobody is contacted until you've seen who the candidate named. Invitations and reminders go by email, so they don't apply when referees answer by phone call.",
      ],
      image: {
        src: "2026-10-11-reference-settings.png",
        alt: "Reference check settings: number of referees with at least 2, Send invitations automatically switched on, and two reminders, one day and three days after the invitation.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/process-steps" },
    },
    {
      heading: "Coming next: job board publishing and AI assistant connections",
      body: [
        "Two things are on the way. Neither is live yet.",
        "Post a listing to job boards straight from Staffer. NAV's arbeidsplassen.no comes first, then FINN.no under your own FINN agreement, then Indeed and LinkedIn. Each application is tracked back to the board it came from.",
        "Connect Claude, ChatGPT or Cursor to your workspace and work with your jobs, candidates and shortlists from there. What it can do follows your role in Staffer. The first version reads your data and handles safe actions like creating a job or adding someone to a shortlist. Stage moves, publishing and anything else you can't undo stay in the app.",
      ],
    },
  ],
  cta: { label: "View Update", href: "https://docs.staffer.com/changelog" },
};

export default issue;
