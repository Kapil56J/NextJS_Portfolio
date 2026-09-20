import Image from "next/image";
import Icon from "@/components/Icon";
import { GITHUB_URL, LINKEDIN_URL, RESUME_HREF } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="section-anchor mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-10 px-5 pb-14 pt-28 sm:px-6 lg:flex-row lg:gap-16 lg:pb-16 lg:pt-32">
      <div className="max-w-2xl text-center lg:text-left">
        <p className="mb-4 font-mono text-sm text-accent">
          React Native Developer &middot; React &amp; Web Developer
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Kapil Jadhav
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          3+ years building production-grade mobile and web applications with React
          Native, React, TypeScript, real-time data and scalable application
          architecture.
        </p>
        <p className="mt-3 text-sm text-muted">
          Open to React Native, React, and Mobile Engineer opportunities in{" "}
          <span className="text-foreground">Hyderabad, Pune &amp; Mumbai</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <a
            href="#work"
            className="rounded-md bg-foreground px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View Work
          </a>
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Download Resume
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Icon name="github" size={16} />
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Icon name="linkedin" size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-border sm:h-44 sm:w-44">
        <Image
          src="/Profile.webp"
          alt="Kapil Jadhav"
          fill
          sizes="(min-width: 640px) 176px, 160px"
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
