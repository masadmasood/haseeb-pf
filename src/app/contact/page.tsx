import Link from "next/link";
import {
  ArrowRight,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const contactMethods = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: "Best for project details, timelines, and collaboration scope.",
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.socials.linkedin,
    icon: Linkedin,
    description: "Great for hiring conversations, networking, and partnerships.",
  },
  {
    title: "GitHub",
    value: "View code and activity",
    href: siteConfig.socials.github,
    icon: Github,
    description: "Useful if you want to review implementation style and past work.",
  },
];

const collaborationPoints = [
  "New product builds in React and Next.js",
  "Refactors for maintainability and cleaner architecture",
  "Performance audits and frontend optimization",
  "Design-to-code implementation with reusable components",
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_55%)]" />

      <section className="container relative mx-auto px-6 pb-24 pt-28 md:pt-40">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Let&apos;s talk
            </span>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-[5.5rem] lg:leading-none">
              Bring the project, timeline, or messy frontend. I&apos;ll help
              make it shippable.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
              I&apos;m open to product work, targeted frontend cleanups, and
              performance-focused implementation support. The fastest path is
              email, but LinkedIn and GitHub are here too.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="h-4 w-4" />
                  Email directly
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/projects">
                  <ArrowRight className="h-4 w-4" />
                  View selected work
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {contactMethods.map(({ title, value, href, icon: Icon, description }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-3xl border border-border/50 bg-surface/30 p-6 transition-colors hover:border-primary/40 hover:bg-surface/50"
                >
                  <Icon className="mb-5 h-9 w-9 text-primary" />
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {title}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-foreground">{value}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </a>
              ))}
            </div>

            <div className="rounded-[2rem] border border-border/50 bg-surface/30 p-6 md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-2xl font-semibold">Best fit engagements</h2>
                  <p className="text-sm text-muted-foreground">
                    Projects where focused frontend work creates visible momentum.
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {collaborationPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-3xl border border-border/40 bg-background/70 p-5">
                <div className="mb-3 flex items-center gap-3 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">{siteConfig.location}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Async-friendly collaboration, clear handoff notes, and regular
                  progress updates are part of how I like to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
