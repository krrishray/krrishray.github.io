import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cmdkItems } from "../lib/data";

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = useMemo(
    () => cmdkItems.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const go = (item: (typeof cmdkItems)[number]) => {
    onClose();
    if (item.href.startsWith("#")) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(item.href, "_blank", "noopener");
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter" && filtered[active]) {
      go(filtered[active]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-[18vh] backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: -10, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[520px] overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] shadow-2xl"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Jump to a section or link... (Esc to close)"
              className="w-full border-b border-[var(--line)] bg-transparent px-5 py-4 text-[15px] text-[var(--fg)] outline-none placeholder:text-[var(--faint)]"
            />
            <div className="max-h-[320px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="p-5 text-center text-[13px] text-[var(--faint)]">No matches</div>
              ) : (
                filtered.map((item, i) => (
                  <button
                    key={item.label}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(item)}
                    className={
                      "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors " +
                      (i === active
                        ? "bg-[var(--accent-soft)] text-[var(--fg)]"
                        : "text-[var(--muted)]")
                    }
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10.5px] text-[var(--faint)]">{item.tag}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
