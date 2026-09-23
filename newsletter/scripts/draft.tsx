// Create a Resend broadcast DRAFT for an issue. It does not send.
// Review it in Resend (Broadcasts), send a test to yourself, then hit Send there.
// Usage: npm run draft -- issues/2026-09-29.ts

import { Resend } from "resend";
import { loadEnv, loadIssue, renderIssue } from "./load";

// From the Resend account (GET /segments, GET /topics).
const FROM = "Bendik from Staffer <bendik@staffer.com>";
const SEGMENT_ID = "7bc34e64-c188-4105-bb8f-59cb0e3e19cb"; // Company users
const TOPIC_ID = "0542dbcd-1f51-464c-b8f3-bde40d977a75"; // Product news

loadEnv();
if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY missing from .env");

const { issue, slug } = await loadIssue(process.argv[2]);
if (slug.startsWith("_")) throw new Error(`${slug} is an example file, not an issue to send`);

const { html, text } = await renderIssue(issue);
const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.broadcasts.create({
  name: `Product update ${slug}`,
  segmentId: SEGMENT_ID,
  topicId: TOPIC_ID,
  from: FROM,
  subject: issue.subject,
  previewText: issue.preview,
  html,
  text,
});

if (error) {
  console.error(error);
  process.exit(1);
}
console.log(`Draft created: https://resend.com/broadcasts/${data!.id}`);
