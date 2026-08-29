import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { navLinks, profile } from "../lib/data";
import animeAvatar from "@/imports/wgzJwD5X_400x400.jpg";

export function Header({ onOpenCmdk }: { onOpenCmdk: () => void }) {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[60px] max-w-[880px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold">
          <img
            src={animeAvatar}
            alt={profile.name}
            className="h-[22px] w-[22px] rounded-md border border-[var(--line)] object-cover"
          />
          {profile.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCmdk}
            className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-xs text-[var(--muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--fg)]"
          >
            <span>Search</span>
            <kbd className="rounded bg-[var(--line)] px-1 py-0.5 text-[10px]">⌘K</kbd>
          </button>
          <button
            onClick={() => setLight((v) => !v)}
            aria-label="Toggle theme"
            className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--fg)]"
          >
            {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            className="rounded-lg border border-[var(--line)] px-2.5 py-1.5 font-mono text-xs text-[var(--fg)] md:hidden"
          >
            MENU
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-[var(--line)] px-6 py-3 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
