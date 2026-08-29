import { Section } from "./section";
import { experience } from "../lib/data";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div>
        {experience.map((e) => (
          <div key={e.company} className="border-b border-[var(--line)] py-5 last:border-none">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-[15px]">
                <span className="font-medium text-[var(--accent)]">{e.company}</span>
                <span className="text-[var(--muted)]"> — {e.role}</span>
                {e.now && (
                  <span className="ml-2 rounded-full bg-[var(--accent-soft)] px-2 py-0.5 font-mono text-[10px] text-[var(--accent)]">
                    Now
                  </span>
                )}
              </h3>
              <span className="font-mono text-xs text-[var(--faint)]">{e.period}</span>
            </div>
            <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-[var(--muted)]">
              {e.summary}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
