import Icon from "./Icon";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>&copy; {year} Kapil Jadhav. Built with Next.js &amp; TypeScript.</p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${EMAIL}`} aria-label="Email Kapil" className="hover:text-foreground">
            <Icon name="email" size={17} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-foreground"
          >
            <Icon name="github" size={17} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-foreground"
          >
            <Icon name="linkedin" size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
