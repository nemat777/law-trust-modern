import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/practice-areas/probate")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Probate Attorney | Gregory Law Offices" },
      { name: "description", content: "Probate guidance for executors, administrators, beneficiaries, and families in Illinois." },
    ],
  }),
});

function Page() {
  return <PracticeAreaPage
    icon={Landmark}
    title="Probate"
    heroText="Steady guidance when a family is settling an estate."
    introTitle="A clear path for families and fiduciaries."
    introText="Probate can bring unfamiliar paperwork, deadlines, court requirements, and decisions at an already difficult time. Gregory Law Offices helps executors, administrators, beneficiaries, and families understand what is happening, what needs attention, and how to move the estate forward."
    matters={["Executor and administrator guidance","Probate administration","Estate and asset administration","Beneficiary matters","Estate-related disputes","Other probate matters"]}
    reasons={["You have been named executor or administrator and need help understanding the process.","You are a beneficiary with questions about an estate or its administration.","A disagreement involving an estate needs to be evaluated and addressed."]}
    considerations={["The person responsible for an estate may have a range of administrative responsibilities, documents, deadlines, and decisions to manage.","Beneficiaries may have questions about the estate, the process, or information they have received.","Estate assets can require coordination with financial institutions, property records, or other parties before administration is complete.","When family members disagree, understanding the governing documents and the underlying facts is often an important first step."]}
    process={[
      { title: "Understand the estate", text: "We review the circumstances, available documents, the people involved, and the questions that need to be answered." },
      { title: "Address the administration", text: "We help identify the legal and practical steps involved in moving the estate through the process." },
      { title: "Resolve outstanding issues", text: "The focus remains on completing the necessary work and addressing questions or disputes as they arise." },
    ]}
    ctaTitle="Need help navigating an estate?"
  />;
}
