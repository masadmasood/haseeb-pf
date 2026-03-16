import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Download,
  Gauge,
  Globe,
  GraduationCap,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `About - ${siteConfig.name} | ${siteConfig.title}`,
  description:
    "Experience, delivery approach, and modern frontend toolkit for product-focused React and Next.js work.",
};

const quickStats = [
  { label: "Experience", value: "2+ years" },
  { label: "Projects delivered", value: "10+" },
  { label: "Primary focus", value: "React, Next.js, TypeScript" },
  { label: "Collaboration", value: "Remote, async-friendly" },
];

const strengths = [
  {
    icon: Workflow,
    title: "Product-minded architecture",
    description:
      "I structure frontend systems around clarity, scalable composition, and fast iteration instead of one-off pages.",
  },
  {
    icon: Gauge,
    title: "Performance by default",
    description:
      "I optimize bundle weight, loading sequences, and interaction cost early so performance does not become rework later.",
  },
  {
    icon: ShieldCheck,
    title: "Accessible implementation",
    description:
      "I ship interfaces with strong semantics, focus states, and predictable interaction patterns that hold up in production.",
  },
  {
    icon: Sparkles,
    title: "Intentional polish",
    description:
      "Motion, spacing, and visual systems are used to support clarity and trust, not just decoration.",
  },
];

const experience = [
  {
    period: "2024 - Present",
    role: "Frontend Engineer",
    company: "Independent product and client work",
    summary:
      "Building product interfaces, dashboards, and landing experiences with Next.js, React 19, TypeScript, and Tailwind CSS v4.",
    wins: [
      "Delivered responsive interfaces with stronger performance and cleaner component boundaries.",
      "Translated product requirements into reusable UI systems instead of single-use screens.",
      "Supported feature delivery, refinement, and frontend cleanup across active codebases.",
    ],
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer",
    company: "Agency and startup collaborations",
    summary:
      "Worked across fast-moving product environments, focusing on shipping polished UI, better maintainability, and reliable frontend behavior.",
    wins: [
      "Implemented modern design systems with a reusable component mindset.",
      "Improved UI consistency and reduced duplication across multiple flows.",
      "Partnered closely with design and product stakeholders to shorten feedback loops.",
    ],
  },
];

const toolkit = [
  {
    title: "Core stack",
    icon: Blocks,
    items: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "App Router",
      "Server Components",
    ],
  },
  {
    title: "UI and styling",
    icon: Rocket,
    items: [
      "Tailwind CSS v4",
      "Design systems",
      "Lucide icons",
      "shadcn-style primitives",
      "GSAP for motion",
    ],
  },
  {
    title: "Quality and delivery",
    icon: TestTube2,
    items: [
      "ESLint",
      "Strict TypeScript",
      "Performance audits",
      "Responsive QA",
      "Production handoff support",
    ],
  },
];

const education = [
  {
    title: "Continuous product engineering practice",
    detail:
      "Hands-on learning through shipping interfaces, reviewing real codebases, and modernizing existing frontend systems.",
  },
  {
    title: "Frontend specialization",
    detail:
      "Focused on React ecosystems, scalable component architecture, and maintainable user interface implementation.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border/40 pt-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_55%)]" />

        <div className="container relative mx-auto grid gap-12 px-6 pb-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:pb-28">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl border border-border/50 bg-surface/40 p-6 backdrop-blur">
              <p className="mb-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Overview
              </p>

              <nav className="space-y-2">
                {[
                  ["Summary", "#summary"],
                  ["Experience", "#experience"],
                  ["Toolkit", "#toolkit"],
                  ["Education", "#education"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center justify-between rounded-full px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-background/70 hover:text-foreground"
                  >
                    <span>{label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-20">
            <div id="summary" className="max-w-4xl space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-primary">
                <Globe className="h-3.5 w-3.5" />
                {siteConfig.availability}
              </span>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-[5.5rem] lg:leading-none">
                  Building frontend systems that stay fast, clear, and maintainable.
                </h1>
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
                  I design and implement product interfaces with a strong bias toward
                  structure, performance, and polish. The goal is simple: make teams
                  faster without letting the codebase get heavier over time.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/resume.pdf" target="_blank" download>
                    <Download className="h-4 w-4" />
                    Download resume
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    Start a conversation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-border/50 bg-surface/40 p-6 backdrop-blur"
                >
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-xl font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            <section className="space-y-8">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                  Core strengths
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  A delivery style built for modern product teams
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {strengths.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="rounded-3xl border border-border/50 bg-surface/30 p-6"
                  >
                    <Icon className="mb-5 h-9 w-9 text-primary" />
                    <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="experience" className="space-y-8 scroll-mt-28">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                  Experience
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  Recent work shaped around modern frontend delivery
                </h2>
              </div>

              <div className="space-y-6">
                {experience.map((item) => (
                  <article
                    key={`${item.period}-${item.company}`}
                    className="rounded-3xl border border-border/50 bg-surface/30 p-6 md:p-8"
                  >
                    <div className="mb-6 flex flex-col gap-4 border-b border-border/40 pb-6 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="mb-2 flex items-center gap-2 text-primary">
                          <BriefcaseBusiness className="h-4 w-4" />
                          <span className="text-sm font-medium">{item.role}</span>
                        </p>
                        <h3 className="text-2xl font-semibold">{item.company}</h3>
                      </div>
                      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        {item.period}
                      </p>
                    </div>

                    <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>

                    <ul className="space-y-3">
                      {item.wins.map((win) => (
                        <li key={win} className="flex gap-3 text-muted-foreground">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{win}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="toolkit" className="space-y-8 scroll-mt-28">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                  Toolkit
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  Current technologies and recommended frontend patterns
                </h2>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {toolkit.map(({ title, icon: Icon, items }) => (
                  <article
                    key={title}
                    className="rounded-3xl border border-border/50 bg-surface/30 p-6"
                  >
                    <Icon className="mb-5 h-9 w-9 text-primary" />
                    <h3 className="mb-5 text-2xl font-semibold">{title}</h3>
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <span className="h-2 w-2 rounded-full bg-primary/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="education" className="space-y-8 scroll-mt-28 pb-8">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                  Education
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  Continuous learning through shipping real work
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {education.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-border/50 bg-surface/30 p-6"
                  >
                    <GraduationCap className="mb-5 h-9 w-9 text-primary" />
                    <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
