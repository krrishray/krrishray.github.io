import { useRef, useState, type ReactNode } from "react";

export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: any;
} & Record<string, any>) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200, active: false });

  return (
    <Tag
      ref={ref}
      onMouseMove={(e: React.MouseEvent) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top, active: true });
      }}
      onMouseLeave={() => setPos((p) => ({ ...p, active: false }))}
      className={
        "group relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] transition-colors duration-200 hover:border-[var(--line-strong)] " +
        className
      }
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, var(--spot), transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
