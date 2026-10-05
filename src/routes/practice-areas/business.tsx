import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/practice-areas/business")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Business Law | Gregory Law Offices" },
      { name: "description", content: "Business law counsel for formation, contracts, transactions, and ongoing business matters in Illinois." },
    ],
  }),
});

function Page() {
  return <PracticeAreaPage
    icon={BriefcaseBusiness}
    title="Business Law"
    heroText="Counsel for the business behind the work."
    introTitle="Legal guidance that keeps business decisions moving."
    introText="Business owners often need legal advice at moments when a decision cannot wait: forming a company, signing an important agreement, changing ownership, entering a transaction, or dealing with a dispute. The goal is to understand what you are trying to accomplish and help you address the legal issues that stand between the current situation and the next step."
    matters={["Entity formation and governance","Business contracts and agreements","Acquisitions and transactions","Commercial and ownership matters","Ongoing business counsel","Business disputes"]}
    reasons={["You are forming a company, changing its ownership, or reviewing how the business is structured.","A contract, transaction, or business relationship needs legal review before you move forward.","A disagreement or business decision has legal consequences and you want to understand your options."]}
    considerations={["The right structure and governing documents can affect how ownership, decision-making, and future changes are handled.","Contracts should be reviewed in the context of the actual business relationship, not just as isolated documents.","Transactions often involve several moving pieces, including documents, timing, obligations, and the consequences of what happens next.","When a disagreement develops, early evaluation can help clarify the practical choices before the dispute becomes more difficult or expensive."]}
    process={[
      { title: "Understand the objective", text: "We start with what the business is trying to accomplish, the relevant relationships, and the documents already in place." },
      { title: "Identify the legal issues", text: "We work through the provisions, obligations, risks, and decisions that are most important to the matter." },
      { title: "Choose a path forward", text: "You receive practical guidance aimed at helping you make the next business decision with greater clarity." },
    ]}
    ctaTitle="Have a business matter to discuss?"
  />;
}
