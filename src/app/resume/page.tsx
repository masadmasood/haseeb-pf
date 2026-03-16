import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Resume - ${siteConfig.name} | ${siteConfig.title}`,
  description: "View and download my resume for frontend engineering work.",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_800px_at_50%_0px,hsl(var(--primary)/0.08),transparent)]" />

      <section className="relative z-10 pb-12 pt-32 md:pt-48">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-8 font-sans text-5xl font-bold uppercase tracking-tighter md:text-7xl">
            Resume
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Frontend Engineer · React and Next.js specialist
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 pb-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="relative aspect-[1/1.4] w-full overflow-hidden rounded-lg border border-border bg-surface shadow-xl">
            <iframe
              src="/resume.pdf"
              className="h-full w-full"
              title={`${siteConfig.name} Resume`}
            >
              <p>
                Your browser does not support PDFs.{" "}
                <a href="/resume.pdf">Download the PDF</a>.
              </p>
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
