import { createFileRoute } from "@tanstack/react-router";
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
    title="Focused advocacy when a dispute needs to be resolved."
    heroText="Civil disputes can be expensive in time, attention, and uncertainty. The firm approaches litigation with a focus on the issues that matter."
    introTitle="Know your position before deciding your next move."
    introText="When a disagreement becomes a legal dispute, the facts, documents, deadlines, and available remedies all matter. The firm represents clients in civil matters involving business, contracts, real estate, and related disputes."
    matters={["Business disputes", "Contract disputes", "Real estate disputes", "Commercial litigation", "Pre-suit evaluation and strategy", "Other civil matters"]}
    reasons={["A dispute has escalated beyond an ordinary disagreement and legal action is being considered.","You received a demand, claim, or lawsuit and need to understand your position.","You are considering whether to pursue or defend a civil claim and want to evaluate the available options."]}
    considerations={["The facts, documents, communications, and timeline that shape the dispute.","Whether negotiation, pre-suit action, or litigation best fits the situation and your objectives.","Deadlines, pleadings, procedural requirements, and the evidence needed to support your position.","The broader business, property, financial, or personal objective behind the dispute."]}
    process={[
      { title: "Assess the dispute", text: "Understand what happened, what is documented, and what outcome you are trying to achieve." },
      { title: "Evaluate the options", text: "Consider the legal position, available remedies, practical risks, and whether the matter may be resolved without litigation." },
      { title: "Take the next step", text: "Move forward with a defined strategy, whether that means negotiation, formal action, or continued evaluation." },
    ]}
    ctaTitle="Have a dispute that needs attention?"
    imageUrl="https://plus.unsplash.com/premium_photo-1661333952707-38323a7e73eb?auto=format&fit=crop&fm=jpg&q=80&w=1800"
    imageAlt="Strategy before escalation"
  />;
}