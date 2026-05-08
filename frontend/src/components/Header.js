"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home, key: "home" },
    { href: "/sobre", label: t.nav.about, key: "about" },
    { href: "/servicos", label: t.nav.services, key: "services" },
    { href: "/projetos", label: t.nav.projects, key: "projects" },
    { href: "/contacto", label: t.nav.contact, key: "contact" },
  ];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50"
      data-testid="site-header"
    >
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between py-6 gap-6">
        <Link href="/" data-testid="logo-link" aria-label="PRUMO home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.key}
                href={l.href}
                className="nav-link text-[15px] font-medium"
                data-active={active}
                data-testid={`nav-${l.key}`}
              >
                {l.label}
              </Link>
            );
          })}

          <Link
            href="/orcamento"
            className="btn-gold !py-2.5 !px-4 text-[11px]"
            data-testid="nav-cta-quote"
          >
            {t.cta.navContact} <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="flex items-center gap-2 text-white/90 hover:text-brand-gold transition-colors text-sm font-bold tracking-widest uppercase border border-white/20 hover:border-brand-gold px-3 py-1.5 rounded-sm"
            data-testid="lang-toggle"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            {lang.toUpperCase()}
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden bg-brand-dark border-t border-white/10 shadow-2xl"
          data-testid="mobile-menu"
        >
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white text-lg py-2 border-b border-white/10"
                data-testid={`mobile-nav-${l.key}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/orcamento"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 self-start"
              data-testid="mobile-nav-cta-quote"
            >
              {t.cta.navContact} <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="flex items-center gap-2 text-brand-gold text-sm font-bold tracking-widest uppercase pt-2"
              data-testid="mobile-lang-toggle"
            >
              <Globe size={16} />
              {lang === "pt" ? "EN" : "PT"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
