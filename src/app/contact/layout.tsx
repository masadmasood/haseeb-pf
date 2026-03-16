import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.name} | ${siteConfig.title}`,
  description:
    "Get in touch for frontend development projects, consulting, and product-focused React or Next.js work.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
