import { Section } from "./section";
import { notes } from "../lib/data";

export function Notes() {
  return (
    <Section id="notes" label="Notes">
      <div>
        {notes.map((n) => (
          <details
            key={n.title}
            open={n.open}
            className="group border-b border-[var(--line)] py-4 last:border-none"
          >
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-3">
              <span className="text-[15px] font-medium transition-colors group-open:text-[var(--accent)]">
                {n.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-[var(--faint)]">{n.date}</span>
            </summary>
            <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-[var(--muted)]">
              {n.body}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
