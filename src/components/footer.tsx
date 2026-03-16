import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container relative mx-auto px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="mb-8 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            Available for new projects
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
            Let&apos;s create something
            <span className="block text-primary">amazing together</span>
          </h2>

          <p className="mb-10 max-w-md text-lg text-muted-foreground">
            Have a project in mind? I&apos;d love to hear about it.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 font-medium text-background transition-all duration-300 hover:bg-primary"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="order-2 text-sm text-muted-foreground md:order-1">
              © {currentYear} {siteConfig.name}
            </p>

            <div className="order-1 flex items-center gap-1 md:order-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Upwork
              </a>
              <span className="text-border">·</span>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Fiverr
              </a>
              <span className="text-border">·</span>
              <a
                href={siteConfig.socials.peopleperhour}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                PeoplePerHour
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
