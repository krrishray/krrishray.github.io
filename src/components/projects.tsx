import { Section } from "./section";
import { SpotlightCard } from "./spotlight-card";
import { projects } from "../lib/data";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <SpotlightCard key={p.title}>
            <div className="p-5">
              <span className="font-mono text-[11px] tracking-wide text-[var(--faint)]">
                {p.label}
              </span>
              <h3 className="mt-1.5 text-[1.05rem] font-medium tracking-tight">{p.title}</h3>
              <p className="mt-1.5 max-w-[62ch] text-sm leading-relaxed text-[var(--muted)]">
                {p.description}
              </p>
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[var(--line)] px-2 py-0.5 font-mono text-[11px] text-[var(--faint)]"
                  >
                    {t}
                  </span>
                ))}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-sm text-[var(--accent)] transition-opacity hover:opacity-80"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
