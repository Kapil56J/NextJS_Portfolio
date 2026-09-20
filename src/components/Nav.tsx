"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import { GITHUB_URL, LINKEDIN_URL, RESUME_HREF } from "@/lib/constants";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight text-foreground">
          Kapil Jadhav
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Icon name="github" size={19} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Icon name="linkedin" size={19} />
          </a>
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-surface lg:hidden">
          <nav className="flex flex-col px-5 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted hover:bg-accent-soft hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-5 px-2 py-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-muted hover:text-foreground"
              >
                <Icon name="github" size={20} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted hover:text-foreground"
              >
                <Icon name="linkedin" size={20} />
              </a>
            </div>
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-foreground px-4 py-3 text-center text-sm font-medium text-white"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
