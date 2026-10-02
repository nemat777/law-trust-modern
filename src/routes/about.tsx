import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import attorneyPortrait from "@/assets/attorney-portrait.jpg";
import { PageHero, SiteFooter, SiteHeader, CTA } from "@/components/site-header";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Tom Gregory | Gregory Law Offices" },
      { name: "description", content: "Learn about Tom P. Gregory and Gregory Law Offices' approach to direct, practical legal counsel." },
    ],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased">
      <SiteHeader />
      <PageHero
        eyebrow="About the firm"
        title="Experienced counsel. Straightforward advice."
        text="Gregory Law Offices is built around direct communication, careful preparation, and personal attention to the matters entrusted to the firm."
      />

      <main>
        <section className="bg-[#f7f5f0]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 lg:py-24">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-[#b48a45]/10 blur-2xl" />
              <img
                src={attorneyPortrait}
                alt="Attorney Tom P. Gregory"
                className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top shadow-2xl"
                width={1024}
                height={1280}
              />
            </div>

            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Tom P. Gregory, Esq.</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-[#172522] sm:text-5xl">
                A direct relationship with your attorney.
              </h2>
              <p className="mt-6 text-xl leading-8 text-[#3e4b46]">
                You should know who is handling your matter, understand the advice you are receiving, and have a clear sense of what comes next.
              </p>
              <p className="mt-5 text-base leading-7 text-[#68736f]">
                A John Marshall Law School graduate with more than 21 years of legal experience, Tom represents Illinois businesses, property owners, and families. His experience includes matters at the Circuit Court, Appellate Court, and Illinois Supreme Court levels.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#172522]/10 bg-white p-4"><p className="font-display text-2xl font-bold text-[#9a6f2e]">21+</p><p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#69736f]">Years of legal experience</p></div>
                <div className="rounded-2xl border border-[#172522]/10 bg-white p-4"><p className="font-display text-2xl font-bold text-[#9a6f2e]">3</p><p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#69736f]">Illinois court levels</p></div>
                <div className="rounded-2xl border border-[#172522]/10 bg-white p-4"><p className="font-display text-2xl font-bold text-[#9a6f2e]">JMLS</p><p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#69736f]">Legal education</p></div>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#8b642a] hover:text-[#b48a45]">
                Talk about your matter <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-[#172522]/10 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Background & experience</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-[#172522] sm:text-4xl">
                A legal practice grounded in experience and personal service.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#63706b]">
                Tom's practice is centered on the kinds of legal decisions that can have lasting consequences for a business, a property, an estate, or a dispute. With more than two decades in practice, he brings experience across transactional, planning, probate, and civil matters while keeping the focus on the particular circumstances of each client.
              </p>
              <p className="mt-5 text-base leading-7 text-[#63706b]">
                His experience includes matters before the Illinois Circuit Courts, Appellate Court, and Illinois Supreme Court. That range of court experience gives the firm a perspective that extends from early evaluation and preparation through active litigation when a dispute requires it.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-[#f7f5f0] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">Practice focus</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-[#172522]">A focused range of legal matters.</h3>
                <p className="mt-3 text-sm leading-6 text-[#68736f]">
                  The firm advises clients in business law, real estate, estate planning, probate, and civil litigation. Those areas often overlap, particularly when a business, property, family, or estate issue develops into a larger legal question.
                </p>
              </div>
              <div className="rounded-3xl bg-[#172522] p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d7b56d]">Education</p>
                <h3 className="mt-3 font-display text-2xl font-bold">John Marshall Law School</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Tom is a graduate of John Marshall Law School. His legal education is the foundation for a practice that combines careful legal analysis with practical guidance for clients facing real-world decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f5f0]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Working with Tom</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-[#172522] sm:text-4xl">
                Know where your matter stands.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#63706b]">
                A legal matter can become harder to manage when the next step is unclear. The firm's role is to help clients understand the legal issue, identify the decisions that need to be made, and move the matter forward with a clear understanding of what is involved.
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="border-t border-[#172522]/10 pt-5">
                <span className="font-display text-sm font-bold text-[#b48a45]">01</span>
                <h3 className="mt-3 font-display text-xl font-bold text-[#172522]">Understand the issue</h3>
                <p className="mt-3 text-sm leading-6 text-[#63706b]">Start with the facts, documents, objectives, and legal questions that actually shape the matter.</p>
              </div>
              <div className="border-t border-[#172522]/10 pt-5">
                <span className="font-display text-sm font-bold text-[#b48a45]">02</span>
                <h3 className="mt-3 font-display text-xl font-bold text-[#172522]">Evaluate the options</h3>
                <p className="mt-3 text-sm leading-6 text-[#63706b]">Consider the available paths, the practical consequences, and what additional information may be needed.</p>
              </div>
              <div className="border-t border-[#172522]/10 pt-5">
                <span className="font-display text-sm font-bold text-[#b48a45]">03</span>
                <h3 className="mt-3 font-display text-xl font-bold text-[#172522]">Move forward</h3>
                <p className="mt-3 text-sm leading-6 text-[#63706b]">Once the direction is clear, take the appropriate next step and keep the matter moving.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTA title="Have a legal question?" />
      <SiteFooter />
    </div>
  );
}
