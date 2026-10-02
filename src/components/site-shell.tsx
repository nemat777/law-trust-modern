import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "@/assets/gregory-logo.png";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ["/practice-areas", "Practice Areas"],
    ["/about", "About Tom"],
    ["/contact", "Contact"],
    ["/client-resources", "Client Resources"],
  ] as const;
  return <div className="min-h-screen bg-[#f7f5f0] text-[#18211f]">
    <div className="bg-[#172522] text-white/80"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 text-[11px] sm:px-8"><span>Park Ridge · Illinois</span><a className="font-semibold text-[#d7b56d]" href="tel:8476929900">(847) 692-9900</a></div></div>
    <header className="sticky top-0 z-40 border-b border-[#172522]/10 bg-[#f7f5f0]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Gregory Law Offices" className="h-12 w-12 object-contain" />
          <span><span className="block font-display text-lg font-bold text-[#172522]">Gregory Law Offices</span><span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9a6f2e]">Park Ridge · Illinois</span></span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#44504c] lg:flex">{nav.map(([to,label]) => <Link key={to} to={to} className="transition hover:text-[#9a6f2e]">{label}</Link>)}</nav>
        <div className="flex items-center gap-2"><a href="tel:8476929900" className="hidden rounded-full bg-[#b48a45] px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"><Phone className="mr-2 h-4 w-4"/>(847) 692-9900</a><button className="rounded-full p-2 lg:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></div>
      </div>
      {open && <nav className="grid border-t border-[#172522]/10 px-5 py-2 lg:hidden">{nav.map(([to,label])=><Link key={to} to={to} onClick={()=>setOpen(false)} className="border-b border-[#172522]/10 py-4 text-sm">{label}</Link>)}</nav>}
    </header>
    {children}
    <footer className="bg-[#101b19] text-white/55"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-xs sm:px-8 lg:flex-row lg:justify-between"><div><p className="font-display text-lg font-bold text-white">Gregory Law Offices, Ltd.</p><p className="mt-2">Serving Illinois businesses, property owners, and families from Park Ridge.</p></div><div className="lg:text-right"><p>(847) 692-9900 · 1410 Higgins Road, Suite 204, Park Ridge, IL 60068</p><p className="mt-2">© 2026 Gregory Law Offices, Ltd. · Attorney advertising.</p></div></div></footer>
  </div>;
}

export function PageIntro({ eyebrow, title, text }: { eyebrow:string; title:string; text:string }) {
  return <section className="bg-[#172522] text-white"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7b56d]">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight tracking-[-0.03em] sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{text}</p></div></section>;
}

export function ContactCta() {
  return <section className="bg-[#e9e0cd]"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9a6f2e]">Have a legal question?</p><h2 className="mt-2 font-display text-3xl font-bold text-[#172522]">Let’s talk about what’s next.</h2></div><Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b48a45] px-6 py-3 font-semibold text-white">Start a conversation <ArrowRight className="h-4 w-4"/></Link></div></section>;
}
