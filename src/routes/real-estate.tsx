import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/real-estate")({
  component: RealEstate,
  head: () => ({ meta: [
    { title: "Real Estate Attorney Park Ridge | Gregory Law Offices" },
    { name: "description", content: "Practical real estate legal guidance for purchases, sales, leases, closings, ownership questions, and disputes." },
  ] }),
});

function RealEstate() {
  return <PracticeAreaPage
    icon={Building2}
    title="Real estate counsel that keeps the details in focus."
    heroText="Practical legal guidance for property transactions, ownership questions, leases, closings, and disputes."
    introTitle="Property decisions deserve careful review."
    introText="Real estate documents can carry long-term consequences. Gregory Law Offices approaches transactions and disputes with attention to the documents, deadlines, practical objectives, and issues that can affect your position."
    matters={["Purchases and sales", "Leases and landlord-tenant matters", "Closings and transaction documents", "Real estate disputes", "Ownership and title questions", "Other property-related matters"]}
    reasons={["You are buying, selling, leasing, or otherwise changing an interest in property.","A closing, title issue, lease term, or document raises a question you want reviewed.","A property disagreement is becoming difficult to resolve on your own."]}
    considerations={["Purchase or sale terms, contingencies, title issues, and the documents required to move the transaction forward.","Lease provisions that affect responsibilities, remedies, timing, and the practical relationship between the parties.","Ownership and title questions that may affect how property is held, transferred, or used.","The documents, communications, and history surrounding a property dispute."]}
    process={[
      { title: "Review the property matter", text: "Understand the transaction, ownership issue, lease, or dispute and what you need to accomplish." },
      { title: "Work through the documents", text: "Identify important provisions, obligations, deadlines, and issues that may affect your position." },
      { title: "Move toward closing or resolution", text: "Use the legal analysis to address open issues and determine the most practical next step." },
    ]}
    ctaTitle="Have a property matter to discuss?"
  />;
}