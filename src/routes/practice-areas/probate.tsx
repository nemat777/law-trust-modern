import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/practice-areas/probate")({ component: Page });

function Page() {
  return <PracticeAreaPage
    icon={Landmark}
    title="Probate"
    heroText="Steady guidance when a family is settling an estate."
    introTitle="A clear path for families and fiduciaries."
    introText="Probate can bring unfamiliar paperwork, deadlines, and decisions at an already difficult time. We help executors, administrators, and beneficiaries understand the process."
    matters={["Executor and administrator guidance","Probate administration","Beneficiary matters","Estate-related disputes"]}
    ctaTitle="Need help navigating an estate?"
  />;
}
