import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/accessibility")({
  component: Accessibility,
  head: () => ({ meta: [
    { title: "Accessibility | Gregory Law Offices" },
    { name: "description", content: "Accessibility information for Gregory Law Offices." },
  ] }),
});

function Accessibility() {
  return <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased"><SiteHeader /><PageHero eyebrow="Legal" title="Accessibility" text="Gregory Law Offices is committed to making this website usable and accessible." /><main className="bg-white"><div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20 space-y-10">
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">Our approach</h2><p className="mt-4 text-base leading-8 text-[#63706b]">We aim to provide a website that can be used by people with different abilities and with common assistive technologies. We continue to review the site's structure, navigation, text, contrast, and responsive behavior as the site develops.</p></section>
    <section><h2 className="font-display text-3xl font-bold text-[#172522]">Need assistance?</h2><p className="mt-4 text-base leading-8 text-[#63706b]">If you encounter a barrier while using the website or need information in another format, please contact the office at <a className="font-semibold text-[#8b642a]" href="tel:8476929900">(847) 692-9900</a> or <a className="font-semibold text-[#8b642a]" href="mailto:tom@gregorylawoffices.com">tom@gregorylawoffices.com</a>.</p></section>
  </div></main><SiteFooter /></div>;
}
