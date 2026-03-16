"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  label: string;
  title: string;
  description?: string;
}

export function HeroSection({ label, title, description }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-20 md:pt-44 md:pb-28 w-full mx-auto px-6 h-auto min-h-[480px] flex flex-col items-center justify-center text-center z-10">
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
          {label}
        </span>
      </div>

      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="font-sans font-bold text-5xl md:text-7xl lg:text-[8rem] tracking-tighter text-foreground mb-10 leading-[0.95] relative z-10"
      >
        <span className="block">{title}</span>
      </motion.h1>

      {description && (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-10 font-light"
        >
          {description}
        </motion.p>
      )}
    </section>
  );
}
