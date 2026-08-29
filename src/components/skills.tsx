import type { ComponentType } from "react";
import { Braces, Code2 } from "lucide-react";
import {
  SiClaude,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Section } from "./section";

type Skill = { name: string; Icon: ComponentType<{ className?: string }>; color: string };

const skills: Skill[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "C/C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "SQL", Icon: SiMysql, color: "#4479A1" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#663399" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Shadcn UI", Icon: SiShadcnui, color: "currentColor" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", Icon: SiExpress, color: "currentColor" },
  { name: "Flask", Icon: SiFlask, color: "currentColor" },
  { name: "REST APIs", Icon: Braces, color: "#22c55e" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "Prisma", Icon: SiPrisma, color: "currentColor" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "currentColor" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Claude", Icon: SiClaude, color: "#D97757" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8E75B2" },
  { name: "VS Code", Icon: Code2, color: "#007ACC" },
  { name: "Vercel", Icon: SiVercel, color: "currentColor" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map(({ name, Icon, color }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--fg)] transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--line-strong)]"
          >
            <Icon className="h-4 w-4" style={{ color } as any} />
            {name}
          </span>
        ))}
      </div>
    </Section>
  );
}
