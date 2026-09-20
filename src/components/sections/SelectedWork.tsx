import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

type WorkMedia = {
  src: string;
  alt: string;
};

type WorkItem = {
  index: string;
  title: string;
  description: string;
  role: string;
  contributions: string[];
  tech: string[];
  /** Populated later with real screenshots/device mockups. Card layout adapts automatically once this is non-empty. */
  media?: WorkMedia[];
};

const WORK: WorkItem[] = [
  {
    index: "01",
    title: "Production Trading Application",
    description:
      "A fintech mobile app covering equity trading alongside investment products — mutual funds, IPOs, and G-Sec bonds — built with React Native for Android and iOS.",
    role: "React Native / Software Engineer, contributing across the trading and investment feature surface.",
    contributions: [
      "Trading dashboard, portfolio/holdings, watchlists, and order-management flows",
      "Mutual Fund, SIP, IPO, G-Sec bond, and commodities application flows",
      "Pledge flows and real-time market data screens",
    ],
    tech: ["React Native", "TypeScript", "Zustand", "TanStack Query", "WebSockets", "REST APIs"],
    media: [
      { src: "/work/nubra-home-dashboard.webp", alt: "Trading app home screen with live NIFTY/SENSEX data and quick-access feature grid" },
      { src: "/work/nubra-commodities.webp", alt: "Commodities screen showing crude oil, gold, silver, and metals contracts" },
    ],
  },
  {
    index: "02",
    title: "Mutual Funds & IPO Flows",
    description:
      "Multi-step Mutual Fund and IPO investment flows that survive navigation, app backgrounding, and external confirmation steps without losing state or duplicating orders.",
    role: "Built the flow logic and UI end-to-end.",
    contributions: [
      "MF purchase and SIP setup",
      "Mandate/autopay setup and payment flow",
      "IPO listing, application, and allotment tracking",
      "Order status tracking, pledge, and redemption flows",
    ],
    tech: ["React Native", "TypeScript", "REST APIs", "TanStack Query"],
    media: [
      { src: "/work/nubra-mutual-funds.webp", alt: "Mutual funds screen showing active SIPs, fund screener, and popular funds" },
      { src: "/work/nubra-ipo-list.webp", alt: "IPO listing screen showing open, applied, listed, and upcoming issues" },
    ],
  },
  {
    index: "03",
    title: "Real-Time Market Data Architecture",
    description:
      "The client-side system that streams live market data to the UI without excessive re-renders or redundant connections. Full write-up in Technical Case Studies below.",
    role: "Designed and implemented the real-time data layer.",
    contributions: [
      "Single shared WebSocket connection with channel- and key-based subscriptions",
      "A listener/registry layer components subscribe to on mount, unsubscribe on unmount",
      "Delta updates merged into per-key state, with renders scoped to the owning component",
    ],
    tech: ["React Native", "TypeScript", "WebSockets", "Zustand"],
  },
];

const OTHER_APPS = [
  {
    title: "Wellness360",
    description:
      "Cross-platform health & wellness app with activity tracking, Health Connect integration, and Firebase push notifications for personalized reminders.",
    tech: ["React Native", "TypeScript", "Redux", "Firebase"],
    url: "https://play.google.com/store/apps/details?id=com.wellness360.app&hl=en_IN",
  },
  {
    title: "Healthier 901",
    description:
      "Cross-platform health & fitness app with personalized dashboards, REST API integration with JWT auth, and Redux-driven state management.",
    tech: ["React Native", "TypeScript", "Redux", "REST API"],
    url: "https://play.google.com/store/apps/details?id=com.healthier901.app&hl=en_IN",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="section-anchor border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
        <RevealOnScroll>
          <p className="font-mono text-sm text-accent">03 &middot; Selected Work</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What I&apos;ve actually built
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Specific things I built, as distinct from the responsibilities in Experience above.
          </p>
        </RevealOnScroll>

        <div className="mt-8 space-y-6">
          {WORK.map((item, i) => {
            const hasMedia = !!item.media?.length;
            return (
              <RevealOnScroll key={item.title} delay={i * 60}>
                <article className="rounded-xl border border-border bg-background p-6 sm:p-8">
                  <div
                    className={
                      hasMedia ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10" : ""
                    }
                  >
                    {hasMedia && (
                      <div className="order-2 lg:order-1">
                        <div
                          className={
                            item.media!.length > 1
                              ? "grid grid-cols-2 gap-3"
                              : "mx-auto max-w-[220px]"
                          }
                        >
                          {item.media!.map((m) => (
                            <div
                              key={m.src}
                              className="overflow-hidden rounded-lg border border-border"
                            >
                              <Image
                                src={m.src}
                                alt={m.alt}
                                width={923}
                                height={2000}
                                className="h-auto w-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className={hasMedia ? "order-1 lg:order-2" : ""}>
                      <p className="font-mono text-sm text-muted">{item.index}</p>
                      <h3 className="mt-1 text-xl font-semibold text-foreground">{item.title}</h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>

                      <p className="mt-4 text-sm">
                        <span className="font-medium text-foreground">My role: </span>
                        <span className="text-muted">{item.role}</span>
                      </p>

                      <div className="mt-4">
                        <p className="text-sm font-medium text-foreground">Key contribution</p>
                        <ul className="mt-2 space-y-2">
                          {item.contributions.map((c) => (
                            <li key={c} className="flex gap-2 text-sm text-muted">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                        {item.tech.map((t) => (
                          <span key={t} className="text-xs text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll delay={120}>
          <div className="mt-12">
            <p className="text-sm font-medium text-foreground">Also shipped &amp; published</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {OTHER_APPS.map((app) => (
                <a
                  key={app.title}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{app.title}</h4>
                    <span className="text-xs text-muted group-hover:text-foreground">
                      Play Store &rarr;
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{app.description}</p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                    {app.tech.map((t) => (
                      <span key={t} className="text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
