"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, FileText, Mail, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Resume", href: "/about", icon: FileText },
  { name: "The Right Fit", href: "/services", icon: Handshake },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop - Right Side Elegant Vertical Dock */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2 p-3 rounded-full bg-foreground/[0.03] backdrop-blur-2xl border border-white/[0.08]">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ease-out",
                "hover:scale-105",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06]"
              )}
              title={item.name}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={isActive ? 2 : 1.5} />

              {/* Animated Tooltip */}
              <span className="absolute right-full mr-3 flex items-center gap-2 px-3 py-2 rounded-full bg-foreground text-background text-xs font-medium opacity-0 scale-95 origin-right pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap">
                <span>{item.name}</span>
                <span className="w-1 h-1 rounded-full bg-background/50"></span>
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="font-sans text-lg font-bold hover:text-primary transition-colors">
              {siteConfig.name}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-foreground/5 border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-foreground/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/90 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <nav className="fixed top-14 left-0 right-0 bg-background/95 border-b border-border/40 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-2 gap-3">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex flex-col items-center gap-2 py-6 rounded-2xl transition-all duration-300 border border-transparent",
                        isActive
                          ? "bg-primary/5 border-primary/20 text-primary"
                          : "bg-surface hover:bg-surface-secondary text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Icon className="h-6 w-6" strokeWidth={isActive ? 2 : 1.5} />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
