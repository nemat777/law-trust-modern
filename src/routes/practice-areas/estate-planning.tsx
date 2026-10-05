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
    introText="Estate planning is about more than preparing a set of documents. It is about making thoughtful decisions about your property, your family, and who should be able to act for you when you cannot. Gregory Law Offices helps clients create, review, and update plans that reflect their circumstances and priorities."
    matters={["Wills and trusts","Powers of attorney","Estate and asset planning","Beneficiary and distribution planning","Planning for family changes","Updating an existing plan"]}
    reasons={["You want to create or update a will, trust, or power of attorney.","A family, financial, or life change means an existing plan may no longer fit.","You want to understand how your planning documents work together before a future need arises."]}
    considerations={["A will or trust should reflect the people and property involved, as well as the decisions you want made if circumstances change.","Powers of attorney address important decisions during life and should be considered as part of the broader plan rather than in isolation.","Marriage, divorce, children, changes in assets, business ownership, or other life events can be reasons to revisit an existing plan.","A useful estate plan is one you understand. The documents should make sense to the people who may eventually need to rely on them."]}
    process={[
      { title: "Understand your priorities", text: "We discuss your family, assets, concerns, and the decisions you want the plan to address." },
      { title: "Build or review the plan", text: "The relevant documents are considered together so the plan reflects the choices you actually want to make." },
      { title: "Leave with clarity", text: "The goal is for you to understand what the documents do, where they fit, and when they may need another look." },
    ]}
    ctaTitle="Ready to talk about an estate plan?"
  />;
}
