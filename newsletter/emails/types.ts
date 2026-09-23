// Shape of one product update issue. Each file in issues/ exports one of these.

export type Link = { label: string; href: string };

export type Section = {
  // Bold subheading, e.g. "Screen a role you already closed"
  heading: string;
  // Paragraphs. Supports **bold** and [links](https://...).
  body: string[];
  // Optional screenshot under the text. Path relative to images/newsletter/.
  image?: { src: string; alt: string };
  // Optional trailing link, rendered like "Learn more here."
  link?: Link;
};

export type Issue = {
  // Inbox subject line
  subject: string;
  // Grey preview text shown after the subject in the inbox
  preview: string;
  // Big headline under the hero image
  title: string;
  // Hero image. Path relative to images/newsletter/, 1200x675 recommended.
  hero: { src: string; alt: string };
  // Optional one-paragraph intro under the title
  intro?: string;
  sections: Section[];
  // Optional closing button
  cta?: Link;
  // Sign-off name, e.g. "Bendik"
  signoff?: string;
};
