import RevealOnScroll from "@/components/RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="section-anchor border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
        <RevealOnScroll>
          <p className="font-mono text-sm text-accent">01 &middot; About</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Production engineering, across mobile and web
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              I&apos;m a software engineer with 3+ years of experience building
              cross-platform mobile applications with React Native and TypeScript,
              alongside React and Next.js web development — shipping to Android, iOS,
              and the web, and owning features end-to-end, from API integration and
              state management through to release.
            </p>
            <p>
              Most of my work sits at the intersection of{" "}
              <span className="text-foreground">real-time systems</span>,{" "}
              <span className="text-foreground">application architecture</span>, and{" "}
              <span className="text-foreground">performance</span> — keeping a
              production app responsive under continuously changing data, and
              structuring feature-heavy codebases so they stay maintainable as they
              grow, whether the target is a native app or the browser.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
