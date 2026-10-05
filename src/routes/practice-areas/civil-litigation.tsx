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
    introText="Not every disagreement needs to become a lawsuit, but once a legal dispute develops, the stakes can change quickly. Gregory Law Offices represents clients in a focused range of civil matters, helping them understand the facts, documents, claims, defenses, and practical choices involved."
    matters={["Business and contract disputes","Real estate disputes","Property-related claims","Commercial litigation","Pre-suit strategy and negotiations","Other civil litigation"]}
    reasons={["A dispute has escalated beyond an ordinary disagreement and legal action is being considered.","You received a demand, claim, or lawsuit and need to understand your position.","You are considering whether to pursue or defend a civil claim and want to evaluate the available options."]}
    considerations={["The facts and documents behind a dispute can be as important as the legal theory, which is why early review can help clarify the situation.","Some disputes may be addressed through negotiation or another resolution before litigation becomes necessary; others require a more formal response.","If a claim has already been made, deadlines, pleadings, correspondence, and supporting records can shape the available options.","A practical litigation strategy should account for both the legal position and the client's broader business, property, or personal objectives."]}
    process={[
      { title: "Assess the dispute", text: "We start with what happened, the relevant documents and communications, the parties involved, and what you want to accomplish." },
      { title: "Evaluate the options", text: "We consider the legal position and the practical choices, including whether negotiation, a demand, or litigation makes sense." },
      { title: "Take the next step", text: "If formal action is necessary, the focus shifts to preparing the matter carefully and advocating for your position." },
    ]}
    ctaTitle="Have a dispute that needs attention?"
  />;
}
