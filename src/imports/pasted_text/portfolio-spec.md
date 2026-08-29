You are a Staff Design Engineer and Principal Frontend Architect specializing in high-craft developer portfolios (inspired by the aesthetics of Vercel, Linear, vedantworks.com, samworks.vercel.app, and prathm.me).

Your goal is to build a high-performance, responsive, accessible, and polished personal portfolio for Krrish Ray (`krrishray.me`).

---

### 🎨 DESIGN SYSTEM & ARCHITECTURE RULES

1. **Aesthetic Philosophy:**
   - **Theme:** Dark-mode first (`#09090b` / zinc-950 background) with a seamless, toggleable light mode.
   - **Typography:** Strict pairing of `Geist Sans` (headings/body) and `Geist Mono` or `JetBrains Mono` (tags, metadata, timestamps, code snippets).
   - **Visual Craft:** Subtle 1px borders (`border-white/10` with `hover:border-white/20`), radial spotlight hover glow on cards, fluid transitions (150ms-200ms ease), and zero jarring or heavy 3D elements.
   - **Layout:** Bento-grid inspired hierarchy with max-w-[760px] to max-w-[820px] centered container, high content density, and clean vertical rhythm.

2. **Tech Stack Constraints:**
   - **Framework:** Next.js 15+ (App Router, Server & Client Components cleanly separated, TypeScript).
   - **Styling:** Tailwind CSS (v4 or standard modern utility setup).
   - **Motion:** `framer-motion` (clean entrance stagger, layout animations for tab switching, magnetic button hovers).
   - **Icons:** `lucide-react`.
   - **Component Standards:** Inspired by `shadcn/ui` primitives.

---

### 👤 PROFILE DATA & CONTEXT

- **Name:** Krrish Ray
- **Title / Headline:** Full-Stack Developer & Software Builder
- **Domain:** `krrishray.me`
- **Location:** Panihati, Kolkata, India (`Asia/Kolkata` timezone)
- **Live Status:** "Available for SDE Internships & Full-Stack Projects"
- **Key Socials & Handles:**
  - GitHub: https://github.com/krrishray
  - LinkedIn: https://www.linkedin.com/in/krrish-ray-38041422b/
  - X (Twitter): https://x.com/KrrishnRay
  - Medium / Technical Blog: https://medium.com/@krrishray
  - Email: krrishnray@gmail.com

---

### 🧩 DETAILED COMPONENT SPECIFICATIONS

1. **Header & Navigation:**
   - Sticky backdrop-blur navigation with brand initials badge `[KR]`.
   - Smooth anchor jump links (`#about`, `#projects`, `#experience`, `#writing`).
   - Theme toggle (Dark / Light / System) + command palette (`Cmd+K`) hook ready.

2. **Hero Section:**
   - Status badge with a pulsating green availability dot.
   - High-contrast title (`text-4xl sm:text-5xl font-extrabold tracking-tight`).
   - 2-sentence bio emphasizing full-stack product engineering, MERN/Python backend systems, and AI-assisted workflows.
   - Interactive quick-action pill links (GitHub, LinkedIn, X, Medium) + a **"Copy Email"** button with dynamic copy feedback / toast notification.

3. **Filterable Tech Stack Grid (Interactive):**
   - Filter tabs using `framer-motion` animated layout pill (`All`, `Frontend`, `Backend`, `AI & Systems`, `Tools`).
   - Skills array containing: React, Next.js, JavaScript (ES6+), Python, Flask, Node.js, Express, MongoDB, REST APIs, RAG / Vector Retrieval, Git/GitHub, Tailwind CSS, Postman, Figma.
   - Subtle scale / border highlight on hover.

4. **Featured Projects (Bento Showcase):**
   - Cards must feature: Title, 2-line impact description, tech badge pills, GitHub link icon, and live demo link (if applicable).
   - Projects to include:
     1. *Digital Vault & API Platform* — Multi-sig architecture, cryptographic verification, structured routing.
     2. *AI-Powered RAG Prototype* — Knowledge base retrieval engine with vector search and LLM context grounding.
     3. *Interactive DOM Game Engine* — High-performance vanilla JS state machine and dynamic CSS rendering.

5. **Experience Timeline:**
   - *5 Petal India* — Web Development Intern (Full-stack MERN feature development, deployment workflows, AI-accelerated delivery).
   - *GTTI & Surendranath College* — Software Intern (Foundational programming, clean architecture, agile collaboration).

6. **Technical Writing / Medium Section:**
   - Clean 2-column card grid pulling from Medium topics (`medium.com/@krrishray`):
     - "Demystifying RAG for Developers"
     - "Building Resilient Backend APIs from Scratch"
   - Include external arrow icon `↗` and hover elevation.

7. **Footer & Live Metadata Widget:**
   - Real-time client-side live clock formatted in IST (`Asia/Kolkata`) with location marker `Panihati, WB, IND`.
   - Copyright notice + "Back to top" button with smooth scroll.

---

### 🚀 OUTPUT REQUIREMENTS

1. Provide production-ready, fully typed TypeScript code (`.tsx`).
2. Structure the code cleanly into modular files (`components/hero.tsx`, `components/projects.tsx`, `components/tech-stack.tsx`, `components/experience.tsx`, `components/articles.tsx`, `components/footer.tsx`, `lib/data.ts`).
3. Ensure all Framer Motion variants and Tailwind classes are standard, responsive, and compile with zero errors.