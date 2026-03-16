import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

const study = caseStudies["enterprise-management"];

export const metadata: Metadata = {
  title: `${study.title} Case Study - ${siteConfig.name}`,
  description: study.description,
};

export default function EnterpriseManagementCaseStudy() {
  return <CaseStudyPage study={study} />;
}
