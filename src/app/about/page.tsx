"use client";

import { Download, ArrowUpRight, Monitor, Palette, Smartphone, Server, Database, Cpu, Wrench, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// --- Data ---

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    skills: ["Tailwind CSS", "Framer Motion", "Sass", "shadcn/ui"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "Python"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["Firebase", "MongoDB", "Supabase", "Vercel"],
  },
  {
    title: "AI & Integrations",
    icon: Cpu,
    skills: ["OpenAI API", "AI Integrations", "Webhooks", "Third-party APIs"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance — Remote",
    period: "2023 — Present",
    description:
      "Delivering web and mobile applications for international clients. End-to-end ownership from UI design to deployment.",
    achievements: [
      "Built and shipped production web apps using Next.js, React, and Tailwind CSS",
      "Developed cross-platform mobile apps with React Native for iOS and Android",
      "Integrated AI APIs and third-party services into client products",
    ],
    technologies: ["Next.js", "React Native", "TypeScript", "Node.js"],
  },
  {
    role: "Mobile App Developer",
    company: "Upwork — Freelance",
    period: "2022 — 2023",
    description:
      "Worked with international clients on Upwork to build and maintain mobile applications.",
    achievements: [
      "Built cross-platform apps with React Native delivered to App Store and Google Play",
      "Collaborated with clients across different time zones and delivered on schedule",
      "Maintained codebases and shipped feature updates post-launch",
    ],
    technologies: ["React Native", "JavaScript", "Firebase", "Expo"],
  },
  {
    role: "Software Engineering Intern",
    company: "Software Engineering Internship",
    period: "2021",
    description:
      "Gained hands-on experience building real product features during internship.",
    achievements: [
      "Implemented UI features and improved responsiveness across multiple screens",
      "Worked within a team environment following engineering standards",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
];

const education = [
  {
    degree: "Diploma of Associate Engineering — Information Technology",
    institution: "DAE in IT",
    period: "2020 — 2022",
    description:
      "Studied software development, networking, database systems, and engineering fundamentals. Built a strong technical foundation that directly supports full-stack and mobile development work.",
    highlights: ["Software Development", "Database Systems", "Networking", "Engineering Fundamentals"],
  },
  {
    degree: "Information Technology",
    institution: "IT Program",
    period: "Completed",
    description:
      "Core studies in IT covering programming, systems, and applied technology. Complementary to the DAE program with a focus on practical software and systems skills.",
    highlights: ["Programming", "Systems", "Applied Technology"],
  },
];

// --- Components ---

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const sections = document.querySelectorAll(".resume-section");
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => {
      (section as HTMLElement).style.opacity = "0";
      (section as HTMLElement).style.transform = "translateY(40px)";
      (section as HTMLElement).style.transition =
        "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)";
      animObserver.observe(section);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      animObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full overflow-x-hidden bg-background selection:bg-primary/20 font-sans"
    >
      {/* Background Decor — clipped so it never causes overflow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[min(800px,100vw)] h-[min(800px,100vw)] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[min(600px,80vw)] h-[min(600px,80vw)] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 xl:gap-20">

          {/* Sticky Sidebar (Desktop) */}
          <aside className="hidden lg:flex flex-col py-24 h-screen sticky top-0 justify-between">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-linear-to-b from-surface/8 to-transparent">
                <h1 className="text-4xl font-bold tracking-tight mb-1 text-foreground">
                  About Me
                </h1>
                <p className="text-muted-foreground">Professional overview</p>
              </div>

              <nav className="flex flex-col w-full space-y-3 mt-6">
                {[
                  { label: "Introduction", id: "introduction" },
                  { label: "Experience", id: "experience" },
                  { label: "Skills", id: "skills" },
                  { label: "Education", id: "education" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "group flex items-center justify-between py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 w-full text-left",
                      activeSection === item.id
                        ? "bg-primary/10 text-primary shadow-md"
                        : "text-muted-foreground hover:bg-surface-secondary/20 hover:text-foreground",
                    )}
                  >
                    <span className="tracking-widest uppercase">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <Button
              asChild
              className="w-full rounded-full bg-linear-to-r from-primary to-primary/70 text-background shadow-lg py-4"
              size="lg"
            >
              <Link href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Link>
            </Button>
          </aside>

          {/* Mobile Header */}
          <div className="lg:hidden pt-32 pb-8 border-b border-border/40">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Full Stack Developer
            </p>
            <Button
              asChild
              className="rounded-full w-full sm:w-auto shadow-md"
              size="lg"
            >
              <Link href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Link>
            </Button>
          </div>

          {/* Main Content */}
          <main className="py-12 lg:py-24 space-y-28 min-w-0">

            {/* ── Introduction ── */}
            <section id="introduction" className="resume-section scroll-mt-32">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">

                {/* Text */}
                <div className="space-y-10">
                  <div className="space-y-5">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]">
                      Developer. <br />
                      <span className="text-muted-foreground/40">Builder.</span> <br />
                      <span className="text-primary">Problem Solver.</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
                      I build accessible, pixel-perfect, and performant web and
                      mobile experiences that bridge the gap between design and
                      technology.
                    </p>
                  </div>

                  <p className="font-light leading-relaxed text-muted-foreground/80 text-base sm:text-lg">
                    With{" "}
                    <span className="text-foreground font-medium">
                      4+ years of hands-on experience
                    </span>
                    , I specialize in the React ecosystem — building scalable
                    web apps and cross-platform mobile apps. I work with
                    clients worldwide and take projects from idea to shipped
                    product.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/40">
                    <div>
                      <span className="block text-4xl font-bold text-foreground mb-1">
                        10+
                      </span>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
                        Projects Delivered
                      </span>
                    </div>
                    <div>
                      <span className="block text-4xl font-bold text-foreground mb-1">
                        4+
                      </span>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
                        Years Experience
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual card */}
                <div className="relative min-h-80 rounded-3xl overflow-hidden bg-surface-secondary/30 border border-white/5 group">
                  <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-blue-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm relative z-10">
                        <Code2 className="h-16 w-16 text-white/60" />
                      </div>
                      <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                      <div className="absolute -inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                      <p className="text-xs font-mono uppercase tracking-widest text-white/70">
                        Open to new opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Experience ── */}
            <section id="experience" className="resume-section scroll-mt-32">
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase shrink-0">
                  Career History
                </h2>
                <div className="h-px bg-border flex-1 max-w-50" />
              </div>

              <div className="relative border-l border-primary/10 ml-3 md:ml-0 space-y-20">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-16 group">
                    <div className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-500 ring-4 ring-background" />
                    <div className="absolute -left-px top-2 h-full w-0.5 bg-linear-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-10 items-start">
                      <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider py-1">
                        {exp.period}
                      </span>

                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                        <div className="text-primary text-base font-medium mb-6">
                          {exp.role}
                        </div>

                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        <ul className="space-y-3 mb-6">
                          {exp.achievements.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 rounded-full bg-surface-secondary border border-border/50 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Skills ── */}
            <section id="skills" className="resume-section scroll-mt-32">
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase shrink-0">
                  Technical Skills
                </h2>
                <div className="h-px bg-border flex-1 max-w-50" />
              </div>

              <div className="space-y-10">
                {skillCategories.map((cat, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-4">
                      <cat.icon className="h-3.5 w-3.5 text-primary/60" />
                      <h3 className="text-xs font-mono text-primary/60 uppercase tracking-widest">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm font-medium px-4 py-2 rounded-full border border-border/60 bg-surface/40 text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Education ── */}
            <section id="education" className="resume-section scroll-mt-32">
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase shrink-0">
                  Education
                </h2>
                <div className="h-px bg-border flex-1 max-w-50" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white/2 border border-white/5 hover:border-primary/20 p-8 rounded-2xl transition-all duration-500 hover:bg-white/4"
                  >
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-base text-muted-foreground font-light mt-0.5">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="font-mono text-sm text-primary tracking-widest uppercase shrink-0">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground/70 leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-primary/30 transition-colors duration-500">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {edu.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/5 rounded text-muted-foreground group-hover:text-foreground group-hover:border-white/10 transition-all duration-500"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
