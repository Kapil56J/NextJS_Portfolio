import RevealOnScroll from "@/components/RevealOnScroll";

type CaseStudy = {
  title: string;
  problem: string;
  constraints: string;
  approach: string;
  implementation: string;
  tradeoffs: string;
  result: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Real-Time WebSocket Architecture",
    problem:
      "Market data (prices, index and option quotes) changes continuously, and the UI needs to reflect it instantly without creating unnecessary renders or excessive connection overhead.",
    constraints:
      "Many screens need overlapping but different subsets of live data; components mount and unmount frequently as users navigate; mobile network and battery cost of connections matters.",
    approach:
      "Use a single shared WebSocket connection for the whole app, with channel-based subscriptions (e.g. OPTION, INDEX) and key-based subscriptions so each screen only subscribes to the instruments it actually needs.",
    implementation:
      "A listener/registry layer sits between the socket and the components — components register interest in specific keys on mount and unregister on unmount. Incoming delta updates are merged into existing per-key state rather than replacing full objects, and renders are scoped to the components that own the changed key.",
    tradeoffs:
      "Adds the complexity of a subscription registry compared to naive per-screen sockets, and requires careful handling of subscribe/unsubscribe timing around navigation to avoid leaks or stale subscriptions.",
    result:
      "This pattern is live in production, powering real-time price, index, and option data across trading and watchlist screens without the app opening a separate connection per screen.",
  },
  {
    title: "React Native Performance Optimization",
    problem:
      "Screens with long, frequently-updating lists — watchlists, order books — caused dropped frames and sluggish scrolling, especially on mid-range Android devices.",
    constraints:
      "Underlying data can change multiple times per second on some screens; the app needs to stay smooth without over-fetching or over-rendering.",
    approach:
      "Migrate heavy lists to FlashList with estimated item sizes, lazy-mount off-screen/secondary content, and use InteractionManager/requestAnimationFrame to defer non-critical work until after interactions and animations complete.",
    implementation:
      "Combined list virtualization with reduced re-render scope (memoization, targeted state/ref usage) and used Android Studio Profiler to find and fix specific hot paths in mount/unmount and update cycles.",
    tradeoffs:
      "Lazy mounting improves initial render and scroll performance but adds complexity around when content actually becomes available, and required care to avoid layout shift.",
    result:
      "Watchlist and order-related screens now scroll and update smoothly on mid-range Android devices under continuous data changes, with no further rework needed since the optimization shipped.",
  },
  {
    title: "Feature-Based Mobile Architecture",
    problem:
      "A single app spans several distinct domains — trading, mutual funds, IPO, bonds, account — that needed to grow independently without becoming tangled together.",
    constraints:
      "Multiple engineers working across features concurrently; shared components and state needed without tight coupling between domains.",
    approach:
      "Organize the codebase by feature (trading, MF, IPO, bonds, account), with shared UI and utility layers kept separate from feature-specific logic.",
    implementation:
      "A reusable component library for common patterns (forms, cards, lists), a shared state layer with Zustand for cross-cutting concerns, and TanStack React Query for server state and caching per feature.",
    tradeoffs:
      "More upfront structure and boilerplate per feature compared to a flatter structure, which paid off in easier ownership boundaries and fewer merge conflicts across a growing team.",
    result:
      "New feature areas (IPO, G-Sec bonds, commodities) were added on top of this structure without needing to restructure the existing trading or mutual fund modules.",
  },
  {
    title: "Complex Investment Flows",
    problem:
      "Flows like MF purchase, SIP setup, mandate/autopay, and redemption involve multiple sequential steps, external payment/mandate confirmation, and several possible failure points.",
    constraints:
      "State has to survive navigation between steps and app backgrounding while the user completes payment or a UPI mandate outside the app; errors must be surfaced clearly without losing progress.",
    approach:
      "Model each flow as an explicit multi-step structure with persisted in-progress state, reconciling status when the user returns to the app (e.g. refetching order or mandate status after a redirect).",
    implementation:
      "Reusable step/flow components integrated with backend REST APIs for order, mandate, and payment status, with explicit handling for partial completion, expired sessions, and retries.",
    tradeoffs:
      "More engineering investment than a simple linear form, but necessary given that financial flows can't silently fail or duplicate an order.",
    result:
      "These flows run in production for live MF, SIP, and IPO investments, correctly resuming and reconciling status after users complete payment or a UPI mandate outside the app.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-anchor">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
        <RevealOnScroll>
          <p className="font-mono text-sm text-accent">04 &middot; Technical Case Studies</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Engineering problems, worked through
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Expand any case study for the full problem, approach, and trade-offs.
          </p>
        </RevealOnScroll>

        <div className="mt-8 space-y-3">
          {CASE_STUDIES.map((cs, i) => (
            <RevealOnScroll key={cs.title} delay={i * 40}>
              <details className="group rounded-xl border border-border bg-surface open:bg-background">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {cs.title}
                  </h3>
                  <span className="shrink-0 font-mono text-lg text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="space-y-4 border-t border-border px-5 pb-6 pt-5 text-sm leading-relaxed text-muted sm:px-6">
                  <p>
                    <span className="font-medium text-foreground">Problem &mdash; </span>
                    {cs.problem}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Constraints &mdash; </span>
                    {cs.constraints}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Approach &mdash; </span>
                    {cs.approach}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Implementation &mdash; </span>
                    {cs.implementation}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Trade-offs &mdash; </span>
                    {cs.tradeoffs}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Result &mdash; </span>
                    {cs.result}
                  </p>
                </div>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
