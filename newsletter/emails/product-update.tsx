import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import type { Issue } from "./types";
import example from "../issues/_example";

// Hosted copies live in /images/newsletter in the docs repo, served by Mintlify.
// The preview server serves the same folder at /static via a symlink.
const ASSET_BASE =
  process.env.NEWSLETTER_ASSET_BASE ??
  (process.env.NODE_ENV === "production"
    ? "https://docs.staffer.com/images/newsletter"
    : "/static");

// Full URLs and Resend template variables ({{{VAR}}}) pass through untouched.
const asset = (src: string) =>
  /^(https?:\/\/|\{\{\{)/.test(src) ? src : `${ASSET_BASE}/${src}`;

const colors = {
  text: "#1f2328",
  heading: "#0a0b0c",
  muted: "#6b7280",
  link: "#1284DA",
  border: "#e5e7eb",
};

const font =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

// Minimal inline formatting: **bold** and [label](url).
function rich(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*(.+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = part.match(/^\[(.+)\]\((.+)\)$/);
    if (link)
      return (
        <Link key={i} href={link[2]} style={styles.link}>
          {link[1]}
        </Link>
      );
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function ProductUpdate(issue: Issue) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{issue.preview}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.logoRow}>
            <Link href="https://staffer.com">
              <Img
                src={asset("staffer-logo.png")}
                alt="Staffer"
                width="130"
                height="30"
                style={styles.logo}
              />
            </Link>
          </Section>

          <Img
            src={asset(issue.hero.src)}
            alt={issue.hero.alt}
            width="600"
            style={styles.hero}
          />

          <Heading as="h1" style={styles.title}>
            {issue.title}
          </Heading>

          {issue.intro && <Text style={styles.paragraph}>{rich(issue.intro)}</Text>}

          {issue.sections.map((section, i) => (
            <Section key={i} style={styles.section}>
              <Text style={styles.sectionHeading}>{section.heading}</Text>
              {section.body.map((p, j) => (
                <Text key={j} style={styles.paragraph}>
                  {rich(p)}
                  {section.link && j === section.body.length - 1 && (
                    <>
                      {" "}
                      <Link href={section.link.href} style={styles.link}>
                        {section.link.label}
                      </Link>
                    </>
                  )}
                </Text>
              ))}
              {section.image && (
                <Img
                  src={asset(section.image.src)}
                  alt={section.image.alt}
                  width="600"
                  style={styles.sectionImage}
                />
              )}
            </Section>
          ))}

          {issue.cta && (
            <Section style={styles.ctaRow}>
              <Button href={issue.cta.href} style={styles.button}>
                {issue.cta.label}
              </Button>
            </Section>
          )}

          {issue.signoff && <Text style={styles.paragraph}>{issue.signoff}</Text>}

          <Hr style={styles.hr} />

          <Section style={styles.footer}>
            <Img
              src={asset("staffer-mark.png")}
              alt=""
              width="24"
              height="24"
              style={styles.mark}
            />
            <Text style={styles.footerText}>
              You're getting this because you signed up for Staffer product news.
              <br />
              Made in Oslo, Norway
            </Text>
            <Text style={styles.footerText}>
              <Link href="https://staffer.com" style={styles.footerLink}>
                staffer.com
              </Link>
              {"  ·  "}
              <Link href="https://docs.staffer.com" style={styles.footerLink}>
                Docs
              </Link>
              {"  ·  "}
              <Link href="{{{RESEND_UNSUBSCRIBE_URL}}}" style={styles.footerLink}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

ProductUpdate.PreviewProps = example satisfies Issue;

const styles = {
  body: { backgroundColor: "#ffffff", fontFamily: font, margin: 0, padding: "32px 0" },
  container: { maxWidth: "600px", margin: "0 auto", padding: "0 16px" },
  logoRow: { textAlign: "center" as const, padding: "8px 0 32px" },
  logo: { margin: "0 auto", display: "block" },
  hero: { width: "100%", height: "auto", borderRadius: "8px", display: "block" },
  title: {
    color: colors.heading,
    fontSize: "26px",
    lineHeight: "34px",
    fontWeight: 700,
    margin: "28px 0 8px",
  },
  section: { margin: "0" },
  sectionHeading: {
    color: colors.heading,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,
    margin: "24px 0 0",
  },
  paragraph: { color: colors.text, fontSize: "16px", lineHeight: "26px", margin: "0 0 16px" },
  link: { color: colors.link, textDecoration: "underline" },
  sectionImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    border: `1px solid ${colors.border}`,
    display: "block",
    margin: "8px 0 8px",
  },
  ctaRow: { padding: "16px 0 8px" },
  button: {
    backgroundColor: colors.heading,
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 600,
    borderRadius: "8px",
    padding: "12px 20px",
    textDecoration: "none",
  },
  hr: { borderColor: colors.border, margin: "40px 0 24px" },
  footer: { textAlign: "center" as const },
  mark: { margin: "0 auto 12px", display: "block" },
  footerText: { color: colors.muted, fontSize: "13px", lineHeight: "20px", margin: "0 0 8px" },
  footerLink: { color: colors.muted, textDecoration: "underline" },
};
