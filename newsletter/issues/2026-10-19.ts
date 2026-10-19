import type { Issue } from "../emails/types";

const issue: Issue = {
  subject: "Work with Staffer from Claude, ChatGPT or Cursor, talent pool segments, and more",
  preview: "Connect your AI assistant to a workspace. Anything you can't undo still waits for your approval in Staffer.",
  title: "Work with Staffer from Claude, ChatGPT or Cursor, talent pool segments, and more",
  hero: { src: "hero-default.jpg", alt: "Staffer product update" },
  intro:
    "Here's what shipped since the last update. The full list is in the [changelog](https://docs.staffer.com/changelog).",
  sections: [
    {
      heading: "Work with Staffer from Claude, ChatGPT or Cursor (beta)",
      body: [
        "Connect your AI assistant to a Staffer workspace, and review jobs, candidates and your process without leaving it. It works with Claude, ChatGPT, Cursor, VS Code with GitHub Copilot and Gemini CLI. Settings → Connected apps has a setup guide for each one.",
        "You pick one workspace and choose read-only or read-and-write access. Your Staffer role decides what the assistant can do, and Staffer checks it on every request. Moving a stage, sending a message, closing a job or publishing a listing waits for you to approve it on a Staffer page. One approval covers one action.",
        "Ready-made prompts cover a weekly pipeline review, preparing for an interview, shortlisting and drafting outreach. Drafts stay drafts: the assistant never sends outreach. Every answer links back to the right page in Staffer.",
        "It's a beta, and Staffer isn't in the Claude or ChatGPT directories yet, so you add it with the guide. If your team builds its own tools, the same actions are now a public API with a full OpenAPI description.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/connect-an-assistant" },
    },
    {
      heading: "Keep strong runners-up in talent pool segments",
      body: [
        "You hire one person and leave two good ones behind. Segments keep them easy to find when the next job opens.",
        "A segment is a named, colored group in your talent pool, like \"Store managers, Oslo\". Add people by hand, or set the segment's Intake to one or more jobs. Everyone moved to Qualified on those jobs joins automatically, including people who qualified earlier. Qualified is now a stage on every job.",
        "The Segments page shows each segment's size, new members in the last 30 days, last activity and engagement: the share of members who did something themselves in the last 30 days. Segments don't message anyone. They keep the right people in one place.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/segments" },
    },
    {
      heading: "Everything that's yours, across every workspace",
      body: [
        "If you work in more than one workspace, you no longer have to switch to see what's waiting on you.",
        "The sidebar now separates what's yours from what belongs to the workspace you're in. My applications lists every application you're involved in, across all your workspaces, with tabs for My turn, Assigned, Created and Subscribed. Notifications and the Calendar cover every workspace too, and each item is labeled with its workspace.",
        "Links now carry their workspace, so a link from an email or a teammate opens in the right one. Old links still work.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/navigate-staffer" },
    },
    {
      heading: "Searches keep running when you leave the page",
      body: [
        "Start a search, close the tab, come back later. The results are there.",
        "A candidate search now finishes and saves its results even if you navigate away, reload or close the tab. When you come back, Staffer tells you the search continued in the background and links to the results in Scouting. Each search also has new Stop search and Rerun search options.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/running-a-search" },
    },
  ],
  cta: { label: "View Update", href: "https://docs.staffer.com/changelog" },
};

export default issue;
