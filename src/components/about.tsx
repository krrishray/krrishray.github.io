import { Section } from "./section";

const Em = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-[var(--fg)] underline decoration-[var(--accent)]/50 underline-offset-4">
    {children}
  </strong>
);

const bullets = [
  <>
    I'm a <Em>Full-Stack Developer</Em> who ended up spending more time in VS Code than in the lab.
  </>,
  <>
    I build with the <Em>MERN stack</Em> — MongoDB, Express, React, Node — and ship through{" "}
    <Em>GitHub</Em> like it's a personality trait.
  </>,
  <>
    Currently getting hands-on with <Em>AI-assisted development</Em> and{" "}
    <Em>Retrieval-Augmented Generation</Em>, because apparently regular debugging wasn't hard enough
    on its own.
  </>,
];

export function About() {
  return (
    <Section id="about" label="About">
      <ul className="space-y-5">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[var(--muted)]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--faint)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
