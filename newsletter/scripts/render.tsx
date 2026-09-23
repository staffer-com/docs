// Render an issue to out/<slug>.html and out/<slug>.txt with hosted image URLs.
// Usage: npm run render -- issues/2026-09-29.ts

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { loadIssue, renderIssue } from "./load";

const { issue, slug } = await loadIssue(process.argv[2]);
const { html, text } = await renderIssue(issue);

const out = path.resolve(import.meta.dirname, "../out");
mkdirSync(out, { recursive: true });
writeFileSync(path.join(out, `${slug}.html`), html);
writeFileSync(path.join(out, `${slug}.txt`), text);
console.log(`Wrote out/${slug}.html and out/${slug}.txt`);
