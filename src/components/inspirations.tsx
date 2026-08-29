import { Section } from "./section";
import beDelusional from "@/imports/G-rNdNxaYAA5zRN.jpg";
import moodBoard from "@/imports/photo_2026-08-29_18-27-40.jpg";

type Tile = { src: string; alt: string; caption?: string };

const tiles: Tile[] = [
  {
    src: beDelusional,
    alt: "Be delusional — building through the wreckage",
  },
  {
    src: "https://images.unsplash.com/photo-1457364887197-9150188c107b?w=800&h=560&fit=crop&auto=format",
    alt: "Rocket launch arc at dusk",
    caption: "accelerate.",
  },
  {
    src: "https://images.unsplash.com/photo-1532799118157-9fef52fdbc5e?w=800&h=1000&fit=crop&auto=format",
    alt: "Vintage Macintosh",
    caption: "think different.",
  },
  {
    src: moodBoard,
    alt: "The people who make me want to build — a mood board of minds",
    caption: "my kind of people.",
  },
  {
    src: "https://images.unsplash.com/photo-1604423203943-54721eff418a?w=800&h=1000&fit=crop&auto=format",
    alt: "The Andromeda galaxy",
    caption: "stay curious.",
  },
  {
    src: "https://images.unsplash.com/photo-1565946557873-d2b165d780cf?w=800&h=560&fit=crop&auto=format",
    alt: "Climbers on a foggy summit",
    caption: "keep climbing.",
  },
];

export function Inspirations() {
  return (
    <Section id="inspirations" label="Inspirations">
      <p className="-mt-3 mb-6 max-w-[60ch] text-sm text-[var(--muted)]">
        A wall of the people, ideas, and moments that keep me building — mostly at 2 a.m.
      </p>
      <div className="columns-2 gap-3 sm:columns-3 [&>*]:mb-3">
        {tiles.map((t) => (
          <figure
            key={t.alt}
            className="group relative break-inside-avoid overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]"
          >
            <img
              src={t.src}
              alt={t.alt}
              loading="lazy"
              className="w-full object-cover grayscale-[0.35] transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
            />
            {t.caption && (
              <>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-3 left-3 font-serif text-lg text-white sm:text-xl">
                  {t.caption}
                </figcaption>
              </>
            )}
          </figure>
        ))}
      </div>
    </Section>
  );
}
