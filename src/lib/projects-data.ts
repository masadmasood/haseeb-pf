export const projectsData = [
  {
    title: "VCCS - AI Career Platform",
    category: "AI Product",
    description:
      "An AI-powered career guidance platform designed to turn assessments, matching, and recommendations into a clear product experience.",
    challenges: [
      "Secure authentication and onboarding",
      "AI-assisted recommendation flows",
      "Structured profiling and personalized guidance",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI SDK", "FastAPI"],
    href: "/case-studies/vccs-ai-career",
    year: "2024",
  },
  {
    title: "Timesheet Management System",
    category: "Enterprise Platform",
    description:
      "A workflow-heavy internal system for time tracking, approvals, and operational reporting with a focus on clarity at scale.",
    challenges: [
      "Role-based permissions and approval workflows",
      "Complex form and table experiences",
      "Performance for large operational datasets",
    ],
    tech: ["Next.js", "React", "TypeScript", "TanStack Query", "Tailwind CSS"],
    href: "/case-studies/timesheet-management",
    year: "2024",
  },
  {
    title: "Enterprise Management System",
    category: "Operations Suite",
    description:
      "A modular business platform built to consolidate fragmented operational flows into one reliable product interface.",
    challenges: [
      "Cross-module information architecture",
      "Dashboard performance and scalability",
      "Maintainable UI patterns across multiple workflows",
    ],
    tech: ["Next.js", "React", "TypeScript", "Zustand", "Tailwind CSS"],
    href: "/case-studies/enterprise-management",
    year: "2023",
  },
] as const;
