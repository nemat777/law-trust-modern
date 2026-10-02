import { createFileRoute } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { PracticeAreaPage } from "@/components/site-header";

export const Route = createFileRoute("/practice-areas/civil-litigation")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Civil Litigation Attorney | Gregory Law Offices" },
      { name: "description", content: "Civil litigation representation involving business, contract, real estate, and related disputes." },
    ],
  }),
});

function Page() {
  return <PracticeAreaPage
    icon={Scale}
    title="Civil Litigation"
    heroText="Focused representation when a dispute needs to be resolved."
    introTitle="Know your position before deciding your next move."
    introText="When a disagreement becomes a legal dispute, careful preparation and clear communication matter. Gregory Law Offices represents clients in a focused range of civil matters."
    matters={["Business and contract disputes","Real estate disputes","Property-related claims","Other civil litigation"]}
    ctaTitle="Have a dispute that needs attention?"
  />;
}
