import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, Building2, FileText, Landmark, Scale } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader, CTA } from "@/components/site-header";
export const Route = createFileRoute("/practice-areas")({ component: PracticeAreas });
const areas = [
  ["Business","Transactions, formation & contracts","/business",BriefcaseBusiness,"Legal support for businesses at formation, during growth, and when important commercial decisions need careful attention."],
  ["Real Estate","Property & transactions","/real-estate",Building2,"Guidance for purchases, sales, leases, closings, ownership issues, and real estate disputes."],
  ["Estate Planning","Planning for what matters","/estate-planning",FileText,"Thoughtful wills, trusts, powers of attorney, and other planning documents built around your priorities."],
  ["Probate","Guidance for families","/probate",Landmark,"Steady representation for executors, administrators, beneficiaries, and families navigating probate."],
  ["Civil Litigation","Disputes & advocacy","/civil-litigation",Scale,"Focused representation when a business, contract, property, or other civil dispute requires advocacy."],
] as const;
function PracticeAreas() {
  return <div className="min-h-screen bg-[#f7f5f0] text-[#18211f]"><SiteHeader/><PageHero eyebrow="How we help" title="Legal help for the moments that matter." text="Explore the firm's core practice areas and learn where Gregory Law Offices may be able to assist."/>
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="grid gap-5 md:grid-cols-2">
        {areas.map(([title,kicker,href,Icon,text],i)=><article key={title} className="group rounded-3xl border border-[#172522]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#172522]/8 sm:p-9">
          <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#efe7d6] text-[#9a6f2e]"><Icon className="h-5 w-5"/></span><span className="font-display text-sm text-[#b48a45]">0{i+1}</span></div>
          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a918e]">{kicker}</p><h2 className="mt-2 font-display text-2xl font-bold text-[#172522]">{title}</h2>
          <p className="mt-4 max-w-xl leading-7 text-[#65716d]">{text}</p>
          <Link to={href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#8b642a]">Explore {title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></Link>
        </article>)}
      </div>
    </main><CTA/><SiteFooter/></div>;
}
