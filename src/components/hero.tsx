import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye } from "lucide-react";
import { profile, roles, cubeFaces } from "../lib/data";
import { GithubIcon, LinkedinIcon, MediumIcon, XIcon } from "./brand-icons";
import animeAvatar from "@/imports/wgzJwD5X_400x400.jpg";
import realAvatar from "@/imports/731442566_18088054112435145_8589312654362790241_n.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
const item = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const links = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "X", href: profile.socials.x, Icon: XIcon },
  { label: "Medium", href: profile.socials.medium, Icon: MediumIcon },
];

const cubeTransforms = [
  "rotateY(0deg) translateZ(56px)",
  "rotateY(90deg) translateZ(56px)",
  "rotateY(180deg) translateZ(56px)",
  "rotateY(270deg) translateZ(56px)",
  "rotateX(90deg) translateZ(56px)",
  "rotateX(-90deg) translateZ(56px)",
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showReal, setShowReal] = useState(false);
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  // Real visitor counter (free, keyless hit counter).
  useEffect(() => {
    fetch("https://abacus.jasoncameron.dev/hit/krrishray/portfolio")
      .then((r) => r.json())
      .then((d) => typeof d?.value === "number" && setViews(d.value))
      .catch(() => {});
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no-op */
    }
  };

  return (
    <motion.section
      id="about-top"
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-8"
    >
      {/* Cover banner */}
      <motion.div
        variants={item}
        className="relative overflow-hidden rounded-2xl border border-[var(--line)]"
      >
        <img
          src="https://images.unsplash.com/photo-1614279629245-d7a138f035f0?w=1600&h=520&fit=crop&auto=format"
          alt="Starry night sky — cover banner"
          className="h-40 w-full bg-[var(--surface)] object-cover sm:h-56"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/10 to-transparent" />
        <span
          title="Total visitors to this site"
          className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-xs text-white backdrop-blur-md"
        >
          <Eye className="h-3.5 w-3.5" />
          {views !== null ? views.toLocaleString() : "…"}
        </span>
      </motion.div>

      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <motion.div variants={item} className="relative z-10 -mt-11 mb-5 flex items-end gap-3">
          <button
            onClick={() => setShowReal((v) => !v)}
            aria-label="Toggle profile picture"
            className="relative h-24 w-24 shrink-0 rounded-2xl border border-[var(--line-strong)] bg-[var(--bg)] p-[3px] shadow-xl transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            style={{ perspective: "700px" }}
          >
            <motion.div
              animate={{ rotateY: showReal ? 180 : 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={animeAvatar}
                alt={`${profile.name} — animated avatar`}
                className="absolute inset-0 h-full w-full rounded-[13px] object-cover"
                style={{ backfaceVisibility: "hidden" }}
              />
              <img
                src={realAvatar}
                alt={`${profile.name} — photo`}
                className="absolute inset-0 h-full w-full rounded-[13px] object-cover"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              />
            </motion.div>
          </button>
        </motion.div>

        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)]"
        >
          <span
            className="h-2 w-2 rounded-full bg-[var(--accent)]"
            style={{ animation: "pulse-ring 2s ease-out infinite" }}
          />
          {profile.status}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="mt-2 text-[var(--muted)]">
          {profile.title} ·{" "}
          <span className="inline-block font-mono text-sm text-[var(--accent)]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                {roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>

        <motion.p variants={item} className="mt-3 font-mono text-xs text-[var(--faint)]">
          {profile.metaLine}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-[var(--muted)]"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-2.5">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-sm text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:text-[var(--fg)]"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </a>
          ))}
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-sm font-medium text-[var(--bg)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </motion.div>
      </div>

      {/* Spinning MERN cube */}
      <motion.div
        variants={item}
        aria-hidden
        className="hidden place-items-center md:grid"
        style={{ perspective: "600px" }}
      >
        <div
          className="relative h-28 w-28"
          style={{ transformStyle: "preserve-3d", animation: "spin-cube 14s linear infinite" }}
        >
          {cubeFaces.map((f, i) => (
            <div
              key={f}
              className="absolute inset-0 grid place-items-center rounded-md border border-[var(--line-strong)] font-mono text-lg font-semibold text-[var(--accent)]"
              style={{
                transform: cubeTransforms[i],
                background: "color-mix(in srgb, var(--surface) 70%, transparent)",
              }}
            >
              {f}
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </motion.section>
  );
}
