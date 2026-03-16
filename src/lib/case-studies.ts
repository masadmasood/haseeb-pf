export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  scopeTitle: string;
  scopeItems: string[];
  architectureSummary: string;
  tech: string[];
  principlesTitle: string;
  principles: string[];
  featureTitle: string;
  featureCards: {
    title: string;
    description: string;
  }[];
  challengeCards: {
    title: string;
    challenge: string;
    solution: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  takeaways: string[];
  ctaTitle: string;
  ctaDescription: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "timesheet-management": {
    slug: "timesheet-management",
    title: "Timesheet Management System",
    description:
      "A workflow-heavy time tracking platform designed to reduce manual effort, speed up approvals, and improve operational reporting.",
    scopeTitle: "System scope",
    scopeItems: [
      "Time entry and tracking",
      "Calendar-based navigation",
      "Approval workflows",
      "Project association",
      "Analytics dashboard",
      "Reporting and export",
      "Responsive mobile access",
      "Notification workflows",
    ],
    architectureSummary:
      "Built with Next.js and TypeScript to keep the interface responsive, predictable, and maintainable across high-volume operational flows.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zod",
      "date-fns",
    ],
    principlesTitle: "Design principles",
    principles: [
      "Mobile-first layouts for fast time entry on the go",
      "Clear approval states and contextual feedback",
      "Structured validation for complex multi-step forms",
      "Progressive enhancement for reliability across environments",
      "Focused performance work around tables and repeated workflows",
    ],
    featureTitle: "Key features",
    featureCards: [
      {
        title: "Smart time entry",
        description:
          "Calendar-assisted entry flows, quick project selection, and autosave-friendly interactions reduced friction for daily usage.",
      },
      {
        title: "Approval automation",
        description:
          "Configurable review paths, comment-based revisions, and reminder flows helped managers move approvals faster.",
      },
      {
        title: "Operational reporting",
        description:
          "Dashboards and export-ready reports gave teams a clearer picture of utilization, billing data, and team capacity.",
      },
    ],
    challengeCards: [
      {
        title: "Date handling and timezone logic",
        challenge:
          "Distributed teams needed accurate timesheet behavior without confusing timezone mismatches.",
        solution:
          "Normalized time handling, stored consistent backend values, and surfaced clear local-time context in the UI.",
      },
      {
        title: "Complex form state",
        challenge:
          "The experience required draft persistence, validation, repeated entries, and dependable editing flows.",
        solution:
          "Structured form state and schema-driven validation kept interactions responsive while reducing errors.",
      },
      {
        title: "Mobile usability",
        challenge:
          "The product needed to stay efficient on smaller screens without turning into a dense spreadsheet experience.",
        solution:
          "Focused on mobile-first layout decisions, simplified interaction paths, and progressive disclosure for advanced controls.",
      },
    ],
    metrics: [
      { value: "60%", label: "less time spent on entry" },
      { value: "95%", label: "reported accuracy rate" },
      { value: "4.8/5", label: "internal user satisfaction" },
    ],
    takeaways: [
      "Operational tools improve quickly when UI friction is treated as a product problem, not just a styling issue.",
      "Autosave and recovery paths materially improve trust in workflow-heavy experiences.",
      "Mobile support matters even in internal systems because real usage happens away from desks too.",
      "Clear validation and approval feedback reduce support overhead for both managers and contributors.",
    ],
    ctaTitle: "Need help untangling a workflow-heavy product?",
    ctaDescription:
      "I can help simplify the interface, tighten the architecture, and make delivery easier to sustain.",
  },
  "enterprise-management": {
    slug: "enterprise-management",
    title: "Enterprise Management System",
    description:
      "A modular operations platform created to unify fragmented business workflows into a single, reliable interface.",
    scopeTitle: "System scope",
    scopeItems: [
      "User and role management",
      "Inventory control",
      "Order processing",
      "Financial reporting",
      "Project management",
      "Document workflows",
      "Analytics dashboards",
      "Internal communication flows",
    ],
    architectureSummary:
      "The frontend was structured around modular surfaces, scalable state boundaries, and predictable rendering for data-heavy screens.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Zod",
    ],
    principlesTitle: "Architectural decisions",
    principles: [
      "Keep data-heavy surfaces modular and composable",
      "Use route-level boundaries to limit UI complexity",
      "Separate server state from local interaction state cleanly",
      "Design optimistic flows carefully for perceived performance",
      "Standardize feedback, empty states, and error handling patterns",
    ],
    featureTitle: "Key modules",
    featureCards: [
      {
        title: "Role-based access control",
        description:
          "Granular user permissions and audit-aware flows made access patterns safer and easier to reason about.",
      },
      {
        title: "Interactive analytics",
        description:
          "Dashboard surfaces were designed to stay readable and responsive while handling large volumes of operational data.",
      },
      {
        title: "Workflow automation",
        description:
          "Multi-step approval and routing logic reduced manual coordination and improved consistency across departments.",
      },
    ],
    challengeCards: [
      {
        title: "State management across modules",
        challenge:
          "Multiple connected workflows increased the risk of tight coupling and hard-to-debug UI state.",
        solution:
          "Clear module boundaries and lightweight shared stores kept the system easier to scale and maintain.",
      },
      {
        title: "Large dataset performance",
        challenge:
          "Heavy tables and dashboards needed to remain responsive under real production usage.",
        solution:
          "Focused on pagination, selective fetching, and render-cost reduction so interactions stayed smoother.",
      },
      {
        title: "Real-time consistency",
        challenge:
          "Operational screens had to reflect changes quickly without introducing confusing UI drift.",
        solution:
          "Update strategies were designed around predictable cache behavior, optimistic paths, and clear fallback states.",
      },
    ],
    metrics: [
      { value: "40%", label: "faster load times" },
      { value: "10,000+", label: "active users supported" },
      { value: "99.9%", label: "target platform uptime" },
    ],
    takeaways: [
      "Modular architecture reduces both delivery friction and future cleanup cost.",
      "Enterprise interfaces benefit from consistent interaction patterns even more than visual novelty.",
      "Type safety and structured validation pay off quickly in multi-workflow systems.",
      "Performance work should begin alongside feature work, not after the dashboard feels slow.",
    ],
    ctaTitle: "Planning a complex internal product?",
    ctaDescription:
      "I can help shape the frontend architecture and keep the interface maintainable as the system grows.",
  },
  "vccs-ai-career": {
    slug: "vccs-ai-career",
    title: "VCCS - AI Career Platform",
    description:
      "An AI-assisted product experience that helps users explore career paths through structured assessments and recommendation flows.",
    scopeTitle: "System scope",
    scopeItems: [
      "AI-powered matching",
      "Interactive assessments",
      "Personalized recommendations",
      "Career path exploration",
      "Skills gap analysis",
      "Learning resource guidance",
      "Progress tracking",
      "User dashboard",
    ],
    architectureSummary:
      "The product balanced AI-heavy flows with a responsive, approachable interface designed to keep users moving confidently through the experience.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI SDK",
      "Recharts",
      "Server-Sent Events",
    ],
    principlesTitle: "Experience principles",
    principles: [
      "Progressive disclosure to keep AI features understandable",
      "Clear loading and processing states around recommendation flows",
      "Strong pacing so assessment steps feel manageable",
      "Accessible interactions for long-form usage",
      "Data visualization that clarifies results instead of overwhelming them",
    ],
    featureTitle: "Key features",
    featureCards: [
      {
        title: "AI-powered matching",
        description:
          "Recommendation flows connected profile inputs with career suggestions in a way that felt useful instead of opaque.",
      },
      {
        title: "Adaptive assessments",
        description:
          "The assessment experience was structured to stay engaging while still gathering enough signal to improve recommendation quality.",
      },
      {
        title: "Career insight dashboards",
        description:
          "Result screens surfaced role fit, skill gaps, and next steps in a format users could act on immediately.",
      },
    ],
    challengeCards: [
      {
        title: "AI response-time expectations",
        challenge:
          "Delays in recommendation generation could easily break trust or stall the user journey.",
        solution:
          "Loading states, progress cues, and background updates were designed to make processing feel intentional and less blocking.",
      },
      {
        title: "Assessment completion",
        challenge:
          "Longer multi-step experiences can lose momentum if the UI does not create steady progress signals.",
        solution:
          "The flow was split into manageable steps with clearer pacing, supportive transitions, and save-friendly structure.",
      },
      {
        title: "Presenting complex results",
        challenge:
          "Career fit, skills mapping, and recommendation confidence needed to be understandable at a glance.",
        solution:
          "Custom visual summaries and better information hierarchy made the outcome screens easier to interpret and act on.",
      },
    ],
    metrics: [
      { value: "10,000+", label: "career matches generated" },
      { value: "92%", label: "reported match confidence" },
      { value: "75%", label: "assessment completion rate" },
    ],
    takeaways: [
      "AI features only feel valuable when the interface explains them clearly.",
      "Loading states and pacing are core product UX in AI-assisted experiences.",
      "Progress visibility improves completion more than adding extra novelty.",
      "Insight screens should prioritize clear decisions over dense data dumps.",
    ],
    ctaTitle: "Building something AI-assisted or product-heavy?",
    ctaDescription:
      "I can help shape the frontend experience so the product feels clear, fast, and trustworthy.",
  },
};
