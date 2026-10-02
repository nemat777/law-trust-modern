import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({ meta: [
    { title: "Privacy Policy | Gregory Law Offices" },
    { name: "description", content: "Privacy information for the Gregory Law Offices website." },
  ] }),
});

function Privacy() {
  return <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased"><SiteHeader /><PageHero eyebrow="Legal" title="Privacy Policy" text="How Gregory Law Offices handles information provided through this website." /><main className="bg-white"><div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20 space-y-10">
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">Information you provide</h2><p className="mt-4 text-base leading-8 text-[#63706b]">If you contact the firm through this website, you may provide information such as your name, phone number, email address, and a description of your matter. Please do not submit highly sensitive or confidential information through a website form unless the firm has specifically instructed you to do so.</p></section>
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">How information is used</h2><p className="mt-4 text-base leading-8 text-[#63706b]">Information submitted through the website may be used to respond to an inquiry, communicate with you, and evaluate whether the firm may be able to assist. The website may also use ordinary technical information needed to operate and secure the site.</p></section>
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">No attorney-client relationship</h2><p className="mt-4 text-base leading-8 text-[#63706b]">Submitting information through this website does not create an attorney-client relationship. A representation begins only when the firm and client have agreed to the representation.</p></section>
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">Questions</h2><p className="mt-4 text-base leading-8 text-[#63706b]">Questions about this website or the firm's handling of information can be directed to <a className="font-semibold text-[#8b642a]" href="mailto:tom@gregorylawoffices.com">tom@gregorylawoffices.com</a>.</p></section>
    <Link to="/contact" className="inline-flex font-bold text-[#8b642a]">Contact the office →</Link>
  </div></main><SiteFooter /></div>;
}
