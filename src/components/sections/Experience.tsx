import RevealOnScroll from "@/components/RevealOnScroll";

const BULLETS = [
  "Built and maintained core trading and investment features — portfolio/holdings, order flows, watchlists, and pledge management — in a production React Native app used by retail investors.",
  "Designed a WebSocket-based real-time market data layer using channel- and key-based subscriptions with a listener registry, keeping components in sync without redundant connections or re-renders.",
  "Implemented Mutual Fund, SIP, IPO, and G-Sec bond flows end-to-end — purchase, mandate/autopay, payments, and redemptions — integrated with backend REST APIs.",
  "Optimized real-time and list-heavy screens using FlashList, lazy mounting, and InteractionManager/requestAnimationFrame scheduling to reduce dropped frames on frequently updating data.",
  "Built a reusable, feature-based component architecture using Zustand for local/UI state and TanStack React Query for server state across trading, investment, and account modules.",
  "Contributed to the app's PWA/Capacitor web build, sharing UI and business logic between the React Native app and the browser-based experience.",
  "Investigated and resolved production issues using Android Studio Profiler, and contributed to Android, iOS, and web build/release workflows.",
];

export default function Experience() {
  return (
    <section id="experience" className="section-anchor">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
        <RevealOnScroll>
          <p className="font-mono text-sm text-accent">02 &middot; Experience</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Where I&apos;ve built
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className="mt-8 max-w-3xl rounded-xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">
                Nubra &mdash; React Native / Software Engineer
              </h3>
              <span className="font-mono text-sm text-muted">Jan 2026 &ndash; Present</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              Fintech &amp; trading platform &middot; Mobile (React Native) &amp; Web (React)
            </p>

            <ul className="mt-6 space-y-3">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
