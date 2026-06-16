"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  ArrowRight,
} from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "./LanguageProvider";
import { COMPANY, getMailto, getTel } from "@/lib/company";

// TikTok glyph (lucide-react has no built-in TikTok icon)
function TikTokIcon({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3.2a8.7 8.7 0 0 1-4.5-1.3v6.7a6.7 6.7 0 1 1-6.7-6.7c.4 0 .8 0 1.2.1v3.4a3.3 3.3 0 1 0 2.3 3.2V3h3.2Z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const showRange = year > COMPANY.yearStart;

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.about },
    { href: "/servicos", label: t.nav.services },
    { href: "/projetos", label: t.nav.projects },
    { href: "/bim", label: t.nav.bim },
    { href: "/orcamento", label: t.nav.quote },
    { href: "/contacto", label: t.nav.contact },
  ];

  const services = t.services.list.map((s) => s.title);

  return (
    <footer className="bg-brand-dark text-white" data-testid="site-footer">
      {/* Main grid */}
      <div className="container mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand column */}
        <div className="lg:col-span-4 space-y-5">
          <Logo />
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            {t.home.heroSubtitle.split(".")[0]}.
          </p>
          <Link
            href="/orcamento"
            className="btn-gold !py-3 !px-5 text-[11px]"
            data-testid="footer-cta-quote"
          >
            {t.cta.contact} <ArrowRight size={14} />
          </Link>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-2">
          <FooterTitle>{t.footer.navigation}</FooterTitle>
          <ul className="mt-5 space-y-3">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                  data-testid={`footer-nav-${n.href.replace("/", "") || "home"}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <FooterTitle>{t.home.titleServices}</FooterTitle>
          <ul className="mt-5 space-y-3">
            {services.map((s, i) => (
              <li key={i}>
                <Link
                  href="/servicos"
                  className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                  data-testid={`footer-service-${i}`}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <FooterTitle>{t.nav.contact}</FooterTitle>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {COMPANY.address.line1 && (
              <li className="flex gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <span data-testid="footer-address">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                </span>
              </li>
            )}
            {COMPANY.email && (
              <li className="flex gap-3">
                <Mail size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <a
                  href={getMailto()}
                  className="hover:text-brand-gold transition-colors break-all"
                  data-testid="footer-email"
                >
                  {COMPANY.email}
                </a>
              </li>
            )}
            {COMPANY.phone && (
              <li className="flex gap-3">
                <Phone size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <a
                  href={getTel()}
                  className="hover:text-brand-gold transition-colors"
                  data-testid="footer-phone"
                >
                  {COMPANY.phone}
                </a>
              </li>
            )}
            {COMPANY.hours && (
              <li className="flex gap-3">
                <Clock size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <span>{COMPANY.hours}</span>
              </li>
            )}
          </ul>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            {COMPANY.social.instagram.url && (
              <SocialIcon
                href={COMPANY.social.instagram.url}
                label="Instagram"
                testId="footer-social-instagram"
              >
                <Instagram size={16} />
              </SocialIcon>
            )}
            {COMPANY.social.tiktok.url && (
              <SocialIcon
                href={COMPANY.social.tiktok.url}
                label="TikTok"
                testId="footer-social-tiktok"
              >
                <TikTokIcon size={16} />
              </SocialIcon>
            )}
            {COMPANY.social.facebook.url && (
              <SocialIcon
                href={COMPANY.social.facebook.url}
                label="Facebook"
                testId="footer-social-facebook"
              >
                <Facebook size={16} />
              </SocialIcon>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50 tracking-wider">
          <span data-testid="footer-copyright">
            © {showRange ? `${COMPANY.yearStart}–${year}` : COMPANY.yearStart}
            {" — "}
            {COMPANY.copyrightHolder} · {t.footer.rights}
          </span>
          <Link
            href="/contacto"
            className="text-white text-[11px] font-bold tracking-[0.18em] uppercase border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors"
            data-testid="footer-contact-link"
          >
            {t.footer.contactUs}
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }) {
  return (
    <h4 className="font-title uppercase tracking-[0.18em] text-brand-gold text-sm">
      {children}
    </h4>
  );
}

function SocialIcon({ href, label, testId, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-testid={testId}
      className="w-9 h-9 flex items-center justify-center border border-white/20 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark text-white/80 transition-all"
    >
      {children}
    </a>
  );
}
