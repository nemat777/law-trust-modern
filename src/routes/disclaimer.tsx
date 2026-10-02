import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/disclaimer")({
  component: Disclaimer,
  head: () => ({ meta: [
    { title: "Website Disclaimer | Gregory Law Offices" },
    { name: "description", content: "Website disclaimer for Gregory Law Offices." },
  ] }),
});

function Disclaimer() {
  return <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased"><SiteHeader /><PageHero eyebrow="Legal" title="Website Disclaimer" text="Important information about using the Gregory Law Offices website." /><main className="bg-white"><div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20 space-y-10">
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">General information</h2><p className="mt-4 text-base leading-8 text-[#63706b]">The information on this website is provided for general informational purposes and is not legal advice. Laws and legal circumstances vary, and information that may be useful in one situation may not apply to another.</p></section>
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">No attorney-client relationship</h2><p className="mt-4 text-base leading-8 text-[#63706b]">Viewing this website, sending an email, submitting a form, or otherwise contacting the firm does not by itself create an attorney-client relationship. Do not send confidential information until a representation has been established.</p></section>
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">Past results and outcomes</h2><p className="mt-4 text-base leading-8 text-[#63706b]">Nothing on this website should be understood as a promise or guarantee of a particular result. Every legal matter depends on its own facts and circumstances.</p></section>
    <Link to="/contact" className="inline-flex font-bold text-[#8b642a]">Contact the office →</Link>
  </div></main><SiteFooter /></div>;
}
