"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";
import {
  COMPANY,
  getMailto,
  getTel,
  getMapsEmbed,
  getMapsLink,
} from "@/lib/company";

// TikTok glyph (lucide-react has no built-in TikTok icon)
function TikTokIcon({ size = 22 }) {
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

export default function ContactoPage() {
  const { t } = useLanguage();

  const items = [
    COMPANY.address.line1 && {
      icon: <MapPin size={22} />,
      label: t.contact.labels.address,
      value: (
        <a
          href={getMapsLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-goldDark transition-colors"
          data-testid="contact-address-link"
        >
          {COMPANY.address.line1}
          {COMPANY.address.line2 ? `, ${COMPANY.address.line2}` : ""}
        </a>
      ),
      testId: "contact-row-address",
    },
    COMPANY.email && {
      icon: <Mail size={22} />,
      label: t.contact.labels.email,
      value: (
        <a
          href={getMailto()}
          className="hover:text-brand-goldDark transition-colors break-all"
          data-testid="contact-email-link"
        >
          {COMPANY.email}
        </a>
      ),
      testId: "contact-row-email",
    },
    COMPANY.phone && {
      icon: <Phone size={22} />,
      label: t.contact.labels.phone,
      value: (
        <a
          href={getTel()}
          className="hover:text-brand-goldDark transition-colors"
          data-testid="contact-phone-link"
        >
          {COMPANY.phone}
        </a>
      ),
      testId: "contact-row-phone",
    },
    COMPANY.social.instagram.url && {
      icon: <Instagram size={22} />,
      label: t.contact.labels.instagram,
      value: (
        <a
          href={COMPANY.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-goldDark transition-colors"
          data-testid="contact-instagram-link"
        >
          {COMPANY.social.instagram.handle}
        </a>
      ),
      testId: "contact-row-instagram",
    },
    COMPANY.social.tiktok.url && {
      icon: <TikTokIcon size={22} />,
      label: t.contact.labels.tiktok,
      value: (
        <a
          href={COMPANY.social.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-goldDark transition-colors"
          data-testid="contact-tiktok-link"
        >
          {COMPANY.social.tiktok.handle}
        </a>
      ),
      testId: "contact-row-tiktok",
    },
    COMPANY.social.facebook.url && {
      icon: <Facebook size={22} />,
      label: t.contact.labels.facebook,
      value: (
        <a
          href={COMPANY.social.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-goldDark transition-colors"
          data-testid="contact-facebook-link"
        >
          {COMPANY.social.facebook.handle}
        </a>
      ),
      testId: "contact-row-facebook",
    },
  ].filter(Boolean);

  return (
    <>
      <PageHero
        title={t.contact.heroTitle.toUpperCase()}
        subtitle={t.contact.heroSubtitle}
        image={IMAGES.heroPages}
        testId="contacto-hero"
      />

      <section
        className="bg-brand-light py-20 md:py-28"
        data-testid="contacto-content"
      >
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: title + intro */}
            <div>
              <span className="eyebrow" data-testid="contacto-eyebrow">
                {t.contact.eyebrow}
              </span>
              <h2
                className="font-title uppercase text-5xl md:text-6xl mt-5 leading-[0.95] text-brand-dark"
                data-testid="contacto-title"
              >
                {t.contact.title}
              </h2>
              <p className="mt-6 max-w-md text-brand-dark/70 text-[15px] leading-relaxed">
                {t.contact.intro}
              </p>
              <div className="mt-8">
                <Link
                  href="/orcamento"
                  className="btn-gold"
                  data-testid="contacto-cta-quote"
                >
                  {t.cta.contact}
                </Link>
              </div>
            </div>

            {/* Right: contact list */}
            <ul className="space-y-5" data-testid="contacto-list">
              {items.map((item) => (
                <li
                  key={item.testId}
                  className="flex items-start gap-5"
                  data-testid={item.testId}
                >
                  <span className="w-14 h-14 shrink-0 bg-brand-gray flex items-center justify-center text-brand-dark">
                    {item.icon}
                  </span>
                  <div className="flex-1 bg-brand-gray px-5 py-4 flex flex-col justify-center min-h-[56px]">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand-dark/60">
                      {item.label}
                    </span>
                    <span className="text-brand-dark text-[15px] mt-1">
                      {item.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div
            className="mt-16 w-full h-[420px] md:h-[480px] overflow-hidden border border-brand-gray"
            data-testid="contacto-map"
          >
            <iframe
              src={getMapsEmbed()}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.85)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização PRUMO Soalheiro"
            />
          </div>
        </div>
      </section>
    </>
  );
}
