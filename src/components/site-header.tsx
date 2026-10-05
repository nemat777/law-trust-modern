import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, type LucideIcon } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/gregory-logo.png";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    ["Practice Areas", "/practice-areas"],
    ["About Tom", "/about"],
    ["Contact", "/contact"],
    ["Client Resources", "/client-resources"],
  ] as const;

  return (
    <>
      <div className="bg-[#172522] text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 text-[11px] sm:px-8">
          <span className="hidden sm:block">Park Ridge · Illinois</span>
          <span>Monday–Friday, 8:30 am–5:00 pm</span>
          <a className="font-semibold text-[#d7b56d] hover:text-white" href="tel:8476929900">(847) 692-9900</a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-[#172522]/10 bg-[#f7f5f0]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Gregory Law Offices home">
            <img src={logo} alt="Gregory Law Offices logo" className="h-12 w-12 object-contain" width={102} height={106} />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-[-0.02em] text-[#172522]">Gregory Law Offices</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9a6f2e]">Park Ridge · Illinois</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#44504c] lg:flex" aria-label="Main navigation">
            {nav.map(([label, href]) => <Link key={href} to={href} className="transition hover:text-[#9a6f2e]">{label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden rounded-full bg-[#b48a45] px-5 text-white shadow-sm hover:bg-[#966f34] sm:inline-flex">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#172522] hover:bg-[#172522]/5 lg:hidden" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="grid border-t border-[#172522]/10 bg-[#f7f5f0] px-5 py-3 lg:hidden" aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <Link key={href} to={href} onClick={() => setMenuOpen(false)} className="border-b border-[#172522]/10 py-4 text-sm font-medium text-[#34413d] last:border-0">{label}</Link>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-[#b48a45] px-5 py-3 text-sm font-semibold text-white">Start a Conversation</Link>
            <a href="tel:8476929900" className="flex items-center gap-2 py-4 text-sm font-semibold text-[#9a6f2e]"><Phone className="h-4 w-4" /> (847) 692-9900</a>
          </nav>
        )}
      </header>
    </>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden border-b border-[#172522]/10 bg-[#ece9e1]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,#e4dccb_0%,transparent_70%)] opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#b48a45]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a6f2e]">{eyebrow}</p>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#172522] sm:text-6xl lg:text-[4.25rem]">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d6964] sm:text-xl">{text}</p>
        </div>
      </div>
    </section>
  );
}

export function PracticeAreaPage({
  icon: Icon,
  title,
  heroText,
  introTitle,
  introText,
  matters,
  reasons = [],
  considerations = [],
  process = [],
  ctaTitle,
  imageUrl,
  imageAlt,
  imageLabel,
  imageTitle,
  imageText,
}: {
  icon: LucideIcon;
  title: string;
  heroText: string;
  introTitle: string;
  introText: string;
  matters: string[];
  reasons?: string[];
  considerations?: string[];
  process?: { title: string; text: string }[];
  ctaTitle: string;
  imageUrl?: string;
  imageAlt?: string;
  imageLabel?: string;
  imageTitle?: string;
  imageText?: string;
}) {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased">
      <SiteHeader />
      <PageHero eyebrow="Practice area" title={title} text={heroText} />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#b48a45]/30 bg-[#efe7d6] text-[#9a6f2e]">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">The approach</p>
                <div className="mt-3 h-px w-16 bg-[#b48a45]" />
              </div>
              <div className="max-w-3xl">
              <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.025em] text-[#172522] sm:text-4xl">{introTitle}</h2>
              <p className="mt-5 text-base leading-8 text-[#63706b]">{introText}</p>
              </div>
            </div>

            {imageUrl && (
              <div className="mt-14 overflow-hidden rounded-[1.75rem] border border-[#172522]/10 bg-[#ece9e1] shadow-[0_18px_50px_rgba(23,37,34,0.08)]">
                <img
                  src={imageUrl}
                  alt={imageAlt ?? ""}
                  className="aspect-[16/7] w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {reasons.length > 0 && (
              <div className="mt-20 border-t border-[#172522]/10 pt-14 lg:col-span-2">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">When clients typically call</p>
                    <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#172522] sm:text-3xl">Know when it is worth bringing us in.</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {reasons.map((reason, index) => (
                      <div key={reason} className="rounded-2xl border border-[#172522]/10 bg-[#ece9e1] p-5">
                        <span className="text-xs font-bold text-[#9a6f2e]">0{index + 1}</span>
                        <p className="mt-3 text-sm leading-6 text-[#35423d]">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {considerations.length > 0 && (
              <div className="mt-20 border-t border-[#172522]/10 pt-14 lg:col-span-2">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">A closer look</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#172522]">The details depend on the situation.</h3>
                  <p className="mt-3 text-sm leading-7 text-[#68736f]">Every matter has its own facts, documents, timing, and priorities. These are some of the issues that may deserve attention.</p>
                </div>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {considerations.map((item, index) => (
                    <div key={item} className="group rounded-2xl border border-[#172522]/10 bg-white p-6 shadow-[0_8px_30px_rgba(23,37,34,0.04)]">
                      <span className="text-xs font-bold text-[#9a6f2e]">0{index + 1}</span>
                      <p className="mt-3 text-sm leading-7 text-[#35423d]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-20 border-t border-[#172522]/10 pt-14 lg:col-span-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">How we can help</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#172522]">Matters we handle</h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[#68736f]">A focused range of legal matters, with advice tailored to the facts and practical goals of the situation.</p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {matters.map((matter) => (
                  <div key={matter} className="flex min-h-[92px] items-start gap-3 rounded-2xl border border-[#172522]/10 bg-[#f7f5f0] p-5">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#efe7d6] text-[#9a6f2e]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b48a45]" />
                    </span>
                    <span className="text-sm font-semibold leading-6 text-[#35423d]">{matter}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {process.length > 0 && (
          <section className="border-y border-[#172522]/10 bg-white">
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">Working together</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.025em] text-[#172522]">A practical process from the first conversation forward.</h2>
              </div>
              <div className="relative mt-10 grid gap-4 md:grid-cols-3">
                {process.map((step, index) => (
                  <div key={step.title} className="relative rounded-2xl border border-[#172522]/10 bg-[#f7f5f0] p-7 shadow-[0_10px_35px_rgba(23,37,34,0.04)]">
                    <span className="text-sm font-bold text-[#9a6f2e]">0{index + 1}</span>
                    <h3 className="mt-3 font-display text-xl font-bold text-[#172522]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5d6964]">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#f7f5f0]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-14">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#172522] p-8 text-white shadow-[0_18px_50px_rgba(23,37,34,0.16)] sm:p-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d7b56d]">Next step</p>
                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{ctaTitle}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">Start a conversation with the office to discuss your situation and possible next steps.</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-[#b48a45] px-5 py-3 text-sm font-semibold text-white">Contact the office</Link>
                <a href="tel:8476929900" className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85">(847) 692-9900</a>
              </div>
            </div>
            <div className="mt-12 border-t border-[#172522]/10 pt-9">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">Related practice areas</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  ["Business", "/business"],
                  ["Real Estate", "/real-estate"],
                  ["Estate Planning", "/estate-planning"],
                  ["Probate", "/probate"],
                  ["Civil Litigation", "/civil-litigation"],
                ].filter(([label]) => label !== title).map(([label, href]) => (
                  <Link key={href} to={href} className="rounded-full border border-[#172522]/10 bg-white px-4 py-2 text-xs font-semibold text-[#4d5955] hover:border-[#b48a45]/40 hover:text-[#8b642a]">{label}</Link>
                ))}
              </div>
            </div>
                        <Link to="/practice-areas" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#8b642a]">← All practice areas</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export function SiteFooter() {
  const links = [
    ["Practice Areas", "/practice-areas"],
    ["About Tom", "/about"],
    ["Contact", "/contact"],
    ["Client Resources", "/client-resources"],
    ["Privacy", "/privacy"],
    ["Disclaimer", "/disclaimer"],
    ["Accessibility", "/accessibility"],
  ] as const;

  return (
    <footer className="bg-[#101b19] text-white/55">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_0.8fr]">
          <div>
            <p className="font-display text-xl font-bold text-white">Gregory Law Offices, Ltd.</p>
            <p className="mt-3 max-w-md text-sm leading-6">Serving Illinois businesses, property owners, and families from Park Ridge.</p>
            <div className="mt-5 text-sm leading-6">
              <p>1410 Higgins Road, Suite 204</p>
              <p>Park Ridge, IL 60068</p>
              <a className="mt-2 inline-block text-[#d7b56d] hover:text-white" href="tel:8476929900">(847) 692-9900</a>
              <a className="mt-1 block text-white/55 hover:text-white" href="mailto:tom@gregorylawoffices.com">tom@gregorylawoffices.com</a>
              <p className="mt-3 text-xs text-white/40">Monday–Friday · 8:30 am–5:00 pm</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d7b56d]">Explore</p>
            <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm" aria-label="Footer navigation">
              {links.slice(0, 4).map(([label, href]) => <Link key={href} to={href} className="hover:text-white">{label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d7b56d]">Legal</p>
            <nav className="mt-4 grid gap-3 text-sm" aria-label="Legal navigation">
              {links.slice(4).map(([label, href]) => <Link key={href} to={href} className="hover:text-white">{label}</Link>)}
            </nav>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-5 text-xs leading-5">
          <p>© 2026 Gregory Law Offices, Ltd. · Attorney advertising.</p>
          <p className="mt-2 max-w-4xl">Information on this website is for general informational purposes and is not legal advice. Viewing this website or contacting the firm does not create an attorney-client relationship.</p>
        </div>
      </div>
    </footer>
  );
}

export function CTA({ title = "Have a legal question?" }: { title?: string }) {
  return <section className="bg-[#e9e0cd]"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">Have a legal question?</p><h2 className="mt-2 font-display text-3xl font-bold text-[#172522]">{title}</h2></div><Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b48a45] px-6 py-3 font-semibold text-white">Start a conversation <span aria-hidden="true">→</span></Link></div></section>;
}
