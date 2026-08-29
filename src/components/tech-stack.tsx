import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./section";
import { skillFilters, skills } from "../lib/data";

export function TechStack() {
  const [active, setActive] = useState<(typeof skillFilters)[number]>("All");
  const filtered = skills.filter((s) => active === "All" || s.category === active);

  return (
    <Section id="stack" label="02 / stack" title="Tech Stack">
      <div className="mb-6 flex flex-wrap gap-1.5">
        {skillFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={
              "relative rounded-full px-3.5 py-1.5 text-sm transition-colors " +
              (active === f ? "text-[var(--bg)]" : "text-[var(--muted)] hover:text-[var(--fg)]")
            }
          >
            {active === f && (
              <motion.span
                layoutId="stack-pill"
                className="absolute inset-0 rounded-full bg-[var(--fg)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="flex flex-wrap gap-2">
        {filtered.map((s) => (
          <motion.span
            key={s.name}
            layout
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[13px] text-[var(--muted)] transition-all duration-150 hover:scale-[1.03] hover:border-[var(--line-strong)] hover:text-[var(--fg)]"
          >
            {s.name}
          </motion.span>
        ))}
      </motion.div>
    </Section>
  );
}
