import { createFileRoute } from "@tanstack/react-router";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/business")({
  component: Business,
  head: () => ({ meta: [
    { title: "Business Law Attorney Park Ridge | Gregory Law Offices" },
    { name: "description", content: "Business law counsel for Illinois businesses, including formation, contracts, transactions, and commercial disputes." },
  ] }),
});

function Business() {
  return <PracticeAreaPage
    title="Business law with a practical perspective."
    heroText="Counsel for Illinois businesses that need clear advice around formation, contracts, transactions, and the decisions that shape a company."
    introTitle="Keep the legal side of the business moving."
    introText="Business matters often move quickly. The goal is to understand the commercial objective, identify the legal issues that matter, and give you a straightforward path forward."
    matters={["Entity formation and governance", "Contracts and agreements", "Business transactions", "Commercial disputes", "General business counsel", "Other business matters"]}
    reasons={["You are forming a new company or changing its ownership or structure.","A contract needs review before you sign or a business relationship changes.","A transaction, disagreement, or other business decision has legal consequences."]}
    considerations={["The right business structure and governing documents for the company and its owners.","How contracts allocate obligations, rights, risks, and responsibilities.","The legal pieces of a transaction and how they fit the broader business objective.","Whether a developing disagreement is best addressed through negotiation, documentation, or further legal action."]}
    process={[
      { title: "Understand the objective", text: "Start with what you are trying to accomplish and the practical circumstances surrounding the matter." },
      { title: "Identify the legal issues", text: "Review the relevant documents, relationships, obligations, and risks that could affect the decision." },
      { title: "Choose a path forward", text: "Translate the legal analysis into clear options and a practical next step." },
    ]}
    ctaTitle="Have a business matter to discuss?"
    imageUrl="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?auto=format&fit=crop&fm=jpg&q=80&w=1800"
    imageAlt="Business owners and counsel working through an agreement"
  />;
}