import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-20 border-t border-dashed border-[var(--line)] pt-10"
    >
      <h2 className="mb-6 font-serif text-3xl tracking-tight sm:text-4xl">{label}</h2>
      {children}
    </motion.section>
  );
}
