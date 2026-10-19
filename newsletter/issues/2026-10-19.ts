import type { Issue } from "../emails/types";

const issue: Issue = {
  subject: "Work with Staffer from Claude, ChatGPT or Cursor, talent pool segments, and more",
  preview: "Connect your AI assistant to a workspace. Anything you can't undo still waits for your approval in Staffer.",
  title: "Work with Staffer from Claude, ChatGPT or Cursor, talent pool segments, and more",
  hero: {
    src: "2026-10-19-hero.png",
    alt: "The Connect an assistant dialog: the Staffer server URL with a Copy button, and a grid of assistants to choose from: Claude, ChatGPT, Claude Code, Cursor, VS Code and Gemini CLI.",
  },
  intro:
    "Here's what shipped since the last update. The full list is in the [changelog](https://docs.staffer.com/changelog).",
  sections: [
    {
      heading: "Work with Staffer from Claude, ChatGPT or Cursor (beta)",
      body: [
        "Connect your AI assistant to a Staffer workspace, and review roles, candidates and your process without leaving it. It works with Claude, ChatGPT, Claude Code, Cursor, VS Code with GitHub Copilot and Gemini CLI. Click MCP at the bottom of the sidebar for a setup guide for each one.",
        "You pick one workspace, and choose whether the assistant can also make changes. Your Staffer role decides what it can do, and Staffer checks it on every request. Moving a stage, sending a message, publishing a listing or deleting anything waits for you to approve it on a Staffer page. One approval covers that one action, once, for the next 10 minutes.",
        "Ready-made prompts cover a weekly pipeline review, preparing for an interview, shortlisting and drafting outreach. Drafts stay drafts: the assistant never sends outreach. Every answer links back to the right page in Staffer.",
        "It's a beta, and Staffer isn't in the Claude or ChatGPT directories yet, so you add it with the guide. If your team builds its own tools, the same actions are now a public API with a full OpenAPI description.",
      ],
      image: {
        src: "2026-10-19-approve.png",
        alt: "A Staffer approval page: Claude wants to do this. Send the candidate a message to Erik Solberg on Store manager, Oslo. Only this exact action, once, and only for the next 10 minutes. Decline and Approve buttons.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/connect-an-assistant" },
    },
    {
      heading: "Keep strong runners-up in talent pool segments",
      body: [
        "You hire one person and leave two good ones behind. Segments keep them easy to find when the next role opens.",
        "A segment is a named, colored group in your talent pool, like \"Store managers, Oslo\". Add people by hand, or set the segment's Intake to one or more roles. Everyone moved to Qualified on those roles joins automatically, including people who qualified earlier. Qualified is now a stage on every role.",
        "The Segments page shows each segment's size, new members in the last 30 days, last activity and engagement: the share of members who did something themselves in the last 30 days. Segments don't message anyone. They keep the right people in one place.",
      ],
      image: {
        src: "2026-10-19-segments.png",
        alt: "The Segments page: five segments, each with a colored dot, its talent count, new members in the last 30 days, its intake roles and an engagement bar.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/segments" },
    },
    {
      heading: "Everything that's yours, across every workspace",
      body: [
        "If you work in more than one workspace, you no longer have to switch to see what's waiting on you.",
        "The sidebar now separates what's yours from what belongs to the workspace you're in. My applications lists every application you're involved in, across all your workspaces, with tabs for My turn, Assigned, Created and Subscribed. Notifications and the Calendar cover every workspace too, and each item is labeled with its workspace.",
        "Links now carry their workspace, so a link from an email or a teammate opens in the right one. Old links still work.",
      ],
      image: {
        src: "2026-10-19-my-applications.png",
        alt: "The sidebar with Notifications, My applications, Calendar and Agent above the Workspace section, beside the My applications page with My turn, Assigned, Created and Subscribed tabs and each role labeled with its workspace.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/navigate-staffer" },
    },
    {
      heading: "Searches keep running when you leave the page",
      body: [
        "Start a search, close the tab, come back later. The results are there.",
        "A candidate search now finishes and saves its results even if you navigate away, reload or close the tab. When you come back, Staffer tells you the search continued in the background and links to the results in Scouting. While a search runs, its menu has Stop search. Once it finishes, Rerun search runs it again.",
      ],
      image: {
        src: "2026-10-19-search.png",
        alt: "A running search on the Scouting tab, Searching for 24 seconds with 18 results, and its menu open on Stop search, above Rerun search, Download as CSV and Delete search.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/running-a-search" },
    },
  ],
  cta: { label: "View Update", href: "https://docs.staffer.com/changelog" },
};

export default issue;
