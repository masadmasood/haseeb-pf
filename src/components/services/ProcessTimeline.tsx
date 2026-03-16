"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProcessStep } from "@/lib/services-data";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const desktopPositions = [
  { left: "10%", top: "50%" },
  { left: "30%", top: "20%" },
  { left: "50%", top: "80%" },
  { left: "70%", top: "20%" },
  { left: "90%", top: "50%" },
];

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { strokeDasharray: 2000, strokeDashoffset: 2000 },
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            },
          },
        );
      }

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: index % 2 === 0 ? 40 : -40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-10 md:py-20">
      <div className="relative flex flex-col space-y-8 md:hidden">
        <div className="absolute bottom-4 left-6 top-4 w-px bg-border">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>

        {steps.map((step, index) => (
          <div key={step.number} className="relative pl-16">
            <div className="absolute left-[1.12rem] top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-background shadow-[0_0_10px_hsl(var(--primary)/0.25)]">
              <span className="text-xs font-mono font-bold text-primary">
                {index + 1}
              </span>
            </div>
            <div className="pr-6 pt-1">
              <h3 className="mb-3 text-xl font-medium tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto hidden h-[500px] w-full max-w-[1200px] md:block">
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none text-primary/30"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
          <path
            ref={lineRef}
            d="M0,250 C50,250 50,250 100,250 C150,250 200,100 300,100 C400,100 400,400 500,400 C600,400 600,100 700,100 C800,100 850,250 900,250 C950,250 950,250 1000,250"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {steps.map((step, index) => {
          const position = desktopPositions[index];
          if (!position) return null;

          const cardPlacement =
            position.top === "20%"
              ? "bottom-12 -translate-x-[45%]"
              : "top-12 -translate-x-[45%]";

          return (
            <div
              key={step.number}
              className="absolute -translate-x-1/2 -translate-y-1/2 transform"
              style={{ left: position.left, top: position.top }}
            >
              <div className="group relative z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-4 border-primary bg-background shadow-[0_0_20px_hsl(var(--primary)/0.45)] transition-transform duration-300 hover:scale-125">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              </div>

              <div
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                className={cn("absolute w-72", cardPlacement)}
              >
                <div className="p-6 text-center">
                  <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-4 select-none font-mono text-5xl font-bold text-primary/8">
                    {step.number}
                  </div>
                  <h3 className="mb-3 font-sans text-xl font-medium tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
