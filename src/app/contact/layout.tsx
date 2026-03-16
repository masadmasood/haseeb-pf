import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.name} | ${siteConfig.title}`,
  description:
    "Get in touch for full stack web development, React Native mobile apps, and AI-powered application projects.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
