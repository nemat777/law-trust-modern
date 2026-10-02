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
    ctaTitle="Ready to talk about an estate plan?"
  />;
}