import RevealOnScroll from "@/components/RevealOnScroll";

const SKILL_GROUPS = [
  {
    title: "Mobile",
    items: ["React Native", "Android", "iOS", "Capacitor", "PWA"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js"],
  },
  {
    title: "State & Data",
    items: ["Zustand", "TanStack React Query", "Redux", "REST APIs", "WebSockets"],
  },
  {
    title: "Architecture",
    items: [
      "Feature-based architecture",
      "Component architecture",
      "State management",
      "System design",
      "Real-time data architecture",
    ],
  },
  {
    title: "Performance",
    items: ["FlashList", "Render optimization", "Lazy mounting", "Profiling", "Performance debugging"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Android Studio", "Xcode", "Cursor", "Claude / AI-assisted development"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-anchor border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
        <RevealOnScroll>
          <p className="font-mono text-sm text-accent">05 &middot; Technical Skills</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Technical Skills
          </h2>
        </RevealOnScroll>

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <RevealOnScroll key={group.title} delay={i * 50}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
