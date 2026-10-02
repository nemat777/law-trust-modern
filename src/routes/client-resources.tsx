import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader, CTA } from "@/components/site-header";

export const Route = createFileRoute("/client-resources")({
  component: ClientResources,
  head: () => ({
    meta: [
      { title: "Client Resources | Gregory Law Offices" },
      { name: "description", content: "Contact and office information for clients and prospective clients of Gregory Law Offices in Park Ridge." },
    ],
  }),
});

function ClientResources() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased">
      <SiteHeader />
      <PageHero
        eyebrow="Resources"
        title="Useful information, all in one place."
        text="Find the office location and the easiest ways to get in touch with Gregory Law Offices."
      />

      <main>
        <section className="bg-[#f7f5f0]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Office information</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-[#172522] sm:text-4xl">Two easy ways to reach us.</h2>
              <p className="mt-4 text-base leading-7 text-[#63706b]">
                For questions about an existing matter or to discuss a new legal matter, contact the office directly.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <a href="tel:8476929900" className="group rounded-3xl bg-[#172522] p-8 text-white transition hover:-translate-y-1 hover:shadow-xl">
                <Phone className="h-7 w-7 text-[#d7b56d]" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#d7b56d]">Contact the office</p>
                <h2 className="mt-2 font-display text-3xl font-bold">Call (847) 692-9900</h2>
                <p className="mt-4 max-w-lg leading-7 text-white/65">For questions about an existing matter or to discuss a new legal matter, call the office directly.</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#d7b56d]">Call the office <ArrowUpRight className="h-4 w-4" /></span>
              </a>

              <a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=1410+Higgins+Road+Suite+204+Park+Ridge+IL+60068" className="group rounded-3xl bg-[#e9e0cd] p-8 transition hover:-translate-y-1 hover:bg-[#dfd1b4]">
                <MapPin className="h-7 w-7 text-[#9a6f2e]" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#80602b]">Visit the office</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-[#172522]">Park Ridge</h2>
                <p className="mt-4 leading-7 text-[#5f6965]">1410 Higgins Road, Suite 204<br />Park Ridge, IL 60068</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#8b642a]">Get directions <ArrowUpRight className="h-4 w-4" /></span>
              </a>
            </div>

            <div className="mt-12 grid gap-5 border-t border-[#172522]/10 pt-8 sm:grid-cols-3">
              {[
                ["Office hours", "Monday–Friday, 8:30 am–5:00 pm"],
                ["Phone", "(847) 692-9900"],
                ["Email", "tom@gregorylawoffices.com"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#63706b]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTA title="Need to get in touch?" />
      <SiteFooter />
    </div>
  );
}
