"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "design", label: "UI/UX Design" },
  { value: "consulting", label: "Consultation" },
];

export default function ContactPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<{ value: string; label: string } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-primary/20">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-32 md:pb-56 container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="font-sans font-medium text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-none mb-8 text-foreground mix-blend-difference"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ready to elevate your digital presence? Get in touch to discuss your next project.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="relative z-10 pb-24 md:pb-32"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Left Column */}
            <div className="lg:sticky lg:top-32 h-full flex flex-col justify-between py-8">
              <div className="space-y-8">
                <h3 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]">
                  Let&apos;s start a <br />
                  <span className="text-muted-foreground/50">conversation.</span>
                </h3>
                <p className="text-xl text-muted-foreground/60 font-light max-w-md leading-relaxed">
                  I&apos;m currently open for new projects. If you have an idea that needs a premium touch, I&apos;d love to hear about it.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative pt-4 lg:pl-12">
              <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>

                {/* Name */}
                <div className="group relative">
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4 transition-colors group-focus-within:text-primary">
                    01. What&apos;s your name?
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      autoComplete="name"
                      className="w-full bg-transparent border-none p-0 py-4 text-2xl md:text-5xl font-light text-foreground placeholder:text-muted-foreground/10 focus:ring-0 focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-focus-within:w-full" />
                  </div>
                </div>

                {/* Email */}
                <div className="group relative">
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4 transition-colors group-focus-within:text-primary">
                    02. What&apos;s your email?
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      autoComplete="email"
                      className="w-full bg-transparent border-none p-0 py-4 text-2xl md:text-5xl font-light text-foreground placeholder:text-muted-foreground/10 focus:ring-0 focus:outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-focus-within:w-full" />
                  </div>
                </div>

                {/* Custom Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4">
                    03. What do you need?
                  </label>
                  <div className="relative">

                    {/* Trigger */}
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((o) => !o)}
                      className="w-full flex items-center justify-between py-4 text-left focus:outline-none group/trigger"
                    >
                      <span className={`text-2xl md:text-5xl font-light transition-colors duration-300 ${selected ? "text-foreground" : "text-muted-foreground/20"}`}>
                        {selected ? selected.label : "Select a service..."}
                      </span>
                      <motion.div
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="text-muted-foreground/40 shrink-0 ml-4"
                      >
                        <ChevronDown className="w-6 h-6" />
                      </motion.div>
                    </button>

                    {/* Bottom border */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/10" />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-primary"
                      animate={{ width: dropdownOpen ? "100%" : "0%" }}
                      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                    />

                    {/* Options panel */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                          style={{ originY: 0 }}
                          className="absolute top-full left-0 w-full z-50 mt-2 bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl max-h-72 overflow-y-auto"
                        >
                          {services.map((service, i) => (
                            <motion.button
                              key={service.value}
                              type="button"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                              onClick={() => {
                                setSelected(service);
                                setDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-200 group/option
                                ${selected?.value === service.value
                                  ? "bg-foreground/5 text-foreground"
                                  : "text-muted-foreground/60 hover:text-foreground hover:bg-foreground/5"
                                }
                                ${i !== services.length - 1 ? "border-b border-foreground/5" : ""}
                              `}
                            >
                              <span className="text-lg md:text-xl font-light tracking-tight">{service.label}</span>
                              <ArrowRight className={`w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/option:opacity-100 group-hover/option:translate-x-0 ${selected?.value === service.value ? "opacity-100 translate-x-0 text-primary" : ""}`} />
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Details */}
                <div className="group relative">
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4 transition-colors group-focus-within:text-primary">
                    04. Project Details
                  </label>
                  <div className="relative">
                    <textarea
                      className="w-full bg-transparent border-none p-0 py-4 text-2xl md:text-3xl font-light text-foreground placeholder:text-muted-foreground/10 focus:ring-0 focus:outline-none resize-none min-h-30 leading-normal"
                      placeholder="Tell me about your timeline, budget, and goals..."
                    />
                    <div className="absolute bottom-6 left-0 w-full h-px bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
                    <div className="absolute bottom-6 left-0 w-0 h-px bg-primary transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-focus-within:w-full" />
                  </div>
                </div>

                <div className="pt-8 flex justify-end">
                  <Button size="lg" className="group/btn relative overflow-hidden rounded-full h-16 md:h-24 px-10 md:px-16 text-base md:text-xl bg-foreground text-background hover:bg-foreground transition-all duration-500">
                    <span className="relative z-10 flex items-center gap-3 md:gap-4 group-hover/btn:gap-4 md:group-hover/btn:gap-6 transition-all duration-500">
                      Send Inquiry <ArrowRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                    </span>
                  </Button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </motion.section>

    </div>
  );
}
