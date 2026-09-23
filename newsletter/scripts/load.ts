import { render } from "@react-email/components";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ProductUpdate from "../emails/product-update";
import type { Issue } from "../emails/types";

// Load RESEND_API_KEY etc. from the repo-root .env without a dotenv dependency.
export function loadEnv() {
  const file = path.resolve(import.meta.dirname, "../../.env");
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

export async function loadIssue(arg: string | undefined) {
  if (!arg) throw new Error("Pass an issue file, e.g. issues/2026-09-29.ts");
  const file = path.resolve(process.cwd(), arg);
  const issue: Issue = (await import(pathToFileURL(file).href)).default;
  const slug = path.basename(file).replace(/\.tsx?$/, "");
  return { issue, slug };
}

export async function renderIssue(issue: Issue) {
  const element = ProductUpdate(issue);
  return {
    html: await render(element),
    text: await render(element, { plainText: true }),
  };
}
