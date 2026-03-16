import { Code2, Rocket, Users } from "lucide-react";
import ServicesGrid from "@/components/services/ServicesGrid";
import EngagementModels from "@/components/services/EngagementModels";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import FaqAccordion from "@/components/services/FaqAccordion";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import {
  services as rawServices,
  engagementModels,
  processSteps,
  faqs,
} from "@/lib/services-data";

const serviceIcons = [Code2, Rocket, Users];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background selection:bg-primary/20">
      <HeroSection
        label="Full Stack & Mobile Developer"
        title="THE RIGHT FIT"
        description="End-to-end web and mobile development — from architecture to deployment, built for real-world results."
      />

      <section className="relative z-10 py-24 md:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-medium tracking-tight md:text-4xl">
              Technical capabilities
            </h2>
            <div className="h-px w-20 bg-primary/50" />
          </div>

          <ServicesGrid
            services={rawServices.map((service, index) => ({
              ...service,
              icon: serviceIcons[index] ?? Code2,
            }))}
          />
        </div>
      </section>

      <section className="relative z-10 bg-background py-24 md:py-28">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="mb-20 text-center md:mb-28">
            <h2 className="mb-6 text-4xl font-medium tracking-tighter md:text-6xl">
              Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
              A streamlined workflow designed for transparency, momentum, and
              predictable delivery.
            </p>
          </div>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="relative z-10 border-t border-border/40 py-24 md:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Engagement <br /> models
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Whether you need a focused sprint or an ongoing frontend partner,
                the engagement can flex around your team and delivery rhythm.
              </p>
              <div className="space-y-4">
                {[
                  "Clear deliverables",
                  "Transparent pricing",
                  "Regular progress updates",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <EngagementModels items={engagementModels} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-background py-24 md:py-28">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know before we start working together.
            </p>
          </div>

          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
