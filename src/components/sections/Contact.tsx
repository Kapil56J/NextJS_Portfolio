import Icon from "@/components/Icon";
import RevealOnScroll from "@/components/RevealOnScroll";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="section-anchor border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
        <RevealOnScroll>
          <p className="font-mono text-sm text-accent">07 &middot; Contact</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Let&apos;s talk
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Open to React Native, React, and Mobile Engineer roles in Hyderabad, Pune, and Mumbai.
            The fastest way to reach me is email or LinkedIn.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-sm text-foreground transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Icon name="email" size={18} />
              Email
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-sm text-foreground transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Icon name="linkedin" size={18} />
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-sm text-foreground transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Icon name="github" size={18} />
              GitHub
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">{EMAIL}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
