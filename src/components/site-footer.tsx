import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#101b19] text-white/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-xs sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link to="/" className="font-display text-lg font-bold text-white">Gregory Law Offices, Ltd.</Link>
          <p className="mt-2">Serving Illinois businesses, property owners, and families from Park Ridge.</p>
          <div className="mt-4 flex flex-wrap gap-4 text-white/60">
            <Link to="/practice-areas" className="hover:text-[#d7b56d]">Practice Areas</Link>
            <Link to="/about" className="hover:text-[#d7b56d]">About</Link>
            <Link to="/contact" className="hover:text-[#d7b56d]">Contact</Link>
            <Link to="/client-resources" className="hover:text-[#d7b56d]">Client Resources</Link>
          </div>
        </div>
        <div className="lg:text-right">
          <p className="text-white/65">(847) 692-9900 · 1410 Higgins Road, Suite 204, Park Ridge, IL 60068</p>
          <p className="mt-2">© 2026 Gregory Law Offices, Ltd. · Attorney advertising · Prior results do not guarantee similar outcomes.</p>
        </div>
      </div>
    </footer>
  );
}

export function CTA({ title = "Let’s talk about what’s next.", text = "Tell us a little about what you are facing and we can discuss possible next steps." }: { title?: string; text?: string }) {
  return (
    <section className="bg-[#172522] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7b56d]">Start here</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-white/65">{text}</p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#b48a45] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#966f34]">Contact the office <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
