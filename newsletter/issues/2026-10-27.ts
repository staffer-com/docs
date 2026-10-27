import type { Issue } from "../emails/types";

const issue: Issue = {
  subject: "Jobs private to their team, messages written from scratch, and more",
  preview: "A job and its candidates are now visible only to the people working on it. Admins still see every job.",
  title: "Jobs private to their team, messages written from scratch, and more",
  hero: {
    src: "2026-10-27-hero.png",
    alt: "The Details panel on a job's Brief tab. The Members row shows three photos and 3 members, and the Team row below it reads Retail.",
  },
  intro:
    "Four changes this time, and one that needs an admin. The full list is in the [changelog](https://docs.staffer.com/changelog).",
  sections: [
    {
      heading: "Keep each job with the people hiring for it",
      body: [
        "A finance hire and a sales hire in the same workspace. Until now, everyone could open both.",
        "Now a job, with its candidates, messages and numbers, is visible only to the people working on it: whoever created it and everyone in its Members row. Assign someone a step and they're added. Workspace admins and owners still see every job.",
        "This changed on 24 October. Anyone who used to open a job and isn't on its team has lost it, so add them to Members on the job's Brief tab. The Team row next to it only decides what the agent knows. It gives nobody access.",
        "One more for organization admins. Connected AI assistants, like Claude and ChatGPT, are now off until you switch them on in Settings → Organization → AI assistants. Anything your team connected last week stopped working until you do. The same page lists every connection, and each one ends after 90 days.",
      ],
      image: {
        src: "2026-10-27-ai-assistants.png",
        alt: "The AI assistants settings page with Allow connected AI assistants switched on. Below it, two connected apps: Claude for Lena Berg with read and write access, and ChatGPT for Max Holm with read only access, each with its connected, last used and end dates and a Disconnect button.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/get-started/roles-and-permissions" },
    },
    {
      heading: "Let AI write the message, then send it on LinkedIn",
      body: [
        "You open a candidate you've never written to. The editor is empty.",
        "Click AI assist and choose Write for me. Staffer reads the thread and where the candidate is in your process, then writes the whole message in their language and in your style, taken from the last few messages you wrote yourself. Or choose Write message and say what you want first, like asking about their notice period. Nothing is sent until you click Send.",
        "For candidates you reach on LinkedIn, the button next to Send now opens a LinkedIn message with your text filled in. Staffer doesn't log it, so mark them as contacted afterwards.",
      ],
      image: {
        src: "2026-10-27-write-for-me.png",
        alt: "The message composer with an empty editor and the AI assist menu open: a box that reads Ask about their notice period, keep it short, then Write message and Write for me. Next to Send is a LinkedIn button.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/message-candidates" },
    },
    {
      heading: "Offer interview times nobody can book over",
      body: [
        "You offer a candidate Thursday at 10. By the time they pick it, a colleague has put a meeting there.",
        "Switch on Reserve these times in the calendar on an Interview step with specific dates. Every interviewer with Google Calendar connected gets the slots as private busy events. When the candidate books, only the time they took goes to the interview. The rest stays held until you change the dates or close the job.",
        "Move a booked interview in Google Calendar and Staffer follows, the notetaker included. You can also set a break between meetings on the step, and Google calendars now sync every 5 minutes. Interviewers without Google connected aren't covered.",
      ],
      image: {
        src: "2026-10-27-reserve.png",
        alt: "An Interview step's booking settings: start times every 30 minutes, a 15 minute break between meetings, two time slots on 3 and 5 November, and the Reserve these times in the calendar switch turned on.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/human-interviews" },
    },
    {
      heading: "AI interviews that hold up from invite to transcript",
      body: [
        "A customer told us candidates weren't finishing their AI interviews. We traced every cause we found and fixed it.",
        "Invitation emails now open the interview directly, not a sign-in page. A voice call's transcript and recording are saved however the call ends. A blocked or busy microphone gets a plain explanation and a fix. Evaluations read the full answer, and their summary is always in English.",
        "The interviewer never asks about pregnancy, family plans, religion, ethnicity, disability, sexual orientation, gender identity, political opinion or union membership, whatever your instructions say.",
        "Voice minutes are charged to your credits like other AI use, and calls under 15 seconds are free. A voice or video interview won't start while you're out of credits, so keep an eye on the balance.",
      ],
      image: {
        src: "2026-10-27-mic.png",
        alt: "A candidate's setup screen for an AI voice interview for Store manager, Oslo at Nordlys Retail. A red notice reads: Your microphone is in use by another app. Close it there, then reload the page. Below it is a Try again button.",
      },
      link: { label: "Learn more here.", href: "https://docs.staffer.com/companies/ai-interviews" },
    },
  ],
  cta: { label: "View Update", href: "https://docs.staffer.com/changelog" },
};

export default issue;
