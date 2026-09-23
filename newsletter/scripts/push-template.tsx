// Push the product update layout to Resend as a template (alias "product-update"),
// with a fixed three-section layout whose text is Resend variables.
// Creates it on first run, updates it after that, then publishes. Sends nothing.
// The repo template stays the source of truth: re-run this after changing it.
// Usage: npm run push-template

import { Resend } from "resend";
import example from "../issues/_example";
import type { Issue } from "../emails/types";
import { loadEnv, renderIssue } from "./load";

const ALIAS = "product-update";
const SECTIONS = 3;
const v = (key: string) => `{{{${key}}}}`;

// Fallbacks come from the example issue, so the template previews with real copy.
const variables: { key: string; fallback: string }[] = [
  { key: "SUBJECT", fallback: example.subject },
  { key: "PREVIEW", fallback: example.preview },
  { key: "TITLE", fallback: example.title },
  { key: "HERO_URL", fallback: "https://docs.staffer.com/images/newsletter/hero-default.jpg" },
  { key: "HERO_ALT", fallback: example.hero.alt },
];
for (let i = 1; i <= SECTIONS; i++) {
  const s = example.sections[i - 1];
  variables.push(
    { key: `S${i}_HEADING`, fallback: s.heading },
    { key: `S${i}_BODY`, fallback: s.body.join(" ").replace(/\*\*/g, "") },
    { key: `S${i}_LINK_URL`, fallback: s.link!.href },
  );
}
variables.push(
  { key: "CTA_LABEL", fallback: example.cta!.label },
  { key: "CTA_URL", fallback: example.cta!.href },
);

const layout: Issue = {
  subject: v("SUBJECT"),
  preview: v("PREVIEW"),
  title: v("TITLE"),
  hero: { src: v("HERO_URL"), alt: v("HERO_ALT") },
  sections: Array.from({ length: SECTIONS }, (_, n) => ({
    heading: v(`S${n + 1}_HEADING`),
    body: [v(`S${n + 1}_BODY`)],
    link: { label: "Learn more here.", href: v(`S${n + 1}_LINK_URL`) },
  })),
  cta: { label: v("CTA_LABEL"), href: v("CTA_URL") },
};

loadEnv();
if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY missing from .env");
const resend = new Resend(process.env.RESEND_API_KEY);

const { html, text } = await renderIssue(layout);
const payload = {
  name: "Product update",
  alias: ALIAS,
  from: "Bendik from Staffer <bendik@staffer.com>",
  subject: v("SUBJECT"),
  html,
  text,
  variables: variables.map((x) => ({ key: x.key, type: "string" as const, fallbackValue: x.fallback })),
};

const existing = await resend.templates.get(ALIAS);
const result = existing.data
  ? await resend.templates.update(ALIAS, payload)
  : await resend.templates.create(payload);
if (result.error) {
  console.error(result.error);
  process.exit(1);
}

const published = await resend.templates.publish(ALIAS);
if (published.error) {
  console.error(published.error);
  process.exit(1);
}
console.log(`${existing.data ? "Updated" : "Created"} and published: https://resend.com/templates/${result.data!.id}`);
