import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/probate")({
  component: Probate,
  head: () => ({ meta: [
    { title: "Probate Attorney Park Ridge | Gregory Law Offices" },
    { name: "description", content: "Probate representation for executors, administrators, beneficiaries, and families in Illinois." },
  ] }),
});

function Probate() {
  return <PracticeAreaPage
    icon={Landmark}
    title="Steady guidance through probate."
    heroText="Probate can bring legal, financial, and family questions at the same time. Clear guidance can make the process easier to understand."
    introTitle="A clear path for families and fiduciaries."
    introText="Gregory Law Offices assists executors, administrators, beneficiaries, and families with the legal work involved in administering an estate and addressing questions that arise along the way."
    matters={["Estate administration", "Executor representation", "Administrator representation", "Beneficiary questions", "Estate-related disputes", "Other probate matters"]}
    reasons={["You have been named executor or administrator and need help understanding the process.","You are a beneficiary with questions about an estate or its administration.","A disagreement involving an estate needs to be evaluated and addressed."]}
    considerations={["The responsibilities and practical decisions that come with serving as an executor or administrator.","Questions beneficiaries may have about the estate, its administration, or the distribution process.","Coordinating estate assets, documents, claims, and other matters that need attention during administration.","Disagreements that may require clarification, negotiation, or a more formal legal response."]}
    process={[
      { title: "Understand the estate", text: "Review the circumstances, documents, assets, beneficiaries, and role of the person seeking guidance." },
      { title: "Address administration", text: "Work through the legal and practical issues that need to be handled as the estate moves forward." },
      { title: "Resolve outstanding issues", text: "Address beneficiary questions, disputes, and remaining matters so the administration can proceed." },
    ]}
    ctaTitle="Need help navigating an estate?"
  />;
}