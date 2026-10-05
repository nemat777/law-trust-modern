import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/practice-areas/estate-planning")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Estate Planning Attorney | Gregory Law Offices" },
      { name: "description", content: "Estate planning counsel for wills, trusts, powers of attorney, and related planning in Illinois." },
    ],
  }),
});

function Page() {
  return <PracticeAreaPage
    icon={FileText}
    title="Estate Planning"
    heroText="Plan ahead with clarity and intention."
    introTitle="Plan ahead with clarity."
    introText="Estate planning is about more than documents. It is about putting a thoughtful plan in place for the people and priorities that matter to you."
    matters={["Wills and trusts","Powers of attorney","Estate and asset planning","Updating an existing plan"]}
    reasons={["You want to create or update a will, trust, or power of attorney.","A family, financial, or life change means an existing plan may no longer fit.","You want to understand how your planning documents work together before a future need arises."]}
    ctaTitle="Ready to talk about an estate plan?"
  />;
}
