import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Gregory Law Offices | Park Ridge Attorney" },
      { name: "description", content: "Contact Gregory Law Offices in Park Ridge to discuss a business, real estate, estate planning, probate, or civil litigation matter." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#18211f] antialiased">
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Start with a conversation."
        text="Call the office or send a brief message about the matter you would like to discuss."
      />

      <main>
        <section className="bg-[#f7f5f0]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:py-20">
            <div>
              <div className="mb-7 max-w-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Get in touch</p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.025em] text-[#172522] sm:text-4xl">
                  Reach the office directly.
                </h2>
                <p className="mt-4 text-base leading-7 text-[#63706b]">
                  Call, email, or visit the Park Ridge office to begin a conversation about your matter.
                </p>
              </div>

              <div className="space-y-4">
                <a href="tel:8476929900" className="block rounded-2xl bg-[#172522] p-6 text-white transition hover:bg-[#20332f]">
                  <Phone className="h-5 w-5 text-[#d7b56d]" />
                  <p className="mt-4 text-xs text-white/45">Call the office</p>
                  <p className="mt-1 font-display text-2xl font-bold">(847) 692-9900</p>
                </a>
                <a href="mailto:tom@gregorylawoffices.com" className="block rounded-2xl border border-[#172522]/10 bg-white p-6 transition hover:border-[#b48a45]/40">
                  <Mail className="h-5 w-5 text-[#9a6f2e]" />
                  <p className="mt-4 text-xs text-[#7b8580]">Email</p>
                  <p className="mt-1 font-semibold text-[#172522]">tom@gregorylawoffices.com</p>
                </a>
                <a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=1410+Higgins+Road+Suite+204+Park+Ridge+IL+60068" className="block rounded-2xl border border-[#172522]/10 bg-white p-6 transition hover:border-[#b48a45]/40">
                  <MapPin className="h-5 w-5 text-[#9a6f2e]" />
                  <p className="mt-4 text-xs text-[#7b8580]">Office</p>
                  <p className="mt-1 font-semibold leading-6 text-[#172522]">1410 Higgins Road, Suite 204<br />Park Ridge, IL 60068</p>
                </a>
              </div>
            </div>

            <form
              onSubmit={(event) => { event.preventDefault(); setSent(true); }}
              className="rounded-[1.5rem] border border-[#172522]/10 bg-white p-5 shadow-sm sm:p-8"
            >
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#efe7d6] text-[#9a6f2e]">✓</span>
                  <h2 className="mt-6 font-display text-3xl font-bold text-[#172522]">Thanks for reaching out.</h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#68736f]">
                    This form is currently a demonstration and should be connected to the firm's preferred inbox before publishing.
                  </p>
                </div>
              ) : (
                <>
                  <div className="border-b border-[#172522]/10 pb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">Start here</p>
                    <h2 className="mt-2 font-display text-3xl font-bold text-[#172522]">Request a consultation</h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#68736f]">
                      Tell us a little about what you need. The office will follow up to discuss the matter and next steps.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {[
                      ["Full name", "text"],
                      ["Phone", "tel"],
                      ["Email", "email"],
                    ].map(([label, type]) => (
                      <label key={label} className="text-xs font-bold uppercase tracking-[0.08em] text-[#5e6965]">
                        {label}
                        <input required type={type} className="field-light mt-1.5 h-11 w-full" placeholder={label} />
                      </label>
                    ))}
                    <label className="text-xs font-bold uppercase tracking-[0.08em] text-[#5e6965] sm:col-span-2">
                      Briefly describe your matter
                      <textarea required rows={4} className="field-light mt-1.5 w-full resize-none" placeholder="Please avoid highly sensitive information." />
                    </label>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 border-t border-[#172522]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-[11px] leading-5 text-[#7b8580]">
                      Submitting this form does not create an attorney-client relationship.
                    </p>
                    <Button type="submit" size="lg" className="rounded-full bg-[#b48a45] px-6 text-white hover:bg-[#966f34]">
                      Send request <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>

        <section className="border-y border-[#172522]/10 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">What happens next</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-[#172522] sm:text-4xl">A simple process.</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                ["01", "Tell us briefly about the matter", "Share the basics so the office can understand what you are looking to address."],
                ["02", "We'll follow up", "The office can discuss the matter and whether the firm may be able to assist."],
                ["03", "Discuss next steps", "If the matter is a fit, you can discuss the appropriate next step for moving forward."],
              ].map(([number, title, text]) => (
                <div key={number} className="border-t border-[#172522]/10 pt-5">
                  <span className="font-display text-sm font-bold text-[#b48a45]">{number}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#172522]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#68736f]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
