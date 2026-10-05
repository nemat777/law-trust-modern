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
    introText="Probate can bring unfamiliar paperwork, deadlines, and decisions at an already difficult time. We help executors, administrators, and beneficiaries understand the process."
    matters={["Executor and administrator guidance","Probate administration","Beneficiary matters","Estate-related disputes"]}
    reasons={["You have been named executor or administrator and need help understanding the process.","You are a beneficiary with questions about an estate or its administration.","A disagreement involving an estate needs to be evaluated and addressed."]}
    ctaTitle="Need help navigating an estate?"
  />;
}
