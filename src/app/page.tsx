"use client";

import { Code } from "lucide-react";
import {
  generatePersonSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects-data";

export default function HomePage() {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        {/* Hero Section */}
        <section
          className="relative pt-28 pb-20 md:pt-44 md:pb-28 w-full mx-auto px-6 h-auto min-h-180 flex flex-col items-center justify-center text-center z-10"
        >
          {/* Dark Animated Gradient Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Base dark gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,40,80,0.3),transparent)]"></div>

            {/* Animated gradient orbs */}
            <div className="absolute top-0 left-1/4 w-125 h-125 bg-[radial-gradient(circle,rgba(30,64,175,0.15)_0%,transparent_70%)] animate-[pulse_8s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-[radial-gradient(circle,rgba(15,23,42,0.4)_0%,transparent_70%)] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[radial-gradient(circle,rgba(30,58,138,0.1)_0%,transparent_60%)] animate-[pulse_12s_ease-in-out_infinite]"></div>

            {/* Subtle noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
          </div>

          <div className="mb-6 relative z-10">
            <span className="font-mono text-sm tracking-wider text-primary/80 uppercase">
              Full Stack Developer
            </span>
          </div>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="font-sans font-bold text-5xl md:text-7xl lg:text-[8rem] tracking-tighter text-foreground mb-10 leading-[0.95] relative z-10"
          >
            <span className="block">HASEEB</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-body text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16 relative z-10 font-light"
          >
            I specialize in building{" "}
            <span className="text-primary font-medium">
              cutting-edge applications
            </span>{" "}
            using modern technologies like Next.js and React Native.
          </motion.p>


        </section>

        {/* Stats Section */}
        <section className="relative z-10 bg-background border-y border-border/20">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-border/20">
              {[
                {
                  category: "EXPERIENCE",
                  value: "4+ Years",
                  desc: "Full stack development",
                },
                {
                  category: "PROJECTS",
                  value: "10+ Delivered",
                  desc: "Web & mobile apps",
                },
                {
                  category: "FOCUS",
                  value: "Web & Mobile",
                  desc: "Next.js & React Native",
                },
                {
                  category: "AVAILABILITY",
                  value: "Worldwide",
                  desc: "Remote ready"
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  className="flex flex-col px-8 py-8 text-left"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
                    {stat.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works */}
        <section className="py-32 bg-background relative z-10">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-center mb-32"
            >
              <h2 className="font-sans text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                Selected Works
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                A curated selection of projects demonstrating web development,
                mobile apps, and full stack engineering.
              </p>
            </motion.div>

            <div className="space-y-48">
              {projectsData.slice(0, 6).map((project) => (
                <motion.div
                  key={project.href}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Image Area - Full Width Style */}
                  <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden bg-secondary/30 border border-border/40 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-700 ease-out cursor-pointer flex items-center justify-center">
                    <Code className="h-16 w-16 text-muted-foreground group-hover:text-primary transition-colors duration-700" />
                  </div>

                  {/* Content Area - Qapital Card Style */}
                  <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
                    {/* Title */}
                    <h3 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-foreground">
                      {project.title}
                    </h3>

                    {/* Role */}
                    <p className="font-medium text-lg text-muted-foreground/80">
                      {project.category}
                    </p>

                    {/* Description */}
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-3 my-2">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-5 py-2 text-xs font-bold tracking-wider bg-secondary text-secondary-foreground rounded-full uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
