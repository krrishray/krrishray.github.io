import { Pin, X } from "lucide-react";
import { Section } from "./section";
import { profile } from "../lib/data";
import animeAvatar from "@/imports/wgzJwD5X_400x400.jpg";

type Highlight = {
  name: string;
  handle: string;
  verified?: boolean;
  body: string;
};

const highlights: Highlight[] = [
  {
    name: "Krrish Ray",
    handle: "@KrrishnRay",
    verified: false,
    body: "shipped my first full MERN feature end to end today — routing, API, UI. nothing broke in prod (yet).",
  },
  {
    name: "Krrish Ray",
    handle: "@KrrishnRay",
    verified: false,
    body: "RAG finally clicked: retrieve first, reason second. spent a week fighting embeddings for that one sentence.",
  },
  {
    name: "Krrish Ray",
    handle: "@KrrishnRay",
    verified: false,
    body: "reading someone else's codebase > writing your own. internship lesson #1.",
  },
];

export function OnX() {
  return (
    <Section id="on-x" label="Highlights">
      <div className="-mx-6 flex snap-x gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
        {highlights.map((h, i) => (
          <a
            key={i}
            href={profile.socials.x}
            target="_blank"
            rel="noreferrer"
            className="min-w-[280px] snap-start rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--line-strong)] sm:min-w-0"
          >
            <div className="mb-3 flex items-center gap-2.5">
              <img
                src={animeAvatar}
                alt={h.name}
                className="h-10 w-10 shrink-0 rounded-full border border-[var(--line)] object-cover"
              />
              <div className="min-w-0 leading-tight">
                <div className="flex items-center gap-1">
                  <span className="truncate text-sm font-semibold">{h.name}</span>
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 fill-[#1d9bf0]">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                  </svg>
                </div>
                <span className="block truncate font-mono text-xs text-[var(--faint)]">
                  {h.handle}
                </span>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-1.5 text-[var(--faint)]">
                <Pin className="h-3.5 w-3.5" />
                <X className="h-3.5 w-3.5" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[var(--muted)]">"{h.body}"</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
