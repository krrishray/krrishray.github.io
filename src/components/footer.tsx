import { navLinks, profile } from "../lib/data";
import animeAvatar from "@/imports/wgzJwD5X_400x400.jpg";

const connect = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "X", href: profile.socials.x },
  { label: "Medium", href: profile.socials.medium },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)]">
      <div className="grid gap-8 py-12 sm:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-semibold">
            <img
              src={animeAvatar}
              alt={profile.name}
              className="h-[22px] w-[22px] rounded-md border border-[var(--line)] object-cover"
            />
            {profile.name}
          </div>
          <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-[var(--muted)]">
            {profile.footerBlurb}
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-[var(--faint)]">
            Navigate
          </h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-[var(--faint)]">
            Connect
          </h4>
          <ul className="space-y-2 text-sm">
            {connect.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] py-6 font-mono text-xs text-[var(--faint)]">
        <span>© 2026 {profile.name} · {profile.location}</span>
        <a href="#top" className="transition-colors hover:text-[var(--fg)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
