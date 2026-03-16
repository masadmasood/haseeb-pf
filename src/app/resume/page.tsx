import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Resume - ${siteConfig.name} | ${siteConfig.title}`,
  description: "View and download my resume for full stack development work.",
};

const skills = {
  "Languages": "TypeScript, JavaScript (ES6+), Python, HTML5, CSS3",
  "Frontend": "React.js, Next.js, Tailwind CSS, Framer Motion, shadcn/ui, Sass",
  "Mobile": "React Native, Expo (iOS & Android)",
  "Backend": "Node.js, Express.js, REST APIs, AI Integrations, OpenAI API",
  "Database & Cloud": "Firebase, MongoDB, Supabase, Vercel",
  "Tools": "Git, GitHub, VS Code, Figma, Postman",
};

const experience = [
  {
    role: "Frontend Developer",
    company: "Freelance Clients",
    period: "2023 — Present",
    points: [
      "Created responsive user interfaces with modern frontend tooling including Next.js, React, and Tailwind CSS.",
      "Maintained and improved existing codebases with reusable component systems.",
      "Delivered clean implementation with an emphasis on readability and maintainability.",
    ],
  },
  {
    role: "Mobile App Developer",
    company: "Upwork — Freelance",
    period: "2022 — 2023",
    points: [
      "Built cross-platform mobile applications with React Native for iOS and Android.",
      "Collaborated with international clients and translated ideas into shippable product features.",
      "Delivered reliable mobile solutions with attention to performance and usability.",
    ],
  },
  {
    role: "App Developer",
    company: "Independent Project",
    period: "2022",
    points: [
      "Built and shipped a complete mobile application from idea to Google Play Store release.",
      "Managed planning, development, QA, and launch independently.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Software Engineering Internship",
    period: "2021",
    points: [
      "Implemented new features across multiple platforms and internal workflows.",
      "Improved interface responsiveness and overall product usability.",
    ],
  },
];

const projects = [
  {
    title: "AI Video Mobile App",
    tech: "React Native, TypeScript, AI APIs, Node.js",
    description:
      "A React Native application that lets users generate AI-powered videos and save them directly on their device.",
  },
  {
    title: "Portfolio Website",
    tech: "Next.js, Tailwind CSS, TypeScript, Framer Motion",
    description:
      "A personal portfolio with smooth interactions, strong presentation, and conversion-focused design.",
  },
  {
    title: "Threads-style Social App",
    tech: "Next.js, React, Tailwind CSS, TypeScript",
    description:
      "A social product inspired by Threads, with responsive layouts, reusable UI primitives, and modern frontend architecture.",
  },
];

const education = [
  {
    title: "Diploma of Associate Engineering — Information Technology (DAE in IT)",
    detail:
      "Studied software development, networking, database systems, and engineering fundamentals. Solid technical base supporting full-stack and mobile development practice.",
  },
  {
    title: "Information Technology (IT)",
    detail:
      "Core IT education covering programming, systems administration, and applied technology. Complementary qualification alongside the DAE program.",
  },
];

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Subtle page gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="relative z-10 px-4 pb-20 pt-28 sm:px-6 md:pt-36 print:px-0 print:pb-0 print:pt-0">
        <div className="mx-auto max-w-215">
          {/* Page header — hidden on print */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between print:hidden">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                Resume
              </p>
              <h1 className="mt-1.5 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                My Resume
              </h1>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border/70 bg-background/40 backdrop-blur-sm"
            >
              <a href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          {/* ─── A4 Paper ─── */}
          <div className="resume-paper mx-auto bg-white text-[#1a1a1a] shadow-[0_4px_40px_rgba(0,0,0,0.25)] print:shadow-none print:mx-0">
            {/* ── Header ── */}
            <div className="px-10 pt-10 pb-0 sm:px-14 sm:pt-14 print:px-12 print:pt-10">
              <h2 className="text-[28px] font-extrabold uppercase tracking-[0.15em] text-[#111] sm:text-[34px]">
                {siteConfig.name}
              </h2>
              <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#555]">
                {siteConfig.title}
              </p>

              {/* Contact row */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11.5px] text-[#444]">
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3 w-3 text-[#888]" />
                  {siteConfig.email}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-[#888]" />
                  {siteConfig.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="h-3 w-3 text-[#888]" />
                  Discord: {siteConfig.discord}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-3 w-3 text-[#888]" />
                  {siteConfig.url.replace("https://", "")}
                </span>
              </div>

              {/* Divider */}
              <div className="mt-6 h-0.5 bg-[#111]" />
            </div>

            {/* ── Summary ── */}
            <div className="px-10 pt-6 sm:px-14 print:px-12">
              <h3 className="resume-heading">Summary</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-[#333]">
                Full stack developer with 4+ years of experience building web
                and mobile applications. Strong command of Next.js, React
                Native, TypeScript, Python, and AI-powered product work. Focused
                on shipping clean experiences that are technically solid and
                visually refined. Available for remote projects worldwide.
              </p>
            </div>

            {/* ── Skills ── */}
            <div className="px-10 pt-6 sm:px-14 print:px-12">
              <h3 className="resume-heading">Technical Skills</h3>
              <div className="mt-2.5 space-y-1">
                {Object.entries(skills).map(([category, list]) => (
                  <p key={category} className="text-[12.5px] leading-[1.7] text-[#333]">
                    <span className="font-semibold text-[#111]">{category}:</span>{" "}
                    {list}
                  </p>
                ))}
              </div>
            </div>

            {/* ── Experience ── */}
            <div className="px-10 pt-6 sm:px-14 print:px-12">
              <h3 className="resume-heading">Professional Experience</h3>
              <div className="mt-3 space-y-5">
                {experience.map((item) => (
                  <div key={`${item.role}-${item.company}`}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h4 className="text-[14px] font-bold text-[#111]">
                          {item.role}
                        </h4>
                        <p className="text-[12.5px] italic text-[#555]">
                          {item.company}
                        </p>
                      </div>
                      <p className="text-[11.5px] font-medium text-[#666] sm:text-right">
                        {item.period}
                      </p>
                    </div>
                    <ul className="mt-1.5 space-y-0.5 pl-4">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="list-disc text-[12.5px] leading-[1.7] text-[#333] marker:text-[#999]"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Projects ── */}
            <div className="px-10 pt-6 sm:px-14 print:px-12">
              <h3 className="resume-heading">Selected Projects</h3>
              <div className="mt-3 space-y-4">
                {projects.map((project) => (
                  <div key={project.title}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="text-[13px] font-bold text-[#111]">
                        {project.title}
                      </h4>
                      <p className="text-[11px] text-[#777]">
                        {project.tech}
                      </p>
                    </div>
                    <p className="mt-0.5 text-[12.5px] leading-[1.7] text-[#333]">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Education ── */}
            <div className="px-10 pt-6 pb-10 sm:px-14 sm:pb-14 print:px-12 print:pb-10">
              <h3 className="resume-heading">Education</h3>
              <div className="mt-3 space-y-3">
                {education.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-[13px] font-bold text-[#111]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[12.5px] leading-[1.7] text-[#333]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA — hidden on print */}
          <p className="mt-6 text-center text-sm text-muted-foreground print:hidden">
            Want to work together?{" "}
            <Link
              href="/contact"
              className="text-primary transition-colors hover:text-primary/80"
            >
              Let&apos;s talk.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
