import type { Issue } from "../emails/types";

const issue: Issue = {
  subject: "AI interviews that leave room to think, job status, and more",
  preview: "The agent waits while candidates think, and ignores the ums.",
  title: "AI interviews that leave room to think, job status, and more",
  hero: { src: "hero-default.jpg", alt: "Staffer product update" },
  intro:
    "Here's what shipped this week. The full list is in the [changelog](https://docs.staffer.com/changelog).",
  sections: [
    {
      heading: "AI interviews that leave room to think",
      body: [
        "A candidate pauses to think. The agent now waits. Voice interviews leave more room between responses, and the agent ignores thinking sounds and filler words instead of treating them as an answer.",
        "The new voice models vary tone and inflection through the interview. Set the general speaking speed with a slider, pick from updated default voices, including Lauren, a new US voice, and use Try as candidate to hear the interview before you save the step.",
        "Transcripts are cleaner too. Audio tags are stripped, so what you read is what was said.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/ai-interviews" },
    },
    {
      heading: "See which jobs are open",
      body: [
        "Your jobs list now shows whether each job is open or closed, and you can filter and sort by it. Inside a job, a header at the top of the canvas shows which job you're in.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/jobs-list" },
    },
    {
      heading: "Move through applications from the keyboard",
      body: [
        "Use the arrows or keyboard shortcuts to jump to the next application. No going back to the list between candidates.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/candidate-view" },
    },
    {
      heading: "Chat that knows where the candidate is",
      body: [
        "Ask the agent about an application and it now reads the job's process and the steps the candidate has already been through. Ask what's next, and you get an answer about this candidate in this process, not a general one.",
      ],
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/ai-copilot" },
    },
  ],
  cta: { label: "Open Staffer", href: "https://app.staffer.com" },
};

export default issue;
