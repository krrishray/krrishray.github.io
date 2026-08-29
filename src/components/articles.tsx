import { Section } from "./section";
import { articles } from "../lib/data";

export function Articles() {
  return (
    <Section id="writing" label="Writing">
      <div className="grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <div
            key={a.title}
            className="flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-[18px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--line-strong)]"
          >
            <span className="mb-3 w-fit rounded-md border border-[var(--line)] px-2 py-0.5 font-mono text-[11px] text-[var(--faint)]">
              {a.tag}
            </span>
            <h3 className="text-[15px] font-medium leading-snug tracking-tight">{a.title}</h3>
            <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[var(--muted)]">
              {a.excerpt}
            </p>
            <a
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 w-fit text-sm text-[var(--accent)] transition-opacity hover:opacity-80"
            >
              {a.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
