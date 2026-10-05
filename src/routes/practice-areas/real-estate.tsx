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
    introText="From a purchase or sale to a lease or dispute, Gregory Law Offices helps clients understand the legal details behind significant real estate decisions."
    matters={["Purchases and sales","Commercial and residential leases","Closings and transaction documents","Property disputes"]}
    reasons={["You are buying, selling, leasing, or otherwise changing an interest in property.","A closing, title issue, lease term, or transaction document raises a question you want reviewed.","A property disagreement is becoming difficult to resolve on your own."]}
    ctaTitle="Have a property matter to discuss?"
  />;
}
