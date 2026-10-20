import type { Issue } from "../emails/types";

const issue: Issue = {
  subject: "Global agent chat, saved private chats, and more",
  preview: "Click Agent at the bottom right of any page. It knows which job you're on, and it keeps your chats.",
  title: "Global agent chat, saved private chats, and more",
  hero: {
    src: "2026-10-20-hero.png",
    alt: "The agent's corner panel on a new chat, with three suggestions: Help me write a brief for a role I'm hiring for, Which of my roles need attention this week, and Summarise my pipeline across open roles. Above the message box, Context: Talent pool.",
  },
  intro:
    "One change this time, and it touches every page. The full details are in the [changelog](https://docs.staffer.com/changelog).",
  sections: [
    {
      heading: "Ask the agent from any page",
      body: [
        "The agent used to be tied to a page. Each job had its own shared chat, and Roles, Talent pool and Applications had a separate Ask anything box that forgot everything when you left.",
        "Now there's one agent. Click Agent at the bottom right of any page and it opens in the corner, over whatever you're looking at. A Context line above the message box says what it can see. On a job, it works on that job. Open another job and ask again in the same chat, and it works on that one.",
        "A new chat suggests a few places to start. You can also attach a CV, a spreadsheet or a screenshot, up to 5 files per message.",
      ],
      image: {
        src: "2026-10-20-chat-bar.png",
        alt: "The agent's corner panel above the bottom bar on a job page. Context: Store manager, Oslo, Brief. Four suggestions such as Summarise where this role stands, and below, two recent chats as tabs next to the Agent button.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/the-agent" },
    },
    {
      heading: "Ask about every job at once",
      body: [
        "Monday morning, eight open jobs. Which ones need you this week?",
        "With no job open, the agent works across your whole workspace: jobs, candidates, projects and messages. Ask which jobs need attention, or for a summary of your pipeline across open jobs, and it pulls the answer from Staffer. Describe a new job and it asks a few questions, drafts the brief and creates the job.",
        "It can also act on anything your role allows, including emailing a candidate. In Ask permission mode, anything that messages a candidate, changes a stage, publishes, closes or deletes waits for your approval. The card names the action, not the message itself, so ask to see the draft first. In Auto mode there's no card at all.",
      ],
      image: {
        src: "2026-10-20-chat-approve.png",
        alt: "A chat called Interview times for Erik. The agent says it will email Erik both Thursday slots, and an approval card reads Send the candidate a message, with Reject and Approve buttons.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/agent-actions" },
    },
    {
      heading: "Every chat saved, and yours alone",
      body: [
        "Close the tab halfway through a conversation. Pick it up tomorrow.",
        "Every chat is saved and named for you. Your latest four sit as tabs in the bar at the bottom of the page, and Chat history, the clock icon next to Agent, lets you search the rest. Rename a chat, delete it, or open it full screen when you want more room.",
        "Chats are private. Your teammates see what the agent changed, not what you asked it. The shared chat on each job is gone, so put anything the team needs to know in the job's notes.",
      ],
      image: {
        src: "2026-10-20-chat-history.png",
        alt: "The Chat history menu open above the bottom bar: a search box, New chat, and chats grouped under Today, This week and Older, with the current chat marked.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/the-agent" },
    },
  ],
  cta: { label: "View Update", href: "https://docs.staffer.com/changelog" },
};

export default issue;
