import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness } from "lucide-react";
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
    icon={BriefcaseBusiness}
    title="Business law with a practical perspective."
    heroText="Counsel for Illinois businesses that need clear advice around formation, contracts, transactions, and the decisions that shape a company."
    introTitle="Keep the legal side of the business moving."
    introText="Business matters often move quickly. The goal is to understand the commercial objective, identify the legal issues that matter, and give you a straightforward path forward."
    matters={["Entity formation and governance", "Contracts and agreements", "Business transactions", "Commercial disputes", "General business counsel", "Other business matters"]}
    reasons={["You are forming a new company or changing its ownership or structure.","A contract needs review before you sign or a business relationship changes.","A transaction, disagreement, or other business decision has legal consequences."]}
    ctaTitle="Have a business matter to discuss?"
  />;
}