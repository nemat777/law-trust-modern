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
    ctaTitle="Need help navigating an estate?"
  />;
}