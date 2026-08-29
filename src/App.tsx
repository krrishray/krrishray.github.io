import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Streak } from "./components/streak";
import { OnX } from "./components/on-x";
import { Articles } from "./components/articles";
import { Notes } from "./components/notes";
import { Inspirations } from "./components/inspirations";
import { Contact } from "./components/contact";
import { Interests } from "./components/interests";
import { Closing } from "./components/closing";
import { Footer } from "./components/footer";
import { CommandPalette } from "./components/command-palette";

export default function App() {
  const [cmdkOpen, setCmdkOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdkOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id="top" className="min-h-full">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(600px 320px at 50% -10%, var(--spot), transparent 70%)",
        }}
      />
      <Header onOpenCmdk={() => setCmdkOpen(true)} />
      <CommandPalette open={cmdkOpen} onClose={() => setCmdkOpen(false)} />
      <main className="relative mx-auto max-w-[880px] px-6 pb-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Streak />
        <OnX />
        <Articles />
        <Notes />
        <Inspirations />
        <Contact />
        <Interests />
        <Closing />
        <Footer />
      </main>
    </div>
  );
}
