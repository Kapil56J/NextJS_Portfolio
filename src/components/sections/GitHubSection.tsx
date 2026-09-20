import RevealOnScroll from "@/components/RevealOnScroll";
import Icon from "@/components/Icon";
import { GITHUB_URL } from "@/lib/constants";

export default function GitHubSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-mono text-sm text-accent">06 &middot; GitHub</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Code, in the open
              </h2>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Icon name="github" size={16} />
              View GitHub Profile
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
