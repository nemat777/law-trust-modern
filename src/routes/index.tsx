import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, BriefcaseBusiness, Building2, Check, Clock3, FileText, Landmark, MapPin, Menu, Phone, Scale, ShieldCheck, X } from "lucide-react";

import attorneyPortrait from "@/assets/attorney-portrait.jpg";
import logo from "@/assets/gregory-logo.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gregory Law Offices | Trusted Illinois Counsel" },
      { name: "description", content: "Gregory Law Offices provides trusted counsel for Illinois businesses, real estate matters, estate planning, probate, and civil litigation." },
      { property: "og:title", content: "Gregory Law Offices | Trusted Illinois Counsel" },
      { property: "og:description", content: "Experienced legal counsel for Illinois businesses, real estate, estates, probate, and civil disputes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const practices = [
  { icon: BriefcaseBusiness, title: "Business Transactions & Corporate Formation", text: "Practical counsel for entity formation, contracts, acquisitions, and day-to-day business decisions." },
  { icon: Building2, title: "Real Estate", text: "Commercial and residential purchases, sales, leases, closings, and property disputes." },
  { icon: FileText, title: "Estate Planning", text: "Wills, trusts, powers of attorney, and clear plans designed around your family and priorities." },
  { icon: Landmark, title: "Probate Administration", text: "Steady guidance for executors, administrators, beneficiaries, and families through the probate process." },
  { icon: Scale, title: "Civil Litigation", text: "Focused advocacy in business, contract, real estate, and other civil disputes at trial and on appeal." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="law-atmosphere min-h-screen overflow-hidden bg-navy text-cream antialiased">
      <div className="relative z-40 border-b border-cream/10 bg-cream/5 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-2 text-[10px] uppercase text-cream/60 sm:flex sm:justify-between sm:px-8">
          <span className="min-w-0 truncate">1410 Higgins Road, Suite 204 · Park Ridge, IL</span>
          <span className="hidden lg:block">Monday–Friday, 8:30 am–5:00 pm · Evenings & weekends by appointment</span>
          <a className="shrink-0 text-brass transition-colors hover:text-cream" href="tel:8476929900">(847) 692-9900</a>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-cream/10 bg-navy/85 backdrop-blur-xl">
        <div className="mx-auto grid h-[76px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Gregory Law Offices home">
            <img src={logo} alt="Gregory Law Offices logo" className="h-11 w-11 shrink-0 object-contain" width={102} height={106} />
            <span className="min-w-0 leading-tight"><span className="block truncate font-display text-base font-bold text-cream sm:text-lg">Gregory Law Offices</span><span className="block text-[9px] uppercase text-brass sm:text-[10px]">Park Ridge · Illinois</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-cream/70 lg:flex" aria-label="Main navigation">
            <a href="#practice" className="transition-colors hover:text-cream">Practice Areas</a><a href="#attorney" className="transition-colors hover:text-cream">Attorney</a><a href="#consultation" className="transition-colors hover:text-cream">Consultation</a><a href="#utilities" className="transition-colors hover:text-cream">Client Utilities</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild className="hidden bg-brass text-navy shadow-lg shadow-brass/15 hover:bg-cream sm:inline-flex"><a href="#consultation">Schedule a Consultation</a></Button>
            <Button variant="ghost" size="icon" className="text-cream hover:bg-cream/10 hover:text-cream lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="grid border-t border-cream/10 bg-navy-raised px-5 py-3 text-sm lg:hidden" aria-label="Mobile navigation">{[["Practice Areas", "#practice"], ["Attorney", "#attorney"], ["Consultation", "#consultation"], ["Client Utilities", "#utilities"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-cream/10 py-3 text-cream/80 last:border-0">{label}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-cream/15 bg-cream/5 px-3 py-2 text-[10px] font-semibold uppercase text-cream/70 backdrop-blur-md sm:text-xs"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" /> 21+ years serving Illinois clients</div>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-cream sm:text-6xl lg:text-7xl">Trusted counsel for Illinois <span className="italic text-brass">businesses, real estate, and families.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/70 sm:text-lg">Gregory Law Offices brings seasoned judgment, personal attention, and clear next steps to the legal matters that shape your future.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 bg-brass px-6 text-navy shadow-lg shadow-brass/20 hover:bg-cream"><a href="#consultation">Schedule a Consultation <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-cream/20 bg-cream/5 text-cream hover:bg-cream/10 hover:text-cream"><a href="tel:8476929900"><Phone /> Call (847) 692-9900</a></Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-cream/10 pt-6"><Metric value="21+" label="Years practicing" /><Metric value="3" label="Court levels" /><Metric value="Park Ridge" label="Illinois office" /></div>
          </div>
          <aside className="relative">
            <div className="absolute -inset-4 rounded-xl bg-cream/5 blur-2xl" />
            <div className="relative rounded-xl border border-cream/15 bg-cream/8 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-[10px] uppercase text-cream/50 sm:text-xs"><span>Immediate consultation</span><span className="flex shrink-0 items-center gap-2 text-brass"><span className="h-1.5 w-1.5 rounded-full bg-brass" /> Available</span></div>
              <h2 className="mt-8 font-display text-3xl font-bold text-cream">Speak directly with Tom P. Gregory.</h2>
              <p className="mt-3 text-sm leading-6 text-cream/60">Start with a confidential conversation about your matter and the path forward.</p>
              <a href="tel:8476929900" className="mt-7 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-brass/40 bg-brass/10 p-4 transition-colors hover:bg-brass/20"><span className="min-w-0"><span className="block font-display text-2xl font-bold text-brass sm:text-3xl">(847) 692-9900</span><span className="mt-1 block text-[10px] uppercase text-cream/50">Call the office now</span></span><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brass text-navy"><ArrowRight /></span></a>
              <div className="mt-5 flex items-center gap-2 text-xs text-cream/45"><ShieldCheck className="h-4 w-4 text-brass" /> Your inquiry is treated confidentially.</div>
            </div>
          </aside>
        </section>

        <section id="practice" className="relative border-y border-cream/10 bg-cream/3 backdrop-blur-sm"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8"><div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"><div><p className="text-xs font-semibold uppercase text-brass">Focused representation</p><h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">Practice areas</h2></div><p className="max-w-md text-sm leading-6 text-cream/55">Legal advice shaped around the transaction, property, estate, or dispute in front of you.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{practices.map((practice, index) => { const Icon = practice.icon; return <article key={practice.title} className="group rounded-lg border border-cream/12 bg-cream/5 p-5 backdrop-blur-md transition-colors hover:border-brass/40 hover:bg-cream/10"><div className="flex items-center justify-between"><Icon className="h-5 w-5 text-brass" /><span className="font-display text-sm text-brass/70">0{index + 1}</span></div><h3 className="mt-5 font-display text-lg font-bold leading-snug text-cream">{practice.title}</h3><p className="mt-3 text-sm leading-6 text-cream/60">{practice.text}</p></article>; })}</div></div></section>

        <section id="attorney" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-24">
          <div className="relative mx-auto w-full max-w-md"><div className="absolute -inset-3 rounded-xl bg-brass/10 blur-xl" /><img src={attorneyPortrait} alt="Attorney Tom P. Gregory" className="relative aspect-[4/5] w-full rounded-xl border border-cream/15 object-cover shadow-2xl" loading="lazy" width={1024} height={1280} /></div>
          <div><p className="text-xs font-semibold uppercase text-brass">Your attorney</p><h2 className="mt-3 font-display text-4xl font-bold text-cream sm:text-5xl">Tom P. Gregory</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">A John Marshall Law School graduate with more than 21 years of legal experience, Tom P. Gregory represents Illinois businesses, property owners, and families with direct, attentive counsel.</p><p className="mt-4 max-w-2xl text-base leading-7 text-cream/60">His experience includes representation at the Circuit Court, Appellate Court, and Illinois Supreme Court levels. Every matter receives practical analysis, candid advice, and a strategy built for the client’s goals.</p><div className="mt-8 grid gap-3 sm:grid-cols-3"><AttorneyStat value="21+" label="Years of experience" /><AttorneyStat value="3" label="Illinois court levels" /><AttorneyStat value="JMLS" label="Legal education" /></div></div>
        </section>

        <section id="consultation" className="border-t border-cream/10 bg-cream/3"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <form onSubmit={handleSubmit} className="rounded-xl border border-cream/15 bg-cream/8 p-6 shadow-2xl backdrop-blur-xl sm:p-8">{submitted ? <div className="flex min-h-[470px] flex-col items-center justify-center text-center" role="status"><span className="grid h-14 w-14 place-items-center rounded-full bg-brass text-navy"><Check className="h-7 w-7" /></span><h2 className="mt-6 font-display text-3xl font-bold text-cream">Your request is ready.</h2><p className="mt-3 max-w-md text-sm leading-6 text-cream/60">This redesign demonstrates the consultation flow. Connect the form to your preferred inbox before publishing.</p><Button type="button" variant="outline" className="mt-6 border-cream/20 bg-cream/5 text-cream hover:bg-cream/10 hover:text-cream" onClick={() => setSubmitted(false)}>Send another request</Button></div> : <><p className="text-xs font-semibold uppercase text-brass">Confidential intake</p><h2 className="mt-3 font-display text-3xl font-bold text-cream">Request a consultation</h2><p className="mt-2 text-sm text-cream/60">Share the essentials. The office will follow up to discuss next steps.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Full name"><input required name="name" autoComplete="name" placeholder="Your name" className="field" /></Field><Field label="Phone"><input required name="phone" type="tel" autoComplete="tel" placeholder="(847) 000-0000" className="field" /></Field><Field label="Email"><input required name="email" type="email" autoComplete="email" placeholder="you@example.com" className="field" /></Field><Field label="Practice area"><select required name="practice" defaultValue="" className="field"><option value="" disabled>Select an area</option>{practices.map((practice) => <option key={practice.title}>{practice.title}</option>)}</select></Field><div className="sm:col-span-2"><Field label="Briefly describe your matter"><textarea required name="message" rows={5} placeholder="Please avoid including highly sensitive information." className="field resize-none" /></Field></div></div><div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"><Button type="submit" size="lg" className="bg-brass text-navy hover:bg-cream">Submit Request <ArrowRight /></Button><span className="text-xs leading-5 text-cream/45">Submitting this form does not create an attorney-client relationship.</span></div></>}</form>
          <aside id="utilities" className="grid content-start gap-4"><div className="rounded-lg border border-cream/12 bg-cream/5 p-6 backdrop-blur-md"><p className="text-xs font-semibold uppercase text-brass">Direct contact</p><a href="tel:8476929900" className="mt-3 block font-display text-3xl font-bold text-cream">(847) 692-9900</a><a href="mailto:tom@gregorylawoffices.com" className="mt-2 block text-sm text-cream/60 transition-colors hover:text-brass">tom@gregorylawoffices.com</a></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"><Utility icon={Clock3} title="Office hours"><p>Monday–Friday<br />8:30 am–5:00 pm</p><span>Evenings and weekends by appointment.</span></Utility><Utility icon={MapPin} title="Park Ridge office"><p>1410 Higgins Road<br />Suite 204</p><a href="https://maps.google.com/?q=1410+Higgins+Road+Suite+204+Park+Ridge+IL+60068" target="_blank" rel="noreferrer">Get directions <ArrowRight /></a></Utility></div><a href="https://www.gregorylawoffices.com/itc/" target="_blank" rel="noreferrer" className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg bg-brass p-6 text-navy transition-colors hover:bg-cream"><span><span className="block text-xs font-semibold uppercase">Existing clients</span><span className="mt-1 block font-display text-xl font-bold">Secure client payment portal</span></span><ArrowRight className="shrink-0" /></a></aside>
        </div></section>
      </main>

      <footer className="border-t border-cream/10 bg-navy-raised/60"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-xs text-cream/45 sm:px-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="font-display text-lg font-bold text-cream">Gregory Law Offices, Ltd.</p><p className="mt-2">Serving Illinois businesses, property owners, and families from Park Ridge.</p></div><div className="lg:text-right"><p className="text-cream/65">(847) 692-9900 · 1410 Higgins Road, Suite 204, Park Ridge, IL 60068</p><p className="mt-2">© 2026 Gregory Law Offices, Ltd. · Attorney advertising · Prior results do not guarantee similar outcomes.</p></div></div></footer>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) { return <div className="min-w-0"><b className="block truncate font-display text-lg text-cream sm:text-2xl">{value}</b><span className="text-xs text-cream/55">{label}</span></div>; }
function AttorneyStat({ value, label }: { value: string; label: string }) { return <div className="rounded-lg border border-cream/10 bg-cream/5 p-4"><div className="font-display text-2xl font-bold text-brass">{value}</div><div className="mt-1 text-xs uppercase text-cream/50">{label}</div></div>; }
function Field({ label, children }: { label: string; children: ReactNode }) { return <label className="block text-xs font-medium uppercase text-cream/55"><span className="mb-2 block">{label}</span>{children}</label>; }
function Utility({ icon: Icon, title, children }: { icon: typeof Clock3; title: string; children: ReactNode }) { return <div className="rounded-lg border border-cream/12 bg-cream/5 p-6 text-sm text-cream/60"><Icon className="h-5 w-5 text-brass" /><h3 className="mt-4 font-display text-lg font-bold text-cream">{title}</h3><div className="mt-3 space-y-2 leading-6 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2 [&_a]:font-semibold [&_a]:text-brass [&_a_svg]:h-4 [&_a_svg]:w-4 [&_span]:block [&_span]:text-xs [&_span]:text-cream/45">{children}</div></div>; }