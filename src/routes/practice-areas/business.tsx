import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/practice-areas/business")({ component: Page });

function Page() {
  return <PracticeAreaPage
    icon={BriefcaseBusiness}
    title="Business Law"
    heroText="Counsel for the business behind the work."
    introTitle="Keep the legal side of the business moving."
    introText="Business matters often move quickly. The goal is to understand the commercial objective, identify the legal issues that matter, and give you a straightforward path forward."
    matters={["Entity formation and governance","Business contracts and agreements","Acquisitions and transactions","General business counsel"]}
    ctaTitle="Have a business matter to discuss?"
  />;
}
