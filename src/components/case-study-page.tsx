import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/lib/case-studies";

const sections = [
  { title: "Context and problem", id: "context" },
  { title: "System scope", id: "scope" },
  { title: "Frontend architecture", id: "architecture" },
  { title: "Highlights", id: "features" },
  { title: "Challenges and solutions", id: "challenges" },
  { title: "Results and learnings", id: "results" },
];

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20">
        <div className="container mx-auto max-w-[1120px] px-6">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          <h1 className="mb-6 font-sans text-4xl font-bold md:text-5xl">
            {study.title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {study.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="mb-4 font-sans font-semibold">Contents</h2>
              <nav>
                <ul className="space-y-2">
                  {sections.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <div className="space-y-16 pb-20 lg:col-span-3">
            <section id="context" className="space-y-6">
              <h2 className="font-sans text-3xl font-bold">Context and problem</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  {study.description}
                </p>
                <p className="leading-relaxed">
                  The work centered on making the product easier to use, easier to
                  maintain, and easier to evolve as requirements grew.
                </p>
              </div>
            </section>

            <section id="scope" className="space-y-6">
              <h2 className="font-sans text-3xl font-bold">{study.scopeTitle}</h2>
              <p className="leading-relaxed text-muted-foreground">
                The product area covered several connected workflows that needed to
                feel coherent as one system.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {study.scopeItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border bg-surface p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section id="architecture" className="space-y-6">
              <h2 className="font-sans text-3xl font-bold">
                Frontend architecture
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">{study.architectureSummary}</p>
              </div>

              <div>
                <h3 className="mb-4 font-sans text-xl font-semibold">Tech stack</h3>
                <div className="mb-6 flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-sans text-xl font-semibold">
                  {study.principlesTitle}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {study.principles.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="features" className="space-y-6">
              <h2 className="font-sans text-3xl font-bold">{study.featureTitle}</h2>
              <div className="space-y-6">
                {study.featureCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-surface p-6"
                  >
                    <h3 className="mb-3 font-sans text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="challenges" className="space-y-6">
              <h2 className="font-sans text-3xl font-bold">
                Challenges and solutions
              </h2>
              <div className="space-y-6">
                {study.challengeCards.map((item, index) => (
                  <div key={item.title}>
                    <h3 className="mb-3 flex items-start gap-2 font-sans text-xl font-semibold">
                      <span className="text-primary">{index + 1}.</span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="mb-2 ml-7 leading-relaxed text-muted-foreground">
                      <strong>Challenge:</strong> {item.challenge}
                    </p>
                    <p className="ml-7 leading-relaxed text-muted-foreground">
                      <strong>Solution:</strong> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="results" className="space-y-8">
              <h2 className="font-sans text-3xl font-bold">Results and learnings</h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border bg-primary/5 p-6"
                  >
                    <div className="mb-2 font-sans text-3xl font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="mb-4 font-sans text-xl font-semibold">Key takeaways</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {study.takeaways.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground">
              <h3 className="mb-4 font-sans text-2xl font-bold">{study.ctaTitle}</h3>
              <p className="mb-6 opacity-90">{study.ctaDescription}</p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Start a conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
