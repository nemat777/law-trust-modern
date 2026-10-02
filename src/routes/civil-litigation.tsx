import { createFileRoute } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/civil-litigation")({
  component: CivilLitigation,
  head: () => ({ meta: [
    { title: "Civil Litigation Attorney Park Ridge | Gregory Law Offices" },
    { name: "description", content: "Focused civil litigation representation involving business, contract, real estate, and related disputes." },
  ] }),
});

function CivilLitigation() {
  return <PracticeAreaPage
    icon={Scale}
    title="Focused advocacy when a dispute needs to be resolved."
    heroText="Civil disputes can be expensive in time, attention, and uncertainty. The firm approaches litigation with a focus on the issues that matter."
    introTitle="Know your position before deciding your next move."
    introText="When a disagreement becomes a legal dispute, the facts, documents, deadlines, and available remedies all matter. The firm represents clients in civil matters involving business, contracts, real estate, and related disputes."
    matters={["Business disputes", "Contract disputes", "Real estate disputes", "Commercial litigation", "Pre-suit evaluation and strategy", "Other civil matters"]}
    ctaTitle="Have a dispute that needs attention?"
  />;
}