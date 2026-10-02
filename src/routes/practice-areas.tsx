import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, Building2, FileText, Landmark, Scale } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader, CTA } from "@/components/site-header";

export const Route = createFileRoute("/practice-areas")({ component: PracticeAreas });

const groups = [
  {
    label: "Business & Property",
    text: "Counsel for the businesses, transactions, and property decisions that keep things moving.",
    areas: [
      ["Business", "Formation, contracts & transactions", "/business", BriefcaseBusiness, "Formation, contracts, transactions, and ongoing business counsel."],
      ["Real Estate", "Property & transactions", "/real-estate", Building2, "Purchases, sales, leases, closings, ownership questions, and disputes."],
    ],
  },
  {
    label: "Planning & Estates",
    text: "Thoughtful planning and steady guidance for families, fiduciaries, and the future.",
    areas: [
      ["Estate Planning", "Planning for what matters", "/estate-planning", FileText, "Wills, trusts, powers of attorney, and thoughtful planning."],
      ["Probate", "Guidance for families", "/probate", Landmark, "Representation for executors, administrators, beneficiaries, and families."],
    ],
  },
  {
    label: "Disputes & Advocacy",
    text: "Focused representation when a disagreement becomes a legal dispute.",
    areas: [
      ["Civil Litigation", "Disputes & advocacy", "/civil-litigation", Scale, "Focused representation in business, contract, property, and civil disputes."],
    ],
  },
] as const;

function PracticeAreas() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased">
      <SiteHeader />
      <PageHero
        eyebrow="How we help"
        title="Legal help for the moments that matter."
        text="Explore the firm's five core practice areas and find the type of legal guidance that fits your situation."
      />

      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Our practice areas</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-[#172522] sm:text-4xl">Five areas, clearly organized.</h2>
              <p className="mt-5 text-base leading-8 text-[#63706b]">
                Whether you are building a business, making a property decision, planning for the future, settling an estate, or addressing a dispute, start with the area that best matches your matter.
              </p>
            </div>

            <div className="mt-12 space-y-14">
              {groups.map((group) => (
                <section key={group.label}>
                  <div className="mb-6 flex flex-col gap-2 border-b border-[#172522]/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">{group.label}</p>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#68736f]">{group.text}</p>
                    </div>
                    <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-[#9a6f2e]/70 sm:block">{group.areas.length} {group.areas.length === 1 ? "area" : "areas"}</span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {group.areas.map(([title, kicker, href, Icon, text], index) => (
                      <article key={title} className="group flex min-h-[245px] flex-col rounded-3xl border border-[#172522]/10 bg-[#f7f5f0] p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#172522] hover:text-white hover:shadow-xl hover:shadow-[#172522]/8 sm:p-8">
                        <div className="flex items-center justify-between">
                          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#efe7d6] text-[#9a6f2e] transition group-hover:bg-[#b48a45] group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="font-display text-sm text-[#b48a45]/70 group-hover:text-[#d7b56d]">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <p className="mt-7 text-[10px] font-bold uppercase tracking-[.15em] text-[#8a918e] group-hover:text-[#d7b56d]">{kicker}</p>
                        <h3 className="mt-2 font-display text-2xl font-bold text-[#172522] group-hover:text-white">{title}</h3>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#65716d] group-hover:text-white/70">{text}</p>
                        <Link to={href} className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-[#8b642a] group-hover:text-[#d7b56d]">
                          Explore {title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTA title="Not sure where your matter fits?" />
      <SiteFooter />
    </div>
  );
}
