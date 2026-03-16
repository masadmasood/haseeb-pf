import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services - ${siteConfig.name} | ${siteConfig.title}`,
  description:
    "Frontend development services including React, Next.js, UI implementation, performance work, and codebase cleanup.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
