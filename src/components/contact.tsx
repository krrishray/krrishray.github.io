import { ArrowUpRight, Mail, Paperclip } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Section } from "./section";
import { profile } from "../lib/data";
import { LinkedinIcon, XIcon } from "./brand-icons";

const items = [
  { label: "GitHub", href: profile.socials.github, Icon: SiGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "Twitter", href: profile.socials.x, Icon: XIcon },
  { label: "Mail", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Resume", href: "#", Icon: Paperclip },
];

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {items.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--line-strong)]"
          >
            <Icon className="h-5 w-5 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]" />
            <span className="text-sm font-medium">{label}</span>
            <ArrowUpRight className="ml-auto h-4 w-4 text-[var(--faint)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
          </a>
        ))}
      </div>
    </Section>
  );
}
