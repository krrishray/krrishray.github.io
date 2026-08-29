import { useMemo } from "react";
import { Section } from "./section";

const WEEKS = 24;
const intensityColor = [
  "var(--line)",
  "color-mix(in srgb, var(--accent) 35%, var(--line))",
  "color-mix(in srgb, var(--accent) 65%, var(--line))",
  "var(--accent)",
];

export function Streak() {
  const cells = useMemo(
    () =>
      Array.from({ length: WEEKS * 7 }, (_, i) => {
        const fromEnd = WEEKS * 7 - i;
        // Weighted toward recent activity, deterministic-ish stylized pattern.
        const seed = (Math.sin(i * 12.9898) * 43758.5453) % 1;
        const bias = fromEnd < 60 ? 0.55 : 0.3;
        const v = Math.abs(seed);
        return v < bias * 0.4 ? 0 : v < bias * 0.7 ? 1 : v < bias ? 2 : v < bias + 0.15 ? 3 : 0;
      }),
    [],
  );

  return (
    <Section id="streak" label="Build streak">
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
        <div className="mb-4">
          <p className="text-[15px]">
            <span className="font-mono font-semibold text-[var(--accent)]">47</span> days of
            committing something
          </p>
          <p className="text-sm text-[var(--faint)]">
            Self-tracked, not GitHub's — a stylized log of build activity.
          </p>
        </div>
        <div
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${WEEKS}, 1fr)` }}
        >
          {cells.map((v, i) => (
            <div
              key={i}
              className="aspect-square rounded-[2px]"
              style={{ background: intensityColor[v] }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
