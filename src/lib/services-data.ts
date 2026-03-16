import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon | null;
  title: string;
  description: string;
  features: string[];
};

export type EngagementModel = {
  title: string;
  description: string;
  ideal: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    icon: null, // supplied by page or component
    title: "Full Stack Development",
    description:
      "End-to-end web application development with Next.js, React, TypeScript, and Node.js. Built for scale, performance, and clean architecture.",
    features: [
      "Next.js and React web applications",
      "Node.js backend and API development",
      "TypeScript implementation",
      "Responsive and performant UI systems",
    ],
  },
  {
    icon: null,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android applications using React Native, delivering native-quality experiences from a single codebase.",
    features: [
      "React Native iOS and Android apps",
      "AI-powered mobile integrations",
      "App Store and Google Play deployment",
      "Performance optimization for mobile",
    ],
  },
  {
    icon: null,
    title: "AI & Python Integration",
    description:
      "Integrating AI and machine learning capabilities into web and mobile applications using Python and modern AI SDKs.",
    features: [
      "AI feature integration",
      "Python backend services",
      "Machine learning workflows",
      "API design and integration",
    ],
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Project-Based",
    description: "Fixed scope projects with defined deliverables and timeline.",
    ideal: "Well-defined projects with clear requirements",
  },
  {
    title: "Hourly Consulting",
    description: "Flexible hourly arrangement for ongoing support and development.",
    ideal: "Code reviews, technical consultation, bug fixes",
  },
  {
    title: "Retainer Agreement",
    description: "Monthly retainer for continuous development and support.",
    ideal: "Long-term partnerships and ongoing development",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Phase 1 – Planning & Initialization",
    description:
      "Define project goals, target audience, structure, navigation and content requirements.",
  },
  {
    number: "02",
    title: "Phase 2 – Development",
    description:
      "Begin coding the project while sharing regular updates with the client.",
  },
  {
    number: "03",
    title: "Phase 3 – Deployment & Launch",
    description:
      "Deploy websites to servers or publish apps to mobile app stores.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A simple landing page might take 1-2 weeks, while a complex web application could take 8-12 weeks. I'll provide a detailed timeline during our discovery call.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes! I regularly work with existing React/Next.js projects for feature additions, bug fixes, performance optimization, and refactoring. I can quickly get up to speed with your codebase.",
  },
  {
    question: "What's included in your development services?",
    answer:
      "Development services include code implementation, testing, documentation, and deployment support. I follow best practices for clean, maintainable code and provide regular updates throughout the project.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, I offer ongoing maintenance and support through monthly retainer agreements. This includes bug fixes, updates, performance monitoring, and feature enhancements.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "I'll need project requirements, any existing designs or wireframes, technical specifications, timeline expectations, and budget range. We'll refine these details during our discovery call.",
  },
];
