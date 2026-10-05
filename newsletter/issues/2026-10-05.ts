import type { Issue } from "../emails/types";

const issue: Issue = {
  subject: "Reference checks, interviews in your real free time, and more",
  preview: "Staffer sends the requests, follows up with referees and summarises what they said.",
  title: "Reference checks, interviews in your real free time, and more",
  hero: {
    src: "2026-10-05-hero.png",
    alt: "Setup screen for a Reference check step, with a choice of how referees answer: Questionnaire, AI chat or Phone call, and a list of questions for referees.",
  },
  intro:
    "Here's what shipped since the last update. The full list is in the [changelog](https://docs.staffer.com/changelog).",
  sections: [
    {
      heading: "Reference checks without the chasing",
      body: [
        "Add a reference check step to any hiring process. The candidate sends their referees. Staffer sends each one a request, follows up with reminders, collects the answers and summarises them for your team.",
        "Choose how referees answer: a short questionnaire, an AI chat or a phone call, with your own questions. What they say sits next to everything else you know about the candidate, not in someone's notes. You read the summary and decide what it means.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/process-steps" },
    },
    {
      heading: "Interviews booked into your real free time",
      body: [
        "Add every calendar feed you use. Your Calendar page shows all of them, recurring meetings included, each in its own colour. Candidates picking a slot only see times when you're actually free, and meetings you've declined no longer block anything.",
        "When a candidate can pick their own time, they now get an email and a notification asking them to. Reschedule a time they picked, and they're emailed to choose a new one.",
        "One change to know about: scheduling no longer adds you to the invite. Only the attendees on the form get one, so add yourself if you're joining.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/human-interviews" },
    },
    {
      heading: "Messages candidates actually see",
      body: [
        "Email is now the default way to message a candidate. Send a message inside Staffer and the candidate also gets an email with a link straight back to the conversation. Nothing waits unread in a portal they haven't opened.",
        "Candidates now have one inbox for every conversation with your team, a notifications bell, and a calendar of every interview they've booked. Your own inbox filters by unread and by job, sorts, and marks everything read in one click, so you can see who's waiting on you.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/message-candidates" },
    },
    {
      heading: "AI interviews that know the résumé",
      body: [
        "The AI interviewer now reads the candidate's résumé before it starts, in chat, voice and video. It asks about their actual experience instead of asking them to repeat it. Try as candidate uses a sample résumé, so you can see how it works before candidates do.",
        "It also always says it's an AI. It won't take a name or a human identity, even if your instructions describe a persona.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/ai-interviews" },
    },
  ],
  cta: { label: "View Update", href: "https://docs.staffer.com/changelog" },
};

export default issue;
