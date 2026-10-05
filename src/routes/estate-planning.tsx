import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/estate-planning")({
  component: EstatePlanning,
  head: () => ({ meta: [
    { title: "Estate Planning Attorney Park Ridge | Gregory Law Offices" },
    { name: "description", content: "Estate planning counsel for wills, trusts, powers of attorney, and other planning documents." },
  ] }),
});

function EstatePlanning() {
  return <PracticeAreaPage
    icon={FileText}
    title="Estate planning built around your priorities."
    heroText="Thoughtful planning can make difficult future decisions clearer for you and the people who matter to you."
    introTitle="Plan ahead with clarity."
    introText="Estate planning is about more than documents. It is about putting your wishes into a structure that can be understood and carried out when it matters."
    matters={["Wills", "Trusts", "Powers of attorney", "Estate-planning documents", "Planning for family transitions", "Reviewing an existing plan"]}
    reasons={["You want to create or update a will, trust, or power of attorney.","A family, financial, or life change means an existing plan may no longer fit.","You want to understand how your planning documents work together before a future need arises."]}
    considerations={["How a will or trust fits your wishes for property, beneficiaries, and future administration.","The role of powers of attorney and other documents when someone cannot make decisions for themselves.","Family, financial, or other life changes that may call for a review of an existing plan.","Whether the overall plan is understandable and coordinated rather than simply a collection of separate documents."]}
    process={[
      { title: "Understand your priorities", text: "Discuss the people, property, concerns, and goals that should shape the plan." },
      { title: "Build or review the plan", text: "Work through the appropriate documents and how they fit together." },
      { title: "Leave with clarity", text: "Make sure you understand what the documents do and when they are intended to operate." },
    ]}
    ctaTitle="Ready to talk about an estate plan?"
    imageUrl="https://images.unsplash.com/photo-1758691031730-640885ad19e5?auto=format&fit=crop&fm=jpg&q=80&w=1800"
    imageAlt="Planning for the people and decisions ahead"
  />;
}