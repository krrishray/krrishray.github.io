import { motion } from "framer-motion";
import img1 from "@/imports/G_5_JSOXgAALHli.jpg";
import img2 from "@/imports/G_YQbXhbAAYc3ck.jpg";
import img3 from "@/imports/HPLOZtXbYAApg-i.jpg";

type Card = { src: string; alt: string; tag: string; caption?: string };

const cards: Card[] = [
  {
    src: img1,
    alt: "Anime figure with a Monster in a snowfall forest",
    tag: "mood",
    caption: "cold nights, warm builds",
  },
  {
    src: img3,
    alt: "Apple gear flatlay — MacBook, iPad, iPhone, AirPods Max",
    tag: "gear",
    caption: "the desk that ships",
  },
  {
    src: img2,
    alt: "Anime figure in profile against a bright sky",
    tag: "mood",
    caption: "keep looking forward",
  },
];

export function Interests() {
  return (
    <motion.section
      id="interests"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-20 border-t border-dashed border-[var(--line)] pt-10"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Interests</h2>
          <p className="mt-1 max-w-[52ch] text-sm text-[var(--muted)]">
            Posts, photos, and things I keep coming back to — a feed I'll keep adding to.
          </p>
        </div>
        <span className="hidden shrink-0 font-mono text-[11px] text-[var(--faint)] sm:inline">
          scroll →
        </span>
      </div>

      <div className="-mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 snap-x snap-mandatory">
          {cards.map((c) => (
            <figure
              key={c.alt}
              className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] sm:w-[320px]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.3] transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
              <span className="absolute left-3 top-3 rounded-md border border-white/20 bg-black/30 px-2 py-0.5 font-mono text-[11px] text-white/85 backdrop-blur-sm">
                {c.tag}
              </span>
              {c.caption && (
                <figcaption className="absolute bottom-3 left-3 right-3 font-serif text-lg text-white sm:text-xl">
                  {c.caption}
                </figcaption>
              )}
            </figure>
          ))}

          <div className="flex w-[220px] shrink-0 snap-start items-center justify-center rounded-2xl border border-dashed border-[var(--line-strong)] bg-[var(--surface)] p-6 text-center sm:w-[260px]">
            <p className="font-mono text-[12px] leading-relaxed text-[var(--faint)]">
              more posts &amp; photos
              <br />
              coming soon —
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
