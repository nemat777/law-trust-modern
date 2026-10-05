import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/practice-areas/real-estate")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Real Estate Attorney | Gregory Law Offices" },
      { name: "description", content: "Real estate counsel for purchases, sales, leases, closings, and property disputes in Illinois." },
    ],
  }),
});

function Page() {
  return <PracticeAreaPage
    icon={Building2}
    title="Real Estate"
    heroText="Practical counsel for property decisions."
    introTitle="Property decisions deserve careful review."
    introText="Real estate matters can turn on a document, a deadline, a title issue, a lease provision, or a detail that was easy to overlook. Gregory Law Offices helps clients work through the legal side of purchases, sales, leases, closings, ownership questions, and property disputes with attention to both the immediate transaction and the bigger picture."
    matters={["Purchases and sales","Commercial and residential leases","Closings and transaction documents","Title and ownership matters","Property disputes","Other real estate matters"]}
    reasons={["You are buying, selling, leasing, or otherwise changing an interest in property.","A closing, title issue, lease term, or transaction document raises a question you want reviewed.","A property disagreement is becoming difficult to resolve on your own."]}
    considerations={["A purchase or sale may involve contract terms, contingencies, closing documents, title questions, and other details that should be understood before signing.","Lease provisions can shape responsibilities, costs, use of the property, renewal rights, and what happens when circumstances change.","Ownership and title questions can affect who has authority to act and how a property interest can be transferred or protected.","When a property dispute develops, the relevant agreements and records can be important to understanding the available options."]}
    process={[
      { title: "Review the property matter", text: "We begin with the transaction, property, agreement, or dispute and identify the facts that drive the legal questions." },
      { title: "Work through the documents", text: "We focus on the provisions, obligations, title or ownership issues, and practical consequences that matter most." },
      { title: "Move toward closing or resolution", text: "The aim is a clear understanding of what needs to happen next and what choices are available." },
    ]}
    ctaTitle="Have a property matter to discuss?"
  />;
}
