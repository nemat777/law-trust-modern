import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Clock3,
  FileText,
  Landmark,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";

import attorneyPortrait from "@/assets/attorney-portrait.jpg";
import logo from "@/assets/gregory-logo.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gregory Law Offices | Experienced Illinois Counsel" },
      {
        name: "description",
        content:
          "Gregory Law Offices provides experienced, personal legal counsel for Illinois businesses, real estate matters, estate planning, probate, and civil litigation.",
      },
      { property: "og:title", content: "Gregory Law Offices | Experienced Illinois Counsel" },
      {
        property: "og:description",
        content:
          "Experienced, personal legal counsel for Illinois businesses, real estate, estates, probate, and civil disputes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const practices = [
  {
    icon: BriefcaseBusiness,
    title: "Business",
    kicker: "Transactions & formation",
    text: "Entity formation, contracts, acquisitions, and the legal decisions that keep a business moving.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    kicker: "Property & transactions",
    text: "Purchases, sales, leases, closings, and property disputes handled with practical attention to detail.",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    kicker: "Planning for what matters",
    text: "Wills, trusts, powers of attorney, and thoughtful plans built around your family and priorities.",
  },
  {
    icon: Landmark,
    title: "Probate",
    kicker: "Guidance for families",
    text: "Steady guidance for executors, administrators, beneficiaries, and families through probate.",
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    kicker: "Disputes & advocacy",
    text: "Focused representation in business, contract, real estate, and other civil disputes.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased">
      <div className="bg-[#172522] text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 text-[11px] sm:px-8">
          <span className="hidden sm:block">Park Ridge · Illinois</span>
          <span>Monday–Friday, 8:30 am–5:00 pm</span>
          <a className="font-semibold text-[#d7b56d] transition hover:text-white" href="tel:8476929900">
            (847) 692-9900
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#172522]/10 bg-[#f7f5f0]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Gregory Law Offices home">
            <img src={logo} alt="Gregory Law Offices logo" className="h-12 w-12 object-contain" width={102} height={106} />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-[-0.02em] text-[#172522]">Gregory Law Offices</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9a6f2e]">Park Ridge · Illinois</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#44504c] lg:flex" aria-label="Main navigation">
            <a href="/practice-areas" className="transition hover:text-[#9a6f2e]">Practice Areas</a>
            <a href="/about" className="transition hover:text-[#9a6f2e]">About Tom</a>
            <a href="/contact" className="transition hover:text-[#9a6f2e]">Contact</a>
            <a href="/client-resources" className="transition hover:text-[#9a6f2e]">Client Resources</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden rounded-full bg-[#b48a45] px-5 text-white shadow-sm hover:bg-[#966f34] sm:inline-flex">
              <a href="#consultation">Start a Conversation <ArrowRight /></a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#172522] hover:bg-[#172522]/5 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav className="grid border-t border-[#172522]/10 bg-[#f7f5f0] px-5 py-3 lg:hidden" aria-label="Mobile navigation">
            {[["Practice Areas", "/practice-areas"], ["About Tom", "/about"], ["Contact", "/contact"], ["Client Resources", "/client-resources"]].map(
              ([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#172522]/10 py-4 text-sm font-medium text-[#34413d] last:border-0"
                >
                  {label}
                </a>
              ),
            )}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-[#172522]/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(180,138,69,0.13),transparent_30%),radial-gradient(circle_at_8%_90%,rgba(39,67,61,0.08),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#b48a45]/30 bg-white/70 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#80602b] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b48a45]" />
                More than 21 years of experience
              </div>

              <h1 className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.03] tracking-[-0.035em] text-[#172522] sm:text-6xl lg:text-[4.8rem]">
                Good legal counsel should feel{" "}
                <span className="italic font-normal text-[#9a6f2e]">personal.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#53605c] sm:text-xl">
                Gregory Law Offices helps Illinois businesses, property owners, and families navigate important legal decisions with experienced advice, direct communication, and a clear path forward.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-full bg-[#b48a45] px-7 text-white shadow-lg shadow-[#b48a45]/15 hover:bg-[#966f34]">
                  <a href="#consultation">Tell us what you need <ArrowRight /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-[#172522]/15 bg-white/70 px-6 text-[#172522] hover:bg-white">
                  <a href="tel:8476929900"><Phone /> (847) 692-9900</a>
                </Button>
              </div>

              <div className="mt-11 grid max-w-xl grid-cols-3 gap-4 border-t border-[#172522]/10 pt-6">
                <Metric value="21+" label="Years of experience" />
                <Metric value="3" label="Illinois court levels" />
                <Metric value="1:1" label="Personal attention" />
              </div>
            </div>

            <aside className="relative mx-auto w-full max-w-xl lg:justify-self-end">
              <div className="overflow-hidden rounded-[2rem] bg-[#172522] p-2 shadow-2xl shadow-[#172522]/15">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={attorneyPortrait}
                    alt="Attorney Tom P. Gregory"
                    className="aspect-[4/5] w-full object-cover object-top"
                    width={1024}
                    height={1280}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172522] via-[#172522]/75 to-transparent px-6 pb-6 pt-20 text-white sm:px-8 sm:pb-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d7b56d]">Tom P. Gregory</p>
                    <p className="mt-2 font-display text-2xl font-bold sm:text-3xl">Experienced counsel. Straightforward advice.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="practice" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">How we help</p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-[#172522] sm:text-5xl">Legal help for the moments that matter.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#63706b] lg:justify-self-end">
                Whether you are building something, protecting something, planning ahead, or resolving a dispute, the goal is the same: understand the situation and know what to do next.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#172522]/10 bg-[#172522]/10 md:grid-cols-2 lg:grid-cols-5">
              {practices.map((practice, index) => {
                const Icon = practice.icon;
                return (
                  <article key={practice.title} className="group flex h-full flex-col bg-[#f7f5f0] p-6 transition duration-300 hover:bg-[#172522] hover:text-white sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#efe7d6] text-[#9a6f2e] transition group-hover:bg-[#b48a45] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-sm text-[#9a6f2e]/60 group-hover:text-[#d7b56d]">0{index + 1}</span>
                    </div>
                    <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a918e] group-hover:text-[#d7b56d]">{practice.kicker}</p>
                    <h3 className="mt-2 font-display text-xl font-bold text-[#172522] group-hover:text-white">{practice.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#65716d] group-hover:text-white/70">{practice.text}</p>
                    <a href={practice.title === "Business" ? "/business" : practice.title === "Real Estate" ? "/real-estate" : practice.title === "Estate Planning" ? "/estate-planning" : practice.title === "Probate" ? "/probate" : "/civil-litigation"} className="mt-auto pt-6 inline-flex items-center gap-2 text-xs font-bold text-[#9a6f2e] group-hover:text-[#d7b56d]">
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#172522]/10 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Why Gregory Law Offices</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-[#172522] sm:text-5xl">Practical counsel. Personal attention.</h2>
              <p className="mt-5 text-base leading-7 text-[#63706b]">Legal advice should be understandable, responsive, and connected to the real objective behind the matter.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div><p className="font-display text-xl font-bold text-[#172522]">Direct communication</p><p className="mt-3 text-sm leading-6 text-[#68736f]">Straightforward conversations without unnecessary layers.</p></div>
              <div><p className="font-display text-xl font-bold text-[#172522]">Practical advice</p><p className="mt-3 text-sm leading-6 text-[#68736f]">Recommendations grounded in the business, property, family, or dispute at hand.</p></div>
              <div><p className="font-display text-xl font-bold text-[#172522]">Long-term perspective</p><p className="mt-3 text-sm leading-6 text-[#68736f]">Attention to today's issue while keeping the next decision in view.</p></div>
            </div>
          </div>
        </section>

        <section id="attorney" className="border-y border-[#172522]/10 bg-[#ece9e1]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-24">
            <div className="relative max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-[#b48a45]/10 blur-2xl" />
              <img
                src={attorneyPortrait}
                alt="Attorney Tom P. Gregory"
                className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top shadow-2xl"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Meet your attorney</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] text-[#172522] sm:text-5xl">Tom P. Gregory</h2>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-[#3e4b46]">
                You should not have to navigate a complicated legal issue without knowing who is on the other side of the phone.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#68736f]">
                A John Marshall Law School graduate with more than 21 years of legal experience, Tom represents Illinois businesses, property owners, and families with direct, attentive counsel. His experience includes matters at the Circuit Court, Appellate Court, and Illinois Supreme Court levels.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <AttorneyStat value="21+" label="Years of experience" />
                <AttorneyStat value="3" label="Illinois court levels" />
                <AttorneyStat value="JMLS" label="Legal education" />
              </div>

              <a href="#consultation" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#8b642a] hover:text-[#b48a45]">
                Talk about your matter <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="consultation" className="bg-[#172522] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:py-24">
            <div className="lg:pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7b56d]">Start here</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.025em] sm:text-5xl">Let’s talk about what’s next.</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-white/65">
                Tell us a little about what you are facing. We will use the information to understand how we may be able to help and discuss next steps.
              </p>

              <div className="mt-9 space-y-4">
                <a href="tel:8476929900" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#b48a45] text-white"><Phone className="h-5 w-5" /></span>
                  <span><span className="block text-xs text-white/45">Call the office</span><span className="mt-0.5 block font-display text-xl font-bold">(847) 692-9900</span></span>
                </a>
                <a href="mailto:tom@gregorylawoffices.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-[#d7b56d]"><FileText className="h-5 w-5" /></span>
                  <span><span className="block text-xs text-white/45">Email</span><span className="mt-0.5 block font-medium">tom@gregorylawoffices.com</span></span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-[#f7f5f0] p-6 text-[#172522] shadow-2xl sm:p-8">
              {submitted ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center" role="status">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#efe7d6] text-[#9a6f2e]"><Check className="h-7 w-7" /></span>
                  <h2 className="mt-6 font-display text-3xl font-bold">Thanks for reaching out.</h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#68736f]">
                    This form is currently a demonstration of the consultation experience. Connect it to the firm's preferred inbox before publishing.
                  </p>
                  <Button type="button" variant="outline" className="mt-6 rounded-full" onClick={() => setSubmitted(false)}>Send another request</Button>
                </div>
              ) : (
                <>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">Confidential intake</p>
                  <h2 className="mt-3 font-display text-3xl font-bold">Request a consultation</h2>
                  <p className="mt-2 text-sm text-[#68736f]">Share the basics and we’ll follow up about next steps.</p>
                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <Field label="Full name"><input required name="name" autoComplete="name" placeholder="Your name" className="field-light" /></Field>
                    <Field label="Phone"><input required name="phone" type="tel" autoComplete="tel" placeholder="(847) 000-0000" className="field-light" /></Field>
                    <Field label="Email"><input required name="email" type="email" autoComplete="email" placeholder="you@example.com" className="field-light" /></Field>
                    <Field label="Practice area"><select required name="practice" defaultValue="" className="field-light"><option value="" disabled>Select an area</option>{practices.map((practice) => <option key={practice.title}>{practice.title}</option>)}</select></Field>
                    <div className="sm:col-span-2"><Field label="Briefly describe your matter"><textarea required name="message" rows={5} placeholder="Please avoid including highly sensitive information." className="field-light resize-none" /></Field></div>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button type="submit" size="lg" className="rounded-full bg-[#b48a45] px-6 text-white hover:bg-[#966f34]">Submit request <ArrowRight /></Button>
                    <span className="text-xs leading-5 text-[#7b8580]">Submitting this form does not create an attorney-client relationship.</span>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>

        <section id="utilities" className="bg-[#f7f5f0]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              <Utility icon={Clock3} title="Office hours">
                <p>Monday–Friday<br />8:30 am–5:00 pm</p>
                <span>Evenings and weekends by appointment.</span>
              </Utility>
              <Utility icon={MapPin} title="Park Ridge office">
                <p>1410 Higgins Road<br />Suite 204</p>
                <a href="https://maps.google.com/?q=1410+Higgins+Road+Suite+204+Park+Ridge+IL+60068" target="_blank" rel="noreferrer">Get directions <ArrowRight /></a>
              </Utility>
              <a href="/client-resources" className="group rounded-2xl bg-[#e9e0cd] p-6 transition hover:bg-[#dfd1b4]">
                <ShieldCheck className="h-5 w-5 text-[#9a6f2e]" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#80602b]">Client resources</p>
                <h3 className="mt-2 font-display text-xl font-bold text-[#172522]">Contact the office</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8b642a]">View resources <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#101b19] text-white/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-xs sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-white">Gregory Law Offices, Ltd.</p>
            <p className="mt-2">Serving Illinois businesses, property owners, and families from Park Ridge.</p>
          </div>
          <div className="lg:text-right">
            <p className="text-white/65">(847) 692-9900 · 1410 Higgins Road, Suite 204, Park Ridge, IL 60068</p>
            <p className="mt-2">© 2026 Gregory Law Offices, Ltd. · Attorney advertising · Prior results do not guarantee similar outcomes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div><b className="block font-display text-xl text-[#172522] sm:text-2xl">{value}</b><span className="text-xs text-[#68736f]">{label}</span></div>;
}

function AttorneyStat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl border border-[#172522]/10 bg-white/65 p-4"><div className="font-display text-2xl font-bold text-[#9a6f2e]">{value}</div><div className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#69736f]">{label}</div></div>;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#5e6965]"><span className="mb-2 block">{label}</span>{children}</label>;
}

function Utility({ icon: Icon, title, children }: { icon: typeof Clock3; title: string; children: ReactNode }) {
  return <div className="rounded-2xl border border-[#172522]/10 bg-white p-6 text-sm text-[#68736f]"><Icon className="h-5 w-5 text-[#9a6f2e]" /><h3 className="mt-4 font-display text-lg font-bold text-[#172522]">{title}</h3><div className="mt-3 space-y-2 leading-6 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2 [&_a]:font-semibold [&_a]:text-[#8b642a] [&_a_svg]:h-4 [&_a_svg]:w-4 [&_span]:block [&_span]:text-xs [&_span]:text-[#7b8580]">{children}</div></div>;
}
