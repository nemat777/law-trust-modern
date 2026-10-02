import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
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
            <a href="tel:8476929900" className="flex items-center gap-2 py-4 text-sm font-semibold text-[#9a6f2e]"><Phone className="h-4 w-4" /> (847) 692-9900</a>
          </nav>
        )}
      </header>
    </>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="border-b border-[#172522]/10 bg-[#ece9e1]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold tracking-[-0.035em] text-[#172522] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d6964]">{text}</p>
      </div>
    </section>
  );
}
