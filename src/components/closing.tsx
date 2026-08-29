import { motion } from "framer-motion";
import { profile } from "../lib/data";

export function Closing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="border-y border-[var(--line)] py-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          Still here?
        </p>
        <h2 className="mx-auto mt-3 max-w-[24ch] text-2xl font-semibold tracking-tight sm:text-3xl">
          That usually means something clicked. Let's talk.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition-all hover:-translate-y-0.5 hover:opacity-90"
        >
          Email me →
        </a>
      </section>
    </motion.div>
  );
}
