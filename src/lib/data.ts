export const profile = {
  name: "Krrish Ray",
  initials: "KR",
  title: "Web Developer",
  domain: "krrishray.me",
  location: "Panihati, West Bengal, India",
  status: "Open to work",
  metaLine: "21 · West Bengal, IND · MERN + a growing AI habit",
  tagline:
    "I build full-stack products that actually ship — currently interning at 5 Petal India, breaking things in production (small things, mostly on purpose) and occasionally getting an AI to help me fix them faster.",
  footerBlurb:
    "Web developer building on the MERN stack, currently interning at 5 Petal India. Open to internships and junior dev roles.",
  email: "krrishnray@gmail.com",
  socials: {
    github: "https://github.com/krrishray",
    linkedin: "https://www.linkedin.com/in/krrish-ray-38041422b/",
    x: "https://x.com/KrrishnRay",
    medium: "https://medium.com/@krrishray",
  },
} as const

export const roles = [
  "MERN Stack Builder",
  "AI-Assisted Developer",
  "GitHub Enthusiast",
  "Bug Creator & Fixer",
]

export const cubeFaces = ["M", "E", "R", "N", "AI", "JS"]

export const aboutBullets = [
  "I'm a B.Sc. student who ended up spending more time in VS Code than in the lab.",
  "I build with the MERN stack — MongoDB, Express, React, Node — and ship through GitHub like it's a personality trait.",
  "Currently getting hands-on with AI-assisted development and Retrieval-Augmented Generation, because apparently regular debugging wasn't hard enough on its own.",
]

export const experience = [
  {
    company: "5 Petal India",
    role: "Web Development Intern",
    period: "Aug 2026 — Present",
    now: true,
    summary:
      "Building and shipping features across the MERN stack, contributing on both frontend (React) and backend (Node/Express), managing deployment through GitHub, and using AI tools (Claude, Antigravity, Gemini) daily to move faster.",
  },
  {
    company: "GTTI & Surendranath College",
    role: "Programming Intern",
    period: "May — Jun 2025",
    now: false,
    summary:
      "15-day, 60-hour full-time internship applying foundational programming concepts to real tasks in a structured, deadline-driven setting.",
  },
] as const

export const projects = [
  {
    label: "CONTEST BUILD",
    title: "Digital Vault & API Development",
    description:
      "REST APIs for multi-signature digital vaults, built under contest time constraints — request routing and validation logic for secure data handling.",
    tech: ["Node.js", "Express", "REST"],
    github: "https://github.com/krrishray",
  },
  {
    label: "PERSONAL BUILD",
    title: "Interactive Web Experiences",
    description:
      "A multi-level interactive web app in vanilla JavaScript — dynamic DOM manipulation, custom CSS animation, sequential state logic across levels.",
    tech: ["JavaScript", "CSS", "DOM"],
    github: "https://github.com/krrishray",
  },
  {
    label: "BOOTCAMP BUILD",
    title: "AI-Powered App Prototypes (RAG)",
    description:
      "Hands-on 100xDevs module on Retrieval-Augmented Generation — integrating LLM APIs and vector-based retrieval to ground responses in custom data.",
    tech: ["RAG", "LLM APIs", "Prompt design"],
    github: "https://github.com/krrishray",
  },
] as const

export const techMarquee = [
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "JavaScript",
  "Python",
  "REST APIs",
  "Git / GitHub",
  "AWS",
  "Claude",
  "Antigravity",
  "Gemini",
  "RAG",
]

export const tweets = [
  {
    body: "Pin your best post here — swap this placeholder for a real one from your timeline once you've got a few worth showing off.",
  },
  {
    body: "Second slot — good for a build update, a hot take on something you shipped, or a thread you're proud of.",
  },
  {
    body: "Third slot — or delete this card and go with two.",
    link: true,
  },
] as const

export const articles = [
  {
    tag: "Medium · Live",
    title: "Building in Public: My Journey into Web & Backend Development",
    excerpt:
      "Every developer reaches a point where consuming tutorials isn't enough — you have to start building real things, breaking them, and figuring out why.",
    href: "https://medium.com/@krrishray/building-in-public-my-journey-into-web-backend-development-2efbd368bc09",
    cta: "Read on Medium →",
  },
  {
    tag: "Medium · Live",
    title: "Feeding the Dark Side: The Awakening of the Black Wolf",
    excerpt:
      "There is an uncomfortable truth most people refuse to admit: stripped of social conditioning, ethics, and immediate responsibilities, humans are largely driven by pure conditioning and instinct. ",
    href: "https://medium.com/@krrishray/feeding-the-dark-side-the-awakening-of-the-black-wolf-91f058269fec?sharedUserId=krrishray",
    cta: "See all on Medium →",
  },
] as const

export const notes = [
  {
    title: "Day one: starting my MERN internship at 5 Petal India",
    date: "Aug 2026",
    body: "First week notes from starting a 3-month web dev internship. Getting oriented in an existing MERN codebase is a different skill from building something from scratch — reading someone else's routing conventions, folder structure, and state management choices before touching a single line.",
    open: true,
  },
  {
    title: "What RAG actually does, in plain terms",
    date: "Jul 2026",
    body: "Instead of relying only on what a language model already \"knows,\" you retrieve relevant chunks of your own data first, then hand those to the model alongside the question. The model's job shifts from recalling facts to reasoning over what's in front of it.",
    open: false,
  },
  {
    title: "Notes on deploying with GitHub",
    date: "Jun 2026",
    body: 'Branching before touching shared code, writing commit messages someone else can actually understand, and what changes once deployment isn\'t just "push and hope."',
    open: false,
  },
] as const

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Notes", href: "#notes" },
] as const

export const cmdkItems = [
  { label: "About", tag: "section", href: "#about" },
  { label: "Experience", tag: "section", href: "#experience" },
  { label: "Projects", tag: "section", href: "#projects" },
  { label: "Build streak", tag: "section", href: "#streak" },
  { label: "On X", tag: "section", href: "#on-x" },
  { label: "Writing", tag: "section", href: "#writing" },
  { label: "Notes", tag: "section", href: "#notes" },
  { label: "Contact", tag: "section", href: "#contact" },
  { label: "GitHub", tag: "link", href: "https://github.com/krrishray" },
  {
    label: "LinkedIn",
    tag: "link",
    href: "https://www.linkedin.com/in/krrish-ray-38041422b/",
  },
  { label: "X / Twitter", tag: "link", href: "https://x.com/KrrishnRay" },
  { label: "Medium", tag: "link", href: "https://medium.com/@krrishray" },
  { label: "Email", tag: "link", href: "mailto:krrishnray@gmail.com" },
] as const
